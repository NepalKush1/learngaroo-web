import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { FaqExplorer } from "@/components/faq/FaqExplorer";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { faqs, faqGroups, faqReviewedOn } from "@/data/faqs";
import { agent } from "@/data/agent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Plain-English answers about working with a Registered Migration Agent, fees and third-party costs, application timing, disclosure and how we work.",
};

export default function FaqPage() {
  const groups = [{ title: "The basics", items: faqs }, ...faqGroups];
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((group) =>
      group.items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20">
        <div className="bg-dots pointer-events-none absolute inset-0 opacity-30 invert" aria-hidden="true" />
        <div className="hero-blob pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-green/25 blur-3xl" aria-hidden="true" />
        <Container className="relative">
          <Eyebrow tone="light">Help centre</Eyebrow>
          <h1 className="font-heading mt-5 max-w-3xl text-4xl font-extrabold sm:text-5xl lg:text-6xl">
            Frequently asked <span className="text-gradient-brand">questions</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            {total} plain-English answers about visas, fees and how we work, written by a
            Registered Migration Agent.
          </p>
          <p className="mt-6 inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/10 px-4 py-2 text-sm text-white/80 ring-1 ring-white/15">
            <span className="h-2 w-2 rounded-full bg-brand-green-light" aria-hidden="true" />
            Reviewed by {agent.name}, MARN {agent.marn}, on {faqReviewedOn}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <FaqExplorer groups={groups} />
          <GeneralInfoNotice className="mt-16" />
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
