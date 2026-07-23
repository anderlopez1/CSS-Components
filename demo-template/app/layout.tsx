import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { cx } from "untitledui-components";
import spec from "@/site.spec.json";
import { brandCss } from "@/lib/brand";
import type { SiteSpec } from "@/lib/spec";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

// Editorial display serif. Only takes visual effect when brand.register is
// "editorial" (see globals.css: `.editorial h1/h2/h3`), so approachable sites
// stay fully sans-serif; the face is always loaded via the CSS variable.
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-display",
});

const site = spec as unknown as SiteSpec;

export const metadata = {
    title: site.business.seoTitle,
    description: site.business.seoDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const brand = brandCss(site.brand.palette, site.brand.custom);

    return (
        // "dark-mode" flips the entire Untitled UI token set site-wide;
        // "editorial" swaps headings to the serif display face + editorial rhythm.
        <html
            lang={site.business.lang}
            className={cx(
                inter.variable,
                playfair.variable,
                site.brand.theme === "dark" && "dark-mode",
                site.brand.register === "editorial" && "editorial",
            )}
        >
            <head>{brand && <style dangerouslySetInnerHTML={{ __html: brand }} />}</head>
            <body className="bg-primary font-body text-primary antialiased">{children}</body>
        </html>
    );
}
