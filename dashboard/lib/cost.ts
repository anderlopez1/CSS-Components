// Pricing + aggregation for the cost tracker. Raw token counts live in the
// token_usage table (one row per Claude call, written by each agent's
// recordUsage helper); dollar cost is computed HERE at read time from the
// model_pricing config row — so a rate change (e.g. when Sonnet 5 intro
// pricing ends 2026-08-31) needs a config edit, not a redeploy, and
// retroactively reprices history.

import type { TokenUsage } from "./data";

export interface ModelRate {
    input: number; // USD per million input tokens
    output: number; // USD per million output tokens
}

export interface Pricing {
    models: Record<string, ModelRate>;
    batch_discount: number; // Batch API multiplier on the whole call (0.5 = 50% off)
    cache_read_multiplier: number; // × input rate for cache-read tokens
    cache_write_multiplier: number; // × input rate for cache-write tokens
}

// Fallback if the model_pricing config row is missing. Sonnet 5 figures are
// the intro rates (through 2026-08-31; then 3/15).
export const DEFAULT_PRICING: Pricing = {
    models: {
        "claude-sonnet-5": { input: 2, output: 10 },
        "claude-haiku-4-5": { input: 1, output: 5 },
        "claude-opus-4-8": { input: 5, output: 25 },
    },
    batch_discount: 0.5,
    cache_read_multiplier: 0.1,
    cache_write_multiplier: 1.25,
};

/** The API reports full model IDs (e.g. claude-haiku-4-5-20251001); rate-card
 * keys are aliases. Exact match first, then longest-prefix match. */
export function matchRate(model: string, pricing: Pricing): ModelRate | null {
    if (pricing.models[model]) return pricing.models[model];
    let best: { key: string; rate: ModelRate } | null = null;
    for (const [key, rate] of Object.entries(pricing.models)) {
        if (model.startsWith(key) && (!best || key.length > best.key.length)) best = { key, rate };
    }
    return best?.rate ?? null;
}

/** USD cost of one recorded call. Unknown models price at 0 (and are surfaced
 * separately so they don't silently vanish from the total). */
export function costUsd(row: TokenUsage, pricing: Pricing): number {
    const rate = matchRate(row.model, pricing);
    if (!rate) return 0;
    const discount = row.is_batch ? pricing.batch_discount : 1;
    const inputCost =
        (row.input_tokens * rate.input +
            row.cache_creation_tokens * rate.input * pricing.cache_write_multiplier +
            row.cache_read_tokens * rate.input * pricing.cache_read_multiplier) /
        1_000_000;
    const outputCost = (row.output_tokens * rate.output) / 1_000_000;
    return (inputCost + outputCost) * discount;
}

export function fmtUsd(n: number): string {
    if (n === 0) return "$0.00";
    if (n < 0.01) return `$${n.toFixed(4)}`;
    if (n < 1) return `$${n.toFixed(3)}`;
    return `$${n.toFixed(2)}`;
}

export function fmtTokens(n: number): string {
    if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
    if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
    return String(n);
}

export interface SpendBucket {
    key: string;
    calls: number;
    inputTokens: number; // includes cache write/read
    outputTokens: number;
    cost: number;
    unknownModel: boolean;
}

/** Aggregate usage rows by an arbitrary key (agent, model, …). */
export function aggregate(rows: TokenUsage[], pricing: Pricing, keyOf: (r: TokenUsage) => string): SpendBucket[] {
    const buckets = new Map<string, SpendBucket>();
    for (const r of rows) {
        const key = keyOf(r);
        const b = buckets.get(key) ?? { key, calls: 0, inputTokens: 0, outputTokens: 0, cost: 0, unknownModel: false };
        b.calls += 1;
        b.inputTokens += r.input_tokens + r.cache_creation_tokens + r.cache_read_tokens;
        b.outputTokens += r.output_tokens;
        b.cost += costUsd(r, pricing);
        if (!matchRate(r.model, pricing)) b.unknownModel = true;
        buckets.set(key, b);
    }
    return [...buckets.values()].sort((a, b) => b.cost - a.cost);
}
