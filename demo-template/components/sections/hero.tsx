import { Badge, Button } from "untitledui-components";
import { Photo } from "@/components/photo";
import type { HeroSection } from "@/lib/spec";

export function Hero({ section }: { section: HeroSection }) {
    if (section.variant === "image-bg") {
        // Layering uses source order + a positive z-index on the content only.
        // Negative z-index would drop the photo behind the page background
        // (the scrim then renders over white instead of over the photo).
        return (
            <section className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <Photo photo={section.photo} kind="bg" />
                </div>
                {/* Legibility scrim over the photo — always dark, regardless of theme. */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25" aria-hidden="true" />
                <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-end px-4 pt-32 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    {section.badge && (
                        <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3.5 py-1 text-sm font-medium text-white ring-1 ring-white/30 backdrop-blur">
                            {section.badge}
                        </span>
                    )}
                    <h1 className="mt-5 max-w-3xl text-display-md font-semibold tracking-tight text-white sm:text-display-lg">
                        {section.headline}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-pretty text-white/85 sm:text-xl">{section.sub}</p>
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
            </section>
        );
    }

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
