// Server-side data access for the dashboard. Queries Supabase PostgREST with
// the service-role key (RLS is enabled with no policies on pipeline tables, so
// only the service role can read). Credentials arrive as Vercel env vars,
// injected by the admin-deploy-dashboard edge function — they never live in
// this (public) repo. Locally, without credentials, every query returns [] so
// the layout can be developed against an empty state.

const URL_ = process.env.SUPABASE_URL ?? "";
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

export const hasCredentials = Boolean(URL_ && KEY);

async function sb<T>(path: string): Promise<T[]> {
    if (!hasCredentials) return [];
    try {
        const res = await fetch(`${URL_}/rest/v1/${path}`, {
            headers: { apikey: KEY, Authorization: `Bearer ${KEY}` },
            cache: "no-store",
        });
        if (!res.ok) return [];
        return (await res.json()) as T[];
    } catch {
        return [];
    }
}

// ---------------------------------------------------------------- row types

export interface Lead {
    id: string;
    name: string;
    category: string | null;
    status: string;
    source: string | null;
    created_at: string;
}

export interface SiteSpecLite {
    business?: { name?: string };
    brand?: { palette?: string; theme?: string };
    sections?: { type: string; variant?: string; tone?: string; component?: string }[];
}

export interface Site {
    id: string;
    lead_id: string;
    vercel_url: string | null;
    vercel_deployment_id: string | null;
    created_at: string;
    spec: SiteSpecLite | null;
}

export interface AgentRun {
    id: string;
    agent: string;
    detail: Record<string, string> | null;
    created_at: string;
}

export interface Batch {
    id: string;
    agent: string;
    batch_id: string;
    status: string;
    lead_ids: string[] | null;
    created_at: string;
    processed_at: string | null;
}

export interface OutreachEmail {
    id: string;
    status: string;
    sent_at: string | null;
}

export interface Reply {
    id: string;
    classification: string | null;
    needs_human: boolean | null;
}

export interface Refinement {
    lead_id: string;
    overall_score: number | null;
    ready_to_send: boolean | null;
    created_at: string;
}

export interface ConfigRow {
    key: string;
    value: unknown;
    updated_at: string;
}

export interface TokenUsage {
    id: string;
    agent: string;
    model: string;
    is_batch: boolean;
    input_tokens: number;
    output_tokens: number;
    cache_creation_tokens: number;
    cache_read_tokens: number;
    created_at: string;
}

// ------------------------------------------------------------------ queries

export async function fetchAll() {
    const [leads, sites, runs, batches, emails, replies, refinements, config, usage] = await Promise.all([
        sb<Lead>("leads?select=id,name,category,status,source,created_at&order=created_at.desc"),
        sb<Site>("sites?select=id,lead_id,vercel_url,vercel_deployment_id,created_at,spec&order=created_at.desc&limit=100"),
        sb<AgentRun>("agent_runs?select=id,agent,detail,created_at&order=created_at.desc&limit=30"),
        sb<Batch>("claude_batches?select=id,agent,batch_id,status,lead_ids,created_at,processed_at&order=created_at.desc&limit=15"),
        sb<OutreachEmail>("outreach_emails?select=id,status,sent_at"),
        sb<Reply>("replies?select=id,classification,needs_human"),
        sb<Refinement>("refinements?select=lead_id,overall_score,ready_to_send,created_at&order=created_at.desc"),
        sb<ConfigRow>("pipeline_config?select=key,value,updated_at"),
        // 5000 most recent calls ≈ months of pipeline volume at current cadence.
        sb<TokenUsage>(
            "token_usage?select=id,agent,model,is_batch,input_tokens,output_tokens,cache_creation_tokens,cache_read_tokens,created_at&order=created_at.desc&limit=5000",
        ),
    ]);
    return { leads, sites, runs, batches, emails, replies, refinements, config, usage };
}
