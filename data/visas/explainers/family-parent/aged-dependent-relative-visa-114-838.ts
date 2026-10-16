import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Aged Dependent Relative visa (subclass 114
// and 838). Every figure matches data/visas/family-parent.ts (checked against
// Home Affairs, the pricing table and Services Australia on 12 October
// 2026). The page gives no second-instalment figure, so the estimator shows
// first instalments only. Extras are listed in verifiedExtras.

export const agedDependentRelative114838Explainer: VisaExplainer = {
  slug: "aged-dependent-relative-visa-114-838",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for a single person of Age Pension age (67) whose relative in Australia has met their basic needs for at least three years. That relative sponsors them, and the application waits in a capped queue.",
  bigIdeas: [
    { title: "67 or older, and single", body: "You must have reached Age Pension age and have no spouse or de facto partner.", icon: ICON.user },
    { title: "Three years of dependency", body: "A relative in Australia has paid for your food, shelter and clothing for at least the three years before you apply.", icon: ICON.home },
    { title: "Your relative sponsors you", body: "They promise two years of support, a four-year Assurance of Support is needed, and you wait in a capped queue.", icon: ICON.heart },
  ],
  heroCard: [
    { label: "Who it's for", value: "A single person aged 67 or over", icon: ICON.user },
    { label: "The key test", value: "Dependent on a relative here for 3 years", icon: ICON.home },
    { label: "Who sponsors you", value: "That relative, or their partner", icon: ICON.heart },
    { label: "Where you must be", value: "114: outside Australia; 838: in Australia", icon: ICON.mapPin },
    { label: "First instalment", value: "A$6,600, then a second before grant", icon: ICON.currencyDollar },
    { label: "Assurance of Support", value: "4 years", icon: ICON.shieldCheck },
  ],
  checkedAgainst: "Home Affairs, Services Australia and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Show your age, single status and three years of dependency, then apply.",
      does: [
        "Reach [[age-pension-age|Age Pension age]] before you apply",
        "Show at least three years of [[dependent|dependency]] on your relative",
        "Lodge on paper with [[form47of|Form 47OF]] and pay the first instalment",
        "Keep evidence of continuing dependency through the wait",
      ],
    },
    {
      id: "relative",
      name: "Your relative (the sponsor)",
      short: "Your relative",
      icon: ICON.heart,
      tone: "pink",
      role: "The relative in Australia who supports you, and who (or whose partner) sponsors you.",
      does: [
        "Has met your basic needs for at least three years",
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]]",
        "Promises support for your first two years in Australia",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the criteria, queues your application and decides it.",
      does: [
        "Processes the paper application in Perth",
        "Holds it in the [[capped|capped]] Other Family queue",
        "Asks for health checks, police certificates and the assurance",
        "Invoices the second instalment and decides the visa",
      ],
    },
    {
      id: "services",
      name: "Services Australia",
      short: "Services Aust.",
      icon: ICON.shieldCheck,
      tone: "teal",
      role: "Assesses the [[aos|Assurance of Support]] someone gives for you.",
      does: ["Checks the assurer's income", "Asks for the bank guarantee: A$5,000 for one adult, A$7,000 for two", "Manages the assurance for its four years"],
    },
  ],
  flows: [
    {
      from: "relative",
      to: "you",
      label: "Supports you",
      detail: "Your relative in Australia pays for your food, shelter and clothing, for at least the three years before you apply.",
    },
    {
      from: "relative",
      to: "government",
      label: "Sponsors you (Form 40)",
      detail: "Your relative, or their partner, signs [[form40|Form 40]], promising support, accommodation and financial help for your first two years in Australia.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies on paper",
      detail: "You post [[form47of|Form 47OF]] with the receipt for the A$6,600 first instalment: the 114 from outside Australia, the 838 from inside.",
    },
    {
      from: "services",
      to: "government",
      label: "Assurance accepted",
      detail: "When asked, an assurer gives a four-year [[aos|Assurance of Support]], with a bank guarantee of A$5,000 for one adult or A$7,000 for two.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After the queue, health, character and the second instalment, Home Affairs grants the 114 while you're outside Australia, or the 838 while you're here.",
    },
  ],
  journeyTitle: "From three years of support to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check age, status and three years of support",
      who: ["you"],
      description: "You must have reached [[age-pension-age|Age Pension age]], have no partner, and have been [[dependent|dependent]] on your relative for at least three years.",
      points: [
        "Bank statements, money transfers and rent receipts show how long the support has lasted",
        "Dependency can also arise because a disability stops you working",
        "Widowed, divorced or never-partnered applicants can qualify",
      ],
      youHold: "Evidence of your age, single status and three years of dependency",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Your relative completes Form 40",
      who: ["relative"],
      description: "Your relative, or their partner, sponsors you. Relatives include children, siblings, grandchildren, nieces, nephews and step-relatives.",
      points: [
        "[[settled|Settled]] in Australia and aged 18 or over",
        "A citizen, permanent resident or eligible New Zealand citizen",
        "Promises support, accommodation and financial help for your first two years",
      ],
      youHold: "A completed Form 40 with the sponsor's evidence",
      icon: ICON.heart,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge on paper and pay",
      who: ["you"],
      description: "Complete [[form47of|Form 47OF]], pay the first instalment through the ImmiAccount payment portal, and post or courier everything with certified copies.",
      points: [
        "114: be outside Australia when you apply",
        "838: be in Australia on a visa without [[c8503|condition 8503]], and you get a bridging visa",
        "Each extra applicant pays A$3,300 (18 or over) or A$1,655 (under 18)",
      ],
      youHold: "An acknowledgement letter (and, for the 838, a bridging visa)",
      cost: "A$6,600, paid by you",
      icon: ICON.envelope,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait in the Other Family queue",
      who: ["you", "government"],
      description: "These visas are [[capped|capped and queued]], and Home Affairs states demand exceeds the places available each year.",
      points: [
        "Import your paper application into ImmiAccount once it's acknowledged",
        "Keep evidence of continuing dependency: the criteria are assessed again at decision",
        "Stay lawful, and keep your details current",
      ],
      youHold: "A valid place in the queue, with up-to-date details",
      icon: ICON.clock,
    },
    {
      id: "assure",
      short: "Assure",
      title: "Health, character and the Assurance of Support",
      who: ["government", "services", "you"],
      description: "Home Affairs asks for health examinations, police certificates and the [[aos|Assurance of Support]].",
      points: [
        "The assurance lasts four years",
        "Bank guarantee: A$5,000 for one adult, A$7,000 for two",
        "A$10,000 if an organisation gives it",
      ],
      youHold: "Cleared checks and an accepted assurance",
      icon: ICON.shieldCheck,
    },
    {
      id: "pay",
      short: "Pay",
      title: "Pay the second instalment",
      who: ["you"],
      description: "Home Affairs invoices the second instalment after all other requirements are met.",
      points: ["The visa isn't granted until it's paid", "The page doesn't state the amount: check the invoice or Home Affairs' current visa pricing"],
      youHold: "A receipt for the second instalment",
      cost: "Invoiced before grant",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant and first entry",
      who: ["government", "you"],
      description: "The 114 is granted while you're outside Australia, with a first entry date generally 12 months from grant. The 838 is granted in Australia.",
      points: [
        "Permanent: work, study and Medicare",
        "A five-year [[travel-facility|travel facility]]",
        "Waiting periods apply to most Services Australia payments, including Age Pension",
      ],
      youHold: "Permanent residence",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on its full facts, assessed again at the time of decision.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age Pension age",
      question: "Have you reached Age Pension age (67)?",
      help: "It's checked when you apply.",
      options: [
        { value: "yes", label: "Yes, I'm 67 or older", status: "ok", note: "You meet the age criterion." },
        { value: "no", label: "Not yet", status: "stop", note: "Applying before Age Pension age (67) is a refusal risk. Wait until you've reached it." },
      ],
    },
    {
      id: "partner",
      topic: "Relationship status",
      question: "Do you have a spouse or de facto partner?",
      options: [
        { value: "no", label: "No: I'm widowed, divorced or have never had a partner", status: "ok", note: "Keep evidence ready, such as a divorce decree or your spouse's death certificate." },
        { value: "yes", label: "Yes", status: "stop", note: "You must have no spouse or de facto partner. A partner at any point in the process defeats the visa." },
      ],
    },
    {
      id: "dependency",
      topic: "Dependency",
      question: "Has a relative in Australia met your basic needs for at least three years?",
      help: "[[dependent|Dependent]] means relying on them for food, shelter and clothing. A disability that stops you working can also make you dependent.",
      options: [
        { value: "yes", label: "Yes, and I can show it", status: "ok", note: "Bank statements, money transfers and rent receipts are the usual evidence." },
        { value: "short", label: "Yes, but for less than three years", status: "stop", note: "You need at least three years of dependency before you apply." },
        {
          value: "shared",
          label: "Partly: I have other support too",
          status: "todo",
          note: "If the support is shared with other sources, Home Affairs may not be satisfied you rely on your relative for basic needs.",
        },
      ],
    },
    {
      id: "child",
      topic: "Your relative",
      question: "Is the relative who supports you your child?",
      options: [
        { value: "no", label: "No", status: "ok", note: "This visa covers other relatives too, such as siblings, grandchildren, nieces, nephews and step-relatives." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "A child is a relative, but compare the parent visas too: they need neither single status nor three years of dependency.",
          link: { label: "Aged Parent visa (804)", href: "/visas/family/aged-parent-visa-804" },
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Can your relative, or their partner, sponsor you?",
      help: "The sponsor must be [[settled]] in Australia, 18 or over, and a citizen, permanent resident or eligible New Zealand citizen.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "They complete Form 40 and promise support for your first two years in Australia." },
        { value: "no", label: "No", status: "stop", note: "This visa needs your relative, or their partner, as sponsor." },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The 114 is lodged and decided while you're outside Australia." },
        {
          value: "inside",
          label: "In Australia, on a visa without condition 8503",
          status: "ok",
          note: "The 838 is lodged and decided in Australia, with a bridging visa. Check your conditions in VEVO first.",
        },
        {
          value: "no-further-stay",
          label: "In Australia, on a visa with condition 8503",
          status: "todo",
          note: "An 838 application would be invalid unless the condition is waived first.",
          link: { label: "How 8503 waivers work", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "assurance",
      topic: "Assurance of Support",
      question: "Can someone give an Assurance of Support for you?",
      help: "A four-year promise to repay recoverable income support paid to you, backed by a bank guarantee.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "The assurer's bank guarantee is A$5,000 for one adult or A$7,000 for two (A$10,000 if an organisation gives it).",
        },
        { value: "unsure", label: "Not sure yet", status: "todo", note: "Plan it now: you must be able to obtain the assurance when Home Affairs asks." },
        { value: "no", label: "No one can", status: "stop", note: "You must be able to obtain an Assurance of Support when asked, so this is a hurdle to solve first." },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or a child you're including?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Health examinations and police certificates come later, when Home Affairs asks for them." },
        {
          value: "concern",
          label: "Yes: a significant health condition or a criminal record",
          status: "todo",
          note: "Health and character are assessed at the end of a long queue. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can include my husband or wife in the application.",
      fact: "No. You must have no spouse or de facto partner to qualify. Only dependent children and step-children can be included.",
    },
    {
      myth: "Any money my relative sends me counts as dependency.",
      fact: "Your relative must have met your basic needs, such as food, shelter and clothing, for at least the three years before you apply. Support shared with other sources may not satisfy Home Affairs.",
    },
    {
      myth: "Once I've applied, my dependency no longer matters.",
      fact: "It still matters. The criteria are assessed again at decision, so keep evidence that the support continues through the wait.",
    },
    {
      myth: "My child can't sponsor me for this visa.",
      fact: "A child can: a child is a relative. But a parent visa may suit better, because it needs neither single status nor three years of dependency.",
    },
    {
      myth: "I can apply for the 838 on any visa while I'm in Australia.",
      fact: "Not if your visa carries condition 8503 (no further stay): the application is invalid unless the condition is waived first.",
    },
    {
      myth: "I'll get the Age Pension as soon as I arrive.",
      fact: "Newly arrived residents face waiting periods for most Services Australia payments, including Age Pension, which has its own residence rules.",
    },
    {
      myth: "There's no second instalment on this visa.",
      fact: "There is. Home Affairs invoices it after all other requirements are met, and the visa isn't granted until it's paid.",
    },
  ],
  glossary: [
    {
      id: "age-pension-age",
      term: "Age Pension age",
      definition: "The age at which you could receive the Australian Age Pension. Services Australia states it is 67 years or older. You must have reached it when you apply.",
    },
    {
      id: "dependent",
      term: "Dependent",
      definition: "For this visa: your relative in Australia has met your basic needs, such as food, shelter and clothing, for at least the three years before you apply. A disability that stops you working can also make you dependent.",
    },
    {
      id: "relative",
      term: "Relative",
      definition: "For this visa, relatives include children, siblings, grandchildren, nieces, nephews and step-relatives.",
    },
    { id: "settled", term: "Settled", definition: "Living in Australia lawfully for a reasonable period. Your sponsor must be settled and aged 18 or over." },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for your first two years in Australia.",
    },
    {
      id: "form47of",
      term: "Form 47OF",
      full: "Application for migration to Australia by other family members",
      definition: "The paper application form for this visa. You pay the first instalment online first, then post or courier the form, the receipt and certified copies.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A legal promise to repay recoverable income support paid to you. For this visa it lasts four years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation).",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      full: "No further stay",
      definition: "A condition on some temporary visas. If the visa you hold carries it, an 838 application is invalid unless the condition is waived first.",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "The number of these visas granted each year is limited, and applications wait in a queue. Home Affairs states demand exceeds the places available each year.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years. After that you need a Resident Return visa or citizenship to return as a permanent resident.",
    },
    {
      id: "first-entry",
      term: "First entry date",
      definition: "The date in your 114 grant letter by which you must first enter Australia. It's generally 12 months from grant.",
    },
  ],
  verifiedExtras: [
    {
      fact: "Services Australia manages the Assurance of Support: it assesses the assurer's income and then asks for the bank guarantee and term deposit.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "Settled means lawfully resident in Australia for a reasonable period.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/aged-dependent-relative-114",
    },
  ],
  finder: parentFinder,
  fees: {
    variants: [
      {
        id: "aged-dependent-relative",
        label: "Aged Dependent Relative visa (114 or 838)",
        hint: "First instalments only: the second instalment is invoiced before grant.",
        primary: [{ label: "First instalment, when you apply", amount: 6600 }],
        adult: [{ label: "First instalment", amount: 3300 }],
        child: [{ label: "First instalment", amount: 1655 }],
      },
    ],
    maxAdults: 2,
    maxChildren: 3,
    notIncluded: "Not included: the second instalment, health examinations, police certificates, translations, and any review fee if the visa is refused.",
    notes: [
      "Family members can only be your dependent children and step-children: a partner can't be included.",
      "A second instalment is invoiced after all other requirements are met. The page doesn't state the amount, so this estimate leaves it out; check the invoice or Home Affairs' current visa pricing.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation). It's returned after the four years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
};
