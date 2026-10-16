import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { employerFinder } from "./employer-finder";

// Interactive explainer for the Training visa (subclass 407). Every figure
// matches data/visas/employer-sponsored.ts (checked against Home Affairs and
// the Migration Regulations on 12 October 2026).

export const training407Explainer: VisaExplainer = {
  slug: "training-visa-407",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A visa for workplace-based training or professional development in Australia for up to 2 years. An approved sponsor runs the program and usually nominates you first.",
  bigIdeas: [
    {
      title: "An approved sponsor trains you",
      body: "A temporary activities sponsor runs your program and, unless it's a Commonwealth agency, nominates you before you apply.",
      icon: ICON.academicCap,
    },
    {
      title: "Training, not a job",
      body: "It isn't for filling workforce shortages. Any work is part of the program and must be paid at least the minimum wage.",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      title: "Up to 2 years",
      body: "As long as the program needs, up to 2 years. It can't be extended and doesn't lead directly to permanent residence.",
      icon: ICON.clock,
    },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "An approved temporary activities sponsor", icon: ICON.buildingOffice2 },
    { label: "How long", value: "Up to 2 years, set by the program", icon: ICON.clock },
    { label: "Your work", value: "Only the nominated training (condition 8102)", icon: ICON.briefcase },
    { label: "English", value: "Functional, such as IELTS average 4.5", icon: ICON.chatBubbleLeftRight },
    { label: "Family", value: "Can come; may work up to 40 hours a fortnight", icon: ICON.users },
    { label: "Visa charge", value: "From A$535", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "sponsor",
      name: "Your training organisation (the sponsor)",
      short: "Sponsor",
      icon: ICON.buildingOffice2,
      tone: "pink",
      role: "Runs your training program and sponsors you for it.",
      does: [
        "Becomes a [[tas|temporary activities sponsor]] (A$420, approved for 5 years)",
        "Nominates you for one of three [[training-types|training types]] (A$170)",
        "Provides genuine, structured training, not a job vacancy",
        "Pays at least the minimum wage for any work",
      ],
    },
    {
      id: "you",
      name: "You (the trainee)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Apply once the nomination is approved, then do only the nominated training.",
      does: [
        "Show [[functional-english|Functional English]] and funds to support yourself",
        "Hold health insurance for your whole stay",
        "Lodge the application and pay from A$535",
        "Do only the nominated training ([[c8102|condition 8102]])",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Approves the sponsor and the nomination, then decides your visa.",
      does: [
        "Approves the sponsorship and the [[nomination]]",
        "Checks the training is genuine and doesn't displace Australians",
        "Assesses your English, funds, health and character",
        "Grants the visa for the length of the program",
      ],
    },
  ],
  flows: [
    {
      from: "sponsor",
      to: "government",
      label: "Sponsors + nominates",
      detail: "The organisation becomes a [[tas|temporary activities sponsor]] and nominates you for one of three [[training-types|training types]], with a training plan.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "Once the nomination is approved, you apply with your English, funds, health insurance and police evidence.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs grants the visa for the length of your program, up to 2 years.",
    },
    {
      from: "you",
      to: "sponsor",
      label: "You train",
      detail: "You do only the nominated training ([[c8102|condition 8102]]). Any work must be paid at least the minimum wage.",
    },
  ],
  journeyTitle: "From training offer to finished program",
  journeyHighlight: "finished program",
  stages: [
    {
      id: "sponsor",
      short: "Sponsor",
      title: "The organisation becomes a sponsor",
      who: ["sponsor"],
      description: "Your training organisation applies to become a [[tas|temporary activities sponsor]].",
      points: [
        "A$420, approved for five years",
        "It also covers 408 and 403 PALM sponsorship",
        "Open to lawfully operating organisations, government and foreign government agencies, and religious institutions",
      ],
      youHold: "A sponsor with an approved temporary activities sponsorship",
      cost: "A$420, paid by the sponsor",
      icon: ICON.buildingOffice2,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The sponsor nominates you",
      who: ["sponsor"],
      description: "The [[nomination]] describes you, the type of training and how and where it will happen.",
      points: [
        "One of three [[training-types|training types]]",
        "A training plan with the structure, supervision and outcomes",
        "A$170, or no nomination for a Commonwealth agency",
        "It must be approved before you apply",
      ],
      youHold: "An approved nomination",
      cost: "A$170, paid by the sponsor",
      icon: ICON.documentText,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "You gather your evidence",
      who: ["you"],
      description: "Get your own documents ready while the sponsor handles its part.",
      points: [
        "[[functional-english|Functional English]], such as IELTS average 4.5 within 12 months",
        "Funds to support yourself and any family coming with you",
        "Adequate health insurance for your whole stay",
        "Police certificates where required",
      ],
      youHold: "A complete evidence bundle",
      cost: "Tests and insurance, paid by you",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "apply",
      short: "Apply",
      title: "You apply in or outside Australia",
      who: ["you", "government"],
      description: "Apply online once the nomination is approved.",
      points: [
        "A$535 for you, A$535 per adult and A$135 per child",
        "In Australia you need a substantive temporary visa, or must apply within 28 days of it ending",
        "The A$700 [[stac|subsequent temporary application charge]] may apply in Australia",
      ],
      youHold: "A lodged application, and a bridging visa if you're in Australia",
      cost: "From A$535, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "train",
      short: "Train",
      title: "You do the training",
      who: ["you", "sponsor"],
      description: "Do only the nominated training ([[c8102|condition 8102]]) for the length of the program, up to 2 years.",
      points: [
        "Any work must be paid at least the minimum wage",
        "Tell Home Affairs if your sponsor ends the training",
        "A new sponsor must nominate you; a changed program needs a new visa",
      ],
      youHold: "A subclass 407 visa for the length of your program",
      icon: ICON.academicCap,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is checking the details: the nomination, the training plan and your evidence.",
    },
    disclaimer: "A general self-check, not advice or a prediction. The sponsor's nomination and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Has an Australian organisation offered you a training program?",
      options: [
        {
          value: "approved",
          label: "Yes, and it's an approved temporary activities sponsor",
          status: "ok",
          note: "One step done. It still needs an approved nomination for you before you apply.",
        },
        {
          value: "willing",
          label: "Yes, but it isn't a sponsor yet",
          status: "todo",
          note: "It applies to be a [[tas|temporary activities sponsor]] (A$420, approved for 5 years), then nominates you (A$170).",
        },
        {
          value: "commonwealth",
          label: "Yes, a Commonwealth Government agency",
          status: "ok",
          note: "A Commonwealth agency sponsor doesn't need to nominate you.",
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "There's no 407 without a sponsor's training program.",
          link: { label: "Find a visa that fits", href: "#finder" },
        },
      ],
    },
    {
      id: "type",
      topic: "Training type",
      question: "Which best describes the training?",
      options: [
        {
          value: "licence",
          label: "Training I need for registration or a licence, in Australia or my home country",
          status: "ok",
          note: "Training type 1: it must be needed for registration, membership or a licence that's mandatory for your occupation.",
        },
        {
          value: "structured",
          label: "A structured program in an eligible occupation, with 12 months' recent experience or study in it",
          status: "ok",
          note: "Training type 2: the 12 months must fall in the 24 months before the nomination, and the occupation must be on the eligible list.",
        },
        {
          value: "capacity",
          label: "Practical training for overseas studies, government-supported training, or professional development",
          status: "ok",
          note: "Training type 3: capacity building overseas. Practical training for a student enrolled overseas is up to 6 months.",
        },
        {
          value: "job",
          label: "Mostly ordinary work in a job",
          status: "stop",
          note: "The 407 can't be used to fill a vacancy. If it's a real job, the employer may be able to sponsor you on a Skills in Demand visa (subclass 482). That needs at least 1 year of relevant experience.",
          link: { label: "Skills in Demand visa (482)", href: "/visas/employer-sponsored/skills-in-demand-visa-482" },
        },
      ],
    },
    {
      id: "english",
      topic: "Age and English",
      question: "Are you 18 or over, with Functional English?",
      options: [
        { value: "yes", label: "Yes to both", status: "ok", note: "Meets the age and English requirements." },
        {
          value: "notyet",
          label: "I'm 18 or over, but haven't shown Functional English yet",
          status: "todo",
          note: "Use an exempt passport or 2 years of full-time study taught in English. Or take a test, such as IELTS average 4.5, in the 12 months before you apply.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
        { value: "under", label: "I'm under 18", status: "stop", note: "You must usually be 18 or over when the visa is decided." },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from overseas." },
        {
          value: "onshore",
          label: "In Australia, holding a substantive temporary visa",
          status: "ok",
          note: "You can apply in Australia. The A$700 [[stac|subsequent temporary application charge]] may apply.",
        },
        {
          value: "ended",
          label: "In Australia, and my last visa ended recently",
          status: "todo",
          note: "You must apply within 28 days of your last substantive visa ending.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "excluded",
          label: "In Australia on a 403 Domestic Worker, 771 Transit or Special Purpose visa",
          status: "stop",
          note: "These visas can't be used to apply for a 407 in Australia.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "funds",
      topic: "Funds",
      question: "Can you support yourself, and any family coming with you?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep bank statements, scholarship or employer letters ready." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "You need evidence of enough money for you and everyone coming with you." },
      ],
    },
    {
      id: "insurance",
      topic: "Health insurance",
      question: "Will you hold health insurance for your whole stay?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keeping it is [[c8501|condition 8501]] on your visa." },
        { value: "notyet", label: "Not arranged yet", status: "todo", note: "Arrange adequate cover before you apply, and keep it for your whole stay." },
      ],
    },
    {
      id: "history",
      topic: "Time on temporary visas",
      question: "Have you spent several years on temporary visas in Australia?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing extra to explain." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "This can raise [[gte|genuine temporary entrant]] concerns. Be ready to explain your plans after the training.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The 407 is a way to fill a job vacancy.",
      fact: "No. The training must be genuine, structured and tailored to you. The sponsor can't use it to fill a workforce shortage or to displace Australian workers.",
    },
    {
      myth: "Trainees can work for free.",
      fact: "No. All work on the 407 must be paid at least the minimum wage, and it's illegal for a sponsor to exploit trainees, including unpaid trainees.",
    },
    {
      myth: "I can extend my 407.",
      fact: "No. A new 407 needs continuing sponsorship, and you may need to explain why the training wasn't finished in the first period.",
    },
    {
      myth: "My family won't be allowed to work.",
      fact: "Family members on the visa can work up to 40 hours a fortnight. They must leave Australia with or before you.",
    },
    {
      myth: "Every sponsor has to lodge a nomination.",
      fact: "Most do, and it must be approved before you apply. A Commonwealth Government agency sponsor doesn't need a nomination.",
    },
    {
      myth: "Changing training organisation always means a new visa.",
      fact: "Not always. The new organisation must sponsor and nominate you. If you continue the same approved program you don't need a new visa; if the program changes, you do.",
    },
  ],
  roles: [
    {
      id: "trainee",
      label: "I'm the trainee",
      intro: "Your part is your own evidence, a valid application once the nomination is approved, and doing only the nominated training.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Check the nomination is approved (unless your sponsor is a Commonwealth agency)",
            "Get your [[functional-english|Functional English]] evidence",
            "Show funds for yourself and any family coming with you",
            "Arrange health insurance for your whole stay",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Pay A$535, plus A$535 per adult and A$135 per child",
            "In Australia, apply while holding a qualifying visa, or within 28 days of it ending",
            "Respond to requests for health checks or police certificates",
          ],
        },
        {
          title: "During the training",
          items: [
            "Do only the nominated training ([[c8102|condition 8102]])",
            "Tell Home Affairs if your sponsor ends the training",
            "Keep your health insurance",
          ],
        },
      ],
    },
    {
      id: "sponsor",
      label: "I'm the sponsor",
      tone: "pink",
      intro: "Your part is the sponsorship, a genuine training program and a [[nomination]] that describes it.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Apply to be a [[tas|temporary activities sponsor]] (A$420, approved for 5 years)",
            "Show the organisation is lawfully operating, with its ABN and business records",
            "Be able to provide the training directly, unless an exemption applies",
          ],
        },
        {
          title: "To nominate",
          items: [
            "Choose the [[training-types|training type]] and attach a training plan",
            "Pay A$170 (a Commonwealth agency doesn't need to nominate)",
            "List family members on the nomination if they may join the trainee later",
          ],
        },
        {
          title: "While you sponsor",
          items: [
            "Offer genuine, structured training, not a way to fill a vacancy",
            "Pay at least the minimum wage for any work",
            "Don't displace Australian employees or deny them similar training",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "tas",
      term: "Temporary activities sponsor",
      definition: "An organisation approved by Home Affairs to sponsor people for the 407, the 408 and the 403 PALM stream. It costs A$420 and lasts five years.",
    },
    {
      id: "nomination",
      term: "Nomination",
      definition: "The sponsor's application describing you, the type of training and how and where it will happen. It costs A$170, must be approved before you apply, and isn't needed when the sponsor is a Commonwealth agency.",
    },
    {
      id: "training-types",
      term: "Training types",
      definition: "The three kinds of 407 training: (1) training needed for registration or a licence, (2) a structured program in an eligible occupation, and (3) occupational training for capacity building overseas.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "A basic English level. You can show it with an exempt passport or 2 years of full-time study taught in English. A test also works, such as IELTS average 4.5 taken in the 12 months before you apply.",
    },
    { id: "c8102", term: "Condition 8102", definition: "Work only as part of the nominated training program." },
    { id: "c8501", term: "Condition 8501", definition: "Keep adequate health insurance for your whole stay." },
    { id: "c8104", term: "Condition 8104", definition: "Imposed on family members: no more than 40 hours of work a fortnight." },
    { id: "c8522", term: "Condition 8522", definition: "Imposed on family members: leave Australia with or before the main visa holder." },
    {
      id: "stac",
      term: "Subsequent temporary application charge",
      definition: "An extra A$700 charge when you apply in Australia while holding, or after holding, certain temporary visas.",
    },
    {
      id: "gte",
      term: "Genuine temporary entrant",
      definition: "Someone who intends to stay temporarily and do only what the visa allows. Your immigration history is considered.",
    },
  ],
  finder: employerFinder,
  fees: {
    variants: [
      {
        id: "standard",
        label: "Training visa (subclass 407)",
        primary: [{ label: "Base application charge (you)", amount: 535 }],
        adult: [{ label: "Each additional applicant aged 18 or over", amount: 535 }],
        child: [{ label: "Each additional applicant under 18", amount: 135 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 6,
    addOns: [
      {
        id: "stac",
        label: "Subsequent temporary application charge",
        hint: "If you apply in Australia and hold, or last held, certain temporary visas",
        amount: 700,
        per: "application",
      },
    ],
    sponsor: {
      heading: "Your sponsor pays",
      lines: [
        { label: "Temporary activities sponsorship (valid 5 years)", amount: 420, per: "once" },
        { label: "Nomination charge", amount: 170, per: "once" },
      ],
      note: "A Commonwealth Government agency sponsor doesn't need a nomination, so it pays no nomination charge.",
    },
    notIncluded: "Not included: health insurance, health examinations, police certificates and English tests.",
    notes: [
      "A lower charge applies to eligible Pacific Island and Timor-Leste passport holders.",
      "The sponsorship approval lasts five years and also covers 408 and 403 PALM sponsorship.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
