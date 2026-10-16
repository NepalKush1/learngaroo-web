import type { VisaPage } from "./types";

// ─────────────────────────────────────────────────────────────────────────
// SKILLED VISAS — subclass 189, 190, 491, 191, 485 and 858 pages plus the
// points test, SkillSelect and skills assessment guides. Every figure was
// read from the Department of Home Affairs pages listed under `sources` on
// 12 October 2026 (visa application charges from 1 July 2026).
// ─────────────────────────────────────────────────────────────────────────

const REGS = "https://www.legislation.gov.au/F1996B03551/latest/text";
const ACT = "https://www.legislation.gov.au/C1958A00062/latest/text";
const LIN_19_051 = "https://www.legislation.gov.au/Details/F2019C00855";
const LIN_19_210 = "https://www.legislation.gov.au/F2019L01400/latest/text";
const LIN_25_016 = "https://www.legislation.gov.au/F2025L00905/latest/text";
const LIN_25_014 = "https://www.legislation.gov.au/F2025L00904/asmade/text";
const HA = "https://immi.homeaffairs.gov.au";
const PROCESSING_TIMES = `${HA}/visas/getting-a-visa/visa-processing-times/global-visa-processing-times`;
const FEES_PAGE = `${HA}/visas/getting-a-visa/fees-and-charges/current-visa-pricing`;
const CONDITIONS_TOOL = `${HA}/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions`;
const SKILLSELECT = `${HA}/visas/working-in-australia/skillselect`;
const SKILLS_ASSESSMENT = `${HA}/visas/working-in-australia/skills-assessment`;
const OCCUPATION_LIST = `${HA}/visas/working-in-australia/skill-occupation-list`;
const ENGLISH = `${HA}/help-support/meeting-our-requirements/english-language`;
const HEALTH = `${HA}/help-support/meeting-our-requirements/health`;
const CHARACTER = `${HA}/help-support/meeting-our-requirements/character`;
const FACTS_AS_AT = "12 October 2026";

export const skilledPages: VisaPage[] = [
  // ───────────────────────────── Subclass 189 ─────────────────────────────
  {
    slug: "skilled-independent-visa-189",
    category: "skilled",
    kind: "visa",
    subclass: "189",
    name: "Skilled Independent visa",
    title: "Skilled Independent visa (subclass 189)",
    seoTitle: "Subclass 189 Skilled Independent visa: points, cost, PR",
    seoDescription:
      "Subclass 189 visa 2026: SkillSelect invitation, 65-point pass mark, skills assessment, under 45, competent English, no sponsor. A$6,135 from 1 July 2026.",
    intro:
      "The Skilled Independent visa (subclass 189) is a permanent, points-tested visa for skilled workers who do not need an employer, state or family sponsor. You lodge an expression of interest in SkillSelect and, if your points rank high enough in an invitation round, you are invited to apply within 60 days. It gives permanent residence from the day of grant and leads to Australian citizenship once you meet the residence requirement.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Points tested", "Invitation only", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$6,135", note: "Primary applicant, Points-tested stream, 1 July 2026 charge" },
      { label: "Length of stay", value: "Permanent", note: "Travel facility for 5 years from grant, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Unrestricted", note: "Live, work and study anywhere in Australia" },
      { label: "Pathway to permanent residence", value: "Permanent on grant", note: "Citizenship by conferral once you meet the residence requirement" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging A, B or C visa; you can be in or outside Australia at decision" },
      { label: "Sponsor or nomination", value: "None", note: "The Department invites you from SkillSelect on your points ranking" },
    ],
    alert: {
      title: "New Zealand stream closed to new applications",
      body: "The Home Affairs page for the subclass 189 New Zealand stream states that the stream is closed to new applications. New Zealand citizens who live in Australia on a Special Category visa (subclass 444) should look at citizenship by conferral or at the Points-tested stream.",
      href: "/visas/other-visas/australian-citizenship-by-conferral",
      linkLabel: "Australian citizenship by conferral",
    },
    streams: [
      {
        name: "Points-tested stream",
        summary: "An invitation-only stream for skilled workers who score at least 65 points and have an occupation on the subclass 189 skilled occupation list.",
        forWhom: "Skilled workers under 45 with a positive skills assessment and competent English who can rank competitively in SkillSelect.",
        stay: "Permanent",
        cost: "A$6,135 base charge",
        prPathway: "Permanent on grant",
      },
      {
        name: "New Zealand stream",
        summary: "A stream for New Zealand citizens who had lived in Australia on a Special Category visa for an extended period. Home Affairs states it is closed to new applications.",
        forWhom: "Not available to new applicants. Eligible New Zealand citizens should look at citizenship by conferral.",
        stay: "Permanent (for visas already applied for)",
        cost: "Closed to new applications",
        prPathway: "Permanent on grant",
      },
      {
        name: "Hong Kong stream",
        summary: "For Hong Kong or British National (Overseas) passport holders who have held an eligible subclass 457, 482 or 485 visa for at least 4 years and have been usually resident in Australia for a continuous 4 years.",
        forWhom: "Hong Kong and BNO passport holders settled in Australia on a temporary skilled or graduate visa who have complied with their visa conditions.",
        stay: "Permanent",
        cost: "A$6,135 base charge",
        prPathway: "Permanent on grant",
      },
    ],
    whoFor: [
      "You have an occupation on the subclass 189 skilled occupation list, a positive skills assessment and can score 65 points or more without a state or employer.",
      "You are under 45, have competent English and want to live anywhere in Australia with no regional or employer conditions.",
      "You hold a Temporary Graduate visa (subclass 485), have gained skilled work experience in Australia and want a permanent visa without sponsorship.",
      "You hold a subclass 491 or 494 visa, have held it for at least 3 years and can now reach a competitive points score.",
      "You hold a Hong Kong or BNO passport, have held a subclass 457, 482 or 485 visa for 4 years and have lived in Australia for a continuous 4 years.",
    ],
    eligibility: [
      {
        title: "Invited to apply through SkillSelect",
        detail: "You can only apply after the Department invites you. Lodge an expression of interest (EOI) in SkillSelect. EOIs are ranked by points score, and equal scores are ranked by the date your EOI reached that score. Once invited you have 60 calendar days to lodge and the Department will not extend that period. One EOI can be invited at most twice; if you do not apply after the second invitation the EOI is removed. An EOI is not a visa application and does not give you a bridging visa.",
        legal: "Migration Regulations 1994, Sch 1 item 1137; Migration Act 1958, s 46",
      },
      {
        title: "Occupation on the subclass 189 skilled occupation list",
        detail: "Your nominated occupation must be on the list of eligible skilled occupations for the subclass 189 Points-tested stream. The occupations and the assessing authority for each are specified in LIN 19/051 (Specification of Occupations and Relevant Assessing Authorities). Home Affairs uses the 2013 version of ANZSCO for this visa. Check the occupation search on this site before you lodge an EOI.",
        legal: "Migration Regulations 1994, Sch 2 Part 189; LIN 19/051",
      },
      {
        title: "Suitable skills assessment at the time of invitation",
        detail: "The relevant assessing authority must have assessed your skills as suitable for your nominated occupation. The assessment must have been obtained in the 3 years before the invitation date, or within a shorter validity period if one is stated on it. Following Thapa v Minister for Immigration [2021] FCCA 686, the Department accepts an assessment obtained within the 60-day invitation period. An assessment issued for a subclass 485 visa is not suitable. If the assessment relied on an Australian qualification gained on a student visa, the course must have been registered on CRICOS. Medical practitioners can rely on AHPRA general or unconditional registration (or conditional specialist registration) and lawyers on admission to practise in a state or territory.",
        legal: "Migration Regulations 1994, Sch 2 Part 189 (criteria at time of invitation)",
      },
      {
        title: "Under 45 when invited",
        detail: "You must not have turned 45 when the invitation is issued. Turning 45 after the invitation does not stop you applying. If you turn 45 after lodging your EOI but before an invitation, you will not be invited, and the Department will not process an application from someone who was 45 at invitation.",
        legal: "Migration Regulations 1994, Sch 2 Part 189",
      },
      {
        title: "At least 65 points, and the score on your invitation",
        detail: "SkillSelect gives you an indicative score from your EOI claims; you are not invited below 65. The pass mark is set by LIN 19/210. Your invitation states the score you must reach at decision, which can be higher than 65, and you must prove every claim with documents. Points come from age, English, skilled employment inside and outside Australia, qualifications, specialist education, Australian study, regional study, a Professional Year, a NAATI community language credential and partner skills.",
        legal: "Migration Act 1958, ss 92–96; Migration Regulations 1994, reg 2.26AC and Sch 6D; LIN 19/210",
      },
      {
        title: "Competent English at the time of invitation",
        detail: "You need at least competent English on an approved test taken at a secure test centre, or a valid passport from the United Kingdom, Ireland, the United States, Canada or New Zealand. The approved tests and scores are listed in LIN 25/016 and on the Home Affairs English language page. Online (remote-proctored) tests are not accepted. Proficient and superior English earn 10 and 20 points.",
        legal: "Migration Regulations 1994, Sch 2 Part 189; LIN 25/016",
      },
      {
        title: "Hold a substantive visa or a Bridging A, B or C visa if you apply in Australia",
        detail: "An onshore applicant must hold a substantive visa or a subclass 010, 020 or 030 bridging visa when the application is lodged, or it is not processed. You cannot be in immigration clearance. If you hold, or last held, a subclass 491 or 494 visa, you must have held it for at least 3 years before applying.",
        legal: "Migration Regulations 1994, Sch 1 item 1137",
      },
      {
        title: "Health requirement",
        detail: "You and every family member included in the application must meet the health requirement, and non-migrating family members may be asked to. A Medical Officer of the Commonwealth assesses whether a condition would cost the community significantly or prejudice access to services in short supply. The Department prefers that you complete health examinations before you lodge.",
        legal: "PIC 4005 (Sch 4)",
      },
      {
        title: "Character requirement",
        detail: "You and family members aged 16 or over must meet the character test, including family members who are not migrating. Provide an Australian Federal Police complete disclosure certificate if you spent 12 months or more in Australia in the last 10 years since turning 16, police certificates from every other such country, military records where relevant, and Forms 80 and 1221.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "True information, no government debt and the values statement",
        detail: "Every claim in your EOI and application must be accurate. False or misleading information or a bogus document leads to refusal under PIC 4020 and a bar on most visas for 3 years. Money owed to the Australian Government must be repaid or under an arrangement, and applicants aged 18 or over must sign the Australian Values Statement.",
        legal: "PIC 4004, 4019 and 4020 (Sch 4)",
      },
      {
        title: "Hong Kong stream: eligible visa and 4 years' residence",
        detail: "Hold a Hong Kong or British National (Overseas) passport and a subclass 457, 482 or 485 visa granted to you as the primary applicant, held for at least 4 years (visas cannot be combined; a visa granted on or after 9 July 2020 must be valid for 5 years). Be usually resident in Australia for a continuous 4 years immediately before applying, have complied with your visa conditions, and have functional English at decision or pay the second instalment.",
        legal: "Migration Regulations 1994, Sch 2 Part 189 (Hong Kong stream)",
      },
    ],
    familyNote:
      "You can include your partner and dependent children when you lodge, or add them after lodging and before a decision with Form 1436. Every family member included must meet health and character requirements; family members who are not migrating must meet character and may be asked to complete health examinations. A child aged 18 to 22 must be dependent on you or your partner, and a child who turns 23 during processing can stay in the application only if dependent because of a physical or cognitive limitation. Each applicant aged 18 or over without functional English attracts a second instalment charge before grant.",
    documents: [
      {
        group: "Identity and relationships",
        items: [
          "Current passport pages showing your photo, personal details and issue and expiry dates; national identity card if you have one",
          "Change of name evidence (marriage or divorce certificate, registry change of name documents)",
          "Marriage, divorce, death or separation documents for any current or former relationship",
          "A reason why any partner or dependent child is not included (for example they are already a citizen or permanent resident)",
        ],
      },
      {
        group: "Skills, points and English",
        items: [
          "Skills assessment from the authority listed against your occupation, or AHPRA registration (medical practitioners) or evidence of legal admission (barristers and solicitors)",
          "English test report for a test at a secure test centre, or a passport from the UK, Ireland, the USA, Canada or New Zealand",
          "Employment references on company letterhead showing the street address, contact details, exact period, position, duties, hours and salary, supported by payslips, contracts, tax statements and superannuation records; the Department rejects a reference that only carries an illegible signature",
          "Qualification certificates and transcripts; for Australian study and regional study, a completion letter stating the course dates, campus location, mode of study and language of instruction",
          "Professional Year record of completion, NAATI credential and partner evidence (age, English, skills assessment, same occupation list) for any partner points",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Australian Federal Police complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years since turning 16 (valid 12 months for immigration purposes)",
          "Overseas police certificates from every country, including your home country, where you spent 12 months or more in the last 10 years since turning 16",
          "Military service or discharge records if you served in any armed forces",
          "Form 80 Personal particulars for assessment and Form 1221 Additional personal particulars",
        ],
      },
      {
        group: "Family members",
        items: [
          "Partner identity, character and relationship evidence (joint accounts, leases, bills, same address) and registration or 12 months of de facto evidence",
          "Birth certificates or family book for children, and Form 1229 consent, a court order or a statutory declaration from any parent with legal responsibility who is not migrating",
          "Form 47a and financial dependency evidence for a child aged 18 to 22, plus a medical report where the child is 23 or will turn 23",
          "Functional English evidence for each family member aged 18 or over, or a statement that you will pay the second instalment",
        ],
      },
    ],
    steps: [
      {
        title: "Check your occupation and get a skills assessment",
        description: "Confirm your occupation is on the subclass 189 list and apply to the assessing authority listed against it. Each authority has its own procedure, evidence rules and fees, and the assessment must still be valid when you are invited.",
        output: "You hold: a positive skills assessment valid for 3 years, or for the shorter period stated on it",
      },
      {
        title: "Sit an English test and collect your points evidence",
        description: "Take an approved test at a secure test centre and gather references, payslips, transcripts and completion letters for every points claim. Only employment of at least 20 hours a week at the skilled level in the 10 years before invitation counts.",
        output: "You hold: evidence for every points claim and an English result that will be valid at invitation",
      },
      {
        title: "Lodge an expression of interest in SkillSelect",
        description: "There is no charge and you do not upload documents. SkillSelect calculates an indicative score. Your EOI stays active for 2 years and you can update it at any time before an invitation; an EOI does not give you a bridging visa, so keep a valid visa if you are in Australia.",
        output: "You hold: an EOI with an indicative score of at least 65 points",
      },
      {
        title: "Wait for an invitation round",
        description: "The Department runs invitation rounds periodically. The highest-ranked EOIs are invited first, equal scores are separated by date of effect, and occupation ceilings can limit invitations in large occupation groups. Getting an invitation does not mean the visa will be granted.",
        output: "You hold: an invitation stating the points score you must prove",
      },
      {
        title: "Apply within 60 days in ImmiAccount",
        description: "Open the invitation in SkillSelect, select Apply for visa, create or log in to ImmiAccount, attach your documents and pay the charge (A$6,135 for the primary applicant plus a charge for each family member). The application is not processed until the charge is paid. Onshore applicants are usually granted a Bridging visa A.",
        output: "You hold: a lodged application with a transaction reference number, and a Bridging visa A if you applied in Australia",
      },
      {
        title: "Health examinations, biometrics and requests for information",
        description: "Complete any health examinations and biometrics the Department asks for and answer requests within the time given. The Department may decide the application without asking for more documents, so lodge complete evidence at the start.",
        output: "You hold: completed health examinations and a complete file",
      },
      {
        title: "Decision",
        description: "The decision is sent in writing. A grant letter shows the grant number, start date and any condition. If the visa is refused the letter explains why and whether the Administrative Review Tribunal can review the decision; the charge is not refunded.",
        output: "You hold: a permanent visa with residence from the grant date (onshore) or first entry (offshore) and a 5-year travel facility",
      },
    ],
    conditions: [
      {
        code: "8515",
        meaning: "If you are outside Australia when the visa is granted, you must not marry or enter a de facto relationship before you first enter Australia on the visa. The Home Affairs conditions tool lists this as the condition that might be attached to a subclass 189 Points-tested visa.",
      },
    ],
    costs: [
      { item: "Base application charge", amount: "A$6,135", note: "Primary applicant, Points-tested and Hong Kong streams, 1 July 2026 charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,070", note: "Each adult family member included in the application" },
      { item: "Additional applicant under 18", amount: "A$1,540", note: "Points-tested stream; A$1,535 in the Hong Kong stream" },
      { item: "Second instalment (less than functional English)", amount: "Set by the Regulations", note: "Charged for each applicant aged 18 or over without functional English, only if the Department is going to grant the visa. The 189 page did not display the amount on 12 October 2026; the subclass 190 page shows A$4,885" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026 a lower charge applies automatically in ImmiAccount when the primary applicant holds a passport from a listed Pacific Island country or Timor-Leste" },
      { item: "Skills assessment", amount: "Typical third-party cost", note: "Set by each assessing authority; some occupations need more than one stage" },
      { item: "English language test", amount: "Typical third-party cost", note: "Approved test at a secure test centre" },
      { item: "Health examinations, police certificates and biometrics", amount: "Typical third-party cost", note: "Paid to the panel physician, police agencies and collection centre" },
      { item: "Translations", amount: "Typical third-party cost", note: "NAATI-accredited translator in Australia; translators overseas must state their qualifications" },
    ],
    afterGrant: [
      "You become a permanent resident on the day of grant if you are in Australia, or on the day you first enter Australia on the visa if you were outside Australia. That date starts the residence period for citizenship.",
      "If you were granted outside Australia, enter before the initial entry date on your grant letter.",
      "The travel facility lasts 5 years from grant. After that you need a Resident Return visa (subclass 155 or 157) to re-enter as a permanent resident.",
      "You can live, work and study anywhere in Australia, enrol in Medicare, attend AMEP English classes if eligible and sponsor eligible relatives. Newly arrived residents may wait for some government payments.",
      "New Zealand citizens should tell border officers that they hold a subclass 189 visa and do not want a Special Category visa (subclass 444); a 444 grant ceases the permanent visa and affects citizenship eligibility.",
      "Tell the Department if your passport or address changes. A permanent visa can still be cancelled, for example under s 501 (character) or s 109 (incorrect information).",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Apply once you meet the residence requirement, counted from the day your permanent residence started.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Resident Return visa (subclass 155 or 157)", description: "Needed to travel after the 5-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Sponsor your partner", description: "As a permanent resident you can sponsor a partner for a subclass 820/801 or 309/100 visa.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Not competitive for a 189? Consider state nomination", description: "A subclass 190 nomination adds 5 points and does not rely on departmental invitation rounds.", href: "/visas/skilled/skilled-nominated-visa-190" },
    ],
    risks: [
      "Points claimed in the EOI cannot be proved at decision (for example employment below the skilled level, fewer than 20 hours a week, or periods outside the 10-year window), so the score falls below the invited score and the visa is refused.",
      "Skills assessment issued more than 3 years before the invitation, expired under its own validity period, or issued only for a subclass 485 visa.",
      "Turning 45 before the invitation is issued; age is tested at invitation, not when the EOI is lodged.",
      "English test result from an online (remote-proctored) test or taken outside the validity period, so competent English is not met at invitation.",
      "PIC 4020: inconsistent employment references, altered transcripts or undeclared earlier applications lead to refusal and a 3-year bar on most visas.",
      "Applying in Australia without a substantive visa or a Bridging A, B or C visa, or applying as a subclass 491 or 494 holder before 3 years have passed, so the application is not processed.",
      "Expecting an invitation at 65 points: in the 4 June 2026 round the lowest invited score was 65 only in some construction trades and 80 or more in most professional occupations.",
    ],
    faqs: [
      {
        question: "How many points do I need for a subclass 189 visa?",
        answer: "The pass mark set by LIN 19/210 is 65 points, but invitations go to the highest-ranked EOIs in each round. In the 4 June 2026 round the Department issued 10,000 subclass 189 invitations; the lowest invited score was 65 for occupations such as electrician, plumber, carpenter and bricklayer and 80 to 100 for most professional occupations. Use the points calculator on this site to check your score.",
      },
      {
        question: "How long does an EOI last, and how long do I have after an invitation?",
        answer: "An EOI stays active in SkillSelect for 2 years. After an invitation you have 60 calendar days to lodge the visa application, and the Department cannot extend that period. One EOI can be invited twice; if you do not apply after the second invitation it is removed.",
      },
      {
        question: "Can I still apply if I turn 45 after I am invited?",
        answer: "Yes. Age is tested at the time of invitation, so you can lodge within the 60 days even if you have turned 45 by then. If you turn 45 while your EOI is waiting, you will not be invited.",
      },
      {
        question: "Does the 189 visa need a sponsor or state nomination?",
        answer: "No. The 189 is independent: there is no employer, state or family sponsor and no regional condition. That is also why it has no nomination points; the subclass 190 adds 5 points for state nomination and the subclass 491 adds 15 points for nomination or family sponsorship.",
      },
      {
        question: "Can I claim points for my partner?",
        answer: "You get 10 points if your partner is included in the application, was under 45 at invitation, had competent English, nominated an occupation on the same skilled occupation list and held a suitable skills assessment that was not for a subclass 485 visa. You get 5 points if your partner only has competent English, and 10 points if you are single or your partner is an Australian citizen or permanent resident.",
      },
      {
        question: "What does the subclass 189 visa cost in 2026?",
        answer: "From 1 July 2026 the base charge is A$6,135 for the primary applicant, A$3,070 for each additional applicant aged 18 or over and A$1,540 for each child under 18 (A$1,535 in the Hong Kong stream). A second instalment applies to each adult without functional English, and you also pay for the skills assessment, English test, health examinations and police certificates. Applications are not refunded if refused.",
      },
      {
        question: "Is the New Zealand stream still open?",
        answer: "No. Home Affairs states that the subclass 189 New Zealand stream is closed to new applications. New Zealand citizens on a Special Category visa should look at citizenship by conferral or at the Points-tested stream, which they can apply for like any other applicant.",
      },
      {
        question: "Can I travel while the application is being processed?",
        answer: "Yes. You can be in or outside Australia when the decision is made, but not in immigration clearance. If you are in Australia, check in VEVO that your current visa allows you to return; a Bridging visa A does not allow re-entry, so you would need a Bridging visa B before travelling.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 189 (criteria, streams and conditions)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1137 (application requirements and invitation)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.26AC and Sch 6D (points test)", url: REGS },
      { label: "Migration Act 1958, ss 92–96 (points system, pass mark and pool mark)", url: ACT },
      { label: "Migration Act 1958, ss 46, 48, 65, 109 and 501", url: ACT },
      { label: "LIN 19/210: Pool and Pass Marks for General Skilled Migration Visas (65 points)", url: LIN_19_210 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "LIN 25/016: Specification of Language Tests, Test Scores and Passports", url: LIN_25_016 },
      { label: "LIN 25/014: Evidence of Functional English Language Proficiency", url: LIN_25_014 },
      { label: "PIC 4001, 4004, 4005, 4019 and 4020 (Sch 4); condition 8515 (Sch 8)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Skilled Independent visa (subclass 189)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189` },
      { label: "Home Affairs: subclass 189 Points-tested stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested` },
      { label: "Home Affairs: subclass 189 New Zealand stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/new-zealand` },
      { label: "Home Affairs: subclass 189 Hong Kong stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/hong-kong` },
      { label: "Home Affairs: points table for subclass 189", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table` },
      { label: "Home Affairs: Australian study requirement", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement` },
      { label: "Home Affairs: SkillSelect invitation rounds", url: `${SKILLSELECT}/invitation-rounds` },
      { label: "Home Affairs: skills assessment", url: SKILLS_ASSESSMENT },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Skilled migration points test explained", href: "/visas/skilled/skilled-migration-points-test" },
      { label: "SkillSelect expression of interest", href: "/visas/skilled/skillselect-expression-of-interest" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "Skilled Nominated visa (subclass 190)", href: "/visas/skilled/skilled-nominated-visa-190" },
      { label: "Occupation search", href: "/occupations" },
    ],
    keywords: ["189 visa", "subclass 189", "skilled independent visa", "skilled independent visa requirements", "189 visa points", "189 visa cost 2026", "skillselect 189 invitation", "points tested visa australia", "permanent residency without sponsor", "189 visa skills assessment"],
  },
  // ───────────────────────────── Subclass 190 ─────────────────────────────
  {
    slug: "skilled-nominated-visa-190",
    category: "skilled",
    kind: "visa",
    subclass: "190",
    name: "Skilled Nominated visa",
    title: "Skilled Nominated visa (subclass 190)",
    seoTitle: "Subclass 190 Skilled Nominated visa: points, cost, PR",
    seoDescription:
      "Subclass 190 visa 2026: state or territory nomination through SkillSelect, 65 points including 5 nomination points, skills assessment, under 45. A$6,140.",
    intro:
      "The Skilled Nominated visa (subclass 190) is a permanent, points-tested visa for skilled workers nominated by an Australian state or territory government. You lodge an expression of interest in SkillSelect, a state nominates you under its own criteria, and the Department then invites you to apply within 60 days. The nomination adds 5 points and the visa gives permanent residence from grant with no regional condition, leading to citizenship once you meet the residence requirement.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Points tested", "State nomination required", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$6,140", note: "Primary applicant, 1 July 2026 charge" },
      { label: "Length of stay", value: "Permanent", note: "Travel facility for 5 years from grant, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Unrestricted", note: "No visa condition limits where you live or work; check your state's nomination terms" },
      { label: "Pathway to permanent residence", value: "Permanent on grant", note: "Citizenship by conferral once you meet the residence requirement" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging A, B or C visa; decision can be made in or outside Australia" },
      { label: "Sponsor or nomination", value: "State or territory nomination", note: "Nomination adds 5 points; the Department invites you once a state nominates your EOI" },
    ],
    alert: {
      title: "Each state and territory runs its own nomination program",
      body: "Nomination criteria, occupation lists and allocation numbers differ between states and change during the program year. Home Affairs reported subclass 190 nominations from 1 July to 31 August 2026 ranging from none in South Australia and Victoria to 206 in Tasmania, so check the current program before you lodge an EOI.",
      href: "/state-nomination",
      linkLabel: "State nomination guide",
    },
    whoFor: [
      "You have a skilled occupation in demand in a particular state or territory and meet that state's nomination criteria (for example residence, work or a job offer in the state).",
      "You score 60 points on your own and need the 5 nomination points to reach 65, or you cannot rank high enough for a subclass 189 invitation.",
      "You already live and work in a state on a Temporary Graduate (subclass 485), Skills in Demand (subclass 482) or other temporary visa and want a permanent visa through that state.",
      "You hold a subclass 491 or 494 visa, have held it for at least 3 years and now want a permanent skilled visa without a regional condition.",
      "Your occupation is on the state's list but not on the subclass 189 list, so nomination is the only points-tested route.",
    ],
    eligibility: [
      {
        title: "Nominated by a state or territory government agency",
        detail: "Lodge an expression of interest (EOI) in SkillSelect and indicate the states you want to be considered by. Each state and territory agency sets its own criteria, occupation lists, fees and process, and most require a separate application through the state's own portal. When a state nominates you in SkillSelect, the Department issues the invitation. If the state withdraws the nomination after you apply, Home Affairs states your application becomes invalid.",
        legal: "Migration Regulations 1994, Sch 2 Part 190 (nomination criteria)",
      },
      {
        title: "Invited to apply and lodged within 60 days",
        detail: "You can only apply after the Department invites you. Once invited you have 60 calendar days to lodge the application and the Department will not extend that period. If you do not apply after two invitations your EOI is removed from SkillSelect. An EOI is not a visa application and does not give you a bridging visa.",
        legal: "Migration Regulations 1994, Sch 1 item 1138; Migration Act 1958, s 46",
      },
      {
        title: "Occupation on the subclass 190 skilled occupation list",
        detail: "Your nominated occupation must be on the list of eligible skilled occupations for the subclass 190 visa, specified in LIN 19/051 together with the assessing authority for each occupation. The state must also be willing to nominate that occupation; state lists are usually narrower than the Department's list.",
        legal: "Migration Regulations 1994, Sch 2 Part 190; LIN 19/051",
      },
      {
        title: "Suitable skills assessment at the time of invitation",
        detail: "The relevant assessing authority must have assessed your skills as suitable for your nominated occupation. The assessment must have been obtained in the 3 years before the invitation, or within any shorter period stated on it, and must not be one issued for a subclass 485 visa. Following Thapa v Minister for Immigration [2021] FCCA 686, an assessment obtained within the 60-day invitation period is accepted. AHPRA registration (medical practitioners) and legal admission (barristers and solicitors) count as a skills assessment.",
        legal: "Migration Regulations 1994, Sch 2 Part 190 (criteria at time of invitation)",
      },
      {
        title: "Under 45 when invited",
        detail: "You must not have turned 45 when the invitation is issued. You can still apply if you turn 45 during the 60-day period, but you will not be invited if you turn 45 while your EOI is waiting for a nomination.",
        legal: "Migration Regulations 1994, Sch 2 Part 190",
      },
      {
        title: "At least 65 points including 5 points for nomination",
        detail: "SkillSelect gives you an indicative score from your EOI claims and you will not be invited below 65. Your invitation states the score you must prove at decision, which may be higher than 65. The nomination itself earns 5 points provided it is still in effect at decision. All other claims (age, English, employment, qualifications, study, Professional Year, NAATI credential, partner) must be proved with documents.",
        legal: "Migration Act 1958, ss 92–96; Migration Regulations 1994, reg 2.26AC and Sch 6D; LIN 19/210",
      },
      {
        title: "Competent English at the time of invitation",
        detail: "At least competent English on an approved test taken at a secure test centre (listed in LIN 25/016), or a valid passport from the United Kingdom, Ireland, the United States, Canada or New Zealand. Online tests are not accepted. Family members aged 18 or over need functional English or you pay the second instalment of A$4,885 for each of them.",
        legal: "Migration Regulations 1994, Sch 2 Part 190; LIN 25/016; LIN 25/014",
      },
      {
        title: "Hold a substantive visa or a Bridging A, B or C visa if you apply in Australia",
        detail: "An onshore applicant must hold a substantive visa or a subclass 010, 020 or 030 bridging visa when the application is lodged, or the application is not valid. You cannot be in immigration clearance. A current or last-held subclass 491 or 494 visa must have been held for at least 3 years. A person barred by s 48 can apply for a subclass 190 visa in Australia because the subclass is prescribed in reg 2.12.",
        legal: "Migration Regulations 1994, Sch 1 item 1138 and reg 2.12; Migration Act 1958, s 48",
      },
      {
        title: "Health requirement",
        detail: "You and every family member included must meet the health requirement, and non-migrating family members may be asked to. There is no health waiver for this subclass, so a condition likely to cost the community significantly or prejudice access to services in short supply leads to refusal.",
        legal: "PIC 4005 (Sch 4)",
      },
      {
        title: "Character requirement",
        detail: "You and family members aged 16 or over, including those not migrating, must pass the character test. Provide an AFP complete disclosure certificate if you spent 12 months or more in Australia in the last 10 years since turning 16, overseas police certificates for every other such country, military records where relevant, and Forms 80 and 1221.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "True information, no government debt and the values statement",
        detail: "False or misleading information or bogus documents in the EOI, the state nomination or the visa application lead to refusal under PIC 4020 and a 3-year bar. Debts to the Australian Government must be repaid or under an arrangement, and applicants aged 18 or over sign the Australian Values Statement.",
        legal: "PIC 4004, 4019 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "Include your partner and dependent children when you lodge, or add them before a decision with Form 1436. Family members must meet health and character requirements, and family members who are not migrating must meet character and may need health examinations. Children aged 18 to 22 must be dependent on you; a child who turns 23 during processing can only remain included if dependent because of disability. Each applicant aged 18 or over without functional English attracts the A$4,885 second instalment before grant. Tell the Department why any partner or child is not included.",
    documents: [
      {
        group: "Identity and relationships",
        items: [
          "Current passport pages, national identity card and change of name documents",
          "Marriage, divorce, death or separation documents for current and former relationships",
          "A reason why any partner or dependent child is not included",
        ],
      },
      {
        group: "Nomination, skills and points",
        items: [
          "You do not need to attach the state nomination; the Department sees it in SkillSelect. Keep the state's approval letter and any commitment you signed",
          "Skills assessment from the authority listed against your occupation, or AHPRA registration or legal admission evidence",
          "English test report from a secure test centre, or an eligible passport",
          "Employment references on letterhead with street address, period, position, duties, hours and salary, plus payslips, contracts, tax statements and superannuation records",
          "Qualification certificates and transcripts; completion letters for the Australian study and regional study points; Professional Year record; NAATI credential; partner evidence for partner points",
        ],
      },
      {
        group: "Health and character",
        items: [
          "AFP complete disclosure National Police Certificate (if 12 months or more in Australia) and overseas police certificates for every country where you spent 12 months or more in the last 10 years",
          "Military service or discharge records if applicable",
          "Form 80 and Form 1221",
          "Health examinations, preferably completed before you lodge",
        ],
      },
      {
        group: "Family members",
        items: [
          "Partner identity, character and relationship evidence, plus registration or 12 months of de facto evidence",
          "Birth certificates and Form 1229 consent, court order or statutory declaration for children under 18 where a parent is not migrating",
          "Form 47a and dependency evidence for children aged 18 to 22, and a medical report where the child is or will turn 23",
          "Functional English evidence for each applicant aged 18 or over, or confirmation you will pay the second instalment",
        ],
      },
    ],
    steps: [
      {
        title: "Skills assessment and English test",
        description: "Apply to the assessing authority listed against your occupation and sit an approved English test at a secure test centre. Both must be valid when you are invited.",
        output: "You hold: a positive skills assessment valid for 3 years (or the period on it) and a competent English result",
      },
      {
        title: "Choose a state and check its criteria",
        description: "Each state and territory publishes its own occupation list, points expectations, residence or work requirements and fees. Some nominate people living overseas; others only nominate people already working in the state. Use the state nomination guide and the state calculators on this site.",
        output: "You hold: a target state whose current criteria you meet",
      },
      {
        title: "Lodge an EOI in SkillSelect and apply to the state",
        description: "Select the Skilled Nominated visa (subclass 190) and the states you want to consider you. SkillSelect gives an indicative score. Then lodge the state's own nomination application if it requires one; state fees are set by the state.",
        output: "You hold: an EOI with at least 65 points (including nomination points) and a state nomination application",
      },
      {
        title: "Nomination and invitation",
        description: "If the state nominates you, the nomination is recorded in SkillSelect and the Department emails an invitation. State nominations are not limited by departmental invitation rounds or occupation ceilings.",
        output: "You hold: an invitation to apply stating the points score you must prove",
      },
      {
        title: "Apply within 60 days in ImmiAccount",
        description: "Open the invitation in SkillSelect, select Apply for visa, attach your documents and pay A$6,140 for the primary applicant plus the charge for each family member. Onshore applicants are usually granted a Bridging visa A.",
        output: "You hold: a lodged application with a transaction reference number",
      },
      {
        title: "Health, biometrics and requests for information",
        description: "Complete health examinations and biometrics if requested and reply to any request within the time given. The Department can decide the application without asking for more documents.",
        output: "You hold: a complete file with health examinations done",
      },
      {
        title: "Decision",
        description: "The decision is sent in writing with the grant number, start date and any conditions, or the reasons for refusal and whether the Administrative Review Tribunal can review it. Charges are not refunded on refusal.",
        output: "You hold: a permanent visa with residence from grant (onshore) or first entry (offshore)",
      },
    ],
    conditions: [
      { code: "8504", meaning: "If you are granted the visa outside Australia you must enter Australia before the initial entry date in your grant letter." },
      { code: "8515", meaning: "If you are outside Australia when the visa is granted, you must not marry or enter a de facto relationship before you first enter Australia on the visa." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,070", note: "Each adult family member included" },
      { item: "Additional applicant under 18", amount: "A$1,535", note: "Each child included" },
      { item: "Second instalment (less than functional English)", amount: "A$4,885", note: "For each applicant aged 18 or over without functional English, payable only when the Department is ready to grant" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, applied automatically in ImmiAccount based on the primary applicant's passport" },
      { item: "State nomination application fee", amount: "Set by each state", note: "Typical third-party cost; some states charge no fee and some charge several hundred dollars" },
      { item: "Skills assessment and English test", amount: "Typical third-party cost", note: "Set by the assessing authority and test provider" },
      { item: "Health examinations, police certificates, biometrics and translations", amount: "Typical third-party cost", note: "Paid to the provider" },
    ],
    afterGrant: [
      "You become a permanent resident on the day of grant if you are in Australia, or when you first enter Australia if you were outside Australia. Enter before the initial entry date if granted offshore.",
      "The visa has no condition requiring you to stay in the nominating state, but states ask nominees to honour the commitments made in the nomination application. Read your state's terms before moving.",
      "The travel facility lasts 5 years; after that you need a Resident Return visa (subclass 155 or 157) to re-enter as a permanent resident.",
      "You can work and study anywhere, enrol in Medicare, attend AMEP English classes if eligible and sponsor eligible relatives. Some government payments have a waiting period for newly arrived residents.",
      "New Zealand citizens should tell border officers they hold a subclass 190 visa and do not want a Special Category visa (subclass 444).",
      "Tell the Department of passport or address changes. Permanent visas can be cancelled under s 501 (character) or s 109 (incorrect information).",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Apply once you meet the residence requirement counted from the start of permanent residence.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Resident Return visa", description: "Needed to travel once the 5-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Sponsor your partner", description: "Permanent residents can sponsor a partner for a subclass 820/801 or 309/100 visa.", href: "/visas/family/partner-visa-onshore-820-801" },
      { title: "Regional alternative: subclass 491", description: "If your state only nominates for the regional visa, the subclass 491 adds 15 points and leads to the subclass 191 after 3 years.", href: "/visas/skilled/skilled-work-regional-visa-491" },
    ],
    risks: [
      "Nomination withdrawn by the state after you apply (for example because you left the state or misstated your intentions), which makes the application invalid and ends the 5 nomination points.",
      "Points claimed in the EOI not proved at decision: employment not at the skilled level or under 20 hours a week, qualifications not recognised by the assessing authority, or an English result outside its validity period.",
      "Skills assessment issued more than 3 years before invitation, expired, or issued only for a subclass 485 visa.",
      "Turning 45 before the state nominates you, so no invitation can be issued.",
      "PIC 4020: inconsistencies between the state nomination application, the EOI and the visa application, or altered documents, lead to refusal and a 3-year bar.",
      "Applying onshore without a substantive visa or a Bridging A, B or C visa, which makes the application invalid.",
    ],
    faqs: [
      {
        question: "What is the difference between the 189, 190 and 491 visas?",
        answer: "All three are points-tested with a 65-point pass mark. The 189 needs no nomination and is invited by the Department in rounds. The 190 needs a state or territory nomination worth 5 points and is permanent with no regional condition. The 491 needs state nomination or an eligible family sponsor worth 15 points, is a 5-year provisional visa with a regional condition, and leads to permanent residence through the subclass 191 after 3 years.",
      },
      {
        question: "How do I get nominated by a state?",
        answer: "Lodge an EOI in SkillSelect selecting the subclass 190 and the states you want, then apply to the state through its own process if it requires a separate application. Each state sets its own occupation list, minimum points, residence, work or job offer requirements and fees, and its allocation of places changes each program year. Home Affairs publishes the nomination numbers for each state in SkillSelect invitation round data.",
      },
      {
        question: "Can I move to another state after the visa is granted?",
        answer: "The visa itself has no condition that ties you to the nominating state, and the Department does not impose one. States, however, ask nominees to commit to living and working there for a period as part of the nomination terms. Check what you agreed to with the state before relocating.",
      },
      {
        question: "What does the subclass 190 visa cost in 2026?",
        answer: "From 1 July 2026 the base charge is A$6,140 for the primary applicant, A$3,070 for each additional applicant aged 18 or over and A$1,535 for each child under 18. Each adult without functional English attracts a second instalment of A$4,885 before grant. State nomination fees, the skills assessment, English test, health examinations and police certificates are extra.",
      },
      {
        question: "How long does the application take?",
        answer: "The Department does not promise a time. It publishes a processing time guide for recently decided applications, which varies with how complete the application is, how quickly you respond to requests and the number of places in the migration program. Check the global visa processing times tool for the latest guide.",
      },
      {
        question: "Can I apply if I am barred under section 48?",
        answer: "A person in Australia whose visa was refused or cancelled is barred by s 48 from most further visa applications while they remain in Australia. The subclass 190 is one of the visas prescribed in reg 2.12 that a barred person can still apply for onshore, provided they hold a substantive visa or a Bridging A, B or C visa when they apply and meet all other criteria.",
      },
      {
        question: "Do I need to prove the state nomination in my visa application?",
        answer: "No. The state records the nomination in SkillSelect and the Department links it to your invitation. You do, however, need to prove every points claim in your EOI and meet all other criteria. If the nomination is withdrawn before a decision you lose the 5 nomination points and the application becomes invalid.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 190 (criteria and conditions)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1138 (application requirements and invitation)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.26AC and Sch 6D (points test)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.12 (visas a person barred by s 48 can apply for)", url: REGS },
      { label: "Migration Act 1958, ss 92–96 (points system) and ss 46, 48, 65, 109 and 501", url: ACT },
      { label: "LIN 19/210: Pool and Pass Marks for General Skilled Migration Visas (65 points)", url: LIN_19_210 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "LIN 25/016: Specification of Language Tests, Test Scores and Passports", url: LIN_25_016 },
      { label: "LIN 25/014: Evidence of Functional English Language Proficiency", url: LIN_25_014 },
      { label: "PIC 4001, 4004, 4005, 4019 and 4020 (Sch 4); conditions 8504 and 8515 (Sch 8)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Skilled Nominated visa (subclass 190)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-nominated-190` },
      { label: "Home Affairs: points table for subclass 190", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-nominated-190/points-table` },
      { label: "Home Affairs: Australian study requirement (subclass 190)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-nominated-190/australian-study-requirement` },
      { label: "Home Affairs: SkillSelect", url: SKILLSELECT },
      { label: "Home Affairs: SkillSelect invitation rounds and state nominations", url: `${SKILLSELECT}/invitation-rounds` },
      { label: "Home Affairs: skills assessment", url: SKILLS_ASSESSMENT },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Which state could nominate me? (free assessment)", href: "/state-nomination/assessment" },
      { label: "State nomination guide", href: "/state-nomination" },
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Tasmania points calculator", href: "/tools/tasmania-points-calculator" },
      { label: "Canberra Matrix calculator", href: "/tools/canberra-matrix-calculator" },
      { label: "Victorian Points Test calculator", href: "/tools/victoria-points-calculator" },
      { label: "Skilled Independent visa (subclass 189)", href: "/visas/skilled/skilled-independent-visa-189" },
      { label: "Skilled Work Regional visa (subclass 491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
    ],
    keywords: ["190 visa", "subclass 190", "skilled nominated visa", "skilled nominated visa requirements", "190 visa state nomination", "190 visa points", "190 visa cost 2026", "state sponsored visa australia", "190 vs 189 visa", "190 visa processing"],
  },
  // ───────────────────────────── Subclass 491 ─────────────────────────────
  {
    slug: "skilled-work-regional-visa-491",
    category: "skilled",
    kind: "visa",
    subclass: "491",
    name: "Skilled Work Regional (Provisional) visa",
    title: "Skilled Work Regional (Provisional) visa (subclass 491)",
    seoTitle: "Subclass 491 Skilled Work Regional visa: points, cost, PR",
    seoDescription:
      "Subclass 491 visa 2026: 5-year provisional visa with state nomination or family sponsorship, 65 points, condition 8579, PR via subclass 191 after 3 years.",
    intro:
      "The Skilled Work Regional (Provisional) visa (subclass 491) is a 5-year points-tested visa for skilled workers nominated by a state or territory government or sponsored by an eligible relative living in regional Australia. Holders must live, work and study in a designated regional area under condition 8579. After 3 years, holders who have complied with their conditions and lodge ATO notices of assessment can apply for the Permanent Residence (Skilled Regional) visa (subclass 191).",
    factsAsAt: FACTS_AS_AT,
    permanent: false,
    tags: ["Provisional", "Points tested", "Pathway to PR", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$6,140", note: "Primary applicant, 1 July 2026 charge" },
      { label: "Length of stay", value: "5 years", note: "From the date of grant; cannot be extended" },
      { label: "Work rights", value: "Any occupation, any employer", note: "But only in a designated regional area (condition 8579)" },
      { label: "Pathway to permanent residence", value: "Subclass 191 after 3 years", note: "Comply with conditions and provide ATO notices of assessment for 3 of the 5 income years" },
      { label: "Where to apply", value: "In or outside Australia", note: "Onshore applicants must hold a substantive visa or a Bridging A, B or C visa" },
      { label: "Sponsor or nomination", value: "State nomination or eligible relative", note: "Either earns 15 points; the family sponsor must usually live in a designated regional area" },
    ],
    whoFor: [
      "You have a skilled occupation on the subclass 491 list and a state or territory is willing to nominate you for its regional areas.",
      "You have a parent, sibling, child, aunt, uncle, niece, nephew, grandparent or first cousin who is an Australian citizen, permanent resident or eligible New Zealand citizen living in a designated regional area and willing to sponsor you.",
      "You score 50 points on your own and need the 15 nomination or sponsorship points to reach 65.",
      "You studied or work in a regional city such as Perth, Adelaide, Hobart, Canberra, the Gold Coast, Newcastle, Wollongong or Geelong and want a visa that leads to permanent residence there.",
      "Your occupation is on the Regional Occupation List but not on the subclass 189 or 190 lists.",
    ],
    eligibility: [
      {
        title: "Nominated by a state or territory, or sponsored by an eligible relative",
        detail: "Indicate in your EOI whether you want state nomination or will be sponsored by a relative. Each state and territory nominates under its own criteria and the nomination triggers the invitation. A family sponsor must be 18 or over, an Australian citizen, permanent resident or eligible New Zealand citizen, usually resident in a designated regional area, and your (or your partner's) parent, child or step-child, sibling, aunt or uncle, niece or nephew, grandparent or first cousin (including adoptive and step relationships). The Department must approve the sponsorship before grant, and a nomination must not be withdrawn.",
        legal: "Migration Regulations 1994, Sch 2 Part 491 (nomination and sponsorship criteria)",
      },
      {
        title: "Invited to apply and lodged within 60 days",
        detail: "Family-sponsored applicants are invited in departmental invitation rounds; state-nominated applicants are invited when the state nominates them in SkillSelect. You have 60 calendar days from the invitation to lodge and the period cannot be extended. An EOI is not a visa application and gives no bridging visa.",
        legal: "Migration Regulations 1994, Sch 1 item 1241; Migration Act 1958, s 46",
      },
      {
        title: "Occupation on the subclass 491 skilled occupation list",
        detail: "Your nominated occupation must be on the combined list of eligible skilled occupations for the subclass 491 visa in LIN 19/051, which also names the assessing authority. The state or sponsor pathway does not change the occupation list, but each state nominates only the occupations it needs.",
        legal: "Migration Regulations 1994, Sch 2 Part 491; LIN 19/051",
      },
      {
        title: "Suitable skills assessment at the time of invitation",
        detail: "Obtained within the 3 years before the invitation (or within any shorter validity period on it), issued by the authority listed for your occupation, and not an assessment issued for a subclass 485 visa. An assessment obtained within the 60-day invitation period is accepted following Thapa v Minister for Immigration [2021] FCCA 686. AHPRA registration and legal admission count for medical practitioners and lawyers.",
        legal: "Migration Regulations 1994, Sch 2 Part 491 (criteria at time of invitation)",
      },
      {
        title: "Under 45 when invited",
        detail: "You must not have turned 45 at the time of invitation. You can apply if you turn 45 during the 60-day period, but the Department will not process an application from someone who was 45 or over when invited.",
        legal: "Migration Regulations 1994, Sch 2 Part 491",
      },
      {
        title: "At least 65 points including 15 for nomination or sponsorship",
        detail: "The pass mark is 65 under LIN 19/210. Nomination by a state that has not been withdrawn, or an approved family sponsorship, earns 15 points. All other claims must be proved at decision and you must reach the score on your invitation, which can be higher than 65.",
        legal: "Migration Act 1958, ss 92–96; Migration Regulations 1994, reg 2.26AC and Sch 6D; LIN 19/210",
      },
      {
        title: "Competent English at the time of invitation",
        detail: "At least competent English on an approved test taken at a secure test centre (LIN 25/016), or a passport from the United Kingdom, Ireland, the United States, Canada or New Zealand. Family members aged 18 or over need functional English or you pay a second instalment of A$4,890 for each of them.",
        legal: "Migration Regulations 1994, Sch 2 Part 491; LIN 25/016; LIN 25/014",
      },
      {
        title: "Hold a substantive visa or a Bridging A, B or C visa if you apply in Australia",
        detail: "An onshore applicant must hold a substantive visa or a subclass 010, 020 or 030 bridging visa or the application is not valid, and must not be in immigration clearance. A person barred by s 48 can still apply for a subclass 491 visa in Australia because the subclass is prescribed in reg 2.12.",
        legal: "Migration Regulations 1994, Sch 1 item 1241 and reg 2.12; Migration Act 1958, s 48",
      },
      {
        title: "Health and character",
        detail: "You and every family member included must meet the health requirement; non-migrating family members may be asked to. You and family members aged 16 or over, including those not migrating, must meet the character test, with AFP and overseas police certificates for every country where you spent 12 months or more in the last 10 years since turning 16.",
        legal: "Migration Regulations 1994, Sch 2 Part 491 (health public interest criterion); Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "True information, no government debt and the values statement",
        detail: "False or misleading information or bogus documents lead to refusal under PIC 4020 and a 3-year bar. Government debts must be repaid or under an arrangement, and applicants aged 18 or over sign the Australian Values Statement.",
        legal: "PIC 4004, 4019 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "Include your partner and dependent children when you lodge. After lodging you can add a dependent child, but not any other family member, until a decision is made. Family members must meet health and character requirements and will hold the same regional condition. Family members who did not apply with you can later apply as subsequent entrants (same base charge) while your visa is valid; their visa ends when yours ends. Each applicant aged 18 or over without functional English attracts a second instalment of A$4,890.",
    documents: [
      {
        group: "Identity and relationships",
        items: [
          "Current passport pages, national identity card and change of name documents",
          "Marriage, divorce, death or separation documents and a reason why any partner or child is not included",
        ],
      },
      {
        group: "Nomination or sponsorship",
        items: [
          "State nomination: nothing to attach; the Department sees it in SkillSelect",
          "Family sponsorship: the Skilled Work Regional (subclass 491) sponsor declaration completed by your sponsor",
          "Proof the sponsor is 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen (citizenship certificate or passport bio page)",
          "Proof the sponsor usually lives in a designated regional area (driver's licence, tenancy or mortgage documents, utility bills) and of the family relationship (birth, marriage, adoption or family certificates)",
        ],
      },
      {
        group: "Skills, points and English",
        items: [
          "Skills assessment, or AHPRA registration or legal admission evidence",
          "English test report from a secure test centre, or an eligible passport",
          "Employment references on letterhead with street address, period, position, duties, hours and salary, supported by payslips, contracts, tax statements and superannuation records",
          "Qualification certificates, transcripts and completion letters for Australian and regional study points; Professional Year record; NAATI credential; partner evidence for partner points",
        ],
      },
      {
        group: "Health and character",
        items: [
          "AFP complete disclosure certificate and overseas police certificates for every country where you spent 12 months or more in the last 10 years since turning 16",
          "Military service records if applicable, Form 80 and Form 1221",
          "Health examinations, preferably before lodging",
          "For family members: relationship evidence, Form 1229 consent for children under 18 where a parent is not migrating, Form 47a for children aged 18 to 22, and functional English evidence for adults",
        ],
      },
    ],
    steps: [
      {
        title: "Skills assessment, English test and points check",
        description: "Get a skills assessment from the authority listed for your occupation and an approved English result. Use the points calculator to confirm you reach 65 with the 15 nomination or sponsorship points.",
        output: "You hold: a positive skills assessment, an English result and a points estimate of at least 65",
      },
      {
        title: "Choose a pathway: state nomination or family sponsorship",
        description: "Check each state's regional nomination criteria and occupation list, or confirm that your relative lives in a designated regional area and meets the sponsor requirements. Use the regional postcode checker on this site.",
        output: "You hold: a state whose criteria you meet, or an eligible relative willing to sponsor you",
      },
      {
        title: "Lodge an EOI in SkillSelect",
        description: "Select the Skilled Work Regional (Provisional) visa (subclass 491), indicate nomination or sponsorship, and lodge any separate state application the state requires. There is no charge and no documents are uploaded. Keep a valid visa while you wait; an EOI gives no bridging visa.",
        output: "You hold: an EOI with an indicative score of at least 65 points",
      },
      {
        title: "Nomination or invitation round",
        description: "A state nomination triggers an invitation. Family-sponsored EOIs are invited in departmental rounds ranked by points and date of effect. You then have 60 days to apply and cannot be invited more than twice on one EOI.",
        output: "You hold: an invitation stating the points you must prove",
      },
      {
        title: "Apply within 60 days in ImmiAccount",
        description: "Open the invitation in SkillSelect, select Apply for visa, attach documents (including the sponsor declaration if family sponsored) and pay A$6,140 plus the charge for each family member. Onshore applicants are usually granted a Bridging visa A.",
        output: "You hold: a lodged application with a transaction reference number",
      },
      {
        title: "Sponsorship approval, health, biometrics and requests",
        description: "The Department must approve a family sponsorship before grant and may ask for health examinations, biometrics or more information. Reply within the time given.",
        output: "You hold: an approved sponsorship (if family sponsored) and a complete file",
      },
      {
        title: "Decision and move to the region",
        description: "A grant letter shows the start date and conditions 8578, 8579, 8580 and 8581. From grant you and your family must live, work and study in a designated regional area; the list that applied on your grant date continues to apply to you.",
        output: "You hold: a 5-year provisional visa and a 3-year countdown to the subclass 191",
      },
    ],
    conditions: [
      { code: "8579", meaning: "You must live, work and study only in an area that was on the list of designated regional areas on the date your visa was granted. This applies to every family member on the visa." },
      { code: "8578", meaning: "You must tell the Department within 14 days if your residential address, email, phone number, passport details, employer's address or work address change while you are in Australia." },
      { code: "8580", meaning: "If asked in writing, you must give evidence of where you live, work and study within 28 days." },
      { code: "8581", meaning: "If asked in writing, you must attend an interview with the Department, in person, by phone or online." },
      { code: "8515", meaning: "If granted outside Australia, you must not marry or enter a de facto relationship before you first enter Australia on the visa." },
    ],
    costs: [
      { item: "Base application charge", amount: "A$6,140", note: "Primary applicant, 1 July 2026 charge; subsequent entrants pay the same base charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,070", note: "Each adult family member included" },
      { item: "Additional applicant under 18", amount: "A$1,535", note: "Each child included" },
      { item: "Second instalment (less than functional English)", amount: "A$4,890", note: "For each applicant aged 18 or over without functional English, payable only when the Department is ready to grant (figure from the Home Affairs subclass 491 subsequent entrant page)" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, applied automatically in ImmiAccount based on the primary applicant's passport" },
      { item: "State nomination application fee", amount: "Set by each state", note: "Typical third-party cost; no fee for family sponsorship" },
      { item: "Skills assessment and English test", amount: "Typical third-party cost", note: "Set by the assessing authority and test provider" },
      { item: "Health examinations, police certificates, biometrics and translations", amount: "Typical third-party cost", note: "Paid to the provider" },
      { item: "Subclass 191 application later", amount: "A$630", note: "Regional Provisional stream base charge from 1 July 2026; A$315 per adult and A$160 per child" },
    ],
    afterGrant: [
      "Live, work and study only in a designated regional area (condition 8579). The regional list that applied on your grant date continues to apply even if the list changes later.",
      "Report changes of address, contact details, passport or employer within 14 days (8578), give address evidence within 28 days if asked (8580) and attend an interview if asked (8581). A breach can lead to cancellation under s 116 and will stop a subclass 191 grant.",
      "You can work in any occupation for any employer in the region. Keep payslips, leases and bills: the subclass 191 asks for proof of regional residence, work and study and for ATO notices of assessment.",
      "Until you have held the visa for 3 years you cannot be granted a subclass 186, 188, 189, 190 or 858 visa and cannot make a valid subclass 820 partner visa application.",
      "Time outside Australia does not extend the visa. The visa cannot be extended; after 5 years you need another visa, usually the subclass 191.",
      "New Zealand citizens should tell border officers they hold a subclass 491 visa and do not want a Special Category visa (subclass 444), which could affect the subclass 191 pathway.",
    ],
    pathways: [
      { title: "Permanent Residence (Skilled Regional) visa (subclass 191)", description: "After 3 years, with condition compliance and ATO notices of assessment for 3 of the 5 income years. Home Affairs states there is no minimum income requirement.", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { title: "Skilled Independent or Nominated visa after 3 years", description: "Once you have held the 491 for 3 years you can be granted a subclass 189 or 190 visa if you still meet the points test and age limit.", href: "/visas/skilled/skilled-independent-visa-189" },
      { title: "Regional postcode checker", description: "Confirm that the suburb you plan to live in is a designated regional area before you move.", href: "/tools/regional-postcode-checker" },
      { title: "Family members joining later", description: "Partners and children who did not apply with you can apply as subsequent entrants while your visa is valid." },
    ],
    risks: [
      "Living or working outside a designated regional area in breach of condition 8579, which exposes the visa to cancellation and defeats the subclass 191 condition compliance requirement.",
      "State nomination withdrawn after lodgement (for example because you moved interstate), which ends the 15 points and the application.",
      "Family sponsor not usually resident in a designated regional area, or the relationship not within the eligible relative list, so the sponsorship is refused.",
      "Points claimed in the EOI not proved at decision, or a skills assessment that was expired or issued only for a subclass 485 visa.",
      "PIC 4020: inconsistent nomination, EOI and visa documents, or altered employment references, lead to refusal and a 3-year bar.",
      "Lodging a subclass 820 partner application or expecting a subclass 186 or 190 grant within the first 3 years, which the Regulations do not allow for 491 holders.",
    ],
    faqs: [
      {
        question: "Where can I live on a subclass 491 visa?",
        answer: "Anywhere that was on the list of designated regional areas when your visa was granted. The list covers all of Australia except Sydney, Melbourne and Brisbane: Category 2 cities and major regional centres (Perth, Adelaide, the Gold Coast, the Sunshine Coast, Canberra, Newcastle and Lake Macquarie, Wollongong and the Illawarra, Geelong and Hobart) and Category 3 regional centres and other regional areas. Use the regional postcode checker to confirm a suburb.",
      },
      {
        question: "Can I move to a different regional area or state after grant?",
        answer: "Condition 8579 only requires that you live, work and study in a designated regional area, so moving between regional areas does not breach the visa. If a state nominated you, it will have asked you to commit to living in that state; check what you agreed to. Family-sponsored holders are not tied to the sponsor's area.",
      },
      {
        question: "How do I get permanent residence from a 491?",
        answer: "Apply for the Permanent Residence (Skilled Regional) visa (subclass 191) once you have held the 491 for at least 3 years. You must have complied with your visa conditions and provide ATO notices of assessment for 3 income years out of the 5 years of your visa. On 12 October 2026 Home Affairs stated there is no minimum income requirement. The 191 base charge is A$630.",
      },
      {
        question: "Who can sponsor me as a family member?",
        answer: "A parent, child or step-child, brother or sister, aunt or uncle, niece or nephew, grandparent or first cousin (including adoptive and step relatives) of you or your partner. The sponsor must be 18 or over, an Australian citizen, permanent resident or eligible New Zealand citizen, and usually resident in a designated regional area. Family-sponsored EOIs are invited in departmental rounds and compete on points.",
      },
      {
        question: "What does the subclass 491 visa cost in 2026?",
        answer: "From 1 July 2026 the base charge is A$6,140 for the primary applicant, A$3,070 per additional applicant aged 18 or over and A$1,535 per child. Adults without functional English attract a second instalment of A$4,890 before grant. Subsequent entrants pay the full base charge. State nomination fees, the skills assessment, English test and health and police checks are extra.",
      },
      {
        question: "Can my partner and children join me later?",
        answer: "Yes. Members of your family unit who did not apply with you can apply as subsequent entrants from in or outside Australia while your visa is valid. There is no age limit for a subsequent entrant, but they must meet health and character requirements, hold the same regional condition, and their visa ends when yours ends.",
      },
      {
        question: "What happens if my 491 expires before the 191 is decided?",
        answer: "If you lodge the subclass 191 in Australia you are usually granted a bridging visa that comes into effect when the 491 ends, so you can stay lawfully while the 191 is processed. Lodge the 191 as soon as you reach 3 years and have the required notices of assessment, and do not let the 491 expire without a further application.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 491 (criteria, sponsorship and conditions)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1241 (application requirements and invitation)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.26AC and Sch 6D (points test)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.12 (visas a person barred by s 48 can apply for)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 191 (permanent residence pathway)", url: REGS },
      { label: "Migration Act 1958, ss 92–96 (points system) and ss 46, 48, 65, 116 and 501", url: ACT },
      { label: "LIN 19/210: Pool and Pass Marks for General Skilled Migration Visas (65 points)", url: LIN_19_210 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "LIN 25/016: Specification of Language Tests, Test Scores and Passports", url: LIN_25_016 },
      { label: "LIN 25/014: Evidence of Functional English Language Proficiency", url: LIN_25_014 },
      { label: "PIC 4001, 4004, 4019 and 4020 (Sch 4); conditions 8515, 8578, 8579, 8580 and 8581 (Sch 8)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Skilled Work Regional (Provisional) visa (subclass 491)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491` },
      { label: "Home Affairs: subclass 491 main applicant", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application` },
      { label: "Home Affairs: points table for subclass 491", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/points-table` },
      { label: "Home Affairs: subclass 491 subsequent entrant", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/subsequent-entrant` },
      { label: "Home Affairs: Permanent Residence (Skilled Regional) visa, Regional Provisional stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-regional-191/regional-provisional` },
      { label: "Home Affairs: designated regional areas", url: `${HA}/visas/working-in-australia/regional-migration/eligible-regional-areas` },
      { label: "Home Affairs: SkillSelect invitation rounds", url: `${SKILLSELECT}/invitation-rounds` },
      { label: "Home Affairs: skills assessment", url: SKILLS_ASSESSMENT },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Which state could nominate me? (free assessment)", href: "/state-nomination/assessment" },
      { label: "Permanent Residence (Skilled Regional) visa (subclass 191)", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
      { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
      { label: "State nomination guide", href: "/state-nomination" },
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Skilled Nominated visa (subclass 190)", href: "/visas/skilled/skilled-nominated-visa-190" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: ["491 visa", "subclass 491", "skilled work regional visa", "491 visa requirements", "491 visa points", "491 visa cost 2026", "491 family sponsored", "491 to 191 pathway", "condition 8579", "regional visa australia"],
  },
  // ───────────────────────────── Subclass 191 ─────────────────────────────
  {
    slug: "permanent-residence-skilled-regional-visa-191",
    category: "skilled",
    kind: "visa",
    subclass: "191",
    name: "Permanent Residence (Skilled Regional) visa",
    title: "Permanent Residence (Skilled Regional) visa (subclass 191)",
    seoTitle: "Subclass 191 Skilled Regional PR visa: eligibility, cost",
    seoDescription:
      "Subclass 191 visa in 2026: permanent residence for 491 and 494 holders after 3 years with ATO notices of assessment for 3 of 5 years. Base charge A$630.",
    intro:
      "The Permanent Residence (Skilled Regional) visa (subclass 191) is the permanent visa for people who have held a Skilled Work Regional (subclass 491) or Skilled Employer Sponsored Regional (subclass 494) visa for at least 3 years, complied with its conditions and lodged tax returns while living in regional Australia. A separate Hong Kong stream covers Hong Kong and BNO passport holders who have lived in a designated regional area on a subclass 457, 482 or 485 visa for 3 years. Once granted it is a full permanent visa with no regional condition.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Pathway to PR", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$630", note: "Primary applicant, Regional Provisional stream, 1 July 2026 charge (Hong Kong stream A$6,135)" },
      { label: "Length of stay", value: "Permanent", note: "Travel facility for 5 years from grant, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Unrestricted", note: "Live, work and study anywhere in Australia once granted" },
      { label: "Pathway to permanent residence", value: "Permanent on grant", note: "Citizenship by conferral once you meet the residence requirement" },
      { label: "Where to apply", value: "In or outside Australia", note: "But not in immigration clearance; you must hold the eligible visa when you apply" },
      { label: "Sponsor or nomination", value: "None", note: "Eligibility comes from holding a subclass 491 or 494 visa for 3 years" },
    ],
    alert: {
      title: "Income requirement: no minimum amount, but notices of assessment are mandatory",
      body: "On 12 October 2026 the Home Affairs Regional Provisional stream page stated that there is no minimum income requirement, and that applicants must provide Australian Taxation Office notices of assessment for 3 income years out of the 5 years of their eligible visa. Any money owed to the ATO must be repaid or under an approved payment plan.",
      href: `${HA}/visas/getting-a-visa/visa-listing/skilled-regional-191/regional-provisional`,
      linkLabel: "Home Affairs: Regional Provisional stream",
    },
    streams: [
      {
        name: "Regional Provisional stream",
        summary: "For holders of a subclass 491 or 494 visa who have held it for at least 3 years, complied with its conditions and can provide ATO notices of assessment for 3 of the 5 income years.",
        forWhom: "Skilled regional visa holders, and their family members, who have lived and worked in a designated regional area since grant.",
        stay: "Permanent",
        cost: "A$630 base charge",
        prPathway: "Permanent on grant",
      },
      {
        name: "Hong Kong stream",
        summary: "For Hong Kong or British National (Overseas) passport holders who have held a subclass 457, 482 or 485 visa for at least 3 years and been usually resident in a designated regional area for a continuous 3 years.",
        forWhom: "Hong Kong and BNO passport holders who settled in regional Australia on a temporary skilled or graduate visa.",
        stay: "Permanent",
        cost: "A$6,135 base charge",
        prPathway: "Permanent on grant",
      },
    ],
    whoFor: [
      "You have held a subclass 491 visa for at least 3 years, lived, worked and studied only in designated regional areas, and have lodged tax returns.",
      "You have held a subclass 494 visa for at least 3 years, complied with its conditions and want permanent residence without a new employer nomination.",
      "You are the partner or child of a subclass 491 or 494 holder and were included in that visa, and now apply with the primary holder for permanent residence.",
      "You hold a Hong Kong or BNO passport, have held a subclass 457, 482 or 485 visa for 3 years and have lived in a designated regional area for a continuous 3 years.",
    ],
    eligibility: [
      {
        title: "Hold an eligible visa and have held it for at least 3 years",
        detail: "Regional Provisional stream: you must hold a subclass 491 or 494 visa when you apply and have held it for at least 3 years. Hong Kong stream: you must hold a subclass 457, 482 or 485 visa granted on the primary criteria, held for at least 3 years; visas cannot be combined, and a visa granted on or after 9 July 2020 must be valid for 5 years. A family member who no longer meets the member of the family unit definition (for example a child who has turned 23) can only be included if they hold an eligible visa granted as a member of your family unit.",
        legal: "Migration Regulations 1994, Sch 2 Part 191 (criteria at time of application)",
      },
      {
        title: "Income requirement: ATO notices of assessment for 3 of 5 income years",
        detail: "You must provide notices of assessment issued by the Australian Taxation Office for 3 income years out of the 5 years of your eligible visa. Home Affairs states there is no minimum income requirement. If you owe money to the ATO it must be repaid or under an approved payment plan, with evidence. The notices must be for the years you held the eligible visa, so lodge your tax returns on time each year.",
        legal: "Migration Regulations 1994, Sch 2 Part 191 (income requirement)",
      },
      {
        title: "Complied with the conditions of your eligible visa",
        detail: "You must have complied with the conditions attached to your eligible visa for the whole period you held it. For a subclass 491 or 494 this means condition 8579 (live, work and study only in a designated regional area), 8578 (notify changes within 14 days), 8580 (address evidence on request) and 8581 (interview on request). Provide leases, utility bills, school reports, title deeds, employment references, payslips and transcripts showing where you lived, worked and studied.",
        legal: "Migration Regulations 1994, Sch 2 Part 191; Sch 8 conditions 8578, 8579, 8580 and 8581",
      },
      {
        title: "Hong Kong stream: residence, work and study in a designated regional area",
        detail: "You must hold a Hong Kong or BNO passport when you apply, have been usually resident in a designated regional area for a continuous period of at least 3 years immediately before applying, and any work or study in those 3 years must have been in a designated regional area. You must have functional English at decision or pay the second instalment.",
        legal: "Migration Regulations 1994, Sch 2 Part 191 (Hong Kong stream)",
      },
      {
        title: "Health requirement",
        detail: "You and every family member included must meet the health requirement, and family members not coming to Australia may be asked to. The Department will tell you if health examinations are needed; many applicants completed them for the provisional visa within the last 12 months.",
        legal: "Migration Regulations 1994, Sch 2 Part 191 (health public interest criterion)",
      },
      {
        title: "Character requirement",
        detail: "You and family members aged 16 or over, including those not migrating, must meet the character test. Provide an AFP complete disclosure certificate (you will have spent 12 months or more in Australia) and overseas certificates for any country where you spent 12 months or more in the last 10 years since turning 16, plus Forms 80 and 1221.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Australian values statement, debts and immigration history",
        detail: "Home Affairs states that applicants aged 16 or over must have read the Life in Australia booklet and sign the Australian Values Statement. Debts to the Australian Government must be repaid or under an arrangement. The Department considers your immigration history, and a visa cancellation or refusal can affect eligibility.",
        legal: "PIC 4004, 4019 and 4020 (Sch 4)",
      },
      {
        title: "Valid passports and lodgement",
        detail: "You and every family member must hold a valid passport to lodge. You can be in or outside Australia when you apply and when the visa is decided, but not in immigration clearance. If a child was born in Australia since your provisional visa was granted, tell the Department before you lodge so the child's visa is linked to their passport.",
        legal: "Migration Regulations 1994, Sch 1 (Permanent Residence (Skilled Regional) (Class PR)); Migration Act 1958, s 46",
      },
    ],
    familyNote:
      "Include your partner and dependent children when you lodge, or add them before a decision with Form 1436. Family members who were secondary holders of your 491 or 494 visa do not need their own 3-year history, but anyone who no longer fits the member of the family unit definition (such as a child who has turned 23) must hold an eligible visa granted as a member of your family unit. Family members must meet health and character requirements, and those not coming to Australia may also need to. Home Affairs notes that either the primary holder or the partner who satisfied the work and residence requirements can lead the application.",
    documents: [
      {
        group: "Identity and relationships",
        items: [
          "Current passport pages for every applicant, national identity card and change of name documents",
          "Marriage, divorce, death or separation documents, and partner relationship evidence (joint accounts, leases, bills, same address)",
          "Birth certificates for children, Form 1229 consent where a parent is not migrating, and a reason why any partner or child is not included",
        ],
      },
      {
        group: "Income, residence and compliance",
        items: [
          "ATO notices of assessment for 3 income years out of the 5 years of your eligible visa, and evidence of any ATO payment plan",
          "Proof of residence in a designated regional area: leases or rental agreements, utility bills, rates notices, title deeds, school reports",
          "Proof of work: reference letters and payslips; proof of study: transcripts, school reports and letters of completion",
          "Hong Kong stream: evidence of 3 years' continuous residence in a designated regional area, employment contracts, work references and completion letters",
        ],
      },
      {
        group: "Health and character",
        items: [
          "AFP complete disclosure National Police Certificate and overseas police certificates for every country where you spent 12 months or more in the last 10 years since turning 16",
          "Military service or discharge records if applicable",
          "Form 80 Personal particulars for character assessment and Form 1221",
          "Health examinations if the Department asks for them; Hong Kong stream applicants: functional English evidence for each adult or a statement that you will pay the second instalment",
        ],
      },
    ],
    steps: [
      {
        title: "Count 3 years from the grant date of your 491 or 494",
        description: "You can apply only after you have held the eligible visa for at least 3 years and while you still hold it. Lodge well before the 5-year expiry so that a bridging visa covers you if the provisional visa ends during processing.",
        output: "You hold: an eligible visa held for 3 years and a lodgement date before it expires",
      },
      {
        title: "Lodge your tax returns and collect notices of assessment",
        description: "You need ATO notices of assessment for 3 income years out of the 5 years of your eligible visa. Lodge every return on time and settle or arrange any ATO debt.",
        output: "You hold: 3 ATO notices of assessment and no outstanding ATO debt",
      },
      {
        title: "Assemble your compliance evidence",
        description: "Gather leases, bills, payslips, references and transcripts that show you and your family lived, worked and studied only in designated regional areas and that you reported changes of address and employer within 14 days.",
        output: "You hold: a timeline of regional residence, work and study for the whole visa period",
      },
      {
        title: "Apply online in ImmiAccount",
        description: "Lodge from in or outside Australia, attach the documents for every family member, and pay the charge (A$630 for the primary applicant in the Regional Provisional stream). The application is not processed until the first instalment is paid.",
        output: "You hold: a lodged application with a transaction reference number and, if onshore, a bridging visa in reserve",
      },
      {
        title: "Health, biometrics and requests for information",
        description: "Complete any health examinations and biometrics the Department asks for and answer requests within the time given. Removing the application from ImmiAccount does not withdraw it; withdrawals must be in writing.",
        output: "You hold: a complete file",
      },
      {
        title: "Decision",
        description: "A grant letter shows the grant number and start date. Permanent residence starts on the day of grant if you are in Australia. If refused, the letter explains why and whether the Administrative Review Tribunal can review the decision; the charge is not refunded.",
        output: "You hold: a permanent visa with no regional condition and a 5-year travel facility",
      },
    ],
    conditions: [],
    costs: [
      { item: "Base application charge (Regional Provisional stream)", amount: "A$630", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$315", note: "Regional Provisional stream; A$3,065 in the Hong Kong stream" },
      { item: "Additional applicant under 18", amount: "A$160", note: "Regional Provisional stream; A$1,535 in the Hong Kong stream" },
      { item: "Base application charge (Hong Kong stream)", amount: "A$6,135", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Second instalment (Hong Kong stream, less than functional English)", amount: "Set by the Regulations", note: "Payable for each applicant aged 18 or over without functional English, only if the visa is to be granted; the Home Affairs page did not display the amount on 12 October 2026" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, applied automatically in ImmiAccount based on the primary applicant's passport" },
      { item: "Health examinations, police certificates, biometrics and translations", amount: "Typical third-party cost", note: "Paid to the provider" },
    ],
    afterGrant: [
      "You become a permanent resident on the day of grant if you are in Australia. The regional condition ends: you can live, work and study anywhere in Australia, enrol in Medicare and sponsor eligible relatives.",
      "The travel facility lasts 5 years from grant; after that you need a Resident Return visa (subclass 155 or 157) to re-enter as a permanent resident.",
      "New Zealand citizens should tell border officers they hold a subclass 191 visa and do not want a Special Category visa (subclass 444), because a 444 grant ceases the permanent visa.",
      "Tell the Department of passport or address changes. A permanent visa can be cancelled under s 501 (character) or s 109 (incorrect information).",
      "Citizenship by conferral is available once you meet the residence requirement; time spent on the provisional visa counts towards the 4 years of lawful residence but you must hold the permanent visa for the final 12 months.",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Apply once you meet the residence requirement; the period on your provisional visa counts as lawful residence.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Resident Return visa (subclass 155 or 157)", description: "Needed to travel after the 5-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Sponsor family members", description: "Permanent residents can sponsor partners, parents and other relatives.", href: "/visas/family/partner-visa-offshore-309-100" },
      { title: "Former subclass 489 holders: subclass 887", description: "The Skilled Regional (subclass 887) visa is the equivalent permanent visa for people who hold or held a subclass 489 visa; its base charge is also A$630 from 1 July 2026." },
    ],
    risks: [
      "Breach of condition 8579 during the provisional visa (for example living in Melbourne, Sydney or Brisbane, or working remotely for a city employer from a city address), which fails the condition compliance criterion and can also lead to cancellation under s 116.",
      "Missing notices of assessment because tax returns were not lodged for 3 of the 5 income years, or an unpaid ATO debt without a payment plan.",
      "Applying before the eligible visa has been held for 3 years, or after it has ceased, so the application is invalid.",
      "Address or employer changes not reported within 14 days under condition 8578, which the Department can check against ATO and employer records.",
      "A child who has turned 23 and does not hold an eligible visa granted as a member of your family unit cannot be included.",
      "New Zealand citizens who are granted a Special Category visa at the border after the 191 is granted lose the permanent visa.",
    ],
    faqs: [
      {
        question: "Is there a minimum income for the subclass 191 visa?",
        answer: "On 12 October 2026 Home Affairs stated there is no minimum income requirement. You must still provide ATO notices of assessment for 3 income years out of the 5 years of your subclass 491 or 494 visa, and any money owed to the ATO must be repaid or under an approved payment plan.",
      },
      {
        question: "Which income years count?",
        answer: "The 3 notices of assessment must fall within the 5 years of your eligible visa. An income year runs from 1 July to 30 June, so a visa granted in March 2024 covers income years ending June 2024, 2025, 2026, 2027 and 2028. Lodge every return on time so that 3 notices exist by the time you apply.",
      },
      {
        question: "When can I apply?",
        answer: "Once you have held the subclass 491 or 494 visa for at least 3 years, and while you still hold it. You can be in or outside Australia when you apply and when the visa is decided, but not in immigration clearance. If the provisional visa ends during processing and you applied in Australia, a bridging visa keeps you lawful.",
      },
      {
        question: "Can my family apply with me?",
        answer: "Yes. Your partner and dependent children can be included or added before a decision. Family members who held your provisional visa do not need their own 3-year history. A family member who no longer fits the member of the family unit definition must hold an eligible visa that was granted as a member of your family unit.",
      },
      {
        question: "What does the subclass 191 visa cost in 2026?",
        answer: "In the Regional Provisional stream the base charge from 1 July 2026 is A$630 for the primary applicant, A$315 per additional applicant aged 18 or over and A$160 per child. The Hong Kong stream costs A$6,135, A$3,065 and A$1,535, with a second instalment for adults without functional English. Health examinations and police certificates are extra.",
      },
      {
        question: "I hold a subclass 489 visa. Is the 191 for me?",
        answer: "No. Subclass 489 holders apply for the Skilled Regional (subclass 887) visa, which is the equivalent permanent visa for the earlier provisional regional program and has the same A$630 base charge. The subclass 191 Regional Provisional stream is only for subclass 491 and 494 holders.",
      },
      {
        question: "Can I move to Sydney, Melbourne or Brisbane after the 191 is granted?",
        answer: "Yes. The subclass 191 has no regional condition; Home Affairs states you can work and study anywhere in Australia. Until it is granted you must keep complying with condition 8579 on your provisional visa, because compliance is assessed for the whole period you held that visa.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 191 (criteria for both streams)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 (Permanent Residence (Skilled Regional) (Class PR) application requirements)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 491 and 494 (the eligible provisional visas)", url: REGS },
      { label: "Migration Regulations 1994, Sch 8 conditions 8578, 8579, 8580 and 8581 (compliance assessed for the 191)", url: REGS },
      { label: "Migration Act 1958, ss 46, 65, 109, 116 and 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 (Sch 4)", url: REGS },
      { label: "LIN 25/014: Evidence of Functional English Language Proficiency (Hong Kong stream)", url: LIN_25_014 },
    ],
    sources: [
      { label: "Home Affairs: Permanent Residence (Skilled Regional) visa (subclass 191)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-regional-191` },
      { label: "Home Affairs: subclass 191 Regional Provisional stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-regional-191/regional-provisional` },
      { label: "Home Affairs: subclass 191 Hong Kong stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-regional-191/hong-kong` },
      { label: "Home Affairs: subclass 491 main applicant (3-year restrictions and pathway)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application` },
      { label: "Home Affairs: designated regional areas", url: `${HA}/visas/working-in-australia/regional-migration/eligible-regional-areas` },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Skilled Work Regional visa (subclass 491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
      { label: "Skilled Employer Sponsored Regional visa (subclass 494)", href: "/visas/employer-sponsored/skilled-employer-sponsored-regional-visa-494" },
      { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
      { label: "Australian citizenship by conferral", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { label: "Visa cancellation and notices of intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: ["191 visa", "subclass 191", "permanent residence skilled regional visa", "191 visa requirements", "191 visa income requirement", "491 to 191", "494 to 191", "191 visa cost 2026", "191 visa notices of assessment", "skilled regional permanent visa"],
  },
  // ───────────────────────────── Subclass 485 ─────────────────────────────
  {
    slug: "temporary-graduate-visa-485",
    category: "skilled",
    kind: "visa",
    subclass: "485",
    name: "Temporary Graduate visa",
    title: "Temporary Graduate visa (subclass 485)",
    seoTitle: "Subclass 485 Temporary Graduate visa: streams, age, cost",
    seoDescription:
      "Subclass 485 visa in 2026: Post-Higher Education (2 to 3 years), Post-Vocational Education (18 months) and Second streams, age 35, apply in 6 months. A$5,750.",
    intro:
      "The Temporary Graduate visa (subclass 485) lets international students who have just completed at least 2 academic years of CRICOS-registered study live, work and study in Australia temporarily, with full work rights. The Post-Higher Education Work stream gives degree graduates 2 to 3 years, the Post-Vocational Education Work stream gives diploma and trade graduates 18 months, and the Second Post-Higher Education Work stream gives regional graduates 1 or 2 more years. You must be 35 or under (with exceptions), apply in Australia within 6 months of completing your course, and the visa is often the bridge to a skilled or employer-sponsored permanent visa.",
    factsAsAt: FACTS_AS_AT,
    permanent: false,
    tags: ["Temporary", "Apply in Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$5,750", note: "Primary applicant, Post-Higher and Post-Vocational Education Work streams, 1 July 2026 charge; Second stream A$2,265" },
      { label: "Length of stay", value: "18 months to 3 years", note: "Depends on stream and qualification; up to 5 years for Hong Kong and BNO passport holders and up to 4 years for Indian nationals under AI-ECTA" },
      { label: "Work rights", value: "Unrestricted", note: "Any work for any employer; you must find your own employment" },
      { label: "Pathway to permanent residence", value: "Indirect", note: "Use the stay to gain skilled experience and a skills assessment for a subclass 189, 190, 491 or employer-sponsored visa" },
      { label: "Where to apply", value: "In Australia", note: "Not in immigration clearance; subsequent entrants can apply from in or outside Australia" },
      { label: "Sponsor or nomination", value: "None", note: "Eligibility rests on your recent Australian qualification" },
    ],
    alert: {
      title: "Age limit 35 and renamed streams since 1 July 2024",
      body: "From 1 July 2024 the maximum age for all streams is 35 or under at lodgement (under 50 for Hong Kong and BNO passport holders, and for Post-Higher Education Work applicants relying on a masters by research or PhD). The Graduate Work stream became the Post-Vocational Education Work stream, the Post-Study Work stream became the Post-Higher Education Work stream, the 'select degree' 2-year extension ended and the Replacement stream closed to new applications.",
      href: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/changes`,
      linkLabel: "Home Affairs: changes from 1 July 2024",
    },
    streams: [
      {
        name: "Post-Higher Education Work stream",
        summary: "For graduates of an Australian bachelor, honours, masters or doctoral degree (or a related graduate diploma) completed in the 6 months before applying, in any field of study.",
        forWhom: "University graduates aged 35 or under (under 50 if relying on a masters by research or PhD, or holding a Hong Kong or BNO passport).",
        stay: "2 years for a bachelor or coursework masters; 3 years for a masters by research or PhD; longer for Indian nationals under AI-ECTA; up to 5 years for Hong Kong and BNO passport holders",
        cost: "A$5,750 base charge",
        prPathway: "Indirect: gain experience for a skilled or employer-sponsored visa",
      },
      {
        name: "Post-Vocational Education Work stream",
        summary: "For graduates of an associate degree, diploma or trade qualification closely related to an occupation on the Medium and Long-term Strategic Skills List who have at least applied for a skills assessment.",
        forWhom: "VET and TAFE graduates aged 35 or under (under 50 for Hong Kong and BNO passport holders) with an MLTSSL occupation.",
        stay: "18 months; up to 5 years for Hong Kong and BNO passport holders",
        cost: "A$5,750 base charge",
        prPathway: "Indirect: a full skills assessment and work experience for a points-tested or employer-sponsored visa",
      },
      {
        name: "Second Post-Higher Education Work stream",
        summary: "A second visa for holders of a first Post-Higher Education Work, Post-Study Work or Replacement stream visa whose degree came from a regional campus and who have lived in a designated regional area for the last 2 years.",
        forWhom: "Regional graduates who want 1 extra year (Category 2 areas) or 2 extra years (Category 3 areas, or any regional area in Tasmania).",
        stay: "1 or 2 years, depending on where you studied and lived",
        cost: "A$2,265 base charge",
        prPathway: "Indirect: more time in a regional area for a subclass 491 or employer-sponsored regional visa",
      },
      {
        name: "Replacement stream (closed)",
        summary: "A one-off stream for graduates who lost time in Australia during COVID-19 travel restrictions. It ceased on 1 July 2024 and only applications lodged by 30 June 2024 are being decided.",
        forWhom: "Not available to new applicants; existing holders keep their visa until its expiry date.",
        stay: "As stated on the grant letter",
        cost: "Closed to new applications",
        prPathway: "Not applicable",
      },
    ],
    whoFor: [
      "You finished a bachelor, masters or PhD at an Australian university in the last 6 months, are 35 or under, and want to work in Australia while you build a case for permanent residence.",
      "You completed a diploma, advanced diploma or trade qualification in an MLTSSL occupation (for example a cookery, automotive or construction trade) and have applied for a skills assessment.",
      "You hold a first Post-Higher Education Work visa, studied at a regional campus and have lived in a regional area for 2 years, and want the Second Post-Higher Education Work stream.",
      "You are an Indian national whose first class honours STEM degree, masters or PhD attracts a longer stay under the Australia-India Economic Cooperation and Trade Agreement.",
      "You hold a Hong Kong or BNO passport and want the 5-year stay that can lead to the subclass 189 or 191 Hong Kong streams.",
    ],
    eligibility: [
      {
        title: "Age 35 or under when you apply",
        detail: "You must be 35 years of age or under on the day you lodge. You can be under 50 if you hold a Hong Kong or BNO passport, or if you rely on a masters by research or a doctoral degree to meet the study requirement in the Post-Higher Education Work stream (or relied on one for your first visa in the Second stream).",
        legal: "Migration Regulations 1994, Sch 2 Part 485 (criteria at time of application)",
      },
      {
        title: "In Australia on an eligible visa, and no earlier 485 or 476 as a primary applicant",
        detail: "You must be in Australia (not in immigration clearance) when you apply and hold a Student visa (not one sponsored by Defence or Foreign Affairs), or have held a Student visa in the last 6 months and now hold a Bridging visa A or B from a valid application or a substantive visa. If you previously held a subclass 485 or 476 visa as the primary applicant you cannot be granted another as a primary applicant, except for the Second Post-Higher Education Work stream. If your current visa carries condition 8534 or 8503 you cannot lodge online and must contact ImmiAccount support.",
        legal: "Migration Regulations 1994, Sch 1 item 1229 and Sch 2 Part 485",
      },
      {
        title: "Apply within 6 months of completing your course",
        detail: "The qualification you rely on must have been completed in the 6 months immediately before the day you apply, and at least the day before you lodge. The completion date is the date you were first told in writing that you met the academic requirements, not the graduation ceremony. Late applications cannot be accepted and applications are received in Australian Eastern time.",
        legal: "Migration Regulations 1994, Sch 2 Part 485",
      },
      {
        title: "Temporary Graduate visa study requirement",
        detail: "At least 2 academic years (92 weeks of CRICOS-registered study) resulting in an eligible bachelor degree or higher, diploma, advanced diploma or trade qualification, completed in Australia over at least 16 calendar months while you held a visa that allowed study, taught in English and registered on CRICOS. Failed subjects do not count; credit for overseas or non-CRICOS study does not count; English language and enabling courses do not count. Online study during the COVID concession period (1 February 2020 to 25 November 2023) still counts.",
        legal: "Migration Regulations 1994, Sch 2 Part 485 (Australian study requirement)",
      },
      {
        title: "Qualification matching your stream",
        detail: "Post-Higher Education Work: a bachelor, bachelor honours, masters (coursework, extended or research), doctoral or higher doctoral degree, or a graduate diploma completed in the same or the next academic year as, and related to, one of those degrees. Post-Vocational Education Work: an associate degree, diploma or trade qualification closely related to an occupation you nominate on the MLTSSL, with evidence that you have at least applied for a skills assessment; you cannot change the occupation after lodgement. The qualification you use decides the stream and you cannot change streams after you apply.",
        legal: "Migration Regulations 1994, Sch 2 Part 485; LIN 19/051 (occupations and assessing authorities)",
      },
      {
        title: "Second stream: regional study and 2 years' regional residence",
        detail: "You must still hold your first Post-Higher Education Work, Post-Study Work or Replacement stream visa; the degree that led to it must be from a CRICOS-registered provider's campus in a designated regional area; you must have lived only in designated regional areas for the 2 years immediately before applying; and any work or study on the first visa must have been in a regional area. Category 2 residence and study gives 1 extra year, Category 3 gives 2 extra years, and any mix of Category 2 and 3 in Tasmania gives 2 extra years. Holders of a Post-Vocational Education Work, Second stream or subclass 476 visa as primary applicant are not eligible.",
        legal: "Migration Regulations 1994, Sch 2 Part 485 (Second Post-Higher Education Work stream)",
      },
      {
        title: "English language",
        detail: "A citizen of the United Kingdom, the United States, Canada, New Zealand or Ireland holding that passport meets the requirement. Otherwise, in the 12 months before applying you must have scored, for a test taken on or after 7 August 2025, at least IELTS Academic or General Training 6.5 overall with 5.5 in each component, PTE Academic 55 overall with 39 speaking, 41 writing, 42 reading and 40 listening, TOEFL iBT 81 overall, CELPIP General 8 overall, MET 58 overall, LANGUAGECERT Academic 67 overall or OET 1310 overall (see the Home Affairs table for every component). Hong Kong and BNO passport holders need lower scores (IELTS 6 overall with 5 in each component, PTE 47 overall). Tests must be taken at a secure test centre; the Department does not accept online tests. Earlier tests taken by 6 August 2025 have their own score table.",
        legal: "Migration Regulations 1994, Sch 2 Part 485; LIN 25/016",
      },
      {
        title: "Australian Federal Police check applied for before you lodge",
        detail: "Every applicant aged 16 or over must show they applied for an AFP complete disclosure National Police Certificate (Immigration/Citizenship - Australia Name Check Only) within the 12 months ending the day before the visa application. Applying on the same day as the visa application does not meet the requirement. The Department may also ask for overseas police certificates for countries where you spent 12 months or more in the last 10 years since turning 16, and Forms 80 and 1221.",
        legal: "Migration Regulations 1994, Sch 2 Part 485; Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Adequate health insurance for every applicant",
        detail: "You must attach evidence of adequate health insurance for all applicants when you lodge (a signed letter from the insurer, a Medicare card or enrolment evidence) and maintain it for the whole stay under condition 8501. Citizens of countries with a reciprocal health care agreement may use Medicare.",
        legal: "Migration Regulations 1994, Sch 2 Part 485; Sch 8 condition 8501",
      },
      {
        title: "Health, values statement, debts and true information",
        detail: "You and every family member included must meet the health requirement; applicants aged 18 or over sign the Australian Values Statement; debts to the Australian Government must be repaid or under an arrangement; and false or misleading information leads to refusal under PIC 4020 and a 3-year bar. Your immigration history, including any cancellation or refusal, is considered.",
        legal: "PIC 4005, 4019 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "You can include members of your family unit who are in Australia when you lodge. After lodging you can add a dependent child but no other family member until a decision is made. Partners and children who were not included can apply later as subsequent entrants from in or outside Australia while your visa is valid, and they pay the full visa application charge. Every family member needs adequate health insurance, and those aged 16 or over must show they applied for an AFP check. A child born after you apply is taken to have applied with you; tell the Department with Form 1022 and the birth certificate.",
    documents: [
      {
        group: "Identity and study",
        items: [
          "Current passport pages (get any new passport before you apply), national identity card and change of name documents",
          "Completion letter from your provider showing the course start and end dates, completion date, campus location, mode of study (any distance learning), full-time or part-time and language of instruction, with a statement about any credit relied on",
          "Academic transcripts for every course used to meet the 2 academic years",
          "Post-Vocational Education Work stream: your skills assessment, or the receipt showing you applied to the assessing authority for your nominated MLTSSL occupation",
          "Second stream: driver's licence, utility bills, tenancy or mortgage documents, bank statements and children's school records showing 2 years of regional residence, plus evidence that any work or study was in a regional area",
        ],
      },
      {
        group: "English",
        items: [
          "Test report for a test taken at a secure test centre in the 12 months before you apply, with any IELTS One Skill Retake or MET Single Section Retake completed before lodgement",
          "OET applicants: the overall score obtained from OET, because it is not printed on the report",
          "Or your passport from the United Kingdom, the United States, Canada, New Zealand or Ireland",
        ],
      },
      {
        group: "Health and character",
        items: [
          "AFP application receipt or confirmation page dated no later than the day before you lodge, for every applicant aged 16 or over",
          "Form 80 Personal particulars for character assessment and Form 1221 Additional personal particulars",
          "Evidence of adequate health insurance for every applicant: insurer letter, Medicare card or enrolment evidence",
          "Overseas police certificates and military records if the Department asks for them",
        ],
      },
      {
        group: "Family members",
        items: [
          "Marriage certificate or de facto evidence (12 months of cohabitation or a registered relationship) and partner identity and character documents",
          "Birth certificates for children, and Form 1229 consent, a statutory declaration or a court order where a parent with legal responsibility is not migrating",
          "Form 47a and dependency evidence for a child aged 18 to 22, and a medical report where the child is or will turn 23",
        ],
      },
    ],
    steps: [
      {
        title: "Get your completion letter and check the 6-month window",
        description: "Ask your provider for the completion letter as soon as you are notified that you have met the academic requirements. Count 6 months from that date; this is your lodgement deadline, and the Department does not give pre-lodgement assessments.",
        output: "You hold: a completion letter and a lodgement deadline",
      },
      {
        title: "Book an English test if you do not have a result from the last 12 months",
        description: "Take an approved test at a secure test centre and complete any retake before you lodge. Citizens of the five English-speaking countries use their passport instead.",
        output: "You hold: a test result valid at lodgement",
      },
      {
        title: "Apply for an AFP check and arrange health insurance",
        description: "Lodge the AFP National Police Check (Immigration/Citizenship - Australia Name Check Only) at least the day before your visa application and keep the receipt. Arrange health insurance for every applicant; student cover must be replaced by a policy that meets the adequate health insurance standard.",
        output: "You hold: an AFP receipt dated before lodgement and health insurance evidence for all applicants",
      },
      {
        title: "Post-Vocational Education Work stream only: apply for a skills assessment",
        description: "Nominate an MLTSSL occupation closely related to your qualification and apply to the assessing authority listed for it. You must attach either the assessment or proof that you applied. Many authorities issue a provisional assessment for the 485 that is not valid for permanent visas.",
        output: "You hold: a skills assessment or an application receipt from the assessing authority",
      },
      {
        title: "Lodge in ImmiAccount within 6 months of course completion",
        description: "Choose the stream carefully because it cannot be changed after lodgement. Attach the completion evidence, English evidence, AFP receipts and health insurance for every applicant and pay the charge for everyone (A$5,750 for the primary applicant in the Post-Higher and Post-Vocational Education Work streams). You are usually granted a Bridging visa A that starts when your Student visa ends.",
        output: "You hold: a valid application and a Bridging visa A with full work rights once your Student visa ends",
      },
      {
        title: "Health examinations and further information",
        description: "Complete health examinations if asked and reply to requests within the time given. The Department can decide the application once the time has passed. You can be in or outside Australia when the decision is made.",
        output: "You hold: a complete file",
      },
      {
        title: "Grant, then withdraw other undecided applications",
        description: "The grant email shows the grant date, expiry and conditions. Home Affairs recommends withdrawing any other undecided visa application in writing so you are not granted a different visa later. Plan the next visa early because the 485 cannot be extended.",
        output: "You hold: a Temporary Graduate visa starting on the grant date",
      },
    ],
    conditions: [
      { code: "8501", meaning: "You must have and maintain adequate health insurance for the whole of your stay in Australia. Listed by the Home Affairs conditions tool for the Post-Higher and Post-Vocational Education Work streams." },
      { code: "8610", meaning: "Second Post-Higher Education Work stream only: you must live, work and study only in an area that was a designated regional area on the date the visa was granted." },
    ],
    costs: [
      { item: "Base application charge (Post-Higher or Post-Vocational Education Work stream)", amount: "A$5,750", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$2,875", note: "Post-Higher and Post-Vocational Education Work streams; subsequent entrants pay the full charge" },
      { item: "Additional applicant under 18", amount: "A$1,450", note: "Post-Higher and Post-Vocational Education Work streams" },
      { item: "Base application charge (Second Post-Higher Education Work stream)", amount: "A$2,265", note: "Primary applicant; A$1,140 per adult and A$575 per child" },
      { item: "Non-internet application charge", amount: "A$80", note: "Only if the Department allows a paper application" },
      { item: "Subsequent temporary application charge", amount: "Not payable", note: "Home Affairs states the Temporary Graduate visa is exempt from the A$700 subsequent temporary application charge" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "Applied automatically in ImmiAccount based on the primary applicant's passport" },
      { item: "English test, AFP check, health insurance and health examinations", amount: "Typical third-party cost", note: "Paid to the test provider, AFP, insurer and panel physician" },
      { item: "Skills assessment (Post-Vocational Education Work stream)", amount: "Typical third-party cost", note: "Set by the assessing authority" },
    ],
    afterGrant: [
      "Keep adequate health insurance for every visa holder for the whole stay (condition 8501). Letting it lapse breaches the visa.",
      "You can work for any employer in any job, study and travel in and out of Australia on a multiple-entry visa; time outside Australia does not extend the visa.",
      "Second stream holders must live, work and study only in a designated regional area (condition 8610).",
      "Tell the Department of changes to your passport, contact details, relationship status or the birth of a child.",
      "The visa cannot be extended. Lodge a SkillSelect expression of interest, obtain a full skills assessment or secure employer sponsorship well before expiry; a bridging visa only arises when you lodge a new valid application in Australia.",
      "Family members who did not apply with you can join you as subsequent entrants while the visa is valid and must enter Australia by their initial entry date.",
    ],
    pathways: [
      { title: "Skilled Independent, Nominated or Regional visas", description: "Use the 485 period to gain 1 to 3 years of skilled employment, a full skills assessment and English points, then lodge an EOI for a subclass 189, 190 or 491 visa.", href: "/visas/skilled/skillselect-expression-of-interest" },
      { title: "Skills in Demand visa (subclass 482)", description: "An employer can sponsor you in a Core Skills or Specialist Skills occupation once you have at least 1 year of relevant experience.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "Second Post-Higher Education Work stream", description: "Regional graduates who live in a designated regional area for 2 years on the first visa can get 1 or 2 more years." },
      { title: "Study to permanent residence guide", description: "How the student, graduate and skilled visa stages fit together.", href: "/visas/study/study-to-permanent-residence" },
      { title: "Hong Kong and BNO passport holders", description: "A 5-year 485 can lead to the subclass 189 Hong Kong stream after 4 years or the subclass 191 Hong Kong stream after 3 years in a regional area.", href: "/visas/skilled/permanent-residence-skilled-regional-visa-191" },
    ],
    risks: [
      "Lodging more than 6 months after the course completion date, or before the course is completed, so the application is invalid; the completion date is the date of written notification, not graduation.",
      "Choosing the wrong stream (for example Post-Higher Education Work with a diploma) because the stream cannot be changed after lodgement.",
      "Applying for the AFP check on the same day as the visa, or forgetting health insurance evidence for a family member, so a time-of-application requirement is missed.",
      "An English test older than 12 months, a retake completed after lodgement, or an online test, none of which the Department accepts.",
      "Credits or exemptions that cut the Australian study below 92 weeks or 16 calendar months, so the study requirement fails.",
      "Turning 36 before lodgement, or having previously held a 485 or 476 as the primary applicant.",
      "Post-Vocational Education Work stream: an occupation that is not on the MLTSSL or a qualification the assessing authority does not accept as closely related.",
    ],
    faqs: [
      {
        question: "How long can I stay on a subclass 485 visa?",
        answer: "Post-Higher Education Work: 2 years for a bachelor (including honours) or masters by coursework or extended masters, 3 years for a masters by research or PhD, and 2 years by default for a graduate diploma. Indian nationals get 2 years for a bachelor, 3 years for a bachelor with first class honours in STEM (including ICT) or any masters, and 4 years for a PhD. Post-Vocational Education Work: 18 months. Hong Kong and BNO passport holders may stay up to 5 years in either stream. The Second stream adds 1 or 2 years.",
      },
      {
        question: "When do I have to apply?",
        answer: "Within 6 months of the date your provider first told you in writing that you met the academic requirements for the qualification, and no earlier than the day after completion. You must be in Australia and hold a Student visa, or have held one in the last 6 months and now hold a Bridging visa A or B from a valid application or a substantive visa.",
      },
      {
        question: "Can I apply if my Student visa has already expired?",
        answer: "Yes, if you held the Student visa within the last 6 months and now hold a substantive visa, or a Bridging visa A or B that was granted on a valid visa application. You cannot apply if you are unlawful or hold a Bridging visa C, D or E, and you must not be in immigration clearance.",
      },
      {
        question: "Can I work full time and bring my partner?",
        answer: "Yes. The 485 has no work limit, but you must find your own employment. Family members in Australia can be included when you apply, and others can join you later as subsequent entrants from in or outside Australia. Every applicant needs health insurance and those aged 16 or over must apply for an AFP check before lodgement.",
      },
      {
        question: "Can the 485 be extended or granted twice?",
        answer: "No. The visa cannot be extended and a person who held a 485 or 476 as the primary applicant cannot be granted another, except through the Second Post-Higher Education Work stream for regional graduates. Hong Kong and BNO passport holders may have a permanent pathway after 5 years.",
      },
      {
        question: "What does the subclass 485 visa cost in 2026?",
        answer: "From 1 July 2026 the Post-Higher and Post-Vocational Education Work streams cost A$5,750 for the primary applicant, A$2,875 for each additional applicant aged 18 or over and A$1,450 for each child. The Second Post-Higher Education Work stream costs A$2,265, A$1,140 and A$575. The 485 is exempt from the A$700 subsequent temporary application charge. The charge is not refunded if the visa is refused.",
      },
      {
        question: "What is the Temporary Graduate visa study requirement?",
        answer: "At least 2 academic years (92 weeks as registered on CRICOS) of successfully completed study resulting in an eligible qualification, taught in English at an Australian campus, over at least 16 calendar months while you held a visa allowing study. More than one course can be combined. Credit for overseas or non-CRICOS study, failed subjects, ELICOS and enabling courses do not count.",
      },
      {
        question: "Do I need a skills assessment?",
        answer: "Only in the Post-Vocational Education Work stream, where you must nominate an MLTSSL occupation and show you have at least applied for an assessment by the relevant authority. Post-Higher Education Work applicants do not need one for the 485, but a provisional 485 assessment is not accepted for the subclass 189, 190 or 491 visas, so a full assessment is needed later.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 485 (criteria, streams and conditions)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1229 (application requirements for the Temporary Graduate (Class VC) visa)", url: REGS },
      { label: "Migration Act 1958, ss 46, 65, 116 and 501", url: ACT },
      { label: "LIN 25/016: Specification of Language Tests, Test Scores and Passports", url: LIN_25_016 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities (Post-Vocational Education Work stream)", url: LIN_19_051 },
      { label: "PIC 4001, 4005, 4019 and 4020 (Sch 4); conditions 8501 and 8610 (Sch 8)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Temporary Graduate visa (subclass 485)", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485` },
      { label: "Home Affairs: Post-Higher Education Work stream", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work` },
      { label: "Home Affairs: Post-Vocational Education Work stream", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-vocational-education-work` },
      { label: "Home Affairs: Second Post-Higher Education Work stream", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/second-post-higher-education-work` },
      { label: "Home Affairs: Replacement stream (visa holders)", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/replacement-stream` },
      { label: "Home Affairs: changes to the Temporary Graduate visa from 1 July 2024", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/changes` },
      { label: "Home Affairs: meeting the Temporary Graduate visa study requirement", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/meeting-the-temporary-graduate-visa-subclass-485-study-requirement` },
      { label: "Home Affairs: Australian study requirement", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/australian-study-requirement` },
      { label: "Home Affairs: skills assessment", url: SKILLS_ASSESSMENT },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: designated regional areas", url: `${HA}/visas/working-in-australia/regional-migration/eligible-regional-areas` },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "Study to permanent residence", href: "/visas/study/study-to-permanent-residence" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "SkillSelect expression of interest", href: "/visas/skilled/skillselect-expression-of-interest" },
      { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
      { label: "Student visa services", href: "/services/student-visas" },
    ],
    keywords: ["485 visa", "subclass 485", "temporary graduate visa", "485 visa requirements", "485 visa age limit 35", "post higher education work stream", "post vocational education work stream", "second 485 visa regional", "485 visa cost 2026", "graduate visa australia"],
  },
  // ───────────────────────────── Subclass 858 ─────────────────────────────
  {
    slug: "national-innovation-visa-858",
    category: "skilled",
    kind: "visa",
    subclass: "858",
    name: "National Innovation visa",
    title: "National Innovation visa (subclass 858)",
    seoTitle: "Subclass 858 National Innovation visa: eligibility, cost",
    seoDescription:
      "Subclass 858 National Innovation visa 2026: EOI and invitation, exceptional achievement, Form 1000 nominator, priority sectors. Base charge A$6,235.",
    intro:
      "The National Innovation visa (subclass 858) is a permanent, invitation-only visa for people with an internationally recognised record of exceptional and outstanding achievement in a profession, a sport, the arts or academia and research. You lodge an expression of interest, the Department invites candidates in the priority order set by Ministerial Direction No. 120, and you then apply within 60 days with a Form 1000 nomination from a person or organisation with a national reputation in your field. It gives permanent residence from grant and leads to citizenship.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Invitation only", "Apply in or outside Australia"],
    keyFacts: [
      { label: "Government fee", value: "A$6,235", note: "Primary applicant, 1 July 2026 charge; second instalment A$4,890 for each adult without functional English" },
      { label: "Length of stay", value: "Permanent", note: "Travel facility for 5 years from grant, then a Resident Return visa to re-enter" },
      { label: "Work rights", value: "Unrestricted", note: "The Department expects you to contribute to Australia in your area of expertise" },
      { label: "Pathway to permanent residence", value: "Permanent on grant", note: "Citizenship by conferral once you meet the residence requirement" },
      { label: "Where to apply", value: "In or outside Australia", note: "Not in immigration clearance; onshore applicants must hold a substantive visa or a Bridging A, B or C visa" },
      { label: "Sponsor or nomination", value: "Nominator on Form 1000", note: "An Australian citizen, permanent resident, eligible New Zealand citizen or Australian organisation with a national reputation in your field" },
    ],
    alert: {
      title: "Invitations follow the Ministerial Direction 120 priority order",
      body: "Priority one: global experts who hold international top-of-field awards. Priority two: candidates nominated on Form 1000 by an expert Australian Government or state or territory agency. Priority three: Tier One sectors (critical technologies, renewables and low emission technologies, health industries). Priority four: Tier Two sectors (agri-food and AgTech, defence capabilities and space, education, financial services and FinTech, infrastructure and transport, resources).",
      href: `${HA}/visas/working-in-australia/visas-for-innovation/national-innovation-visa/priorities`,
      linkLabel: "Home Affairs: National Innovation visa priorities",
    },
    whoFor: [
      "You are a researcher with publications in top-ranked journals, a high h-index for your career stage, a research PhD from a top global university or a national-level research grant.",
      "You are an entrepreneur or innovative investor with a track record of successful ventures, patents, an IPO or commercialisation linked to Australian innovation hubs.",
      "You are an athlete, artist or performer with top-of-field international awards or sustained, well-recognised achievement.",
      "You are a senior academic (Level D or E or the international equivalent) or an executive earning at or above the Fair Work high income threshold in a priority sector.",
      "An expert Australian Government or state or territory agency is willing to nominate you on Form 1000 for its strategic priorities.",
    ],
    eligibility: [
      {
        title: "Invited to apply after an expression of interest",
        detail: "You can only apply if the Department invites you. Lodge an expression of interest (EOI) using the National Innovation visa EOI form with your passport bio-data page, CV and highest qualification. The EOI stays active for 2 years and cannot be updated; lodge a new one only after a significant change or new achievements. If invited, you receive a unique reference and invitation code and must lodge within 60 days, which cannot be extended. Applications lodged without an invitation are not accepted, and an EOI gives no bridging visa.",
        legal: "Migration Regulations 1994, Sch 2 Part 858 and Sch 1 (application requirements); Migration Act 1958, s 46",
      },
      {
        title: "Nominated on Form 1000 by a nominator with a national reputation",
        detail: "Attach a completed and signed Nomination for National Innovation visa (Form 1000) when you apply, or the application will not be processed. The nominator must have a national reputation in the same area as you and be an Australian citizen, an Australian permanent resident, an eligible New Zealand citizen or an Australian organisation. For an organisation, show the signatory is authorised to represent it.",
        legal: "Migration Regulations 1994, Sch 2 Part 858 (nomination)",
      },
      {
        title: "Internationally recognised record of exceptional and outstanding achievement",
        detail: "In a profession, a sport, the arts, or academia and research. You must have superior abilities and achievements compared with others in your area, be acclaimed as exceptional in any country where the area is practised, and have a record of sustained achievement unlikely to diminish in the near future. The area must be recognised and accepted in Australia and have international standing. Ministerial Direction No. 120 lists the indicators: top-of-field awards (Nobel, Breakthrough, Fields, Turing, Pulitzer, International Booker, Olympic gold, Laureus), national research grants, PhDs with high academic influence, keynotes, patents and earnings at or above the Fair Work high income threshold.",
        legal: "Migration Regulations 1994, Sch 2 Part 858; Migration Act 1958, s 499 (Ministerial Direction No. 120)",
      },
      {
        title: "Still prominent in your area",
        detail: "You must continue to be active in your area with recent exceptional achievements. Evidence that shows historical achievement only, without recent prominence, does not satisfy this criterion.",
        legal: "Migration Regulations 1994, Sch 2 Part 858",
      },
      {
        title: "An asset to the Australian community",
        detail: "Your contribution may be economic, social, cultural, or raise Australia's academic, artistic or sporting standing internationally, and it must benefit the nation as a whole rather than one organisation.",
        legal: "Migration Regulations 1994, Sch 2 Part 858",
      },
      {
        title: "Able to establish yourself in Australia",
        detail: "Show that you would have no difficulty finding work, or becoming independently established, in your area of expertise in Australia: a statement of your knowledge of opportunities, information from your nominator, letters from Australian organisations about employment or business opportunities, and your employment or business background. Income from work outside your field does not count.",
        legal: "Migration Regulations 1994, Sch 2 Part 858",
      },
      {
        title: "Age: any age, with an extra test under 18 and at 55 or over",
        detail: "There is no age limit, but an applicant under 18 or aged 55 or over at lodgement must be of exceptional benefit to the Australian community: ongoing, sustained and realised shortly after migration, such as exceptional contributions to the economy, large-scale job creation, research and innovation in sectors of national importance or enhancing Australia's global standing. Applicants under 18 must also show they can support themselves in their area without family financial support.",
        legal: "Migration Regulations 1994, Sch 2 Part 858",
      },
      {
        title: "Functional English or the second instalment",
        detail: "Each applicant aged 18 or over must show at least functional English at lodgement or pay a second instalment of A$4,890 when the Department asks, before grant. Tell the Department through ImmiAccount if you intend to pay the second instalment instead of providing evidence.",
        legal: "Migration Regulations 1994, Sch 2 Part 858; LIN 25/014",
      },
      {
        title: "Visa status if applying in Australia",
        detail: "Outside Australia you do not need any particular visa. In Australia you must hold a substantive visa or a Bridging visa A, B or C. If you hold, or last held, a subclass 491 or 494 visa you must have held it for at least 3 years.",
        legal: "Migration Regulations 1994, Sch 2 Part 858; Migration Act 1958, s 48",
      },
      {
        title: "Health, character, debts, values statement and true information",
        detail: "You and every family member, whether or not they accompany you, must meet the health and character requirements (family members aged 16 or over for character). Debts to the Australian Government must be repaid or under an arrangement, applicants aged 18 or over sign the Australian Values Statement, and false or misleading information or bogus documents lead to refusal under PIC 4020 and a 3-year bar.",
        legal: "Migration Act 1958, s 501; PIC 4001, 4004, 4019 and 4020 (Sch 4)",
      },
    ],
    familyNote:
      "You can include members of your family unit when you apply and add them at any time before a decision with Form 1436. An applicant under 18 can only include their parents and the members of those parents' family unit. Every family member must meet health and character requirements whether or not they are coming to Australia. Each family member aged 18 or over without functional English attracts the A$4,890 second instalment. A child aged 18 to 22 must have been financially dependent on you for at least 12 months before you apply, and a child aged 23 or over must be dependent because of a physical or cognitive limitation.",
    documents: [
      {
        group: "Identity and relationships",
        items: [
          "Current passport pages, national identity card, change of name documents and a digital photograph of each applicant (full face, white background)",
          "Marriage, divorce, death or separation documents, and partner relationship evidence (joint accounts, leases, bills)",
          "Birth certificates for children, Form 1229 consent where a parent is not migrating, and Form 47a with dependency evidence for children aged 18 or over",
        ],
      },
      {
        group: "Record of achievement and ability to establish",
        items: [
          "Evidence of the achievements that formed the basis of your invitation: awards and prizes, national research grants, PhD from a top-ranked university, recent publications in top journals and h-index, keynote appearances, international patents, IPO or venture track record, sporting results, commissioned works and honours",
          "Earnings or an employment offer at or above the Fair Work high income threshold in your area, professional designations (Academic Level D or E), board or advisory appointments, peak body statements and international media coverage",
          "For applicants under 18 or aged 55 or over: a statement of professional plans, senior employment offer, service agreements or contracts with prominent Australian organisations, business plan, research grants or regulatory appointments showing exceptional benefit",
          "Ability to establish: a statement of opportunities in Australia, letters from Australian organisations, qualifications or experience gained in Australia and your employment or business background",
        ],
      },
      {
        group: "Nominator",
        items: [
          "Completed and signed Form 1000 Nomination for National Innovation visa",
          "Evidence of the nominator's national reputation in your area",
          "Evidence of the nominator's Australian citizenship, permanent residence or eligible New Zealand citizen status, or that the signatory is authorised to represent the nominating organisation",
        ],
      },
      {
        group: "Health, character and English",
        items: [
          "AFP complete disclosure certificate if you spent 12 months or more in Australia in the last 10 years since turning 16, and overseas police certificates for every other such country (some countries need a Department letter, issued after lodgement)",
          "Military service or discharge records, and Forms 80 and 1221 if requested",
          "Functional English evidence for each applicant aged 18 or over, or a statement that you will pay the second instalment",
          "Health examinations when the Department requests them; wait for the request unless you completed them before applying",
        ],
      },
    ],
    steps: [
      {
        title: "Identify a nominator early",
        description: "Find a person or organisation with a national reputation in your area who will attest to your achievements on Form 1000. The form must be lodged with the application, so secure the nominator before you expect an invitation.",
        output: "You hold: a nominator who meets the citizenship, residence or organisation requirement",
      },
      {
        title: "Lodge an expression of interest",
        description: "Use the National Innovation visa EOI form and attach your passport bio-data page, CV and highest qualification in PDF, JPG or PNG, with English translations. Candidates nominated by an expert government agency also attach Form 1000 Part A and the agency's supporting statement. You cannot add information after submission.",
        output: "You hold: an EOI acknowledgement letter",
      },
      {
        title: "Wait for an invitation (up to 2 years)",
        description: "The Department issues invitations in the Ministerial Direction 120 priority order and does not give progress updates. An EOI expires after 2 years. To change your claims, withdraw by email to National.Innovation@homeaffairs.gov.au and lodge a new EOI. Keep a valid visa if you are in Australia; an EOI gives no bridging visa.",
        output: "You hold: an invitation email with a unique reference, invitation code and the achievements that formed the basis of the invitation",
      },
      {
        title: "Apply within 60 days in ImmiAccount",
        description: "Lodge the application with the completed Form 1000, evidence of the invited achievements, nominator evidence and identity, English, health and character documents, and pay A$6,235 for the primary applicant plus the charge for each family member. The 60-day period cannot be extended; if you miss it you need a new EOI.",
        output: "You hold: a lodged application with a transaction reference number",
      },
      {
        title: "Health, biometrics and requests for information",
        description: "Complete health examinations when requested and provide biometrics or further documents if asked. The Department may decide the application without a request, so lodge complete evidence.",
        output: "You hold: a complete file assessed under Ministerial Direction 120",
      },
      {
        title: "Decision",
        description: "A grant letter shows the grant number, start date and any conditions. Permanent residence starts on grant if you are in Australia or on first entry if you are outside Australia. If refused, the letter explains why and whether the Administrative Review Tribunal can review the decision; the charge is not refunded.",
        output: "You hold: a permanent visa with a 5-year travel facility",
      },
    ],
    conditions: [],
    costs: [
      { item: "Base application charge", amount: "A$6,235", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Additional applicant aged 18 or over", amount: "A$3,120", note: "Each adult family member included" },
      { item: "Additional applicant under 18", amount: "A$1,560", note: "Each child included" },
      { item: "Second instalment (less than functional English)", amount: "A$4,890", note: "For each applicant aged 18 or over without functional English, payable only when the Department is ready to grant" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, applied automatically in ImmiAccount based on the primary applicant's passport" },
      { item: "Expression of interest", amount: "No charge", note: "Lodged through the Home Affairs online form" },
      { item: "Health examinations, police certificates, biometrics and translations", amount: "Typical third-party cost", note: "Paid to the provider" },
    ],
    afterGrant: [
      "You become a permanent resident on the day of grant if you are in Australia, or on first entry if you were outside Australia. The Department expects you to contribute to Australia in your area of expertise.",
      "The travel facility lasts 5 years from grant; after that you need a Resident Return visa (subclass 155 or 157) to re-enter as a permanent resident.",
      "You can live, work and study anywhere in Australia, enrol in Medicare, attend AMEP English classes if eligible and sponsor eligible relatives; some government payments have a waiting period for newly arrived residents.",
      "New Zealand citizens should tell border officers they hold a subclass 858 visa and do not want a Special Category visa (subclass 444).",
      "Tell the Department of passport or address changes. A permanent visa can be cancelled under s 501 (character) or s 109 (incorrect information).",
    ],
    pathways: [
      { title: "Australian citizenship by conferral", description: "Apply once you meet the residence requirement counted from the start of permanent residence.", href: "/visas/other-visas/australian-citizenship-by-conferral" },
      { title: "Resident Return visa (subclass 155 or 157)", description: "Needed to travel after the 5-year travel facility ends.", href: "/visas/other-visas/resident-return-visa-155-157" },
      { title: "Sponsor your partner or parents", description: "Permanent residents can sponsor family members for partner and parent visas.", href: "/visas/family/partner-visa-offshore-309-100" },
      { title: "Not invited? Employer-sponsored options", description: "High earners with an Australian employer can look at the Skills in Demand visa (subclass 482) Specialist Skills stream or the Employer Nomination Scheme (subclass 186).", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
    ],
    risks: [
      "An EOI that does not show top-of-field awards, a government agency nomination or achievements in a Tier One or Tier Two sector may never be invited; the Department gives no updates and there is no review of a non-invitation.",
      "Form 1000 missing, unsigned or completed by a nominator without a national reputation in the same area, so the application is not processed or the nomination criterion fails.",
      "Achievements that are national rather than international, or historical without recent prominence, so the exceptional achievement and still prominent criteria are not met.",
      "Applicants aged 55 or over who cannot show ongoing, sustained benefit realised shortly after migration.",
      "Evidence in the visa application that does not match the achievements claimed in the EOI and listed in the invitation.",
      "PIC 4020: inflated CVs, unverifiable awards or altered documents lead to refusal and a 3-year bar.",
    ],
    faqs: [
      {
        question: "What counts as exceptional and outstanding achievement?",
        answer: "Ministerial Direction No. 120 lists the indicators: international top-of-field awards such as Nobel, Breakthrough, Fields, Turing, Pulitzer or International Booker prizes and Olympic gold medals; national-level research grants; PhDs with high academic influence (top-journal publications, a high h-index for your career stage, a research degree from a top 100 university); recent keynotes at high-profile international conferences; recognised intellectual property such as international patents; and earnings or an Australian job offer at or above the Fair Work high income threshold.",
      },
      {
        question: "Who can be my nominator?",
        answer: "An Australian citizen, Australian permanent resident, eligible New Zealand citizen or Australian organisation with a national reputation in the same area as you. The nominator completes and signs Form 1000, which must be attached when you lodge. Candidates nominated by an expert Australian Government or state or territory agency receive priority two in the invitation order.",
      },
      {
        question: "How long does an EOI last and can I update it?",
        answer: "An EOI stays active for 2 years from submission and you cannot add documents or change information after you submit it. If your circumstances change significantly or you gain new achievements, withdraw the EOI by email and lodge a new one. If you are not invited within 2 years the EOI expires and the Department notifies you.",
      },
      {
        question: "Is there an age limit?",
        answer: "No. Applicants of any age can apply, but an applicant under 18 or aged 55 or over must show they would be of exceptional benefit to the Australian community, with benefit that is ongoing, sustained and realised shortly after migration.",
      },
      {
        question: "Do I need to prove English?",
        answer: "Every applicant aged 18 or over must show at least functional English at lodgement or pay a second instalment of A$4,890 before grant. There is no competent English requirement and no points test for this visa.",
      },
      {
        question: "What does the National Innovation visa cost in 2026?",
        answer: "From 1 July 2026 the base charge is A$6,235 for the primary applicant, A$3,120 for each additional applicant aged 18 or over and A$1,560 for each child. The second instalment of A$4,890 applies to each adult without functional English. The EOI is free, and health examinations, police certificates and translations are extra.",
      },
      {
        question: "Can I apply from outside Australia?",
        answer: "Yes. You can be in or outside Australia when you lodge and when the visa is decided, but not in immigration clearance. Outside Australia you do not need any particular visa first; in Australia you must hold a substantive visa or a Bridging visa A, B or C.",
      },
      {
        question: "Is this the same as the Global Talent visa?",
        answer: "The National Innovation visa uses subclass 858, which earlier carried the Global Talent and Distinguished Talent visas. Ministerial Direction No. 120 sets the processing order for current National Innovation visa applications and for undecided former Global Talent and Distinguished Talent applications.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 858 (criteria)", url: REGS },
      { label: "Migration Act 1958, s 499 (ministerial directions) and ss 46, 48, 65, 109 and 501", url: ACT },
      { label: "Ministerial Direction No. 120 (order of processing and achievement indicators)", url: `${HA}/Visa-subsite/files/md-120.pdf` },
      { label: "LIN 25/014: Evidence of Functional English Language Proficiency", url: LIN_25_014 },
      { label: "PIC 4001, 4004, 4019 and 4020 (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: National Innovation visa (subclass 858)", url: `${HA}/visas/getting-a-visa/visa-listing/national-innovation-visa-858` },
      { label: "Home Affairs: National Innovation visa program page", url: `${HA}/visas/working-in-australia/visas-for-innovation/national-innovation-visa` },
      { label: "Home Affairs: submitting your expression of interest", url: `${HA}/visas/working-in-australia/visas-for-innovation/national-innovation-visa/eoi-submission` },
      { label: "Home Affairs: after submitting your expression of interest", url: `${HA}/visas/working-in-australia/visas-for-innovation/national-innovation-visa/after-submission` },
      { label: "Home Affairs: National Innovation visa priorities", url: `${HA}/visas/working-in-australia/visas-for-innovation/national-innovation-visa/priorities` },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: health requirement", url: HEALTH },
      { label: "Home Affairs: character requirement", url: CHARACTER },
      { label: "Home Affairs: visa conditions tool", url: CONDITIONS_TOOL },
      { label: "Home Affairs: current visa pricing", url: FEES_PAGE },
      { label: "Home Affairs: global visa processing times", url: PROCESSING_TIMES },
    ],
    related: [
      { label: "Skilled visa services", href: "/services/skilled-visas" },
      { label: "Skilled Independent visa (subclass 189)", href: "/visas/skilled/skilled-independent-visa-189" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Employer Nomination Scheme visa (subclass 186)", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
      { label: "Visa finder", href: "/tools/visa-finder" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: ["858 visa", "subclass 858", "national innovation visa", "national innovation visa requirements", "NIV visa australia", "global talent visa replacement", "858 visa cost 2026", "form 1000 nominator", "exceptional achievement visa", "ministerial direction 120"],
  },
  // ───────────────────────── Guide: points test ──────────────────────────
  {
    slug: "skilled-migration-points-test",
    category: "skilled",
    kind: "guide",
    name: "Skilled migration points test",
    title: "Skilled migration points test (subclass 189, 190 and 491)",
    seoTitle: "Skilled migration points test 2026: full table, 65 points",
    seoDescription:
      "Skilled migration points test 2026: points for age, English, work, qualifications, study, partner and nomination, 65 pass mark and how SkillSelect ranks EOIs.",
    intro:
      "The skilled migration points test decides who is invited to apply for the Skilled Independent (subclass 189), Skilled Nominated (subclass 190) and Skilled Work Regional (subclass 491) visas. You need at least 65 points, scored mainly at the time of invitation, for age, English, skilled employment, qualifications, Australian study, a Professional Year, a community language credential, your partner and any state nomination or family sponsorship. Invitations go to the highest-ranked expressions of interest, so the score that actually gets invited is usually well above 65.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Points tested", "Invitation only"],
    keyFacts: [
      { label: "Government fee", value: "None for an EOI", note: "Visa charges apply once invited: subclass 189 A$6,135; subclass 190 and 491 A$6,140 (1 July 2026)" },
      { label: "Pass mark", value: "65 points", note: "Set by LIN 19/210; the pool mark is also 65" },
      { label: "Maximum age points", value: "30", note: "Aged 25 to 32 at invitation" },
      { label: "Maximum English points", value: "20", note: "Superior English; competent English scores 0 but is required" },
      { label: "Maximum employment points", value: "20", note: "Australian and overseas skilled employment combined" },
      { label: "Nomination or sponsorship", value: "5 or 15 points", note: "5 for subclass 190 state nomination; 15 for subclass 491 nomination or family sponsorship" },
    ],
    alert: {
      title: "This is the points test in force on 12 October 2026",
      body: "The Department has published a Review of the points test discussion paper and the Government has said it will redesign the test. No change to Schedule 6D or the 65-point pass mark was in force when this page was checked. Re-check this page and our updates before relying on a score for an EOI lodged later.",
      href: "/updates",
      linkLabel: "Migration updates",
    },
    whoFor: [
      "You want to know whether you can reach 65 points before paying for a skills assessment or English test.",
      "You are deciding between the subclass 189, 190 and 491 visas and want to see what nomination or sponsorship adds.",
      "You are on a Temporary Graduate visa and want to plan which points (English, Professional Year, NAATI, regional study, work experience) to add before your visa ends.",
      "You received an invitation and need to check that every claim in your EOI can be proved at the invited score.",
    ],
    eligibility: [
      {
        title: "Which visas use the test and when points are assessed",
        detail: "The test applies to the subclass 189 (Points-tested stream), 190 and 491 visas. Most items are scored at the time of invitation: your age, English result, employment periods, qualifications and study must all exist at that date. Partner and single-applicant points are assessed at decision, and nomination points depend on the nomination still being in effect. You must then prove each claim with documents; the invitation states the score you must reach.",
        legal: "Migration Act 1958, ss 92–96; Migration Regulations 1994, reg 2.26AC and Sch 6D",
      },
      {
        title: "Age at invitation",
        detail: "18 to 24: 25 points. 25 to 32: 30 points. 33 to 39: 25 points. 40 to 44: 15 points. You must be under 45 at invitation to be invited at all.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "English language",
        detail: "Competent English: 0 points (but required for invitation). Proficient English: 10 points. Superior English: 20 points. Results must come from an approved test taken at a secure test centre within the validity period, or from a passport of the United Kingdom, Ireland, the United States, Canada or New Zealand (competent only). Tests delivered fully online are not accepted.",
        legal: "Migration Regulations 1994, Sch 6D; LIN 25/016",
      },
      {
        title: "Skilled employment outside Australia (in the 10 years before invitation)",
        detail: "Less than 3 years: 0. At least 3 but less than 5 years: 5 points. At least 5 but less than 8 years: 10 points. At least 8 years: 15 points. The work must be in your nominated skilled occupation or a closely related occupation (same ANZSCO unit group, a career advancement pathway, or recognised as closely related by the assessing authority) for at least 20 hours a week for pay.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Skilled employment in Australia (in the 10 years before invitation)",
        detail: "Less than 1 year: 0. At least 1 but less than 3 years: 5 points. At least 3 but less than 5 years: 10 points. At least 5 but less than 8 years: 15 points. At least 8 years: 20 points. You must have held a substantive visa or a Bridging visa A or B and complied with its conditions while working. Australian and overseas employment points are capped at 20 combined.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Educational qualifications (highest qualification only)",
        detail: "Doctorate from an Australian institution or an overseas doctorate of a recognised standard: 20 points (a PhD only, not professional doctor titles). Bachelor degree or higher from an Australian institution, or an overseas bachelor of a recognised standard: 15 points. Diploma or trade qualification from an Australian institution: 10 points. A qualification or award recognised by your assessing authority as suitable for your occupation: 10 points. If the assessing authority gave no opinion on an overseas degree, VETASSESS can assess it against the Australian Qualifications Framework.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Specialist education qualification",
        detail: "10 points for a masters by research or a doctorate from an Australian institution that included at least 2 academic years of study in a listed natural and physical science, information technology or engineering field (for example biological, chemical, earth or mathematical sciences, physics, computer science, information systems and the engineering disciplines).",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Australian study requirement and regional study",
        detail: "5 points for at least one degree, diploma or trade qualification from an Australian institution that meets the Australian study requirement: at least 2 academic years (92 weeks of CRICOS-registered study) completed in Australia over at least 16 calendar months while holding a visa that allowed study, taught in English. A further 5 points if that qualification was obtained while living and studying at a campus in a designated regional area, with no distance education.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Professional Year in Australia",
        detail: "5 points for a Professional Year in accounting, ICT or engineering, in your nominated or a closely related occupation, lasting at least 12 months and completed in Australia in the 48 months before invitation, delivered by the Australian Computer Society, CPA Australia, Chartered Accountants ANZ, the Institute of Public Accountants or Engineers Australia. The completion date is the date on the record of completion.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Credentialled community language",
        detail: "5 points if NAATI has accredited you at paraprofessional level or above, certified you at certified provisional level or above, or granted you a community language credential for interpreting or translating.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Partner skills, or single",
        detail: "10 points if your partner is included in the application, is not an Australian citizen or permanent resident, was under 45 at invitation, had competent English, nominated an occupation on the same skilled occupation list and held a suitable skills assessment that was not for a subclass 485 visa. 5 points if your partner is included and has competent English only. 10 points if you are single or your partner is an Australian citizen or permanent resident. A change in relationship status during processing can change these points, which are assessed at decision.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
      {
        title: "Nomination or sponsorship",
        detail: "5 points if you were invited for a subclass 190 visa and the state or territory has not withdrawn its nomination. 15 points if you were invited for a subclass 491 visa because of a state or territory nomination that has not been withdrawn, or because the Department has accepted sponsorship by an eligible family member living in a designated regional area. The subclass 189 has no nomination points.",
        legal: "Migration Regulations 1994, Sch 6D",
      },
    ],
    documents: [
      {
        group: "Evidence for each points claim",
        items: [
          "Passport (age) and English test report or eligible passport",
          "Employment references on letterhead showing period, position, hours, duties and salary, plus payslips, contracts, tax statements and superannuation records; for Australian work, evidence of the visa held and condition compliance",
          "Qualification certificates and transcripts, assessing authority opinion on comparability, or a VETASSESS educational assessment",
          "Completion letters for the Australian study and regional study claims showing dates, campus, mode of study and language of instruction",
          "Professional Year record of completion, NAATI credential and the partner's age, English, skills assessment and occupation evidence",
        ],
      },
    ],
    steps: [
      {
        title: "Calculate your score as at a likely invitation date",
        description: "Use the points calculator on this site or the Home Affairs calculator. Count only employment in the 10 years before invitation, and check whether a birthday, test expiry or new qualification will change the score before you are invited.",
        output: "You hold: an estimated score and a list of the evidence behind each claim",
      },
      {
        title: "Lodge an expression of interest in SkillSelect",
        description: "Enter the claims and SkillSelect gives an indicative score. You can update the EOI at any time before an invitation; each update that changes the score resets the date of effect used for tie-breaks.",
        output: "You hold: an EOI with an indicative score of 65 or more",
      },
      {
        title: "Ranking and invitation rounds",
        description: "For the subclass 189 and family-sponsored 491, the Department invites the highest-scoring EOIs first in periodic rounds; equal scores are ranked by the date of effect, and occupation ceilings can limit large occupation groups. For the 190 and state-nominated 491, the state's nomination triggers the invitation and ceilings do not apply.",
        output: "You hold: an invitation that fixes the score you must prove and the date your claims are assessed at",
      },
      {
        title: "Prove every claim in the visa application",
        description: "Lodge within 60 days with documents for every claim. If a claim cannot be proved, the score falls; if it falls below the invited score the visa is refused. Home Affairs advises not to apply if you cannot prove the invited score and instead to update the EOI after the 60-day period.",
        output: "You hold: a visa application that meets or exceeds the invited score",
      },
    ],
    costs: [
      { item: "Expression of interest and points calculator", amount: "No charge", note: "SkillSelect does not charge for an EOI; visa charges apply only after invitation" },
      { item: "English test, skills assessment, Professional Year, NAATI test and VETASSESS educational assessment", amount: "Typical third-party cost", note: "Each is set by the provider; a Professional Year is a 12-month paid program" },
    ],
    pathways: [
      { title: "Skilled Independent visa (subclass 189)", description: "No nomination points; invited in departmental rounds on points ranking.", href: "/visas/skilled/skilled-independent-visa-189" },
      { title: "Skilled Nominated visa (subclass 190)", description: "Adds 5 points for state or territory nomination.", href: "/visas/skilled/skilled-nominated-visa-190" },
      { title: "Skilled Work Regional visa (subclass 491)", description: "Adds 15 points for nomination or family sponsorship, with a regional condition.", href: "/visas/skilled/skilled-work-regional-visa-491" },
      { title: "Points calculator", description: "Score yourself against this table in a few minutes.", href: "/tools/points-calculator" },
    ],
    risks: [
      "Counting employment that was not in the nominated or a closely related occupation, was under 20 hours a week, unpaid, or outside the 10 years before invitation.",
      "Claiming Australian employment performed without a substantive visa or Bridging visa A or B, or in breach of a work condition such as the student 48-hour fortnight limit.",
      "Claiming 15 points for an overseas degree that the assessing authority or VETASSESS has not recognised as comparable to an Australian bachelor degree.",
      "Claiming the Australian study or regional study points when credits reduced the study below 92 weeks or 16 months, or part of the course was by distance.",
      "An English result that expires, or a Professional Year completed more than 48 months, before the invitation date.",
      "Partner points where the partner's skills assessment was for a subclass 485 visa or the partner's occupation is on a different list from yours.",
    ],
    faqs: [
      {
        question: "Will 65 points get me an invitation?",
        answer: "Not usually for the subclass 189. The pass mark is 65 but the Department invites the highest-ranked EOIs. In the 4 June 2026 round it issued 10,000 subclass 189 invitations with a tie-break date of 24 April 2026; the lowest invited score was 65 for some construction trades, 75 for nurses, teachers and allied health, 80 to 85 for most other professions and up to 100 for urologists. State-nominated 190 and 491 invitations depend on the state's own selection rather than a cut-off score.",
      },
      {
        question: "How are ties broken?",
        answer: "EOIs with the same score are ranked by the date of effect, which is the date and time the EOI reached that score for that subclass. Updating your EOI in a way that changes the score resets the date of effect, so earlier claims do not keep their place in the queue.",
      },
      {
        question: "Can I claim both Australian and overseas work experience?",
        answer: "Yes, but the employment points are capped at 20 in total. For example 8 years of overseas experience (15 points) and 3 years in Australia (10 points) still score 20. Both must be in the 10 years before invitation, in your nominated or a closely related skilled occupation, and for at least 20 hours a week.",
      },
      {
        question: "What if I turn 33 or 45 while waiting?",
        answer: "Age points are fixed at the time of invitation. If you turn 33 before you are invited, your age points drop from 30 to 25 and SkillSelect updates the indicative score. If you turn 45 before an invitation you will not be invited; turning 45 after the invitation does not affect the application.",
      },
      {
        question: "Do state nomination points count towards the 65?",
        answer: "Yes. The 5 points for a subclass 190 nomination or the 15 points for a subclass 491 nomination or family sponsorship form part of your score, so a 60-point applicant can be invited for a 190 and a 50-point applicant for a 491, provided the state nominates them or the sponsorship is accepted and not withdrawn.",
      },
      {
        question: "What is a closely related occupation?",
        answer: "An occupation in the same ANZSCO unit group as your nominated occupation, an occupation that is consistent with a career advancement pathway, or one that the assessing authority has recognised as closely related in your skills assessment.",
      },
      {
        question: "Is the points test changing?",
        answer: "The Department has consulted on a redesign through its Review of the points test discussion paper, and the Government has said the test will be reformed. On 12 October 2026 no change to Schedule 6D or the 65-point pass mark was in force. Check our updates page before relying on a future score.",
      },
    ],
    legislation: [
      { label: "Migration Act 1958, ss 92–96 (points system: assessment, pass mark and pool mark)", url: ACT },
      { label: "Migration Regulations 1994, reg 2.26AC (prescribed qualifications and points for subclass 189, 190 and 491)", url: REGS },
      { label: "Migration Regulations 1994, Sch 6D (general points test table)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491", url: REGS },
      { label: "LIN 19/210: Pool and Pass Marks for General Skilled Migration Visas", url: LIN_19_210 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "LIN 25/016: Specification of Language Tests, Test Scores and Passports", url: LIN_25_016 },
    ],
    sources: [
      { label: "Home Affairs: points table for subclass 189", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table` },
      { label: "Home Affairs: points table for subclass 190", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-nominated-190/points-table` },
      { label: "Home Affairs: points table for subclass 491", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/points-table` },
      { label: "Home Affairs: Australian study requirement", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/australian-study-requirement` },
      { label: "Home Affairs: SkillSelect invitation rounds", url: `${SKILLSELECT}/invitation-rounds` },
      { label: "Home Affairs: SkillSelect expression of interest", url: `${SKILLSELECT}/expression-of-interest` },
      { label: "Home Affairs: designated regional areas", url: `${HA}/visas/working-in-australia/regional-migration/eligible-regional-areas` },
      { label: "Home Affairs: English language requirements", url: ENGLISH },
      { label: "Home Affairs: Review of the points test discussion paper", url: "https://www.homeaffairs.gov.au/reports-and-publications/submissions-and-discussion-papers/review-of-the-points-test-discussion-paper" },
    ],
    related: [
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Tasmania points calculator", href: "/tools/tasmania-points-calculator" },
      { label: "Canberra Matrix calculator", href: "/tools/canberra-matrix-calculator" },
      { label: "Victorian Points Test calculator", href: "/tools/victoria-points-calculator" },
      { label: "SkillSelect expression of interest", href: "/visas/skilled/skillselect-expression-of-interest" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "Skilled visa services", href: "/services/skilled-visas" },
    ],
    keywords: ["skilled migration points test", "points test australia 2026", "65 points skilled visa", "189 visa points table", "190 visa points", "491 visa points", "points calculator australia", "skillselect points", "partner points skilled visa", "professional year points"],
  },
  // ─────────────────────── Guide: SkillSelect EOI ────────────────────────
  {
    slug: "skillselect-expression-of-interest",
    category: "skilled",
    kind: "guide",
    name: "SkillSelect expression of interest",
    title: "SkillSelect expression of interest (EOI)",
    seoTitle: "SkillSelect expression of interest (EOI): how it works",
    seoDescription:
      "SkillSelect EOI explained: what an expression of interest is, 2-year validity, invitation rounds, occupation ceilings, updates, state nomination, 60-day rule.",
    intro:
      "An expression of interest (EOI) is a free online record of your occupation, skills assessment, English, work history and qualifications in SkillSelect, the Government's system for inviting skilled workers to apply for the subclass 189, 190 and 491 visas. It is not a visa application and gives you no bridging visa. An EOI stays active for 2 years; the Department invites the highest-ranked EOIs in periodic rounds, or a state or territory nominates you, and you then have 60 days to lodge the visa application.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Points tested", "Invitation only"],
    keyFacts: [
      { label: "Government fee", value: "None", note: "No charge for an EOI; visa charges apply only after an invitation" },
      { label: "Validity", value: "2 years", note: "From the date you submit; you can update it any time before an invitation" },
      { label: "Pass mark", value: "65 points", note: "The minimum indicative score to be invited; invitations go to the highest-ranked EOIs" },
      { label: "Time to apply after invitation", value: "60 days", note: "Calendar days, not extendable; the EOI is frozen during this period" },
      { label: "Invitations per EOI", value: "2 at most", note: "If you do not apply after the second invitation the EOI is removed" },
      { label: "Who can see it", value: "Home Affairs and state agencies", note: "States and territories view EOIs to select nominees for the subclass 190 and 491" },
    ],
    whoFor: [
      "You have a skills assessment and an English result and want to be invited for a subclass 189, 190 or 491 visa.",
      "You want a state or territory to see your profile and nominate you for the subclass 190 or 491.",
      "You lodged an EOI months ago and want to know why no invitation has arrived or whether to update it.",
      "You received an invitation and need to understand the 60-day rule and what you must prove.",
    ],
    eligibility: [
      {
        title: "What an EOI is and which visas use it",
        detail: "SkillSelect is the Department's online system for skilled workers who want to be invited to apply for a visa. You must lodge an EOI before you can be invited for the Skilled Independent (subclass 189), Skilled Nominated (subclass 190) or Skilled Work Regional (Provisional) (subclass 491) visa. You give personal information, your nominated occupation, skills assessment details, English test results, qualifications and 10 years of work history, but you do not upload documents. SkillSelect emails you an EOI number and an indicative points score.",
        legal: "Migration Regulations 1994, Sch 1 items 1137, 1138 and 1241 (invitation required for a valid application)",
      },
      {
        title: "What you need before you submit",
        detail: "A skills assessment for your nominated occupation from the relevant assessing authority (you enter its date, authority and reference number), an English test result or an eligible passport, an occupation on the skilled occupation list for the visa you select, at least 65 points on the indicative score and an age under 45 at invitation. Home Affairs advises getting the skills assessment before you submit the EOI; an assessment obtained after the invitation cannot be relied on.",
        legal: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491 (criteria at time of invitation); LIN 19/051; LIN 19/210",
      },
      {
        title: "How invitation rounds work (subclass 189 and family-sponsored 491)",
        detail: "The Department runs invitation rounds periodically during the program year. The highest-ranked EOI by points score is invited before a lower score; equal scores are separated by the date of effect, which is the time your EOI reached that score. The number of invitations and the occupations invited vary with the needs of the economy, the Government's planning levels and the applications already on hand, so not everyone who submits an EOI is invited. Results of each round are published on the invitation rounds page.",
      },
      {
        title: "Occupation ceilings",
        detail: "An occupation ceiling is an upper limit on how many EOIs in one occupation group can be invited in a program year, so that the program stays balanced across occupations. Ceilings do not apply to the subclass 190 or to state-nominated subclass 491 EOIs.",
      },
      {
        title: "State and territory nomination through SkillSelect",
        detail: "When you select the subclass 190 or 491 you indicate which states and territories may consider you. State agencies view EOIs and select candidates under their own criteria; most also require a separate application on the state's portal. When a state nominates you in SkillSelect, the nomination triggers the Department's invitation, independent of the departmental rounds. The Department publishes the number of nominations by each state each month.",
      },
      {
        title: "Updating an EOI",
        detail: "You can update your EOI at any time before an invitation, and you must if your circumstances change: a different visa subclass, a change of occupation, a new qualification or English result, more work experience, a change in family structure, or no longer working at least 20 hours a week in your nominated occupation. SkillSelect recalculates the indicative score. Once an invitation is issued the EOI is frozen for the 60-day period; you cannot update it until that period ends.",
      },
      {
        title: "After an invitation",
        detail: "SkillSelect emails the invitation, which states the points you must prove. You have 60 calendar days to open the EOI, select Apply for visa and lodge in ImmiAccount with documents for every claim; the Department will not extend the period. If you cannot prove the invited score or another criterion, Home Affairs advises not to apply: update the EOI after the 60 days or lodge a new one. An invitation is not a pre-assessment and does not mean the visa will be granted.",
        legal: "Migration Act 1958, s 46; PIC 4020 (Sch 4)",
      },
      {
        title: "Stay lawful while you wait",
        detail: "An EOI is not a visa application, so you are not eligible for a bridging visa because of it. If you are in Australia and your visa is about to expire you must apply for another visa to stay lawfully; a bridging visa arises only when you lodge the skilled visa application after an invitation.",
        legal: "Migration Act 1958, ss 46 and 82",
      },
    ],
    documents: [
      {
        group: "Details you enter (no uploads at EOI stage)",
        items: [
          "Passport, citizenship, country of residence, relationship status and email address",
          "Nominated occupation, skills assessment date, assessing authority and reference number",
          "English test name, date and scores, or the passport that evidences competent English",
          "Each qualification: name, course, institution, campus, country and dates",
          "Work history for the last 10 years: position, employer, dates and whether the work was in the nominated occupation",
          "Partner details and any partner skills claims; details of children aged 18 or over",
        ],
      },
    ],
    steps: [
      {
        title: "Set up a SkillSelect account",
        description: "Enter your name, date of birth, passport country, citizenship, residence, relationship status and email. After you set a password and security questions, SkillSelect emails your EOI number.",
        output: "You hold: an EOI number and login",
      },
      {
        title: "Enter and save your claims",
        description: "Add your occupation, skills assessment, English, qualifications and work history as you receive them, saving at each step. Use the points calculator to check the claims add up before you submit.",
        output: "You hold: a complete draft EOI",
      },
      {
        title: "Submit and check the indicative score",
        description: "Select the visa subclasses you want (and the states for the 190 and 491) and submit. SkillSelect confirms by email and shows an indicative score; you need at least 65 to be invited.",
        output: "You hold: a submitted EOI with an indicative score and a date of effect",
      },
      {
        title: "Keep the EOI current",
        description: "Update it whenever your points or circumstances change, and watch the invitation rounds and state nomination pages to see where your score sits. The EOI expires 2 years after submission.",
        output: "You hold: an accurate EOI with the best possible score and date of effect",
      },
      {
        title: "Invitation and visa application",
        description: "When invited, open the EOI, select Apply for visa and lodge in ImmiAccount within 60 days with documents for every claim and the application charge. If you let two invitations lapse the EOI is removed.",
        output: "You hold: a lodged visa application and, if onshore, a Bridging visa A",
      },
    ],
    costs: [
      { item: "Expression of interest", amount: "No charge", note: "SkillSelect does not charge for lodging or updating an EOI" },
      { item: "Skills assessment and English test before the EOI", amount: "Typical third-party cost", note: "Set by the assessing authority and test provider" },
    ],
    pathways: [
      { title: "Skilled Independent visa (subclass 189)", description: "Invited by the Department on points ranking; A$6,135 from 1 July 2026.", href: "/visas/skilled/skilled-independent-visa-189" },
      { title: "Skilled Nominated visa (subclass 190)", description: "State nomination through SkillSelect adds 5 points; A$6,140.", href: "/visas/skilled/skilled-nominated-visa-190" },
      { title: "Skilled Work Regional visa (subclass 491)", description: "State nomination or family sponsorship adds 15 points; A$6,140.", href: "/visas/skilled/skilled-work-regional-visa-491" },
      { title: "Points test explained", description: "Every item in the points table and how ranking works.", href: "/visas/skilled/skilled-migration-points-test" },
    ],
    risks: [
      "Submitting an EOI with claims you cannot yet prove (for example experience the assessing authority has not recognised), which leads to refusal under PIC 4020 if you are invited and apply.",
      "Relying on a skills assessment obtained after the invitation; only an assessment held at invitation (or obtained within the 60-day period, following Thapa) is accepted.",
      "Letting your current visa expire while waiting; an EOI gives no bridging visa.",
      "Missing the SkillSelect invitation email or the 60-day deadline, or letting two invitations lapse so the EOI is removed.",
      "Not updating the EOI when you stop working in your occupation, change your family structure or lose points through age or test expiry, so the invited score cannot be met.",
      "Turning 45 while the EOI is waiting; you can no longer be invited.",
    ],
    faqs: [
      {
        question: "Is an EOI a visa application?",
        answer: "No. An EOI tells the Department and state governments that you want to be invited. It has no charge, no documents and no bridging visa. The visa application is a separate step in ImmiAccount after an invitation, and only then do the visa application charge and bridging visa rules apply.",
      },
      {
        question: "How long is an EOI valid?",
        answer: "Two years from the date you submit it. If you are not invited in that time it expires and you can lodge a new one. You can update it at any time before an invitation; it is frozen for the 60 days after an invitation.",
      },
      {
        question: "How does state nomination work through SkillSelect?",
        answer: "You select the subclass 190 or 491 and the states you want to consider you. State agencies see your EOI, apply their own criteria and usually require an application on their own portal. If a state nominates you, the nomination is recorded in SkillSelect and the Department sends the invitation; state nominations are not limited by departmental rounds or occupation ceilings.",
      },
      {
        question: "Why have I not been invited with 65 points?",
        answer: "Invitations go to the highest-ranked EOIs first, and the number issued depends on planning levels, the economy and applications on hand. In the 4 June 2026 round most professional occupations were invited at 80 points or more and some trades at 65. Occupation ceilings can also limit invitations in large occupation groups. State nomination is often the realistic route at 65 to 75 points.",
      },
      {
        question: "What happens after I am invited?",
        answer: "You receive an email from SkillSelect. You have 60 calendar days to lodge the visa application in ImmiAccount and prove every claim in the EOI at the invited score. If you cannot, do not apply; wait for the 60 days to pass, update the EOI or submit a new one. After two unused invitations the EOI is removed.",
      },
      {
        question: "Can I change my EOI after an invitation?",
        answer: "No. The EOI is frozen for the 60-day invitation period. Once that period ends without an application you can update it. If you were invited for the subclass 190 or 491 and do not apply, you may need a new EOI and a fresh state nomination.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 1 items 1137, 1138 and 1241 (invitation required for a valid application)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491 (criteria assessed at time of invitation)", url: REGS },
      { label: "Migration Act 1958, ss 46, 82 and 92–96", url: ACT },
      { label: "LIN 19/210: Pool and Pass Marks for General Skilled Migration Visas", url: LIN_19_210 },
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "PIC 4020 (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: SkillSelect", url: SKILLSELECT },
      { label: "Home Affairs: expression of interest", url: `${SKILLSELECT}/expression-of-interest` },
      { label: "Home Affairs: submitting your expression of interest", url: `${SKILLSELECT}/expression-of-interest/submitting-your-expression-of-interest` },
      { label: "Home Affairs: after you submit your expression of interest", url: `${SKILLSELECT}/expression-of-interest/after-you-submit-your-expression-of-interest` },
      { label: "Home Affairs: invitation rounds", url: `${SKILLSELECT}/invitation-rounds` },
      { label: "Home Affairs: subclass 189 Points-tested stream (step by step)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested` },
      { label: "Home Affairs: Skilled Nominated visa (subclass 190)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-nominated-190` },
      { label: "Home Affairs: subclass 491 main applicant", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application` },
    ],
    related: [
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Skilled migration points test", href: "/visas/skilled/skilled-migration-points-test" },
      { label: "Skills assessment for migration", href: "/visas/skilled/skills-assessment-for-migration" },
      { label: "State nomination guide", href: "/state-nomination" },
      { label: "Occupation search", href: "/occupations" },
      { label: "Skilled visa services", href: "/services/skilled-visas" },
    ],
    keywords: ["skillselect eoi", "expression of interest australia", "skillselect expression of interest", "eoi 189 190 491", "skillselect invitation rounds", "eoi validity 2 years", "update eoi skillselect", "state nomination skillselect", "occupation ceilings", "60 days invitation to apply"],
  },
  // ───────────────────── Guide: skills assessment ────────────────────────
  {
    slug: "skills-assessment-for-migration",
    category: "skilled",
    kind: "guide",
    name: "Skills assessment for migration",
    title: "Skills assessment for Australian migration",
    seoTitle: "Skills assessment for Australian migration: guide 2026",
    seoDescription:
      "Skills assessment for Australian skilled visas: what it is, 3-year validity, full vs provisional 485 assessments, ACS, Engineers Australia, VETASSESS, TRA.",
    intro:
      "A skills assessment is a decision by the assessing authority listed for your occupation that your qualifications and experience meet the Australian standard for that occupation. It is mandatory for the points-tested subclass 189, 190 and 491 visas (held at the time of invitation), for the Direct Entry stream of the subclass 186, for the Post-Vocational Education Work stream of the subclass 485 (at least applied for) and for some Skills in Demand (subclass 482) applicants. An assessment is valid for 3 years from issue unless the authority states a shorter period, and a provisional assessment issued for a subclass 485 visa cannot be used for a points-tested visa or the subclass 186.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Points tested", "Employer sponsor required"],
    keyFacts: [
      { label: "Government fee", value: "None from Home Affairs", note: "Each assessing authority sets its own charges and timeframes" },
      { label: "Validity", value: "3 years from issue", note: "Or the shorter period stated on the assessment; a longer stated period is cut to 3 years" },
      { label: "Required for", value: "189, 190, 491, 186 Direct Entry, 485 Post-Vocational", note: "Mandatory for some subclass 482 applicants; can be requested for other visas" },
      { label: "Who assesses", value: "39 authorities", note: "Listed in the Home Affairs assessing authorities table (some appear twice, for different occupations); the occupation list names the authority for each occupation" },
      { label: "Where to apply", value: "Directly to the authority", note: "Usually online, before you lodge an EOI or visa application" },
      { label: "Pathway to permanent residence", value: "First step", note: "The assessment anchors your occupation for a points-tested or employer-sponsored visa" },
    ],
    whoFor: [
      "You plan to lodge an expression of interest for a subclass 189, 190 or 491 visa and need a suitable skills assessment before you submit it.",
      "You are a Temporary Graduate visa applicant in the Post-Vocational Education Work stream who must show you have applied for an assessment in an MLTSSL occupation.",
      "Your employer wants to nominate you for the subclass 186 Direct Entry stream or a Skills in Demand visa in an occupation that requires a mandatory assessment.",
      "You hold a provisional 485 assessment and need to upgrade to a full assessment before you are invited for a permanent visa.",
      "You are a doctor, nurse, teacher, engineer, accountant, ICT professional or tradesperson and want to know which authority assesses you.",
    ],
    eligibility: [
      {
        title: "What a skills assessment is",
        detail: "Skills assessing authorities are organisations that check that your skills meet the standard they set for an occupation. The combined list of eligible skilled occupations groups occupations into 5 lists (including the MLTSSL, STSOL, ROL and CSOL) and names the authority for most occupations; the Department only accepts an assessment issued by the authority listed for your nominated occupation. Each authority has its own procedures, evidence rules, timeframes and charges, and it is your responsibility to contact it.",
        legal: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities",
      },
      {
        title: "Points-tested visas: held and valid at the time of invitation",
        detail: "For the subclass 189 (Points-tested stream), 190 and 491 you must have a suitable skills assessment for your nominated occupation when you are invited to apply, and it must still be valid at that date. You cannot rely on an assessment obtained after the invitation, except that following Thapa v Minister for Immigration [2021] FCCA 686 the Department accepts an assessment obtained within the 60-day invitation period. If the assessment relied on an Australian qualification gained on a student visa, the course must have been CRICOS-registered.",
        legal: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491 (criteria at time of invitation)",
      },
      {
        title: "Validity: 3 years, or shorter if the authority says so",
        detail: "If no validity period is shown, the assessment is valid for 3 years from the date of issue. If the authority states a period shorter than 3 years, that period applies. If it states a period longer than 3 years, the Department treats it as valid for 3 years from the date of assessment. For the subclass 186 Direct Entry stream the assessment must have been obtained before the visa application and must not have expired.",
      },
      {
        title: "Full versus provisional assessments",
        detail: "Authorities can issue more than one type of assessment. Some issue a provisional assessment for recent Australian graduates applying for a Temporary Graduate visa (subclass 485). A provisional 485 assessment is not a suitable assessment for a points-tested visa, for the subclass 186 or for partner points, so graduates need a full assessment, usually after gaining the work experience the authority requires.",
        legal: "Migration Regulations 1994, Sch 2 Parts 189, 190, 491 and 485; Sch 6D (partner skills)",
      },
      {
        title: "Temporary Graduate visa (Post-Vocational Education Work stream)",
        detail: "You must nominate an occupation on the MLTSSL, hold an associate degree, diploma or trade qualification closely related to it, and provide the assessment or evidence that you have applied for one when you lodge, or the application cannot be processed. The authority may require a higher level of study than the visa does, and the assessment must be valid when the visa is decided.",
        legal: "Migration Regulations 1994, Sch 2 Part 485 (Post-Vocational Education Work stream)",
      },
      {
        title: "Employer-sponsored visas",
        detail: "Subclass 186 Direct Entry stream: a skills assessment is required and must show your skills were assessed as suitable before the visa application; you must also have 3 years of full-time employment in the occupation at the required skill level. Temporary Residence Transition and Labour Agreement streams: not required at application, but a decision maker can ask for one. Skills in Demand (subclass 482): certain applicants must undertake a mandatory assessment begun or completed within the 3 years before lodging, unless exempt, and the Department can request one for any applicant.",
        legal: "Migration Regulations 1994, Sch 2 Parts 186 and 482",
      },
      {
        title: "Doctors and lawyers",
        detail: "For doctors, full registration with the Australian Health Practitioner Regulation Agency (AHPRA) is a suitable skills assessment: general or unconditional medical registration, or conditional specialist registration that lets you practise only in your specialty with no further training or supervision. For solicitors and barristers, admission to practise in a state or territory (the admission certificate or practising certificate) is the suitable assessment.",
      },
      {
        title: "Main assessing authorities",
        detail: "ACS (Australian Computer Society) for ICT occupations and data scientists; Engineers Australia for engineering occupations; VETASSESS for most general professional and non-trade occupations and for educational comparability opinions; TRA (Trades Recognition Australia) for trades; AHPRA boards (Medical Board of Australia, Podiatry Board, Chinese Medicine Board) for registered health practitioners; AITSL for teachers; CPA Australia, Chartered Accountants ANZ and the Institute of Public Accountants for accounting and finance; ANMAC for nurses and midwives. Others on the Home Affairs list include the Australian Dental Council, Australian Pharmacy Council, Australian Physiotherapy Council, Occupational Therapy Council, Speech Pathology Australia, Australian Psychological Society, AIMS (medical scientists), AACA (architects), AIQS (quantity surveyors), NAATI (translators and interpreters), ACECQA (early childhood), AASW (social workers), the Institute of Managers and Leaders, Community Work Australia, AMSA and CASA (maritime and aviation) and the Australasian Veterinary Boards Council.",
        legal: "LIN 19/051 (assessing authority for each occupation)",
      },
      {
        title: "Qualification recognition for points",
        detail: "The assessing authority may state whether your overseas qualification is comparable to an Australian qualification; that opinion supports the 15 or 20 education points. If the authority gives no opinion on a degree at bachelor level or above, VETASSESS can assess its comparative level against the Australian Qualifications Framework, and the advice should be lodged with the visa application.",
        legal: "Migration Regulations 1994, reg 2.26AC and Sch 6D",
      },
    ],
    documents: [
      {
        group: "What authorities typically ask for",
        items: [
          "Passport and identity documents, and a current CV",
          "Qualification certificates and full academic transcripts, with certified translations where needed",
          "Employment references on letterhead showing dates, hours, duties and position, with payslips, contracts or tax records as supporting evidence",
          "English test results where the authority requires them (many health, teaching and accounting authorities do)",
          "Registration or licence evidence for regulated occupations, and for trades a technical interview or practical assessment where the authority requires one",
        ],
      },
    ],
    steps: [
      {
        title: "Match your work to an occupation and find its authority",
        description: "Use the occupation search on this site or the Home Affairs combined list to find the ANZSCO occupation that matches your duties and the visas it is eligible for. The list names the assessing authority; the subclass 186 and 482 use ANZSCO 2022 while the points-tested visas and the 485 use ANZSCO 2013.",
        output: "You hold: an occupation code, the visas it supports and the name of the assessing authority",
      },
      {
        title: "Check the authority's criteria and type of assessment",
        description: "Read the authority's requirements for qualifications, years of experience and English, and confirm you are applying for the assessment type that your visa needs (full migration assessment rather than a provisional 485 assessment).",
        output: "You hold: a checklist of the authority's evidence requirements",
      },
      {
        title: "Apply to the authority",
        description: "Lodge online with certified documents and pay the authority's charge. Timeframes differ between authorities and some include a skills interview or practical test.",
        output: "You hold: an application receipt (enough for a 485 Post-Vocational Education Work application)",
      },
      {
        title: "Receive the outcome",
        description: "A positive outcome letter states the occupation assessed and, for some authorities, the date from which your employment is counted as skilled and the validity period. A negative outcome means you cannot lodge a skilled visa application in that occupation; review the reasons or consider another occupation.",
        output: "You hold: a positive skills assessment valid for 3 years or the period stated",
      },
      {
        title: "Use it in SkillSelect or the visa application",
        description: "Enter the date, authority and reference number in your EOI, or lodge it with the employer-sponsored or 485 application. Diarise the expiry date: it must be valid at invitation for the points-tested visas, and a renewal is needed if the invitation comes later.",
        output: "You hold: an EOI or visa application anchored to a valid assessment",
      },
    ],
    costs: [
      { item: "Assessment charge", amount: "Set by each assessing authority", note: "Typical third-party cost; varies by authority, assessment type and whether a skills interview or practical test is needed" },
      { item: "Certified copies, translations and English tests required by the authority", amount: "Typical third-party cost", note: "Paid to the provider" },
    ],
    pathways: [
      { title: "Skills assessment service", description: "Help choosing the occupation and authority and preparing the evidence.", href: "/services/skills-assessments" },
      { title: "Occupation search", description: "Find the ANZSCO code, the lists it is on and its assessing authority.", href: "/occupations" },
      { title: "SkillSelect expression of interest", description: "Lodge the EOI once the assessment is issued.", href: "/visas/skilled/skillselect-expression-of-interest" },
      { title: "Temporary Graduate visa (subclass 485)", description: "The Post-Vocational Education Work stream needs an assessment applied for before lodgement.", href: "/visas/skilled/temporary-graduate-visa-485" },
      { title: "Employer Nomination Scheme visa (subclass 186)", description: "Direct Entry applicants need an assessment obtained before the application.", href: "/visas/employer-sponsored/employer-nomination-scheme-visa-186" },
    ],
    risks: [
      "Applying to the wrong authority, or nominating an occupation whose duties do not match your real work, so the assessment is negative or the occupation is later disputed.",
      "Relying on a provisional 485 assessment for a subclass 189, 190, 491 or 186 application, or for partner points.",
      "An assessment that expires before the invitation, or that was obtained after the invitation (outside the 60-day Thapa window).",
      "An Australian qualification from a course that was not CRICOS-registered while you held a student visa, which the Department does not accept as the basis of the assessment.",
      "Employment references that differ between the assessment and the visa application, which can trigger PIC 4020 refusal.",
      "A negative assessment with no review: you cannot lodge a skilled visa application in that occupation until a positive assessment is issued.",
    ],
    faqs: [
      {
        question: "How long is a skills assessment valid?",
        answer: "Three years from the date of issue if no period is shown. If the authority states a shorter period, that shorter period applies; if it states a longer one, the Department still treats it as 3 years. For the subclass 189, 190 and 491 it must be valid on the date you are invited; for the 186 Direct Entry stream it must be valid when you apply.",
      },
      {
        question: "Can I use my 485 skills assessment for a permanent visa?",
        answer: "No. A provisional assessment issued for a Temporary Graduate visa is not a suitable assessment for the subclass 189, 190 or 491, for the subclass 186 Direct Entry stream or for partner points. You need the authority's full migration assessment, which usually requires post-qualification work experience.",
      },
      {
        question: "Do I need a skills assessment for an employer-sponsored visa?",
        answer: "For the subclass 186 Direct Entry stream, yes, obtained before you apply, together with 3 years of full-time experience in the occupation. The Temporary Residence Transition and Labour Agreement streams do not require one at lodgement, although the Department can ask. For the Skills in Demand visa (subclass 482) a mandatory assessment applies to certain applicants unless they are exempt, and must have been started or completed in the 3 years before lodging.",
      },
      {
        question: "I am a doctor or nurse. Who assesses me?",
        answer: "For doctors, full AHPRA registration (general, unconditional or conditional specialist) is the skills assessment, so there is no separate application. Nurses and midwives are assessed by ANMAC, and other registered health professions by their councils (for example the Australian Physiotherapy Council, Australian Dental Council, Australian Pharmacy Council, Occupational Therapy Council and Speech Pathology Australia).",
      },
      {
        question: "Can I be assessed in more than one occupation?",
        answer: "You can apply to the authority for a second occupation if you meet its criteria, but a skilled visa application nominates one occupation and the EOI must match the assessment you hold. Choose the occupation that reflects your duties and the lists for the visa you want.",
      },
      {
        question: "Does the Department check my skills assessment?",
        answer: "Yes. You lodge a copy with the visa application and the Department can verify it with the authority. Employment claims in the visa application are checked against the references used for the assessment, and inconsistencies can lead to refusal under PIC 4020 and a 3-year bar.",
      },
    ],
    legislation: [
      { label: "LIN 19/051: Specification of Occupations and Relevant Assessing Authorities", url: LIN_19_051 },
      { label: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491 (skills assessment at time of invitation)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 485 (Post-Vocational Education Work stream)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 186 and 482 (employer-sponsored skills assessment requirements)", url: REGS },
      { label: "Migration Regulations 1994, reg 2.26AC and Sch 6D (qualification and partner points)", url: REGS },
      { label: "PIC 4020 (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: skills assessment", url: SKILLS_ASSESSMENT },
      { label: "Home Affairs: assessing authorities", url: `${SKILLS_ASSESSMENT}/assessing-authorities` },
      { label: "Home Affairs: skilled occupation list", url: OCCUPATION_LIST },
      { label: "Home Affairs: skilled migration legislative instruments", url: `${HA}/what-we-do/skilled-migration-program/visa-options/legislative-instruments` },
      { label: "Home Affairs: subclass 485 Post-Vocational Education Work stream", url: `${HA}/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-vocational-education-work` },
      { label: "Home Affairs: subclass 189 Points-tested stream", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested` },
      { label: "Home Affairs: points table for subclass 189 (qualification recognition)", url: `${HA}/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table` },
    ],
    related: [
      { label: "Skills assessment service", href: "/services/skills-assessments" },
      { label: "Occupation search", href: "/occupations" },
      { label: "Skilled Independent visa (subclass 189)", href: "/visas/skilled/skilled-independent-visa-189" },
      { label: "Temporary Graduate visa (subclass 485)", href: "/visas/skilled/temporary-graduate-visa-485" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "Skilled migration points test", href: "/visas/skilled/skilled-migration-points-test" },
    ],
    keywords: ["skills assessment australia", "skills assessment for migration", "skills assessment validity 3 years", "ACS skills assessment", "engineers australia skills assessment", "VETASSESS skills assessment", "TRA skills assessment", "AHPRA skills assessment visa", "provisional skills assessment 485", "assessing authority list"],
  },
];
