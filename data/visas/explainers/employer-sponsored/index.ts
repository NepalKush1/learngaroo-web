import type { VisaExplainer } from "../types";
import { employerNominationScheme186Explainer } from "./employer-nomination-scheme-visa-186";
import { skilledEmployerSponsoredRegional494Explainer } from "./skilled-employer-sponsored-regional-visa-494";
import { temporaryWorkShortStaySpecialist400Explainer } from "./temporary-work-short-stay-specialist-visa-400";
import { training407Explainer } from "./training-visa-407";
import { temporaryActivity408Explainer } from "./temporary-activity-visa-408";
import { temporaryWorkInternationalRelations403Explainer } from "./temporary-work-international-relations-visa-403";
import { labourAgreementsAndDamaExplainer } from "./labour-agreements-and-dama";
import { employerSponsorshipAndNominationExplainer } from "./employer-sponsorship-and-nomination";

// Employer-sponsored visas and guides. Add each explainer here once it compiles.
export const employerSponsoredExplainers: VisaExplainer[] = [
  employerNominationScheme186Explainer,
  skilledEmployerSponsoredRegional494Explainer,
  temporaryWorkShortStaySpecialist400Explainer,
  training407Explainer,
  temporaryActivity408Explainer,
  temporaryWorkInternationalRelations403Explainer,
  labourAgreementsAndDamaExplainer,
  employerSponsorshipAndNominationExplainer,
];
