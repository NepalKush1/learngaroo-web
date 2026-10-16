"use client";

import { useState } from "react";
import Link from "next/link";
import { lookupPostcode, regionalPostcodesAsAt, regionalPostcodesSourceUrl, type PostcodeResult } from "@/data/regional-postcodes";

const examples = ["3350", "2500", "4217", "5000", "6000", "7250", "2600", "3000"];

export function RegionalChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<PostcodeResult | { error: string } | null>(null);

  const run = (value: string) => {
    setInput(value);
    setResult(value.trim().length >= 4 ? lookupPostcode(value) : null);
  };

  const ok = result && !("error" in result) ? result : null;
  const tone = ok ? (ok.category === 2 ? "bg-sky-50 border-sky-200" : ok.category === 3 ? "bg-emerald-50 border-emerald-200" : "bg-rose-50 border-rose-200") : "";

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div>
        <form onSubmit={(event) => { event.preventDefault(); run(input); }} className="flex gap-2">
          <label className="flex-1">
            <span className="sr-only">Postcode</span>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={4}
              value={input}
              onChange={(event) => run(event.target.value.replace(/\D/g, ""))}
              placeholder="Enter a 4-digit postcode"
              className="w-full rounded-full border border-gray-200 bg-white px-5 py-3.5 font-heading text-lg font-bold tracking-widest text-brand-navy shadow-sm outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
          </label>
          <button type="submit" className="rounded-full bg-brand-primary px-6 py-3.5 text-sm font-bold text-white hover:bg-brand-primary-dark">Check</button>
        </form>
        <p className="mt-3 text-xs text-gray-500">Try:</p>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {examples.map((example) => (
            <button key={example} type="button" onClick={() => run(example)} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-bold text-brand-navy hover:bg-brand-mint">{example}</button>
          ))}
        </div>

        <div className="mt-8 space-y-3 text-sm text-gray-600">
          <p><span className="font-bold text-brand-navy">Category 2</span> (cities and major regional centres): Perth, Adelaide, the Gold Coast, the Sunshine Coast, Canberra, Newcastle and Lake Macquarie, Wollongong and the Illawarra, Geelong, and Hobart.</p>
          <p><span className="font-bold text-brand-navy">Category 3</span> (regional centres and other regional areas): everywhere else in Australia outside Sydney, Melbourne and Brisbane, including all of the Northern Territory.</p>
          <p>Both categories count as designated regional areas for subclass 491 and 494 visas, the subclass 494 and 491 pathway to permanent residence (subclass 191), regional study points, and the extra Temporary Graduate visa for regional graduates. Category 3 areas also get priority processing for some regional visas.</p>
        </div>
      </div>

      <div aria-live="polite">
        {result && "error" in result && (
          <div className="rounded-3xl border border-gray-200 bg-brand-surface p-6 text-sm text-gray-700">{result.error}</div>
        )}
        {ok && (
          <div className={`rounded-3xl border p-6 shadow-sm ${tone}`}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{ok.state}</p>
            <p className="font-heading mt-1 text-4xl font-extrabold text-brand-navy">{ok.postcode}</p>
            <p className="font-heading mt-3 text-xl font-bold text-brand-navy">{ok.categoryLabel}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-gray-700">{ok.explanation}</p>
            {ok.category && (
              <div className="mt-5 flex flex-wrap gap-2">
                <Link href="/state-nomination" className="rounded-full bg-brand-primary px-4 py-2 text-sm font-bold text-white hover:bg-brand-primary-dark">State nomination guide →</Link>
                <Link href="/services/skilled-visas" className="rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-bold text-brand-navy hover:bg-brand-mint">Subclass 491 guide</Link>
              </div>
            )}
          </div>
        )}
        {!result && (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-brand-surface p-8 text-center text-sm text-gray-600">
            Enter a postcode to see whether it is a designated regional area and what that means for your visa.
          </div>
        )}
        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Postcode ranges from the Home Affairs designated regional area table (Migration (LIN 19/217: Regional Areas) Instrument 2019), checked on {regionalPostcodesAsAt}. Some Queensland and NSW postcodes were added on 5 March 2022 and do not apply to visas granted before that date.{" "}
          <a href={regionalPostcodesSourceUrl} target="_blank" rel="noopener noreferrer" className="underline">Official table</a>.
        </p>
      </div>
    </div>
  );
}
