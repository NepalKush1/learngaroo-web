import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { partnerFinder } from "./partner-finder";

// Interactive explainer for the Partner visa (onshore), subclasses 820 and
// 801. Every figure matches data/visas/family-partner.ts (checked against
// Home Affairs and the Migration Regulations on 12 October 2026).

export const partnerVisaOnshore820801Explainer: VisaExplainer = {
  slug: "partner-visa-onshore-820-801",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Married to, or the de facto partner of, an Australian citizen, permanent resident or eligible New Zealand citizen? This visa lets you stay in Australia with them, first on the 820, then permanently.",
  bigIdeas: [
    { title: "A genuine relationship", body: "You're married, or de facto partners (usually for 12 months), sharing a life to the exclusion of all others.", icon: ICON.heart },
    { title: "One application, two stages", body: "You apply and pay once. The temporary 820 comes first; the permanent 801 is assessed from two years after you apply.", icon: ICON.documentText },
    { title: "You apply in Australia", body: "You must be in Australia when you lodge. On the 820 you can live, work, study and travel while you wait.", icon: ICON.mapPin },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your partner, aged 18 or over", icon: ICON.heart },
    { label: "Relationship", value: "Married, or de facto (usually 12 months)", icon: ICON.users },
    { label: "Where you apply", value: "In Australia", icon: ICON.mapPin },
    { label: "Work and study", value: "Full rights once the 820 is granted", icon: ICON.briefcase },
    { label: "Permanent stage", value: "Subclass 801, from 2 years after you apply", icon: ICON.home },
    { label: "Visa charge", value: "A$11,710 (A$1,955 for 300 holders)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "partner",
      name: "Your partner (the sponsor)",
      short: "Partner",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you, and stays your sponsor for two years after the 820 is granted.",
      does: [
        "Lodges the sponsorship using your [[trn|TRN]], with no charge",
        "Provides police certificates and consents to disclose any relevant convictions",
        "Must not be caught by the [[sponsor-limits|sponsorship limits]]",
        "Makes a statutory declaration about your relationship at [[stage2|Stage 2]]",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply in Australia and show your relationship is genuine and continuing.",
      does: [
        "Lodge one application for the 820 and 801, and pay A$11,710",
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
        "Assesses the relationship and decides the 820",
        "Assesses the 801 from two years after you applied",
        "Can ask for health checks, police certificates or more information",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply in Australia",
      detail: "You lodge one online application for the 820 and the 801, pay the charge and get a [[trn|TRN]]. If you hold a [[substantive|substantive visa]], a [[bva|Bridging visa A]] comes with it.",
    },
    {
      from: "partner",
      to: "government",
      label: "Partner sponsors",
      detail: "Your partner lodges the sponsorship using your TRN, with police certificates and consent to disclose any relevant convictions.",
    },
    {
      from: "government",
      to: "you",
      label: "820 granted",
      detail: "Home Affairs grants the temporary 820. You can work, study, travel and enrol in Medicare.",
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
      label: "801: permanent",
      detail: "If the relationship is still genuine and continuing, the permanent 801 is granted, with a five-year [[travel-facility|travel facility]].",
    },
  ],
  journeyTitle: "From your application to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check the relationship and your sponsor",
      who: ["you", "partner"],
      description: "Work out whether you apply as a spouse or a [[de-facto|de facto partner]], and whether your partner can sponsor you.",
      points: [
        "De facto couples usually need 12 months together before applying",
        "The 12-month rule doesn't apply to a [[registered|registered relationship]]",
        "Check your visa for [[c8503|condition 8503]] and any regional visa holding period",
        "Check your partner isn't caught by the [[sponsor-limits|sponsorship limits]]",
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
        "Identity documents, and proof that any earlier relationships ended",
        "Label documents clearly: up to 100 attachments per applicant",
      ],
      youHold: "A relationship history, witness statements and documents for each aspect",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Apply",
      title: "You lodge Stage 1 in Australia",
      who: ["you", "government"],
      description: "Apply online in ImmiAccount while you're in Australia, and pay one charge that covers both stages.",
      points: [
        "A$11,710, or A$1,955 if you hold a 300 and married your sponsor",
        "Give your partner your [[trn|TRN]]",
        "A [[bva|Bridging visa A]] if you hold a [[substantive|substantive visa]]",
        "No substantive visa? [[schedule3|Schedule 3]] applies",
      ],
      youHold: "A TRN, an acknowledgement letter and, if you held a substantive visa, a Bridging visa A",
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
      title: "Health, character and keeping it current",
      who: ["you", "government"],
      description: "Do health examinations when ImmiAccount prompts you, and provide police certificates and Form 80.",
      points: [
        "Health results and police certificates are valid for 12 months",
        "Keep adding fresh relationship evidence",
        "Tell Home Affairs about any change in your circumstances",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "Health and character clearances on file",
      icon: ICON.shieldCheck,
    },
    {
      id: "temporary",
      short: "820",
      title: "The temporary 820 is granted",
      who: ["government", "you"],
      description: "You can be in or outside Australia when the 820 is decided. It lasts until the 801 is decided.",
      points: [
        "Full work and study rights, and Medicare",
        "Travel in and out as often as you like",
        "Don't apply for or accept another visa: it ends your path to the 801",
      ],
      youHold: "A subclass 820 visa",
      icon: ICON.checkBadge,
    },
    {
      id: "stage2",
      short: "Stage 2",
      title: "Stage 2: two years after you applied",
      who: ["you", "partner"],
      description: "From the second anniversary of lodgement, you lodge [[stage2|Stage 2]] evidence so the 801 can be assessed. Don't send it earlier.",
      points: [
        "Your partner's statutory declaration about the relationship",
        "Updated evidence across the four aspects",
        "Two further Form 888 statements, and police certificates",
        "No wait if you were in a [[long-term|long-term partner relationship]] when you applied",
      ],
      youHold: "Stage 2 documents lodged",
      icon: ICON.calendarDays,
    },
    {
      id: "permanent",
      short: "PR",
      title: "The permanent 801 is granted",
      who: ["government", "you"],
      description: "You're a permanent resident from the grant date, whether you're in or outside Australia.",
      points: [
        "A five-year [[travel-facility|travel facility]]",
        "Citizenship once you meet the residence requirement",
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
          value: "short",
          label: "De facto for under 12 months, not registered",
          status: "stop",
          note: "The 12-month rule applies unless you register the relationship, show compelling and compassionate circumstances, or meet the exception for partners of permanent humanitarian visa holders. Time dating or online may not count.",
        },
        {
          value: "engaged",
          label: "Engaged, not yet married",
          status: "stop",
          note: "An engagement isn't enough for this visa: you must be married or de facto when you apply. From outside Australia, engaged couples can use the Prospective Marriage visa (subclass 300).",
          link: { label: "Prospective Marriage visa", href: "/visas/family/prospective-marriage-visa-300" },
        },
      ],
    },
    {
      id: "where",
      topic: "Where you are",
      question: "Where are you now, and on what kind of visa?",
      options: [
        { value: "visa", label: "In Australia, on a visa that isn't a bridging visa", status: "ok", note: "You can apply in Australia, and a [[bva|Bridging visa A]] comes with the application." },
        {
          value: "bridging",
          label: "In Australia, on a bridging visa or with no visa",
          status: "todo",
          note: "You'd need to meet [[schedule3|Schedule 3]], including applying within 28 days of your last [[substantive|substantive visa]] ending, unless Home Affairs accepts compelling reasons. You'd also lodge extra documents with the application.",
          link: { label: "Schedule 3 explained", href: "/visas/appeals-and-review/schedule-3-criteria" },
        },
        {
          value: "outside",
          label: "Outside Australia",
          status: "stop",
          note: "You must be in Australia when you lodge this visa. From outside Australia, the Partner visa (subclasses 309 and 100) is the usual route.",
          link: { label: "Partner visa (309 and 100)", href: "/visas/family/partner-visa-offshore-309-100" },
        },
      ],
    },
    {
      id: "conditions",
      topic: "Visa conditions",
      question: "Does your current or last visa stop you applying?",
      help: "Two rules can block a valid application: [[c8503|condition 8503]] and the holding period for regional visas.",
      options: [
        { value: "none", label: "No: no condition 8503, and not a 491 or 494 held for under three years", status: "ok", note: "Neither rule stops you lodging." },
        { value: "waived", label: "It has condition 8503, but Home Affairs has waived it", status: "ok", note: "With the waiver granted first, you can make a valid application." },
        {
          value: "c8503",
          label: "It has condition 8503 (no further stay), not waived",
          status: "stop",
          note: "You can't make a valid application until the condition is waived. Lodging anyway makes the application invalid, and the charge isn't refunded.",
          link: { label: "Condition 8503 waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        {
          value: "regional",
          label: "I've held a 491 or 494 regional visa for less than three years",
          status: "stop",
          note: "You must have held the 491 or 494 for at least three years, and substantially complied with its conditions. Older regional visas, such as the 475 or 487, need two years.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check the conditions on your visa grant letter before you lodge." },
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
          note: "Home Affairs must refuse the sponsorship unless there are compelling circumstances, such as a dependent child of you both or a long-standing relationship.",
          link: { label: "Get advice on the limits", href: "/bookings" },
        },
        {
          value: "twice",
          label: "They've already sponsored two other partners",
          status: "stop",
          note: "A third partner sponsorship can't be approved unless there are compelling circumstances affecting your partner.",
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
    {
      id: "evidence",
      topic: "Evidence",
      question: "Can you show your relationship across finances, household, social life and commitment?",
      options: [
        { value: "all", label: "Yes, across all four", status: "ok", note: "Keep it organised under the four aspects, and keep adding to it while you wait." },
        {
          value: "some",
          label: "Some aspects, but not all",
          status: "todo",
          note: "Thin or lopsided evidence, such as joint finances but nothing social, can lead to a finding that the relationship isn't genuine. Gather what you genuinely have for each aspect.",
          link: { label: "Open the evidence builder", href: "#evidence" },
        },
        {
          value: "unsure",
          label: "I'm not sure what counts",
          status: "todo",
          note: "The evidence builder lists the kinds of documents for each of the [[four-aspects|four aspects]].",
          link: { label: "Open the evidence builder", href: "#evidence" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "We must have lived together for 12 months before we can apply.",
      fact: "Only de facto couples, and not if the relationship is registered with a state or territory or there are compelling and compassionate circumstances. Married couples don't face the 12-month rule, but still need a genuine relationship.",
    },
    {
      myth: "The 801 is a second application with a second charge.",
      fact: "No. One application and one charge (A$11,710 from 1 July 2026) cover both the 820 and the 801. You lodge Stage 2 evidence from two years after you applied, with no further charge.",
    },
    {
      myth: "If my visa has expired, I can't apply for a partner visa.",
      fact: "You may still be able to. You'd need to meet Schedule 3, including applying within 28 days of your last visa ending, unless Home Affairs accepts compelling reasons not to apply it. Even a section 48 bar doesn't stop a partner visa application.",
    },
    {
      myth: "I'll have to wait two years for the 801 no matter what.",
      fact: "Not if you were in a long-term partner relationship when you applied: at least three years, or two years with a dependent child of you both. Then the 801 may be granted soon after the 820.",
    },
    {
      myth: "Once I hold the 820, taking another visa won't matter.",
      fact: "It does. Being granted any other visa means you can no longer be granted the 801. That includes a Special Category visa given at the border to a New Zealand passport holder.",
    },
    {
      myth: "If the relationship ends because of family violence, I lose my visa.",
      fact: "Not necessarily. If you, or a dependent child, experienced family violence by your sponsor, you may still be granted the 820 and the 801. Home Affairs first needs to accept the relationship was genuine before it ended.",
    },
    {
      myth: "Time spent dating counts towards the 12 months.",
      fact: "Home Affairs says time spent dating or in an online relationship may not count. What matters is the de facto relationship in the 12 months right before you apply.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      tone: "green",
      intro: "Your part is a valid application, honest evidence of your relationship, and keeping your path to the 801 open.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Confirm you're married, or de facto for 12 months (or have a [[registered|registered relationship]])",
            "Check your visa for [[c8503|condition 8503]] and any regional visa holding period",
            "Collect evidence across the [[four-aspects|four aspects]] and write your relationship history",
            "Ask two people who know you both for [[form888|Form 888]] statements",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge Stage 1 in ImmiAccount while you're in Australia",
            "Pay A$11,710, plus A$5,860 for each additional applicant 18 or over and A$2,935 for each under 18",
            "Give your partner the [[trn|TRN]] for the sponsorship",
            "Have health checks, and give police certificates and Form 80 when asked",
          ],
        },
        {
          title: "While you wait, and after",
          items: [
            "Keep your evidence current and tell Home Affairs about changes",
            "Don't apply for or accept another visa while you hold the 820",
            "Get a Bridging visa B (A$575) before travelling on a [[bva|Bridging visa A]]",
            "Lodge [[stage2|Stage 2]] evidence from two years after you applied",
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
            "Get an AFP check, plus police certificates for any country where you spent 12 months or more in the last 10 years since turning 16",
          ],
        },
        {
          title: "When you sponsor",
          items: [
            "Lodge the sponsorship in ImmiAccount using your partner's [[trn|TRN]], with no charge",
            "Attach identity and status documents (permanent residents and eligible New Zealand citizens show they usually live here)",
            "Give written consent to disclose any relevant convictions to your partner",
          ],
        },
        {
          title: "Later on",
          items: [
            "You stay the sponsor for two years after the 820 is granted",
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
    { id: "registered", term: "Registered relationship", definition: "A relationship registered under the law of an Australian state or territory. It removes the 12-month de facto requirement." },
    {
      id: "sponsor-limits",
      term: "Sponsorship limits",
      definition: "Your partner can't sponsor you if two other partners were already granted visas on their sponsorship. Nor can they within five years of sponsoring someone, or of being sponsored as a partner. Compelling circumstances can be an exception.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The reference number of your application. Your partner enters it when lodging the sponsorship, so Home Affairs can link the two." },
    { id: "substantive", term: "Substantive visa", definition: "Your main visa, such as a visitor, student or work visa. A bridging visa isn't a substantive visa." },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "Granted with your application if you hold a substantive visa. It starts when your current visa ends, keeps you lawful while you wait, and carries that visa's work conditions.",
    },
    {
      id: "schedule3",
      term: "Schedule 3",
      definition: "Extra criteria if you apply without a substantive visa: usually applying within 28 days of your last one ending, factors beyond your control and compelling reasons. Home Affairs can decide not to apply them for compelling reasons.",
    },
    { id: "c8503", term: "Condition 8503", definition: "A 'no further stay' condition on some visas. While it applies, you can't make a valid application in Australia unless Home Affairs waives it first." },
    { id: "form888", term: "Form 888", definition: "A statement supporting your relationship from someone aged 18 or over who knows you both. You need two at Stage 1 and two more at Stage 2." },
    { id: "stage2", term: "Stage 2", definition: "The permanent stage. From two years after you applied, you lodge updated evidence so Home Affairs can assess the 801." },
    {
      id: "long-term",
      term: "Long-term partner relationship",
      definition: "A relationship of at least three years when you apply, or two years if you have a dependent child together. It removes the two-year wait for the 801.",
    },
    { id: "section48", term: "Section 48 bar", definition: "A rule that stops some people applying for most visas in Australia after a refusal or cancellation. It doesn't stop a partner visa application." },
    {
      id: "family-violence",
      term: "Family violence provisions",
      definition: "Rules that can still allow the 820 and 801 if the relationship ends because you, or a dependent child, experienced family violence by your sponsor.",
    },
    { id: "travel-facility", term: "Travel facility", definition: "How long you can leave and re-enter Australia on a permanent visa: five years from the 801 grant. After that you need a Resident Return visa." },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule against bogus documents and false or misleading information, including an undeclared earlier relationship. A breach leads to refusal and a three-year bar on most visas.",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the application and sponsorship with you and your partner.",
  },
  verifiedExtras: [
    {
      fact: "Partners of New Zealand citizens who are not eligible New Zealand citizens usually use the New Zealand Citizen Family Relationship visa (subclass 461).",
      source: "/visas/family/new-zealand-citizen-family-relationship-visa-461",
    },
    {
      fact: "The Partner visa (subclasses 309 and 100) is the offshore equivalent of the 820 and 801: you apply from outside Australia.",
      source: "/visas/family/partner-visa-offshore-309-100",
    },
    {
      fact: "The Prospective Marriage visa (subclass 300) is for people outside Australia who intend to marry an Australian citizen, permanent resident or eligible New Zealand citizen they have met in person as adults.",
      source: "/visas/family/prospective-marriage-visa-300",
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
          "Household bills in both names",
          "Property or major assets you own together",
          "Records of how you share day-to-day expenses",
        ],
      },
      {
        id: "household",
        title: "Household",
        icon: ICON.home,
        why: "How you live day to day: your living arrangements, how you share the housework and any children.",
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
          "Proof you've told government or businesses about the relationship",
          "Records of joint activities and travel",
        ],
      },
      {
        id: "commitment",
        title: "Commitment",
        icon: ICON.heart,
        why: "How long you've been together and lived together, your support for each other, and whether you see it as long term.",
        items: [
          "A written history of your relationship",
          "Knowledge of each other's background and family",
          "Combined personal affairs",
          "Contact while you've been apart",
          "The terms of your wills, if you have them",
        ],
      },
    ],
    footnote:
      "There's no set number of documents: Home Affairs considers all the circumstances. Include only genuine documents, label them clearly and attach each one once (up to 100 attachments per applicant).",
  },
  fees: {
    variantLabel: "Which charge applies to you?",
    variants: [
      {
        id: "standard",
        label: "Standard charge",
        hint: "Most applicants",
        primary: [{ label: "Partner visa (820 and 801), main applicant", amount: 11710 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 5860 }],
        child: [{ label: "Each additional applicant under 18", amount: 2935 }],
      },
      {
        id: "pmv",
        label: "Prospective Marriage visa holder",
        hint: "You hold a 300 and have married your sponsor",
        primary: [{ label: "Partner visa (820 and 801), 300 holder", amount: 1955 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 980 }],
        child: [{ label: "Each additional applicant under 18", amount: 485 }],
      },
      {
        id: "former-pmv",
        label: "Former Prospective Marriage visa holder",
        hint: "You married, your 300 has ceased and you hold no substantive visa",
        primary: [{ label: "Partner visa (820 and 801), former 300 holder", amount: 2475 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 1235 }],
        child: [{ label: "Each additional applicant under 18", amount: 625 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded:
      "Not included: health examinations, police certificates, translations, a Bridging visa B (A$575) if you travel on a Bridging visa A, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "One charge covers both the 820 and the 801: there's no further charge at the permanent stage. The charge isn't refunded if the visa is refused.",
      "Pacific Island and Timor-Leste passport holders pay a lower charge from 1 July 2026, applied automatically in ImmiAccount. This estimator doesn't show that amount, so confirm it with Home Affairs.",
      "A baby born after you lodge must be notified to Home Affairs, and is usually added without charge.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Your timeline",
    title: "When the 801 can be assessed",
    highlight: "801",
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
        detail: "From the second anniversary of lodgement, lodge your [[stage2|Stage 2]] evidence so Home Affairs can assess the 801. Don't send it earlier.",
        kind: "goal",
      },
    ],
    footnote:
      "If you were in a long-term partner relationship when you applied, the two-year wait doesn't apply. That means at least three years together, or two years with a dependent child of you both. Check the exact date in ImmiAccount. These dates are not processing times.",
  },
};
