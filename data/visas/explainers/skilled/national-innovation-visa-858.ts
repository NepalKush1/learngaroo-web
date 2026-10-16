import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the National Innovation visa (subclass 858).
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The A$4,890 second instalment applies to every
// applicant aged 18 or over without functional English, the main applicant
// included (re-read on the Home Affairs 858 page on 13 October 2026), so it
// is modelled as a switch for you and a counter for other adults.

export const nationalInnovation858Explainer: VisaExplainer = {
  slug: "national-innovation-visa-858",
  factsAsAt: "12 October 2026",
  oneLiner:
    "An invitation-only permanent visa for people with an internationally recognised record of exceptional achievement in a profession, a sport, the arts, or academia and research.",
  bigIdeas: [
    { title: "Exceptional, and recognised abroad", body: "Your record must be internationally recognised, sustained and still current in your field.", icon: ICON.trophy },
    { title: "Invitation only", body: "You lodge a free EOI. Home Affairs invites candidates in the Ministerial Direction 120 priority order.", icon: ICON.envelope },
    { title: "A nominator vouches for you", body: "Someone with a national reputation in your field signs Form 1000, which you attach when you apply.", icon: ICON.userGroup },
  ],
  heroCard: [
    { label: "Who nominates you", value: "A person or organisation with a national reputation", icon: ICON.userGroup },
    { label: "Points test", value: "None", icon: ICON.checkBadge },
    { label: "Age", value: "Any age; an extra test under 18 or at 55 and over", icon: ICON.calendarDays },
    { label: "After an invitation", value: "60 days to apply, with no extension", icon: ICON.clock },
    { label: "How long", value: "Permanent, with a 5-year travel facility", icon: ICON.home },
    { label: "Visa charge", value: "From A$6,235", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Migration Act and Regulations, and Ministerial Direction No. 120",
  actors: [
    {
      id: "you",
      name: "You (the candidate)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Show an [[exceptional|internationally recognised record of exceptional achievement]] that is still current.",
      does: [
        "Lodge an [[eoi|EOI]] with your passport, CV and highest qualification",
        "Line up a nominator before you're invited",
        "Apply within 60 days of an invitation and pay from A$6,235",
        "Prove the achievements your invitation was based on",
      ],
    },
    {
      id: "nominator",
      name: "Your nominator",
      short: "Nominator",
      icon: ICON.userGroup,
      tone: "teal",
      role: "Vouches for your achievements on [[form1000|Form 1000]].",
      does: [
        "Has a national reputation in the same area as you",
        "Is an Australian citizen, permanent resident, eligible New Zealand citizen or an Australian organisation",
        "Completes and signs Form 1000 for your application",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Invites candidates in the [[md120|Ministerial Direction 120]] priority order and decides the visa.",
      does: [
        "Receives EOIs through the online form",
        "Issues invitations in priority order, with no progress updates",
        "Assesses your record, health and character",
        "Grants or refuses the visa in writing",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "Your [[eoi|EOI]] attaches your passport bio page, CV and highest qualification. It stays active for 2 years and can't be updated.",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "If you're invited, you get a unique reference and invitation code, and 60 days to apply.",
    },
    {
      from: "nominator",
      to: "you",
      label: "Signs Form 1000",
      detail: "Your nominator completes and signs [[form1000|Form 1000]]. Without it, your application isn't processed.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount with Form 1000 and evidence of the achievements in your invitation, and pay from A$6,235.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Permanent residence starts on grant if you're in Australia, or on first entry if you're outside.",
    },
  ],
  journeyTitle: "From expression of interest to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "nominator",
      short: "Nominator",
      title: "Find a nominator early",
      who: ["you", "nominator"],
      description: "Secure a nominator before you expect an invitation: [[form1000|Form 1000]] must be lodged with your application.",
      points: [
        "A national reputation in the same area as you",
        "An Australian citizen, permanent resident, eligible New Zealand citizen or Australian organisation",
        "An organisation shows its signatory is authorised to represent it",
      ],
      youHold: "A nominator who meets the requirements",
      icon: ICON.userGroup,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge an expression of interest",
      who: ["you", "government"],
      description: "Use the National Innovation visa [[eoi|EOI]] form. It's free, and you can't add information after you submit.",
      points: [
        "Attach your passport bio page, CV and highest qualification, with English translations",
        "Agency-nominated candidates also attach Form 1000 Part A and the agency's statement",
        "An EOI gives no bridging visa, so keep a valid visa if you're in Australia",
      ],
      youHold: "An EOI acknowledgement letter",
      icon: ICON.pencilSquare,
    },
    {
      id: "wait",
      short: "Wait",
      title: "Wait for an invitation",
      who: ["government"],
      description: "Home Affairs invites in the [[md120|Ministerial Direction 120]] priority order and doesn't give progress updates.",
      points: [
        "Priority one: global experts with international top-of-field awards",
        "Priority two: nominated by an expert government agency",
        "Then candidates in [[tier-sectors|Tier One and Tier Two sectors]], in that order",
        "An EOI expires after 2 years",
      ],
      youHold: "An invitation with a unique reference and invitation code",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Lodge in ImmiAccount with Form 1000, evidence of the achievements in your invitation, and your identity, English, health and character documents.",
      points: [
        "A$6,235 for you, plus a charge for each family member",
        "The 60 days can't be extended; miss them and you need a new EOI",
        "In Australia you need a [[substantive-visa|substantive visa]] or a Bridging visa A, B or C",
      ],
      youHold: "A lodged application with a transaction reference number",
      cost: "From A$6,235, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and requests",
      who: ["government", "you"],
      description: "Do health examinations when Home Affairs asks, and give biometrics or more documents if requested.",
      points: [
        "Every family member, coming or not, must meet health and character requirements",
        "Adults without [[functional-english|functional English]] pay a second instalment of A$4,890",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete file",
      icon: ICON.shieldCheck,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "If the visa is granted, you're a permanent resident from grant (in Australia) or first entry (outside Australia).",
      points: [
        "Home Affairs expects you to contribute in your area of expertise",
        "Travel freely for 5 years, then use a [[rrv|Resident Return visa]]",
        "Apply for citizenship once you meet the residence requirement",
      ],
      youHold: "Permanent residence",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: match your evidence to the priorities and line up your nominator before you're invited.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Invitations follow the priority order, and your full record decides the outcome.",
  },
  quiz: [
    {
      id: "record",
      topic: "Your record",
      question: "How would you describe your record of achievement?",
      options: [
        {
          value: "international",
          label: "Internationally recognised, with recent achievements",
          status: "ok",
          note: "This visa is built on exactly that: superior, sustained achievement that is acclaimed internationally and still current.",
        },
        {
          value: "national",
          label: "Strong, but recognised mainly in one country",
          status: "stop",
          note: "Achievements that are national rather than international don't meet the criterion.",
        },
        {
          value: "past",
          label: "Mostly in the past",
          status: "stop",
          note: "You must still be prominent, with recent exceptional achievements. Historical achievement alone isn't enough.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Look at the kinds of evidence Ministerial Direction 120 lists.", link: { label: "Open the evidence builder", href: "#evidence" } },
      ],
    },
    {
      id: "priority",
      topic: "Priority",
      question: "Which of these fits you best?",
      help: "Home Affairs invites candidates in this priority order.",
      options: [
        { value: "award", label: "I hold an international top-of-field award", status: "ok", note: "Priority one: global experts with awards such as a Nobel, Fields or Turing prize, or an Olympic gold medal." },
        { value: "agency", label: "An expert government agency will nominate me", status: "ok", note: "Priority two: candidates nominated on Form 1000 by an expert Australian Government, state or territory agency." },
        {
          value: "tier1",
          label: "My work is in critical technologies, renewables or health industries",
          status: "ok",
          note: "Priority three: the Tier One sectors.",
        },
        {
          value: "tier2",
          label: "My work is in agri-food, defence or space, education, FinTech, infrastructure or resources",
          status: "ok",
          note: "Priority four: the Tier Two sectors.",
        },
        {
          value: "none",
          label: "None of these",
          status: "todo",
          note: "An EOI outside these priorities may never be invited, and Home Affairs gives no updates or review of a non-invitation.",
        },
      ],
    },
    {
      id: "nominator",
      topic: "Nominator",
      question: "Do you have a nominator for Form 1000?",
      options: [
        { value: "yes", label: "Yes, with a national reputation in my area", status: "ok", note: "Your nominator completes and signs Form 1000, which you attach when you apply." },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Secure one before you expect an invitation. Without Form 1000 the application isn't processed.",
        },
        {
          value: "otherfield",
          label: "Someone well known, but in a different field",
          status: "todo",
          note: "The nominator must have a national reputation in the same area as you.",
        },
      ],
    },
    {
      id: "establish",
      topic: "Establishing in Australia",
      question: "Could you find work or become established in your field in Australia?",
      options: [
        { value: "yes", label: "Yes, I have letters or offers from Australian organisations", status: "ok", note: "Letters from Australian organisations help show you'd have no difficulty becoming established." },
        {
          value: "unsure",
          label: "I'd be starting from scratch",
          status: "todo",
          note: "Show your knowledge of opportunities, information from your nominator and your background. Income from work outside your field doesn't count.",
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you apply?",
      options: [
        { value: "standard", label: "18 or over, and under 55", status: "ok", note: "No extra age test applies." },
        {
          value: "extra",
          label: "Under 18, or 55 or over",
          status: "todo",
          note: "You can still apply, but you must show exceptional benefit to the Australian community: ongoing, sustained and realised shortly after migration.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Does every applicant 18 or over have functional English?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "There's no competent English requirement and no points test for this visa." },
        {
          value: "no",
          label: "Not everyone",
          status: "todo",
          note: "Each applicant 18 or over without functional English attracts a second instalment of A$4,890 before grant.",
          link: { label: "Add it in the fee estimator", href: "#fees" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "Outside Australia you don't need any particular visa first." },
        { value: "onshore", label: "In Australia, holding a visa or a Bridging visa A, B or C", status: "ok", note: "You can apply in Australia, but not in immigration clearance." },
        {
          value: "491",
          label: "On a 491 or 494 I've held for under 3 years",
          status: "stop",
          note: "If you hold, or last held, a 491 or 494, you must have held it for at least 3 years.",
        },
        {
          value: "novisa",
          label: "In Australia with no visa, or a bridging visa other than A, B or C",
          status: "stop",
          note: "You can't apply in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Every family member, coming or not, must still meet the health and character requirements." },
        {
          value: "concern",
          label: "A significant health condition, or a criminal record",
          status: "todo",
          note: "It needs careful preparation and advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The National Innovation visa has a points test.",
      fact: "No. There's no points test and no competent English requirement. Each applicant 18 or over needs functional English, or pays a second instalment of A$4,890.",
    },
    {
      myth: "A strong career in one country is enough.",
      fact: "Achievements that are national rather than international don't meet the criterion. Your record must be internationally recognised, sustained and still current.",
    },
    {
      myth: "Past achievements are enough.",
      fact: "You must still be prominent in your area, with recent exceptional achievements. Evidence of historical achievement alone doesn't satisfy the criterion.",
    },
    {
      myth: "I can update my EOI with new achievements.",
      fact: "No. You can't add information after you submit. Withdraw the EOI by email and lodge a new one after a significant change or new achievements.",
    },
    {
      myth: "Home Affairs will tell me where my EOI stands.",
      fact: "It doesn't give progress updates, and there's no review of a decision not to invite. An EOI expires after 2 years.",
    },
    {
      myth: "If my record is strong, I can apply without an invitation.",
      fact: "No. Applications lodged without an invitation aren't accepted, and the 60 days after an invitation can't be extended.",
    },
    {
      myth: "There's an upper age limit.",
      fact: "No. Any age can apply, but applicants under 18 or aged 55 or over must show exceptional benefit to the Australian community, realised shortly after migration.",
    },
    {
      myth: "This is a different visa from the Global Talent visa.",
      fact: "It uses subclass 858, which earlier carried the Global Talent and Distinguished Talent visas. Ministerial Direction No. 120 also sets the order for undecided former Global Talent and Distinguished Talent applications.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      intro: "Your part is the EOI, the evidence of your record, and a complete application within 60 days of an invitation.",
      groups: [
        {
          title: "Before an invitation",
          items: [
            "Find a nominator with a national reputation in your area",
            "Lodge the EOI with your passport bio page, CV and highest qualification",
            "Keep a valid visa if you're in Australia: an EOI gives no bridging visa",
          ],
        },
        {
          title: "When you're invited",
          items: [
            "Lodge within 60 days: the period can't be extended",
            "Attach the signed [[form1000|Form 1000]] and evidence of the achievements in your invitation",
            "Pay A$6,235, plus a charge for each family member",
          ],
        },
        {
          title: "After the grant",
          items: [
            "Contribute to Australia in your area of expertise",
            "Use a Resident Return visa to travel once the 5-year travel facility ends",
          ],
        },
      ],
    },
    {
      id: "nominator",
      label: "I'm the nominator",
      tone: "teal",
      intro: "Your part is vouching for the candidate's achievements in your shared area, on [[form1000|Form 1000]].",
      groups: [
        {
          title: "Who can nominate",
          items: [
            "An Australian citizen or permanent resident, an eligible New Zealand citizen, or an Australian organisation",
            "With a national reputation in the same area as the candidate",
          ],
        },
        {
          title: "What you provide",
          items: [
            "A completed and signed Form 1000",
            "Evidence of your national reputation in the area",
            "Evidence of your citizenship or residence status, or that the signatory can represent the organisation",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Form 1000 must be attached when the candidate lodges, or the application isn't processed",
            "Candidates nominated by an expert government agency get priority two",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "exceptional",
      term: "Exceptional and outstanding achievement",
      definition: "A record of superior, sustained achievement in a profession, a sport, the arts, or academia and research. It must be recognised internationally, and acclaimed as exceptional wherever the area is practised.",
    },
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "The free National Innovation visa online form you lodge to be considered for an invitation. It stays active for 2 years and can't be updated after you submit it.",
    },
    {
      id: "md120",
      term: "Ministerial Direction No. 120",
      definition: "The direction that sets the order in which Home Affairs invites and processes National Innovation visa candidates, and lists the indicators of exceptional achievement.",
    },
    {
      id: "form1000",
      term: "Form 1000",
      full: "Nomination for National Innovation visa",
      definition: "The nomination form your nominator completes and signs. It must be attached when you apply, or the application isn't processed.",
    },
    {
      id: "tier-sectors",
      term: "Tier One and Tier Two sectors",
      definition: "Tier One: critical technologies, renewables and low emission technologies, health industries. Tier Two: agri-food and AgTech, defence capabilities and space, education, financial services and FinTech, infrastructure and transport, resources.",
    },
    {
      id: "high-income-threshold",
      term: "Fair Work high income threshold",
      definition: "An earnings benchmark used as one indicator of exceptional achievement: earnings, or an Australian job offer, at or above it count towards your record.",
    },
    {
      id: "h-index",
      term: "h-index",
      definition: "A measure of a researcher's publications and citations. A high h-index for your career stage is one indicator of high academic influence.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "The English level each applicant 18 or over needs. Without it, you pay a second instalment of A$4,890 for that person before grant.",
    },
    {
      id: "second-instalment",
      term: "Second instalment",
      definition: "A charge of A$4,890 for each applicant 18 or over without functional English, payable only when Home Affairs is ready to grant.",
    },
    { id: "substantive-visa", term: "Substantive visa", definition: "Any visa other than a bridging visa or a few special-purpose visas, such as a student, graduate or work visa." },
    {
      id: "rrv",
      term: "Resident Return visa",
      full: "Subclass 155 or 157",
      definition: "The visa a permanent resident needs to re-enter Australia once the 5-year travel facility from grant has ended.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents, such as inflated CVs or unverifiable awards. A breach leads to refusal and a 3-year bar.",
    },
  ],
  cta: {
    subtitle: "We check your record against the priorities and indicators, tell you honestly where you stand, and prepare your EOI and visa application with you and your nominator.",
  },
  finder: skilledFinder,
  evidence: {
    navLabel: "Your evidence",
    eyebrow: "Evidence builder",
    title: "What shows an exceptional record?",
    highlight: "exceptional record",
    subtitle: "Tick what you could show. This counts your evidence by type; it doesn't judge how strong it is.",
    groups: [
      {
        id: "awards",
        title: "International awards and honours",
        icon: ICON.trophy,
        why: "Top-of-field international awards are the clearest sign of an [[exceptional|internationally recognised record]], and their holders are priority one.",
        items: [
          "A Nobel, Breakthrough, Fields, Turing, Pulitzer or International Booker prize",
          "An Olympic gold medal or a Laureus award",
          "Other prizes and honours in your field",
          "Sporting results or commissioned works",
        ],
      },
      {
        id: "research",
        title: "Research and academia",
        icon: ICON.beaker,
        why: "These show high academic influence, one of the indicators in [[md120|Ministerial Direction No. 120]].",
        items: [
          "Recent publications in top-ranked journals",
          "A high h-index for your career stage",
          "A research PhD from a top 100 university",
          "A national-level research grant",
          "A recent keynote at a high-profile international conference",
          "Academic Level D or E, or the international equivalent",
        ],
      },
      {
        id: "innovation",
        title: "Innovation and business",
        icon: ICON.lightBulb,
        why: "Recognised intellectual property and a record of successful ventures are evidence for entrepreneurs and innovators.",
        items: [
          "International patents",
          "A track record of successful ventures",
          "An IPO",
          "Commercialisation linked to Australian innovation hubs",
        ],
      },
      {
        id: "standing",
        title: "Earnings and standing",
        icon: ICON.star,
        why: "Earnings at or above the [[high-income-threshold|Fair Work high income threshold]] and senior appointments show standing in your area.",
        items: [
          "Earnings at or above the Fair Work high income threshold",
          "An Australian job offer at or above that threshold",
          "Board or advisory appointments",
          "Peak body statements or international media coverage",
        ],
      },
      {
        id: "establish",
        title: "Becoming established in Australia",
        icon: ICON.mapPin,
        why: "You must show you'd have no difficulty finding work, or becoming established, in your area in Australia.",
        items: [
          "A statement of the opportunities you know of in Australia",
          "Letters from Australian organisations about work or business",
          "Information from your nominator",
          "Your employment or business background",
        ],
      },
    ],
    footnote: "Indicators from Ministerial Direction No. 120 and the Home Affairs document list, as stated on this page on 12 October 2026. Your evidence must match the achievements in your EOI and invitation.",
  },
  fees: {
    variants: [
      {
        id: "standard",
        label: "National Innovation visa (subclass 858)",
        primary: [{ label: "Base application charge", amount: 6235 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3120 }],
        child: [{ label: "Each additional applicant under 18", amount: 1560 }],
      },
    ],
    maxAdults: 4,
    maxChildren: 6,
    addOns: [
      {
        id: "second-instalment-you",
        label: "Second instalment for you, if you don't have functional English",
        hint: "Payable only when Home Affairs is ready to grant",
        amount: 4890,
        per: "application",
      },
      {
        id: "second-instalment-adults",
        label: "Second instalment for each other adult without functional English",
        hint: "Payable only when Home Affairs is ready to grant",
        amount: 4890,
        per: "adult",
      },
    ],
    notIncluded: "Not included: health examinations, police certificates, biometrics and translations. The EOI itself is free.",
    notes: [
      "The second instalment applies to every applicant 18 or over without functional English, you included, and only when Home Affairs is ready to grant.",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
      "The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
