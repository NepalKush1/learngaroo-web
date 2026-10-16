import { Fragment, type ReactNode } from "react";
import { Term } from "./Glossary";

// Renders explainer copy, turning glossary tokens into tap-to-define terms:
//   "[[csit]]"        → <Term id="csit" /> (shows the term's own label)
//   "[[amsr|market rate]]" → <Term id="amsr">market rate</Term>

const TOKEN = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export function RichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = new RegExp(TOKEN.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      <Term key={`${match[1]}-${match.index}`} id={match[1]}>
        {match[2]}
      </Term>,
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>{part}</Fragment>
      ))}
    </>
  );
}

// Plain text with tokens removed, for attributes and keys.
export function plainText(text: string): string {
  return text.replace(new RegExp(TOKEN.source, "g"), (_, id: string, label?: string) => label ?? id.toUpperCase());
}
