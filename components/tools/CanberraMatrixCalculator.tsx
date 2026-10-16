"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { canberraMatrix, canberraMatrixAsAt, canberraMatrixUrls } from "@/data/canberra-matrix";
import { WizardChoices, WizardFooter, WizardProgress, WizardQuestion, WizardShell } from "./WizardUi";

// One Matrix category per screen, with a running score, then a result
// screen that shows where the points came from and where more could come.

export function CanberraMatrixCalculator() {
  const [streamId, setStreamId] = useState<"residents" | "overseas" | undefined>();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [stepIndex, setStepIndex] = useState(0); // 0 = stream picker
  const [finished, setFinished] = useState(false);

  const stream = canberraMatrix.find((item) => item.id === streamId);
  const categories = useMemo(() => stream?.categories ?? [], [stream]);
  const totalSteps = 1 + categories.length + 1;

  const result = useMemo(() => {
    const rows = categories.map((category) => {
      const option = category.options.find((item) => item.value === answers[category.id]);
      const best = Math.max(...category.options.map((item) => item.points));
      return { category, option, points: option?.points ?? 0, best };
    });
    const total = rows.reduce((sum, row) => sum + row.points, 0);
    const max = rows.reduce((sum, row) => sum + row.best, 0);
    return { rows, total, max };
  }, [categories, answers]);

  const reset = () => {
    setStreamId(undefined);
    setAnswers({});
    setStepIndex(0);
    setFinished(false);
  };
  const next = () => (stepIndex >= categories.length ? setFinished(true) : setStepIndex((index) => index + 1));
  const back = () => (finished ? setFinished(false) : setStepIndex((index) => Math.max(0, index - 1)));

  if (finished && stream) {
    const gaps = result.rows.filter((row) => row.points < row.best).sort((a, b) => b.best - b.points - (a.best - a.points)).slice(0, 3);
    return (
      <WizardShell>
        <div className="hero-rise text-center">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Your Canberra Matrix score</span>
          <p className="font-heading mt-4 text-7xl font-extrabold text-brand-navy">
            {result.total}
            <span className="ml-2 text-lg font-semibold text-gray-500">of {result.max}</span>
          </p>
          <div className="mx-auto mt-4 h-3 max-w-md overflow-hidden rounded-full bg-gray-200" aria-hidden="true">
            <div className="h-full rounded-full bg-gradient-brand transition-all duration-700" style={{ width: `${(result.total / result.max) * 100}%` }} />
          </div>
          <p className="mt-3 text-sm text-gray-600">{stream.name}</p>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-gray-700">
            The ACT ranks Matrix submissions by score within each occupation and invites in scheduled rounds. There is no fixed pass mark: the cut-off moves with demand and available places.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-navy">Where your points came from</h3>
            <ul className="mt-3 space-y-2">
              {result.rows.filter((row) => row.points > 0).map((row, index) => (
                <li key={row.category.id} className="hero-rise flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm" style={{ ["--rise-delay" as string]: `${200 + index * 60}ms` }}>
                  <span className="text-gray-700">{row.category.label}</span>
                  <span className="font-bold text-brand-navy">+{row.points}</span>
                </li>
              ))}
              {result.total === 0 && <li className="text-sm text-gray-500">No points claimed yet.</li>}
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-brand-navy">Biggest gains available</h3>
            <ul className="mt-3 space-y-2">
              {gaps.map((row) => (
                <li key={row.category.id} className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm">
                  <span className="block font-semibold text-brand-navy">{row.category.label}</span>
                  <span className="text-gray-600">Up to +{row.best - row.points} more</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/bookings" track="book_cta">
            Check my Matrix with an agent
            <ArrowIcon />
          </Button>
          <Button href="/state-nomination/australian-capital-territory" variant="outline">ACT nomination guide</Button>
          <button type="button" onClick={reset} className="text-sm font-semibold text-gray-500 hover:text-brand-navy hover:underline">Start over</button>
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
          Categories and points from the ACT Government&apos;s Canberra Matrix pages, checked on {canberraMatrixAsAt}. Every point claimed must be evidenced at submission. Confirm on the{" "}
          <a href={canberraMatrixUrls[stream.id]} target="_blank" rel="noopener noreferrer" className="underline">official page</a>. General information only, separate from the{" "}
          <Link href="/tools/points-calculator" className="underline">SkillSelect points test</Link>.
        </p>
      </WizardShell>
    );
  }

  if (stepIndex === 0 || !stream) {
    return (
      <WizardShell>
        <WizardProgress step={0} total={stream ? totalSteps : 15} label="Canberra Matrix" />
        <div className="mt-8">
          <WizardQuestion title="Where are you applying from?" help="The ACT uses a different Matrix for people already living in Canberra and for people overseas.">
            <WizardChoices
              name="stream"
              value={streamId}
              onChange={(value) => { setStreamId(value); setAnswers({}); }}
              options={canberraMatrix.map((item) => ({ value: item.id, label: item.name, hint: item.summary }))}
            />
          </WizardQuestion>
        </div>
        <WizardFooter canBack={false} canNext={Boolean(stream)} onBack={back} onNext={next} nextLabel="Start" />
      </WizardShell>
    );
  }

  const category = categories[stepIndex - 1];
  const value = answers[category.id];
  const isLast = stepIndex === categories.length;

  return (
    <WizardShell>
      <WizardProgress step={stepIndex} total={totalSteps} label={`${stream.name} · ${result.total} points so far`} />
      <div className="mt-8">
        <WizardQuestion key={category.id} title={category.label} help={category.help}>
          <WizardChoices
            name={category.id}
            value={value}
            columns={category.options.length > 4 ? 3 : 2}
            options={category.options.map((option) => ({ value: option.value, label: option.label, badge: `+${option.points}` }))}
            onChange={(choice) => setAnswers((prev) => ({ ...prev, [category.id]: choice }))}
          />
        </WizardQuestion>
      </div>
      <WizardFooter canBack onBack={back} canNext={Boolean(value)} onNext={next} nextLabel={isLast ? "See my score" : "Next"} onReset={reset} />
    </WizardShell>
  );
}
