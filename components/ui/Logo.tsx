import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Full "Learniiz — Migration & Visa Services" lockup, cut from the brand
// cover artwork. `tone="light"` swaps the navy wordmark for white so it
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
        src={tone === "light" ? "/brand/learniiz-lockup-light.png" : "/brand/learniiz-lockup.png"}
        alt={siteConfig.fullName}
        width={773}
        height={235}
        priority
        className={className}
      />
    </Link>
  );
}
