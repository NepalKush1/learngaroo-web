import type { ServiceExplainer } from "./types";
import { studentVisasServiceExplainer } from "./student-visas";
import { skilledVisasServiceExplainer } from "./skilled-visas";
import { skillsAssessmentsServiceExplainer } from "./skills-assessments";
import { employerSponsoredVisasServiceExplainer } from "./employer-sponsored-visas";
import { familyPartnerVisasServiceExplainer } from "./family-partner-visas";
import { visitorTouristVisasServiceExplainer } from "./visitor-tourist-visas";
import { artReviewsServiceExplainer } from "./art-reviews";

export type { ServiceExplainer } from "./types";

// Every /services page with an interactive explainer, in the order of
// data/services.ts. Services without one keep the standard guide layout.
export const serviceExplainers: ServiceExplainer[] = [
  studentVisasServiceExplainer,
  skilledVisasServiceExplainer,
  skillsAssessmentsServiceExplainer,
  employerSponsoredVisasServiceExplainer,
  familyPartnerVisasServiceExplainer,
  visitorTouristVisasServiceExplainer,
  artReviewsServiceExplainer,
].filter((explainer): explainer is ServiceExplainer => Boolean(explainer));

const bySlug = new Map(serviceExplainers.map((explainer) => [explainer.slug, explainer]));

export function getServiceExplainer(slug: string): ServiceExplainer | undefined {
  return bySlug.get(slug);
}
