import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Remaining Relative visa (subclass 115 and
// 835). Every figure matches data/visas/family-parent.ts (checked against
// Home Affairs, the pricing table and Services Australia on 12 October
// 2026). The page gives no second-instalment figure, so the estimator shows
// first instalments only. Extras are listed in verifiedExtras.

export const remainingRelative115835Explainer: VisaExplainer = {
  slug: "remaining-relative-visa-115-835",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for someone whose parents, siblings and non-dependent children (and their partner's) all live in Australia permanently. A parent or sibling sponsors you, and you wait in a long, capped queue.",
  bigIdeas: [
    { title: "Every near relative is here", body: "All the parents, siblings and non-dependent children of you and your partner must live in Australia permanently.", icon: ICON.users },
    { title: "A parent or sibling sponsors you", body: "They must be settled here, and promise two years of support. A two-year Assurance of Support is needed too.", icon: ICON.heart },
    { title: "115 outside, 835 inside", body: "Apply for the 115 from overseas or the 835 in Australia. Both wait in a capped queue with more demand than places.", icon: ICON.mapPin },
  ],
  heroCard: [
    { label: "Who it's for", value: "Someone whose near relatives all live here", icon: ICON.users },
    { label: "Who sponsors you", value: "A parent, sibling or step-equivalent, or their partner", icon: ICON.heart },
    { label: "How long", value: "Permanent", icon: ICON.home },
    { label: "Where you must be", value: "115: outside Australia; 835: in Australia", icon: ICON.mapPin },
    { label: "First instalment", value: "A$6,600, then a second before grant", icon: ICON.currencyDollar },
    { label: "Assurance of Support", value: "2 years", icon: ICON.shieldCheck },
  ],
  checkedAgainst: "Home Affairs, Services Australia and the Migration Act and Regulations",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Show that every near relative lives in Australia permanently, apply, and wait in the queue.",
      does: [
        "Pass the [[remaining-relative|remaining relative]] test, with your partner's family too",
        "Lodge on paper with [[form47of|Form 47OF]] and pay the first instalment",
        "Stay lawful through a long wait",
        "Pay the second instalment when it's invoiced",
      ],
    },
    {
      id: "sponsor",
      name: "Your sponsoring relative",
      short: "Your sponsor",
      icon: ICON.heart,
      tone: "pink",
      role: "Your parent, sibling or step-equivalent in Australia, or their live-in partner, who sponsors you.",
      does: [
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]]",
        "Promises support, accommodation and financial help for your first two years",
        "Has never held or sponsored a 115, 835, 104 or 806 visa",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the test, queues your application and decides it.",
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
      does: ["Checks the assurer's income", "Asks for the bank guarantee: A$5,000 for one adult, A$7,000 for two", "Manages the assurance for its two years"],
    },
  ],
  flows: [
    {
      from: "sponsor",
      to: "government",
      label: "Sponsors you (Form 40)",
      detail: "Your parent or sibling signs [[form40|Form 40]], promising support, accommodation and financial help for your first two years.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies on paper",
      detail: "You post or courier [[form47of|Form 47OF]] with the receipt for the A$6,600 first instalment: the 115 from outside Australia, the 835 from inside.",
    },
    {
      from: "government",
      to: "you",
      label: "Joins the queue",
      detail: "Your application waits in the [[capped|capped]] Other Family queue. If you applied for the 835 in Australia, you get a [[bridging|bridging visa]].",
    },
    {
      from: "services",
      to: "government",
      label: "Assurance accepted",
      detail: "When asked, an assurer gives a two-year [[aos|Assurance of Support]], with a bank guarantee of A$5,000 for one adult or A$7,000 for two.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After health, character and the second instalment, Home Affairs grants the 115 while you're outside Australia, or the 835 while you're here.",
    },
  ],
  journeyTitle: "From your family map to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "map",
      short: "Map",
      title: "Map every near relative",
      who: ["you"],
      description: "List the parents, siblings and non-dependent children of both you and your partner, with their status and where they live.",
      points: [
        "Each must usually live in Australia as a citizen, permanent resident or eligible New Zealand citizen",
        "One living overseas, or here on a temporary or bridging visa, means no grant",
        "Step-relatives count as [[near-relative|near relatives]] too",
      ],
      youHold: "A family map that meets the remaining relative test",
      icon: ICON.users,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Confirm your sponsor",
      who: ["sponsor"],
      description: "Your sponsor is your (or your partner's) parent, step-parent, sibling or step-sibling, or that relative's partner who lives with them.",
      points: [
        "[[settled|Settled]] in Australia and aged 18 or over",
        "Neither they nor their partner has held or sponsored a 115, 835, 104 or 806 visa",
        "Completes [[form40|Form 40]] with evidence of status and relationship",
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
        "115: be outside Australia when you apply",
        "835: be in Australia, and you get a [[bridging|bridging visa]]",
        "Each extra applicant pays A$3,300 (18 or over) or A$1,655 (under 18)",
      ],
      youHold: "An acknowledgement letter (and, for the 835, a bridging visa)",
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
        "Stay lawful: on the bridging visa (835) or outside Australia (115)",
        "Tell Home Affairs about family changes, such as a relative moving overseas",
      ],
      youHold: "A valid place in the queue, with up-to-date details",
      icon: ICON.clock,
    },
    {
      id: "assure",
      short: "Assure",
      title: "Health, character and the Assurance of Support",
      who: ["government", "services", "you"],
      description: "When your application is assessed, Home Affairs asks for health examinations, police certificates and the [[aos|Assurance of Support]].",
      points: [
        "The assurance lasts two years",
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
      description: "Home Affairs invoices the second instalment after all other requirements are met. The visa isn't granted until it's paid.",
      points: ["It's charged per applicant", "The page doesn't state the amount: check the invoice or Home Affairs' current visa pricing"],
      youHold: "A receipt for the second instalment",
      cost: "Invoiced before grant, per applicant",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant and first entry",
      who: ["government", "you"],
      description: "The 115 is granted while you're outside Australia, with a first entry date generally 12 months from grant. The 835 is granted in Australia.",
      points: [
        "Permanent: work, study and Medicare",
        "A five-year [[travel-facility|travel facility]]",
        "Your sponsor's two-year undertaking runs from your first entry on the visa",
      ],
      youHold: "Permanent residence",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides each application on its full facts, including your family at the time of decision.",
  },
  quiz: [
    {
      id: "near-relatives",
      topic: "Near relatives",
      question: "Do all of your near relatives, and your partner's, live in Australia permanently?",
      help: "[[near-relative|Near relatives]] are parents, siblings and non-dependent children, including step-relatives. Each must usually live here as a citizen, permanent resident or eligible New Zealand citizen.",
      options: [
        { value: "all", label: "Yes, every one of them", status: "ok", note: "That's the core of this visa. Keep evidence of each relative's status and Australian address." },
        { value: "overseas", label: "One or more live overseas", status: "stop", note: "The visa can't be granted while any near relative of you or your partner usually lives outside Australia." },
        {
          value: "temporary",
          label: "One or more are here on a temporary or bridging visa",
          status: "stop",
          note: "A near relative in Australia on a temporary visa (bridging visas included), or unlawfully, counts against you.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Map the parents, siblings and non-dependent children of both you and your partner before you pay anything." },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Can a parent, sibling or step-relative in Australia sponsor you?",
      help: "Yours or your partner's. They must be [[settled]], 18 or over, and a citizen, permanent resident or eligible New Zealand citizen. Their live-in partner can sponsor instead.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "They complete Form 40 and promise two years of support, accommodation and financial help." },
        { value: "no", label: "No", status: "stop", note: "This visa needs one of these sponsors." },
      ],
    },
    {
      id: "sponsor-history",
      topic: "Sponsor's history",
      question: "Has your sponsor, or their partner, ever held or sponsored a 115, 835, 104 or 806 visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing in their history stops them sponsoring you." },
        { value: "yes", label: "Yes", status: "stop", note: "They can't sponsor you for this visa. Another eligible relative may be able to." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check before you lodge: a sponsor with that history makes the application fail." },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The 115 is lodged and decided while you're outside Australia." },
        {
          value: "inside",
          label: "In Australia, holding a visa",
          status: "ok",
          note: "The 835 is lodged and decided in Australia, and comes with a bridging visa. Don't cancel your current visa.",
        },
        {
          value: "history",
          label: "In Australia, after a visa refusal or cancellation",
          status: "todo",
          note: "The section 48 bar can affect onshore 835 applicants. Get advice before you lodge.",
          link: { label: "The section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
        },
      ],
    },
    {
      id: "assurance",
      topic: "Assurance of Support",
      question: "Can someone give an Assurance of Support for you?",
      help: "A two-year promise to repay recoverable income support paid to you, backed by a bank guarantee. Home Affairs asks for it when the application is assessed.",
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
      id: "queue",
      topic: "The wait",
      question: "Are you prepared for a long, capped queue?",
      help: "Home Affairs states demand for Other Family visas exceeds the places available each year.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "Keep your family details current: a change during the wait, such as a sibling moving overseas, can defeat the test at decision time.",
        },
        {
          value: "soon",
          label: "I need a decision soon",
          status: "todo",
          note: "Home Affairs doesn't publish a fixed processing time for these visas. Its processing time tool gives an indication.",
          link: { label: "Home Affairs processing times", href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times", external: true },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for anyone in your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Health examinations and police certificates come later, when Home Affairs asks for them." },
        {
          value: "concern",
          label: "Yes: a significant health condition or a criminal record",
          status: "todo",
          note: "Health and character are assessed at the end of a long queue, for every applicant. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "If most of my family lives in Australia, I qualify.",
      fact: "Not quite. Every near relative of you and your partner (parents, siblings and non-dependent children) must usually live in Australia as a citizen, permanent resident or eligible New Zealand citizen. One living overseas is enough to fail.",
    },
    {
      myth: "My brother in Australia on a temporary visa counts as living here.",
      fact: "He doesn't. A near relative in Australia on a temporary visa, including a bridging visa, or unlawfully, counts against you.",
    },
    {
      myth: "Only my own relatives matter, not my partner's.",
      fact: "Your partner's parents, siblings and non-dependent children count too. List every family member on the form, migrating or not.",
    },
    {
      myth: "Any relative in Australia can sponsor me.",
      fact: "Only your (or your partner's) parent, step-parent, sibling or step-sibling, or that relative's live-in partner. And neither they nor their partner can have held or sponsored a 115, 835, 104 or 806 visa.",
    },
    {
      myth: "Once I'm in the queue, my family situation is locked in.",
      fact: "It isn't. A change during the long wait, such as a sibling moving overseas or a parent's permanent residence lapsing, can defeat the test at decision time.",
    },
    {
      myth: "There's no second instalment on this visa.",
      fact: "There is. Home Affairs invoices it after all other requirements are met, and the visa isn't granted until it's paid.",
    },
    {
      myth: "I can apply for the 115 while I'm visiting Australia.",
      fact: "No. The 115 must be lodged and decided while you're outside Australia. The 835 is the version for people in Australia.",
    },
    {
      myth: "My sponsor can pull out after the visa is granted.",
      fact: "They can't. A sponsor can withdraw in writing before a decision. After grant they can't, and if they don't meet the two-year undertaking, the visa can be cancelled.",
    },
  ],
  glossary: [
    {
      id: "near-relative",
      term: "Near relative",
      definition: "Your parents, siblings and non-dependent children, and your partner's, including step-relatives.",
    },
    {
      id: "remaining-relative",
      term: "Remaining relative",
      definition: "Someone whose near relatives, and their partner's, all usually live in Australia as Australian citizens, permanent residents or eligible New Zealand citizens, with none living anywhere else.",
    },
    { id: "settled", term: "Settled", definition: "Living in Australia lawfully for a reasonable period. Your sponsor must be settled and aged 18 or over." },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for your first two years.",
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
      definition: "A legal promise to repay recoverable income support paid to you. For Remaining Relative visas it lasts two years, with a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation).",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "The number of these visas granted each year is limited, and applications wait in a queue. Home Affairs states demand for Other Family visas exceeds the places available each year.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful in Australia while an application is processed. Subclass 835 applicants get one; 115 applicants wait outside Australia.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years. After that you need a Resident Return visa or citizenship to return as a permanent resident.",
    },
    {
      id: "first-entry",
      term: "First entry date",
      definition: "The date in your 115 grant letter by which you must first enter Australia. It's generally 12 months from grant.",
    },
    { id: "immiaccount", term: "ImmiAccount", definition: "Home Affairs' online account. You pay the first instalment through it, and import your paper application into it once acknowledged." },
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
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/remaining-relative-115",
    },
  ],
  finder: parentFinder,
  fees: {
    variants: [
      {
        id: "remaining-relative",
        label: "Remaining Relative visa (115 or 835)",
        hint: "First instalments only: the second instalment is invoiced before grant.",
        primary: [{ label: "First instalment, when you apply", amount: 6600 }],
        adult: [{ label: "First instalment", amount: 3300 }],
        child: [{ label: "First instalment", amount: 1655 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 3,
    notIncluded: "Not included: the second instalment, health examinations, police certificates, translations, and any review fee if the visa is refused.",
    notes: [
      "A second instalment is charged per applicant after all other requirements are met. The page doesn't state the amount, so this estimate leaves it out; check the invoice or Home Affairs' current visa pricing.",
      "Not a visa charge: the Assurance of Support needs a bank guarantee of A$5,000 for one adult or A$7,000 for two (A$10,000 for an organisation). It's returned after the two years if no recoverable payments were made.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
};
