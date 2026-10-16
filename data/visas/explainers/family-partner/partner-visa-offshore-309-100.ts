import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { partnerFinder } from "./partner-finder";

// Interactive explainer for the Partner visa (offshore), subclasses 309 and
// 100. Every figure matches data/visas/family-partner.ts (checked against
// Home Affairs and the Migration Regulations on 12 October 2026).

export const partnerVisaOffshore309100Explainer: VisaExplainer = {
  slug: "partner-visa-offshore-309-100",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Married to, the de facto partner of, or engaged to an Australian citizen, permanent resident or eligible New Zealand citizen? From outside Australia, this visa lets you move here and leads to permanent residence.",
  bigIdeas: [
    { title: "Your partner sponsors you", body: "Your partner, an Australian citizen, permanent resident or eligible New Zealand citizen aged 18 or over, sponsors you.", icon: ICON.heart },
    { title: "One application, two stages", body: "You apply and pay once. The provisional 309 comes first; the permanent 100 is assessed from two years after you apply.", icon: ICON.documentText },
    { title: "You apply from outside Australia", body: "You, and anyone applying with you, must be outside Australia when you lodge. You can be in or outside at grant.", icon: ICON.globeAsiaAustralia },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your partner, aged 18 or over", icon: ICON.heart },
    { label: "Relationship", value: "Married, de facto, or engaged to marry", icon: ICON.users },
    { label: "Where you apply", value: "Outside Australia", icon: ICON.globeAsiaAustralia },
    { label: "Work and study", value: "Full rights once the 309 is granted", icon: ICON.briefcase },
    { label: "Permanent stage", value: "Subclass 100, from 2 years after you apply", icon: ICON.home },
    { label: "Visa charge", value: "A$11,710 (A$9,600 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "partner",
      name: "Your partner (the sponsor)",
      short: "Partner",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you, and stays your sponsor for two years after the 309 is granted or you first arrive.",
      does: [
        "Lodges the sponsorship using your [[trn|TRN]], with no charge",
        "Provides police certificates and consents to disclose any relevant convictions",
        "Must not be caught by the [[sponsor-limits|sponsorship limits]]",
        "Nominates you for the 100, with a statutory declaration at [[stage2|Stage 2]]",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply from outside Australia and show your relationship is genuine and continuing.",
      does: [
        "Lodge one application for the 309 and 100, and pay A$11,710",
        "Show the relationship across its [[four-aspects|four aspects]]",
        "Meet the health, character and other requirements",
        "Lodge [[stage2|Stage 2]] evidence two years after you apply",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks your relationship, your sponsor and you, then decides each stage.",
      does: [
        "Approves the sponsorship",
        "Assesses the relationship and decides the 309",
        "Assesses the 100 from two years after you applied",
        "Can ask for health checks, police certificates or more information",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply from overseas",
      detail: "You lodge one online application for the 309 and the 100 while you're outside Australia, pay the charge and get a [[trn|TRN]].",
    },
    {
      from: "partner",
      to: "government",
      label: "Partner sponsors",
      detail: "Your partner lodges the sponsorship using your TRN, from inside or outside Australia, with police certificates and consent to disclose any relevant convictions.",
    },
    {
      from: "government",
      to: "you",
      label: "309 granted",
      detail: "Home Affairs grants the provisional 309. If you're outside Australia, you enter before the [[first-entry|first entry date]] in your grant letter.",
    },
    {
      from: "you",
      to: "government",
      label: "Stage 2 evidence",
      detail: "From two years after you applied, you lodge updated relationship evidence and your partner's statutory declaration.",
    },
    {
      from: "government",
      to: "you",
      label: "100: permanent",
      detail: "If the relationship is still genuine and continuing, the permanent 100 is granted, with a five-year [[travel-facility|travel facility]].",
    },
  ],
  journeyTitle: "From overseas to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check the relationship and your sponsor",
      who: ["you", "partner"],
      description: "Work out whether you apply as a spouse, a [[de-facto|de facto partner]] or an [[intended-spouse|intended spouse]], and whether your partner can sponsor you.",
      points: [
        "De facto couples usually need 12 months together before applying",
        "Engaged? You must normally marry before the 309 is granted",
        "Check your partner isn't caught by the [[sponsor-limits|sponsorship limits]]",
        "Want to marry in Australia? Compare the [[pmv|Prospective Marriage visa]]",
      ],
      youHold: "A clear relationship basis and an eligible sponsor",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Build your evidence across four aspects",
      who: ["you", "partner"],
      description: "Collect documents for the [[four-aspects|four aspects]] of your relationship: financial, household, social and commitment.",
      points: [
        "A written history of your relationship",
        "Two [[form888|Form 888]] statements from people who know you both",
        "Living apart for now? Show it isn't permanent",
        "NAATI or detailed translations for documents not in English",
      ],
      youHold: "A relationship history, witness statements and documents for each aspect",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Apply",
      title: "You lodge from outside Australia",
      who: ["you", "government"],
      description: "Apply online in ImmiAccount while you're outside Australia, and pay one charge that covers both stages.",
      points: [
        "A$11,710, or A$9,600 with an eligible Pacific or Timor-Leste passport",
        "Everyone applying must be outside Australia when you lodge",
        "Give your partner your [[trn|TRN]]",
      ],
      youHold: "A lodged application for the 309 and 100, and a TRN",
      cost: "A$11,710, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Your partner lodges the sponsorship",
      who: ["partner"],
      description: "Your partner lodges the sponsorship form in ImmiAccount using your TRN, from inside or outside Australia.",
      points: ["No sponsorship charge", "Australian and overseas police certificates", "Consent to disclose any relevant convictions to you"],
      youHold: "A lodged sponsorship linked to your application",
      cost: "No charge",
      icon: ICON.userPlus,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and waiting",
      who: ["you", "government"],
      description: "Have health examinations and provide police certificates and Form 80 when asked.",
      points: [
        "Health results and police certificates are valid for 12 months",
        "Keep adding fresh relationship evidence, and report changes",
        "Visiting Australia meanwhile? Keep that other visa valid",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "Health and character clearances on file",
      icon: ICON.shieldCheck,
    },
    {
      id: "provisional",
      short: "309",
      title: "The provisional 309 is granted",
      who: ["government", "you"],
      description: "You can be in or outside Australia at grant. The 309 lasts until the 100 is decided.",
      points: [
        "Outside Australia? Enter before the [[first-entry|first entry date]]",
        "[[c8502|Condition 8502]] may mean you can't enter before your sponsor",
        "Full work and study rights, Medicare and unlimited travel",
        "Don't accept another visa: it ends your path to the 100",
      ],
      youHold: "A subclass 309 visa",
      icon: ICON.checkBadge,
    },
    {
      id: "stage2",
      short: "Stage 2",
      title: "Stage 2: two years after you applied",
      who: ["you", "partner"],
      description: "After the second anniversary of lodgement, you lodge [[stage2|Stage 2]] evidence so the 100 can be assessed.",
      points: [
        "Your partner's statutory declaration about the relationship",
        "Updated evidence across the four aspects",
        "Two new Form 888 statements, and police certificates",
        "No wait if you were in a [[long-term|long-term partner relationship]] when you applied",
      ],
      youHold: "Stage 2 documents lodged",
      icon: ICON.calendarDays,
    },
    {
      id: "permanent",
      short: "PR",
      title: "The permanent 100 is granted",
      who: ["government", "you"],
      description: "You're a permanent resident from the grant date, whether you're in or outside Australia.",
      points: [
        "A five-year [[travel-facility|travel facility]]",
        "For citizenship, residence counts from grant if you're in Australia, or first entry if you're outside",
        "After five years, a Resident Return visa to re-enter",
      ],
      youHold: "Permanent residence",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next comes the detail: your evidence, your partner's sponsorship and the documents for you both.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on all the circumstances of your relationship.",
  },
  quiz: [
    {
      id: "sponsor",
      topic: "Your partner",
      question: "Is your partner an Australian citizen, permanent resident or eligible New Zealand citizen, aged 18 or over?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Your partner can sponsor you, as long as the [[sponsor-limits|sponsorship limits]] don't apply." },
        {
          value: "nz",
          label: "They're a New Zealand citizen, but I'm not sure they're 'eligible'",
          status: "todo",
          note: "Only an eligible New Zealand citizen (a protected Special Category visa holder) can sponsor. If your partner isn't one, the New Zealand Citizen Family Relationship visa (subclass 461) is the usual option.",
          link: { label: "The 461 visa", href: "/visas/family/new-zealand-citizen-family-relationship-visa-461" },
        },
        {
          value: "no",
          label: "No, they hold a temporary visa",
          status: "stop",
          note: "Your sponsor must be an Australian citizen, permanent resident or eligible New Zealand citizen. Other visas may suit you better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "relationship",
      topic: "Relationship",
      question: "Which best describes your relationship?",
      options: [
        { value: "married", label: "Married, in a marriage valid in Australia", status: "ok", note: "Married couples don't face the 12-month rule, but still need to show a genuine and continuing relationship." },
        { value: "defacto", label: "De facto partners for 12 months or more", status: "ok", note: "You meet the 12-month rule if the 12 months run right up to the day you apply." },
        {
          value: "registered",
          label: "De facto for under 12 months, with a registered relationship",
          status: "ok",
          note: "A [[registered|registered relationship]] is an exception to the 12-month rule.",
        },
        {
          value: "engaged",
          label: "Engaged, and we plan to marry before the visa is decided",
          status: "ok",
          note: "You can apply as an [[intended-spouse|intended spouse]]. The marriage must normally take place before the 309 is granted, and be valid under Australian law.",
        },
        {
          value: "short",
          label: "De facto for under 12 months, not registered",
          status: "stop",
          note: "The 12-month rule applies unless you register the relationship, show compelling and compassionate circumstances, or meet the exception for partners of permanent humanitarian visa holders. Time dating or online may not count.",
        },
      ],
    },
    {
      id: "where",
      topic: "Where you lodge",
      question: "Where will you be when you lodge the application?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You, and anyone applying with you, must be outside Australia at the moment you lodge." },
        {
          value: "inside",
          label: "In Australia",
          status: "todo",
          note: "You'd need to be outside Australia when you lodge. If you hold a [[substantive|substantive visa]] without condition 8503, the onshore 820 and 801 may suit better.",
          link: { label: "Partner visa (820 and 801)", href: "/visas/family/partner-visa-onshore-820-801" },
        },
      ],
    },
    {
      id: "together",
      topic: "Living arrangements",
      question: "How do you and your partner live?",
      options: [
        { value: "together", label: "We live together", status: "ok", note: "Your living arrangements help show the household aspect of your relationship." },
        {
          value: "apart",
          label: "We live in different countries for now, for work or family reasons",
          status: "todo",
          note: "That's possible, but you'll need to show you're not living separately and apart on a permanent basis.",
        },
        {
          value: "mostly-apart",
          label: "We've mostly lived apart",
          status: "todo",
          note: "Couples who've mostly lived apart can find the household and financial aspects hard to show. Gather what you genuinely have for each aspect.",
          link: { label: "Open the evidence builder", href: "#evidence" },
        },
      ],
    },
    {
      id: "limits",
      topic: "Sponsor history",
      question: "Has your partner sponsored a partner before, or been sponsored as a partner themselves?",
      options: [
        { value: "never", label: "No, never", status: "ok", note: "The sponsorship limits shouldn't affect you." },
        { value: "once", label: "Once, more than five years ago", status: "ok", note: "That's usually fine: the limits catch a third sponsorship, or sponsoring or being sponsored within the last five years." },
        {
          value: "recent",
          label: "Yes, within the last five years",
          status: "stop",
          note: "Sponsorship must be refused unless there are compelling circumstances. Get advice before you apply.",
          link: { label: "Get advice on the limits", href: "/bookings" },
        },
        {
          value: "twice",
          label: "They've already sponsored two other partners",
          status: "stop",
          note: "A third partner sponsorship must be refused unless there are compelling circumstances.",
        },
      ],
    },
    {
      id: "history",
      topic: "Immigration history",
      question: "Have you been refused a visa, had one cancelled, or been removed from Australia?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Your immigration history shouldn't raise extra issues." },
        {
          value: "refused",
          label: "A visa was refused or cancelled",
          status: "todo",
          note: "It doesn't automatically bar this visa, but Home Affairs considers your history. A refusal under [[pic4020|PIC 4020]] in the last three years will usually prevent grant.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "removed",
          label: "I was removed or deported from Australia",
          status: "todo",
          note: "[[special-return|Special return criteria]] apply, such as not having been removed from Australia in the last 12 months. Get advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "character",
      topic: "Health and character",
      question: "Any health or character concerns for you or your partner?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "You'll still have health examinations and give police certificates, and your partner gives police certificates too." },
        {
          value: "you",
          label: "I have a significant health condition or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out (a health waiver is available for this visa), but it needs careful preparation and advice.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "partner",
          label: "My partner has a criminal record",
          status: "todo",
          note: "A significant record for a relevant offence, such as violence with a sentence of 12 months or more, means the sponsorship is refused. Home Affairs can still approve it if that's reasonable.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "We have to be married before we apply.",
      fact: "No. You can apply as a de facto partner (usually 12 months together) or as an intended spouse. If you're engaged, the marriage must normally take place before the 309 is granted.",
    },
    {
      myth: "I can lodge the 309 while I'm visiting Australia.",
      fact: "No. You, and everyone applying with you, must be outside Australia at the moment you lodge. You can visit on another visa afterwards, and you can be in Australia when the 309 is granted.",
    },
    {
      myth: "The 100 is a second application with a second charge.",
      fact: "No. One application and one charge (A$11,710 from 1 July 2026) cover the 309 and the 100. You lodge Stage 2 evidence from two years after you applied, with no further charge.",
    },
    {
      myth: "Living in different countries means we can't apply.",
      fact: "Not on its own. Couples who live apart for work or family reasons can apply, but must show they're not living separately and apart on a permanent basis.",
    },
    {
      myth: "Everyone waits two years for the 100.",
      fact: "Not everyone. The wait doesn't apply if you were in a long-term partner relationship when you applied: three years, or two with a dependent child. Nor does it apply if your sponsor holds or held a permanent humanitarian visa and declared the relationship before it was granted.",
    },
    {
      myth: "If our relationship ends, the visa is always lost.",
      fact: "Not always. You may still be granted the 309 or 100 if your sponsor died. The same goes if you've entered Australia since applying and you, or a family member, experienced family violence by the sponsor. Home Affairs first needs to accept the relationship was genuine.",
    },
    {
      myth: "A Special Category visa at the border doesn't matter.",
      fact: "It does. If a New Zealand passport holder is granted a 444 at the border, it replaces the 309 and ends eligibility for the 100. Tell border officers you don't want one.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      tone: "green",
      intro: "Your part is a valid application lodged from outside Australia, honest evidence of your relationship, and keeping your path to the 100 open.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Confirm you're married, de facto for 12 months (or registered), or engaged to marry",
            "Collect evidence across the [[four-aspects|four aspects]] and write your relationship history",
            "Ask two people who know you both for [[form888|Form 888]] statements",
            "Arrange translations for documents not in English",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge in ImmiAccount while you're outside Australia",
            "Pay A$11,710 (A$9,600 with an eligible Pacific or Timor-Leste passport), plus any additional applicant charges",
            "Give your partner the [[trn|TRN]] for the sponsorship",
            "Have health checks, and give police certificates and Form 80 when asked",
          ],
        },
        {
          title: "While you wait, and after",
          items: [
            "Keep your evidence current and tell Home Affairs about changes",
            "If you're outside Australia at grant, enter before the [[first-entry|first entry date]]",
            "Don't accept another visa while you hold the 309",
            "Lodge [[stage2|Stage 2]] evidence after the second anniversary of lodgement",
          ],
        },
      ],
    },
    {
      id: "sponsor",
      label: "I'm the sponsor",
      tone: "pink",
      intro: "Your part is the sponsorship, your own police checks, and a statutory declaration at the permanent stage.",
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
            "Lodge the sponsorship in ImmiAccount using your partner's [[trn|TRN]], with no charge",
            "Attach identity and status documents (permanent residents and eligible New Zealand citizens show they usually live in Australia)",
            "Give written consent to disclose any relevant convictions to your partner",
          ],
        },
        {
          title: "Later on",
          items: [
            "You stay the sponsor for two years after the 309 is granted or your partner first arrives",
            "At [[stage2|Stage 2]], make a Commonwealth statutory declaration about your relationship",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "four-aspects",
      term: "Four aspects",
      definition: "The four parts of a relationship Home Affairs looks at. Financial: money and assets. Household: living arrangements and housework. Social: how others see you. Commitment: time together, support and long-term plans.",
    },
    {
      id: "de-facto",
      term: "De facto partner",
      definition: "The person you share a committed life with, to the exclusion of all others, without being married. You live together, or don't live apart permanently.",
    },
    {
      id: "intended-spouse",
      term: "Intended spouse",
      definition: "Someone engaged to marry their Australian partner. You can apply for the 309 this way, but the marriage must normally take place before the 309 is granted.",
    },
    { id: "registered", term: "Registered relationship", definition: "A relationship registered under the law of an Australian state or territory. It removes the 12-month de facto requirement." },
    {
      id: "sponsor-limits",
      term: "Sponsorship limits",
      definition: "Your partner can't sponsor you if they've already sponsored two other partners. Nor can they within five years of sponsoring a partner, or of being sponsored as one. Compelling circumstances can be an exception.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The reference number of your application. Your partner enters it when lodging the sponsorship, so Home Affairs can link the two." },
    { id: "form888", term: "Form 888", definition: "A statement supporting your relationship from someone aged 18 or over who knows you both. You need two when you apply and two more at Stage 2." },
    { id: "first-entry", term: "First entry date", definition: "The date in your grant letter by which you must first enter Australia, if you're outside Australia when the visa is granted." },
    { id: "stage2", term: "Stage 2", definition: "The permanent stage. After the second anniversary of lodgement, you lodge updated evidence so Home Affairs can assess the 100." },
    {
      id: "long-term",
      term: "Long-term partner relationship",
      definition: "A relationship of at least three years when you apply, or two years if you have a dependent child together. It removes the two-year wait for the 100.",
    },
    { id: "substantive", term: "Substantive visa", definition: "Your main visa, such as a visitor, student or work visa. A bridging visa isn't a substantive visa." },
    { id: "c8502", term: "Condition 8502", definition: "You must not enter Australia before the person named in your visa, usually your sponsor. It may be imposed on the 309." },
    { id: "c8515", term: "Condition 8515", definition: "You must not marry or enter a de facto relationship before entering Australia. It may be imposed on family members applying with you." },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule against bogus documents and false or misleading information, including an undisclosed earlier relationship. A breach leads to refusal and a three-year bar.",
    },
    {
      id: "special-return",
      term: "Special return criteria",
      definition: "Rules for people who've been in Australia before: no deportation or criminal cancellation (5001), and not removed from Australia in the last 12 months (5002).",
    },
    { id: "pmv", term: "Prospective Marriage visa", definition: "The subclass 300, for engaged couples who want to marry in Australia. After the wedding you apply in Australia for the 820 and 801." },
    {
      id: "family-violence",
      term: "Family violence provisions",
      definition: "Rules that can still allow the visa if the relationship ends because of family violence by your sponsor. For the 309, they apply only once you've entered Australia after lodging.",
    },
    { id: "travel-facility", term: "Travel facility", definition: "How long you can leave and re-enter Australia on a permanent visa: five years from the 100 grant. After that you need a Resident Return visa." },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the application and sponsorship with you and your partner.",
  },
  verifiedExtras: [
    {
      fact: "Partners of New Zealand citizens who are not eligible New Zealand citizens usually use the New Zealand Citizen Family Relationship visa (subclass 461).",
      source: "/visas/family/new-zealand-citizen-family-relationship-visa-461",
    },
  ],
  finder: partnerFinder,
  evidence: {
    navLabel: "Evidence",
    eyebrow: "Evidence builder",
    title: "Your relationship, aspect by aspect",
    highlight: "aspect by aspect",
    subtitle: "Tick what you genuinely have. Home Affairs looks at all four aspects of your relationship together.",
    groups: [
      {
        id: "financial",
        title: "Financial",
        icon: ICON.banknotes,
        why: "How you share money: joint assets and debts, pooled money and how you split everyday costs.",
        items: [
          "Joint mortgage, lease or loan documents",
          "Joint bank account statements",
          "Bills in both names",
          "Property or major assets you own together",
          "Records of how you share day-to-day expenses",
        ],
      },
      {
        id: "household",
        title: "Household",
        icon: ICON.home,
        why: "How you live day to day: your living arrangements, housework and any children. Living in different countries for now? Show it isn't a permanent separation.",
        items: [
          "Proof of your living arrangements",
          "A statement about how you share the housework",
          "Mail or emails addressed to you both",
          "Documents showing joint responsibility for children",
        ],
      },
      {
        id: "social",
        title: "Social",
        icon: ICON.users,
        why: "Whether you present as a couple, and what friends and family understand your relationship to be.",
        items: [
          "Two Form 888 statements from people who know you both",
          "Joint invitations",
          "Records of joint activities and travel",
          "Other evidence that people know about your relationship",
        ],
      },
      {
        id: "commitment",
        title: "Commitment",
        icon: ICON.heart,
        why: "How long you've been together and lived together, your support for each other, and whether you see it as long term.",
        items: [
          "A written history of your relationship",
          "Knowledge of each other's background",
          "Contact while you've been apart",
          "The terms of your wills, if you have them",
        ],
      },
    ],
    footnote:
      "There's no set number of documents: Home Affairs considers all the circumstances. Include only genuine documents, with NAATI or detailed translations for any that aren't in English.",
  },
  fees: {
    variantLabel: "Which charge applies to you?",
    variants: [
      {
        id: "standard",
        label: "Standard charge",
        hint: "Most applicants",
        primary: [{ label: "Partner visa (309 and 100), main applicant", amount: 11710 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 5860 }],
        child: [{ label: "Each additional applicant under 18", amount: 2935 }],
      },
      {
        id: "pacific",
        label: "Pacific Island or Timor-Leste passport",
        hint: "The main applicant holds a valid passport from an eligible country",
        primary: [{ label: "Partner visa (309 and 100), main applicant", amount: 9600 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 4805 }],
        child: [{ label: "Each additional applicant under 18", amount: 2405 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded:
      "Not included: health examinations, police certificates, translations, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "One charge covers both the 309 and the 100: there's no further charge at the permanent stage. The charge isn't refunded if the visa is refused.",
      "ImmiAccount applies the Pacific Island and Timor-Leste charge automatically when the passport is recorded.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Your timeline",
    title: "When the 100 can be assessed",
    highlight: "100",
    subtitle: "Pick the month you lodged, or plan to lodge, to see the key dates on your path to permanent residence.",
    startLabel: "You lodge",
    startPrompt: "When did you lodge, or when will you lodge, your Partner visa application?",
    milestones: [
      {
        months: 12,
        label: "Checks may need redoing",
        detail: "Health results and police certificates are valid for 12 months. If yours were done around lodgement, you may need to repeat them.",
        kind: "info",
      },
      {
        months: 24,
        label: "Stage 2 opens",
        detail: "After the second anniversary of lodgement, lodge your [[stage2|Stage 2]] evidence so Home Affairs can assess the 100.",
        kind: "goal",
      },
    ],
    footnote:
      "The two-year wait doesn't apply if you were in a long-term partner relationship when you applied: three years, or two with a dependent child. Nor does it apply if your sponsor holds or held a permanent humanitarian visa and declared the relationship before it was granted. Check the exact date in ImmiAccount. These dates are not processing times.",
  },
};
