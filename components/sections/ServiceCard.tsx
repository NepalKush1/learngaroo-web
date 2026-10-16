import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { ArrowIcon } from "@/components/ui/Button";
import type { Service } from "@/data/services";
import { serviceAccent } from "@/lib/accents";

// Full-colour card, one accent per service (see lib/accents.ts).
export function ServiceCard({ service }: { service: Service }) {
  const accent = serviceAccent(service.slug);

  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br ${accent.card} p-7 text-white shadow-float transition-all duration-300 hover:-translate-y-1 hover:shadow-deep`}
    >
      {/* Layered translucent shapes for depth. */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-[2.5rem] bg-white/10 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-16 right-10 h-32 w-32 rounded-[2rem] bg-white/5" aria-hidden="true" />
      <ServiceIcon
        slug={service.slug}
        className="pointer-events-none absolute -bottom-4 -right-4 h-32 w-32 text-white/10 transition-transform duration-500 group-hover:-rotate-6"
      />

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/25 backdrop-blur">
        <ServiceIcon slug={service.slug} className="h-6 w-6" />
      </div>
      <h3 className="font-heading relative mt-5 text-xl font-bold">{service.title}</h3>
      {service.subclasses && (
        <ul className="relative mt-2 flex flex-wrap gap-1.5" aria-label="Visa subclasses">
          {service.subclasses.map((subclass) => (
            <li key={subclass} className="rounded-full bg-black/20 px-2.5 py-0.5 text-xs font-bold ring-1 ring-white/25">
              {subclass === "ART" ? subclass : `Subclass ${subclass}`}
            </li>
          ))}
        </ul>
      )}
      <p className="relative mt-3 flex-1 text-[15px] leading-relaxed text-white">{service.tagline}</p>
      <span className="relative mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-navy shadow-sm">
        Learn more
        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
