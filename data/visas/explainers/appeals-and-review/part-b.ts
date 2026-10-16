import type { VisaExplainer } from "../types";
import { condition8503NoFurtherStayWaiverExplainer } from "./condition-8503-no-further-stay-waiver";
import { ministerialInterventionExplainer } from "./ministerial-intervention";
import { judicialReviewOfMigrationDecisionsExplainer } from "./judicial-review-of-migration-decisions";
import { healthRequirementAndHealthWaiverExplainer } from "./health-requirement-and-health-waiver";
import { exclusionPeriodsPic40134014Explainer } from "./exclusion-periods-pic-4013-4014";
import { naturalJusticeAndAdverseInformationExplainer } from "./natural-justice-and-adverse-information";

// Appeals and review guides, part B (8503 waiver, ministerial intervention, judicial review, health, exclusion periods, natural justice). Add each explainer here once it compiles.
export const appealsExplainersB: VisaExplainer[] = [
  condition8503NoFurtherStayWaiverExplainer,
  ministerialInterventionExplainer,
  judicialReviewOfMigrationDecisionsExplainer,
  healthRequirementAndHealthWaiverExplainer,
  exclusionPeriodsPic40134014Explainer,
  naturalJusticeAndAdverseInformationExplainer,
];
