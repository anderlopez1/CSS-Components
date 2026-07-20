import { Clock, Mail01, MarkerPin01, Phone } from "@untitledui/icons";
import { Photo } from "@/components/photo";
import type { ContactSection } from "@/lib/spec";
import { toneClass } from "@/lib/tone";

export function Contact({ section }: { section: ContactSection }) {
    return (
        <section id={section.id ?? "contact"} className={toneClass(section.tone)}>
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 className="text-display-sm font-semibold tracking-tight text-primary sm:text-display-md">{section.headline}</h2>
                    <dl className="mt-8 space-y-5">
                        {section.address && (
                            <div className="flex gap-3">
                                <dt>
                                    <MarkerPin01 className="size-5 text-fg-brand-primary" aria-hidden="true" />
                                    <span className="sr-only">Adresse</span>
                                </dt>
                                <dd className="text-tertiary">{section.address}</dd>
                            </div>
                        )}
                        {section.phone && (
                            <div className="flex gap-3">
                                <dt>
                                    <Phone className="size-5 text-fg-brand-primary" aria-hidden="true" />
                                    <span className="sr-only">Telefon</span>
                                </dt>
                                <dd>
                                    <a
                                        href={`tel:${section.phone.replace(/\s/g, "")}`}
                                        className="font-medium text-brand-secondary transition duration-100 ease-linear hover:text-brand-secondary_hover"
                                    >
                                        {section.phone}
                                    </a>
                                </dd>
                            </div>
                        )}
                        {section.email && (
                            <div className="flex gap-3">
                                <dt>
                                    <Mail01 className="size-5 text-fg-brand-primary" aria-hidden="true" />
                                    <span className="sr-only">E-Mail</span>
                                </dt>
                                <dd>
                                    <a
                                        href={`mailto:${section.email}`}
                                        className="font-medium text-brand-secondary transition duration-100 ease-linear hover:text-brand-secondary_hover"
                                    >
                                        {section.email}
                                    </a>
                                </dd>
                            </div>
                        )}
                        {section.hours && section.hours.length > 0 && (
                            <div className="flex gap-3">
                                <dt>
                                    <Clock className="size-5 text-fg-brand-primary" aria-hidden="true" />
                                    <span className="sr-only">Öffnungszeiten</span>
                                </dt>
                                <dd className="space-y-1 text-tertiary">
                                    {section.hours.map((h) => (
                                        <p key={h.days}>
                                            <span className="font-medium text-secondary">{h.days}:</span> {h.time}
                                        </p>
                                    ))}
                                </dd>
                            </div>
                        )}
                    </dl>
                </div>
                {section.photo && <Photo photo={section.photo} className="rounded-2xl" />}
            </div>
        </section>
    );
}
