import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { childFinder } from "./child-finder";

// Interactive explainer for the Dependent Child visa (subclass 445). Every
// figure matches data/visas/family-partner.ts (checked against Home Affairs
// and the Migration Regulations on 12 October 2026). The reader is usually
// the parent who holds the 309 or 820, so "you" is that parent (green), the
// Partner visa sponsor is pink and the child, who is the applicant, is teal.

export const dependentChildVisa445Explainer: VisaExplainer = {
  slug: "dependent-child-visa-445",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A temporary visa for the dependent child of a parent holding a Partner visa (309 or 820), so the child can join them, then be added to the parent's permanent 100 or 801 application.",
  bigIdeas: [
    { title: "For a Partner visa holder's child", body: "You hold a 309 or 820 (or a 445), and your permanent Partner visa hasn't been decided yet.", icon: ICON.heart },
    { title: "Your sponsor sponsors your child", body: "The person who sponsored your Partner visa sponsors your child too, and supports them for two years.", icon: ICON.users },
    { title: "Then join your permanent visa", body: "After the 445 is granted, Form 1002 adds your child to your 100 or 801 application, at no extra charge.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors", value: "The person who sponsored your Partner visa", icon: ICON.users },
    { label: "How long", value: "Until your 100 or 801 is decided", icon: ICON.clock },
    { label: "Where your child is", value: "In or outside Australia", icon: ICON.mapPin },
    { label: "Work and study", value: "Full work and study rights", icon: ICON.briefcase },
    { label: "Next step", value: "Form 1002 to join your permanent application", icon: ICON.home },
    { label: "Visa charge", value: "A$4,040 (A$3,315 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "child",
      name: "Your child (the applicant)",
      short: "Child",
      icon: ICON.faceSmile,
      tone: "teal",
      role: "Your dependent child, who applies for the 445 and then joins your permanent application.",
      does: [
        "Is single, and under 18, or 18 or over and [[dependent|dependent]] on you, or incapacitated for work",
        "Can be in or outside Australia when applying and at grant",
        "Meets the health requirement, and the character requirement from 16",
        "Joins your 100 or 801 application with [[form1002|Form 1002]]",
      ],
    },
    {
      id: "sponsor",
      name: "Your sponsor (usually your partner)",
      short: "Sponsor",
      icon: ICON.heart,
      tone: "pink",
      role: "The person who sponsored your Partner visa sponsors your child too.",
      does: [
        "Completes [[form918|Form 918]] together with your child",
        "Provides police checks (as does their partner) if your child is under 18",
        "Supports your child for two years ([[undertaking|support undertaking]])",
        "Can't withdraw the sponsorship after grant",
      ],
    },
    {
      id: "you",
      name: "You (the parent on a Partner visa)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You're the [[visa-holding-parent|visa-holding parent]]: you hold a 309, 820 or 445, and your permanent Partner visa is still to be decided.",
      does: [
        "Keep holding your 309, 820 or 445 until the 445 is decided",
        "Gather consent and dependency documents for your child",
        "Make sure Form 1002 is lodged before your 100 or 801 is decided",
        "Sponsor your child yourself if the [[provisions|death, family violence or child provisions]] apply",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides the 445, then considers your child with your permanent application.",
      does: [
        "Approves the sponsorship",
        "Checks consent and your child's best interests",
        "Asks for health checks, biometrics or more information",
        "Can grant your child the 100 or 801 when you're granted it",
      ],
    },
  ],
  flows: [
    {
      from: "sponsor",
      to: "government",
      label: "Sponsors your child",
      detail: "Your sponsor completes [[form918|Form 918]] with your child, and provides police checks if your child is under 18.",
    },
    {
      from: "child",
      to: "government",
      label: "Child applies",
      detail: "Form 918 is posted with the payment receipt and documents. Your child can be in or outside Australia.",
    },
    {
      from: "government",
      to: "child",
      label: "445 granted",
      detail: "Home Affairs grants the 445. A child outside Australia enters before the [[first-entry|first entry date]].",
    },
    {
      from: "child",
      to: "you",
      label: "Joins your application",
      detail: "[[form1002|Form 1002]] adds your child to your 100 or 801 application before it's decided, at no extra charge.",
    },
    {
      from: "government",
      to: "child",
      label: "PR with you",
      detail: "When you're granted the 100 or 801, your child can be granted it too, if they meet the health and character requirements.",
    },
  ],
  journeyTitle: "From the 445 to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "check",
      short: "Check",
      title: "Check your child and the sponsor",
      who: ["you", "sponsor"],
      description: "Confirm you still hold your 309, 820 or 445, and that your permanent Partner visa isn't decided yet.",
      points: [
        "Your child is single, and under 18 or [[dependent|dependent]] or incapacitated",
        "Your Partner visa sponsor will sponsor your child",
        "309 or 820 not granted yet? Add your child to that application instead",
      ],
      youHold: "Eligibility confirmed and the sponsor identified",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "documents",
      short: "Documents",
      title: "Gather consent and documents",
      who: ["you", "sponsor"],
      description: "A paper application needs certified copies, with translations where needed.",
      points: [
        "[[form1229|Form 1229]] consents, or a court order, for a child under 18",
        "Evidence of financial dependence for a child 18 or over",
        "Your sponsor's identity, status and police check documents",
      ],
      youHold: "A complete set of certified copies",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Pay first, then post Form 918",
      who: ["sponsor", "child"],
      description: "Pay the charge, then post [[form918|Form 918]], the receipt and all documents to the Child and Other Family Processing Centre.",
      points: [
        "A$4,040, or A$3,315 with an eligible Pacific or Timor-Leste passport",
        "No online or in-person lodgement",
        "A child in Australia gets a [[bridging|bridging visa]]",
      ],
      youHold: "A valid 445 application",
      cost: "A$4,040, paid before posting",
      icon: ICON.envelope,
    },
    {
      id: "track",
      short: "Track",
      title: "Import into ImmiAccount and complete checks",
      who: ["you", "government"],
      description: "After the acknowledgement letter, import the application into ImmiAccount to upload documents and check its status.",
      points: ["Health examinations and biometrics when asked", "Tell Home Affairs about changes for your child or the sponsor"],
      youHold: "Health and character clearances on file",
      icon: ICON.computerDesktop,
    },
    {
      id: "grant",
      short: "445",
      title: "The 445 is granted",
      who: ["government", "child"],
      description: "Your child can be in or outside Australia at grant.",
      points: [
        "Outside Australia? Enter before the [[first-entry|first entry date]], generally 12 months from grant",
        "Live, work and study, and travel in and out while it's valid",
        "It can't be extended on its own",
      ],
      youHold: "Your child's subclass 445 visa",
      icon: ICON.checkBadge,
    },
    {
      id: "join",
      short: "Join",
      title: "Join your permanent application",
      who: ["you", "child"],
      description: "Before your 100 or 801 is decided, lodge [[form1002|Form 1002]] to add your child to it.",
      points: [
        "No charge",
        "In Australia to join an 801; in or outside Australia for a 100",
        "Your child can enrol in Medicare once it's lodged",
        "Your child can then be granted the permanent visa with you",
      ],
      youHold: "Your child on your permanent Partner visa application",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "Your child looks on track",
      body: "Nothing in your answers rules your child out. Next comes the detail: consent, your child's documents and your sponsor's checks.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on your child's full circumstances and best interests.",
  },
  quiz: [
    {
      id: "stage",
      topic: "Your Partner visa",
      question: "Where is your own Partner visa up to?",
      options: [
        { value: "granted", label: "My 309 or 820 is granted; the 100 or 801 isn't decided yet", status: "ok", note: "That's when the 445 is the route for your child." },
        {
          value: "pending",
          label: "My 309 or 820 isn't decided yet",
          status: "todo",
          note: "You can add your child directly to that application before it's decided, so a 445 isn't needed yet.",
        },
        {
          value: "permanent",
          label: "My 100 or 801 has been granted",
          status: "stop",
          note: "The 445 is only open while you hold a 309, 820 or 445. As a permanent resident, you may be able to sponsor your child for a Child visa (101 or 802).",
          link: { label: "Child visa (101 and 802)", href: "/visas/family/child-visa-101-802" },
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Will the person who sponsored your Partner visa sponsor your child?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Your sponsor completes Form 918 together with your child." },
        {
          value: "provisions",
          label: "My sponsor died, or we separated and I've asked to use the family violence or child provisions",
          status: "ok",
          note: "Then you can sponsor your child yourself, under the [[provisions|death, family violence or child provisions]].",
        },
        {
          value: "no",
          label: "They won't sponsor my child",
          status: "stop",
          note: "Your child's 445 depends on your sponsor sponsoring them, unless the death, family violence or child provisions apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "child",
      topic: "Your child",
      question: "Which describes your child?",
      options: [
        { value: "under18", label: "Under 18 and single", status: "ok", note: "Your child must not be engaged, married or in a de facto relationship." },
        {
          value: "dependent",
          label: "18 or over, single and financially dependent on me",
          status: "ok",
          note: "Show the dependence with bank statements, money transfers or rent receipts, and how long it has lasted.",
        },
        { value: "incapacitated", label: "18 or over, and unable to work because of incapacity", status: "ok", note: "A medical practitioner's report must show it." },
        { value: "partner", label: "Married, engaged or in a de facto relationship", status: "stop", note: "A dependent child must be single, so the 445 doesn't fit." },
      ],
    },
    {
      id: "consent",
      topic: "Consent",
      question: "If your child is under 18, does everyone with a legal right to decide where they live agree?",
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
        { value: "outside", label: "Outside Australia", status: "ok", note: "Your child can apply from outside Australia. To join an 801 later, they'll need to be in Australia." },
        {
          value: "inside",
          label: "In Australia, on a visa without condition 8503",
          status: "ok",
          note: "Your child can apply in Australia and gets a [[bridging|bridging visa]] with the application.",
        },
        {
          value: "c8503",
          label: "In Australia, and their visa has condition 8503",
          status: "stop",
          note: "Your child can't apply in Australia until the [[c8503|no further stay condition]] is waived.",
          link: { label: "Condition 8503 waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "police",
      topic: "Police checks",
      question: "Can your sponsor and their partner provide clear police checks?",
      help: "Needed if your child will be under 18 when the sponsorship is decided.",
      options: [
        {
          value: "yes",
          label: "Yes",
          status: "ok",
          note: "They'll each provide an AFP certificate ([[code33|code 33]]) if they've lived in Australia since turning 16. They'll also provide overseas certificates for countries they lived in for 12 months or more in the last 10 years.",
        },
        {
          value: "offence",
          label: "One of them has a charge or conviction for an offence against a child",
          status: "stop",
          note: "A pending charge for a [[registrable|registrable child sex offence]] means the sponsorship must be refused. A conviction means refusal unless quashed, with narrow exceptions.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "form1002",
      topic: "Form 1002",
      question: "Do you know your child must join your permanent application with Form 1002?",
      options: [
        { value: "yes", label: "Yes, we'll lodge it once the 445 is granted", status: "ok", note: "Lodge it before your 100 or 801 is decided. There's no charge." },
        {
          value: "no",
          label: "No, this is new to me",
          status: "todo",
          note: "Without it, your child has no path to the permanent visa. Lodge [[form1002|Form 1002]] before your 100 or 801 is decided.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can add my child to my Partner visa at any time.",
      fact: "Only before the 309 or 820 is decided. After that, your child needs a 445 first, then Form 1002 to join your permanent 100 or 801 application.",
    },
    { myth: "Joining my permanent application costs another charge.", fact: "No. Adding a 445 holder to your 100 or 801 application with Form 1002 has no charge." },
    {
      myth: "My child gets Medicare as soon as the 445 is granted.",
      fact: "Not on the 445 alone. Home Affairs says your child can enrol in Medicare once Form 1002 has been lodged.",
    },
    {
      myth: "The 445 is a permanent visa.",
      fact: "No. It's temporary and lasts until your permanent Partner visa is decided. Your child becomes a permanent resident when granted the 100 or 801 with you.",
    },
    {
      myth: "If my relationship ends, my child's 445 is lost.",
      fact: "Not necessarily. If your sponsor has died, or you've asked to be considered under the family violence or child provisions, you can sponsor your child yourself.",
    },
    { myth: "Brothers and sisters can share one application.", fact: "No. Each child lodges a separate 445 application." },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the parent",
      tone: "green",
      intro: "Your part is keeping your own Partner visa on track, your child's documents, and Form 1002.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check you still hold your 309, 820 or 445, with the 100 or 801 undecided",
            "Get [[form1229|Form 1229]] consents, or a court order, for a child under 18",
            "For a child 18 or over, gather evidence of financial dependence",
          ],
        },
        {
          title: "Lodging",
          items: [
            "Pay A$4,040 before posting [[form918|Form 918]]",
            "Post it to the Child and Other Family Processing Centre",
            "Import the application into ImmiAccount when the acknowledgement arrives",
          ],
        },
        {
          title: "After the 445",
          items: [
            "Lodge [[form1002|Form 1002]] before your 100 or 801 is decided",
            "To join an 801, your child must be in Australia",
            "Tell Home Affairs about changes, such as a new passport",
          ],
        },
      ],
    },
    {
      id: "sponsor",
      label: "I'm the sponsor",
      tone: "pink",
      intro: "You sponsored the Partner visa, so you sponsor the child too: Form 918, police checks and two years of support.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Complete [[form918|Form 918]] together with the child",
            "Show your identity and your citizenship, permanent residence or eligible New Zealand citizen status",
            "If the child is under 18: AFP ([[code33|code 33]]) and overseas police certificates for you and your partner",
          ],
        },
        {
          title: "After grant",
          items: ["Help the child with accommodation and money, as needed, for two years", "You can't withdraw the sponsorship after grant"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "dependent",
      term: "Dependent child",
      definition: "A single child or step-child (not engaged, married or de facto). They're under 18, or older and relying on the parent for food, clothing and shelter, or incapacitated for work.",
    },
    { id: "visa-holding-parent", term: "Visa-holding parent", definition: "The parent who holds the 309, 820 or 445. They must still hold it when the 445 is decided." },
    { id: "form918", term: "Form 918", definition: "The application for a subclass 445 visa by a dependent child. The child and the sponsor complete it together." },
    {
      id: "form1002",
      term: "Form 1002",
      definition: "The form that adds a 445 holder to the parent's 100 or 801 application. Lodge it before that application is decided. There's no charge.",
    },
    {
      id: "form1229",
      term: "Form 1229",
      definition: "Consent to grant an Australian visa to a child under 18, signed by a person with a legal right to decide where the child lives. A statutory declaration also works.",
    },
    {
      id: "provisions",
      term: "Family violence and child provisions",
      definition: "Parts of the 100 and 801 rules that can still apply if your relationship with the sponsor ends, for example because of family violence. If you've asked to rely on them, or your sponsor has died, you sponsor your child's 445 yourself.",
    },
    { id: "first-entry", term: "First entry date", definition: "The date in the grant letter by which a child outside Australia must first enter, generally 12 months from grant." },
    { id: "bridging", term: "Bridging visa", definition: "Granted with an application made in Australia. It takes effect if your child's current visa expires before the decision." },
    { id: "c8503", term: "Condition 8503", definition: "A 'no further stay' condition on some visas. While it applies, your child can't apply in Australia unless it's waived first." },
    { id: "registrable", term: "Registrable child sex offence", definition: "An offence against a child that would require registration on a child offender register." },
    { id: "code33", term: "AFP code 33", definition: "The Immigration/Citizenship purpose code to use when applying for an Australian Federal Police National Police Certificate." },
    { id: "undertaking", term: "Support undertaking", definition: "The sponsor's promise to help the child with accommodation and money, as needed, for their first two years." },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare your child's application and the sponsorship with your family.",
  },
  finder: childFinder,
  fees: {
    variantLabel: "Which charge applies?",
    variants: [
      {
        id: "standard",
        label: "Standard charge",
        hint: "Most applications",
        primary: [{ label: "Dependent Child visa, for your child", amount: 4040 }],
        adult: [{ label: "Each dependant of your child, 18 or over", amount: 2020 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 1015 }],
      },
      {
        id: "pacific",
        label: "Pacific Island or Timor-Leste passport",
        hint: "Your child holds a valid passport from an eligible country",
        primary: [{ label: "Dependent Child visa, for your child", amount: 3315 }],
        adult: [{ label: "Each dependant of your child, 18 or over", amount: 1655 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 830 }],
      },
    ],
    maxAdults: 1,
    maxChildren: 2,
    notIncluded:
      "Not included: health examinations, police certificates, certified copies and translations, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "Additional applicants are your child's own dependent children, if any. Brothers and sisters each need their own application and charge.",
      "Adding your child to your 100 or 801 application with Form 1002 has no charge, and there's no sponsorship charge.",
      "Pay before you post Form 918. The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
