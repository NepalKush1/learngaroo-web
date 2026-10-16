import type { VisaExplainer } from "../types";
import { artReviewOfVisaRefusalExplainer } from "./art-review-of-visa-refusal";
import { artReviewOfVisaCancellationExplainer } from "./art-review-of-visa-cancellation";
import { visaCancellationAndNoticeOfIntentionExplainer } from "./visa-cancellation-and-notice-of-intention";
import { characterTestSection501Explainer } from "./character-test-section-501";
import { pic4020FraudAndFalseInformationExplainer } from "./pic-4020-fraud-and-false-information";
import { section48BarExplainer } from "./section-48-bar";
import { schedule3CriteriaExplainer } from "./schedule-3-criteria";

// Appeals and review guides, part A (ART reviews, cancellation, character, PIC 4020, section 48, Schedule 3). Add each explainer here once it compiles.
export const appealsExplainersA: VisaExplainer[] = [
  artReviewOfVisaRefusalExplainer,
  artReviewOfVisaCancellationExplainer,
  visaCancellationAndNoticeOfIntentionExplainer,
  characterTestSection501Explainer,
  pic4020FraudAndFalseInformationExplainer,
  section48BarExplainer,
  schedule3CriteriaExplainer,
];
