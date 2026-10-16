import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { FeeCalculator } from "@/components/tools/FeeCalculator";

export const metadata: Metadata = {
  title: "Australian Visa Fee Calculator 2026-27 (Government Charges)",
  description:
    "Estimate the Department of Home Affairs visa application charge for student, graduate, skilled, employer-sponsored, partner and visitor visas, including family members and card surcharges. 1 July 2026 prices.",
};

export default function FeeCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Visa application fee calculator"
        subtitle="Work out the government charge for your visa with family members included, using the 1 July 2026 Home Affairs prices. Professional fees are separate and always quoted in writing."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <FeeCalculator />
        </Container>
      </section>
    </>
  );
}
