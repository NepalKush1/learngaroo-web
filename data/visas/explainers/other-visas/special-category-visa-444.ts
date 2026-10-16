import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Special Category visa (subclass 444) for New
// Zealand citizens. Every fact matches data/visas/other-visas-resident.ts
// (checked against Home Affairs on 12 October 2026). The 189 New Zealand
// stream permanent residence dates are left out: the page's FAQ wording
// differs from the citizenship page and from Home Affairs (reported).

export const specialCategoryVisa444Explainer: VisaExplainer = {
  slug: "special-category-visa-444",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The Special Category visa is the free, temporary visa most New Zealand citizens get on arrival. It lets you live, work and study here, and after 4 years you can apply directly for citizenship.",
  bigIdeas: [
    { title: "Automatic and free", body: "New Zealand citizens get it at the border on a New Zealand passport. No application, no charge.", icon: ICON.identification },
    { title: "Temporary, but open-ended", body: "Live, work and study for as long as you stay. It ends when you leave, and you get a new one when you return.", icon: ICON.arrowPath },
    { title: "Citizenship after 4 years", body: "Since 1 July 2023, SCV holders can apply directly for citizenship after 4 years of lawful residence.", icon: ICON.flag },
  ],
  heroCard: [
    { label: "Who it's for", value: "New Zealand citizens on a New Zealand passport", icon: ICON.identification },
    { label: "Cost", value: "Free, granted on arrival", icon: ICON.currencyDollar },
    { label: "How long", value: "While you stay and remain a NZ citizen", icon: ICON.clock },
    { label: "Work and study", value: "Unrestricted", icon: ICON.briefcase },
    { label: "Next step", value: "Direct citizenship after 4 years", icon: ICON.flag },
    { label: "Family", value: "Non-NZ partners and children need their own visa", icon: ICON.userGroup },
  ],
  actors: [
    {
      id: "you",
      name: "You (a New Zealand citizen)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You arrive on your New Zealand passport and live, work or study here.",
      does: [
        "Answer the health and character questions truthfully",
        "Check your visa in [[vevo|VEVO]]",
        "Report changes such as a new address or a child's birth",
        "Apply for citizenship once you meet the residence rules",
      ],
    },
    {
      id: "government",
      name: "Home Affairs and border officers",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Grants the SCV at the border and records it electronically.",
      does: [
        "Grants the SCV free on arrival",
        "Checks character and health at the border",
        "Decides SCV applications made in Australia, in limited cases",
        "Later decides your citizenship application",
      ],
    },
    {
      id: "family",
      name: "Family who aren't NZ citizens",
      short: "Family",
      icon: ICON.userGroup,
      tone: "teal",
      role: "Partners and children who aren't New Zealand citizens need a visa of their own.",
      does: [
        "Can't be included in your SCV",
        "Usually apply for a [[v461|subclass 461]] visa",
        "Or apply for a visa in their own right",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "Arrive on NZ passport",
      detail: "You present your New Zealand passport and answer the health and character questions on the incoming passenger card or at [[smartgate|SmartGate]].",
    },
    {
      from: "government",
      to: "you",
      label: "SCV granted, free",
      detail: "Home Affairs grants the SCV at the airport or seaport and records it electronically. There's no label: [[vevo|VEVO]] is your record.",
    },
    {
      from: "family",
      to: "government",
      label: "Apply for own visa",
      detail: "Partners and children who aren't New Zealand citizens apply for their own visa, usually a [[v461|subclass 461]].",
    },
    {
      from: "you",
      to: "government",
      label: "Apply for citizenship",
      detail: "After 4 years of [[lawful|lawful residence]] you can apply directly for citizenship. SCV time counts as permanent residence from 1 July 2022, or from your grant date if later.",
    },
  ],
  journeyTitle: "From the border to Australian citizenship",
  journeyHighlight: "Australian citizenship",
  stages: [
    {
      id: "before",
      short: "Prepare",
      title: "Check before you travel",
      who: ["you"],
      description: "If you have a criminal record, use the Home Affairs enquiry form for New Zealand passport holders before you travel. If you hold an Australian permanent visa, plan to say you don't want an SCV.",
      points: [
        "A prison sentence of 12 months or more can make you a [[behaviour|behaviour concern non-citizen]]",
        "Partners and children who aren't New Zealand citizens need their own visa",
      ],
      youHold: "Confidence you'll be granted an SCV, or a plan to avoid one",
      icon: ICON.shieldCheck,
    },
    {
      id: "arrive",
      short: "Arrive",
      title: "Arrive on your New Zealand passport",
      who: ["you", "government"],
      description: "Complete the incoming passenger card or the [[smartgate|SmartGate]] questions truthfully. The SCV is granted at the airport or seaport.",
      points: ["No charge", "No visa label: it's recorded electronically", "In effect from the day you arrive"],
      youHold: "An SCV in effect from the date of arrival",
      cost: "A$0",
      icon: ICON.paperAirplane,
    },
    {
      id: "vevo",
      short: "VEVO",
      title: "Check your visa in VEVO",
      who: ["you"],
      description: "Use [[vevo|VEVO]] to confirm your visa and work entitlements.",
      points: ["There's no visa label, so VEVO is your record", "You need a reference number, which you can request through the Home Affairs online form"],
      youHold: "A VEVO record of your SCV",
      icon: ICON.documentMagnifyingGlass,
    },
    {
      id: "onshore",
      short: "Onshore",
      title: "Apply in Australia if you didn't get one",
      who: ["you", "government"],
      description: "Became a New Zealand citizen after arriving, entered on another passport or visa, or had a New Zealand citizen child here? Lodge the online SCV form.",
      points: [
        "The grant takes effect from the decision date, not your arrival",
        "Not possible while your visa has [[c8503|condition 8503]]",
      ],
      youHold: "An SCV granted in Australia",
      icon: ICON.pencilSquare,
    },
    {
      id: "live",
      short: "Live",
      title: "Live, work and study",
      who: ["you"],
      description: "Work for any employer and study, with no work or study condition, for as long as you stay and remain a New Zealand citizen.",
      points: [
        "Report changes of address, contact details, citizenship and the birth of a child",
        "The SCV ends when you leave; you get a new one when you return",
        "Some payments depend on being a [[protected|protected SCV holder]]",
      ],
      youHold: "Unrestricted work and study rights",
      icon: ICON.briefcase,
    },
    {
      id: "citizenship",
      short: "Citizen",
      title: "Apply for citizenship after 4 years",
      who: ["you", "government"],
      description: "From 1 July 2023, SCV holders can apply directly for [[conferral|citizenship by conferral]], without a permanent visa first.",
      points: [
        "4 years of [[lawful|lawful residence]] immediately before applying",
        "SCV time counts as permanent residence from 1 July 2022, or from your grant date if later",
        "Time away: no more than 12 months in total, and 90 days in the last 12 months",
      ],
      youHold: "A lodged citizenship application",
      cost: "A$595 general fee (A$85 concession)",
      icon: ICON.flag,
    },
  ],
  check: {
    ok: {
      title: "You look set for an SCV",
      body: "Nothing in your answers stands in the way. Arrive on your New Zealand passport, answer the questions truthfully and check VEVO.",
    },
  },
  quiz: [
    {
      id: "citizen",
      topic: "Citizenship",
      question: "Are you a New Zealand citizen with a valid New Zealand passport?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "The SCV is for New Zealand citizens who present a valid New Zealand passport." },
        {
          value: "family",
          label: "No, I'm the partner or child of one",
          status: "stop",
          note: "You can't be included in an SCV. The usual option is a subclass 461 visa, or a visa in your own right.",
          link: { label: "Subclass 461 visa", href: "/visas/family/new-zealand-citizen-family-relationship-visa-461" },
        },
      ],
    },
    {
      id: "record",
      topic: "Character",
      question: "Have you been sentenced to a year or more in prison, or removed or deported from any country?",
      help: "Two or more sentences adding up to at least one year also count.",
      options: [
        { value: "no", label: "No", status: "ok", note: "You'll still answer the character questions when you arrive." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You may be refused an SCV, and entry, as a [[behaviour|behaviour concern non-citizen]]. Use the Home Affairs enquiry form for New Zealand passport holders before you travel.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "pr",
      topic: "Permanent visa",
      question: "Do you hold an Australian permanent visa?",
      options: [
        { value: "no", label: "No", status: "ok", note: "The SCV is your usual visa while you live here." },
        {
          value: "yes",
          label: "Yes",
          status: "todo",
          note: "Tell the border officer you hold a permanent visa and don't want an SCV. An SCV grant would cease your permanent visa.",
          link: { label: "Resident Return visa", href: "/visas/other-visas/resident-return-visa-155-157" },
        },
      ],
    },
    {
      id: "entry",
      topic: "How you got here",
      question: "How did you enter Australia?",
      options: [
        { value: "notyet", label: "I haven't arrived yet", status: "ok", note: "Arrive on your New Zealand passport and the SCV is granted at the border, free." },
        { value: "nzpp", label: "On my New Zealand passport", status: "ok", note: "You were granted an SCV on arrival. VEVO confirms it." },
        {
          value: "other",
          label: "On another passport or visa, or I became a New Zealand citizen later",
          status: "todo",
          note: "You can apply in Australia with the Home Affairs online form. The SCV takes effect from the decision date, not your arrival.",
        },
      ],
    },
    {
      id: "c8503",
      topic: "No further stay",
      question: "If you're in Australia on another visa, does it have condition 8503 (no further stay)?",
      options: [
        { value: "no", label: "No, or I'm arriving on my New Zealand passport", status: "ok", note: "Nothing to check here." },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "You can't apply for an SCV while your current visa carries [[c8503|condition 8503]].",
          link: { label: "Condition 8503 and waivers", href: "/visas/appeals-and-review/condition-8503-no-further-stay-waiver" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Is anyone coming with you who isn't a New Zealand citizen?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Each New Zealand citizen in your family gets their own SCV at the border." },
        {
          value: "yes",
          label: "Yes, a partner or child",
          status: "todo",
          note: "They need their own visa, usually a [[v461|subclass 461]]. Arrange it before they travel.",
          link: { label: "Subclass 461 visa", href: "/visas/family/new-zealand-citizen-family-relationship-visa-461" },
        },
      ],
    },
    {
      id: "future",
      topic: "Citizenship plans",
      question: "How long have you lived in Australia lawfully?",
      options: [
        {
          value: "four",
          label: "4 years or more, with limited time away",
          status: "ok",
          note: "You may be able to apply directly for citizenship. Time away must be no more than 12 months in total, and no more than 90 days in the last 12 months.",
          link: { label: "Citizenship by conferral", href: "/visas/other-visas/australian-citizenship-by-conferral" },
        },
        {
          value: "less",
          label: "Less than 4 years",
          status: "ok",
          note: "Keep building your time. SCV time counts as permanent residence from 1 July 2022, or from your grant date if later.",
        },
        { value: "short", label: "I'm only staying for a while", status: "ok", note: "The SCV still lets you live, work and study while you're here." },
      ],
    },
  ],
  myths: [
    {
      myth: "New Zealand citizens don't need a visa for Australia.",
      fact: "They do, but it's automatic. A Special Category visa is granted free on arrival to New Zealand citizens with a valid New Zealand passport who aren't behaviour or health concern non-citizens.",
    },
    {
      myth: "The SCV is a permanent visa.",
      fact: "It's temporary and ends when you leave Australia; you get a new one each time you return. But since 1 July 2023, SCV time counts as permanent residence for citizenship.",
    },
    {
      myth: "I need permanent residence before I can become a citizen.",
      fact: "Not any more. Since 1 July 2023, SCV holders can apply directly for citizenship after 4 years of lawful residence, with limited time away.",
    },
    {
      myth: "I can still apply for the 189 New Zealand stream.",
      fact: "Home Affairs states it's closed to new applications. Direct citizenship, or another permanent visa you qualify for, such as a skilled or partner visa, are the main routes now.",
    },
    {
      myth: "My partner can come in on my SCV.",
      fact: "No. Partners and children who aren't New Zealand citizens can't be included. They usually need a subclass 461 visa, or a visa in their own right.",
    },
    {
      myth: "Taking an SCV doesn't matter if I already have permanent residence.",
      fact: "It does. An SCV grant ceases your permanent visa and can affect Resident Return visa and citizenship eligibility. Tell the border officer you don't want one.",
    },
    {
      myth: "An SCV gives me the same rights as a permanent resident.",
      fact: "Not all of them. Temporary visa holders can't vote or take ongoing Australian Government jobs, and some payments depend on being a protected SCV holder.",
    },
  ],
  glossary: [
    {
      id: "scv",
      term: "SCV",
      full: "Special Category visa (subclass 444)",
      definition: "The temporary visa granted to New Zealand citizens who arrive on a valid New Zealand passport. It's free and lasts while you stay in Australia and remain a New Zealand citizen.",
    },
    {
      id: "smartgate",
      term: "SmartGate",
      definition: "The automated border check at Australian airports. New Zealand citizens can answer the health and character questions there instead of on an incoming passenger card.",
    },
    {
      id: "vevo",
      term: "VEVO",
      full: "Visa Entitlement Verification Online",
      definition: "The Home Affairs online check that confirms your visa and work entitlements. The SCV has no label, so VEVO is your record.",
    },
    {
      id: "behaviour",
      term: "Behaviour concern non-citizen",
      definition: "Someone sentenced to at least one year in prison, or to two or more sentences totalling at least one year. It also covers being found guilty of a crime while of unsound mind, or being removed, deported or excluded from Australia or another country.",
    },
    {
      id: "protected",
      term: "Protected SCV holder",
      definition: "A New Zealand citizen who was here on an SCV on 26 February 2001. Or one who spent 365 days or more here between 26 February 1999 and 25 February 2001, then returned after 26 February 2001. Others qualify under section 7 of the Social Security Act 1991.",
    },
    {
      id: "c8503",
      term: "Condition 8503",
      definition: "A 'no further stay' condition on some visas. You can't apply for an SCV while your current visa carries it.",
    },
    {
      id: "v461",
      term: "Subclass 461",
      full: "New Zealand Citizen Family Relationship visa",
      definition: "A temporary visa for partners and dependent family members of an SCV holder who aren't New Zealand citizens themselves.",
    },
    {
      id: "conferral",
      term: "Citizenship by conferral",
      definition: "Applying to become an Australian citizen once you meet the residence requirement. SCV holders can apply directly, without a permanent visa first.",
    },
    {
      id: "lawful",
      term: "Lawful residence",
      definition: "Living in Australia on a valid visa. Citizenship needs 4 years of it immediately before you apply. Time away must be no more than 12 months in total, and no more than 90 days in the last 12 months.",
    },
    {
      id: "nz189",
      term: "189 New Zealand stream",
      definition: "A permanent skilled visa stream for New Zealand citizens. Home Affairs states it's closed to new applications.",
    },
    {
      id: "health",
      term: "Health concern non-citizen",
      definition: "The health test at the border. If you declare tuberculosis on arrival, Home Affairs asks for more information before deciding.",
    },
  ],
  cta: {
    title: "Questions about your SCV or citizenship?",
    subtitle: "We check your situation against these rules, tell you honestly where you stand, and help with citizenship or a visa for your family.",
  },
  finder: {
    navLabel: "Your pathway",
    eyebrow: "Pathways for New Zealand citizens",
    title: "Which pathway fits you?",
    highlight: "fits you",
    subtitle: "A few taps show the usual starting point for a New Zealand citizen or a family member, and what to check first.",
    id: "nz-pathways",
    start: "citizen",
    questions: [
      {
        id: "citizen",
        question: "Are you a New Zealand citizen with a New Zealand passport?",
        options: [
          { label: "Yes", next: "permanent" },
          { label: "No, I'm the partner or child of one", next: "family-461" },
        ],
      },
      {
        id: "permanent",
        question: "Do you hold an Australian permanent visa?",
        options: [
          { label: "Yes", next: "keep-pr" },
          { label: "No", next: "record" },
        ],
      },
      {
        id: "record",
        question: "Have you ever been sentenced to a year or more in prison, or removed, deported or excluded from any country?",
        help: "Two or more sentences that add up to at least one year also count.",
        options: [
          { label: "No", next: "time" },
          { label: "Yes", next: "behaviour" },
        ],
      },
      {
        id: "time",
        question: "How long have you lived in Australia lawfully?",
        help: "Time on an SCV counts as permanent residence for citizenship from 1 July 2022, or from your grant date if your first SCV was granted later.",
        options: [
          { label: "I haven't arrived yet, or I've just arrived", next: "scv-arrive" },
          { label: "Less than 4 years", next: "scv-build" },
          { label: "4 years or more", next: "citizenship" },
        ],
      },
    ],
    outcomes: [
      {
        id: "family-461",
        title: "New Zealand Citizen Family Relationship visa (subclass 461)",
        body: "Partners and dependent children who aren't New Zealand citizens can't be included in an SCV. The usual option is the [[v461|subclass 461]], a temporary visa for members of the family unit of an SCV holder, or a visa in their own right.",
        watch: [
          "Arrange their visa before they travel",
          "A child born in Australia on or after 1 July 2022 to an SCV-holding parent may be an Australian citizen automatically",
        ],
        href: "/visas/family/new-zealand-citizen-family-relationship-visa-461",
        tone: "match",
      },
      {
        id: "keep-pr",
        title: "Keep your permanent visa: say no to an SCV",
        body: "At the border, tell the officer you hold a permanent visa and don't want an SCV. If you're granted an SCV by mistake your permanent visa ceases, which can affect Resident Return visa and citizenship eligibility.",
        watch: [
          "Travel facility expired? A Resident Return visa renews it",
          "Once you meet the residence requirement, you can apply for citizenship",
        ],
        href: "/visas/other-visas/resident-return-visa-155-157",
        tone: "match",
      },
      {
        id: "behaviour",
        title: "Check before you travel",
        body: "You may be refused an SCV, and entry, as a [[behaviour|behaviour concern non-citizen]]. Use the Home Affairs enquiry form for New Zealand passport holders with a criminal conviction before you travel.",
        watch: [
          "This covers a sentence of at least one year, or two or more sentences totalling at least one year",
          "It also covers removal, deportation or exclusion from Australia or another country",
          "Already here on an SCV? It ends when you leave, and the character check applies again each time you return",
        ],
        tone: "stop",
      },
      {
        id: "scv-arrive",
        title: "Special Category visa (subclass 444)",
        body: "Present your New Zealand passport and answer the health and character questions at [[smartgate|SmartGate]] or on your passenger card. The SCV is granted free on arrival and lets you live, work and study here while you remain a New Zealand citizen.",
        watch: [
          "It's temporary: it ends when you leave, and you get a new one each time you return",
          "Became a New Zealand citizen after arriving, or entered on another passport? You can apply in Australia",
          "A partner or child who isn't a New Zealand citizen needs their own visa",
        ],
        href: "/visas/other-visas/special-category-visa-444",
        tone: "match",
      },
      {
        id: "scv-build",
        title: "Stay on your SCV and build your 4 years",
        body: "Time on your SCV counts as permanent residence for citizenship from 1 July 2022, or from your grant date if your first SCV was granted later. After 4 years of [[lawful|lawful residence]] you can apply directly for citizenship, or apply for another permanent visa you qualify for, such as a skilled or partner visa.",
        watch: [
          "Keep time away to no more than 12 months in total, and no more than 90 days in the final 12 months",
          "The [[nz189|189 New Zealand stream]] is closed to new applications",
          "Some payments depend on being a [[protected|protected SCV holder]]",
        ],
        href: "/visas/other-visas/special-category-visa-444",
        tone: "match",
      },
      {
        id: "citizenship",
        title: "Australian citizenship by conferral",
        body: "SCV holders can apply directly for citizenship, without a permanent visa first. You need 4 years of [[lawful|lawful residence]] immediately before applying. Time away must be no more than 12 months in total, and no more than 90 days in the last 12 months.",
        watch: [
          "SCV time counts as permanent residence from 1 July 2022, or your grant date if later",
          "The general eligibility fee is A$595, or A$85 with a Pensioner Concession Card",
          "Good character and, for most adults, the citizenship test also apply",
        ],
        href: "/visas/other-visas/australian-citizenship-by-conferral",
        tone: "match",
      },
    ],
    footnote: "General information from Home Affairs as at 12 October 2026, not advice. Your character, health and full history decide each case.",
  },
};
