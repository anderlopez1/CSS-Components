import { Avatar, RatingStars } from "untitledui-components";
import type { TestimonialsSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";

function initials(name: string): string {
    return name
        .split(/\s+/)
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

export function Testimonials({ section }: { section: TestimonialsSection }) {
    if (section.variant === "pull-quote") {
        // One large italic serif quote — the quietest, most editorial review
        // treatment. Hairline rules above and below; no cards, no avatars.
        const t = section.items[0];
        if (!t) return null;
        return (
            <section id={section.id ?? "reviews"} className={section.tone ? toneClass(section.tone) : ""}>
                <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
                    <span aria-hidden="true" className="mx-auto block h-px w-16 bg-brand-solid" />
                    <blockquote className="mt-10 font-display text-2xl leading-snug text-pretty text-primary italic sm:text-3xl md:text-4xl">
                        “{t.quote}”
                    </blockquote>
                    <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-brand-secondary uppercase">
                        {t.name}
                        {t.role ? ` · ${t.role}` : ""}
                    </p>
                    <span aria-hidden="true" className="mx-auto mt-10 block h-px w-16 bg-brand-solid" />
                </div>
            </section>
        );
    }

    if (section.variant === "single-dark") {
        const t = section.items[0];
        if (!t) return null;
        return (
            <section id={section.id ?? "reviews"} className="bg-brand-section">
                <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8">
                    <div className="flex justify-center">
                        <RatingStars rating={t.rating ?? 5} aria-hidden="true" />
                    </div>
                    <blockquote className="mt-6 text-display-xs font-medium text-pretty text-primary_on-brand sm:text-display-sm">
                        “{t.quote}”
                    </blockquote>
                    <div className="mt-8 flex items-center justify-center gap-3">
                        <Avatar initials={initials(t.name)} size="md" alt={t.name} />
                        <div className="text-left">
                            <p className="text-sm font-semibold text-primary_on-brand">{t.name}</p>
                            {t.role && <p className="text-sm text-tertiary_on-brand">{t.role}</p>}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // grid
    return (
        <section id={section.id ?? "reviews"} className={section.tone ? toneClass(section.tone) : "bg-secondary"}>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {section.headline && (
                    <h2 className="text-center text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">
                        {section.headline}
                    </h2>
                )}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((t) => (
                        <figure key={t.name} className="flex flex-col rounded-2xl border border-secondary bg-primary p-8 shadow-sm">
                            <RatingStars rating={t.rating ?? 5} aria-hidden="true" />
                            <blockquote className="mt-4 flex-1 text-pretty text-tertiary">“{t.quote}”</blockquote>
                            <figcaption className="mt-6 flex items-center gap-3">
                                <Avatar initials={initials(t.name)} size="md" alt={t.name} />
                                <div>
                                    <p className="text-sm font-semibold text-primary">{t.name}</p>
                                    {t.role && <p className="text-sm text-tertiary">{t.role}</p>}
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
