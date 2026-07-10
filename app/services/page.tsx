import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Migration assistance across skilled visas, skills assessments, employer sponsorship, family and partner visas, visitor visas and ART reviews.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Migration Assistance"
        title="Migration Services"
        subtitle="Whatever stage of your migration journey you're at, we help you understand the pathway that fits your situation — and exactly what your next step should be."
      />

      <section className="py-20">
        <Container>
          {/* Directory header — heading left, plain-English reassurance right */}
          <div className="grid gap-6 border-b border-gray-100 pb-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                {services.length} ways we can help
              </p>
              <h2 className="font-heading mt-2 max-w-xl text-3xl font-semibold text-brand-navy sm:text-4xl">
                Find the pathway that fits you
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">
              Every service starts with an honest assessment of where you stand.
              Not sure which one matches your situation? Pick the closest — a
              consultation will point you to the right path.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
