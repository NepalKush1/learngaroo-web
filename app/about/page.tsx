import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PageHero } from "@/components/sections/PageHero";
import { AgentFullStory } from "@/components/sections/AgentFullStory";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { TeamSection } from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learngaroo helps people navigate Australian visa, migration and education pathways with clear, personalised guidance.",
};

const values = [
  {
    title: "Clarity",
    description:
      "Migration and study pathways can be complex. We explain your options in plain language, so you always know where things stand.",
  },
  {
    title: "Personalised guidance",
    description:
      "No two situations are the same. We take the time to understand your goals before recommending a pathway.",
  },
  {
    title: "Integrity",
    description:
      "We give honest, realistic advice about your eligibility and options — not just what you want to hear.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Learngaroo"
        title="Helping you learn, migrate and work in Australia"
        subtitle="Learngaroo was founded to help people navigate Australian migration and education pathways with clarity and confidence, from the first assessment through to a lodged application."
      />

      <AgentFullStory />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="rounded-2xl bg-brand-surface p-6">
                  <h3 className="font-heading text-lg font-semibold text-brand-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <TeamSection />
      <ConsultationCTA />
    </>
  );
}
