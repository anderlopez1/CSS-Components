# CSS-Components — Untitled UI component library & site template

One repo, three things:

1. **`untitledui-components`** — a React component library (200+ components) built on
   [Untitled UI React](https://www.untitledui.com/react): React 19, React Aria,
   Tailwind CSS v4, TypeScript, and a full semantic design-token system.
   Installable in any project straight from GitHub — no npm registry needed.
2. **[`demo-template/`](demo-template/)** — a spec-driven Next.js site template that
   renders a `site.spec.json` using this library. It powers the automated demo-site
   pipeline in the (private) `agentic-agency` repo: an AI agent writes the spec, the
   template guarantees the design quality. See [demo-template/README.md](demo-template/README.md).
3. **The original Untitled UI Next.js starter kit** (`src/app/…`) — still runs with
   `npm run dev` for browsing components locally.

## Using the component library in your project

```bash
npm install github:anderlopez1/CSS-Components
```

```tsx
// 1. Import the styles once, in your global stylesheet:
//    @import "untitledui-components/styles";
// 2. Use the components:
import { Button, Badge, Input, FeaturedIcon, cx } from "untitledui-components";

<Button size="lg" color="primary">Get started</Button>
```

The package ships its compiled `dist/` in the repo, so installs are instant and need
no build step or GitHub credentials (the repo is public).

### Theming

Every brand-colored token (`bg-brand-solid`, `text-brand-secondary`, …) chains
through `var(--color-brand-{25..950})` — override those variables at `:root` to
re-theme the entire system:

```css
:root {
    --color-brand-600: #0d9488; /* teal instead of the default purple */
    /* … override the full 25–950 scale for best results */
}
```

## Developing the library

Component source lives in `src/components/`; the public API is `src/index.ts`.

```bash
npm run dev        # browse components via the Next.js starter kit
npm run build:lib  # compile the library to dist/ (tsc + tsc-alias)
```

**⚠️ After changing `src/`, always run `npm run build:lib` and commit the updated
`dist/`** — consumers install the committed dist, not the source.

Conventions (see [CLAUDE.md](CLAUDE.md) for the full guide): kebab-case filenames,
`Aria*`-prefixed react-aria-components imports, semantic color tokens only
(`text-primary`, not `text-gray-900`).

## Repo map

| Path | What |
|---|---|
| `src/components/` | Component source (base / application / foundations / marketing / shared-assets) |
| `src/index.ts` | Library entry point — everything exported here is public API |
| `src/styles/` | Tailwind v4 theme: semantic tokens, typography (shipped with the package) |
| `dist/` | Compiled library (committed — keep in sync with src) |
| `demo-template/` | Spec-driven demo-site template (own README) |
| `src/app/` | Starter-kit pages for local component browsing |

## Upstream & license

Based on the official [Untitled UI React](https://www.untitledui.com/react) starter
kit ([docs](https://www.untitledui.com/react/docs/introduction) ·
[Figma](https://www.untitledui.com/figma) · [icons](https://www.untitledui.com/react/resources/icons)).
The open-source components are MIT-licensed; this license applies to the starter kit
and the components in this repository only — [Untitled UI React PRO](https://www.untitledui.com/react)
is subject to a separate [license agreement](https://www.untitledui.com/license).
