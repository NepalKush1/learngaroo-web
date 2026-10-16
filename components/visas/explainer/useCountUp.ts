"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

// Animates a number towards `target` whenever it changes, so totals and
// salaries roll rather than jump. Returns the target directly when the
// reader prefers reduced motion.
export function useCountUp(target: number, duration = 650): number {
  const reduced = usePrefersReducedMotion();
  const [display, setDisplay] = useState(target);
  const current = useRef(target);

  useEffect(() => {
    if (reduced) {
      current.current = target;
      return;
    }
    const start = current.current;
    if (start === target) return;
    let frame = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startedAt) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(start + (target - start) * eased);
      current.current = value;
      setDisplay(value);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration, reduced]);

  return reduced ? target : display;
}

export function aud(value: number): string {
  return `A$${value.toLocaleString("en-AU")}`;
}
