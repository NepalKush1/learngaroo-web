import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-teal/15 to-brand-blue/15 text-brand-blue transition-colors group-hover:from-brand-teal/25 group-hover:to-brand-blue/25">
        <ServiceIcon slug={service.slug} className="h-7 w-7" />
      </div>
      <h3 className="font-heading mt-4 text-xl font-semibold text-brand-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-base text-gray-600">{service.summary}</p>
      <span className="mt-4 text-base font-semibold text-brand-blue group-hover:underline">
        Learn more →
      </span>
    </Link>
  );
}
