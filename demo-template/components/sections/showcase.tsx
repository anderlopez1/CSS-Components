import { Button } from "untitledui-components";
import { Photo } from "@/components/photo";
import type { ShowcaseSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";
import { Eyebrow } from "@/components/typo";

/** Product showcase: copy + capability bullets beside a product screenshot in a
 * framed browser-ish card. The "here's the product" workhorse for SaaS sites. */
export function Showcase({ section }: { section: ShowcaseSection }) {
    const imageLeft = section.imageSide === "left";
    return (
        <section id={section.id} className={toneClass(section.tone)}>
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
                <div className={imageLeft ? "lg:order-2" : ""}>
                    <Eyebrow>{section.eyebrow}</Eyebrow>
                    <h2 className="mt-2 text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">
                        {section.headline}
                    </h2>
                    {section.body && <p className="mt-5 max-w-prose text-lg text-pretty text-tertiary">{section.body}</p>}
                    {section.bullets && section.bullets.length > 0 && (
                        <ul className="mt-6 flex flex-col gap-3">
                            {section.bullets.map((b, i) => (
                                <li key={i} className="flex gap-3 text-secondary">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-solid" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    {section.cta && (
                        <div className="mt-8">
                            <Button href={section.cta.href} size="lg">
                                {section.cta.label}
                            </Button>
                        </div>
                    )}
                </div>
                <div className={imageLeft ? "lg:order-1" : ""}>
                    {/* Browser-chrome frame so a screenshot reads as product UI. */}
                    <div className="overflow-hidden rounded-2xl border border-secondary bg-secondary shadow-xl">
                        <div className="flex items-center gap-1.5 border-b border-secondary px-4 py-3">
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                            <span className="h-2.5 w-2.5 rounded-full bg-quaternary/40" />
                        </div>
                        <Photo photo={section.photo} kind="hero" className="!rounded-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
