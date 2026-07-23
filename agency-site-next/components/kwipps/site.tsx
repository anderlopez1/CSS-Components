"use client";

import { useState, type FormEvent } from "react";
import { Palette, Zap, MarkerPin01, Calendar, Mail01, Tool01, CheckCircle } from "@untitledui/icons";
import { I18nProvider, useI18n, LANGS, LANG_LABEL, type Lang } from "@/lib/i18n";
import { IMG, INTAKE_URL } from "@/lib/images";

/* ------------------------------------------------------------------ shared */

function Eyebrow({ children }: { children: React.ReactNode }) {
    return <p className="eyebrow">{children}</p>;
}

function LanguageSwitcher() {
    const { lang, setLang } = useI18n();
    return (
        <div className="flex items-center gap-1 rounded-full border border-[var(--line-strong)] p-0.5">
            {LANGS.map((l: Lang) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
                        lang === l ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-faint)] hover:text-[var(--ink)]"
                    }`}
                    aria-pressed={lang === l}
                >
                    {LANG_LABEL[l]}
                </button>
            ))}
        </div>
    );
}

/* ------------------------------------------------------------------ header */

function Header() {
    const { t } = useI18n();
    return (
        <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color:var(--paper)]/85 backdrop-blur-md">
            <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-4 px-6">
                <a href="#top" className="flex items-center gap-2.5">
                    <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                    <span className="font-display text-2xl font-semibold tracking-tight text-[var(--ink)]">Kwipps</span>
                </a>
                <nav className="hidden items-center gap-8 md:flex">
                    <a href="#how" className="k-link text-[0.95rem]">{t("nav.how")}</a>
                    <a href="#pricing" className="k-link text-[0.95rem]">{t("nav.pricing")}</a>
                    <a href="#faq" className="k-link text-[0.95rem]">{t("nav.faq")}</a>
                </nav>
                <div className="flex items-center gap-3">
                    <LanguageSwitcher />
                    <a href="#contact" className="k-btn k-btn-ink hidden sm:inline-flex">{t("nav.cta")}</a>
                </div>
            </div>
        </header>
    );
}

/* -------------------------------------------------------------------- hero */

function Hero() {
    const { t } = useI18n();
    return (
        <section id="top" className="relative overflow-hidden bg-[var(--char)]">
            <img src={IMG.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" aria-hidden />
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(20,16,13,0.92) 0%, rgba(20,16,13,0.55) 45%, rgba(20,16,13,0.45) 100%)" }}
                aria-hidden
            />
            <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-6xl flex-col justify-end px-6 pt-36 pb-20">
                <p className="eyebrow text-[var(--accent-bright)]">{t("hero.eyebrow")}</p>
                <h1 className="mt-6 max-w-4xl text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] font-medium text-white">
                    {t("hero.h1")}
                </h1>
                <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">{t("hero.lead")}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                    <a href="#contact" className="k-btn k-btn-primary k-btn-lg">{t("hero.cta1")} →</a>
                    <a href="#how" className="k-btn k-btn-ondark k-btn-lg">{t("hero.cta2")}</a>
                </div>
                <p className="mt-8 text-sm tracking-wide text-white/55">{t("hero.note")}</p>
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------- strip */

function Strip() {
    const { t } = useI18n();
    const items = [
        ["strip.1b", "strip.1s"],
        ["strip.2b", "strip.2s"],
        ["strip.3b", "strip.3s"],
        ["strip.4b", "strip.4s"],
    ];
    return (
        <section className="border-b border-[var(--line)] bg-[var(--paper)]">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 md:grid-cols-4">
                {items.map(([b, s]) => (
                    <div key={b} className="text-center md:text-left">
                        <div className="font-display text-3xl font-semibold text-[var(--ink)]">{t(b)}</div>
                        <div className="mt-1 text-sm text-[var(--ink-soft)]">{t(s)}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* --------------------------------------------------------------- manifesto */

function Manifesto() {
    const { t } = useI18n();
    return (
        <section className="bg-[var(--paper)]">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[1.25fr_1fr]">
                <div>
                    <Eyebrow>{t("about.eyebrow")}</Eyebrow>
                    <blockquote className="mt-6 font-display text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.16] font-medium text-[var(--ink)]">
                        “{t("manifesto")}”
                    </blockquote>
                    <div className="mt-8 flex items-center gap-3">
                        <span className="h-px w-10 bg-[var(--accent)]" />
                        <span className="text-sm font-semibold text-[var(--ink)]">{t("about.name")}</span>
                        <span className="text-sm text-[var(--ink-faint)]">· {t("about.role")}</span>
                    </div>
                </div>
                <div className="relative aspect-4/5 overflow-hidden rounded-sm ring-1 ring-[var(--line-strong)]">
                    <img src={IMG.manifesto} alt="" className="k-photo" />
                </div>
            </div>
        </section>
    );
}

/* --------------------------------------------------------------------- how */

function How() {
    const { t } = useI18n();
    const steps = [
        ["01", "step1.h", "step1.p"],
        ["02", "step2.h", "step2.p"],
        ["03", "step3.h", "step3.p"],
    ];
    return (
        <section id="how" className="border-t border-[var(--line)] bg-[var(--paper-2)]">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <Eyebrow>{t("how.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.9rem)] leading-tight text-[var(--ink)]">{t("how.h2")}</h2>
                    <p className="mt-4 text-lg text-[var(--ink-soft)]">{t("how.p")}</p>
                </div>
                <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
                    {steps.map(([n, h, p]) => (
                        <div key={n} className="bg-[var(--card)] p-9">
                            <div className="section-index font-display text-2xl">{n}</div>
                            <h3 className="mt-5 text-xl text-[var(--ink)]">{t(h)}</h3>
                            <p className="mt-3 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{t(p)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------- work */

function Work() {
    const { t } = useI18n();
    return (
        <section className="bg-[var(--paper)]">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <Eyebrow>{t("work.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.9rem)] leading-tight text-[var(--ink)]">{t("work.h2")}</h2>
                    <p className="mt-4 text-lg text-[var(--ink-soft)]">{t("work.p")}</p>
                </div>
                <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
                    {IMG.work.map((w, i) => (
                        <figure
                            key={w.key}
                            className={`group relative overflow-hidden rounded-sm ring-1 ring-[var(--line-strong)] ${
                                i === 0 ? "row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-4/5"
                            }`}
                        >
                            <img
                                src={w.src}
                                alt={t(w.key)}
                                className="k-photo transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-medium tracking-wide text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                {t(w.key)}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ---------------------------------------------------------------- features */

function Features() {
    const { t } = useI18n();
    const feats = [
        [Palette, "feat.1t", "feat.1d"],
        [Zap, "feat.2t", "feat.2d"],
        [MarkerPin01, "feat.3t", "feat.3d"],
        [Calendar, "feat.4t", "feat.4d"],
        [Mail01, "feat.5t", "feat.5d"],
        [Tool01, "feat.6t", "feat.6d"],
    ] as const;
    return (
        <section className="border-t border-[var(--line)] bg-[var(--paper)]">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <Eyebrow>{t("feat.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.9rem)] leading-tight text-[var(--ink)]">{t("feat.h2")}</h2>
                </div>
                <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                    {feats.map(([Icon, tt, dd]) => (
                        <div key={tt} className="border-t border-[var(--line)] pt-6">
                            <Icon className="h-6 w-6 text-[var(--accent)]" strokeWidth={1.5} />
                            <h3 className="mt-4 text-lg text-[var(--ink)]">{t(tt)}</h3>
                            <p className="mt-2 text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{t(dd)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* -------------------------------------------------------------------- band */

function Band() {
    const { t } = useI18n();
    return (
        <section className="relative overflow-hidden bg-[var(--char)]">
            <img src={IMG.band} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" aria-hidden />
            <div className="absolute inset-0 bg-[var(--char)]/55" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 sm:py-28">
                <h2 className="max-w-3xl text-[clamp(1.9rem,3.6vw,3rem)] leading-tight text-white">{t("band.h2")}</h2>
                <p className="mt-5 max-w-2xl text-lg text-white/75">{t("band.p")}</p>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------------- pricing */

function Pricing() {
    const { t } = useI18n();
    const tiers = [
        { key: "starter", price: "49", popular: false, feats: ["price.starter.f1", "price.starter.f2", "price.starter.f3", "price.starter.f4"] },
        { key: "growth", price: "79", popular: true, feats: ["price.growth.f1", "price.growth.f2", "price.growth.f3", "price.growth.f4"] },
        { key: "partner", price: "99", popular: false, feats: ["price.partner.f1", "price.partner.f2", "price.partner.f3", "price.partner.f4"] },
    ];
    return (
        <section id="pricing" className="border-t border-[var(--line)] bg-[var(--paper-2)]">
            <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <Eyebrow>{t("pricing.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.9rem)] leading-tight text-[var(--ink)]">{t("pricing.h2")}</h2>
                    <p className="mt-4 text-lg text-[var(--ink-soft)]">{t("pricing.p")}</p>
                </div>
                <div className="mt-14 grid gap-6 lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.key}
                            className={`relative flex flex-col rounded-sm bg-[var(--card)] p-8 ring-1 ${
                                tier.popular ? "ring-2 ring-[var(--accent)]" : "ring-[var(--line-strong)]"
                            }`}
                        >
                            {tier.popular && (
                                <span className="absolute -top-3 left-8 bg-[var(--accent)] px-3 py-1 text-[0.68rem] font-semibold tracking-widest text-white uppercase">
                                    {t("price.tag")}
                                </span>
                            )}
                            <h3 className="text-xl text-[var(--ink)]">{t(`price.${tier.key}`)}</h3>
                            <p className="mt-1 text-sm text-[var(--ink-faint)]">{t(`price.${tier.key}.sub`)}</p>
                            <div className="mt-6 flex items-baseline gap-1">
                                <span className="font-display text-5xl font-semibold text-[var(--ink)]">CHF {tier.price}</span>
                                <span className="text-sm text-[var(--ink-faint)]">{t("price.permo")}</span>
                            </div>
                            <p className="mt-1 text-xs tracking-wide text-[var(--ink-faint)] uppercase">{t("price.nosetup")}</p>
                            <hr className="k-rule my-7" />
                            <ul className="flex flex-col gap-3">
                                {tier.feats.map((f) => (
                                    <li key={f} className="flex items-start gap-3 text-[0.95rem] text-[var(--ink-soft)]">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" strokeWidth={1.6} />
                                        {t(f)}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`k-btn mt-8 w-full ${tier.popular ? "k-btn-primary" : "k-btn-ghost"}`}
                            >
                                {t("price.cta")}
                            </a>
                        </div>
                    ))}
                </div>
                <p className="mt-10 text-center text-sm text-[var(--ink-faint)]">{t("price.note")}</p>
            </div>
        </section>
    );
}

/* --------------------------------------------------------------------- faq */

function Faq() {
    const { t } = useI18n();
    const qs = ["1", "2", "3", "4", "5"];
    return (
        <section id="faq" className="border-t border-[var(--line)] bg-[var(--paper)]">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-[0.8fr_1.2fr]">
                <div>
                    <Eyebrow>{t("faq.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight text-[var(--ink)]">{t("faq.h2")}</h2>
                </div>
                <div className="divide-y divide-[var(--line)] border-t border-[var(--line)]">
                    {qs.map((n) => (
                        <details key={n} className="group py-5">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-[var(--ink)]">
                                {t(`faq.q${n}`)}
                                <span className="text-[var(--accent)] transition-transform duration-200 group-open:rotate-45">+</span>
                            </summary>
                            <p className="mt-3 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{t(`faq.a${n}`)}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ----------------------------------------------------------------- contact */

function Contact() {
    const { t } = useI18n();
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === "sending") return;
        const form = e.currentTarget;
        const data = new FormData(form);
        if (data.get("company")) return; // honeypot
        setStatus("sending");
        try {
            const res = await fetch(INTAKE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    business: data.get("business"),
                    address: data.get("address"),
                    about: data.get("about"),
                }),
            });
            if (!res.ok) throw new Error(String(res.status));
            setStatus("sent");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    const field = "w-full rounded-sm border border-[var(--line-strong)] bg-[var(--card)] px-4 py-3 text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-[var(--accent)] focus:outline-none";

    return (
        <section id="contact" className="border-t border-[var(--line)] bg-[var(--paper-2)]">
            <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 sm:py-32 lg:grid-cols-2">
                <div>
                    <Eyebrow>{t("contact.eyebrow")}</Eyebrow>
                    <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] leading-tight text-[var(--ink)]">{t("contact.h2")}</h2>
                    <p className="mt-5 max-w-md text-lg text-[var(--ink-soft)]">{t("contact.sub")}</p>
                    <p className="mt-8 text-sm text-[var(--ink-faint)]">
                        {t("contact.or")}
                        <a href="mailto:info@kwipps.com" className="k-link text-[var(--ink)]">info@kwipps.com</a>
                    </p>
                </div>

                {status === "sent" ? (
                    <div className="flex items-center rounded-sm border border-[var(--accent)]/40 bg-[var(--card)] p-8">
                        <p className="text-lg leading-relaxed text-[var(--ink)]">{t("form.sent")}</p>
                    </div>
                ) : (
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input name="name" className={field} placeholder={t("ph.name")} autoComplete="name" />
                            <input name="email" type="email" required className={field} placeholder={t("ph.email")} autoComplete="email" />
                        </div>
                        <input name="business" required className={field} placeholder={t("ph.business")} />
                        <input name="address" className={field} placeholder={t("ph.address")} />
                        <textarea name="about" rows={4} className={field} placeholder={t("ph.message")} />
                        <button type="submit" className="k-btn k-btn-primary k-btn-lg mt-1 w-full" disabled={status === "sending"}>
                            {status === "sending" ? t("contact.sending") : `${t("contact.submit")} →`}
                        </button>
                        {status === "error" && <p className="text-sm text-red-700">{t("form.err")}</p>}
                    </form>
                )}
            </div>
        </section>
    );
}

/* ------------------------------------------------------------------ footer */

function Footer() {
    const { t } = useI18n();
    return (
        <footer className="bg-[var(--char)] text-[var(--char-soft)]">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="inline-block h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                            <span className="font-display text-2xl font-semibold text-white">Kwipps</span>
                        </div>
                        <p className="mt-3 max-w-sm text-sm text-[var(--char-soft)]">{t("footer.tagline")}</p>
                    </div>
                    <div className="flex flex-col gap-2 text-sm md:items-end">
                        <a href="mailto:info@kwipps.com" className="hover:text-white">info@kwipps.com</a>
                        <div className="flex gap-5">
                            <a href="https://kwipps.com/impressum.html" className="hover:text-white">{t("footer.impressum")}</a>
                            <a href="https://kwipps.com/datenschutz.html" className="hover:text-white">{t("footer.datenschutz")}</a>
                        </div>
                    </div>
                </div>
                <hr className="my-10 border-[var(--char-line)]" />
                <div className="flex flex-col justify-between gap-3 text-xs text-[var(--char-soft)]/70 sm:flex-row">
                    <span>© 2026 Kwipps</span>
                    <span>Photos via Pexels</span>
                </div>
            </div>
        </footer>
    );
}

/* -------------------------------------------------------------------- root */

function SiteBody() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Strip />
                <Manifesto />
                <How />
                <Work />
                <Features />
                <Band />
                <Pricing />
                <Faq />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default function Site() {
    return (
        <I18nProvider>
            <SiteBody />
        </I18nProvider>
    );
}
