import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { partnerFinder } from "./partner-finder";

// Interactive explainer for the Prospective Marriage visa (subclass 300).
// Every figure matches data/visas/family-partner.ts (checked against Home
// Affairs and the Migration Regulations on 12 October 2026).

export const prospectiveMarriageVisa300Explainer: VisaExplainer = {
  slug: "prospective-marriage-visa-300",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Engaged to an Australian citizen, permanent resident or eligible New Zealand citizen? This visa lets you come to Australia, marry within 9 to 15 months, then apply here to stay permanently.",
  bigIdeas: [
    { title: "Engaged, and you've met", body: "You both intend to marry, you've met in person as adults, and you're both 18 or over.", icon: ICON.heart },
    { title: "Come, marry, then apply", body: "Enter Australia, marry within the visa period (9 to 15 months), then apply here for the 820 and 801.", icon: ICON.sparkles },
    { title: "A reduced charge later", body: "Apply for the Partner visa while the 300 is still in effect and the charge is A$1,955, not A$11,710.", icon: ICON.currencyDollar },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your fiance or fiancee, aged 18 or over", icon: ICON.heart },
    { label: "How long", value: "9 to 15 months from grant", icon: ICON.clock },
    { label: "Work and study", value: "Full work and study rights", icon: ICON.briefcase },
    { label: "Where you apply", value: "Outside Australia", icon: ICON.globeAsiaAustralia },
    { label: "Next step", value: "Partner visa (820 and 801) after you marry", icon: ICON.home },
    { label: "Visa charge", value: "A$11,710 (A$9,600 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "partner",
      name: "Your fiance or fiancee (sponsor)",
      short: "Partner",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you, and takes on undertakings while the 300 is in effect.",
      does: [
        "Lodges the sponsorship using your [[trn|TRN]], with no charge",
        "Provides police certificates and consents to disclose any relevant convictions",
        "Must not be caught by the [[sponsor-limits|sponsorship limits]]",
        "Marries you within the [[visa-period|visa period]]",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply from outside Australia, then come here to marry your sponsor.",
      does: [
        "Show you've met in person as adults and plan to marry",
        "Lodge from outside Australia and pay A$11,710",
        "Enter before the [[first-entry|first entry date]] and marry within the visa period",
        "Apply for the 820 and 801 in Australia after the wedding",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks your relationship, your plans and your sponsor, then decides the visa.",
      does: [
        "Approves the sponsorship",
        "Checks you've met and genuinely intend to marry",
        "Grants the 300 with its conditions and end date",
        "Later decides your Partner visa (820 and 801)",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply from overseas",
      detail: "You lodge the 300 online while you're outside Australia, pay the charge and get a [[trn|TRN]].",
    },
    {
      from: "partner",
      to: "government",
      label: "Partner sponsors",
      detail: "Your fiance or fiancee lodges the sponsorship using your TRN, with police certificates and consent to disclose any relevant convictions.",
    },
    {
      from: "government",
      to: "you",
      label: "300 granted",
      detail: "Home Affairs grants the 300 for 9 to 15 months. You enter Australia before the [[first-entry|first entry date]] in your grant letter.",
    },
    {
      from: "you",
      to: "partner",
      label: "You marry",
      detail: "You marry your sponsor within the [[visa-period|visa period]], in a marriage that is valid under Australian law.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply for the 820",
      detail: "After the wedding, and before the 300 ends, you apply in Australia for the Partner visa (820 and 801) at the reduced charge.",
    },
  ],
  journeyTitle: "From engagement to your Partner visa",
  journeyHighlight: "Partner visa",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check you qualify",
      who: ["you", "partner"],
      description: "Make sure the 300 is the right visa for you both before you start.",
      points: [
        "You've met in person since you both turned 18",
        "You're both 18 or over, with no [[impediment|legal impediment]] to marrying",
        "Already married, or de facto for 12 months? A Partner visa may suit better",
        "Check the [[sponsor-limits|sponsorship limits]]",
      ],
      youHold: "A decision that the 300 fits, and a sponsor who can be approved",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather your evidence",
      who: ["you", "partner"],
      description: "Show that you've met, that the relationship is genuine, and that you both plan to marry and live together.",
      points: [
        "Proof you've met face to face, such as travel records and photos",
        "A [[celebrant|celebrant's]] letter for a wedding within nine months of grant",
        "Two [[form888|Form 888]] statements from people who know you both",
        "Your relationship history and your plans as spouses",
      ],
      youHold: "Evidence of your meeting, your relationship and your wedding plans",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Apply",
      title: "You lodge from outside Australia",
      who: ["you", "government"],
      description: "Apply online in ImmiAccount while you're outside Australia, and pay the charge.",
      points: [
        "A$11,710, or A$9,600 with an eligible Pacific or Timor-Leste passport",
        "Everyone applying must be outside Australia when you lodge",
        "Give your fiance or fiancee your [[trn|TRN]]",
      ],
      youHold: "A lodged application and a TRN",
      cost: "A$11,710, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Your fiance or fiancee sponsors you",
      who: ["partner"],
      description: "Your fiance or fiancee lodges the sponsorship in ImmiAccount using your TRN.",
      points: ["No sponsorship charge", "Police certificates and consent to disclose any relevant convictions", "Undertakings that last while the 300 is in effect"],
      youHold: "A lodged sponsorship linked to your application",
      cost: "No charge",
      icon: ICON.userPlus,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Health, character and waiting",
      who: ["you", "government"],
      description: "Have health examinations and provide police certificates and Form 80 when asked.",
      points: [
        "Health results and police certificates are valid for 12 months",
        "Don't arrange travel until the grant is notified in writing",
        "Married before the decision? Tell Home Affairs straight away",
      ],
      youHold: "Health and character clearances on file",
      icon: ICON.clock,
    },
    {
      id: "enter",
      short: "Enter",
      title: "The 300 is granted and you enter",
      who: ["government", "you"],
      description: "You can be in or outside Australia at grant. Enter before the [[first-entry|first entry date]] in your grant letter.",
      points: [
        "Don't marry before your first entry ([[c8515|condition 8515]])",
        "Work, study, and travel in and out while the visa is valid",
        "No Medicare on the 300 alone, unless a [[reciprocal|reciprocal agreement]] applies",
        "Don't apply for another visa: it would replace the 300",
      ],
      youHold: "A Prospective Marriage visa for 9 to 15 months",
      icon: ICON.ticket,
    },
    {
      id: "marry",
      short: "Marry",
      title: "You marry within the visa period",
      who: ["you", "partner"],
      description: "Marry your sponsor before the 300 ends ([[c8519|condition 8519]]). The wedding can be in any country, if it's valid under Australian law.",
      points: ["The visa period can't be extended", "Time outside Australia doesn't extend it", "Plan the wedding and your next application well inside the period"],
      youHold: "A marriage that is valid under Australian law",
      icon: ICON.sparkles,
    },
    {
      id: "partner-visa",
      short: "820/801",
      title: "Apply for the Partner visa in Australia",
      who: ["you", "government"],
      description: "After the wedding, and before the 300 ends, apply in Australia for the 820 and 801.",
      points: [
        "A$1,955 while the 300 is in effect",
        "Your sponsor usually won't need new police certificates",
        "A [[bva|Bridging visa A]] keeps you lawful if the 300 ends first",
      ],
      youHold: "A Partner visa application on the path to permanent residence",
      cost: "A$1,955, paid by you",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next comes the detail: evidence of your meeting, your wedding plans and your fiance or fiancee's sponsorship.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on all the circumstances of your relationship.",
  },
  quiz: [
    {
      id: "sponsor",
      topic: "Your fiance or fiancee",
      question: "Is your fiance or fiancee an Australian citizen, permanent resident or eligible New Zealand citizen?",
      help: "Your sponsor must also be 18 or over.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "They can sponsor you, as long as the [[sponsor-limits|sponsorship limits]] don't apply." },
        {
          value: "nz",
          label: "They're a New Zealand citizen, but I'm not sure they're 'eligible'",
          status: "todo",
          note: "Check this first: only an eligible New Zealand citizen (a protected Special Category visa holder) can sponsor you for this visa.",
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "Your sponsor must be an Australian citizen, permanent resident or eligible New Zealand citizen.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "met",
      topic: "Meeting in person",
      question: "Have you met each other in person since you both turned 18?",
      options: [
        { value: "yes", label: "Yes, face to face", status: "ok", note: "Keep travel records and photos of your time together as evidence." },
        {
          value: "online",
          label: "Not yet: only online so far",
          status: "stop",
          note: "An online-only relationship doesn't qualify. You must have met in person as adults and know each other personally.",
        },
      ],
    },
    {
      id: "plans",
      topic: "Plans to marry",
      question: "Do you both intend to marry within the visa period and live together as spouses?",
      options: [
        { value: "planning", label: "Yes, and we've started planning the wedding", status: "ok", note: "A [[celebrant|celebrant's]] letter for a date within nine months of grant is good evidence of your plans." },
        {
          value: "no-plans",
          label: "Yes, but we haven't made plans yet",
          status: "todo",
          note: "Weak evidence of your plans, such as no celebrant letter, can lead to refusal. Start with the celebrant and your written statements.",
        },
        {
          value: "unsure",
          label: "We're not sure yet",
          status: "stop",
          note: "The 300 needs a genuine intention to marry within the visa period. If that isn't settled, this visa doesn't fit yet.",
        },
      ],
    },
    {
      id: "status",
      topic: "Relationship now",
      question: "Are you already married, or have you lived together as a couple for 12 months?",
      options: [
        { value: "neither", label: "Neither", status: "ok", note: "That's who the 300 is for: it doesn't need 12 months of living together." },
        {
          value: "married",
          label: "We're already married",
          status: "stop",
          note: "The 300 is for couples who intend to marry. If you're married, a Partner visa fits instead, usually the 309 and 100 from outside Australia.",
          link: { label: "Partner visa (309 and 100)", href: "/visas/family/partner-visa-offshore-309-100" },
        },
        {
          value: "defacto",
          label: "We've been de facto partners for 12 months or more",
          status: "todo",
          note: "A Partner visa may suit you better as de facto partners. Compare both before you choose.",
          link: { label: "Partner visa (309 and 100)", href: "/visas/family/partner-visa-offshore-309-100" },
        },
      ],
    },
    {
      id: "where",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You, and anyone applying with you, must be outside Australia when you lodge." },
        {
          value: "inside",
          label: "In Australia",
          status: "todo",
          note: "You'd need to be outside Australia when you lodge. You can be in or outside Australia when the visa is granted.",
        },
      ],
    },
    {
      id: "limits",
      topic: "Sponsor history",
      question: "Has your fiance or fiancee sponsored a partner before, or been sponsored as a partner themselves?",
      options: [
        { value: "never", label: "No, never", status: "ok", note: "The sponsorship limits shouldn't affect you." },
        { value: "once", label: "Once, more than five years ago", status: "ok", note: "That's usually fine: the limits catch a third sponsorship, or sponsoring or being sponsored within the last five years." },
        {
          value: "recent",
          label: "Yes, within the last five years",
          status: "stop",
          note: "Home Affairs must not approve the sponsorship unless there are compelling circumstances, such as a dependent child of you both or the death of a previous partner.",
          link: { label: "Get advice on the limits", href: "/bookings" },
        },
        {
          value: "twice",
          label: "They've already sponsored two other partners",
          status: "stop",
          note: "A third sponsorship can't be approved unless there are compelling circumstances.",
        },
      ],
    },
    {
      id: "character",
      topic: "Health and character",
      question: "Any health or character concerns for you or your fiance or fiancee?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "You'll still have health examinations and give police certificates, and your sponsor gives police certificates too." },
        {
          value: "you",
          label: "I have a significant health condition or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out (a health waiver is available for this visa), but it needs careful preparation and advice.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "partner",
          label: "My fiance or fiancee has a criminal record",
          status: "todo",
          note: "A significant record for a relevant offence, such as violence with a sentence of 12 months or more, means the sponsorship is refused. Home Affairs can still approve it if that's reasonable.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "We have to marry in Australia.",
      fact: "No. You can marry in any country, as long as the marriage is valid under Australian law. But don't marry before your first entry to Australia on the 300. And you must be in Australia to apply for the 820 and 801.",
    },
    {
      myth: "We need to have lived together first.",
      fact: "No. Unlike a de facto partner visa, the 300 doesn't need 12 months of living together. You do need to have met in person as adults and genuinely intend to marry and live together.",
    },
    {
      myth: "The visa can be extended if the wedding is delayed.",
      fact: "No. The visa period (9 to 15 months from grant) can't be extended, and time outside Australia doesn't extend it. Plan the wedding and your Partner visa application well inside it.",
    },
    {
      myth: "After the wedding I pay the full Partner visa charge again.",
      fact: "Not if you apply for the 820 and 801 while the 300 is still in effect: the charge is A$1,955 instead of A$11,710. If the 300 has ceased and you hold no substantive visa, it's A$2,475.",
    },
    {
      myth: "If we marry before the 300 is decided, nothing changes.",
      fact: "It does: you'd no longer meet the 300 criteria. Tell Home Affairs, ask to be considered for the 309 and 100 instead, and withdraw the 300 application, or it will be refused.",
    },
    {
      myth: "Switching to another visa while I'm here is harmless.",
      fact: "Being granted another visa replaces the 300 and removes the reduced Partner visa charge. Stay on the 300 until you've applied for the 820 and 801.",
    },
    {
      myth: "If the engagement ends, every option is gone.",
      fact: "If you don't marry, you can't get the Partner visa through the engagement. But the 820 and 801 may still be open in some cases. These include family violence by your sponsor, children with court orders, or your sponsor's death.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      tone: "green",
      intro: "Your part is showing a genuine engagement, a valid application from outside Australia, and keeping to the visa's conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Make sure you've met in person since you both turned 18",
            "Keep travel records and photos of your time together",
            "Get a [[celebrant|celebrant's]] letter and two [[form888|Form 888]] statements",
          ],
        },
        {
          title: "Apply and wait",
          items: [
            "Lodge from outside Australia and pay A$11,710 (A$9,600 with an eligible Pacific or Timor-Leste passport)",
            "Give your fiance or fiancee the [[trn|TRN]]",
            "Have health checks, and give police certificates and Form 80 when asked",
          ],
        },
        {
          title: "After the grant",
          items: [
            "Enter before the [[first-entry|first entry date]], and don't marry before then",
            "Marry within the [[visa-period|visa period]]",
            "Apply for the 820 and 801 in Australia before the 300 ends",
          ],
        },
      ],
    },
    {
      id: "sponsor",
      label: "I'm the sponsor",
      tone: "pink",
      intro: "Your part is the sponsorship, your own police checks, and your undertakings while the 300 is in effect.",
      groups: [
        {
          title: "Before you sponsor",
          items: [
            "Check you're 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen",
            "Check the [[sponsor-limits|limits]]: no more than two partner sponsorships, and a five-year gap",
            "Get an AFP check, plus police certificates for any country where you lived 12 months or more in the last 10 years since turning 16",
          ],
        },
        {
          title: "When you sponsor",
          items: [
            "Lodge the sponsorship in ImmiAccount using the [[trn|TRN]], with no charge",
            "Give written consent to disclose any relevant convictions",
            "Accept responsibility for your fiance or fiancee's debts to the Commonwealth, and their compliance with employment laws and visa conditions, while the 300 is in effect",
          ],
        },
        {
          title: "After the grant",
          items: ["Marry within the visa period", "For the 820 and 801, you usually won't need new police certificates"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "visa-period",
      term: "Visa period",
      definition: "How long your 300 lasts: between 9 and 15 months from grant, as set in your grant letter. You must marry within it, and it can't be extended.",
    },
    { id: "first-entry", term: "First entry date", definition: "The date in your grant letter by which you must first enter Australia." },
    { id: "c8515", term: "Condition 8515", definition: "You must not marry or enter a de facto relationship before you first enter Australia on the 300." },
    { id: "c8519", term: "Condition 8519", definition: "You must marry the person named in your application within the visa period." },
    { id: "c8502", term: "Condition 8502", definition: "You must not enter Australia before the person named in the visa. It may be imposed on the 300." },
    {
      id: "celebrant",
      term: "Celebrant",
      definition: "The person who will officiate at your wedding. Home Affairs suggests a letter from them confirming a wedding date within nine months of grant.",
    },
    {
      id: "impediment",
      term: "Legal impediment",
      definition: "A legal reason you can't marry, such as an earlier marriage that hasn't been dissolved. There must be none when the visa is decided.",
    },
    {
      id: "sponsor-limits",
      term: "Sponsorship limits",
      definition: "Your fiance or fiancee can't sponsor you if two other partners were already granted visas on their sponsorship. Nor can they within five years of sponsoring someone, or of being sponsored as a partner. Compelling circumstances can be an exception.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The reference number of your application. Your sponsor enters it when lodging the sponsorship, so Home Affairs can link the two." },
    { id: "form888", term: "Form 888", definition: "A statement supporting your relationship from someone aged 18 or over who knows you both. You need two." },
    { id: "bva", term: "Bridging visa A", definition: "A visa that keeps you lawful in Australia if your 300 ends while your Partner visa application is being decided." },
    { id: "substantive", term: "Substantive visa", definition: "Your main visa, such as the 300. A bridging visa isn't a substantive visa." },
    {
      id: "forced-marriage",
      term: "Forced marriage",
      definition: "Forced marriage is a crime in Australia. The visa may be refused if either of you is found to be at risk of a forced marriage.",
    },
    {
      id: "reciprocal",
      term: "Reciprocal health care agreement",
      definition: "An agreement between Australia and some countries. Unless one applies to you, you can't enrol in Medicare on the 300 alone, so Home Affairs recommends health insurance.",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the application and sponsorship with you and your fiance or fiancee.",
  },
  finder: partnerFinder,
  fees: {
    variantLabel: "Which charges do you want to see?",
    variants: [
      {
        id: "standard",
        label: "The 300 on its own",
        hint: "Standard charge",
        primary: [{ label: "Prospective Marriage visa (300), main applicant", amount: 11710 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 5860 }],
        child: [{ label: "Each additional applicant under 18", amount: 2935 }],
      },
      {
        id: "with-partner",
        label: "The 300, then the Partner visa (820 and 801)",
        hint: "The Partner visa lodged in Australia while the 300 is still in effect",
        primary: [
          { label: "Prospective Marriage visa (300), main applicant", amount: 11710 },
          { label: "Partner visa (820 and 801) at the reduced charge", amount: 1955 },
        ],
        adult: [
          { label: "300, each additional applicant 18 or over", amount: 5860 },
          { label: "820 and 801, each additional applicant 18 or over", amount: 980 },
        ],
        child: [
          { label: "300, each additional applicant under 18", amount: 2935 },
          { label: "820 and 801, each additional applicant under 18", amount: 485 },
        ],
      },
      {
        id: "pacific",
        label: "The 300 with a Pacific Island or Timor-Leste passport",
        hint: "The main applicant holds a valid passport from an eligible country",
        primary: [{ label: "Prospective Marriage visa (300), main applicant", amount: 9600 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 4805 }],
        child: [{ label: "Each additional applicant under 18", amount: 2405 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded:
      "Not included: health examinations, police certificates, health insurance while on the 300 (Home Affairs recommends it), and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "With an eligible Pacific or Timor-Leste passport, the later Partner visa charge is A$1,600 for the main applicant while the 300 is in effect. Confirm charges for anyone else with Home Affairs.",
      "If the 300 has ceased and you hold no substantive visa, the Partner visa charge is A$2,475 (A$1,235 and A$625 for additional applicants). Any other situation attracts the full A$11,710.",
      "Charges aren't refunded if a visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Your timeline",
    title: "Your 300 dates, from grant",
    highlight: "from grant",
    subtitle: "Pick the month your 300 was granted, or might be. Your grant letter shows your exact dates.",
    startLabel: "300 granted",
    startPrompt: "When was your Prospective Marriage visa granted, or when might it be?",
    milestones: [
      {
        months: 9,
        label: "Planned wedding date",
        detail: "Home Affairs suggests a [[celebrant|celebrant's]] letter for a wedding within nine months of grant. The shortest visa period also ends around here, so check your grant letter.",
        kind: "goal",
      },
      {
        months: 15,
        label: "Visa ends at the latest",
        detail: "No 300 runs beyond 15 months from grant, and it can't be extended. Marry, then apply for the 820 and 801, before your own end date.",
        kind: "end",
      },
    ],
    footnote:
      "First enter Australia before the first entry date in your grant letter. Then marry, and apply in Australia for the 820 and 801 while the 300 is still in effect to keep the A$1,955 charge. These dates are a guide only.",
  },
};
