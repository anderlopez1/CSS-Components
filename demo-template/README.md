# demo-template — spec-driven demo sites

The Next.js template that renders every demo site Agent 3 generates. Built on
the **Untitled UI component system** ([CSS-Components](https://github.com/anderlopez1/CSS-Components)):
React Aria components, Tailwind v4, and semantic design tokens.

## How it works

1. Agent 3 (Claude, via the Batch API) emits a `site.spec.json` — business
   info, brand palette, and an ordered list of typed sections (see
   [lib/spec.ts](lib/spec.ts)).
2. The deploy step in `supabase/functions/agent3-site` fetches this folder
   from GitHub, overlays the generated spec (plus any custom sections in
   hybrid mode), and posts everything to the Vercel deployments API.
3. Vercel installs, builds (`output: "export"`), and serves a static site.

Because the sections are hand-built from Untitled UI components, layout
quality is guaranteed by construction — the model controls copy, section
choice, variants, palette, and photos.

## Key files

| File | Purpose |
|---|---|
| [lib/spec.ts](lib/spec.ts) | The spec contract between Agent 3 and the template |
| [lib/brand.ts](lib/brand.ts) | Palette name → `--color-brand-*` override (re-themes every component) |
| [lib/icons.tsx](lib/icons.tsx) | Curated, build-safe icon registry for feature cards |
| [components/sections/](components/sections/) | The 11 section components (variants included) |
| [components/custom/](components/custom/) | Hybrid-mode escape hatch — agent-written bespoke sections |
| [site.spec.json](site.spec.json) | Sample spec (Trattoria) used for local dev |

> **Keep in sync:** the schema/icon/palette lists embedded in
> `supabase/functions/agent3-site/index.ts` mirror `lib/spec.ts`,
> `lib/icons.tsx`, and `lib/brand.ts`. Change one → change both.

## Local development

```bash
npm install
npm run dev    # renders site.spec.json at localhost:3000
npm run build  # static export to out/
```

Photos render as labeled placeholders locally; real Pexels URLs are resolved
by the deploy step.

## Generation modes

Set in Supabase `pipeline_config`, key `site_generation` — picked up on the
next hourly run, no redeploy:

```json
{ "mode": "hybrid", "maxCustomSections": 2 }
```

- `spec` — spec-only, most reliable
- `hybrid` — spec + up to N bespoke React sections per site
- `codegen` — hybrid without the cap
