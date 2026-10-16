import type { VisaExplainer } from "./types";
import { skillsInDemand482Explainer } from "./skills-in-demand-482";
import { employerSponsoredExplainers } from "./employer-sponsored";
import { skilledExplainers } from "./skilled";
import { familyPartnerExplainers } from "./family-partner";
import { familyParentExplainers } from "./family-parent";
import { studyExplainers } from "./study";
import { appealsExplainersA } from "./appeals-and-review/part-a";
import { appealsExplainersB } from "./appeals-and-review/part-b";
import { otherVisasExplainersA } from "./other-visas/part-a";
import { otherVisasExplainersB } from "./other-visas/part-b";

export type { VisaExplainer } from "./types";

// Every visa library page with an interactive explainer. Pages without one
// keep the standard reference layout.
export const visaExplainers: VisaExplainer[] = [
  skillsInDemand482Explainer,
  ...employerSponsoredExplainers,
  ...skilledExplainers,
  ...familyPartnerExplainers,
  ...familyParentExplainers,
  ...studyExplainers,
  ...appealsExplainersA,
  ...appealsExplainersB,
  ...otherVisasExplainersA,
  ...otherVisasExplainersB,
];

const bySlug = new Map(visaExplainers.map((explainer) => [explainer.slug, explainer]));

export function getExplainer(slug: string): VisaExplainer | undefined {
  return bySlug.get(slug);
}

export function hasExplainer(slug: string): boolean {
  return bySlug.has(slug);
}
