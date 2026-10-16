import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-primary text-white shadow-lg shadow-brand-primary/25 hover:bg-brand-primary-dark hover:shadow-brand-primary/35",
  secondary:
    "bg-brand-navy text-white hover:bg-brand-navy-light",
  outline:
    "border border-brand-navy/15 bg-white text-brand-navy hover:border-brand-primary/40 hover:bg-brand-mint",
  "ghost-light":
    "border border-white/25 text-white hover:bg-white/10",
};

type Size = "sm" | "md" | "lg";

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0";

// The one button style for the whole site. `href` renders a link (set
// `external` for other sites, which opens a new tab); otherwise a <button>.
// `track` names the analytics event sent when it's clicked.
export function Button({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  track,
  className = "",
  ...props
}: {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  size?: Size;
  track?: string;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} data-track={track}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} data-track={track}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} data-track={track} {...props}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
