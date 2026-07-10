import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { siteConfig } from "@/lib/site-config";
import {
  services,
  getServiceBySlug,
  getRelatedServices,
} from "@/data/services";
import { getConsultationBySlug, formatPrice } from "@/data/consultations";

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

function CheckIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      className={className}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

/** The animated underline reused beneath every "Book a Consultation". */
function BookConsultationCTA() {
  return (
    <Link
      href="/bookings"
      className="group inline-flex w-full items-center justify-center rounded-full bg-brand-blue px-6 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-blue-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
    >
      <span className="relative inline-block">
        Book a Consultation
        <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
      </span>
    </Link>
  );
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

  return (
    <>
      {/* Hero — bespoke to the detail page, styled to match the site's heroes */}
      <section className="hero-gradient-animated relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light py-16 text-white sm:py-20">
        <div
          className="hero-blob pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-brand-teal/20 blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-blue-100/80">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-100/40">
                /
              </li>
              <li>
                <Link
                  href="/services"
                  className="transition-colors hover:text-white"
                >
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-blue-100/40">
                /
              </li>
              <li aria-current="page" className="font-medium text-white">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 flex items-start gap-4">
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-teal ring-1 ring-white/15 sm:flex">
              <ServiceIcon slug={service.slug} className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-teal">
                Migration Service
              </p>
              <h1 className="font-heading mt-2 max-w-3xl text-4xl font-semibold sm:text-5xl">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-lg text-blue-100">
            {service.heroBlurb}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/bookings"
              className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-lg font-semibold text-brand-navy transition-colors hover:bg-gray-100"
            >
              <span className="relative inline-block">
                Book a Consultation
                <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-brand-navy transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </span>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              All services
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Main column */}
          <div className="space-y-14 lg:col-span-2">
            <Reveal as="div">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                Overview
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {service.overview}
              </p>
            </Reveal>

            <Reveal as="div">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                Who this is for
              </h2>
              <ul className="mt-5 space-y-3">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex gap-3 text-lg text-gray-600">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-teal/10 text-brand-teal">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="div">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                How we work with you
              </h2>
              <ol className="mt-6">
                {service.process.map((step, index) => {
                  const isLast = index === service.process.length - 1;
                  return (
                    <li
                      key={step}
                      className="relative flex gap-5 pb-8 last:pb-0"
                    >
                      {!isLast && (
                        <span
                          className="absolute left-[1.125rem] top-9 bottom-0 w-px bg-gradient-to-b from-brand-blue/40 to-brand-teal/15"
                          aria-hidden="true"
                        />
                      )}
                      <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-navy to-brand-blue text-sm font-semibold text-white shadow-sm">
                        {index + 1}
                      </span>
                      <p className="pt-1 text-lg text-gray-700">{step}</p>
                    </li>
                  );
                })}
              </ol>
            </Reveal>

            <Reveal as="div">
              <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                What you&apos;ll walk away with
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex gap-3 rounded-2xl bg-brand-surface p-4 text-base text-gray-700"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </Reveal>

            {service.faqs && service.faqs.length > 0 && (
              <Reveal as="div">
                <h2 className="font-heading text-2xl font-semibold text-brand-navy">
                  Common questions
                </h2>
                <div className="mt-4 divide-y divide-gray-100 border-t border-gray-100">
                  {service.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group py-5 [&_summary::-webkit-details-marker]:hidden"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-brand-navy">
                        {faq.question}
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          className="h-5 w-5 shrink-0 text-brand-blue transition-transform duration-200 group-open:rotate-180"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 9l6 6 6-6"
                          />
                        </svg>
                      </summary>
                      <p className="mt-3 text-base leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sticky "at a glance" sidebar */}
          <aside className="lg:col-span-1 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
                Book a consultation
              </p>
              <h2 className="font-heading mt-2 text-xl font-semibold text-brand-navy">
                {consultation?.title ?? `${service.title} Consultation`}
              </h2>

              {consultation && (
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-heading text-3xl font-bold text-brand-navy">
                    {formatPrice(
                      consultation.priceInCents,
                      consultation.currency,
                    )}
                  </span>
                  <span className="text-sm text-gray-500">
                    {consultation.currency}
                    {consultation.gstIncluded ? " · incl. GST" : ""}
                  </span>
                </div>
              )}
              {consultation && (
                <p className="mt-1 text-sm text-gray-500">
                  {consultation.durationMinutes}-minute video or phone
                  consultation
                </p>
              )}

              {service.highlights && service.highlights.length > 0 && (
                <ul className="mt-6 space-y-2.5 border-t border-gray-100 pt-6">
                  {service.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-6">
                <BookConsultationCTA />
              </div>

              <p className="mt-4 text-center text-xs text-gray-400">
                Registered Migration Agent · MARN {siteConfig.marn}
              </p>
            </div>
          </aside>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="border-t border-gray-100 bg-brand-surface py-20">
          <Container>
            <h2 className="font-heading text-2xl font-semibold text-brand-navy">
              Related services
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Other pathways that often go hand in hand with this one.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((relatedService, index) => (
                <Reveal key={relatedService.slug} delay={index * 70}>
                  <ServiceCard service={relatedService} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ConsultationCTA
        title={`Ready to talk through your ${service.title.toLowerCase()}?`}
        subtitle="Book a consultation and we'll walk you through your eligibility and the next steps that fit your situation."
      />
    </>
  );
}
