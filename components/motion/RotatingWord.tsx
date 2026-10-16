"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Cycles through words with a typewriter effect; each word has its own colour
// class. Screen readers get the full list once instead of the animation.
export function RotatingWord({ words }: { words: { text: string; className: string }[] }) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(words[0]?.text.length ?? 0);
  const [deleting, setDeleting] = useState(false);

  const word = words[index % words.length];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const full = word.text.length;
    let delay = deleting ? 35 : 70;
    if (!deleting && length === full) delay = 1800;
    if (deleting && length === 0) delay = 300;

    const id = window.setTimeout(() => {
      if (!deleting && length === full) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((value) => value + 1);
      } else setLength((value) => value + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(id);
  }, [deleting, length, word, prefersReducedMotion]);

  const shown = prefersReducedMotion ? word.text : word.text.slice(0, length);

  return (
    <>
      <span className="sr-only">{words.map((item) => item.text).join(", ")}</span>
      <span aria-hidden="true" className={`${word.className} transition-colors`}>
        {shown}
        <span className="ml-0.5 inline-block w-[2px] animate-pulse self-stretch bg-current align-[-0.15em] motion-reduce:hidden" style={{ height: "1em" }} />
      </span>
    </>
  );
}
