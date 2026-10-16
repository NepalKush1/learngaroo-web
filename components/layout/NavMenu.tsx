import Link from "next/link";
import type { NavGroup, NavLink } from "@/lib/navigation";
import { ServiceIcon } from "@/components/icons/ServiceIcon";

// Hover panel for a header group defined in lib/navigation.ts: one column
// per heading, each link with an optional description or service icon.

export function NavTrigger({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link href={href} aria-haspopup="true" className="flex h-full items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary">
      <span
        className={`flex items-center gap-1 rounded-full whitespace-nowrap px-2.5 py-2 text-sm font-semibold transition-colors duration-200 ${
          active
            ? "bg-brand-mint text-brand-primary-dark"
            : "text-brand-navy/80 group-hover:bg-brand-surface group-hover:text-brand-navy group-focus-within:bg-brand-surface"
        }`}
      >
        {label}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </span>
    </Link>
  );
}

function MenuLink({ link }: { link: NavLink }) {
  const className = "group/item flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-all duration-200 hover:translate-x-1 hover:bg-brand-surface";
  const inner = (
    <>
      {link.serviceSlug && (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green/15 to-brand-blue/15 text-brand-primary transition-colors group-hover/item:from-brand-green/25 group-hover/item:to-brand-blue/25">
          <ServiceIcon slug={link.serviceSlug} className="h-4.5 w-4.5" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-[15px] font-semibold text-brand-navy">
          {link.label}
          {link.external && <span className="ml-1 text-xs text-gray-400">↗</span>}
        </span>
        {link.description && <span className="block text-xs leading-snug text-gray-500">{link.description}</span>}
      </span>
    </>
  );
  return link.external ? (
    <a href={link.href} target="_blank" rel="noopener" className={className}>{inner}</a>
  ) : (
    <Link href={link.href} className={className}>{inner}</Link>
  );
}

export function NavMenu({ group, active = false }: { group: NavGroup; active?: boolean }) {
  const columns = group.columns ?? [];
  const width = columns.length >= 3 ? "w-[min(920px,calc(100vw-2rem))]" : columns.length === 2 ? "w-[640px]" : "w-[380px]";
  const grid = columns.length >= 3 ? "md:grid-cols-3" : columns.length === 2 ? "md:grid-cols-2" : "";

  return (
    <div className="group relative flex h-full items-center">
      <NavTrigger label={group.label} href={group.href} active={active} />
      <div className={`invisible absolute left-1/2 top-full z-50 ${width} -translate-x-1/2 pt-2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100`}>
        <div className="rounded-3xl border border-gray-100 bg-white p-4 shadow-2xl">
          <div className={`grid gap-4 ${grid}`}>
            {columns.map((column) => (
              <div key={column.heading} className="min-w-0">
                <p className="px-3 pb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400">{column.heading}</p>
                <ul className="space-y-0.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <MenuLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {group.footer && group.footer.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 border-t border-gray-100 px-3 pt-3.5">
              {group.footer.map((link) => (
                <Link key={link.href} href={link.href} className="text-[15px] font-semibold text-brand-primary hover:text-brand-primary-dark">
                  {link.label} →
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
