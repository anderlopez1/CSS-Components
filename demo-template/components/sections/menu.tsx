import type { MenuSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";
import { Eyebrow } from "@/components/typo";

/** Typographic menu / price list. Two columns of grouped items, each item a
 * name and price joined by a dotted leader — the classic printed-menu move
 * that reads far more "designed" than a plain list or an improvised section. */
export function Menu({ section }: { section: MenuSection }) {
    return (
        <section id={section.id ?? "menu"} className={toneClass(section.tone)}>
            <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                {(section.eyebrow || section.headline) && (
                    <div className="mb-12 text-center">
                        <Eyebrow>{section.eyebrow}</Eyebrow>
                        {section.headline && (
                            <h2 className="mt-2 text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">
                                {section.headline}
                            </h2>
                        )}
                    </div>
                )}
                <div className="grid gap-x-16 gap-y-12 sm:grid-cols-2">
                    {section.groups.map((group, gi) => (
                        <div key={gi}>
                            <h3 className="border-b border-secondary pb-3 text-xs font-semibold tracking-[0.2em] text-brand-secondary uppercase">
                                {group.title}
                            </h3>
                            <ul className="mt-6 flex flex-col gap-5">
                                {group.items.map((item, ii) => (
                                    <li key={ii}>
                                        <div className="flex items-baseline gap-2">
                                            <span className="font-display text-lg font-medium text-primary">{item.name}</span>
                                            <span
                                                className="mt-1 h-px flex-1 border-b border-dotted border-secondary"
                                                aria-hidden="true"
                                            />
                                            {item.price && (
                                                <span className="font-display text-lg font-medium tabular-nums text-primary">
                                                    {item.price}
                                                </span>
                                            )}
                                        </div>
                                        {item.desc && <p className="mt-1 max-w-prose text-sm text-tertiary">{item.desc}</p>}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                {section.note && <p className="mt-12 text-center text-sm text-tertiary">{section.note}</p>}
            </div>
        </section>
    );
}
