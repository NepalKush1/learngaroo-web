import { services } from "@/data/services";

// Scrolling strip of the visa subclasses we advise on, built from
// data/services.ts so it never lists a visa we don't offer.
export function VisaTicker() {
  const items = services.flatMap((service) =>
    (service.subclasses ?? []).map((subclass) => ({
      key: `${service.slug}-${subclass}`,
      label: subclass === "ART" ? "ART reviews" : `Subclass ${subclass}`,
      service: service.shortLabel,
    })),
  );

  if (items.length === 0) return null;

  const row = (copy: number) =>
    items.map((item) => (
      <li
        key={`${copy}-${item.key}`}
        className="flex shrink-0 items-center gap-2 whitespace-nowrap px-5 text-sm"
        aria-hidden={copy > 0 || undefined}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
        <span className="font-bold text-brand-navy">{item.label}</span>
        <span className="text-gray-500">{item.service}</span>
      </li>
    ));

  return (
    <div className="marquee-pause relative overflow-hidden border-y border-gray-100 bg-white py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <p className="sr-only">Visa subclasses we advise on</p>
      <ul className="marquee flex w-max">
        {row(0)}
        {row(1)}
      </ul>
    </div>
  );
}
