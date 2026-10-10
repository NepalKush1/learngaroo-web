import { agent } from "@/data/agent";

export function MarnBadge({ marn }: { marn: string }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl border border-brand-primary/15 bg-white px-4 py-3 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white">
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
        <p className="font-heading text-sm font-bold text-brand-navy">
          MARN {marn}
        </p>
        <p className="text-xs text-gray-500">
          OMARA Registered Migration Agent
          {agent.verifyUrl && (
            <>
              {" · "}
              <a
                href={agent.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary underline-offset-2 hover:underline"
              >
                Verify on the OMARA register
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
