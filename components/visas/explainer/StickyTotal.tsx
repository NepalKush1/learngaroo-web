// On phones the result of a calculator sits below its inputs, so this pill
// rides along at the top of the section while you change them. Hidden on
// large screens, where the result is beside the inputs.

export function StickyTotal({ label, value, href, tone = "green" }: { label: string; value: string; href: string; tone?: "green" | "rose" | "amber" | "orange" }) {
  const colour = {
    green: "from-brand-primary-dark to-[#0f4f31]",
    rose: "from-rose-600 to-rose-800",
    amber: "from-amber-600 to-amber-800",
    orange: "from-orange-700 to-orange-800",
  }[tone];
  return (
    <div className="sticky top-[8.25rem] z-20 mt-8 lg:hidden">
      <a href={href} className={`flex items-center gap-3 rounded-2xl bg-gradient-to-r ${colour} px-4 py-3 text-white shadow-lg transition-colors`}>
        <span className="font-heading min-w-0 flex-1 text-sm font-bold leading-snug">{label}</span>
        <span className="shrink-0 text-base font-extrabold">{value} ↓</span>
      </a>
    </div>
  );
}
