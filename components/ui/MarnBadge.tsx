export function MarnBadge({ marn }: { marn: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-brand-green/30 bg-brand-surface px-4 py-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-5 w-5"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l1.5 1.5L15 9.75m5.25 2.25a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
          />
        </svg>
      </div>
      <div>
        <p className="font-heading text-sm font-semibold text-brand-navy">
          MARN {marn}
        </p>
        <p className="text-xs text-gray-500">
          OMARA Registered Migration Agent
        </p>
      </div>
    </div>
  );
}
