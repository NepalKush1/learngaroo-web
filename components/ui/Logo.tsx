import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Full "Learniiz — Migration & Visa Services" lockup, rebuilt from the brand
// artwork so the tagline sits under the wordmark, matching its left and
// right edges, with the mark spanning both lines. `tone="light"` swaps the navy wordmark for white so it
// reads on dark backgrounds (e.g. the footer).
export function Logo({
  tone = "dark",
  className = "h-12 w-auto",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link href="/" aria-label={`${siteConfig.fullName} — home`} className="inline-flex shrink-0">
      <Image
        src={tone === "light" ? "/brand/learniiz-logo-light.png" : "/brand/learniiz-logo.png"}
        alt={siteConfig.fullName}
        width={817}
        height={218}
        priority
        className={className}
      />
    </Link>
  );
}
