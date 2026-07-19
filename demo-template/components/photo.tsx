import type { Photo as PhotoSpec } from "@/lib/spec";
import { cx } from "untitledui-components";

/** Renders a resolved Pexels photo, or a quiet placeholder in local dev
 * (before the deploy step fills in `url`). Aspect ratio is enforced by the
 * ph-hero / ph-photo classes so agent photo choices can't break layout. */
export function Photo({ photo, kind = "photo", className }: { photo: PhotoSpec; kind?: "hero" | "photo"; className?: string }) {
    const slot = kind === "hero" ? "ph-hero" : "ph-photo";

    if (!photo.url) {
        return (
            <div
                role="img"
                aria-label={photo.alt}
                className={cx(slot, "flex items-center justify-center rounded-2xl bg-secondary text-sm text-quaternary", className)}
            >
                {photo.query}
            </div>
        );
    }

    return <img src={photo.url} alt={photo.alt} loading="lazy" className={cx(slot, className)} />;
}
