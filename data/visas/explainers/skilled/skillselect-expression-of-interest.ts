import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { skilledFinder } from "./skilled-finder";

// Interactive explainer for the SkillSelect expression of interest guide.
// Every figure matches data/visas/skilled.ts (checked against Home Affairs
// on 12 October 2026). The only month-based milestone the page states is
// the 2-year life of an EOI; the age check uses the under-45-at-invitation
// rule stated on the same page.

export const skillselectEoiExplainer: VisaExplainer = {
  slug: "skillselect-expression-of-interest",
  factsAsAt: "12 October 2026",
  oneLiner:
    "An expression of interest (EOI) is a free online profile in SkillSelect. It lets Home Affairs, or a state, invite you to apply for a 189, 190 or 491 visa, and lasts 2 years.",
  bigIdeas: [
    { title: "Not a visa application", body: "An EOI is free, has no uploads and gives you no bridging visa. It's how you ask to be invited.", icon: ICON.informationCircle },
    { title: "Ranked, or picked by a state", body: "Home Affairs invites the highest-ranked EOIs; states nominate the EOIs they choose for the 190 and 491.", icon: ICON.chartBar },
    { title: "60 days to apply", body: "Once invited, you have 60 calendar days to lodge, with no extension, and must prove every claim.", icon: ICON.clock },
  ],
  heroCard: [
    { label: "Cost", value: "Free", icon: ICON.currencyDollar },
    { label: "How long it lasts", value: "2 years from when you submit", icon: ICON.calendarDays },
    { label: "Minimum score", value: "65 points", icon: ICON.flag },
    { label: "After an invitation", value: "60 days to apply, with no extension", icon: ICON.clock },
    { label: "Invitations per EOI", value: "2 at most", icon: ICON.envelope },
    { label: "Who sees it", value: "Home Affairs and state agencies", icon: ICON.eye },
  ],
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Enter accurate claims in your [[eoi|EOI]] and keep them up to date.",
      does: [
        "Get a [[skills-assessment|skills assessment]] and an English result first",
        "Enter your claims; SkillSelect works out an indicative score",
        "Update the EOI when your circumstances change",
        "Apply within 60 days if you're invited",
      ],
    },
    {
      id: "state",
      name: "State and territory agencies",
      short: "States",
      icon: ICON.mapPin,
      tone: "amber",
      role: "View EOIs and choose candidates to nominate for the 190 and 491.",
      does: [
        "Apply their own criteria and occupation lists",
        "Usually ask for a separate application on their own portal",
        "Nominate you in SkillSelect, which triggers an invitation",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Runs [[skillselect|SkillSelect]], holds invitation rounds and decides visa applications.",
      does: [
        "Runs invitation rounds for the 189 and family-sponsored 491",
        "Ranks EOIs by points, then by [[date-of-effect|date of effect]]",
        "Publishes each round's results and states' nomination numbers",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "government",
      label: "You submit an EOI",
      detail: "You enter your occupation, [[skills-assessment|skills assessment]], English, qualifications and 10 years of work history. SkillSelect emails you an EOI number and an indicative score.",
    },
    {
      from: "state",
      to: "government",
      label: "State nominates",
      detail: "For the 190 and 491, states view EOIs and nominate those they choose, usually after an application on their own portal.",
    },
    {
      from: "government",
      to: "you",
      label: "Invitation",
      detail: "Home Affairs invites the highest-ranked EOIs in rounds, or invites you after a state nominates you.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge the visa application in ImmiAccount within 60 days, with documents for every claim.",
    },
  ],
  journeyTitle: "From SkillSelect account to visa application",
  journeyHighlight: "visa application",
  stages: [
    {
      id: "account",
      short: "Account",
      title: "Set up a SkillSelect account",
      who: ["you"],
      description: "Enter your name, date of birth, passport country, citizenship, residence, relationship status and email.",
      points: ["Set a password and security questions", "SkillSelect emails your EOI number"],
      youHold: "An EOI number and login",
      icon: ICON.key,
    },
    {
      id: "claims",
      short: "Claims",
      title: "Enter and save your claims",
      who: ["you"],
      description: "Add your claims as you receive them, saving at each step. No documents are uploaded at this stage.",
      points: [
        "Occupation and [[skills-assessment|skills assessment]] date, authority and reference number",
        "English test details, or the passport that shows competent English",
        "Qualifications, and work history for the last 10 years",
      ],
      youHold: "A complete draft EOI",
      icon: ICON.pencilSquare,
    },
    {
      id: "submit",
      short: "Submit",
      title: "Submit and check your score",
      who: ["you", "government"],
      description: "Select the visa subclasses you want, and the states for the 190 and 491, then submit.",
      points: [
        "You need an indicative score of at least 65 to be invited",
        "Your [[date-of-effect|date of effect]] is when the EOI reached that score",
      ],
      youHold: "A submitted EOI with an indicative score and a date of effect",
      icon: ICON.inboxArrowDown,
    },
    {
      id: "update",
      short: "Update",
      title: "Keep the EOI current",
      who: ["you"],
      description: "Update it whenever your points or circumstances change, and watch the invitation rounds and state nomination pages.",
      points: [
        "SkillSelect recalculates your score after each update",
        "You must update it if you stop working at least 20 hours a week in your occupation",
        "It expires 2 years after you submit it",
      ],
      youHold: "An accurate EOI with your best score",
      icon: ICON.arrowPath,
    },
    {
      id: "invite",
      short: "Invite",
      title: "Invitation",
      who: ["government", "state"],
      description: "SkillSelect emails the invitation, which states the points you must prove.",
      points: [
        "Rounds for the 189 and family-sponsored 491",
        "A state's nomination triggers the invitation for the 190 and state-nominated 491",
        "The EOI is frozen for the 60 days after an invitation",
      ],
      youHold: "An invitation to apply",
      icon: ICON.envelope,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply within 60 days",
      who: ["you", "government"],
      description: "Open the EOI, select Apply for visa and lodge in ImmiAccount with documents for every claim and the application charge.",
      points: [
        "If you can't prove the invited score, Home Affairs advises not to apply",
        "After two unused invitations, the EOI is removed",
        "In Australia you usually get a Bridging visa A once you lodge",
      ],
      youHold: "A lodged visa application",
      icon: ICON.paperAirplane,
    },
  ],
  check: {
    title: "Are you ready to lodge an EOI?",
    highlight: "lodge an EOI",
    ok: {
      title: "You look ready",
      body: "Nothing in your answers stops you lodging. Check every claim against your documents before you submit.",
    },
    todo: {
      title: "Nearly ready",
      body: "You can prepare now, but some answers need sorting before you submit, or before you could be invited.",
    },
    stop: {
      title: "Not ready yet",
      body: "At least one answer would stop an invitation. The notes explain what would need to change first.",
    },
    disclaimer: "A general self-check, not advice. An invitation depends on rounds, rankings or a state's choice, and isn't a pre-assessment of your visa.",
  },
  quiz: [
    {
      id: "assessment",
      topic: "Skills assessment",
      question: "Do you have a positive skills assessment for your occupation?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Enter its date, assessing authority and reference number in the EOI." },
        {
          value: "waiting",
          label: "I've applied and I'm waiting",
          status: "todo",
          note: "Home Affairs advises getting the assessment before you submit the EOI. One obtained after the invitation can't be relied on.",
        },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Start with the assessing authority listed for your occupation.",
          link: { label: "How skills assessments work", href: "/visas/skilled/skills-assessment-for-migration" },
        },
      ],
    },
    {
      id: "occupation",
      topic: "Occupation list",
      question: "Is your occupation on the list for the visa you'll select?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Select the subclasses your occupation is eligible for." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check the lists for your occupation before you lodge.", link: { label: "Occupation search", href: "/occupations" } },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "You can't be invited for a visa whose list doesn't include your occupation.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Do you have an English result, or an eligible passport?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Enter the test name, date and scores, or the passport that shows competent English." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Book an approved test. Your score also affects your points.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
      ],
    },
    {
      id: "points",
      topic: "Points",
      question: "Is your indicative score at least 65?",
      options: [
        { value: "yes", label: "Yes, without any nomination", status: "ok", note: "You meet the pass mark. Invitations go to the highest-ranked EOIs first." },
        {
          value: "nomination",
          label: "Only with nomination points",
          status: "todo",
          note: "A 190 state nomination adds 5 points, and a 491 nomination or family sponsorship adds 15.",
        },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "You can't be invited below 65. Work out which points you could add.",
          link: { label: "Points test explained", href: "/visas/skilled/skilled-migration-points-test" },
        },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Check your score with the points calculator.", link: { label: "Points calculator", href: "/tools/points-calculator" } },
      ],
    },
    {
      id: "age",
      topic: "Age",
      question: "Will you be under 45 when you could be invited?",
      options: [
        { value: "yes", label: "Yes, comfortably", status: "ok", note: "Age isn't a barrier, though your age points can still change." },
        {
          value: "close",
          label: "My 45th birthday is coming up",
          status: "todo",
          note: "If you turn 45 while the EOI is waiting, you can no longer be invited. Use the EOI dates tool on this page.",
          link: { label: "Check your EOI dates", href: "#timeline" },
        },
        { value: "no", label: "I'm 45 or older", status: "stop", note: "You can't be invited at 45 or over.", link: { label: "Talk through your options", href: "/bookings" } },
      ],
    },
    {
      id: "visa",
      topic: "Staying lawful",
      question: "If you're in Australia, how long is left on your current visa?",
      options: [
        { value: "outside", label: "I'm outside Australia", status: "ok", note: "Nothing to manage while you wait." },
        { value: "plenty", label: "Plenty of time", status: "ok", note: "Keep an eye on the expiry date while you wait." },
        {
          value: "soon",
          label: "It expires soon",
          status: "todo",
          note: "An EOI gives no bridging visa. Apply for another visa to stay lawful while you wait.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "proof",
      topic: "Your claims",
      question: "Can you prove every claim you'll enter?",
      options: [
        { value: "yes", label: "Yes, I have the documents", status: "ok", note: "Good. You'll need those documents within 60 days of an invitation." },
        {
          value: "no",
          label: "Not all of them yet",
          status: "todo",
          note: "Claims you can't prove can lead to refusal under PIC 4020 if you're invited and apply. Enter only what you can prove.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "An EOI is a visa application.",
      fact: "No. It has no charge, no documents and no bridging visa. The visa application is a separate step in ImmiAccount after an invitation.",
    },
    {
      myth: "65 points means I'll be invited.",
      fact: "Invitations go to the highest-ranked EOIs. In the 4 June 2026 round most professional occupations were invited at 80 points or more and some trades at 65.",
    },
    {
      myth: "I can fix my EOI after I'm invited.",
      fact: "No. It's frozen for the 60-day invitation period. Once that period ends without an application, you can update it.",
    },
    {
      myth: "My EOI keeps me lawful in Australia.",
      fact: "No. An EOI gives no bridging visa. If your visa is about to expire, apply for another visa to stay lawful.",
    },
    {
      myth: "Updating my EOI keeps my place in the queue.",
      fact: "An update that changes your score resets your date of effect, so earlier claims don't keep their place.",
    },
    {
      myth: "I can get my skills assessment after I'm invited.",
      fact: "Only an assessment held at invitation, or obtained within the 60-day period following the Thapa decision, is accepted. Home Affairs advises getting it before you submit.",
    },
    {
      myth: "State nominations wait for invitation rounds.",
      fact: "No. A state nomination triggers the invitation on its own, and occupation ceilings don't apply to the 190 or to state-nominated 491 EOIs.",
    },
  ],
  glossary: [
    {
      id: "eoi",
      term: "EOI",
      full: "Expression of interest",
      definition: "Your free online profile in SkillSelect. It isn't a visa application, has no uploads, gives no bridging visa and lasts 2 years from when you submit it.",
    },
    {
      id: "skillselect",
      term: "SkillSelect",
      definition: "The Home Affairs online system for skilled workers who want to be invited to apply for the 189, 190 or 491.",
    },
    {
      id: "skills-assessment",
      term: "Skills assessment",
      definition: "A decision by the assessing authority for your occupation that your skills are suitable. You enter its date, authority and reference number in the EOI.",
    },
    {
      id: "date-of-effect",
      term: "Date of effect",
      definition: "The time your EOI reached its points score. Equal scores are separated by it, and it resets when an update changes your score.",
    },
    {
      id: "invitation-round",
      term: "Invitation round",
      definition: "A periodic round in which Home Affairs invites the highest-ranked EOIs. Numbers and occupations vary, and results are published on the invitation rounds page.",
    },
    {
      id: "occupation-ceiling",
      term: "Occupation ceiling",
      definition: "An upper limit on how many EOIs in one occupation group can be invited in a program year. It doesn't apply to the 190 or state-nominated 491.",
    },
    { id: "pass-mark", term: "Pass mark", definition: "The minimum indicative score to be invited: 65 points." },
    {
      id: "state-nomination",
      term: "State nomination",
      definition: "A state or territory agency choosing your EOI under its own criteria. For the 190 and 491, the nomination triggers your invitation.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The rule on false or misleading information. Claims you can't prove can lead to refusal under it if you're invited and apply.",
    },
  ],
  cta: {
    subtitle: "We check your claims and evidence before you submit, tell you honestly where you stand, and prepare your EOI and visa application with you.",
  },
  finder: skilledFinder,
  timeline: {
    navLabel: "EOI dates",
    eyebrow: "Your EOI clock",
    title: "When does your EOI expire?",
    highlight: "expire",
    subtitle: "Pick the month you submitted (or plan to submit) your EOI to see when it expires, and check the age limit against that date.",
    startLabel: "EOI submitted",
    startPrompt: "When did you submit your EOI?",
    milestones: [
      {
        months: 24,
        label: "Your EOI expires",
        detail: "An [[eoi|EOI]] lasts 2 years from the date you submit it. If you haven't been invited by then, it expires and you can lodge a new one.",
        kind: "end",
      },
    ],
    age: {
      milestone: 0,
      limit: 45,
      under: "You'll still be under 45 when this EOI expires, so age alone won't stop an invitation during its life.",
      over: "You turn 45 before this EOI expires. From your 45th birthday you can no longer be invited, even though the EOI is still active.",
    },
    footnote: "An invitation gives you 60 days to apply, and the EOI is frozen during that time. Check the dates in your SkillSelect account.",
  },
};
