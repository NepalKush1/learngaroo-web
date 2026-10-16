import type { FinderConfig, FinderOutcome, FinderQuestion, ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { partnerFinder } from "../visas/explainers/family-partner/partner-finder";
import { childFinder } from "../visas/explainers/family-partner/child-finder";
import { parentFinder } from "../visas/explainers/family-parent/parent-finder";
import { partnerVisaOnshore820801Explainer } from "../visas/explainers/family-partner/partner-visa-onshore-820-801";

// Interactive explainer for /services/family-partner-visas. Every figure
// comes from the library pages in `pages` (data/visas/family-partner.ts and
// data/visas/family-parent.ts, checked against Home Affairs and the Migration
// Regulations on 12 October 2026). The finder, the evidence builder and the
// partner charges reuse the library explainers rather than copying them.

// ── Finder: the partner, child and parent finders behind one question ──

// A shared finder with its question and outcome ids (and every `next` that
// points at them) prefixed, so three finders can share one tree.
function prefixed(finder: FinderConfig, prefix: string) {
  const own = new Set([...finder.questions.map((question) => question.id), ...finder.outcomes.map((outcome) => outcome.id)]);
  const id = (value: string) => (own.has(value) ? `${prefix}${value}` : value);
  const question = (key: string): FinderQuestion[] =>
    finder.questions
      .filter((item) => item.id === key)
      .map((item) => ({ ...item, id: id(item.id), options: item.options.map((option) => ({ ...option, next: id(option.next) })) }));
  const outcomes: FinderOutcome[] = finder.outcomes.map((outcome) => ({ ...outcome, id: id(outcome.id) }));
  return { id, question, outcomes };
}

const partner = prefixed(partnerFinder, "p-");
const child = prefixed(childFinder, "c-");
const parent = prefixed(parentFinder, "pa-");

// The partner and child finders ask about New Zealand status in a second
// question. Here it is folded into their first question, so no path through
// the combined tree is longer than four questions.
const partnerWho: FinderQuestion = {
  id: "p-partner",
  question: "Who is your partner?",
  help: "Your partner sponsors you, so their status decides which visas are open to you. An eligible New Zealand citizen is a protected Special Category visa holder: generally someone who was in Australia on 26 February 2001 or meets the related residence rules.",
  options: [
    { label: "An Australian citizen or permanent resident", next: partner.id("relationship") },
    { label: "An eligible New Zealand citizen", hint: "A protected Special Category visa holder", next: partner.id("relationship") },
    { label: "A New Zealand citizen who isn't eligible, or I'm not sure", hint: "They hold a Special Category (444) visa only", next: partner.id("nz-461") },
    { label: "Neither of these, for example they're on a temporary visa", next: partner.id("no-sponsor") },
  ],
};

const childLink: FinderQuestion = {
  id: "c-link",
  question: "Who is the child's family link to Australia?",
  help: "Pick the closest match. An eligible New Zealand citizen is a protected Special Category visa holder.",
  options: [
    {
      label: "A parent who is an Australian citizen or permanent resident",
      hint: "Including a parent granted the permanent Partner visa (100 or 801)",
      next: child.id("adopted"),
    },
    { label: "A parent who is an eligible New Zealand citizen", hint: "A protected Special Category visa holder", next: child.id("adopted") },
    { label: "A parent who is a New Zealand citizen but not eligible, or I'm not sure", hint: "They hold a Special Category (444) visa only", next: child.id("nz-461") },
    { label: "A parent who holds, or has applied for, a 309 or 820 Partner visa", hint: "Not yet the permanent 100 or 801", next: child.id("partner-stage") },
    {
      label: "A relative here, because no parent can care for the child",
      hint: "A sibling, grandparent, aunt or uncle, including step-relatives",
      next: child.id("orphan"),
    },
  ],
};

// A parent granted the permanent 100 or 801 now answers as a permanent
// resident (first option above), so that branch of the stage question goes.
const childPartnerStage: FinderQuestion[] = child
  .question("partner-stage")
  .map((question) => ({ ...question, options: question.options.filter((option) => option.next !== child.id("adopted")) }));

const familyFinder: FinderConfig = {
  id: "family-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which family visa fits?",
  highlight: "family visa",
  subtitle: "Start with who you want to bring to Australia. A few one-tap questions then point you to the likely starting point.",
  start: "who",
  questions: [
    {
      id: "who",
      question: "Who do you want to bring to Australia?",
      help: "From the next question, answer as the person who would hold the visa: your partner, child, parent or relative. If that's you, answer for yourself.",
      options: [
        { label: "My partner, fiancé or fiancée", hint: "A spouse or de facto partner, or someone you're engaged to", next: "p-partner" },
        { label: "My child", hint: "Or a young relative whose parents can't care for them", next: "c-link" },
        { label: "My parent, to live in Australia permanently", next: parent.id("family-test") },
        { label: "My parent, for long visits rather than a move", next: parent.id("later") },
        { label: "Another relative", hint: "For example an aged relative who depends on you, or a relative coming to give care", next: parent.id("relative") },
      ],
    },
    partnerWho,
    ...partner.question("relationship"),
    ...partner.question("where"),
    ...partner.question("engaged"),
    childLink,
    ...childPartnerStage,
    ...child.question("adopted"),
    ...child.question("age"),
    ...child.question("orphan"),
    ...child.question("orphan-age"),
    ...parent.question("family-test"),
    ...parent.question("where"),
    ...parent.question("cost-onshore"),
    ...parent.question("cost-offshore"),
    ...parent.question("later"),
    ...parent.question("relative"),
  ],
  outcomes: [...partner.outcomes, ...child.outcomes, ...parent.outcomes],
  footnote:
    "A general guide, not advice or a prediction. It points to the likely starting point; your full circumstances decide which visa fits. For parent visas, Home Affairs publishes the queue dates it has released, not a processing time.",
};

export const familyPartnerVisasServiceExplainer: ServiceExplainer = {
  slug: "family-partner-visas",
  factsAsAt: "12 October 2026",
  pages: [
    "partner-visa-onshore-820-801",
    "partner-visa-offshore-309-100",
    "prospective-marriage-visa-300",
    "child-visa-101-802",
    "contributory-parent-visa-143-173",
    "parent-visa-103",
    "balance-of-family-test",
  ],
  name: "partner visa route",
  accent: "Subclasses 820/801, 309/100 and 300",
  oneLiner:
    "Partner visas let the spouse, de facto partner or fiancé(e) of an Australian citizen, permanent resident or eligible New Zealand citizen live in Australia, with a path to permanent residence.",
  bigIdeas: [
    {
      title: "A genuine relationship",
      body: "Married, de facto (usually for 12 months) or engaged: Home Affairs looks at your whole shared life.",
      icon: ICON.heart,
    },
    {
      title: "Your partner sponsors you",
      body: "An Australian citizen, permanent resident or eligible New Zealand citizen, aged 18 or over, sponsors you.",
      icon: ICON.userPlus,
    },
    {
      title: "Two stages, one charge",
      body: "For the 820 or 309, you apply and pay once: temporary visa first, permanent stage assessed from two years after you apply.",
      icon: ICON.documentText,
    },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "Your partner, aged 18 or over", icon: ICON.heart },
    { label: "Relationship", value: "Married, de facto (usually 12 months) or engaged", icon: ICON.users },
    { label: "Where you apply", value: "820 in Australia; 309 or 300 outside Australia", icon: ICON.mapPin },
    { label: "Work and study", value: "Full rights on the 820, 309 and 300", icon: ICON.briefcase },
    { label: "Permanent stage", value: "801 or 100, from 2 years after you apply", icon: ICON.home },
    { label: "Visa charge", value: "A$11,710 for the main applicant", icon: ICON.currencyDollar },
  ],
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "The three partner visas, side by side",
    highlight: "side by side",
    subtitle: "Where you are when you apply, and whether you're married, de facto or engaged, decide most of it.",
    rows: [
      { label: "Where you apply", icon: ICON.mapPin },
      { label: "Your relationship", icon: ICON.heart },
      { label: "How long it lasts", icon: ICON.clock },
      { label: "Work and study", icon: ICON.briefcase },
      { label: "Government fee", icon: ICON.currencyDollar },
      { label: "Next step", icon: ICON.home },
    ],
    columns: [
      {
        page: "partner-visa-onshore-820-801",
        name: "Subclass 820/801",
        tagline: "Partner visa, applied for in Australia",
        values: [
          "In Australia, but not in immigration clearance",
          "Married, or de facto (usually 12 months together)",
          "820 until the 801 is decided; the 801 is permanent",
          "Full work and study rights on the 820, and Medicare",
          "A$11,710, or A$1,955 if you hold a 300 and married your sponsor",
          "Permanent 801, assessed from two years after you apply",
        ],
        bestFor: "Married or de facto couples where the applicant is already in Australia",
      },
      {
        page: "partner-visa-offshore-309-100",
        name: "Subclass 309/100",
        tagline: "Partner visa, applied for outside Australia",
        values: [
          "Outside Australia, with everyone applying with you",
          "Married, de facto, or engaged and marrying before it's granted",
          "309 until the 100 is decided; the 100 is permanent",
          "Full work and study rights on the 309, and Medicare",
          "A$11,710 (A$9,600 with an eligible Pacific or Timor-Leste passport)",
          "Permanent 100, assessed from two years after you apply",
        ],
        bestFor: "Married or de facto couples where the applicant lives overseas",
      },
      {
        page: "prospective-marriage-visa-300",
        name: "Subclass 300",
        tagline: "Prospective Marriage visa: come here to marry",
        values: [
          "Outside Australia",
          "Engaged, after meeting in person since you both turned 18",
          "9 to 15 months from grant, and it can't be extended",
          "Full work and study rights; no Medicare unless an agreement applies",
          "A$11,710, then A$1,955 for the 820 and 801 while the 300 is in effect",
          "Marry within the visa period, then apply here for the 820 and 801",
        ],
        bestFor: "Engaged couples, with the applicant overseas, who want to marry in Australia",
      },
    ],
    footnote:
      "Charges are for the main applicant from 1 July 2026; each additional applicant pays their own charge. Child and parent visas have their own rules: see their guides below.",
  },
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply for the visa and show your relationship is genuine and continuing.",
      does: [
        "Apply for the 820 in Australia, or the 309 or 300 from outside Australia",
        "Show the relationship across its [[four-aspects|four aspects]]",
        "Pay the charge and meet the health and character requirements",
        "Lodge [[stage2|Stage 2]] evidence two years after you apply for the 820 or 309",
      ],
    },
    {
      id: "partner",
      name: "Your partner (the sponsor)",
      short: "Partner",
      icon: ICON.heart,
      tone: "pink",
      role: "Sponsors you: an Australian citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]], aged 18 or over.",
      does: [
        "Lodges the sponsorship using your [[trn|TRN]], with no charge",
        "Provides police certificates and consents to disclose any relevant convictions",
        "Must not be caught by the [[sponsor-limits|sponsorship limits]]",
        "Makes a statutory declaration about your relationship at [[stage2|Stage 2]]",
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
        "Decides the temporary visa: the 820, 309 or 300",
        "Assesses the permanent 801 or 100 from two years after you applied",
        "Can ask for health checks, police certificates or more information",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge one online application and pay the charge: the 820 in Australia, or the 309 or 300 from outside Australia. You get a [[trn|TRN]].",
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
      label: "Temporary visa",
      detail: "Home Affairs grants the temporary 820 or 309, or the 300 so you can come to Australia and marry. You can work and study.",
    },
    {
      from: "you",
      to: "government",
      label: "Stage 2 evidence",
      detail: "From two years after you applied for the 820 or 309, you lodge updated relationship evidence and your partner's statutory declaration.",
    },
    {
      from: "government",
      to: "you",
      label: "Permanent visa",
      detail: "If the relationship is still genuine and continuing, the permanent 801 or 100 is granted, with a five-year [[travel-facility|travel facility]].",
    },
  ],
  journeyTitle: "From your application to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your relationship and your sponsor",
      who: ["you", "partner"],
      description:
        "Work out which visa fits. Married and [[de-facto|de facto]] couples use the 820 or the 309; engaged couples outside Australia can use the 300.",
      points: [
        "De facto couples usually need 12 months together before applying",
        "The 12-month rule doesn't apply to a [[registered|registered relationship]]",
        "Applying in Australia? Check your visa for [[c8503|condition 8503]]",
        "Check your partner isn't caught by the [[sponsor-limits|sponsorship limits]]",
      ],
      youHold: "A clear relationship basis, the right visa and an eligible sponsor",
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
        "Engaged? Evidence you've met in person, and of your wedding plans",
      ],
      youHold: "A relationship history, witness statements and documents for each aspect",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Apply",
      title: "You lodge Stage 1 and pay the charge",
      who: ["you", "government"],
      description:
        "Apply online in ImmiAccount. Where you are when you lodge decides the visa: the 820 in Australia, or the 309 or 300 outside Australia.",
      points: [
        "A$11,710 for the main applicant; for the 820 or 309 it covers both stages",
        "Give your partner your [[trn|TRN]]",
        "Applying in Australia on a [[substantive|substantive visa]]? A [[bva|Bridging visa A]] comes with it",
        "In Australia with no substantive visa? [[schedule3|Schedule 3]] applies",
      ],
      youHold: "A TRN and an acknowledgement letter",
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
      short: "Temporary",
      title: "The temporary visa is granted",
      who: ["government", "you"],
      description:
        "The 820 or 309 lasts until the permanent visa is decided. On a 300, you enter Australia, marry within the visa period, then apply here for the 820 and 801.",
      points: [
        "Full work and study rights",
        "You can be in or outside Australia when it's granted",
        "On the 820 or 309, don't apply for or accept another visa: it ends your path to the permanent visa",
      ],
      youHold: "A subclass 820 or 309 visa, or a 300 to come and marry",
      icon: ICON.checkBadge,
    },
    {
      id: "stage2",
      short: "Stage 2",
      title: "Stage 2: two years after you applied",
      who: ["you", "partner"],
      description: "From the second anniversary of lodgement, you lodge [[stage2|Stage 2]] evidence so the 801 or 100 can be assessed. Don't send it earlier.",
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
      title: "The permanent 801 or 100 is granted",
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
      body: "Nothing in your answers rules you out. Next comes the detail: the right visa, your evidence, and your partner's sponsorship.",
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
          note: "Only an [[eligible-nz|eligible New Zealand citizen]] can sponsor a partner visa. If your partner isn't one, the New Zealand Citizen Family Relationship visa (subclass 461) is the usual option.",
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
        {
          value: "married",
          label: "Married, in a marriage valid in Australia",
          status: "ok",
          note: "Married couples don't face the 12-month rule, but still need to show a genuine and continuing relationship.",
        },
        { value: "defacto", label: "De facto partners for 12 months or more", status: "ok", note: "You meet the 12-month rule if the 12 months run right up to the day you apply." },
        {
          value: "registered",
          label: "De facto for under 12 months, with a registered relationship",
          status: "ok",
          note: "A [[registered|registered relationship]] is an exception to the 12-month rule.",
        },
        {
          value: "engaged",
          label: "Engaged, and we've met in person as adults",
          status: "todo",
          note: "From outside Australia, the Prospective Marriage visa (subclass 300) lets you come here to marry. You can also lodge the 309 as an intended spouse, if you marry before it's granted.",
          link: { label: "Prospective Marriage visa", href: "/visas/family/prospective-marriage-visa-300" },
        },
        {
          value: "short",
          label: "Together under 12 months, not married or registered",
          status: "stop",
          note: "The 12-month rule applies unless you register the relationship, show compelling and compassionate circumstances, or meet the exception for partners of permanent humanitarian visa holders. Time dating or online may not count.",
        },
      ],
    },
    {
      id: "where",
      topic: "Where you are",
      question: "Where are you now, and on what kind of visa?",
      options: [
        {
          value: "visa",
          label: "In Australia, on a visa that isn't a bridging visa",
          status: "ok",
          note: "You can apply for the 820 in Australia, and a [[bva|Bridging visa A]] comes with the application.",
        },
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
          status: "ok",
          note: "You'd apply from outside Australia: the 309 if you're married or de facto, or the 300 if you're engaged. Everyone applying with you must be outside Australia too.",
        },
      ],
    },
    {
      id: "conditions",
      topic: "Visa conditions",
      question: "Applying in Australia: does your current or last visa stop you?",
      help: "Two rules can block a valid 820 application: [[c8503|condition 8503]] and the holding period for regional visas.",
      options: [
        {
          value: "none",
          label: "No, or I'm applying from outside Australia",
          status: "ok",
          note: "Neither rule stops you lodging.",
        },
        { value: "waived", label: "It has condition 8503, but Home Affairs has waived it", status: "ok", note: "With the waiver granted first, you can make a valid 820 application." },
        {
          value: "c8503",
          label: "It has condition 8503 (no further stay), not waived",
          status: "todo",
          note: "You can't make a valid 820 application until the condition is waived, and the charge isn't refunded if you lodge anyway. Lodging the 309 from outside Australia may be the alternative.",
          link: { label: "Condition 8503 waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
        {
          value: "regional",
          label: "I've held a 491 or 494 regional visa for less than three years",
          status: "stop",
          note: "For the 820 you must have held the 491 or 494 for at least three years, and substantially complied with its conditions. Older regional visas, such as the 475 or 487, need two years.",
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
        {
          value: "once",
          label: "Once, more than five years ago",
          status: "ok",
          note: "That's usually fine: the limits catch a third sponsorship, or sponsoring or being sponsored within the last five years.",
        },
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
        {
          value: "clear",
          label: "No concerns",
          status: "ok",
          note: "You'll still have health examinations and give police certificates, and your partner gives police certificates too.",
        },
        {
          value: "you",
          label: "I have a significant health condition or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out (a health waiver is available for partner visas), but it needs careful preparation and advice.",
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
      fact: "Only de facto couples need 12 months in the relationship before applying. Even then, not if it's registered with a state or territory, or there are compelling and compassionate circumstances. Married couples don't face the rule, but still need a genuine relationship.",
    },
    {
      myth: "The permanent visa is a second application with a second charge.",
      fact: "No. For the 820 and 801, or the 309 and 100, one application and one charge (A$11,710 from 1 July 2026) cover both stages. You lodge Stage 2 evidence from two years after you applied, with no further charge.",
    },
    {
      myth: "Engaged couples have to marry before they can apply.",
      fact: "Not always. From outside Australia, the Prospective Marriage visa (subclass 300) lets you come here to marry. You can also lodge a 309 as an intended spouse, as long as you marry before it's granted.",
    },
    {
      myth: "The 300 lets me stay as long as we need to plan the wedding.",
      fact: "No. It lasts 9 to 15 months from grant and can't be extended. Enter Australia, marry within the visa period, then apply for the 820 and 801 while the 300 is still in effect to pay A$1,955 instead of A$11,710.",
    },
    {
      myth: "If my visa has expired, I can't apply for a partner visa in Australia.",
      fact: "You may still be able to. You'd need to meet Schedule 3, including applying within 28 days of your last visa ending, unless Home Affairs accepts compelling reasons not to apply it. A section 48 bar doesn't stop a partner visa application.",
    },
    {
      myth: "Once I hold the 820 or 309, taking another visa won't matter.",
      fact: "It does. Being granted any other visa ends your path to the permanent 801 or 100. That includes a Special Category visa given at the border to a New Zealand passport holder.",
    },
    {
      myth: "My partner can sponsor as many partners as they like.",
      fact: "No. A sponsorship can't be approved if two other partners were already granted visas on it, or within five years of your partner sponsoring someone or being sponsored themselves. Compelling circumstances can be an exception.",
    },
    {
      myth: "If the relationship ends because of family violence, I lose my visa.",
      fact: "Not necessarily. If you, or a dependent child, experienced family violence by your sponsor, you may still be granted the visa. For a 309, you must have entered Australia since applying. Home Affairs first needs to accept the relationship was genuine.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      tone: "green",
      intro: "Your part is a valid application, honest evidence of your relationship, and keeping your path to permanent residence open.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Confirm you're married, de facto for 12 months (or have a [[registered|registered relationship]]), or engaged after meeting in person",
            "Be in the right place: in Australia for the 820, outside Australia for the 309 or 300",
            "Collect evidence across the [[four-aspects|four aspects]] and write your relationship history",
            "Ask two people who know you both for [[form888|Form 888]] statements",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge Stage 1 in ImmiAccount and give your partner the [[trn|TRN]]",
            "Pay A$11,710, plus A$5,860 for each additional applicant 18 or over and A$2,935 for each under 18",
            "Have health checks, and give police certificates and Form 80 when asked",
          ],
        },
        {
          title: "While you wait, and after",
          items: [
            "Keep your evidence current and tell Home Affairs about changes",
            "Don't apply for or accept another visa while you hold the 820 or 309",
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
            "Check you're 18 or over and an Australian citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]]",
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
            "You stay the sponsor for two years after the 820 or 309 is granted",
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
      definition:
        "The four parts of a relationship Home Affairs looks at. Financial: money and assets. Household: living arrangements and housework. Social: how others see you. Commitment: time together, support and long-term plans.",
    },
    {
      id: "de-facto",
      term: "De facto partner",
      definition: "The person you share a committed life with, to the exclusion of all others, without being married. You live together, or don't live apart permanently.",
    },
    { id: "registered", term: "Registered relationship", definition: "A relationship registered under the law of an Australian state or territory. It removes the 12-month de facto requirement." },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A New Zealand citizen who holds a protected Special Category visa. Other New Zealand citizens can't sponsor a partner visa.",
    },
    {
      id: "sponsor-limits",
      term: "Sponsorship limits",
      definition:
        "Your partner can't sponsor you if two other partners were already granted visas on their sponsorship. Nor can they within five years of sponsoring someone, or of being sponsored as a partner. Compelling circumstances can be an exception.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The reference number of your application. Your partner enters it when lodging the sponsorship, so Home Affairs can link the two." },
    { id: "substantive", term: "Substantive visa", definition: "Your main visa, such as a visitor, student or work visa. A bridging visa isn't a substantive visa." },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "Granted with an 820 application if you hold a substantive visa. It starts when your current visa ends, keeps you lawful while you wait, and carries that visa's work conditions.",
    },
    {
      id: "schedule3",
      term: "Schedule 3",
      definition:
        "Extra criteria if you apply in Australia without a substantive visa: usually applying within 28 days of your last one ending, factors beyond your control and compelling reasons. Home Affairs can decide not to apply them for compelling reasons.",
    },
    { id: "c8503", term: "Condition 8503", definition: "A 'no further stay' condition on some visas. While it applies, you can't make a valid application in Australia unless Home Affairs waives it first." },
    { id: "form888", term: "Form 888", definition: "A statement supporting your relationship from someone aged 18 or over who knows you both. You need two at Stage 1 and two more at Stage 2." },
    { id: "stage2", term: "Stage 2", definition: "The permanent stage of the 820 or 309. From two years after you applied, you lodge updated evidence so Home Affairs can assess the 801 or 100." },
    {
      id: "long-term",
      term: "Long-term partner relationship",
      definition: "A relationship of at least three years when you apply, or two years if you have a dependent child together. It removes the two-year wait for the permanent visa.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on a permanent visa: five years from the 801 or 100 grant. After that you need a Resident Return visa.",
    },
    {
      id: "pmv",
      term: "Prospective Marriage visa",
      full: "Subclass 300",
      definition: "A temporary visa that lets you come to Australia to marry your fiancé(e). It lasts 9 to 15 months from grant: enter Australia, marry, then apply here for the 820 and 801.",
    },
    {
      id: "intended-spouse",
      term: "Intended spouse",
      definition: "Someone who plans to marry their sponsor. You can lodge a 309 as an intended spouse, but the marriage must normally take place before the 309 is granted.",
    },
    {
      id: "family-violence",
      term: "Family violence provisions",
      definition: "Rules that can still allow a partner visa if the relationship ends because you, or a dependent child, experienced family violence by your sponsor.",
    },
    { id: "section48", term: "Section 48 bar", definition: "A rule that stops some people applying for most visas in Australia after a refusal or cancellation. It doesn't stop a partner visa application." },
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
  finder: familyFinder,
  evidence: partnerVisaOnshore820801Explainer.evidence,
  fees: {
    variantLabel: "Which visa are you applying for?",
    variants: [
      {
        id: "onshore",
        label: "Partner visa in Australia (820 and 801)",
        hint: "One charge covers both stages",
        primary: [{ label: "Partner visa (820 and 801), main applicant", amount: 11710 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 5860 }],
        child: [{ label: "Each additional applicant under 18", amount: 2935 }],
      },
      {
        id: "offshore",
        label: "Partner visa from outside Australia (309 and 100)",
        hint: "One charge covers both stages",
        primary: [{ label: "Partner visa (309 and 100), main applicant", amount: 11710 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 5860 }],
        child: [{ label: "Each additional applicant under 18", amount: 2935 }],
      },
      {
        id: "pmv",
        label: "Prospective Marriage visa (300), then the 820 and 801",
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
        label: "309 and 100, or 300, with a Pacific Island or Timor-Leste passport",
        hint: "The main applicant holds a valid passport from an eligible country",
        primary: [{ label: "309 and 100, or 300, main applicant", amount: 9600 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 4805 }],
        child: [{ label: "Each additional applicant under 18", amount: 2405 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded:
      "Not included: health examinations, police certificates, translations, a Bridging visa B (A$575) if you travel on a Bridging visa A, and the Administrative Review Tribunal fee (A$3,727) if a visa is refused.",
    notes: [
      "One charge covers both stages of the 820 and 801, or the 309 and 100: there's no further charge at the permanent stage. Charges aren't refunded if a visa is refused.",
      "Married your sponsor, but your 300 has ceased and you hold no substantive visa? The 820 and 801 charge is then A$2,475 (A$1,235 and A$625 for additional applicants).",
      "Pacific Island and Timor-Leste passport holders pay lower charges from 1 July 2026, applied automatically in ImmiAccount. A 300 holder's later 820 and 801 is A$1,600 for the main applicant. The lower 820 and 801 charge for everyone else isn't shown here, so confirm it with Home Affairs.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Your timeline",
    title: "When the permanent stage can be assessed",
    highlight: "permanent stage",
    subtitle: "For the 820 and 801, or the 309 and 100. Pick the month you lodged, or plan to lodge, to see the key dates on your path to permanent residence.",
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
        detail: "From the second anniversary of lodgement, lodge your [[stage2|Stage 2]] evidence so Home Affairs can assess the 801 or 100. Don't send it earlier.",
        kind: "goal",
      },
    ],
    footnote:
      "The two-year wait doesn't apply if you were in a long-term partner relationship when you applied: three years, or two with a dependent child of you both. For the 309 and 100, nor does it apply if your sponsor holds or held a permanent humanitarian visa and declared the relationship before it was granted. Check the exact date in ImmiAccount. These dates are not processing times.",
  },
};
