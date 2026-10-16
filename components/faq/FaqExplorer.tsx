"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq, FaqGroup } from "@/data/faqs";
import { track } from "@/lib/analytics";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { siteConfig, whatsappLink } from "@/lib/site-config";

// Help-centre style FAQ: instant search with highlighted matches, category
// filters, shareable deep links (#question-slug opens the answer), related
// links, a helpful/not-helpful signal (sent to analytics only) and a
// "still stuck" panel. Everything degrades to plain <details> without JS.

export function faqId(question: string) {
  return question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function highlight(text: string, query: string): ReactNode {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "ig"));
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={index} className="rounded bg-amber-200/70 px-0.5 text-inherit">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

function FaqEntry({
  faq,
  query,
  open,
  onToggle,
}: {
  faq: Faq;
  query: string;
  open: boolean;
  onToggle: (open: boolean) => void;
}) {
  const id = faqId(faq.question);
  const [copied, setCopied] = useState(false);
  const [vote, setVote] = useState<"up" | "down" | null>(null);

  async function copyLink() {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.hash = id;
    }
  }

  function rate(value: "up" | "down") {
    setVote(value);
    track("faq_feedback", { question: faq.question.slice(0, 80), helpful: value === "up" });
  }

  return (
    <details
      id={id}
      open={open}
      onToggle={(event) => onToggle((event.currentTarget as HTMLDetailsElement).open)}
      className="group scroll-mt-32 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-shadow open:shadow-float open:ring-1 open:ring-brand-primary/20"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
        <span>{highlight(faq.question, query)}</span>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>

      <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{highlight(faq.answer, query)}</p>

      {faq.related && faq.related.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {faq.related.map((link) =>
            link.href.startsWith("http") ? (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-brand-surface px-3 py-1.5 text-sm font-semibold text-brand-primary-dark hover:bg-brand-mint">
                  {link.label} ↗
                </a>
              </li>
            ) : (
              <li key={link.href}>
                <Link href={link.href} className="inline-flex items-center gap-1 rounded-full bg-brand-surface px-3 py-1.5 text-sm font-semibold text-brand-primary-dark hover:bg-brand-mint">
                  {link.label} →
                </Link>
              </li>
            ),
          )}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <span>Was this helpful?</span>
          {vote ? (
            <span className="font-semibold text-brand-primary-dark">{vote === "up" ? "Thanks!" : "Thanks, we'll improve it."}</span>
          ) : (
            <>
              <button type="button" onClick={() => rate("up")} className="rounded-full border border-gray-200 px-2.5 py-1 font-semibold hover:border-brand-primary hover:text-brand-primary-dark" aria-label="Yes, helpful">
                Yes
              </button>
              <button type="button" onClick={() => rate("down")} className="rounded-full border border-gray-200 px-2.5 py-1 font-semibold hover:border-brand-primary hover:text-brand-primary-dark" aria-label="No, not helpful">
                No
              </button>
            </>
          )}
        </div>
        <button type="button" onClick={copyLink} className="inline-flex items-center gap-1 font-semibold hover:text-brand-primary-dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-3.5 w-3.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
          {copied ? "Link copied" : "Copy link"}
        </button>
      </div>
    </details>
  );
}

export function FaqExplorer({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set());
  const inputRef = useRef<HTMLInputElement>(null);

  const trimmed = query.trim();

  // Open the question named in the URL hash (shared links), and support
  // "/" as a shortcut to focus search.
  useEffect(() => {
    function openFromHash() {
      const id = window.location.hash.slice(1);
      if (!id) return;
      setOpenIds((previous) => new Set(previous).add(id));
      window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "smooth" }), 50);
    }
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    function onKey(event: KeyboardEvent) {
      if (event.key === "/" && document.activeElement?.tagName !== "INPUT") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", openFromHash);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const visibleGroups = useMemo(() => {
    const needle = trimmed.toLowerCase();
    return groups
      .filter((group) => category === "All" || group.title === category)
      .map((group) => ({
        ...group,
        items: needle
          ? group.items.filter((faq) => `${faq.question} ${faq.answer}`.toLowerCase().includes(needle))
          : group.items,
      }))
      .filter((group) => group.items.length > 0);
  }, [groups, category, trimmed]);

  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const shown = visibleGroups.reduce((sum, group) => sum + group.items.length, 0);

  // Searching opens every match so the highlighted answer is visible.
  const searching = trimmed.length > 1;

  useEffect(() => {
    if (searching && shown === 0) track("faq_no_results", { query: trimmed.slice(0, 60) });
  }, [searching, shown, trimmed]);

  function setAll(open: boolean) {
    setOpenIds(open ? new Set(groups.flatMap((group) => group.items.map((faq) => faqId(faq.question)))) : new Set());
  }

  const whatsapp = whatsappLink("Hi Learniiz, I have a question that isn't covered in your FAQ.");

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_2.2fr]">
      {/* ── Sidebar: search, categories, actions ── */}
      <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
        <label className="block">
          <span className="sr-only">Search questions</span>
          <span className="relative block">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search, e.g. refund, bridging, points"
              className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-[15px] text-brand-navy shadow-sm outline-none transition focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20"
            />
            <kbd className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-md border border-gray-200 px-1.5 text-xs text-gray-400 sm:block" aria-hidden="true">
              /
            </kbd>
          </span>
        </label>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-primary-dark">Browse by topic</p>
          <ul className="mt-3 space-y-1">
            {["All", ...groups.map((group) => group.title)].map((name) => {
              const count = name === "All" ? total : groups.find((group) => group.title === name)?.items.length ?? 0;
              const active = category === name;
              return (
                <li key={name}>
                  <button
                    type="button"
                    onClick={() => setCategory(name)}
                    aria-pressed={active}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[15px] font-semibold transition-colors ${
                      active ? "bg-brand-mint text-brand-primary-dark" : "text-brand-navy hover:bg-brand-surface"
                    }`}
                  >
                    {name}
                    <span className={`rounded-full px-2 py-0.5 text-xs ${active ? "bg-white text-brand-primary-dark" : "bg-gray-100 text-gray-500"}`}>{count}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex gap-2 text-sm">
          <button type="button" onClick={() => setAll(true)} className="font-semibold text-brand-primary-dark hover:underline">Expand all</button>
          <span className="text-gray-300" aria-hidden="true">·</span>
          <button type="button" onClick={() => setAll(false)} className="font-semibold text-brand-primary-dark hover:underline">Collapse all</button>
        </div>

        <div className="rounded-2xl bg-brand-navy p-5 text-white">
          <p className="font-heading font-bold">Still have a question?</p>
          <p className="mt-1 text-sm text-white/70">
            Message us, or book a consultation for advice on your own situation.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <Button href="/bookings" size="sm" track="book_cta">
              Book a consultation
              <ArrowIcon />
            </Button>
            {whatsapp ? (
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" data-track="whatsapp_click" data-track-label="faq" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10">
                WhatsApp {siteConfig.contact.whatsappDisplay}
              </a>
            ) : (
              <Button href="/contact" variant="ghost-light" size="sm">Contact us</Button>
            )}
          </div>
        </div>
      </aside>

      {/* ── Results ── */}
      <div>
        <p className="text-sm text-gray-500" aria-live="polite">
          {searching ? `${shown} of ${total} answers match “${trimmed}”` : `${shown} answers${category !== "All" ? ` in ${category}` : ""}`}
        </p>

        {shown === 0 ? (
          <div className="mt-6 rounded-3xl border border-dashed border-gray-300 bg-brand-surface p-10 text-center">
            <p className="font-heading text-xl font-bold text-brand-navy">No answers match “{trimmed}”</p>
            <p className="mx-auto mt-2 max-w-md text-gray-600">
              Try a different word, or ask us directly and we&apos;ll add the answer here if it helps others.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href="/contact" variant="outline">Ask us</Button>
              <Button href="/bookings">Book a consultation<ArrowIcon /></Button>
            </div>
          </div>
        ) : (
          <div className="mt-6 space-y-12">
            {visibleGroups.map((group) => (
              <section key={group.title} id={faqId(group.title)} className="scroll-mt-28">
                <h2 className="font-heading text-2xl font-bold text-brand-navy">{group.title}</h2>
                <div className="mt-5 space-y-3">
                  {group.items.map((faq) => {
                    const id = faqId(faq.question);
                    return (
                      <FaqEntry
                        key={id}
                        faq={faq}
                        query={searching ? trimmed : ""}
                        open={searching || openIds.has(id)}
                        onToggle={(open) =>
                          setOpenIds((previous) => {
                            const next = new Set(previous);
                            if (open) next.add(id);
                            else next.delete(id);
                            return next;
                          })
                        }
                      />
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
