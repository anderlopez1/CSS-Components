import type { FC, ReactNode } from "react";
import { Badge, BadgeWithDot, FeaturedIcon, cx } from "untitledui-components";

type BadgeColor = "gray" | "brand" | "error" | "warning" | "success" | "blue" | "indigo" | "purple" | "pink" | "orange";

/** Lead pipeline status → badge color, so states read at a glance. */
export const STATUS_COLORS: Record<string, BadgeColor> = {
    new: "gray",
    needs_email: "gray",
    enriched: "blue",
    briefed: "blue",
    building: "warning",
    site_ready: "indigo",
    emailed: "success",
    preview_sent: "purple",
    replied: "pink",
    converted: "success",
    paused: "orange",
    error: "error",
};

export function StatusBadge({ status }: { status: string }) {
    return (
        <BadgeWithDot color={STATUS_COLORS[status] ?? "gray"} type="pill-color" size="sm">
            {status}
        </BadgeWithDot>
    );
}

export function Kpi({ icon, label, value, hint }: { icon: FC<{ className?: string }>; label: string; value: string | number; hint?: string }) {
    return (
        <div className="flex items-start gap-4 rounded-2xl border border-secondary bg-primary p-5 shadow-sm">
            <FeaturedIcon icon={icon} color="brand" theme="light" size="md" />
            <div className="min-w-0">
                <p className="text-sm font-medium text-tertiary">{label}</p>
                <p className="mt-1 text-display-sm font-semibold text-primary">{value}</p>
                {hint && <p className="mt-0.5 truncate text-xs text-quaternary">{hint}</p>}
            </div>
        </div>
    );
}

export function SectionCard({ title, action, children, className }: { title: string; action?: ReactNode; children: ReactNode; className?: string }) {
    return (
        <section className={cx("rounded-2xl border border-secondary bg-primary shadow-sm", className)}>
            <div className="flex items-center justify-between gap-4 border-b border-secondary px-6 py-4">
                <h2 className="text-lg font-semibold text-primary">{title}</h2>
                {action}
            </div>
            <div className="p-0">{children}</div>
        </section>
    );
}

export function Th({ children, className }: { children?: ReactNode; className?: string }) {
    return <th className={cx("px-6 py-3 text-left text-xs font-semibold text-quaternary uppercase", className)}>{children}</th>;
}

export function Td({ children, className, colSpan }: { children?: ReactNode; className?: string; colSpan?: number }) {
    return (
        <td colSpan={colSpan} className={cx("px-6 py-3.5 align-middle text-sm text-tertiary", className)}>
            {children}
        </td>
    );
}

export function ThemeBadge({ theme }: { theme?: string }) {
    // "modern" badges are gray-only in the design system — use pill-color for hues.
    return theme === "dark" ? (
        <Badge color="gray" type="pill-color" size="sm">
            ● dark
        </Badge>
    ) : (
        <Badge color="warning" type="pill-color" size="sm">
            ○ light
        </Badge>
    );
}

const PALETTE_BADGE: Record<string, BadgeColor> = {
    emerald: "success",
    teal: "success",
    sky: "blue",
    blue: "blue",
    indigo: "indigo",
    violet: "purple",
    rose: "pink",
    red: "error",
    orange: "orange",
    amber: "warning",
};

export function PaletteBadge({ palette }: { palette?: string }) {
    if (!palette) return <Badge color="gray" size="sm">—</Badge>;
    return (
        <Badge color={PALETTE_BADGE[palette] ?? "gray"} type="pill-color" size="sm">
            {palette}
        </Badge>
    );
}

export function timeAgo(iso: string): string {
    const s = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
    if (s < 90) return `${Math.round(s)}s ago`;
    if (s < 5400) return `${Math.round(s / 60)}m ago`;
    if (s < 129600) return `${Math.round(s / 3600)}h ago`;
    return `${Math.round(s / 86400)}d ago`;
}
