import { Button } from "untitledui-components";
import type { HeaderSection } from "@/lib/spec";

export function Header({ section }: { section: HeaderSection }) {
    return (
        <header className="sticky top-0 z-40 border-b border-secondary bg-primary/90 backdrop-blur">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#" className="text-xl font-bold tracking-tight text-primary">
                    {section.logoText}
                    {section.logoAccent && <span className="text-brand-secondary"> {section.logoAccent}</span>}
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
