import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { childFinder } from "./child-finder";

// Interactive explainer for the Child visa (subclasses 101 and 802). Every
// figure matches data/visas/family-partner.ts (checked against Home Affairs
// and the Migration Regulations on 12 October 2026). The reader is usually
// the parent who sponsors, so "you" is the sponsoring parent (green) and the
// child, who is the applicant, is teal.

export const childVisa101802Explainer: VisaExplainer = {
  slug: "child-visa-101-802",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for the dependent child of an Australian citizen, permanent resident or eligible New Zealand citizen: the 101 for a child outside Australia, the 802 for a child already here.",
  bigIdeas: [
    { title: "A dependent child", body: "Single and dependent: under 18, or 18 to 24 and studying full time, or unable to work through incapacity.", icon: ICON.faceSmile },
    { title: "You sponsor your child", body: "The parent, or the parent's partner, sponsors the child and supports them for their first two years.", icon: ICON.heart },
    { title: "Permanent from the start", body: "Your child holds a permanent visa from grant, and can later apply for citizenship.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors", value: "The parent, or the parent's partner", icon: ICON.users },
    { label: "Child's age", value: "Under 25 when you apply, unless incapacitated", icon: ICON.cake },
    { label: "Where the child is", value: "101: outside Australia. 802: in Australia", icon: ICON.mapPin },
    { label: "Stay", value: "Permanent, with a five-year travel facility", icon: ICON.home },
    { label: "How you apply", value: "On paper, by post", icon: ICON.envelope },
    { label: "Visa charge", value: "A$4,040 (A$3,315 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "child",
      name: "Your child (the applicant)",
      short: "Child",
      icon: ICON.faceSmile,
      tone: "teal",
      role: "The dependent child who applies for the permanent visa.",
      does: [
        "Is single, and under 18, or 18 to 24 and studying full time, or [[incapacitated|incapacitated for work]]",
        "Is outside Australia (101) or in Australia (802) when applying and at decision",
        "Meets the health requirement, and the character requirement from 16",
        "Has consent from everyone who can decide where they live, if under 18",
      ],
    },
    {
      id: "you",
      name: "You (the sponsoring parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You're the child's parent, or the parent's partner, and you sponsor the child.",
      does: [
        "Are 18 or over and an Australian citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]]",
        "Complete the sponsorship ([[form40ch|Form 40CH]]) to send with your child's application",
        "Provide police checks, with your partner, if your child is under 18",
        "Support your child for their first two years ([[undertaking|support undertaking]])",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Checks the child, the sponsor and the consents, then decides the visa.",
      does: [
        "Approves the sponsorship",
        "Checks consent and the child's best interests",
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
      detail: "You complete the sponsorship ([[form40ch|Form 40CH]]). It's posted together with your child's application.",
    },
    {
      from: "child",
      to: "government",
      label: "Child applies",
      detail: "Your child's application ([[form47ch|Form 47CH]]) is posted with the documents and the payment receipt. It can't be lodged online.",
    },
    {
      from: "government",
      to: "child",
      label: "Visa granted",
      detail: "Home Affairs grants the permanent visa. A 101 child must be outside Australia at grant and enter before the [[first-entry|first entry date]].",
    },
    {
      from: "you",
      to: "child",
      label: "Two years' support",
      detail: "You help with accommodation and money, as needed, for your child's first two years. You can't withdraw the sponsorship after grant.",
    },
  ],
  journeyTitle: "From first check to a permanent visa",
  journeyHighlight: "permanent visa",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your child and the sponsor",
      who: ["you"],
      description: "Confirm your child's age group, that they're single and [[dependent|dependent]], and who will sponsor.",
      points: [
        "Under 25 when you apply, unless [[incapacitated|incapacitated for work]]",
        "From 18: studying full time, not working full time, never married or de facto",
        "A [[step-child|step-child]] needs a parenting order, guardianship or custody",
        "Adopted after you became Australian? The Adoption visa (102) usually applies",
      ],
      youHold: "The right subclass (101 or 802) and an eligible sponsor",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "consent",
      short: "Consent",
      title: "Get consent or court orders",
      who: ["you"],
      description: "Everyone with a legal right to decide where a child under 18 lives must agree, unless a court order or home-country law allows the move.",
      points: ["[[form1229|Form 1229]] or a statutory declaration, with signed photo ID", "Or an Australian court order", "Often the step that takes longest when a parent lives overseas"],
      youHold: "Consent or court documents for the application",
      icon: ICON.pencilSquare,
    },
    {
      id: "documents",
      short: "Documents",
      title: "Gather certified documents",
      who: ["you", "child"],
      description: "A paper application needs certified copies of every document.",
      points: [
        "Your child's identity, relationship and dependency documents",
        "Four certified passport photos",
        "Your status, income and police check documents",
        "[[naati|NAATI translations]] in Australia for documents not in English",
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
        "A$4,040 per child, paid before posting",
        "No online or in-person lodgement",
        "Unpaid, or sent to the wrong address, it's invalid",
        "An 802 child gets a [[bridging|bridging visa]] with the application",
      ],
      youHold: "A valid paper application",
      cost: "A$4,040, paid before posting",
      icon: ICON.envelope,
    },
    {
      id: "track",
      short: "Track",
      title: "Import it into ImmiAccount",
      who: ["you", "government"],
      description: "When the acknowledgement letter arrives, import the application into ImmiAccount to upload documents and check its status.",
      points: [
        "Use the application ID, date of birth and passport number",
        "Health checks and biometrics when asked",
        "Home Affairs may ask for an [[aos|assurance of support]]",
        "Tell Home Affairs about changes: study, work, relationship or travel",
      ],
      youHold: "The application linked to ImmiAccount",
      icon: ICON.computerDesktop,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Decision and entry",
      who: ["government", "child"],
      description: "A 101 child must be outside Australia at grant; an 802 child must be in Australia.",
      points: [
        "101: enter before the [[first-entry|first entry date]], generally 12 months from grant",
        "Permanent from grant, with a five-year [[travel-facility|travel facility]]",
        "Citizenship later: residence counts from entry (101) or grant (802)",
      ],
      youHold: "Your child's permanent visa",
      icon: ICON.checkBadge,
    },
    {
      id: "support",
      short: "Support",
      title: "Your child's first two years",
      who: ["you", "child"],
      description: "You help your child with accommodation and money, as needed, for their first two years in Australia.",
      points: [
        "You can't withdraw the sponsorship after grant",
        "This includes any time in the Adult Migrant English Program",
        "Your child can live, work and study here, and enrol in Medicare",
      ],
      youHold: "A permanent resident child, settling in",
      icon: ICON.lifebuoy,
    },
  ],
  check: {
    ok: {
      title: "Your child looks on track",
      body: "Nothing in your answers rules your child out. Next comes the detail: consent, your child's documents and your checks as the sponsor.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on your child's full circumstances and best interests.",
  },
  quiz: [
    {
      id: "parent",
      topic: "Your status",
      question: "Are you an Australian citizen, permanent resident or eligible New Zealand citizen?",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "You can sponsor your child if you're 18 or over. Your partner can sponsor instead if they live with you and meet the same rules.",
        },
        {
          value: "partner-visa",
          label: "I hold a temporary Partner visa (309 or 820)",
          status: "todo",
          note: "The Dependent Child visa (445) is usually the route until your permanent Partner visa is decided.",
          link: { label: "Dependent Child visa (445)", href: "/visas/family/dependent-child-visa-445" },
        },
        {
          value: "no",
          label: "No, I hold a temporary visa",
          status: "stop",
          note: "Your child's parent must be an Australian citizen, permanent resident or eligible New Zealand citizen.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "relationship",
      topic: "Relationship",
      question: "How is the child related to you?",
      options: [
        { value: "biological", label: "My biological child", status: "ok", note: "A birth certificate or an officially issued family book can show the relationship." },
        {
          value: "step",
          label: "My step-child",
          status: "todo",
          note: "A [[step-child|step-child]] qualifies only if they're under 18, the child of your former partner, and you hold a parenting order, guardianship or custody.",
        },
        {
          value: "adopted-before",
          label: "Adopted before I became Australian",
          hint: "Before you became a citizen, permanent resident or eligible New Zealand citizen",
          status: "ok",
          note: "The 101 can fit. For the 802, the adoption must also meet that visa's rules, such as being completed before your child turned 18.",
        },
        {
          value: "adopted-after",
          label: "Adopted, or being adopted, after I became Australian",
          status: "todo",
          note: "For a child outside Australia, the Adoption visa (102) applies instead. An 802 is possible only if the adoption meets that visa's rules, such as a Hague Convention adoption.",
          link: { label: "Adoption visa (102)", href: "/visas/family/adoption-visa-102" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age and study",
      question: "Which describes your child?",
      options: [
        { value: "under18", label: "Under 18 and single", status: "ok", note: "Your child must be single (not engaged, married or de facto) and dependent on you." },
        {
          value: "student",
          label: "18 to 24, single, and studying full time",
          status: "ok",
          note: "They must not work full time, and must have studied full time since turning 18 or within six months of finishing year 12. Gaps over six months must be explained.",
        },
        {
          value: "incapacitated",
          label: "18 or over, and unable to work because of incapacity",
          status: "ok",
          note: "The under-25 limit doesn't apply if your child is [[incapacitated|incapacitated for work]]. A medical practitioner's report must show it.",
        },
        {
          value: "none",
          label: "25 or over, working full time, or in a relationship",
          status: "stop",
          note: "Your child must be under 25 when you apply (unless incapacitated), single, and from 18 a full-time student who isn't working full time.",
        },
      ],
    },
    {
      id: "consent",
      topic: "Consent",
      question: "If your child is under 18, does everyone with a legal right to decide where they live agree to the move?",
      options: [
        { value: "yes", label: "Yes, they'll sign Form 1229", status: "ok", note: "Attach their signed photo ID too. A statutory declaration also works." },
        { value: "court", label: "We have an Australian court order", status: "ok", note: "A grant consistent with an Australian child order meets this rule." },
        { value: "adult", label: "Not needed: my child is 18 or over", status: "ok", note: "This consent rule applies to children under 18." },
        {
          value: "no",
          label: "Someone won't agree, or can't be reached",
          status: "stop",
          note: "Without consent, a court order, or home-country law allowing the move, the visa can't be granted.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "where",
      topic: "Where your child is",
      question: "Where is your child now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "The 101 fits. Your child must stay outside Australia until it's granted." },
        {
          value: "inside",
          label: "In Australia, on a visa without condition 8503",
          status: "ok",
          note: "The 802 fits. Your child must be in Australia when you apply and when it's decided, and gets a [[bridging|bridging visa]] with the application.",
        },
        {
          value: "c8503",
          label: "In Australia, and their visa has condition 8503",
          status: "stop",
          note: "The 802 can't be lodged until the [[c8503|no further stay condition]] is waived.",
          link: { label: "Condition 8503 waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "police",
      topic: "Police checks",
      question: "Can you and your partner provide clear police checks?",
      help: "Needed if your child will be under 18 when the sponsorship is decided.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "You'll each provide an AFP certificate ([[code33|code 33]]) and overseas certificates for countries you lived in for 12 months or more in the last 10 years.",
        },
        {
          value: "offence",
          label: "One of us has a charge or conviction for an offence against a child",
          status: "stop",
          note: "A charge for a [[registrable|registrable offence]] means the sponsorship must be refused unless it was dismissed. A conviction means refusal, with only narrow exceptions.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health",
      question: "Does your child have a significant health condition?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Your child will still have health examinations when Home Affairs asks." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "It doesn't automatically rule your child out: a health waiver is available for this visa. Get advice early.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Brothers and sisters can go on one application.",
      fact: "No. Each child applies separately. A child's own dependent children can be included, but a partner can't, because the child must be single.",
    },
    {
      myth: "If my child turns 18 during processing, they're no longer eligible.",
      fact: "Turning 18 (or 25) after you apply doesn't defeat the application. But a child aged 18 or over must still be a full-time student when the visa is decided.",
    },
    {
      myth: "I can lodge the Child visa online.",
      fact: "No. It's a paper application: pay first, then post it. After the acknowledgement letter arrives, you can import it into ImmiAccount to upload documents.",
    },
    {
      myth: "The other parent doesn't need to agree if my child lives with me.",
      fact: "If your child is under 18, everyone who can legally decide where they live must consent. The exceptions are an Australian court order, or home-country law that allows the move.",
    },
    {
      myth: "I don't need a police check to sponsor my own child.",
      fact: "You do, if your child will be under 18 when the sponsorship is decided. You and your partner each provide an AFP certificate (code 33) and overseas certificates.",
    },
    {
      myth: "Once the visa is granted, my role as sponsor is over.",
      fact: "You help your child with accommodation and money, as needed, for their first two years in Australia, and you can't withdraw the sponsorship after grant.",
    },
    {
      myth: "A child born overseas to an Australian always needs this visa.",
      fact: "Not always. A child born outside Australia to an Australian citizen parent may be able to apply for citizenship by descent instead of a visa.",
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
            "Be 18 or over and an Australian citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]]",
            "Complete [[form40ch|Form 40CH]] and send it with your child's [[form47ch|Form 47CH]]",
            "Show your status, your relationship to your child and your income",
          ],
        },
        {
          title: "Checks",
          items: [
            "If your child is under 18: AFP ([[code33|code 33]]) and overseas police certificates for you and your partner",
            "A statement about any child support or earlier assurances of support",
          ],
        },
        {
          title: "After grant",
          items: [
            "Help with accommodation and money, as needed, for two years",
            "You can't withdraw the sponsorship after grant",
            "Tell Home Affairs about changes, such as a new passport or name",
          ],
        },
      ],
    },
    {
      id: "child",
      label: "My child's application",
      tone: "teal",
      intro: "Your child is the applicant. These are the parts that sit with their application.",
      groups: [
        {
          title: "Eligibility",
          items: ["Under 25 when you apply, unless incapacitated", "Single, and dependent on you", "From 18: full-time study, and not full-time work"],
        },
        {
          title: "Documents",
          items: [
            "Passport pages, birth certificate and four certified photos",
            "[[form1229|Form 1229]] consents, or a court order, if under 18",
            "Police certificates and Form 80 if 16 or over",
            "Health examinations when Home Affairs asks",
          ],
        },
        {
          title: "Where to be",
          items: [
            "101: outside Australia when you apply and at grant",
            "802: in Australia when you apply and at decision",
            "Tell Home Affairs about any travel outside Australia during an 802 application",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "dependent",
      term: "Dependent child",
      definition: "A single child or step-child (not engaged, married or de facto). They're under 18, or older and dependent on the parent, or incapacitated for work.",
    },
    {
      id: "step-child",
      term: "Step-child",
      definition: "For this visa: your former partner's child, under 18, where you hold an Australian parenting order, or guardianship or custody under Australian or foreign law.",
    },
    { id: "incapacitated", term: "Incapacitated for work", definition: "Unable to work because of a total or partial loss of bodily or mental function, shown in a medical practitioner's report." },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A New Zealand citizen who is a protected Special Category visa holder. They can sponsor in the same way as an Australian citizen or permanent resident.",
    },
    { id: "form40ch", term: "Form 40CH", definition: "Sponsorship for a child to migrate to Australia. The sponsor completes it, and it's posted with the child's application." },
    { id: "form47ch", term: "Form 47CH", definition: "The child's own application form for the Child visa." },
    {
      id: "form1229",
      term: "Form 1229",
      definition: "Consent to grant an Australian visa to a child under 18, signed by a person with a legal right to decide where the child lives. A statutory declaration also works.",
    },
    { id: "first-entry", term: "First entry date", definition: "The date in the grant letter by which a 101 child must first enter Australia, generally 12 months from grant." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long your child can leave and re-enter Australia on the visa: five years from grant. After that, a Resident Return visa, or an Australian passport once a citizen.",
    },
    { id: "bridging", term: "Bridging visa", definition: "A temporary visa granted with an 802 application, so your child stays lawful if their current visa ends while they wait." },
    { id: "c8503", term: "Condition 8503", definition: "A 'no further stay' condition on some visas. While it applies, your child can't apply for the 802 unless it's waived first." },
    { id: "registrable", term: "Registrable offence", definition: "An offence against a child, of a sexual or violent nature, that would require registration on a child offender register." },
    { id: "code33", term: "AFP code 33", definition: "The Immigration/Citizenship purpose code to use when applying for an Australian Federal Police National Police Certificate." },
    {
      id: "undertaking",
      term: "Support undertaking",
      definition: "The sponsor's promise to help the child, and any dependent child granted with them, with accommodation and money as needed for the first two years.",
    },
    { id: "aos", term: "Assurance of support", definition: "A formal financial commitment Home Affairs may ask for. If asked, Services Australia must accept it before the visa is granted." },
    {
      id: "naati",
      term: "NAATI translation",
      definition: "A translation by a NAATI-accredited translator. In Australia, documents not in English need one; overseas, a translation with the translator's details is accepted.",
    },
    {
      id: "descent",
      term: "Citizenship by descent",
      definition: "Australian citizenship for a child born overseas to an Australian citizen parent. A child who can get it may not need a visa at all.",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the application and sponsorship with your family.",
  },
  verifiedExtras: [
    {
      fact: "A dependent child of a parent who holds a Partner visa (subclass 309 or 820) can apply for a Dependent Child visa (subclass 445) while the parent's permanent Partner visa is decided.",
      source: "/visas/family/dependent-child-visa-445",
    },
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
        label: "Standard charge (101 or 802)",
        hint: "Most applications",
        primary: [{ label: "Child visa, for your child", amount: 4040 }],
        adult: [{ label: "Each dependant of your child, 18 or over", amount: 2020 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 1015 }],
      },
      {
        id: "pacific",
        label: "Pacific Island or Timor-Leste passport",
        hint: "Your child holds a valid passport from an eligible country",
        primary: [{ label: "Child visa, for your child", amount: 3315 }],
        adult: [{ label: "Each dependant of your child, 18 or over", amount: 1655 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 830 }],
      },
      {
        id: "welfare",
        label: "802 supported by a state or territory welfare authority",
        hint: "With a letter of support from the authority",
        primary: [{ label: "Child visa (802), welfare authority supported", amount: 0 }],
      },
    ],
    maxAdults: 1,
    maxChildren: 2,
    notIncluded:
      "Not included: health examinations, police certificates, certified copies and translations, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "Additional applicants are your child's own dependent children, if any. Brothers and sisters each need their own application and charge.",
      "There's no charge for the sponsorship (Form 40CH).",
      "Pay before you post the application. The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
