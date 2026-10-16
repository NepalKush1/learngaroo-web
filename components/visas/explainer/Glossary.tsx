"use client";

import { createContext, useContext, useEffect, useId, useMemo, useRef, useState, type ReactNode } from "react";
import type { GlossaryTerm } from "@/data/visas/explainers/types";

// Tap-to-define jargon. Wrap an explainer in <GlossaryProvider> and any
// <Term id="csit"> inside it shows a small definition card on hover, focus
// or tap, so readers never have to leave the sentence to look a word up.

const GlossaryContext = createContext<Map<string, GlossaryTerm>>(new Map());

export function GlossaryProvider({ terms, children }: { terms: GlossaryTerm[]; children: ReactNode }) {
  const map = useMemo(() => new Map(terms.map((term) => [term.id, term])), [terms]);
  return <GlossaryContext.Provider value={map}>{children}</GlossaryContext.Provider>;
}

export function useGlossaryTerm(id: string): GlossaryTerm | undefined {
  return useContext(GlossaryContext).get(id);
}

type Align = "center" | "left" | "right";

const alignClass: Record<Align, string> = {
  center: "left-1/2 -translate-x-1/2",
  left: "left-0",
  right: "right-0",
};

export function Term({ id, children }: { id: string; children?: ReactNode }) {
  const term = useGlossaryTerm(id);
  const [open, setOpen] = useState(false);
  const [align, setAlign] = useState<Align>("center");
  const wrapper = useRef<HTMLSpanElement>(null);
  const tipId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent | TouchEvent) => {
      if (wrapper.current && !wrapper.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!term) return <>{children}</>;

  const show = () => {
    const rect = wrapper.current?.getBoundingClientRect();
    if (rect) {
      const room = 150;
      setAlign(rect.left < room ? "left" : window.innerWidth - rect.right < room ? "right" : "center");
    }
    setOpen(true);
  };

  return (
    <span ref={wrapper} className="relative inline" onMouseEnter={show} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-describedby={open ? tipId : undefined}
        // Hover already opens it on desktop, so a click (or tap) always opens
        // rather than toggling; outside taps, Escape and blur close it.
        onClick={show}
        onFocus={show}
        onBlur={() => setOpen(false)}
        className="inline cursor-help font-semibold underline decoration-dotted decoration-[1.5px] underline-offset-[5px] focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
      >
        {children ?? term.term}
      </button>
      {open && (
        <span
          id={tipId}
          role="tooltip"
          className={`hero-rise absolute top-full z-50 mt-2 block w-64 rounded-2xl bg-brand-navy p-4 text-left text-sm font-normal normal-case leading-relaxed tracking-normal text-white shadow-deep ${alignClass[align]}`}
          style={{ ["--rise-delay" as string]: "0ms" }}
        >
          <span className="block font-heading text-[15px] font-bold text-brand-green-light">{term.term}</span>
          {term.full && <span className="block text-xs text-white/60">{term.full}</span>}
          <span className="mt-1.5 block text-white/90">{term.definition}</span>
        </span>
      )}
    </span>
  );
}
