import type { VisaPage } from "./types";

// Study visas and explainers. Figures checked against the Department of Home
// Affairs pages, LIN 19/198, LIN 25/090, Direction No. 106 and the National
// Code 2018 on 12 October 2026. Charges are the 1 July 2026 charges.

const HA_500 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500";
const HA_590 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-590";
const HA_CHANGES =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/changes-to-student-visa-application-rules-500-590";
const HA_GS = `${HA_500}/genuine-student-requirement`;
const HA_FUNDS = `${HA_500}/genuine-access-to-funds`;
const HA_STAY = `${HA_500}/length-of-stay`;
const HA_WELFARE = `${HA_500}/welfare-arrangements-students-under-18`;
const HA_DEFAULT = `${HA_500}/education-provider-default`;
const HA_CONDITIONS =
  "https://immi.homeaffairs.gov.au/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions";
const HA_PROCESSING =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times";
const HA_PRIORITIES =
  "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/student-visa";
const HA_FEES = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing";
const HA_HEALTH = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/health";
const HA_CHARACTER = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/character";
const MD_106 = "https://immi.homeaffairs.gov.au/Visa-subsite/files/direction-no-106.pdf";
const MD_115 = "https://immi.homeaffairs.gov.au/support-subsite/files/ministerial-direction-115.pdf";
const FACT_SHEET = "https://immi.homeaffairs.gov.au/Visa-subsite/files/changes-to-student-visa-applications-factsheet.pdf";
const LIN_19_198 = "https://www.legislation.gov.au/F2019L01366/latest/text";
const LIN_25_090 = "https://www.legislation.gov.au/F2025L00906/asmade/text";
const REGS = "https://www.legislation.gov.au/F1996B03551/latest/text";
const ACT = "https://www.legislation.gov.au/C1958A00062/latest/text";
const ESOS_ACT = "https://www.legislation.gov.au/C2004A00757/latest/text";
const NATIONAL_CODE = "https://www.legislation.gov.au/F2017L01182/latest/text";
const ART_ACT = "https://www.legislation.gov.au/C2024A00040/latest/text";
const ART_FEES = "https://www.art.gov.au/help-and-resources/fees";

export const studyPages: VisaPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Student visa (subclass 500)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "student-visa-500",
    category: "study",
    kind: "visa",
    subclass: "500",
    name: "Student visa",
    title: "Student visa (subclass 500)",
    seoTitle: "Subclass 500 Student visa: eligibility, cost, work rights",
    seoDescription:
      "Student visa (subclass 500) in 2026: A$2,500 charge, Genuine Student test, A$29,710 living costs, 48 hours a fortnight work limit and the 2 October 2026 rules.",
    intro:
      "The Student visa (subclass 500) lets you study a full-time course registered on CRICOS in Australia for the length of your enrolment, up to a maximum of six years, and work up to 48 hours a fortnight while your course is in session. It is for people who hold a Confirmation of Enrolment, can show they are genuine students and have the money, English, health cover and welfare arrangements the Regulations require. After graduating, most holders who want to stay move to the Temporary Graduate visa (subclass 485) and then to a skilled or employer-sponsored visa.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Apply outside Australia", "Pathway to PR"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$2,500",
        note: "Primary applicant, 1 July 2026 charge; A$2,050 in the ELICOS and Non-award sectors",
      },
      {
        label: "Length of stay",
        value: "Your course plus a short grace period, up to 6 years",
        note: "Usually 1 or 2 months after the course ends, or to 15 March for courses ending in November or December",
      },
      {
        label: "Work rights",
        value: "48 hours a fortnight while the course is in session",
        note: "Unlimited during scheduled breaks; no limit for research master's and PhD students (condition 8105)",
      },
      {
        label: "Pathway to permanent residence",
        value: "Indirect",
        note: "Temporary Graduate visa (485), then points-tested or employer-sponsored visas",
      },
      {
        label: "Where to apply",
        value: "Outside Australia for most applicants",
        note: "From 2 October 2026 you can apply in Australia only if you hold an eligible visa and meet an exemption",
      },
      {
        label: "Sponsor or nomination",
        value: "None, but you need a Confirmation of Enrolment",
        note: "Full-time course registered on CRICOS; the CoE must be valid at lodgement and at decision",
      },
    ],
    alert: {
      title: "New application rules from 2 October 2026",
      body: "From 2 October 2026 most Student visa applications must be lodged outside Australia, and the visa is granted while you are outside Australia. Holders of visitor, Temporary Graduate (485), Working Holiday, 482 and most other temporary visas can no longer apply in Australia at all. A current student visa holder can apply in Australia only under one of six exemptions: up to 12 extra months to finish the main course with the same provider, DFAT or Defence sponsorship, a PhD, school study, progression from a completed main course to a higher AQF level, or education provider default. Partners and children can be included only under an exemption (PhD students, DFAT or Defence sponsored students, fully funded foreign government scholarship holders, eligible Pacific Island and ASEAN nationals, or family members who already hold your current student visa) and can no longer be added later as subsequent entrants in any circumstance. Applications lodged before 2 October 2026 are assessed under the rules in force when they were lodged.",
      href: HA_CHANGES,
      linkLabel: "Read the Home Affairs notice",
    },
    whoFor: [
      "You are outside Australia with a Confirmation of Enrolment for a full-time CRICOS-registered course and want to study in Australia.",
      "You are a school student aged 6 or over, or a parent arranging a child's schooling, and need a visa that covers the school years with welfare arrangements in place.",
      "You hold a Student visa and need up to 12 more months to finish your main course with the same education provider.",
      "You have completed your main course in Australia and are moving to a course at a higher AQF level, for example a bachelor degree after a diploma or a master's degree after a bachelor degree.",
      "You are starting a PhD, or you are sponsored by the Department of Foreign Affairs and Trade or the Department of Defence.",
      "Your education provider has closed or lost its registration and you need a new visa to finish your studies elsewhere.",
    ],
    eligibility: [
      {
        title: "Enrolled full time in a registered course, with a Confirmation of Enrolment",
        detail:
          "You must be enrolled in a full-time course registered on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS) and attach a Confirmation of Enrolment (CoE) for every course when you lodge. Without a CoE the application is invalid and cannot be processed. The CoE must still be valid when the visa is decided: it lapses if it is cancelled or the course finishes, so a new CoE must be uploaded if you finish early. Foreign Affairs and Defence students give a letter of support, secondary exchange students an Acceptance Advice of Secondary Exchange Student (AASES) form, and postgraduate research students waiting for thesis marking a letter from their provider. Packaged courses must have gaps of less than two calendar months, unless the gap is the standard end-of-year break, and the last course in the package is the main course used to assess English and funds.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.211; Sch 1 item 1222",
      },
      {
        title: "Genuine student",
        detail:
          "You must be a genuine applicant for entry and stay as a student, having regard to your circumstances, your immigration history, your record of complying with visa conditions and any other relevant matter. The online form asks four questions with a 150-word limit each (your current circumstances; why this course with this provider; how the course will benefit you; anything else), and a fifth question if you have held a student visa before or are applying in Australia from a non-student visa. Decision makers apply Ministerial Direction No. 106. Wanting to apply for permanent residence later does not count against you.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.212; Direction No. 106 (Migration Act 1958, s 499)",
      },
      {
        title: "English language",
        detail:
          "Unless you are exempt, you must have an approved test result, taken within the two years before you lodged (or before decision, if you are at the streamlined evidence level and the Department asks). For tests taken on or after 7 August 2025 the minimum overall scores are IELTS 6.0, PTE Academic 47, TOEFL iBT 67, C1 Advanced 161, CELPIP General 7, LANGUAGECERT Academic 61, MET 53 and OET 1210. The minimum drops to IELTS 5.5 (PTE 39, TOEFL 51) if your main course is packaged with at least 10 weeks of ELICOS, a Foundation program or an eligible Pathway program, and to IELTS 5.0 (PTE 31, TOEFL 37) with at least 20 weeks of ELICOS. Tests delivered entirely online are not accepted. You are exempt if you hold a passport from the UK, USA, Canada, New Zealand or Ireland, are enrolled in a school course, a standalone ELICOS course, a course taught in a language other than English or a postgraduate research course, have completed five years of study in English in a listed country, or in the last two years completed the Senior Secondary Certificate or a substantial part of a Certificate IV or higher course in Australia on a student visa.",
        legal:
          "Migration Regulations 1994, Sch 2 cl 500.213; Migration (English Language Tests and Evidence Exemptions for Subclass 500 (Student) Visas) Instrument 2025 (LIN 25/090)",
      },
      {
        title: "Financial capacity",
        detail:
          "If the Document Checklist Tool requires it, and whenever the Department asks, you must show funds for travel, the first 12 months of course fees (less any amount already paid), 12 months of living costs of A$29,710 for you, A$10,394 for a partner and A$4,449 for each child, and A$13,502 a year of school fees for each school-age child. The alternative is official tax documents showing that your parents or your partner earned at least A$87,856 in the 12 months before you applied, or A$102,500 if family members apply with you. Stays of less than 12 months are pro rata. You must also show genuine access to the money, for example bank statements showing how the funds built up, loan terms and disbursement, or scholarship letters.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.214; LIN 19/198 as amended by LIN 24/042",
      },
      {
        title: "Overseas Student Health Cover (OSHC)",
        detail:
          "You and every family member who applies must hold OSHC from an approved Australian insurer for the whole stay. For applicants outside Australia the policy must start on the day you arrive, not the day your course starts, and you can be refused entry if you cannot show cover on arrival. Applicants in Australia must have cover that is continuous with their previous health insurance. If the insurer, start and end dates and (for self-arranged policies) the policy number are not in the application, the visa is refused. Norwegian, Swedish and Belgian students covered by their national schemes are exempt.",
        legal: "Migration Regulations 1994, Sch 2 Division 500.22; condition 8501 (Sch 8)",
      },
      {
        title: "Age rules for school students and welfare for under-18s",
        detail:
          "School students must be at least 6, and under 17 when starting Year 9, under 18 for Year 10, under 19 for Year 11 and under 20 for Year 12. Primary school students starting in Years 1 to 4 are usually granted no more than three years. Every applicant under 18 needs signed consent from each parent or legal guardian (Form 1229 or a statutory declaration, with evidence of sole custody if only one signs) and adequate welfare arrangements until they turn 18: a Confirmation of Appropriate Accommodation and Welfare (CAAW) issued by the provider covering the CoE period plus seven days, an AASES form, ministerial approval for DFAT or Defence students, or a nominated guardian on Form 157N who is a parent, a person with custody, or a relative aged 21 or over. A student must not arrive before the welfare arrangements start.",
        legal: "Migration Regulations 1994, Sch 2 Division 500.22; condition 8532 (Sch 8)",
      },
      {
        title: "Apply from the right place and hold an eligible visa",
        detail:
          "From 2 October 2026 most applications must be lodged, and the visa granted, while you are outside Australia. You cannot apply in Australia if you hold a subclass 400, 403 (Domestic Worker stream), 407, 408, 417, 457, 462, 482, 485, 600, 601, 602, 651, 771, 988 or 995 (primary holder) visa; there are no exemptions for these visas. A primary student visa holder can apply in Australia only under one of six exemptions: up to 12 additional months to complete the main course with the same provider at the same or a higher AQF level; DFAT or Defence sponsorship; a PhD (not a master's by research); primary or secondary school study; completion of the main course and progression to a course at a higher AQF level (and, where the completed course was higher education, the next course must also be higher education with a higher education provider); or education provider default. Dependants on a student visa cannot apply in Australia as the primary applicant. If you have no substantive visa you can apply within 28 days of holding a special purpose visa or a dependent diplomatic visa, or of an ART decision setting aside a cancellation, but not if you were previously granted a visa on an application made without a substantive visa.",
        legal: "Migration Regulations 1994, Sch 1 item 1222 (as amended from 2 October 2026)",
      },
      {
        title: "Family members only under an exemption",
        detail:
          "Your partner and your unmarried children under 18 can be included only if you are a PhD student, a DFAT or Defence sponsored student, a fully funded foreign government scholarship holder, an eligible Pacific Island or ASEAN national, or they already hold your current student visa and you meet one of the onshore exemptions. Family members must apply at the same time and from the same place as you, and if applying in Australia must hold an eligible visa. Subsequent entrant applications are no longer possible. A child who turns 18 before the visa is finalised must apply for their own visa.",
        legal: "Migration Regulations 1994, Sch 2 Division 500.3; Sch 1 item 1222",
      },
      {
        title: "Health",
        detail:
          "You and every family member who applies must meet the health requirement. Most applicants have a medical examination through the Health Assessment Portal, and applicants from countries at risk of polio must provide a polio vaccination certificate.",
        legal: "PIC 4005 (Sch 4)",
      },
      {
        title: "Character",
        detail:
          "You and any family member aged 16 or over must pass the character test. All charges and convictions in any country must be declared, and police certificates are requested where needed.",
        legal: "PIC 4001 (Sch 4); Migration Act 1958, s 501",
      },
      {
        title: "Values statement, debts and accurate information",
        detail:
          "Applicants aged 18 or over must have read the Life in Australia booklet and sign the Australian Values Statement. Any debt to the Australian Government must be repaid or under an arrangement to repay. False or misleading information or a bogus document leads to refusal and a three-year bar on most visas.",
        legal: "PIC 4019, 4004 and 4020 (Sch 4)",
      },
      {
        title: "Immigration history and the best interests of a child",
        detail:
          "Earlier cancellations and refusals are weighed, exclusion periods can apply if you overstayed or were removed, and the visa can be refused if grant is not in the best interests of an applicant under 18.",
        legal: "PIC 4013 and 4014 (Sch 4); Migration Act 1958, s 48",
      },
    ],
    familyNote:
      "Family members are your partner and your or your partner's unmarried dependent children under 18. Since 2 October 2026 they can be included only under one of the exemptions above, must lodge with you from the same location, and cannot be added later as subsequent entrants. Each pays their own charge: A$1,530 for an applicant aged 18 or over and A$500 for a child (A$1,255 and A$410 in the ELICOS and Non-award sectors; nil for family members of postgraduate research students). Every family member needs OSHC and must meet health and character requirements, and school-age children need a school enrolment letter and evidence of school fees. A child born in Australia while you hold the visa automatically holds the same visa.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages showing your photo, personal details and issue and expiry dates (renew it first if it expires soon)",
          "National identity card if you have one, and any change-of-name documents",
          "For applicants under 18: birth certificate naming both parents, Form 1229 consent from each parent or guardian, and the signatory's photo identification",
        ],
      },
      {
        group: "Enrolment and Genuine Student evidence",
        items: [
          "A Confirmation of Enrolment for every course in the package (or a DFAT or Defence letter of support, an AASES form, or a provider letter for thesis marking)",
          "Answers to the Genuine Student questions in the online form (150 words each, in English), supported by academic transcripts, certificates and a complete history of any study in Australia",
          "Evidence of current employment, economic circumstances and ties at home (employer letter, tax returns, bank statements, job offers after graduation)",
          "If you rely on an onshore exemption: transcripts or a provider letter proving you completed your main course",
        ],
      },
      {
        group: "Financial capacity and English",
        items: [
          "Bank transaction statements showing the history of funds, loan terms and disbursement, scholarship or sponsor letters, and evidence of your relationship with anyone providing funds",
          "Tax assessments less than 12 months old if you rely on your parents' or partner's income (A$87,856, or A$102,500 with family members)",
          "Receipts or the CoE showing course fees already paid, and a school enrolment letter with fees for each school-age child",
          "An approved English test result within validity (both the certificate and the report for LANGUAGECERT), or evidence of an exemption",
        ],
      },
      {
        group: "Health, OSHC and character",
        items: [
          "OSHC policy details for everyone included: insurer, start and end dates and, if you arranged it yourself, the policy number",
          "Health examinations through your HAP ID, and a polio vaccination certificate if you spent time in a listed country",
          "Police certificates if requested; a nominated guardian who is not a parent needs a certificate for every country lived in for 12 months or more in the last 10 years",
          "For under-18s: a CAAW from the provider, an AASES form, or Form 157N with proof of the guardian's relationship, passport and Australian residence",
        ],
      },
      {
        group: "Family members (only where an exemption applies)",
        items: [
          "Marriage certificate, or evidence of a de facto relationship of at least 12 months or a registered relationship",
          "Birth certificates or the family book for each child, adoption papers if relevant, and consent from any parent who is not migrating",
          "Identity, character and OSHC documents for each family member",
        ],
      },
    ],
    steps: [
      {
        title: "Choose a course and get your Confirmation of Enrolment",
        description:
          "Enrol in a full-time CRICOS-registered course and pay the deposit your provider requires. The provider issues a CoE for each course; if it arranges your OSHC, the policy details appear on the CoE. Check that any packaged courses have gaps of less than two months.",
        output: "You hold: a CoE for every course, and OSHC details if the provider arranged cover",
      },
      {
        title: "Check where you can lodge",
        description:
          "Under the 2 October 2026 rules most applicants must be outside Australia at lodgement and at grant. If you are in Australia, confirm that you hold a student visa as the primary applicant and meet one of the six exemptions. If not, plan to leave Australia before you apply; an invalid application cannot be reviewed by the Administrative Review Tribunal and can leave you without a visa.",
        output: "You know: whether you must lodge from outside Australia and which exemption, if any, you rely on",
      },
      {
        title: "Arrange OSHC, welfare and health",
        description:
          "Buy OSHC that starts on the day you will arrive and runs to the end of the likely visa period (the visa end date cannot be changed later, so it is capped by your cover). Under-18s need a CAAW, an AASES form or a nominated guardian on Form 157N, plus Form 1229 consent. You can complete health examinations before you apply.",
        output: "You hold: an OSHC policy, welfare documents for under-18s, and a HAP ID if you had your examinations early",
      },
      {
        title: "Sit an English test and gather financial evidence",
        description:
          "Use the Document Checklist Tool for your passport country and provider (it is updated at least on 31 March and 30 September) to see whether English and funds evidence must be attached. Prepare bank statements that show how the money was accumulated, or official income documents for the parent or partner income option.",
        output: "You hold: a valid test result or exemption evidence, and funds evidence with a clear history",
      },
      {
        title: "Answer the Genuine Student questions",
        description:
          "In the online form, answer each Genuine Student question in your own words within 150 words: your circumstances, why this course and provider, how the course benefits you, and anything else relevant. Attach the documents that back each statement; statements supported by evidence carry more weight.",
        output: "You hold: four (or five) complete answers with supporting documents ready to upload",
      },
      {
        title: "Lodge in ImmiAccount and pay the charge",
        description:
          "Apply online, attach your documents (up to 60 files) and pay A$2,500 for yourself and the charge for each family member, or claim a charge exemption with evidence. Most applicants are told immediately if biometrics are needed and have 14 days to give them. If you applied in Australia on an eligible visa you receive a Bridging visa A, which starts when your current visa ends and does not allow travel.",
        output: "You hold: a lodged application with a transaction reference, and a Bridging visa A if you applied in Australia",
      },
      {
        title: "Respond promptly and keep your enrolment current",
        description:
          "Check ImmiAccount regularly, answer requests before the deadline, and do not book travel until the visa is granted. Keep a valid CoE on file: if your course finishes or the CoE is cancelled before the decision, upload a new one. Report any change of passport, address, relationship, welfare arrangements or course start date. Processing times are published only as a guide on the Home Affairs tool; offshore applications are processed in the order set by Ministerial Direction 115.",
        output: "You hold: a decision letter with your grant number, expiry date and conditions, which you should keep with you in Australia",
      },
    ],
    conditions: [
      {
        code: "8105",
        meaning:
          "You must not work before your course starts (unless you held a visa with work rights when you applied), and you must not work more than 48 hours in any fortnight (14 days starting on a Monday) while your course is in session. Unlimited hours during scheduled breaks and once you have completed your course. No limit for research master's and PhD students once the course has started. Unpaid work experience counts unless it is a mandatory registered part of the course.",
      },
      {
        code: "8202",
        meaning:
          "You must stay enrolled in a registered course at the same or a higher AQF level than the one your visa was granted for (except a move from level 10 to level 9), and keep satisfactory attendance and course progress as set by your provider. Course gaps should generally not exceed two months.",
      },
      {
        code: "8501",
        meaning: "You must hold and maintain adequate health insurance (OSHC) for the whole of your stay.",
      },
      {
        code: "8516",
        meaning: "You must continue to satisfy the criteria for the grant of the visa, including remaining a genuine student with enough money and a valid enrolment.",
      },
      {
        code: "8533",
        meaning:
          "You must tell your education provider your residential address within 7 days of arriving (if the visa was granted while you were outside Australia), tell them of any change of address within 7 days, and tell your current provider within 7 days of receiving a CoE from a new provider.",
      },
      {
        code: "8534",
        meaning:
          "Discretionary. While in Australia you cannot be granted another substantive visa except a Temporary Graduate (485), a Student Guardian (590) or a protection visa, unless the condition is waived. You do not need a waiver for a skilled, 186, 482 or business visa once you have finished the course the visa was granted for.",
      },
      {
        code: "8535",
        meaning:
          "Mandatory for DFAT and Defence sponsored students. While in Australia no further substantive visa can be granted except another student visa with Commonwealth or foreign government support, or a protection visa.",
      },
      {
        code: "8532",
        meaning:
          "If you are under 18 you must keep the approved accommodation, support and welfare arrangements, must not change them without your provider's written approval, and must not travel to Australia before they start.",
      },
      {
        code: "8303",
        meaning: "You must not become involved in activities that are disruptive to, or that threaten harm to, the Australian community.",
      },
      {
        code: "8208",
        meaning:
          "For visas applied for after 1 July 2022: you must not start postgraduate research study, a thesis or a bridging course that relates to critical technology (as specified in LIN 24/010) without approval from the Minister, requested through ImmiAccount.",
      },
      {
        code: "8104",
        meaning:
          "Family members: no work before the student's course starts, and no more than 48 hours a fortnight at any time, unless the student is studying a master's or doctoral degree, in which case the family member has no limit.",
      },
      {
        code: "8201",
        meaning: "Family members must not study or train for more than three months unless they obtain their own Student visa (children from age 6 need their own visa to attend school).",
      },
      {
        code: "8517",
        meaning: "You must keep adequate schooling arrangements for school-age dependants who are in Australia for more than three months.",
      },
      {
        code: "8203",
        meaning:
          "Postgraduate research students in specified fields must not change their course, thesis or research topic without the Minister's approval following a security assessment (condition 8204 applies the same rule to postgraduate coursework and bridging courses).",
      },
    ],
    costs: [
      { item: "Base application charge", amount: "A$2,500", note: "Primary applicant in most sectors, 1 July 2026 charge" },
      { item: "ELICOS and Non-award sector charge", amount: "A$2,050", note: "Primary applicant whose main course is a standalone English course or a non-award course" },
      { item: "Additional applicant aged 18 or over", amount: "A$1,530", note: "A$1,255 in the ELICOS and Non-award sectors; nil for family members of postgraduate research students" },
      { item: "Additional applicant under 18", amount: "A$500", note: "A$410 in the ELICOS and Non-award sectors; nil for family members of postgraduate research students" },
      { item: "Subsequent temporary application charge", amount: "A$700", note: "Worked out for each person in Australia from their own visa history; not charged on a person's first substantive temporary visa application made in Australia" },
      { item: "Pacific Island, Timor-Leste and ASEAN concession", amount: "Lower charge", note: "For eligible citizens and their family members, based on the main applicant's passport" },
      { item: "Charge exemptions", amount: "Nil", note: "Commonwealth scholarship holders, DFAT and Defence students and their families, secondary exchange students, and students who reapply within 12 months of an education provider default" },
      { item: "Overseas Student Health Cover", amount: "Typical third-party cost", note: "Premium set by the insurer for the whole visa period; family policies cost more" },
      { item: "Health examinations, police certificates, English test, translations", amount: "Typical third-party costs", note: "Vary by country and provider" },
    ],
    afterGrant: [
      "Do not enter Australia before your OSHC starts or, for under-18s, before your welfare arrangements start; keep OSHC until you leave (condition 8501).",
      "Give your provider your residential address within 7 days of arriving and within 7 days of any change (condition 8533).",
      "Do not work until your course has started, and keep to 48 hours a fortnight while the course is in session (condition 8105); your family members are limited under condition 8104.",
      "Stay enrolled at the same or a higher AQF level, attend and progress as your provider requires, and keep course gaps under two months (condition 8202). Providers report breaches to the Department under the ESOS Act.",
      "Tell the Department through ImmiAccount if your passport, address, relationship status, welfare arrangements or family change, and tell your provider before you change or defer your course.",
      "The visa cannot be extended. To keep studying you need a new Student visa, which most people must lodge from outside Australia; if you finish a course, you may be eligible for a Temporary Graduate visa (485) within six months of completion, or a Visitor visa (600) to attend graduation.",
      "You can travel in and out of Australia while the visa is valid, but time outside Australia does not extend it, and the visa ceases if another substantive visa is granted.",
      "Breaching a condition can lead to cancellation under section 116 of the Migration Act after a notice of intention to consider cancellation.",
    ],
    pathways: [
      {
        title: "Temporary Graduate visa (subclass 485)",
        description:
          "Two to three years of post-study work rights for graduates aged 35 or under who apply within six months of completing an eligible degree, diploma or trade qualification.",
        href: "/visas/skilled/temporary-graduate-visa-485",
      },
      {
        title: "Points-tested skilled visas (189, 190, 491)",
        description: "Australian study, regional study and a Professional Year each add points; state nomination adds 5 or 15 points.",
        href: "/visas/skilled/skilled-migration-points-test",
      },
      {
        title: "Skills in Demand visa (subclass 482)",
        description: "Employer sponsorship in a CSOL occupation once you have at least one year of relevant work experience; condition 8534 does not stop a 482 application after you finish your course.",
        href: "/visas/employer-sponsored/skills-in-demand-visa-482",
      },
      {
        title: "From study to permanent residence",
        description: "The realistic sequence of visas after graduation and the traps along the way.",
        href: "/visas/study/study-to-permanent-residence",
      },
    ],
    risks: [
      "Refused on the Genuine Student criterion (cl 500.212): generic answers, a course that does not fit your education or work history, a history of changing courses or providers, or a long gap with no credible explanation.",
      "Refused on financial capacity (cl 500.214): a one-day bank balance certificate, large unexplained deposits, an education loan that has not been disbursed, or income evidence that is not an official government document.",
      "Invalid application: no CoE attached, lodging in Australia without an eligible visa and an exemption, or no welfare arrangements for an under-18. Invalid applications cannot be reviewed at the ART and may leave you unlawful if your visa has expired.",
      "PIC 4020: a bogus bank statement, English result or transcript leads to refusal and a three-year bar, and can affect family members.",
      "The CoE is cancelled or the course finishes before the decision and no new CoE is uploaded, so the enrolment criterion fails at time of decision.",
      "OSHC details missing from the form, or a policy that starts on the course date rather than the arrival date, leading to refusal or a shorter visa.",
      "Applying in Australia without a substantive visa after an earlier refusal or cancellation: the section 48 bar and the one-time rule for applications made without a substantive visa.",
    ],
    faqs: [
      {
        question: "How many hours can I work on a Student visa?",
        answer:
          "Up to 48 hours in any fortnight (14 days starting on a Monday) while your course is in session, across all jobs, and unlimited hours during scheduled course breaks or after you have completed the course on your CoE. You cannot work before the course starts unless you held a visa with work rights when you applied. Research master's and PhD students have no limit once their course has begun. Unpaid work experience counts towards the 48 hours unless it is a mandatory part of the CRICOS-registered course.",
      },
      {
        question: "Can I apply for a Student visa while I am in Australia?",
        answer:
          "Only in limited cases since 2 October 2026. If you hold a visitor, Temporary Graduate, Working Holiday, 482 or most other temporary visas you must leave and apply from outside Australia. A primary student visa holder can apply onshore only under one of six exemptions, such as needing up to 12 more months with the same provider, starting a PhD, studying at school, progressing from a completed main course to a higher AQF level, or provider default. Anyone else must be outside Australia when they lodge and when the visa is granted.",
      },
      {
        question: "Can my partner and children come with me?",
        answer:
          "Only if you fit an exemption: a PhD student, a DFAT or Defence sponsored student, a fully funded foreign government scholarship holder, an eligible Pacific Island or ASEAN national, or family members who already hold your current student visa where you meet an onshore exemption. They must apply with you from the same place. Family members can no longer apply later as subsequent entrants.",
      },
      {
        question: "How long will my visa be granted for?",
        answer:
          "It follows your course and your OSHC. A course of 10 months or more that ends in November or December usually gives a visa to 15 March of the next year; a course of 10 months or more ending between January and October gives two extra months; a course under 10 months gives one extra month. Postgraduate research students get about six extra months for thesis marking. Tertiary study is generally capped at five years, or six for a logical package of courses, primary school at three years, and the overall maximum is six years.",
      },
      {
        question: "How much money do I need to show?",
        answer:
          "Travel costs, the first 12 months of course fees less what you have paid, A$29,710 of living costs for yourself, A$10,394 for a partner, A$4,449 for each child and A$13,502 a year of school fees per school-age child. Instead of savings you can show that your parents or partner earned at least A$87,856 in the last 12 months (A$102,500 if family members apply with you). The Department warns that real living costs are often higher than these minimums.",
      },
      {
        question: "What English score do I need?",
        answer:
          "For tests taken on or after 7 August 2025, IELTS 6.0 overall (or PTE Academic 47, TOEFL iBT 67, OET 1210, CELPIP 7, LANGUAGECERT 61, MET 53, C1 Advanced 161). The threshold drops to IELTS 5.5 if your main course is packaged with at least 10 weeks of ELICOS or a Foundation or Pathway program, and to 5.0 with at least 20 weeks of ELICOS. The test must be within two years, and online-only tests are not accepted. Many applicants are exempt, including passport holders of the UK, USA, Canada, New Zealand and Ireland and students in school, standalone ELICOS or postgraduate research courses.",
      },
      {
        question: "Can I change my course or education provider?",
        answer:
          "You can change, but condition 8202 requires you to stay enrolled at the same or a higher AQF level (except a move from a PhD to a master's), and the National Code 2018 stops a new provider enrolling you until you have completed six months of your principal course unless your current provider releases you or an exception applies. Tell your current provider within seven days of getting a new CoE (condition 8533). Moving to a lower-level course requires a new visa, which usually means applying from outside Australia.",
      },
      {
        question: "What if my application is refused?",
        answer:
          "The Department tells you in writing why it refused and whether you can seek review. Refusals of applications lodged in Australia can usually be reviewed by the Administrative Review Tribunal within the time stated in the letter; refusals of applications lodged outside Australia generally cannot. The application charge is not refunded. A refusal while you have no substantive visa in Australia brings on the section 48 bar, which limits which visas you can apply for onshore.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 500 (cl 500.211 to 500.214 criteria, Division 500.3 secondary criteria, Division 500.6 conditions)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1222 (Student (Temporary) (Class TU) application requirements, including the 2 October 2026 location and family rules)", url: REGS },
      { label: "Migration Regulations 1994, Sch 8 conditions 8104, 8105, 8201, 8202, 8203, 8204, 8208, 8303, 8501, 8516, 8517, 8532, 8533, 8534 and 8535", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PIC 4001, 4004, 4005, 4013, 4014, 4019 and 4020", url: REGS },
      { label: "Migration Act 1958, ss 48, 65, 116, 119, 338, 499 and 501", url: ACT },
      { label: "Migration (LIN 19/198: Evidence of financial capacity - Subclass 500 Visa and Subclass 590 Visa) Instrument 2019, compilation of 10 May 2024", url: LIN_19_198 },
      { label: "Migration (English Language Tests and Evidence Exemptions for Subclass 500 (Student) Visas) Instrument 2025 (LIN 25/090)", url: LIN_25_090 },
      { label: "Direction No. 106 - Assessing the genuine entry and stay requirements for Student visa and Student Guardian visa applications (from 23 March 2024)", url: MD_106 },
      { label: "Direction No. 115 - Order for considering and disposing of offshore Subclass 500 (Student) visa applications (from 14 November 2025)", url: MD_115 },
      { label: "Education Services for Overseas Students Act 2000 and the National Code of Practice 2018", url: NATIONAL_CODE },
    ],
    sources: [
      { label: "Home Affairs: Student visa (subclass 500)", url: HA_500 },
      { label: "Home Affairs: Changes to Student visa application rules (subclasses 500 and 590)", url: HA_CHANGES },
      { label: "Home Affairs: Changes to Student visa application rules fact sheet (PDF)", url: FACT_SHEET },
      { label: "Home Affairs: Genuine Student requirement", url: HA_GS },
      { label: "Home Affairs: Genuine access to funds", url: HA_FUNDS },
      { label: "Home Affairs: Length of stay for Student visas", url: HA_STAY },
      { label: "Home Affairs: Welfare and custody arrangements for students under 18", url: HA_WELFARE },
      { label: "Home Affairs: Education provider default", url: HA_DEFAULT },
      { label: "Home Affairs: See your visa conditions (subclass 500)", url: `${HA_CONDITIONS}?product=500` },
      { label: "Home Affairs: Student visa processing priorities", url: HA_PRIORITIES },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: HA_FEES },
      { label: "Home Affairs: Health requirement", url: HA_HEALTH },
      { label: "Home Affairs: Character requirements", url: HA_CHARACTER },
      { label: "Home Affairs: Global visa processing times", url: HA_PROCESSING },
    ],
    related: [
      { label: "Genuine Student requirement", href: "/visas/study/genuine-student-requirement" },
      { label: "Student visa financial capacity", href: "/visas/study/student-visa-financial-capacity" },
      { label: "Student visa conditions and work rights", href: "/visas/study/student-visa-conditions-and-work-rights" },
      { label: "Student Guardian visa (subclass 590)", href: "/visas/study/student-guardian-visa-590" },
      { label: "Student visa services", href: "/services/student-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "500 visa",
      "subclass 500",
      "student visa Australia",
      "student visa requirements 2026",
      "student visa cost",
      "student visa 48 hours",
      "genuine student requirement",
      "student visa financial requirements",
      "student visa changes 2 October 2026",
      "apply for student visa onshore",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Student Guardian visa (subclass 590)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "student-guardian-visa-590",
    category: "study",
    kind: "visa",
    subclass: "590",
    name: "Student Guardian visa",
    title: "Student Guardian visa (subclass 590)",
    seoTitle: "Subclass 590 Student Guardian visa: eligibility and cost",
    seoDescription:
      "Student Guardian visa (subclass 590) in 2026: who can be a guardian, the A$2,500 charge, funds of A$29,710 a year, no work rights, and conditions 8537 and 8538.",
    intro:
      "The Student Guardian visa (subclass 590) lets a parent, custodian or relative aged 21 or over live in Australia to care for a student visa holder who is under 18, or older in exceptional circumstances. The guardian must live with the student, support them financially and cannot work. The visa lasts as long as the student's visa or until the student turns 18, and it leads to no other visa.",
    factsAsAt: "12 October 2026",
    permanent: false,
    tags: ["Temporary", "Apply in or outside Australia", "No pathway to PR"],
    keyFacts: [
      { label: "Government fee", value: "A$2,500", note: "Primary applicant, 1 July 2026 charge; A$500 for each child under 6 included" },
      {
        label: "Length of stay",
        value: "Tied to the student's visa or their 18th birthday",
        note: "Set by the Department in the grant letter; a further 590 can be applied for if the student keeps studying",
      },
      { label: "Work rights", value: "None", note: "Condition 8101; ELICOS study under 20 hours a week or other study up to 3 months is allowed" },
      { label: "Pathway to permanent residence", value: "None", note: "A temporary visa for the care of a student only" },
      {
        label: "Where to apply",
        value: "In or outside Australia",
        note: "In Australia only if you already hold a Student Guardian visa and the student continues to study",
      },
      {
        label: "Sponsor or nomination",
        value: "Nominated by the student's parent or custodian",
        note: "Form 157N Nomination of a student guardian lodged with the student's application",
      },
    ],
    alert: {
      title: "Onshore applications restricted from 2 October 2026",
      body: "From 2 October 2026 holders of visitor, Temporary Graduate, Working Holiday, 482 and most other temporary visas cannot lodge a Student Guardian visa application in Australia. Current Student Guardian visa holders can still apply for a further Student Guardian visa in Australia if the student they care for continues to study. Everyone else must apply from outside Australia and be outside Australia when the visa is granted.",
      href: HA_CHANGES,
      linkLabel: "Read the Home Affairs notice",
    },
    whoFor: [
      "You are the parent or legal custodian of a child under 18 who holds or is applying for a Student visa to attend school in Australia.",
      "You are a grandparent, sibling, aunt or uncle aged 21 or over, nominated in writing by the student's parent, and you will live with the student in Australia.",
      "You already hold a Student Guardian visa and the student you care for has a new Confirmation of Enrolment, so you need a further visa.",
      "The student is 18 or over but needs your care because of exceptional circumstances, such as a serious medical condition.",
    ],
    eligibility: [
      {
        title: "A parent, custodian or relative of the student",
        detail:
          "You must be the parent of the student visa holder, a person who has custody of the student, or a relative aged 21 or over nominated in writing by a parent or custodian. For this visa a relative is a parent or step-parent, grandparent or step-grandparent, sibling or step-sibling, aunt or uncle (including step), niece or nephew (including step), partner, or child or stepchild. The student must be under 18, or 18 or over and in need of care because of exceptional circumstances. You can care for more than one student.",
        legal: "Migration Regulations 1994, Sch 2 Division 500.21 and cl 590.211 to 590.213 (Part 590 primary criteria)",
      },
      {
        title: "Able to provide accommodation, welfare and support",
        detail:
          "You must be able to provide the student with accommodation, general welfare and support for the whole period, and once the visa is granted you must live with the student in Australia (condition 8537). Form 157N must be attached or the application is invalid; if the student is applying for a Student visa at the same time, both applications should be lodged together.",
        legal: "Migration Regulations 1994, Sch 2 Part 590; condition 8537 (Sch 8)",
      },
      {
        title: "Financial capacity",
        detail:
          "You must show enough money for travel for you and the student, 12 months of living costs of A$29,710 for yourself and A$29,710 for the student, up to 12 months of the student's course fees that fall due while you are in Australia (less fees already paid), A$4,449 a year for each child under 6 who comes with you, and A$13,502 a year of school fees for any school-age child. Stays under 12 months are pro rata. Acceptable evidence is money deposits with a financial institution, loans from a financial institution or a government, or a scholarship or other financial support, and you must explain where deposits came from. Alternatively, show official income documents proving that your spouse or de facto partner who is not travelling with you earned at least A$102,500 in the 12 months before you applied. As a guide the Department allows about A$2,000 a person for travel.",
        legal: "Migration Regulations 1994, Sch 2 cl 590.216; LIN 19/198 s 9",
      },
      {
        title: "Genuine temporary entrant",
        detail:
          "You must intend to stay only temporarily and to do only what the visa allows, and you must have substantially complied with the conditions of your last substantive visa and any bridging visa. The Department looks at your ties at home, how much time you have already spent in Australia and whether the visa is being used to maintain ongoing residence, your immigration history, and anything else relevant, applying Ministerial Direction No. 106. A written statement with evidence of family, property, employment and your right to return home supports this.",
        legal: "Migration Regulations 1994, Sch 2 cl 590.215(a); Direction No. 106, Division 2",
      },
      {
        title: "Children under 6",
        detail:
          "The visa is refused if any member of your family unit is under 6, even one staying at home, unless there are compelling and compassionate reasons or the grant would significantly benefit relations between Australia and another government. A child under 6 who is granted the visa holds it only until their sixth birthday and then needs their own Student visa. Children aged 6 or over cannot be included and must apply for their own Student visa. You cannot add a child under 6 after you lodge.",
        legal: "Migration Regulations 1994, Sch 2 Part 590 (including cl 590.312 for secondary applicants)",
      },
      {
        title: "Welfare arrangements for children left at home",
        detail:
          "If you have children under 18 who are not coming with you and do not hold a Student visa, you must show that they will live with another parent or custodian, or with a relative aged 21 or over, and provide a letter from that person accepting responsibility and confirming the child will depend on them financially, with a copy of their passport or driver licence.",
        legal: "Migration Regulations 1994, Sch 2 Part 590",
      },
      {
        title: "Adequate health insurance",
        detail:
          "You are liable for your own health costs in Australia. You must show adequate health insurance for you and any family members for the first 12 months, such as Overseas Visitors Health Cover or an equivalent product, and keep cover for the whole stay (condition 8501). Reciprocal health care agreements may help citizens of some countries.",
        legal: "Migration Regulations 1994, Sch 2 Part 590; condition 8501 (Sch 8)",
      },
      {
        title: "Hold an eligible visa if you apply in Australia",
        detail:
          "You can apply in Australia only if you already hold a Student Guardian visa and the student continues to study. You cannot apply onshore while holding a subclass 400, 403 (Domestic Worker), 407, 408, 417, 457, 462, 482, 485, 500 (as a dependant), 600, 601, 602, 651, 771, 988 or 995 (primary) visa. Without a substantive visa you can apply within 28 days of holding a Student Guardian, special purpose or dependent diplomatic visa, or of a Tribunal decision setting aside a cancellation.",
        legal: "Migration Regulations 1994, Sch 1 item 1222 (as amended from 2 October 2026)",
      },
      {
        title: "Health, character, values and debts",
        detail:
          "You and any family member who applies must meet the health requirement. If you are a relative rather than a parent you must meet the character requirement: an Australian Federal Police certificate if you have spent 12 months or more in Australia in the last 10 years since turning 16, and a police certificate from every other country where you spent 12 months or more in that period. You must sign the Australian Values Statement and have repaid or arranged to repay any debt to the Australian Government. Earlier refusals and cancellations are considered.",
        legal: "PIC 4001, 4004, 4005, 4013, 4014 and 4019 (Sch 4); Migration Act 1958, s 501",
      },
    ],
    familyNote:
      "Only your dependent children under 6 can be included, and only where compelling and compassionate reasons exist or the grant benefits Australia's relationship with another government. A child under 6 holds the visa until their sixth birthday and must then apply for a Student visa. Your partner cannot be included; children aged 6 or over need their own Student visa. Each child included pays A$500.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages showing your photo, personal details and issue and expiry dates",
          "National identity card if you have one, and change-of-name documents",
          "Birth certificates or the family book showing the names of both parents of any child included",
        ],
      },
      {
        group: "Guardianship and relationship",
        items: [
          "Form 157N Student guardianship arrangements, signed by the student's parent or custodian (without it the application is invalid)",
          "Evidence of your relationship to the student, such as birth certificates linking you, the student and the parents",
          "Form 1229 consent or a statutory declaration from any parent of an included child who is not travelling, or evidence of sole custody",
          "For children left at home: a letter from the person who will care for them and a copy of that person's passport or driver licence",
        ],
      },
      {
        group: "Genuine temporary entrant and funds",
        items: [
          "A written statement about your ties at home, your right to return, your immigration history and why you intend to stay only temporarily (it may be written in your own language with a translation)",
          "Bank transaction statements showing the history of funds, loan or scholarship documents, and the identity of anyone providing funds with evidence of your relationship",
          "Tax assessments less than 12 months old if you rely on a non-travelling partner's income of at least A$102,500",
          "The student's CoE and fee receipts to show course fees due in the next 12 months",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Evidence of adequate health insurance for the first 12 months for you and any child included",
          "Health examinations when the Department asks, and a polio vaccination certificate if you spent time in a listed country",
          "If you are a relative: an AFP complete-disclosure National Police Certificate where required, and overseas police certificates for every country lived in for 12 months or more in the last 10 years since you turned 16",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm who will be the guardian",
        description:
          "The student's parent or custodian decides who will care for the student and, if it is a relative, nominates them in writing. Check that no member of your family unit is under 6 unless you can show compelling and compassionate reasons.",
        output: "You hold: a completed Form 157N signed by the parent or custodian",
      },
      {
        title: "Gather the student's documents and your evidence of funds",
        description:
          "Collect the student's CoE and fee receipts, then assemble bank statements with a clear history, loan documents or a partner's tax assessment. Work out living costs for you (A$29,710), the student (A$29,710) and any child under 6 (A$4,449), plus travel and school fees.",
        output: "You hold: funds evidence covering 12 months of costs for you and the student, or official income documents",
      },
      {
        title: "Prepare your genuine temporary entrant statement and health cover",
        description:
          "Write your statement, collect proof of ties at home, and buy health insurance that starts when you arrive. Arrange police certificates now if you are a relative rather than a parent.",
        output: "You hold: a signed statement with evidence, a health insurance policy and any police certificates",
      },
      {
        title: "Lodge online with the student's application",
        description:
          "Apply in ImmiAccount at the same time as the student, attach your documents and pay A$2,500 plus A$500 for each child included. If you apply in Australia as a current Student Guardian visa holder you receive a Bridging visa A that does not allow travel.",
        output: "You hold: a lodged application with a transaction reference and, if onshore, a Bridging visa A",
      },
      {
        title: "Respond to requests and wait for the decision",
        description:
          "Provide health examinations and biometrics when asked, report changes of address, passport, relationship or the student's enrolment, and do not book travel until the visa is granted. If you applied from outside Australia you must be outside Australia at grant. Processing times are published only as a guide on the Home Affairs tool.",
        output: "You hold: a grant letter stating your visa start and end dates and conditions",
      },
    ],
    conditions: [
      { code: "8101", meaning: "You must not work in Australia, paid or unpaid work that would normally be paid." },
      { code: "8201", meaning: "You must not study or train for more than three months in total, except an ELICOS course of under 20 hours a week." },
      { code: "8501", meaning: "You must hold and maintain adequate health insurance for the whole of your stay." },
      { code: "8502", meaning: "You must not enter Australia before the student named in your visa has entered Australia." },
      { code: "8516", meaning: "You must continue to satisfy the criteria for the grant of the visa, including the ability to support the student." },
      { code: "8534", meaning: "While in Australia you cannot be granted another substantive visa except a Temporary Graduate (485), a Student Guardian (590) or a protection visa, unless the condition is waived." },
      { code: "8537", meaning: "You must live in Australia while the student is here, stay with them, and provide their accommodation, support and general welfare." },
      {
        code: "8538",
        meaning:
          "You must not leave Australia without the student unless the Department has approved alternative welfare arrangements for compassionate or compelling reasons, endorsed by the student's provider if the student is under 18. Leaving without approval can lead to cancellation of your visa and the student's.",
      },
    ],
    costs: [
      { item: "Base application charge", amount: "A$2,500", note: "Primary applicant, 1 July 2026 charge; a lower charge applies to eligible Pacific Island and Timor-Leste citizens" },
      { item: "Additional applicant under 18", amount: "A$500", note: "Only children under 6 can be included" },
      { item: "Subsequent temporary application charge", amount: "A$700", note: "Worked out for each person in Australia from their own visa history; not charged on a person's first substantive temporary visa application made in Australia" },
      { item: "Charge exemption", amount: "Nil", note: "Where the nominating student is affected by an education provider default" },
      { item: "Health insurance", amount: "Typical third-party cost", note: "Overseas Visitors Health Cover or equivalent for the whole stay" },
      { item: "Health examinations, police certificates, translations", amount: "Typical third-party costs", note: "Vary by country" },
    ],
    afterGrant: [
      "Enter Australia only after the student has entered (condition 8502) and live with the student for the whole stay (condition 8537).",
      "You cannot work (condition 8101) and can study only an ELICOS course of under 20 hours a week or any other course for up to three months (condition 8201).",
      "Before any trip without the student, ask the Department to approve alternative welfare arrangements: a new Form 157N naming another guardian, a statement of the compelling or compassionate reason, and the school's endorsement (condition 8538).",
      "Keep health insurance for the whole stay (condition 8501) and tell the Department of changes to your address, passport, relationship, work or the welfare arrangements.",
      "The visa ends on the date in your grant letter, usually when the student's visa ends or the student turns 18; apply for a further Student Guardian visa before then if the student continues to study.",
      "If the student's visa is cancelled, or the welfare arrangements are not maintained, your visa can also be cancelled under section 116 of the Migration Act.",
    ],
    pathways: [
      {
        title: "Student visa (subclass 500)",
        description: "The student's visa, welfare arrangements and the Form 157N nomination that underpin the guardian visa.",
        href: "/visas/study/student-visa-500",
      },
      {
        title: "Visitor visa (subclass 600)",
        description: "A shorter alternative for a parent who wants to visit a student rather than live with them full time.",
        href: "/visas/other-visas/visitor-visa-600",
      },
      {
        title: "Further Student Guardian visa",
        description: "Current holders can apply again in Australia while the student continues to study; others must apply from outside Australia.",
      },
    ],
    risks: [
      "Refused because a member of your family unit is under 6 and no compelling and compassionate reasons are shown, even if that child is staying at home.",
      "Refused on the genuine temporary entrant criterion because you have already spent long periods in Australia, have few ties at home, or the visa appears to be a way to live in Australia rather than to care for the student.",
      "Refused on funds because you did not include the student's living costs and course fees, or relied on a one-day balance certificate without a history.",
      "Invalid application because Form 157N was not attached or you lodged in Australia while holding a visitor or other listed visa.",
      "Cancellation for leaving Australia without the student (condition 8538) or for working (condition 8101).",
      "Character refusal for a relative guardian who has not provided police certificates for every country lived in for 12 months or more.",
    ],
    faqs: [
      {
        question: "Can I work on a Student Guardian visa?",
        answer:
          "No. Condition 8101 prohibits any work. You must show from the start that you can support yourself, the student and any child included without working, which is why the funds requirement covers 12 months of living costs for both you and the student.",
      },
      {
        question: "Can I study while I am here?",
        answer: "You can take an ELICOS English course of under 20 hours a week, or any other study or training for no more than three months in total (condition 8201).",
      },
      {
        question: "Can I leave Australia for a short trip while the student stays?",
        answer:
          "Only with the Department's approval. You must show a compassionate or compelling reason, nominate another parent or close relative aged 21 or over on a new Form 157N, and provide the school's endorsement and the new guardian's police and identity documents. Leaving without approval breaches condition 8538 and can lead to cancellation of your visa and the student's.",
      },
      {
        question: "What happens when the student turns 18?",
        answer:
          "The Department usually sets your visa to end when the student turns 18 or when the student's visa ends, whichever comes first. A further Student Guardian visa for an adult student is possible only where exceptional circumstances mean the student still needs your care.",
      },
      {
        question: "Can my other children come with me?",
        answer:
          "Children aged 6 or over cannot be included; they need their own Student visa to attend school. A child under 6 can be included only in compelling and compassionate circumstances, and even a child under 6 who stays at home can cause the visa to be refused unless such reasons exist.",
      },
      {
        question: "How much money do I need to show?",
        answer:
          "Under LIN 19/198, 12 months of living costs for you (A$29,710) and for the student (A$29,710), the student's course fees falling due while you are here (up to 12 months, less fees paid), travel for both of you, A$4,449 for each child under 6 who comes with you and A$13,502 in school fees per school-age child. Alternatively, your spouse or de facto partner who stays at home can show an annual income of at least A$102,500 with official government documents.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 590 (cl 590.215 genuine temporary entrant, cl 590.216 financial capacity, cl 590.312 secondary applicants under 6)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1222 (Student (Temporary) (Class TU) application requirements)", url: REGS },
      { label: "Migration Regulations 1994, Sch 8 conditions 8101, 8201, 8501, 8502, 8516, 8534, 8537 and 8538", url: REGS },
      { label: "Migration Regulations 1994, Sch 4 PIC 4001, 4004, 4005, 4013, 4014 and 4019", url: REGS },
      { label: "Migration Act 1958, ss 48, 65, 116, 119 and 501", url: ACT },
      { label: "Migration (LIN 19/198: Evidence of financial capacity - Subclass 500 Visa and Subclass 590 Visa) Instrument 2019, s 9", url: LIN_19_198 },
      { label: "Direction No. 106, Division 2 (genuine temporary entrant criterion for Student Guardian visas)", url: MD_106 },
    ],
    sources: [
      { label: "Home Affairs: Student Guardian visa (subclass 590)", url: HA_590 },
      { label: "Home Affairs: Changes to Student visa application rules (subclasses 500 and 590)", url: HA_CHANGES },
      { label: "Home Affairs: Welfare and custody arrangements for students under 18", url: HA_WELFARE },
      { label: "Home Affairs: See your visa conditions (subclass 590)", url: `${HA_CONDITIONS}?product=590` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: HA_FEES },
      { label: "Home Affairs: Character requirements", url: HA_CHARACTER },
      { label: "Home Affairs: Global visa processing times", url: HA_PROCESSING },
    ],
    related: [
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "Student visa financial capacity", href: "/visas/study/student-visa-financial-capacity" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Student visa services", href: "/services/student-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "590 visa",
      "subclass 590",
      "student guardian visa",
      "student guardian visa requirements",
      "student guardian visa cost",
      "guardian visa for child studying in Australia",
      "form 157N",
      "student guardian visa work rights",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Genuine Student requirement (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "genuine-student-requirement",
    category: "study",
    kind: "guide",
    name: "Genuine Student requirement",
    title: "The Genuine Student requirement for Student visas",
    seoTitle: "Genuine Student requirement: questions, evidence, refusals",
    seoDescription:
      "How the Genuine Student requirement for the subclass 500 visa is assessed in 2026 under Direction 106: the four questions, useful evidence and refusal reasons.",
    intro:
      "The Genuine Student (GS) requirement is the criterion in clause 500.212 of the Migration Regulations that every Student visa applicant has had to satisfy since 23 March 2024, replacing the Genuine Temporary Entrant test. You answer four short questions in the online form and the Department weighs your circumstances, immigration history, course choice and compliance record under Ministerial Direction No. 106. Because it turns on your own answers and evidence, it is the part of the application most within your control.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Temporary", "Apply outside Australia"],
    keyFacts: [
      { label: "Applies to", value: "Every Student visa (500) application lodged on or after 23 March 2024", note: "Earlier applications were assessed under the Genuine Temporary Entrant test" },
      { label: "Legal basis", value: "Clause 500.212 and Direction No. 106", note: "The Direction binds departmental decision makers and the Administrative Review Tribunal" },
      { label: "Format", value: "Four questions, 150 words each, in English, in the online form", note: "A fifth question if you held a student visa before or apply onshore from a non-student visa" },
      { label: "Government fee", value: "None beyond the visa charge", note: "The A$2,500 Student visa charge covers the assessment" },
      { label: "Future PR plans", value: "Not held against you", note: "The Direction recognises that genuine students may later seek permanent residence" },
      { label: "Dependants", value: "Assessed under clause 500.312", note: "Family members must be genuine applicants for entry and stay as family of a student" },
    ],
    whoFor: [
      "You are preparing a Student visa application and want to answer the four Genuine Student questions properly.",
      "You previously held a student visa, changed courses or providers, or had a study gap, and need to explain your record.",
      "You are applying in Australia from another visa and must answer the extra question about why you now want to study.",
      "Your Student visa was refused on clause 500.212 and you want to understand the finding before seeking review or reapplying.",
    ],
    eligibility: [
      {
        title: "The legal test",
        detail:
          "You must be a genuine applicant for entry and stay as a student, having regard to (i) your circumstances, (ii) your immigration history and (iii) if you are a minor, the intentions of your parent, legal guardian or spouse; you must intend to comply with the visa conditions, having regard to your record of compliance with previous visas and your stated intention; and any other relevant matter is considered. If the decision maker is not satisfied on the first two limbs, the rest need not be considered.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.212 (cl 500.312 for family members); Direction No. 106, para 7",
      },
      {
        title: "Question 1: your current circumstances",
        detail:
          "Describe your ties to family, community, employment and your economic situation at home. The Department looks at whether a similar course is available in your home country and why you are not taking it, the nature of your ties, your economic circumstances relative to others in your country, military service obligations and any political or civil unrest, and whether any of these would make a Student visa a way to enter Australia for a reason other than study.",
        legal: "Direction No. 106, para 8(2) to 8(3)",
      },
      {
        title: "Question 2: why this course with this provider",
        detail:
          "Explain your understanding of the course requirements, the provider and living in Australia. Decision makers assess how much research you have done into the course and your living arrangements, your knowledge of the provider, your previous study and qualifications, and whether the visa is being used to maintain ongoing residence rather than to study.",
        legal: "Direction No. 106, para 8(4)",
      },
      {
        title: "Question 3: how the course benefits you",
        detail:
          "Show that the course is consistent with your past employment and current level of education, that it will help you obtain employment or improve your prospects in your home country or elsewhere, and what salary or other benefits you could expect with the qualification. Reasonable changes of career or study pathway are allowed if explained.",
        legal: "Direction No. 106, para 8(5)",
      },
      {
        title: "Immigration history",
        detail:
          "Your visa and travel history for Australia and other countries is examined: earlier applications and their outcomes, refusals and cancellations and the grounds, whether you complied with conditions and left before your visa expired, any refusal of entry, and compliance with the migration laws of other countries. A relative's immigration history of concern can also trigger closer scrutiny.",
        legal: "Direction No. 106, para 9; cl 500.212(a)(ii)",
      },
      {
        title: "Previous student visa holders and the extra question",
        detail:
          "If you previously held a student visa, the Department asks whether you were reasonably engaged in the course: did you meet the course requirements, sit assessments, start and finish on time, and follow a logical progression, or is there a history of starting but not completing courses, study gaps, a pattern of changing or deferring, moving to unrelated courses or changing providers. Multiple course loads that make completion improbable also count against you.",
        legal: "Direction No. 106, para 11",
      },
      {
        title: "Triggers for closer scrutiny",
        detail:
          "The Direction lists situations where further scrutiny may be appropriate: departmental fraud and compliance intelligence, an applicant or relative with an immigration history of concern, a course unrelated to previous study or employment, inconsistencies in the application, holding a Temporary Graduate (485), Visitor (600), ETA (601) or eVisitor (651) visa, or holding or having held a student visa. In these cases the Department may request more information or evidence.",
        legal: "Direction No. 106, para 7(4) to 7(5)",
      },
      {
        title: "Minors and family members",
        detail:
          "For an applicant under 18 the Department considers whether the parents, guardian or spouse intend that the child's main purpose is to study. Partners and children must themselves be genuine applicants for entry and stay as family members of a student, and the Department checks that the relationship is not contrived to obtain a visa.",
        legal: "Direction No. 106, paras 8(4)(d) and 10; cl 500.312",
      },
    ],
    documents: [
      {
        group: "Evidence that supports your answers",
        items: [
          "Previous study: transcripts, certificates, the names of providers and the length of each course",
          "Previous study in Australia: a complete history, reasons for any change of course or provider, course progress reports and an explanation of any gap of more than two months in an academic year",
          "Current employment: employer details and address, period of employment, position held and a contact who can confirm it",
          "Circumstances at home: evidence of family, community and employment ties, and reasons for not studying a similar course at home if one is available",
          "Economic circumstances: 12 months of employment or business records, income tax returns or bank statements, and any job offer with salary after you graduate",
          "If relevant: evidence of political or civil unrest or military service obligations and how they affect you",
        ],
      },
    ],
    steps: [
      {
        title: "Map your story before you write",
        description:
          "List your education, work and visa history in date order and identify anything that needs explaining: a gap, a change of field, a refusal, a previous student visa, or a course below your current qualification level. The answers must be consistent with every document you attach.",
        output: "You hold: a timeline and a list of points each answer must address",
      },
      {
        title: "Draft the four answers within 150 words each",
        description:
          "Write in English in your own words, one answer per question, and avoid attaching a separate statement unless you have something the form cannot hold. State facts that a document can back up rather than general claims about Australia's quality of education.",
        output: "You hold: four draft answers, each under 150 words, plus the fifth if you previously held a student visa or apply onshore",
      },
      {
        title: "Attach the supporting evidence",
        description:
          "Upload transcripts, employment evidence, financial records and home-country ties in ImmiAccount. The Department gives more weight to statements supported by evidence and assesses your personal circumstances as a whole, not as a checklist.",
        output: "You hold: a lodged application in which every claim is matched to a document",
      },
      {
        title: "Respond to any natural justice letter",
        description:
          "If the Department has adverse information or doubts, it may invite you to comment before deciding. Reply within the deadline with evidence, not just assurances; adverse information that is not put to you can be a ground for review.",
        output: "You hold: a written response and new evidence on the file before the decision",
      },
      {
        title: "If refused, check your review rights",
        description:
          "A refusal of an application lodged in Australia can usually be taken to the Administrative Review Tribunal, which applies Direction No. 106 and decides afresh; the application must be lodged within the period in the decision letter and the fee paid. Refusals of offshore applications generally have no merits review, so a fresh application with better evidence is the usual path.",
        output: "You hold: either a Tribunal application lodged in time, or a plan for a new application that addresses the refusal reasons",
      },
    ],
    costs: [
      { item: "Student visa application charge", amount: "A$2,500", note: "The GS assessment is part of the visa decision; no separate fee" },
      { item: "ART review of a refusal (migration decision)", amount: "A$3,727", note: "From 1 July 2026; a 50 per cent reduction is available for financial hardship; onshore refusals only" },
    ],
    pathways: [
      { title: "Student visa (subclass 500)", description: "The full eligibility, cost and conditions of the visa the GS test belongs to.", href: "/visas/study/student-visa-500" },
      { title: "Student visa financial capacity", description: "The funds and income evidence assessed alongside the GS questions.", href: "/visas/study/student-visa-financial-capacity" },
      { title: "ART review of a visa refusal", description: "How merits review of an onshore student visa refusal works and the time limits.", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { title: "Natural justice and adverse information", description: "What the Department must put to you before relying on it.", href: "/visas/appeals-and-review/natural-justice-and-adverse-information" },
    ],
    risks: [
      "Answers copied from a template or an agent's script, with no evidence of research into the course or provider.",
      "A course unrelated to your previous study or work, or at a lower level than a qualification you already hold, with no credible explanation of the career change.",
      "A record on earlier student visas of changing courses or providers, deferring, failing to complete, or long study gaps.",
      "Applying onshore from a visitor, Temporary Graduate or other temporary visa, which the Direction lists as a trigger for closer scrutiny and which, since 2 October 2026, is no longer possible for most visa holders.",
      "Inconsistencies between the form, the GS answers and the documents, which can also raise PIC 4020 if false information is found.",
      "Economic circumstances at home that suggest the visa is a way to enter Australia to work rather than to study, combined with weak financial evidence.",
    ],
    faqs: [
      {
        question: "Is the Genuine Temporary Entrant test still used for student visas?",
        answer:
          "Not for Student visa (500) applications lodged on or after 23 March 2024; those are assessed against the Genuine Student criterion in clause 500.212. The genuine temporary entrant criterion still applies to Student Guardian (590) applicants under clause 590.215, and Direction No. 106 covers both.",
      },
      {
        question: "Does wanting to stay in Australia after my studies count against me?",
        answer:
          "No. Direction No. 106 and the Home Affairs page both say the GS requirement recognises that genuine students may develop skills Australia needs and may later apply for permanent residence, and that such future intentions do not count against an applicant. What matters is that study is your main reason for applying now and that you intend to comply with your conditions.",
      },
      {
        question: "Can I attach a separate GS statement?",
        answer:
          "The Department prefers you to answer the questions in the form, each within 150 words and in English, and to attach supporting documents in ImmiAccount rather than a long separate statement. Evidence carries more weight than narrative.",
      },
      {
        question: "What if I am changing to a different field of study?",
        answer:
          "A course unrelated to your past study or work is listed as a trigger for closer scrutiny, but the Direction tells decision makers to allow for reasonable changes to career or study pathways. Explain the change, show research into the new field and its job prospects at home, and support it with evidence such as a job offer or industry demand.",
      },
      {
        question: "I was refused a visa before. Is a Student visa now impossible?",
        answer:
          "No, but your immigration history is a limb of the test. Disclose every earlier refusal or cancellation, explain the circumstances, and show how your situation has changed. Non-disclosure is treated far more seriously than the refusal itself.",
      },
      {
        question: "Does the Tribunal apply the same rules?",
        answer:
          "Yes. Direction No. 106 applies to members of the Administrative Review Tribunal reviewing Student and Student Guardian visa decisions for applications made on or after 23 March 2024, so the Tribunal weighs the same factors, but it looks at your circumstances at the time of its own decision and can take new evidence.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 cl 500.212 (genuine student) and cl 500.312 (genuine student dependant)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 cl 590.215(a) (genuine temporary entrant for Student Guardian visas)", url: REGS },
      { label: "Direction No. 106 - Assessing the genuine entry and stay requirements for Student visa and Student Guardian visa applications", url: MD_106 },
      { label: "Migration Act 1958, ss 56, 57, 65, 338 and 499", url: ACT },
      { label: "Administrative Review Tribunal Act 2024", url: ART_ACT },
      { label: "PIC 4020 (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Genuine Student requirement", url: HA_GS },
      { label: "Home Affairs: Student visa (subclass 500)", url: HA_500 },
      { label: "Home Affairs: Direction No. 106 (PDF)", url: MD_106 },
      { label: "Administrative Review Tribunal: fees", url: ART_FEES },
    ],
    related: [
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "Student visa financial capacity", href: "/visas/study/student-visa-financial-capacity" },
      { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
      { label: "PIC 4020: fraud and false information", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
      { label: "Student visa services", href: "/services/student-visas" },
    ],
    keywords: [
      "genuine student requirement",
      "GS requirement student visa",
      "genuine student statement",
      "ministerial direction 106",
      "student visa refused genuine student",
      "GTE to GS change",
      "genuine student questions 150 words",
      "subclass 500 genuine student",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Student visa financial capacity (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "student-visa-financial-capacity",
    category: "study",
    kind: "guide",
    name: "Student visa financial capacity",
    title: "Student visa financial capacity: how much money you need",
    seoTitle: "Student visa financial capacity 2026: A$29,710 and more",
    seoDescription:
      "Student visa funds in 2026: A$29,710 living costs, A$10,394 partner, A$4,449 per child, A$13,502 schooling, 12 months of course fees, travel and genuine access.",
    intro:
      "To be granted a Student visa (subclass 500) you must show, when the Department asks, that you have enough money for travel, your first 12 months of course fees and 12 months of living costs for yourself and any family members, or that your parents or partner earn a specified income. The amounts are fixed by legislative instrument LIN 19/198 (A$29,710 a year for the student since 10 May 2024) and you must also prove that the money is genuinely available to you. This guide sets out the figures, the calculation and the evidence the Department accepts.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Temporary", "Apply outside Australia"],
    keyFacts: [
      { label: "Student living costs", value: "A$29,710 for 12 months", note: "LIN 19/198 as amended by LIN 24/042 from 10 May 2024; pro rata for shorter stays" },
      { label: "Partner and children", value: "A$10,394 and A$4,449 a year", note: "Plus A$13,502 a year of school fees for each school-age child" },
      { label: "Course fees", value: "First 12 months, less fees already paid", note: "Total fees if the course is 12 months or less" },
      { label: "Income alternative", value: "A$87,856 or A$102,500 a year", note: "Parent or partner income in the 12 months before applying; the higher figure if family members apply" },
      { label: "Government fee", value: "None beyond the visa charge", note: "The A$2,500 Student visa charge; A$2,050 in the ELICOS and Non-award sectors" },
      { label: "Legal basis", value: "Clause 500.214 and LIN 19/198", note: "Guardians: clause 590.216 and section 9 of the instrument" },
    ],
    whoFor: [
      "You are applying for a Student visa and the Document Checklist Tool says you must attach evidence of financial capacity.",
      "You lodged without funds evidence and the Department has now asked for it while processing your application.",
      "You are bringing a partner or children under an exemption and need to add their living and schooling costs.",
      "You are relying on a parent's income, an education loan or a scholarship and want to know what evidence is accepted.",
      "You are applying for a Student Guardian visa and must cover both your own and the student's costs.",
    ],
    eligibility: [
      {
        title: "Who must provide evidence",
        detail:
          "The Document Checklist Tool (based on your passport country and provider) tells you whether to attach funds evidence when you lodge. If it is required and you do not attach it, the Department may refuse without asking for more. Even where the checklist does not require it, the Department can ask for the evidence during processing, and the amounts you declare in the form must still be true. Secondary exchange students meet the requirement with a completed AASES form, and DFAT and Defence students with a letter of support, which must also cover any family members' costs or separate evidence is needed.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.214; LIN 19/198 ss 6(4) to 6(6)",
      },
      {
        title: "Option 1: funds for 12 months of costs",
        detail:
          "Show funds to meet your travel expenses, your living costs of A$29,710 if you will stay 12 months or more (or the pro rata amount if less), and your course fees: the full fees if the remaining study is under 12 months, or the first 12 months of fees if longer, less any amount already paid. If you are in Australia and your course has started, count the fees for the 12 months from the date you lodge. For each family member applying with you add travel, A$10,394 for a partner, A$4,449 for a child, and A$13,502 of annual school costs for each school-age child.",
        legal: "LIN 19/198 s 6(2)",
      },
      {
        title: "Option 2: parent or partner income",
        detail:
          "Instead of savings, show official government documents of personal income issued in the 12 months before you applied, such as a tax assessment, proving that your parent, spouse or de facto partner earned at least A$87,856 if no family member applies with you, or at least A$102,500 if one does. Both parents' incomes can be combined. Bank statements and employer letters are not accepted for this option.",
        legal: "LIN 19/198 s 6(3)",
      },
      {
        title: "Acceptable forms of funds",
        detail:
          "The instrument specifies four forms of evidence: a money deposit with a financial institution, a loan from a financial institution, a government loan, and a scholarship or financial support. Property, business assets or cash at home do not count unless converted into one of these forms.",
        legal: "LIN 19/198 s 10",
      },
      {
        title: "Pro rata calculation",
        detail:
          "If you or a family member will stay for less than 12 months, divide the annual figure by 365 and multiply by the number of days of the intended stay. School costs and living costs are pro rated the same way.",
        legal: "LIN 19/198 s 11",
      },
      {
        title: "Genuine access to the money",
        detail:
          "Beyond the amount, you must show that the funds are really available to you. If someone else provides them, give evidence of your relationship, their identity documents and any support they have given you or other students before; if the money comes through a business, show that the business operates. Explain the source of deposits with transaction statements showing how the balance built up (salary credits, regular savings); a single-day balance certificate does not show this. For an education loan, provide the loan terms and, ideally, evidence of disbursement; for other loans, the security, the terms and your ability to service it.",
        legal: "Migration Regulations 1994, Sch 2 cl 500.214; Home Affairs policy on genuine access to funds",
      },
      {
        title: "Schooling costs exemptions",
        detail:
          "You need not show school fees if you are a PhD student, or a Commonwealth scholarship, DFAT or Defence sponsored student, and your child is enrolled in a government school that has waived the fees; evidence of enrolment is still required. Everyone else must find out the actual fees, which vary between states, territories and schools, and show at least A$13,502 a year per child.",
        legal: "LIN 19/198 s 6(2)(c)(iv)",
      },
      {
        title: "Student Guardian applicants",
        detail:
          "A Student Guardian (590) applicant must show travel and living costs of A$29,710 for themselves and A$29,710 for the student, the student's course fees falling due while the guardian is in Australia (up to 12 months, less fees paid), and A$4,449 plus school fees for each child under 6 included; or a non-travelling spouse or de facto partner's income of at least A$102,500.",
        legal: "Migration Regulations 1994, Sch 2 cl 590.216; LIN 19/198 s 9",
      },
    ],
    documents: [
      {
        group: "Funds and income evidence",
        items: [
          "Bank transaction statements for the account holding the funds, long enough to show how the balance was accumulated",
          "Loan agreement showing the lender, amount, terms and security, plus evidence of disbursement where available",
          "Scholarship or sponsorship letter stating what it covers and for how long",
          "Tax assessments or other official government income documents less than 12 months old for the parent or partner income option",
          "Identity documents of any third party providing funds, proof of your relationship, and evidence the business is operating if funds come from a business",
          "Receipts or the CoE showing course fees already paid, and a school enrolment letter stating the fees for each child",
        ],
      },
    ],
    steps: [
      {
        title: "Work out the period and the course fees",
        description:
          "Identify the first 12 months of study (or the remaining study if shorter). Divide a multi-year fee by the number of years, or by the number of months and multiply by 12, then deduct what you have paid. Example from Home Affairs: fees of A$50,000 over 3 years give A$16,666 for 12 months; fees of A$20,000 over 18 months give (A$20,000 divided by 18) x 12 = A$13,333.",
        output: "You hold: a course-fee figure for the first 12 months, net of payments",
      },
      {
        title: "Add living costs for everyone applying",
        description:
          "Add A$29,710 for yourself, A$10,394 for a partner and A$4,449 for each child, pro rata if the stay is under 12 months (annual amount divided by 365, times the days of stay).",
        output: "You hold: the living-cost total for the family",
      },
      {
        title: "Add schooling and travel",
        description:
          "Add at least A$13,502 a year for each school-age child unless an exemption applies, and travel as a guide of A$2,000 from most countries, A$2,500 from East or Southern Africa, A$3,000 from West Africa, or A$1,000 if you apply in Australia (A$1,500 if returning to Africa), for each person.",
        output: "You hold: the total minimum amount for the visa",
      },
      {
        title: "Choose the evidence form or the income option",
        description:
          "Match the total to deposits, loans, government loans or scholarships, or instead gather official income documents showing A$87,856 (A$102,500 with family members) earned by your parents or partner in the last 12 months.",
        output: "You hold: evidence in one of the forms specified in LIN 19/198 s 10, or qualifying income documents",
      },
      {
        title: "Prove genuine access",
        description:
          "Assemble transaction histories, the source of large deposits, the sponsor's identity and relationship evidence, and loan disbursement records. Tell your provider about any conditions on an education loan.",
        output: "You hold: a file that shows both the amount and your real access to it",
      },
      {
        title: "Declare and attach",
        description:
          "Enter the figures in the application form and upload the evidence if the checklist requires it or when the Department asks. Keep the funds in place until the decision; the Department may check again and must be satisfied at time of decision.",
        output: "You hold: a lodged application with consistent declared amounts and evidence",
      },
    ],
    costs: [
      { item: "Student visa application charge", amount: "A$2,500", note: "A$2,050 in the ELICOS and Non-award sectors; the funds requirement is separate from the charge" },
      { item: "Travel allowance in the calculation", amount: "A$2,000 per person as a guide", note: "A$2,500 from East or Southern Africa, A$3,000 from West Africa, A$1,000 if applying in Australia" },
    ],
    pathways: [
      { title: "Student visa (subclass 500)", description: "Full eligibility, costs and conditions.", href: "/visas/study/student-visa-500" },
      { title: "Genuine Student requirement", description: "The economic circumstances you describe in the GS answers must match your funds evidence.", href: "/visas/study/genuine-student-requirement" },
      { title: "Student Guardian visa (subclass 590)", description: "Guardians must cover their own and the student's costs.", href: "/visas/study/student-guardian-visa-590" },
    ],
    risks: [
      "A bank balance certificate for a single day, or a large deposit shortly before lodgement with no explanation of its source.",
      "Relying on a relative's income shown by bank statements or an employer letter instead of an official government income document.",
      "An education loan that has been approved but not disbursed, with no evidence of the terms or of how ongoing costs will be met.",
      "Omitting a partner's or child's living costs or school fees when family members are included.",
      "Counting fees already paid without a receipt, or using the full course fee for a course under 12 months after deducting nothing.",
      "Funds that disappear after lodgement: the criterion must be satisfied at time of decision and the Department may ask again.",
    ],
    faqs: [
      {
        question: "Do I always have to attach bank statements?",
        answer:
          "Not always. The Document Checklist Tool tells you, based on your passport country and education provider, whether funds evidence must be attached when you lodge. If it is required and missing, the Department may refuse without asking. Even if it is not required, the Department can request it during processing, so you should have the evidence ready.",
      },
      {
        question: "How long must the money have been in my account?",
        answer:
          "The instrument sets no minimum holding period, but the Department requires evidence of genuine access, which means showing how the funds were accumulated through transaction statements, regular income or documented transfers. A balance that appears days before lodgement needs a documented source.",
      },
      {
        question: "Can my parents' income replace savings?",
        answer:
          "Yes. Official government documents issued in the last 12 months, such as tax assessments, showing a parent's, spouse's or de facto partner's personal income of at least A$87,856, or A$102,500 if family members apply with you, satisfy the requirement. Both parents' incomes can be combined.",
      },
      {
        question: "What if my course is shorter than 12 months?",
        answer:
          "Use the total course fee and pro rata living costs: divide A$29,710 by 365 and multiply by the number of days you intend to stay, and do the same for family members and school costs.",
      },
      {
        question: "Do the figures change every year?",
        answer:
          "They change when the instrument is amended, not automatically. The current figures have applied to applications made on or after 10 May 2024 under LIN 24/042; the previous increase was on 1 October 2023 under LIN 23/070. Check the current compilation of LIN 19/198 before you lodge.",
      },
      {
        question: "Can I rely on working in Australia to cover my costs?",
        answer:
          "No. The Department states that you should not rely on work to support yourself or your family, and the work limit of 48 hours a fortnight during term is not an income source for the calculation. The minimum amounts are also described by the Department as lower than many students' real living costs.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 cl 500.214 (primary applicants), cl 500.313 (family members) and cl 590.216 (Student Guardian)", url: REGS },
      { label: "Migration (LIN 19/198: Evidence of financial capacity - Subclass 500 Visa and Subclass 590 Visa) Instrument 2019, compilation No. 2 of 10 May 2024 (amended by LIN 23/070 and LIN 24/042)", url: LIN_19_198 },
      { label: "Migration Regulations 1994, Sch 8 condition 8516 (continue to satisfy the criteria for grant)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Student visa (subclass 500), Gather documents - evidence you have enough money for your stay", url: HA_500 },
      { label: "Home Affairs: Genuine access to funds", url: HA_FUNDS },
      { label: "Home Affairs: Student Guardian visa (subclass 590), evidence you have enough money", url: HA_590 },
      { label: "Federal Register of Legislation: LIN 19/198", url: LIN_19_198 },
    ],
    related: [
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "Genuine Student requirement", href: "/visas/study/genuine-student-requirement" },
      { label: "Student visa conditions and work rights", href: "/visas/study/student-visa-conditions-and-work-rights" },
      { label: "Fee calculator", href: "/tools/fee-calculator" },
      { label: "Student visa services", href: "/services/student-visas" },
    ],
    keywords: [
      "student visa financial requirements",
      "student visa funds 2026",
      "student visa living costs 29710",
      "LIN 19/198",
      "genuine access to funds student visa",
      "student visa bank statement requirements",
      "student visa parent income 87856",
      "how much money for Australian student visa",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. Student visa conditions and work rights (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "student-visa-conditions-and-work-rights",
    category: "study",
    kind: "guide",
    name: "Student visa conditions and work rights",
    title: "Student visa conditions and work rights explained",
    seoTitle: "Student visa conditions and work rights: 8105, 8202, 8501",
    seoDescription:
      "Student visa conditions in 2026: 48 hours a fortnight in term (8105), enrolment and progress (8202), OSHC (8501), 8533, 8534 and cancellation under section 116.",
    intro:
      "A Student visa (subclass 500) comes with conditions from Schedule 8 of the Migration Regulations that govern how much you can work, what you must study, your health cover, where you live and which visas you can apply for next. Breaching a condition can lead to cancellation under section 116 of the Migration Act, and education providers must report non-attendance and poor progress under the Education Services for Overseas Students (ESOS) framework. This guide explains each condition in plain words and what happens if it is broken.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Temporary", "Apply outside Australia"],
    keyFacts: [
      { label: "Work in term", value: "48 hours a fortnight", note: "Condition 8105; a fortnight is 14 days starting on a Monday" },
      { label: "Work in breaks", value: "Unlimited", note: "Scheduled course breaks, and after you complete the course on your CoE" },
      { label: "Study rule", value: "Stay enrolled at the same or a higher AQF level", note: "Condition 8202; satisfactory attendance and progress as set by your provider" },
      { label: "Health cover", value: "OSHC for the whole stay", note: "Condition 8501" },
      { label: "Further visas", value: "Condition 8534 may limit them", note: "Discretionary; 8535 is mandatory for DFAT and Defence students" },
      { label: "Government fee", value: "None", note: "Checking and complying with conditions costs nothing; cancellation review at the ART costs A$3,727" },
    ],
    whoFor: [
      "You hold a Student visa and want to know exactly how many hours you can work and when.",
      "You are thinking about changing course, provider or research topic and need to know whether your visa allows it.",
      "Your provider has warned you about attendance or course progress, or has reported you to the Department.",
      "You have received a notice of intention to consider cancellation and need to understand the process.",
      "You are a family member on a student visa and want to know your own work and study limits.",
    ],
    eligibility: [
      {
        title: "8105: work limit for the student",
        detail:
          "You must not work before your course starts (unless you held a visa with work rights when you applied). While the course is in session you must not work more than 48 hours in a fortnight, counted across all jobs, where a fortnight is 14 days starting on a Monday. A course is in session during semesters including exam periods and while you take a term-break course that counts towards your main course. It is not in session during scheduled breaks, if your enrolment is deferred or suspended under Standard 9 of the National Code, once you have completed the course on your CoE while your visa is still valid, or after a provider default until you start a new course. You can work unlimited hours out of session. Research master's and PhD students have no limit once their course has started. Paid and unpaid work experience counts unless it is a mandatory, CRICOS-registered part of the course. You are treated as working when rostered, clocked on or paid, except during unpaid breaks.",
        legal: "Migration Regulations 1994, Sch 8 condition 8105",
      },
      {
        title: "8104: work limit for family members",
        detail:
          "Family members cannot work until the student's course starts and are then limited to 48 hours a fortnight at all times, including the student's breaks. There is no limit if the student is studying a master's degree (by research, coursework or extended) or a doctorate. Employers are told to check the relationship and that the course has begun.",
        legal: "Migration Regulations 1994, Sch 8 condition 8104",
      },
      {
        title: "8202: enrolment, attendance and course progress",
        detail:
          "You must remain enrolled in a CRICOS-registered course (full time for DFAT, Defence and secondary exchange students), stay at the same AQF level or higher than the course your visa was granted for (a move from a doctorate at level 10 to a master's at level 9 is allowed), and maintain satisfactory attendance and course progress for each study period as set by your provider. Course gaps should generally not exceed two months, except over the end-of-year break, after a provider default, or where you have finished and are applying for a new visa. Your provider monitors attendance and progress under Standard 8 of the National Code, must have an intervention strategy, and must report breaches to the Department through PRISMS under section 19 of the ESOS Act. Schools, ELICOS and Foundation courses require at least 80 per cent attendance.",
        legal: "Migration Regulations 1994, Sch 8 condition 8202; ESOS Act 2000, s 19; National Code 2018, Standard 8",
      },
      {
        title: "Changing course or provider and the six-month rule",
        detail:
          "Condition 8202 lets you change course or provider as long as you stay at the same or a higher AQF level. Separately, Standard 7 of the National Code stops a new provider knowingly enrolling you before you have completed six months of your principal course (for school students, the first six months of the first school course) unless an exception applies, so in practice you need a release from your current provider for an early transfer. If you change to a lower-level course you need a new Student visa, which since 2 October 2026 usually means applying from outside Australia. Tell your current provider within seven days of receiving a new CoE (condition 8533), and keep OSHC continuous across providers.",
        legal: "National Code 2018, Standard 7; conditions 8202 and 8533 (Sch 8)",
      },
      {
        title: "8501: health insurance",
        detail:
          "You must hold and maintain adequate health insurance, which for students means OSHC, for the whole of your stay, including any family members. Letting the policy lapse is a breach.",
        legal: "Migration Regulations 1994, Sch 8 condition 8501",
      },
      {
        title: "8533: tell your provider where you live",
        detail:
          "Within seven days of arriving (if the visa was granted while you were outside Australia) you must give your provider your residential address, tell them of any change within seven days, and tell your current provider within seven days of receiving a CoE from a new provider. The Department contacts you through your provider, so missing this can mean you never receive a warning or cancellation notice.",
        legal: "Migration Regulations 1994, Sch 8 condition 8533",
      },
      {
        title: "8534 and 8535: no further stay",
        detail:
          "Condition 8534 is imposed at the Department's discretion. It means no further substantive visa can be granted to you in Australia other than a Temporary Graduate (485), a Student Guardian (590) or a protection visa. Once you have completed the course your visa was granted for, you do not need a waiver to apply for a skilled visa (for example 189 or 190), a 186, a 482 or a business visa; for anything else, including another Student visa, you can ask for a waiver only in limited circumstances. Condition 8535 is mandatory for DFAT and Defence sponsored students and allows only a further student visa with Commonwealth or foreign government support, or a protection visa.",
        legal: "Migration Regulations 1994, Sch 8 conditions 8534 and 8535; reg 2.05(4) waiver",
      },
      {
        title: "8516: keep satisfying the grant criteria",
        detail:
          "You must continue to meet the criteria on which the visa was granted: a genuine student with enough money, a valid enrolment and, for under-18s, welfare arrangements. Using the visa mainly to live and work in Australia rather than to study engages this condition.",
        legal: "Migration Regulations 1994, Sch 8 condition 8516",
      },
      {
        title: "8532, 8517, 8201, 8303 and 8208",
        detail:
          "8532: under-18s must keep their approved welfare arrangements, not change them without the provider's written approval and not arrive before they start. 8517: you must keep adequate schooling for school-age dependants in Australia for more than three months. 8201: family members may study for no more than three months without their own Student visa. 8303: no involvement in activities disruptive to, or violence threatening harm to, the Australian community. 8208: visas applied for after 1 July 2022 require the Minister's approval before starting postgraduate research, a thesis or a bridging course relating to critical technology listed in LIN 24/010; request approval in ImmiAccount. 8203 and 8204 require approval and a security assessment before changing a postgraduate course, thesis or research topic in specified fields.",
        legal: "Migration Regulations 1994, Sch 8 conditions 8201, 8203, 8204, 8208, 8303, 8517 and 8532",
      },
      {
        title: "What happens if you breach a condition",
        detail:
          "The Department may cancel the visa under section 116(1)(b) of the Migration Act for non-compliance with a condition. In Australia it must first send a notice of intention to consider cancellation under section 119, giving you a chance to respond, and must weigh the circumstances. A cancellation while you are in Australia can be reviewed by the Administrative Review Tribunal within the short period in the notice. If the visa is cancelled you become unlawful unless you hold a bridging visa, section 48 restricts which visas you can apply for onshore, and a three-year exclusion under PIC 4013 can apply to later temporary visa applications. Providers also cancel enrolments and report under the ESOS Act, which can trigger a departmental review even where no cancellation follows.",
        legal: "Migration Act 1958, ss 116, 119, 48 and 338; PIC 4013 (Sch 4); ESOS Act 2000, s 19",
      },
      {
        title: "The ESOS framework and your protections",
        detail:
          "The Education Services for Overseas Students Act 2000 and the National Code 2018 regulate CRICOS providers. They must give you accurate pre-enrolment information and a written agreement (Standards 2 and 3), approve welfare arrangements for under-18s (Standard 5), restrict early transfers (Standard 7), monitor attendance and progress (Standard 8), manage deferrals, suspensions and cancellations (Standard 9) and run an internal complaints and appeals process; a provider's decision to report you for progress or attendance cannot take effect until an internal appeal is finished, unless your welfare or someone else's is at risk (Standard 10). If a provider closes or stops delivering your course, the Tuition Protection Service helps you find a place or get a refund, and you can get a charge-free new Student visa within 12 months of the default day.",
        legal: "ESOS Act 2000; National Code 2018, Standards 2, 3, 5, 7, 8, 9 and 10",
      },
    ],
    documents: [
      {
        group: "Keep these to prove compliance",
        items: [
          "Payslips and rosters showing hours worked in each Monday-to-Sunday fortnight",
          "Your CoE, academic transcripts, attendance records and any letters from the provider about progress or intervention",
          "OSHC policy certificate and renewals covering the whole visa period",
          "Evidence that you told the provider your address within seven days (email or portal confirmation)",
          "The VEVO record of your current conditions, checked after each new grant",
        ],
      },
    ],
    steps: [
      {
        title: "Check your conditions in VEVO and the grant letter",
        description: "Conditions vary with your sector and circumstances; 8534 is discretionary and may or may not be on your visa. Check VEVO after every grant.",
        output: "You know: exactly which Schedule 8 conditions apply to you and your family",
      },
      {
        title: "Track your work hours by fortnight",
        description:
          "Count hours from Monday to Sunday across two weeks and across all employers. The Home Affairs example shows that 15, 30, 30 and 10 hours in four successive weeks breaches the limit in the fortnight made up of weeks two and three (60 hours) even though each other pairing is under 48.",
        output: "You hold: a record that shows every rolling fortnight in term is at or under 48 hours",
      },
      {
        title: "Before you change anything, tell your provider",
        description:
          "Changing course, provider, research topic, deferring or finishing early all affect your conditions. Ask your provider first, get a release if you are within six months of your principal course, and lodge a change-of-course request in ImmiAccount where condition 8208, 8203 or 8204 applies.",
        output: "You hold: a provider release or approval and, where needed, departmental approval before the change",
      },
      {
        title: "If your provider reports you",
        description:
          "Use the provider's internal appeal within the time it allows; the report cannot take effect until the appeal ends unless safety is at risk. Gather evidence of the reasons for non-attendance or poor results and any compassionate or compelling circumstances.",
        output: "You hold: an internal appeal lodged in time, with evidence",
      },
      {
        title: "If you receive a notice of intention to consider cancellation",
        description:
          "Respond before the deadline in the notice with evidence addressing the alleged breach and the reasons the visa should not be cancelled. If the visa is cancelled while you are in Australia, lodge an ART application within the period stated in the decision, and pay the fee.",
        output: "You hold: a written response on the departmental file and, if needed, a Tribunal application lodged in time",
      },
    ],
    costs: [
      { item: "ART review of a cancellation (migration decision)", amount: "A$3,727", note: "From 1 July 2026; 50 per cent reduction available for financial hardship" },
    ],
    pathways: [
      { title: "ART review of a visa cancellation", description: "Time limits and process for challenging a cancellation made while you are in Australia.", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
      { title: "Visa cancellation and the notice of intention", description: "What the section 119 notice contains and how to respond.", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { title: "Condition 8503 and no further stay waivers", description: "How no further stay conditions are waived in compelling circumstances.", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { title: "Temporary Graduate visa (subclass 485)", description: "The visa you can apply for even with condition 8534.", href: "/visas/skilled/temporary-graduate-visa-485" },
    ],
    risks: [
      "Working more than 48 hours in a Monday-to-Sunday fortnight during term, often by counting weekly instead of by fortnight or by forgetting a second job.",
      "Starting work before the course starts, or treating unpaid internships as outside the limit when they are not a mandatory CRICOS-registered part of the course.",
      "Dropping to a lower AQF course or an unrelated short course and losing the enrolment basis of the visa under condition 8202.",
      "Letting OSHC lapse between policies or providers (condition 8501).",
      "Not updating your address with the provider, so a notice of intention to consider cancellation is never received and the visa is cancelled without a response.",
      "Applying for another visa onshore while condition 8534 is in force without checking whether a waiver is required.",
    ],
    faqs: [
      {
        question: "Is the limit 24 hours a week?",
        answer:
          "No. Condition 8105 is 48 hours a fortnight, measured over 14 days starting on a Monday. You can work 30 hours one week and 18 the next, but any two consecutive weeks in term must total no more than 48 hours. There is no limit during scheduled breaks.",
      },
      {
        question: "Can I work unlimited hours after my last exam?",
        answer:
          "Once you have completed the course listed on your CoE and still hold a valid visa, the course is not in session and the limit does not apply. If you are enrolled in a further course in the same package, the limit applies once that course is in session.",
      },
      {
        question: "What happens if my provider reports me for attendance or progress?",
        answer:
          "The provider must first give you a chance to use its internal appeals process (Standard 10 of the National Code). If the report stands, the Department may send a notice of intention to consider cancellation under section 119 of the Migration Act. You should respond within the deadline with evidence of the reasons and of your current enrolment and progress; cancellation is discretionary and reviewable at the ART if made while you are in Australia.",
      },
      {
        question: "Can I change to a cheaper or shorter course?",
        answer:
          "Only within condition 8202: the new course must be at the same or a higher AQF level, and you generally need a release from your current provider if you have not completed six months of your principal course. A lower-level course requires a new Student visa, which most people must now apply for from outside Australia.",
      },
      {
        question: "What does condition 8534 stop me doing?",
        answer:
          "It prevents the grant of most further visas in Australia. Exceptions are the Temporary Graduate (485), Student Guardian (590) and protection visas, and once you have completed your course you can also apply for skilled, 186, 482 and business visas without a waiver. For another Student visa or anything else you must apply for a waiver, which is granted only in limited circumstances.",
      },
      {
        question: "Can my family members work and study?",
        answer:
          "Family members are limited to 48 hours a fortnight at all times under condition 8104 unless you are studying a master's or doctoral degree, in which case they have no limit. They cannot work before your course starts and cannot study for more than three months (condition 8201) without their own Student visa; children aged 6 or over attending school need their own visa.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 8 conditions 8104, 8105, 8201, 8202, 8203, 8204, 8208, 8303, 8501, 8516, 8517, 8532, 8533, 8534 and 8535", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Division 500.6 (conditions attached to the Student visa) and reg 2.05 (waiver of no further stay conditions)", url: REGS },
      { label: "Migration Act 1958, ss 41, 48, 116, 119 and 338", url: ACT },
      { label: "Migration Regulations 1994, Sch 4 PIC 4013", url: REGS },
      { label: "Education Services for Overseas Students Act 2000, s 19 (provider reporting)", url: ESOS_ACT },
      { label: "National Code of Practice for Providers of Education and Training to Overseas Students 2018, Standards 5, 7, 8, 9 and 10 (compilation of 21 January 2026)", url: NATIONAL_CODE },
    ],
    sources: [
      { label: "Home Affairs: See your visa conditions (subclass 500)", url: `${HA_CONDITIONS}?product=500` },
      { label: "Home Affairs: Student visa (subclass 500), When you have this visa", url: HA_500 },
      { label: "Home Affairs: Education provider default", url: HA_DEFAULT },
      { label: "Home Affairs: Welfare and custody arrangements for students under 18", url: HA_WELFARE },
      { label: "Federal Register of Legislation: National Code 2018", url: NATIONAL_CODE },
      { label: "Administrative Review Tribunal: fees", url: ART_FEES },
    ],
    related: [
      { label: "Student visa (subclass 500)", href: "/visas/study/student-visa-500" },
      { label: "ART review of a visa cancellation", href: "/visas/appeals-and-review/art-review-of-visa-cancellation" },
      { label: "Visa cancellation and notice of intention", href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention" },
      { label: "Study to permanent residence", href: "/visas/study/study-to-permanent-residence" },
      { label: "Student visa services", href: "/services/student-visas" },
    ],
    keywords: [
      "student visa work rights",
      "student visa 48 hours a fortnight",
      "condition 8105",
      "condition 8202",
      "condition 8534",
      "student visa conditions",
      "student visa cancellation",
      "change course student visa",
      "student visa breach of conditions",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Study to permanent residence (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "study-to-permanent-residence",
    category: "study",
    kind: "guide",
    name: "Study to permanent residence",
    title: "From a Student visa to permanent residence: the realistic pathways",
    seoTitle: "Study to permanent residence in Australia: 485, 189, 482",
    seoDescription:
      "Realistic pathways from a student visa to PR in 2026: Temporary Graduate 485, points visas 189, 190 and 491 with study points, 482 to 186 and state nomination.",
    intro:
      "A Student visa does not lead directly to permanent residence, but Australian study opens four routes that do: the Temporary Graduate visa (subclass 485) to gain work experience, the points-tested Skilled Independent (189), Skilled Nominated (190) and Skilled Work Regional (491) visas, employer sponsorship through the Skills in Demand visa (482) and then the Employer Nomination Scheme (186), and state nomination streams for graduates. Each route depends on your age, occupation, English and whether your skills assessment and points stack up, so the choices you make while studying matter.",
    factsAsAt: "12 October 2026",
    permanent: null,
    tags: ["Pathway to PR", "Points tested", "Employer sponsor required"],
    keyFacts: [
      { label: "First step after graduation", value: "Temporary Graduate visa (485)", note: "Apply within 6 months of completion, aged 35 or under; A$5,750" },
      { label: "Points visas", value: "189, 190 and 491 need 65 points and an invitation", note: "Australian study adds 5 points, regional study another 5, a Professional Year 5" },
      { label: "Employer route", value: "482 then 186", note: "At least 1 year of experience for the 482; 2 years with the sponsor for the 186 Temporary Residence Transition stream" },
      { label: "Regional route", value: "491 for 5 years, then 191", note: "Permanent residence after 3 years living and working in a designated regional area" },
      { label: "Government fee", value: "A$6,135 to A$6,140 for the skilled and employer-sponsored visas", note: "189 A$6,135; 190, 491 and 186 A$6,140; 482 A$4,015; 1 July 2026 charges" },
      { label: "Where you must be", value: "In Australia for the 485; in or outside for the others", note: "Condition 8534 does not block skilled, 186 or 482 applications once your course is complete" },
    ],
    whoFor: [
      "You are finishing a bachelor, master's or doctoral degree in Australia and want to know which visa comes next.",
      "You are completing a diploma or trade qualification and your occupation is on the Medium and Long-term Strategic Skills List.",
      "You are choosing a course or campus and want to know how Australian study, regional study and a Professional Year affect your points.",
      "You have a job offer from an Australian employer and want to compare employer sponsorship with the points route.",
      "You hold a 485 visa that is running out and need a realistic plan for the time left.",
    ],
    eligibility: [
      {
        title: "Pathway 1: Temporary Graduate visa (subclass 485)",
        detail:
          "The 485 gives you time to work after graduating. You must be in Australia, hold or have held a Student visa in the last six months, be 35 or under when you apply (under 50 if you rely on a research master's or PhD, or hold a Hong Kong or British National Overseas passport), have completed an eligible qualification in the six months before applying, meet the Australian study requirement (at least two academic years, 92 weeks of CRICOS-registered study completed in Australia over no less than 16 months), show IELTS 6.5 overall with at least 5.5 in each component or an equivalent score from a test taken in the last 12 months, hold health insurance and have applied for an Australian Federal Police check. The Post-Higher Education Work stream (bachelor degree or higher) runs two years for a bachelor or coursework master's and three years for a research master's or doctorate, with longer periods for Indian nationals under AI-ECTA. The Post-Vocational Education Work stream (associate degree, diploma or trade qualification) runs 18 months and requires an occupation on the Medium and Long-term Strategic Skills List and a skills assessment applied for in that occupation. A second 485 of one or two years is available only to graduates of regional campuses who have lived in a regional area for two years. You cannot hold a 485 as a primary applicant twice.",
        legal: "Migration Regulations 1994, Sch 2 Part 485",
      },
      {
        title: "Pathway 2: points-tested visas (189, 190, 491)",
        detail:
          "You submit an Expression of Interest in SkillSelect and can only apply when invited. At invitation you must be under 45, have a suitable skills assessment obtained in the last three years in an occupation on the relevant list (a qualification gained on a student visa must be from a CRICOS course), have at least competent English and score at least 65 points. Study-related points: 15 for a bachelor degree or higher (20 for a doctorate, 10 for an Australian diploma or trade qualification), 5 for meeting the Australian study requirement, 5 more if that study was at a regional campus while living in a regional area (not by distance), 10 for a research master's or doctorate in a STEM or specified ICT field with at least two academic years of study, and 5 for a Professional Year in accounting, ICT or engineering completed in the last four years. Age 25 to 32 scores the maximum 30 points, proficient English 10 and superior English 20, and Australian skilled employment 5 points for one to three years. The 190 adds 5 points for state nomination and the 491 adds 15 for state or family nomination; the 189 needs no nomination but competition is highest.",
        legal: "Migration Regulations 1994, Sch 6D; Sch 2 Parts 189, 190 and 491",
      },
      {
        title: "Pathway 3: employer sponsorship (482 then 186)",
        detail:
          "An approved sponsor nominates you for an occupation on the Core Skills Occupation List (CSOL), pays at least the Core Skills Income Threshold and the Annual Market Salary Rate, and you need at least one year of relevant work experience, a skills assessment if your occupation requires it, and sufficient English. The Core Skills stream 482 lasts up to four years and you may work only for your sponsor unless exempt. After two years of full-time sponsored employment in the three years before applying, your employer can nominate you for the Employer Nomination Scheme (186) Temporary Residence Transition stream, which requires competent English and is usually limited to applicants under 45. The 186 Direct Entry stream is available without a 482 if you have the skills assessment and experience the stream requires. Part-time work while studying counts towards 482 work experience only if it was at the required skill level.",
        legal: "Migration Regulations 1994, Sch 2 Parts 482 and 186",
      },
      {
        title: "Pathway 4: state nomination graduate streams",
        detail:
          "Each state and territory runs its own nomination program for the 190 and 491 with criteria that change each financial year. Many give priority or separate streams to people who studied at institutions in that state, lived there for a set period, or have a job offer in the state, and some offer extra ranking points for local graduates. Nomination is at the state's discretion within its allocation from the Commonwealth, and you must still meet the Commonwealth criteria and be invited.",
        legal: "Migration Regulations 1994, Sch 2 cl 190.212 and cl 491.212 (nomination)",
      },
      {
        title: "Regional study and the 491 to 191 route",
        detail:
          "The 491 is a five-year provisional visa for people nominated by a state or an eligible relative to live, work and study in a designated regional area. After three years, and after meeting the income and residence requirements, holders can apply for the Permanent Residence (Skilled Regional) visa (191); they cannot apply for most other permanent visas until they have held the 491 for three years. Studying at a regional campus also unlocks the extra 5 points and the second 485.",
        legal: "Migration Regulations 1994, Sch 2 Parts 491 and 191",
      },
      {
        title: "Rules that cut across every pathway",
        detail:
          "Condition 8534 on a Student visa does not stop a 485 application or, once your course is complete, a skilled, 186 or 482 application. Since 2 October 2026 you cannot switch to another Student visa in Australia to buy time unless an exemption applies, and 485 holders cannot apply for a Student visa onshore at all. A skills assessment is a separate application to the assessing authority for your occupation, and its validity (three years at most) and the occupation lists are checked at the time of invitation or nomination. Health, character and PIC 4020 apply to every application.",
        legal: "Migration Regulations 1994, Sch 8 condition 8534; Sch 1 item 1222",
      },
    ],
    documents: [
      {
        group: "What to build while you study",
        items: [
          "Transcripts and completion letters that show the CRICOS course code, duration and completion date (needed for the 485 study requirement and for points)",
          "Evidence of where you lived and studied, such as leases and enrolment records, to claim regional study points or a second 485",
          "An English test result at the level of the visa you are aiming for (for IELTS, 7 in each band for proficient English points, 8 for superior)",
          "A skills assessment in your nominated occupation, or an application for one, from the assessing authority",
          "Payslips, contracts and references for any skilled work at the required level, which count towards 482 experience and skilled employment points",
        ],
      },
    ],
    steps: [
      {
        title: "Pick an occupation and check the lists early",
        description:
          "Find your target occupation, the assessing authority and whether it is on the CSOL, the MLTSSL or a state list. The course you choose should lead to a qualification the assessing authority accepts.",
        output: "You know: your target occupation, its assessing authority and the lists it appears on",
      },
      {
        title: "Complete an eligible qualification in at least 16 months",
        description:
          "Make sure your study meets the Australian study requirement: two academic years (92 weeks) of CRICOS-registered study completed in Australia over at least 16 months, which also earns 5 points. Consider a regional campus for the extra 5 points and the second 485.",
        output: "You hold: a completed qualification that satisfies the Australian study requirement",
      },
      {
        title: "Apply for the 485 within six months of completion",
        description:
          "Lodge in Australia before your Student visa ends, with English results, an AFP check receipt and health insurance. In the vocational stream nominate your occupation and apply for the skills assessment first.",
        output: "You hold: a Temporary Graduate visa of 18 months to 3 years with full work rights",
      },
      {
        title: "Use the 485 period to build points or a sponsor",
        description:
          "Gain skilled work at the right level, complete a Professional Year if your field has one, retake English for proficient or superior scores, obtain your skills assessment and lodge an Expression of Interest. In parallel, look for an employer willing to sponsor under the 482.",
        output: "You hold: a competitive EOI, or a sponsor's approved nomination",
      },
      {
        title: "Lodge the permanent or provisional visa",
        description:
          "Apply for the 189, 190 or 491 within 60 days of an invitation, or for the 482 once nominated. For the 186 Temporary Residence Transition stream, lodge after two years of full-time sponsored work. Processing times are published on the Home Affairs tool only as a guide.",
        output: "You hold: a permanent visa (189, 190 or 186), or a 491 or 482 that leads to one",
      },
    ],
    costs: [
      { item: "Temporary Graduate (485) Post-Higher or Post-Vocational Education Work stream", amount: "A$5,750", note: "Primary applicant, 1 July 2026; A$2,265 for the Second Post-Higher Education Work stream" },
      { item: "Skilled Independent (189)", amount: "A$6,135", note: "Primary applicant; additional applicant A$3,070 or A$1,540" },
      { item: "Skilled Nominated (190) and Skilled Work Regional (491)", amount: "A$6,140", note: "Primary applicant; state nomination fees are set by each state" },
      { item: "Skills in Demand (482)", amount: "A$4,015", note: "Primary applicant; the sponsor pays the nomination fee and the Skilling Australians Fund levy" },
      { item: "Employer Nomination Scheme (186)", amount: "A$6,140", note: "Primary applicant; the employer pays the nomination fee and levy" },
      { item: "Skills assessment, English tests, Professional Year", amount: "Typical third-party costs", note: "Set by assessing authorities, test providers and program providers" },
    ],
    pathways: [
      { title: "Temporary Graduate visa (subclass 485)", description: "Streams, stay periods, the study requirement and English scores.", href: "/visas/skilled/temporary-graduate-visa-485" },
      { title: "Skilled migration points test", description: "Every points factor, including Australian study, regional study and Professional Year points.", href: "/visas/skilled/skilled-migration-points-test" },
      { title: "Skills in Demand visa (subclass 482)", description: "Core Skills stream requirements and the route to the 186.", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { title: "State nomination", description: "Current state and territory programs and graduate streams.", href: "/state-nomination" },
      { title: "Points calculator", description: "Estimate your score before you lodge an Expression of Interest.", href: "/tools/points-calculator" },
    ],
    risks: [
      "Missing the 485 window: the qualification must be completed within the six months before you apply, and you must be 35 or under (with limited exceptions).",
      "A course that does not meet the Australian study requirement because credits for prior learning cut the study in Australia below 16 months or 92 weeks.",
      "A diploma in a field whose occupation is not on the Medium and Long-term Strategic Skills List, which rules out the Post-Vocational Education Work stream.",
      "Scoring 65 points but never being invited, because invitation rounds select the highest-ranked EOIs in each occupation.",
      "Relying on a 482 sponsor without one year of skilled experience at the required level, or where the occupation is not on the CSOL.",
      "Turning 45 before invitation or before the 186 application, which ends most points and employer routes.",
      "Breaching Student or 485 visa conditions, which counts against points for Australian employment and against the genuine criteria for later visas.",
    ],
    faqs: [
      {
        question: "Does studying in Australia guarantee permanent residence?",
        answer:
          "No. Australian study gives you access to the Temporary Graduate visa and a small number of points, but permanent residence depends on an occupation in demand, a skills assessment, English, age and either enough points to be invited, a state nomination or an employer prepared to sponsor you.",
      },
      {
        question: "How many points does my Australian degree give me?",
        answer:
          "15 points for a bachelor degree or higher (20 for a doctorate, 10 for an Australian diploma or trade qualification), plus 5 for meeting the Australian study requirement, plus 5 more if you studied at a regional campus while living in a regional area, plus 10 if you completed a research master's or doctorate in a STEM or specified ICT field. Points are awarded for your highest qualification only.",
      },
      {
        question: "Can I apply for a skilled visa while condition 8534 is on my Student visa?",
        answer:
          "Yes, once you have completed the course your visa was granted for. Home Affairs states that you do not need a waiver of condition 8534 to apply for a General Skilled Migration visa, a 186, a 482 or a business visa after course completion, or for a 485 at any time (using the paper form). A waiver is needed only for other visas, including another Student visa.",
      },
      {
        question: "Is the employer route faster than the points route?",
        answer:
          "It depends on your occupation and employer. A 482 requires an approved sponsor, a CSOL occupation, a salary at or above the Core Skills Income Threshold and one year of experience, and the 186 Temporary Residence Transition stream follows after two years of full-time sponsored work. The points route has no employer but depends on being invited, which in many occupations requires well above 65 points.",
      },
      {
        question: "What if I am over 35 when I graduate?",
        answer:
          "The 485 is limited to applicants aged 35 or under unless you completed a research master's or PhD or hold a Hong Kong or British National Overseas passport, in which case the limit is under 50. Older graduates usually look at employer sponsorship (482 or 186 Direct Entry) or a state-nominated 190 or 491, where the age limit is under 45 at invitation.",
      },
      {
        question: "Can I get another Student visa to stay longer while I prepare?",
        answer:
          "Since 2 October 2026, only under an exemption such as progressing to a higher AQF course, a PhD or needing up to 12 more months with the same provider, and holders of a 485 cannot apply for a Student visa in Australia at all. A Student visa is also assessed against the Genuine Student requirement, which looks closely at courses used to maintain residence rather than to study.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 485 (Temporary Graduate)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 189, 190 and 491 and Sch 6D (points test)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 482 and 186", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 191 (Permanent Residence (Skilled Regional))", url: REGS },
      { label: "Migration Regulations 1994, Sch 8 condition 8534", url: REGS },
      { label: "Migration Act 1958, s 65", url: ACT },
    ],
    sources: [
      { label: "Home Affairs: Temporary Graduate visa (485), Post-Higher Education Work stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-higher-education-work" },
      { label: "Home Affairs: Temporary Graduate visa (485), Post-Vocational Education Work stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/post-vocational-education-work" },
      { label: "Home Affairs: Temporary Graduate visa (485), Second Post-Higher Education Work stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/second-post-higher-education-work" },
      { label: "Home Affairs: Meeting the Temporary Graduate visa study requirement", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/meeting-the-temporary-graduate-visa-subclass-485-study-requirement" },
      { label: "Home Affairs: Changes to the Temporary Graduate visa program from 1 July 2024", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-graduate-485/changes" },
      { label: "Home Affairs: Points table for Skilled Independent visa (subclass 189)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-table" },
      { label: "Home Affairs: Skilled Independent visa (189), Points-tested stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189/points-tested" },
      { label: "Home Affairs: Skilled Nominated visa (190)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190" },
      { label: "Home Affairs: Skilled Work Regional (Provisional) visa (491), main applicant", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-work-regional-provisional-491/application" },
      { label: "Home Affairs: Skills in Demand visa (482), Core Skills stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482/core-skills-stream" },
      { label: "Home Affairs: Employer Nomination Scheme (186), Temporary Residence Transition stream", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186/temporary-residence-transition-stream" },
      { label: "Home Affairs: See your visa conditions, condition 8534", url: `${HA_CONDITIONS}?product=500` },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: HA_FEES },
    ],
    related: [
      { label: "Temporary Graduate visa (subclass 485)", href: "/visas/skilled/temporary-graduate-visa-485" },
      { label: "Skilled migration points test", href: "/visas/skilled/skilled-migration-points-test" },
      { label: "Skills in Demand visa (subclass 482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
      { label: "State nomination", href: "/state-nomination" },
      { label: "Points calculator", href: "/tools/points-calculator" },
      { label: "Occupation lists", href: "/occupations" },
    ],
    keywords: [
      "student visa to PR",
      "study to permanent residence Australia",
      "485 visa after graduation",
      "points for Australian study",
      "regional study points",
      "482 to 186 pathway",
      "state nomination for graduates",
      "PR pathways for international students 2026",
    ],
  },
];
