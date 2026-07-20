import { Button } from "untitledui-components";
import type { HeaderSection } from "@/lib/spec";

export function Header({ section }: { section: HeaderSection }) {
    // logoText + logoAccent are meant to be two halves of the business name
    // ("Trattoria" + "Bella Vista"). Models sometimes repeat a word that is
    // already in logoText ("Amo Coiffeur" + "Amo"), so drop a redundant accent
    // rather than rendering "Amo Coiffeur Amo".
    const accent = section.logoAccent?.trim();
    const words = section.logoText.toLowerCase().split(/\s+/);
    const isRedundant = !accent || accent.toLowerCase().split(/\s+/).every((w) => words.includes(w));

    return (
        <header className="sticky top-0 z-40 border-b border-secondary bg-primary/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#" className="text-xl font-bold tracking-tight text-primary">
                    {section.logoText}
                    {!isRedundant && <span className="text-brand-secondary"> {accent}</span>}
                </a>
                <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                    {section.nav.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-semibold text-tertiary transition duration-100 ease-linear hover:text-brand-secondary_hover"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <Button href={section.cta.href} size="md">
                    {section.cta.label}
                </Button>
            </div>
        </header>
    );
}
