import type { FooterSection } from "@/lib/spec";

export function Footer({ section, agencyCredit }: { section: FooterSection; agencyCredit: string }) {
    return (
        <footer className="border-t border-secondary bg-secondary">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-10 text-sm text-quaternary sm:flex-row sm:px-6 lg:px-8">
                <p>
                    © {new Date().getFullYear()} {section.legalName}
                </p>
                {section.links && section.links.length > 0 && (
                    <nav className="flex gap-6" aria-label="Footer">
                        {section.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="transition duration-100 ease-linear hover:text-tertiary_hover"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                )}
                <p>{agencyCredit}</p>
            </div>
        </footer>
    );
}
