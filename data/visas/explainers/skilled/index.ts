import type { VisaExplainer } from "../types";
import { skilledIndependent189Explainer } from "./skilled-independent-visa-189";
import { skilledNominated190Explainer } from "./skilled-nominated-visa-190";
import { skilledWorkRegional491Explainer } from "./skilled-work-regional-visa-491";
import { permanentResidenceSkilledRegional191Explainer } from "./permanent-residence-skilled-regional-visa-191";
import { temporaryGraduate485Explainer } from "./temporary-graduate-visa-485";
import { nationalInnovation858Explainer } from "./national-innovation-visa-858";
import { skilledMigrationPointsTestExplainer } from "./skilled-migration-points-test";
import { skillselectEoiExplainer } from "./skillselect-expression-of-interest";
import { skillsAssessmentExplainer } from "./skills-assessment-for-migration";

// Skilled visas and guides. Add each explainer here once it compiles.
export const skilledExplainers: VisaExplainer[] = [
  skilledIndependent189Explainer,
  skilledNominated190Explainer,
  skilledWorkRegional491Explainer,
  permanentResidenceSkilledRegional191Explainer,
  temporaryGraduate485Explainer,
  nationalInnovation858Explainer,
  skilledMigrationPointsTestExplainer,
  skillselectEoiExplainer,
  skillsAssessmentExplainer,
];
