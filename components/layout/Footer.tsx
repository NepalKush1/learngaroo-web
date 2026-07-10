import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";
import { services } from "@/data/services";
import { SocialIcon } from "@/components/icons/SocialIcon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-gray-100 bg-brand-surface">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="relative h-28 w-28">
            <Image src="/logo.png" alt={siteConfig.name} fill className="object-contain" />
          </div>
          <p className="mt-4 max-w-xs text-sm text-gray-600">
            {siteConfig.description}
          </p>
          <div className="mt-5 flex gap-3">
            {siteConfig.social.map((item) => (
              <Link
                key={item.platform}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-brand-navy transition-colors hover:bg-brand-blue hover:text-white"
              >
                <SocialIcon platform={item.platform} />
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="group mt-6 inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-lg font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            <span className="relative inline-block">
              Book a Consultation
              <span className="absolute inset-x-0 -bottom-1 h-0.5 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
            </span>
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Explore
          </h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-base text-gray-600 hover:text-brand-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Services
          </h3>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-base text-gray-600 hover:text-brand-blue"
                >
                  {service.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-navy">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-base text-gray-600">
            <li>{siteConfig.contact.phone}</li>
            <li>{siteConfig.contact.email}</li>
            <li>{siteConfig.contact.address}</li>
            <li>{siteConfig.contact.hours}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-gray-200">
        <Container className="flex flex-col gap-2 py-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Registered Migration Agent — MARN {siteConfig.marn}</p>
        </Container>
      </div>
    </footer>
  );
}
