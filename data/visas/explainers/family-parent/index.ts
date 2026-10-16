import type { VisaExplainer } from "../types";
import { contributoryParent143173Explainer } from "./contributory-parent-visa-143-173";
import { contributoryAgedParent864884Explainer } from "./contributory-aged-parent-visa-864-884";
import { parentVisa103Explainer } from "./parent-visa-103";
import { agedParent804Explainer } from "./aged-parent-visa-804";
import { sponsoredParent870Explainer } from "./sponsored-parent-temporary-visa-870";
import { remainingRelative115835Explainer } from "./remaining-relative-visa-115-835";
import { carer116836Explainer } from "./carer-visa-116-836";
import { agedDependentRelative114838Explainer } from "./aged-dependent-relative-visa-114-838";
import { balanceOfFamilyTestExplainer } from "./balance-of-family-test";

// Parent and other family visas, and the balance of family test. Add each explainer here once it compiles.
export const familyParentExplainers: VisaExplainer[] = [
  contributoryParent143173Explainer,
  contributoryAgedParent864884Explainer,
  parentVisa103Explainer,
  agedParent804Explainer,
  sponsoredParent870Explainer,
  remainingRelative115835Explainer,
  carer116836Explainer,
  agedDependentRelative114838Explainer,
  balanceOfFamilyTestExplainer,
];
