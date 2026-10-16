"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { formatAud, paymentSurcharges, visaFees, visaFeesAsAt, visaFeesSourceUrl } from "@/data/visa-fees";

// Estimates the Home Affairs visa application charge for a primary applicant
// plus family members, with the card surcharge. Professional fees, employer
// charges, health checks and police certificates are not included.

function Stepper({ label, value, onChange, disabled, hint }: { label: string; value: number; onChange: (value: number) => void; disabled?: boolean; hint?: string }) {
  return (
    <div className={`flex items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-4 ${disabled ? "opacity-50" : ""}`}>
      <div>
        <p className="font-heading font-bold text-brand-navy">{label}</p>
        {hint && <p className="text-xs text-gray-500">{hint}</p>}
      </div>
      <div className="flex items-center gap-2">
        <button type="button" onClick={() => onChange(Math.max(0, value - 1))} disabled={disabled || value === 0} aria-label={`Fewer ${label}`} className="h-9 w-9 rounded-full border border-gray-200 text-lg font-bold text-brand-navy hover:bg-brand-mint disabled:opacity-40">−</button>
        <span className="w-6 text-center font-heading text-lg font-extrabold text-brand-navy" aria-live="polite">{value}</span>
        <button type="button" onClick={() => onChange(Math.min(9, value + 1))} disabled={disabled} aria-label={`More ${label}`} className="h-9 w-9 rounded-full border border-gray-200 text-lg font-bold text-brand-navy hover:bg-brand-mint disabled:opacity-40">+</button>
      </div>
    </div>
  );
}

export function FeeCalculator() {
  const [feeId, setFeeId] = useState(visaFees[0].id);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [subsequent, setSubsequent] = useState(false);
  const [surchargeId, setSurchargeId] = useState(paymentSurcharges[0].id);

  const fee = visaFees.find((item) => item.id === feeId) ?? visaFees[0];
  const surcharge = paymentSurcharges.find((item) => item.id === surchargeId) ?? paymentSurcharges[0];
  const canAddFamily = fee.adult !== null;

  const result = useMemo(() => {
    const adultTotal = canAddFamily ? adults * (fee.adult ?? 0) : 0;
    const childTotal = canAddFamily ? children * (fee.child ?? 0) : 0;
    const subsequentTotal = subsequent && fee.subsequent ? fee.subsequent * (1 + (canAddFamily ? adults + children : 0)) : 0;
    const subtotal = fee.base + adultTotal + childTotal + subsequentTotal;
    const surchargeTotal = Math.round(subtotal * surcharge.rate);
    return { adultTotal, childTotal, subsequentTotal, subtotal, surchargeTotal, total: subtotal + surchargeTotal };
  }, [fee, adults, children, subsequent, canAddFamily, surcharge]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
      <div className="space-y-4">
        <label className="block">
          <span className="font-heading font-bold text-brand-navy">Visa and stream</span>
          <select
            value={feeId}
            onChange={(event) => { setFeeId(event.target.value); setAdults(0); setChildren(0); setSubsequent(false); }}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-brand-navy shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          >
            {visaFees.map((item) => (
              <option key={item.id} value={item.id}>
                Subclass {item.subclass} · {item.name}{item.stream ? ` · ${item.stream}` : ""}
              </option>
            ))}
          </select>
        </label>

        <Stepper label="Family members 18 and over" value={adults} onChange={setAdults} disabled={!canAddFamily} hint={canAddFamily ? "Partner and adult dependants included in the application" : "This visa does not allow family members in the same application"} />
        <Stepper label="Children under 18" value={children} onChange={setChildren} disabled={!canAddFamily} />

        {fee.subsequent && (
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4">
            <input type="checkbox" checked={subsequent} onChange={(event) => setSubsequent(event.target.checked)} className="mt-1 h-4 w-4 accent-brand-primary" />
            <span>
              <span className="font-heading block font-bold text-brand-navy">Applying in Australia after holding a temporary visa</span>
              <span className="block text-xs text-gray-500">Adds the subsequent temporary application charge of {formatAud(fee.subsequent)} per applicant. It applies when you are in Australia and have held a substantive temporary visa since you last arrived, with some exemptions.</span>
            </span>
          </label>
        )}

        <label className="block">
          <span className="font-heading font-bold text-brand-navy">Payment method</span>
          <select
            value={surchargeId}
            onChange={(event) => setSurchargeId(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-brand-navy shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
          >
            {paymentSurcharges.map((item) => (
              <option key={item.id} value={item.id}>{item.label}{item.rate ? ` (${(item.rate * 100).toFixed(2)}% surcharge)` : ""}</option>
            ))}
          </select>
        </label>
      </div>

      <aside className="space-y-4">
        <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-deep">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">Estimated government charge</p>
          <p className="font-heading mt-2 text-5xl font-extrabold">{formatAud(result.total)}</p>
          <p className="mt-1 text-sm text-white/60">Subclass {fee.subclass}{fee.stream ? ` · ${fee.stream}` : ""}</p>
          <dl className="mt-6 space-y-2 border-t border-white/10 pt-4 text-sm">
            <div className="flex justify-between"><dt className="text-white/70">Primary applicant</dt><dd className="font-bold">{formatAud(fee.base)}</dd></div>
            {result.adultTotal > 0 && <div className="flex justify-between"><dt className="text-white/70">{adults} × adult {formatAud(fee.adult ?? 0)}</dt><dd className="font-bold">{formatAud(result.adultTotal)}</dd></div>}
            {result.childTotal > 0 && <div className="flex justify-between"><dt className="text-white/70">{children} × child {formatAud(fee.child ?? 0)}</dt><dd className="font-bold">{formatAud(result.childTotal)}</dd></div>}
            {result.subsequentTotal > 0 && <div className="flex justify-between"><dt className="text-white/70">Subsequent temporary application charge</dt><dd className="font-bold">{formatAud(result.subsequentTotal)}</dd></div>}
            {result.surchargeTotal > 0 && <div className="flex justify-between"><dt className="text-white/70">Card surcharge</dt><dd className="font-bold">{formatAud(result.surchargeTotal)}</dd></div>}
          </dl>
          {fee.note && <p className="mt-4 rounded-xl bg-white/10 p-3 text-xs leading-relaxed text-white/80">{fee.note}</p>}
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
          <p className="font-heading font-bold text-brand-navy">What this does not include</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li>Our professional fees, which are quoted in writing before any work</li>
            <li>Health examinations, police certificates, English tests and translations</li>
            <li>Skills assessment fees set by the assessing authority</li>
            <li>Employer-side sponsorship, nomination and training levy charges</li>
            <li>The second instalment payable on some visas before grant</li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button href={fee.serviceHref} size="sm">Read the visa guide →</Button>
            <Button href="/bookings" variant="outline" size="sm">Book a consultation</Button>
          </div>
        </div>

        <p className="text-xs leading-relaxed text-gray-500">
          Charges are the Home Affairs base and additional applicant charges as at {visaFeesAsAt} (1 July 2026 prices). Charges are set on the date a valid application is received and change each 1 July. Check the{" "}
          <a href={visaFeesSourceUrl} target="_blank" rel="noopener noreferrer" className="underline">current visa pricing</a> and the Visa Pricing Estimator before paying. See also <Link href="/updates" className="underline">policy updates</Link>.
        </p>
      </aside>
    </div>
  );
}
