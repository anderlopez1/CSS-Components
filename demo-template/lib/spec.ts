// Site spec — the contract between Agent 3 (Claude) and this template.
// The agent emits JSON matching SiteSpec; the template renders it. Design
// quality is fixed by the section components; the agent controls copy,
// section selection, variants, palette, and photos.

/** A photo slot. `query` is an English stock-photo search phrase; the deploy
 * step resolves it to a real Pexels URL before build. When `url` is absent
 * (local dev) a neutral placeholder renders instead. */
export interface Photo {
    query: string;
    url?: string | null;
    alt: string;
}

export interface NavLink {
    label: string;
    href: string;
}

/** Background treatment for a content section. "default" inherits the page
 * background, "muted" is a soft gray band, "dark" flips the section to the
 * dark-mode token set (dramatic accent band — use sparingly on light sites). */
export type SectionTone = "default" | "muted" | "dark";

export interface Cta {
    label: string;
    href: string;
}

// ---------------------------------------------------------------- sections

export interface HeaderSection {
    type: "header";
    logoText: string;
    /** Optional second word rendered in the brand color, e.g. logoText="Bella" logoAccent="Vista" */
    logoAccent?: string;
    nav: NavLink[];
    cta: Cta;
}

export interface HeroSection {
    type: "hero";
    /** image-bg: full-bleed photo behind the headline (best for visually rich
     * businesses); split-photo: text + framed photo side by side; centered:
     * centered text with the photo below. */
    variant: "image-bg" | "split-photo" | "centered";
    /** Small pill above the headline, e.g. "Seit 1998 in Zürich" */
    badge?: string;
    /** Uppercase micro-label above the headline (editorial "tell"), e.g.
     * "EST. 1998 · ZÜRICH". Rendered small and letter-spaced. Prefer this over
     * `badge` on editorial sites. */
    eyebrow?: string;
    /** Headline. Wrap a word/phrase in *asterisks* to render it as an italic
     * display accent, e.g. "The art of *slow* coffee". */
    headline: string;
    sub: string;
    primaryCta: Cta;
    secondaryCta?: Cta;
    photo: Photo;
}

export interface FeatureItem {
    /** Icon name from the curated registry (lib/icons.ts) */
    icon: string;
    title: string;
    body: string;
}

export interface FeaturesSection {
    type: "features";
    tone?: SectionTone;
    variant: "icon-cards" | "simple";
    id?: string;
    headline: string;
    sub?: string;
    items: FeatureItem[];
}

export interface StatsSection {
    type: "stats";
    tone?: SectionTone;
    items: { value: string; label: string }[];
}

export interface GallerySection {
    type: "gallery";
    tone?: SectionTone;
    /** Uppercase micro-label above the headline. */
    eyebrow?: string;
    headline: string;
    /** grid (default): even 3-across. collage: an editorial off-grid mosaic
     * with mixed sizes — more characterful, best for 5 photos. */
    variant?: "grid" | "collage";
    photos: Photo[];
}

export interface TestimonialItem {
    quote: string;
    name: string;
    /** e.g. "Stammkundin aus Wiedikon" */
    role?: string;
    /** 1–5, defaults to 5 */
    rating?: number;
}

export interface TestimonialsSection {
    type: "testimonials";
    tone?: SectionTone;
    /** single-dark: one quote on a brand band. grid: cards. pull-quote: one
     * large italic serif quote, centered on the page surface with hairline
     * rules — the most editorial treatment. */
    variant: "single-dark" | "grid" | "pull-quote";
    id?: string;
    eyebrow?: string;
    headline?: string;
    items: TestimonialItem[];
}

// A typographic menu / price list — the highest-value section for food & drink
// (and treatment lists for salons, spas, clinics). Rendered as two columns of
// grouped items with dotted price leaders; far stronger than an improvised
// custom section.
export interface MenuItem {
    name: string;
    /** Price with its currency symbol, e.g. "4,50 €" / "CHF 18". Optional (some
     * lists are prix-fixe or descriptive). */
    price?: string;
    /** One short line under the name. */
    desc?: string;
}

export interface MenuGroup {
    /** Group heading, e.g. "Vermuts", "Para picar", "Behandlungen". */
    title: string;
    items: MenuItem[];
}

export interface MenuSection {
    type: "menu";
    tone?: SectionTone;
    id?: string;
    eyebrow?: string;
    headline?: string;
    groups: MenuGroup[];
    /** Optional footnote, e.g. "Prices include VAT". */
    note?: string;
}

// ---- SaaS / "product" register sections --------------------------------

/** A row of partner/customer names as a "trusted by" strip (rendered as
 * refined monochrome wordmarks, since real logos aren't available). */
export interface TrustStripSection {
    type: "trust-strip";
    /** e.g. "TRUSTED BY INDUSTRY LEADERS" */
    eyebrow?: string;
    /** 4–6 company names. */
    logos: string[];
}

/** Product showcase: a UI/product screenshot beside copy + optional bullets.
 * The workhorse "here's what the product looks like" section. */
export interface ShowcaseSection {
    type: "showcase";
    tone?: SectionTone;
    id?: string;
    eyebrow?: string;
    headline: string;
    body?: string;
    /** Short capability bullets. */
    bullets?: string[];
    /** Product screenshot; use a "app dashboard ui" / "analytics screen" query. */
    photo: Photo;
    /** Which side the image sits on. Default "right". */
    imageSide?: "left" | "right";
    cta?: Cta;
}

/** Developer / code section: a syntax-agnostic code sample on a dark card with
 * copy + capability tags. Signals "built for developers". */
export interface CodeSection {
    type: "code";
    tone?: SectionTone;
    id?: string;
    eyebrow?: string;
    headline: string;
    body?: string;
    /** Language label, e.g. "python", "bash", "ts". */
    lang?: string;
    /** The code sample (verbatim, with newlines). */
    code: string;
    /** Capability chips, e.g. ["Low latency", "REST & WebSocket", "SDKs"]. */
    tags?: string[];
    cta?: Cta;
}

export interface PricingTier {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    highlighted?: boolean;
    /** Optional badge on the highlighted tier, in the PAGE language, e.g.
     * "Most popular" / "Más popular" / "Le plus choisi". Omit for no badge. */
    badge?: string;
    cta: Cta;
}

export interface PricingSection {
    type: "pricing";
    tone?: SectionTone;
    id?: string;
    headline: string;
    sub?: string;
    tiers: PricingTier[];
}

export interface FaqSection {
    type: "faq";
    tone?: SectionTone;
    headline: string;
    items: { q: string; a: string }[];
}

export interface CtaSection {
    type: "cta";
    headline: string;
    sub?: string;
    cta: Cta;
}

export interface ContactSection {
    type: "contact";
    tone?: SectionTone;
    id?: string;
    headline: string;
    address?: string;
    phone?: string;
    email?: string;
    hours?: { days: string; time: string }[];
    photo?: Photo;
}

export interface FooterSection {
    type: "footer";
    legalName: string;
    links?: NavLink[];
}

/** Hybrid-mode escape hatch: renders a component registered in
 * components/custom/index.tsx (written by the agent per-site). */
export interface CustomSection {
    type: "custom";
    component: string;
    /** Arbitrary props forwarded to the custom component. */
    props?: Record<string, unknown>;
    /** Photo slots for this section — resolved to real stock-photo URLs at
     * deploy time and passed to the component as a `photos` prop. */
    photos?: Photo[];
}

export type Section =
    | HeaderSection
    | HeroSection
    | FeaturesSection
    | StatsSection
    | GallerySection
    | TestimonialsSection
    | MenuSection
    | TrustStripSection
    | ShowcaseSection
    | CodeSection
    | PricingSection
    | FaqSection
    | CtaSection
    | ContactSection
    | FooterSection
    | CustomSection;

// ------------------------------------------------------------------- spec

export interface SiteSpec {
    business: {
        name: string;
        /** Used for <title> / meta description */
        seoTitle: string;
        seoDescription: string;
        /** BCP-47-ish, drives <html lang>: "de", "fr", "it", "en" */
        lang: string;
    };
    brand: {
        /** One of the palette names in lib/brand.ts */
        palette: string;
        /** Site-wide theme. "dark" flips the entire Untitled UI token set —
         * strong fit for premium/evening businesses (barbers, bars, tattoo,
         * upscale restaurants). Defaults to "light". */
        theme?: "light" | "dark";
        /** Design register (from the Stitch benchmark). "editorial" swaps
         * headings to a serif display face and signals a restrained, cinematic,
         * "quiet luxury" treatment — for fine dining, hotels, spas, galleries,
         * design studios, and premium professional services (law, advisory).
         * "approachable" (default) keeps the bright, sans-serif look for casual
         * / value / everyday local businesses. "product" is the modern-SaaS
         * register: a large geometric-sans display, near-monochrome ground,
         * product-visual heroes, trust strips and feature grids — for software /
         * SaaS / startup marketing sites. */
        register?: "approachable" | "editorial" | "product";
        /** Optional exact-hex overrides for individual stops, e.g. {"600": "#0f766e"} */
        custom?: Record<string, string>;
        /** Optional display-face selection (editorial sites). `display` is one
         * of the serif faces in lib/fonts.ts — e.g. "Bodoni Moda",
         * "Libre Caslon Text", "Playfair Display" (default). Lets each design
         * direction carry its own headline type instead of one house serif.
         * `body` is reserved for a future body-face override. */
        fonts?: { display?: string; body?: string };
    };
    /** Footer credit, e.g. "Demo-Konzept erstellt von Kwipps" */
    agencyCredit: string;
    sections: Section[];
}
