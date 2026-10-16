import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the New Zealand Citizen Family Relationship visa
// (subclass 461). Every figure matches data/visas/family-partner.ts (checked
// against Home Affairs and the Migration Regulations on 12 October 2026).
// There is no sponsor, so the New Zealand citizen family member is teal.

export const newZealandCitizenFamilyRelationshipVisa461Explainer: VisaExplainer = {
  slug: "new-zealand-citizen-family-relationship-visa-461",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A renewable five-year visa for the partner or dependent child of a New Zealand citizen living in Australia on a Special Category (444) visa, with full work and study rights.",
  bigIdeas: [
    { title: "Family of a New Zealand citizen", body: "For the partner or dependent child of a New Zealand citizen here on a 444 who isn't an eligible New Zealand citizen.", icon: ICON.users },
    { title: "Five years, and renewable", body: "Live, work and study for five years with multiple entry, then apply for a further 461 if you still qualify.", icon: ICON.arrowPath },
    { title: "Not a path to PR on its own", body: "Permanent options include a skilled visa, or a partner visa if your partner becomes a citizen or permanent resident.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Sponsor", value: "None needed", icon: ICON.user },
    { label: "How long", value: "Five years from grant, and renewable", icon: ICON.clock },
    { label: "Work and study", value: "Full work and study rights", icon: ICON.briefcase },
    { label: "Medicare", value: "Not through the visa itself", icon: ICON.shieldCheck },
    { label: "Where you apply", value: "In or outside Australia, on paper", icon: ICON.envelope },
    { label: "Visa charge", value: "A$1,330 (A$675 per adult, A$325 per child)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "nz",
      name: "Your New Zealand family member",
      short: "NZ citizen",
      icon: ICON.flag,
      tone: "teal",
      role: "A New Zealand citizen living in Australia on a Special Category (444) visa.",
      does: [
        "Holds a [[scv|Special Category visa (444)]], or will be granted one on entry with you",
        "Isn't an [[eligible-nz|eligible New Zealand citizen]]",
        "Must meet health and character requirements at the border to get a 444",
        "Provides police certificates if the applicant is under 18",
      ],
    },
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "The partner, or dependent child, of the New Zealand citizen. You're not a New Zealand or Australian citizen yourself.",
      does: [
        "Are a [[family-unit|member of the family unit]] of the New Zealand citizen",
        "Apply on paper, in or outside Australia",
        "Meet the health and character requirements",
        "Include every family member when you lodge",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks your relationship, health and character, then decides the visa.",
      does: [
        "Checks the New Zealand citizen's status",
        "Starts a New Zealand criminal record check if you lived there 12 months or more",
        "Asks for biometrics or more health checks if needed",
        "Grants the five-year visa",
      ],
    },
  ],
  flows: [
    {
      from: "government",
      to: "nz",
      label: "444 at the border",
      detail: "New Zealand citizens aren't automatically granted a 444: they must meet health and character requirements at the border.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply on paper",
      detail: "You post [[form147|Form 147]] with the payment receipt and documents for every applicant and the New Zealand citizen.",
    },
    {
      from: "government",
      to: "you",
      label: "461 granted",
      detail: "Home Affairs grants a five-year visa with multiple entry. Check your conditions in [[vevo|VEVO]].",
    },
    {
      from: "you",
      to: "government",
      label: "A further 461",
      detail: "Before the five years end, you can apply for a further 461 if you still meet the criteria.",
    },
  ],
  journeyTitle: "From application to your five-year visa",
  journeyHighlight: "five-year visa",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Confirm the New Zealand citizen's status",
      who: ["you", "nz"],
      description: "Check that the 461 is the right visa for you, rather than a partner visa.",
      points: [
        "They hold a 444 visa (check [[vevo|VEVO]]), or will on entry",
        "They're not an [[eligible-nz|eligible New Zealand citizen]]",
        "You're their partner, or a dependent child or step-child",
        "You're not a New Zealand or Australian citizen",
      ],
      youHold: "The right visa, and your family relationship confirmed",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "Health checks and documents",
      who: ["you"],
      description: "Have health examinations before you lodge, and gather documents for everyone applying.",
      points: [
        "Health examinations through [[mhd|My Health Declarations]] before lodging",
        "AFP and overseas police certificates, and Forms 80 and 1221",
        "Relationship evidence and the New Zealand citizen's documents",
      ],
      youHold: "A complete application set with health and character documents",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Pay first, then post Form 147",
      who: ["you"],
      description: "Pay the charge, then post [[form147|Form 147]] with the receipt and all documents to the New Zealand Family Relationship visa office in Sydney.",
      points: [
        "A$1,330, plus A$675 per adult and A$325 per child",
        "Include every family member now: no one can be added later",
        "Paper only, by post",
      ],
      youHold: "A valid application",
      cost: "From A$1,330, paid before posting",
      icon: ICON.envelope,
    },
    {
      id: "track",
      short: "Track",
      title: "Import into ImmiAccount and respond",
      who: ["you", "government"],
      description: "After the acknowledgement letter, import the application into ImmiAccount to attach documents and track it.",
      points: [
        "Biometrics or more health checks if asked",
        "Sign the New Zealand criminal record check consent if required",
        "Report changes to your details, relationship or family",
      ],
      youHold: "A complete application, ready for decision",
      icon: ICON.computerDesktop,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Your five-year 461",
      who: ["government", "you"],
      description: "You can be in or outside Australia when it's granted. It runs for five years from grant, with multiple entry.",
      points: ["Full work and study rights", "Time outside Australia doesn't extend it", "Conditions [[c8303|8303]] and [[c8501|8501]] may apply"],
      youHold: "A five-year subclass 461 visa",
      icon: ICON.checkBadge,
    },
    {
      id: "next",
      short: "Next",
      title: "Plan your next step before year five",
      who: ["you"],
      description: "You can't stay after the visa ends without another visa.",
      points: [
        "A further 461, if you still qualify",
        "A skilled visa in your own right",
        "A partner visa, if your partner becomes an Australian citizen or permanent resident",
      ],
      youHold: "A further 461, or a permanent visa application",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next comes the detail: the New Zealand citizen's status, your relationship evidence and police checks for everyone.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs assesses each applicant on their full circumstances.",
  },
  quiz: [
    {
      id: "citizen",
      topic: "Your citizenship",
      question: "Are you a New Zealand or Australian citizen?",
      options: [
        { value: "neither", label: "Neither", status: "ok", note: "The 461 is for people who aren't New Zealand or Australian citizens." },
        {
          value: "nz",
          label: "I'm a New Zealand citizen",
          status: "stop",
          note: "You can't be granted the 461. As a New Zealand citizen, you may be granted a Special Category visa (444) instead.",
          link: { label: "Special Category visa (444)", href: "/visas/other-visas/special-category-visa-444" },
        },
        { value: "au", label: "I'm an Australian citizen", status: "stop", note: "You can't be granted the 461 as an Australian citizen." },
      ],
    },
    {
      id: "nz-status",
      topic: "The New Zealand citizen",
      question: "Which describes your New Zealand family member?",
      options: [
        { value: "444", label: "They hold a 444 and aren't an eligible New Zealand citizen", status: "ok", note: "That's who the 461 is for." },
        {
          value: "travelling",
          label: "They're outside Australia and will travel with me",
          status: "ok",
          note: "That works if they'll be granted a 444 on entry. They must meet health and character requirements at the border.",
        },
        {
          value: "eligible",
          label: "They're an eligible New Zealand citizen",
          status: "todo",
          note: "An eligible New Zealand citizen can sponsor a partner visa, which leads to permanent residence. Compare that route first.",
          link: { label: "Partner visa (820 and 801)", href: "/visas/family/partner-visa-onshore-820-801" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check their visa in [[vevo|VEVO]]. Eligible New Zealand citizens are generally people who were in Australia on 26 February 2001, or who meet the related residence rules.",
        },
      ],
    },
    {
      id: "relationship",
      topic: "Your relationship",
      question: "How are you related to the New Zealand citizen?",
      options: [
        {
          value: "partner",
          label: "Spouse or de facto partner",
          status: "ok",
          note: "Show the relationship is genuine and ongoing, for example with joint finances, proof you live at the same address and statements from people who know you.",
        },
        {
          value: "child",
          label: "Dependent child or step-child under 18",
          status: "ok",
          note: "Anyone with a legal right to decide where the child lives who isn't travelling must consent (Form 1229 or a statutory declaration).",
        },
        {
          value: "older",
          label: "Child or step-child aged 18 to 22, and financially dependent",
          status: "ok",
          note: "You must be under 23 when you apply and at grant. Evidence of dependence includes Form 47a, living together, tax records or proof of study.",
        },
        {
          value: "former",
          label: "A former partner or family member: the relationship ended",
          status: "todo",
          note: "You may still apply for a further 461 if you hold one (or it was your last visa) and haven't joined another person's family unit.",
        },
        {
          value: "other",
          label: "Another relationship",
          status: "stop",
          note: "The 461 is only for members of the New Zealand citizen's [[family-unit|family unit]]: a partner, or a dependent child or step-child.",
        },
      ],
    },
    {
      id: "where",
      topic: "Where you apply",
      question: "Where are you, and what visa do you hold?",
      options: [
        {
          value: "outside",
          label: "Outside Australia",
          status: "ok",
          note: "You don't need another visa. Home Affairs advises staying outside Australia until the application is acknowledged.",
        },
        {
          value: "temp",
          label: "In Australia, on a substantive temporary visa",
          status: "ok",
          note: "You can apply in Australia, as long as your visa doesn't have a no further stay condition.",
        },
        {
          value: "ended",
          label: "In Australia, and my last visa has ended",
          status: "todo",
          note: "You must meet [[schedule3|Schedule 3]], including applying within 12 months of your last [[substantive|substantive visa]] ending.",
          link: { label: "Schedule 3 explained", href: "/visas/appeals-and-review/schedule-3-criteria" },
        },
        {
          value: "c8503",
          label: "My visa has condition 8503 (no further stay)",
          status: "stop",
          note: "You can't apply in Australia unless the [[c8503|condition]] is waived first.",
          link: { label: "Condition 8503 waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "exclusion",
      topic: "Past visas",
      question: "Have you had a visa cancelled, or left Australia as an unlawful non-citizen, in the last three years?",
      options: [
        { value: "no", label: "No", status: "ok", note: "The exclusion periods shouldn't affect you." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "An unexpired three-year [[exclusion|exclusion period]] may apply, unless there are compelling or compassionate circumstances.",
          link: { label: "Exclusion periods explained", href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family members",
      question: "Is everyone who needs a 461 included in this application?",
      options: [
        { value: "yes", label: "Yes, everyone is included", status: "ok", note: "Each family member pays their own charge and is assessed individually." },
        { value: "later", label: "We might add someone later", status: "todo", note: "Family members can only be included when you lodge. No one can be added afterwards." },
      ],
    },
    {
      id: "police",
      topic: "Police checks",
      question: "Can everyone applying provide the police certificates needed?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "That means AFP and overseas certificates, and Forms 80 and 1221. If you lived in New Zealand for 12 months or more, Home Affairs starts a New Zealand check.",
        },
        {
          value: "record",
          label: "Someone applying has a criminal record",
          status: "todo",
          note: "It doesn't automatically rule anyone out, but everyone aged 16 or over must meet the character requirement. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The 461 leads to permanent residence.",
      fact: "Not on its own. It's a five-year temporary visa you can renew. Permanent options include a skilled visa, or a partner visa if your partner becomes an Australian citizen, permanent resident or eligible New Zealand citizen.",
    },
    {
      myth: "My New Zealand partner can sponsor me for a partner visa.",
      fact: "Only if they're an eligible New Zealand citizen: generally someone in Australia on 26 February 2001, or meeting related residence rules. Most who arrived later aren't, so their partners use the 461.",
    },
    {
      myth: "I can add my children after we apply.",
      fact: "No. Family members can only be included when you lodge. Each pays an additional applicant charge and is assessed individually.",
    },
    {
      myth: "If we separate, I'll have to leave Australia.",
      fact: "Not necessarily. You can apply for a further 461 if you're no longer in the New Zealand citizen's family unit and haven't joined another person's.",
    },
    {
      myth: "The 461 comes with Medicare.",
      fact: "The visa itself doesn't give Medicare. Eligibility depends on Services Australia rules and reciprocal health care agreements. Home Affairs recommends health insurance, and condition 8501 may apply.",
    },
    {
      myth: "Every New Zealand citizen automatically gets a 444.",
      fact: "No. New Zealand citizens must meet health and character requirements at the border to be granted a 444.",
    },
  ],
  glossary: [
    { id: "scv", term: "Special Category visa (444)", definition: "The visa a New Zealand citizen can be granted on arrival in Australia, if they meet the health and character requirements." },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A protected Special Category visa holder: generally someone who was in Australia on 26 February 2001 or meets the related residence rules. They can sponsor a partner visa.",
    },
    {
      id: "family-unit",
      term: "Member of the family unit",
      definition: "The New Zealand citizen's partner, or a single child or step-child of either of them. A child must be under 18, or 18 to 22 and dependent, or 23 or over and dependent because of incapacity.",
    },
    { id: "vevo", term: "VEVO", definition: "The Home Affairs online service for checking a visa and its conditions, such as whether someone holds a 444." },
    { id: "mhd", term: "My Health Declarations", definition: "The ImmiAccount service for arranging health examinations before you lodge. Home Affairs strongly encourages it for the 461." },
    { id: "form147", term: "Form 147", definition: "The paper application form for the New Zealand Citizen Family Relationship visa." },
    {
      id: "schedule3",
      term: "Schedule 3",
      definition: "Extra criteria if you apply in Australia without a substantive visa, including applying within 12 months of your last one ending (criterion 3002).",
    },
    { id: "substantive", term: "Substantive visa", definition: "Your main visa, such as a visitor, student or work visa. A bridging visa isn't a substantive visa." },
    { id: "c8503", term: "Condition 8503", definition: "A 'no further stay' condition on some visas. While it applies, you can't apply in Australia unless it's waived first." },
    { id: "c8501", term: "Condition 8501", definition: "You must keep adequate health insurance while in Australia. It may be attached to the 461." },
    {
      id: "c8303",
      term: "Condition 8303",
      definition: "You must not become involved in activities disruptive to, or violence threatening harm to, the Australian community. It may be attached to the 461.",
    },
    {
      id: "exclusion",
      term: "Exclusion period",
      definition: "A three-year period after certain visa cancellations, or after leaving Australia as an unlawful non-citizen. This visa can't usually be granted during it, unless there are compelling or compassionate circumstances.",
    },
  ],
  fees: {
    variants: [
      {
        id: "standard",
        label: "461 charge",
        primary: [{ label: "461, main applicant", amount: 1330 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 675 }],
        child: [{ label: "Each additional applicant under 18", amount: 325 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 4,
    notIncluded:
      "Not included: health examinations, police certificates, health insurance, certified copies and translations, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "Family members can only be included when you lodge, and each pays their own charge.",
      "Pay before you post Form 147. The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
