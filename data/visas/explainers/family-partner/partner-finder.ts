import type { FinderConfig } from "../types";

// "Which partner visa fits?" Shared by the 820/801, 309/100 and 300 pages.
// Every fact comes from the 820/801, 309/100, 300 and 461 pages
// (data/visas/family-partner.ts). No glossary tokens here: the finder is
// shared, and each page defines its own glossary.

export const partnerFinder: FinderConfig = {
  id: "partner-finder",
  navLabel: "Which visa?",
  eyebrow: "Visa finder",
  title: "Which partner visa fits?",
  highlight: "partner visa",
  subtitle: "A few one-tap questions about your partner, your relationship and where you are now.",
  start: "partner",
  questions: [
    {
      id: "partner",
      question: "Who is your partner?",
      help: "Your partner sponsors you, so their status decides which visas are open to you.",
      options: [
        { label: "An Australian citizen or permanent resident", next: "relationship" },
        { label: "A New Zealand citizen living in Australia", next: "nz" },
        { label: "Neither of these, for example they're on a temporary visa", next: "no-sponsor" },
      ],
    },
    {
      id: "nz",
      question: "Is your partner an eligible New Zealand citizen?",
      help: "That means a protected Special Category visa holder: generally someone who was in Australia on 26 February 2001 or meets the related residence rules. Most New Zealand citizens who arrived later are not.",
      options: [
        { label: "Yes, they're an eligible New Zealand citizen", next: "relationship" },
        { label: "No, they hold a Special Category (444) visa only", next: "nz-461" },
        { label: "I'm not sure", next: "nz-461" },
      ],
    },
    {
      id: "relationship",
      question: "Which best describes your relationship?",
      options: [
        { label: "We're married", hint: "A marriage that is valid under Australian law", next: "where" },
        { label: "De facto partners for 12 months or more", hint: "Living together, or apart only temporarily", next: "where" },
        { label: "De facto for under 12 months, with a registered relationship", hint: "Registered with an Australian state or territory registry", next: "where" },
        { label: "Engaged, and we've met in person as adults", next: "engaged" },
        { label: "None of these yet, for example dating or online only", next: "not-yet" },
      ],
    },
    {
      id: "where",
      question: "Where are you now?",
      options: [
        { label: "In Australia", next: "onshore" },
        { label: "Outside Australia", next: "offshore" },
      ],
    },
    {
      id: "engaged",
      question: "Where are you now, and where would you like to marry?",
      options: [
        { label: "Outside Australia, and we'd like to marry in Australia", next: "pmv" },
        { label: "Outside Australia, and we'll marry before a visa is decided", next: "offshore" },
        { label: "In Australia", next: "not-yet" },
      ],
    },
  ],
  outcomes: [
    {
      id: "onshore",
      title: "Partner visa (subclasses 820 and 801)",
      body: "You're married or de facto and in Australia, so the onshore Partner visa is the likely starting point. One application and one charge cover the temporary 820 and the permanent 801, which is normally assessed two years after you apply.",
      watch: [
        "No substantive visa, for example you're on a bridging visa? You must meet Schedule 3, including applying within 28 days of your last visa ending, unless Home Affairs accepts compelling reasons not to apply it.",
        "You can't apply while your current or last visa has condition 8503 (no further stay) unless it's waived first. Lodging the 309 from outside Australia may be the alternative.",
        "A section 48 bar after a refusal or cancellation in Australia doesn't stop a partner visa application.",
        "Sponsor limits apply: your partner can't sponsor a third partner, or sponsor you within five years of sponsoring someone or being sponsored. Compelling circumstances can be an exception.",
        "Hold or last held a 491 or 494 regional visa? You must have held it for at least three years.",
      ],
      href: "/visas/family/partner-visa-onshore-820-801",
    },
    {
      id: "offshore",
      title: "Partner visa (subclasses 309 and 100)",
      body: "You're outside Australia and married, de facto, or engaged to marry before the visa is decided. The offshore Partner visa is the likely starting point. The provisional 309 comes first; the permanent 100 is normally assessed two years after you apply.",
      watch: [
        "You, and everyone applying with you, must be outside Australia at the moment you lodge.",
        "Engaged? The marriage must normally take place before the 309 is granted, and be valid under Australian law.",
        "Living in different countries? You'll need to show you're not living apart on a permanent basis.",
        "Sponsor limits apply: your partner can't sponsor a third partner, or sponsor you within five years of sponsoring someone or being sponsored. Compelling circumstances can be an exception.",
        "Once the 309 is granted, don't accept another visa, such as a Special Category visa at the border: it ends your path to the 100.",
      ],
      href: "/visas/family/partner-visa-offshore-309-100",
    },
    {
      id: "pmv",
      title: "Prospective Marriage visa (subclass 300)",
      body: "You're engaged, outside Australia and want to marry in Australia, so the Prospective Marriage visa is the likely starting point. It lasts 9 to 15 months: you enter Australia, marry within that period, then apply here for the 820 and 801 at a reduced charge.",
      watch: [
        "You must have met in person since you both turned 18. An online-only relationship doesn't qualify.",
        "Don't marry before you first enter Australia on the 300, and marry within the visa period.",
        "Apply for the 820 and 801 while the 300 is still in effect to pay A$1,955 instead of A$11,710.",
        "Rather marry before the visa is decided? You can apply for the 309 as an intended spouse instead.",
        "The same sponsor limits apply: no more than two partner sponsorships, and a five-year gap.",
      ],
      href: "/visas/family/prospective-marriage-visa-300",
    },
    {
      id: "nz-461",
      title: "New Zealand Citizen Family Relationship visa (subclass 461)",
      body: "A New Zealand citizen on a Special Category (444) visa can sponsor a partner visa only if they're an eligible New Zealand citizen. If your partner isn't, the 461 is the usual option: a five-year visa you can renew, with full work and study rights. It has no direct path to permanent residence.",
      watch: [
        "Not sure of your partner's status? Check it first: if they're an eligible New Zealand citizen, a partner visa may fit instead.",
        "If your partner becomes an Australian citizen or permanent resident, they may then be able to sponsor you for a partner visa.",
        "You can't be granted the 461 if you're a New Zealand or Australian citizen yourself.",
        "In Australia without a substantive temporary visa? Schedule 3 applies, including applying within 12 months of your last visa ending.",
      ],
      href: "/visas/family/new-zealand-citizen-family-relationship-visa-461",
    },
    {
      id: "not-yet",
      title: "Not a partner visa yet",
      body: "Partner visas need you to be married or in a de facto relationship when you apply or, from outside Australia, engaged after meeting in person. On these answers, your relationship doesn't fit one of those yet.",
      watch: [
        "The 12-month rule doesn't apply to a registered relationship, or where there are compelling and compassionate circumstances. Nor does it apply if your partner holds or applied for a permanent humanitarian visa and declared the relationship before it was granted.",
        "Time spent dating or in an online relationship may not count towards the 12 months.",
        "Engaged and in Australia? The 300 and the 309 must both be lodged from outside Australia. Once you're married, the 820 and 801 may fit.",
        "The Prospective Marriage visa needs you to have met in person since you both turned 18.",
      ],
      tone: "stop",
    },
    {
      id: "no-sponsor",
      title: "No eligible sponsor yet",
      body: "A partner visa needs a sponsor who is your partner, aged 18 or over, and an Australian citizen, permanent resident or eligible New Zealand citizen. On these answers, a partner visa isn't open to you yet.",
      watch: [
        "If your partner later becomes an Australian citizen, permanent resident or eligible New Zealand citizen, they may be able to sponsor you.",
      ],
      tone: "stop",
    },
  ],
  footnote: "A general guide, not advice or a prediction. It points to the likely starting point; your full circumstances decide which visa fits.",
};
