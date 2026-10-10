import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Australian Visa & Migration Services",
  description:
    "Help with Australian student, skilled, employer-sponsored, partner and visitor visas, skills assessments and ART reviews from a Registered Migration Agent.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Migration Assistance"
        title="Migration Services"
        subtitle="Whatever stage of your migration journey you're at, we help you understand the pathway that fits your situation."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <ConsultationCTA />
    </>
  );
}
