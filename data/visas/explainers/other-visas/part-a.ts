import type { VisaExplainer } from "../types";
import { visitorVisa600Explainer } from "./visitor-visa-600";
import { electronicTravelAuthority601Explainer } from "./electronic-travel-authority-601";
import { evisitorVisa651Explainer } from "./evisitor-visa-651";
import { workingHolidayVisa417Explainer } from "./working-holiday-visa-417";
import { workAndHolidayVisa462Explainer } from "./work-and-holiday-visa-462";
import { medicalTreatmentVisa602Explainer } from "./medical-treatment-visa-602";

// Visitor, working holiday and medical treatment visas. Add each explainer here once it compiles.
export const otherVisasExplainersA: VisaExplainer[] = [
  visitorVisa600Explainer,
  electronicTravelAuthority601Explainer,
  evisitorVisa651Explainer,
  workingHolidayVisa417Explainer,
  workAndHolidayVisa462Explainer,
  medicalTreatmentVisa602Explainer,
];
