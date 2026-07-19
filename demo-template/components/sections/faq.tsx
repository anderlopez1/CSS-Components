import type { FaqSection } from "@/lib/spec";

export function Faq({ section }: { section: FaqSection }) {
    return (
        <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">{section.headline}</h2>
            <div className="mt-8 divide-y divide-gray-200">
                {section.items.map((item) => (
                    <details key={item.q} className="group py-5">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary">
                            {item.q}
                            <span
                                aria-hidden="true"
                                className="ml-4 shrink-0 text-brand-secondary transition duration-100 ease-linear group-open:rotate-45"
                            >
                                +
                            </span>
                        </summary>
                        <p className="mt-3 text-pretty text-tertiary">{item.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
