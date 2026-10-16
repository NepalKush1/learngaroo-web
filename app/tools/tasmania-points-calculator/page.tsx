import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { PointsHubBacklink } from "@/components/tools/PointsHubBacklink";
import { TasmaniaCalculator } from "@/components/tools/TasmaniaCalculator";

export const metadata: Metadata = {
  title: "Tasmania Nomination Points Calculator 2026-27 (190 & 491 Priority Attributes)",
  description:
    "Work out your Migration Tasmania priority attribute points and pass tier (Gold, Green, Orange Plus, Orange) for subclass 190 and 491 nomination across the Skilled Employment, Graduate, Established Resident and Business Operator pathways.",
};

export default function TasmaniaPointsCalculatorPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tool · 2026-27 program"
        title="Tasmania nomination points calculator"
        subtitle="Tasmania ranks Registrations of Interest by priority attributes, not the SkillSelect points test. Tell us your occupation and answer plain-language questions about your job, pay, study and time in Tasmania. We check the minimum requirements for your pathway, including the employment period your occupation needs, then show your pass tier and points."
      />
      <section className="bg-brand-surface py-16">
        <Container>
          <PointsHubBacklink tab="tasmania" />
          <TasmaniaCalculator />
        </Container>
      </section>
    </>
  );
}
