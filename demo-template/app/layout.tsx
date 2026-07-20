import type { ReactNode } from "react";
import { Inter } from "next/font/google";
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

const site = spec as unknown as SiteSpec;

export const metadata = {
    title: site.business.seoTitle,
    description: site.business.seoDescription,
};

export default function RootLayout({ children }: { children: ReactNode }) {
    const brand = brandCss(site.brand.palette, site.brand.custom);

    return (
        // "dark-mode" flips the entire Untitled UI token set site-wide.
        <html lang={site.business.lang} className={cx(inter.variable, site.brand.theme === "dark" && "dark-mode")}>
            <head>{brand && <style dangerouslySetInnerHTML={{ __html: brand }} />}</head>
            <body className="bg-primary font-body text-primary antialiased">{children}</body>
        </html>
    );
}
