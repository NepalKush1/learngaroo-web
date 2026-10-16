import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { services, getServiceBySlug, getRelatedServices, serviceTitleInSentence } from "@/data/services";
import { getConsultationBySlug, formatPrice } from "@/data/consultations";
import { siteConfig } from "@/lib/site-config";
import { getVideosForService } from "@/data/videos";
import { VideoCard } from "@/components/video/VideoCard";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { RelatedVisaGuides } from "@/components/visas/RelatedVisaGuides";
import { getVisaGuide } from "@/data/visa-guides";
import { serviceAccent } from "@/lib/accents";
import { getServiceExplainer } from "@/data/service-explainers";
import { ServiceExplainerPage } from "@/components/services/explainer/ServiceExplainerPage";
import {
  KeyFactsStrip,
  GuideAlert,
  EligibilityAndDocuments,
  ProcessSteps,
  Pathways,
  GuideFaqSection,
} from "@/components/sections/VisaGuideSections";

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

  const url = `${siteConfig.url}/services/${service.slug}`;
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.summary, url, type: "website" },
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
  const consultation = getConsultationBySlug(slug);
  const serviceVideos = getVideosForService(slug);
  const guide = getVisaGuide(slug);
  const accent = serviceAccent(slug);

  // Jump links for the long guide pages.
  const sections = [
    { id: "overview", label: "Overview" },
    ...(guide
      ? [
          { id: "eligibility", label: "Eligibility & documents" },
          { id: "process", label: "How it works" },
          { id: "pathways", label: "What comes next" },
        ]
      : []),
    ...(serviceVideos.length > 0 ? [{ id: "videos", label: "Videos" }] : []),
    ...(guide ? [{ id: "faq", label: "FAQ" }] : []),
  ];

  // Rich-result data: the service itself plus a breadcrumb trail.
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.summary,
      url: `${siteConfig.url}/services/${service.slug}`,
      serviceType: "Australian migration assistance",
      areaServed: "Worldwide",
      provider: { "@type": "ProfessionalService", name: siteConfig.fullName, url: siteConfig.url },
      ...(consultation && {
        offers: {
          "@type": "Offer",
          name: consultation.title,
          price: (consultation.priceInCents / 100).toFixed(2),
          priceCurrency: consultation.currency,
          description: `${consultation.durationMinutes}-minute consultation, ${formatPrice(consultation.priceInCents, consultation.currency)} including GST`,
          url: `${siteConfig.url}/bookings`,
        },
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: service.title },
      ],
    },
  ];

  const jsonLdScript = (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );

  // The interactive layout, once the service has an explainer.
  const explainer = getServiceExplainer(slug);
  if (explainer && guide) {
    return (
      <>
        {jsonLdScript}
        <ServiceExplainerPage service={service} explainer={explainer} guide={guide} consultation={consultation} videos={serviceVideos} related={related} />
      </>
    );
  }

  return (
    <>
      {jsonLdScript}
      <PageHero
        eyebrow="Migration Service"
        title={service.title}
        subtitle={service.heroBlurb}
      />

      {guide && <KeyFactsStrip guide={guide} accent={accent} />}

      {sections.length > 2 && (
        <nav aria-label="On this page" className="sticky top-20 z-30 border-y border-gray-100 bg-white/90 backdrop-blur">
          <Container>
            <ul className="-mx-1 flex gap-1 overflow-x-auto py-2 text-sm font-semibold text-brand-navy/70 [scrollbar-width:none]">
              {sections.map((section) => (
                <li key={section.id} className="shrink-0">
                  <a href={`#${section.id}`} className="block rounded-full px-3 py-1.5 transition-colors hover:bg-brand-mint hover:text-brand-primary-dark">
                    {section.label}
                  </a>
                </li>
              ))}
              <li className="ml-auto shrink-0">
                <a href="/bookings" className="block rounded-full bg-brand-primary px-4 py-1.5 text-white transition-colors hover:bg-brand-primary-dark">
                  Book a consultation
                </a>
              </li>
            </ul>
          </Container>
        </nav>
      )}

      {guide?.alert && <GuideAlert alert={guide.alert} />}

      <section id="overview" className="scroll-mt-32 py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Who this is for
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whoItsFor.map((item) => (
                <li key={item} className="flex gap-3 text-lg text-gray-600">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
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
            {guide && (
              <p className="mt-6 text-sm text-gray-500">
                Covers: {guide.covers}.
              </p>
            )}
          </div>
        </Container>
      </section>

      {guide && (
        <>
          <div id="eligibility" className="scroll-mt-32">
            <EligibilityAndDocuments guide={guide} accent={accent} />
          </div>
          <div id="process" className="scroll-mt-32">
            <ProcessSteps guide={guide} serviceTitle={service.title} />
          </div>
          <div id="pathways" className="scroll-mt-32">
            <Pathways guide={guide} accent={accent} />
          </div>
        </>
      )}

      {serviceVideos.length > 0 && (
        <section id="videos" className="scroll-mt-32 bg-brand-surface py-16 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                Watch: {serviceTitleInSentence(service.title)} explained
              </h2>
              <GeneralInfoNotice />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceVideos.slice(0, 3).map((video) => (
                <VideoCard key={video.slug} video={video} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {guide && (
        <div id="faq" className="scroll-mt-32">
          <GuideFaqSection guide={guide} serviceTitle={service.title} />
        </div>
      )}

      <RelatedVisaGuides serviceSlug={slug} />

      {related.length > 0 && (
        <section className="py-16 sm:py-20">
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
        title={`Questions about ${service.title}?`}
        subtitle="Book a consultation and we'll walk you through your eligibility and next steps."
      />
    </>
  );
}
