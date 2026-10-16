"use client";

import { useRef, useState, type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// The document list as a checklist you can tick off while you gather
// things; nothing is stored.
export function DocumentChecklist({ groups }: { groups: { group: string; items: string[] }[] }) {
  const [ready, setReady] = useState<Record<string, boolean>>({});
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const done = Object.values(ready).filter(Boolean).length;
  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-gray-100">
        <p className="text-sm font-bold text-brand-navy" aria-live="polite">
          {done} of {total} ready
        </p>
        <span className="h-2 min-w-[8rem] flex-1 overflow-hidden rounded-full bg-gray-100" aria-hidden="true">
          <span className="bg-gradient-brand block h-full rounded-full transition-all duration-500" style={{ width: `${(done / Math.max(1, total)) * 100}%` }} />
        </span>
        {done > 0 && (
          <button type="button" onClick={() => setReady({})} className="text-xs font-semibold text-gray-500 hover:text-brand-navy hover:underline">
            Clear ticks
          </button>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.group} className="rounded-2xl border border-gray-100 bg-white p-5">
            <h4 className="font-heading text-base font-bold text-brand-navy">{group.group}</h4>
            <ul className="mt-3 space-y-1">
              {group.items.map((item) => {
                const key = `${group.group}:${item}`;
                const on = Boolean(ready[key]);
                return (
                  <li key={item}>
                    <label className={`flex cursor-pointer gap-2.5 rounded-lg p-1.5 text-sm leading-relaxed transition-colors ${on ? "text-gray-400 line-through decoration-gray-300" : "text-gray-700 hover:bg-brand-surface"}`}>
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => setReady((current) => ({ ...current, [key]: !current[key] }))}
                        className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-brand-primary"
                      />
                      <span>{item}</span>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export interface DetailTab {
  id: string;
  label: string;
  count: number;
  content: ReactNode;
}

// One topic at a time, with arrow-key navigation between the tabs. Every
// panel is rendered (inactive ones are hidden) so the whole text stays on
// the page.
export function DetailTabs({
  tabs,
  label,
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  tabs: DetailTab[];
  label: string;
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
}) {
  const [active, setActive] = useState(tabs[0]?.id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    event.preventDefault();
    const next = (index + delta + tabs.length) % tabs.length;
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  };

  return (
    <section id="detail" className="relative scroll-mt-32 py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} highlight={highlight} subtitle={subtitle} align="center" />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-10 overflow-x-auto pb-2 [scrollbar-width:none]">
            <div className="mx-auto flex w-max gap-2 rounded-full bg-brand-surface p-1.5" role="tablist" aria-label={label}>
              {tabs.map((tab, index) => {
                const selected = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    ref={(node) => {
                      refs.current[index] = node;
                    }}
                    type="button"
                    role="tab"
                    id={`detail-tab-${tab.id}`}
                    aria-selected={selected}
                    aria-controls={`detail-panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(tab.id)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      selected ? "bg-brand-navy text-white shadow" : "text-brand-navy/70 hover:bg-white hover:text-brand-navy"
                    }`}
                  >
                    {tab.label}
                    <span className={`rounded-full px-1.5 text-[11px] ${selected ? "bg-white/20" : "bg-white text-gray-500"}`}>{tab.count}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>
        <div className="mt-8">
          {tabs.map((tab) => (
            <div key={tab.id} id={`detail-panel-${tab.id}`} role="tabpanel" aria-labelledby={`detail-tab-${tab.id}`} hidden={tab.id !== active} className={tab.id === active ? "hero-rise" : undefined}>
              {tab.content}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
