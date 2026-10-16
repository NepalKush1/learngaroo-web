import Link from "next/link";
import { policyUpdates } from "@/data/updates";

// One-line "latest change" strip above the header. Dated, sourced updates
// are how a visitor can tell the practice is current, so the newest one
// is always one click away.

export function UpdateStrip() {
  const latest = policyUpdates[0];
  if (!latest) return null;
  const date = new Date(`${latest.date}T00:00:00+10:00`).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Australia/Melbourne",
  });

  return (
    <div className="hidden border-b border-gray-100 bg-brand-navy text-white sm:block">
      <Link
        href={`/updates#${latest.slug}`}
        className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-1.5 text-xs transition-colors hover:text-brand-green-light sm:px-6"
      >
        <span className="shrink-0 rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-navy">
          {latest.status === "in-effect" ? "Now in effect" : latest.status === "announced" ? "Announced" : "Consultation"}
        </span>
        <span className="shrink-0 text-white/60">{date}</span>
        <span className="truncate font-medium">{latest.title}</span>
        <span className="ml-auto shrink-0 font-semibold text-brand-green-light">Read →</span>
      </Link>
    </div>
  );
}
