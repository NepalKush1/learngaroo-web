import type { VisaExplainer } from "../types";
import { partnerVisaOnshore820801Explainer } from "./partner-visa-onshore-820-801";
import { partnerVisaOffshore309100Explainer } from "./partner-visa-offshore-309-100";
import { prospectiveMarriageVisa300Explainer } from "./prospective-marriage-visa-300";
import { childVisa101802Explainer } from "./child-visa-101-802";
import { adoptionVisa102Explainer } from "./adoption-visa-102";
import { orphanRelativeVisa117837Explainer } from "./orphan-relative-visa-117-837";
import { dependentChildVisa445Explainer } from "./dependent-child-visa-445";
import { newZealandCitizenFamilyRelationshipVisa461Explainer } from "./new-zealand-citizen-family-relationship-visa-461";

// Partner and child visas. Add each explainer here once it compiles.
export const familyPartnerExplainers: VisaExplainer[] = [
  partnerVisaOnshore820801Explainer,
  partnerVisaOffshore309100Explainer,
  prospectiveMarriageVisa300Explainer,
  childVisa101802Explainer,
  adoptionVisa102Explainer,
  orphanRelativeVisa117837Explainer,
  dependentChildVisa445Explainer,
  newZealandCitizenFamilyRelationshipVisa461Explainer,
];
