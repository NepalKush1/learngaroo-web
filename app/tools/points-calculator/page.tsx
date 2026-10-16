import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PointsHubBacklink } from "@/components/tools/PointsHubBacklink";
import { PointsCalculator } from "@/components/tools/PointsCalculator";

export const metadata: Metadata = {
  title: "Skilled Visa Points Calculator (189, 190, 491)",
  description:
    "Free skilled migration points calculator. Estimate your points for subclass 189, 190 and 491 visas and see how a higher PTE score could lift your total.",
};

export default function PointsCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool"
        title="Skilled visa points calculator"
        subtitle="Estimate your points for the Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (Provisional) (subclass 491) visas, and see where you could gain more."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <PointsHubBacklink tab="federal" />
          {/* useSearchParams inside needs a boundary so the page stays static. */}
          <Suspense fallback={null}>
            <PointsCalculator />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
