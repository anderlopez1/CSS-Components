import { Fragment, type ReactNode } from "react";

/** Renders a headline where any *asterisked* span becomes an italic display
 * accent — the editorial "one italic word" move, e.g.
 *   "El arte del *vermut*" → El arte del <em>vermut</em>
 * Falls back to plain text when there are no markers. */
export function accentize(text: string): ReactNode {
    if (!text.includes("*")) return text;
    return text.split(/(\*[^*]+\*)/g).map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
            return (
                <em key={i} className="font-display italic">
                    {part.slice(1, -1)}
                </em>
            );
        }
        return <Fragment key={i}>{part}</Fragment>;
    });
}

/** Uppercase, letter-spaced micro-label above a headline — register-agnostic
 * (works on light/dark, editorial/approachable) so any section can use it. */
export function Eyebrow({ children }: { children: ReactNode }) {
    if (!children) return null;
    return <p className="text-xs font-semibold tracking-[0.2em] text-brand-secondary uppercase">{children}</p>;
}
