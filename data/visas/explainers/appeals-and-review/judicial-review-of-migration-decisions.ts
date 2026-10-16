import { ICON } from "../icons";
import type { VisaExplainer } from "../types";
import { reviewFinder } from "./review-finder";

// Interactive explainer for judicial review of migration decisions. Every
// fact matches the page in data/visas/appeals-and-review.ts (checked against
// the Federal Circuit and Family Court of Australia, the Migration Act and
// Home Affairs on 12 October 2026; court fees from 1 July 2026). No fee
// estimator: the page doesn't say which later fees a reduced-fee approval
// covers, and most costs depend on how far a case goes. Time limits are
// stated only as the page states them; nothing here computes a date.

export const judicialReviewOfMigrationDecisionsExplainer: VisaExplainer = {
  slug: "judicial-review-of-migration-decisions",
  factsAsAt: "12 October 2026",
  oneLiner:
    "If the Tribunal upholds a refusal or cancellation, a court can check whether it decided lawfully. The court can't grant a visa: it can only set a flawed decision aside and send it back.",
  bigIdeas: [
    {
      title: "A check on the law, not the facts",
      body: "The court looks only for jurisdictional error. It doesn't re-decide the facts and can't grant a visa.",
      icon: ICON.scale,
    },
    {
      title: "35 days, then fees and costs",
      body: "Check the time limit in your decision letter: 35 days from the decision. If you lose, you usually pay the Minister's costs.",
      icon: ICON.clock,
    },
    {
      title: "Winning means a fresh decision",
      body: "If the court finds an error, the case goes back to be decided again. The Tribunal can still reach the same result lawfully.",
      icon: ICON.arrowPath,
    },
  ],
  heroCard: [
    { label: "Court", value: "Federal Circuit and Family Court (Division 2)", icon: ICON.buildingOffice2 },
    { label: "Time limit", value: "35 days: check the time limit in your decision letter", icon: ICON.calendarDays },
    { label: "What it checks", value: "Jurisdictional (legal) error only, not the facts", icon: ICON.magnifyingGlass },
    { label: "Filing fee", value: "A$4,180, or A$2,090 if a reduced fee is approved", icon: ICON.currencyDollar },
    { label: "If you lose", value: "Usually the Minister's costs: A$1,821.21 to A$9,097.93", icon: ICON.exclamationTriangle },
    { label: "If you win", value: "Sent back to be decided again; no visa granted", icon: ICON.arrowPath },
  ],
  checkedAgainst: "the Federal Circuit and Family Court of Australia, the Migration Act 1958 and Home Affairs",
  actors: [
    {
      id: "you",
      name: "You (the applicant)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You ask the court to review the Tribunal's decision for [[jurisdictional-error|jurisdictional error]].",
      does: [
        "Get legal advice on the grounds within days",
        "File and pay within the time limit in your decision letter",
        "Apply for a [[bridging|bridging visa]] by webform",
        "Attend every hearing",
      ],
    },
    {
      id: "tribunal",
      name: "Administrative Review Tribunal (ART)",
      short: "The Tribunal",
      icon: ICON.scale,
      tone: "violet",
      role: "Its decision is what the court reviews.",
      does: [
        "Affirms the refusal or cancellation, with reasons",
        "Has its reasons checked for legal error",
        "Decides the case again if the court sends it back",
      ],
    },
    {
      id: "court",
      name: "Federal Circuit and Family Court",
      short: "The court",
      icon: ICON.buildingOffice2,
      tone: "teal",
      role: "Checks whether the Tribunal's decision was made lawfully.",
      does: [
        "Looks only for [[jurisdictional-error|jurisdictional error]]",
        "Can set the decision aside and send the case back",
        "Can't reconsider the facts or grant a visa",
        "Usually orders costs against an applicant who loses",
      ],
    },
    {
      id: "government",
      name: "The Minister and Home Affairs",
      short: "Minister",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "The Minister is the other party in court. Home Affairs handles your bridging visa.",
      does: [
        "Is served with your application, and files a response",
        "May apply for [[summary-judgment|summary judgment]]",
        "Can appeal if you win",
        "Decides your bridging visa application",
      ],
    },
  ],
  flows: [
    {
      from: "tribunal",
      to: "you",
      label: "Decision affirmed",
      detail: "The Tribunal affirms the refusal or cancellation. The 35 days run from the date of the decision, which may differ from the date on your letter: check the time limit in your decision letter.",
    },
    {
      from: "you",
      to: "court",
      label: "Files application",
      detail: "You file an [[originating-application|originating application]] setting out the legal errors, with an [[affidavit|affidavit]], and pay the filing fee.",
    },
    {
      from: "you",
      to: "government",
      label: "Bridging visa webform",
      detail: "You apply to Home Affairs for a [[bridging|bridging visa]] by webform, so you stay lawful while the case runs.",
    },
    {
      from: "government",
      to: "court",
      label: "Minister responds",
      detail: "You serve the Minister, whose lawyers file a response. The Minister may seek [[summary-judgment|summary judgment]] if the case has no reasonable prospects.",
    },
    {
      from: "court",
      to: "tribunal",
      label: "Sent back if error",
      detail: "If the court finds jurisdictional error, it sets the decision aside and sends the case back to be decided again according to law.",
    },
    {
      from: "court",
      to: "you",
      label: "Judgment and costs",
      detail: "If there's no error, the application is dismissed and the Minister's [[scale-costs|costs]] are usually ordered against you.",
    },
  ],
  journeyTitle: "From the Tribunal's decision to the court's judgment",
  journeyHighlight: "the court's judgment",
  stages: [
    {
      id: "advice",
      short: "Advice",
      title: "Get advice on the grounds, fast",
      who: ["you"],
      description: "Look for a [[jurisdictional-error|jurisdictional error]] in the Tribunal's reasons. The 35 days run from the decision date, so get advice within days, and check the time limit in your decision letter.",
      points: [
        "Failing to consider a claim, or a mandatory consideration",
        "Denying [[procedural-fairness|procedural fairness]]",
        "Misunderstanding the legal test, or a finding with no evidence to support it",
        "Disagreeing with the facts found isn't enough",
      ],
      youHold: "A view on whether there's an arguable jurisdictional error",
      icon: ICON.lightBulb,
    },
    {
      id: "file",
      short: "File",
      title: "File within 35 days and pay the fee",
      who: ["you", "court"],
      description: "File the [[originating-application|originating application]] and a supporting [[affidavit|affidavit]] with the court. Check the time limit in your decision letter.",
      points: [
        "Filing fee A$4,180 from 1 July 2026",
        "A$2,090 if a reduced fee is approved, or apply for an exemption",
        "Late? Ask for an [[extension|extension of time]] in the application and explain why",
      ],
      youHold: "A sealed application and a court file number",
      cost: "A$4,180, or A$2,090 if a reduced fee is approved",
      icon: ICON.documentText,
    },
    {
      id: "bridging",
      short: "Bridging",
      title: "Apply for a bridging visa",
      who: ["you", "government"],
      description: "Lodge the bridging visa webform with Home Affairs so you stay lawful while the case runs.",
      points: [
        "Home Affairs says this application can only be made by webform",
        "Each applicant's bridging visa is dealt with separately",
        "A [[bva|Bridging visa A]] for judicial review ceases 28 days after the court upholds the refusal",
      ],
      youHold: "A bridging visa in effect for the court case",
      icon: ICON.shieldCheck,
    },
    {
      id: "serve",
      short: "Serve",
      title: "Serve the Minister and prepare your case",
      who: ["you", "government"],
      description: "Serve the sealed application on the Minister. The Minister's lawyers respond, and the court or a Registrar sets a timetable.",
      points: [
        "Ask the Tribunal for its hearing recording: free for migration cases",
        "Get the Tribunal file and the documents Home Affairs gave the Tribunal",
        "Prepare written submissions on each ground",
      ],
      youHold: "Service done and a timetable set",
      icon: ICON.envelope,
    },
    {
      id: "interlocutory",
      short: "Hearings",
      title: "Deal with hearings before the final one",
      who: ["court", "government", "you"],
      description: "The Minister may apply for [[summary-judgment|summary judgment]] if the case has no reasonable prospects. A separate hearing decides any extension of time.",
      points: [
        "Attend every listed hearing",
        "Missing one can lead to dismissal in your absence, with costs",
        "Your own [[interlocutory|interlocutory application]] costs A$505 to file",
      ],
      youHold: "A case listed for final hearing",
      icon: ICON.calendarDays,
    },
    {
      id: "hearing",
      short: "Judgment",
      title: "Final hearing and judgment",
      who: ["court"],
      description: "The judge hears both sides and decides whether there was jurisdictional error.",
      points: [
        "[[setting-down|Setting-down fee]] A$1,035, plus A$1,035 for each hearing day after the first",
        "Error found: the decision is set aside and the case is sent back",
        "No error: the application is dismissed, usually with costs against you",
        "[[scale-costs|Scale costs]] for a case concluded at a final hearing: A$9,097.93",
      ],
      youHold: "A judgment and a costs order",
      cost: "A$1,035 setting-down fee, paid before the final hearing",
      icon: ICON.scale,
    },
    {
      id: "after",
      short: "After",
      title: "After the judgment",
      who: ["you", "tribunal"],
      description: "A win sends the case back to the Tribunal for a fresh decision. A loss ends a Bridging visa A for judicial review 28 days after the judgment.",
      points: [
        "The Tribunal can still affirm the refusal on a proper basis",
        "The Minister may appeal a judgment in your favour",
        "You can appeal to the [[federal-court|Federal Court]] on a question of law: get advice first",
        "A [[costs-order|costs order]] is a debt that can affect later visas",
      ],
      youHold: "A fresh Tribunal decision, or a decision whether to appeal",
      icon: ICON.arrowPath,
    },
  ],
  check: {
    title: "Could judicial review be open to you?",
    highlight: "judicial review",
    ok: {
      title: "Judicial review may be open to you",
      body: "Nothing in your answers rules out an application. A lawyer needs to confirm an arguable legal error quickly: check the time limit in your decision letter.",
    },
    todo: {
      title: "Possible, with urgent things to sort",
      body: "None of these rules out an application on its own, but each needs attention within the time limit. Check the time limit in your decision letter.",
    },
    stop: {
      title: "A hurdle stands in the way",
      body: "At least one answer means the court may not be the right place, or your case faces a serious obstacle. The notes below explain why and what may work instead.",
    },
    disclaimer:
      "A general self-check, not legal advice or a prediction. Only the court decides whether there was a jurisdictional error. Check the time limit in your decision letter.",
  },
  quiz: [
    {
      id: "decision",
      topic: "The decision",
      question: "Which decision do you want to challenge?",
      options: [
        {
          value: "art",
          label: "An ART decision affirming my refusal or cancellation",
          status: "ok",
          note: "That's the usual starting point for judicial review in the Federal Circuit and Family Court.",
        },
        {
          value: "primary",
          label: "A Home Affairs decision that the ART can review",
          status: "stop",
          note: "The court can't review primary decisions the Tribunal can review. Go to the ART first: check the time limit in your decision letter.",
          link: { label: "ART review of a visa refusal", href: "/visas/appeals-and-review/art-review-of-visa-refusal" },
        },
        {
          value: "character",
          label: "A character decision by the Tribunal, or by the Minister personally",
          status: "todo",
          note: "Tribunal character decisions, and character decisions made personally by the Minister, go to the Federal Court of Australia instead.",
          link: { label: "Character test (section 501)", href: "/visas/appeals-and-review/character-test-section-501" },
        },
      ],
    },
    {
      id: "time",
      topic: "Time limit",
      question: "Is it within 35 days of the date of the Tribunal's decision?",
      help: "The decision date may be earlier than the date on your letter. Check the time limit in your decision letter.",
      options: [
        {
          value: "within",
          label: "Yes, I've checked the decision date",
          status: "ok",
          note: "Act now anyway: advice and filing both take time. The 35 days run from the date of the decision, so check the time limit in your decision letter.",
        },
        {
          value: "unsure",
          label: "I'm not sure of the decision date",
          status: "todo",
          note: "Check the time limit in your decision letter today. The 35 days run from the date of the decision, which may differ from the date on the notification letter.",
        },
        {
          value: "late",
          label: "No, more than 35 days have passed",
          status: "stop",
          note: "You'd need to ask for an extension in your application and explain why. The court extends time only if that's necessary in the interests of the administration of justice.",
          link: { label: "Get urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "grounds",
      topic: "Your grounds",
      question: "What's your main complaint about the Tribunal's decision?",
      options: [
        {
          value: "law",
          label: "It applied the wrong legal test, or ignored part of my case",
          status: "ok",
          note: "Errors like these can be jurisdictional errors. Get legal advice on whether yours is arguable.",
        },
        {
          value: "fairness",
          label: "I wasn't given a fair chance to answer adverse information",
          status: "ok",
          note: "Denying procedural fairness can be a jurisdictional error.",
          link: { label: "Natural justice explained", href: "/visas/appeals-and-review/natural-justice-and-adverse-information" },
        },
        {
          value: "facts",
          label: "It got the facts wrong, or didn't believe me",
          status: "stop",
          note: "Disagreeing with the facts isn't enough. Merits arguments, rather than legal errors, can lead to summary dismissal and a costs order.",
        },
        {
          value: "new",
          label: "I have new evidence the Tribunal never saw",
          status: "stop",
          note: "The court can't take new factual evidence, unless it's relevant to whether an error was made.",
        },
      ],
    },
    {
      id: "costs",
      topic: "Fees and costs",
      question: "Can you meet the court fees and the costs risk?",
      options: [
        {
          value: "yes",
          label: "Yes, and I understand I may pay the Minister's costs if I lose",
          status: "ok",
          note: "Filing is A$4,180 and setting down is A$1,035. Scale costs for a case concluded at a final hearing are A$9,097.93.",
        },
        {
          value: "reduced",
          label: "I may need a fee reduction or exemption",
          status: "todo",
          note: "A reduced filing fee of A$2,090, or an exemption, is available for certain concession card holders and financial hardship, on application to the court.",
        },
        {
          value: "no",
          label: "No, the costs risk is too much for me",
          status: "todo",
          note: "Weigh it carefully with advice. Another option after a Tribunal decision is a ministerial intervention request, which is non-compellable.",
          link: { label: "Ministerial intervention", href: "/visas/appeals-and-review/ministerial-intervention" },
        },
      ],
    },
    {
      id: "bridging",
      topic: "Bridging visa",
      question: "Have you applied for a bridging visa for the court case?",
      options: [
        {
          value: "yes",
          label: "Yes, by webform",
          status: "ok",
          note: "Keep it in effect. A Bridging visa A for judicial review ceases 28 days after the court upholds the refusal or you withdraw.",
        },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "Home Affairs says that once you apply for judicial review you must apply for a bridging visa to stay lawful, by webform only.",
          link: { label: "Bridging visas A, B, C and E", href: "/visas/other-visas/bridging-visas-a-b-c-e" },
        },
      ],
    },
    {
      id: "lawyer",
      topic: "Legal help",
      question: "Do you have a lawyer for the case?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Good. The court strongly recommends legal representation." },
        {
          value: "no",
          label: "Not yet",
          status: "todo",
          note: "The court strongly recommends legal representation. The case turns on legal error, and a dismissed case usually ends in a costs order.",
        },
      ],
    },
    {
      id: "travel",
      topic: "Staying in Australia",
      question: "Do you plan to leave Australia while the case runs?",
      options: [
        { value: "no", label: "No, I'll stay", status: "ok", note: "Attend every hearing: missing a court date can lead to dismissal in your absence, with costs." },
        {
          value: "yes",
          label: "Yes, with no right to return",
          status: "stop",
          note: "Leaving Australia with no right of return can cause the court to dismiss the matter.",
        },
      ],
    },
  ],
  myths: [
    {
      myth: "The court can give me the visa.",
      fact: "No. If the court finds jurisdictional error, it sets the decision aside and sends the case back to be decided again according to law. It can't grant a visa.",
    },
    {
      myth: "I can argue that the Tribunal got the facts wrong.",
      fact: "Disagreeing with the facts isn't enough. The court looks only at whether the decision was made lawfully, and merits arguments can lead to summary dismissal and costs.",
    },
    {
      myth: "My 35 days start from the date on my letter.",
      fact: "They run from the date of the decision, which may differ from the date on the notification letter. Check the time limit in your decision letter.",
    },
    {
      myth: "If I lose, I only pay my own fees.",
      fact: "An unsuccessful applicant usually pays the Minister's legal costs too. On the court's scale, that's A$9,097.93 for a case concluded at a final hearing.",
    },
    {
      myth: "My bridging visa automatically covers the court case.",
      fact: "No. Home Affairs states that if you apply for judicial review you must apply for a bridging visa to stay lawful, and only by webform.",
    },
    {
      myth: "If I win, I'll get my visa.",
      fact: "A win sends the case back for a fresh decision. The Tribunal can still affirm the refusal on a proper basis, and the Minister may appeal.",
    },
    {
      myth: "I can skip the Tribunal and go straight to court.",
      fact: "Not for decisions the Tribunal can review. The court can't review those primary decisions, so you go to the Tribunal first.",
    },
  ],
  glossary: [
    {
      id: "jurisdictional-error",
      term: "Jurisdictional error",
      definition: "A legal mistake that means a decision wasn't made lawfully. Examples: ignoring a claim, denying procedural fairness, misunderstanding the legal test, or a finding with no evidence to support it.",
    },
    {
      id: "fcfcoa",
      term: "FCFCOA",
      full: "Federal Circuit and Family Court of Australia",
      definition: "The court where most migration judicial review starts, in Division 2. Character decisions go to the Federal Court of Australia.",
    },
    {
      id: "merits",
      term: "Merits review",
      definition: "A fresh look at the facts and the law, which the Tribunal does. The court doesn't: it checks only whether the decision was made lawfully.",
    },
    {
      id: "procedural-fairness",
      term: "Procedural fairness",
      definition: "A fair process, including a real chance to answer adverse information before the decision. Denying it can be a jurisdictional error.",
    },
    {
      id: "originating-application",
      term: "Originating application",
      definition: "The document that starts your court case (Originating application - Migration Act). It identifies the decision and the jurisdictional errors you allege.",
    },
    {
      id: "affidavit",
      term: "Affidavit",
      definition: "A written statement filed with your application. It attaches the Tribunal's decision and reasons, the Home Affairs decision and the notification letter.",
    },
    {
      id: "summary-judgment",
      term: "Summary judgment",
      definition: "An early end to a case that has no reasonable prospects. The Minister may apply for it, and a costs order against you usually follows.",
    },
    {
      id: "setting-down",
      term: "Setting-down fee",
      definition: "A fee of A$1,035 for individuals, paid before the final hearing. Each hearing day after the first also costs A$1,035.",
    },
    {
      id: "scale-costs",
      term: "Scale costs",
      definition: "The court's set amounts for the Minister's legal costs: from A$1,821.21 to A$9,097.93 for a concluded proceeding, depending on the stage reached. An applicant who loses usually pays them.",
    },
    {
      id: "interlocutory",
      term: "Interlocutory application",
      definition: "An application about a step in the case, rather than the final decision. Filing one costs A$505 for individuals.",
    },
    {
      id: "extension",
      term: "Extension of time",
      definition: "The court can allow a late application. You must ask for it in the application and explain why. The court must also be satisfied it's necessary in the interests of the administration of justice.",
    },
    {
      id: "bridging",
      term: "Bridging visa",
      definition: "A temporary visa that keeps you lawful while your case runs. For judicial review, Home Affairs says you apply by webform only.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "When granted for judicial review, it ceases 28 days after the court upholds the refusal or you withdraw your application.",
    },
    {
      id: "federal-court",
      term: "Federal Court of Australia",
      definition: "Hears appeals from Division 2 on questions of law, usually before a single judge. It also hears judicial review of Tribunal and ministerial character decisions.",
    },
    {
      id: "high-court",
      term: "High Court",
      definition: "Can review decisions of Commonwealth officers under section 75(v) of the Constitution, but usually sends migration matters to a lower court. A further appeal to it needs special leave.",
    },
    {
      id: "costs-order",
      term: "Costs order",
      definition: "An order to pay the other side's legal costs. It's a debt that can affect later visa applications.",
    },
    {
      id: "art",
      term: "ART",
      full: "Administrative Review Tribunal",
      definition: "The tribunal that reviews most visa refusals and cancellations on the merits. Its decision is what the court reviews.",
    },
  ],
  verifiedExtras: [
    {
      fact: "At the ART, the Tribunal reviews the decision afresh and can consider documents the Department never saw.",
      source: "/visas/appeals-and-review/art-review-of-visa-refusal",
    },
    {
      fact: "A bridging visa keeps you lawful in Australia while a visa application, a review or your departure is sorted out.",
      source: "/visas/other-visas/bridging-visas-a-b-c-e",
    },
  ],
  cta: {
    title: "Lost at the Tribunal? Talk to us quickly",
    subtitle: "We read the Tribunal's reasons with you and explain honestly which options remain. Then we help you act within the time limit in your decision letter.",
  },
  finder: reviewFinder,
};
