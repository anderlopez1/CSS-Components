"use client";

// Client-side internationalisation for the Kwipps site (EN / DE / FR / ES).
// Copy is reused verbatim from the previous hand-translated site so all four
// languages stay production-quality; only the design changed. The language is
// held in React state, persisted to localStorage, and auto-detected from the
// browser on first visit.

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGS = ["en", "de", "fr", "es"] as const;
export type Lang = (typeof LANGS)[number];

type Dict = Record<string, string>;

const en: Dict = {
    "nav.how": "How it works", "nav.pricing": "Pricing", "nav.faq": "FAQ", "nav.cta": "Request a demo",
    "hero.eyebrow": "Web studio for local business · Switzerland",
    "hero.h1": "We build your website — before you pay a franc.",
    "hero.lead": "Kwipps builds your local business a finished, clickable demo website. Free and with no obligation. If you like it, we take it live. If not, it was a gift.",
    "hero.cta1": "Request a free demo", "hero.cta2": "How it works",
    "hero.note": "No upfront payment · No obligation · Reply within 24 hours",
    "strip.1b": "0 CHF", "strip.1s": "for your demo",
    "strip.2b": "~1 week", "strip.2s": "until you're live",
    "strip.3b": "100%", "strip.3s": "your domain & content",
    "strip.4b": "24 h", "strip.4s": "response time",
    "manifesto": "We believe you should see a product before you buy it. A website too. So we build first — and ask afterwards.",
    "how.eyebrow": "How it works", "how.h2": "You see the result before you decide.",
    "how.p": "Other agencies want money first, then they build. We do it the other way around.",
    "step1.h": "We get to know your business", "step1.p": "Location, offering, and what the best in your industry do well online. From that we craft a concept that fits you.",
    "step2.h": "You get a finished demo", "step2.p": "A real, clickable website at its own preview address. No PDF, no moodboard — the finished page.",
    "step3.h": "Like it? We go live.", "step3.p": "Your own domain, email, final tweaks. Only now do you decide — and only now do you pay.",
    "work.eyebrow": "Selected work", "work.h2": "The finished page, not a pitch.",
    "work.p": "A glimpse of the kind of presence we build for local businesses — crafted before a single invoice.",
    "work.1": "Corner café", "work.2": "Bakery & patisserie", "work.3": "Fine dining",
    "work.4": "Boutique hotel", "work.5": "Table service", "work.6": "Artisan kitchen",
    "biz.eyebrow": "Who we build for", "biz.h2": "A site for every kind of local business.",
    "biz.sub": "Restaurants, salons, clinics, studios — whatever you run, we craft a presence that fits it.",
    "biz.1": "Cafés", "biz.2": "Restaurants", "biz.3": "Bakeries", "biz.4": "Hair salons", "biz.5": "Barbershops",
    "biz.6": "Boutiques", "biz.7": "Florists", "biz.8": "Dental practices", "biz.9": "Fitness studios", "biz.10": "Boutique hotels",
    "feat.eyebrow": "What you get", "feat.h2": "Everything a local business needs online.",
    "feat.1t": "Custom design", "feat.1d": "No template look. A presence that fits your brand and industry.",
    "feat.2t": "Mobile & lightning-fast", "feat.2d": "Looks as good on a phone as on desktop — and loads in seconds.",
    "feat.3t": "Found on Google", "feat.3d": "Cleanly optimised so customers find you when they search nearby.",
    "feat.4t": "Contact & booking", "feat.4d": "Enquiry form, booking or click-to-call — built right in.",
    "feat.5t": "Own domain & email", "feat.5d": "Your-name.ch and a professional email address are included.",
    "feat.6t": "Support & updates", "feat.6d": "We stay your point of contact — changes included, no ticket system.",
    "band.h2": "For restaurants, salons, tradespeople & practices.", "band.p": "We know local industries and what matters — from the menu to online appointment booking.",
    "pricing.eyebrow": "Transparent pricing", "pricing.h2": "Fair packages. No hidden costs.", "pricing.p": "No setup fee. The demo is always free — these prices only apply once you want to go live.",
    "price.starter": "Starter", "price.starter.sub": "For a clean first presence", "price.permo": " / month", "price.nosetup": "No setup fee",
    "price.starter.f1": "One-page website", "price.starter.f2": "Contact form", "price.starter.f3": "Hosting & SSL included", "price.starter.f4": "Optimised for Google",
    "price.tag": "Most chosen", "price.growth": "Growth", "price.growth.sub": "For businesses that want more",
    "price.growth.f1": "Up to 5 pages", "price.growth.f2": "Booking / reservations", "price.growth.f3": "Google Business setup", "price.growth.f4": "1 change per month incl.",
    "price.partner": "Partner", "price.partner.sub": "The complete all-round presence",
    "price.partner.f1": "Complete web presence", "price.partner.f2": "Copy & images by us", "price.partner.f3": "Priority support", "price.partner.f4": "Quarterly refresh",
    "price.cta": "Request a demo",
    "price.note": "No contract lock-in beyond 12 months. You own your domain and content — always.",
    "about.eyebrow": "About Kwipps", "about.quote": "We build first — and ask afterwards. You should see the finished website before you decide anything.", "about.name": "Ander Lopez", "about.role": "Founder, Kwipps",
    "trust.1": "Swiss point of contact", "trust.2": "Reply within 24 hours", "trust.3": "Compliant with Swiss DSG / GDPR", "trust.4": "Your domain & content are yours",
    "faq.eyebrow": "FAQ", "faq.h2": "Everything you want to know.",
    "faq.q1": "What does the demo cost?", "faq.a1": "Nothing. Honestly. You see your finished website before you decide anything — no cost, no obligation.",
    "faq.q2": "How fast is my website live?", "faq.a2": "Usually within a week after you give us the go-ahead. You often have the demo itself within a few days.",
    "faq.q3": "Can I request changes?", "faq.a3": "Of course. Adjustments are part of every package — you tell us what you'd like, we make it happen.",
    "faq.q4": "What happens to my old website and domain?", "faq.a4": "We migrate everything cleanly, with no downtime. You keep your existing domain — we simply set it up anew.",
    "faq.q5": "And if I don't like the demo?", "faq.a5": "Then we delete it and you've lost nothing. No catch, no cost.",
    "contact.eyebrow": "Get started", "contact.h2": "Request your free preview.", "contact.sub": "A few details is all it takes — we'll build you a free preview website right away and email you the link.",
    "ph.name": "Your name", "ph.email": "Your email", "ph.business": "Name of your business", "ph.address": "Address / town of your business", "ph.message": "What's it about? (optional)",
    "contact.submit": "Request a free preview", "contact.sending": "Sending…", "contact.or": "Or write to us directly at ",
    "form.sent": "Thank you! We're building your free preview. Check your inbox for the confirmation — the link to your website follows in a few minutes.",
    "form.err": "Something went wrong. Please write to us at info@kwipps.com.",
    "footer.tagline": "Websites for local businesses — built before you pay.", "footer.impressum": "Legal notice", "footer.datenschutz": "Privacy",
};

const de: Dict = {
    "nav.how": "So funktioniert's", "nav.pricing": "Preise", "nav.faq": "FAQ", "nav.cta": "Demo anfordern",
    "hero.eyebrow": "Web-Studio für lokale Geschäfte · Schweiz",
    "hero.h1": "Wir bauen Ihre Website — bevor Sie einen Franken zahlen.",
    "hero.lead": "Kwipps erstellt für Ihr Geschäft eine fertige, klickbare Demo-Website. Kostenlos und unverbindlich. Gefällt sie Ihnen, schalten wir sie live. Wenn nicht, war's ein Geschenk.",
    "hero.cta1": "Kostenlose Demo anfordern", "hero.cta2": "So funktioniert's",
    "hero.note": "Keine Vorauszahlung · Keine Verpflichtung · Antwort innert 24 Stunden",
    "strip.1b": "0 CHF", "strip.1s": "für Ihre Demo",
    "strip.2b": "~1 Woche", "strip.2s": "bis Sie live sind",
    "strip.3b": "100%", "strip.3s": "Ihre Domain & Inhalte",
    "strip.4b": "24 h", "strip.4s": "Antwortzeit",
    "manifesto": "Wir glauben, man sollte ein Produkt sehen, bevor man es kauft. Auch eine Website. Deshalb bauen wir zuerst — und fragen erst danach.",
    "how.eyebrow": "So funktioniert's", "how.h2": "Sie sehen das Ergebnis, bevor Sie sich entscheiden.",
    "how.p": "Andere Agenturen wollen erst Geld, dann bauen sie. Wir machen es umgekehrt.",
    "step1.h": "Wir schauen uns Ihr Geschäft an", "step1.p": "Lage, Angebot und was die Besten Ihrer Branche online richtig machen. Daraus entsteht ein Konzept, das zu Ihnen passt.",
    "step2.h": "Sie erhalten eine fertige Demo", "step2.p": "Eine echte, klickbare Website unter eigener Vorschau-Adresse. Kein PDF, kein Moodboard — die fertige Seite.",
    "step3.h": "Gefällt's? Wir schalten live.", "step3.p": "Eigene Domain, E-Mail, letzte Anpassungen. Erst jetzt entscheiden Sie sich — und erst jetzt zahlen Sie.",
    "work.eyebrow": "Ausgewählte Arbeiten", "work.h2": "Die fertige Seite, kein Versprechen.",
    "work.p": "Ein Blick auf den Auftritt, den wir für lokale Geschäfte bauen — fertig, bevor eine einzige Rechnung kommt.",
    "work.1": "Café um die Ecke", "work.2": "Bäckerei & Patisserie", "work.3": "Fine Dining",
    "work.4": "Boutique-Hotel", "work.5": "Service am Tisch", "work.6": "Backstube",
    "biz.eyebrow": "Für wen wir bauen", "biz.h2": "Eine Website für jede Art von lokalem Geschäft.",
    "biz.sub": "Restaurants, Coiffeure, Praxen, Studios — was auch immer Sie führen, wir gestalten einen Auftritt, der passt.",
    "biz.1": "Cafés", "biz.2": "Restaurants", "biz.3": "Bäckereien", "biz.4": "Coiffeure", "biz.5": "Barbershops",
    "biz.6": "Boutiquen", "biz.7": "Blumenläden", "biz.8": "Zahnarztpraxen", "biz.9": "Fitnessstudios", "biz.10": "Boutique-Hotels",
    "feat.eyebrow": "Was Sie bekommen", "feat.h2": "Alles drin, was ein lokales Geschäft online braucht.",
    "feat.1t": "Massgeschneidertes Design", "feat.1d": "Kein Baukasten-Look. Ein Auftritt, der zu Ihrer Marke und Branche passt.",
    "feat.2t": "Mobil & blitzschnell", "feat.2d": "Sieht auf dem Handy so gut aus wie am Desktop — und lädt in Sekunden.",
    "feat.3t": "Bei Google gefunden", "feat.3d": "Sauber optimiert, damit Kunden Sie finden, wenn sie in Ihrer Nähe suchen.",
    "feat.4t": "Kontakt & Reservation", "feat.4d": "Anfrageformular, Buchung oder Klick-zum-Anrufen — direkt integriert.",
    "feat.5t": "Eigene Domain & E-Mail", "feat.5d": "Ihr-Name.ch und eine professionelle E-Mail-Adresse gehören dazu.",
    "feat.6t": "Betreuung & Updates", "feat.6d": "Wir bleiben Ihr Ansprechpartner — Änderungen inklusive, kein Ticket-System.",
    "band.h2": "Für Restaurants, Coiffeure, Handwerker & Praxen.", "band.p": "Wir kennen die lokalen Branchen und wissen, worauf es ankommt — von der Speisekarte bis zur Online-Terminbuchung.",
    "pricing.eyebrow": "Transparente Preise", "pricing.h2": "Faire Pakete. Keine versteckten Kosten.", "pricing.p": "Keine Einrichtungsgebühr. Die Demo ist immer kostenlos — diese Preise gelten erst, wenn Sie live gehen.",
    "price.starter": "Starter", "price.starter.sub": "Für den sauberen ersten Auftritt", "price.permo": " / Monat", "price.nosetup": "Keine Einrichtungsgebühr",
    "price.starter.f1": "Onepager-Website", "price.starter.f2": "Kontaktformular", "price.starter.f3": "Hosting & SSL inklusive", "price.starter.f4": "Für Google optimiert",
    "price.tag": "Am häufigsten gewählt", "price.growth": "Wachstum", "price.growth.sub": "Für Geschäfte, die mehr wollen",
    "price.growth.f1": "Bis 5 Seiten", "price.growth.f2": "Buchung / Reservation", "price.growth.f3": "Google-Business-Einrichtung", "price.growth.f4": "1 Änderung pro Monat inkl.",
    "price.partner": "Partner", "price.partner.sub": "Der komplette Rundum-Auftritt",
    "price.partner.f1": "Kompletter Webauftritt", "price.partner.f2": "Texte & Bilder von uns", "price.partner.f3": "Prioritäts-Support", "price.partner.f4": "Quartals-Refresh",
    "price.cta": "Demo anfordern",
    "price.note": "Keine Vertragsbindung über 12 Monate hinaus. Sie besitzen Ihre Domain und Inhalte — immer.",
    "about.eyebrow": "Über Kwipps", "about.quote": "Wir bauen zuerst — und fragen erst danach. Sie sollten die fertige Website sehen, bevor Sie sich für irgendetwas entscheiden.", "about.name": "Ander Lopez", "about.role": "Gründer, Kwipps",
    "trust.1": "Schweizer Ansprechpartner", "trust.2": "Antwort innert 24 Stunden", "trust.3": "DSG / DSGVO-konform", "trust.4": "Ihre Domain & Inhalte gehören Ihnen",
    "faq.eyebrow": "Häufige Fragen", "faq.h2": "Alles, was Sie wissen wollen.",
    "faq.q1": "Was kostet die Demo?", "faq.a1": "Nichts. Ehrlich. Sie sehen Ihre fertige Website, bevor Sie irgendetwas entscheiden — ohne Kosten und ohne Verpflichtung.",
    "faq.q2": "Wie schnell ist meine Website live?", "faq.a2": "Meist innert einer Woche, nachdem Sie uns Ihr Go gegeben haben. Die Demo selbst haben Sie oft schon nach wenigen Tagen.",
    "faq.q3": "Kann ich Änderungen wünschen?", "faq.a3": "Selbstverständlich. Anpassungen gehören zu jedem Paket — Sie sagen uns, was Sie möchten, wir setzen es um.",
    "faq.q4": "Was passiert mit meiner alten Website und Domain?", "faq.a4": "Wir ziehen alles sauber um, ohne Unterbruch. Ihre bestehende Domain behalten Sie — wir richten sie einfach neu ein.",
    "faq.q5": "Und wenn mir die Demo nicht gefällt?", "faq.a5": "Dann löschen wir sie, und Sie haben nichts verloren. Kein Haken, keine Kosten.",
    "contact.eyebrow": "Loslegen", "contact.h2": "Fordern Sie Ihre kostenlose Vorschau an.", "contact.sub": "Ein paar Angaben genügen — wir bauen Ihnen sofort eine kostenlose Vorschau-Website und mailen Ihnen den Link.",
    "ph.name": "Ihr Name", "ph.email": "Ihre E-Mail", "ph.business": "Name Ihres Geschäfts", "ph.address": "Adresse / Ort Ihres Geschäfts", "ph.message": "Worum geht's? (optional)",
    "contact.submit": "Kostenlose Vorschau anfordern", "contact.sending": "Wird gesendet…", "contact.or": "Oder schreiben Sie uns direkt an ",
    "form.sent": "Danke! Wir bauen gerade Ihre kostenlose Vorschau. Prüfen Sie Ihr Postfach auf die Bestätigung — der Link zu Ihrer Website folgt in wenigen Minuten.",
    "form.err": "Etwas ist schiefgelaufen. Bitte schreiben Sie uns an info@kwipps.com.",
    "footer.tagline": "Websites für lokale Geschäfte — fertig gebaut, bevor Sie zahlen.", "footer.impressum": "Impressum", "footer.datenschutz": "Datenschutz",
};

const fr: Dict = {
    "nav.how": "Comment ça marche", "nav.pricing": "Tarifs", "nav.faq": "FAQ", "nav.cta": "Demander une démo",
    "hero.eyebrow": "Studio web pour commerces locaux · Suisse",
    "hero.h1": "Nous créons votre site web — avant que vous ne payiez un franc.",
    "hero.lead": "Kwipps crée pour votre commerce un site web de démonstration, fini et cliquable. Gratuit et sans engagement. S'il vous plaît, nous le mettons en ligne. Sinon, c'était un cadeau.",
    "hero.cta1": "Demander une démo gratuite", "hero.cta2": "Comment ça marche",
    "hero.note": "Aucun paiement d'avance · Sans engagement · Réponse sous 24 heures",
    "strip.1b": "0 CHF", "strip.1s": "pour votre démo",
    "strip.2b": "~1 semaine", "strip.2s": "avant la mise en ligne",
    "strip.3b": "100%", "strip.3s": "votre domaine & contenu",
    "strip.4b": "24 h", "strip.4s": "délai de réponse",
    "manifesto": "Nous pensons qu'on devrait voir un produit avant de l'acheter. Un site web aussi. Alors nous créons d'abord — et demandons ensuite.",
    "how.eyebrow": "Comment ça marche", "how.h2": "Vous voyez le résultat avant de décider.",
    "how.p": "Les autres agences veulent d'abord l'argent, puis elles créent. Nous faisons l'inverse.",
    "step1.h": "Nous étudions votre commerce", "step1.p": "Emplacement, offre, et ce que les meilleurs de votre secteur réussissent en ligne. Nous en tirons un concept adapté à vous.",
    "step2.h": "Vous recevez une démo finie", "step2.p": "Un vrai site web cliquable, à sa propre adresse de prévisualisation. Pas de PDF, pas de moodboard — la page finie.",
    "step3.h": "Ça vous plaît ? On met en ligne.", "step3.p": "Votre propre domaine, e-mail, derniers ajustements. Ce n'est qu'alors que vous décidez — et que vous payez.",
    "work.eyebrow": "Sélection de travaux", "work.h2": "La page finie, pas une promesse.",
    "work.p": "Un aperçu de la présence que nous créons pour les commerces locaux — réalisée avant la moindre facture.",
    "work.1": "Café du coin", "work.2": "Boulangerie & pâtisserie", "work.3": "Gastronomie",
    "work.4": "Hôtel de charme", "work.5": "Service à table", "work.6": "Atelier pâtisserie",
    "biz.eyebrow": "Pour qui nous créons", "biz.h2": "Un site pour chaque type de commerce local.",
    "biz.sub": "Restaurants, coiffeurs, cabinets, studios — quel que soit votre métier, nous créons une présence à votre mesure.",
    "biz.1": "Cafés", "biz.2": "Restaurants", "biz.3": "Boulangeries", "biz.4": "Salons de coiffure", "biz.5": "Barbiers",
    "biz.6": "Boutiques", "biz.7": "Fleuristes", "biz.8": "Cabinets dentaires", "biz.9": "Salles de sport", "biz.10": "Hôtels de charme",
    "feat.eyebrow": "Ce que vous obtenez", "feat.h2": "Tout ce dont un commerce local a besoin en ligne.",
    "feat.1t": "Design sur mesure", "feat.1d": "Pas d'aspect « template ». Une présence adaptée à votre marque et votre secteur.",
    "feat.2t": "Mobile & ultra-rapide", "feat.2d": "Aussi beau sur mobile que sur ordinateur — et se charge en quelques secondes.",
    "feat.3t": "Trouvé sur Google", "feat.3d": "Bien optimisé pour que les clients vous trouvent en cherchant près de chez eux.",
    "feat.4t": "Contact & réservation", "feat.4d": "Formulaire de contact, réservation ou appel en un clic — intégrés.",
    "feat.5t": "Domaine & e-mail propres", "feat.5d": "Votre-nom.ch et une adresse e-mail professionnelle sont inclus.",
    "feat.6t": "Suivi & mises à jour", "feat.6d": "Nous restons votre interlocuteur — modifications incluses, sans système de tickets.",
    "band.h2": "Pour restaurants, coiffeurs, artisans & cabinets.", "band.p": "Nous connaissons les métiers locaux et ce qui compte — du menu à la prise de rendez-vous en ligne.",
    "pricing.eyebrow": "Tarifs transparents", "pricing.h2": "Des forfaits justes. Sans coûts cachés.", "pricing.p": "Aucun frais de mise en place. La démo est toujours gratuite — ces tarifs ne s'appliquent qu'une fois en ligne.",
    "price.starter": "Starter", "price.starter.sub": "Pour une première présence soignée", "price.permo": " / mois", "price.nosetup": "Aucun frais de mise en place",
    "price.starter.f1": "Site web une page", "price.starter.f2": "Formulaire de contact", "price.starter.f3": "Hébergement & SSL inclus", "price.starter.f4": "Optimisé pour Google",
    "price.tag": "Le plus choisi", "price.growth": "Croissance", "price.growth.sub": "Pour les commerces qui veulent plus",
    "price.growth.f1": "Jusqu'à 5 pages", "price.growth.f2": "Réservation", "price.growth.f3": "Configuration Google Business", "price.growth.f4": "1 modification/mois incluse",
    "price.partner": "Partenaire", "price.partner.sub": "La présence complète",
    "price.partner.f1": "Présence web complète", "price.partner.f2": "Textes & images par nos soins", "price.partner.f3": "Support prioritaire", "price.partner.f4": "Rafraîchissement trimestriel",
    "price.cta": "Demander une démo",
    "price.note": "Aucun engagement au-delà de 12 mois. Vous possédez votre domaine et votre contenu — toujours.",
    "about.eyebrow": "À propos de Kwipps", "about.quote": "Nous créons d'abord — et demandons ensuite. Vous devriez voir le site fini avant de décider quoi que ce soit.", "about.name": "Ander Lopez", "about.role": "Fondateur, Kwipps",
    "trust.1": "Interlocuteur suisse", "trust.2": "Réponse sous 24 heures", "trust.3": "Conforme LPD / RGPD", "trust.4": "Votre domaine et contenu vous appartiennent",
    "faq.eyebrow": "Questions fréquentes", "faq.h2": "Tout ce que vous voulez savoir.",
    "faq.q1": "Combien coûte la démo ?", "faq.a1": "Rien. Vraiment. Vous voyez votre site fini avant toute décision — sans coût ni engagement.",
    "faq.q2": "En combien de temps mon site est-il en ligne ?", "faq.a2": "Généralement en une semaine après votre feu vert. La démo, elle, est souvent prête en quelques jours.",
    "faq.q3": "Puis-je demander des modifications ?", "faq.a3": "Bien sûr. Les ajustements font partie de chaque forfait — dites-nous ce que vous souhaitez, nous le réalisons.",
    "faq.q4": "Qu'advient-il de mon ancien site et domaine ?", "faq.a4": "Nous migrons tout proprement, sans interruption. Vous gardez votre domaine existant — nous le reconfigurons simplement.",
    "faq.q5": "Et si la démo ne me plaît pas ?", "faq.a5": "Alors nous la supprimons et vous n'avez rien perdu. Sans piège, sans frais.",
    "contact.eyebrow": "Commencer", "contact.h2": "Demandez votre aperçu gratuit.", "contact.sub": "Quelques informations suffisent — nous créons immédiatement un aperçu de site gratuit et vous envoyons le lien par e-mail.",
    "ph.name": "Votre nom", "ph.email": "Votre e-mail", "ph.business": "Nom de votre commerce", "ph.address": "Adresse / ville de votre commerce", "ph.message": "De quoi s'agit-il ? (facultatif)",
    "contact.submit": "Demander un aperçu gratuit", "contact.sending": "Envoi…", "contact.or": "Ou écrivez-nous directement à ",
    "form.sent": "Merci ! Nous créons votre aperçu gratuit. Vérifiez votre boîte mail pour la confirmation — le lien vers votre site suit dans quelques minutes.",
    "form.err": "Une erreur s'est produite. Écrivez-nous à info@kwipps.com.",
    "footer.tagline": "Des sites web pour les commerces locaux — réalisés avant que vous ne payiez.", "footer.impressum": "Mentions légales", "footer.datenschutz": "Confidentialité",
};

const es: Dict = {
    "nav.how": "Cómo funciona", "nav.pricing": "Precios", "nav.faq": "Preguntas frecuentes", "nav.cta": "Solicitar una demo",
    "hero.eyebrow": "Estudio web para negocios locales · Suiza",
    "hero.h1": "Creamos su sitio web — antes de que pague un franco.",
    "hero.lead": "Kwipps crea para su negocio un sitio web de demostración terminado y funcional. Gratis y sin compromiso. Si le gusta, lo publicamos. Si no, fue un regalo.",
    "hero.cta1": "Solicitar una demo gratuita", "hero.cta2": "Cómo funciona",
    "hero.note": "Sin pago por adelantado · Sin compromiso · Respuesta en 24 horas",
    "strip.1b": "0 CHF", "strip.1s": "para su demo",
    "strip.2b": "~1 semana", "strip.2s": "hasta estar en línea",
    "strip.3b": "100%", "strip.3s": "su dominio y contenido",
    "strip.4b": "24 h", "strip.4s": "tiempo de respuesta",
    "manifesto": "Creemos que hay que ver un producto antes de comprarlo. Un sitio web también. Por eso construimos primero — y preguntamos después.",
    "how.eyebrow": "Cómo funciona", "how.h2": "Usted ve el resultado antes de decidir.",
    "how.p": "Otras agencias quieren el dinero primero y luego construyen. Nosotros lo hacemos al revés.",
    "step1.h": "Conocemos su negocio", "step1.p": "Ubicación, oferta y lo que los mejores de su sector hacen bien en línea. De ahí surge un concepto hecho a su medida.",
    "step2.h": "Recibe una demo terminada", "step2.p": "Un sitio web real y funcional en su propia dirección de vista previa. Nada de PDF ni de moodboard — la página terminada.",
    "step3.h": "¿Le gusta? Lo publicamos.", "step3.p": "Su propio dominio, correo electrónico, últimos ajustes. Solo ahora decide usted — y solo ahora paga.",
    "work.eyebrow": "Trabajos seleccionados", "work.h2": "La página terminada, no una promesa.",
    "work.p": "Un vistazo a la presencia que creamos para negocios locales — lista antes de la primera factura.",
    "work.1": "Café de la esquina", "work.2": "Panadería y pastelería", "work.3": "Alta cocina",
    "work.4": "Hotel boutique", "work.5": "Servicio en mesa", "work.6": "Obrador artesano",
    "biz.eyebrow": "Para quién creamos", "biz.h2": "Un sitio para cada tipo de negocio local.",
    "biz.sub": "Restaurantes, peluquerías, consultorios, estudios — sea cual sea su negocio, creamos una presencia a su medida.",
    "biz.1": "Cafés", "biz.2": "Restaurantes", "biz.3": "Panaderías", "biz.4": "Peluquerías", "biz.5": "Barberías",
    "biz.6": "Boutiques", "biz.7": "Floristerías", "biz.8": "Clínicas dentales", "biz.9": "Gimnasios", "biz.10": "Hoteles boutique",
    "feat.eyebrow": "Lo que obtiene", "feat.h2": "Todo lo que un negocio local necesita en línea.",
    "feat.1t": "Diseño a medida", "feat.1d": "Nada de aspecto genérico. Una presencia acorde a su marca y sector.",
    "feat.2t": "Móvil y ultrarrápido", "feat.2d": "Se ve tan bien en el móvil como en el escritorio — y carga en segundos.",
    "feat.3t": "Encontrado en Google", "feat.3d": "Bien optimizado para que los clientes lo encuentren al buscar cerca.",
    "feat.4t": "Contacto y reservas", "feat.4d": "Formulario de contacto, reserva o llamada con un clic — integrados directamente.",
    "feat.5t": "Dominio y correo propios", "feat.5d": "Su-nombre.ch y una dirección de correo profesional están incluidos.",
    "feat.6t": "Soporte y actualizaciones", "feat.6d": "Seguimos siendo su punto de contacto — cambios incluidos, sin sistema de tickets.",
    "band.h2": "Para restaurantes, peluquerías, artesanos y consultorios.", "band.p": "Conocemos los sectores locales y lo que importa — desde el menú hasta la reserva de citas en línea.",
    "pricing.eyebrow": "Precios transparentes", "pricing.h2": "Paquetes justos. Sin costos ocultos.", "pricing.p": "Sin cuota de instalación. La demo siempre es gratuita — estos precios solo aplican al publicar su sitio.",
    "price.starter": "Starter", "price.starter.sub": "Para una primera presencia impecable", "price.permo": " / mes", "price.nosetup": "Sin cuota de instalación",
    "price.starter.f1": "Sitio web de una página", "price.starter.f2": "Formulario de contacto", "price.starter.f3": "Hosting y SSL incluidos", "price.starter.f4": "Optimizado para Google",
    "price.tag": "El más elegido", "price.growth": "Crecimiento", "price.growth.sub": "Para negocios que quieren más",
    "price.growth.f1": "Hasta 5 páginas", "price.growth.f2": "Reservas / citas", "price.growth.f3": "Configuración de Google Business", "price.growth.f4": "1 cambio al mes incluido",
    "price.partner": "Partner", "price.partner.sub": "La presencia completa",
    "price.partner.f1": "Presencia web completa", "price.partner.f2": "Textos e imágenes de nuestra parte", "price.partner.f3": "Soporte prioritario", "price.partner.f4": "Renovación trimestral",
    "price.cta": "Solicitar una demo",
    "price.note": "Sin permanencia más allá de 12 meses. Usted es siempre dueño de su dominio y contenido.",
    "about.eyebrow": "Sobre Kwipps", "about.quote": "Construimos primero — y preguntamos después. Debería ver el sitio terminado antes de decidir nada.", "about.name": "Ander Lopez", "about.role": "Fundador, Kwipps",
    "trust.1": "Contacto en Suiza", "trust.2": "Respuesta en 24 horas", "trust.3": "Conforme a la LPD suiza / RGPD", "trust.4": "Su dominio y contenido son suyos",
    "faq.eyebrow": "Preguntas frecuentes", "faq.h2": "Todo lo que quiere saber.",
    "faq.q1": "¿Cuánto cuesta la demo?", "faq.a1": "Nada. En serio. Ve su sitio web terminado antes de decidir nada — sin costo ni compromiso.",
    "faq.q2": "¿Qué tan rápido estará mi sitio en línea?", "faq.a2": "Normalmente en una semana después de darnos su aprobación. La demo en sí suele estar lista en pocos días.",
    "faq.q3": "¿Puedo pedir cambios?", "faq.a3": "Por supuesto. Los ajustes forman parte de cada paquete — nos dice qué desea y lo hacemos realidad.",
    "faq.q4": "¿Qué pasa con mi sitio web y dominio anteriores?", "faq.a4": "Migramos todo de forma limpia, sin interrupciones. Usted conserva su dominio actual — simplemente lo reconfiguramos.",
    "faq.q5": "¿Y si no me gusta la demo?", "faq.a5": "Entonces la eliminamos y no ha perdido nada. Sin trampas, sin costos.",
    "contact.eyebrow": "Empezar", "contact.h2": "Solicite su vista previa gratuita.", "contact.sub": "Bastan unos pocos datos — le creamos de inmediato un sitio de vista previa gratuito y le enviamos el enlace por correo.",
    "ph.name": "Su nombre", "ph.email": "Su correo electrónico", "ph.business": "Nombre de su negocio", "ph.address": "Dirección / localidad de su negocio", "ph.message": "¿De qué se trata? (opcional)",
    "contact.submit": "Solicitar vista previa gratuita", "contact.sending": "Enviando…", "contact.or": "O escríbanos directamente a ",
    "form.sent": "¡Gracias! Estamos creando su vista previa gratuita. Revise su correo para la confirmación — el enlace a su sitio llegará en unos minutos.",
    "form.err": "Algo salió mal. Por favor escríbanos a info@kwipps.com.",
    "footer.tagline": "Sitios web para negocios locales — construidos antes de que pague.", "footer.impressum": "Aviso legal", "footer.datenschutz": "Privacidad",
};

const DICTS: Record<Lang, Dict> = { en, de, fr, es };
export const LANG_LABEL: Record<Lang, string> = { en: "EN", de: "DE", fr: "FR", es: "ES" };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };
const I18nContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (k) => k });

export function I18nProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");

    useEffect(() => {
        const saved = (typeof localStorage !== "undefined" && localStorage.getItem("kwipps-lang")) as Lang | null;
        if (saved && LANGS.includes(saved)) { setLangState(saved); return; }
        const nav = (typeof navigator !== "undefined" ? navigator.language : "en").slice(0, 2) as Lang;
        if (LANGS.includes(nav)) setLangState(nav);
    }, []);

    const setLang = (l: Lang) => {
        setLangState(l);
        try { localStorage.setItem("kwipps-lang", l); } catch { /* ignore */ }
        if (typeof document !== "undefined") document.documentElement.lang = l;
    };

    const t = (key: string) => DICTS[lang][key] ?? en[key] ?? key;
    return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
