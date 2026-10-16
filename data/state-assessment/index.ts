import type { HomeAffairsOccupation, StateAssessmentData, StateSlug } from "./types";
import { homeAffairsListMeta, homeAffairsOccupations } from "./home-affairs";
import { nswAssessment } from "./states/nsw";
import { vicAssessment } from "./states/vic";
import { qldAssessment } from "./states/qld";
import { saAssessment } from "./states/sa";
import { waAssessment } from "./states/wa";
import { tasAssessment } from "./states/tas";
import { actAssessment } from "./states/act";
import { ntAssessment } from "./states/nt";

export type * from "./types";
export { homeAffairsListMeta, homeAffairsOccupations };

// Every state and territory with assessment data, in map order.
export const stateAssessments: StateAssessmentData[] = [
  nswAssessment,
  vicAssessment,
  qldAssessment,
  saAssessment,
  waAssessment,
  tasAssessment,
  actAssessment,
  ntAssessment,
].filter((item): item is StateAssessmentData => item !== null);

export function stateAssessment(slug: StateSlug): StateAssessmentData | undefined {
  return stateAssessments.find((item) => item.state === slug);
}

const byCode = new Map(homeAffairsOccupations.map((occupation) => [occupation.code, occupation]));

export function homeAffairsOccupation(code: string): HomeAffairsOccupation | undefined {
  return byCode.get(code);
}
