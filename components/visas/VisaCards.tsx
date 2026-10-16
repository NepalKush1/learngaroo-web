import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Button";
import { keyFact, visaHref, type VisaCategory, type VisaPage } from "@/data/visas";
import { categoryAccent } from "@/lib/accents";

export function CategoryIcon({ path, className = "h-6 w-6" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

// Card for one category on the hub and the homepage.
export function CategoryCard({ category, pages, compact = false }: { category: VisaCategory; pages: VisaPage[]; compact?: boolean }) {
  const accent = categoryAccent(category.slug);
  const visas = pages.filter((page) => page.kind === "visa");
  const guides = pages.filter((page) => page.kind === "guide");
  const preview = [...visas, ...guides].slice(0, compact ? 3 : 5);
  return (
    <Link href={`/visas/${category.slug}`} className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex items-start justify-between gap-3">
        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white ${accent.tile}`}>
          <CategoryIcon path={category.icon} />
        </span>
        <span className="rounded-full bg-brand-surface px-2.5 py-1 text-xs font-bold text-brand-navy/70">
          {visas.length} {visas.length === 1 ? "visa" : "visas"}{guides.length > 0 ? ` · ${guides.length} ${guides.length === 1 ? "guide" : "guides"}` : ""}
        </span>
      </div>
      <h3 className="font-heading mt-5 text-xl font-bold text-brand-navy group-hover:text-brand-primary">{category.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{category.tagline}</p>
      {preview.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-4 text-sm text-gray-700">
          {preview.map((page) => (
            <li key={page.slug} className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.tile}`} aria-hidden="true" />
              <span className="truncate">{page.subclass ? `${page.name} (${page.subclass})` : page.name}</span>
            </li>
          ))}
          {pages.length > preview.length && <li className="text-xs text-gray-500">and {pages.length - preview.length} more</li>}
        </ul>
      )}
      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold text-brand-primary">
        Browse {category.shortName.toLowerCase()} <ArrowIcon />
      </span>
    </Link>
  );
}

// Card for one visa or guide page.
export function VisaCard({ page }: { page: VisaPage }) {
  const accent = categoryAccent(page.category);
  const fee = keyFact(page, "Government fee");
  const stay = keyFact(page, "Length of stay") ?? keyFact(page, "Stay");
  return (
    <Link href={visaHref(page)} className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-lg bg-brand-navy px-2.5 py-1 text-xs font-extrabold text-white">{page.subclass ? `Subclass ${page.subclass}` : "Guide"}</span>
        {page.kind === "visa" && (
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ring-1 ${page.permanent ? "bg-emerald-100 text-emerald-800 ring-emerald-200" : "bg-sky-100 text-sky-800 ring-sky-200"}`}>
            {page.permanent ? "Permanent" : "Temporary"}
          </span>
        )}
      </div>
      <h3 className="font-heading mt-4 text-lg font-bold text-brand-navy group-hover:text-brand-primary">{page.name}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-gray-600 line-clamp-3">{page.intro}</p>
      {(fee || stay) && (
        <dl className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-100 pt-4 text-xs">
          {fee && <div><dt className="font-bold uppercase tracking-wider text-gray-500">Fee</dt><dd className="mt-0.5 font-semibold text-brand-navy">{fee}</dd></div>}
          {stay && <div><dt className="font-bold uppercase tracking-wider text-gray-500">Stay</dt><dd className="mt-0.5 font-semibold text-brand-navy">{stay}</dd></div>}
        </dl>
      )}
      <span className={`mt-4 inline-flex items-center gap-1.5 text-sm font-bold ${accent.text}`}>
        Read the guide <ArrowIcon />
      </span>
    </Link>
  );
}

// Side-by-side comparison of the visas in a category.
export function VisaCompareTable({ pages }: { pages: VisaPage[] }) {
  const visas = pages.filter((page) => page.kind === "visa");
  if (visas.length === 0) return null;
  return (
    <div className="overflow-x-auto rounded-3xl border border-gray-100 bg-white shadow-card">
      <table className="w-full min-w-[860px] text-left text-sm">
        <thead>
          <tr className="border-b border-gray-100 text-xs uppercase tracking-[0.12em] text-gray-500">
            <th scope="col" className="px-5 py-4 font-bold">Visa</th>
            <th scope="col" className="px-5 py-4 font-bold">Type</th>
            <th scope="col" className="px-5 py-4 font-bold">Government fee</th>
            <th scope="col" className="px-5 py-4 font-bold">Stay</th>
            <th scope="col" className="px-5 py-4 font-bold">Pathway to PR</th>
            <th scope="col" className="px-5 py-4 font-bold">Apply from</th>
          </tr>
        </thead>
        <tbody>
          {visas.map((page) => (
            <tr key={page.slug} className="border-b border-gray-100 last:border-0 hover:bg-brand-surface/60">
              <th scope="row" className="px-5 py-4 font-normal">
                <Link href={visaHref(page)} className="group flex items-center gap-3">
                  <span className="flex h-9 w-16 shrink-0 items-center justify-center rounded-lg bg-brand-navy text-xs font-extrabold text-white">{page.subclass}</span>
                  <span className="font-bold text-brand-navy group-hover:underline">{page.name}</span>
                </Link>
              </th>
              <td className="px-5 py-4 text-gray-700">{page.permanent ? "Permanent" : "Temporary"}</td>
              <td className="px-5 py-4 font-semibold text-brand-navy">{keyFact(page, "Government fee") ?? "See page"}</td>
              <td className="px-5 py-4 text-gray-700">{keyFact(page, "Length of stay") ?? keyFact(page, "Stay") ?? "See page"}</td>
              <td className="px-5 py-4 text-gray-700">{keyFact(page, "Pathway") ?? (page.permanent ? "Already permanent" : "See page")}</td>
              <td className="px-5 py-4 text-gray-700">{keyFact(page, "Where") ?? keyFact(page, "Apply") ?? "See page"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
