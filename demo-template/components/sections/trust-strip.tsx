import type { TrustStripSection } from "@/lib/spec";

/** "Trusted by" strip — company names as restrained monochrome wordmarks
 * (real logos aren't available), evenly spaced and low-contrast so they read
 * as social proof without shouting. */
export function TrustStrip({ section }: { section: TrustStripSection }) {
    return (
        <section className="border-y border-secondary bg-primary">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                {section.eyebrow && (
                    <p className="text-center text-xs font-semibold tracking-[0.2em] text-tertiary uppercase">{section.eyebrow}</p>
                )}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-16">
                    {section.logos.map((name, i) => (
                        <span key={i} className="text-lg font-semibold tracking-tight text-quaternary sm:text-xl">
                            {name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
