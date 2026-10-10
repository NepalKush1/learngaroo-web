import Link from "next/link";
import { ServiceIcon } from "@/components/icons/ServiceIcon";
import { ArrowIcon } from "@/components/ui/Button";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_1px_2px_rgba(11,26,46,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-[0_24px_50px_-20px_rgba(31,127,83,0.35)]"
    >
      <span
        className="bg-gradient-brand absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-mint text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
        <ServiceIcon slug={service.slug} className="h-7 w-7" />
      </div>
      <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy">
        {service.title}
      </h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary">
        Learn more
        <ArrowIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
