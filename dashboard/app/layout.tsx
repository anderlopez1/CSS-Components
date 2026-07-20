import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata = {
    title: "Kwipps Ops — pipeline dashboard",
    description: "Agents, designs, versions, and batches of the Kwipps demo-site pipeline.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-secondary font-body text-primary antialiased">{children}</body>
        </html>
    );
}
