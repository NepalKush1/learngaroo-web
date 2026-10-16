import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { OccupationSearch } from "@/components/occupations/OccupationSearch";
import { occupationListsAsAt, occupations } from "@/data/occupations";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Skilled Occupations: Skills Assessment, Visa Options & Lists",
  description:
    "Search Australian skilled occupations by name or ANZSCO code. See the assessing authority, which skilled occupation lists apply and which visas (189, 190, 491, 482, 186, 494) each occupation can lead to.",
};

export default function OccupationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Skilled occupations for Australian migration",
    numberOfItems: occupations.length,
    itemListElement: occupations.map((occupation, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${occupation.title} (ANZSCO ${occupation.anzsco})`,
      url: `${siteConfig.url}/occupations/${occupation.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <PageHero
        eyebrow="Occupation guides"
        title="Find your occupation and the visas it can lead to"
        subtitle="For each occupation: who assesses your skills, which skilled occupation lists it is on, which visas are open and what to do first. Lists checked against Home Affairs instruments."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <OccupationSearch />
          <p className="mt-10 text-xs text-gray-500">
            Occupation lists checked on {occupationListsAsAt}. The lists change by legislative instrument, usually with little notice, and state nomination lists are narrower again.
          </p>
          <GeneralInfoNotice className="mt-3" />
        </Container>
      </section>
      <ConsultationCTA
        title="Not sure which occupation to nominate?"
        subtitle="The right ANZSCO code depends on your actual duties, not your job title. We check it before you spend money on a skills assessment."
      />
    </>
  );
}
