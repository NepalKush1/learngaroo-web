import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { ToolCards } from "@/components/sections/ToolsSection";

export const metadata: Metadata = {
  title: "Free Migration Tools",
  description:
    "Free tools for planning your move to Australia: a skilled visa points calculator, a visa pathway finder and PTE practice on Learniiz.",
};

export default function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Free tools"
        title="Plan your move with confidence"
        subtitle="Free, private tools to check where you stand — then talk it through with a Registered Migration Agent."
      />
      <section className="bg-brand-surface py-20">
        <Container>
          <ToolCards />
        </Container>
      </section>
      <ConsultationCTA />
    </>
  );
}
