import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { childFinder } from "./child-finder";

// Interactive explainer for the Orphan Relative visa (subclasses 117 and
// 837). Every figure matches data/visas/family-partner.ts (checked against
// Home Affairs and the Migration Regulations on 12 October 2026). The reader
// is usually the relative who sponsors, so "you" is that relative (green)
// and the child, who is the applicant, is teal.

export const orphanRelativeVisa117837Explainer: VisaExplainer = {
  slug: "orphan-relative-visa-117-837",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for a single child under 18 whose parents are each dead, permanently incapacitated or can't be found, sponsored by a settled relative in Australia.",
  bigIdeas: [
    { title: "No parent can care for the child", body: "Each parent is dead, permanently incapacitated or can't be found. Parents who could care but won't don't count.", icon: ICON.heart },
    { title: "A settled relative sponsors", body: "A sibling, grandparent, aunt or uncle (or step-relative), or their live-in partner, who is settled in Australia.", icon: ICON.users },
    { title: "Permanent, with two years' support", body: "The child becomes a permanent resident, and you support them for their first two years here.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors", value: "A settled relative in Australia, or their partner", icon: ICON.users },
    { label: "Child's age", value: "Under 18 and single when applying", icon: ICON.cake },
    { label: "Where the child is", value: "117: outside Australia. 837: in Australia", icon: ICON.mapPin },
    { label: "Stay", value: "Permanent, with a five-year travel facility", icon: ICON.home },
    { label: "Health", value: "Health requirement with no waiver", icon: ICON.shieldCheck },
    { label: "Visa charge", value: "A$2,475 (A$2,030 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "child",
      name: "The child (the applicant)",
      short: "Child",
      icon: ICON.faceSmile,
      tone: "teal",
      role: "A single child under 18 whose parents can't care for them.",
      does: [
        "Is under 18 and single when applying",
        "Is outside Australia (117) or in Australia (837) when applying and at decision",
        "Meets the health requirement, which has no waiver",
        "Meets the character requirement from 16",
      ],
    },
    {
      id: "you",
      name: "You (the sponsoring relative)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You're the child's settled Australian relative, or that relative's partner, and you sponsor the child.",
      does: [
        "Are 18 or over and [[settled|settled]] in Australia as a citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]]",
        "Complete the sponsorship ([[form40ch|Form 40CH]]) to send with the child's application",
        "Provide police checks, with your partner",
        "Support the child for their first two years and help them settle",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the child's circumstances, the sponsor and the consents, then decides the visa.",
      does: [
        "Approves the sponsorship",
        "Checks the evidence about the parents and the child's best interests",
        "Asks for health checks, biometrics or more information",
        "Grants or refuses the visa",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You sponsor",
      detail: "You complete [[form40ch|Form 40CH]]. It's posted together with the child's application.",
    },
    {
      from: "child",
      to: "government",
      label: "Child applies",
      detail: "The child's application ([[form47ch|Form 47CH]]) is posted with the evidence about the parents, the consents and the payment receipt.",
    },
    {
      from: "government",
      to: "child",
      label: "Visa granted",
      detail: "Home Affairs grants the permanent visa: the 117 while the child is outside Australia, the 837 while the child is here.",
    },
    {
      from: "you",
      to: "child",
      label: "Two years' support",
      detail: "You help with accommodation and money, as needed, for the child's first two years, and help them settle in Australia.",
    },
  ],
  journeyTitle: "From first check to a permanent visa",
  journeyHighlight: "permanent visa",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Confirm the child is an orphan relative",
      who: ["you"],
      description: "Check that the child is an [[orphan|orphan relative]]: their age, each parent's situation, and who will sponsor.",
      points: [
        "Under 18 and single",
        "Each parent dead, [[incapacity|permanently incapacitated]] or of unknown whereabouts",
        "Sponsor: a [[settled|settled]] sibling, grandparent, aunt or uncle (or step-relative), or their live-in partner",
        "Child protection rules apply to you and your partner",
      ],
      youHold: "Confirmation the child qualifies, and an eligible sponsor",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "parents",
      short: "Parents",
      title: "Gather evidence about the parents",
      who: ["you"],
      description: "Show why neither parent can care for the child, and who now has legal responsibility for them.",
      points: [
        "Death certificates",
        "Medical reports for a parent who can't care for the child",
        "For a missing parent: how long, and the efforts made to find them",
        "Consent from whoever has legal responsibility ([[form1229|Form 1229]]), or a court order",
      ],
      youHold: "Evidence about each parent, and consent",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "documents",
      short: "Documents",
      title: "Identity, relationship and sponsor documents",
      who: ["you", "child"],
      description: "A paper application needs certified copies of every document.",
      points: [
        "The child's passport pages and four certified photos",
        "Documents showing how you're related to the child",
        "Your settled status, income and police check documents",
      ],
      youHold: "A complete set of certified copies",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Pay first, then post the application",
      who: ["you", "child"],
      description: "Pay the charge, then post Form 47CH, Form 40CH, the receipt and all documents to the Child and Other Family Processing Centre.",
      points: [
        "A$2,475, or A$2,030 with an eligible Pacific or Timor-Leste passport",
        "117: child outside Australia. 837: child in Australia",
        "No in-person lodgement",
        "An 837 child gets a [[bridging|bridging visa]] with the application",
      ],
      youHold: "A valid paper application",
      cost: "A$2,475, paid before posting",
      icon: ICON.envelope,
    },
    {
      id: "track",
      short: "Track",
      title: "Import into ImmiAccount and complete checks",
      who: ["you", "government"],
      description: "After the acknowledgement letter, import the application into ImmiAccount to provide further documents.",
      points: [
        "Health examinations: there's no health waiver ([[pic4005|PIC 4005]])",
        "Biometrics, or an [[aos|assurance of support]], if Home Affairs asks",
        "Tell Home Affairs if the child needs to travel: an 837 child must be in Australia at decision",
      ],
      youHold: "Health and character clearances on file",
      icon: ICON.computerDesktop,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Decision and entry",
      who: ["government", "child"],
      description: "A 117 child must be outside Australia at grant; an 837 child must be in Australia.",
      points: [
        "117: enter before the [[first-entry|first entry date]], generally 12 months from grant",
        "Permanent from grant, with a five-year [[travel-facility|travel facility]]",
        "Citizenship later: residence counts from entry (117) or grant (837)",
      ],
      youHold: "The child's permanent visa",
      icon: ICON.checkBadge,
    },
    {
      id: "support",
      short: "Support",
      title: "The child's first two years",
      who: ["you", "child"],
      description: "You help the child with accommodation and money, as needed, for their first two years, and help them settle in Australia.",
      points: [
        "You can't withdraw the sponsorship after grant",
        "You can't cancel or otherwise affect the child's visa",
        "The child can live, work and study here, and enrol in Medicare",
      ],
      youHold: "A permanent resident child, settling in",
      icon: ICON.lifebuoy,
    },
  ],
  check: {
    ok: {
      title: "The child looks on track",
      body: "Nothing in your answers rules the child out. Next comes the detail: evidence about the parents, consent and your checks as the sponsor.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on the child's full circumstances and best interests.",
  },
  quiz: [
    {
      id: "parents",
      topic: "The parents",
      question: "Which describes each of the child's parents?",
      options: [
        { value: "dead", label: "Each has died or is permanently incapacitated", status: "ok", note: "Death certificates and medical reports are the key evidence." },
        {
          value: "missing",
          label: "At least one can't be found",
          status: "todo",
          note: "You'll need evidence of how long they've been missing and the efforts made to find them.",
        },
        {
          value: "temporary",
          label: "At least one is only temporarily unable to care for the child",
          status: "stop",
          note: "Incapacity must be permanent and documented. A temporary or undocumented incapacity doesn't make the child an [[orphan|orphan relative]].",
        },
        {
          value: "unwilling",
          label: "At least one could care for the child but won't",
          status: "stop",
          note: "A parent who is able to care for the child but chooses not to means the child isn't an [[orphan|orphan relative]].",
        },
      ],
    },
    {
      id: "child",
      topic: "The child",
      question: "Is the child under 18, without a spouse or de facto partner?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Turning 18 after you apply doesn't defeat the application." },
        {
          value: "adult",
          label: "No, they're 18 or over",
          status: "stop",
          note: "The child must be under 18 when they apply. For an adult relative, the Remaining Relative visa may be worth a look.",
          link: { label: "Remaining Relative visa", href: "/visas/family/remaining-relative-visa-115-835" },
        },
        { value: "partner", label: "No, they have a spouse or de facto partner", status: "stop", note: "The child must not have a spouse or de facto partner." },
      ],
    },
    {
      id: "relative",
      topic: "Your relationship",
      question: "How are you related to the child?",
      options: [
        { value: "sibling", label: "Sibling or step-sibling", status: "ok", note: "You're one of the relatives Home Affairs lists." },
        { value: "grandparent", label: "Grandparent or step-grandparent", status: "ok", note: "You're one of the relatives Home Affairs lists." },
        { value: "aunt-uncle", label: "Aunt, uncle, step-aunt or step-uncle", status: "ok", note: "You're one of the relatives Home Affairs lists." },
        {
          value: "partner",
          label: "I'm the live-in partner of one of these relatives",
          status: "ok",
          note: "You can sponsor if you're settled, 18 or over and living with the relative.",
        },
        {
          value: "other",
          label: "Another relative, or a family friend",
          status: "stop",
          note: "Home Affairs lists only siblings, grandparents, aunts and uncles (including step-relatives), or that relative's live-in partner.",
        },
      ],
    },
    {
      id: "settled",
      topic: "Settled in Australia",
      question: "Are you an Australian citizen, permanent resident or eligible New Zealand citizen, settled in Australia?",
      help: "You must also be 18 or over. [[settled|Settled]] means lawfully living in Australia for a reasonable period.",
      options: [
        { value: "yes", label: "Yes, I've lived here lawfully for a while", status: "ok", note: "Keep evidence of your status and residence ready." },
        {
          value: "recent",
          label: "I arrived, or became a resident, only recently",
          status: "todo",
          note: "Settled means lawfully resident in Australia for a reasonable period. Get advice on whether you meet it.",
          link: { label: "Get advice", href: "/bookings" },
        },
        { value: "no", label: "No", status: "stop", note: "The sponsor must be a settled Australian citizen, permanent resident or eligible New Zealand citizen." },
      ],
    },
    {
      id: "where",
      topic: "Where the child is",
      question: "Where is the child now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The 117 fits. The child must stay outside Australia until it's granted." },
        {
          value: "inside",
          label: "In Australia, on a visa other than a Transit visa",
          status: "ok",
          note: "The 837 fits, unless the visa has a [[c8503|no further stay condition]]. The child gets a [[bridging|bridging visa]] with the application.",
        },
        {
          value: "ended",
          label: "In Australia, and their last visa has ended",
          status: "todo",
          note: "The child must apply within 12 months of their last substantive visa ending ([[criterion3002|criterion 3002]]), and that visa can't have been a [[transit|Transit visa]].",
        },
        {
          value: "c8503",
          label: "In Australia, and their visa has a no further stay condition",
          status: "stop",
          note: "The 837 can't be lodged until the no further stay condition is waived.",
          link: { label: "No further stay waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health",
      question: "Does the child have a significant health condition?",
      options: [
        { value: "no", label: "No", status: "ok", note: "The child will still have health examinations when Home Affairs asks." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "This visa has no health waiver ([[pic4005|PIC 4005]]). A condition likely to need significant health care or community services may lead to refusal. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "police",
      topic: "Police checks",
      question: "Can you and your partner provide clear police checks?",
      help: "Needed if the child will be under 18 when the sponsorship is decided.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "You'll each provide an AFP certificate ([[code33|code 33]]) if you've lived in Australia since turning 16. You'll also provide overseas certificates for countries you lived in for 12 months or more in the last 10 years.",
        },
        {
          value: "offence",
          label: "One of us has a charge or conviction for an offence against a child",
          status: "stop",
          note: "A pending charge for a [[registrable|registrable child sex offence]] means the sponsorship must be refused. A conviction means refusal unless quashed, with narrow exceptions.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The child must have lost both parents to death.",
      fact: "No. Each parent must be unable to care for the child because they're dead, permanently incapacitated or of unknown whereabouts. It can be a mix, such as one parent deceased and one missing.",
    },
    {
      myth: "Any relative can sponsor the child.",
      fact: "Home Affairs lists siblings, grandparents, aunts and uncles (including step-relatives), or that relative's live-in partner. The sponsor must be 18 or over and settled in Australia.",
    },
    {
      myth: "A health waiver will be available if it's needed.",
      fact: "Not for this visa. It uses public interest criterion 4005, which has no waiver, unlike the Child visa.",
    },
    { myth: "Brothers and sisters can apply together.", fact: "Each child applies separately, but the same relative can sponsor each of them." },
    {
      myth: "As the sponsor, I could cancel the visa later.",
      fact: "No. After grant, you can't cancel the visa, withdraw the sponsorship or otherwise affect the child's residence.",
    },
    {
      myth: "Turning 18 during processing ends the application.",
      fact: "No. The child must be under 18 when they apply; turning 18 afterwards doesn't defeat the application.",
    },
  ],
  roles: [
    {
      id: "sponsor",
      label: "I'm the sponsor",
      tone: "green",
      intro: "Your part is the sponsorship, your police checks, and two years of support.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Be 18 or over and [[settled|settled]] in Australia as a citizen, permanent resident or eligible New Zealand citizen",
            "Complete [[form40ch|Form 40CH]] and send it with the child's [[form47ch|Form 47CH]]",
            "Show how you're related to the child, your status and your income",
          ],
        },
        {
          title: "Checks",
          items: [
            "AFP ([[code33|code 33]]) and overseas police certificates for you and your partner",
            "A statement about any child support or earlier assurances of support",
          ],
        },
        {
          title: "After grant",
          items: [
            "Help with accommodation and money, as needed, for two years",
            "Help the child settle in Australia",
            "You can't withdraw the sponsorship or affect the child's visa",
          ],
        },
      ],
    },
    {
      id: "child",
      label: "The child's application",
      tone: "teal",
      intro: "The child is the applicant. These are the parts that sit with their application.",
      groups: [
        {
          title: "Eligibility",
          items: ["Under 18 and single when applying", "Each parent dead, permanently incapacitated or of unknown whereabouts"],
        },
        {
          title: "Documents",
          items: [
            "Passport pages and four certified photos",
            "Evidence about each parent, and consent from whoever has legal responsibility",
            "Police certificates and Form 80 if 16 or over",
          ],
        },
        {
          title: "Where to be",
          items: ["117: outside Australia when applying and at grant", "837: in Australia when applying and at decision"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "orphan",
      term: "Orphan relative",
      definition: "A single child under 18 who can't be cared for by either parent, because each parent is dead, permanently incapacitated or of unknown whereabouts.",
    },
    {
      id: "settled",
      term: "Settled",
      definition: "Lawfully resident in Australia for a reasonable period. The sponsor must be a settled Australian citizen, permanent resident or eligible New Zealand citizen.",
    },
    {
      id: "incapacity",
      term: "Permanently incapacitated",
      definition: "Permanently unable to care for the child, for example because of illness or disability, shown by medical evidence.",
    },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A New Zealand citizen who is a protected Special Category visa holder. They can sponsor in the same way as an Australian citizen or permanent resident.",
    },
    { id: "pic4005", term: "PIC 4005", definition: "The health requirement used for this visa. Unlike PIC 4007, used for the Child visa, it has no waiver." },
    { id: "form40ch", term: "Form 40CH", definition: "Sponsorship for a child to migrate to Australia. You complete it, and it's posted with the child's application." },
    { id: "form47ch", term: "Form 47CH", definition: "The child's own application form, posted with the sponsorship." },
    {
      id: "form1229",
      term: "Form 1229",
      definition: "Consent to grant an Australian visa to a child under 18, signed by a person with a legal right to decide where the child lives. A statutory declaration also works.",
    },
    {
      id: "criterion3002",
      term: "Criterion 3002",
      definition: "A Schedule 3 rule for applying in Australia without a substantive visa: the application must be made within 12 months of the last substantive visa ending.",
    },
    { id: "transit", term: "Transit visa", definition: "The subclass 771 visa for passing through Australia. An 837 can't be based on holding one." },
    { id: "c8503", term: "No further stay condition", definition: "A condition on some visas. While it applies, the child can't apply for the 837 in Australia unless it's waived first." },
    { id: "bridging", term: "Bridging visa", definition: "A temporary visa granted with an 837 application, so the child stays lawful while they wait." },
    { id: "first-entry", term: "First entry date", definition: "The date in the grant letter by which a 117 child must first enter Australia, generally 12 months from grant." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long the child can leave and re-enter Australia on the visa: five years from grant. After that, a Resident Return visa is needed.",
    },
    { id: "registrable", term: "Registrable child sex offence", definition: "An offence against a child that would require registration on a child offender register." },
    { id: "code33", term: "AFP code 33", definition: "The Immigration/Citizenship purpose code to use when applying for an Australian Federal Police National Police Certificate." },
    { id: "aos", term: "Assurance of support", definition: "A formal financial commitment Home Affairs may ask for. If asked, it must be accepted before the visa is granted." },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the visa application and sponsorship with your family.",
  },
  verifiedExtras: [
    {
      fact: "An eligible New Zealand citizen is a New Zealand citizen who is a protected Special Category visa holder.",
      source: "/visas/family/partner-visa-onshore-820-801",
    },
  ],
  finder: childFinder,
  fees: {
    variantLabel: "Which charge applies?",
    variants: [
      {
        id: "standard",
        label: "Standard charge (117 or 837)",
        hint: "Most applications",
        primary: [{ label: "Orphan Relative visa, for the child", amount: 2475 }],
        child: [{ label: "Each dependant of the child, under 18", amount: 625 }],
      },
      {
        id: "pacific",
        label: "Pacific Island or Timor-Leste passport",
        hint: "The child holds a valid passport from an eligible country",
        primary: [{ label: "Orphan Relative visa, for the child", amount: 2030 }],
        child: [{ label: "Each dependant of the child, under 18", amount: 510 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 1,
    notIncluded:
      "Not included: health examinations, police certificates, certified copies and translations, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "Additional applicants would be the child's own dependent children, which is rare for a child under 18. Each orphan relative needs their own application and charge.",
      "There's no charge for the sponsorship (Form 40CH).",
      "Pay before you post the application. The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
