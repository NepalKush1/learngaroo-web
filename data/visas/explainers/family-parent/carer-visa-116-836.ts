import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { parentFinder } from "./parent-finder";

// Interactive explainer for the Carer visa (subclass 116 and 836). Every
// figure matches data/visas/family-parent.ts (checked against Home Affairs
// and the pricing table on 12 October 2026). The page gives no
// second-instalment figure, so the estimator shows first instalments only.
// Extras are listed in verifiedExtras.

export const carer116836Explainer: VisaExplainer = {
  slug: "carer-visa-116-836",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for a relative who will give ongoing, substantial care to someone in Australia with a long-term medical condition, when no other relative or Australian service can reasonably provide it.",
  bigIdeas: [
    { title: "Bupa confirms the need first", body: "The person needing care is assessed by Bupa Medical Visa Services. The assessment must begin before you apply.", icon: ICON.clipboardDocumentCheck },
    { title: "No one else can reasonably help", body: "Other relatives in Australia, and Australian welfare, hospital, nursing and community services, can't reasonably provide the care.", icon: ICON.handRaised },
    { title: "You move here to give the care", body: "The 116 is for carers overseas, the 836 for carers in Australia. Both lead to permanent residence after a capped queue.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who it's for", value: "A relative who will care for someone here", icon: ICON.heart },
    { label: "Who sponsors you", value: "The person needing care, or their live-in partner", icon: ICON.users },
    { label: "Care assessment", value: "Bupa Medical Visa Services certificate", icon: ICON.clipboardDocumentCheck },
    { label: "Where you must be", value: "116: outside Australia; 836: in Australia", icon: ICON.mapPin },
    { label: "First instalment", value: "A$2,720, then a second before grant", icon: ICON.currencyDollar },
    { label: "How long", value: "Permanent", icon: ICON.home },
  ],
  actors: [
    {
      id: "you",
      name: "You (the carer)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Give ongoing, substantial care to your relative in Australia, and apply for the visa.",
      does: [
        "Understand the condition and the care it needs",
        "Show why no one else can reasonably provide the care",
        "Lodge on paper with [[form47of|Form 47OF]] and pay the first instalment",
        "Pay the second instalment, or ask for a [[hardship|hardship reduction]]",
      ],
    },
    {
      id: "relative",
      name: "Your relative who needs care",
      short: "Your relative",
      icon: ICON.heart,
      tone: "pink",
      role: "The Australian relative with the medical condition, who (or whose live-in partner) sponsors you.",
      does: [
        "Is assessed by [[bupa|Bupa Medical Visa Services]]",
        "Is [[settled]] in Australia and aged 18 or over",
        "Completes [[form40|Form 40]] as your sponsor",
        "Promises two years of support after the visa is granted",
      ],
    },
    {
      id: "bupa",
      name: "Bupa Medical Visa Services",
      short: "Bupa",
      icon: ICON.clipboardDocumentCheck,
      tone: "teal",
      role: "Assesses the person needing care and issues the [[certificate|Carer Visa Assessment Certificate]].",
      does: [
        "Assesses whether the condition is long term or permanent",
        "Checks whether help with daily life is needed for at least two years",
        "Issues the certificate Home Affairs needs before it can grant the visa",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the care need and the evidence, queues your application and decides it.",
      does: [
        "Won't accept an application before the Bupa assessment has begun",
        "Holds it in the [[capped|capped]] Other Family queue",
        "Asks for health checks and police certificates",
        "Invoices the second instalment, and can reduce the carer's to nil for severe hardship",
      ],
    },
  ],
  flows: [
    {
      from: "relative",
      to: "bupa",
      label: "Gets assessed",
      detail: "The person needing care arranges an assessment with [[bupa|Bupa Medical Visa Services]]. It must at least have begun before you apply.",
    },
    {
      from: "bupa",
      to: "you",
      label: "Issues the certificate",
      detail: "Bupa issues a [[certificate|Carer Visa Assessment Certificate]]. You lodge it with your application, or provide it within three months of applying.",
    },
    {
      from: "relative",
      to: "government",
      label: "Sponsors you (Form 40)",
      detail: "Your relative, or their partner who lives with them, signs [[form40|Form 40]], promising support, accommodation and financial help for two years after grant.",
    },
    {
      from: "you",
      to: "government",
      label: "Applies on paper",
      detail: "You post [[form47of|Form 47OF]] with the receipt for the A$2,720 first instalment: the 116 from outside Australia, the 836 from inside.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "After the queue, health, character and the second instalment, Home Affairs grants the 116 while you're outside Australia, or the 836 while you're here.",
    },
    {
      from: "you",
      to: "relative",
      label: "You give the care",
      detail: "You provide ongoing, substantial care and continuing support to your relative, or to a member of their household who needs it.",
    },
  ],
  journeyTitle: "From the Bupa assessment to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "assess",
      short: "Assess",
      title: "Start the Bupa assessment",
      who: ["relative", "bupa"],
      description: "The person needing care arranges an assessment with [[bupa|Bupa Medical Visa Services]]. Home Affairs won't accept your application unless it has at least begun.",
      points: [
        "The condition must be long term or permanent",
        "They must need help with the practical side of daily life for at least two years",
        "The visa can't be granted without the [[certificate|certificate]]",
      ],
      youHold: "A certificate, or a Bupa letter confirming the assessment is under way",
      cost: "Bupa's assessment fee, paid by the person assessed",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "gap",
      short: "Evidence",
      title: "Document the gap in care",
      who: ["you", "relative"],
      description: "Show in writing that the care can't reasonably come from another relative in Australia, or from Australian welfare, hospital, nursing or community services.",
      points: [
        "The care the person needs",
        "Which relatives in Australia can't provide it, and why",
        "Which services were approached, and why they aren't reasonably available",
      ],
      youHold: "A written statement with letters and records on access to care",
      icon: ICON.documentText,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "Your relative completes Form 40",
      who: ["relative"],
      description: "The person needing care, or their spouse or de facto partner who lives with them, sponsors you with [[form40|Form 40]].",
      points: [
        "[[settled|Settled]] in Australia and aged 18 or over",
        "A citizen, permanent resident or eligible New Zealand citizen",
        "Home Affairs may ask for their income and tax records",
      ],
      youHold: "A completed Form 40 with the sponsor's evidence",
      icon: ICON.heart,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Lodge on paper and pay",
      who: ["you"],
      description: "Complete [[form47of|Form 47OF]], pay the first instalment through the ImmiAccount payment portal, and send everything with certified copies to the processing centre in Perth.",
      points: [
        "116: be outside Australia when you apply",
        "836: be in Australia, holding (or having recently held) a [[substantive|substantive visa]], and you get a bridging visa",
        "Each extra applicant pays A$1,365 (18 or over) or A$680 (under 18)",
      ],
      youHold: "An acknowledgement letter (and, for the 836, a bridging visa)",
      cost: "A$2,720, paid by you",
      icon: ICON.envelope,
    },
    {
      id: "certificate",
      short: "Certificate",
      title: "Provide the certificate and import",
      who: ["you"],
      description: "If the Bupa certificate wasn't lodged with the application, provide it within three months. Then import the paper application into ImmiAccount.",
      points: ["ImmiAccount lets you attach documents and receive messages", "No certificate at decision time means no grant"],
      youHold: "The certificate on file, and the application in ImmiAccount",
      icon: ICON.documentCheck,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait in the Other Family queue",
      who: ["you", "government"],
      description: "Carer visas are [[capped|capped and queued]], and Home Affairs states demand exceeds the places available each year.",
      points: ["Stay lawful, and keep your details current", "Tell Home Affairs if the care situation or your family changes"],
      youHold: "A valid place in the queue, with up-to-date details",
      icon: ICON.clock,
    },
    {
      id: "final",
      short: "Final",
      title: "Final checks and the second instalment",
      who: ["government", "you"],
      description: "Home Affairs asks for health examinations and police certificates, and may ask for an [[aos|Assurance of Support]]. Then it invoices the second instalment.",
      points: [
        "You can ask in writing for the carer's second instalment to be reduced to nil for severe financial hardship",
        "Family members' second instalments can't be reduced",
      ],
      youHold: "Cleared checks, and a paid or waived second instalment",
      cost: "Invoiced before grant; can be nil for hardship",
      icon: ICON.banknotes,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant and first entry",
      who: ["government", "you"],
      description: "The 116 is granted while you're outside Australia, with a first entry date generally 12 months from grant. The 836 is granted in Australia.",
      points: [
        "Permanent: work, study and Medicare",
        "A five-year [[travel-facility|travel facility]]",
        "Your sponsor's two-year undertaking runs from grant",
      ],
      youHold: "Permanent residence",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    disclaimer: "A general self-check, not advice or a prediction. Bupa's assessment and Home Affairs' decision on your full facts decide the outcome.",
  },
  quiz: [
    {
      id: "relative",
      topic: "Who needs care",
      question: "Is the person needing care your relative, and an Australian citizen or permanent resident?",
      help: "Relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces, nephews and step-relatives. Eligible New Zealand citizens count, and so does a member of your relative's household.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "The care can be for your Australian relative, or for a member of their family who lives with them." },
        { value: "no", label: "No", status: "stop", note: "The Carer visa is only for caring for a relative (or a member of their household) who is a citizen, permanent resident or eligible New Zealand citizen." },
      ],
    },
    {
      id: "condition",
      topic: "The medical condition",
      question: "Do they have a long-term condition that means they need help with daily life for at least two years?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Bupa Medical Visa Services must confirm this in its assessment." },
        {
          value: "unsure",
          label: "Not sure",
          status: "todo",
          note: "The Bupa assessment decides it. Home Affairs won't accept the application until that assessment has at least begun.",
        },
        { value: "no", label: "No", status: "stop", note: "The condition must be long term or permanent, and mean help with daily life is needed for at least two years." },
      ],
    },
    {
      id: "bupa",
      topic: "Bupa assessment",
      question: "Has the Bupa Medical Visa Services assessment begun?",
      options: [
        { value: "done", label: "Yes, and we have the certificate", status: "ok", note: "Lodge the certificate with your application." },
        { value: "started", label: "It has begun", status: "ok", note: "You can lodge, then provide the certificate within three months of applying." },
        { value: "no", label: "Not yet", status: "todo", note: "Start it first: Home Affairs won't accept your application unless the assessment has at least begun." },
      ],
    },
    {
      id: "access",
      topic: "Other sources of care",
      question: "Could another relative in Australia, or an Australian service, reasonably provide the care?",
      options: [
        { value: "no", label: "No, and we can show why in writing", status: "ok", note: "Keep the letters and records that show what was sought and why it isn't available." },
        {
          value: "unsure",
          label: "We haven't checked",
          status: "todo",
          note: "Approach welfare, hospital, nursing and community services, and record why each isn't reasonably available.",
        },
        { value: "yes", label: "Yes, someone could", status: "stop", note: "If the care is reasonably available from another relative or an Australian service, the visa is refused." },
      ],
    },
    {
      id: "able",
      topic: "Your care",
      question: "Are you willing and able to give ongoing, substantial care yourself?",
      help: "You should fully understand the medical condition and the care it needs.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Include evidence of your understanding of the condition and your ability to provide the care." },
        { value: "unsure", label: "Not sure", status: "todo", note: "The visa rests on you providing that care. Talk it through with your relative before you apply." },
      ],
    },
    {
      id: "location",
      topic: "Where you are",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The 116 is lodged and decided while you're outside Australia." },
        {
          value: "inside",
          label: "In Australia, holding a visa (not a bridging or Transit visa)",
          status: "ok",
          note: "The 836 is lodged and decided in Australia, with a bridging visa while you wait.",
        },
        {
          value: "no-visa",
          label: "In Australia, without a substantive visa",
          status: "todo",
          note: "You may need to meet [[schedule3|Schedule 3 criteria]], and the section 48 bar can apply. Get advice before you lodge.",
          link: { label: "Schedule 3 criteria", href: "/visas/appeals-and-review/schedule-3-criteria" },
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Can the person needing care, or their live-in partner, sponsor you?",
      help: "The sponsor must be [[settled]] in Australia, 18 or over, and a citizen, permanent resident or eligible New Zealand citizen.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "They complete Form 40 and promise two years of support after grant. Home Affairs may ask for income or tax records." },
        { value: "no", label: "No", status: "stop", note: "The sponsor must be the relative needing care, or their spouse or de facto partner who lives with them." },
      ],
    },
    {
      id: "second",
      topic: "Second instalment",
      question: "Could you pay the second instalment when it's invoiced?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "It's invoiced after all other requirements are met." },
        {
          value: "hardship",
          label: "Paying it would cause severe financial hardship",
          status: "todo",
          note: "You can ask in writing for the carer's second instalment to be reduced to nil. Family members' instalments can't be reduced.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can lodge now and arrange the Bupa assessment later.",
      fact: "No. Home Affairs won't accept the application unless the Bupa assessment has at least begun, and it won't grant the visa without the certificate.",
    },
    {
      myth: "Any illness in the family qualifies.",
      fact: "The condition must be long term or permanent, and mean the person needs help with the practical side of daily life for at least two years, as Bupa Medical Visa Services assesses it.",
    },
    {
      myth: "It doesn't matter if a nursing service could help.",
      fact: "It does. If another relative in Australia, or an Australian welfare, hospital, nursing or community service, could reasonably provide the care, the visa is refused.",
    },
    {
      myth: "Only a child can come to care for a parent.",
      fact: "Relatives include parents, children, siblings, grandparents, grandchildren, aunts, uncles, nieces, nephews and step-relatives.",
    },
    {
      myth: "The second instalment always has to be paid in full.",
      fact: "Home Affairs can reduce the carer's second instalment to nil for severe financial hardship to you or the person you care for. It won't reduce family members' instalments.",
    },
    {
      myth: "Any family member in Australia can be the sponsor.",
      fact: "The sponsor is the relative who needs care, or their spouse or de facto partner who lives with them.",
    },
    {
      myth: "I can apply for the 116 while I'm visiting Australia.",
      fact: "No. The 116 is lodged and decided while you're outside Australia. The 836 is for people in Australia holding, or recently holding, a substantive visa.",
    },
  ],
  roles: [
    {
      id: "carer",
      label: "I'm the carer",
      intro: "Your part is the application, the evidence about care, and being ready to give that care.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Understand the condition and the care it needs",
            "Gather evidence on why other relatives and services can't provide the care",
            "Check the Bupa assessment has begun",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge Form 47OF on paper, with certified copies",
            "Pay A$2,720 through the ImmiAccount payment portal and include the receipt",
            "Provide the Bupa certificate within three months if it isn't ready",
          ],
        },
        {
          title: "While you wait",
          items: [
            "Stay lawful and keep your details current",
            "Tell Home Affairs if the care situation or your family changes",
            "Pay the second instalment, or ask for a [[hardship|hardship reduction]]",
          ],
        },
      ],
    },
    {
      id: "relative",
      label: "I'm the one needing care",
      tone: "pink",
      intro: "Your part is the Bupa assessment and the sponsorship. Your live-in partner can be the sponsor instead.",
      groups: [
        {
          title: "The assessment",
          items: [
            "Arrange and pay for the [[bupa|Bupa Medical Visa Services]] assessment",
            "Start it before the visa application is lodged",
          ],
        },
        {
          title: "As the sponsor",
          items: [
            "Complete Form 40",
            "Promise support, accommodation and financial help for two years after grant",
            "Provide income or tax records if Home Affairs asks",
          ],
        },
        {
          title: "After the grant",
          items: ["Keep the two-year undertaking: if it isn't met, the visa can be cancelled"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "bupa",
      term: "Bupa Medical Visa Services",
      definition: "The organisation that assesses the person needing care and issues the Carer Visa Assessment Certificate. The person being assessed pays for it.",
    },
    {
      id: "certificate",
      term: "Carer Visa Assessment Certificate",
      definition: "Bupa's certificate that the person has a long-term or permanent condition needing help with daily life for at least two years. Provide it with the application or within three months.",
    },
    {
      id: "settled",
      term: "Settled",
      definition: "Living in Australia lawfully for a reasonable period. Your sponsor must be settled and aged 18 or over.",
    },
    {
      id: "form40",
      term: "Form 40",
      full: "Sponsorship for migration to Australia",
      definition: "The form your sponsor completes, including the promise of support, accommodation and financial help for two years after grant.",
    },
    {
      id: "form47of",
      term: "Form 47OF",
      full: "Application for migration to Australia by other family members",
      definition: "The paper application form for this visa. You pay the first instalment online first, then send the form, the receipt and certified copies.",
    },
    {
      id: "substantive",
      term: "Substantive visa",
      definition: "Any visa other than a bridging, criminal justice or enforcement visa. For the 836 it also can't be a Transit visa (subclass 771).",
    },
    {
      id: "schedule3",
      term: "Schedule 3 criteria",
      definition: "Extra criteria for people who apply for certain visas in Australia while they're unlawful or hold only a bridging visa.",
    },
    {
      id: "capped",
      term: "Capped and queued",
      definition: "The number of these visas granted each year is limited, and applications wait in a queue. Home Affairs states demand exceeds the places available each year.",
    },
    {
      id: "hardship",
      term: "Hardship reduction",
      definition: "A written request to reduce the carer's second instalment to nil, because paying it would cause you or the person you care for severe financial hardship. It doesn't apply to family members.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A promise to repay recoverable income support, backed by a bank guarantee. Home Affairs might ask for one for a Carer visa; the period for this visa would be four years.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long you can leave and re-enter Australia on your permanent visa: five years. After that you need a Resident Return visa or citizenship to return as a permanent resident.",
    },
    {
      id: "first-entry",
      term: "First entry date",
      definition: "The date in your 116 grant letter by which you must first enter Australia. It's generally 12 months from grant.",
    },
  ],
  verifiedExtras: [
    {
      fact: "A substantive visa is any visa other than a bridging, criminal justice or enforcement visa.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
    {
      fact: "Schedule 3 to the Migration Regulations adds extra criteria for people who apply for certain visas in Australia while they are unlawful or hold only a bridging visa.",
      source: "/visas/appeals-and-review/schedule-3-criteria",
    },
    {
      fact: "Settled means lawfully resident in Australia for a reasonable period.",
      source: "/visas/family/contributory-parent-visa-143-173",
    },
    {
      fact: "From 1 July 2026 a lower visa cost applies to eligible Pacific Island and Timor-Leste citizens who lodge a valid application, based on the primary applicant's passport.",
      source: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/carer-116",
    },
  ],
  finder: parentFinder,
  fees: {
    variants: [
      {
        id: "carer",
        label: "Carer visa (116 or 836)",
        hint: "First instalments only: the second instalment is invoiced before grant.",
        primary: [{ label: "First instalment, when you apply", amount: 2720 }],
        adult: [{ label: "First instalment", amount: 1365 }],
        child: [{ label: "First instalment", amount: 680 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 3,
    notIncluded: "Not included: the second instalment, the Bupa assessment fee, health examinations, police certificates, translations, and any review fee if the visa is refused.",
    notes: [
      "A second instalment is invoiced after all other requirements are met. The page doesn't state the amount, so this estimate leaves it out.",
      "Home Affairs can reduce the carer's second instalment to nil for severe financial hardship. Family members' second instalments can't be reduced.",
      "From 1 July 2026 a lower cost applies to eligible Pacific Island and Timor-Leste citizens. This estimate shows the standard charges.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/fees-and-charges/current-visa-pricing",
    confirmLabel: "Home Affairs current visa pricing page",
  },
};
