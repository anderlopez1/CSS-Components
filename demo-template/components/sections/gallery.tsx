import { Photo } from "@/components/photo";
import type { GallerySection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";
import { Eyebrow } from "@/components/typo";

export function Gallery({ section }: { section: GallerySection }) {
    const collage = section.variant === "collage" && section.photos.length >= 4;
    return (
        <section id="gallery" className={toneClass(section.tone)}>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <Eyebrow>{section.eyebrow}</Eyebrow>
                <h2 className="mt-2 text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">
                    {section.headline}
                </h2>
                {collage ? (
                    // Editorial off-grid mosaic: a tall lead image beside a 2×2,
                    // then the remainder in a strip. Fixed heights (not photo
                    // aspect) so any photo choice composes cleanly.
                    <div className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-4 sm:auto-rows-[13rem] lg:grid-cols-4">
                        {section.photos.map((photo, i) => {
                            // 1st image spans 2×2 for a strong anchor; every 5th
                            // thereafter spans two columns to break the rhythm.
                            const span = i === 0 ? "col-span-2 row-span-2" : i % 5 === 4 ? "col-span-2" : "";
                            return (
                                <div key={i} className={`${span} overflow-hidden rounded-2xl bg-secondary`}>
                                    {photo.url ? (
                                        <img
                                            src={photo.url}
                                            alt={photo.alt}
                                            loading="lazy"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center p-2 text-center text-xs text-quaternary">
                                            {photo.query}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {section.photos.map((photo, i) => (
                            <Photo key={i} photo={photo} className="rounded-2xl" />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
