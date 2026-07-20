import { CurrencyDollarCircle, Flash, Mail01, MessageChatCircle, Palette, Users01 } from "@untitledui/icons";
import { Badge, BadgeWithDot, Button } from "untitledui-components";
import { aggregate, costUsd, DEFAULT_PRICING, fmtTokens, fmtUsd, type Pricing } from "@/lib/cost";
import { fetchAll, hasCredentials, type Site } from "@/lib/data";
import { Kpi, PaletteBadge, SectionCard, StatusBadge, Td, Th, ThemeBadge, timeAgo } from "@/components/ui";

// Fresh pipeline data on every request — never cache an ops view.
export const dynamic = "force-dynamic";

const AGENT_LABELS: Record<string, string> = {
    "agent1-scout": "1 · Scout",
    "agent2-brief": "2 · Brief",
    "agent3-site": "3 · Site",
    "agent4-outreach": "4 · Outreach",
    "agent5-triage": "5 · Triage",
    "agent6-report": "6 · Report",
    "agent7-enrich": "7 · Enrich",
    "agent8-refinement": "8 · QA",
};

function specSummary(site: Site) {
    const sections = site.spec?.sections ?? [];
    return {
        name: site.spec?.business?.name,
        theme: site.spec?.brand?.theme ?? "light",
        palette: site.spec?.brand?.palette,
        hero: sections.find((s) => s.type === "hero")?.variant,
        nSections: sections.length,
        custom: sections.filter((s) => s.type === "custom").map((s) => s.component ?? "custom"),
    };
}

export default async function Page() {
    const { leads, sites, runs, batches, emails, replies, refinements, config, usage } = await fetchAll();

    // ---- derived stats -----------------------------------------------------
    const statusCounts = new Map<string, number>();
    for (const l of leads) statusCounts.set(l.status, (statusCounts.get(l.status) ?? 0) + 1);
    const emailsSent = emails.filter((e) => e.sent_at).length;
    const needsHuman = replies.filter((r) => r.needs_human).length;
    const openBatches = batches.filter((b) => b.status === "in_progress").length;

    // Version = position of a site among all sites for the same lead (oldest = v1).
    const versionsByLead = new Map<string, string[]>();
    for (const s of [...sites].sort((a, b) => a.created_at.localeCompare(b.created_at))) {
        const arr = versionsByLead.get(s.lead_id) ?? [];
        arr.push(s.id);
        versionsByLead.set(s.lead_id, arr);
    }
    const versionOf = (s: Site) => (versionsByLead.get(s.lead_id)?.indexOf(s.id) ?? 0) + 1;

    const leadName = new Map(leads.map((l) => [l.id, l.name]));
    const latestScore = new Map<string, number>();
    for (const r of [...refinements].reverse()) if (r.overall_score != null) latestScore.set(r.lead_id, r.overall_score);

    const cfg = new Map(config.map((c) => [c.key, c.value]));
    const gen = (cfg.get("site_generation") ?? {}) as { mode?: string; maxCustomSections?: number };
    const models = (cfg.get("models") ?? {}) as Record<string, string>;

    // ---- spend (tokens × rate card) ----------------------------------------
    const pricing = { ...DEFAULT_PRICING, ...((cfg.get("model_pricing") ?? {}) as Partial<Pricing>) };
    const totalSpend = usage.reduce((sum, r) => sum + costUsd(r, pricing), 0);
    const spendByAgent = aggregate(usage, pricing, (r) => r.agent);
    const spendByModel = aggregate(usage, pricing, (r) => r.model);
    const trackingSince = usage.length ? usage[usage.length - 1].created_at : null;

    return (
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            {/* ---------------------------------------------------- header --- */}
            <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h1 className="text-display-xs font-semibold text-primary">
                        Kwipps <span className="text-brand-secondary">Ops</span>
                    </h1>
                    <p className="mt-1 text-sm text-tertiary">Agents, designs & versions across the demo-site pipeline.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge color={gen.mode === "spec" ? "blue" : gen.mode === "codegen" ? "warning" : "brand"} type="pill-color" size="md">
                        mode: {gen.mode ?? "hybrid"}
                    </Badge>
                    <Button href="https://github.com/anderlopez1/agentic-agency" color="secondary" size="sm">
                        Pipeline repo
                    </Button>
                    <Button href="https://supabase.com/dashboard/project/nebrrtkdrsljywhkxxrs" color="secondary" size="sm">
                        Supabase
                    </Button>
                </div>
            </header>

            {!hasCredentials && (
                <div className="mt-6 rounded-xl border border-error_subtle bg-error-primary px-4 py-3 text-sm text-error-primary">
                    No Supabase credentials in the environment — showing an empty dashboard. Deploy via the
                    admin-deploy-dashboard edge function to inject them.
                </div>
            )}

            {/* ------------------------------------------------------- KPIs --- */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                <Kpi icon={Users01} label="Leads" value={leads.length} hint={`${statusCounts.get("briefed") ?? 0} briefed`} />
                <Kpi icon={Palette} label="Designs built" value={sites.length} hint={`${sites.filter((s) => s.spec).length} spec-driven`} />
                <Kpi icon={Mail01} label="Emails sent" value={emailsSent} hint={`${emails.length} drafted`} />
                <Kpi icon={MessageChatCircle} label="Replies" value={replies.length} hint={`${needsHuman} need a human`} />
                <Kpi icon={Flash} label="Open batches" value={openBatches} hint={`${batches.length} recent total`} />
                <Kpi
                    icon={CurrencyDollarCircle}
                    label="Total spend"
                    value={fmtUsd(totalSpend)}
                    hint={trackingSince ? `${usage.length} calls since ${trackingSince.slice(0, 10)}` : "no usage recorded yet"}
                />
            </div>

            {/* --------------------------------------------- funnel + config --- */}
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <SectionCard title="Pipeline funnel" className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-3 px-6 py-5">
                        {[...statusCounts.entries()]
                            .sort((a, b) => b[1] - a[1])
                            .map(([status, n]) => (
                                <div key={status} className="flex items-center gap-2 rounded-lg border border-secondary bg-secondary px-3 py-2">
                                    <StatusBadge status={status} />
                                    <span className="text-sm font-semibold text-primary">{n}</span>
                                </div>
                            ))}
                        {statusCounts.size === 0 && <p className="text-sm text-quaternary">No leads yet.</p>}
                    </div>
                </SectionCard>

                <SectionCard title="Generation config">
                    <dl className="space-y-3 px-6 py-5 text-sm">
                        <div className="flex justify-between gap-4">
                            <dt className="text-tertiary">Mode</dt>
                            <dd className="font-medium text-primary">{gen.mode ?? "hybrid"}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                            <dt className="text-tertiary">Max custom sections</dt>
                            <dd className="font-medium text-primary">{gen.maxCustomSections ?? 2}</dd>
                        </div>
                        <div className="flex justify-between gap-4">
                            <dt className="text-tertiary">Site batch size</dt>
                            <dd className="font-medium text-primary">{String(cfg.get("site_batch_size") ?? 2)}</dd>
                        </div>
                        {Object.entries(models).map(([agent, model]) => (
                            <div key={agent} className="flex justify-between gap-4">
                                <dt className="text-tertiary">Model · {agent}</dt>
                                <dd className="truncate font-medium text-primary">{model}</dd>
                            </div>
                        ))}
                    </dl>
                </SectionCard>
            </div>

            {/* ------------------------------------------------------ spend --- */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <SectionCard title="Spend by agent">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[480px]">
                            <thead className="border-b border-secondary bg-secondary">
                                <tr>
                                    <Th>Agent</Th>
                                    <Th>Calls</Th>
                                    <Th>Tokens in</Th>
                                    <Th>Tokens out</Th>
                                    <Th className="text-right">Cost</Th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {spendByAgent.map((b) => (
                                    <tr key={b.key}>
                                        <Td className="whitespace-nowrap">
                                            <Badge color="brand" type="pill-color" size="sm">
                                                {AGENT_LABELS[b.key] ?? b.key}
                                            </Badge>
                                        </Td>
                                        <Td>{b.calls}</Td>
                                        <Td>{fmtTokens(b.inputTokens)}</Td>
                                        <Td>{fmtTokens(b.outputTokens)}</Td>
                                        <Td className="text-right font-medium text-primary">{fmtUsd(b.cost)}</Td>
                                    </tr>
                                ))}
                                {spendByAgent.length > 0 && (
                                    <tr className="bg-secondary">
                                        <Td className="font-semibold text-primary">Total</Td>
                                        <Td className="font-semibold text-primary">{usage.length}</Td>
                                        <Td className="font-semibold text-primary">{fmtTokens(spendByAgent.reduce((s, b) => s + b.inputTokens, 0))}</Td>
                                        <Td className="font-semibold text-primary">{fmtTokens(spendByAgent.reduce((s, b) => s + b.outputTokens, 0))}</Td>
                                        <Td className="text-right font-semibold text-brand-secondary">{fmtUsd(totalSpend)}</Td>
                                    </tr>
                                )}
                                {spendByAgent.length === 0 && (
                                    <tr>
                                        <Td className="py-8 text-center" colSpan={5 as never}>
                                            No usage recorded yet — tracking starts with the first Claude call after 2026-07-20.
                                        </Td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </SectionCard>

                <SectionCard title="Spend by model">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[420px]">
                            <thead className="border-b border-secondary bg-secondary">
                                <tr>
                                    <Th>Model</Th>
                                    <Th>Calls</Th>
                                    <Th>Rate (in/out per MTok)</Th>
                                    <Th className="text-right">Cost</Th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {spendByModel.map((b) => {
                                    const rate = pricing.models[b.key] ?? Object.entries(pricing.models).find(([k]) => b.key.startsWith(k))?.[1];
                                    return (
                                        <tr key={b.key}>
                                            <Td className="max-w-56 truncate font-mono text-xs">{b.key}</Td>
                                            <Td>{b.calls}</Td>
                                            <Td className="whitespace-nowrap">
                                                {rate ? (
                                                    `$${rate.input} / $${rate.output}`
                                                ) : (
                                                    <BadgeWithDot color="warning" type="pill-color" size="sm">
                                                        no rate — add to model_pricing
                                                    </BadgeWithDot>
                                                )}
                                            </Td>
                                            <Td className="text-right font-medium text-primary">{fmtUsd(b.cost)}</Td>
                                        </tr>
                                    );
                                })}
                                {spendByModel.length === 0 && (
                                    <tr>
                                        <Td className="py-8 text-center" colSpan={4 as never}>
                                            No usage recorded yet.
                                        </Td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <p className="border-t border-secondary px-6 py-3 text-xs text-quaternary">
                        Priced from pipeline_config.model_pricing (batch calls ×{pricing.batch_discount}, cache reads ×
                        {pricing.cache_read_multiplier}). Sonnet 5 intro pricing ends 2026-08-31 — update the config row then.
                    </p>
                </SectionCard>
            </div>

            {/* ---------------------------------------------------- designs --- */}
            <SectionCard title="Designs & versions" className="mt-6">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px]">
                        <thead className="border-b border-secondary bg-secondary">
                            <tr>
                                <Th>Business</Th>
                                <Th>Version</Th>
                                <Th>Theme</Th>
                                <Th>Palette</Th>
                                <Th>Hero</Th>
                                <Th>Sections</Th>
                                <Th>Custom</Th>
                                <Th>QA</Th>
                                <Th>Created</Th>
                                <Th />
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-secondary">
                            {sites.map((s) => {
                                const info = specSummary(s);
                                const score = latestScore.get(s.lead_id);
                                return (
                                    <tr key={s.id}>
                                        <Td className="font-medium text-primary">{info.name ?? leadName.get(s.lead_id) ?? "—"}</Td>
                                        <Td>
                                            <Badge color="gray" type="modern" size="sm">
                                                v{versionOf(s)}
                                            </Badge>
                                        </Td>
                                        <Td>{s.spec ? <ThemeBadge theme={info.theme} /> : <Badge color="gray" size="sm">HTML</Badge>}</Td>
                                        <Td>
                                            <PaletteBadge palette={info.palette} />
                                        </Td>
                                        <Td>{info.hero ?? "—"}</Td>
                                        <Td>{s.spec ? info.nSections : "—"}</Td>
                                        <Td className="max-w-48 truncate">{info.custom.length ? info.custom.join(", ") : "—"}</Td>
                                        <Td>
                                            {score != null ? (
                                                <BadgeWithDot color={score >= 8 ? "success" : score >= 6 ? "warning" : "error"} type="pill-color" size="sm">
                                                    {score}/10
                                                </BadgeWithDot>
                                            ) : (
                                                "—"
                                            )}
                                        </Td>
                                        <Td className="whitespace-nowrap">{timeAgo(s.created_at)}</Td>
                                        <Td>
                                            {s.vercel_url && (
                                                <Button href={s.vercel_url} color="link-color" size="sm">
                                                    Open ↗
                                                </Button>
                                            )}
                                        </Td>
                                    </tr>
                                );
                            })}
                            {sites.length === 0 && (
                                <tr>
                                    <Td className="py-8 text-center" colSpan={10 as never}>
                                        No designs yet.
                                    </Td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </SectionCard>

            {/* --------------------------------------- agent activity + batches */}
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
                <SectionCard title="Agent activity">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[480px]">
                            <thead className="border-b border-secondary bg-secondary">
                                <tr>
                                    <Th>Agent</Th>
                                    <Th>Result</Th>
                                    <Th>When</Th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {runs.map((r) => {
                                    const entries = Object.entries(r.detail ?? {});
                                    const hasError = entries.some(([, v]) => String(v).startsWith("error"));
                                    return (
                                        <tr key={r.id}>
                                            <Td className="whitespace-nowrap">
                                                <Badge color={hasError ? "error" : "brand"} type="pill-color" size="sm">
                                                    {AGENT_LABELS[r.agent] ?? r.agent}
                                                </Badge>
                                            </Td>
                                            <Td className="max-w-md">
                                                <span className="line-clamp-2 break-all">
                                                    {entries.length
                                                        ? entries.map(([k, v]) => `${k.slice(0, 24)}: ${String(v).slice(0, 60)}`).join(" · ")
                                                        : "no-op"}
                                                </span>
                                            </Td>
                                            <Td className="whitespace-nowrap">{timeAgo(r.created_at)}</Td>
                                        </tr>
                                    );
                                })}
                                {runs.length === 0 && (
                                    <tr>
                                        <Td className="py-8 text-center" colSpan={3 as never}>
                                            No agent runs yet.
                                        </Td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </SectionCard>

                <SectionCard title="Claude batches">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[420px]">
                            <thead className="border-b border-secondary bg-secondary">
                                <tr>
                                    <Th>Batch</Th>
                                    <Th>Leads</Th>
                                    <Th>Status</Th>
                                    <Th>Created</Th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-secondary">
                                {batches.map((b) => (
                                    <tr key={b.id}>
                                        <Td className="font-mono text-xs">{b.batch_id.slice(0, 18)}…</Td>
                                        <Td>{b.lead_ids?.length ?? 0}</Td>
                                        <Td>
                                            <BadgeWithDot
                                                color={b.status === "processed" ? "success" : b.status === "in_progress" ? "warning" : "gray"}
                                                type="pill-color"
                                                size="sm"
                                            >
                                                {b.status}
                                            </BadgeWithDot>
                                        </Td>
                                        <Td className="whitespace-nowrap">{timeAgo(b.created_at)}</Td>
                                    </tr>
                                ))}
                                {batches.length === 0 && (
                                    <tr>
                                        <Td className="py-8 text-center" colSpan={4 as never}>
                                            No batches yet.
                                        </Td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </SectionCard>
            </div>

            <footer className="mt-8 pb-4 text-center text-xs text-quaternary">
                Kwipps internal · data refreshes on every load · protected by Vercel authentication
            </footer>
        </main>
    );
}
