import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = getRelatedServices(slug);

  return (
    <>
      <PageHero
        eyebrow="Migration Service"
        title={service.title}
        subtitle={service.heroBlurb}
      />

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-gray-600">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              What&apos;s included
            </h2>
            <ol className="mt-4 space-y-4">
              {service.process.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-surface text-base font-semibold text-brand-navy">
                    {index + 1}
                  </span>
                  <span className="text-lg text-gray-600">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-surface py-20">
          <Container>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Related services
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedService) => (
                <ServiceCard key={relatedService.slug} service={relatedService} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <ConsultationCTA
        title={`Ask about the ${service.title}`}
        subtitle="Book a consultation and we'll walk you through your eligibility and next steps."
      />
    </>
  );
}
