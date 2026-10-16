// One expandable question; used on the homepage FAQ and the /faq page.
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm open:ring-1 open:ring-brand-primary/20">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-brand-navy [&::-webkit-details-marker]:hidden">
        {question}
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-primary transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </summary>
      <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{answer}</p>
    </details>
  );
}
