"use client";

import { useEffect, useRef, useState } from "react";

// Sticky in-page navigation that knows where you are: the current section
// is highlighted (and scrolled into view on narrow screens) as you read, so
// the reader always sees how far through the guide they are.

export interface NavSection {
  id: string;
  label: string;
}

export function ExplainerNav({ sections, officialUrl, officialLabel = "Home Affairs page" }: { sections: NavSection[]; officialUrl?: string; officialLabel?: string }) {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");
  // Fade an edge of the scrolling bar only when there is more to scroll that way.
  const [fade, setFade] = useState({ left: false, right: true });
  const listRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const elements = sections.map((section) => document.getElementById(section.id)).filter((element): element is HTMLElement => Boolean(element));
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections]);

  // Keep the active link visible in the horizontally scrolling bar.
  useEffect(() => {
    const list = listRef.current;
    const link = linkRefs.current[active];
    if (!list || !link) return;
    const target = link.offsetLeft - list.clientWidth / 2 + link.clientWidth / 2;
    list.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const update = () => setFade({ left: list.scrollLeft > 4, right: list.scrollLeft + list.clientWidth < list.scrollWidth - 4 });
    const observer = new ResizeObserver(update);
    observer.observe(list);
    list.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      list.removeEventListener("scroll", update);
    };
  }, []);

  const mask =
    fade.left && fade.right
      ? "[mask-image:linear-gradient(to_right,transparent,black_32px,black_calc(100%_-_32px),transparent)]"
      : fade.left
        ? "[mask-image:linear-gradient(to_right,transparent,black_32px)]"
        : fade.right
          ? "[mask-image:linear-gradient(to_right,black_calc(100%_-_32px),transparent)]"
          : "";

  const index = Math.max(0, sections.findIndex((section) => section.id === active));

  return (
    <nav aria-label="On this page" className="sticky top-20 z-30 border-y border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-6 lg:px-8">
        <span className="hidden shrink-0 text-xs font-bold text-gray-400 sm:block" aria-hidden="true">
          {index + 1}/{sections.length}
        </span>
        <ul ref={listRef} className={`-mx-1 flex flex-1 gap-1 overflow-x-auto py-2 text-sm font-semibold [scrollbar-width:none] ${mask}`}>
          {sections.map((section) => {
            const isActive = section.id === active;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  ref={(node) => {
                    linkRefs.current[section.id] = node;
                  }}
                  href={`#${section.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`block whitespace-nowrap rounded-full px-3 py-1.5 transition-colors ${
                    isActive ? "bg-brand-navy text-white" : "text-brand-navy/70 hover:bg-brand-mint hover:text-brand-primary-dark"
                  }`}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
        {officialUrl && (
          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 rounded-full border border-brand-navy/15 px-4 py-1.5 text-sm font-semibold text-brand-navy hover:bg-brand-mint md:block"
          >
            {officialLabel} ↗
          </a>
        )}
      </div>
      <div className="h-0.5 bg-gray-100" aria-hidden="true">
        <div className="bg-gradient-brand h-full transition-all duration-500 ease-out" style={{ width: `${((index + 1) / sections.length) * 100}%` }} />
      </div>
    </nav>
  );
}
