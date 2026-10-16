import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { FaqItem } from "@/components/sections/FaqItem";
import {
  authorities,
  getOccupationBySlug,
  occupationListsAsAt,
  occupations,
  visaOptionsFor,
} from "@/data/occupations";
import { statePrograms, statusLabels } from "@/data/state-nomination";
import { siteConfig } from "@/lib/site-config";

export async function generateStaticParams() {
  return occupations.map((occupation) => ({ slug: occupation.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const occupation = getOccupationBySlug(slug);
  if (!occupation) return {};
  const authority = authorities[occupation.authority];
  return {
    title: `${occupation.title} (ANZSCO ${occupation.anzsco}): Skills Assessment & Visa Options`,
    description: `${occupation.title} skills assessment by ${authority.short}, skilled occupation lists, and visa options (189, 190, 491, 482, 186, 494) for Australian migration, explained by a Registered Migration Agent.`,
  };
}

const listNames: Record<string, string> = {
  mltssl: "Medium and Long-term Strategic Skills List (MLTSSL)",
  stsol: "Short-term Skilled Occupation List (STSOL)",
  rol: "Regional Occupation List (ROL)",
  csol: "Core Skills Occupation List (CSOL)",
};

export default async function OccupationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const occupation = getOccupationBySlug(slug);
  if (!occupation) notFound();

  const authority = authorities[occupation.authority];
  const visaOptions = visaOptionsFor(occupation);
  const onLists = Object.entries(occupation.lists).filter(([, on]) => on).map(([key]) => listNames[key]);
  const offLists = Object.keys(listNames).filter((key) => !occupation.lists[key as keyof typeof occupation.lists]).map((key) => listNames[key]);
  const related = occupations.filter((item) => item.field === occupation.field && item.slug !== occupation.slug).slice(0, 4);

  const faqs = [
    {
      question: `Who assesses skills for ${occupation.title}?`,
      answer: `${authority.name} (${authority.short}). ${authority.pathway}`,
    },
    {
      question: `Can I apply for a subclass 189 visa as a ${occupation.title}?`,
      answer: occupation.lists.mltssl
        ? `Yes, the occupation is on the MLTSSL, so you can lodge an Expression of Interest for subclass 189 once you have a positive skills assessment and at least 65 points. Invitations are competitive and go to the highest scores in each round.`
        : `No. Subclass 189 is limited to MLTSSL occupations. ${occupation.title} is on the ${occupation.lists.stsol ? "STSOL" : "ROL"}, so the points-tested options are subclass 190 and 491 with state or regional nomination.`,
    },
    {
      question: `Can an employer sponsor a ${occupation.title}?`,
      answer: occupation.lists.csol
        ? `Yes. The occupation is on the Core Skills Occupation List, so an approved sponsor can nominate you for the Skills in Demand visa (subclass 482), and for permanent residence through subclass 186 Direct Entry or the regional subclass 494.`
        : `Not under the standard streams. The occupation is not on the Core Skills Occupation List, so employer sponsorship would need a labour agreement or DAMA.`,
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Occupation",
      name: occupation.title,
      description: occupation.description,
      occupationalCategory: `ANZSCO ${occupation.anzsco}`,
      occupationLocation: { "@type": "Country", name: "Australia" },
      qualifications: `Skills assessment by ${authority.name}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Occupations", item: `${siteConfig.url}/occupations` },
        { "@type": "ListItem", position: 3, name: occupation.title },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <PageHero
        eyebrow={`ANZSCO ${occupation.anzsco} · ${occupation.field}`}
        title={occupation.title}
        subtitle={occupation.description}
      />

      {/* Key facts */}
      <section className="relative -mt-10 pb-4">
        <Container>
          <Reveal>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Assessed by", value: authority.short, note: authority.name },
                { label: "Skill level", value: `Level ${occupation.skillLevel}`, note: occupation.skillLevel === 1 ? "Bachelor degree or higher, or equivalent experience" : occupation.skillLevel === 2 ? "Diploma or advanced diploma, or equivalent" : "Certificate III or IV with experience, or equivalent" },
                { label: "Points-tested visas", value: occupation.lists.mltssl ? "189, 190, 491" : occupation.lists.stsol ? "190, 491" : "491", note: occupation.lists.mltssl ? "On the MLTSSL" : occupation.lists.stsol ? "On the STSOL, not the MLTSSL" : "On the ROL only" },
                { label: "Employer sponsored", value: occupation.lists.csol ? "482, 186, 494" : "Labour agreement only", note: occupation.lists.csol ? "On the Core Skills Occupation List" : "Not on the CSOL" },
              ].map((fact) => (
                <li key={fact.label} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-float">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">{fact.label}</span>
                  <span className="font-heading mt-2 block text-2xl font-extrabold leading-tight text-brand-navy">{fact.value}</span>
                  <span className="mt-1.5 block text-xs leading-relaxed text-gray-500">{fact.note}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-gray-500">
              Lists checked on {occupationListsAsAt} against the Home Affairs skilled occupation list instruments.{" "}
              {occupation.prioritySector && "This occupation is in a sector prioritised for processing under Ministerial Direction 122."}
            </p>
          </Reveal>
        </Container>
      </section>

      {occupation.notes && occupation.notes.length > 0 && (
        <section className="py-6">
          <Container>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-heading font-bold text-brand-navy">Worth knowing</p>
              <ul className="mt-2 space-y-1.5">
                {occupation.notes.map((note) => (
                  <li key={note} className="text-[15px] leading-relaxed text-gray-700">{note}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      )}

      {/* Visa options */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Visa options"
              title={`Which visas a ${occupation.title} can apply for`}
              subtitle="Based on the skilled occupation lists. Each visa has its own criteria (points, age, English, experience, nomination) on top of the occupation."
            />
          </Reveal>
          <div className="mt-10 overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-card">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
                  <th scope="col" className="px-5 py-4 font-bold">Visa</th>
                  <th scope="col" className="px-5 py-4 font-bold">Available?</th>
                  <th scope="col" className="px-5 py-4 font-bold">What it needs</th>
                  <th scope="col" className="px-5 py-4 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {visaOptions.map((option) => (
                  <tr key={option.subclass} className={`border-b border-gray-100 last:border-0 ${option.eligible ? "" : "opacity-60"}`}>
                    <th scope="row" className="px-5 py-4 font-normal">
                      <span className="font-bold text-brand-navy">Subclass {option.subclass}</span>
                      <span className="block text-xs text-gray-500">{option.name}</span>
                    </th>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${option.eligible ? "bg-emerald-100 text-emerald-800 ring-emerald-200" : "bg-gray-100 text-gray-600 ring-gray-200"}`}>
                        {option.eligible ? "Yes" : "No"}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600">{option.note}</td>
                    <td className="px-5 py-4 text-right">
                      {option.eligible && (
                        <Link href={option.href} className="text-sm font-bold text-brand-primary hover:underline">Guide →</Link>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
            <p><span className="font-bold text-brand-navy">On these lists:</span> {onLists.join("; ")}.</p>
            {offLists.length > 0 && <p><span className="font-bold text-brand-navy">Not on:</span> {offLists.join("; ")}.</p>}
          </div>
        </Container>
      </section>

      {/* Skills assessment */}
      <section className="bg-brand-surface py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Skills assessment"
              title={`How ${authority.short} assesses ${occupation.title.toLowerCase()}s`}
              subtitle="A positive skills assessment is the first building block for every skilled visa and most employer-sponsored visas."
            />
            <dl className="mt-8 space-y-4">
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Pathway</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{authority.pathway}</dd>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-5">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Timing</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{authority.timing} Fees are set by the authority and are separate from visa charges.</dd>
              </div>
              {occupation.registration && (
                <div className="rounded-2xl border border-gray-100 bg-white p-5">
                  <dt className="text-xs font-bold uppercase tracking-[0.14em] text-brand-primary">Registration to work</dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-gray-700">{occupation.registration}. Registration is separate from the migration skills assessment, although for some health professions the same body handles both.</dd>
                </div>
              )}
            </dl>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/services/skills-assessments">
                Skills assessment service
                <ArrowIcon />
              </Button>
              <Button href={authority.url} external variant="outline">
                {authority.short} website
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionHeading
              eyebrow="State nomination"
              title="Where nomination may be open"
              subtitle="Each state publishes its own occupation list and criteria. Status when we last checked; open the state guide for detail."
            />
            <ul className="mt-8 space-y-2">
              {statePrograms.map((program) => {
                const status = statusLabels[program.status];
                return (
                  <li key={program.slug}>
                    <Link href={`/state-nomination/${program.slug}`} className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 text-sm transition-colors hover:border-brand-primary/40">
                      <span className="font-bold text-brand-navy">{program.name}</span>
                      <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${status.className}`}>{status.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-3 text-xs text-gray-500">Status checked on {statePrograms[0].checkedOn}. Whether a state will nominate this specific occupation depends on its current list.</p>
          </Reveal>
        </Container>
      </section>

      {/* Next steps + FAQ */}
      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <SectionHeading eyebrow="Next steps" title="What to do first" />
            <ol className="mt-8 space-y-4">
              {[
                { title: "Confirm the ANZSCO code", text: "Match your actual duties to the occupation tasks. The wrong code is the most common reason assessments and visas fail." },
                { title: "Check your points", text: "Estimate your score and see where you could gain more before you pay for an assessment.", href: "/tools/points-calculator", label: "Points calculator" },
                { title: "Get the skills assessment", text: `Apply to ${authority.short} with the evidence it expects for your pathway.`, href: "/services/skills-assessments", label: "Skills assessment service" },
                { title: "Lodge your EOI or find a sponsor", text: "Points-tested visas need an Expression of Interest in SkillSelect; sponsored visas need an approved employer nomination." },
              ].map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary text-sm font-extrabold text-white">{index + 1}</span>
                  <span>
                    <span className="block font-bold text-brand-navy">{step.title}</span>
                    <span className="block text-[15px] leading-relaxed text-gray-600">{step.text}</span>
                    {step.href && <Link href={step.href} className="mt-1 inline-block text-sm font-bold text-brand-primary hover:underline">{step.label} →</Link>}
                  </span>
                </li>
              ))}
            </ol>
            <GeneralInfoNotice className="mt-8" />
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="FAQ" title={`Questions about ${occupation.title.toLowerCase()} migration`} />
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-surface py-16">
          <Container>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">Related occupations in {occupation.field.toLowerCase()}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={`/occupations/${item.slug}`} className="block h-full rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-float">
                    <span className="text-xs font-bold text-brand-primary">ANZSCO {item.anzsco}</span>
                    <span className="font-heading mt-1 block font-bold text-brand-navy">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/occupations" className="mt-6 inline-block text-sm font-bold text-brand-primary hover:underline">All occupations →</Link>
          </Container>
        </section>
      )}

      <ConsultationCTA
        title={`Planning a visa as a ${occupation.title}?`}
        subtitle="Book a consultation and we will confirm your occupation, assess your points and map the fastest realistic pathway."
      />
    </>
  );
}
