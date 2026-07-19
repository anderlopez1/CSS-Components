import { cx } from "untitledui-components";
import type { StatsSection } from "@/lib/spec";

// Tailwind can only see literal class names — never build them dynamically.
const COLS: Record<number, string> = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
};

export function Stats({ section }: { section: StatsSection }) {
    return (
        <section className="border-y border-secondary bg-secondary">
            <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
                <dl className={cx("grid grid-cols-2 gap-8 text-center", COLS[Math.min(section.items.length, 4)])}>
                    {section.items.map((stat) => (
                        <div key={stat.label}>
                            <dd className="text-display-md font-semibold text-brand-tertiary">{stat.value}</dd>
                            <dt className="mt-2 text-sm font-medium text-tertiary">{stat.label}</dt>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
