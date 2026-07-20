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
    headline: string;
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
    variant: "single-dark" | "grid";
    id?: string;
    headline?: string;
    items: TestimonialItem[];
}

export interface PricingTier {
    name: string;
    price: string;
    period?: string;
    description?: string;
    features: string[];
    highlighted?: boolean;
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
        /** Optional exact-hex overrides for individual stops, e.g. {"600": "#0f766e"} */
        custom?: Record<string, string>;
    };
    /** Footer credit, e.g. "Demo-Konzept erstellt von Kwipps" */
    agencyCredit: string;
    sections: Section[];
}
