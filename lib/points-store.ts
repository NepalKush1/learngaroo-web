"use client";

import { useSyncExternalStore } from "react";

// The visitor's last complete federal points total, kept in this browser so
// the state calculators can show it alongside their own ranking. Nothing is
// sent anywhere.

const KEY = "learniiz.federalPoints";
const EVENT = "learniiz:federal-points";

export function saveFederalPoints(points: number) {
  try {
    localStorage.setItem(KEY, String(points));
    window.dispatchEvent(new Event(EVENT));
  } catch {
    // Private mode or blocked storage: the score still shows on the page.
  }
}

function read(): number | null {
  try {
    const raw = localStorage.getItem(KEY);
    const value = raw === null ? NaN : Number(raw);
    return Number.isFinite(value) ? value : null;
  } catch {
    return null;
  }
}

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useFederalPoints(): number | null {
  return useSyncExternalStore(subscribe, read, () => null);
}
