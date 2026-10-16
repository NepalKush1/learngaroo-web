import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the Skilled Work Regional (Provisional) visa
// (subclass 491). Every figure matches data/visas/skilled.ts (checked
// against Home Affairs on 12 October 2026). The A$4,890 second instalment
// is the figure on the page (from the Home Affairs 491 subsequent entrant
// page, re-read on 13 October 2026; the 491 main applicant page leaves the
// amount blank).

export const skilledWorkRegional491Explainer: VisaExplainer = {
  slug: "skilled-work-regional-visa-491",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A 5-year visa for skilled workers nominated by a state or sponsored by a relative in regional Australia. You live and work regionally, and after 3 years you can apply for permanent residence (subclass 191).",
  bigIdeas: [
    { title: "Nominated or family sponsored", body: "A state nominates you, or an eligible relative in a regional area sponsors you. Either adds 15 points.", icon: ICON.userGroup },
    { title: "Live and work regionally", body: "Condition 8579: you and your family live, work and study only in designated regional areas.", icon: ICON.mapPin },
    { title: "Permanent residence after 3 years", body: "Hold the 491 for 3 years, keep to its conditions and lodge tax returns, then apply for the 191.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Nomination or sponsor", value: "A state, or an eligible relative in a regional area", icon: ICON.userGroup },
    { label: "How long", value: "5 years from grant; it can't be extended", icon: ICON.clock },
    { label: "Where you live", value: "A designated regional area (condition 8579)", icon: ICON.mapPin },
    { label: "Your work", value: "Any job, any employer, in a regional area", icon: ICON.briefcase },
    { label: "Next step", value: "Subclass 191 permanent residence after 3 years", icon: ICON.home },
    { label: "Visa charge", value: "From A$6,140", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the skilled worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Reach 65 points with the nomination or sponsorship, then live and work in a [[dra|designated regional area]].",
      does: [
        "Get a [[skills-assessment|skills assessment]] and a competent English result",
        "Lodge an [[eoi|EOI]] for the 491 and apply within 60 days of an invitation",
        "Keep to [[c8579|condition 8579]] and report changes within 14 days",
        "Lodge a tax return every year, ready for the 191",
      ],
    },
    {
      id: "state",
      name: "The state or territory",
      short: "State",
      icon: ICON.mapPin,
      tone: "amber",
      role: "Nominates skilled workers for its regional areas under its own criteria.",
      does: [
        "Sets its own occupation list and criteria",
        "Nominates you in SkillSelect, which triggers the invitation",
        "Asks you to commit to living in that state",
      ],
    },
    {
      id: "relative",
      name: "Your eligible relative (sponsor)",
      short: "Relative",
      icon: ICON.users,
      tone: "pink",
      role: "Sponsors you instead of a state, from a [[dra|designated regional area]].",
      does: [
        "Is 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen",
        "Usually lives in a designated regional area",
        "Completes the subclass 491 sponsor declaration",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Issues invitations, approves family sponsorships and decides the visa.",
      does: [
        "Invites family-sponsored EOIs in rounds, ranked by points",
        "Approves a family sponsorship before grant",
        "Grants the visa with conditions 8578, 8579, 8580 and 8581",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "Your free [[eoi|EOI]] chooses the 491 and either state nomination or family sponsorship.",
    },
    {
      from: "state",
      to: "government",
      label: "State nominates you",
      detail: "A state nominates you for its regional areas. The nomination triggers your invitation.",
    },
    {
      from: "relative",
      to: "government",
      label: "Relative sponsors you",
      detail: "Family-sponsored EOIs are invited in departmental rounds. Your relative's declaration goes with your application, and Home Affairs must approve the sponsorship before grant.",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "You have 60 days from the invitation to apply, and that period can't be extended.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount with evidence for every claim and pay from A$6,140.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "A 5-year visa with [[c8579|condition 8579]]: you and your family live, work and study only in designated regional areas.",
    },
  ],
  journeyTitle: "From nomination to permanent residence in the regions",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "assess",
      short: "Assess",
      title: "Skills assessment, English and points",
      who: ["you"],
      description: "Get a positive [[skills-assessment|skills assessment]] and an approved English result, then check your points.",
      points: [
        "The assessment is valid for 3 years, or the shorter period stated on it",
        "At least competent English, from a secure test centre",
        "At least 65 points, including the 15 nomination or sponsorship points",
      ],
      youHold: "A skills assessment, an English result and a points estimate of 65 or more",
      cost: "Set by the assessor and the test provider, paid by you",
      icon: ICON.academicCap,
    },
    {
      id: "pathway",
      short: "Pathway",
      title: "Choose state nomination or family sponsorship",
      who: ["you", "state", "relative"],
      description: "Check each state's regional criteria and occupation list, or confirm your relative lives in a [[dra|designated regional area]] and meets the sponsor rules.",
      points: [
        "Eligible relatives include parents, siblings, aunts, uncles, grandparents and first cousins",
        "Use the regional postcode checker on this site",
        "No fee for family sponsorship; state fees are set by each state",
      ],
      youHold: "A state whose criteria you meet, or a relative willing to sponsor you",
      icon: ICON.users,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge an EOI in SkillSelect",
      who: ["you"],
      description: "Select the 491 in [[skillselect|SkillSelect]] and indicate nomination or sponsorship. Lodge any separate state application too.",
      points: [
        "No charge, and no documents uploaded",
        "Keep a valid visa while you wait: an EOI gives no bridging visa",
      ],
      youHold: "An EOI with an indicative score of at least 65 points",
      icon: ICON.pencilSquare,
    },
    {
      id: "invite",
      short: "Invite",
      title: "Nomination or invitation round",
      who: ["state", "government"],
      description: "A state nomination triggers an invitation. Family-sponsored EOIs are invited in departmental rounds, ranked by points and [[date-of-effect|date of effect]].",
      points: [
        "You must not have turned 45 when invited",
        "One EOI can't be invited more than twice",
        "The invitation states the points you must prove",
      ],
      youHold: "An invitation to apply",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Open the invitation, select Apply for visa and lodge in ImmiAccount, with the sponsor declaration if a relative sponsors you.",
      points: [
        "A$6,140 for you, plus a charge for each family member",
        "In Australia you need a [[substantive-visa|substantive visa]] or a Bridging visa A, B or C",
        "You're usually granted a [[bva|Bridging visa A]] if you apply in Australia",
      ],
      youHold: "A lodged application with a transaction reference number",
      cost: "From A$6,140, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Sponsorship approval and checks",
      who: ["government", "you"],
      description: "Home Affairs must approve a family sponsorship before grant, and may ask for health examinations, biometrics or more information.",
      points: [
        "Reply to requests within the time given",
        "Everyone in the application must meet health and character requirements",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "An approved sponsorship (if family sponsored) and a complete file",
      icon: ICON.shieldCheck,
    },
    {
      id: "region",
      short: "Region",
      title: "Live, work and study in a regional area",
      who: ["you"],
      description: "From grant, you and your family live, work and study only in [[dra|designated regional areas]]. You can work in any job for any employer there.",
      points: [
        "The regional list on your grant date keeps applying to you",
        "Report changes within 14 days ([[c8578|condition 8578]])",
        "Keep leases, payslips and bills, and lodge a tax return every year",
      ],
      youHold: "3 years of regional residence and ATO notices of assessment",
      icon: ICON.mapPin,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence through the 191",
      who: ["you", "government"],
      description: "Once you've held the 491 for 3 years, you can apply for the 191. You need to have met your conditions and hold [[noa|notices of assessment]] for 3 of the 5 income years.",
      points: [
        "Home Affairs states there is no minimum income requirement",
        "Apply before the 491 ends: it can't be extended",
        "From 3 years you can also be granted a 189 or 190, if eligible",
      ],
      youHold: "Permanent residence",
      cost: "A$630 for the 191 (from 1 July 2026)",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: confirm your pathway, your exact points and that your area is a designated regional area.",
    },
    disclaimer: "A general self-check, not advice or a prediction. State criteria, your sponsor and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "pathway",
      topic: "Nomination or sponsor",
      question: "Do you have a state nomination path or an eligible relative to sponsor you?",
      options: [
        { value: "state", label: "A state nominates my occupation for its regional areas, and I meet its criteria", status: "ok", note: "A state nomination triggers your invitation and earns 15 points." },
        {
          value: "relative",
          label: "A relative in a regional area will sponsor me",
          status: "ok",
          note: "Your relative must be 18 or over, an Australian citizen, permanent resident or eligible New Zealand citizen, and usually live in a designated regional area.",
        },
        {
          value: "unsure",
          label: "I'm not sure my relative counts",
          status: "todo",
          note: "Eligible relatives are your (or your partner's) parent, child or step-child, sibling, aunt or uncle, niece or nephew, grandparent or first cousin.",
        },
        {
          value: "neither",
          label: "Neither yet",
          status: "stop",
          note: "The 491 needs one of the two. Check which states nominate your occupation for regional areas.",
          link: { label: "State nomination guide", href: "/state-nomination" },
        },
      ],
    },
    {
      id: "regional",
      topic: "Living regionally",
      question: "Will you and your family live, work and study only in a designated regional area?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Condition 8579 requires exactly that, for every family member on the visa." },
        {
          value: "city",
          label: "I'd want to live in Sydney, Melbourne or Brisbane",
          status: "stop",
          note: "Those cities aren't designated regional areas. Living or working there breaches condition 8579 and stops a 191.",
        },
        {
          value: "unsure",
          label: "I'm not sure my area counts",
          status: "todo",
          note: "Check the suburb before you move. Cities such as Perth, Adelaide, Hobart, Canberra and the Gold Coast count.",
          link: { label: "Regional postcode checker", href: "/tools/regional-postcode-checker" },
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
          note: "You must be invited before your 45th birthday. If you turn 45 during the 60 days after an invitation, you can still apply.",
        },
        {
          value: "over",
          label: "45 or older",
          status: "stop",
          note: "You can't be invited for a 491 at 45 or over. Another kind of visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "points",
      topic: "Points",
      question: "Before nomination or sponsorship, how many points do you score?",
      options: [
        { value: "enough", label: "50 or more", status: "ok", note: "With the 15 nomination or sponsorship points, you reach the 65 pass mark." },
        {
          value: "below",
          label: "Under 50",
          status: "stop",
          note: "You'd stay below 65 even with the 15 points. More English, work or study points may close the gap.",
          link: { label: "Points test explained", href: "/visas/skilled/skilled-migration-points-test" },
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
          note: "An assessment issued for a subclass 485 visa isn't suitable for the 491. You'll need a full assessment.",
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
          note: "A passport from one of these countries meets the requirement.",
        },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Book an approved test at a secure test centre.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "family",
      topic: "Family",
      question: "Is anyone coming with you?",
      options: [
        { value: "alone", label: "Just me", status: "ok", note: "Nothing extra to plan for." },
        {
          value: "family",
          label: "My partner or children, with any adults having functional English",
          status: "ok",
          note: "Include them when you lodge. They'll hold the same regional condition.",
        },
        {
          value: "noenglish",
          label: "An adult without functional English",
          status: "todo",
          note: "Each applicant 18 or over without functional English attracts a second instalment of A$4,890 before grant.",
          link: { label: "Add it in the fee estimator", href: "#fees" },
        },
        {
          value: "later",
          label: "Family will join me later",
          status: "ok",
          note: "Partners and children can apply later as subsequent entrants while your visa is valid. They pay the same base charge, and their visa ends when yours does.",
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
          note: "Section 48 still lets you apply for a 491 in Australia. You must hold a substantive visa or a Bridging visa A, B or C when you apply.",
          link: { label: "The section 48 bar", href: "/visas/appeals-and-review/section-48-bar" },
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
  ],
  myths: [
    {
      myth: "On a 491 I can live anywhere in my state.",
      fact: "No. Condition 8579 means you live, work and study only in a designated regional area. Sydney, Melbourne and Brisbane aren't included; cities such as Perth, Adelaide, Hobart, Canberra and the Gold Coast are.",
    },
    {
      myth: "My family can live in the city while I work regionally.",
      fact: "Condition 8579 applies to every family member on the visa, not just you.",
    },
    {
      myth: "If my area drops off the regional list, I'm in breach.",
      fact: "The list that applied on your grant date continues to apply to you, even if the list changes later.",
    },
    {
      myth: "I need a minimum income to get the 191.",
      fact: "On 12 October 2026 Home Affairs stated there is no minimum income requirement. You must provide ATO notices of assessment for 3 income years out of the 5 years of your visa.",
    },
    {
      myth: "I can extend my 491 if the 191 isn't ready.",
      fact: "The 491 can't be extended. If you lodge the 191 in Australia, you're usually granted a bridging visa that starts when the 491 ends.",
    },
    {
      myth: "I can switch to a partner visa or a 190 whenever I like.",
      fact: "Until you've held the 491 for 3 years, you can't be granted a 186, 188, 189, 190 or 858 visa. You also can't make a valid 820 partner visa application.",
    },
    {
      myth: "Family sponsorship lets me skip the points test.",
      fact: "No. A family-sponsored applicant still needs 65 points, including the 15 for sponsorship, and family-sponsored EOIs compete on points in departmental invitation rounds.",
    },
  ],
  roles: [
    {
      id: "applicant",
      label: "I'm applying",
      intro: "Your part is the points, the evidence, and keeping to the regional conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Get a skills assessment and a competent English result",
            "Check you reach 65 points with the 15 nomination or sponsorship points",
            "Confirm where you'll live is a designated regional area",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge in ImmiAccount within 60 days of the invitation",
            "Attach your relative's sponsor declaration if you're family sponsored",
            "Pay A$6,140, plus a charge for each family member",
          ],
        },
        {
          title: "Once it's granted",
          items: [
            "Live, work and study only in designated regional areas ([[c8579|condition 8579]])",
            "Report changes of address, contact details, passport or employer within 14 days",
            "Lodge a tax return every year, ready for the 191",
          ],
        },
      ],
    },
    {
      id: "sponsor",
      label: "I'm the relative sponsoring",
      tone: "pink",
      intro: "Your part is showing you're an eligible relative who usually lives in a [[dra|designated regional area]].",
      groups: [
        {
          title: "Who can sponsor",
          items: [
            "You're 18 or over",
            "You're an Australian citizen, permanent resident or eligible New Zealand citizen",
            "You're the applicant's (or their partner's) parent, child or step-child, sibling, aunt or uncle, niece or nephew, grandparent or first cousin",
          ],
        },
        {
          title: "What you provide",
          items: [
            "The completed subclass 491 sponsor declaration",
            "Your citizenship certificate or passport bio page",
            "Proof you live in the regional area, such as a driver's licence, lease or mortgage papers and utility bills",
            "Birth, marriage, adoption or family certificates showing the relationship",
          ],
        },
        {
          title: "Good to know",
          items: [
            "Home Affairs must approve the sponsorship before the visa is granted",
            "There's no fee for family sponsorship",
            "Once granted, the visa holder isn't tied to your area, only to designated regional areas",
          ],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect, where you choose the 491 and state nomination or family sponsorship. It isn't a visa application and gives no bridging visa.",
    },
    { id: "skillselect", term: "SkillSelect", definition: "The Home Affairs online system where you lodge an EOI, where states record nominations and where invitations are issued." },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for your occupation that your skills are suitable. It must be valid when you're invited: 3 years from issue, or a shorter period stated on it.",
    },
    {
      id: "dra",
      term: "Designated regional area",
      definition: "All of Australia except Sydney, Melbourne and Brisbane. Category 2 covers cities and major regional centres, such as Perth, Adelaide, Canberra, Hobart and the Gold Coast. Category 3 covers regional centres and other regional areas.",
    },
    {
      id: "c8579",
      term: "Condition 8579",
      definition: "You must live, work and study only in an area that was a designated regional area on the date your visa was granted. It applies to every family member on the visa.",
    },
    {
      id: "c8578",
      term: "Condition 8578",
      definition: "You must tell Home Affairs within 14 days if your address, email, phone number, passport, employer's address or work address changes while you're in Australia.",
    },
    { id: "c8580", term: "Condition 8580", definition: "If asked in writing, you must give evidence of where you live, work and study within 28 days." },
    { id: "c8581", term: "Condition 8581", definition: "If asked in writing, you must attend an interview with Home Affairs, in person, by phone or online." },
    {
      id: "date-of-effect",
      term: "Date of effect",
      definition: "The date your EOI reached its current points score. In a departmental round, equal scores are ranked by it.",
    },
    {
      id: "noa",
      term: "Notice of assessment",
      definition: "The ATO's assessment of the tax return you lodge for an income year. The 191 needs notices for 3 income years out of the 5 years of your 491.",
    },
    {
      id: "subsequent-entrant",
      term: "Subsequent entrant",
      definition: "A partner or child who applies to join you after your 491 is granted. They pay the same base charge, hold the same regional condition, and their visa ends when yours does.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "The English level each adult family member needs. Without it, you pay a second instalment of A$4,890 for that person before grant.",
    },
    { id: "substantive-visa", term: "Substantive visa", definition: "Any visa other than a bridging visa or a few special-purpose visas, such as a student, graduate or work visa." },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A bridging visa usually granted when you apply in Australia. It keeps you lawful while your application is processed.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information and bogus documents, including in the nomination. A breach leads to refusal and a 3-year bar.",
    },
  ],
  cta: {
    subtitle: "We check your points, pathway and regional plans against these rules, tell you honestly where you stand, and prepare your EOI and visa application with you.",
  },
  finder: skilledFinder,
  points: { visa: "491" },
  fees: {
    variants: [
      {
        id: "standard",
        label: "Skilled Work Regional visa (subclass 491)",
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
        amount: 4890,
        per: "adult",
      },
    ],
    notIncluded:
      "Not included: state nomination fees, the skills assessment, English test, health examinations, police certificates, biometrics, translations and the later subclass 191 application.",
    notes: [
      "The second instalment applies to each applicant 18 or over without functional English, and only when Home Affairs is ready to grant.",
      "Family members who join you later as subsequent entrants pay the same base charge.",
      "The 191 later costs A$630 for you, A$315 for each adult and A$160 for each child (charges from 1 July 2026).",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: {
    navLabel: "Your dates",
    eyebrow: "Timeline",
    title: "Your 491 dates, from the grant",
    highlight: "491 dates",
    subtitle: "Pick the month your 491 was granted (or might be) to see your earliest 191 date and when the visa ends.",
    startLabel: "491 granted",
    startPrompt: "When was your 491 granted?",
    milestones: [
      {
        months: 36,
        label: "Earliest subclass 191 application",
        detail: "You've held the 491 for 3 years. If you've kept to [[c8579|condition 8579]] and your other conditions, and have [[noa|notices of assessment]] for 3 income years, you can apply for the 191. From now you can also be granted a 189 or 190, if you meet their rules.",
        kind: "goal",
      },
      {
        months: 60,
        label: "Your 491 ends",
        detail: "The 491 lasts 5 years from grant and can't be extended. If you lodge the 191 in Australia before this date, you're usually granted a bridging visa that starts when the 491 ends.",
        kind: "end",
      },
    ],
    footnote: "Counted from the grant date. Check the exact dates on your grant letter, and lodge the 191 well before the 491 ends.",
  },
};
