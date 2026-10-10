import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { VisaFinder } from "@/components/tools/VisaFinder";

export const metadata: Metadata = {
  title: "Visa Pathway Finder",
  description:
    "Answer three quick questions to find the Australian visa pathway and consultation that best fits your goals — study, skilled PR, employer sponsorship, partner, visitor or review.",
};

export default function VisaFinderPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Find your visa pathway"
        subtitle="Three quick questions to point you to the right place to start."
      />
      <section className="bg-brand-surface py-16">
        <Container className="max-w-5xl">
          <VisaFinder />
        </Container>
      </section>
    </>
  );
}
