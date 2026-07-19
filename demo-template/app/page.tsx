import spec from "@/site.spec.json";
import { SectionRenderer } from "@/components/section-renderer";
import type { SiteSpec } from "@/lib/spec";

const site = spec as unknown as SiteSpec;

export default function Page() {
    return (
        <main>
            {site.sections.map((section, i) => (
                <SectionRenderer key={i} section={section} agencyCredit={site.agencyCredit} />
            ))}
        </main>
    );
}
