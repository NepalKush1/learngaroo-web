import type { VisaExplainer } from "../types";
import { studentVisa500Explainer } from "./student-visa-500";
import { studentGuardian590Explainer } from "./student-guardian-visa-590";
import { genuineStudentRequirementExplainer } from "./genuine-student-requirement";
import { studentVisaFinancialCapacityExplainer } from "./student-visa-financial-capacity";
import { studentVisaConditionsExplainer } from "./student-visa-conditions-and-work-rights";
import { studyToPermanentResidenceExplainer } from "./study-to-permanent-residence";

// Student visas and study guides. Add each explainer here once it compiles.
export const studyExplainers: VisaExplainer[] = [
  studentVisa500Explainer,
  studentGuardian590Explainer,
  genuineStudentRequirementExplainer,
  studentVisaFinancialCapacityExplainer,
  studentVisaConditionsExplainer,
  studyToPermanentResidenceExplainer,
];
