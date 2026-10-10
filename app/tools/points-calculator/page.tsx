import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PointsCalculator } from "@/components/tools/PointsCalculator";

export const metadata: Metadata = {
  title: "Skilled Visa Points Calculator (189, 190, 491)",
  description:
    "Free Australian skilled migration points calculator. Estimate your points for the 189, 190 and 491 visas in under two minutes, and see how a better PTE score could lift your total.",
};

export default function PointsCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Skilled visa points calculator"
        subtitle="Estimate your points for the Skilled Independent (189), Skilled Nominated (190) and Skilled Work Regional (491) visas — and see where you could gain more."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <PointsCalculator />
        </Container>
      </section>
    </>
  );
}
