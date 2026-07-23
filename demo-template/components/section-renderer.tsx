import type { Section } from "@/lib/spec";
import { CUSTOM_SECTIONS } from "@/components/custom";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Menu } from "@/components/sections/menu";
import { Pricing } from "@/components/sections/pricing";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";

/** Maps a spec section to its component. Unknown types render nothing rather
 * than crashing the build — a malformed agent spec degrades, never fails. */
export function SectionRenderer({ section, agencyCredit }: { section: Section; agencyCredit: string }) {
    switch (section.type) {
        case "header":
            return <Header section={section} />;
        case "hero":
            return <Hero section={section} />;
        case "features":
            return <Features section={section} />;
        case "stats":
            return <Stats section={section} />;
        case "gallery":
            return <Gallery section={section} />;
        case "testimonials":
            return <Testimonials section={section} />;
        case "menu":
            return <Menu section={section} />;
        case "pricing":
            return <Pricing section={section} />;
        case "faq":
            return <Faq section={section} />;
        case "cta":
            return <Cta section={section} />;
        case "contact":
            return <Contact section={section} />;
        case "footer":
            return <Footer section={section} agencyCredit={agencyCredit} />;
        case "custom": {
            const Custom = CUSTOM_SECTIONS[section.component];
            // Resolved photo slots are forwarded as a `photos` prop so
            // agent-written sections can use real stock photos too.
            return Custom ? <Custom {...(section.props ?? {})} photos={section.photos ?? []} /> : null;
        }
        default:
            return null;
    }
}
