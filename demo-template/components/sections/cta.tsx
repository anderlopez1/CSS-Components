import { Button } from "untitledui-components";
import type { CtaSection } from "@/lib/spec";

export function Cta({ section }: { section: CtaSection }) {
    return (
        <section className="bg-brand-section">
            <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
                <h2 className="text-display-sm font-semibold tracking-tight text-primary_on-brand sm:text-display-md">{section.headline}</h2>
                {section.sub && <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-tertiary_on-brand">{section.sub}</p>}
                <div className="mt-8">
                    <Button href={section.cta.href} size="xl" color="secondary">
                        {section.cta.label}
                    </Button>
                </div>
            </div>
        </section>
    );
}
