// Multi-colour accent system: each service gets its own vivid colour so the
// page reads as varied and lively, while brand green stays the primary.
// Class strings are written out in full so Tailwind can detect them.
// Contrast-checked: every `card` gradient keeps white text at WCAG AA
// (4.5:1 or better at both ends) and every `tile` keeps its icon at 3:1+
// (white icons, except amber, which is too light and uses a navy icon).

export interface Accent {
  // Full-bleed card background (white text on top).
  card: string;
  // Small solid tile behind a white icon.
  tile: string;
  // Coloured text on white backgrounds.
  text: string;
  // Soft pastel for decorative shapes.
  soft: string;
}

// The accent colours are reserved for identifying services (service cards
// and the fee list). Everything else stays brand green/navy so the
// palette reads as one brand rather than a rainbow.
export const accents = {
  orange: { card: "from-orange-700 to-orange-800", tile: "bg-orange-600", text: "text-orange-700", soft: "bg-orange-200" },
  green: { card: "from-brand-primary-dark to-[#0f4f31]", tile: "bg-brand-green", text: "text-brand-primary", soft: "bg-emerald-200" },
  violet: { card: "from-violet-600 to-violet-800", tile: "bg-violet-500", text: "text-violet-700", soft: "bg-violet-200" },
  pink: { card: "from-pink-700 to-pink-800", tile: "bg-pink-500", text: "text-pink-700", soft: "bg-pink-200" },
  blue: { card: "from-blue-600 to-blue-800", tile: "bg-brand-blue", text: "text-blue-700", soft: "bg-sky-200" },
  teal: { card: "from-teal-700 to-teal-800", tile: "bg-teal-600", text: "text-teal-700", soft: "bg-teal-200" },
  amber: { card: "from-amber-700 to-amber-800", tile: "bg-amber-400 text-brand-navy!", text: "text-amber-700", soft: "bg-amber-200" },
} satisfies Record<string, Accent>;

export type AccentName = keyof typeof accents;

const serviceAccents: Record<string, AccentName> = {
  "student-visas": "orange",
  "skilled-visas": "green",
  "skills-assessments": "violet",
  "employer-sponsored-visas": "pink",
  "family-partner-visas": "blue",
  "visitor-tourist-visas": "teal",
  "art-reviews": "amber",
};

export function serviceAccent(slug: string): Accent {
  return accents[serviceAccents[slug] ?? "green"];
}

// Visa library categories reuse the same palette so a category reads the
// same in the mega menu, the hub cards and the visa pages.
const categoryAccents: Record<string, AccentName> = {
  "employer-sponsored": "pink",
  skilled: "green",
  family: "blue",
  study: "orange",
  "appeals-and-review": "violet",
  "other-visas": "teal",
};

export function categoryAccent(slug: string): Accent {
  return accents[categoryAccents[slug] ?? "green"];
}
