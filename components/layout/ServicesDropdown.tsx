import Link from "next/link";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

export function ServicesDropdown({ active = false }: { active?: boolean }) {
  return (
    <div className="group relative flex h-full items-center">
      <Link href="/services" aria-haspopup="true" className="flex h-full items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
        <span
          className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[15px] font-semibold transition-colors duration-200 ${
            active
              ? "bg-brand-mint text-brand-primary"
              : "text-brand-navy/80 group-hover:bg-brand-surface group-hover:text-brand-navy group-focus-within:bg-brand-surface"
          }`}
        >
          Services
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-3.5 w-3.5"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl">
          <ul className="space-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group/item flex items-center gap-3.5 rounded-2xl px-3.5 py-3 text-base font-medium text-brand-navy transition-all duration-200 hover:translate-x-1 hover:bg-brand-surface"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/15 to-brand-blue/15 text-brand-primary transition-colors group-hover/item:from-brand-green/25 group-hover/item:to-brand-blue/25">
                    <ServiceIcon slug={service.slug} className="h-5 w-5" />
                  </span>
                  {service.shortLabel}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/services"
            className="mt-2 block rounded-2xl border-t border-gray-100 px-3.5 pt-3.5 pb-1 text-base font-semibold text-brand-primary hover:text-brand-primary-dark"
          >
            View all services →
          </Link>
        </div>
      </div>
    </div>
  );
}
