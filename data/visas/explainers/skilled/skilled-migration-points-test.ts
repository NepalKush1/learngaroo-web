import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the skilled migration points test guide
// (subclass 189, 190 and 491). Every figure matches data/visas/skilled.ts
// (checked against Home Affairs on 12 October 2026). The points calculator
// widget reads data/points.ts.

export const skilledMigrationPointsTestExplainer: VisaExplainer = {
  slug: "skilled-migration-points-test",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The points test scores your age, English, work, study and partner to decide who can be invited for the 189, 190 and 491 visas. You need at least 65 points, and invited scores are often higher.",
  bigIdeas: [
    { title: "65 is the pass mark", body: "Below 65 you can't be invited. Invitations go to the highest-ranked EOIs, so extra points help.", icon: ICON.flag },
    { title: "Scored when you're invited", body: "Most points are fixed on your invitation date, so plan around birthdays and test expiry dates.", icon: ICON.calendarDays },
    { title: "Prove every point", body: "Your invitation states the score you must prove. If your proven points fall below it, the visa is refused.", icon: ICON.documentCheck },
  ],
  heroCard: [
    { label: "Used for", value: "Subclass 189, 190 and 491 visas", icon: ICON.documentText },
    { label: "Pass mark", value: "65 points", icon: ICON.flag },
    { label: "Biggest scores", value: "Age up to 30; English and work up to 20 each", icon: ICON.chartBar },
    { label: "Nomination", value: "5 points for a 190, 15 for a 491", icon: ICON.mapPin },
    { label: "When it's scored", value: "Mostly on the date you're invited", icon: ICON.clock },
    { label: "Cost", value: "No charge for an EOI", icon: ICON.currencyDollar },
  ],
  checkedAgainst: "Home Affairs, the Migration Regulations (Schedule 6D) and LIN 19/210",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Claim points in your [[eoi|EOI]], then prove each one with documents if you're invited.",
      does: [
        "Work out your score as at a likely invitation date",
        "Lodge an EOI in [[skillselect|SkillSelect]] with at least 65 points",
        "Keep the EOI up to date as your points change",
        "Prove every claim when you apply",
      ],
    },
    {
      id: "state",
      name: "A state or territory",
      short: "State",
      icon: ICON.mapPin,
      tone: "amber",
      role: "Can nominate you, which adds [[nomination-points|nomination points]].",
      does: [
        "Nominates for the 190 (5 points) or the 491 (15 points)",
        "Sets its own criteria and occupation lists",
        "Must not withdraw the nomination for its points to count",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Ranks EOIs, issues invitations and checks every claim when it decides the visa.",
      does: [
        "Invites the highest-ranked EOIs in rounds for the 189 and family-sponsored 491",
        "Separates equal scores by [[date-of-effect|date of effect]]",
        "Checks the documents behind every claim",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You claim points",
      detail: "In your [[eoi|EOI]] you enter your claims, and SkillSelect shows an indicative score.",
    },
    {
      from: "state",
      to: "government",
      label: "Nomination points",
      detail: "A state nomination adds 5 points for a 190, or 15 for a 491. An accepted family sponsorship also adds 15 for a 491.",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "Home Affairs invites the highest-ranked EOIs, or the ones states nominate. The invitation fixes the score you must prove.",
    },
    {
      from: "you",
      to: "government",
      label: "You prove it",
      detail: "You apply within 60 days with documents for every claim. If your proven points fall below the invited score, the visa is refused.",
    },
  ],
  journeyTitle: "From your first estimate to a proven score",
  journeyHighlight: "proven score",
  stages: [
    {
      id: "calculate",
      short: "Calculate",
      title: "Work out your score at a likely invitation date",
      who: ["you"],
      description: "Use the points calculator on this page or the Home Affairs calculator. Most items are scored at the time of invitation.",
      points: [
        "Count only work in the 10 years before invitation",
        "Age points drop at 33, and again at 40",
        "Check your English result will still be valid on that date",
      ],
      youHold: "An estimated score and the evidence behind each claim",
      icon: ICON.calculator,
    },
    {
      id: "improve",
      short: "Improve",
      title: "Add points where you can",
      who: ["you"],
      description: "Some points are within your control before you lodge an EOI.",
      points: [
        "Proficient English adds 10 points, superior English 20",
        "A [[professional-year|Professional Year]], a [[naati|NAATI credential]] or [[australian-study|Australian study]] adds 5 each",
        "Regional study (living and studying at a regional campus) adds a further 5",
      ],
      youHold: "A higher score you can prove",
      cost: "Test, course or credential costs, paid by you",
      icon: ICON.arrowPath,
    },
    {
      id: "eoi",
      short: "EOI",
      title: "Lodge your EOI",
      who: ["you"],
      description: "Enter your claims in [[skillselect|SkillSelect]] and it shows an indicative score. The EOI itself is free.",
      points: [
        "You need at least 65 to be invited (the [[pass-mark|pass mark]])",
        "An update that changes your score resets your [[date-of-effect|date of effect]]",
      ],
      youHold: "An EOI with an indicative score of 65 or more",
      icon: ICON.pencilSquare,
    },
    {
      id: "ranking",
      short: "Ranking",
      title: "Ranking and invitations",
      who: ["government", "state"],
      description: "How you're invited depends on the visa you select.",
      points: [
        "189 and family-sponsored 491: highest scores first, with ties broken by date of effect",
        "190 and state-nominated 491: the state's nomination triggers the invitation",
        "[[occupation-ceiling|Occupation ceilings]] can limit large occupation groups in rounds",
      ],
      youHold: "An invitation that fixes the score you must prove",
      icon: ICON.chartBar,
    },
    {
      id: "prove",
      short: "Prove",
      title: "Prove every claim",
      who: ["you", "government"],
      description: "Lodge within 60 days with documents for every claim in your EOI.",
      points: [
        "Partner and single points are assessed at decision",
        "Nomination points need the nomination to stay in effect",
        "If you can't prove the invited score, Home Affairs advises not to apply",
      ],
      youHold: "A visa application that meets or exceeds the invited score",
      icon: ICON.documentCheck,
    },
  ],
  check: {
    title: "Could the points test work for you?",
    highlight: "points test",
    ok: {
      title: "The points test looks workable",
      body: "Nothing in your answers stops an invitation. Use the calculator for your exact score, then make sure you can prove every claim.",
    },
    todo: {
      title: "Some points need work",
      body: "You may reach the pass mark, but some answers need attention: evidence, timing, or extra points.",
    },
    stop: {
      title: "Not yet",
      body: "At least one answer stops an invitation for now. The notes explain what would need to change.",
    },
    disclaimer: "A general self-check of the points test in force on 12 October 2026, not advice. Your invitation states the score you must prove.",
  },
  quiz: [
    {
      id: "age",
      topic: "Age",
      question: "How old will you be when you're invited?",
      options: [
        { value: "25-32", label: "25 to 32", status: "ok", note: "The top age score: 30 points." },
        { value: "18-24-33-39", label: "18 to 24, or 33 to 39", status: "ok", note: "25 points for age." },
        { value: "40-44", label: "40 to 44", status: "todo", note: "15 points for age, and you must be invited before you turn 45." },
        {
          value: "45",
          label: "45 or older",
          status: "stop",
          note: "You can't be invited at 45 or over. An employer-sponsored or other visa may fit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What's your English level?",
      options: [
        { value: "superior", label: "Superior", status: "ok", note: "Superior English scores 20 points, the most English can score." },
        { value: "proficient", label: "Proficient", status: "ok", note: "Proficient English scores 10 points." },
        {
          value: "competent",
          label: "Competent",
          status: "todo",
          note: "It's required for an invitation but scores 0. Proficient or superior English would add 10 or 20 points.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
        {
          value: "below",
          label: "Below competent, or not tested yet",
          status: "todo",
          note: "You need at least competent English to be invited. Tests must be taken at a secure test centre, not fully online.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "work",
      topic: "Skilled work",
      question: "How much skilled work can you prove in the 10 years before invitation?",
      help: "Paid work of at least 20 hours a week, in your nominated or a [[closely-related|closely related]] occupation.",
      options: [
        {
          value: "points",
          label: "At least 1 year in Australia, or at least 3 years overseas",
          status: "ok",
          note: "Work at those levels scores employment points. Australian and overseas work together are capped at 20 points.",
        },
        { value: "less", label: "Less than that", status: "todo", note: "Below those thresholds, work scores 0. Other items can make up the difference." },
        {
          value: "doubtful",
          label: "Some of it was under 20 hours a week, unpaid or in another occupation",
          status: "todo",
          note: "Work under 20 hours a week, unpaid or outside your occupation doesn't count. Claiming it can lead to refusal when you can't prove it.",
        },
      ],
    },
    {
      id: "qualification",
      topic: "Qualification",
      question: "What's your highest qualification?",
      options: [
        { value: "phd", label: "A doctorate (PhD)", status: "ok", note: "A PhD scores 20 points. Professional doctor titles don't count as a doctorate." },
        { value: "bachelor", label: "A bachelor degree or higher", status: "ok", note: "A bachelor degree or higher scores 15 points, if it's Australian or recognised as comparable to an Australian bachelor degree." },
        {
          value: "diploma",
          label: "An Australian diploma or trade qualification, or an award my assessing authority recognises",
          status: "ok",
          note: "An Australian diploma or trade qualification, or a recognised award, scores 10 points.",
        },
        {
          value: "none",
          label: "None of these",
          status: "todo",
          note: "No qualification points. If your assessing authority gave no opinion on an overseas degree, VETASSESS can assess it.",
        },
      ],
    },
    {
      id: "partner",
      topic: "Partner",
      question: "What's your partner situation?",
      help: "Partner and single points are assessed when the visa is decided.",
      options: [
        { value: "single", label: "Single, or my partner is an Australian citizen or permanent resident", status: "ok", note: "Being single, or having a partner who is a citizen or permanent resident, scores 10 points." },
        {
          value: "skilled",
          label: "Partner applying with me: under 45, competent English, a suitable skills assessment on the same list",
          status: "ok",
          note: "A skilled partner scores 10 points, as long as the partner's assessment wasn't issued for a 485 visa.",
        },
        { value: "english", label: "Partner applying with me, with competent English only", status: "ok", note: "A partner with competent English only scores 5 points." },
        {
          value: "none",
          label: "Partner applying with me, with neither",
          status: "todo",
          note: "No partner points. A change in your relationship during processing can also change these points.",
        },
      ],
    },
    {
      id: "total",
      topic: "Your total",
      question: "With any nomination points, do you reach 65?",
      options: [
        { value: "own", label: "Yes, without any nomination", status: "ok", note: "You can lodge an EOI for the 189. Higher scores are invited first." },
        { value: "190", label: "Only with a 190 state nomination (5 points)", status: "todo", note: "You'll need a state to nominate you. Each state sets its own criteria." },
        {
          value: "491",
          label: "Only with a 491 nomination or family sponsorship (15 points)",
          status: "todo",
          note: "The 491 adds 15 points, but comes with a regional condition.",
          link: { label: "Skilled Work Regional visa (491)", href: "/visas/skilled/skilled-work-regional-visa-491" },
        },
        {
          value: "no",
          label: "No, not yet",
          status: "stop",
          note: "Below 65 you can't be invited. Look at English, a Professional Year, NAATI, regional study or more work experience.",
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Work it out with the points calculator on this page.", link: { label: "Open the points calculator", href: "#points" } },
      ],
    },
    {
      id: "proof",
      topic: "Evidence",
      question: "Can you prove every claim with documents?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Good. Your invitation fixes the score you must prove." },
        {
          value: "no",
          label: "Not every claim",
          status: "todo",
          note: "If a claim fails and your score falls below the invited score, the visa is refused. Fix your EOI before you're invited.",
        },
      ],
    },
    {
      id: "timing",
      topic: "Timing",
      question: "Will your score change before you're likely to be invited?",
      options: [
        { value: "stable", label: "No changes coming", status: "ok", note: "Your score should hold. Recheck it if anything changes." },
        {
          value: "drop",
          label: "A birthday at 33 or 40, or an English result or Professional Year ageing out",
          status: "todo",
          note: "Points are scored at invitation, so your score can drop on those dates. Plan your EOI around them.",
        },
        { value: "45", label: "I'll turn 45 soon", status: "todo", note: "If you turn 45 before an invitation, you can't be invited." },
      ],
    },
  ],
  myths: [
    {
      myth: "With 65 points I'll be invited.",
      fact: "65 is the pass mark, not the cut-off. In the 4 June 2026 round, the lowest invited 189 score was 65 only for some construction trades. It was 75 for nurses, teachers and allied health, and 80 to 85 for most other professions.",
    },
    {
      myth: "Australian and overseas work points just add up.",
      fact: "Employment points are capped at 20 in total. For example, 8 years overseas (15 points) and 3 years in Australia (10 points) still score 20.",
    },
    {
      myth: "My points are fixed when I lodge my EOI.",
      fact: "Most points are scored at the time of invitation. If you turn 33 before you're invited, your age points drop from 30 to 25.",
    },
    {
      myth: "Any doctorate earns 20 points.",
      fact: "Only a PhD. Professional doctor titles don't count as a doctorate for points.",
    },
    {
      myth: "Updating my EOI never hurts.",
      fact: "An update that changes your score resets your date of effect, so you lose your place among equal scores.",
    },
    {
      myth: "My partner's 485 skills assessment earns partner points.",
      fact: "No. Partner skill points need a suitable assessment that wasn't for a subclass 485 visa. Your partner also needs to be under 45, with competent English and an occupation on the same list as yours.",
    },
    {
      myth: "The new points test already applies.",
      fact: "The Government has said it will redesign the test, but on 12 October 2026 no change to Schedule 6D or the 65-point pass mark was in force.",
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect. You enter your points claims and SkillSelect shows an indicative score.",
    },
    { id: "skillselect", term: "SkillSelect", definition: "The Home Affairs online system for EOIs and invitations to apply for the 189, 190 and 491." },
    { id: "pass-mark", term: "Pass mark", definition: "The minimum score to be invited: 65 points, set by LIN 19/210. The pool mark is also 65." },
    {
      id: "date-of-effect",
      term: "Date of effect",
      definition: "The date and time your EOI reached its score for that subclass. It breaks ties between equal scores, and resets when an update changes your score.",
    },
    {
      id: "occupation-ceiling",
      term: "Occupation ceiling",
      definition: "A limit on how many EOIs in a large occupation group can be invited in departmental rounds. It doesn't apply to state-nominated invitations.",
    },
    {
      id: "nomination-points",
      term: "Nomination points",
      definition: "5 points for a subclass 190 state nomination, or 15 for a subclass 491 state nomination or accepted family sponsorship, while not withdrawn. The 189 has none.",
    },
    {
      id: "english-levels",
      term: "Competent, proficient, superior",
      definition: "The English levels in the points test. Competent scores 0 points but is required; proficient scores 10; superior scores 20.",
    },
    {
      id: "closely-related",
      term: "Closely related occupation",
      definition: "An occupation in the same ANZSCO unit group as yours, one on a career advancement pathway, or one your assessing authority has recognised as closely related.",
    },
    {
      id: "australian-study",
      term: "Australian study requirement",
      definition: "At least 2 academic years (92 weeks) of CRICOS-registered study, taught in English and completed in Australia over at least 16 calendar months. It earns 5 points.",
    },
    {
      id: "professional-year",
      term: "Professional Year",
      definition: "A program of at least 12 months in accounting, ICT or engineering, completed in Australia in the 48 months before invitation. It earns 5 points.",
    },
    {
      id: "naati",
      term: "Credentialled community language",
      definition: "A NAATI accreditation at paraprofessional level or above, certification at certified provisional level or above, or a community language credential. It earns 5 points.",
    },
    {
      id: "specialist-education",
      term: "Specialist education qualification",
      definition: "A masters by research or doctorate from an Australian institution, including at least 2 academic years in a listed science, IT or engineering field. It earns 10 points.",
    },
    { id: "schedule-6d", term: "Schedule 6D", definition: "The part of the Migration Regulations that sets out the general points test table." },
  ],
  cta: {
    title: "Want your points checked properly?",
    subtitle: "We check every claim against the points test and the evidence you'd need, tell you honestly where you stand, and plan your EOI with you.",
  },
  finder: skilledFinder,
  points: { visa: "189" },
};
