// ─────────────────────────────────────────────────────────────────────────
// CLIENT TESTIMONIALS — the homepage section stays hidden until at least
// one is added.
//
// Only publish genuine testimonials from real clients, with their written
// permission. Don't edit them in a way that changes their meaning, and
// don't imply outcomes are typical or guaranteed — the OMARA Code of
// Conduct and Australian Consumer Law prohibit misleading advertising.
// ─────────────────────────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  name: string; // e.g. "Priya S." — first name + initial is common
  detail?: string; // e.g. "Student visa · Melbourne"
}

export const testimonials: Testimonial[] = [];
