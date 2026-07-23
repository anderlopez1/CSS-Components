import { Button } from "untitledui-components";
import type { CodeSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";
import { Eyebrow } from "@/components/typo";

/** Developer / code section: a dark code card beside copy + capability tags.
 * Signals "built for developers" — a SaaS staple. The code renders verbatim in
 * a monospace block (no client-side highlighter; the dark card + mono is the
 * effect). */
export function Code({ section }: { section: CodeSection }) {
    return (
        <section id={section.id} className={toneClass(section.tone)}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
                <div className="dark-mode overflow-hidden rounded-2xl border border-secondary bg-primary shadow-xl">
                    <div className="flex items-center justify-between border-b border-secondary px-4 py-2.5">
                        <div className="flex gap-1.5">
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                        </div>
                        {section.lang && <span className="text-xs text-quaternary">{section.lang}</span>}
                    </div>
                    <pre className="overflow-x-auto px-5 py-5 text-sm leading-relaxed text-secondary">
                        <code className="font-mono">{section.code}</code>
                    </pre>
                </div>
                <div>
                    <Eyebrow>{section.eyebrow}</Eyebrow>
                    <h2 className="mt-2 text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">
                        {section.headline}
                    </h2>
                    {section.body && <p className="mt-5 max-w-prose text-lg text-pretty text-tertiary">{section.body}</p>}
                    {section.tags && section.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {section.tags.map((t, i) => (
                                <span key={i} className="rounded-full border border-secondary px-3.5 py-1.5 text-sm font-medium text-secondary">
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}
                    {section.cta && (
                        <div className="mt-8">
                            <Button href={section.cta.href} size="lg" color="secondary">
                                {section.cta.label}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
