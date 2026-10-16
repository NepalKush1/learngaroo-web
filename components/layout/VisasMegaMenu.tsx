import Link from "next/link";
import type { VisaNavCategory } from "@/data/visas";
import { CategoryIcon } from "@/components/visas/VisaCards";

// Hover mega menu for the Visas nav item: the six categories, each with
// its first few pages and a link to the category page.

const startHere = [
  { label: "Visa Pathway Finder", href: "/tools/visa-finder", description: "Three questions, one pathway." },
  { label: "Points Calculators", href: "/tools/points", description: "Federal and state scores in one place." },
  { label: "Visa Fee Calculator", href: "/tools/fee-calculator", description: "Government charges, incl. family." },
];

export function VisasMegaMenu({ categories, active = false }: { categories: VisaNavCategory[]; active?: boolean }) {
  return (
    <div className="group relative flex h-full items-center">
      <Link href="/visas" aria-haspopup="true" className="flex h-full items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
        <span
          className={`flex items-center gap-1 rounded-full whitespace-nowrap px-2 py-2 text-sm font-semibold transition-colors duration-200 ${
            active
              ? "bg-brand-mint text-brand-primary-dark"
              : "text-brand-navy/80 group-hover:bg-brand-surface group-hover:text-brand-navy group-focus-within:bg-brand-surface"
          }`}
        >
          Visas
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </Link>

      <div className="invisible absolute left-1/2 top-full z-50 w-[min(1080px,calc(100vw-2rem))] -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-2xl">
          <div className="grid gap-5 lg:grid-cols-[3fr_1fr]">
            <div className="grid gap-5 md:grid-cols-3">
              {categories.map((category) => (
                <div key={category.slug} className="min-w-0">
                  <Link href={`/visas/${category.slug}`} className="group/cat flex items-center gap-2.5 rounded-xl px-2 py-1.5 transition-colors hover:bg-brand-surface">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-mint text-brand-primary">
                      <CategoryIcon path={category.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-[15px] font-bold text-brand-navy group-hover/cat:text-brand-primary">{category.shortName}</span>
                  </Link>
                  <ul className="mt-1 space-y-0.5">
                    {category.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="block truncate rounded-lg px-2 py-1 text-[13px] text-gray-600 transition-colors hover:bg-brand-surface hover:text-brand-navy">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link href={`/visas/${category.slug}`} className="block px-2 py-1 text-[13px] font-semibold text-brand-primary hover:underline">
                        All {category.shortName.toLowerCase()} →
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Discovery column: a visitor who doesn't yet know their visa gets a tool, not a reading list. */}
            <aside className="flex flex-col rounded-2xl bg-brand-surface p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray-500">Not sure which visa?</p>
              <ul className="mt-2 space-y-0.5">
                {startHere.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-xl px-2.5 py-2 transition-colors hover:bg-white">
                      <span className="block text-[14px] font-semibold text-brand-navy">{item.label}</span>
                      <span className="block text-xs leading-snug text-gray-500">{item.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/bookings"
                data-track="book_cta"
                data-track-label="visas-menu"
                className="mt-auto block rounded-xl bg-brand-primary px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-primary-dark"
              >
                Talk it through with the agent
              </Link>
            </aside>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-4">
            <Link href="/visas" className="text-base font-semibold text-brand-primary hover:text-brand-primary-dark">
              Search every visa →
            </Link>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/occupations" className="rounded-full bg-brand-surface px-3 py-1.5 font-semibold text-brand-navy hover:bg-brand-mint">Occupations</Link>
              <Link href="/state-nomination" className="rounded-full bg-brand-surface px-3 py-1.5 font-semibold text-brand-navy hover:bg-brand-mint">State nomination</Link>
              <Link href="/updates" className="rounded-full bg-brand-surface px-3 py-1.5 font-semibold text-brand-navy hover:bg-brand-mint">Rule changes</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
