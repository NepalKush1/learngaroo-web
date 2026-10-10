"use client";

import type { MouseEvent, ReactNode } from "react";

// Wraps a card so a soft glow follows the cursor (see .spotlight in
// globals.css). Pure decoration; touch devices simply never see it.
export function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  function onMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  }

  return (
    <div onMouseMove={onMouseMove} className={`spotlight relative h-full rounded-3xl ${className}`}>
      {children}
    </div>
  );
}
