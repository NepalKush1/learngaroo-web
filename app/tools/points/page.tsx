import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { PointsHub } from "@/components/tools/PointsHub";

export const metadata: Metadata = {
  title: "Points Calculators: Federal, Victoria, Tasmania & ACT",
  description:
    "Every skilled migration points calculation in one place: the federal 189, 190 and 491 points test, the Victorian Points Test, Tasmania's ranking and the Canberra Matrix. Free, no sign-up.",
  alternates: { canonical: "/tools/points" },
};

export default function PointsHubPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title="Points calculators"
        subtitle="Skilled migration is scored twice: the federal points test every applicant must pass, then a state or territory ranking if you want nomination. Work through both here. Your federal total carries across each tab."
      />
      <section className="bg-brand-surface py-12 sm:py-16">
        <Container>
          {/* The hub reads ?tab= with useSearchParams, so it needs a boundary to keep the page static. */}
          <Suspense fallback={null}>
            <PointsHub />
          </Suspense>
        </Container>
      </section>
      <ConsultationCTA />
    </>
  );
}
