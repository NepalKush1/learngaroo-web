import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the Skilled Nominated visa (subclass 190).
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The second instalment of A$4,885 was re-read on the
// Home Affairs 190 page on 13 October 2026 ("The second instalment charge
// for family members is AUD4,885"), so it is modelled as a per-adult add-on.

const HA_190 = "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190";

export const skilledNominated190Explainer: VisaExplainer = {
  slug: "skilled-nominated-visa-190",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for skilled workers nominated by an Australian state or territory. The nomination adds 5 points towards the 65-point pass mark, and you apply within 60 days of the invitation that follows.",
  bigIdeas: [
    { title: "A state picks you", body: "A state or territory nominates you under its own criteria, and that triggers your invitation.", icon: ICON.mapPin },
    { title: "Nomination adds 5 points", body: "60 points of your own plus 5 for the nomination reaches the 65-point pass mark.", icon: ICON.chartBar },
    { title: "Permanent from grant", body: "No regional condition on the visa, though states ask you to honour your commitment to them.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who nominates you", value: "A state or territory government", icon: ICON.buildingLibrary },
    { label: "Points needed", value: "65, including 5 for the nomination", icon: ICON.chartBar },
    { label: "Age", value: "Under 45 when you're invited", icon: ICON.calendarDays },
    { label: "How long", value: "Permanent, with a 5-year travel facility", icon: ICON.clock },
    { label: "Family", value: "Partner and children can be included", icon: ICON.users },
    { label: "Visa charge", value: "From A$6,140", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the skilled worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Meet the visa rules and the state's criteria, then prove every claim when you're invited.",
      does: [
        "Get a [[skills-assessment|skills assessment]] and a competent English result",
        "Lodge an [[eoi|EOI]] choosing the 190 and the states you'd like",
        "Apply to the state through its own process, if it has one",
        "Apply within 60 days of an invitation and pay from A$6,140",
      ],
    },
    {
      id: "state",
      name: "The state or territory",
      short: "State",
      icon: ICON.mapPin,
      tone: "amber",
      role: "Chooses who to [[state-nomination|nominate]] under its own criteria.",
      does: [
        "Publishes its own occupation list, criteria and fees",
        "Reviews EOIs and its own nomination applications",
        "Nominates you in SkillSelect, which triggers the invitation",
        "Can withdraw a nomination: after you apply, that makes your application invalid",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Issues the invitation once a state nominates you, then decides the visa.",
      does: [
        "Runs [[skillselect|SkillSelect]] and emails your invitation",
        "Checks every points claim, your health and character",
        "Grants or refuses the visa in writing",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "You lodge a free [[eoi|EOI]] in [[skillselect|SkillSelect]], choose the 190 and pick the states you'd like to consider you.",
    },
    {
      from: "you",
      to: "state",
      label: "You apply to the state",
      detail: "Most states also need a separate application through their own portal. Any fee is set by the state.",
    },
    {
      from: "state",
      to: "government",
      label: "State nominates you",
      detail: "The state records its nomination in SkillSelect. State nominations aren't limited by invitation rounds or [[occupation-ceiling|occupation ceilings]].",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "Home Affairs emails your invitation. You have 60 days to apply, and that period can't be extended.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount with evidence for every claim and pay from A$6,140. You don't need to attach the nomination.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Permanent residence starts on grant if you're in Australia, or when you first enter if you're outside.",
    },
  ],
  journeyTitle: "From state nomination to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "assess",
      short: "Assess",
      title: "Skills assessment and English test",
      who: ["you"],
      description: "Get a positive [[skills-assessment|skills assessment]] for your occupation and an approved English result. Both must be valid when you're invited.",
      points: [
        "The assessment is valid for 3 years, or the shorter period stated on it",
        "At least [[competent-english|competent English]], from a secure test centre",
        "An assessment issued for a subclass 485 visa doesn't count",
      ],
      youHold: "A skills assessment and a competent English result",
      cost: "Set by the assessor and the test provider, paid by you",
      icon: ICON.academicCap,
    },
    {
      id: "state",
      short: "State",
      title: "Choose a state and check its criteria",
      who: ["you", "state"],
      description: "Each state publishes its own occupation list, points expectations, residence or work rules and fees. They change during the program year.",
      points: [
        "Some states nominate people living overseas; others only people already working there",
        "State lists are usually narrower than the Home Affairs list",
        "Use the state nomination guide on this site",
      ],
      youHold: "A target state whose current criteria you meet",
      icon: ICON.mapPin,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge an EOI and apply to the state",
      who: ["you", "state"],
      description: "Select the 190 and your states in [[skillselect|SkillSelect]], then lodge the state's own application if it needs one.",
      points: [
        "You need at least 65 points, including the 5 nomination points",
        "Some states charge no fee; others charge several hundred dollars",
        "An EOI gives you no bridging visa, so keep a valid visa",
      ],
      youHold: "An EOI and a state nomination application",
      cost: "Any state fee, set by the state",
      icon: ICON.pencilSquare,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The state nominates you",
      who: ["state", "government"],
      description: "If the state nominates you, it's recorded in SkillSelect and Home Affairs emails your invitation.",
      points: [
        "Not limited by invitation rounds or [[occupation-ceiling|occupation ceilings]]",
        "You won't be invited if you turn 45 while waiting for a nomination",
        "Your invitation states the points score you must prove",
      ],
      youHold: "An invitation to apply",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Open the invitation, select Apply for visa and lodge in ImmiAccount with documents for every claim.",
      points: [
        "A$6,140 for you, plus a charge for each family member",
        "You don't attach the nomination: Home Affairs sees it in SkillSelect",
        "In Australia you need a [[substantive-visa|substantive visa]] or a Bridging visa A, B or C",
      ],
      youHold: "A lodged application and, in Australia, usually a Bridging visa A",
      cost: "From A$6,140, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and requests",
      who: ["government", "you"],
      description: "Do any health examinations or biometrics Home Affairs asks for, and reply to requests within the time given.",
      points: [
        "There is no health waiver for this subclass",
        "Police certificates for each country where you spent 12 months or more in the last 10 years since turning 16",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A complete file, with health examinations done",
      icon: ICON.shieldCheck,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "If the visa is granted, you're a permanent resident from grant (in Australia) or your first entry (outside Australia).",
      points: [
        "No visa condition ties you to the nominating state",
        "States ask you to honour the commitment you made to them",
        "Travel freely for 5 years, then use a [[rrv|Resident Return visa]]",
      ],
      youHold: "Permanent residence",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: confirm a state's current criteria, your exact points and your evidence.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Each state's criteria and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "state",
      topic: "State nomination",
      question: "Does a state or territory nominate your occupation, and do you meet its criteria?",
      options: [
        { value: "yes", label: "Yes, my occupation is on its list and I meet its criteria", status: "ok", note: "A state nomination is what triggers the 190 invitation." },
        {
          value: "partly",
          label: "It's on a list, but I don't meet every criterion yet",
          status: "todo",
          note: "Check the residence, work or job offer rules closely. Criteria and allocations change during the program year.",
          link: { label: "State nomination guide", href: "/state-nomination" },
        },
        {
          value: "no",
          label: "No state lists it right now",
          status: "stop",
          note: "Without a nomination there's no 190. The 189 or the regional 491 may still fit.",
          link: { label: "Which skilled visa fits?", href: "#finder" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Each state sets its own occupation list and criteria. Start with the state nomination guide.",
          link: { label: "State nomination guide", href: "/state-nomination" },
        },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you're invited?",
      options: [
        { value: "under", label: "Under 45", status: "ok", note: "You meet the age rule. You can still apply if you turn 45 during the 60 days." },
        {
          value: "close",
          label: "Under 45 now, but my 45th birthday is coming up",
          status: "todo",
          note: "You won't be invited if you turn 45 while your EOI is waiting for a nomination.",
        },
        {
          value: "over",
          label: "45 or older",
          status: "stop",
          note: "You can't be invited for a 190 at 45 or over. Another kind of visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "points",
      topic: "Points",
      question: "Before the nomination, how many points do you score?",
      options: [
        { value: "enough", label: "60 or more", status: "ok", note: "With 5 nomination points you reach the 65 pass mark. Some states expect more." },
        {
          value: "below",
          label: "Under 60",
          status: "stop",
          note: "That's too few for a 190. A 491 nomination or family sponsorship is worth 15 points instead.",
          link: { label: "Skilled Work Regional visa (491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Work it out with the points calculator on this page.", link: { label: "Open the points calculator", href: "#points" } },
      ],
    },
    {
      id: "skills",
      topic: "Skills assessment",
      question: "Do you have a positive skills assessment that will be valid when you're invited?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Your assessment must be valid on the invitation date: 3 years from issue, or the shorter period stated on it." },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Apply to the assessing authority listed for your occupation.",
          link: { label: "How skills assessments work", href: "/visas/skilled/skills-assessment-for-migration" },
        },
        {
          value: "485",
          label: "Only one issued for a 485 visa",
          status: "todo",
          note: "An assessment issued for a subclass 485 visa isn't suitable for the 190. You'll need a full assessment.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Do you have at least competent English?",
      options: [
        { value: "yes", label: "Yes, from a test at a secure test centre", status: "ok", note: "Meets the requirement, if the result is still valid when you're invited." },
        {
          value: "passport",
          label: "I hold a UK, Irish, US, Canadian or New Zealand passport",
          status: "ok",
          note: "A valid passport from one of these countries meets the requirement.",
        },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Book an approved test at a secure test centre. Online tests aren't accepted.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from outside Australia." },
        { value: "onshore", label: "In Australia, holding a visa or a Bridging visa A, B or C", status: "ok", note: "You can apply in Australia. You're usually granted a Bridging visa A." },
        {
          value: "s48",
          label: "In Australia after a visa refusal or cancellation (section 48)",
          status: "todo",
          note: "Section 48 still lets you apply for a 190 in Australia. You must hold a substantive visa or a Bridging visa A, B or C when you apply.",
          link: { label: "The section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
        },
        {
          value: "491",
          label: "On a 491 or 494 I've held for under 3 years",
          status: "stop",
          note: "A current or last-held 491 or 494 must have been held for at least 3 years before you apply.",
        },
        {
          value: "novisa",
          label: "In Australia with no visa, or a bridging visa other than A, B or C",
          status: "stop",
          note: "The application wouldn't be valid. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "family",
      topic: "Family English",
      question: "Will any adult in your application lack functional English?",
      options: [
        { value: "no", label: "No, or no other adults are included", status: "ok", note: "No second instalment for your family." },
        {
          value: "yes",
          label: "Yes, one or more",
          status: "todo",
          note: "Each applicant 18 or over without functional English attracts a second instalment of A$4,885, payable before grant.",
          link: { label: "Add it in the fee estimator", href: "#fees" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns for you or your family?",
      options: [
        { value: "clear", label: "No concerns", status: "ok", note: "Everyone included will still need health examinations and police certificates if asked." },
        {
          value: "concern",
          label: "A significant health condition, or a criminal record",
          status: "todo",
          note: "There's no health waiver for the 190, so get advice before you apply.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Once a state nominates me, the visa is certain.",
      fact: "No. The nomination triggers your invitation, but Home Affairs still checks every points claim, your health and character. If the state withdraws its nomination after you apply, the application becomes invalid.",
    },
    {
      myth: "The 190 forces me to live in the nominating state.",
      fact: "The visa has no condition tying you to the state. But states ask nominees to commit to living and working there for a period, so check what you agreed to before you move.",
    },
    {
      myth: "I need to attach my state nomination.",
      fact: "No. The state records it in SkillSelect and Home Affairs links it to your invitation. Keep the state's approval letter for your records.",
    },
    {
      myth: "Every state uses the same occupation list.",
      fact: "Each state and territory sets its own occupation list, criteria and fees, and they can change during the program year. State lists are usually narrower than the Home Affairs list.",
    },
    {
      myth: "190 invitations come in the same rounds as the 189.",
      fact: "No. A state nomination triggers the invitation, so it isn't limited by departmental invitation rounds or occupation ceilings.",
    },
    {
      myth: "After a refusal in Australia, I can't apply for a 190 onshore.",
      fact: "The 190 is one of the visas you can still apply for in Australia if section 48 bars you. You must hold a substantive visa or a Bridging visa A, B or C when you apply.",
    },
    {
      myth: "My partner needs competent English too.",
      fact: "No. Adult family members need functional English, or you pay a second instalment of A$4,885 for each one who doesn't have it, before grant.",
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect. States view EOIs to choose who to nominate. It isn't a visa application and gives you no bridging visa.",
    },
    { id: "skillselect", term: "SkillSelect", definition: "The Home Affairs online system where you lodge an EOI, where states record nominations, and where invitations are issued." },
    {
      id: "state-nomination",
      term: "State nomination",
      definition: "A state or territory government agency choosing you under its own criteria. It adds 5 points while it stays in effect, and it triggers your invitation.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for your occupation that your skills are suitable. It must be valid when you're invited: 3 years from issue, or a shorter period stated on it.",
    },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "The minimum English level for the 190. You show it with an approved test taken at a secure test centre, or a valid passport from the UK, Ireland, the US, Canada or New Zealand.",
    },
    {
      id: "occupation-ceiling",
      term: "Occupation ceiling",
      definition: "A limit on invitations in large occupation groups in departmental rounds. It doesn't apply to state nominations.",
    },
    { id: "pass-mark", term: "Pass mark", definition: "The minimum points score, 65, set by LIN 19/210. For the 190 it includes the 5 nomination points." },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "The English level each adult family member needs. Without it, you pay a second instalment of A$4,885 for that person before grant.",
    },
    {
      id: "second-instalment",
      term: "Second instalment",
      definition: "A charge of A$4,885 for each applicant 18 or over without functional English, payable only when Home Affairs is ready to grant.",
    },
    { id: "substantive-visa", term: "Substantive visa", definition: "Any visa other than a bridging visa or a few special-purpose visas, such as a student, graduate or work visa." },
    {
      id: "s48",
      term: "Section 48 bar",
      definition: "A rule that stops most visa applications in Australia after a refusal or cancellation. The 190 is one of the visas that can still be applied for.",
    },
    {
      id: "rrv",
      term: "Resident Return visa",
      full: "Subclass 155 or 157",
      definition: "The visa a permanent resident needs to re-enter Australia once the 5-year travel facility from grant has ended.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents, including in the state nomination. A breach leads to refusal and a 3-year bar.",
    },
  ],
  verifiedExtras: [
    {
      fact: "The Home Affairs Visa Pricing Estimator does not include the second instalment or other costs.",
      source: HA_190,
    },
  ],
  cta: {
    subtitle: "We check your points, evidence and state options against these rules, tell you honestly where you stand, and prepare your EOI, state application and visa application with you.",
  },
  finder: skilledFinder,
  points: { visa: "190" },
  fees: {
    variants: [
      {
        id: "standard",
        label: "Skilled Nominated visa (subclass 190)",
        primary: [{ label: "Base application charge", amount: 6140 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
    ],
    maxAdults: 4,
    maxChildren: 6,
    addOns: [
      {
        id: "second-instalment",
        label: "Second instalment for each other adult without functional English",
        hint: "Payable only when Home Affairs is ready to grant",
        amount: 4885,
        per: "adult",
      },
    ],
    notIncluded:
      "Not included: state nomination fees, the skills assessment, English test, health examinations, police certificates, biometrics and translations.",
    notes: [
      "The second instalment applies to each applicant 18 or over without functional English, and only when Home Affairs is ready to grant.",
      "The Home Affairs Visa Pricing Estimator doesn't include the second instalment, so add it here if it applies.",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
      "The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
