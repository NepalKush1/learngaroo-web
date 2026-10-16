import type { VisaExplainer } from "../types";
import { bridgingVisasABCEExplainer } from "./bridging-visas-a-b-c-e";
import { residentReturnVisa155157Explainer } from "./resident-return-visa-155-157";
import { specialCategoryVisa444Explainer } from "./special-category-visa-444";
import { businessInnovationAndInvestmentVisa188888Explainer } from "./business-innovation-and-investment-visa-188-888";
import { formerResidentVisa151Explainer } from "./former-resident-visa-151";
import { pacificEngagementVisa192Explainer } from "./pacific-engagement-visa-192";
import { australianCitizenshipByConferralExplainer } from "./australian-citizenship-by-conferral";

// Bridging, resident return, NZ, business, former resident and Pacific visas, and citizenship. Add each explainer here once it compiles.
export const otherVisasExplainersB: VisaExplainer[] = [
  bridgingVisasABCEExplainer,
  residentReturnVisa155157Explainer,
  specialCategoryVisa444Explainer,
  businessInnovationAndInvestmentVisa188888Explainer,
  formerResidentVisa151Explainer,
  pacificEngagementVisa192Explainer,
  australianCitizenshipByConferralExplainer,
];
