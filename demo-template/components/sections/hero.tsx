import { Badge, Button } from "untitledui-components";
import { Photo } from "@/components/photo";
import type { HeroSection } from "@/lib/spec";

export function Hero({ section }: { section: HeroSection }) {
    if (section.variant === "centered") {
        return (
            <section className="bg-primary">
                <div className="mx-auto max-w-3xl px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24 lg:px-8">
                    {section.badge && (
                        <Badge color="brand" type="pill-color" size="lg">
                            {section.badge}
                        </Badge>
                    )}
                    <h1 className="mt-5 text-display-md font-semibold tracking-tight text-primary sm:text-display-lg">{section.headline}</h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-tertiary sm:text-xl">{section.sub}</p>
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <Button href={section.primaryCta.href} size="xl">
                            {section.primaryCta.label}
                        </Button>
                        {section.secondaryCta && (
                            <Button href={section.secondaryCta.href} size="xl" color="secondary">
                                {section.secondaryCta.label}
                            </Button>
                        )}
                    </div>
                </div>
                <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    <Photo photo={section.photo} kind="hero" className="rounded-2xl shadow-xl ring-1 ring-black/5" />
                </div>
            </section>
        );
    }

    // split-photo (default)
    return (
        <section className="bg-primary">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
                <div>
                    {section.badge && (
                        <Badge color="brand" type="pill-color" size="lg">
                            {section.badge}
                        </Badge>
                    )}
                    <h1 className="mt-5 text-display-md font-semibold tracking-tight text-primary sm:text-display-lg">{section.headline}</h1>
                    <p className="mt-6 max-w-prose text-lg text-pretty text-tertiary sm:text-xl">{section.sub}</p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Button href={section.primaryCta.href} size="xl">
                            {section.primaryCta.label}
                        </Button>
                        {section.secondaryCta && (
                            <Button href={section.secondaryCta.href} size="xl" color="secondary">
                                {section.secondaryCta.label}
                            </Button>
                        )}
                    </div>
                </div>
                <Photo photo={section.photo} kind="hero" className="rounded-2xl shadow-xl ring-1 ring-black/5" />
            </div>
        </section>
    );
}
