import type { CSSProperties, ReactNode } from "react";
import { Inter, Playfair_Display, Bodoni_Moda, Libre_Caslon_Text } from "next/font/google";
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

// Editorial display serifs. Each defines its own CSS variable; the chosen one
// is bound to --font-display below (globals.css routes editorial headings +
// .font-display through that variable). brand.fonts.display selects the face so
// each design direction can carry its own headline type; default is Playfair.
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-playfair" });
const bodoni = Bodoni_Moda({ subsets: ["latin"], weight: ["500", "600", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-bodoni" });
const caslon = Libre_Caslon_Text({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-caslon" });

const DISPLAY_VARS: Record<string, string> = {
    "Playfair Display": "--font-playfair",
    "Bodoni Moda": "--font-bodoni",
    "Libre Caslon Text": "--font-caslon",
};

const site = spec as unknown as SiteSpec;

export const metadata = {
    title: site.business.seoTitle,
    description: site.business.seoDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const brand = brandCss(site.brand.palette, site.brand.custom);
    const displayVar = DISPLAY_VARS[site.brand.fonts?.display ?? ""] ?? "--font-playfair";

    return (
        // "dark-mode" flips the entire Untitled UI token set site-wide;
        // "editorial" swaps headings to the serif display face + editorial rhythm.
        <html
            lang={site.business.lang}
            className={cx(
                inter.variable,
                playfair.variable,
                bodoni.variable,
                caslon.variable,
                site.brand.theme === "dark" && "dark-mode",
                site.brand.register === "editorial" && "editorial",
            )}
            // Bind the selected display face to the variable globals.css reads.
            style={{ "--font-display": `var(${displayVar})` } as CSSProperties}
        >
            <head>{brand && <style dangerouslySetInnerHTML={{ __html: brand }} />}</head>
            <body className="bg-primary font-body text-primary antialiased">{children}</body>
        </html>
    );
}
