// Lightweight event tracking. Sends to Google Analytics 4 when
// NEXT_PUBLIC_GA_MEASUREMENT_ID is set; otherwise a no-op, so call sites
// never need to check.
export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
