import type { VisaPage } from "./types";

// Parent and other-family visa pages. Facts checked on 12 October 2026
// against the Department of Home Affairs visa pages, the current visa
// pricing table (1 July 2026 charges), the Home Affairs visa conditions
// pages and the Services Australia Assurance of Support pages.

const HA = "https://immi.homeaffairs.gov.au";
const LISTING = HA + "/visas/getting-a-visa/visa-listing";
const REGS = "https://www.legislation.gov.au/F1996B03551/latest/text";
const ACT = "https://www.legislation.gov.au/C1958A00062/latest/text";
const PARENT_INSTRUMENT = "https://www.legislation.gov.au/F2026L00441/latest/text";
const PROCESSING = HA + "/visas/getting-a-visa/visa-processing-times/global-visa-processing-times";
const PARENT_QUEUE = HA + "/visas/getting-a-visa/visa-processing-times/family-visa-processing-priorities/parent-visas-queue-release-dates";
const PRICING = HA + "/visas/getting-a-visa/fees-and-charges/current-visa-pricing";
const CONDITIONS = HA + "/visas/already-have-a-visa/check-visa-details-and-conditions/see-your-visa-conditions";
const HEALTH = HA + "/help-support/meeting-our-requirements/health";
const CHARACTER = HA + "/help-support/meeting-our-requirements/character";
const AOS = "https://www.servicesaustralia.gov.au/assurance-support";
const AOS_LENGTH = "https://www.servicesaustralia.gov.au/how-long-assurance-support-lasts";
const AOS_BOND = "https://www.servicesaustralia.gov.au/bank-guarantee-and-term-deposit-for-assurance-support";
const AGE_PENSION = "https://www.servicesaustralia.gov.au/who-can-get-age-pension";
const FACTS_AS_AT = "12 October 2026";

export const familyParentPages: VisaPage[] = [
  // ───────────────────────────────────────────────────────────────────────
  // 1. Contributory Parent visa (subclass 143 and 173)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "contributory-parent-visa-143-173",
    category: "family",
    kind: "visa",
    subclass: "143/173",
    name: "Contributory Parent visa",
    title: "Contributory Parent visa (subclass 143 and 173)",
    seoTitle: "Contributory Parent visa 143 & 173: cost, sponsor, queue",
    seoDescription:
      "Contributory Parent visa 143 and temporary 173 in 2026: A$49,900 over two instalments, balance of family test, 10-year Assurance of Support, capped queue.",
    intro:
      "The Contributory Parent visa (subclass 143) is a permanent visa for a parent of a settled Australian citizen, permanent resident or eligible New Zealand citizen. It can be applied for directly, or in two stages through the two-year Contributory Parent (Temporary) visa (subclass 173), which spreads the cost. Both routes need a sponsor, the balance of family test and an Assurance of Support, and both sit in a capped queue.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,300 first instalment",
        note: "Subclass 143 primary applicant, 1 July 2026 charge. Subclass 173 first instalment A$4,245.",
      },
      {
        label: "Second instalment",
        value: "A$43,600 (143) or A$29,130 (173)",
        note: "The balance of the A$49,900 (143) and A$33,375 (173) single-applicant totals stated by Home Affairs. Invoiced before grant.",
      },
      {
        label: "Stay and work",
        value: "Permanent (143); 2 years (173)",
        note: "Full work and study rights on both. Medicare on the 143.",
      },
      {
        label: "Pathway to permanent residence",
        value: "143 is permanent; 173 leads to the 143",
        note: "Apply for the 143 before the 173 ends. The 143 first instalment is then A$555.",
      },
      {
        label: "Where you must be",
        value: "Apply in or outside Australia",
        note: "Standard 143 applicants and all 173 applicants must be outside Australia when the visa is decided.",
      },
      {
        label: "Sponsor",
        value: "Your settled child, aged 18 or over",
        note: "A relative, guardian or community organisation can sponsor if the child is under 18. Two-year support undertaking.",
      },
    ],
    alert: {
      title: "Online lodgement for the subclass 143 from 22 April 2026",
      body: "Subclass 143 applications made on or after 22 April 2026 must be lodged online through ImmiAccount. The temporary subclass 173 still has no online lodgement and is applied for on paper (Form 47PA). Applications for both are capped and queued; the Department publishes the queue dates it has released rather than a processing time.",
      href: PARENT_QUEUE,
      linkLabel: "Parent visas queue release dates",
    },
    whoFor: [
      "You are the parent of an Australian citizen, permanent resident or eligible New Zealand citizen who has lived in Australia long enough to be settled, and at least half of your children live here permanently.",
      "You want permanent residence for yourself and your partner and can fund a second instalment of A$43,600 per applicant.",
      "You want to spread the cost over several years by holding a two-year subclass 173 first and paying the balance when you apply for the 143.",
      "You already hold a subclass 173 and it is about to end, so you need to lodge the 143 before it expires.",
      "You are under Age Pension age, so the onshore Contributory Aged Parent visa (subclass 864) is not open to you.",
    ],
    eligibility: [
      {
        title: "An approved sponsor",
        detail:
          "Usually your child sponsors you. The sponsor (or their cohabiting spouse or de facto partner) must be an Australian citizen, permanent resident or eligible New Zealand citizen, settled in Australia and aged 18 or over, and must agree to provide support, accommodation and financial help for your first two years in Australia. \"Settled\" means lawfully resident in Australia for a reasonable period; departmental policy generally looks for around two years of lawful residence. If your child is under 18, their cohabiting spouse, a relative or guardian, or a community organisation that has operated in Australia for at least a year can sponsor instead. The sponsor completes Form 40.",
        legal: "Migration Regulations 1994, reg 1.03 (settled), reg 1.20 (sponsorship undertakings) and Sch 2 Part 143",
      },
      {
        title: "The balance of family test",
        detail:
          "At least half of your children and step-children must be eligible children (Australian citizens, permanent residents usually resident in Australia, or eligible New Zealand citizens usually resident in Australia), or more of your children must live in Australia than in any other single country. Children on temporary visas do not count as usually resident. The Department will not waive the test even in compelling circumstances. Subclass 173 holders who apply for the 143 within time have already met it.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Not have applied for or hold a Sponsored Parent (Temporary) visa",
        detail:
          "You cannot apply for the 143 or 173 if you have applied for, or hold, a Sponsored Parent (Temporary) visa (subclass 870). Choose between the two routes before lodging anything.",
        legal: "Migration Regulations 1994, Sch 1 item 1130 and item 1221",
      },
      {
        title: "Second-stage applicants: hold or recently held a subclass 173",
        detail:
          "You can use the cheaper second-stage 143 pathway if you hold a subclass 173 when you apply, held one in the 28 days before applying, or more than 28 days have passed and the Minister is satisfied there are compelling and compassionate circumstances. Otherwise the Department treats your 143 application as a standard one and the full charges apply.",
        legal: "Migration Regulations 1994, Sch 2 Part 143 and Sch 1 item 1130",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when the Department asks for it. Any individual, group of people or organisation can give it; it does not have to be your sponsor. For Contributory Parent visas the assurance runs for 10 years, and the assurer lodges a bank guarantee with the Commonwealth Bank of A$10,000 for one adult or A$14,000 for two adults (A$20,000 if an organisation gives it). Any recoverable income support paid to you in that period is recovered from the assurer. Retirees using the Retirement visa pathway are exempt.",
        legal: "Migration Regulations 1994, Sch 2 Part 143 and Part 173 (assurance of support criteria); Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Health requirement",
        detail:
          "You and every family member included in the application, and sometimes non-migrating family members, must meet the health requirement. Health examinations are arranged when the Department asks, usually after your application is released from the queue. A condition likely to cost the community significantly can lead to refusal of the whole family.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria)",
      },
      {
        title: "Character requirement",
        detail:
          "You and family members aged 16 or over must pass the character test. Police certificates are requested by the Department when needed; do not arrange them before you are asked.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "No debt to the Australian Government and no previous refusals or cancellations that bar you",
        detail:
          "Any debt to the Commonwealth must be repaid or under an approved repayment arrangement. The Department also looks at your immigration history: a past cancellation or refusal can make you ineligible, and onshore applicants may face the section 48 bar.",
        legal: "PIC 4004 (Sch 4); Migration Act 1958, s 48",
      },
      {
        title: "Australian Values Statement and best interests of children",
        detail:
          "Applicants aged 18 or over must have read the Life in Australia booklet and sign the Australian Values Statement. The visa will not be granted to a child under 18 if that is not in the child's best interests.",
        legal: "PIC 4019 (Sch 4)",
      },
      {
        title: "Retirement visa pathway (limited group)",
        detail:
          "If on 8 May 2018 you held or had held a Retirement (subclass 410) or Investor Retirement (subclass 405) visa, have held no other substantive visa since, and are in Australia, you can apply as a retiree. Retirees do not need a sponsor, the balance of family test or an Assurance of Support, but must keep adequate health insurance until grant and cannot include children.",
        legal: "Migration Regulations 1994, Sch 2 Part 143",
      },
    ],
    familyNote:
      "You can include your partner and dependent children when you apply, and add a partner or dependent child with Form 1436 any time before a decision. A child aged 18 to 22 must be dependent on you; a child aged 23 or over can be included only if a physical or cognitive limitation stops them earning a living. Every family member, including those not migrating, must be listed on the form, and all applicants must meet health and character. Retirees cannot include children.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages showing your photo, personal details and issue and expiry dates",
          "National identity card if you have one, and proof of any change of name",
          "Four recent passport-size photographs of each applicant (45 mm x 35 mm, less than six months old)",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by your sponsor",
          "Sponsor's citizenship certificate, passport or visa, and evidence they are settled in Australia",
          "Evidence of your relationship to the sponsor: birth, marriage, adoption or death certificates, or officially issued family books",
        ],
      },
      {
        group: "Balance of family",
        items: [
          "Evidence of how you are related to each of your children and step-children",
          "Evidence of each child's Australian citizenship, permanent residence or country of residence",
          "Evidence for any child who should not be counted, such as a death certificate",
        ],
      },
      {
        group: "Family members",
        items: [
          "Form 47A for each family member aged 18 or over, even if they are not migrating",
          "Proof of dependency for children aged 18 to 22 (living with you, tax records, study enrolment)",
          "Form 1229 or a statutory declaration from anyone with legal responsibility for a child under 18 who is not migrating",
          "Marriage certificate or 12 months of de facto evidence for a partner",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates only when the Department asks for them",
          "Health examinations when requested, usually after release from the queue",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Confirm you pass the balance of family test and have a settled sponsor",
        description:
          "Count your children by country and status before you spend anything. The test cannot be waived. Confirm your sponsoring child is settled in Australia and over 18, and that neither you nor they has started a Sponsored Parent (Temporary) (subclass 870) sponsorship.",
        output: "A balance of family count that passes, and a sponsor who can sign Form 40",
      },
      {
        title: "Choose the direct 143 or the two-stage 173 then 143 route",
        description:
          "The direct 143 costs A$49,900 for one applicant over two instalments. The 173 costs A$33,375, gives two years in Australia with work rights, and the later 143 first instalment is A$555 with a lower second instalment. The two-stage route costs more in total but spreads the payments.",
        output: "A decision on which subclass to lodge first",
      },
      {
        title: "Lodge the application and pay the first instalment",
        description:
          "The 143 is lodged online in ImmiAccount (mandatory for applications made on or after 22 April 2026). The 173 is lodged on paper with Form 47PA, the sponsor's Form 40 and Form 47A for each family member aged 18 or over, sent by post or courier. You can be in or outside Australia, but not in immigration clearance, when you apply. If your current visa carries condition 8503 you need a waiver first.",
        output: "An acknowledgement letter and a paid first instalment (A$6,300 for the 143 or A$4,245 for the 173)",
      },
      {
        title: "Initial assessment and queue date",
        description:
          "The Department checks the core criteria (sponsor, balance of family and, where applicable, health and character). If they are met it assigns a queue date and tells you in writing; if not, it refuses the application. Applications are released from the queue in queue-date order as places become available under the annual cap.",
        output: "A written queue date",
      },
      {
        title: "Stay lawful while you wait",
        description:
          "A 143 or 173 application does not come with a bridging visa unless you applied as a retiree or hold a subclass 173 when you lodge the 143. If you are in Australia on a temporary visa, keep holding a valid visa or leave before it expires; otherwise wait outside Australia.",
        output: "A valid visa for the whole waiting period, or a plan to wait offshore",
      },
      {
        title: "Final assessment: health, character and Assurance of Support",
        description:
          "When your application is released, the Department asks for health examinations, police certificates and the Assurance of Support. Services Australia assesses the assurer's income and then asks for the bank guarantee and term deposit. Tell the Department of any change in family composition, passport or contact details.",
        output: "Health and character cleared and an accepted Assurance of Support",
      },
      {
        title: "Pay the second instalment",
        description:
          "The Department sends an invoice for the second instalment (A$43,600 per applicant for a standard 143; A$29,130 for a 173). If it is not paid the application is refused and the first instalment is not refunded.",
        output: "Receipt for the second instalment",
      },
      {
        title: "Grant and first entry",
        description:
          "Standard 143 applicants and all 173 applicants must be outside Australia when the visa is decided; 173 holders, substituted Visitor (subclass 600) holders and retirees can be in or outside Australia. The grant letter sets a first entry date. Your 143 travel facility lasts five years, after which you need a Resident Return visa or citizenship to re-enter.",
        output: "A visa grant notice with grant number, start date and conditions",
      },
    ],
    conditions: [
      {
        code: "8502",
        meaning: "A family member must not arrive in Australia before the main applicant named in their visa (used where a partner or child is granted the visa with you).",
      },
      {
        code: "8515",
        meaning: "An applicant granted the visa as a single person must not marry or enter a de facto relationship before first entering Australia.",
      },
    ],
    costs: [
      { item: "Subclass 143 first instalment", amount: "A$6,300", note: "Primary applicant, 1 July 2026 charge (standard applicant)" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Subclass 143 additional applicant", amount: "A$2,125 / A$1,065", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Subclass 143 first instalment for subclass 173 holders", amount: "A$555", note: "Additional applicants A$280 (18 or over) and A$135 (under 18)" },
      { item: "Subclass 143 second instalment", amount: "A$43,600", note: "Per applicant, standard route: the balance of the A$49,900 total Home Affairs states for a single applicant. Lower for 173 holders; the Department invoices the exact amount." },
      { item: "Subclass 173 first instalment", amount: "A$4,245", note: "Additional applicants A$2,125 (18 or over) and A$1,065 (under 18)" },
      { item: "Subclass 173 second instalment", amount: "A$29,130", note: "Per applicant: the balance of the A$33,375 total Home Affairs states for a single applicant" },
      { item: "Assurance of Support bank guarantee", amount: "A$10,000", note: "10-year assurance, one adult; A$14,000 for two adults; A$20,000 if an organisation is the assurer (Services Australia, page updated 22 July 2026). Refunded at the end of the period if no recoverable payments were made." },
      { item: "Health examinations", amount: "Typical", note: "Paid to the panel clinic for each applicant when requested" },
      { item: "Police certificates and translations", amount: "Typical", note: "Australian and overseas certificates when requested; NAATI translations for documents not in English" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date in your grant letter. For citizenship purposes your permanent residence starts when you enter on the 143 (or on grant if you were in Australia).",
      "The 143 travel facility lasts five years from grant. After that you need a Resident Return visa (subclass 155 or 157) or Australian citizenship to return as a permanent resident.",
      "Your sponsor's undertaking to support and house you lasts two years. The Assurance of Support lasts 10 years, and any recoverable income support you receive in that time becomes a debt of the assurer.",
      "Newly arrived residents face waiting periods for most Services Australia payments; check them before you rely on any benefit.",
      "On a 173, apply for the 143 before the visa ends. The Department encourages lodging immediately after the 173 is granted so you meet the lodgement criteria, and 173 holders get a bridging visa while the 143 is processed.",
      "Tell the Department about a new passport, address, relationship change, birth of a child or death of your sponsor. If your sponsor dies while you hold a 173 you may still be able to get the 143.",
    ],
    pathways: [
      {
        title: "Contributory Aged Parent visa (subclass 864 and 884)",
        description: "The same visa for parents of Age Pension age who are in Australia, with a bridging visa while the application is processed.",
        href: "/visas/family/contributory-aged-parent-visa-864-884",
      },
      {
        title: "Parent visa (subclass 103)",
        description: "Far cheaper (A$8,665 in total) but a much longer queue; the same sponsor, balance of family and Assurance of Support rules apply.",
        href: "/visas/family/parent-visa-103",
      },
      {
        title: "Sponsored Parent (Temporary) visa (subclass 870)",
        description: "A temporary visit of three or five years with no balance of family test, but no work rights and no pathway to permanent residence; it also blocks a later parent visa.",
        href: "/visas/family/sponsored-parent-temporary-visa-870",
      },
      {
        title: "Australian citizenship by conferral",
        description: "Once you have lived in Australia for four years including 12 months as a permanent resident you may apply to become a citizen.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
    ],
    risks: [
      "Failing the balance of family test: children on temporary visas, including bridging visas, are not usually resident in Australia, and the test cannot be waived.",
      "Lodging while you hold or have applied for a Sponsored Parent (Temporary) visa (subclass 870): the 143 and 173 are then closed to you.",
      "Being in Australia when the Department decides a standard 143 or any 173: the visa cannot be granted, and there is no bridging visa to cover the wait.",
      "Letting a subclass 173 expire before the 143 is lodged: you lose the reduced charges and the balance of family exemption unless the Department accepts compelling and compassionate circumstances.",
      "Not paying the second instalment on time: the Department refuses the application and keeps the first instalment.",
      "Health: an applicant or a non-migrating family member with a condition that is a significant cost to the community can cause refusal of the whole family; check the health requirement before paying a second instalment.",
      "The Assurance of Support falling through, for example because the assurer no longer meets the income test or cannot fund the bank guarantee.",
      "Giving incomplete family details or inconsistent documents, which can engage PIC 4020 and a three-year bar.",
    ],
    faqs: [
      {
        question: "How much does the Contributory Parent visa cost in total?",
        answer:
          "Home Affairs states the subclass 143 costs from A$49,900 for a single applicant over two instalments: A$6,300 when you apply and A$43,600 before grant. Each additional applicant pays their own charges (A$2,125 or A$1,065 at lodgement plus their own second instalment). The 173 costs from A$33,375: A$4,245 then A$29,130.",
      },
      {
        question: "Is the two-stage 173 then 143 route cheaper?",
        answer:
          "No. It costs more overall, but the payments are spread over several years. After holding a 173, the 143 first instalment drops to A$555 and the second instalment is reduced to reflect what you paid on the 173. The Department invoices the exact balance.",
      },
      {
        question: "How long does the Contributory Parent visa take?",
        answer:
          "Applications are capped and queued, so there is no standard processing time. The Department assigns a queue date once the core criteria are met and releases applications in queue-date order as places become available. It publishes the queue dates it has released on its Parent visas queue release dates page.",
      },
      {
        question: "Can I stay in Australia while the 143 is processed?",
        answer:
          "Only if you hold another valid visa. A 143 application does not come with a bridging visa unless you applied as a retiree or held a subclass 173 when you applied. Standard applicants must also be outside Australia when the visa is decided.",
      },
      {
        question: "What is the Assurance of Support and who gives it?",
        answer:
          "It is a legal commitment, managed by Services Australia, to repay any recoverable income support paid to you during the assurance period, which is 10 years for Contributory Parent visas. Any person or organisation that meets the income test can give it, and they lodge a bank guarantee of A$10,000 for one adult or A$14,000 for two adults.",
      },
      {
        question: "Can both parents apply together?",
        answer:
          "Yes. One parent is the main applicant and the other is included as their partner. Each pays the additional applicant first instalment and their own second instalment, and both must pass health and character. The balance of family test counts the children of both parents, including step-children.",
      },
      {
        question: "Can I work on the subclass 173?",
        answer:
          "Yes. The 173 allows you to work and study in Australia for its two-year validity, although you are not eligible for government support. The permanent 143 gives full work rights and Medicare.",
      },
      {
        question: "What happens if my sponsoring child cannot support me for two years?",
        answer:
          "The sponsor can withdraw before a decision, in which case the Department may refuse the visa or ask you to find another eligible sponsor. After grant the sponsor cannot withdraw, and release from the undertaking does not release an assurer from the Assurance of Support.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 143 (Contributory Parent)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 173 (Contributory Parent (Temporary))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1130 (Contributory Parent (Migrant) (Class CA): application and charges)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1221 (Contributory Parent (Temporary) (Class UT))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.05 (balance of family test) and reg 1.03 (settled, parent)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, ss 85 and 86 (limit on the number of visas granted: capping and queueing)", url: ACT },
      { label: "Migration Act 1958, s 48 (bar on further applications in Australia) and s 501 (character)", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
      { label: "Migration (Arrangements for Parent Visa Applications) Instrument 2026 (F2026L00441)", url: PARENT_INSTRUMENT },
    ],
    sources: [
      { label: "Home Affairs: Contributory Parent visa (subclass 143)", url: LISTING + "/contributory-parent-143" },
      { label: "Home Affairs: Contributory Parent (Temporary) visa (subclass 173)", url: LISTING + "/contributory-parent-temporary-173" },
      { label: "Home Affairs: Balance of family test", url: LISTING + "/contributory-parent-143/balance-of-family-test" },
      { label: "Home Affairs: Parent visas queue release dates", url: PARENT_QUEUE },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Conditions for the subclass 143", url: CONDITIONS + "?product=143" },
      { label: "Home Affairs: Conditions for the subclass 173", url: CONDITIONS + "?product=173" },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Home Affairs: Character requirement", url: CHARACTER },
      { label: "Services Australia: Assurance of Support", url: AOS },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Balance of family test explained", href: "/visas/family/balance-of-family-test" },
      { label: "Contributory Aged Parent visa (864 and 884)", href: "/visas/family/contributory-aged-parent-visa-864-884" },
      { label: "Parent visa (subclass 103)", href: "/visas/family/parent-visa-103" },
      { label: "Health requirement and health waiver", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
      { label: "Fee calculator", href: "/tools/fee-calculator" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "143 visa",
      "subclass 143",
      "contributory parent visa",
      "173 visa",
      "subclass 173",
      "contributory parent visa cost 2026",
      "parent visa second instalment",
      "parent visa australia requirements",
      "assurance of support parent visa",
      "parent visa queue",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 2. Contributory Aged Parent visa (subclass 864 and 884)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "contributory-aged-parent-visa-864-884",
    category: "family",
    kind: "visa",
    subclass: "864/884",
    name: "Contributory Aged Parent visa",
    title: "Contributory Aged Parent visa (subclass 864 and 884)",
    seoTitle: "Contributory Aged Parent visa 864 & 884: cost, onshore",
    seoDescription:
      "Contributory Aged Parent visa 864 and 884 in 2026: onshore parent visa at Age Pension age, A$49,900 over two instalments, bridging visa, capped queue.",
    intro:
      "The Contributory Aged Parent visa (subclass 864) is the onshore version of the Contributory Parent visa for a parent who is old enough for the Australian Age Pension. You must be in Australia to apply and when it is decided, and you usually receive a bridging visa while you wait. The two-year Contributory Aged Parent (Temporary) visa (subclass 884) lets you pay in two stages before moving to the permanent 864.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,300 first instalment",
        note: "Subclass 864 or 884 primary applicant, 1 July 2026 charge. A$555 for the 864 if you hold or recently held an 884.",
      },
      {
        label: "Second instalment",
        value: "A$43,600 (864) or A$29,130 (884)",
        note: "The balance of the A$49,900 (864) and A$35,430 (884) single-applicant totals stated by Home Affairs. Invoiced before grant.",
      },
      {
        label: "Stay and work",
        value: "Permanent (864); 2 years (884)",
        note: "Full work and study rights on both; Medicare on the 864. The 884 runs for two years from grant.",
      },
      {
        label: "Pathway to permanent residence",
        value: "864 is permanent; 884 leads to the 864",
        note: "Lodge the 864 before the 884 ends.",
      },
      {
        label: "Where you must be",
        value: "In Australia to apply and at decision",
        note: "Not in immigration clearance. A bridging visa is usually granted when you apply.",
      },
      {
        label: "Age and sponsor",
        value: "Age Pension age (67) and a settled child aged 18 or over",
        note: "Two-year sponsor undertaking; 10-year Assurance of Support.",
      },
    ],
    alert: {
      title: "Online lodgement for the subclass 864 from 22 April 2026",
      body: "Subclass 864 applications made on or after 22 April 2026 must be lodged online through ImmiAccount. The temporary subclass 884 has no online lodgement and is applied for on paper (Form 47PA). Both are capped and queued.",
      href: PARENT_QUEUE,
      linkLabel: "Parent visas queue release dates",
    },
    whoFor: [
      "You are in Australia on a visitor or other temporary visa, you have reached Age Pension age (67), and your child is a settled Australian citizen, permanent resident or eligible New Zealand citizen.",
      "You want to wait for permanent residence in Australia on a bridging visa rather than offshore.",
      "You can fund the second instalment of A$43,600 per applicant, or prefer to pay in stages through the two-year 884.",
      "You already hold an 884 that is approaching its end date and need to lodge the 864.",
      "You are below Age Pension age: look instead at the Contributory Parent visa (subclass 143 or 173).",
    ],
    eligibility: [
      {
        title: "Age Pension age",
        detail:
          "You must be old enough to receive the Australian Age Pension when you apply. Services Australia states Age Pension age is 67 years or older. Your partner does not need to be that age if included as a secondary applicant.",
        legal: "Migration Regulations 1994, reg 1.03 (aged parent) and Sch 2 Parts 864 and 884",
      },
      {
        title: "An approved sponsor",
        detail:
          "Usually your child sponsors you. The sponsor (or their cohabiting spouse or de facto partner) must be an Australian citizen, permanent resident or eligible New Zealand citizen, settled in Australia and aged 18 or over, and must agree to provide support, accommodation and financial help for your first two years on the visa. A relative, guardian or community organisation can sponsor if the child is under 18. The sponsor completes Form 40.",
        legal: "Migration Regulations 1994, reg 1.03 (settled), reg 1.20 (sponsorship undertakings) and Sch 2 Part 864",
      },
      {
        title: "The balance of family test",
        detail:
          "At least half of your children and step-children must be eligible children, or more of them must live in Australia than in any other single country. The test is not waived. Subclass 884 holders who lodge the 864 within time have already met it.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "In Australia, with a visa that lets you apply",
        detail:
          "You and any family members applying with you must be in Australia, but not in immigration clearance, when you apply and when the Department decides. If your current visa carries condition 8503 (no further stay) your application is invalid unless the condition is waived first. The Department usually grants a bridging visa that starts when your current visa ends.",
        legal: "Migration Regulations 1994, Sch 2 Parts 864 and 884 (circumstances applicable to grant); Migration Act 1958, s 46(1A)",
      },
      {
        title: "Not have applied for or hold a Sponsored Parent (Temporary) visa",
        detail: "You cannot apply for the 864 or 884 if you have applied for, or hold, a Sponsored Parent (Temporary) visa (subclass 870).",
        legal: "Migration Regulations 1994, Sch 1 items 1130A and 1221A",
      },
      {
        title: "Second-stage applicants: hold or recently held an 884",
        detail:
          "You can use the second-stage 864 pathway if you hold an 884 when you apply, held one in the 28 days before applying, or the Minister accepts compelling and compassionate circumstances for a later application. Otherwise the 864 is processed as a standard application at full charges.",
        legal: "Migration Regulations 1994, Sch 2 Part 864 and Sch 1 item 1130A",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when asked, unless you apply as a retiree under the Retirement visa pathway. For Contributory Aged Parent visas the assurance runs for 10 years with a bank guarantee of A$10,000 for one adult or A$14,000 for two adults (A$20,000 for an organisation).",
        legal: "Migration Regulations 1994, Sch 2 Parts 864 and 884; Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Health and character",
        detail:
          "You and all applicants (and sometimes non-migrating family members) must meet the health requirement and the character test. Examinations and police certificates are requested by the Department, usually after release from the queue.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria); Migration Act 1958, s 501; PIC 4001",
      },
      {
        title: "Debts, immigration history and values",
        detail:
          "Government debts must be repaid or under an arrangement; previous refusals or cancellations are considered and the section 48 bar can apply to onshore applicants; adults sign the Australian Values Statement; the visa is not granted to a child if that is not in the child's best interests.",
        legal: "PIC 4004 and 4019 (Sch 4); Migration Act 1958, s 48",
      },
    ],
    familyNote:
      "You can include your partner and dependent children when you apply, and add them before a decision with Form 1436. Children aged 18 to 22 must be dependent on you; a child aged 23 or over can only be included if a physical or cognitive limitation stops them working. All applicants must be in Australia when you apply. List every family member on the form even if they are not migrating.",
    documents: [
      {
        group: "Identity and age",
        items: [
          "Passport pages with your photo, personal details and issue and expiry dates",
          "Birth certificate or other evidence of your date of birth for the Age Pension age criterion",
          "National identity card if you have one, proof of any change of name, and four passport-size photographs per applicant",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by your sponsor",
          "Sponsor's citizenship certificate, passport or visa and evidence they are settled in Australia",
          "Birth, marriage, adoption or death certificates showing how you are related",
        ],
      },
      {
        group: "Balance of family",
        items: [
          "Evidence of your relationship to each child and step-child",
          "Evidence of each child's citizenship, permanent residence or country of residence",
          "Evidence for any child who is not counted, for example a death certificate",
        ],
      },
      {
        group: "Family members",
        items: [
          "Form 47A for each family member aged 18 or over, migrating or not",
          "Proof of dependency for children aged 18 to 22, and consent (Form 1229) for a child under 18 whose other parent is not migrating",
          "Marriage certificate or 12 months of de facto evidence for your partner",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates and health examinations when the Department asks",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Check age, balance of family and your current visa",
        description:
          "Confirm you have reached Age Pension age, that you pass the balance of family test, that your child is settled and over 18, and that your current visa does not carry condition 8503 (or get it waived).",
        output: "A clear path to a valid onshore application",
      },
      {
        title: "Choose the direct 864 or the 884 then 864 route",
        description:
          "The direct 864 costs A$49,900 for one applicant over two instalments. The 884 costs A$35,430, gives two years in Australia with work rights, and the later 864 first instalment is A$555 with a reduced second instalment. The staged route costs more overall but spreads the payments.",
        output: "A decision on which subclass to lodge first",
      },
      {
        title: "Lodge in Australia and pay the first instalment",
        description:
          "The 864 is lodged online in ImmiAccount (mandatory from 22 April 2026). The 884 is lodged on paper with Form 47PA, the sponsor's Form 40 and Form 47A for each adult family member. You must be in Australia, not in immigration clearance, when you apply. The Department usually grants a bridging visa; do not cancel your current visa.",
        output: "An acknowledgement letter, a paid first instalment (A$6,300) and usually a bridging visa in reserve",
      },
      {
        title: "Initial assessment and queue date",
        description:
          "The Department checks the core criteria and either assigns a queue date in writing or refuses the application. Applications are released for final processing in queue-date order as places become available under the annual cap.",
        output: "A written queue date",
      },
      {
        title: "Wait in Australia on your bridging visa",
        description:
          "Your bridging visa starts when your current visa ends and lets you stay while the application is processed. Check its conditions in VEVO before working or travelling; leaving Australia on a Bridging visa A needs a Bridging visa B first.",
        output: "Lawful status in Australia for the whole waiting period",
      },
      {
        title: "Final assessment, Assurance of Support and second instalment",
        description:
          "On release from the queue the Department requests health examinations, police certificates and the Assurance of Support, then invoices the second instalment (A$43,600 for a standard 864; A$29,130 for the 884). Non-payment leads to refusal.",
        output: "Cleared health and character, an accepted Assurance of Support and a paid second instalment",
      },
      {
        title: "Grant in Australia",
        description:
          "You must be in Australia when the visa is decided. The 864 gives permanent residence from the date of grant with a five-year travel facility; the 884 runs for two years from grant and you should lodge the 864 before it ends.",
        output: "A visa grant notice with grant number, start date and any conditions",
      },
    ],
    conditions: [],
    costs: [
      { item: "Subclass 864 first instalment", amount: "A$6,300", note: "Primary applicant, 1 July 2026 charge (standard applicant)" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Subclass 864 additional applicant", amount: "A$3,145 / A$1,580", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Subclass 864 first instalment for subclass 884 holders", amount: "A$555", note: "Additional applicants A$280 (18 or over) and A$135 (under 18)" },
      { item: "Subclass 864 second instalment", amount: "A$43,600", note: "Per applicant, standard route: the balance of the A$49,900 total Home Affairs states for a single applicant. Lower for 884 holders; the Department invoices the exact amount." },
      { item: "Subclass 884 first instalment", amount: "A$6,300", note: "Additional applicants A$3,145 (18 or over) and A$1,580 (under 18)" },
      { item: "Subclass 884 second instalment", amount: "A$29,130", note: "Per applicant: the balance of the A$35,430 total Home Affairs states for a single applicant" },
      { item: "Assurance of Support bank guarantee", amount: "A$10,000", note: "10-year assurance, one adult; A$14,000 for two adults; A$20,000 for an organisation. Refunded at the end of the period if no recoverable payments were made." },
      { item: "Bridging visa B if you need to travel while waiting", amount: "A$575", note: "1 July 2026 charge" },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "The 864 is permanent from the day of grant; for citizenship purposes your permanent residence starts that day.",
      "The travel facility lasts five years. After that you need a Resident Return visa or citizenship to re-enter as a permanent resident.",
      "Your sponsor's undertaking lasts two years and the Assurance of Support lasts 10 years; recoverable income support paid in that time becomes the assurer's debt.",
      "Newly arrived residents face waiting periods for most payments and some concessions.",
      "On an 884, you have work and study rights for two years from grant, no government support, and you must apply for the 864 before the 884 ends to keep the lower charges and the balance of family exemption.",
      "Report changes of passport, address, relationship or family composition; the 884 holder may still be eligible for the 864 if the sponsor dies.",
    ],
    pathways: [
      {
        title: "Contributory Parent visa (subclass 143 and 173)",
        description: "The same contributory charges for parents under Age Pension age, or who are outside Australia.",
        href: "/visas/family/contributory-parent-visa-143-173",
      },
      {
        title: "Aged Parent visa (subclass 804)",
        description: "The non-contributory onshore alternative: A$8,665 in total but a much longer queue, with a bridging visa while you wait.",
        href: "/visas/family/aged-parent-visa-804",
      },
      {
        title: "Bridging visas A, B, C and E",
        description: "What your bridging visa allows while the parent visa is processed, and how to travel on a Bridging visa B.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
      {
        title: "Australian citizenship by conferral",
        description: "Available after four years of lawful residence including 12 months as a permanent resident.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
    ],
    risks: [
      "Applying before you reach Age Pension age (67): the age criterion is assessed at the time of application.",
      "Lodging while your visa carries condition 8503: the application is invalid unless the condition was waived first.",
      "Leaving Australia at the wrong time: you must be in Australia when the visa is decided, and a Bridging visa A ends if you depart without a Bridging visa B.",
      "Holding or having applied for a Sponsored Parent (Temporary) visa (subclass 870), which closes the 864 and 884.",
      "Letting the 884 expire before the 864 is lodged, which removes the A$555 first instalment and the balance of family exemption.",
      "Health: a condition likely to be a significant cost to the community can lead to refusal of all applicants, often after years in the queue.",
      "Failing to pay the second instalment, which results in refusal without a refund of the first.",
    ],
    faqs: [
      {
        question: "What does \"aged\" mean for the subclass 864 and 884?",
        answer:
          "You must be old enough to receive the Australian Age Pension when you apply. Services Australia states that Age Pension age is 67 years or older. There is no age test for your partner if they are included as a secondary applicant.",
      },
      {
        question: "Can I stay in Australia while the application is processed?",
        answer:
          "Yes. The Department states it is likely to grant a bridging visa when you apply in Australia. It starts when your current visa expires and lets you stay until the application is decided. Do not cancel your current visa, and check the bridging visa's conditions in VEVO.",
      },
      {
        question: "How much does the Contributory Aged Parent visa cost?",
        answer:
          "Home Affairs states the subclass 864 costs from A$49,900 for a single applicant over two instalments: A$6,300 when you apply and A$43,600 before grant. The 884 costs from A$35,430: A$6,300 then A$29,130. Each additional applicant pays their own charges.",
      },
      {
        question: "Is the 864 faster than the Aged Parent visa (subclass 804)?",
        answer:
          "Both are capped and queued, but the Department states it may process Contributory Aged Parent visas faster than the non-contributory 804 because they cost more. It does not publish a processing time; it publishes the queue dates it has released.",
      },
      {
        question: "Can I include my partner who is under 67?",
        answer:
          "Yes. Only the main applicant must have reached Age Pension age. Your partner is included as a secondary applicant, pays the additional applicant charges and their own second instalment, and must be in Australia when you apply.",
      },
      {
        question: "Do I need the balance of family test if I hold an 884?",
        answer:
          "No. If you lodge the 864 while you hold the 884 (or within 28 days after it ends) you have already met the test. If you lodge later, you need compelling and compassionate circumstances or the application is treated as a standard one.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 864 (Contributory Aged Parent)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 884 (Contributory Aged Parent (Temporary))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1130A (Contributory Aged Parent (Residence) (Class DG))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1221A (Contributory Aged Parent (Temporary) (Class UU))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (aged parent, settled) and reg 1.05 (balance of family test)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, s 46(1A) (condition 8503), s 48, ss 85 and 86 (capping), s 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
      { label: "Migration (Arrangements for Parent Visa Applications) Instrument 2026 (F2026L00441)", url: PARENT_INSTRUMENT },
    ],
    sources: [
      { label: "Home Affairs: Contributory Aged Parent visa (subclass 864)", url: LISTING + "/contributory-aged-parent-864" },
      { label: "Home Affairs: Contributory Aged Parent (Temporary) visa (subclass 884)", url: LISTING + "/contributory-aged-parent-temporary-884" },
      { label: "Home Affairs: Balance of family test", url: LISTING + "/contributory-aged-parent-864/balance-of-family-test" },
      { label: "Home Affairs: Parent visas queue release dates", url: PARENT_QUEUE },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Conditions for the subclass 864", url: CONDITIONS + "?product=864" },
      { label: "Home Affairs: Conditions for the subclass 884", url: CONDITIONS + "?product=884" },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Services Australia: Who can get Age Pension", url: AGE_PENSION },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Contributory Parent visa (143 and 173)", href: "/visas/family/contributory-parent-visa-143-173" },
      { label: "Aged Parent visa (subclass 804)", href: "/visas/family/aged-parent-visa-804" },
      { label: "Balance of family test explained", href: "/visas/family/balance-of-family-test" },
      { label: "Condition 8503 no further stay waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { label: "Fee calculator", href: "/tools/fee-calculator" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "864 visa",
      "subclass 864",
      "contributory aged parent visa",
      "884 visa",
      "subclass 884",
      "aged parent visa onshore",
      "contributory aged parent visa cost 2026",
      "parent visa bridging visa",
      "age pension age parent visa",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 3. Parent visa (subclass 103)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "parent-visa-103",
    category: "family",
    kind: "visa",
    subclass: "103",
    name: "Parent visa",
    title: "Parent visa (subclass 103)",
    seoTitle: "Subclass 103 Parent visa: cost, balance of family, queue",
    seoDescription:
      "Parent visa subclass 103 in 2026: permanent residence for A$8,665 over two instalments, settled sponsor, balance of family test and a long capped queue.",
    intro:
      "The Parent visa (subclass 103) is the low-cost permanent visa for a parent of a settled Australian citizen, permanent resident or eligible New Zealand citizen. It needs a sponsor, the balance of family test and an Assurance of Support, and because only a small number of places are released each year it sits in a queue far longer than the Contributory Parent visa. Applicants must be outside Australia when it is granted.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,600 first instalment",
        note: "Primary applicant, 1 July 2026 charge. Additional applicants A$3,300 (18 or over) and A$1,655 (under 18).",
      },
      {
        label: "Second instalment",
        value: "A$2,065",
        note: "The balance of the A$8,665 single-applicant total stated by Home Affairs. Invoiced before grant.",
      },
      { label: "Length of stay", value: "Permanent", note: "Work, study and Medicare; five-year travel facility." },
      {
        label: "Pathway to permanent residence",
        value: "This visa is permanent residence",
        note: "Citizenship may follow after four years of residence including 12 months as a permanent resident.",
      },
      {
        label: "Where you must be",
        value: "Apply in or outside Australia; outside Australia at decision",
        note: "No bridging visa comes with the application (retirees excepted).",
      },
      {
        label: "Sponsor",
        value: "Your settled child, aged 18 or over",
        note: "Two-year undertaking; Assurance of Support for four years.",
      },
    ],
    alert: {
      title: "Online lodgement from 22 April 2026 and a capped queue",
      body: "Parent visa applications made on or after 22 April 2026 must be lodged online through ImmiAccount. The subclass 103 is capped and queued: the Department assigns a queue date once the core criteria are met and releases applications in queue-date order as places become available. It publishes the queue dates it has released rather than a processing time.",
      href: PARENT_QUEUE,
      linkLabel: "Parent visas queue release dates",
    },
    whoFor: [
      "You are the parent of a settled Australian citizen, permanent resident or eligible New Zealand citizen and at least half of your children live in Australia permanently.",
      "You cannot or do not want to pay the Contributory Parent second instalment of A$43,600 per applicant and are prepared to wait much longer.",
      "You are under Age Pension age, so the onshore Aged Parent visa (subclass 804) is not available.",
      "You are outside Australia or hold another visa that keeps you lawful while you wait.",
      "You held a Retirement (subclass 410) or Investor Retirement (subclass 405) visa on 8 May 2018 and are applying under the Retirement visa pathway.",
    ],
    eligibility: [
      {
        title: "An approved sponsor",
        detail:
          "Usually your child sponsors you. The sponsor (or their cohabiting spouse or de facto partner) must be an Australian citizen, permanent resident or eligible New Zealand citizen, settled in Australia and aged 18 or over, and must undertake to provide support, accommodation and financial help for your first two years. \"Settled\" means lawfully resident for a reasonable period; policy generally looks for around two years. If your child is under 18, their cohabiting spouse, a relative or guardian, or an established community organisation can sponsor. Form 40 is required.",
        legal: "Migration Regulations 1994, reg 1.03 (settled), reg 1.20 (sponsorship undertakings) and Sch 2 Part 103",
      },
      {
        title: "The balance of family test",
        detail:
          "At least half of your children and step-children must be Australian citizens, permanent residents usually resident in Australia or eligible New Zealand citizens usually resident in Australia, or more of your children must live in Australia than in any other single country. Children in Australia on temporary visas, including bridging visas, count as living overseas. The test cannot be waived.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Not have applied for or hold a Sponsored Parent (Temporary) visa",
        detail: "You cannot apply for the subclass 103 if you have applied for, or hold, a Sponsored Parent (Temporary) visa (subclass 870).",
        legal: "Migration Regulations 1994, Sch 1 item 1124",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when the Department asks for it. It can come from any person or organisation that meets Services Australia's income test, not only your sponsor. For the subclass 103 the assurance runs for four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two adults (A$10,000 for an organisation). Retirees under the Retirement visa pathway are exempt.",
        legal: "Migration Regulations 1994, Sch 2 Part 103; Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Health requirement",
        detail:
          "You, every applicant and sometimes non-migrating family members must meet the health requirement. Examinations are requested after release from the queue, and the result applies to the whole family.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria)",
      },
      {
        title: "Character requirement",
        detail: "You and family members aged 16 or over must pass the character test. Police certificates are requested by the Department when needed.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Debts and immigration history",
        detail:
          "Debts to the Australian Government must be repaid or under an approved arrangement. A previous visa cancellation or refusal is weighed, and onshore applicants may face the section 48 bar.",
        legal: "PIC 4004 (Sch 4); Migration Act 1958, s 48",
      },
      {
        title: "Values statement and children's best interests",
        detail: "Adults sign the Australian Values Statement after reading the Life in Australia booklet. A child's visa is refused if grant is not in the child's best interests.",
        legal: "PIC 4019 (Sch 4)",
      },
      {
        title: "Retirement visa pathway (limited group)",
        detail:
          "If on 8 May 2018 you held or had held a subclass 410 or 405 visa, have held no other substantive visa since and are in Australia, you can apply as a retiree without a sponsor, the balance of family test or an Assurance of Support, but you must hold adequate health insurance until grant and cannot include children.",
        legal: "Migration Regulations 1994, Sch 2 Part 103",
      },
    ],
    familyNote:
      "Include your partner and dependent children when you apply; they can be added before a decision with Form 1436. Children aged 18 to 22 must be dependent on you, and a child aged 23 or over can be included only if unable to work because of a physical or cognitive limitation. Because the queue is long, a child who will turn 23 before the application is decided will need to show dependency because of disability. Every family member must be listed even if not migrating, and retirees cannot include children.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "National identity card if you have one and evidence of any change of name",
          "Four recent passport-size photographs for each applicant",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by your sponsor",
          "Evidence the sponsor is a citizen or permanent resident and is settled in Australia",
          "Birth, marriage, adoption or death certificates proving the relationship",
        ],
      },
      {
        group: "Balance of family",
        items: [
          "Evidence of how you are related to each child and step-child",
          "Evidence of each child's citizenship, permanent residence or country of residence",
          "Death certificate or other evidence for any child who is not counted",
        ],
      },
      {
        group: "Family members",
        items: [
          "Form 47A for each family member aged 18 or over, even if not migrating",
          "Proof of dependency for children aged 18 to 22 and Form 1229 or a statutory declaration for a child under 18 whose other parent stays behind",
          "Marriage certificate or 12 months of de facto evidence for a partner",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates and health examinations only when the Department asks",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Check the balance of family test and your sponsor",
        description:
          "Count your children by country and status; the test is not waived. Confirm your sponsoring child is settled in Australia and aged 18 or over, and that no Sponsored Parent (Temporary) visa (subclass 870) sponsorship has been lodged for you.",
        output: "A passing balance of family count and a sponsor ready to sign Form 40",
      },
      {
        title: "Weigh the 103 against the Contributory Parent visa",
        description:
          "The 103 costs A$8,665 in total but has the longest queue of the parent visas. The Contributory Parent visa costs A$49,900 and is processed from a separate, shorter queue. The Department does not refund a 103 application if you later switch, and you must withdraw an existing parent application when you lodge a new one.",
        output: "A decision on which parent visa to lodge",
      },
      {
        title: "Lodge online and pay the first instalment",
        description:
          "Applications made on or after 22 April 2026 must be lodged online in ImmiAccount with the documents attached. You can be in or outside Australia, but not in immigration clearance. If your current visa carries condition 8503 you need a waiver first.",
        output: "An acknowledgement letter and a paid first instalment of A$6,600",
      },
      {
        title: "Initial assessment and queue date",
        description:
          "The Department checks the core criteria and either assigns a queue date in writing or refuses the application. Queued applications are released for final processing in queue-date order when places become available under the annual cap.",
        output: "A written queue date",
      },
      {
        title: "Stay lawful while you wait",
        description:
          "The 103 does not come with a bridging visa unless you applied as a retiree. If you are in Australia on a temporary visa, keep holding a valid visa or leave before it expires; otherwise wait outside Australia. Tell the Department about changes of passport, contact details, relationship or family.",
        output: "Lawful status, or a plan to wait offshore, for the whole waiting period",
      },
      {
        title: "Final assessment and second instalment",
        description:
          "After release from the queue the Department requests health examinations, police certificates and the Assurance of Support, then invoices the second instalment of A$2,065. Non-payment results in refusal.",
        output: "Cleared health and character, an accepted Assurance of Support and a paid second instalment",
      },
      {
        title: "Grant outside Australia and first entry",
        description:
          "You must be outside Australia when the visa is decided (retirees can be in or outside Australia). Enter before the first entry date in the grant letter. Your travel facility lasts five years.",
        output: "A visa grant notice with grant number, start date and conditions",
      },
    ],
    conditions: [
      {
        code: "8502",
        meaning: "A family member must not arrive in Australia before the main applicant named in their visa.",
      },
      {
        code: "8515",
        meaning: "An applicant granted the visa as a single person must not marry or enter a de facto relationship before first entering Australia.",
      },
    ],
    costs: [
      { item: "First instalment", amount: "A$6,600", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Additional applicant", amount: "A$3,300 / A$1,655", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Second instalment", amount: "A$2,065", note: "The balance of the A$8,665 single-applicant total stated by Home Affairs; invoiced before grant" },
      { item: "Assurance of Support bank guarantee", amount: "A$5,000", note: "Four-year assurance, one adult; A$7,000 for two adults; A$10,000 for an organisation. Returned at the end of the period if no recoverable payments were made." },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date. For citizenship purposes your permanent residence starts when you enter on the visa, or on grant if you were in Australia.",
      "The travel facility lasts five years from grant; after that you need a Resident Return visa or citizenship to return as a permanent resident.",
      "Your sponsor's undertaking to support and house you lasts two years, and the Assurance of Support lasts four years.",
      "Newly arrived residents face waiting periods for most Services Australia payments.",
      "You can enrol in Medicare, work, study and sponsor eligible family members.",
    ],
    pathways: [
      {
        title: "Contributory Parent visa (subclass 143 and 173)",
        description: "Much higher charges but a separate, shorter queue; the same sponsor, balance of family and Assurance of Support rules.",
        href: "/visas/family/contributory-parent-visa-143-173",
      },
      {
        title: "Aged Parent visa (subclass 804)",
        description: "The same visa for parents of Age Pension age who are in Australia, with a bridging visa while they wait.",
        href: "/visas/family/aged-parent-visa-804",
      },
      {
        title: "Sponsored Parent (Temporary) visa (subclass 870)",
        description: "A three or five year visit with no balance of family test, but it closes the door to a later parent visa.",
        href: "/visas/family/sponsored-parent-temporary-visa-870",
      },
      {
        title: "Resident Return visa (subclass 155 and 157)",
        description: "Needed to travel after the five-year travel facility ends.",
        href: "/visas/other-visas/resident-return-visa-155-157",
      },
    ],
    risks: [
      "Failing the balance of family test, which cannot be waived; children on temporary or bridging visas are counted as living overseas.",
      "Being in Australia when the Department decides the application: the visa cannot be granted to a standard applicant onshore, and no bridging visa is attached to the application.",
      "Health problems that develop during the long wait: the health requirement is assessed at the end, and one applicant's failure affects all.",
      "A dependent child turning 23 before the decision without evidence of disability-related dependency, so they drop out of the application.",
      "Having applied for a Sponsored Parent (Temporary) visa (subclass 870), which makes a 103 application impossible.",
      "Not paying the second instalment or not obtaining the Assurance of Support when asked.",
    ],
    faqs: [
      {
        question: "How much does the Parent visa (subclass 103) cost?",
        answer:
          "Home Affairs states it costs from A$8,665 for a single applicant over two instalments: A$6,600 when you apply and A$2,065 before grant. Additional applicants pay A$3,300 (18 or over) or A$1,655 (under 18) at lodgement plus their own second instalment.",
      },
      {
        question: "How long is the Parent visa queue?",
        answer:
          "The Department does not publish a processing time for queued parent visas. It assigns a queue date once your application meets the core criteria and releases applications in queue-date order as places become available under the annual cap. Its Parent visas queue release dates page shows which queue dates have been released so far.",
      },
      {
        question: "Can I wait in Australia on a bridging visa?",
        answer:
          "No, not on the strength of a 103 application. A bridging visa is only granted to retirees applying under the Retirement visa pathway. Other applicants must hold another visa while in Australia and must be outside Australia when the visa is decided.",
      },
      {
        question: "What is the difference between the 103 and the 143?",
        answer:
          "Both are permanent parent visas with the same sponsor, balance of family and Assurance of Support requirements. The 143 costs A$49,900 for one applicant and comes with a 10-year Assurance of Support; the 103 costs A$8,665 with a four-year assurance but has a far longer queue.",
      },
      {
        question: "Can I switch from the 103 queue to the Contributory Parent visa?",
        answer:
          "Yes. You can lodge a 143 or 173 at any time, but you must withdraw the 103 application when you do and the 103 charges are not refunded. The new application gets its own queue date.",
      },
      {
        question: "Who can be the assurer for the Assurance of Support?",
        answer:
          "Any individual, group of up to three people or organisation that meets Services Australia's income test. It does not have to be your sponsor. For the subclass 103 the assurance lasts four years and the bank guarantee is A$5,000 for one adult or A$7,000 for two.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 103 (Parent)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1124 (Parent (Migrant) (Class AX): application and charges)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.05 (balance of family test) and reg 1.03 (settled)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, ss 85 and 86 (capping and queueing), s 48 and s 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
      { label: "Migration (Arrangements for Parent Visa Applications) Instrument 2026 (F2026L00441)", url: PARENT_INSTRUMENT },
    ],
    sources: [
      { label: "Home Affairs: Parent visa (subclass 103)", url: LISTING + "/parent-103" },
      { label: "Home Affairs: Balance of family test", url: LISTING + "/parent-103/balance-of-family-test" },
      { label: "Home Affairs: Parent visas queue release dates", url: PARENT_QUEUE },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Conditions for the subclass 103", url: CONDITIONS + "?product=103" },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Home Affairs: Character requirement", url: CHARACTER },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Balance of family test explained", href: "/visas/family/balance-of-family-test" },
      { label: "Contributory Parent visa (143 and 173)", href: "/visas/family/contributory-parent-visa-143-173" },
      { label: "Aged Parent visa (subclass 804)", href: "/visas/family/aged-parent-visa-804" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "103 visa",
      "subclass 103",
      "parent visa 103",
      "parent visa australia cost",
      "non contributory parent visa",
      "parent visa queue australia",
      "parent visa balance of family",
      "parent visa assurance of support",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 4. Aged Parent visa (subclass 804)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "aged-parent-visa-804",
    category: "family",
    kind: "visa",
    subclass: "804",
    name: "Aged Parent visa",
    title: "Aged Parent visa (subclass 804)",
    seoTitle: "Subclass 804 Aged Parent visa: onshore, cost, bridging",
    seoDescription:
      "Aged Parent visa 804 in 2026: apply in Australia at Age Pension age, A$8,665 over two instalments, bridging visa while queued, sponsor and balance of family.",
    intro:
      "The Aged Parent visa (subclass 804) is the onshore version of the Parent visa for a parent who has reached Australian Age Pension age. You apply and are granted in Australia, and the Department usually grants a bridging visa so you can stay while the application sits in the capped parent visa queue. It needs a settled sponsoring child, the balance of family test and an Assurance of Support, and costs far less than the contributory visas.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,600 first instalment",
        note: "Primary applicant, 1 July 2026 charge. Additional applicants A$3,300 (18 or over) and A$1,655 (under 18).",
      },
      {
        label: "Second instalment",
        value: "A$2,065",
        note: "The balance of the A$8,665 single-applicant total stated by Home Affairs. Invoiced before grant.",
      },
      { label: "Length of stay", value: "Permanent", note: "Work, study and Medicare once granted; five-year travel facility." },
      {
        label: "Pathway to permanent residence",
        value: "This visa is permanent residence",
        note: "Permanent residence starts on the day of grant.",
      },
      {
        label: "Where you must be",
        value: "In Australia to apply and at decision",
        note: "Not in immigration clearance. A bridging visa is usually granted when you apply.",
      },
      {
        label: "Age and sponsor",
        value: "Age Pension age (67) and a settled child aged 18 or over",
        note: "Two-year sponsor undertaking; four-year Assurance of Support.",
      },
    ],
    alert: {
      title: "Online lodgement from 22 April 2026 and a capped queue",
      body: "Aged Parent visa applications made on or after 22 April 2026 must be lodged online through ImmiAccount. The subclass 804 is capped and queued with the other parent visas; the Department assigns a queue date once the core criteria are met and publishes the queue dates it has released rather than a processing time.",
      href: PARENT_QUEUE,
      linkLabel: "Parent visas queue release dates",
    },
    whoFor: [
      "You are in Australia on a visitor or other temporary visa without a no further stay condition, you have reached Age Pension age, and your child is settled here as a citizen, permanent resident or eligible New Zealand citizen.",
      "You want to live with your family in Australia on a bridging visa while you wait, rather than paying the contributory charges.",
      "At least half of your children live in Australia permanently, or more live here than in any other country.",
      "You are under Age Pension age or outside Australia: look instead at the Parent visa (subclass 103) or the Contributory Parent visa.",
    ],
    eligibility: [
      {
        title: "Age Pension age",
        detail:
          "You must be old enough to receive the Australian Age Pension when you apply. Services Australia states Age Pension age is 67 years or older. A partner included in the application does not need to meet the age test.",
        legal: "Migration Regulations 1994, reg 1.03 (aged parent) and Sch 2 Part 804",
      },
      {
        title: "An approved sponsor",
        detail:
          "Usually your child sponsors you. The sponsor (or their cohabiting spouse or de facto partner) must be an Australian citizen, permanent resident or eligible New Zealand citizen, settled in Australia and aged 18 or over, and must undertake to provide support, accommodation and financial help for your first two years on the visa. If your child is under 18, their cohabiting spouse, a relative or guardian, or an established community organisation can sponsor. Form 40 is required.",
        legal: "Migration Regulations 1994, reg 1.03 (settled), reg 1.20 (sponsorship undertakings) and Sch 2 Part 804",
      },
      {
        title: "The balance of family test",
        detail:
          "At least half of your children and step-children must be eligible children, or more of them must live in Australia than in any other single country. Children in Australia on temporary visas, including bridging visas, count as living overseas. The test is never waived.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "In Australia on a visa that lets you apply",
        detail:
          "You and any family members applying with you must be in Australia, but not in immigration clearance, when you apply and when the visa is decided. If your current visa carries condition 8503 (no further stay) the application is invalid unless the condition is waived first. The Department usually grants a bridging visa that starts when your current visa ends.",
        legal: "Migration Regulations 1994, Sch 2 Part 804 (circumstances applicable to grant); Migration Act 1958, s 46(1A)",
      },
      {
        title: "Not have applied for or hold a Sponsored Parent (Temporary) visa",
        detail: "You cannot apply for the 804 if you have applied for, or hold, a Sponsored Parent (Temporary) visa (subclass 870).",
        legal: "Migration Regulations 1994, Sch 1 item 1124A",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when the Department asks for it, unless you apply as a retiree under the Retirement visa pathway. Any person or organisation that meets Services Australia's income test can give it. For the subclass 804 the assurance runs for four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two adults (A$10,000 for an organisation).",
        legal: "Migration Regulations 1994, Sch 2 Part 804; Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Health and character",
        detail:
          "All applicants, and sometimes non-migrating family members, must meet the health requirement and the character test. Examinations and police certificates are requested after release from the queue, and one applicant's failure affects the whole application.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria); Migration Act 1958, s 501; PIC 4001",
      },
      {
        title: "Debts, immigration history and values",
        detail:
          "Debts to the Australian Government must be repaid or under an arrangement; past refusals or cancellations are weighed and the section 48 bar can apply; adults sign the Australian Values Statement; a child's visa is not granted if that is not in the child's best interests.",
        legal: "PIC 4004 and 4019 (Sch 4); Migration Act 1958, s 48",
      },
    ],
    familyNote:
      "Include your partner and dependent children when you apply; they must be in Australia too, and can be added before a decision with Form 1436. Children aged 18 to 22 must be dependent on you, and a child aged 23 or over can only be included if a physical or cognitive limitation stops them working. List every family member, migrating or not.",
    documents: [
      {
        group: "Identity and age",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "Birth certificate or other evidence of your date of birth",
          "National identity card if you have one, proof of any change of name, and four passport-size photographs per applicant",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by your sponsor",
          "Evidence the sponsor is a citizen or permanent resident and is settled in Australia",
          "Birth, marriage, adoption or death certificates proving the relationship",
        ],
      },
      {
        group: "Balance of family",
        items: [
          "Evidence of how you are related to each child and step-child",
          "Evidence of each child's citizenship, permanent residence or country of residence",
          "Death certificate or other evidence for any child who is not counted",
        ],
      },
      {
        group: "Family members",
        items: [
          "Form 47A for each family member aged 18 or over, even if not migrating",
          "Proof of dependency for children aged 18 to 22, and Form 1229 or a statutory declaration for a child under 18 whose other parent is not migrating",
          "Marriage certificate or 12 months of de facto evidence for a partner",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates and health examinations only when the Department asks",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Check age, balance of family and your current visa",
        description:
          "Confirm you have reached Age Pension age, that you pass the balance of family test, that your sponsoring child is settled and over 18, and that your current visa does not carry condition 8503 (or obtain a waiver first).",
        output: "A clear path to a valid onshore application",
      },
      {
        title: "Lodge online in Australia and pay the first instalment",
        description:
          "Applications made on or after 22 April 2026 are lodged in ImmiAccount with your documents and the sponsor's Form 40 attached. You must be in Australia, not in immigration clearance. The Department usually grants a bridging visa; do not cancel your current visa.",
        output: "An acknowledgement letter, a paid first instalment of A$6,600 and usually a bridging visa in reserve",
      },
      {
        title: "Initial assessment and queue date",
        description:
          "The Department checks the core criteria and either assigns a queue date in writing or refuses the application. Queued applications are released for final processing in queue-date order as places become available under the annual cap.",
        output: "A written queue date",
      },
      {
        title: "Wait in Australia on your bridging visa",
        description:
          "Your bridging visa starts when your current visa ends and lets you stay while the application is processed. Check its conditions in VEVO, and obtain a Bridging visa B before any overseas trip or your Bridging visa A will end when you leave.",
        output: "Lawful status in Australia for the whole waiting period",
      },
      {
        title: "Final assessment, Assurance of Support and second instalment",
        description:
          "On release from the queue the Department requests health examinations, police certificates and the Assurance of Support, then invoices the second instalment of A$2,065. Non-payment results in refusal.",
        output: "Cleared health and character, an accepted Assurance of Support and a paid second instalment",
      },
      {
        title: "Grant in Australia",
        description:
          "You must be in Australia when the visa is decided. Permanent residence starts on the day of grant, with a five-year travel facility. The grant notice lists any conditions.",
        output: "A visa grant notice with grant number, start date and any conditions",
      },
    ],
    conditions: [],
    costs: [
      { item: "First instalment", amount: "A$6,600", note: "Primary applicant, 1 July 2026 charge" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Additional applicant", amount: "A$3,300 / A$1,655", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Second instalment", amount: "A$2,065", note: "The balance of the A$8,665 single-applicant total stated by Home Affairs; invoiced before grant" },
      { item: "Assurance of Support bank guarantee", amount: "A$5,000", note: "Four-year assurance, one adult; A$7,000 for two adults; A$10,000 for an organisation. Returned at the end of the period if no recoverable payments were made." },
      { item: "Bridging visa B if you need to travel while waiting", amount: "A$575", note: "1 July 2026 charge" },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Permanent residence starts on the day of grant; the travel facility lasts five years, after which you need a Resident Return visa or citizenship to re-enter.",
      "Your sponsor's undertaking to support and house you lasts two years and the Assurance of Support lasts four years.",
      "Newly arrived residents face waiting periods for most Services Australia payments.",
      "You can enrol in Medicare, work, study and sponsor eligible family members.",
      "The grant notice and VEVO list any conditions that apply to your visa.",
    ],
    pathways: [
      {
        title: "Contributory Aged Parent visa (subclass 864 and 884)",
        description: "The contributory onshore alternative: A$49,900 in total but a separate, shorter queue.",
        href: "/visas/family/contributory-aged-parent-visa-864-884",
      },
      {
        title: "Parent visa (subclass 103)",
        description: "The same visa for parents under Age Pension age or outside Australia, without a bridging visa.",
        href: "/visas/family/parent-visa-103",
      },
      {
        title: "Bridging visas A, B, C and E",
        description: "What your bridging visa allows while the parent visa is processed and how to travel on a Bridging visa B.",
        href: "/visas/other-visas/bridging-visas-a-b-c-e",
      },
      {
        title: "Australian citizenship by conferral",
        description: "Available after four years of lawful residence including 12 months as a permanent resident.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
    ],
    risks: [
      "Applying before you reach Age Pension age (67), because the age criterion is assessed at the time of application.",
      "Lodging while your visa carries condition 8503: the application is invalid unless the condition was waived first.",
      "Leaving Australia without a Bridging visa B, which ends your Bridging visa A, or being outside Australia when the visa is decided.",
      "Failing the balance of family test, which cannot be waived.",
      "Health problems that develop during the long wait: the health requirement is assessed after release from the queue and one applicant's failure affects all.",
      "Having applied for a Sponsored Parent (Temporary) visa (subclass 870), which closes the 804.",
      "Not paying the second instalment or not obtaining the Assurance of Support when asked.",
    ],
    faqs: [
      {
        question: "Can I stay in Australia on a bridging visa while the Aged Parent visa is processed?",
        answer:
          "Yes. The Department states it is likely to grant a bridging visa when you apply in Australia. It starts when your current visa expires and keeps you lawful until a decision. Check its conditions in VEVO and apply for a Bridging visa B before any travel.",
      },
      {
        question: "How much does the Aged Parent visa cost?",
        answer:
          "Home Affairs states it costs from A$8,665 for a single applicant over two instalments: A$6,600 when you apply and A$2,065 before grant. Additional applicants pay A$3,300 (18 or over) or A$1,655 (under 18) at lodgement plus their own second instalment.",
      },
      {
        question: "What age do I need to be?",
        answer:
          "You must be old enough for the Australian Age Pension when you apply. Services Australia states that Age Pension age is 67 years or older. Your partner can be younger if included as a secondary applicant.",
      },
      {
        question: "How long will I wait?",
        answer:
          "The Department does not publish a processing time for the 804. It is capped and queued with the other parent visas; applications receive a queue date once the core criteria are met and are released in queue-date order. The Parent visas queue release dates page shows which queue dates have been released.",
      },
      {
        question: "Can I work while I wait?",
        answer:
          "That depends on the conditions of the bridging visa you are granted, which the Department sets at the time. Check VEVO before taking any work. Once the 804 is granted you have full work rights.",
      },
      {
        question: "Is the 804 cheaper than the Contributory Aged Parent visa?",
        answer:
          "Yes: A$8,665 in total compared with A$49,900 for the subclass 864, and the Assurance of Support runs for four years rather than ten. The trade-off is a much longer queue.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 804 (Aged Parent)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1124A (Aged Parent (Residence) (Class BP): application and charges)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (aged parent, settled) and reg 1.05 (balance of family test)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, s 46(1A) (condition 8503), s 48, ss 85 and 86 (capping), s 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
      { label: "Migration (Arrangements for Parent Visa Applications) Instrument 2026 (F2026L00441)", url: PARENT_INSTRUMENT },
    ],
    sources: [
      { label: "Home Affairs: Aged Parent visa (subclass 804)", url: LISTING + "/aged-parent-804" },
      { label: "Home Affairs: Balance of family test", url: LISTING + "/aged-parent-804/balance-of-family-test" },
      { label: "Home Affairs: Parent visas queue release dates", url: PARENT_QUEUE },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Home Affairs: Character requirement", url: CHARACTER },
      { label: "Services Australia: Who can get Age Pension", url: AGE_PENSION },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Contributory Aged Parent visa (864 and 884)", href: "/visas/family/contributory-aged-parent-visa-864-884" },
      { label: "Parent visa (subclass 103)", href: "/visas/family/parent-visa-103" },
      { label: "Balance of family test explained", href: "/visas/family/balance-of-family-test" },
      { label: "Condition 8503 no further stay waiver", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
      { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "804 visa",
      "subclass 804",
      "aged parent visa",
      "aged parent visa onshore",
      "aged parent visa bridging visa",
      "aged parent visa cost 2026",
      "parent visa age pension age",
      "parent visa in australia",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 5. Sponsored Parent (Temporary) visa (subclass 870)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "sponsored-parent-temporary-visa-870",
    category: "family",
    kind: "visa",
    subclass: "870",
    name: "Sponsored Parent (Temporary) visa",
    title: "Sponsored Parent (Temporary) visa (subclass 870)",
    seoTitle: "Subclass 870 Sponsored Parent visa: cost, sponsor income",
    seoDescription:
      "Sponsored Parent visa 870 in 2026: 3 or 5 year visits up to 10 years, A$6,370 or A$12,440 in two instalments, A$420 sponsorship, income test, no work.",
    intro:
      "The Sponsored Parent (Temporary) visa (subclass 870) lets a parent of an Australian citizen, permanent resident or eligible New Zealand citizen stay in Australia for up to three or five years at a time, up to a total of ten years. The child must first be approved as a Parent Sponsor by passing an income test. There is no balance of family test or Assurance of Support, but the visa gives no work rights, does not lead to permanent residence, and bars a later parent visa application.",
    factsAsAt: FACTS_AS_AT,
    permanent: false,
    tags: ["Temporary", "Family sponsor required", "Apply outside Australia", "No pathway to PR"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$1,515 first instalment",
        note: "Primary applicant, 1 July 2026 charge. No additional applicants can be included.",
      },
      {
        label: "Total charge",
        value: "A$6,370 (3 years) or A$12,440 (5 years)",
        note: "Home Affairs totals; the second instalment (A$4,855 or A$10,925) is invoiced before grant.",
      },
      {
        label: "Length of stay",
        value: "Up to 3 or 5 years per visa",
        note: "Cumulative maximum of 10 years across all subclass 870 visas.",
      },
      { label: "Work rights", value: "None", note: "Unpaid care of grandchildren and volunteering are allowed; no paid work and no work in a family business." },
      {
        label: "Pathway to permanent residence",
        value: "None",
        note: "You cannot apply for a permanent or temporary parent visa while you hold or have applied for this visa.",
      },
      {
        label: "Sponsor",
        value: "Approved Parent Sponsor",
        note: "A$420 sponsorship application; taxable income of at least A$83,454.80 in the last completed income year.",
      },
    ],
    whoFor: [
      "You want to spend several years at a time with your children and grandchildren in Australia without passing the balance of family test or waiting in the parent visa queue.",
      "Your child has lived in Australia as a citizen, or as a permanent resident or eligible New Zealand citizen for at least four years, and earned at least A$83,454.80 in the last completed income year (or can combine income with their partner or your other child).",
      "You can support yourself and keep Australian health insurance for the whole stay and do not need to work.",
      "You have no plan to apply for a permanent parent visa, because holding or applying for an 870 bars the subclass 103, 143, 173, 804, 864 and 884.",
    ],
    eligibility: [
      {
        title: "An approved Parent Sponsor",
        detail:
          "Your child (or your child's spouse or de facto partner) applies online to become a Parent Sponsor before you can lodge the visa. The sponsor must be at least 18, an Australian citizen or a permanent resident or eligible New Zealand citizen usually resident in Australia for at least four years, must not have been unlawful or on a bridging visa (other than A, B or C) in the last four years, must pass character checks, have no government debt, have met any previous sponsorship obligations, and agree to share information and to the sponsorship obligations. A household can hold one sponsorship at a time covering up to two parents.",
        legal: "Migration Act 1958, Part 2 Division 3A (approval of sponsors and sponsorship obligations); Migration Regulations 1994, Part 2A",
      },
      {
        title: "The sponsor's income test",
        detail:
          "The sponsor's taxable income for the most recent completed income year before the sponsorship application must be at least A$83,454.80, shown by an ATO Notice of Assessment. If the sponsor cannot meet it alone, their income can be combined with their partner's and/or that of another child of the parent who is an Australian citizen, permanent resident or eligible New Zealand citizen, provided the sponsor's own income is at least 50 per cent of the threshold.",
        legal: "Migration Regulations 1994, Part 2A (criteria for approval as a parent sponsor)",
      },
      {
        title: "Be the sponsor's parent and at least 18",
        detail:
          "You must be the biological, legal (including adoptive) parent, step-parent or parent-in-law of the Parent Sponsor and aged 18 or over. There is no balance of family test and no Assurance of Support for this visa.",
        legal: "Migration Regulations 1994, Sch 2 Part 870",
      },
      {
        title: "Lodge within the sponsorship window, from outside Australia",
        detail:
          "You must lodge online within six months of the sponsorship approval and be outside Australia when you apply. Permission to Apply in Australia is approved only in exceptional circumstances, such as an accident, serious illness or a natural disaster that prevents departure; with permission you must lodge within 60 days of the sponsorship approval. Convenience, childcare duties or having sold assets at home are not accepted reasons.",
        legal: "Migration Regulations 1994, Sch 1 (Sponsored Parent (Temporary) (Class RU)) and Sch 2 Part 870",
      },
      {
        title: "Genuine temporary stay and enough money",
        detail:
          "You must intend to stay only temporarily and do only what the visa allows, and must have or have access to enough money to support yourself. Evidence includes bank statements for three months, tax or pension records, ties and assets at home and a letter explaining your plans. A pending permanent parent visa application lodged before the 870 does not stop you visiting, but you cannot remain permanently on this visa.",
        legal: "Migration Regulations 1994, Sch 2 Part 870",
      },
      {
        title: "Health, health insurance and character",
        detail:
          "You must meet the health requirement, hold and maintain adequate health insurance from an Australian provider for the whole stay, and pass the character test. An Australian Federal Police complete disclosure certificate is needed if you spent 12 months or more in Australia in the last ten years, plus police certificates from every other country where you spent 12 months or more since turning 16, and Form 80.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria); Migration Act 1958, s 501; PIC 4001",
      },
      {
        title: "No debt and previous visa obligations met",
        detail:
          "Any debt to the Australian Government, including a public health debt, must be repaid or under an arrangement, and you must have complied with the obligations of any previous visa.",
        legal: "PIC 4004 (Sch 4); Migration Regulations 1994, Sch 2 Part 870",
      },
      {
        title: "For a further subclass 870: 90 days outside Australia and under the 10-year cap",
        detail:
          "A further 870 must be lodged from outside Australia (unless you hold Permission to Apply in Australia), and it cannot be granted unless you have been outside Australia for at least 90 consecutive days since your relevant departure day. Once you have held 870 visas for the cumulative maximum of ten years no further 870 can be granted.",
        legal: "Migration Regulations 1994, Sch 2 Part 870",
      },
    ],
    familyNote:
      "No family members can be included. Each parent needs their own visa application and their own first and second instalment, although one Parent Sponsor can cover up to two parents (both of their own parents, both of their partner's parents, or one of each).",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "National identity card if you have one and proof of any change of name",
          "Colour scans of every document; certification is not required for this online application",
        ],
      },
      {
        group: "Sponsor",
        items: [
          "The Sponsorship Transaction Reference Number (TRN) and approval letter for your Parent Sponsor",
          "The Permission to Apply in Australia letter, if you are lodging in Australia",
          "For the sponsor's own application: citizenship or residence evidence, relationship documents, the ATO Notice of Assessment for the most recent completed income year (tax file number blacked out), AFP and overseas police certificates and written consent to disclose convictions",
        ],
      },
      {
        group: "Genuine temporary stay and funds",
        items: [
          "Personal bank statements covering three months, tax records, pension or other regular income",
          "Evidence of ties to your home country: property, business, family commitments, previous travel history",
          "A letter stating the purpose of your stay, who you will visit and your relationship to them",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Form 80 Personal particulars for assessment including character assessment",
          "An AFP complete disclosure National Police Certificate if you spent 12 months or more in Australia in the last 10 years, and overseas police certificates for every country where you spent 12 months or more since turning 16",
          "Military service or discharge records if you served in any armed forces",
          "Health examinations if ImmiAccount asks for them, and evidence of adequate Australian health insurance",
        ],
      },
    ],
    steps: [
      {
        title: "Your child applies to be a Parent Sponsor",
        description:
          "The child lodges an Application for Family Sponsorship in ImmiAccount with their Notice of Assessment, police certificates, relationship and residence evidence, pays A$420 and agrees to the sponsorship obligations. They can be in or outside Australia. A request for Permission to Apply in Australia is made in the same form if the parent cannot leave Australia.",
        output: "A sponsorship approval letter with a Sponsorship Transaction Reference Number (TRN) and, if requested and approved, a Permission to Apply letter",
      },
      {
        title: "Choose the visa length",
        description:
          "Decide between a visa of up to three years (A$6,370 in total) or up to five years (A$12,440 in total). Either way the first instalment is A$1,515 and the balance is invoiced before grant. Time spent on 870 visas counts towards the ten-year cumulative limit.",
        output: "A decision on a 3-year or 5-year visa",
      },
      {
        title: "Lodge the visa application online within the window",
        description:
          "Apply in ImmiAccount from outside Australia within six months of the sponsorship approval (or in Australia within 60 days if you hold Permission to Apply), attach your documents and pay the first instalment. The Department does not process unpaid applications.",
        output: "An acknowledgement and a paid first instalment of A$1,515",
      },
      {
        title: "Health, biometrics and further information",
        description:
          "Complete any health examinations requested in ImmiAccount (doing them before lodgement can speed processing), provide biometrics if asked, keep your health insurance current and tell the Department of any change of passport, address, relationship or criminal charge.",
        output: "Health and character cleared and insurance in place",
      },
      {
        title: "Pay the second instalment",
        description:
          "The Department invoices the second instalment (A$4,855 for a three-year visa or A$10,925 for a five-year visa) before grant. If it is not paid the application is refused and the first instalment is not refunded.",
        output: "Receipt for the second instalment",
      },
      {
        title: "Grant and travel",
        description:
          "You can be in or outside Australia (not in immigration clearance) when the visa is decided. If you are outside Australia, do not book travel until the grant letter arrives. The visa allows multiple entries for its full period.",
        output: "A visa grant notice with grant number, start and end dates and conditions",
      },
      {
        title: "A further subclass 870, if you want to return",
        description:
          "After the visa ends, spend at least 90 consecutive days outside Australia from your relevant departure day, have your child lodge a new sponsorship (their household can hold only one at a time), then apply again from outside Australia. The ten-year cumulative limit applies.",
        output: "A new sponsorship approval and a further 870 application",
      },
    ],
    conditions: [
      { code: "8103", meaning: "You must not do paid work in Australia. Unpaid care of grandchildren or other young relatives at home, volunteering for a charity and helping at the school your grandchildren attend are allowed; unpaid work in a commercial setting or a family business is not." },
      { code: "8303", meaning: "You must not become involved in activities that are disruptive to, or that threaten harm to, the Australian community." },
      { code: "8501", meaning: "You must keep adequate health insurance for the whole of your stay in Australia." },
      { code: "8531", meaning: "You must leave Australia before your visa expires." },
      { code: "8550", meaning: "You must notify the Department of a change of details." },
      { code: "8564", meaning: "You must not engage in criminal conduct." },
      { code: "8609", meaning: "You must notify the Department of new details, such as a new address or passport." },
    ],
    costs: [
      { item: "Sponsorship application", amount: "A$420", note: "Paid by the Parent Sponsor; not refunded if the sponsorship is withdrawn or refused" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "First instalment", amount: "A$1,515", note: "Primary applicant, 1 July 2026 charge; no additional applicants" },
      { item: "Second instalment for a visa of up to 3 years", amount: "A$4,855", note: "The balance of the A$6,370 total stated by Home Affairs; invoiced before grant" },
      { item: "Second instalment for a visa of up to 5 years", amount: "A$10,925", note: "The balance of the A$12,440 total stated by Home Affairs; invoiced before grant" },
      { item: "Australian health insurance", amount: "Typical", note: "Required for the whole stay; premiums depend on age and cover" },
      { item: "Health examinations and police certificates", amount: "Typical", note: "Paid to the panel clinic, the AFP and overseas police authorities" },
      { item: "Public health debts", amount: "Sponsor's liability", note: "The Parent Sponsor must repay any outstanding public health debt the parent incurs in Australia, even after the visa ends" },
    ],
    afterGrant: [
      "You cannot do paid work. Unpaid care for grandchildren, volunteering and helping at your grandchildren's school are allowed; unpaid work in a commercial setting or a family business is not.",
      "Keep adequate Australian health insurance for the whole stay and obey all visa conditions; the Department can cancel the visa or the sponsorship if obligations are not met.",
      "If your sponsor withdraws, a new sponsorship application must be lodged within 35 days or the visa ceases; if your sponsor dies, a new sponsorship can be lodged within 90 days.",
      "You cannot apply for a permanent or temporary parent visa while you hold or have applied for this visa. To stay beyond the visa you must leave or be granted a different visa.",
      "The visa ends on the date in your grant letter, if it is cancelled, or if the sponsorship is withdrawn or cancelled and no new sponsor is approved. Leave before it expires.",
      "Your sponsor must tell the Department of certain events, keep supporting and housing you, and repay any public health debt you incur in Australia, even after you leave.",
      "If you held an 870 and were outside Australia on 1 July 2021, the 18-month extension granted under the COVID-19 concessions does not count towards the ten-year limit.",
    ],
    pathways: [
      {
        title: "Contributory Parent visa (subclass 143 and 173)",
        description: "Permanent residence with full work rights, but you must choose it before lodging an 870 because the 870 bars it.",
        href: "/visas/family/contributory-parent-visa-143-173",
      },
      {
        title: "Parent visa (subclass 103)",
        description: "The low-cost permanent parent visa with a long queue; also barred once you apply for an 870.",
        href: "/visas/family/parent-visa-103",
      },
      {
        title: "Visitor visa (subclass 600)",
        description: "Shorter family visits, including the Sponsored Family stream, without a Parent Sponsor approval or income test.",
        href: "/visas/other-visas/visitor-visa-600",
      },
      {
        title: "Contributory Aged Parent visa (subclass 864 and 884)",
        description: "An onshore permanent option for parents of Age Pension age, if no 870 has been applied for.",
        href: "/visas/family/contributory-aged-parent-visa-864-884",
      },
    ],
    risks: [
      "The sponsor failing the income test: taxable income in the most recent completed income year must reach A$83,454.80, and combined income only counts if the sponsor's own income is at least half of that.",
      "Missing the lodgement window: the visa must be lodged within six months of the sponsorship approval, or within 60 days if Permission to Apply in Australia was granted.",
      "Lodging in Australia without Permission to Apply, which is approved only in exceptional circumstances such as serious illness or a natural disaster.",
      "Applying for an 870 when the family's real goal is permanent residence, because it then blocks every permanent and temporary parent visa.",
      "Working, including unpaid work in a family business, which breaches condition 8103 and can lead to cancellation.",
      "The sponsor's own exposure: public health debts incurred by the parent remain the sponsor's liability, and a sponsor who does not meet the obligations can be barred from sponsoring again.",
      "A further 870 refused because fewer than 90 consecutive days were spent outside Australia, or the ten-year cumulative limit has been reached.",
    ],
    faqs: [
      {
        question: "How much does the subclass 870 cost?",
        answer:
          "Home Affairs states a visa of up to three years costs A$6,370 and a visa of up to five years costs A$12,440, paid in two instalments: A$1,515 when you apply and the balance (A$4,855 or A$10,925) before grant. The sponsor also pays A$420 for the sponsorship application, and the parent must hold Australian health insurance.",
      },
      {
        question: "What income does my child need to sponsor me?",
        answer:
          "Taxable income of at least A$83,454.80 in the most recent completed income year before the sponsorship application, proved by an ATO Notice of Assessment. The sponsor can combine income with their partner and/or another of your children who is an Australian citizen, permanent resident or eligible New Zealand citizen, as long as the sponsor's own income is at least half the threshold.",
      },
      {
        question: "Can I work on the 870 visa?",
        answer:
          "No. Condition 8103 prohibits paid work. You may care for grandchildren or other young relatives in a home setting, volunteer for a charity and help at the school your grandchildren attend, but you cannot do unpaid work in a commercial setting or a family business.",
      },
      {
        question: "Can I apply for the 870 while I am in Australia?",
        answer:
          "Only if your sponsor obtained Permission to Apply in Australia, which is approved in exceptional circumstances such as an accident, serious illness or a natural disaster that prevents you leaving. With permission you must lodge within 60 days of the sponsorship approval. Otherwise you must be outside Australia when you apply.",
      },
      {
        question: "Does the 870 lead to permanent residence?",
        answer:
          "No. It is a temporary visa only, and once you have applied for or hold an 870 you cannot apply for a permanent or temporary parent visa. Families who want permanent residence should compare the Contributory Parent visa before lodging an 870.",
      },
      {
        question: "Can both my parents be sponsored?",
        answer:
          "Yes. One sponsorship can cover up to two parents in a household: both of the sponsor's parents, both of the sponsor's partner's parents, or one of each. Each parent lodges a separate visa application and pays their own instalments.",
      },
      {
        question: "How soon can I come back on another 870?",
        answer:
          "You must have been outside Australia for at least 90 consecutive days since your relevant departure day, your child must hold a current sponsorship approval, and your total time on 870 visas must stay within ten years. The further visa is lodged from outside Australia unless Permission to Apply in Australia is granted.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 870 (Sponsored Parent (Temporary))", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 (Sponsored Parent (Temporary) (Class RU): application requirements and charges)", url: REGS },
      { label: "Migration Regulations 1994, Part 2A (sponsorship: approval of parent sponsors and sponsorship obligations)", url: REGS },
      { label: "Migration Act 1958, Part 2 Division 3A (ss 140E and following: approval of sponsors, sponsorship obligations and bars)", url: ACT },
      { label: "Migration Act 1958, s 501 (character)", url: ACT },
      { label: "PIC 4001, 4004 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
      { label: "Sch 8 conditions 8103, 8303, 8501, 8531, 8550, 8564 and 8609", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Sponsored Parent (Temporary) visa (subclass 870), applicant and sponsor pages", url: LISTING + "/sponsored-parent-temporary-870" },
      { label: "Home Affairs: Conditions for the subclass 870", url: CONDITIONS + "?product=870" },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Home Affairs: Character requirement", url: CHARACTER },
    ],
    related: [
      { label: "Contributory Parent visa (143 and 173)", href: "/visas/family/contributory-parent-visa-143-173" },
      { label: "Parent visa (subclass 103)", href: "/visas/family/parent-visa-103" },
      { label: "Visitor visa (subclass 600)", href: "/visas/other-visas/visitor-visa-600" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "870 visa",
      "subclass 870",
      "sponsored parent temporary visa",
      "870 visa cost 2026",
      "parent sponsor income requirement",
      "5 year parent visa australia",
      "3 year parent visa",
      "temporary parent visa australia",
      "870 visa work rights",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 6. Remaining Relative visa (subclass 115 and 835)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "remaining-relative-visa-115-835",
    category: "family",
    kind: "visa",
    subclass: "115/835",
    name: "Remaining Relative visa",
    title: "Remaining Relative visa (subclass 115 and 835)",
    seoTitle: "Remaining Relative visa 115 & 835: eligibility, cost",
    seoDescription:
      "Remaining Relative visa 115 and 835 in 2026: permanent residence when all your near relatives live in Australia, A$6,600 first instalment, capped queue.",
    intro:
      "The Remaining Relative visa is a permanent visa for a person whose only near relatives are settled in Australia as citizens, permanent residents or eligible New Zealand citizens. The subclass 115 is applied for and granted outside Australia; the subclass 835 is applied for and granted in Australia with a bridging visa. Both need a sponsoring relative, a two-year Assurance of Support, and a place in the capped Other Family visa queue.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,600 first instalment",
        note: "Primary applicant, 1 July 2026 charge; additional applicants A$3,300 (18 or over) and A$1,655 (under 18). A second instalment is invoiced before grant.",
      },
      { label: "Length of stay", value: "Permanent", note: "Work, study and Medicare; five-year travel facility." },
      {
        label: "Pathway to permanent residence",
        value: "This visa is permanent residence",
        note: "Citizenship may follow after four years of residence including 12 months as a permanent resident.",
      },
      {
        label: "Where you must be",
        value: "115: outside Australia; 835: in Australia",
        note: "At both lodgement and decision. The 835 comes with a bridging visa.",
      },
      {
        label: "Sponsor",
        value: "Your parent, sibling or step-equivalent, or their partner",
        note: "Settled, aged 18 or over, two-year support undertaking.",
      },
      {
        label: "Assurance of Support",
        value: "2 years",
        note: "Bank guarantee of A$5,000 for one adult or A$7,000 for two adults.",
      },
    ],
    whoFor: [
      "Your parents and siblings (and your partner's) all live in Australia as citizens, permanent residents or eligible New Zealand citizens, and you have no near relatives anywhere else.",
      "You are outside Australia and your parent or sibling in Australia can sponsor you for the subclass 115.",
      "You are in Australia on a substantive visa and want to apply onshore for the subclass 835 and wait on a bridging visa.",
      "You are prepared for a long, capped queue: the Department states demand for Other Family visas exceeds the places available each year.",
    ],
    eligibility: [
      {
        title: "Be a remaining relative",
        detail:
          "You and your partner must have no near relatives other than those usually resident in Australia as Australian citizens, permanent residents or eligible New Zealand citizens. Near relatives are your and your partner's parents, siblings and non-dependent children, including step-relatives. The Department will not grant the visa if you or your partner have a near relative who usually lives outside Australia, or who is in Australia on a temporary visa (bridging visas count as temporary) or unlawfully.",
        legal: "Migration Regulations 1994, reg 1.15 (remaining relative) and Sch 2 Parts 115 and 835",
      },
      {
        title: "An approved sponsor",
        detail:
          "You must be sponsored by your (or your partner's) parent, step-parent, sibling or step-sibling, or by that relative's partner who lives with them. The sponsor must be settled in Australia, aged 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen, and must undertake to provide support, accommodation and financial help for your first two years. The sponsor and their partner must never have held, or sponsored someone who was granted, a Remaining Relative visa (115 or 835), a Preferential Family visa (104) or a Family visa (806).",
        legal: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings) and Sch 2 Parts 115 and 835",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when the Department asks for it. For Remaining Relative visas the assurance lasts two years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two adults (A$10,000 if an organisation gives it).",
        legal: "Migration Regulations 1994, Sch 2 Parts 115 and 835; Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Health requirement",
        detail:
          "You and all family members applying with you, and sometimes family members who are not migrating, must meet the health requirement.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria)",
      },
      {
        title: "Character requirement",
        detail: "You and family members applying with you must pass the character test. Police certificates are requested by the Department.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Debts and immigration history",
        detail:
          "Debts to the Australian Government must be repaid or under an approved arrangement, and a previous visa cancellation or refusal is considered. Onshore 835 applicants can be affected by the section 48 bar.",
        legal: "PIC 4004 (Sch 4); Migration Act 1958, s 48",
      },
      {
        title: "Values statement and children's best interests",
        detail: "Applicants aged 18 or over sign the Australian Values Statement. A child's visa is not granted if that is not in the child's best interests.",
        legal: "PIC 4019 (Sch 4)",
      },
      {
        title: "Location at lodgement and decision",
        detail:
          "Subclass 115 applicants must be outside Australia when they apply and when the visa is decided. Subclass 835 applicants must be in Australia at both points and receive a bridging visa; do not cancel your current visa.",
        legal: "Migration Regulations 1994, Sch 2 Parts 115 and 835 (circumstances applicable to grant)",
      },
    ],
    familyNote:
      "You can include members of your family unit (partner and dependent children) when you apply, and add them at any time before a decision. Every family member must be listed on the form whether or not they are migrating, because the near relative test looks at your partner's family too. All applicants must meet health and character.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "National identity card if you have one and evidence of any change of name",
          "Certified copies only for the paper application; keep the originals",
        ],
      },
      {
        group: "Sponsor and relationship",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by your sponsor",
          "Sponsor's citizenship certificate, passport or visa and evidence they are settled in Australia",
          "Birth, marriage, adoption or death certificates, or officially issued family books, proving the relationship",
        ],
      },
      {
        group: "Remaining relative evidence",
        items: [
          "Evidence of the citizenship or permanent residence and Australian address of each near relative of you and your partner",
          "Death certificates or other evidence for near relatives who have died",
          "A full family composition for both you and your partner",
        ],
      },
      {
        group: "Family members",
        items: [
          "Identity, relationship and character documents for each dependant, with proof of dependency for children aged 18 or over",
          "Form 1229 or a statutory declaration from anyone with legal responsibility for a child under 18 who is not migrating",
          "Marriage certificate or 12 months of de facto evidence for a partner",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates and health examinations when the Department asks",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Map every near relative of you and your partner",
        description:
          "List the parents, siblings and non-dependent children of both of you, with their citizenship or visa status and where they live. One near relative living overseas, or in Australia on a temporary or bridging visa, means the visa cannot be granted.",
        output: "A family composition that satisfies the remaining relative test",
      },
      {
        title: "Confirm the sponsor is eligible",
        description:
          "The sponsor must be settled, aged 18 or over and a citizen, permanent resident or eligible New Zealand citizen, and neither the sponsor nor their partner can have previously held or sponsored a 115, 835, 104 or 806 visa. The sponsor completes Form 40.",
        output: "A completed Form 40 and the sponsor's status and relationship evidence",
      },
      {
        title: "Lodge on paper and pay the first instalment",
        description:
          "Complete Form 47OF Application for migration to Australia by other family members, pay the first instalment through the ImmiAccount payment portal, include the receipt, and post or courier the application with certified copies to the Parent, Child and Other Family Processing Centre in Perth. Subclass 115 applicants must be outside Australia; subclass 835 applicants must be in Australia and receive a bridging visa.",
        output: "An acknowledgement letter, a paid first instalment of A$6,600 and (for the 835) a bridging visa",
      },
      {
        title: "Import the application into ImmiAccount",
        description:
          "After the acknowledgement letter arrives, import the paper application into ImmiAccount to attach documents, receive messages and update details.",
        output: "The application linked to your ImmiAccount",
      },
      {
        title: "Wait in the Other Family visa queue",
        description:
          "Applications are capped and queued. Keep your details current, stay lawful (subclass 835 applicants on the bridging visa; subclass 115 applicants outside Australia) and tell the Department about any change in your family, such as a near relative moving overseas.",
        output: "A valid place in the queue with up-to-date details",
      },
      {
        title: "Final assessment, Assurance of Support and second instalment",
        description:
          "When the application is assessed the Department requests health examinations, police certificates and the Assurance of Support, then invoices the second instalment after all other requirements are met. The visa is not granted until it is paid.",
        output: "Cleared health and character, an accepted Assurance of Support and a paid second instalment",
      },
      {
        title: "Grant and first entry",
        description:
          "The 115 is granted while you are outside Australia with a first entry date generally 12 months from grant; the 835 is granted in Australia. The travel facility lasts five years.",
        output: "A visa grant notice with grant number, start date and conditions",
      },
    ],
    conditions: [
      { code: "8502", meaning: "A family member must not arrive in Australia before the main applicant named in their visa (subclass 115)." },
      { code: "8515", meaning: "An applicant granted the visa as a single person must not marry or enter a de facto relationship before first entering Australia (subclass 115)." },
    ],
    costs: [
      { item: "First instalment", amount: "A$6,600", note: "Primary applicant, 1 July 2026 charge, subclass 115 or 835" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Additional applicant", amount: "A$3,300 / A$1,655", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Second instalment", amount: "Invoiced before grant", note: "Set by Schedule 1 and charged per applicant after all other requirements are met; the visa page does not state the amount, so check the current visa pricing page or the invoice" },
      { item: "Assurance of Support bank guarantee", amount: "A$5,000", note: "Two-year assurance, one adult; A$7,000 for two adults; A$10,000 for an organisation. Returned at the end of the period if no recoverable payments were made." },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date on a subclass 115 (generally 12 months from grant). For citizenship purposes permanent residence starts when you enter, or on grant if you were already a permanent resident when you last left.",
      "The travel facility lasts five years; after that you need a Resident Return visa or citizenship to return as a permanent resident.",
      "Your sponsor's undertaking to support and house you lasts two years from your first entry on the visa, and the Assurance of Support also lasts two years.",
      "Newly arrived residents face waiting periods for most Services Australia payments.",
      "Once you hold the visa, the sponsor and their partner cannot sponsor another Remaining Relative applicant.",
    ],
    pathways: [
      {
        title: "Australian citizenship by conferral",
        description: "Available after four years of lawful residence including 12 months as a permanent resident.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
      {
        title: "Carer visa (subclass 116 and 836)",
        description: "If an Australian relative needs long-term care, the Carer visa has no remaining relative test and a lower first instalment.",
        href: "/visas/family/carer-visa-116-836",
      },
      {
        title: "Aged Dependent Relative visa (subclass 114 and 838)",
        description: "For a single relative of Age Pension age who has depended on an Australian relative for at least three years.",
        href: "/visas/family/aged-dependent-relative-visa-114-838",
      },
      {
        title: "Resident Return visa (subclass 155 and 157)",
        description: "Needed to travel after the five-year travel facility ends.",
        href: "/visas/other-visas/resident-return-visa-155-157",
      },
    ],
    risks: [
      "A near relative of you or your partner living outside Australia, or in Australia on a temporary or bridging visa, which makes the visa impossible to grant.",
      "A change in the family during the long wait, such as a sibling moving overseas or a parent's permanent residence lapsing, which can defeat the test at decision time.",
      "A sponsor who, or whose partner, has previously held or sponsored a 115, 835, 104 or 806 visa.",
      "Lodging the 115 while in Australia or the 835 while outside Australia; location is fixed at both lodgement and decision.",
      "Health or character problems for any applicant, assessed at the end of a long queue.",
      "Not obtaining the Assurance of Support or not paying the second instalment when invoiced.",
    ],
    faqs: [
      {
        question: "Who counts as a near relative?",
        answer:
          "Your parents, siblings and non-dependent children, and your partner's parents, siblings and non-dependent children, including step-relatives. You qualify only if every near relative is usually resident in Australia as a citizen, permanent resident or eligible New Zealand citizen. A relative in Australia on a temporary or bridging visa, or unlawfully, counts against you.",
      },
      {
        question: "How much does the Remaining Relative visa cost?",
        answer:
          "The first instalment is A$6,600 for the main applicant (1 July 2026 charge), plus A$3,300 for each additional applicant aged 18 or over and A$1,655 for each child under 18. A second instalment is invoiced before grant after all other requirements are met. An Assurance of Support with a bank guarantee of A$5,000 (one adult) or A$7,000 (two adults) is also required.",
      },
      {
        question: "Can I wait in Australia?",
        answer:
          "Only on the subclass 835, which is lodged and decided in Australia and comes with a bridging visa. The subclass 115 must be lodged and decided while you are outside Australia.",
      },
      {
        question: "How long does it take?",
        answer:
          "The Department does not publish a processing time; Other Family visas are capped and queued, and it states demand exceeds the places available each year. Use the Department's processing time tool for an indication and expect a long wait.",
      },
      {
        question: "Can my sponsor withdraw?",
        answer:
          "Before a decision, yes, in writing; the Department may then refuse the visa. After grant the sponsor cannot withdraw, and if the sponsor does not meet the two-year undertaking the visa can be cancelled.",
      },
      {
        question: "Is a second instalment really payable on this visa?",
        answer:
          "Yes. Home Affairs states you pay in two instalments: the first when you apply and the second when invoiced after all other requirements are met. The visa page does not state the amount, so check the current visa pricing page or the invoice.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 115 (Remaining Relative)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 835 (Remaining Relative)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1123A (Other Family (Migrant) (Class BO)) and item 1123B (Other Family (Residence) (Class BU))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.15 (remaining relative) and reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, ss 85 and 86 (capping), s 48 and s 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Remaining Relative visa (subclass 115), applicant and sponsor pages", url: LISTING + "/remaining-relative-115" },
      { label: "Home Affairs: Remaining Relative visa (subclass 835)", url: LISTING + "/remaining-relative-835" },
      { label: "Home Affairs: Conditions for the subclass 115", url: CONDITIONS + "?product=115" },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Carer visa (116 and 836)", href: "/visas/family/carer-visa-116-836" },
      { label: "Aged Dependent Relative visa (114 and 838)", href: "/visas/family/aged-dependent-relative-visa-114-838" },
      { label: "Orphan Relative visa (117 and 837)", href: "/visas/family/orphan-relative-visa-117-837" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "115 visa",
      "subclass 115",
      "remaining relative visa",
      "835 visa",
      "subclass 835",
      "remaining relative visa requirements",
      "remaining relative visa cost 2026",
      "near relative australia visa",
      "other family visa queue",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 7. Carer visa (subclass 116 and 836)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "carer-visa-116-836",
    category: "family",
    kind: "visa",
    subclass: "116/836",
    name: "Carer visa",
    title: "Carer visa (subclass 116 and 836)",
    seoTitle: "Carer visa 116 & 836: Bupa certificate, sponsor, cost",
    seoDescription:
      "Carer visa 116 and 836 in 2026: permanent residence to care for an Australian relative with a long-term condition, Bupa assessment, A$2,720 first instalment.",
    intro:
      "The Carer visa is a permanent visa for a relative who will provide ongoing, substantial care to an Australian citizen, permanent resident or eligible New Zealand citizen (or a member of their household) who has a long-term medical condition and no reasonable access to care in Australia. The subclass 116 is lodged and granted outside Australia; the subclass 836 is lodged and granted in Australia. The person needing care must be assessed by Bupa Medical Visa Services before the application can be accepted.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$2,720 first instalment",
        note: "Primary applicant, 1 July 2026 charge; additional applicants A$1,365 (18 or over) and A$680 (under 18). A second instalment is invoiced before grant.",
      },
      { label: "Length of stay", value: "Permanent", note: "Work, study and Medicare; five-year travel facility." },
      {
        label: "Pathway to permanent residence",
        value: "This visa is permanent residence",
        note: "Citizenship may follow after four years of residence including 12 months as a permanent resident.",
      },
      {
        label: "Where you must be",
        value: "116: outside Australia; 836: in Australia",
        note: "At both lodgement and decision. The 836 comes with a bridging visa.",
      },
      {
        label: "Sponsor",
        value: "The relative who needs care, or their partner who lives with them",
        note: "Settled, aged 18 or over, two-year support undertaking from grant.",
      },
      {
        label: "Care assessment",
        value: "Bupa Medical Visa Services certificate",
        note: "The assessment must at least have begun before you lodge, and the certificate must be provided within three months.",
      },
    ],
    whoFor: [
      "Your parent, sibling, child or other relative in Australia has a long-term or permanent condition and needs help with daily life for at least two years, and no other relative or Australian service can reasonably provide it.",
      "You are willing and able to move to Australia and provide ongoing, substantial care yourself, and you understand the condition and its care needs.",
      "You are outside Australia and will apply for the subclass 116, or you are in Australia on a substantive visa and will apply for the subclass 836.",
      "You cannot pay a large second instalment: the Department can reduce the carer's second instalment to nil for severe financial hardship.",
    ],
    eligibility: [
      {
        title: "Be a carer of an Australian relative",
        detail:
          "You must be willing and able to provide ongoing substantial care and continuing support to your Australian relative who needs care, or to a member of their family who lives with them and needs care. Relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces and nephews, and step-relatives. You should fully understand the medical condition and the care it needs.",
        legal: "Migration Regulations 1994, reg 1.15AA (carer), reg 1.03 (relative) and Sch 2 Parts 116 and 836",
      },
      {
        title: "The person needing care is assessed by Bupa Medical Visa Services",
        detail:
          "The relative (or household member) must be assessed by Bupa Medical Visa Services as having a medical condition that is long term or permanent and that means they need help with the practical aspects of daily life for at least two years. The Department will not accept the application unless the assessment process has at least begun, and it will not grant the visa without the certificate; if it is not lodged with the application it should be provided within three months.",
        legal: "Migration Regulations 1994, reg 1.15AA and Sch 2 Parts 116 and 836",
      },
      {
        title: "No reasonable access to care in Australia",
        detail:
          "The person needing care must be unable to reasonably obtain the care from another relative in Australia or from Australian welfare, hospital, nursing or community services. Written evidence of what was sought and why it is not available is required.",
        legal: "Migration Regulations 1994, reg 1.15AA",
      },
      {
        title: "An approved sponsor",
        detail:
          "The sponsor is the relative who needs care, or the relative's spouse or de facto partner who lives with them. The sponsor must be settled in Australia, aged 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen, and must undertake to provide support, accommodation and financial help for two years after the visa is granted, for you and any family members granted the visa. Form 40 is required, and the Department may ask the sponsor for income and tax records.",
        legal: "Migration Regulations 1994, reg 1.20 (sponsorship undertakings) and Sch 2 Parts 116 and 836",
      },
      {
        title: "Subclass 836: hold or have held a substantive visa",
        detail:
          "An onshore applicant must hold a substantive visa other than a Transit visa (subclass 771), or have held one and lodged the 836 within the time allowed. Applicants without a substantive visa may need to meet Schedule 3 criteria.",
        legal: "Migration Regulations 1994, Sch 2 Part 836 and Sch 3",
      },
      {
        title: "Health requirement",
        detail:
          "You and family members applying with you, and sometimes family members not migrating, must meet the health requirement.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria)",
      },
      {
        title: "Character requirement",
        detail: "You and family members aged 16 or over who apply with you must pass the character test. Do not arrange police certificates until the Department asks.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Debts, immigration history, values and children",
        detail:
          "Debts to the Australian Government (including those of non-migrating family members) must be repaid or under an arrangement; past refusals or cancellations are considered and the section 48 bar can affect onshore applicants; adults sign the Australian Values Statement; the visa may be refused for a child if grant is not in the child's best interests.",
        legal: "PIC 4004 and 4019 (Sch 4); Migration Act 1958, s 48",
      },
      {
        title: "Assurance of Support if requested",
        detail:
          "The Department states it might ask for an Assurance of Support. If it does, Services Australia assesses the assurer's income and requires a bank guarantee; the period for visas other than parent, contributory parent and remaining relative visas is four years.",
        legal: "Migration Regulations 1994, Sch 2 Parts 116 and 836; Social Security Act 1991, Chapter 2C",
      },
    ],
    familyNote:
      "You can include members of your family unit (partner and dependent children) when you apply. They must meet health and character, and the sponsor's two-year undertaking covers them. The hardship reduction of the second instalment applies only to the carer, not to family members.",
    documents: [
      {
        group: "Identity",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "National identity card if you have one and evidence of any change of name",
          "Certified copies for the paper application; do not send originals",
        ],
      },
      {
        group: "Care needs",
        items: [
          "The Carer Visa Assessment Certificate from Bupa Medical Visa Services, or a Bupa letter confirming the assessment has begun",
          "Written evidence that the person needing care cannot reasonably obtain care from another relative or from Australian welfare, hospital, nursing or community services",
          "Evidence of your understanding of the condition and your ability to provide the care",
        ],
      },
      {
        group: "Sponsor and relationship",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by the sponsor",
          "Sponsor's citizenship or residence evidence and proof they are settled and usually resident in Australia",
          "Birth, marriage, adoption or death certificates or family books proving the relationship, and the sponsor's income or tax records if requested",
        ],
      },
      {
        group: "Family members",
        items: [
          "Identity, relationship and character documents for each dependant, with proof of dependency for children aged 18 or over",
          "Form 1229 or a statutory declaration from anyone with legal responsibility for a child under 18 who is not migrating",
        ],
      },
      {
        group: "Health and character",
        items: [
          "Health examinations when the Department asks",
          "Police certificates only when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Start the Bupa Medical Visa Services assessment",
        description:
          "The person needing care arranges an assessment with Bupa Medical Visa Services. The Department will not accept the visa application unless there is evidence this process has at least begun, and it will not grant the visa without the certificate.",
        output: "A Carer Visa Assessment Certificate, or a Bupa letter confirming the assessment is under way",
      },
      {
        title: "Document the gap in care",
        description:
          "Gather written evidence of the care the person needs, which relatives in Australia cannot provide it and why, and what welfare, hospital, nursing and community services were approached and why they are not reasonably available.",
        output: "A written statement with supporting letters and records on access to care",
      },
      {
        title: "Sponsor completes Form 40",
        description:
          "The relative needing care (or their partner who lives with them) completes Form 40 and gathers identity, residence, relationship and, if needed, financial documents. The sponsor must be settled, aged 18 or over and a citizen, permanent resident or eligible New Zealand citizen.",
        output: "A completed Form 40 with the sponsor's evidence",
      },
      {
        title: "Lodge on paper and pay the first instalment",
        description:
          "Complete Form 47OF Application for migration to Australia by other family members, pay the first instalment through the ImmiAccount payment portal, include the receipt, and send the application with certified copies to the Child and Other Family Processing Centre in Perth. Subclass 116 applicants must be outside Australia; subclass 836 applicants must be in Australia holding (or having recently held) a substantive visa, and receive a bridging visa.",
        output: "An acknowledgement letter, a paid first instalment of A$2,720 and (for the 836) a bridging visa",
      },
      {
        title: "Provide the Bupa certificate and import the application",
        description:
          "If the certificate was not lodged with the application, provide it within three months. Import the paper application into ImmiAccount to attach documents and receive messages.",
        output: "The Bupa certificate on file and the application linked to ImmiAccount",
      },
      {
        title: "Wait in the Other Family visa queue",
        description:
          "Carer visas are capped and queued. Stay lawful, keep your details current and tell the Department if the care situation or the family changes.",
        output: "A valid place in the queue with up-to-date details",
      },
      {
        title: "Final assessment and second instalment",
        description:
          "The Department requests health examinations and police certificates (and an Assurance of Support if it decides one is needed), then invoices the second instalment after all other requirements are met. You can ask in writing for the carer's second instalment to be reduced to nil if paying it would cause you or the person you care for severe financial hardship.",
        output: "Cleared health and character and a paid or waived second instalment",
      },
      {
        title: "Grant and first entry",
        description:
          "The 116 is granted while you are outside Australia with a first entry date generally 12 months from grant; the 836 is granted in Australia. Permanent residence for citizenship purposes starts when you enter on the 116 or on grant of the 836.",
        output: "A visa grant notice with grant number, start date and conditions",
      },
    ],
    conditions: [
      { code: "8502", meaning: "A family member must not arrive in Australia before the main applicant named in their visa (subclass 116)." },
      { code: "8515", meaning: "An applicant granted the visa as a single person must not marry or enter a de facto relationship before first entering Australia (subclass 116)." },
    ],
    costs: [
      { item: "First instalment", amount: "A$2,720", note: "Primary applicant, 1 July 2026 charge, subclass 116 or 836" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Additional applicant", amount: "A$1,365 / A$680", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Second instalment", amount: "Invoiced before grant", note: "Charged after all other requirements are met; the Department can reduce the carer's second instalment to nil for severe financial hardship, but not a family member's. The visa page does not state the amount." },
      { item: "Bupa Medical Visa Services assessment", amount: "Typical", note: "Paid to Bupa Medical Visa Services by the person being assessed" },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date on a subclass 116 (generally 12 months from grant).",
      "The sponsor's undertaking to support, house and financially assist you and any family members granted the visa lasts two years from grant; if it is not met the visa can be cancelled.",
      "The travel facility lasts five years; after that you need a Resident Return visa or citizenship to return as a permanent resident.",
      "You can work, study, enrol in Medicare and sponsor eligible relatives.",
      "Newly arrived residents face waiting periods for most Services Australia payments.",
    ],
    pathways: [
      {
        title: "Australian citizenship by conferral",
        description: "Available after four years of lawful residence including 12 months as a permanent resident.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
      {
        title: "Remaining Relative visa (subclass 115 and 835)",
        description: "If all your near relatives live in Australia, this permanent visa does not depend on anyone's medical condition.",
        href: "/visas/family/remaining-relative-visa-115-835",
      },
      {
        title: "Aged Dependent Relative visa (subclass 114 and 838)",
        description: "For a single relative of Age Pension age who has depended on an Australian relative for at least three years.",
        href: "/visas/family/aged-dependent-relative-visa-114-838",
      },
      {
        title: "Visitor visa (subclass 600)",
        description: "A short-term way to help a relative while a Carer visa is prepared, without work rights.",
        href: "/visas/other-visas/visitor-visa-600",
      },
    ],
    risks: [
      "Lodging before the Bupa Medical Visa Services assessment has begun: the Department will not accept the application.",
      "A Bupa assessment that does not find a long-term condition requiring help with daily life for at least two years.",
      "Weak evidence on access to care: if another relative in Australia or an Australian service could reasonably provide the care, the visa is refused.",
      "The sponsor not living with the relative who needs care when the sponsor is that relative's partner.",
      "Subclass 836 applicants without a substantive visa, who may face Schedule 3 criteria or the section 48 bar.",
      "Health or character problems for any applicant, assessed at the end of a long queue, and a second instalment not paid or waived.",
    ],
    faqs: [
      {
        question: "Who can I care for on a Carer visa?",
        answer:
          "Your relative who is an Australian citizen, permanent resident or eligible New Zealand citizen, or a member of their family who lives with them. The person must have a long-term or permanent medical condition that means they need help with the practical aspects of daily life for at least two years, confirmed by Bupa Medical Visa Services.",
      },
      {
        question: "What is the Bupa certificate and when do I need it?",
        answer:
          "It is the Carer Visa Assessment Certificate issued by Bupa Medical Visa Services after assessing the person who needs care. The Department will not accept the application unless the assessment has at least begun, and if the certificate is not lodged with the application it should be provided within three months. The visa cannot be granted without it.",
      },
      {
        question: "How much does the Carer visa cost?",
        answer:
          "The first instalment is A$2,720 for the main applicant (1 July 2026 charge), plus A$1,365 for each additional applicant aged 18 or over and A$680 for each child under 18. A second instalment is invoiced before grant; the Department can reduce the carer's second instalment to nil for severe financial hardship, but not a family member's.",
      },
      {
        question: "Can I apply while I am in Australia?",
        answer:
          "Yes, for the subclass 836, if you hold a substantive visa (other than a Transit visa) or held one and apply within the time allowed. You must be in Australia at lodgement and decision and receive a bridging visa. The subclass 116 must be lodged and decided while you are outside Australia.",
      },
      {
        question: "Does the sponsor have to show income?",
        answer:
          "The sponsor undertakes to provide support, accommodation and financial help for two years after grant, and the Department states it may ask for income records, tax records or other proof that the sponsor can support you. It may also request an Assurance of Support.",
      },
      {
        question: "How long does the Carer visa take?",
        answer:
          "The Department does not publish a fixed processing time. Carer visas are capped and queued with the other Other Family visas, and the Department states demand exceeds the places available each year. Use its processing time tool for an indication.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 116 (Carer)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 836 (Carer)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1123A (Other Family (Migrant) (Class BO)) and item 1123B (Other Family (Residence) (Class BU))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.15AA (carer), reg 1.03 (relative) and reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Regulations 1994, Sch 3 (criteria for onshore applicants without a substantive visa)", url: REGS },
      { label: "Migration Act 1958, ss 85 and 86 (capping), s 48 and s 501", url: ACT },
      { label: "PIC 4001, 4004, 4019 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Carer visa (subclass 116), applicant and sponsor pages", url: LISTING + "/carer-116" },
      { label: "Home Affairs: Carer visa (subclass 836)", url: LISTING + "/carer-836" },
      { label: "Home Affairs: Conditions for the subclass 116", url: CONDITIONS + "?product=116" },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Home Affairs: Character requirement", url: CHARACTER },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
    ],
    related: [
      { label: "Remaining Relative visa (115 and 835)", href: "/visas/family/remaining-relative-visa-115-835" },
      { label: "Aged Dependent Relative visa (114 and 838)", href: "/visas/family/aged-dependent-relative-visa-114-838" },
      { label: "Schedule 3 criteria", href: "/visas/appeals-and-review/schedule-3-criteria" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "116 visa",
      "subclass 116",
      "carer visa australia",
      "836 visa",
      "subclass 836",
      "carer visa requirements",
      "bupa medical visa services carer certificate",
      "carer visa cost 2026",
      "carer visa sponsor",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 8. Aged Dependent Relative visa (subclass 114 and 838)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "aged-dependent-relative-visa-114-838",
    category: "family",
    kind: "visa",
    subclass: "114/838",
    name: "Aged Dependent Relative visa",
    title: "Aged Dependent Relative visa (subclass 114 and 838)",
    seoTitle: "Aged Dependent Relative visa 114 & 838: rules, cost",
    seoDescription:
      "Aged Dependent Relative visa 114 and 838 in 2026: permanent residence for a single relative of Age Pension age dependent for 3 years, A$6,600 first instalment.",
    intro:
      "The Aged Dependent Relative visa is a permanent visa for a single person of Australian Age Pension age who has depended on a relative in Australia for basic needs for at least three years. The subclass 114 is lodged and granted outside Australia; the subclass 838 is lodged and granted in Australia with a bridging visa. Both need a sponsoring relative, a four-year Assurance of Support and a place in the capped Other Family visa queue.",
    factsAsAt: FACTS_AS_AT,
    permanent: true,
    tags: ["Permanent", "Family sponsor required", "Apply in or outside Australia"],
    keyFacts: [
      {
        label: "Government fee",
        value: "A$6,600 first instalment",
        note: "Primary applicant, 1 July 2026 charge; additional applicants A$3,300 (18 or over) and A$1,655 (under 18). A second instalment is invoiced before grant.",
      },
      { label: "Length of stay", value: "Permanent", note: "Work, study and Medicare; five-year travel facility." },
      {
        label: "Pathway to permanent residence",
        value: "This visa is permanent residence",
        note: "Citizenship may follow after four years of residence including 12 months as a permanent resident.",
      },
      {
        label: "Where you must be",
        value: "114: outside Australia; 838: in Australia",
        note: "At both lodgement and decision. The 838 comes with a bridging visa.",
      },
      {
        label: "Age, dependency and relationship status",
        value: "Age Pension age (67), single, dependent for 3 years",
        note: "Dependent on your Australian relative for food, shelter and clothing for at least the three years before you apply.",
      },
      {
        label: "Sponsor",
        value: "Your relative or your relative's partner",
        note: "Settled, aged 18 or over, two-year support undertaking; four-year Assurance of Support.",
      },
    ],
    whoFor: [
      "You have reached Age Pension age, you have no spouse or de facto partner, and a child, sibling, niece, nephew or other relative in Australia has been paying for your food, housing and clothing for at least three years.",
      "You are outside Australia and your relative can sponsor you for the subclass 114, or you are in Australia on a visa without a no further stay condition and can apply for the subclass 838.",
      "You are dependent because a disability prevents you from working.",
      "You are prepared for a long, capped queue and a four-year Assurance of Support.",
    ],
    eligibility: [
      {
        title: "Age Pension age",
        detail:
          "You must be old enough to receive the Australian Age Pension when you apply. Services Australia states Age Pension age is 67 years or older.",
        legal: "Migration Regulations 1994, reg 1.03 (aged dependent relative) and Sch 2 Parts 114 and 838",
      },
      {
        title: "No partner",
        detail: "You must have no spouse or de facto partner. A widowed, divorced or never-partnered applicant can qualify; a partnered applicant cannot.",
        legal: "Migration Regulations 1994, reg 1.03 (aged dependent relative)",
      },
      {
        title: "Dependent on your Australian relative for at least three years",
        detail:
          "You must have been dependent on your relative in Australia for basic needs such as food, shelter and clothing for at least three years before you apply (the subclass 838 page refers to the last three years). Dependency can arise because a disability prevents you from working. Evidence includes bank statements, money transfers and rent receipts showing how long the support has lasted.",
        legal: "Migration Regulations 1994, reg 1.03 (aged dependent relative) and reg 1.05A (dependent)",
      },
      {
        title: "An approved sponsor",
        detail:
          "You must be sponsored by your relative or your relative's partner. Relatives include children, siblings, grandchildren, nieces, nephews and step-relatives. The sponsor must be settled in Australia, aged 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen, and must undertake to provide support, accommodation and financial help for your first two years in Australia. Form 40 is required.",
        legal: "Migration Regulations 1994, reg 1.03 (relative), reg 1.20 (sponsorship undertakings) and Sch 2 Parts 114 and 838",
      },
      {
        title: "An Assurance of Support",
        detail:
          "You must be able to obtain an Assurance of Support when the Department asks for it. For this visa the assurance runs for four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two adults (A$10,000 if an organisation gives it).",
        legal: "Migration Regulations 1994, Sch 2 Parts 114 and 838; Social Security Act 1991, Chapter 2C",
      },
      {
        title: "Subclass 838: no no-further-stay condition",
        detail:
          "The visa you hold when you apply onshore must not carry condition 8503; check VEVO. You and any family members applying with you must be in Australia, but not in immigration clearance, when you apply and when the visa is decided.",
        legal: "Migration Regulations 1994, Sch 2 Part 838; Migration Act 1958, s 46(1A)",
      },
      {
        title: "Health requirement",
        detail: "You and family members applying with you, and sometimes family members not migrating, must meet the health requirement.",
        legal: "Migration Regulations 1994, Sch 4 (health public interest criteria)",
      },
      {
        title: "Character requirement",
        detail: "You and family members applying with you must pass the character test. Police certificates are requested by the Department.",
        legal: "Migration Act 1958, s 501; PIC 4001 (Sch 4)",
      },
      {
        title: "Debts, immigration history and children",
        detail:
          "Debts to the Australian Government must be repaid or under an approved arrangement, past refusals or cancellations are considered and the section 48 bar can affect onshore applicants, and a child's visa is not granted if that is not in the child's best interests.",
        legal: "PIC 4004 (Sch 4); Migration Act 1958, s 48",
      },
    ],
    familyNote:
      "For this visa your family members are your dependent children and step-children only; a partner cannot be included because you must have no partner. Dependants can be included when you apply or added any time before a decision, must be listed whether or not they are migrating, and must meet health and character. On the subclass 838 they must be in Australia when you apply.",
    documents: [
      {
        group: "Identity and age",
        items: [
          "Passport pages with photo, personal details and issue and expiry dates",
          "Birth certificate or other evidence of your date of birth",
          "Evidence that you have no partner, such as a divorce decree or your spouse's death certificate where applicable",
        ],
      },
      {
        group: "Sponsor and relationship",
        items: [
          "Form 40 Sponsorship for migration to Australia completed by the sponsor",
          "Sponsor's citizenship certificate, passport or visa and evidence they are settled in Australia",
          "Birth, marriage, adoption or death certificates or family books proving the relationship",
        ],
      },
      {
        group: "Dependency",
        items: [
          "Bank statements, money transfer records and rent receipts showing your relative has paid for your basic needs",
          "Evidence of how long the support has lasted (at least three years before applying)",
          "Medical evidence if a disability prevents you from working",
        ],
      },
      {
        group: "Family members",
        items: [
          "Identity, relationship and character documents for each dependent child, with proof of dependency for children aged 18 or over",
        ],
      },
      {
        group: "Health, character and Assurance of Support",
        items: [
          "Police certificates and health examinations when the Department asks",
          "Assurance of Support accepted by Services Australia, provided when requested",
        ],
      },
    ],
    steps: [
      {
        title: "Check age, relationship status and three years of dependency",
        description:
          "Confirm you have reached Age Pension age, have no partner, and can show three years of reliance on your Australian relative for food, shelter and clothing with bank and transfer records.",
        output: "Evidence of age, single status and three years of dependency",
      },
      {
        title: "Sponsor completes Form 40",
        description:
          "Your relative or their partner completes Form 40 and gathers residence, settlement and relationship evidence. The sponsor must be settled, aged 18 or over and a citizen, permanent resident or eligible New Zealand citizen.",
        output: "A completed Form 40 with the sponsor's evidence",
      },
      {
        title: "Lodge on paper and pay the first instalment",
        description:
          "Complete Form 47OF Application for migration to Australia by other family members, pay the first instalment through the ImmiAccount payment portal, include the receipt, and post or courier the application with certified copies to the Parent, Child and Other Family Processing Centre in Perth. Subclass 114 applicants must be outside Australia; subclass 838 applicants must be in Australia on a visa without condition 8503 and receive a bridging visa.",
        output: "An acknowledgement letter, a paid first instalment of A$6,600 and (for the 838) a bridging visa",
      },
      {
        title: "Import the application into ImmiAccount",
        description: "After the acknowledgement letter arrives, import the paper application into ImmiAccount to attach documents, receive messages and update your details.",
        output: "The application linked to your ImmiAccount",
      },
      {
        title: "Wait in the Other Family visa queue",
        description:
          "Applications are capped and queued. Keep your details current, stay lawful and keep evidence of continuing dependency, because the criteria are assessed again at decision.",
        output: "A valid place in the queue with up-to-date details",
      },
      {
        title: "Final assessment, Assurance of Support and second instalment",
        description:
          "The Department requests health examinations, police certificates and the Assurance of Support, then invoices the second instalment after all other requirements are met. The visa is not granted until it is paid.",
        output: "Cleared health and character, an accepted Assurance of Support and a paid second instalment",
      },
      {
        title: "Grant and first entry",
        description:
          "The 114 is granted while you are outside Australia with a first entry date generally 12 months from grant; the 838 is granted in Australia. The travel facility lasts five years.",
        output: "A visa grant notice with grant number, start date and conditions",
      },
    ],
    conditions: [
      { code: "8502", meaning: "A family member must not arrive in Australia before the main applicant named in their visa (subclass 114)." },
      { code: "8515", meaning: "An applicant granted the visa as a single person must not marry or enter a de facto relationship before first entering Australia (subclass 114)." },
    ],
    costs: [
      { item: "First instalment", amount: "A$6,600", note: "Primary applicant, 1 July 2026 charge, subclass 114 or 838" },
      { item: "Pacific Island and Timor-Leste concession", amount: "Lower charge", note: "From 1 July 2026, for eligible citizens, based on the main applicant's passport" },
      { item: "Additional applicant", amount: "A$3,300 / A$1,655", note: "Aged 18 or over / under 18, first instalment" },
      { item: "Second instalment", amount: "Invoiced before grant", note: "Set by Schedule 1 and charged after all other requirements are met; the visa page does not state the amount, so check the current visa pricing page or the invoice" },
      { item: "Assurance of Support bank guarantee", amount: "A$5,000", note: "Four-year assurance, one adult; A$7,000 for two adults; A$10,000 for an organisation. Returned at the end of the period if no recoverable payments were made." },
      { item: "Health examinations, police certificates and translations", amount: "Typical", note: "Paid to the panel clinic, police authorities and NAATI translators when requested" },
      { item: "ART review application fee if refused", amount: "A$3,727", note: "Administrative Review Tribunal fee from 1 July 2026; 50 per cent reduction for financial hardship" },
    ],
    afterGrant: [
      "Enter Australia before the first entry date on a subclass 114 (generally 12 months from grant). For citizenship purposes permanent residence starts when you enter, or on grant if you were already a permanent resident when you last left Australia.",
      "The sponsor's undertaking to support and house you lasts two years from your first entry on the visa; the Assurance of Support lasts four years and any recoverable payments become the assurer's debt.",
      "The travel facility lasts five years; after that you need a Resident Return visa or citizenship to return as a permanent resident.",
      "Newly arrived residents face waiting periods for most Services Australia payments, including Age Pension, which has its own residence rules.",
      "You can work, study, enrol in Medicare and sponsor eligible relatives.",
    ],
    pathways: [
      {
        title: "Australian citizenship by conferral",
        description: "Available after four years of lawful residence including 12 months as a permanent resident.",
        href: "/visas/other-visas/australian-citizenship-by-conferral",
      },
      {
        title: "Parent visas",
        description: "If the Australian relative is your child, compare the Parent, Aged Parent and Contributory Parent visas, which do not require three years of dependency or single status.",
        href: "/visas/family/aged-parent-visa-804",
      },
      {
        title: "Remaining Relative visa (subclass 115 and 835)",
        description: "If all your near relatives live in Australia, this visa has no age or dependency test.",
        href: "/visas/family/remaining-relative-visa-115-835",
      },
      {
        title: "Carer visa (subclass 116 and 836)",
        description: "If you will care for an Australian relative with a long-term condition rather than depend on them.",
        href: "/visas/family/carer-visa-116-836",
      },
    ],
    risks: [
      "Dependency that cannot be proved for the full three years, or that is shared with other sources of support so the Department is not satisfied you rely on the relative for basic needs.",
      "Being partnered: a spouse or de facto partner at any point in the process defeats the visa.",
      "Applying before Age Pension age (67).",
      "Lodging the 838 while your visa carries condition 8503, which makes the application invalid unless the condition is waived.",
      "Health or character problems assessed at the end of a long queue, and an Assurance of Support that the assurer cannot fund.",
      "Not paying the second instalment when invoiced.",
    ],
    faqs: [
      {
        question: "What does dependent mean for this visa?",
        answer:
          "That your relative in Australia has been meeting your basic needs, such as food, shelter and clothing, for at least the three years before you apply. You can also be dependent because a disability prevents you from working. Bank statements, money transfers and rent receipts are the usual evidence.",
      },
      {
        question: "Can my child sponsor me for this visa?",
        answer:
          "Yes, a child is a relative, but if your child is an Australian citizen, permanent resident or eligible New Zealand citizen you may also qualify for a Parent visa, which has no single-status or three-year dependency test. Compare the parent visas before choosing.",
      },
      {
        question: "How much does the Aged Dependent Relative visa cost?",
        answer:
          "The first instalment is A$6,600 for the main applicant (1 July 2026 charge), plus A$3,300 for each additional applicant aged 18 or over and A$1,655 for each child under 18. A second instalment is invoiced before grant, and an Assurance of Support with a bank guarantee of A$5,000 (one adult) or A$7,000 (two adults) is required.",
      },
      {
        question: "Can I apply in Australia?",
        answer:
          "Yes, for the subclass 838, if your current visa does not carry condition 8503 (no further stay). You must be in Australia at lodgement and decision and receive a bridging visa. The subclass 114 must be lodged and decided while you are outside Australia.",
      },
      {
        question: "Can I include my partner?",
        answer:
          "No. You must have no spouse or de facto partner to qualify. Only dependent children and step-children can be included as family members.",
      },
      {
        question: "How long does it take?",
        answer:
          "The Department does not publish a fixed processing time. Other Family visas are capped and queued, and the Department states demand exceeds the places available each year. Use its processing time tool for an indication.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, Sch 2 Part 114 (Aged Dependent Relative)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 838 (Aged Dependent Relative)", url: REGS },
      { label: "Migration Regulations 1994, Sch 1 item 1123A (Other Family (Migrant) (Class BO)) and item 1123B (Other Family (Residence) (Class BU))", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (aged dependent relative, relative, settled), reg 1.05A (dependent) and reg 1.20 (sponsorship undertakings)", url: REGS },
      { label: "Migration Act 1958, s 46(1A), ss 85 and 86 (capping), s 48 and s 501", url: ACT },
      { label: "PIC 4001, 4004 and 4020 and the health public interest criteria (Sch 4)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Aged Dependent Relative visa (subclass 114), applicant and sponsor pages", url: LISTING + "/aged-dependent-relative-114" },
      { label: "Home Affairs: Aged Dependent Relative visa (subclass 838)", url: LISTING + "/aged-dependent-relative-838" },
      { label: "Home Affairs: Conditions for the subclass 114", url: CONDITIONS + "?product=114" },
      { label: "Home Affairs: Current visa pricing (1 July 2026)", url: PRICING },
      { label: "Home Affairs: Global visa processing times", url: PROCESSING },
      { label: "Home Affairs: Health requirement", url: HEALTH },
      { label: "Services Australia: Who can get Age Pension", url: AGE_PENSION },
      { label: "Services Australia: How long an Assurance of Support lasts", url: AOS_LENGTH },
      { label: "Services Australia: Bank guarantee and term deposit for an Assurance of Support", url: AOS_BOND },
    ],
    related: [
      { label: "Remaining Relative visa (115 and 835)", href: "/visas/family/remaining-relative-visa-115-835" },
      { label: "Carer visa (116 and 836)", href: "/visas/family/carer-visa-116-836" },
      { label: "Aged Parent visa (subclass 804)", href: "/visas/family/aged-parent-visa-804" },
      { label: "Family and partner visa services", href: "/services/family-partner-visas" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "114 visa",
      "subclass 114",
      "aged dependent relative visa",
      "838 visa",
      "subclass 838",
      "aged dependent relative visa requirements",
      "aged dependent relative visa cost 2026",
      "dependent relative visa australia",
    ],
  },

  // ───────────────────────────────────────────────────────────────────────
  // 9. Balance of family test (guide)
  // ───────────────────────────────────────────────────────────────────────
  {
    slug: "balance-of-family-test",
    category: "family",
    kind: "guide",
    name: "Balance of family test",
    title: "The balance of family test for parent visas",
    seoTitle: "Balance of family test for Australian parent visas",
    seoDescription:
      "Balance of family test for parent visas 103, 143, 173, 804, 864 and 884: which children count, step-children, examples and why there is no waiver.",
    intro:
      "The balance of family test measures a parent's links to Australia by counting where their children live. A parent passes if at least half of their children and step-children are eligible children, or if more eligible children live in Australia than in any other single country. Every permanent and temporary parent visa except the Sponsored Parent (Temporary) visa requires it, and the Department will not waive it.",
    factsAsAt: FACTS_AS_AT,
    permanent: null,
    tags: ["Permanent", "Family sponsor required"],
    keyFacts: [
      {
        label: "Applies to",
        value: "Subclasses 103, 143, 173, 804, 864 and 884",
        note: "Not required for the Sponsored Parent (Temporary) visa (subclass 870), the second stage after a 173 or 884, or the Retirement visa pathway.",
      },
      {
        label: "The test",
        value: "At least half eligible, or more in Australia than any other country",
        note: "Counted across all children and step-children of you and your partner.",
      },
      {
        label: "Eligible child",
        value: "Australian citizen, or permanent resident or eligible New Zealand citizen usually resident in Australia",
        note: "A child in Australia on a temporary visa, including a bridging visa, is not usually resident.",
      },
      {
        label: "Not counted",
        value: "Deceased children, children adopted out or removed by court order, UNHCR camp refugees, children facing persecution",
        note: "Everyone else is counted, including adopted children.",
      },
      { label: "Waiver", value: "None", note: "The Department states it will not waive the test even in compelling or exceptional circumstances." },
      { label: "Legal basis", value: "Migration Regulations 1994, reg 1.05", note: "Applied through the criteria in Schedule 2 for each parent visa." },
    ],
    whoFor: [
      "You are planning a Parent, Aged Parent, Contributory Parent or Contributory Aged Parent visa application and need to know whether you qualify before paying any charge.",
      "You have children in several countries and are not sure which ones count or where they are treated as living.",
      "You have step-children, adopted children or a child who has died and need to know how they are counted.",
      "You failed the test and want to understand the alternatives.",
    ],
    eligibility: [
      {
        title: "Limb one: at least half of your children are eligible children",
        detail:
          "Count all children and step-children of you and your partner, then count how many are eligible children. If the eligible children are at least half of the total, you pass. Two eligible children out of four passes; one out of three does not.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Limb two: more eligible children than in any other single country",
        detail:
          "If limb one fails, compare the number of eligible children with the number of children living in each other country. You pass if the eligible children outnumber the children in every other single country. Two eligible children with one child in each of three other countries passes; two eligible children with two in another country does not.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Who is an eligible child",
        detail:
          "An eligible child is an Australian citizen, an Australian permanent resident usually resident in Australia, or an eligible New Zealand citizen usually resident in Australia. Any other child is ineligible and is taken to be resident overseas. A child in Australia on a temporary visa is not usually resident here, and a permanent resident child living abroad is not eligible. If a child's whereabouts are unknown they are treated as living in their last known usual country of residence.",
        legal: "Migration Regulations 1994, reg 1.05 and reg 1.03 (eligible New Zealand citizen)",
      },
      {
        title: "Which children are counted",
        detail:
          "All children of you and your partner are counted, including adopted children and step-children. A step-child is your current partner's child, or your former partner's child who is under 18 and for whom you have guardianship, custody or a parenting order under the Family Law Act 1975. Step-children from polygamous or concurrent relationships are not counted.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Children who are not counted",
        detail:
          "A child is left out of the count entirely if they have died, have been removed from their parents' exclusive legal custody by adoption, court order or operation of law, are registered with UNHCR as a refugee and live in a UNHCR camp, or live in a country where they suffer persecution or human rights abuse and cannot be reunited with their parents in another country.",
        legal: "Migration Regulations 1994, reg 1.05",
      },
      {
        title: "Eligible New Zealand citizens",
        detail:
          "A child who arrived on a New Zealand passport counts as an eligible New Zealand citizen if they were in Australia on 26 February 2001 as a Special Category visa holder, or were in Australia for 12 months in the two years before that date and returned afterwards, or were assessed as a protected Special Category visa holder before that date. They must also be usually resident in Australia.",
        legal: "Migration Regulations 1994, reg 1.03 (eligible New Zealand citizen)",
      },
      {
        title: "No waiver, and when the test is not required",
        detail:
          "The Department will not waive the test for compelling or exceptional circumstances. It is not required for a subclass 143 or 864 lodged while you hold (or within 28 days after) a 173 or 884, for applicants under the Retirement visa pathway, or for the Sponsored Parent (Temporary) visa (subclass 870).",
        legal: "Migration Regulations 1994, Sch 2 Parts 143 and 864 (second-stage criteria) and Part 870",
      },
    ],
    documents: [
      {
        group: "Balance of family evidence",
        items: [
          "Evidence of how you are related to each child and step-child, such as birth or adoption certificates and parenting orders",
          "Evidence of each child's Australian citizenship or permanent residence and that they usually live in Australia, or evidence of the country where each other child lives",
          "Evidence for any child who should not be counted, such as a death certificate, adoption-out papers or a court order",
          "Form 47A for each child aged 18 or over, migrating or not, where the visa form requires it",
        ],
      },
    ],
    steps: [
      {
        title: "List every child and step-child of you and your partner",
        description:
          "Include adopted children, children from previous relationships, your current partner's children and any former partner's child under 18 who is in your custody or guardianship under a parenting order. Leave out children from polygamous or concurrent relationships.",
        output: "A complete list of children with dates of birth and relationship to each parent",
      },
      {
        title: "Remove children who are not counted",
        description:
          "Take out any child who has died, was adopted out or removed from your custody by court order or operation of law, is a UNHCR-registered refugee living in a UNHCR camp, or lives in a country where they face persecution and cannot be reunited with you elsewhere.",
        output: "The list of children who count for the test",
      },
      {
        title: "Classify each child and assign a country",
        description:
          "Mark each child as eligible (citizen, or permanent resident or eligible New Zealand citizen usually resident in Australia) or ineligible. Record the country where each ineligible child lives; a child on a temporary visa in Australia counts for the country where they usually live, and a child whose whereabouts are unknown counts for their last known country.",
        output: "A table of eligible children and children by country",
      },
      {
        title: "Apply limb one, then limb two",
        description:
          "If eligible children are at least half of the total, you pass. If not, check whether eligible children outnumber the children in every other single country. For example, five children with two in Australia and one in each of three other countries passes limb two; six children with two in Australia, two in one country and two in another fails both limbs.",
        output: "A pass or fail result with the reasoning",
      },
      {
        title: "Gather the evidence",
        description:
          "Collect relationship evidence for each child, citizenship or residence evidence for the eligible children, and death certificates or court orders for children left out. The Department assesses the test at lodgement as part of the core criteria before assigning a queue date.",
        output: "A balance of family evidence bundle ready to lodge",
      },
      {
        title: "If you fail, consider the alternatives",
        description:
          "The Sponsored Parent (Temporary) visa (subclass 870) has no balance of family test but gives no work rights or permanent residence and bars a later parent visa. The count can also change over time, for example when another child becomes a permanent resident usually resident in Australia.",
        output: "A decision on whether to wait, choose the 870, or seek advice",
      },
    ],
    costs: [],
    pathways: [
      {
        title: "Contributory Parent visa (subclass 143 and 173)",
        description: "The contributory parent visas that require the test.",
        href: "/visas/family/contributory-parent-visa-143-173",
      },
      {
        title: "Contributory Aged Parent visa (subclass 864 and 884)",
        description: "The onshore contributory visas for parents of Age Pension age.",
        href: "/visas/family/contributory-aged-parent-visa-864-884",
      },
      {
        title: "Parent visa (subclass 103) and Aged Parent visa (subclass 804)",
        description: "The non-contributory parent visas, which apply the same test.",
        href: "/visas/family/parent-visa-103",
      },
      {
        title: "Sponsored Parent (Temporary) visa (subclass 870)",
        description: "The only parent visa without the test, but temporary and without work rights.",
        href: "/visas/family/sponsored-parent-temporary-visa-870",
      },
    ],
    risks: [
      "Counting a child on a temporary or bridging visa as living in Australia: they are ineligible and count for the country where they usually live.",
      "Forgetting your partner's children: step-children of your current partner are counted even if they have no connection to you.",
      "Leaving out a living child who was not adopted out or removed by court order, which is an inaccurate declaration and can engage PIC 4020.",
      "Counting a deceased child or a child adopted out, who must be left out entirely.",
      "Treating a permanent resident child who lives overseas as eligible: they must be usually resident in Australia.",
      "Assuming a waiver is possible: the Department states it will not waive the test in any circumstances.",
    ],
    faqs: [
      {
        question: "Do I pass if exactly half of my children are in Australia?",
        answer:
          "Yes. Limb one is satisfied if at least half of your children and step-children are eligible children, so two eligible children out of four, or one out of two, passes.",
      },
      {
        question: "Do step-children count?",
        answer:
          "Yes. Your current partner's children are counted, and so is a former partner's child who is under 18 and in your custody or guardianship under a Family Law Act 1975 parenting order. Children from polygamous or concurrent relationships are not counted.",
      },
      {
        question: "Does a child who has died count?",
        answer:
          "No. Deceased children are left out of the count altogether, as are children adopted out or removed from your custody by court order or operation of law, UNHCR-registered refugees living in a UNHCR camp, and children living in a country where they suffer persecution and cannot be reunited with you elsewhere.",
      },
      {
        question: "My child is a permanent resident but lives overseas. Are they eligible?",
        answer:
          "No. A permanent resident or eligible New Zealand citizen child is eligible only if they are usually resident in Australia. An Australian citizen child is eligible wherever they live. An ineligible child is counted for the country where they live.",
      },
      {
        question: "Can the Department waive the test in compelling circumstances?",
        answer: "No. Home Affairs states it will not waive the balance of family test even in compelling or exceptional circumstances.",
      },
      {
        question: "Do I need to meet the test again for the subclass 143 after a 173?",
        answer:
          "No. If you lodge the 143 while you hold the 173, or within 28 days after it ends, you have already met the test. The same applies to the 864 after an 884.",
      },
      {
        question: "Which parent visa has no balance of family test?",
        answer:
          "Only the Sponsored Parent (Temporary) visa (subclass 870). It is a temporary visa of up to three or five years with no work rights, and applying for it bars a later permanent or temporary parent visa.",
      },
    ],
    legislation: [
      { label: "Migration Regulations 1994, reg 1.05 (balance of family test)", url: REGS },
      { label: "Migration Regulations 1994, reg 1.03 (eligible New Zealand citizen, parent, settled)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Parts 103, 143, 173, 804, 864 and 884 (criteria applying the test)", url: REGS },
      { label: "Migration Regulations 1994, Sch 2 Part 870 (no balance of family test)", url: REGS },
    ],
    sources: [
      { label: "Home Affairs: Balance of family test (Contributory Parent visa pages)", url: LISTING + "/contributory-parent-143/balance-of-family-test" },
      { label: "Home Affairs: Balance of family test (Parent visa pages)", url: LISTING + "/parent-103/balance-of-family-test" },
      { label: "Home Affairs: Balance of family test (Aged Parent visa pages)", url: LISTING + "/aged-parent-804/balance-of-family-test" },
      { label: "Home Affairs: Contributory Parent visa (subclass 143)", url: LISTING + "/contributory-parent-143" },
      { label: "Home Affairs: Parent visa (subclass 103)", url: LISTING + "/parent-103" },
      { label: "Home Affairs: Sponsored Parent (Temporary) visa (subclass 870)", url: LISTING + "/sponsored-parent-temporary-870" },
    ],
    related: [
      { label: "Contributory Parent visa (143 and 173)", href: "/visas/family/contributory-parent-visa-143-173" },
      { label: "Contributory Aged Parent visa (864 and 884)", href: "/visas/family/contributory-aged-parent-visa-864-884" },
      { label: "Parent visa (subclass 103)", href: "/visas/family/parent-visa-103" },
      { label: "Aged Parent visa (subclass 804)", href: "/visas/family/aged-parent-visa-804" },
      { label: "Sponsored Parent (Temporary) visa (subclass 870)", href: "/visas/family/sponsored-parent-temporary-visa-870" },
      { label: "Book a consultation", href: "/bookings" },
    ],
    keywords: [
      "balance of family test",
      "balance of family test parent visa",
      "balance of family test step children",
      "balance of family test examples",
      "parent visa eligible child",
      "parent visa requirements australia",
      "balance of family test waiver",
    ],
  },
];
