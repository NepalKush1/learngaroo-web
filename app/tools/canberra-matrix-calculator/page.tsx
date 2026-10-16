import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PointsHubBacklink } from "@/components/tools/PointsHubBacklink";
import { CanberraMatrixCalculator } from "@/components/tools/CanberraMatrixCalculator";

export const metadata: Metadata = {
  title: "Canberra Matrix Calculator: ACT Nomination Score (190 & 491)",
  description:
    "Estimate your Canberra Matrix score for ACT Government nomination (subclass 190 and 491) as a Canberra resident or overseas applicant, using the ACT's published categories and points.",
};

export default function CanberraMatrixCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Canberra Matrix calculator"
        subtitle="The ACT ranks nomination candidates with its own matrix. Answer each category to estimate your score for a subclass 190 or 491 nomination."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <PointsHubBacklink tab="act" />
          <CanberraMatrixCalculator />
        </Container>
      </section>
    </>
  );
}
