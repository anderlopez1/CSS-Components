import { Photo } from "@/components/photo";
import type { GallerySection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";

export function Gallery({ section }: { section: GallerySection }) {
    return (
        <section id="gallery" className={toneClass(section.tone)}>
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">{section.headline}</h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {section.photos.map((photo, i) => (
                        <Photo key={i} photo={photo} className="rounded-2xl" />
                    ))}
                </div>
            </div>
        </section>
    );
}
