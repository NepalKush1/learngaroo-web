export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.16em] ${
        tone === "light"
          ? "bg-white/10 text-brand-green-light ring-1 ring-white/15"
          : "bg-brand-mint text-brand-primary ring-1 ring-brand-primary/10"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-heading mt-4 text-3xl font-extrabold sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          tone === "light" ? "text-white" : "text-brand-navy"
        } ${align === "center" ? "mx-auto max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            tone === "light" ? "text-white/70" : "text-gray-600"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
