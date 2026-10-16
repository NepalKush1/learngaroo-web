import Link from "next/link";

// Invitation to the state nomination assessment, used on the state
// nomination map and on each state's guide.

export function AssessmentCta({ stateShort }: { stateShort?: string }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary-dark to-[#0f4f31] p-6 text-white shadow-float sm:p-8">
      <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-[2.5rem] bg-white/10" aria-hidden="true" />
      <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
        <div className="min-w-0 sm:flex-1">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">Free assessment · about 3 minutes</p>
          <p className="font-heading mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">
            {stateShort ? `Do you fit ${stateShort}'s criteria? Find out, and see every other state too.` : "Not sure which state could nominate you?"}
          </p>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-white/80">
            Enter your occupation, where you live and work, and your points. We check every state&apos;s published 190 and 491 criteria and occupation lists and show where you fit.
          </p>
        </div>
        <Link
          href="/state-nomination/assessment"
          className="shrink-0 self-start rounded-full bg-white px-6 py-3 text-sm font-bold text-brand-primary-dark shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-brand-mint sm:self-auto"
        >
          Start the assessment →
        </Link>
      </div>
    </div>
  );
}
