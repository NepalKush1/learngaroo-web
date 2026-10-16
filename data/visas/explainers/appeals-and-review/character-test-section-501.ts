import type { FinderConfig, VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for "Character test and section 501". Every fact
// comes from data/visas/appeals-and-review.ts (checked against Home Affairs,
// the ART, the Migration Act and Regulations and Ministerial Direction
// No. 110 on 12 October 2026). Time limits appear only as the page states
// them, always with a prompt to check the decision letter; no dates are
// calculated.

// Page-specific finder: which character pathway applies to you.
const characterFinder: FinderConfig = {
  id: "character-finder",
  navLabel: "Your pathway",
  eyebrow: "Your pathway",
  title: "Where are you in the character process?",
  highlight: "character process",
  subtitle: "Two or three one-tap questions show the step that applies to you, and the time limit to check.",
  start: "decided",
  questions: [
    {
      id: "decided",
      question: "Has a decision been made about your visa?",
      options: [
        { label: "Not yet", hint: "I'm applying, or I've received a notice", next: "before" },
        { label: "Yes, my visa was refused or cancelled", next: "who" },
      ],
    },
    {
      id: "before",
      question: "Which fits you best?",
      options: [
        { label: "I'm preparing an application and have charges or convictions", next: "declare" },
        { label: "I've received a notice that my visa may be refused or cancelled under section 501", next: "notice" },
      ],
    },
    {
      id: "who",
      question: "What happened?",
      options: [
        {
          label: "My visa was cancelled while I was serving a prison sentence",
          hint: "Mandatory cancellation under section 501(3A)",
          next: "revoke",
        },
        { label: "A Home Affairs officer (a delegate) refused, cancelled or refused to revoke", next: "where" },
        { label: "The Minister decided personally", next: "minister" },
        { label: "The ART reviewed the decision and affirmed it", next: "after-art" },
      ],
    },
    {
      id: "where",
      question: "Where were you when the decision was made?",
      options: [
        { label: "In Australia", next: "art9" },
        { label: "Outside Australia", next: "art28" },
      ],
    },
  ],
  outcomes: [
    {
      id: "declare",
      title: "Declare everything when you apply",
      body: "Declare all charges awaiting action and all convictions in any country, answer every question truthfully, and give police and military certificates when asked. Undisclosed matters are found through checks and lead to refusal and PIC 4020 problems.",
      watch: [
        "A sentence of 12 months or more, including terms added together, is a substantial criminal record",
        "Suspended sentences and periodic detention count towards the 12 months",
        "Applying from outside Australia? Home Affairs recommends not finalising travel until the character assessment is complete",
      ],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "notice",
      title: "Respond to the notice of intention",
      body: "You receive the information relied on and a period to respond. Answer each Ministerial Direction No. 110 consideration with evidence, and ask in writing for an extension if you need one.",
      watch: [
        "Respond within the period stated in the notice",
        "Address protection of the community and the seriousness of the conduct, not only hardship and ties",
        "Give detailed evidence about minor children in Australia: their best interests are a primary consideration",
      ],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "revoke",
      title: "Ask for revocation within 28 days",
      body: "Your visa was cancelled under section 501(3A) while you were serving a full-time prison sentence. You can make representations for revocation within 28 days of notification. If it's revoked, the visa is reinstated.",
      watch: [
        "Check the time limit in your decision letter: the 28 days can't be extended",
        "Show that you pass the character test, or that there's another reason to revoke, addressing Direction No. 110",
        "If a delegate refuses to revoke and you're in Australia, the ART time limit is 9 days",
      ],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "art9",
      title: "Expedited ART review: 9 days",
      body: "If a delegate refused, cancelled or refused to revoke while you were in Australia, the ART review is expedited. Apply within 9 days of receiving the decision and the documents. The fee is A$1,195, or A$100 in prison, detention or other listed cases.",
      watch: [
        "Check the time limit in your decision letter: the Tribunal can't extend the 9 days",
        "Documents must reach the Minister's representative at least 2 business days before the hearing",
        "The Tribunal must decide within 84 days, or the decision is taken to be affirmed",
      ],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "art28",
      title: "ART review from outside Australia",
      body: "If you were outside Australia when the decision was made, the ordinary 28-day period applies and the Tribunal can consider an extension request. Character reviews use the A$1,195 fee, with an A$100 reduced fee in some cases.",
      watch: ["Check the time limit in your decision letter", "Address every Direction No. 110 consideration with evidence"],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "minister",
      title: "A personal decision by the Minister",
      body: "The Minister can personally refuse or cancel, or set aside a delegate's or the Tribunal's favourable decision. The Tribunal can't review these personal decisions: they can only be challenged by judicial review in the Federal Court of Australia, within 35 days.",
      watch: ["The court looks for a legal (jurisdictional) error, not the merits", "Get legal advice quickly"],
      href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
    {
      id: "after-art",
      title: "After the ART: Federal Court review",
      body: "An ART decision in a character matter can be challenged in the Federal Court of Australia for jurisdictional error within 35 days. The court looks at legal errors, not the merits.",
      watch: [
        "While you remain in Australia, you can only apply for a protection visa (section 501E)",
        "If you leave, Special Return Criterion 5001 blocks most visas, unless the decision is revoked or the Minister grants a permanent visa",
      ],
      href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
  ],
  footnote:
    "General information only, not legal advice. The 9-day review limit and the 28-day revocation period can't be extended, so check the time limit in your decision letter.",
};

export const characterTestSection501Explainer: VisaExplainer = {
  slug: "character-test-section-501",
  factsAsAt: "12 October 2026",
  oneLiner:
    "Everyone applying for or holding a visa must pass the character test in section 501, and failing it can lead to refusal or cancellation, with short, strict time limits to respond or seek review.",
  bigIdeas: [
    {
      title: "The test has several parts",
      body: "A substantial criminal record (a sentence of 12 months or more) is one. Conduct, associations and risk can fail it too.",
      icon: ICON.listBullet,
    },
    {
      title: "Prison can mean automatic cancellation",
      body: "Serving a full-time sentence with a substantial criminal record means mandatory cancellation, with 28 days to seek revocation.",
      icon: ICON.lockClosed,
    },
    {
      title: "Very short review limits",
      body: "9 days to apply to the ART if you were in Australia, and it can't be extended. Check the time limit in your decision letter.",
      icon: ICON.clock,
    },
  ],
  heroCard: [
    { label: "Substantial criminal record", value: "A sentence of 12 months or more", icon: ICON.scale },
    { label: "Revocation request", value: "Within 28 days of a mandatory cancellation", icon: ICON.lockOpen },
    { label: "ART time limit", value: "9 days if you were in Australia: check your letter", icon: ICON.clock },
    { label: "ART fee", value: "A$1,195 (A$100 reduced fee)", icon: ICON.currencyDollar },
    { label: "How decisions are weighed", value: "Ministerial Direction No. 110", icon: ICON.bookOpen },
    { label: "Court review", value: "Federal Court, within 35 days", icon: ICON.buildingLibrary },
  ],
  checkedAgainst: "Home Affairs, the Administrative Review Tribunal, the Migration Act and Regulations and Ministerial Direction No. 110",
  actors: [
    {
      id: "you",
      name: "You (the applicant or visa holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "Declare everything, and respond in time with evidence.",
      does: [
        "Declare all charges and convictions, in any country",
        "Respond to any notice within the period given",
        "Address each [[d110|Direction No. 110]] consideration with evidence",
        "Act within the 28-day or 9-day time limit that applies to you",
      ],
    },
    {
      id: "homeaffairs",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Applies the character test, with decisions made by [[delegate|delegates]].",
      does: [
        "Checks your declarations, and police and military certificates",
        "Sends a notice before refusing or cancelling, with a period to respond",
        "Decides revocation requests after a [[mandatory|mandatory cancellation]]",
        "Prioritises people in immigration detention and compelling or compassionate cases",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Reviews a delegate's character decision on an [[expedited|expedited]] track.",
      does: [
        "Must receive the application within 9 days if you were in Australia",
        "Can't consider evidence not given to the Minister's representative at least 2 business days before the hearing",
        "Must decide within 84 days, or the decision is taken to be affirmed",
      ],
    },
    {
      id: "minister",
      name: "The Minister",
      short: "Minister",
      icon: ICON.handRaised,
      tone: "teal",
      role: "Can make personal decisions that only a court can review.",
      does: [
        "Can personally refuse or cancel a visa",
        "Can set aside a delegate's or the Tribunal's favourable decision, or a revocation",
        "Personal decisions can only be challenged in the Federal Court",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "homeaffairs",
      label: "You declare everything",
      detail: "When you apply, you declare all charges and convictions in any country and give police and military certificates when asked.",
    },
    {
      from: "homeaffairs",
      to: "you",
      label: "Notice or cancellation",
      detail: "If a delegate is considering refusal or cancellation, you get a notice and a period to respond. For people in prison, cancellation can be [[mandatory|mandatory]].",
    },
    {
      from: "you",
      to: "homeaffairs",
      label: "You respond",
      detail: "You answer each [[d110|Direction No. 110]] consideration with evidence, or ask for revocation of a mandatory cancellation within 28 days.",
    },
    {
      from: "you",
      to: "tribunal",
      label: "Expedited review",
      detail: "If a delegate refuses, cancels or refuses to revoke and you were in Australia, you have 9 days to apply to the ART.",
    },
    {
      from: "minister",
      to: "you",
      label: "Personal decisions",
      detail: "The Minister can personally refuse or cancel, or set aside a favourable decision. Those decisions can only be challenged in the Federal Court.",
    },
  ],
  journeyTitle: "From declaration to decision and review",
  journeyHighlight: "decision and review",
  stages: [
    {
      id: "declare",
      short: "Declare",
      title: "Declare everything when you apply",
      who: ["you"],
      description:
        "Declare all charges awaiting action and all convictions in any country, and answer every question truthfully.",
      points: [
        "Give police and military certificates when asked",
        "You may be asked for [[form80|Form 80]] and Form 1563",
        "Undisclosed matters are found through checks and lead to refusal and [[pic4020|PIC 4020]] problems",
      ],
      youHold: "A complete character declaration on your application",
      icon: ICON.clipboardDocumentCheck,
    },
    {
      id: "test",
      short: "Test",
      title: "Home Affairs applies the character test",
      who: ["homeaffairs"],
      description:
        "You don't pass if, for example, you have a [[scr|substantial criminal record]], or your conduct, associations or risk of future conduct show it.",
      points: [
        "A sentence of 12 months or more, or terms adding up to 12 months, is a substantial criminal record",
        "Suspended sentences and periodic detention count",
        "A finding of guilt for a sexual offence involving a child fails the test, even if no conviction was recorded",
        "Decision-makers weigh the considerations in [[d110|Direction No. 110]]",
      ],
      youHold: "A finding on whether you pass the test",
      icon: ICON.magnifyingGlass,
    },
    {
      id: "notice",
      short: "Notice",
      title: "Respond to a notice of intention",
      who: ["you", "homeaffairs"],
      description:
        "If a delegate is considering refusal or cancellation, you get a notice with the information relied on and a period to respond.",
      points: [
        "Answer each Direction No. 110 consideration with evidence",
        "Ask in writing for an extension if you need one",
        "Address community protection, not only hardship and ties",
      ],
      youHold: "A detailed response lodged within the period",
      icon: ICON.envelopeOpen,
    },
    {
      id: "revoke",
      short: "Revoke",
      title: "In prison: ask for revocation within 28 days",
      who: ["you", "homeaffairs"],
      description:
        "If your visa was cancelled under [[mandatory|section 501(3A)]] while you were in prison, lodge representations within 28 days of notification.",
      points: [
        "Show you pass the character test, or another reason to revoke",
        "Address Direction No. 110",
        "If the cancellation is revoked, the visa is reinstated",
        "Check the time limit in your decision letter: it can't be extended",
      ],
      youHold: "A revocation request lodged in time",
      icon: ICON.lockOpen,
    },
    {
      id: "review",
      short: "Review",
      title: "Apply to the ART within 9 days",
      who: ["you", "tribunal"],
      description:
        "If a delegate refuses, cancels or refuses to revoke, and you were in Australia when it was decided, the review is [[expedited|expedited]].",
      points: [
        "Check the time limit in your decision letter",
        "9 days after you receive the decision and the documents, with no extensions",
        "Fee A$1,195, or A$100 in prison, detention or other listed cases",
        "Outside Australia when it was decided: the ordinary 28-day period applies",
      ],
      youHold: "An expedited character review on foot",
      cost: "A$1,195 (A$100 reduced fee)",
      icon: ICON.paperAirplane,
    },
    {
      id: "hearing",
      short: "Hearing",
      title: "Serve your evidence 2 business days ahead",
      who: ["tribunal", "you"],
      description:
        "The Minister is represented. The Tribunal can't consider documents or oral evidence not given to the Minister's representative at least 2 business days before the hearing.",
      points: ["The Tribunal must decide within 84 days", "If it doesn't, the decision is taken to be affirmed"],
      youHold: "Evidence served in time, and a decision within 84 days",
      icon: ICON.calendarDays,
    },
    {
      id: "court",
      short: "Court",
      title: "Federal Court, and what follows",
      who: ["you", "minister"],
      description:
        "An ART character decision, or the Minister's personal decision, can be challenged in the Federal Court of Australia. The court looks for [[jurisdictional|jurisdictional error]], and the time limit is 35 days.",
      points: [
        "The Minister can personally set aside a favourable decision or a revocation",
        "In Australia after a section 501 decision, you can apply only for a protection visa ([[s501e|section 501E]])",
        "After leaving, [[src5001|Special Return Criterion 5001]] blocks most visas unless the decision is revoked or the Minister grants a permanent visa",
      ],
      youHold: "A court application, or a plan for what comes next",
      icon: ICON.buildingLibrary,
    },
  ],
  check: {
    title: "Where do you stand on the character test?",
    highlight: "character test",
    ok: {
      title: "Nothing here points to a character problem",
      body: "Your answers don't suggest a character issue. Keep declaring everything truthfully, and provide police certificates when asked.",
    },
    todo: {
      title: "Some answers need careful preparation",
      body: "These don't decide anything on their own, but each needs evidence and a careful, complete response.",
    },
    stop: {
      title: "Act now: strict time limits may apply",
      body: "At least one answer points to a serious character issue or a short, strict time limit. Check the time limit in your decision letter and get advice today.",
    },
    disclaimer:
      "A general self-check, not legal advice. Character decisions depend on all your circumstances and the Direction No. 110 considerations. Check the time limit in your decision letter.",
  },
  quiz: [
    {
      id: "sentence",
      topic: "Sentences",
      question: "Have you ever been sentenced to imprisonment, in any country?",
      help: "Count the sentence imposed, not the time served. Suspended sentences count, and two or more terms add together.",
      options: [
        {
          value: "never",
          label: "Never",
          status: "ok",
          note: "The substantial criminal record part doesn't apply. Other parts, such as past conduct or a risk of future conduct, can still be considered.",
        },
        {
          value: "under",
          label: "Yes, under 12 months in total",
          status: "todo",
          note: "That isn't a substantial criminal record, but your past conduct can still be considered. Declare it fully.",
        },
        {
          value: "over",
          label: "Yes, 12 months or more in total",
          status: "stop",
          note: "That's a substantial criminal record, so you don't pass the test on that part. Refusal or cancellation is then possible, weighed under Direction No. 110.",
        },
        {
          value: "unsure",
          label: "I'm not sure how to count it",
          status: "todo",
          note: "The length of the sentence matters, not the time served. Suspended sentences and periodic detention count, and terms add together.",
        },
      ],
    },
    {
      id: "prison",
      topic: "Prison",
      question: "Are you currently serving a full-time prison sentence?",
      options: [
        {
          value: "no",
          label: "No",
          status: "ok",
          note: "Mandatory cancellation under section 501(3A) applies only to people serving a full-time sentence in a custodial institution.",
        },
        {
          value: "yes",
          label: "Yes",
          status: "stop",
          note: "With a substantial criminal record or a child sexual offence finding, the visa must be cancelled. You'd then have 28 days after notification to request revocation.",
        },
        {
          value: "cancelled",
          label: "Yes, and my visa has been cancelled",
          status: "stop",
          note: "Lodge representations for revocation within 28 days of notification. Check the time limit in your decision letter: it can't be extended.",
        },
      ],
    },
    {
      id: "letters",
      topic: "Letters",
      question: "Have you received a letter about your character?",
      options: [
        { value: "no", label: "No", status: "ok", note: "Nothing to respond to now. Declare everything truthfully in any application." },
        {
          value: "notice",
          label: "A notice that my visa may be refused or cancelled",
          status: "todo",
          note: "Respond within the period, answering each Direction No. 110 consideration with evidence. Ask in writing for more time if you need it.",
        },
        {
          value: "decision",
          label: "A decision refusing or cancelling my visa",
          status: "stop",
          note: "If you were in Australia when it was made, you have 9 days to apply to the ART, and it can't be extended. Check the time limit in your decision letter.",
          link: { label: "Find your pathway", href: "#finder" },
        },
      ],
    },
    {
      id: "declared",
      topic: "Declarations",
      question: "Have you declared every charge and conviction, in every country?",
      options: [
        { value: "yes", label: "Yes, everything", status: "ok", note: "Good. Complete, truthful declarations matter in every application." },
        {
          value: "unsure",
          label: "I wasn't sure what to declare",
          status: "todo",
          note: "Declare all charges awaiting action and all convictions in any country, including overseas charges and spent convictions.",
        },
        {
          value: "missed",
          label: "Some things weren't declared",
          status: "stop",
          note: "Undisclosed matters are found through checks and lead to refusal, and can raise PIC 4020 and section 109 problems. Get advice before you do anything else.",
          link: { label: "PIC 4020 explained", href: "/visas/appeals-and-review/pic-4020-fraud-and-false-information" },
        },
      ],
    },
    {
      id: "ties",
      topic: "Family in Australia",
      question: "Do you have close family in Australia, especially children?",
      options: [
        {
          value: "children",
          label: "Yes, including children under 18",
          status: "ok",
          note: "The best interests of minor children in Australia are a primary consideration under Direction No. 110. Give detailed evidence.",
        },
        {
          value: "adults",
          label: "Yes, adult family members",
          status: "ok",
          note: "The strength, nature and duration of your ties to Australia, and the impact on family here, are considerations. Give evidence.",
        },
        {
          value: "none",
          label: "No",
          status: "todo",
          note: "Focus on community protection, rehabilitation and the other Direction No. 110 considerations, with evidence.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "A suspended sentence doesn't count.",
      fact: "It does. Suspended sentences and periodic detention count towards the 12-month threshold for a substantial criminal record. The sentence imposed matters, not the time actually served.",
    },
    {
      myth: "Without a conviction, I'll always pass.",
      fact: "Not always. Conduct, association with criminal groups and the risk of future conduct can fail the test without a conviction. A finding of guilt for a child sexual offence fails it even if no conviction was recorded.",
    },
    {
      myth: "I'll have 28 days to apply to the Tribunal.",
      fact: "If you were in Australia when a delegate decided, you have only 9 days for the expedited review, and the Tribunal can't extend it. Check the time limit in your decision letter.",
    },
    {
      myth: "Hardship and family ties are all that matter.",
      fact: "Direction No. 110 also requires protection of the Australian community, family violence and the expectations of the Australian community to be weighed. Address every consideration, not only hardship and ties.",
    },
    {
      myth: "I can just leave and apply again later.",
      fact: "After leaving following a section 501 refusal or cancellation, you can't meet Special Return Criterion 5001, which most visas require. That changes only if the decision is revoked or the Minister grants a permanent visa.",
    },
    {
      myth: "The ART fee is the same as for other visa reviews.",
      fact: "No. Character reviews use the A$1,195 standard fee, not the A$3,727 migration fee. A reduced fee of A$100 applies in prison or detention, with legal aid or a concession card, under 18, or in hardship.",
    },
    {
      myth: "A win at the Tribunal is always final.",
      fact: "The Minister can personally set aside a delegate's or the Tribunal's favourable decision, or a revocation. Those personal decisions can't be reviewed by the Tribunal and can only be challenged in the Federal Court.",
    },
  ],
  glossary: [
    {
      id: "s501",
      term: "Section 501",
      definition: "The section of the Migration Act that sets the character test. Every visa applicant and visa holder must pass it.",
    },
    {
      id: "scr",
      term: "Substantial criminal record",
      definition: "A sentence of death, life, or 12 months or more in prison, including two or more terms adding up to 12 months. Suspended sentences count.",
    },
    {
      id: "mandatory",
      term: "Mandatory cancellation",
      full: "Section 501(3A)",
      definition: "The visa of a person serving a full-time prison sentence who has a substantial criminal record, or a child sexual offence finding, must be cancelled. Revocation can be requested within 28 days.",
    },
    { id: "revocation", term: "Revocation", definition: "Undoing a mandatory cancellation. If the cancellation is revoked, the visa is reinstated." },
    {
      id: "d110",
      term: "Direction No. 110",
      full: "Ministerial Direction No. 110",
      definition: "The direction setting the considerations decision-makers must weigh, such as protection of the community, family violence, ties to Australia and the best interests of minor children.",
    },
    {
      id: "expedited",
      term: "Expedited review",
      definition: "The faster ART track for character decisions made while you were in Australia. You have 9 days to apply, evidence is due 2 business days before the hearing, and the Tribunal must decide within 84 days.",
    },
    {
      id: "delegate",
      term: "Delegate",
      definition: "A Home Affairs officer who makes decisions on the Minister's behalf. A delegate's character decision can be reviewed by the ART.",
    },
    {
      id: "jurisdictional",
      term: "Jurisdictional error",
      definition: "A legal error in how a decision was made, such as applying the wrong test. The Federal Court can review character decisions for it.",
    },
    {
      id: "s501e",
      term: "Section 501E",
      definition: "After a section 501 refusal or cancellation in Australia, you can't apply for any visa other than a protection visa while you remain here.",
    },
    {
      id: "src5001",
      term: "Special Return Criterion 5001",
      definition: "A criterion most visas require. After leaving following a section 501 decision, you can't meet it. The exceptions: the decision is revoked, or the Minister grants a permanent visa.",
    },
    {
      id: "pic4020",
      term: "PIC 4020",
      definition: "The criterion about bogus documents and false or misleading information. Undeclared charges or convictions can raise it.",
    },
    {
      id: "pic4001",
      term: "PIC 4001",
      definition: "The character requirement in the Migration Regulations. It's assessed again on every later application.",
    },
    {
      id: "form80",
      term: "Form 80",
      definition: "Personal particulars for character assessment: a detailed form about your history that Home Affairs may ask for.",
    },
    {
      id: "police-check",
      term: "National Police Check",
      definition: "An Australian Federal Police check using code 33 (Immigration/Citizenship). It's valid for 12 months.",
    },
  ],
  cta: {
    title: "Character concern? Get advice early",
    subtitle: "We check which time limits apply to you and prepare your response, revocation request or review against Direction No. 110.",
  },
  finder: characterFinder,
};
