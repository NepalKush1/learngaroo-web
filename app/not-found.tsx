import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { services } from "@/data/services";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary-dark">404</p>
        <h1 className="font-heading mt-4 text-4xl font-extrabold text-brand-navy sm:text-5xl">
          We can&apos;t find that page
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg text-gray-600">
          The link may be out of date, or the page may have moved. Here are some places to go next.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">
            Back to home
            <ArrowIcon />
          </Button>
          <Button href="/bookings" variant="outline">
            Book a consultation
          </Button>
        </div>
        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="inline-block rounded-full bg-brand-surface px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-mint"
              >
                {service.shortLabel}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
