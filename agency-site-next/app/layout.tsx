import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { cx } from "untitledui-components";
import { brandCss } from "@/lib/brand";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

// Editorial display serif — the register's signature. Loaded as a CSS variable
// and applied to headings by globals.css (`.editorial h1/h2/h3`).
const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-display",
});

// Kwipps brand = a deep warm bronze (our amber, editorialised). Overriding the
// Untitled UI brand scale keeps any library component (Button, Badge, …) on
// the same accent as our hand-authored editorial elements.
const BRONZE = {
    "25": "#fdf8f2", "50": "#fbeadc", "100": "#f6d3ba", "200": "#eab68f", "300": "#dd9663",
    "400": "#c9762f", "500": "#b0611f", "600": "#98501a", "700": "#7c4116", "800": "#633414",
    "900": "#4f2a12", "950": "#2c1608",
};

export const metadata = {
    title: "Kwipps — Your new website, built before you pay",
    description:
        "Kwipps builds websites for local businesses. You see your finished demo website free — only when you like it do we go live.",
    icons: { icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='8' fill='%23b0611f'/></svg>" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const brand = brandCss("", BRONZE);
    return (
        <html lang="en" className={cx(inter.variable, playfair.variable, "editorial")}>
            <head><style dangerouslySetInnerHTML={{ __html: brand }} /></head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
