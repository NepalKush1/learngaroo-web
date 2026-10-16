import type { VisaPage } from "./types";

// ─────────────────────────────────────────────────────────────────────────
// APPEALS AND REVIEW — guide pages (kind "guide", permanent null).
// Facts checked on 12 October 2026 against the Department of Home Affairs,
// the Administrative Review Tribunal (ART) and the Federal Circuit and
// Family Court of Australia. ART fees are the 1 July 2026 amounts.
// ─────────────────────────────────────────────────────────────────────────

const ACT = "https://www.legislation.gov.au/C1958A00062/latest/text";
const REGS = "https://www.legislation.gov.au/F1996B03551/latest/text";
const ART_ACT = "https://www.legislation.gov.au/C2024A00040/latest/text";

const ART_IMMI = "https://www.art.gov.au/applying-review/immigration-and-citizenship";
const ART_FEES = "https://www.art.gov.au/help-and-resources/fees";
const ART_OUTCOMES = "https://www.art.gov.au/after-applying/possible-outcomes";
const ART_HEARINGS = "https://www.art.gov.au/after-applying/types-hearings-and-case-events";
const ART_DURING_HEARING = "https://www.art.gov.au/after-applying/what-happens-during-hearing";
const ART_PD =
  "https://www.art.gov.au/sites/default/files/2024-10/Migration%2C%20Protection%20and%20Character%20Practice%20Direction%202024_0.pdf";
const ART_MR25 =
  "https://www.art.gov.au/sites/default/files/2024-10/Information%20about%20decisions%20-%20MR25%20-%20fact%20sheet.pdf";
const ART_MR18 =
  "https://www.art.gov.au/sites/default/files/2024-10/Information%20about%20hearings%20-%20MR18%20-%20fact%20sheet.pdf";
const ART_EXPEDITED =
  "https://www.art.gov.au/sites/default/files/2024-10/Expedited%20review%20of%20decisions%20under%20s%20501%20or%20501CA%20-%20fact%20sheet.pdf";
const ART_M1 =
  "https://www.art.gov.au/sites/default/files/2024-10/Application%20for%20review%20of%20decision%20-%20Individual-form.pdf";

const HA_CANCEL = "https://immi.homeaffairs.gov.au/visas/cancelling-a-visa";
const HA_CHARACTER = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character";
const HA_REENTRY =
  "https://immi.homeaffairs.gov.au/entering-and-leaving-australia/entering-australia/can-i-go-to-australia/re-entry-ban";
const HA_NO_VISA = "https://immi.homeaffairs.gov.au/visas/visa-about-to-expire/if-you-dont-have-a-valid-visa";
const HA_BVA = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-a-010";
const HA_BVE = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/bridging-visa-e-050-051/subclass-050";
const HA_MI = "https://immi.homeaffairs.gov.au/what-we-do/status-resolution-service/ministerial-intervention";
const HA_MI_ASSESS = "https://immi.homeaffairs.gov.au/what-we-do/status-resolution-service/ministerial-intervention/how-we-assess";
const HA_MI_AFTER =
  "https://immi.homeaffairs.gov.au/what-we-do/status-resolution-service/ministerial-intervention/after-you-request-ministerial-intervention";
const HA_ACCURATE = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/providing-accurate-information";
const HA_NFS =
  "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/waivers-and-permissions/no-further-stay-waiver";
const HA_NFS_FORM = "https://immi.homeaffairs.gov.au/help-support/departmental-forms/online-forms/no-further-stay-waiver-request-form";
const HA_STAY_LONGER = "https://immi.homeaffairs.gov.au/visas/visa-about-to-expire/stay-longer";
const HA_HEALTH = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health";
const HA_HEALTH_WAIVER = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/health-waiver";
const HA_HEALTH_COSTS =
  "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/protecting-health-care-and-community-services";
const HA_HEALTH_WHO = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/who-needs-health-examinations";
const HA_HEALTH_AFTER = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/after-your-health-examinations";
const HA_HEALTH_THREATS = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/threats-to-public-health";
const HA_HEALTH_UNDERTAKING = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/health-undertaking";
const HA_HEALTH_CHILDREN =
  "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health/special-consideration-for-children";

const FCFCOA_MIGRATION = "https://www.fcfcoa.gov.au/migration";
const FCFCOA_OVERVIEW = "https://www.fcfcoa.gov.au/migration/applicant-overview";
const FCFCOA_APPEALS = "https://www.fcfcoa.gov.au/migration/appeals";
const FCFCOA_COSTS = "https://www.fcfcoa.gov.au/migration/costs";
const FCFCOA_HEARINGS = "https://www.fcfcoa.gov.au/migration/hearing-types";
const FCFCOA_FEES = "https://www.fcfcoa.gov.au/fees";

const FACTS_AS_AT = "12 October 2026";

export const appealsAndReviewPages: VisaPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. ART review of a visa refusal
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "art-review-of-visa-refusal",
    category: "appeals-and-review",
    kind: "guide",
    name: "ART review of a visa refusal",
    title: "ART review of a visa refusal (merits review)",
    seoTitle: "ART review of a visa refusal: time limit, fee, process",
    seoDescription:
      "How to ask the Administrative Review Tribunal to review a visa refusal in 2026: 28-day time limit, A$3,727 fee, evidence, hearings, outcomes and bridging visas.",
    intro:
      "If the Department of Home Affairs refuses your visa, you may be able to ask the Administrative Review Tribunal (ART) for merits review. The Tribunal takes a fresh look at the facts and the law and can affirm, vary, set aside or remit the decision. Strict time limits and a fee apply, and the review keeps most onshore applicants lawful on a bridging visa while it runs.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Apply outside Australia"],
    keyFacts: [
      { label: "ART fee", value: "A$3,727", note: "Most migration decisions, 1 July 2026 fee; 50% reduction for financial hardship" },
      { label: "Time limit", value: "28 days", note: "After notification; 14 days if you are in immigration detention; cannot be extended" },
      { label: "Who can apply", value: "Applicant or sponsor", note: "Onshore applicant; the sponsor or nominator for most offshore sponsored visas" },
      { label: "Where you must be", value: "In Australia", note: "For onshore refusals you must be in Australia when you lodge the review" },
      { label: "Possible outcomes", value: "Affirm, vary, set aside, remit", note: "The Tribunal can substitute its own decision or send the case back" },
      { label: "Bridging visa", value: "Continues during review", note: "A Bridging visa A usually ceases 35 days after the Tribunal affirms a refusal" },
    ],
    whoFor: [
      "You applied for a visa in Australia, it was refused, and the decision letter says you can apply to the ART.",
      "You sponsored or nominated someone for a partner, parent, child or employer-sponsored visa from outside Australia and the application or nomination was refused.",
      "Your employer's nomination or sponsorship was refused and you want the business to seek review while your own visa application is on hold.",
      "You missed a criterion at the time of decision but can now show it is met and want the Tribunal to look at new evidence.",
      "You are deciding whether merits review, a fresh application, or leaving Australia is the better path after a refusal.",
    ],
    eligibility: [
      {
        title: "The decision is a Part 5-reviewable decision",
        detail:
          "Only decisions listed in the Migration Act and Regulations can be reviewed. They include most refusals of visas applied for in Australia, refusals of some offshore visas that need an Australian sponsor or nominator, and refusals of nominations and sponsorships. Your decision letter states whether the decision is reviewable and who may apply.",
        legal: "Migration Act 1958, s 338",
      },
      {
        title: "You are the right person to apply",
        detail:
          "For an onshore refusal the visa applicant applies. For most offshore sponsored visas the Australian sponsor, nominator or relative applies, not the person overseas. For a nomination or sponsorship refusal the employer applies. The Tribunal must receive the correct applicant's details and the decision letter.",
        legal: "Migration Act 1958, ss 347 and 347A",
      },
      {
        title: "You are in Australia when you lodge (onshore refusals)",
        detail:
          "If the refused visa was applied for in Australia you must be physically in the migration zone when the review application is made. Leaving Australia after lodging is possible but usually ends any bridging visa and can affect the review.",
        legal: "Migration Act 1958, s 347",
      },
      {
        title: "You apply within the time limit",
        detail:
          "The ART Practice Direction states that an application for review of a migration decision must be made within 28 days after the day you were notified of the decision, or within 14 days if you are in immigration detention. The Tribunal has no power to extend these periods. Notification is counted under the deemed-receipt rules in the Act: a decision sent by email is usually taken to be received at the end of the day it was sent, and a posted letter some days after its date.",
        legal: "Migration Act 1958, ss 347 and 379C; Migration Regulations 1994, reg 4.10",
      },
      {
        title: "You pay the fee before the deadline",
        detail:
          "The fee for review of most migration decisions is A$3,727 and must be paid before your deadline for applying. If you ask for the 50% hardship reduction you must still pay at least half the fee by the deadline and lodge the fee-reduction form with supporting documents before the review is finalised. An application without the required fee is not properly made.",
        legal: "Migration Regulations 1994, reg 4.13",
      },
      {
        title: "You use an approved way to apply",
        detail:
          "Apply online through the ART, or lodge form M1 (M2 if you are in immigration detention), or write to the Tribunal by email, post or in person. Give the decision letter, or your full name, contact details, date and description of the decision and identity details.",
        legal: "Migration Act 1958, s 347",
      },
      {
        title: "The decision was not made by the Minister personally",
        detail:
          "The Tribunal cannot review decisions made personally by the Minister. Those can only be challenged by judicial review in the courts.",
        legal: "Migration Act 1958, s 338",
      },
      {
        title: "You respond to the Tribunal's invitations",
        detail:
          "The Tribunal may ask you for information and must give you particulars of adverse information it may rely on and invite your comment. It must also invite you to a hearing unless it can decide in your favour on the papers. If you do not respond or attend, it can decide without you or dismiss the application.",
        legal: "Migration Act 1958, ss 359, 359A and 360",
      },
    ],
    familyNote:
      "Family members who were refused in the same application usually have their own review rights and should be named in the same review or tell the Tribunal within 14 days that they want their applications heard together. A child born after lodgement, or a change in a spousal relationship, must be reported to the Tribunal in writing.",
    documents: [
      {
        group: "Lodging the review",
        items: [
          "The Department's decision letter and decision record, with the date you received it",
          "Passport biographical page for each review applicant",
          "Fee receipt, or the request for fee reduction with payslips, Centrelink statements, bank statements and rent or mortgage evidence",
          "Appointment of representative or authorised recipient form if a registered migration agent or lawyer acts for you",
        ],
      },
      {
        group: "Evidence for the review",
        items: [
          "Documents that answer each reason for refusal, including evidence that a criterion is now met where the Tribunal assesses it at the time of its decision",
          "Written submissions linking the evidence to the visa criteria and the reasons for refusal",
          "Statutory declarations from you, your sponsor or witnesses who can speak to disputed facts",
          "Accredited English translations of any document not in English",
        ],
      },
    ],
    steps: [
      {
        title: "Read the decision letter and check your time limit",
        description:
          "The letter states whether the ART can review the decision, who may apply and when the application must be lodged. Count the days from the date you are taken to have received the letter, not the date it was signed.",
        output: "You know the deadline, the applicant and the fee",
      },
      {
        title: "Lodge the application and pay the fee",
        description:
          "Apply online if you can. Pay A$3,727, or pay at least 50% and lodge a fee-reduction request if paying the full fee would cause financial hardship. The Tribunal sends a confirmation letter and tells the Department that a review has started.",
        output: "A valid review application and a case number",
      },
      {
        title: "Get the Department's documents",
        description:
          "The Department gives the Tribunal the documents relevant to the review. You can ask the Department for a copy of the written material it gave the Tribunal, and you should do so early so you can see what the Tribunal has.",
        output: "A copy of the review file to work from",
      },
      {
        title: "Give evidence and submissions",
        description:
          "Upload documents through the ART online portal at any time before the decision. Answer every reason for refusal. Respond within the stated period if the Tribunal invites you to comment on adverse information or to give further information.",
        output: "Evidence and submissions on the Tribunal file",
      },
      {
        title: "Ask for expedition if it fits your case",
        description:
          "If the visa was refused because a criterion was not met and you can now show objectively that it is met, you can ask for an expedited decision on the papers. Reviews of people in detention, visa cancellations and court remittals are expedited automatically.",
        output: "A request for expedited decision where available",
      },
      {
        title: "Attend the hearing",
        description:
          "The Tribunal invites you to a hearing by video, telephone or in person. A member asks questions, you give evidence on oath or affirmation, and witnesses you nominate can give evidence. The Department does not usually appear. Interpreters are provided free of charge.",
        output: "Your evidence given in person to the member",
      },
      {
        title: "Receive the decision",
        description:
          "The Tribunal gives a written statement of the decision, the reasons, the findings on material questions of fact and the evidence relied on. It may affirm the refusal, vary it, set it aside and substitute a decision that you meet the criterion, or remit the case to the Department with directions.",
        output: "A written Tribunal decision",
      },
      {
        title: "Act on the outcome",
        description:
          "If the case is remitted the Department finishes processing your visa. If the refusal is affirmed, a Bridging visa A granted since 19 November 2016 ceases 35 days later; judicial review must be filed within 35 days and a ministerial intervention request becomes possible.",
        output: "A visa decision, or a plan for the next step",
      },
    ],
    costs: [
      { item: "ART application fee (most migration decisions)", amount: "A$3,727", note: "Pay before the deadline for applying; 1 July 2026 fee" },
      { item: "Fee reduction for financial hardship", amount: "50% of the fee", note: "Pay at least 50% by the deadline and lodge the fee-reduction form before the review is finalised" },
      { item: "Refund if you succeed", amount: "50% refund", note: "Refunded if the decision is set aside, varied or remitted; no refund if affirmed" },
      { item: "Bridging visa decisions that led to detention", amount: "No fee", note: "No fee to review those bridging visa decisions" },
      { item: "Interpreter at the hearing", amount: "No charge", note: "Arranged by the Tribunal on request" },
      { item: "Representation, translations, summons and transcripts", amount: "Typical third-party costs", note: "Only a registered migration agent or Australian lawyer may charge for representation" },
    ],
    afterGrant: [
      "Keep your bridging visa valid: a Bridging visa A associated with the refused application stays in effect until 35 days after a Tribunal decision affirming the refusal, or until the Department decides a remitted case.",
      "Tell the Tribunal and the Department within the required time if your address, email, representative or family circumstances change.",
      "If the Tribunal sets aside the decision and remits it, the Department must reconsider the application in line with the Tribunal's directions, and the remaining criteria still have to be met.",
      "If the refusal is affirmed you remain subject to the section 48 bar while in Australia without a substantive visa, so your onshore options are limited to the prescribed visas.",
    ],
    pathways: [
      {
        title: "Judicial review in the Federal Circuit and Family Court",
        description: "If the Tribunal's decision contains a jurisdictional error you can apply to the court within 35 days of the decision.",
        href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
      },
      {
        title: "Ministerial intervention request",
        description: "After a Tribunal decision you can ask the Minister to consider substituting a more favourable decision under section 351.",
        href: "/visas/appeals-and-review/ministerial-intervention",
      },
      {
        title: "Section 48 bar and the visas you can still apply for",
        description: "A refusal while you are in Australia without a substantive visa limits further onshore applications to prescribed visas.",
        href: "/visas/appeals-and-review/section-48-bar",
      },
      {
        title: "Bridging visas during review",
        description: "How Bridging visas A, B and E work while the Tribunal and the courts consider your case.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
    ],
    risks: [
      "Lodging outside the 28-day limit (14 days in detention): the Tribunal cannot extend it and must find it has no jurisdiction.",
      "The wrong person applies, for example the overseas applicant instead of the Australian sponsor for a sponsored offshore visa.",
      "The fee is not paid, or the hardship request is lodged without paying at least 50% by the deadline, so the application is not properly made.",
      "Ignoring a section 359A letter about adverse information, or missing a response deadline, so the Tribunal decides on the material it has.",
      "Not attending the hearing: the Tribunal can decide without you or dismiss the application, and reinstatement must be sought quickly.",
      "Treating the review as an appeal on paper only: the member decides the facts afresh, so weak or inconsistent evidence at the hearing can be fatal.",
    ],
    faqs: [
      {
        question: "How long do I have to apply to the ART after a visa refusal?",
        answer:
          "The ART's Migration, Protection and Character Practice Direction states 28 days after you were notified of the decision, or 14 days if you are in immigration detention. The period runs from deemed receipt under section 379C of the Migration Act. The Tribunal cannot extend it, so check the date in your letter and lodge early.",
      },
      {
        question: "How much does an ART review cost in 2026?",
        answer:
          "The fee for most migration decisions is A$3,727 and must be paid before the application deadline. If paying would cause financial hardship you can ask for a 50% reduction. If the Tribunal sets aside, varies or remits the decision, 50% of the fee you paid is refunded. Character-related reviews use the standard fee of A$1,195 instead.",
      },
      {
        question: "Can I give the Tribunal new evidence?",
        answer:
          "Yes. The Tribunal reviews the decision afresh and can consider documents the Department never saw. Criteria assessed at the time of decision are considered as at the Tribunal's decision, so evidence that you now meet a criterion can succeed. Criteria that had to be met at the time of application cannot be fixed later.",
      },
      {
        question: "Will the Department argue against me at the hearing?",
        answer:
          "Usually not. In migration and protection reviews the Minister is a non-participating party and does not appear or make submissions unless the Tribunal orders it. The member asks the questions and decides the case on the evidence.",
      },
      {
        question: "What happens to my bridging visa during the review?",
        answer:
          "A Bridging visa A granted with an onshore application stays in effect while the review is on foot. If the Tribunal affirms the refusal, a Bridging visa A granted on or after 19 November 2016 ceases 35 days after the decision. If the case is remitted the bridging visa continues while the Department reconsiders.",
      },
      {
        question: "What can the Tribunal decide?",
        answer:
          "It can affirm the refusal, vary it, set it aside and substitute a new decision (for example that you meet the disputed criterion), or remit the application to the Department with directions. It cannot grant the visa itself, so a remitted case goes back to the Department for the remaining criteria to be checked.",
      },
      {
        question: "Can I appeal if the ART affirms the refusal?",
        answer:
          "There is no second merits review and the Guidance and Appeals Panel is not available for migration decisions. You can apply to the Federal Circuit and Family Court of Australia within 35 days if the Tribunal made a jurisdictional error, and you can ask the Minister to intervene under section 351.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, Part 5 (ss 338, 347, 347A, 348, 349, 357A, 359, 359A, 360, 362A, 368, 379C)", url: ACT },
      { label: "Migration Regulations 1994, Part 4 (regs 4.10 time limits and 4.13 fees)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "ART Migration, Protection and Character Practice Direction 2026 (compilation 24 September 2026)", url: ART_PD },
    ],
    sources: [
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
      { label: "ART: Fees", url: ART_FEES },
      { label: "ART: Possible outcomes", url: ART_OUTCOMES },
      { label: "ART: Types of hearings and case events", url: ART_HEARINGS },
      { label: "ART: What happens during a hearing", url: ART_DURING_HEARING },
      { label: "ART: Information about decisions (MR25)", url: ART_MR25 },
      { label: "ART: Information about hearings (MR18)", url: ART_MR18 },
      { label: "ART: Application for review of decision (form M1)", url: ART_M1 },
      { label: "Home Affairs: Bridging visa A (subclass 010)", url: HA_BVA },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Judicial review of migration decisions", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
      { label: "Natural justice and adverse information", href: "/visas/appeals-and-review/natural-justice-and-adverse-information" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "ART review of a visa cancellation", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
    ],
    keywords: [
      "ART review visa refusal",
      "Administrative Review Tribunal visa",
      "ART time limit 28 days",
      "ART application fee 2026",
      "visa refused appeal Australia",
      "merits review migration decision",
      "ART hearing what to expect",
      "AAT replaced by ART migration",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. ART review of a visa cancellation
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "art-review-of-visa-cancellation",
    category: "appeals-and-review",
    kind: "guide",
    name: "ART review of a visa cancellation",
    title: "ART review of a visa cancellation",
    seoTitle: "ART review of a visa cancellation: time limits and fee",
    seoDescription:
      "Challenge a visa cancellation at the ART in 2026: which cancellations are reviewable, the 28, 14 and 9-day time limits, the A$3,727 fee and bridging visas.",
    intro:
      "A visa cancelled under section 109, 116 or 140 of the Migration Act while you are in Australia can usually be reviewed on its merits by the Administrative Review Tribunal (ART). Cancellation takes effect immediately, so you must also deal with your immigration status, usually by applying for a Bridging visa E. Time limits are short, particularly for people in detention and for character cancellations, and the Tribunal expedites cancellation reviews.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Apply outside Australia"],
    keyFacts: [
      { label: "ART fee", value: "A$3,727", note: "Standard migration fee; A$1,195 for character cancellations; no fee for bridging visa decisions that led to detention" },
      { label: "Time limit", value: "28 days", note: "14 days if you are in immigration detention; 9 days for section 501 cancellations made while you are in Australia" },
      { label: "Who can apply", value: "The former visa holder", note: "Family members whose visas were cancelled under section 140 apply for their own review" },
      { label: "Your status", value: "Unlawful unless on a bridging visa", note: "Cancellation takes effect at once and any associated bridging visa ceases with it" },
      { label: "Review priority", value: "Expedited", note: "The Tribunal automatically expedites cancellation reviews and detention cases" },
      { label: "Outcome if you win", value: "Visa restored", note: "The Tribunal substitutes a decision not to cancel; an affirmed cancellation leaves you to depart or seek judicial review" },
    ],
    whoFor: [
      "Your visa was cancelled under section 116 after a Notice of Intention to Consider Cancellation, for example for a breach of a condition or a change in circumstances.",
      "Your visa was cancelled under section 109 because the Department says you gave incorrect information or a bogus document.",
      "Your family member's visa was cancelled and your own visa was cancelled as a consequence under section 140.",
      "You are in immigration detention after a cancellation and need a review lodged within 14 days.",
      "Your visa was cancelled on character grounds by a delegate and you want the expedited 9-day review.",
    ],
    eligibility: [
      {
        title: "The cancellation is reviewable",
        detail:
          "Cancellations under section 109 and section 116 made while you are in Australia and not in immigration clearance are reviewable by the Tribunal. Cancellations made at the border in immigration clearance, decisions made personally by the Minister, and business visa cancellations under section 134 have different rules; your notice of cancellation states whether review is available.",
        legal: "Migration Act 1958, ss 338 and 134",
      },
      {
        title: "Section 128 cancellations while you are overseas",
        detail:
          "If your visa is cancelled under section 128 while you are outside Australia you are told after the event and can ask the Department to revoke the cancellation within the time stated in the notice. Review rights depend on the type of decision, so read the notice and get advice quickly.",
        legal: "Migration Act 1958, ss 128, 129 and 131",
      },
      {
        title: "Consequential cancellations under section 140",
        detail:
          "When a primary visa is cancelled, visas held by family members because of the primary visa are also cancelled. Each family member whose visa is cancelled needs their own review application, and the outcome usually follows the primary cancellation.",
        legal: "Migration Act 1958, s 140",
      },
      {
        title: "Character cancellations follow a separate track",
        detail:
          "A cancellation by a delegate under section 501, or a refusal to revoke a mandatory cancellation under section 501CA, is reviewed by the Tribunal as an expedited character review if you were in Australia when the decision was made: 9 days to apply, documents to the Minister at least 2 business days before the hearing, and a decision within 84 days.",
        legal: "Migration Act 1958, ss 500, 501 and 501CA",
      },
      {
        title: "You lodge within time",
        detail:
          "The ART Practice Direction gives 28 days from notification, or 14 days if you are in immigration detention, for migration decisions. The Tribunal cannot extend these periods. Character cancellations made while you were in Australia have the 9-day limit.",
        legal: "Migration Regulations 1994, reg 4.10; Migration Act 1958, s 500",
      },
      {
        title: "You pay the fee by the deadline",
        detail:
          "The standard migration fee of A$3,727 applies, with a 50% reduction available for financial hardship. There is no fee to review a bridging visa decision that resulted in you being placed in immigration detention. Character reviews use the standard fee of A$1,195, reduced to A$100 for people in detention and others in special circumstances.",
        legal: "Migration Regulations 1994, reg 4.13",
      },
      {
        title: "You hold a bridging visa or make arrangements to depart",
        detail:
          "Cancellation makes you an unlawful non-citizen unless you hold another visa. Applying to the Tribunal does not by itself give you a visa. You can apply for a Bridging visa E (subclass 050) because you are seeking merits review; the grant letter tells you whether you can work.",
        legal: "Migration Act 1958, s 189; Migration Regulations 1994, Sch 2 Part 050",
      },
      {
        title: "You can show the ground does not exist or the visa should not be cancelled",
        detail:
          "The Tribunal decides afresh whether the cancellation ground is made out and, if it is, whether the discretion to cancel should be exercised. Evidence about the alleged breach, your compliance history, your ties to Australia, hardship to you and your family, and any risk to the community is central.",
        legal: "Migration Act 1958, ss 109, 116 and 349",
      },
    ],
    familyNote:
      "A partner or child whose visa was cancelled under section 140 should lodge a review at the same time and tell the Tribunal within 14 days if they want the applications heard together.",
    documents: [
      {
        group: "Lodging the review",
        items: [
          "The notice of cancellation and the Notice of Intention to Consider Cancellation with any response you gave",
          "Passport biographical page and your Bridging visa E grant letter or application receipt",
          "Fee receipt, or fee-reduction request with financial documents (payslips, Centrelink statements, bank statements)",
          "Form M2 if you are in immigration detention, or form M1 or the online application otherwise",
        ],
      },
      {
        group: "Evidence against the cancellation",
        items: [
          "Documents that show the ground does not exist, for example enrolment or employment records, medical evidence or the correct information",
          "Evidence of your compliance with visa conditions and the circumstances of any breach",
          "Evidence of ties to Australia, dependants, employment, study and hardship if you had to leave",
          "Statutory declarations from you and witnesses, with accredited translations where needed",
        ],
      },
    ],
    steps: [
      {
        title: "Read the cancellation notice",
        description:
          "The notice states the section used, the reasons, whether the Tribunal can review the decision and the time limit. Note the date you received it.",
        output: "The deadline and the review path identified",
      },
      {
        title: "Apply for a Bridging visa E straight away",
        description:
          "Your previous bridging visa ceases when the substantive visa is cancelled. Apply for a Bridging visa E (subclass 050) on the basis that you are seeking merits review so you stay lawful. Ask for work rights if you need them.",
        output: "A Bridging visa E application lodged",
      },
      {
        title: "Lodge the ART application and pay the fee",
        description:
          "Apply online, or by form M1, or form M2 from detention. Pay A$3,727 (or 50% with a hardship request) before the deadline. The Tribunal confirms receipt and notifies the Department.",
        output: "A valid review application and case number",
      },
      {
        title: "Obtain the Department's file",
        description:
          "Ask the Department for the written material it gave the Tribunal under section 362A. Check the notice of intention, your response and any evidence the delegate relied on.",
        output: "The cancellation file and the evidence you must answer",
      },
      {
        title: "Give evidence and submissions",
        description:
          "Address the ground first: does it exist? Then the discretion: why should the visa not be cancelled? The Tribunal must put adverse information to you and invite comment, and you should answer within the time it sets.",
        output: "Evidence and submissions on the Tribunal file",
      },
      {
        title: "Attend the expedited hearing",
        description:
          "Cancellation reviews are expedited automatically. The member hears your evidence and any witnesses by video, telephone or in person. In character reviews the Minister is represented and documents must reach the Minister 2 business days before the hearing.",
        output: "Your case put to the member in person",
      },
      {
        title: "Receive the decision and act on it",
        description:
          "If the cancellation is set aside the visa is restored (if it has not expired in the meantime). If it is affirmed, your Bridging visa E runs to the date or event in its conditions, judicial review must be filed within 35 days and a ministerial intervention request can be made.",
        output: "A restored visa, or a plan for departure or the next step",
      },
    ],
    costs: [
      { item: "ART application fee (section 109, 116 and 140 cancellations)", amount: "A$3,727", note: "Pay before the deadline; 50% reduction for financial hardship; 50% refund if set aside, varied or remitted" },
      { item: "ART fee for character cancellations", amount: "A$1,195", note: "Reduced to A$100 in detention, with legal aid, a concession card, under 18 or financial hardship" },
      { item: "Bridging visa decision that led to detention", amount: "No fee", note: "Includes refusals of a subclass 070 visa without prescribed conditions" },
      { item: "Bridging visa E (subclass 050)", amount: "A$0", note: "No visa application charge" },
      { item: "Representation and translations", amount: "Typical third-party costs", note: "Only a registered migration agent or Australian lawyer may charge for representation" },
    ],
    afterGrant: [
      "Comply with the conditions of your Bridging visa E, including any reporting or no-work condition, until the Tribunal decides the review.",
      "If the Tribunal affirms the cancellation you are subject to the section 48 bar while in Australia and a 3-year exclusion under PIC 4013 may apply to later applications.",
      "If the cancellation is set aside, check VEVO to confirm your visa and conditions are showing correctly and that your family members' visas are restored.",
      "Keep the Tribunal and the Department informed of any change of address, email or representative.",
    ],
    pathways: [
      {
        title: "Visa cancellation and the Notice of Intention",
        description: "What the grounds are, how to respond to a notice and what follows a cancellation.",
        href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
      },
      {
        title: "Character test and section 501",
        description: "The expedited 9-day review of character cancellations and revocation requests.",
        href: "/visas/appeals-and-review/character-test-section-501",
      },
      {
        title: "Judicial review",
        description: "Court review of a Tribunal decision for jurisdictional error within 35 days.",
        href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
      },
      {
        title: "Exclusion periods after cancellation",
        description: "PIC 4013 and the 3-year risk factor that follows most cancellations.",
        href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014",
      },
    ],
    risks: [
      "Missing the 14-day limit from immigration detention or the 9-day limit for character cancellations: neither can be extended.",
      "Not applying for a Bridging visa E, so you are unlawful during the review and may be detained or barred from a later bridging visa.",
      "Arguing only about hardship when the Tribunal first needs evidence that the cancellation ground does not exist.",
      "Cancellation in immigration clearance at the airport, which is not reviewable by the Tribunal and leads to removal.",
      "Leaving Australia during the review, which ends your bridging visa and can make the review pointless.",
      "Giving inconsistent explanations for the breach that led to cancellation, which the member tests at the hearing.",
    ],
    faqs: [
      {
        question: "How long do I have to apply to the ART after a cancellation?",
        answer:
          "The ART Practice Direction gives 28 days from notification for migration decisions and 14 days if you are in immigration detention. For a cancellation on character grounds made while you were in Australia the Migration Act allows only 9 days. None of these can be extended.",
      },
      {
        question: "Do I keep my visa while the Tribunal reviews the cancellation?",
        answer:
          "No. The cancellation takes effect immediately and a bridging visa linked to the cancelled visa ceases at the same time. You should apply for a Bridging visa E (subclass 050) on the basis that you are seeking merits review so that you stay lawful.",
      },
      {
        question: "Can the ART review a cancellation made by the Minister personally?",
        answer:
          "No. Decisions made personally by the Minister, including cancellations under section 133A, 133C or 501(3), cannot be reviewed by the Tribunal. Judicial review in the courts is the only challenge.",
      },
      {
        question: "What if my visa was cancelled while I was overseas?",
        answer:
          "Section 128 lets the Department cancel without notice while you are outside Australia. You are notified afterwards and can ask for revocation under section 131 within the time stated. Whether the Tribunal can review the outcome depends on the decision type, so read the notice carefully.",
      },
      {
        question: "How quickly will the Tribunal decide?",
        answer:
          "Cancellation reviews are expedited automatically, and reviews of people in detention are also prioritised. Expedited character reviews must be decided within 84 days of notification of the Department's decision or the decision is taken to be affirmed. No other processing time is published.",
      },
      {
        question: "What happens to my family's visas?",
        answer:
          "Visas granted to family members because of your visa are cancelled under section 140 when yours is cancelled. Each person applies for their own review. If your cancellation is set aside, theirs usually follows.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 109, 116, 128, 129, 131, 133A, 133C, 134, 140, 189, 338, 347, 347A, 349, 359A, 360, 362A, 500, 501 and 501CA", url: ACT },
      { label: "Migration Regulations 1994, regs 4.10 and 4.13; Sch 2 Part 050; PIC 4013 (Sch 4)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "ART Migration, Protection and Character Practice Direction 2026", url: ART_PD },
    ],
    sources: [
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
      { label: "ART: Fees", url: ART_FEES },
      { label: "ART: Expedited review of decisions under s 501 or 501CA (fact sheet)", url: ART_EXPEDITED },
      { label: "ART: Information about decisions (MR25)", url: ART_MR25 },
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "Home Affairs: Bridging visa E (subclass 050)", url: HA_BVE },
      { label: "Home Affairs: If you don't have a valid visa", url: HA_NO_VISA },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Visa cancellation and the Notice of Intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "Character test (section 501)", href: "/visas/appeals-and-review/character-test-section-501" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "Section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
    ],
    keywords: [
      "visa cancellation review ART",
      "appeal visa cancellation Australia",
      "section 116 cancellation review",
      "section 109 cancellation",
      "ART cancellation time limit",
      "bridging visa E after cancellation",
      "visa cancelled in detention review",
      "section 140 consequential cancellation",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Visa cancellation and the Notice of Intention to Consider Cancellation
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "visa-cancellation-and-notice-of-intention",
    category: "appeals-and-review",
    kind: "guide",
    name: "Visa cancellation and the Notice of Intention",
    title: "Visa cancellation and the Notice of Intention to Consider Cancellation",
    seoTitle: "Visa cancellation NOICC: grounds, response, consequences",
    seoDescription:
      "Grounds for visa cancellation under ss 109, 116, 128 and 140, how the Notice of Intention to Consider Cancellation works in 2026 and what to put in a response.",
    intro:
      "The Department of Home Affairs can cancel a visa for incorrect information, a breach of conditions, a change in circumstances or a risk to the community. Before cancelling a visa held by someone in Australia it must usually issue a Notice of Intention to Consider Cancellation and give the holder a chance to respond. This guide explains the grounds, the notice, what a strong response contains and what follows a cancellation.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Permanent", "Temporary", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Main powers", value: "ss 109, 116, 128, 140", note: "Incorrect information; general grounds; cancellation while overseas; family members" },
      { label: "Notice before cancellation", value: "Required onshore", note: "A section 119 notice gives particulars of the ground and invites you to respond within a specified time" },
      { label: "Response", value: "Within the time in the notice", note: "Show that the ground does not exist, or give reasons why the visa should not be cancelled" },
      { label: "After cancellation", value: "Unlawful unless on a bridging visa", note: "Bridging visa E is available; the section 48 bar and a 3-year exclusion under PIC 4013 can follow" },
      { label: "Review", value: "ART within 28 days", note: "14 days in detention; no review of cancellations in immigration clearance or by the Minister personally" },
      { label: "Fee to respond", value: "A$0", note: "No charge to respond to a notice; ART review costs A$3,727" },
    ],
    whoFor: [
      "You have received a Notice of Intention to Consider Cancellation and need to respond.",
      "The Department says you breached a condition, for example by working more hours than allowed or stopping study.",
      "Your circumstances changed after grant, for example your relationship or employment ended, and the Department says the basis for the visa no longer exists.",
      "You are accused of giving incorrect information or a bogus document in an application or passenger card.",
      "You are outside Australia and have been told your visa was cancelled under section 128.",
    ],
    eligibility: [
      {
        title: "Section 116: general cancellation grounds",
        detail:
          "The Department may cancel a visa if the circumstances that permitted its grant no longer exist, the holder has not complied with a condition, the holder's presence in Australia may be a risk to the health, safety or good order of the community, a student visa holder is not a genuine student or is not enrolled, or a prescribed ground applies. Prescribed grounds include giving false or misleading information and paying for visa sponsorship. Cancellation is mandatory in some prescribed circumstances.",
        legal: "Migration Act 1958, s 116; Migration Regulations 1994, reg 2.43",
      },
      {
        title: "Section 109: incorrect information at application",
        detail:
          "If an application form, passenger card or response to a request contained an incorrect answer, or a bogus document was given, the Department first gives a notice under section 107 setting out the particulars and inviting you to respond. It then decides whether non-compliance occurred and, if so, whether to cancel, weighing the prescribed circumstances such as the correct information, whether the visa would still have been granted, and your present circumstances.",
        legal: "Migration Act 1958, ss 107, 108 and 109; Migration Regulations 1994, reg 2.41",
      },
      {
        title: "Section 128: cancellation while you are outside Australia",
        detail:
          "A visa can be cancelled without prior notice while the holder is outside Australia if a section 116 ground exists. The holder is notified afterwards and may ask for the cancellation to be revoked within the time stated in the notice.",
        legal: "Migration Act 1958, ss 128, 129 and 131",
      },
      {
        title: "Section 140: family members",
        detail:
          "When a visa is cancelled, a visa granted to another person because they are a member of the holder's family unit is also cancelled. The Department may also cancel other related visas.",
        legal: "Migration Act 1958, s 140",
      },
      {
        title: "Section 119: the Notice of Intention to Consider Cancellation",
        detail:
          "Before cancelling under section 116 a visa held by a person in Australia, the Department must give notice of the ground, the particulars and the information it relies on, and invite the holder to show within a specified time that the ground does not exist or that there is a reason why the visa should not be cancelled. The time is prescribed and stated in the notice; for a holder in Australia it is often short, and the Department can extend it on request. People in immigration clearance may be asked to respond on the spot.",
        legal: "Migration Act 1958, ss 119 and 120",
      },
      {
        title: "Notice of the decision and review rights",
        detail:
          "If the visa is cancelled you must be told in writing of the decision, the reasons, the time for review and whether the Tribunal can review it. Cancellations in immigration clearance and decisions made personally by the Minister are not reviewable by the Tribunal.",
        legal: "Migration Act 1958, ss 121, 127 and 338",
      },
      {
        title: "Minister's personal cancellation powers",
        detail:
          "The Minister can personally cancel a visa in the public interest, including by setting aside a delegate's decision not to cancel, without the usual natural justice steps. These decisions are not reviewable by the Tribunal.",
        legal: "Migration Act 1958, ss 133A and 133C",
      },
      {
        title: "Character cancellations",
        detail:
          "Cancellation for failing the character test, including mandatory cancellation for people in prison, is dealt with under section 501 and has its own notice, revocation and review rules.",
        legal: "Migration Act 1958, ss 501, 501(3A) and 501CA",
      },
    ],
    familyNote:
      "Family members whose visas depend on yours should be included in your response: explain the effect of cancellation on them and on any children in Australia, because their visas fall with yours under section 140.",
    documents: [
      {
        group: "Responding to a notice",
        items: [
          "A written response that addresses each ground and each piece of information in the notice",
          "Evidence that the ground does not exist, for example a current Confirmation of Enrolment, payslips and rosters showing work hours, or proof that the information given was correct",
          "A statutory declaration explaining the circumstances of any breach and what you have done since",
          "Evidence of ties to Australia: family, children, employment, study, community involvement and hardship if removed",
          "Form 956 if a registered migration agent or lawyer is acting for you",
        ],
      },
    ],
    steps: [
      {
        title: "Check the notice and the deadline",
        description:
          "Identify the section relied on, each ground, the information the Department holds and the date by which you must respond. Ask in writing for an extension if you need time to gather evidence.",
        output: "A list of the grounds and a confirmed response date",
      },
      {
        title: "Get the file",
        description:
          "If the notice refers to information you have not seen, ask for it. You can also request your departmental file under freedom of information, although that may take longer than the response period.",
        output: "The information the Department relies on",
      },
      {
        title: "Answer the ground",
        description:
          "First show, with documents, that the ground does not exist or that the information was correct. If the breach happened, explain the circumstances, for example illness, exploitation by an employer, or a misunderstanding of the condition.",
        output: "A written response with supporting evidence",
      },
      {
        title: "Give reasons why the visa should not be cancelled",
        description:
          "Even where a ground exists the decision is usually discretionary. Address your purpose in Australia, your compliance history, hardship to you and your family, the best interests of children, your ties to Australia and any risk to the community.",
        output: "Submissions on the discretion not to cancel",
      },
      {
        title: "Lodge the response in the way the notice requires",
        description:
          "Send the response through ImmiAccount, by email or as the notice directs, before the deadline, and keep proof of lodgement.",
        output: "Proof that the response was received in time",
      },
      {
        title: "If the visa is cancelled, act immediately",
        description:
          "Apply for a Bridging visa E if you intend to seek review or to depart, lodge the ART application within 28 days (14 days in detention) and pay the fee, and note that the section 48 bar now limits further onshore applications.",
        output: "Lawful status restored and a review lodged in time",
      },
    ],
    costs: [
      { item: "Responding to a Notice of Intention to Consider Cancellation", amount: "A$0", note: "No departmental charge" },
      { item: "Bridging visa E (subclass 050)", amount: "A$0", note: "No visa application charge" },
      { item: "ART review of a cancellation", amount: "A$3,727", note: "1 July 2026 fee; 50% reduction for financial hardship" },
      { item: "Representation, translations and police or medical reports", amount: "Typical third-party costs", note: "Varies with the case" },
    ],
    afterGrant: [
      "If the Department decides not to cancel, your visa and conditions continue unchanged; keep complying because the same ground can be considered again if it recurs.",
      "If the visa is cancelled you become unlawful at that moment unless you hold another visa, and you may be detained and removed if you remain without a bridging visa.",
      "A cancellation under section 109, 116, 128 or 140 is a risk factor under PIC 4013 for 3 years, and the section 48 bar applies while you remain in Australia without a substantive visa.",
      "Visas of family members granted because of your visa are cancelled with yours under section 140.",
    ],
    pathways: [
      {
        title: "ART review of a visa cancellation",
        description: "Time limits, fees and the expedited process for challenging a cancellation.",
        href: "/visas/appeals-and-review/art-review-of-visa-cancellation",
      },
      {
        title: "Natural justice and adverse information",
        description: "Your right to see and answer adverse information before a decision.",
        href: "/visas/appeals-and-review/natural-justice-and-adverse-information",
      },
      {
        title: "Section 48 bar",
        description: "Which visas you can still apply for in Australia after a cancellation.",
        href: "/visas/appeals-and-review/section-48-bar",
      },
      {
        title: "Student visa conditions and work rights",
        description: "The conditions most often behind student visa cancellation notices.",
        href: "/visas/study/student-visa-conditions-and-work-rights",
      },
    ],
    risks: [
      "Ignoring the notice or responding late, so the delegate decides on the Department's information alone.",
      "Admitting a breach without explaining the circumstances, or giving an explanation that contradicts earlier statements.",
      "Responding only with hardship arguments when the first question is whether the ground exists.",
      "Not realising that incorrect answers on an incoming passenger card can ground a section 109 cancellation years later.",
      "Leaving Australia after receiving a notice, which can allow cancellation under section 128 without further notice.",
      "Working beyond permitted hours or changing course without a new Confirmation of Enrolment, the most common section 116 grounds for students.",
    ],
    faqs: [
      {
        question: "What is a Notice of Intention to Consider Cancellation?",
        answer:
          "It is the written notice the Department must give under section 119 before cancelling a visa under section 116 while you are in Australia. It sets out the ground, the particulars and the information relied on, and invites you to show within a specified time that the ground does not exist or that the visa should not be cancelled.",
      },
      {
        question: "How long do I have to respond?",
        answer:
          "The notice states the time. The period is prescribed by the Regulations and for people in Australia it is usually short. You can ask in writing for more time before the period ends, and the Department can extend it. At the border you may be asked to respond immediately.",
      },
      {
        question: "What should my response contain?",
        answer:
          "Evidence that the ground does not exist comes first. Then explain the circumstances of any breach, your compliance history, your ties to Australia, the effect of cancellation on you and your family, including children, and any risk to the community. Attach documents and a statutory declaration, and keep proof of lodgement.",
      },
      {
        question: "Can the Department cancel my visa without telling me first?",
        answer:
          "Yes in limited cases: while you are outside Australia under section 128, by the Minister personally under sections 133A and 133C, or where cancellation is mandatory. You are notified afterwards and may be able to ask for revocation or seek judicial review.",
      },
      {
        question: "What happens to my bridging visa if my visa is cancelled?",
        answer:
          "A bridging visa linked to the cancelled visa ceases at the same time. You can apply for a Bridging visa E to stay lawful while you seek review, request ministerial intervention or arrange to depart.",
      },
      {
        question: "Will a cancellation stop me getting another visa?",
        answer:
          "While you remain in Australia without a substantive visa the section 48 bar limits you to prescribed visas. A cancellation under section 109, 116, 128 or 140 is also a risk factor under PIC 4013 for 3 years, which can only be overcome by compelling or compassionate circumstances.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 107, 108, 109, 116, 119, 120, 121, 127, 128, 129, 131, 133A, 133C, 140, 189, 338 and 48", url: ACT },
      { label: "Migration Regulations 1994, regs 2.41 and 2.43; PIC 4013 (Sch 4)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
    ],
    sources: [
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "Home Affairs: Re-entry ban", url: HA_REENTRY },
      { label: "Home Affairs: If you don't have a valid visa", url: HA_NO_VISA },
      { label: "Home Affairs: Bridging visa E (subclass 050)", url: HA_BVE },
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
      { label: "ART Migration, Protection and Character Practice Direction 2026", url: ART_PD },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "ART review of a visa cancellation", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
      { label: "Character test (section 501)", href: "/visas/appeals-and-review/character-test-section-501" },
      { label: "Exclusion periods (PIC 4013 and 4014)", href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
    ],
    keywords: [
      "notice of intention to consider cancellation",
      "NOICC response",
      "visa cancellation grounds section 116",
      "section 109 incorrect information cancellation",
      "visa cancelled what to do",
      "respond to visa cancellation notice",
      "section 128 cancellation outside Australia",
      "student visa cancellation breach of condition",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Character test and section 501
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "character-test-section-501",
    category: "appeals-and-review",
    kind: "guide",
    name: "Character test and section 501",
    title: "The character test and section 501 refusals and cancellations",
    seoTitle: "Character test s 501: refusal, cancellation, revocation",
    seoDescription:
      "The s 501 character test in 2026: 12-month substantial criminal record, mandatory cancellation, 28-day revocation, Direction 110, 9-day ART review, A$1,195 fee.",
    intro:
      "Every visa applicant and holder must pass the character test in section 501 of the Migration Act. A person who fails it can be refused a visa or have a visa cancelled, and anyone serving a full-time prison sentence with a sentence of 12 months or more has their visa cancelled automatically. This guide explains the limbs of the test, mandatory cancellation and revocation, Ministerial Direction No. 110, and the expedited review and court options.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Permanent", "Temporary", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Substantial criminal record", value: "12 months or more", note: "A sentence of death, life, or imprisonment of 12 months or more, including combined terms" },
      { label: "Mandatory cancellation", value: "s 501(3A)", note: "Applies to people serving a full-time custodial sentence; 28 days to request revocation" },
      { label: "Ministerial Direction", value: "No. 110", note: "Sets the considerations decision-makers must weigh" },
      { label: "ART fee", value: "A$1,195", note: "Standard fee for character matters; A$100 reduced fee in detention or hardship" },
      { label: "ART time limit", value: "9 days", note: "Expedited review if you were in Australia when the decision was made; decision within 84 days" },
      { label: "Court review", value: "Federal Court", note: "Judicial review of ART and Minister's personal character decisions, 35-day limit" },
    ],
    whoFor: [
      "You have a criminal charge or conviction in Australia or overseas and are applying for a visa.",
      "You have received a notice that the Department intends to refuse or cancel your visa under section 501.",
      "Your visa was cancelled while you were in prison and you have 28 days to request revocation.",
      "A delegate has refused or cancelled your visa on character grounds and you want the expedited ART review.",
      "You were refused or cancelled on character grounds and want to understand the bar on new applications and the permanent exclusion after departure.",
    ],
    eligibility: [
      {
        title: "Substantial criminal record",
        detail:
          "You do not pass the test if you have been sentenced to death or life imprisonment, to a term of imprisonment of 12 months or more, to two or more terms totalling 12 months or more, or acquitted on the ground of unsoundness of mind and detained in a facility. Suspended sentences and time served in periodic detention count towards the 12 months.",
        legal: "Migration Act 1958, s 501(6)(a) and (7)",
      },
      {
        title: "Sexual offences involving a child",
        detail:
          "Conviction, a proven charge, or a finding of guilt for a sexually based offence involving a child in any country fails the test, even if no conviction was recorded.",
        legal: "Migration Act 1958, s 501(6)(e)",
      },
      {
        title: "Association with criminal groups and serious international conduct",
        detail:
          "The test is failed if the Minister reasonably suspects you are or were a member of, or associated with, a group or person involved in criminal conduct, or that you were involved in people smuggling, trafficking, genocide, war crimes, crimes against humanity, torture, slavery or other crimes of serious international concern, whether or not convicted.",
        legal: "Migration Act 1958, s 501(6)(b) and (ba)",
      },
      {
        title: "Past and present conduct",
        detail:
          "Your past and present criminal or general conduct can show that you are not of good character even without a qualifying sentence. Home Affairs lists hate crimes, membership of terrorist or prohibited hate groups and statements promoting racial hatred among the conduct now considered.",
        legal: "Migration Act 1958, s 501(6)(c)",
      },
      {
        title: "Risk of future conduct",
        detail:
          "The test is failed if there is a risk that you would engage in criminal conduct, harass, molest, intimidate or stalk another person, vilify a segment of the community, incite discord, or be a danger to the community.",
        legal: "Migration Act 1958, s 501(6)(d)",
      },
      {
        title: "Offences in immigration detention, Interpol notices and security assessments",
        detail:
          "Convictions for escaping from immigration detention or for offences committed in detention or during an escape, an Interpol notice from which a risk to the community can be inferred, and an adverse ASIO security assessment each fail the test.",
        legal: "Migration Act 1958, s 501(6)(aa), (ab), (g) and (h)",
      },
      {
        title: "Mandatory cancellation and revocation",
        detail:
          "The Minister must cancel the visa of a person serving a full-time sentence in a custodial institution who has a substantial criminal record or a child sexual offence finding. The person is notified and may make representations for revocation within 28 days. If the decision is revoked the visa is reinstated.",
        legal: "Migration Act 1958, ss 501(3A) and 501CA; Migration Regulations 1994, reg 2.52",
      },
      {
        title: "Ministerial Direction No. 110 governs the discretion",
        detail:
          "Delegates and the Tribunal must weigh the protection of the Australian community, whether conduct constituted family violence, the strength, nature and duration of ties to Australia, the best interests of minor children in Australia, the expectations of the Australian community, Australia's international obligations, the impact on victims and on family in Australia, and the impact on Australian business and community interests.",
        legal: "Migration Act 1958, s 499 (directions); Ministerial Direction No. 110",
      },
      {
        title: "Review and the Minister's personal powers",
        detail:
          "A delegate's refusal, cancellation or refusal to revoke can be reviewed by the ART. The Minister may personally refuse or cancel, set aside a delegate's or the Tribunal's non-adverse decision, or set aside a revocation; those personal decisions can only be challenged by judicial review.",
        legal: "Migration Act 1958, ss 500, 501(3), 501A, 501B and 501BA",
      },
      {
        title: "Bar on further applications and exclusion",
        detail:
          "After a refusal or cancellation under section 501 while you are in Australia you cannot apply for any visa other than a protection visa while you remain here. If you then leave, Special Return Criterion 5001 prevents the grant of most visas permanently unless the decision is revoked or the Minister grants a permanent visa.",
        legal: "Migration Act 1958, s 501E; Migration Regulations 1994, Sch 5 criterion 5001",
      },
    ],
    familyNote:
      "A character refusal or cancellation of the primary person leads to refusal or cancellation of family members' dependent visas. Evidence about partners and children in Australia, particularly the best interests of minor children, is a primary consideration under Direction 110 and should be detailed.",
    documents: [
      {
        group: "Character documents",
        items: [
          "Form 80 Personal particulars for character assessment and Form 1563 Statement of character if requested",
          "Australian Federal Police National Police Check using code 33 (Immigration/Citizenship), valid 12 months",
          "Police certificates from every country where you lived for 12 months or more in the last 10 years since turning 16",
          "Form 1399 Declaration of service and a military certificate if you served for more than 12 months",
          "Court records, sentencing remarks, parole and corrections reports and evidence of rehabilitation",
        ],
      },
      {
        group: "Evidence for a notice, revocation request or review",
        items: [
          "A written statement addressing each consideration in Ministerial Direction No. 110",
          "Evidence of ties to Australia: length of residence, family, children, employment, property and community involvement",
          "Reports from psychologists, drug and alcohol services or treating practitioners on risk and rehabilitation",
          "Statutory declarations from family, employers and community members, and evidence of hardship in the country of return",
        ],
      },
    ],
    steps: [
      {
        title: "Declare everything when you apply",
        description:
          "Declare all charges awaiting action and all convictions in any country, answer every question truthfully and provide police and military certificates when asked. Undisclosed matters are discovered through checks and lead to refusal and PIC 4020 problems.",
        output: "A complete character declaration on your application",
      },
      {
        title: "Respond to a notice of intention to refuse or cancel",
        description:
          "If a delegate is considering refusal or cancellation under section 501 you receive a notice with the information relied on and a period to respond. Answer each Direction 110 consideration with evidence; ask for an extension in writing if you need it.",
        output: "A detailed response lodged within the period",
      },
      {
        title: "Request revocation of a mandatory cancellation within 28 days",
        description:
          "If your visa was cancelled under section 501(3A) while you were in prison, lodge representations within 28 days of notification showing that you pass the character test or that there is another reason to revoke, addressing Direction 110.",
        output: "A revocation request lodged in time",
      },
      {
        title: "Apply to the ART within 9 days",
        description:
          "If a delegate refuses or cancels, or refuses to revoke, and you were in Australia when the decision was made, lodge the expedited review within 9 days of receiving the decision and the two sets of documents, and pay the A$1,195 fee (A$100 if you are in detention or eligible for a reduction). The Tribunal cannot extend the 9 days.",
        output: "An expedited character review on foot",
      },
      {
        title: "File documents 2 business days before the hearing",
        description:
          "The Minister is represented and the Tribunal cannot consider documents or oral evidence not given to the Minister's representative at least 2 business days before the hearing. The Tribunal must decide within 84 days or the decision is taken to be affirmed.",
        output: "Evidence served in time and a decision within 84 days",
      },
      {
        title: "Consider the Federal Court and ministerial options",
        description:
          "An ART decision in a character matter, or the Minister's personal decision, can be challenged in the Federal Court of Australia for jurisdictional error within 35 days. For a protection visa character decision, the Minister can also be asked to substitute a more favourable decision under section 501J after the Tribunal decides.",
        output: "A court application or ministerial request within time",
      },
    ],
    costs: [
      { item: "ART application fee (character-related decisions)", amount: "A$1,195", note: "Standard fee; pay when you lodge; the review may be dismissed if unpaid after 6 weeks" },
      { item: "ART reduced fee", amount: "A$100", note: "In prison or detention, legal aid, concession card, under 18, or financial hardship" },
      { item: "Police certificates", amount: "Typical third-party cost", note: "Australian Federal Police check and overseas certificates" },
      { item: "Psychological or medical reports and legal representation", amount: "Typical third-party costs", note: "Often needed to address risk and rehabilitation" },
    ],
    afterGrant: [
      "The character requirement continues after grant: a visa can be cancelled at any time if you no longer meet it, and PIC 4001 is assessed again on every later application.",
      "If your visa was cancelled on character grounds you may be detained and removed if you do not hold a visa, and section 501E prevents any onshore application other than a protection visa.",
      "After departure following a section 501 refusal or cancellation you cannot satisfy Special Return Criterion 5001 unless the decision is revoked or the Minister grants a permanent visa.",
      "Home Affairs gives processing priority to people in immigration detention and to cases with compelling and compassionate circumstances; it recommends offshore applicants not finalise travel until the character assessment is complete.",
    ],
    pathways: [
      {
        title: "ART review of a visa cancellation",
        description: "How the expedited character track differs from ordinary cancellation reviews.",
        href: "/visas/appeals-and-review/art-review-of-visa-cancellation",
      },
      {
        title: "Judicial review of migration decisions",
        description: "Federal Court review of character decisions for jurisdictional error.",
        href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
      },
      {
        title: "Ministerial intervention",
        description: "For protection visa character decisions, a request for the Minister to substitute a more favourable decision under section 501J after the Tribunal.",
        href: "/visas/appeals-and-review/ministerial-intervention",
      },
      {
        title: "Exclusion periods",
        description: "How re-entry bans and Special Return Criteria affect later applications.",
        href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014",
      },
    ],
    risks: [
      "Missing the 9-day ART limit or the 28-day revocation period, neither of which can be extended.",
      "Not declaring overseas charges or spent convictions, which also raises PIC 4020 and section 109 problems.",
      "Lodging evidence late so the Tribunal cannot consider it under the 2-business-day rule in expedited reviews.",
      "Addressing only hardship and ties while ignoring the primary considerations of community protection and the seriousness of the conduct.",
      "Assuming a suspended sentence or periodic detention does not count towards the 12-month threshold.",
      "Leaving Australia after a section 501 refusal or cancellation, which triggers the permanent Special Return Criterion 5001 exclusion.",
    ],
    faqs: [
      {
        question: "What counts as a substantial criminal record?",
        answer:
          "A sentence of death or life imprisonment, a term of imprisonment of 12 months or more, two or more terms that add up to 12 months or more, or an acquittal on the ground of unsoundness of mind followed by detention in a facility. The length of the sentence matters, not the time actually served, and suspended sentences count.",
      },
      {
        question: "What is mandatory cancellation?",
        answer:
          "Under section 501(3A) the Minister must cancel the visa of a person serving a full-time custodial sentence who has a substantial criminal record or a child sexual offence finding. The person has 28 days after notification to request revocation. If the Minister or delegate revokes the cancellation the visa is reinstated.",
      },
      {
        question: "How long do I have to apply to the ART in a character case?",
        answer:
          "Nine days after you receive the decision and the documents, if you were in Australia when the decision was made. The Tribunal cannot extend it and must decide within 84 days. If you were outside Australia the ordinary 28-day period applies and the Tribunal can consider an extension request.",
      },
      {
        question: "How much is the ART fee for a character review?",
        answer:
          "The standard fee of A$1,195 applies to character-related refusals and cancellations, not the A$3,727 migration fee. A reduced fee of A$100 applies if you are in prison or detention, have legal aid, hold a Commonwealth concession card, are under 18 or would suffer financial hardship.",
      },
      {
        question: "Which Ministerial Direction applies?",
        answer:
          "Home Affairs states that officers take Ministerial Direction No. 110 into account. It sets out the primary and other considerations, including protection of the community, family violence, ties to Australia, the best interests of minor children and the expectations of the Australian community.",
      },
      {
        question: "Can I apply for another visa after a character refusal or cancellation?",
        answer:
          "Not while you remain in Australia, apart from a protection visa (subclass 866). If you leave Australia you cannot satisfy Special Return Criterion 5001, which most visas require, unless the decision is revoked or the Minister grants you a permanent visa.",
      },
      {
        question: "Can the Minister overturn a Tribunal decision in my favour?",
        answer:
          "Yes. The Minister can personally set aside a delegate's or Tribunal's decision and refuse or cancel in the national interest, or set aside a revocation. Those personal decisions are not reviewable by the Tribunal and can only be challenged in the Federal Court.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 499, 500, 501, 501(3A), 501A, 501B, 501BA, 501CA, 501E and 476A", url: ACT },
      { label: "Migration Regulations 1994, reg 2.52; PIC 4001 (Sch 4); Special Return Criterion 5001 (Sch 5)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "Ministerial Direction No. 110 (Home Affairs)", url: "https://immi.homeaffairs.gov.au/support-subsite/files/ministerial-direction-110.pdf" },
    ],
    sources: [
      { label: "Home Affairs: Character requirements for visas", url: HA_CHARACTER },
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "Home Affairs: Re-entry ban", url: HA_REENTRY },
      { label: "ART: Immigration and citizenship reviews (character-related decisions)", url: ART_IMMI },
      { label: "ART: Fees", url: ART_FEES },
      { label: "ART: Expedited review of decisions under s 501 or 501CA (fact sheet)", url: ART_EXPEDITED },
      { label: "ART Migration, Protection and Character Practice Direction 2026", url: ART_PD },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Visa cancellation and the Notice of Intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "Judicial review of migration decisions", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
      { label: "PIC 4020: fraud and false information", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
      { label: "Ministerial intervention", href: "/visas/appeals-and-review/ministerial-intervention" },
    ],
    keywords: [
      "character test section 501",
      "s501 visa cancellation",
      "mandatory visa cancellation 501(3A)",
      "revocation request 28 days",
      "Ministerial Direction 110",
      "substantial criminal record 12 months",
      "character visa refusal Australia",
      "ART character review 9 days",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. PIC 4020: fraud and false information
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "pic-4020-fraud-and-false-information",
    category: "appeals-and-review",
    kind: "guide",
    name: "PIC 4020: false information and bogus documents",
    title: "PIC 4020: bogus documents, false information and exclusion periods",
    seoTitle: "PIC 4020: false information, 3 and 10-year exclusions",
    seoDescription:
      "PIC 4020 in 2026: bogus documents and false or misleading information, the 3-year and 10-year exclusion periods, identity, the waiver and the visas it covers.",
    intro:
      "Public Interest Criterion 4020 lets the Department refuse a visa where a bogus document or false or misleading information was given with the application, or with a visa held in the previous 12 months, even if the applicant did not know. A refusal under PIC 4020 blocks most visas for 3 years, and an identity-related refusal blocks them for 10 years. A waiver is available only for compelling or compassionate reasons.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Permanent", "Temporary", "Apply in or outside Australia"],
    keyFacts: [
      { label: "What it catches", value: "Bogus documents and false information", note: "In the current application, or a visa held in the 12 months before applying" },
      { label: "Exclusion after refusal", value: "3 years", note: "For the applicant and family unit members, from the refusal" },
      { label: "Identity refusals", value: "10 years", note: "Where the Department is not satisfied of identity; no waiver" },
      { label: "Waiver", value: "Compelling or compassionate", note: "Interests of Australia, or of an Australian citizen, permanent resident or eligible New Zealand citizen" },
      { label: "Knowledge not required", value: "Strict", note: "It applies even if an agent or third party provided the document without your knowledge" },
      { label: "Criminal offences", value: "Up to 10 years' imprisonment", note: "Presenting forged documents under s 234; false information under Criminal Code s 137.1" },
    ],
    whoFor: [
      "Your visa was refused under PIC 4020 and you want to know how long you are excluded and whether a waiver applies.",
      "You received a natural justice letter saying a document in your application appears to be bogus or information false or misleading.",
      "An agent, employer or education provider submitted documents on your behalf that you did not check.",
      "You gave inconsistent employment, relationship or study details across applications and the Department has queried them.",
      "You are preparing a skilled, employer-sponsored, family, student or visitor application and want to avoid integrity problems.",
    ],
    eligibility: [
      {
        title: "No bogus document or false or misleading information",
        detail:
          "There must be no evidence before the Minister that you gave, or caused to be given, a bogus document or information that is false or misleading in a material particular in relation to the application, or in relation to a visa you held in the 12 months before applying. A bogus document is one that the Minister reasonably suspects was not issued in respect of the person, is counterfeit or altered without authority, or was obtained because of a false or misleading statement.",
        legal: "PIC 4020(1) (Sch 4); Migration Act 1958, s 5(1) (bogus document)",
      },
      {
        title: "No PIC 4020 refusal in the last 3 years",
        detail:
          "Neither you nor any member of your family unit can have been refused a visa because of PIC 4020(1) in the 3 years before the application. A refusal of one family member under PIC 4020 therefore affects the others.",
        legal: "PIC 4020(2) (Sch 4)",
      },
      {
        title: "Identity must be established",
        detail:
          "The Minister must be satisfied of your identity. A refusal because identity is not established leads to a 10-year exclusion for the applicant and family unit members, and that limb cannot be waived.",
        legal: "PIC 4020(2A) and (2B) (Sch 4)",
      },
      {
        title: "Waiver for the document and information limbs",
        detail:
          "The 3-year exclusion and the false-information limb can be waived if the Minister is satisfied that there are compelling circumstances affecting the interests of Australia, or compassionate or compelling circumstances affecting the interests of an Australian citizen, Australian permanent resident or eligible New Zealand citizen, that justify the grant.",
        legal: "PIC 4020(4) (Sch 4)",
      },
      {
        title: "Natural justice before refusal",
        detail:
          "Because PIC 4020 relies on adverse information about you, the Department must give you particulars of the information and an opportunity to comment before refusing an onshore reviewable application. Your response can explain how the document was obtained, show it is genuine, or explain why the information was not materially false.",
        legal: "Migration Act 1958, s 57",
      },
      {
        title: "Which visas carry PIC 4020",
        detail:
          "PIC 4020 is a time-of-decision criterion for most skilled, employer-sponsored, family, student, visitor, working holiday and business visas. It is not a criterion for protection visas or bridging visas. Check the Schedule 2 criteria for your subclass.",
        legal: "Migration Regulations 1994, Sch 2 (time-of-decision criteria for each subclass)",
      },
      {
        title: "Genuine, unaltered documents",
        detail:
          "Home Affairs states that providing altered, edited or digitally manipulated documents, including photographs, videos or audio files, is unlawful and that documents must not be modified or created with digital editing tools or artificial intelligence.",
        legal: "Migration Act 1958, s 234; Criminal Code Act 1995, s 137.1",
      },
    ],
    familyNote:
      "A PIC 4020 refusal of one applicant counts against every member of the family unit for the 3-year or 10-year period, whether or not they were included in the refused application.",
    documents: [
      {
        group: "Responding to a PIC 4020 concern",
        items: [
          "Original documents and verification from the issuing body (employer, university, registry or bank) confirming authenticity",
          "A statutory declaration explaining how the document was obtained and who prepared the application",
          "Evidence that the information was correct, or that any error was not material to the visa criteria",
          "Evidence for a waiver: hardship to an Australian citizen or permanent resident partner or child, or circumstances affecting Australian interests",
        ],
      },
    ],
    steps: [
      {
        title: "Read the natural justice letter closely",
        description:
          "Identify exactly which document or statement is said to be bogus or false, what checks were done and what the Department concluded. Note the response period and ask for an extension in writing if you need one.",
        output: "A clear list of the allegations and the deadline",
      },
      {
        title: "Verify the document independently",
        description:
          "Contact the issuing organisation for written confirmation, obtain certified originals and gather evidence of the circumstances in which the document was produced.",
        output: "Independent evidence of authenticity, or an explanation",
      },
      {
        title: "Address materiality and intent",
        description:
          "Explain whether the information was actually false, whether it was material to a visa criterion, and whether it was provided without your knowledge. The criterion does not require intent, but these matters go to the Minister's suspicion and to any waiver.",
        output: "A written response on each element of PIC 4020",
      },
      {
        title: "Ask for the waiver if it applies",
        description:
          "Set out compelling circumstances affecting the interests of Australia, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen, with evidence. The identity limb cannot be waived.",
        output: "A waiver request with supporting evidence",
      },
      {
        title: "Seek review if refused",
        description:
          "A PIC 4020 refusal of an onshore or sponsored application is usually reviewable by the ART within 28 days. The Tribunal considers afresh whether the document is bogus and whether to waive.",
        output: "An ART application lodged in time",
      },
      {
        title: "Plan around the exclusion period",
        description:
          "If the refusal stands, note the date the 3-year or 10-year period ends and whether a visa without PIC 4020 (such as a protection visa) or a waiver is realistic.",
        output: "A dated plan for future applications",
      },
    ],
    costs: [
      { item: "Responding to a natural justice letter", amount: "A$0", note: "No departmental charge" },
      { item: "ART review of a PIC 4020 refusal", amount: "A$3,727", note: "1 July 2026 fee; 50% reduction for financial hardship" },
      { item: "Document verification, certified copies and translations", amount: "Typical third-party costs", note: "Issuing bodies and accredited translators" },
    ],
    afterGrant: [
      "Information given with any visa is assessed again on later applications, so a document that passed once can still ground PIC 4020 or section 109 cancellation later.",
      "A visa granted on false information can be cancelled under section 109, and a refusal under PIC 4020 is a risk factor for 3 years for you and your family unit.",
      "Keep copies of everything lodged on your behalf and check documents prepared by agents, employers or education providers before they are submitted.",
    ],
    pathways: [
      {
        title: "Natural justice and adverse information",
        description: "How section 57 letters work and how to respond.",
        href: "/visas/appeals-and-review/natural-justice-and-adverse-information",
      },
      {
        title: "ART review of a visa refusal",
        description: "Merits review of a PIC 4020 refusal within 28 days.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
      {
        title: "Visa cancellation for incorrect information",
        description: "Section 109 cancellation when false information is found after grant.",
        href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
      },
    ],
    risks: [
      "Employment references that overstate duties or dates, which are checked with employers and tax records.",
      "Education or English test certificates obtained through third parties or altered digitally.",
      "Different relationship, employment or travel histories across applications and passenger cards.",
      "Relying on an agent who lodged documents you never saw: the criterion applies even without your knowledge.",
      "Assuming a refusal of one family member does not affect the others during the 3-year period.",
      "Treating the waiver as routine: it requires compelling or compassionate circumstances tied to Australian interests or Australian family members.",
    ],
    faqs: [
      {
        question: "What is PIC 4020?",
        answer:
          "Public Interest Criterion 4020 in Schedule 4 of the Migration Regulations. It requires that there is no evidence that the applicant gave a bogus document or false or misleading information in a material particular with the application, or with a visa held in the previous 12 months, and that the applicant's identity is established.",
      },
      {
        question: "How long is the exclusion after a PIC 4020 refusal?",
        answer:
          "Three years from the refusal for the applicant and members of the family unit where the refusal was for a bogus document or false information. Ten years where the refusal was because the Department was not satisfied of the applicant's identity.",
      },
      {
        question: "Can PIC 4020 be waived?",
        answer:
          "The document and information limbs can be waived where there are compelling circumstances affecting the interests of Australia, or compassionate or compelling circumstances affecting the interests of an Australian citizen, permanent resident or eligible New Zealand citizen. The identity limb cannot be waived.",
      },
      {
        question: "Does it matter that I did not know the document was false?",
        answer:
          "Not for whether the criterion is met: it applies to documents given or caused to be given on your behalf. Lack of knowledge is relevant to the Minister's suspicion that the document is bogus and may support a waiver, but it is not a defence on its own.",
      },
      {
        question: "Which visas does PIC 4020 apply to?",
        answer:
          "Most skilled, employer-sponsored, family, student, visitor, working holiday and business visas include it as a time-of-decision criterion. Protection visas and bridging visas do not. The Schedule 2 criteria for each subclass list it.",
      },
      {
        question: "Is providing a false document a criminal offence?",
        answer:
          "Yes. Home Affairs states that presenting or arranging the presentation of false or forged documents under section 234 of the Migration Act carries up to 10 years' imprisonment or 1,000 penalty units or both, and that giving false or misleading information to a Commonwealth entity under section 137.1 of the Criminal Code carries up to 12 months' imprisonment.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, PIC 4020 (Sch 4)", url: REGS },
      { label: "Migration Act 1958, ss 5(1), 57, 109 and 234", url: ACT },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
    ],
    sources: [
      { label: "Home Affairs: Providing accurate information", url: HA_ACCURATE },
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
      { label: "ART: Fees", url: ART_FEES },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Natural justice and adverse information", href: "/visas/appeals-and-review/natural-justice-and-adverse-information" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { label: "Exclusion periods (PIC 4013 and 4014)", href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
    ],
    keywords: [
      "PIC 4020",
      "public interest criterion 4020",
      "bogus document visa refusal",
      "false or misleading information visa",
      "PIC 4020 waiver",
      "3 year exclusion PIC 4020",
      "10 year ban identity visa",
      "visa fraud refusal Australia",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Section 48 bar
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "section-48-bar",
    category: "appeals-and-review",
    kind: "guide",
    name: "Section 48 bar",
    title: "The section 48 bar after an onshore refusal or cancellation",
    seoTitle: "Section 48 bar: visas you can still apply for in Australia",
    seoDescription:
      "The section 48 bar after an onshore visa refusal or cancellation: the reg 2.12 visas still open in 2026 (partner, 190, 491, 494, protection) and how it ends.",
    intro:
      "Section 48 of the Migration Act stops a person who has had a visa refused or cancelled since last entering Australia, and who does not hold a substantive visa, from applying for most visas while they remain in Australia. Only the visa classes prescribed in regulation 2.12 can still be applied for, including partner, protection, child, medical treatment, bridging and, since 13 November 2021, the subclass 190, 491 and 494 skilled visas. The bar ends when the person leaves Australia.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Pathway to PR"],
    keyFacts: [
      { label: "When it applies", value: "Refusal or cancellation onshore", note: "After last entering Australia, while you hold no substantive visa" },
      { label: "Visas still open", value: "Reg 2.12 list", note: "Partner (820/801), protection, bridging, child (802), medical treatment (602), resolution of status, 190, 491, 494 and others" },
      { label: "Skilled exemption", value: "Since 13 November 2021", note: "Subclass 190, 491 and 494 can be applied for despite the bar" },
      { label: "How it ends", value: "Leave Australia", note: "The bar only covers decisions made after you last entered; it does not follow you overseas" },
      { label: "Protection visas", value: "Section 48A", note: "A refused protection visa applicant cannot reapply onshore unless the Minister lifts the bar under section 48B" },
      { label: "Fee", value: "No separate fee", note: "Normal visa application charges apply to any prescribed visa you lodge" },
    ],
    whoFor: [
      "Your visa was refused while you were in Australia and the Tribunal affirmed the refusal, and you want to know what you can lodge next.",
      "Your visa was cancelled under section 109, 116, 133A, 133C or 134 and you are on a bridging visa or unlawful.",
      "You are in a relationship with an Australian citizen or permanent resident and want to apply for a partner visa despite the bar.",
      "You have a state nomination or regional employer and want to use the subclass 190, 491 or 494 exemption.",
      "You were refused a protection visa and want to understand the section 48A bar and the Minister's section 48B power.",
    ],
    eligibility: [
      {
        title: "You do not hold a substantive visa",
        detail:
          "The bar applies only while you are in the migration zone without a substantive visa, that is while you are unlawful or hold only a bridging visa. If you are later granted a substantive visa the bar no longer applies to a new application.",
        legal: "Migration Act 1958, s 48(1)(a)",
      },
      {
        title: "A visa was refused after you last entered Australia",
        detail:
          "Any refusal of a visa you applied for after your last entry triggers the bar, whether or not it has been finally determined, other than a refusal of a bridging visa or a refusal on character grounds under sections 501, 501A or 501B, which are dealt with by section 501E instead.",
        legal: "Migration Act 1958, s 48(1)(b)(i)",
      },
      {
        title: "Or a visa was cancelled after you last entered",
        detail:
          "Cancellation under section 109 (incorrect information), 116 (general grounds), 133A or 133C (Minister's personal powers) or 134 (business visas) triggers the bar. Character cancellations under section 501 are covered by section 501E.",
        legal: "Migration Act 1958, s 48(1)(b)(ii)",
      },
      {
        title: "Family members included in a refused application",
        detail:
          "The bar also applies to a person who did not hold a substantive visa and was refused a visa applied for on their behalf as a member of the family unit after last entering Australia.",
        legal: "Migration Act 1958, s 48(1A)",
      },
      {
        title: "Visas you can still apply for",
        detail:
          "Regulation 2.12 prescribes the classes: Partner (Temporary) and Partner (Residence) (subclasses 820 and 801), Protection, Medical Treatment (subclass 602), Child (Residence) (subclass 802), Resolution of Status, Territorial Asylum, Border, bridging visas, Skilled Nominated (subclass 190), Skilled Work Regional (Provisional) (subclass 491) and Skilled Employer Sponsored Regional (Provisional) (subclass 494). The three skilled classes were added from 13 November 2021.",
        legal: "Migration Regulations 1994, reg 2.12",
      },
      {
        title: "Schedule 3 still applies to some prescribed visas",
        detail:
          "A partner visa applied for without a substantive visa must also meet Schedule 3 criteria 3001, 3003 and 3004 unless the Department is satisfied there are compelling reasons not to apply them. The skilled subclasses 190, 491 and 494 do not have Schedule 3 criteria but the bar exemption does not remove any other requirement, such as nomination and the points test.",
        legal: "Migration Regulations 1994, Sch 2 cl 820.211 and Sch 3",
      },
      {
        title: "Protection visas: sections 48A and 48B",
        detail:
          "A person whose protection visa application was refused, or whose protection visa was cancelled, while in the migration zone cannot make a further protection visa application in Australia. The Minister may personally determine that section 48A does not apply if it is in the public interest; there is no right to request this and no review.",
        legal: "Migration Act 1958, ss 48A and 48B",
      },
      {
        title: "Leaving Australia removes the bar",
        detail:
          "Section 48 only looks at refusals and cancellations after you last entered Australia. If you depart and are granted a visa to return, the bar does not apply to applications made after re-entry. A cancellation may, however, trigger a 3-year exclusion under PIC 4013, and an unpaid debt can affect the return visa. Condition 8503 applies only while you remain in Australia, so it does not stop an application made from outside Australia.",
        legal: "Migration Act 1958, s 48; Migration Regulations 1994, PIC 4013 (Sch 4)",
      },
    ],
    familyNote:
      "Family members barred under section 48(1A) have the same prescribed options. A partner visa application by the barred person can include dependent children; a subclass 190, 491 or 494 application can include family members who are also barred.",
    documents: [
      {
        group: "Checking your position",
        items: [
          "Your refusal or cancellation notice and the ART decision, showing the date of the decision and the visa involved",
          "VEVO record showing your current bridging visa or that you hold no visa",
          "Evidence for any prescribed visa you plan to lodge, for example relationship evidence for a partner visa or a nomination for subclass 190, 491 or 494",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the bar applies",
        description:
          "Check whether you hold a substantive visa, whether the refusal or cancellation happened after your last entry, and whether it was a character decision (section 501E) rather than section 48.",
        output: "A clear answer on whether section 48 or 501E applies",
      },
      {
        title: "Check the reg 2.12 list",
        description:
          "Match your circumstances to a prescribed class: partner, protection, child, medical treatment, resolution of status, bridging, or the subclass 190, 491 and 494 skilled visas.",
        output: "A list of visas you can validly lodge in Australia",
      },
      {
        title: "Check Schedule 3 and the other criteria",
        description:
          "For a partner visa, assess criteria 3001, 3003 and 3004 or the compelling-reasons waiver. For a skilled visa, confirm nomination, points, skills assessment and English. The bar exemption is only about validity.",
        output: "An assessment of the full criteria, not just validity",
      },
      {
        title: "Stay lawful",
        description:
          "Lodging a prescribed visa usually gives a Bridging visa A if you hold a bridging visa A or B, or a Bridging visa C or E in other cases. Apply before your current bridging visa ceases.",
        output: "A bridging visa in effect while the new application is decided",
      },
      {
        title: "Or leave and reapply from outside Australia",
        description:
          "If no prescribed visa suits you, departing removes the section 48 bar. Check PIC 4013 and 4014 exclusion periods, any unpaid debt and the criteria of the visa you would apply for offshore.",
        output: "An offshore application plan with exclusion periods checked",
      },
    ],
    costs: [
      { item: "Section 48 assessment", amount: "A$0", note: "No departmental charge; the application charge of the prescribed visa applies" },
      { item: "Partner visa (subclasses 820 and 801)", amount: "A$11,710", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Skilled Nominated (subclass 190)", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Skilled Work Regional (subclass 491) and Skilled Employer Sponsored Regional (subclass 494)", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Medical Treatment visa (subclass 602) in Australia", amount: "A$480", note: "Primary applicant, 1 July 2026 charge" },
    ],
    afterGrant: [
      "The bar stops applying once you are granted a substantive visa or leave Australia; a new refusal after re-entry starts it again.",
      "A valid prescribed application does not guarantee grant: every criterion, including Schedule 3 where it applies and PIC 4013 where a cancellation occurred, must still be met.",
      "If you hold a bridging visa with a no-work condition, check whether the new bridging visa allows work and apply for work rights if available.",
    ],
    pathways: [
      {
        title: "Partner visa (subclasses 820 and 801)",
        description: "The most common prescribed visa for people in a relationship with an Australian citizen or permanent resident.",
        href: "/visas/family/partner-visa-onshore-820-801",
      },
      {
        title: "Skilled Nominated visa (subclass 190)",
        description: "Permanent skilled visa exempt from the bar since 13 November 2021.",
        href: "/visas/skilled/skilled-nominated-visa-190",
      },
      {
        title: "Skilled Work Regional visa (subclass 491)",
        description: "Provisional regional visa exempt from the bar.",
        href: "/visas/skilled/skilled-work-regional-visa-491",
      },
      {
        title: "Schedule 3 criteria",
        description: "The extra criteria for onshore applicants without a substantive visa.",
        href: "/visas/appeals-and-review/schedule-3-criteria",
      },
      {
        title: "Ministerial intervention",
        description: "A request to the Minister after a Tribunal decision when no prescribed visa is available.",
        href: "/visas/appeals-and-review/ministerial-intervention",
      },
    ],
    risks: [
      "Lodging a non-prescribed visa, which is invalid, gives no bridging visa and wastes the application charge.",
      "Assuming section 48 applies to a character refusal: section 501E is stricter and allows only a protection visa.",
      "Forgetting that Schedule 3 still applies to partner applications lodged without a substantive visa.",
      "Letting a bridging visa cease before the prescribed application is lodged, so a Bridging visa E with no work rights is the only option.",
      "Leaving Australia to lift the bar without checking whether a PIC 4013 or 4014 exclusion period or an unpaid debt affects the return visa.",
      "Relying on a section 48B request after a protection refusal: the Minister need not consider it and there is no review.",
    ],
    faqs: [
      {
        question: "What is the section 48 bar?",
        answer:
          "A rule in the Migration Act that a person in Australia without a substantive visa, who has had a visa refused or cancelled since they last entered, can only apply for visas of the classes prescribed in regulation 2.12 while they remain in Australia.",
      },
      {
        question: "Which visas can I still apply for?",
        answer:
          "Partner (820/801), Protection, Child (802), Medical Treatment (602), Resolution of Status, bridging visas, Territorial Asylum, Border, and the Skilled Nominated (190), Skilled Work Regional (491) and Skilled Employer Sponsored Regional (494) visas. The three skilled visas were added from 13 November 2021.",
      },
      {
        question: "Does the bar apply if my refusal is still under review at the ART?",
        answer:
          "Yes. Section 48 applies to a refusal whether or not the application has been finally determined. You can still lodge a prescribed visa while the review is on foot, but a second application does not stop the Tribunal process or extend your bridging visa beyond its own rules.",
      },
      {
        question: "How do I get rid of the section 48 bar?",
        answer:
          "Be granted a substantive visa in Australia, or leave Australia. The bar only counts decisions made after your last entry, so it does not apply to applications made after you re-enter on a new visa. Check for exclusion periods before relying on this.",
      },
      {
        question: "Can I apply for a partner visa if I am barred?",
        answer:
          "Yes, the partner visa is a prescribed class. Because you do not hold a substantive visa you must also satisfy Schedule 3 criteria 3001, 3003 and 3004 unless the Department is satisfied there are compelling reasons not to apply them.",
      },
      {
        question: "What is section 48A?",
        answer:
          "A separate bar for protection visas: if your protection visa was refused or cancelled while you were in Australia, you cannot apply again onshore. Only the Minister, acting personally under section 48B, can allow a further application, and that power is non-compellable.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 48, 48A, 48B and 501E", url: ACT },
      { label: "Migration Regulations 1994, reg 2.12; Sch 2 cl 820.211; Sch 3; PIC 4013 (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Cancelling a visa (application bar after cancellation)", url: HA_CANCEL },
      { label: "Home Affairs: Character requirements for visas (restrictions on applications)", url: HA_CHARACTER },
      { label: "Home Affairs: Stay longer", url: HA_STAY_LONGER },
      { label: "Home Affairs: Bridging visa A (subclass 010)", url: HA_BVA },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Schedule 3 criteria", href: "/visas/appeals-and-review/schedule-3-criteria" },
      { label: "Partner visa (subclasses 820 and 801)", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Skilled Employer Sponsored Regional visa (subclass 494)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
    ],
    keywords: [
      "section 48 bar",
      "s48 bar visa Australia",
      "visa refused what can I apply for",
      "section 48 partner visa",
      "190 491 494 section 48 exemption",
      "regulation 2.12 prescribed visas",
      "section 48A protection visa",
      "section 48B request",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 7. Schedule 3 criteria
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "schedule-3-criteria",
    category: "appeals-and-review",
    kind: "guide",
    name: "Schedule 3 criteria",
    title: "Schedule 3 criteria for onshore applicants without a substantive visa",
    seoTitle: "Schedule 3 criteria 3001-3005: 28-day rule and waiver",
    seoDescription:
      "Schedule 3 criteria 3001 to 3005 in 2026: the 28-day rule, factors beyond your control, compelling reasons and the partner visa waiver explained.",
    intro:
      "Schedule 3 to the Migration Regulations adds extra criteria for people who apply for certain visas in Australia while they are unlawful or hold only a bridging visa. Criterion 3001 requires the application within 28 days of the last substantive visa ceasing, and criteria 3003 and 3004 require that the lack of a substantive visa was due to factors beyond the applicant's control, that there are compelling reasons for grant and that the applicant has substantially complied with visa conditions. Partner visa applicants can ask for the criteria to be waived for compelling reasons.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Pathway to PR"],
    keyFacts: [
      { label: "Who it affects", value: "Unlawful or bridging visa holders", note: "Applicants in Australia who do not hold a substantive visa when they apply" },
      { label: "Criterion 3001", value: "28 days", note: "Apply within 28 days after the day your last substantive visa ceased" },
      { label: "Criterion 3002", value: "12 months", note: "A 12-month window used by some visa subclasses instead of 28 days" },
      { label: "Criteria 3003 and 3004", value: "Beyond your control and compelling", note: "Plus substantial compliance with conditions and intention to comply" },
      { label: "Criterion 3005", value: "Once only", note: "You cannot rely on Schedule 3 more than once since last entering Australia" },
      { label: "Partner waiver", value: "Compelling reasons", note: "The Department may not apply 3001, 3003 and 3004 to a partner application for compelling reasons" },
    ],
    whoFor: [
      "Your visa expired or was cancelled and you want to apply for a partner visa in Australia.",
      "You hold a Bridging visa C or E and are checking whether an onshore application can succeed.",
      "You overstayed by more than 28 days and need to know whether compelling reasons can save a partner application.",
      "You have already used Schedule 3 once and are checking criterion 3005.",
      "You are deciding between an onshore partner application with a waiver request and an offshore subclass 309 application.",
    ],
    eligibility: [
      {
        title: "When Schedule 3 applies",
        detail:
          "The criteria apply only where the Schedule 2 clause for the visa says so, and only to applicants who do not hold a substantive visa at the time of application. For the onshore partner visa (subclass 820), an applicant without a substantive visa must satisfy criteria 3001, 3003 and 3004 unless the Minister is satisfied there are compelling reasons for not applying them.",
        legal: "Migration Regulations 1994, Sch 2 cl 820.211(2)(d)",
      },
      {
        title: "Criterion 3001: 28 days",
        detail:
          "The application must be validly made within 28 days after the relevant day. The relevant day is generally the last day your last substantive visa was in effect, the day it was cancelled, or the day you entered Australia if you entered without a visa.",
        legal: "Migration Regulations 1994, Sch 3 criterion 3001",
      },
      {
        title: "Criterion 3002: 12 months",
        detail:
          "Some visa subclasses use criterion 3002 instead, which requires the application within 12 months after the relevant day. Check the Schedule 2 clause for the subclass you are applying for.",
        legal: "Migration Regulations 1994, Sch 3 criterion 3002",
      },
      {
        title: "Criterion 3003: people who became unlawful before 1 September 1994",
        detail:
          "For a person who was an illegal entrant or whose entry permit ceased before 1 September 1994, the Minister must be satisfied that the lack of status was due to factors beyond the person's control, that there are compelling reasons for granting the visa, that the person has complied substantially with conditions, that they would have been entitled to the visa if they had applied at the relevant time, and that they intend to comply with conditions.",
        legal: "Migration Regulations 1994, Sch 3 criterion 3003",
      },
      {
        title: "Criterion 3004: people who became unlawful on or after 1 September 1994",
        detail:
          "The Minister must be satisfied that you do not hold a substantive visa because of factors beyond your control, that there are compelling reasons for granting the visa, that you complied substantially with the conditions of your last substantive visa and any later bridging visa, that you would have been entitled to the visa if you had applied on the day your last substantive visa ceased, and that you intend to comply with the conditions of the new visa.",
        legal: "Migration Regulations 1994, Sch 3 criterion 3004",
      },
      {
        title: "Criterion 3005: Schedule 3 can be used once",
        detail:
          "You must not have been granted a visa on the basis of satisfying Schedule 3 criteria since you last entered Australia. A person who has already relied on Schedule 3 cannot do so again without leaving and re-entering.",
        legal: "Migration Regulations 1994, Sch 3 criterion 3005",
      },
      {
        title: "The partner visa waiver",
        detail:
          "For subclass 820 the Department can decide not to apply criteria 3001, 3003 and 3004 where there are compelling reasons. The reasons are assessed on the evidence as a whole and commonly involve Australian citizen children, a long genuine relationship, serious hardship if the applicant had to apply from overseas, or circumstances that explain why the applicant became unlawful.",
        legal: "Migration Regulations 1994, Sch 2 cl 820.211(2)(d)(ii)",
      },
      {
        title: "Section 48 still applies",
        detail:
          "If a visa was refused or cancelled since you last entered Australia you can only apply for the prescribed visas under section 48, and Schedule 3 applies on top of that where the visa requires it.",
        legal: "Migration Act 1958, s 48; Migration Regulations 1994, reg 2.12",
      },
    ],
    familyNote:
      "Dependent children included in a partner application are assessed as members of the family unit. Schedule 3 is a primary-applicant criterion for subclass 820; the sponsor's circumstances, including Australian citizen children, are central to any waiver request.",
    documents: [
      {
        group: "Establishing the timeline",
        items: [
          "VEVO records or grant letters showing the date your last substantive visa ceased and any bridging visas held since",
          "Evidence of any refusal or cancellation and its date",
        ],
      },
      {
        group: "Factors beyond your control and compelling reasons",
        items: [
          "Medical reports, death certificates or evidence of events that stopped you leaving or applying in time",
          "Evidence that an agent, employer or education provider failed to act or misled you",
          "Birth certificates of Australian citizen children, evidence of your role in their care and the effect of separation",
          "Evidence of the length and genuineness of the relationship and hardship if you had to apply from overseas",
          "Evidence of compliance with the conditions of your last substantive visa and any bridging visa",
        ],
      },
    ],
    steps: [
      {
        title: "Fix the relevant day",
        description:
          "Identify the last day your last substantive visa was in effect, or the date of cancellation. Count 28 days from that day for criterion 3001.",
        output: "The relevant day and the 28-day deadline",
      },
      {
        title: "Check which criteria the visa requires",
        description:
          "Read the Schedule 2 clause: subclass 820 requires 3001, 3003 and 3004 for applicants without a substantive visa and allows a compelling-reasons waiver; other subclasses may use 3002 or 3005.",
        output: "A list of the Schedule 3 criteria that apply to you",
      },
      {
        title: "Lodge within 28 days if you can",
        description:
          "An application lodged within 28 days meets 3001 and avoids the hardest part of the waiver argument. You still need 3003 or 3004 unless they are waived.",
        output: "A valid application and a bridging visa",
      },
      {
        title: "Prepare the beyond-control and compelling-reasons evidence",
        description:
          "Explain why you became unlawful or lost your substantive visa, with documents, and set out the compelling reasons for grant: children, relationship length, hardship and ties. Address substantial compliance with conditions.",
        output: "A submission addressing each limb of 3003 or 3004",
      },
      {
        title: "Ask for the waiver in the application",
        description:
          "For a partner application lodged outside 28 days, include a written request that the Department not apply criteria 3001, 3003 and 3004 for compelling reasons, with the evidence attached. Respond to any section 57 letter within the period given.",
        output: "A waiver request on file with the application",
      },
      {
        title: "Seek review if refused",
        description:
          "A refusal on Schedule 3 grounds is reviewable by the ART within 28 days. The Tribunal considers the waiver afresh, including circumstances that arose after the Department's decision.",
        output: "An ART application lodged in time",
      },
    ],
    costs: [
      { item: "Schedule 3 assessment", amount: "A$0", note: "No separate charge; the visa application charge applies" },
      { item: "Partner visa (subclasses 820 and 801)", amount: "A$11,710", note: "Primary applicant, 1 July 2026 charge; additional applicants pay their own charge" },
      { item: "ART review of a refusal", amount: "A$3,727", note: "1 July 2026 fee; 50% reduction for financial hardship" },
      { item: "Medical reports, statutory declarations and translations", amount: "Typical third-party costs", note: "Varies with the evidence needed" },
    ],
    afterGrant: [
      "A visa granted after Schedule 3 was satisfied or waived counts for criterion 3005, so a later onshore application without a substantive visa cannot rely on Schedule 3 again until you leave and re-enter.",
      "Keep complying with the conditions of your bridging visa while the application is processed; substantial compliance is itself a Schedule 3 element.",
      "If the waiver is refused and the Tribunal affirms, an offshore partner application (subclass 309) remains possible after departure, subject to any exclusion period.",
    ],
    pathways: [
      {
        title: "Partner visa (subclasses 820 and 801)",
        description: "The visa most often affected by Schedule 3 and the compelling-reasons waiver.",
        href: "/visas/family/partner-visa-onshore-820-801",
      },
      {
        title: "Partner visa (subclasses 309 and 100)",
        description: "The offshore alternative when Schedule 3 cannot be met or waived.",
        href: "/visas/family/partner-visa-offshore-309-100",
      },
      {
        title: "Section 48 bar",
        description: "The separate bar on onshore applications after a refusal or cancellation.",
        href: "/visas/appeals-and-review/section-48-bar",
      },
      {
        title: "ART review of a visa refusal",
        description: "Merits review of a Schedule 3 refusal, including the waiver.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
    ],
    risks: [
      "Lodging after 28 days with a bare waiver request and no evidence of compelling reasons.",
      "Treating a choice to overstay, or a lapse by the applicant, as a factor beyond control.",
      "Relying on Schedule 3 a second time since last entering Australia, contrary to criterion 3005.",
      "Not addressing substantial compliance with conditions, for example work on a bridging visa without permission.",
      "Assuming the waiver is routine because there is a genuine relationship; the Department needs reasons that are compelling, not just genuine.",
      "Ignoring the section 48 bar, which can make the application invalid regardless of Schedule 3.",
    ],
    faqs: [
      {
        question: "What is Schedule 3?",
        answer:
          "A schedule to the Migration Regulations containing criteria 3001 to 3005 that apply to some visas when the applicant is in Australia without a substantive visa. It requires timely lodgement, factors beyond the applicant's control, compelling reasons and substantial compliance with conditions, and it can generally be used only once.",
      },
      {
        question: "What is the 28-day rule?",
        answer:
          "Criterion 3001 requires the application to be made within 28 days after the relevant day, usually the last day your last substantive visa was in effect or the day it was cancelled. Lodging within 28 days satisfies 3001 but criteria 3003 or 3004 still apply.",
      },
      {
        question: "Can Schedule 3 be waived for a partner visa?",
        answer:
          "Yes. For subclass 820 the Department may decide not to apply criteria 3001, 3003 and 3004 where it is satisfied there are compelling reasons. The reasons are judged on all the evidence; Australian citizen children, a long relationship, serious hardship and the circumstances that led to the loss of status are typical factors.",
      },
      {
        question: "What does criterion 3004 require?",
        answer:
          "That you do not hold a substantive visa because of factors beyond your control, that there are compelling reasons for granting the visa, that you complied substantially with the conditions of your last substantive visa and any bridging visa, that you would have been entitled to the visa if you had applied when your last substantive visa ceased, and that you intend to comply with conditions.",
      },
      {
        question: "What is criterion 3002?",
        answer:
          "A 12-month version of the timing rule used by some visa subclasses: the application must be made within 12 months after the relevant day. The Schedule 2 clause for each visa states whether 3001 or 3002 applies.",
      },
      {
        question: "Can the ART consider the waiver again?",
        answer:
          "Yes. The Tribunal decides afresh whether there are compelling reasons for not applying the criteria and can take into account circumstances that arose after the Department's decision, such as the birth of a child.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 3 criteria 3001-3005; Sch 2 cl 820.211; reg 2.12", url: REGS },
      { label: "Migration Act 1958, ss 48 and 57", url: ACT },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
    ],
    sources: [
      { label: "Home Affairs: Stay longer", url: HA_STAY_LONGER },
      { label: "Home Affairs: If you don't have a valid visa", url: HA_NO_VISA },
      { label: "Home Affairs: Bridging visa E (subclass 050)", url: HA_BVE },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
      { label: "Partner visa (subclasses 820 and 801)", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Partner visa (subclasses 309 and 100)", href: "/visas/family/partner-visa-offshore-309-100" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
    ],
    keywords: [
      "schedule 3 criteria",
      "schedule 3 partner visa",
      "criterion 3001 28 days",
      "schedule 3 waiver compelling reasons",
      "criterion 3004 factors beyond control",
      "partner visa unlawful in Australia",
      "schedule 3 3005",
      "apply for partner visa on bridging visa E",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 8. Condition 8503 and the No Further Stay waiver
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "condition-8503-no-further-stay-waiver",
    category: "appeals-and-review",
    kind: "guide",
    name: "Condition 8503 No Further Stay waiver",
    title: "Condition 8503 (No Further Stay) and how to request a waiver",
    seoTitle: "Condition 8503 No Further Stay: waiver request explained",
    seoDescription:
      "Conditions 8503, 8534 and 8535 in 2026: what you cannot apply for in Australia, when Home Affairs waives them for changes beyond your control, how to apply.",
    intro:
      "A No Further Stay condition (8503, 8534 or 8535) means you cannot be granted most substantive visas while you remain in Australia. The Department can waive the condition only where a major change in your circumstances happened after the visa was granted and was beyond your control, such as serious illness, the death of a close family member or a natural disaster at home. A waiver request is free, is made online, must be lodged by each visa holder, and is not itself a visa.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Temporary", "Apply in Australia"],
    keyFacts: [
      { label: "What 8503 does", value: "No onshore substantive visa", note: "Other than a protection visa, while you remain in Australia" },
      { label: "Conditions 8534 and 8535", value: "Student visa versions", note: "8534 allows only a protection, Temporary Graduate (485) or Student Guardian (590) visa; 8535 allows only a protection visa or a government-supported student visa" },
      { label: "Waiver test", value: "Major change, beyond your control", note: "Compelling and compassionate circumstances that developed after grant" },
      { label: "How to request", value: "Online waiver request form", note: "The No Further Stay waiver request (Form 1447); one request per visa holder" },
      { label: "Fee", value: "A$0", note: "No charge for the waiver request; the new visa carries its own charge" },
      { label: "Review", value: "None", note: "The decision is final and the ART cannot review it; a new request needs substantially different circumstances" },
    ],
    whoFor: [
      "You hold a Visitor visa with condition 8503 and cannot travel because of serious illness or injury.",
      "A close family member in Australia has died or is seriously ill and you need to stay beyond your visa.",
      "War, civil unrest or a natural disaster in your home country makes return unsafe.",
      "Your education provider cannot deliver your approved course and your student visa carries 8534 or 8535.",
      "You want to know whether marriage to an Australian, pregnancy or failing a course can lift the condition (they cannot).",
    ],
    eligibility: [
      {
        title: "The condition is on your visa",
        detail:
          "Check your grant letter or VEVO. Condition 8503 provides that the holder will not, after entering Australia, be entitled to be granted a substantive visa other than a protection visa while they remain in Australia. It is common on Visitor (subclass 600) visas, particularly the Sponsored Family stream, and on some other temporary visas.",
        legal: "Migration Regulations 1994, Sch 8 condition 8503; Migration Act 1958, s 41",
      },
      {
        title: "Conditions 8534 and 8535",
        detail:
          "Condition 8534 allows only a protection visa, a Temporary Graduate (subclass 485) visa or a Student Guardian (subclass 590) visa to be granted in Australia; condition 8535 allows only a protection visa or a student visa for which the holder is supported by the Commonwealth or a foreign government. They are used on some Student (subclass 500) visas.",
        legal: "Migration Regulations 1994, Sch 8 conditions 8534 and 8535",
      },
      {
        title: "A major change after grant",
        detail:
          "The Department can waive the condition if, since the visa was granted, compelling and compassionate circumstances have developed over which you had no control and that resulted in a major change to your circumstances. Home Affairs gives as examples being unable to travel for a medical reason, the death or serious illness of close family, a natural disaster, war or civil unrest in your home country, or your school being unable to provide your approved course.",
        legal: "Migration Regulations 1994, reg 2.05(4)",
      },
      {
        title: "Changes that do not qualify",
        detail:
          "Home Affairs states that marriage or a de facto relationship with an Australian citizen or permanent resident, failing your course and pregnancy are not reasons for a waiver. Not knowing that the condition was on your visa is not a reason either.",
        legal: "Migration Regulations 1994, reg 2.05(4)",
      },
      {
        title: "Timing of the request",
        detail:
          "Lodge before your visa expires: a request made too early may not reflect your circumstances, and one made too late may leave no time for a decision. If your visa expires before the request is decided you become unlawful.",
        legal: "Migration Act 1958, s 41",
      },
      {
        title: "Evidence",
        detail:
          "Complete every question in the online form and attach your passport biographical page and documentary evidence such as medical reports or evidence of travel restrictions, with accredited English translations of any document not in English. Each visa holder must lodge a separate request.",
        legal: "Migration Regulations 1994, reg 2.05(4)",
      },
      {
        title: "A waiver is not a visa",
        detail:
          "If the condition is waived you can apply for another visa in Australia, but the Department decides that application on its own criteria and there is no guarantee of grant. If the condition is not waived you cannot apply for another substantive visa onshore, apart from the visas the condition itself allows.",
        legal: "Migration Act 1958, ss 41 and 46",
      },
      {
        title: "No review, but a fresh request is possible",
        detail:
          "The decision to approve or refuse a waiver is final and the Administrative Review Tribunal cannot review it. If your circumstances change after a refusal you can lodge a new request, but the new circumstances must be substantially different from the earlier request.",
        legal: "Migration Act 1958, s 338 (waiver decisions are not Part 5-reviewable decisions)",
      },
    ],
    familyNote:
      "Every family member whose visa carries the condition must lodge their own waiver request. A waiver for one person does not lift the condition on another person's visa.",
    documents: [
      {
        group: "Waiver request",
        items: [
          "Passport biographical data page",
          "Medical reports or a fit-to-fly letter showing you cannot travel",
          "Death certificate or medical evidence for a close family member's death or serious illness",
          "Evidence of a natural disaster, war or civil unrest, such as government travel advice or official notices",
          "A letter from your education provider if your course cannot be delivered",
          "NAATI-accredited English translations of any document not in English",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm the condition and your expiry date",
        description:
          "Check VEVO or your grant letter for 8503, 8534 or 8535 and for the date you must leave.",
        output: "Confirmation of the condition and the visa expiry date",
      },
      {
        title: "Identify the major change",
        description:
          "Write down what changed after the grant, when it happened and why it was outside your control. Compare it with the examples Home Affairs gives.",
        output: "A clear statement of the circumstances",
      },
      {
        title: "Gather the evidence",
        description:
          "Obtain medical reports, certificates, official notices or provider letters, and translations where needed.",
        output: "Documents supporting each claim",
      },
      {
        title: "Lodge the online request",
        description:
          "Use the No Further Stay waiver request form on the Home Affairs website, answer every question and attach your documents. Lodge one request for each visa holder, before the visa expires.",
        output: "A waiver request receipt for each person",
      },
      {
        title: "Wait for the decision and stay lawful",
        description:
          "The Department may ask for more information. The request does not extend your visa, so if your visa is about to expire you must still leave or deal with your status.",
        output: "A written waiver decision",
      },
      {
        title: "Apply for the new visa, or leave",
        description:
          "If waived, lodge the new visa application before your current visa expires so a bridging visa can be granted. If refused, leave before expiry; you can apply for other visas from outside Australia.",
        output: "A new onshore application, or an offshore plan",
      },
    ],
    costs: [
      { item: "No Further Stay waiver request", amount: "A$0", note: "No departmental charge" },
      { item: "New visa application after a waiver", amount: "Varies by visa", note: "For example a Visitor (subclass 600) application in Australia is A$630 and may attract the A$700 subsequent temporary application charge" },
      { item: "Medical reports and translations", amount: "Typical third-party costs", note: "Varies with the evidence" },
    ],
    afterGrant: [
      "A waiver removes the condition from the visa it was imposed on; it does not change any other condition or the visa expiry date.",
      "If your visa expires while the request is pending you become unlawful and your onshore options narrow to a Bridging visa E and departure.",
      "A new visa granted after a waiver may itself carry a No Further Stay condition.",
      "Once you leave Australia you can apply for other visas to return, subject to their criteria.",
    ],
    pathways: [
      {
        title: "Visitor visa (subclass 600)",
        description: "The visa on which condition 8503 is most often imposed.",
        href: "/visas/other-visas/visitor-visa-600",
      },
      {
        title: "Student visa conditions and work rights",
        description: "How conditions 8534 and 8535 fit with the other student visa conditions.",
        href: "/visas/study/student-visa-conditions-and-work-rights",
      },
      {
        title: "Bridging visas A, B, C and E",
        description: "What happens to your status after a waiver or after your visa expires.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
      {
        title: "Medical Treatment visa (subclass 602)",
        description: "An onshore option for people who cannot travel for medical reasons once the condition is waived.",
        href: "/visas/other-visas/medical-treatment-visa-602",
      },
    ],
    risks: [
      "Requesting a waiver for marriage, a new relationship, pregnancy or failing a course, which Home Affairs says do not qualify.",
      "Lodging so late that the visa expires before a decision, leaving you unlawful.",
      "Lodging a visa application before the waiver is granted, which is invalid and gives no bridging visa.",
      "Assuming a waiver means a visa will be granted; the new application is decided on its own criteria.",
      "Expecting ART review of a refused waiver; there is none.",
      "Lodging one request for a family when each visa holder needs their own.",
    ],
    faqs: [
      {
        question: "What does condition 8503 mean?",
        answer:
          "That after entering Australia you are not entitled to be granted a substantive visa other than a protection visa while you remain in Australia. You must leave before your visa expires and apply for any further visa from outside Australia unless the condition is waived.",
      },
      {
        question: "When will Home Affairs waive a No Further Stay condition?",
        answer:
          "Only if compelling and compassionate circumstances beyond your control developed after the visa was granted and caused a major change in your situation, for example you cannot travel for medical reasons, a close family member has died or is seriously ill, or there is a natural disaster, war or civil unrest at home.",
      },
      {
        question: "How do I request the waiver?",
        answer:
          "Through the No Further Stay waiver request form on the Home Affairs website (Form 1447). Answer every question, attach your passport page and evidence with English translations, and lodge a separate request for each visa holder before your visa expires. There is no charge.",
      },
      {
        question: "Does a waiver request extend my visa?",
        answer:
          "No. The request does not change your visa or give you a bridging visa. If your visa expires before the decision you become unlawful. If the waiver is granted you can then lodge a new visa application in Australia.",
      },
      {
        question: "Can I appeal a refused waiver?",
        answer:
          "No. Home Affairs states the decision is final and the Administrative Review Tribunal cannot review it. You can make a new request only if your circumstances have changed substantially since the earlier request.",
      },
      {
        question: "What is the difference between 8503, 8534 and 8535?",
        answer:
          "8503 allows only a protection visa onshore. 8534, used on some student visas, also allows a Temporary Graduate (485) visa and a Student Guardian (590) visa, but not another Student visa. 8535 allows only a protection visa or a student visa supported by the Commonwealth or a foreign government. All three can be waived on the same test.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 8 conditions 8503, 8534 and 8535; reg 2.05(4)", url: REGS },
      { label: "Migration Act 1958, ss 41, 46 and 338", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: No further stay waiver", url: HA_NFS },
      { label: "Home Affairs: No Further Stay waiver request form", url: HA_NFS_FORM },
      { label: "Home Affairs: Stay longer", url: HA_STAY_LONGER },
      { label: "Home Affairs: See your visa conditions", url: "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions" },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Student visa conditions and work rights", href: "/visas/study/student-visa-conditions-and-work-rights" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "Section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
    ],
    keywords: [
      "condition 8503",
      "no further stay waiver",
      "8503 waiver request form 1447",
      "no further stay condition visitor visa",
      "condition 8534 8535 student visa",
      "8503 waiver compelling compassionate",
      "can I apply for a visa with 8503",
      "no further stay waiver refused",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 9. Ministerial intervention
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "ministerial-intervention",
    category: "appeals-and-review",
    kind: "guide",
    name: "Ministerial intervention",
    title: "Ministerial intervention requests (sections 351, 501J, 195A and 48B)",
    seoTitle: "Ministerial intervention: s 351 requests after the ART",
    seoDescription:
      "Ministerial intervention in 2026: the Minister's non-compellable powers under ss 351, 501J, 195A and 48B, the 2025 Instructions and how to lodge a request.",
    intro:
      "After the Administrative Review Tribunal has decided a case, the Minister for Immigration may personally substitute a more favourable decision under section 351 of the Migration Act (or section 501J for protection visa character decisions) if the Minister thinks it is in the public interest. There is no right to request intervention, the Minister need not consider a request, and there is no review. The Department refers only requests that meet the criteria in the Ministerial Instructions issued in September 2025, and a request gives you no bridging visa.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Apply outside Australia"],
    keyFacts: [
      { label: "Main powers", value: "ss 351 and 501J", note: "Replace a Tribunal decision with a more favourable one in the public interest; s 417 has been repealed" },
      { label: "Other personal powers", value: "ss 195A and 48B", note: "Grant a visa to a person in detention; allow a further protection visa application" },
      { label: "Right to request", value: "None", note: "Non-compellable and non-delegable; not bound by any timeframe; no merits or Tribunal review" },
      { label: "When available", value: "After a Tribunal decision", note: "ART or former AAT decision; not after a court has quashed the decision or the Minister has already intervened" },
      { label: "Bridging visa", value: "Not granted by the request", note: "You must stay lawful yourself; apply for a Bridging visa E if you can" },
      { label: "Fee", value: "A$0", note: "No charge for a request" },
    ],
    whoFor: [
      "The Tribunal affirmed your visa refusal and no prescribed visa is open to you in Australia.",
      "You have strong humanitarian or compassionate circumstances, or Australian citizen family members, that the visa criteria could not take into account.",
      "You received a Tribunal decision on a protection visa refused on character grounds and want the Minister to consider section 501J.",
      "You are in immigration detention and want to know how section 195A works.",
      "Your earlier request was finalised by the Minister's personal procedural decisions of 4 September 2025 and you are considering a new request.",
    ],
    eligibility: [
      {
        title: "The power must be enlivened by a Tribunal decision",
        detail:
          "You can request intervention only if the Administrative Review Tribunal, or the former Administrative Appeals Tribunal, has made a decision in your case. The power is not available if there is no tribunal decision, if a court has quashed the tribunal decision, if the Minister has already intervened to grant you a visa, or if the Tribunal remitted your case and the Department has since made a new decision.",
        legal: "Migration Act 1958, ss 351 and 501J",
      },
      {
        title: "The Minister acts personally and is not compellable",
        detail:
          "The powers can be exercised only by the Minister personally, the Minister is not required to consider exercising them, and requests do not form part of the statutory visa application process. There is no review of a decision not to intervene.",
        legal: "Migration Act 1958, ss 351(3) and 501J",
      },
      {
        title: "Ministerial Instructions of September 2025",
        detail:
          "On 4 September 2025 the Minister issued new Ministerial Instructions under sections 351 and 501J, amended on 17 September 2025. They replace the Minister's Guidelines of 11 March 2016. Home Affairs states that the Instructions do not allow the Department to assess 'unique or exceptional circumstances'; instead a request is referred only if it meets one of the criteria in section 13 of the Instructions.",
        legal: "Ministerial Instructions under ss 351 and 501J (4 September 2025, as amended 17 September 2025)",
      },
      {
        title: "Four conditions for referral",
        detail:
          "The Department refers a request only if, in order: the intervention power is enlivened; the request is properly made under Part 2 of the Instructions; the request is not inappropriate to refer under section 12; and the request meets one of the section 13 criteria. Requests that fail any condition are finalised without referral.",
        legal: "Ministerial Instructions, Parts 2, 12 and 13",
      },
      {
        title: "Requests that are inappropriate to refer",
        detail:
          "Home Affairs states that requests are inappropriate to refer, and are finalised, where the person may be eligible to apply for a partner visa, where the person is an unlawful non-citizen not in detention who could have applied for a bridging visa but had not done so when the request was lodged, or where the person has left Australia without a visa to return, unless the Minister has made a procedural decision to consider the case.",
        legal: "Ministerial Instructions, section 12",
      },
      {
        title: "A properly made request",
        detail:
          "The request must be in writing, identify exactly who is included, specify which intervention power it relies on, specify the tribunal decision, specify which section 13 criteria it relies on, and provide all information relevant to those criteria. The Department assesses the request on the information provided at first instance and asks for more only if a criterion is met.",
        legal: "Ministerial Instructions, Part 2",
      },
      {
        title: "Family members",
        detail:
          "Family members can be included only if they have also had a merits review tribunal decision in their own case.",
        legal: "Ministerial Instructions, Part 2",
      },
      {
        title: "Section 195A and section 48B",
        detail:
          "Section 195A allows the Minister personally to grant a visa to a person in immigration detention if the Minister thinks it is in the public interest. Section 48B allows the Minister personally to lift the section 48A bar so a further protection visa application can be made. Both are non-compellable public interest powers with no right to request and no review.",
        legal: "Migration Act 1958, ss 48B and 195A",
      },
    ],
    familyNote:
      "A partner or child can be covered by the same request only if they also have a tribunal decision. Evidence about Australian citizen or permanent resident family members is usually central to the section 13 criteria, so include certified documents proving the relationship and their status.",
    documents: [
      {
        group: "Request package",
        items: [
          "A written request naming everyone included, the power relied on, the tribunal decision and the section 13 criteria relied on",
          "Certified copies of all supporting documents (certified by a JP, solicitor, doctor, bank or postal manager or other listed person)",
          "NAATI-accredited English translations of any document not in English",
          "Form 956 for a registered migration agent, legal practitioner or exempt person, or Form 956A for an authorised recipient",
          "Evidence of lawful status, such as your Bridging visa E grant letter",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm that the power is enlivened",
        description:
          "Check that you have a Tribunal decision and that none of the exclusions applies: no earlier intervention, no court order quashing the decision, and no new departmental decision after remittal.",
        output: "Confirmation that a request can be made",
      },
      {
        title: "Stay lawful",
        description:
          "Apply for a Bridging visa E on the basis that you are seeking ministerial intervention before you lodge. A request from an unlawful person who could have applied for a bridging visa is finalised without referral.",
        output: "A bridging visa in effect",
      },
      {
        title: "Match your case to section 13",
        description:
          "Read sections 12 and 13 of the Ministerial Instructions. Identify the criterion you rely on and the evidence for it, and check that nothing in section 12 makes the request inappropriate to refer, such as eligibility for a partner visa.",
        output: "A section 13 criterion identified with evidence",
      },
      {
        title: "Prepare a complete written request",
        description:
          "Provide everything at first instance: the people included, the power, the decision, the criterion, certified documents and translations. Do not send USB drives or CDs; the Department will not open them.",
        output: "A complete request package",
      },
      {
        title: "Lodge the request",
        description:
          "Use the Contact the Minister online form on the Home Affairs website, or post the request to the Minister for Immigration and Citizenship, PO Box 6022, House of Representatives, Parliament House, Canberra ACT 2600.",
        output: "A lodged request and acknowledgement",
      },
      {
        title: "Respond to any further request",
        description:
          "If the request meets a criterion the Department may ask for a health examination, police clearances or further evidence within a set time. The Minister may then decide to consider the case, intervene, or not.",
        output: "A written outcome from the Department",
      },
    ],
    costs: [
      { item: "Ministerial intervention request", amount: "A$0", note: "No departmental charge" },
      { item: "Bridging visa E (subclass 050)", amount: "A$0", note: "No visa application charge" },
      { item: "Certified copies, translations and representation", amount: "Typical third-party costs", note: "Varies with the request" },
      { item: "Health examinations and police certificates if requested", amount: "Typical third-party costs", note: "Only if the Department asks for them" },
    ],
    afterGrant: [
      "While a request is in progress the Minister expects you to keep engaging with the Department about your status, to remain lawful and to make arrangements to leave Australia.",
      "A request is not a visa application and does not stop removal under section 198 unless the Minister has made a procedural decision to consider your case.",
      "If you leave Australia without a visa to return before an outcome, the request is finalised without referral unless the Minister has already decided to consider it.",
      "If the request is unsuccessful you are expected to leave; staying unlawfully can lead to detention, removal and a debt for removal costs.",
    ],
    pathways: [
      {
        title: "ART review of a visa refusal",
        description: "The Tribunal decision that must exist before a request can be made.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
      {
        title: "Judicial review of migration decisions",
        description: "A court challenge for jurisdictional error, which runs on a 35-day limit separate from any request.",
        href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
      },
      {
        title: "Partner visa (subclasses 820 and 801)",
        description: "Home Affairs will not refer a request from someone who may be eligible for a partner visa.",
        href: "/visas/family/partner-visa-onshore-820-801",
      },
      {
        title: "Bridging visas A, B, C and E",
        description: "How to remain lawful while a request is considered.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
    ],
    risks: [
      "Lodging without a Tribunal decision, or after a court has quashed the Tribunal decision, so the power is not enlivened.",
      "Lodging while unlawful without first applying for a bridging visa, which makes the request inappropriate to refer.",
      "Not specifying the section 13 criterion or giving incomplete information; the Department decides on what is lodged at first instance.",
      "Treating a request as a way to stay: it does not give a bridging visa and does not stop removal.",
      "Leaving Australia before the outcome, which finalises the request.",
      "Relying on the old 'unique or exceptional circumstances' guidelines, which the 2025 Instructions replaced.",
    ],
    faqs: [
      {
        question: "What is ministerial intervention?",
        answer:
          "A process under sections 351 and 501J of the Migration Act in which the Minister may personally replace a merits review tribunal decision with a decision more favourable to you if the Minister thinks it is in the public interest. It is not a visa application, the Minister need not consider a request, and there is no review of the outcome.",
      },
      {
        question: "When can I make a request?",
        answer:
          "Only after a decision by the Administrative Review Tribunal or the former Administrative Appeals Tribunal. The power is not available if there is no tribunal decision, a court has quashed it, the Minister has already intervened, or the Department has made a new decision after a remittal.",
      },
      {
        question: "What happened to section 417?",
        answer:
          "Home Affairs states that section 417 has been repealed. The Minister can still exercise the section 351 power for people whose section 417 power was enlivened by an earlier tribunal decision. Protection visa decisions refused on character grounds fall under section 501J.",
      },
      {
        question: "Do I get a bridging visa while the Minister considers my request?",
        answer:
          "No. A request does not give you a visa. You must stay lawful yourself, usually by applying for a Bridging visa E on the basis that you are seeking ministerial intervention. If you are unlawful and could have applied for a bridging visa but did not, your request is finalised without referral.",
      },
      {
        question: "What are the new Ministerial Instructions?",
        answer:
          "Instructions issued by the Minister on 4 September 2025 and amended on 17 September 2025 that replace the 2016 guidelines. They set out when the power is enlivened, what a properly made request contains, which requests are inappropriate to refer (section 12) and the criteria for referral to the Minister (section 13).",
      },
      {
        question: "Can I include my family?",
        answer:
          "Only family members who have also had a merits review tribunal decision in their own case can be included in your request.",
      },
      {
        question: "What is section 195A?",
        answer:
          "A personal, non-compellable power for the Minister to grant a visa to a person in immigration detention if the Minister thinks it is in the public interest. There is no right to request it and no review.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 48A, 48B, 195A, 198, 351 and 501J", url: ACT },
      { label: "Ministerial Instructions under ss 351 and 501J (Home Affairs)", url: "https://immi.homeaffairs.gov.au/refugee-and-humanitarian/Pages/Ref-and-hum-program/documents/ministerial-Instructions-351-501J.pdf" },
      { label: "Migration Regulations 1994, Sch 2 Part 050 (Bridging visa E)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
    ],
    sources: [
      { label: "Home Affairs: Ministerial intervention", url: HA_MI },
      { label: "Home Affairs: How we assess ministerial intervention requests", url: HA_MI_ASSESS },
      { label: "Home Affairs: After you request ministerial intervention", url: HA_MI_AFTER },
      { label: "Home Affairs: Bridging visa E (subclass 050)", url: HA_BVE },
      { label: "ART: Information about decisions (MR25)", url: ART_MR25 },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { label: "Judicial review of migration decisions", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
      { label: "Section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
    ],
    keywords: [
      "ministerial intervention",
      "section 351 request",
      "ministerial intervention request Australia",
      "minister intervention after ART",
      "section 501J",
      "section 195A detention visa",
      "section 48B request",
      "ministerial instructions 2025",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 10. Judicial review of migration decisions
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "judicial-review-of-migration-decisions",
    category: "appeals-and-review",
    kind: "guide",
    name: "Judicial review of migration decisions",
    title: "Judicial review of migration decisions in the courts",
    seoTitle: "Judicial review of visa decisions: 35 days, fees, costs",
    seoDescription:
      "Judicial review of ART visa decisions in 2026: the FCFCOA, the 35-day limit, jurisdictional error, the A$4,180 filing fee, costs risk and bridging visas.",
    intro:
      "If the Administrative Review Tribunal affirms a refusal or cancellation, you can ask the Federal Circuit and Family Court of Australia (Division 2) to review the Tribunal's decision for jurisdictional error. The court does not reconsider the merits and cannot grant a visa; it can only set aside a decision that was not made lawfully and send it back. An application must be filed within 35 days of the decision, court fees apply, and an unsuccessful applicant usually pays the Minister's legal costs.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Apply outside Australia"],
    keyFacts: [
      { label: "Court", value: "FCFCOA (Division 2)", note: "Federal Court for character decisions, including those the Minister makes personally under the character provisions; High Court under s 75(v)" },
      { label: "Time limit", value: "35 days", note: "From the date of the decision; the court can extend it in the interests of the administration of justice" },
      { label: "Test", value: "Jurisdictional error only", note: "No merits review, no new facts, no power to grant a visa" },
      { label: "Filing fee", value: "A$4,180", note: "Migration application from 1 July 2026; A$2,090 if a reduced fee is approved; setting-down fee A$1,035 before the final hearing" },
      { label: "Costs risk", value: "Minister's costs if you lose", note: "Scale costs from A$1,821.21 to A$9,097.93 for a concluded proceeding" },
      { label: "Bridging visa", value: "Apply by webform", note: "A Bridging visa A for judicial review ceases 28 days after the court upholds the refusal" },
    ],
    whoFor: [
      "The ART affirmed your visa refusal or cancellation and you believe the Tribunal applied the wrong legal test or ignored part of your case.",
      "You were not given a fair chance to answer adverse information before the Tribunal decided.",
      "The Minister personally refused or cancelled your visa and the Tribunal has no jurisdiction.",
      "The ART dismissed your application as not properly made and you say it had jurisdiction.",
      "You are weighing judicial review against a ministerial intervention request after a Tribunal loss.",
    ],
    eligibility: [
      {
        title: "A reviewable migration decision",
        detail:
          "The Federal Circuit and Family Court of Australia (Division 2) has the same original jurisdiction as the High Court in relation to migration decisions, with exceptions. It cannot review primary decisions that the Tribunal can review; you must go to the Tribunal first and then seek review of the Tribunal's decision.",
        legal: "Migration Act 1958, ss 474 and 476",
      },
      {
        title: "Character and ministerial decisions go to the Federal Court",
        detail:
          "The Federal Court of Australia has original jurisdiction over Tribunal decisions in character matters and over decisions made personally by the Minister under the character provisions. Other Tribunal decisions start in the Federal Circuit and Family Court.",
        legal: "Migration Act 1958, s 476A",
      },
      {
        title: "35 days from the decision",
        detail:
          "The application must be filed within 35 days of the date of the migration decision, which may differ from the date on the notification letter. The court may extend the time if you ask in the application, explain why, and the court is satisfied that an extension is necessary in the interests of the administration of justice.",
        legal: "Migration Act 1958, ss 477 and 477A",
      },
      {
        title: "Jurisdictional error",
        detail:
          "The court looks only at whether the decision-maker made the decision properly: following the correct legal procedures and applying the law correctly. Errors of this kind include failing to consider a claim or mandatory consideration, denying procedural fairness, misunderstanding the legal test, or making a finding with no evidence to support it. Disagreement with the facts found is not enough.",
        legal: "Migration Act 1958, s 476; Constitution, s 75(v)",
      },
      {
        title: "What the court can and cannot do",
        detail:
          "If it finds jurisdictional error the court can set aside the decision, prevent the Minister acting on it and refer the case back to the decision-maker to be decided again according to law. It cannot reconsider the facts, take new factual evidence (unless relevant to whether an error was made) or grant a visa.",
        legal: "Migration Act 1958, s 476",
      },
      {
        title: "Appeals",
        detail:
          "A party may appeal a Division 2 judgment to the Federal Court of Australia on a question of law, usually before a single judge. The Minister can appeal if you win. A further appeal to the High Court needs special leave.",
        legal: "Federal Court of Australia Act 1976, Part III (appeals); Migration Act 1958, s 476A",
      },
      {
        title: "High Court",
        detail:
          "The High Court has original jurisdiction under section 75(v) of the Constitution to review decisions of Commonwealth officers, with a 35-day time limit under the Migration Act. It usually remits migration matters to a lower court.",
        legal: "Constitution, s 75(v); Migration Act 1958, s 486A",
      },
      {
        title: "Lawful status during the case",
        detail:
          "Home Affairs states that if the Tribunal upholds a refusal and you apply for judicial review you must apply for a bridging visa to stay lawful, and that the application can only be made by webform. A Bridging visa A granted for judicial review ceases 28 days after the court upholds the refusal or you withdraw.",
        legal: "Migration Regulations 1994, Sch 2 Parts 010 and 050",
      },
    ],
    familyNote:
      "Family members whose Tribunal review was combined with yours are usually joined as applicants in the same court application. Each applicant's bridging visa must be dealt with separately.",
    documents: [
      {
        group: "Filing",
        items: [
          "Originating application - Migration Act, identifying the decision and the grounds (the jurisdictional errors alleged)",
          "An affidavit attaching the Tribunal's decision and reasons, the Department's decision and the notification letter",
          "The court filing fee, or an application for exemption or reduced fee with evidence of a concession card or financial hardship",
          "Notice of address for service and, if needed, a request for an interpreter",
        ],
      },
      {
        group: "Preparing the case",
        items: [
          "The Tribunal hearing recording (free for migration cases on request) and transcript if ordered",
          "The Tribunal file and the Department's documents given to the Tribunal",
          "Written submissions on each ground, prepared with a lawyer where possible",
        ],
      },
    ],
    steps: [
      {
        title: "Get legal advice on the grounds quickly",
        description:
          "Identify a jurisdictional error in the Tribunal's reasons. The 35 days run from the decision date, so advice is needed within days of receiving the decision.",
        output: "A view on whether there is an arguable jurisdictional error",
      },
      {
        title: "File within 35 days and pay the fee",
        description:
          "File the originating application and supporting affidavit with the court and pay A$4,180 (A$2,090 if a reduced fee is approved, or apply for exemption). If you are late, ask for an extension in the application and explain why.",
        output: "A sealed application and a court file number",
      },
      {
        title: "Apply for a bridging visa",
        description:
          "Lodge the bridging visa webform with Home Affairs so you remain lawful during the proceedings.",
        output: "A bridging visa in effect for the court case",
      },
      {
        title: "Serve the Minister",
        description:
          "Serve the sealed application and documents on the Minister and any other decision-maker. The Minister's lawyers file a response, and the court or a Registrar then makes standard timetabling orders for filing submissions and the court book.",
        output: "Service completed and a timetable set",
      },
      {
        title: "Deal with interlocutory hearings",
        description:
          "The Minister may apply for summary judgment if the case has no reasonable prospects. If you asked for an extension of time, a separate hearing decides whether to grant it. Attend every listed hearing or the case may be dismissed with costs.",
        output: "Case listed for final hearing",
      },
      {
        title: "Final hearing and judgment",
        description:
          "The judge hears argument from both sides and decides whether there was jurisdictional error. If so, the decision is set aside and the matter goes back to the Tribunal to be decided according to law. If not, the application is dismissed and costs are usually ordered against you.",
        output: "A judgment and costs order",
      },
      {
        title: "Consider an appeal",
        description:
          "An appeal to the Federal Court must be filed within the time set by the Federal Court Rules and involves a further filing fee, a setting-down fee and costs risk. Get advice before appealing.",
        output: "A decision whether to appeal",
      },
    ],
    costs: [
      { item: "Filing an application (migration only)", amount: "A$4,180", note: "From 1 July 2026; A$2,090 if a Registrar approves a reduced fee" },
      { item: "Setting down for hearing fee", amount: "A$1,035", note: "Individuals; payable before the final hearing" },
      { item: "Daily hearing fee for each day after the first", amount: "A$1,035", note: "Individuals" },
      { item: "Interlocutory application", amount: "A$505", note: "Individuals" },
      { item: "Fee exemption or reduction", amount: "Available", note: "For certain concession card holders and financial hardship, on application to the court" },
      { item: "Minister's costs if you lose (scale)", amount: "A$1,821.21 to A$9,097.93", note: "Depending on the stage reached; A$9,097.93 if concluded at a final hearing" },
      { item: "Costs on discontinuance", amount: "A$905.96 to A$6,368.43", note: "A$905.96 if discontinued within 30 days of filing" },
      { item: "Your own legal representation", amount: "Typical third-party cost", note: "Strongly recommended by the court" },
    ],
    afterGrant: [
      "If you win, the matter returns to the Tribunal for a fresh decision according to law; the Tribunal can still affirm the refusal on a proper basis.",
      "If you lose, your Bridging visa A ceases 28 days after the judgment and you must leave or make other arrangements; a costs order against you is a debt that can affect later visas.",
      "The Minister may appeal a judgment in your favour; you then become the respondent.",
      "A ministerial intervention request can be made after the Tribunal decision, but the Department finalises a request if the court quashes the Tribunal decision.",
    ],
    pathways: [
      {
        title: "ART review of a visa refusal",
        description: "The merits review that must usually come first.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
      {
        title: "Natural justice and adverse information",
        description: "Procedural fairness breaches are a common ground of jurisdictional error.",
        href: "/visas/appeals-and-review/natural-justice-and-adverse-information",
      },
      {
        title: "Ministerial intervention",
        description: "A non-compellable alternative after a Tribunal decision.",
        href: "/visas/appeals-and-review/ministerial-intervention",
      },
      {
        title: "Bridging visas A, B, C and E",
        description: "Staying lawful during court proceedings.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
    ],
    risks: [
      "Filing after 35 days without a strong explanation; extensions are discretionary.",
      "Pleading merits arguments (the Tribunal got the facts wrong) rather than legal error, which leads to summary dismissal and costs.",
      "Not applying for a bridging visa by webform, so you become unlawful while the case runs.",
      "Underestimating costs: a dismissed application concluded at final hearing attracts A$9,097.93 in scale costs plus your own fees.",
      "Missing a court date, which can lead to dismissal in your absence with costs.",
      "Leaving Australia with no right of return, which can cause the court to dismiss the matter.",
    ],
    faqs: [
      {
        question: "What is judicial review?",
        answer:
          "A court review of whether a decision was made lawfully. The Federal Circuit and Family Court of Australia (Division 2) checks whether the Tribunal, the Minister or a delegate made a jurisdictional error, such as applying the wrong test or denying procedural fairness. It does not decide whether you should get a visa.",
      },
      {
        question: "How long do I have to apply?",
        answer:
          "Thirty-five days from the date of the migration decision, which may be earlier than the date on the letter you received. You can ask the court to extend the time in your application, and it may do so if that is necessary in the interests of the administration of justice.",
      },
      {
        question: "How much does it cost?",
        answer:
          "The court filing fee for a migration application is A$4,180 from 1 July 2026, or A$2,090 if a reduced fee is approved, plus a setting-down fee of A$1,035 before the final hearing. If you lose you will usually be ordered to pay the Minister's legal costs, which the court scale sets at A$9,097.93 for a case concluded at final hearing.",
      },
      {
        question: "Can the court grant my visa?",
        answer:
          "No. If the court finds jurisdictional error it sets the decision aside and sends the case back to the decision-maker, usually the Tribunal, to decide again according to law. The Tribunal may still reach the same outcome on a lawful basis.",
      },
      {
        question: "Will I stay lawful during the case?",
        answer:
          "Only if you hold a bridging visa. Home Affairs requires a bridging visa application by webform once you apply for judicial review. A Bridging visa A granted for judicial review ceases 28 days after the court upholds the refusal or you withdraw the application.",
      },
      {
        question: "Can I appeal if I lose in the Federal Circuit and Family Court?",
        answer:
          "Yes, to the Federal Court of Australia, usually before a single judge, on the basis that the judge made a legal mistake. A further filing fee, a setting-down fee and costs risk apply, and the Federal Court website sets out the time limit and procedure.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 474, 476, 476A, 477, 477A and 486A", url: ACT },
      { label: "Migration Regulations 1994, Sch 2 Parts 010 and 050 (bridging visas)", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "Constitution, s 75(v)", url: "https://www.legislation.gov.au/C2004Q00685/latest/text" },
    ],
    sources: [
      { label: "FCFCOA: Migration law", url: FCFCOA_MIGRATION },
      { label: "FCFCOA: Migration overview for applicants", url: FCFCOA_OVERVIEW },
      { label: "FCFCOA: Migration appeals", url: FCFCOA_APPEALS },
      { label: "FCFCOA: Migration costs", url: FCFCOA_COSTS },
      { label: "FCFCOA: Directions, callovers and court hearings", url: FCFCOA_HEARINGS },
      { label: "FCFCOA: Fees (from 1 July 2026)", url: FCFCOA_FEES },
      { label: "ART: Information about decisions (MR25)", url: ART_MR25 },
      { label: "Home Affairs: Bridging visa A (subclass 010)", url: HA_BVA },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { label: "Ministerial intervention", href: "/visas/appeals-and-review/ministerial-intervention" },
      { label: "Character test (section 501)", href: "/visas/appeals-and-review/character-test-section-501" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
    ],
    keywords: [
      "judicial review migration decision",
      "Federal Circuit and Family Court migration",
      "35 days judicial review ART",
      "jurisdictional error visa",
      "court review visa refusal Australia",
      "migration court filing fee 2026",
      "appeal ART decision to court",
      "section 476 Migration Act",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 11. Health requirement and health waiver
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "health-requirement-and-health-waiver",
    category: "appeals-and-review",
    kind: "guide",
    name: "Health requirement and health waiver",
    title: "The health requirement (PIC 4005 and 4007) and health waivers",
    seoTitle: "Health requirement PIC 4005 and 4007: health waiver guide",
    seoDescription:
      "Visa health requirement in 2026: PIC 4005 and 4007, the A$86,000 significant cost threshold, services in short supply, the MOC and health waivers.",
    intro:
      "Most visa applicants, and often their family members, must meet Australia's health requirement: they must be free of tuberculosis and other public health threats, and their conditions must not be likely to cost the community more than the significant cost threshold (currently A$86,000) or to prejudice access to services in short supply. Visas that use Public Interest Criterion 4005 have no waiver; visas that use PIC 4007 allow the Department to waive the cost and access limbs where the grant would be unlikely to cause undue cost or prejudice.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Permanent", "Temporary", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Criteria", value: "PIC 4005 or PIC 4007", note: "4005 has no waiver; 4007 allows a health waiver" },
      { label: "Significant Cost Threshold", value: "A$86,000", note: "Home Affairs: last updated 1 July 2024, reviewed every two years" },
      { label: "Services in short supply", value: "Organ transplants and dialysis", note: "Conditions likely to need these fail the prejudice-to-access limb" },
      { label: "Assessment period", value: "Stay, or 5 years", note: "Temporary visas: period of stay; permanent: 5 years (3 if aged 75+), up to 10 for permanent conditions" },
      { label: "Who is assessed", value: "You and your family", note: "For permanent visas, family members may be assessed even if they are not migrating" },
      { label: "Validity", value: "12 months", note: "Health examination results; a health undertaking is valid for 6 months" },
    ],
    whoFor: [
      "You or a family member has a long-term condition such as a disability, HIV, hepatitis B, cancer or kidney disease and you are applying for a visa.",
      "A Medical Officer of the Commonwealth has found you do not meet the health requirement and the Department has invited a health waiver submission.",
      "You are choosing between a PIC 4005 visa and a PIC 4007 visa because of a family member's condition.",
      "Your child was born in Australia and has a condition that may exceed the cost threshold.",
      "You have been asked to sign a health undertaking for inactive tuberculosis.",
    ],
    eligibility: [
      {
        title: "Free from tuberculosis and threats to public health",
        detail:
          "Applicants aged 11 or over have a chest x-ray; permanent applicants are tested for tuberculosis and may be tested for HIV and hepatitis B. Active tuberculosis means no visa until it is treated and a Medical Officer of the Commonwealth finds you free of it. Inactive tuberculosis may be accepted with a health undertaking. Neither limb can be waived.",
        legal: "PIC 4005(1)(a)-(b) and PIC 4007(1)(a)-(b) (Sch 4)",
      },
      {
        title: "Not a significant cost to the community",
        detail:
          "A Medical Officer of the Commonwealth (MOC) estimates the health and community service costs of a hypothetical person with the same condition and severity. Costs above the Significant Cost Threshold of A$86,000 mean the requirement is not met. Temporary applicants are costed for their period of stay; permanent and provisional applicants for 5 years, or 3 years if aged 75 or over, or up to 10 years for a permanent condition with a predictable course.",
        legal: "PIC 4005(1)(c)(i) and PIC 4007(1)(c)(i) (Sch 4)",
      },
      {
        title: "No prejudice to access to services in short supply",
        detail:
          "The requirement is also not met if the condition is likely to limit the access of Australian citizens and permanent residents to services in short supply. Home Affairs, on advice from the Department of Health, Disability and Ageing, currently lists organ transplants and dialysis.",
        legal: "PIC 4005(1)(c)(ii) and PIC 4007(1)(c)(ii) (Sch 4)",
      },
      {
        title: "The MOC opinion is taken to be correct",
        detail:
          "The MOC considers only the medical situation, not personal circumstances such as private health insurance or money to pay for treatment. The Department and the Tribunal must take the MOC's opinion on the medical questions to be correct; what can be argued is the waiver, where one is available.",
        legal: "Migration Regulations 1994, reg 2.25A",
      },
      {
        title: "Health undertaking",
        detail:
          "If asked, you must sign a health undertaking (Form 815) and contact Bupa Medical Visa Services within 28 days of arrival for follow-up of conditions such as inactive tuberculosis, HIV or hepatitis. Refusing to sign means the visa is not granted.",
        legal: "PIC 4005(1)(d) and PIC 4007(1)(d) (Sch 4)",
      },
      {
        title: "Family members: one fails all",
        detail:
          "For permanent and provisional visas every applicant must have health examinations and, in some cases, family members who are not coming to Australia must also meet the requirement. If one family member fails and no waiver is exercised, the whole application is refused. For temporary visas, who is examined depends on the visa, length of stay, activity and country.",
        legal: "Migration Regulations 1994, Sch 2 (secondary criteria for each subclass)",
      },
      {
        title: "Health waiver (PIC 4007 visas only)",
        detail:
          "Where the visa uses PIC 4007 the Department may waive the cost and access limbs if satisfied that granting the visa would be unlikely to result in undue cost to the Australian community or undue prejudice to access to services. You do not apply for the waiver: if you fail and a waiver is available the processing officer invites a submission. Factors include whether you or your family can lessen the cost and reliance on services, and compassionate and compelling circumstances. No waiver is possible for active tuberculosis or a danger to public health.",
        legal: "PIC 4007(2) (Sch 4)",
      },
      {
        title: "Which visas carry a waiver",
        detail:
          "PIC 4007 applies, for example, to the partner visas (820/801 and 309/100), the child visas (101/802), the Employer Nomination Scheme (186), the Skills in Demand (482) and the Skilled Employer Sponsored Regional (494) visas. PIC 4005, with no waiver, applies, for example, to the Skilled Independent (189), Skilled Nominated (190), Skilled Work Regional (491), Temporary Graduate (485), Student (500) and Visitor (600) visas. Check the Schedule 2 criteria for your subclass.",
        legal: "Migration Regulations 1994, Sch 2 (time-of-decision criteria for each subclass)",
      },
      {
        title: "Children born and ordinarily resident in Australia",
        detail:
          "A child who is under 18 at the time of decision, was born in Australia and is ordinarily resident here may be granted the visa despite not meeting the health requirement, without applying for special consideration. A full Australian birth certificate is required.",
        legal: "Migration Regulations 1994, PIC 4005 and 4007 (Sch 4) as applied by Home Affairs policy on children born in Australia",
      },
    ],
    familyNote:
      "Include every member of the family unit in the health process. For permanent visas, a non-migrating family member may still be required to be examined unless the Department accepts that it is unreasonable to require it. A health waiver is considered for the whole family unit, so evidence about the family's capacity to support the person is relevant.",
    documents: [
      {
        group: "Health examinations",
        items: [
          "Referral letter with your HAP ID from ImmiAccount or your processing officer",
          "Passport and any previous health examination results from the last 12 months",
          "Existing medical reports, treatment plans and specialist letters for known conditions",
        ],
      },
      {
        group: "Health waiver submission",
        items: [
          "The Department's formal submission template completed in full",
          "Specialist reports on prognosis, treatment needs and expected service use",
          "Evidence of capacity to mitigate costs: employment, income, private health insurance, family support and accommodation",
          "Evidence of compassionate and compelling circumstances, including the effect of refusal on Australian citizen or permanent resident family members",
        ],
      },
    ],
    steps: [
      {
        title: "Complete your medical history and get a HAP ID",
        description:
          "In ImmiAccount open 'View health assessment', complete the medical history and print the referral letter with your HAP ID. Paper applicants receive the letter from the processing officer.",
        output: "A HAP ID referral letter for each applicant",
      },
      {
        title: "Attend the examinations",
        description:
          "Book with a panel physician (Bupa Medical Visa Services in Australia). The examinations depend on the visa, age, country and intended activity, and usually include a medical examination, chest x-ray and, for permanent applicants, HIV and in some cases hepatitis B tests.",
        output: "Results submitted by the clinic to the Department",
      },
      {
        title: "Wait for clearance or MOC referral",
        description:
          "Cases with no significant condition are cleared. Others go to a Medical Officer of the Commonwealth, who may ask for more information or further examinations and then advises whether you meet the requirement, meet it with a health undertaking, or do not meet it.",
        output: "A MOC opinion on the health criteria",
      },
      {
        title: "Sign a health undertaking if asked",
        description:
          "Complete the Form 815 health undertaking, which is valid for 6 months, and agree to contact Bupa Medical Visa Services within 28 days of arriving in Australia.",
        output: "A signed health undertaking",
      },
      {
        title: "Make a health waiver submission if invited",
        description:
          "If you do not meet the requirement and your visa uses PIC 4007, the processing officer contacts you and asks for the formal submission and evidence. Address the likely costs, how they can be reduced, and the compassionate and compelling circumstances.",
        output: "A health waiver submission and evidence",
      },
      {
        title: "Receive the decision",
        description:
          "If the waiver is exercised, processing continues. If it is not, or if no waiver is available, the visa is refused. A refusal of an onshore or sponsored application is usually reviewable by the ART, which must accept the MOC opinion but reconsiders the waiver.",
        output: "A visa decision, or an ART application within 28 days",
      },
    ],
    costs: [
      { item: "Health examinations", amount: "Typical third-party cost", note: "Paid to the panel clinic; varies by country and tests required" },
      { item: "Health waiver consideration", amount: "A$0", note: "No departmental charge" },
      { item: "Specialist reports for a waiver submission", amount: "Typical third-party cost", note: "Varies" },
      { item: "ART review of a health refusal", amount: "A$3,727", note: "1 July 2026 fee; 50% reduction for financial hardship" },
    ],
    afterGrant: [
      "Comply with any health undertaking: contact Bupa Medical Visa Services within 28 days of arrival and attend the state or territory health clinic if directed.",
      "Health results are valid for 12 months; if your visa is not decided within that time you may need new examinations.",
      "A later visa application reassesses health again, and the SCT in force at that time applies.",
      "Some temporary visas also require you to hold health insurance under condition 8501.",
    ],
    pathways: [
      {
        title: "Skills in Demand visa (subclass 482)",
        description: "An employer-sponsored visa that uses PIC 4007, so a health waiver is available.",
        href: "/visas/employer-sponsored/skills-in-demand-visa-482",
      },
      {
        title: "Employer Nomination Scheme visa (subclass 186)",
        description: "A permanent employer-sponsored visa with the PIC 4007 waiver.",
        href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
      },
      {
        title: "Partner visa (subclasses 820 and 801)",
        description: "Partner visas use PIC 4007 and often involve waiver submissions.",
        href: "/visas/family/partner-visa-onshore-820-801",
      },
      {
        title: "ART review of a visa refusal",
        description: "Merits review of a health refusal, including a fresh look at the waiver.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
    ],
    risks: [
      "Applying for a PIC 4005 visa with a family member whose condition is likely to exceed A$86,000, when a PIC 4007 visa was available.",
      "Assuming private health insurance or savings change the MOC assessment; they are only relevant to a waiver.",
      "Not disclosing a known condition in the medical history, which can lead to PIC 4020 and section 109 problems.",
      "Missing MOC requests for more information or further examinations within the time given.",
      "Letting examination results expire before the decision, which requires repeat examinations.",
      "A thin waiver submission that does not address mitigation of costs or the circumstances of Australian family members.",
    ],
    faqs: [
      {
        question: "What is the significant cost threshold?",
        answer:
          "The figure above which a condition is treated as a significant cost to the Australian community. Home Affairs states the current value is A$86,000, set on 1 July 2024 and reviewed every two years. It is based on the average health and welfare spending for an Australian over 5 years. The MOC compares the estimated cost of your condition over the assessment period with this figure.",
      },
      {
        question: "What is the difference between PIC 4005 and PIC 4007?",
        answer:
          "Both set the same health standard. PIC 4007 adds a waiver: the Department may grant the visa if it is satisfied that doing so would be unlikely to result in undue cost or undue prejudice to access to services. PIC 4005 has no waiver, so a failure means refusal unless the child-born-in-Australia rule applies.",
      },
      {
        question: "Do my family members have to meet the health requirement if they are not migrating?",
        answer:
          "For permanent and provisional visas, yes in some circumstances; Home Affairs states family members not coming to Australia might also need health examinations. If one member fails and no waiver is exercised, the application is refused for everyone.",
      },
      {
        question: "Can I apply for a health waiver?",
        answer:
          "Not directly. If you fail the health requirement and a waiver is available for your visa subclass, the processing officer contacts you and invites a formal submission with evidence. There is no fee.",
      },
      {
        question: "Which services are in short supply?",
        answer:
          "Home Affairs currently lists organ transplants and dialysis, on advice from the Department of Health, Disability and Ageing. A condition likely to require these fails the prejudice-to-access limb.",
      },
      {
        question: "Can the ART overturn a health refusal?",
        answer:
          "The Tribunal must treat the Medical Officer of the Commonwealth's opinion on the medical questions as correct, so it cannot find that you meet PIC 4005 against that opinion. For PIC 4007 visas it reconsiders the waiver afresh and can decide that it should be exercised.",
      },
      {
        question: "How long are my health results valid?",
        answer:
          "Twelve months from the examinations. A health undertaking is valid for 6 months. If you had examinations in the last 12 months you may not need to repeat all of them; the referral letter lists what is required.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, PIC 4005 and PIC 4007 (Sch 4); reg 2.25A; Sch 2 criteria for each subclass", url: REGS },
      { label: "Migration Act 1958, ss 57 and 65", url: ACT },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
    ],
    sources: [
      { label: "Home Affairs: Meeting our health requirement", url: HA_HEALTH },
      { label: "Home Affairs: Who needs health examinations", url: HA_HEALTH_WHO },
      { label: "Home Affairs: After your health examinations", url: HA_HEALTH_AFTER },
      { label: "Home Affairs: Protecting health care and community services (significant cost threshold)", url: HA_HEALTH_COSTS },
      { label: "Home Affairs: Health waivers", url: HA_HEALTH_WAIVER },
      { label: "Home Affairs: Threats to public health", url: HA_HEALTH_THREATS },
      { label: "Home Affairs: Health undertaking", url: HA_HEALTH_UNDERTAKING },
      { label: "Home Affairs: Special consideration for children born and ordinarily resident in Australia", url: HA_HEALTH_CHILDREN },
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Partner visa (subclasses 820 and 801)", href: "/visas/family/partner-visa-onshore-820-801" },
      { label: "Child visa (subclasses 101 and 802)", href: "/visas/family/child-visa-101-802" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
    ],
    keywords: [
      "health requirement Australian visa",
      "PIC 4005",
      "PIC 4007 health waiver",
      "significant cost threshold 86000",
      "Medical Officer of the Commonwealth",
      "health waiver submission",
      "one fails all health requirement",
      "visa medical examination HAP ID",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 12. Exclusion periods: PIC 4013 and 4014
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "exclusion-periods-pic-4013-4014",
    category: "appeals-and-review",
    kind: "guide",
    name: "Exclusion periods (PIC 4013 and 4014)",
    title: "Exclusion periods after cancellation or overstay: PIC 4013 and 4014",
    seoTitle: "PIC 4013 and 4014: 3-year exclusion periods explained",
    seoDescription:
      "PIC 4013 and 4014 in 2026: the 3-year exclusion periods after a visa cancellation or unlawful departure, compelling circumstances exception and re-entry bans.",
    intro:
      "A re-entry ban, or exclusion period, means a person may be refused further visas for a set time. Public Interest Criterion 4013 creates a 3-year risk factor after a visa cancellation, and PIC 4014 creates a 3-year risk factor after leaving Australia as an unlawful non-citizen who overstayed by more than 28 days. Both can be overcome only where compelling circumstances affecting Australia's interests, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen, justify the grant.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply outside Australia", "Temporary", "Permanent"],
    keyFacts: [
      { label: "PIC 4013", value: "3 years after cancellation", note: "Cancellations under ss 109, 116, 128 and 140 and some others" },
      { label: "PIC 4014", value: "3 years after departure", note: "Leaving as an unlawful non-citizen, or on a Bridging visa C, D or E granted after becoming unlawful" },
      { label: "28-day grace", value: "Overstay of more than 28 days", note: "Home Affairs: leaving without a valid visa for more than 28 days can lead to a 3-year refusal" },
      { label: "Exception", value: "Compelling or compassionate", note: "Interests of Australia, or of an Australian citizen, permanent resident or eligible New Zealand citizen" },
      { label: "Permanent exclusion", value: "Section 501 after departure", note: "Special Return Criterion 5001 cannot be met unless the decision is revoked" },
      { label: "Debts to the Commonwealth", value: "PIC 4004", note: "Removal or detention debts must be paid or arranged before most visas are granted" },
    ],
    whoFor: [
      "Your visa was cancelled in Australia and you want to apply for a new visa from overseas.",
      "You overstayed your visa by more than 28 days and left Australia, and a visitor or student visa has since been refused.",
      "You were told in writing that an exclusion period applies and want to know whether it can be set aside.",
      "You were removed from Australia and have a debt for removal costs.",
      "You are sponsoring a partner or relative who has an exclusion period and need to show compelling circumstances.",
    ],
    eligibility: [
      {
        title: "PIC 4013: cancellation in the last 3 years",
        detail:
          "An applicant is affected by a risk factor if a visa they held was cancelled under section 109 (incorrect information), section 116 (including breach of a condition, risk to the community, false information or no longer being a genuine student), section 128 (cancellation while outside Australia) or section 140 (family members), and the application is made within 3 years after the cancellation.",
        legal: "PIC 4013 (Sch 4); Migration Act 1958, ss 109, 116, 128 and 140",
      },
      {
        title: "PIC 4014: departure after being unlawful",
        detail:
          "An applicant is affected by a risk factor if they last left Australia as an unlawful non-citizen, or as the holder of a Bridging visa C, D or E granted after they became unlawful, and the application is made within 3 years after that departure. Home Affairs states the ban can apply where you left Australia after not holding a valid visa for more than 28 days.",
        legal: "PIC 4014 (Sch 4)",
      },
      {
        title: "The compelling circumstances exception",
        detail:
          "The visa can still be granted within the 3 years if the Minister is satisfied that compelling circumstances that affect the interests of Australia, or compassionate or compelling circumstances that affect the interests of an Australian citizen, Australian permanent resident or eligible New Zealand citizen, justify the grant.",
        legal: "PIC 4013(1) and PIC 4014(1) (Sch 4)",
      },
      {
        title: "Which visas apply the criteria",
        detail:
          "PIC 4013 and 4014 are criteria for most temporary visas, including visitor, student, working holiday and temporary work visas. Home Affairs states that you can still apply for a temporary visa during a ban and ask for it to be set aside, and that for permanent visas your immigration history is considered when the application is decided.",
        legal: "Migration Regulations 1994, Sch 2 (time-of-decision criteria for each subclass)",
      },
      {
        title: "How to ask for the ban to be set aside",
        detail:
          "Explain in writing, when you lodge the visa application or before a decision is made, why the Department should waive the ban and grant the visa, with evidence of the compassionate or compelling circumstances. Home Affairs states that failing to provide this results in refusal, and that you must still meet the visa's other criteria, including health and character.",
        legal: "PIC 4013 and 4014 (Sch 4)",
      },
      {
        title: "Debts to the Commonwealth",
        detail:
          "Separately from the exclusion periods, most visas require that the applicant has no outstanding debt to the Commonwealth, such as the cost of detention or removal, unless arrangements for payment have been made.",
        legal: "PIC 4004 (Sch 4)",
      },
      {
        title: "Permanent and longer exclusions",
        detail:
          "A person whose visa was refused or cancelled under section 501 and who has left Australia cannot satisfy Special Return Criterion 5001, which most visas require, unless the decision is revoked or the Minister grants a permanent visa. A person removed from Australia must also satisfy Special Return Criterion 5002, which generally requires 12 months to have passed since removal unless there are compelling circumstances.",
        legal: "Migration Regulations 1994, Sch 5 criteria 5001 and 5002",
      },
      {
        title: "Notification of the exclusion period",
        detail:
          "Home Affairs states that if it cancels your visa it tells you in writing what exclusion period applies. If you are unsure, contact the nearest immigration office before applying for a new visa.",
        legal: "Migration Act 1958, s 127",
      },
    ],
    familyNote:
      "A family member's cancellation under section 140 is itself a PIC 4013 risk factor for that person. Where you are sponsoring a partner or child who is affected, evidence of the effect on you as an Australian citizen or permanent resident is the basis of the compelling circumstances exception.",
    documents: [
      {
        group: "Checking the exclusion",
        items: [
          "The cancellation notice stating the exclusion period, or your departure and visa records from VEVO",
          "Any notice of a debt to the Commonwealth and evidence of payment or a payment arrangement",
        ],
      },
      {
        group: "Compelling or compassionate circumstances",
        items: [
          "Evidence of the Australian citizen or permanent resident family members affected and their circumstances",
          "Medical, financial or other evidence of hardship if the visa is refused",
          "Evidence of circumstances affecting Australia's interests, such as an employer's need where relevant",
          "A written explanation of how the overstay or cancellation came about and what has changed",
        ],
      },
    ],
    steps: [
      {
        title: "Identify which risk factor applies",
        description:
          "Check whether your visa was cancelled (PIC 4013) or you left Australia after being unlawful for more than 28 days (PIC 4014), and the date the 3 years started.",
        output: "The criterion and the end date of the exclusion period",
      },
      {
        title: "Decide whether to wait or apply now",
        description:
          "After 3 years the risk factor no longer applies, although your history is still considered. Within 3 years you need the compelling circumstances exception.",
        output: "A decision on timing",
      },
      {
        title: "Pay or arrange any Commonwealth debt",
        description:
          "Removal and detention costs are debts to the Commonwealth. Pay them or make an approved arrangement so PIC 4004 is met.",
        output: "Evidence that PIC 4004 is satisfied",
      },
      {
        title: "Prepare the written explanation",
        description:
          "Set out the compassionate or compelling circumstances, focusing on Australian citizens, permanent residents or eligible New Zealand citizens affected, or on Australia's interests, with documents.",
        output: "A submission and evidence for the exception",
      },
      {
        title: "Lodge the visa with the explanation",
        description:
          "Provide the explanation when you lodge, or before the decision, and meet all the other criteria of the visa including health and character.",
        output: "A complete application addressing the exclusion period",
      },
    ],
    costs: [
      { item: "Request to set aside a re-entry ban", amount: "A$0", note: "Made within the visa application; no separate charge" },
      { item: "Visa application charge", amount: "Varies by visa", note: "For example a Visitor (subclass 600) Tourist stream application from outside Australia is A$250" },
      { item: "Repayment of removal or detention costs", amount: "Varies", note: "Required or arranged before grant under PIC 4004" },
    ],
    afterGrant: [
      "An exclusion period does not disappear if a visa is granted under the exception; the risk factor still exists for other applications made within the 3 years.",
      "Keep evidence of the circumstances and of any repayment arrangement for later applications.",
      "A later overstay or cancellation starts a new 3-year period and weighs heavily on genuineness assessments for temporary visas.",
    ],
    pathways: [
      {
        title: "Visa cancellation and the Notice of Intention",
        description: "How cancellations arise and how to respond before one is made.",
        href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
      },
      {
        title: "Character test (section 501)",
        description: "The permanent exclusion that follows a character refusal or cancellation.",
        href: "/visas/appeals-and-review/character-test-section-501",
      },
      {
        title: "Visitor visa (subclass 600)",
        description: "A temporary visa that applies PIC 4013 and 4014 and allows a written request to set aside a ban.",
        href: "/visas/other-visas/visitor-visa-600",
      },
      {
        title: "Partner visa (subclasses 309 and 100)",
        description: "An offshore permanent pathway where immigration history is weighed but the 3-year criteria do not apply.",
        href: "/visas/family/partner-visa-offshore-309-100",
      },
    ],
    risks: [
      "Lodging a temporary visa during the 3 years without a written explanation, which Home Affairs says leads to refusal.",
      "Assuming the ban is removed by waiting: after 3 years the criterion is met, but the history still affects genuineness assessments.",
      "Not realising that a family member's section 140 cancellation gives that person their own 3-year risk factor.",
      "Ignoring a removal or detention debt, which fails PIC 4004 regardless of the exclusion period.",
      "Confusing a 3-year exclusion with the permanent exclusion after a section 501 decision.",
      "Overstaying by more than 28 days before leaving, which turns a simple overstay into a PIC 4014 risk factor.",
    ],
    faqs: [
      {
        question: "What is a re-entry ban?",
        answer:
          "Home Affairs' term for an exclusion period: a period, usually up to 3 years, during which a person may be refused further visas. It arises under PIC 4013 after a visa cancellation and under PIC 4014 after leaving Australia as an unlawful non-citizen. Some people, such as those refused or cancelled under section 501, are excluded permanently.",
      },
      {
        question: "How long is the exclusion after a cancellation?",
        answer:
          "Three years from the cancellation under PIC 4013 for cancellations under sections 109, 116, 128 and 140. The Department tells you in writing what exclusion period applies when it cancels your visa.",
      },
      {
        question: "Does overstaying always lead to a ban?",
        answer:
          "No. Home Affairs states that leaving Australia after not holding a valid visa for more than 28 days can lead to refusal of another visa for up to 3 years. Leaving within 28 days, or on a bridging visa obtained within that time, generally avoids the PIC 4014 risk factor.",
      },
      {
        question: "Can the ban be waived?",
        answer:
          "The criterion can be met during the 3 years if compelling circumstances affecting the interests of Australia, or compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen, justify the grant. You explain this in writing with your visa application.",
      },
      {
        question: "Do the exclusion periods apply to permanent visas?",
        answer:
          "PIC 4013 and 4014 are criteria for most temporary visas. Home Affairs states that you can still apply for a permanent visa during a ban and that your immigration history is considered when the application is decided.",
      },
      {
        question: "What if I owe money for my removal?",
        answer:
          "Detention and removal costs are debts to the Commonwealth. Under PIC 4004 most visas cannot be granted while a debt is outstanding unless arrangements for payment have been made, whatever the position under PIC 4013 or 4014.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, PIC 4004, 4013 and 4014 (Sch 4); Special Return Criteria 5001 and 5002 (Sch 5)", url: REGS },
      { label: "Migration Act 1958, ss 109, 116, 127, 128, 140, 198 and 501", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Re-entry ban", url: HA_REENTRY },
      { label: "Home Affairs: If you don't have a valid visa", url: HA_NO_VISA },
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "Home Affairs: Character requirements for visas", url: HA_CHARACTER },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing" },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "Visa cancellation and the Notice of Intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "PIC 4020: fraud and false information", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
      { label: "Character test (section 501)", href: "/visas/appeals-and-review/character-test-section-501" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
    ],
    keywords: [
      "PIC 4013",
      "PIC 4014",
      "re-entry ban Australia",
      "3 year exclusion period visa",
      "overstayed visa ban Australia",
      "exclusion period after visa cancellation",
      "re-entry ban waiver compelling circumstances",
      "special return criteria 5001",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 13. Natural justice and adverse information
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "natural-justice-and-adverse-information",
    category: "appeals-and-review",
    kind: "guide",
    name: "Natural justice and adverse information",
    title: "Natural justice: adverse information and your right to respond",
    seoTitle: "Natural justice in visa decisions: s 57 letters and s 359A",
    seoDescription:
      "Answering adverse information before a visa decision in 2026: ss 55 to 57 of the Migration Act, s 119 cancellation notices and the ART's s 359A duty.",
    intro:
      "Before refusing most onshore visa applications the Department must give the applicant particulars of adverse information it intends to rely on and a chance to comment, and before cancelling a visa it must usually issue a notice and invite a response. The Administrative Review Tribunal has a similar duty under section 359A. A well-organised, timely response is often the difference between refusal and grant, and a failure by the decision-maker to follow these steps can be a jurisdictional error.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Apply in Australia", "Apply outside Australia"],
    keyFacts: [
      { label: "Section 57", value: "Adverse information must be put to you", note: "Particulars, why it is relevant and an invitation to comment, for onshore reviewable applications" },
      { label: "Sections 55 and 56", value: "Giving and seeking information", note: "You may give information until the decision; the Department may ask for more" },
      { label: "Response period", value: "Set in the letter", note: "Prescribed by reg 2.15; written responses by onshore applicants are commonly given 28 days" },
      { label: "Cancellation", value: "Section 119 notice", note: "Particulars of the ground and an invitation to respond within a specified time" },
      { label: "ART", value: "Section 359A", note: "The Tribunal must give you particulars of adverse information it may rely on and invite comment" },
      { label: "If it is not done", value: "Possible jurisdictional error", note: "A ground for judicial review within 35 days of the decision" },
    ],
    whoFor: [
      "You received a letter headed 'natural justice' or 'invitation to comment' about information the Department holds.",
      "The Department says an employer, education provider or family member gave information that contradicts your application.",
      "You received a section 119 Notice of Intention to Consider Cancellation.",
      "The ART has written to you under section 359A about information that may be the reason for affirming the refusal.",
      "Your visa was refused on information you were never shown and you are considering judicial review.",
    ],
    eligibility: [
      {
        title: "The Department must consider everything you give it",
        detail:
          "In deciding a visa application the Minister must have regard to all the information in the application, and you may give further information at any time before the decision is made. The Department is not obliged to wait for information it has not asked for, so give it promptly.",
        legal: "Migration Act 1958, ss 54 and 55",
      },
      {
        title: "The Department may ask for more",
        detail:
          "The Minister may get any information considered relevant and may invite you to give additional information in writing or at an interview. The invitation states how and by when to respond.",
        legal: "Migration Act 1958, ss 56 and 58",
      },
      {
        title: "Adverse information must be put to you",
        detail:
          "If information would be the reason, or part of the reason, for refusing, is specifically about you or another person and not just a class of persons, and was not given by you, the Minister must give you particulars of it, explain why it is relevant and invite you to comment. This applies to visas that can be granted while you are in Australia and whose refusal is reviewable by the Tribunal.",
        legal: "Migration Act 1958, s 57",
      },
      {
        title: "The response period",
        detail:
          "The period for responding to an invitation is prescribed by regulation 2.15 and stated in the letter. Written responses by applicants in Australia are commonly given 28 days; shorter periods apply to interviews and to people in immigration detention. Ask in writing before the period ends if you need an extension.",
        legal: "Migration Act 1958, s 58; Migration Regulations 1994, reg 2.15",
      },
      {
        title: "If you do not respond",
        detail:
          "If you do not respond within the period the Minister may make the decision on the information available without taking further action to obtain your views.",
        legal: "Migration Act 1958, s 62",
      },
      {
        title: "Cancellation: notice and adverse information",
        detail:
          "Before cancelling a visa under section 116 while you are in Australia the Department must give notice of the ground and invite you to show that it does not exist or that there is a reason not to cancel, and must give you particulars of any adverse information relevant to the decision and an opportunity to comment.",
        legal: "Migration Act 1958, ss 119 and 120",
      },
      {
        title: "The Tribunal's duty under section 359A",
        detail:
          "The Tribunal must give you clear particulars of information it considers would be the reason, or part of the reason, for affirming the decision, explain why it is relevant and invite your comment or response, in writing or orally at the hearing. The duty does not extend to general information about a class of persons, to information you gave for the review, or to information you gave the Department in writing during the original process.",
        legal: "Migration Act 1958, ss 359A and 359AA",
      },
      {
        title: "The code of procedure is exhaustive",
        detail:
          "Division 5 of Part 5 of the Act is an exhaustive statement of the natural justice hearing rule for the Tribunal's review. The Tribunal must also invite you to a hearing unless it decides in your favour on the papers or you do not respond to an invitation to give information.",
        legal: "Migration Act 1958, ss 357A and 360",
      },
      {
        title: "Protected and non-disclosable information",
        detail:
          "Some information cannot be disclosed, including information given in confidence by law enforcement or intelligence agencies in character matters. The decision-maker may rely on it without showing it to you, which limits what a response can address.",
        legal: "Migration Act 1958, ss 5(1) (non-disclosable information) and 503A",
      },
    ],
    familyNote:
      "A natural justice letter about one applicant usually affects every family member in the application. The primary applicant should respond on behalf of the family and address the effect on dependants, and each adult should sign any statutory declaration about their own circumstances.",
    documents: [
      {
        group: "Responding to a natural justice letter or notice",
        items: [
          "A written response that quotes each item of adverse information and answers it in turn",
          "Documents that contradict or explain the information, such as employment records, academic transcripts, bank records or correspondence",
          "Statutory declarations from you and from witnesses with direct knowledge",
          "A written request for an extension of time if needed, lodged before the period ends",
          "Form 956 if a registered migration agent or lawyer will respond on your behalf",
        ],
      },
    ],
    steps: [
      {
        title: "Read the letter and diarise the deadline",
        description:
          "Identify the section relied on (57, 119 or 359A), each piece of adverse information, why the decision-maker says it is relevant, and the date and method for responding.",
        output: "A list of the allegations and a confirmed deadline",
      },
      {
        title: "Ask for the material if you do not have it",
        description:
          "If the letter summarises documents or interviews you have not seen, ask for copies. At the Tribunal, request the Department's written material under section 362A as early as possible.",
        output: "Copies of the information relied on",
      },
      {
        title: "Gather evidence that answers each point",
        description:
          "Prioritise independent documents over assertions: records from employers, providers or government agencies, and statements from people with direct knowledge. Explain any inconsistency honestly rather than ignoring it.",
        output: "Evidence organised against each allegation",
      },
      {
        title: "Write a structured response",
        description:
          "For each item: what the decision-maker says, what actually happened, the evidence attached, and why the item should not lead to refusal or cancellation. Address the relevant visa criteria or cancellation ground directly.",
        output: "A written response with an index of attachments",
      },
      {
        title: "Lodge in time and keep proof",
        description:
          "Respond in the way the letter requires, within the period, and keep the lodgement receipt. If you need more time, seek an extension before the period ends.",
        output: "Proof that the response was received in time",
      },
      {
        title: "Follow through at the hearing or in court",
        description:
          "At an ART hearing the member may put adverse information to you orally under section 359AA; you can ask for time to respond in writing. If a decision was made on information you were never given a chance to answer, seek advice about judicial review within 35 days.",
        output: "A complete record of the process for any review",
      },
    ],
    costs: [
      { item: "Responding to a natural justice letter or notice", amount: "A$0", note: "No departmental or Tribunal charge" },
      { item: "ART review of a refusal or cancellation", amount: "A$3,727", note: "1 July 2026 fee; 50% reduction for financial hardship" },
      { item: "Judicial review filing fee (FCFCOA)", amount: "A$4,180", note: "From 1 July 2026; A$2,090 reduced fee if approved" },
      { item: "Statutory declarations, expert reports and translations", amount: "Typical third-party costs", note: "Varies with the evidence" },
    ],
    afterGrant: [
      "Information you give in a response becomes part of your record and is checked against future applications, so keep copies and be consistent.",
      "If the Department or Tribunal accepts your response and grants or restores the visa, the same information can still be relevant to later character or integrity assessments.",
      "If the decision goes against you, the response and the decision-maker's treatment of it are the foundation of any ART or court challenge.",
    ],
    pathways: [
      {
        title: "ART review of a visa refusal",
        description: "The merits review that follows a refusal, with its own section 359A process.",
        href: "/visas/appeals-and-review/art-review-of-visa-refusal",
      },
      {
        title: "Visa cancellation and the Notice of Intention",
        description: "The section 119 process and what a cancellation response should contain.",
        href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
      },
      {
        title: "PIC 4020: fraud and false information",
        description: "The most common subject of natural justice letters.",
        href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information",
      },
      {
        title: "Judicial review of migration decisions",
        description: "Court review where procedural fairness was denied.",
        href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
      },
    ],
    risks: [
      "Not responding, so the decision is made on the adverse information alone under section 62.",
      "Responding with argument but no documents, when the allegation is factual and checkable.",
      "Giving a different account from earlier statements, which turns a procedural issue into a credibility finding.",
      "Missing the deadline and asking for an extension only after the period has ended.",
      "Assuming the Department must give you everything on its file; non-disclosable and protected information can be withheld.",
      "Not raising, at the ART hearing, that the Department failed to put information to you, and then relying on it only in court.",
    ],
    faqs: [
      {
        question: "What is a section 57 letter?",
        answer:
          "A letter in which the Department gives you particulars of information that would be a reason for refusing your visa, explains why it is relevant and invites you to comment. It is required where the information is specifically about you, was not given by you, and the visa is one that can be granted onshore and whose refusal is reviewable by the Tribunal.",
      },
      {
        question: "How long do I have to respond?",
        answer:
          "The letter states the period, which is prescribed by regulation 2.15. Written responses from applicants in Australia are commonly given 28 days; interviews and people in detention have shorter periods. You can ask in writing for an extension before the period ends, and the Department can grant one.",
      },
      {
        question: "Does section 57 apply to offshore applications?",
        answer:
          "Not where the visa cannot be granted while the applicant is in Australia or the refusal is not reviewable by the Tribunal. Decision-makers still commonly invite comment as a matter of policy, and sponsored applications reviewable through the sponsor attract the duty.",
      },
      {
        question: "What does the ART have to show me?",
        answer:
          "Under section 359A the Tribunal must give you clear particulars of information it considers would be the reason, or part of the reason, for affirming the decision, explain why it is relevant and invite your comment, in writing or orally at the hearing. It does not have to put general country information or information you gave for the review.",
      },
      {
        question: "What if the Department relied on information I never saw?",
        answer:
          "If section 57 applied and was not followed, the decision may be affected by jurisdictional error. The usual path is ART review, where you can answer the information on the merits; if the Tribunal also fails to put adverse information to you, judicial review in the Federal Circuit and Family Court within 35 days is available.",
      },
      {
        question: "What should a good response look like?",
        answer:
          "Quote each allegation, state the facts, attach independent evidence, explain any inconsistency, and link the answer to the visa criterion or cancellation ground. Keep it factual, consistent with earlier statements and lodged with proof before the deadline.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 5(1), 54, 55, 56, 57, 58, 62, 119, 120, 357A, 359, 359A, 359AA, 360, 362A and 503A", url: ACT },
      { label: "Migration Regulations 1994, reg 2.15", url: REGS },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "ART Migration, Protection and Character Practice Direction 2026", url: ART_PD },
    ],
    sources: [
      { label: "Home Affairs: Cancelling a visa", url: HA_CANCEL },
      { label: "Home Affairs: Character requirements for visas", url: HA_CHARACTER },
      { label: "ART: Immigration and citizenship reviews", url: ART_IMMI },
      { label: "ART: Information about hearings (MR18)", url: ART_MR18 },
      { label: "ART Migration, Protection and Character Practice Direction 2026", url: ART_PD },
      { label: "FCFCOA: Migration overview for applicants", url: FCFCOA_OVERVIEW },
    ],
    related: [
      { label: "ART review service", href: "/services/art-reviews" },
      { label: "Book a consultation", href: "/bookings" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { label: "Visa cancellation and the Notice of Intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "PIC 4020: fraud and false information", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
      { label: "Judicial review of migration decisions", href: "/visas/appeals-and-review/judicial-review-of-migration-decisions" },
    ],
    keywords: [
      "natural justice letter visa",
      "section 57 Migration Act",
      "adverse information visa response",
      "invitation to comment Home Affairs",
      "section 359A ART",
      "procedural fairness visa refusal",
      "section 56 request for information",
      "how to respond to natural justice letter",
    ],
  },
];
