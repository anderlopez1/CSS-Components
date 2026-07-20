import type { SectionTone } from "./spec";

// Section background treatments. "dark" works by applying the library's
// .dark-mode class to the section subtree — every semantic token
// (text-primary, bg-primary, border-secondary, …) is redefined under that
// selector, so the section's entire content flips with zero per-component
// work. "muted" is the soft gray band; "default" inherits the page surface.
export function toneClass(tone: SectionTone | undefined): string {
    switch (tone) {
        case "muted":
            return "bg-secondary";
        case "dark":
            return "dark-mode bg-primary";
        default:
            return "";
    }
}
