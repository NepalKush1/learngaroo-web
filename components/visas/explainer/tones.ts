import { accents, type AccentName } from "@/lib/accents";
import type { ExplainerActor, Tone } from "@/data/visas/explainers/types";

// One colour per player, used by the diagram, the journey and the role
// switch. Class strings are written out in full so Tailwind can see them.

export interface ToneClasses {
  // Solid tile behind a white icon.
  bg: string;
  ring: string;
  // Coloured text on white.
  text: string;
  // Pastel background.
  soft: string;
  // Small dot on a dark card.
  dot: string;
  accent: AccentName;
}

export const TONES: Record<Tone, ToneClasses> = {
  green: { bg: "bg-brand-green", ring: "ring-emerald-300", text: "text-brand-primary-dark", soft: "bg-brand-mint", dot: "bg-emerald-300", accent: "green" },
  pink: { bg: "bg-pink-600", ring: "ring-pink-300", text: "text-pink-700", soft: "bg-pink-50", dot: "bg-pink-300", accent: "pink" },
  blue: { bg: "bg-brand-blue", ring: "ring-sky-300", text: "text-blue-700", soft: "bg-sky-50", dot: "bg-sky-300", accent: "blue" },
  violet: { bg: "bg-violet-600", ring: "ring-violet-300", text: "text-violet-700", soft: "bg-violet-50", dot: "bg-violet-300", accent: "violet" },
  amber: { bg: "bg-amber-600", ring: "ring-amber-300", text: "text-amber-700", soft: "bg-amber-50", dot: "bg-amber-300", accent: "amber" },
  teal: { bg: "bg-teal-600", ring: "ring-teal-300", text: "text-teal-700", soft: "bg-teal-50", dot: "bg-teal-300", accent: "teal" },
  orange: { bg: "bg-orange-600", ring: "ring-orange-300", text: "text-orange-700", soft: "bg-orange-50", dot: "bg-orange-300", accent: "orange" },
};

export function toneOf(actors: ExplainerActor[], id: string): ToneClasses {
  return TONES[actors.find((actor) => actor.id === id)?.tone ?? "green"];
}

export function accentOf(actors: ExplainerActor[], id: string) {
  return accents[toneOf(actors, id).accent];
}

const WORDS = ["No", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

export function countWord(count: number): string {
  return WORDS[count] ?? String(count);
}
