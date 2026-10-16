import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Sponsored Parent (Temporary) visa (subclass
// 870). Every figure matches data/visas/family-parent.ts (checked against
// Home Affairs and the pricing table on 12 October 2026). The meaning of
// "relevant departure day" was read on the Home Affairs 870 page on
// 13 October 2026 (see verifiedExtras).

export const sponsoredParent870Explainer: VisaExplainer = {
  slug: "sponsored-parent-temporary-visa-870",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa for long visits: a parent can stay up to three or five years at a time, up to ten years in total, once their child is approved as a Parent Sponsor. No work, and no path to permanent residence.",
  bigIdeas: [
    { title: "Your child becomes your sponsor", body: "Before you apply, your child must be approved as a Parent Sponsor, including an income test of A$83,454.80.", icon: ICON.heart },
    { title: "Long visits, not a move", body: "Up to three or five years per visa and ten years in total. No paid work, and no permanent residence.", icon: ICON.calendarDays },
    { title: "It closes the other door", body: "Once you apply for an 870, you can't apply for a permanent or temporary parent visa while you hold it or have applied.", icon: ICON.noSymbol },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your child, approved as a Parent Sponsor", icon: ICON.heart },
    { label: "How long", value: "Up to 3 or 5 years per visa; 10 years in total", icon: ICON.clock },
    { label: "Cost", value: "A$6,370 (3 years) or A$12,440 (5 years)", icon: ICON.currencyDollar },
    { label: "Work", value: "None: no paid work", icon: ICON.briefcase },
    { label: "Balance of family test", value: "Not needed, and no Assurance of Support", icon: ICON.scale },
    { label: "Permanent residence", value: "No pathway", icon: ICON.home },
  ],
  actors: [
    {
      id: "you",
      name: "You (the parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply from outside Australia, then visit within the visa's rules.",
      does: [
        "Lodge within six months of the sponsorship approval",
        "Show a [[gts|genuine temporary stay]] and enough money",
        "Keep Australian health insurance for the whole stay",
        "Do no paid work ([[c8103|condition 8103]])",
      ],
    },
    {
      id: "child",
      name: "Your child (the Parent Sponsor)",
      short: "Your child",
      icon: ICON.heart,
      tone: "pink",
      role: "Applies to become your [[parent-sponsor|Parent Sponsor]] and takes on sponsor obligations.",
      does: [
        "Passes the [[income-test|income test]]",
        "Applies online and pays A$420",
        "Supports and houses you while you're here",
        "Repays any public health debt you incur in Australia",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Approves the sponsor, then decides the visa.",
      does: [
        "Assesses and approves the Parent Sponsor",
        "Decides any request for [[pta|Permission to Apply in Australia]]",
        "Checks health, character and your plans",
        "Invoices the second instalment and grants the visa",
      ],
    },
  ],
  flows: [
    {
      from: "child",
      to: "government",
      label: "Applies as sponsor",
      detail: "Your child applies online to become a [[parent-sponsor|Parent Sponsor]], pays A$420 and shows taxable income of at least A$83,454.80.",
    },
    {
      from: "government",
      to: "child",
      label: "Sponsor approved",
      detail: "Home Affairs approves the sponsorship and sends a letter with its [[trn|TRN]]. Your six-month window to apply starts.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies from overseas",
      detail: "You apply online from outside Australia within six months of the approval, and pay the first instalment of A$1,515.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After health, character and the second instalment, Home Affairs grants a visa of up to three or five years, with multiple entries.",
    },
    {
      from: "you",
      to: "child",
      label: "You visit",
      detail: "You stay with your family, with no paid work. Caring for grandchildren at home and volunteering for a charity are allowed.",
    },
  ],
  journeyTitle: "From sponsorship approval to a long family visit",
  journeyHighlight: "long family visit",
  stages: [
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Your child becomes a Parent Sponsor",
      who: ["child", "government"],
      description: "Your child (or their partner) applies online to be a [[parent-sponsor|Parent Sponsor]]. You can't apply for the visa until it's approved.",
      points: [
        "Taxable income of at least A$83,454.80 in the last completed income year",
        "A citizen, or a permanent resident or eligible New Zealand citizen usually living here for at least four years",
        "One sponsorship per household, covering up to two parents",
      ],
      youHold: "A sponsorship approval letter with a TRN",
      cost: "A$420, paid by your child",
      icon: ICON.heart,
    },
    {
      id: "choose",
      short: "Choose",
      title: "Choose a three-year or five-year visa",
      who: ["you"],
      description: "The visa can last up to three years (A$6,370 in total) or up to five years (A$12,440). Either way you pay A$1,515 when you apply.",
      points: ["Time on 870 visas counts towards a ten-year total", "Each parent applies separately and pays their own instalments"],
      youHold: "A decision on the visa length",
      icon: ICON.scale,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply from outside Australia, within six months",
      who: ["you"],
      description: "Lodge online in [[immiaccount|ImmiAccount]] within six months of the sponsorship approval, while you're outside Australia.",
      points: [
        "In Australia only with [[pta|Permission to Apply in Australia]], and then within 60 days",
        "Show a [[gts|genuine temporary stay]] and enough money to support yourself",
        "Hold adequate health insurance from an Australian provider",
      ],
      youHold: "An acknowledgement and a paid first instalment",
      cost: "A$1,515, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and insurance",
      who: ["government", "you"],
      description: "Complete any health examinations requested in ImmiAccount, and provide biometrics if asked.",
      points: [
        "An AFP police certificate if you've spent 12 months or more in Australia in the last ten years",
        "Overseas police certificates and [[form80|Form 80]]",
        "Tell Home Affairs about a new passport, address, relationship or criminal charge",
      ],
      youHold: "Health and character cleared, and insurance in place",
      icon: ICON.shieldCheck,
    },
    {
      id: "pay",
      short: "Pay",
      title: "Pay the second instalment",
      who: ["you"],
      description: "Home Affairs invoices the second instalment before grant. If it isn't paid, the application is refused and the first instalment isn't refunded.",
      points: ["A$4,855 for a visa of up to three years", "A$10,925 for a visa of up to five years"],
      youHold: "A receipt for the second instalment",
      cost: "A$4,855 (3 years) or A$10,925 (5 years)",
      icon: ICON.banknotes,
    },
    {
      id: "visit",
      short: "Visit",
      title: "Grant, then your visit",
      who: ["government", "you"],
      description: "You can be in or outside Australia when it's decided. If you're outside, don't book travel until the grant letter arrives.",
      points: [
        "No paid work ([[c8103|condition 8103]]); caring for grandchildren at home and volunteering are fine",
        "Keep adequate health insurance for the whole stay",
        "Leave before the visa ends",
      ],
      youHold: "A visa of up to three or five years, with multiple entries",
      icon: ICON.home,
    },
    {
      id: "again",
      short: "Again",
      title: "Coming back on another 870",
      who: ["you", "child"],
      description: "A further 870 needs at least 90 consecutive days outside Australia since your [[departure-day|relevant departure day]], a new sponsorship, and a new application from outside Australia.",
      points: ["Your total time on 870 visas can't pass ten years", "Your child's household can hold only one sponsorship at a time"],
      youHold: "A new sponsorship approval and a further 870 application",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each sponsorship and visa on its full facts.",
  },
  quiz: [
    {
      id: "goal",
      topic: "Permanent or temporary",
      question: "Does your family want you to live in Australia permanently, now or later?",
      help: "Once you apply for an 870, you can't apply for a permanent or temporary parent visa while you hold it or have applied for it.",
      options: [
        { value: "visits", label: "No, long visits are what we want", status: "ok", note: "That's what the 870 is for: visits of up to three or five years at a time." },
        {
          value: "maybe",
          label: "Maybe later",
          status: "todo",
          note: "Decide first. A permanent parent visa application lodged before the 870 doesn't stop you visiting on one, but the reverse order is closed.",
          link: { label: "Check the balance of family test", href: "/visas/family/balance-of-family-test" },
        },
        {
          value: "permanent",
          label: "Yes, permanent residence is the goal",
          status: "stop",
          note: "The 870 has no path to permanent residence. Compare the Contributory Parent visa before you lodge anything.",
          link: { label: "Contributory Parent visa", href: "/visas/family/contributory-parent-visa-143-173" },
        },
      ],
    },
    {
      id: "income",
      topic: "Sponsor's income",
      question: "Did your child have taxable income of at least A$83,454.80 in the last completed income year?",
      help: "It's shown by an ATO [[noa|Notice of Assessment]] for the income year before the sponsorship application.",
      options: [
        { value: "alone", label: "Yes, on their own", status: "ok", note: "Your child meets the [[income-test|income test]] alone." },
        {
          value: "combined",
          label: "Only together with their partner or my other child",
          status: "todo",
          note: "Combining is allowed if your child's own income is at least half the threshold. The other child must be a citizen, permanent resident or eligible New Zealand citizen.",
        },
        { value: "no", label: "No", status: "stop", note: "A Parent Sponsor can't be approved without meeting the income test, alone or combined." },
      ],
    },
    {
      id: "sponsor-status",
      topic: "Sponsor's status",
      question: "Is your child an Australian citizen, or a resident who has usually lived here for at least four years?",
      help: "Permanent residents and eligible New Zealand citizens need four years of usual residence. Your child also can't have been unlawful, or on a bridging visa other than A, B or C, in the last four years.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Your child can apply to be a Parent Sponsor. Their character, any government debt and any past sponsorship obligations are also checked." },
        { value: "no", label: "Not yet", status: "stop", note: "Your child can't be approved as a Parent Sponsor until they meet the residence requirement." },
      ],
    },
    {
      id: "location",
      topic: "Where you'll apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "That's the standard rule: lodge from outside Australia within six months of the sponsorship approval." },
        {
          value: "emergency",
          label: "In Australia, with an emergency that stops me leaving",
          status: "todo",
          note: "Your sponsor can request Permission to Apply in Australia, approved only in exceptional circumstances such as an accident, serious illness or a natural disaster. You then lodge within 60 days.",
        },
        {
          value: "convenience",
          label: "In Australia, and staying here is simply more convenient",
          status: "stop",
          note: "Convenience, childcare duties or having sold your assets at home aren't accepted reasons. You must apply from outside Australia.",
        },
      ],
    },
    {
      id: "work",
      topic: "Work",
      question: "Do you plan to work while you're in Australia, paid or in a family business?",
      options: [
        { value: "no", label: "No: I'll visit, care for grandchildren or volunteer", status: "ok", note: "Those are allowed. Condition 8103 bars paid work, and unpaid work in a commercial setting or a family business." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "Condition 8103 bars paid work, and unpaid work in a commercial setting or a family business. Breaching it can lead to cancellation.",
        },
      ],
    },
    {
      id: "funds",
      topic: "Money and insurance",
      question: "Can you support yourself and hold Australian health insurance for the whole stay?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep evidence ready: three months of bank statements, tax or pension records, and your insurance policy." },
        {
          value: "unsure",
          label: "Not sure",
          status: "todo",
          note: "You need enough money of your own, or access to it, and adequate health insurance from an Australian provider for your whole stay.",
        },
      ],
    },
    {
      id: "previous",
      topic: "A further 870",
      question: "Have you held an 870 before?",
      options: [
        { value: "first", label: "No, this would be my first", status: "ok", note: "Nothing to check here. Every 870 you hold counts towards the ten-year total." },
        {
          value: "ready",
          label: "Yes, and I've been outside Australia for at least 90 consecutive days",
          status: "ok",
          note: "A further 870 also needs a new sponsorship, and your total time on 870 visas must stay within ten years.",
        },
        {
          value: "soon",
          label: "Yes, but fewer than 90 days have passed",
          status: "todo",
          note: "A further 870 can't be granted until you've been outside Australia for at least 90 consecutive days since your [[departure-day|relevant departure day]].",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The 870 can turn into permanent residence later.",
      fact: "It can't. It's a temporary visa only, and while you hold it or have applied for it you can't apply for a permanent or temporary parent visa.",
    },
    {
      myth: "I can help out in my child's business while I'm here.",
      fact: "No. Condition 8103 bars paid work, and unpaid work in a commercial setting or a family business. Caring for grandchildren at home, volunteering for a charity and helping at their school are allowed.",
    },
    {
      myth: "I can apply from Australia while I'm here on a visitor visa.",
      fact: "Only with Permission to Apply in Australia, approved in exceptional circumstances such as an accident, serious illness or a natural disaster. Convenience and childcare duties aren't accepted.",
    },
    {
      myth: "Both parents can go on one application.",
      fact: "No family members can be included. Each parent applies and pays separately, although one sponsorship can cover up to two parents.",
    },
    {
      myth: "The 870 needs the balance of family test too.",
      fact: "It doesn't, and there's no Assurance of Support either. But it's temporary, has no work rights and blocks parent visa applications once you apply for it.",
    },
    {
      myth: "We can renew the 870 back to back for as long as we like.",
      fact: "No. A further 870 needs at least 90 consecutive days outside Australia and a new sponsorship, and your total time on 870 visas is capped at ten years.",
    },
    {
      myth: "If my child withdraws the sponsorship, my visa carries on.",
      fact: "Not for long. A new sponsorship application must be lodged within 35 days, or the visa ceases. If your sponsor dies, a new sponsorship can be lodged within 90 days.",
    },
    {
      myth: "My child's obligations end when I leave Australia.",
      fact: "Not all of them. Your sponsor must repay any public health debt you incur in Australia, even after the visa ends.",
    },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      intro: "Your part is a genuine visit: apply on time from overseas, keep insured, and follow the no-work rule.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Be sure temporary visits are what your family wants",
            "Choose a visa of up to three or five years",
            "Arrange adequate Australian health insurance for the whole stay",
            "Gather three months of bank statements and evidence of your ties at home",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge online from outside Australia within six months of the sponsorship approval",
            "Pay the first instalment of A$1,515",
            "Provide Form 80 and your police certificates",
          ],
        },
        {
          title: "While you're here",
          items: [
            "No paid work, and no work in a family business ([[c8103|condition 8103]])",
            "Keep your health insurance current",
            "Leave before the visa ends",
          ],
        },
      ],
    },
    {
      id: "child",
      label: "I'm the Parent Sponsor",
      tone: "pink",
      intro: "Your part is the sponsorship, its income test and obligations that can outlast the visit.",
      groups: [
        {
          title: "To be approved",
          items: [
            "Be 18 or over, and a citizen or a resident here for at least four years",
            "Show taxable income of at least A$83,454.80, alone or combined",
            "Apply online, pay A$420 and agree to the sponsorship obligations",
          ],
        },
        {
          title: "While your parent is here",
          items: [
            "Support and house your parent",
            "Tell Home Affairs about certain events",
            "Repay any public health debt your parent incurs, even after they leave",
          ],
        },
        {
          title: "If things change",
          items: [
            "If you withdraw, a new sponsorship must be lodged within 35 days or the visa ceases",
            "Not meeting your obligations can bar you from sponsoring again",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "parent-sponsor",
      term: "Parent Sponsor",
      definition: "Your child (or their partner) once Home Affairs approves them to sponsor you for an 870. A household can hold one sponsorship at a time, covering up to two parents.",
    },
    {
      id: "income-test",
      term: "Income test",
      definition: "Your sponsor's taxable income for the last completed income year before the sponsorship application must be at least A$83,454.80. Combined income counts if the sponsor's own is at least half.",
    },
    { id: "noa", term: "Notice of Assessment", definition: "The tax assessment from the Australian Taxation Office (ATO) for an income year. It's the evidence of your sponsor's taxable income." },
    { id: "trn", term: "TRN", full: "Sponsorship Transaction Reference Number", definition: "The reference number on your child's sponsorship approval. You need it to apply for the visa." },
    {
      id: "pta",
      term: "Permission to Apply in Australia",
      definition: "Approval to lodge the 870 while you're in Australia. It's given only in exceptional circumstances, such as an accident, serious illness or a natural disaster that stops you leaving. You then lodge within 60 days.",
    },
    {
      id: "gts",
      term: "Genuine temporary stay",
      definition: "You must intend to stay only temporarily and do only what the visa allows. Your ties at home, your finances and a letter about your plans help show this.",
    },
    {
      id: "c8103",
      term: "Condition 8103",
      definition: "No paid work in Australia. Caring for grandchildren or other young relatives at home, volunteering for a charity and helping at your grandchildren's school are allowed; unpaid work in a commercial setting or a family business isn't.",
    },
    { id: "c8501", term: "Condition 8501", definition: "You must keep adequate health insurance for the whole of your stay in Australia." },
    { id: "c8531", term: "Condition 8531", definition: "You must leave Australia before your visa expires." },
    {
      id: "departure-day",
      term: "Relevant departure day",
      definition: "If you were in Australia when your last 870 ended, it's the first day you left after that. If you were outside Australia, it's the last day you left while the visa was in effect.",
    },
    {
      id: "ten-years",
      term: "Ten-year limit",
      definition: "The most time you can spend on 870 visas in total. Once you've held them for ten years, no further 870 can be granted.",
    },
    { id: "form80", term: "Form 80", full: "Personal particulars for assessment including character assessment", definition: "A detailed form about your background, used for the character check." },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account for lodging and managing applications. Both the sponsorship and the visa are lodged there." },
  ],
  cta: {
    subtitle: "We check your child's income and residence, your plans and your timing against these rules, tell you honestly whether the 870 or a permanent visa fits better, and prepare both applications with you.",
  },
  verifiedExtras: [
    {
      fact: "For a further 870, the relevant departure day is the first day you left Australia after your last 870 ceased (if you were in Australia when it ceased), or the last day you left Australia while it was in effect (if you were outside Australia).",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/sponsored-parent-temporary-870",
    },
  ],
  finder: parentFinder,
  fees: {
    variantLabel: "How long a visa?",
    variants: [
      {
        id: "three-years",
        label: "Visa of up to 3 years",
        hint: "A$6,370 in total, in two instalments",
        primary: [
          { label: "First instalment, when you apply", amount: 1515 },
          { label: "Second instalment, invoiced before grant", amount: 4855 },
        ],
      },
      {
        id: "five-years",
        label: "Visa of up to 5 years",
        hint: "A$12,440 in total, in two instalments",
        primary: [
          { label: "First instalment, when you apply", amount: 1515 },
          { label: "Second instalment, invoiced before grant", amount: 10925 },
        ],
      },
    ],
    maxAdults: 0,
    maxChildren: 0,
    sponsor: {
      heading: "Your child (the Parent Sponsor) pays",
      lines: [{ label: "Sponsorship application", amount: 420, per: "once" }],
      note: "Not refunded if the sponsorship is withdrawn or refused.",
    },
    notIncluded: "Not included: Australian health insurance for the whole stay, health examinations and police certificates.",
    notes: [
      "No family members can be included. Each parent applies separately and pays their own instalments; one sponsorship can cover up to two parents.",
      "Your Parent Sponsor must also repay any public health debt you incur in Australia, even after the visa ends.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
  timeline: {
    navLabel: "Lodging window",
    eyebrow: "Timeline",
    title: "When must you lodge your 870?",
    highlight: "lodge",
    subtitle: "Pick the month your child's sponsorship was approved to see when your six-month window to apply from outside Australia closes.",
    startLabel: "Sponsorship approved",
    startPrompt: "When was your child approved as your Parent Sponsor?",
    milestones: [
      {
        months: 6,
        label: "Your window to lodge closes",
        detail: "You must lodge the 870 within six months of the sponsorship approval, from outside Australia. Count from the exact date on the approval letter, and lodge well before it.",
        kind: "end",
      },
    ],
    footnote: "The month shown is approximate: the six months run from the exact approval date in your child's letter. With Permission to Apply in Australia, the window is 60 days instead.",
  },
};
