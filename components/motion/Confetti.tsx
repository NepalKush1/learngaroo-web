// Soft pastel squares scattered behind a section (decorative only).
// Each preset is a list of [className, animation-delay] pairs.
const presets = {
  hero: [
    "left-[4%] top-[22%] h-10 w-10 bg-amber-200/70",
    "left-[47%] top-[13%] h-8 w-8 bg-sky-200/80",
    "left-[2%] bottom-[30%] h-12 w-12 bg-emerald-200/70",
    "right-[3%] top-[44%] h-9 w-9 bg-violet-200/70",
    "right-[5%] top-[14%] h-7 w-7 bg-pink-200/70",
  ],
  section: [
    "left-[3%] top-[18%] h-9 w-9 bg-pink-200/60",
    "right-[6%] top-[10%] h-12 w-12 bg-sky-200/60",
    "left-[8%] bottom-[10%] h-7 w-7 bg-amber-200/70",
    "right-[4%] bottom-[22%] h-8 w-8 bg-violet-200/60",
  ],
} as const;

export function Confetti({ preset = "section" }: { preset?: keyof typeof presets }) {
  return (
    <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden="true">
      {presets[preset].map((classes, index) => (
        <span
          key={classes}
          className={`float-slow absolute rounded-lg ${classes}`}
          style={{ animationDelay: `${index * -1.6}s` }}
        />
      ))}
    </div>
  );
}
