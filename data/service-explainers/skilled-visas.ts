import type { ServiceExplainer } from "./types";
import { ICON } from "../visas/explainers/icons";
import { skilledFinder } from "../visas/explainers/skilled/skilled-finder";
import { skilledWorkRegional491Explainer } from "../visas/explainers/skilled/skilled-work-regional-visa-491";

// Interactive explainer for /services/skilled-visas: the points-tested
// subclass 189, 190 and 491 visas, and the 491's road to the 191. Every
// figure is on the library pages in `pages` (data/visas/skilled.ts, checked
// against Home Affairs on 12 October 2026) or in `verifiedExtras` (read on
// the Home Affairs pages named there on 13 October 2026). The second
// instalment differs by visa (A$4,885 for the 190, A$4,890 for the 491, not
// displayed for the 189), so the fee estimator explains it in its notes
// rather than adding it to the total.

const HA = "https://immi.homeaffairs.gov.au";
const regionalTimeline = skilledWorkRegional491Explainer.timeline;

export const skilledVisasServiceExplainer: ServiceExplainer = {
  slug: "skilled-visas",
  factsAsAt: "13 October 2026",
  pages: [
    "skilled-independent-visa-189",
    "skilled-nominated-visa-190",
    "skilled-work-regional-visa-491",
    "permanent-residence-skilled-regional-visa-191",
    "skilled-migration-points-test",
    "skillselect-expression-of-interest",
    "skills-assessment-for-migration",
  ],
  name: "skilled visa route",
  accent: "Subclasses 189, 190 and 491",
  oneLiner:
    "The points-tested visas for skilled workers under 45: the 189 needs no sponsor, the 190 needs a state nomination, and the regional 491 can lead to permanent residence through the 191.",
  bigIdeas: [
    {
      title: "Points decide who's invited",
      body: "You need at least 65 points for age, English, work and study. Rounds invite the highest-ranked expressions of interest first.",
      icon: ICON.chartBar,
    },
    {
      title: "A nomination adds points",
      body: "A state nomination adds 5 points for a 190. A state, or an eligible relative in a regional area, adds 15 for a 491.",
      icon: ICON.mapPin,
    },
    {
      title: "Permanent now, or regional first",
      body: "The 189 and 190 are permanent from grant. The 491 lasts 5 years and can lead to permanent residence through the 191.",
      icon: ICON.home,
    },
  ],
  heroCard: [
    { label: "Who it's for", value: "Skilled workers under 45 when invited", icon: ICON.user },
    { label: "Points needed", value: "65, including any nomination points", icon: ICON.chartBar },
    { label: "Before you start", value: "A skills assessment and competent English", icon: ICON.academicCap },
    { label: "How you apply", value: "Expression of interest, then 60 days once invited", icon: ICON.envelope },
    { label: "How long", value: "189 and 190 permanent; 491 for 5 years", icon: ICON.clock },
    { label: "Visa charge", value: "From A$6,135 (189) or A$6,140 (190, 491)", icon: ICON.currencyDollar },
  ],
  compare: {
    navLabel: "Compare",
    eyebrow: "Side by side",
    title: "The 189, 190 and 491 side by side",
    highlight: "side by side",
    subtitle: "The same points test, three different deals. Compare who chooses you, where you live and what comes next.",
    rows: [
      { label: "Who chooses you", icon: ICON.user },
      { label: "Nomination points", icon: ICON.chartBar },
      { label: "How long it lasts", icon: ICON.clock },
      { label: "Where you live and work", icon: ICON.mapPin },
      { label: "Government fee", icon: ICON.currencyDollar },
      { label: "Next step", icon: ICON.home },
    ],
    columns: [
      {
        page: "skilled-independent-visa-189",
        name: "Subclass 189",
        tagline: "Permanent, no sponsor needed",
        values: [
          "Home Affairs, in invitation rounds ranked by points",
          "None: you need 65 points of your own",
          "Permanent from grant",
          "Anywhere in Australia",
          "A$6,135 for the main applicant",
          "Citizenship once you meet the residence requirement",
        ],
        bestFor: "Strong scores in an occupation on the 189 list, with no state ties",
      },
      {
        page: "skilled-nominated-visa-190",
        name: "Subclass 190",
        tagline: "Permanent, state nominated",
        values: [
          "A state or territory nominates you, which triggers the invitation",
          "5 points, so 60 of your own can reach 65",
          "Permanent from grant",
          "Anywhere: no visa condition, but the state asks for a commitment",
          "A$6,140 for the main applicant, plus any state fee",
          "Citizenship once you meet the residence requirement",
        ],
        bestFor: "An occupation a state wants, and you're ready to commit to that state",
      },
      {
        page: "skilled-work-regional-visa-491",
        name: "Subclass 491",
        tagline: "5 years regional, then permanent",
        values: [
          "A state nominates you, or an eligible relative in a regional area sponsors you",
          "15 points, so 50 of your own can reach 65",
          "5 years from grant; it can't be extended",
          "Only designated regional areas, for you and your family",
          "A$6,140 for the main applicant, plus any state fee",
          "Permanent residence through the 191 after 3 years",
        ],
        bestFor: "Lower scores, and happy to live outside Sydney, Melbourne and Brisbane",
      },
    ],
    footnote:
      "Charges are for the main applicant, from 1 July 2026. All three visas need an age under 45 when you're invited, a suitable skills assessment and at least competent English.",
  },
  actors: [
    {
      id: "you",
      name: "You (the skilled worker)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Build your points, lodge an [[eoi|EOI]] and prove every claim if you're invited.",
      does: [
        "Get a [[skills-assessment|skills assessment]] and an English result",
        "Lodge a free EOI in [[skillselect|SkillSelect]] with at least 65 points",
        "Apply within 60 days of an invitation and pay the visa charge",
        "Prove every points claim with documents",
      ],
    },
    {
      id: "authority",
      name: "The assessing authority",
      short: "Assessor",
      icon: ICON.clipboardDocumentCheck,
      tone: "teal",
      role: "Checks your qualifications and experience against the standard for your occupation.",
      does: [
        "Is the body listed for your nominated occupation",
        "Sets its own procedures, evidence rules and fees",
        "Issues an assessment valid for 3 years, or a shorter period stated on it",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Runs [[skillselect|SkillSelect]], issues invitations and decides the visa.",
      does: [
        "Invites the highest-ranked EOIs for the 189 and family-sponsored 491",
        "Issues the invitation once a state nominates you",
        "Checks every points claim, your health and character",
        "Grants or refuses the visa in writing",
      ],
    },
    {
      id: "state",
      name: "The state or territory",
      short: "State",
      icon: ICON.mapPin,
      tone: "amber",
      role: "Chooses who to [[state-nomination|nominate]] for the 190 and 491, under its own criteria.",
      does: [
        "Publishes its own occupation list, criteria and fees",
        "Nominates you in SkillSelect, which triggers your invitation",
        "Asks nominees to commit to living and working there",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "authority",
      label: "You get assessed",
      detail: "You apply to the [[assessing-authority|assessing authority]] for your occupation. A positive assessment must still be valid when you're invited.",
    },
    {
      from: "you",
      to: "government",
      label: "You lodge an EOI",
      detail: "Your free [[eoi|EOI]] lists your claims and the visas you want. For a 190 or 491 you also pick the states that can consider you.",
    },
    {
      from: "you",
      to: "state",
      label: "You apply to a state",
      detail: "Most states also need their own application, and any fee is set by the state. For a 491, an eligible relative in a regional area can sponsor you instead.",
    },
    {
      from: "state",
      to: "government",
      label: "State nominates you",
      detail: "The state records its nomination in SkillSelect, which triggers your invitation. State nominations aren't limited by invitation rounds or [[occupation-ceiling|occupation ceilings]].",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "Home Affairs invites the highest-ranked EOIs in rounds, or invites you once a state nominates you. You then have 60 days to apply.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge in ImmiAccount with documents for every claim. If granted, the 189 and 190 are permanent; the 491 is a 5-year regional visa.",
    },
  ],
  journeyTitle: "From skills assessment to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "points",
      short: "Points",
      title: "Check your occupation and points",
      who: ["you"],
      description: "Find your occupation on the lists for the 189, 190 or 491, then work out your score as at a likely invitation date.",
      points: [
        "You need at least 65 points, including any [[nomination-points|nomination points]]",
        "You must be under 45 when you're invited",
        "Try the visa finder and the points calculator on this page",
      ],
      youHold: "An occupation, a target visa and an estimated score",
      icon: ICON.calculator,
    },
    {
      id: "assess",
      short: "Assess",
      title: "Skills assessment and English test",
      who: ["you", "authority"],
      description: "Apply to the [[assessing-authority|assessing authority]] for your occupation, and sit an approved English test at a secure test centre.",
      points: [
        "The assessment is valid for 3 years, or the shorter period stated on it",
        "An assessment issued for a subclass 485 visa doesn't count",
        "At least [[competent-english|competent English]]; proficient and superior earn 10 and 20 points",
      ],
      youHold: "A positive skills assessment and an English result",
      cost: "Set by the assessor and the test provider, paid by you",
      icon: ICON.academicCap,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge an expression of interest",
      who: ["you", "government"],
      description: "Your [[eoi|EOI]] in [[skillselect|SkillSelect]] is free and has no uploads. You choose the visas, and the states for a 190 or 491.",
      points: [
        "SkillSelect shows an indicative score from your claims",
        "It stays active for 2 years, and you can update it before an invitation",
        "It isn't a visa application and gives you no bridging visa",
      ],
      youHold: "An EOI with an indicative score of at least 65 points",
      icon: ICON.pencilSquare,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "A state nomination or family sponsorship",
      who: ["state", "you"],
      description: "For a 190 or 491, apply to a state that nominates your occupation. For a family-sponsored 491, an eligible relative in a [[dra|designated regional area]] sponsors you.",
      points: [
        "Each state sets its own occupation list, criteria and fees",
        "Most states need an application on their own portal",
        "The 189 skips this stage: it needs no nomination",
      ],
      youHold: "A state nomination or a relative's sponsorship (none for a 189)",
      cost: "Any state fee, set by the state",
      icon: ICON.mapPin,
    },
    {
      id: "invite",
      short: "Invite",
      title: "Invitation to apply",
      who: ["government"],
      description: "Home Affairs invites the highest-ranked EOIs for the 189 and family-sponsored 491. A state nomination triggers the invitation for a 190 or state-nominated 491.",
      points: [
        "Equal scores are ranked by [[date-of-effect|date of effect]]",
        "In the 4 June 2026 round, most professional occupations needed 80 points or more for a 189",
        "The invitation states the score you must prove",
      ],
      youHold: "An invitation to apply, stating the score you must prove",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Open the invitation, select Apply for visa and lodge in ImmiAccount with documents for every claim. The 60 days can't be extended.",
      points: [
        "A$6,135 for a 189, or A$6,140 for a 190 or 491, plus family members",
        "Lodge complete evidence: Home Affairs may decide without asking for more",
        "In Australia you need a [[substantive-visa|substantive visa]] or a Bridging visa A, B or C",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A lodged application and, in Australia, usually a Bridging visa A",
      cost: "From A$6,135, paid by you",
      icon: ICON.paperAirplane,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Permanent residence, or 5 years in the regions",
      who: ["government", "you"],
      description: "A 189 or 190 makes you a permanent resident from grant, or from your first entry if you're outside Australia. A 491 gives you 5 years in [[dra|designated regional areas]].",
      points: [
        "189 and 190: live, work and study anywhere in Australia",
        "491: you and your family keep to [[c8579|condition 8579]]",
        "As a permanent resident, travel freely for 5 years, then use a [[rrv|Resident Return visa]]",
      ],
      youHold: "Permanent residence (189 or 190), or a 5-year regional visa (491)",
      icon: ICON.home,
    },
    {
      id: "pr",
      short: "PR",
      title: "From the 491 to permanent residence",
      who: ["you", "government"],
      description: "Once you've held the 491 for 3 years, you can apply for the 191 if you kept to your conditions and have [[noa|notices of assessment]] for 3 income years.",
      points: [
        "Home Affairs states there is no minimum income requirement",
        "Apply before the 491 ends: it can't be extended",
        "See your dates in the 491 timeline on this page",
      ],
      youHold: "Permanent residence with no regional condition",
      cost: "A$630 for the 191 (from 1 July 2026)",
      icon: ICON.checkBadge,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. Next: confirm your exact points, your evidence and which visa your occupation and score suit best.",
    },
    disclaimer:
      "A general self-check, not advice or a prediction. Invitations depend on each round and each state's criteria, and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you're invited?",
      help: "Age is tested on the date the invitation is issued, not when you lodge your [[eoi|EOI]].",
      options: [
        { value: "under", label: "Under 45", status: "ok", note: "You meet the age rule for all three visas. Turning 45 after the invitation doesn't stop you applying." },
        {
          value: "close",
          label: "Under 45 now, but my 45th birthday is coming up",
          status: "todo",
          note: "If you turn 45 while your EOI is waiting, you can't be invited. Lodge a complete EOI early.",
        },
        {
          value: "over",
          label: "45 or older",
          status: "stop",
          note: "You can't be invited for a 189, 190 or 491 at 45 or over. Another kind of visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "occupation",
      topic: "Occupation",
      question: "Is your occupation on the list for the visa you want?",
      help: "Each visa has its own occupation list, and each state nominates only the occupations it needs.",
      options: [
        { value: "189", label: "Yes, it's on the 189 list", status: "ok", note: "The 189 is open to you, if your score is competitive in invitation rounds." },
        {
          value: "state",
          label: "It's on the 190 or 491 list, but not the 189",
          status: "todo",
          note: "The 189 isn't open to it, so you'd need a state nomination for a 190, or a nomination or family sponsorship for a 491.",
          link: { label: "Which state could nominate me?", href: "#state-assessment" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Check the lists for your occupation before you pay for a skills assessment.",
          link: { label: "Occupation search", href: "/occupations" },
        },
        {
          value: "none",
          label: "It isn't on any of these lists",
          status: "stop",
          note: "You can't be invited for a visa whose list doesn't include your occupation. Other visas may still fit.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "assessment",
      topic: "Skills assessment",
      question: "Do you have a positive skills assessment for that occupation?",
      options: [
        {
          value: "yes",
          label: "Yes, and it will still be valid when I'm invited",
          status: "ok",
          note: "It must be valid on the invitation date: 3 years from issue, or the shorter period stated on it.",
        },
        {
          value: "notyet",
          label: "Not yet",
          status: "todo",
          note: "Home Affairs advises getting it before you lodge your EOI. Apply to the assessing authority listed for your occupation.",
          link: { label: "Skills assessment help", href: "/services/skills-assessments" },
        },
        {
          value: "485",
          label: "Only one issued for a 485 visa",
          status: "todo",
          note: "An assessment issued for a subclass 485 visa isn't suitable for the 189, 190 or 491. You'll need a full assessment.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What's your English level?",
      help: "Tests must be taken at a secure test centre. Fully online tests aren't accepted.",
      options: [
        { value: "high", label: "Proficient or superior", status: "ok", note: "Above the minimum, and worth 10 or 20 points." },
        {
          value: "competent",
          label: "Competent",
          hint: "For example IELTS 6 in each band",
          status: "ok",
          note: "[[competent-english|Competent English]] meets the minimum but scores 0 points. Proficient or superior English would add 10 or 20.",
        },
        {
          value: "passport",
          label: "I hold a UK, Irish, US, Canadian or New Zealand passport",
          status: "ok",
          note: "A valid passport from one of these countries meets the competent English requirement.",
        },
        {
          value: "notyet",
          label: "Not tested yet, or below competent",
          status: "todo",
          note: "Book an approved test at a secure test centre. Each higher English level also adds points.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "points",
      topic: "Points",
      question: "How many points do you score on your own, before any nomination?",
      help: "Count age, English, work, study and partner points.",
      options: [
        {
          value: "65",
          label: "65 or more",
          status: "ok",
          note: "You can lodge an EOI for the 189. Invitations go to the highest-ranked EOIs, so the invited score is often higher.",
        },
        {
          value: "60",
          label: "60 or more, but under 65",
          status: "todo",
          note: "Too few for a 189 on its own. A state nomination adds 5 points, so a 190 could work.",
          link: { label: "Compare the three visas", href: "#compare" },
        },
        {
          value: "50",
          label: "50 or more, but under 60",
          status: "todo",
          note: "A 491 nomination or family sponsorship adds 15 points, with a regional condition.",
          link: { label: "Compare the three visas", href: "#compare" },
        },
        {
          value: "under",
          label: "Under 50",
          status: "stop",
          note: "You'd stay below 65 even with 15 nomination points. More English, work or study points may close the gap.",
          link: { label: "Open the points calculator", href: "#points" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Work it out with the points calculator on this page.",
          link: { label: "Open the points calculator", href: "#points" },
        },
      ],
    },
    {
      id: "living",
      topic: "Where you'd live",
      question: "Where are you prepared to live?",
      options: [
        {
          value: "anywhere",
          label: "In any state that nominates me, including regional areas",
          status: "ok",
          note: "All three visas stay open to you: the 189, a state's 190 and a regional 491.",
        },
        {
          value: "state",
          label: "In a state that nominates me, but not in a regional area",
          status: "ok",
          note: "The 189 and 190 fit. The 491 needs you and your family to live, work and study in a [[dra|designated regional area]].",
        },
        {
          value: "city",
          label: "Only in Sydney, Melbourne or Brisbane",
          status: "todo",
          note: "Those cities aren't designated regional areas, so the 491 is out. The 189 needs a competitive score, and a 190 needs a state to nominate you.",
        },
        {
          value: "unsure",
          label: "I'm not sure which state would nominate me",
          status: "todo",
          note: "Each state sets its own occupation list and criteria. Our free assessment shows which states could nominate you.",
          link: { label: "Which state could nominate me?", href: "#state-assessment" },
        },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where will you be when you apply?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from outside Australia." },
        {
          value: "onshore",
          label: "In Australia, holding a visa or a Bridging visa A, B or C",
          status: "ok",
          note: "You can apply in Australia, and you're usually granted a Bridging visa A.",
        },
        {
          value: "491",
          label: "On a 491 or 494 I've held for under 3 years",
          status: "stop",
          note: "If you hold, or last held, a 491 or 494, you must have held it for at least 3 years before you apply for a 189 or 190.",
        },
        {
          value: "novisa",
          label: "In Australia with no visa, or a bridging visa other than A, B or C",
          status: "stop",
          note: "An application lodged in Australia in this situation isn't valid. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "proof",
      topic: "Evidence",
      question: "Can you prove every points claim with documents?",
      help: "For example references with hours and duties, payslips, tax records, transcripts and completion letters.",
      options: [
        { value: "yes", label: "Yes, I have the documents", status: "ok", note: "Good. Your invitation states the score you must prove when the visa is decided." },
        {
          value: "some",
          label: "Some claims would be hard to prove",
          status: "todo",
          note: "If your proven points fall below the invited score, the visa is refused. Correct your EOI before you're invited.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "65 points is enough to get invited.",
      fact: "65 is the pass mark, not the cut-off. Invitations for the 189 go to the highest-ranked EOIs. In the 4 June 2026 round, 65 was enough only in some construction trades; most professional occupations needed 80 or more.",
    },
    {
      myth: "An EOI is a visa application.",
      fact: "No. An EOI is free, has no documents and gives you no bridging visa. You can only apply for the visa after an invitation, within 60 days.",
    },
    {
      myth: "The 190 forces me to live in the nominating state.",
      fact: "The visa has no condition tying you to the state. But states ask nominees to commit to living and working there for a period, so check what you agreed to before you move.",
    },
    {
      myth: "On a 491 I can live anywhere in my state.",
      fact: "No. Condition 8579 means you and your family live, work and study only in designated regional areas. Sydney, Melbourne and Brisbane aren't included; cities such as Perth, Adelaide, Hobart, Canberra and the Gold Coast are.",
    },
    {
      myth: "My 485 skills assessment will do.",
      fact: "An assessment issued for a subclass 485 visa isn't suitable for the 189, 190 or 491. You need a full assessment that is valid on the invitation date.",
    },
    {
      myth: "Family sponsorship lets me skip the points test.",
      fact: "No. A family-sponsored 491 applicant still needs 65 points, including the 15 for sponsorship, and family-sponsored EOIs compete on points in invitation rounds.",
    },
    {
      myth: "I need a minimum income to move from the 491 to the 191.",
      fact: "On 12 October 2026 Home Affairs stated there is no minimum income requirement. You need ATO notices of assessment for 3 income years out of the 5 years of your 491, and to have kept to its conditions.",
    },
    {
      myth: "Skilled visa applications are processed first come, first served.",
      fact: "Not quite. Under Ministerial Direction 122, in force from 19 September 2026, applications relating to sectors such as construction, healthcare, teaching and resources come first, then applicants who were in Australia when they lodged.",
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect: occupation, skills assessment, English, study and work history. It isn't a visa application, has no uploads and stays active for 2 years.",
    },
    {
      id: "skillselect",
      term: "SkillSelect",
      definition: "The Home Affairs online system where you lodge an EOI, where states record nominations, and where invitations to apply are issued.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for your occupation that your skills are suitable. For these visas it must be valid when you're invited: 3 years from issue, or a shorter period stated on it.",
    },
    {
      id: "assessing-authority",
      term: "Assessing authority",
      definition: "The organisation listed for your occupation that assesses your skills, such as ACS, Engineers Australia, VETASSESS or TRA. Each one sets its own procedures, evidence rules and fees.",
    },
    {
      id: "pass-mark",
      term: "Pass mark",
      definition: "The minimum points score, 65, set by LIN 19/210. You can't be invited below it. For the 190 and 491 it includes the nomination points.",
    },
    {
      id: "nomination-points",
      term: "Nomination points",
      definition: "5 points for a subclass 190 state nomination, or 15 for a subclass 491 state nomination or accepted family sponsorship, while not withdrawn. The 189 has none.",
    },
    {
      id: "state-nomination",
      term: "State nomination",
      definition: "A state or territory government agency choosing you under its own criteria. It triggers your invitation for a 190 or 491, and adds nomination points while it stays in effect.",
    },
    {
      id: "date-of-effect",
      term: "Date of effect",
      definition: "The date your EOI reached its current points score. When EOIs have equal scores, the earlier date of effect is invited first. An update that changes your score resets it.",
    },
    {
      id: "invitation-round",
      term: "Invitation round",
      definition: "A periodic round in which Home Affairs invites the highest-ranked EOIs for the 189 and family-sponsored 491. Results are published on the invitation rounds page.",
    },
    {
      id: "occupation-ceiling",
      term: "Occupation ceiling",
      definition: "An upper limit on how many EOIs in one occupation group can be invited in a program year. It doesn't apply to the 190 or to state-nominated 491 EOIs.",
    },
    {
      id: "competent-english",
      term: "Competent English",
      definition: "The minimum English for these visas. For tests taken from 7 August 2025: IELTS 6 in each band, or PTE Academic 47 listening, 48 reading, 51 writing and 54 speaking. A UK, Irish, US, Canadian or New Zealand passport also counts.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "The English level each adult family member needs. Without it, a second instalment is charged before grant: A$4,885 for the 190 and A$4,890 for the 491.",
    },
    {
      id: "dra",
      term: "Designated regional area",
      definition: "All of Australia except Sydney, Melbourne and Brisbane. Cities such as Perth, Adelaide, Canberra, Hobart and the Gold Coast count.",
    },
    {
      id: "c8579",
      term: "Condition 8579",
      definition: "The 491 condition to live, work and study only in an area that was a designated regional area on your grant date. It applies to every family member on the visa.",
    },
    {
      id: "noa",
      term: "Notice of assessment",
      definition: "The ATO's assessment of the tax return you lodge for an income year. The 191 needs notices for 3 income years out of the 5 years of your 491.",
    },
    {
      id: "substantive-visa",
      term: "Substantive visa",
      definition: "Any visa other than a bridging visa or a few special-purpose visas, such as a student, graduate or work visa.",
    },
    {
      id: "rrv",
      term: "Resident Return visa",
      full: "Subclass 155 or 157",
      definition: "The visa a permanent resident needs to re-enter Australia once the 5-year travel facility from grant has ended.",
    },
  ],
  cta: {
    subtitle:
      "We check your points, occupation and state options against these rules, tell you honestly where you stand, and prepare your EOI, state application and visa application with you.",
  },
  verifiedExtras: [
    {
      fact: "Under Ministerial Direction 122, in effect from 19 September 2026, applications for the subclass 189, 190, 191 and 491 visas are processed in this order: those relating to the construction, healthcare, teaching, agriculture, aquaculture, fishing and resources sectors or Australia's law enforcement and defence interests; then applicants who were in Australia when they lodged; then applicants outside Australia whose application isn't combined with another person's; then all others.",
      source: `${HA}/visas/getting-a-visa/visa-processing-times/visa-processing-priorities/skilled-visa`,
    },
    {
      fact: "For English tests taken on or after 7 August 2025, competent English is at least IELTS 6 in each of the 4 components, or PTE Academic 47 for listening, 48 for reading, 51 for writing and 54 for speaking. PTE Academic 50 in each component applies to tests taken on or before 6 August 2025.",
      source: `${HA}/help-support/meeting-our-requirements/english-language/competent-english`,
    },
  ],
  finder: skilledFinder,
  points: { visa: "189" },
  stateAssessment: true,
  fees: {
    variantLabel: "Which visa?",
    variants: [
      {
        id: "189",
        label: "Skilled Independent (subclass 189)",
        hint: "Points-tested stream",
        primary: [{ label: "Base application charge", amount: 6135 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1540 }],
      },
      {
        id: "190",
        label: "Skilled Nominated (subclass 190)",
        primary: [{ label: "Base application charge", amount: 6140 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
      {
        id: "491",
        label: "Skilled Work Regional (subclass 491)",
        hint: "State nominated or family sponsored",
        primary: [{ label: "Base application charge", amount: 6140 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 3070 }],
        child: [{ label: "Each additional applicant under 18", amount: 1535 }],
      },
    ],
    maxAdults: 4,
    maxChildren: 6,
    notIncluded:
      "Not included: the second instalment for adults without functional English, state nomination fees, the skills assessment, English test, health examinations, police certificates, biometrics and translations.",
    notes: [
      "Each applicant 18 or over without functional English attracts a second instalment before grant: A$4,885 for the 190 and A$4,890 for the 491. The Home Affairs 189 page didn't show the amount on 12 October 2026.",
      "A 491 leads later to the 191, which costs A$630 for you, A$315 for each adult and A$160 for each child (charges from 1 July 2026).",
      "A lower charge applies automatically in ImmiAccount when the main applicant holds a passport from a listed Pacific Island country or Timor-Leste.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
  timeline: regionalTimeline && { ...regionalTimeline, navLabel: "491 to 191" },
};
