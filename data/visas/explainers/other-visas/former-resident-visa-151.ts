import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Former Resident visa (subclass 151). Every
// fact matches data/visas/other-visas-resident.ts (checked against Home
// Affairs on 12 October 2026).

export const formerResidentVisa151Explainer: VisaExplainer = {
  slug: "former-resident-visa-151",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The Former Resident visa gives permanent residence back to people who grew up in Australia as permanent residents, or who served in the Australian Defence Force before 1981.",
  bigIdeas: [
    { title: "For those who grew up here", body: "9 years in Australia as a permanent resident before you turned 18, and under 45 when you apply.", icon: ICON.home },
    { title: "Or who served before 1981", body: "3 months of continuous Australian defence service before 1981, or an earlier medical discharge. No age limit.", icon: ICON.shieldCheck },
    { title: "It restores permanent residence", body: "Work, study and Medicare, a 5-year travel facility, and a path to citizenship.", icon: ICON.checkBadge },
  ],
  heroCard: [
    { label: "Who it's for", value: "People who grew up here as permanent residents", icon: ICON.home },
    { label: "Also for", value: "Australian defence service before 1981", icon: ICON.shieldCheck },
    { label: "Age", value: "Under 45 (long residence); no limit for defence", icon: ICON.calendarDays },
    { label: "Result", value: "Permanent residence, 5-year travel facility", icon: ICON.checkBadge },
    { label: "How you apply", value: "On paper, in or outside Australia", icon: ICON.pencilSquare },
    { label: "Cost", value: "A$6,005, plus family charges", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the former resident)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You grew up here as a permanent resident, or served in the Australian Defence Force before 1981.",
      does: [
        "Prove 9 years as a permanent resident before 18, or your defence service",
        "Show the [[ties|close ties]] you've kept with Australia (long residence)",
        "Apply on paper with [[f47sv|Form 47SV]] and pay A$6,005",
        "Provide an [[aos|Assurance of Support]] if asked",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides your application, including health and character.",
      does: [
        "Checks your residence or defence service evidence",
        "Asks for health examinations and police certificates",
        "May ask for an [[aos|Assurance of Support]]",
        "Grants permanent residence with a 5-year [[travel-facility|travel facility]]",
      ],
    },
    {
      id: "family",
      name: "Your family members",
      short: "Family",
      icon: ICON.userGroup,
      tone: "teal",
      role: "Partners and children can be included when you apply, or added before a decision.",
      does: [
        "Pay A$3,000 (18 or over) or A$1,500 (under 18) each",
        "Meet health and character requirements",
        "May not be allowed to arrive before you ([[c8502|condition 8502]])",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You apply on paper",
      detail: "You lodge [[f47sv|Form 47SV]] on paper, in or outside Australia, with evidence of your childhood residence or defence service, and pay A$6,005.",
    },
    {
      from: "family",
      to: "government",
      label: "Family included",
      detail: "Family members can be included when you apply or added before a decision. Each pays a charge and must meet health and character requirements.",
    },
    {
      from: "government",
      to: "you",
      label: "Permanent visa granted",
      detail: "After health and character checks, and an [[aos|Assurance of Support]] if asked, Home Affairs decides. If granted, you're a permanent resident with a 5-year travel facility.",
    },
    {
      from: "government",
      to: "family",
      label: "Family granted too",
      detail: "Family members may be granted with [[c8502|condition 8502]], which means they must not arrive in Australia before you.",
    },
  ],
  journeyTitle: "Back to permanent residence, step by step",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "pathway",
      short: "Pathway",
      title: "Confirm which pathway you meet",
      who: ["you"],
      description: "Check the [[long-residence|long residence requirement]] or the [[defence|defence service requirement]]. You need to meet one of them.",
      points: [
        "Long residence: 9 years as a permanent resident before 18",
        "Plus under 45 when you apply, never an Australian citizen, and close ties kept",
        "Or defence service: 3 months continuous before 1981",
        "Still hold a permanent visa? A Resident Return visa may be simpler",
      ],
      youHold: "A clear basis for the application",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather residence and ties evidence",
      who: ["you"],
      description: "Request your international movement records, and National Archives records if you arrived before electronic records. Collect proof of continuing ties.",
      points: [
        "Old passports, visa labels or grant letters from your childhood",
        "School, Medicare and other residence records",
        "Visits, contacts, property or business interests since you left",
      ],
      youHold: "Proof of 9 years before 18 (or your service) and ongoing ties",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply on paper with Form 47SV",
      who: ["you"],
      description: "Home Affairs states this visa must be applied for on paper. You can be in or outside Australia, but not in [[clearance|immigration clearance]].",
      points: [
        "A$6,005 for you",
        "A$3,000 per adult and A$1,500 per child included",
        "Add family before a decision, including a child born after you apply",
      ],
      youHold: "A lodged paper application and a receipt",
      cost: "A$6,005, plus family charges",
      icon: ICON.pencilSquare,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health and character checks",
      who: ["you", "government"],
      description: "Do health examinations and provide police certificates when asked. Provide an [[aos|Assurance of Support]] if requested.",
      points: [
        "Police certificates for each country where you spent 12 months or more in the last 10 years since turning 16",
        "Family members 16 or over meet the character requirement",
        "Any debt to the Australian Government must be repaid or under an arrangement",
      ],
      youHold: "Health and character clearances",
      icon: ICON.shieldCheck,
    },
    {
      id: "decision",
      short: "Decision",
      title: "Decision and entry",
      who: ["government", "you"],
      description: "Applied in Australia? Be in Australia at the decision. Applied outside? Be outside. If granted offshore, enter before the date on your grant letter.",
      points: [
        "Permanent residence starts on grant in Australia, or the day you enter",
        "5-year [[travel-facility|travel facility]] from grant",
        "New Zealand passport? Say you don't want a Special Category visa",
      ],
      youHold: "A permanent Former Resident visa",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is proving your years here, or your service, with documents.",
    },
  },
  quiz: [
    {
      id: "pathway",
      topic: "Your pathway",
      question: "Which describes you?",
      options: [
        {
          value: "child",
          label: "I lived in Australia as a permanent resident as a child",
          status: "ok",
          note: "That's the long residence pathway. The next questions check its rules.",
        },
        {
          value: "defence",
          label: "I served in the Australian Defence Force before 1981",
          status: "ok",
          note: "That's the defence service pathway: at least 3 months of continuous service before 1981, or an earlier medical discharge because of that service. There's no age limit.",
        },
        {
          value: "neither",
          label: "Neither",
          status: "stop",
          note: "The Former Resident visa needs one of these two pathways.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "years",
      topic: "Years before 18",
      question: "How long did you live in Australia as a permanent resident before you turned 18?",
      help: "If you're under 18 now, you need at least half your life here as a permanent resident.",
      options: [
        { value: "nine", label: "9 years or more", status: "ok", note: "That meets the long residence requirement." },
        {
          value: "temporary",
          label: "Some of that time was on a temporary visa",
          status: "todo",
          note: "Only time as a permanent resident counts towards the 9 years. Check your records carefully.",
        },
        {
          value: "less",
          label: "Fewer than 9 years",
          status: "stop",
          note: "The long residence pathway needs at least 9 years as a permanent resident before 18.",
        },
        { value: "defence", label: "I'm on the defence service pathway", status: "ok", note: "This doesn't apply to you." },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you apply?",
      options: [
        { value: "under", label: "Under 45", status: "ok", note: "That meets the age rule for the long residence pathway." },
        {
          value: "over",
          label: "45 or older, on the long residence pathway",
          status: "stop",
          note: "The long residence pathway needs you to be under 45 when you apply.",
        },
        { value: "defence", label: "Any age: I'm on the defence service pathway", status: "ok", note: "There's no age limit for the defence service pathway." },
      ],
    },
    {
      id: "citizen",
      topic: "Citizenship history",
      question: "Have you ever been an Australian citizen?",
      options: [
        { value: "no", label: "No", status: "ok", note: "The long residence pathway is only for people who've never been Australian citizens." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "The long residence pathway isn't open to former citizens. They use the resumption of citizenship process instead.",
        },
      ],
    },
    {
      id: "ties",
      topic: "Ties",
      question: "Since you stopped being a permanent resident, have you kept close ties with Australia?",
      help: "Part of the long residence test. For example regular contact with relatives or friends, frequent visits, property or business interests.",
      options: [
        { value: "yes", label: "Yes, and I can show them", status: "ok", note: "Gather documents of visits, contact and any property or business interests." },
        { value: "lapsed", label: "Some, but they've lapsed", status: "todo", note: "Lapsed ties are a risk. Collect whatever evidence of contact, visits or interests you have." },
        { value: "none", label: "None", status: "stop", note: "The long residence pathway needs close ties to have been kept." },
      ],
    },
    {
      id: "current",
      topic: "Current visa",
      question: "Do you still hold, or did you recently hold, an Australian permanent visa that wasn't cancelled?",
      options: [
        { value: "no", label: "No", status: "ok", note: "That's who this visa is for." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "A Resident Return visa is usually simpler and cheaper (A$1,475). Check it first.",
          link: { label: "Resident Return visa", href: "/visas/other-visas/resident-return-visa-155-157" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or your family?",
      options: [
        { value: "no", label: "No", status: "ok", note: "You'll still do health examinations and give police certificates when asked." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Each applicant must meet health and character requirements, so any concern needs careful preparation and advice before you lodge.",
          link: { label: "Health requirement and waivers", href: "/visas/appeals-and-review/health-requirement-and-health-waiver" },
        },
      ],
    },
    {
      id: "where",
      topic: "Where you'll be",
      question: "Where will you be when you apply and when it's decided?",
      options: [
        {
          value: "same",
          label: "On the same side of the border both times",
          status: "ok",
          note: "Good: in Australia both times, or outside both times, and not in immigration clearance when you apply.",
        },
        {
          value: "cross",
          label: "I might cross the border while it's being decided",
          status: "todo",
          note: "If you applied in Australia you must be in Australia at the decision; if you applied outside, you must be outside. Plan your travel around it.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can apply online.",
      fact: "No. Home Affairs states this visa must be applied for on paper, using Form 47SV. You can lodge in or outside Australia, but not while in immigration clearance.",
    },
    {
      myth: "Former Australian citizens can use the long residence pathway.",
      fact: "No. It's only for people who've never been Australian citizens. Former citizens use the resumption of citizenship process instead.",
    },
    {
      myth: "Any 9 years in Australia as a child will do.",
      fact: "It must be at least 9 years as a permanent resident before you turned 18. Years on a temporary visa don't count towards it.",
    },
    {
      myth: "There's always an age limit.",
      fact: "Only on the long residence pathway: you must be under 45 when you apply. There's no age limit on the defence service pathway.",
    },
    {
      myth: "I need a sponsor.",
      fact: "No sponsor or nomination is needed. Home Affairs may ask for an Assurance of Support, where an assurer commits to repay certain social security payments made to you.",
    },
    {
      myth: "If my permanent visa hasn't been cancelled, this is my only way back.",
      fact: "If you hold or held a permanent visa that wasn't cancelled, a Resident Return visa is usually simpler and cheaper, at A$1,475.",
    },
    {
      myth: "My family can travel to Australia ahead of me.",
      fact: "Condition 8502 may be imposed on family members, so they must not arrive in Australia before you.",
    },
  ],
  glossary: [
    {
      id: "long-residence",
      term: "Long residence requirement",
      definition: "At least 9 years in Australia as a permanent resident before you turned 18 (half your life if you're under 18). You must also be under 45 when you apply, never have been an Australian citizen, and have kept close ties.",
    },
    {
      id: "defence",
      term: "Defence service requirement",
      definition: "At least 3 months of continuous Australian defence service before 1981, or an earlier discharge as medically unfit because of that service. There's no age limit.",
    },
    {
      id: "ties",
      term: "Close ties",
      definition: "Business, cultural or personal links you kept with Australia after leaving, such as regular contact with relatives or friends, frequent visits, property or active business interests.",
    },
    {
      id: "aos",
      term: "Assurance of Support",
      definition: "A commitment by an assurer to repay certain social security payments made to you. Home Affairs may ask for one; any bond is set by Services Australia.",
    },
    {
      id: "c8502",
      term: "Condition 8502",
      definition: "A family member must not arrive in Australia before the primary applicant named in the visa.",
    },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "The 5 years from grant in which you can leave and re-enter Australia as a permanent resident. After that you need a Resident Return visa to return as a permanent resident.",
    },
    {
      id: "rrv",
      term: "Resident Return visa",
      definition: "A visa (subclass 155 or 157) that renews the travel facility of a permanent resident, or of a former permanent resident whose permanent visa wasn't cancelled. It costs A$1,475.",
    },
    {
      id: "clearance",
      term: "Immigration clearance",
      definition: "The border check when you arrive in Australia. You can't apply for this visa while you're in it.",
    },
    {
      id: "f47sv",
      term: "Form 47SV",
      full: "Application for special migration to Australia",
      definition: "The paper form Home Affairs lists for this visa.",
    },
    {
      id: "resumption",
      term: "Resumption of citizenship",
      definition: "The process former Australian citizens use to become citizens again, instead of this visa's long residence pathway.",
    },
  ],
  fees: {
    variants: [
      {
        id: "151",
        label: "Former Resident visa (subclass 151)",
        primary: [{ label: "Base application charge", amount: 6005 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3000 }],
        child: [{ label: "Each additional applicant under 18", amount: 1500 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 5,
    notIncluded: "Not included: health examinations, police certificates and any Assurance of Support bond.",
    notes: [
      "A lower charge applies from 1 July 2026 to eligible Pacific Island and Timor-Leste passport holders. Check the Visa Pricing Estimator.",
      "An Assurance of Support bond is only payable if Home Affairs asks for one; Services Australia sets it.",
      "Each family member must meet health and character requirements, and a child born after you apply should be added to the application.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
