import { FeaturedIcon } from "untitledui-components";
import { getIcon } from "@/lib/icons";
import type { FeaturesSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";

export function Features({ section }: { section: FeaturesSection }) {
    const cards = section.variant === "icon-cards";

    return (
        <section id={section.id ?? "features"} className={toneClass(section.tone)}>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">{section.headline}</h2>
                {section.sub && <p className="mt-4 text-lg text-pretty text-tertiary">{section.sub}</p>}
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                    <div
                        key={item.title}
                        className={
                            cards
                                ? "rounded-2xl border border-secondary bg-primary p-8 shadow-sm transition duration-100 ease-linear hover:shadow-md"
                                : "text-center"
                        }
                    >
                        <div className={cards ? "" : "flex justify-center"}>
                            <FeaturedIcon icon={getIcon(item.icon)} color="brand" theme="light" size="lg" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-primary">{item.title}</h3>
                        <p className="mt-2 text-pretty text-tertiary">{item.body}</p>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
