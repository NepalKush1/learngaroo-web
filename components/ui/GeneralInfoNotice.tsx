// Required-style disclaimer for general educational content (videos, news),
// making clear it isn't migration advice for the viewer's own situation.
export function GeneralInfoNotice({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <p
      className={`text-xs leading-relaxed ${tone === "light" ? "text-white/50" : "text-gray-500"} ${className}`}
    >
      <strong className="font-semibold">General information only.</strong> This content
      is general in nature and is not migration advice for your individual circumstances.
      Visa requirements change regularly — always check the latest information from the
      Department of Home Affairs or book a consultation for advice on your situation.
    </p>
  );
}
