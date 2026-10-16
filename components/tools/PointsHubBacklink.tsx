import Link from "next/link";
import { hubHref, hubTabs, type HubTab } from "@/data/points-hub";

// Shown above each standalone calculator: the other calculators as buttons,
// so a visitor on the federal page can see the state tests exist.
export function PointsHubBacklink({ tab }: { tab: HubTab }) {
  return (
    <div className="mb-6 rounded-2xl border border-brand-primary/20 bg-brand-mint px-5 py-4 text-sm text-brand-navy">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span>
          <span className="font-bold">This is one of five points calculations.</span> Federal first, then the state you want nomination from.
        </span>
        <Link href={hubHref(tab)} className="font-bold text-brand-primary hover:underline">
          Open all in the points hub →
        </Link>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {hubTabs.map((item) => {
          const current = item.id === tab;
          return (
            <Link
              key={item.id}
              href={hubHref(item.id)}
              aria-current={current ? "page" : undefined}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                current ? "bg-brand-navy text-white" : "bg-white text-brand-navy ring-1 ring-brand-primary/20 hover:ring-brand-primary"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
