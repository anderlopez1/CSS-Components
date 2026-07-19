import { CheckCircle } from "@untitledui/icons";
import { Badge, Button, cx } from "untitledui-components";
import type { PricingSection } from "@/lib/spec";

export function Pricing({ section }: { section: PricingSection }) {
    return (
        <section id={section.id ?? "pricing"} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">{section.headline}</h2>
                {section.sub && <p className="mt-4 text-lg text-pretty text-tertiary">{section.sub}</p>}
            </div>
            <div className="mx-auto mt-12 grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3">
                {section.tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={cx(
                            "flex flex-col rounded-2xl border bg-primary p-8 shadow-sm",
                            tier.highlighted ? "border-brand ring-2 ring-brand" : "border-secondary",
                        )}
                    >
                        <div className="flex items-center justify-between gap-2">
                            <h3 className="text-lg font-semibold text-primary">{tier.name}</h3>
                            {tier.highlighted && (
                                <Badge color="brand" type="pill-color" size="md">
                                    Beliebt
                                </Badge>
                            )}
                        </div>
                        <p className="mt-4 flex items-baseline gap-1">
                            <span className="text-display-md font-semibold tracking-tight text-primary">{tier.price}</span>
                            {tier.period && <span className="text-sm font-medium text-tertiary">{tier.period}</span>}
                        </p>
                        {tier.description && <p className="mt-2 text-sm text-pretty text-tertiary">{tier.description}</p>}
                        <ul className="mt-8 flex-1 space-y-3">
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-3 text-sm text-tertiary">
                                    <CheckCircle className="size-5 shrink-0 text-fg-brand-primary" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8">
                            <Button href={tier.cta.href} size="lg" color={tier.highlighted ? "primary" : "secondary"} className="w-full">
                                {tier.cta.label}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
