import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { services } from "@/data/services";
import { visaGuides, processingTimesUrl } from "@/data/visa-guides";
import { serviceAccent } from "@/lib/accents";

// One table to compare every service at a glance: subclasses, government
// fee, length of stay and what it leads to. All values come from the
// visa guides so they stay in step with the service pages.

const leadsTo: Record<string, string> = {
  "student-visas": "Temporary Graduate visa, then skilled or sponsored pathways",
  "skilled-visas": "Permanent residence (189, 190) or subclass 191 after 491",
  "skills-assessments": "Points-tested and employer-sponsored visas",
  "employer-sponsored-visas": "Subclass 186 after 2 years, or subclass 191 after 494",
  "family-partner-visas": "Permanent Partner visa, then citizenship",
  "visitor-tourist-visas": "Short stays only; other visas need a new application",
  "art-reviews": "Decision remitted to Home Affairs, or further options",
};

export function ServiceComparisonTable() {
  const rows = services.map((service) => {
    const guide = visaGuides[service.slug];
    const fee = guide?.keyFacts.find((fact) => /fee|cost/i.test(fact.label));
    const stay = guide?.keyFacts.find((fact) => /stay|stages|deadline|validity/i.test(fact.label));
    return { service, guide, fee, stay };
  });
  const factsAsAt = rows.find((row) => row.guide)?.guide?.factsAsAt;

  return (
    <section className="bg-brand-surface py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Compare at a glance"
            title="Every service, side by side"
            highlight="side by side"
            subtitle="Government fees, length of stay and where each visa leads. Open a service for eligibility, documents and the full process."
            align="center"
          />
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-card">
            <table className="w-full min-w-[840px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
                  <th scope="col" className="px-5 py-4 font-bold">Service</th>
                  <th scope="col" className="px-5 py-4 font-bold">Subclasses</th>
                  <th scope="col" className="px-5 py-4 font-bold">Government fee</th>
                  <th scope="col" className="px-5 py-4 font-bold">Length of stay</th>
                  <th scope="col" className="px-5 py-4 font-bold">Leads to</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ service, fee, stay }) => {
                  const accent = serviceAccent(service.slug);
                  return (
                    <tr key={service.slug} className="border-b border-gray-100 last:border-0 hover:bg-brand-surface/60">
                      <th scope="row" className="px-5 py-4 font-normal">
                        <Link href={`/services/${service.slug}`} className="group flex items-center gap-3">
                          <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white ${accent.tile}`}>
                            <ServiceIcon slug={service.slug} className="h-4.5 w-4.5" />
                          </span>
                          <span className="font-bold text-brand-navy group-hover:underline">{service.title}</span>
                        </Link>
                      </th>
                      <td className="px-5 py-4 text-gray-600">
                        {service.subclasses?.map((subclass) => (subclass === "ART" ? "ART" : subclass)).join(", ") ?? "—"}
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-bold text-brand-navy">{fee?.value ?? "—"}</span>
                        {fee?.note && <span className="block text-xs text-gray-500">{fee.note}</span>}
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-bold text-brand-navy">{stay?.value ?? "—"}</span>
                        {stay?.note && <span className="block text-xs text-gray-500">{stay.note}</span>}
                      </td>
                      <td className="px-5 py-4 text-gray-600">{leadsTo[service.slug]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-gray-500">
            Government fees are the Department of Home Affairs or ART charges for the primary applicant{factsAsAt ? `, checked on ${factsAsAt}` : ""}, and are separate from our consultation fees. Processing times change monthly:{" "}
            <a href={processingTimesUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-primary hover:underline">
              check the current guide ↗
            </a>
            .
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
