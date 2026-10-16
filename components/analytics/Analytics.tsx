"use client";

import { useEffect } from "react";
import Script from "next/script";
import { gaMeasurementId, track } from "@/lib/analytics";

// Loads GA4 when configured and turns any element with `data-track="name"`
// into a tracked click (optional `data-track-label` adds detail). This keeps
// server components free of client code.
export function Analytics() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;
      track(target.dataset.track!, { label: target.dataset.trackLabel });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!gaMeasurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaMeasurementId}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
