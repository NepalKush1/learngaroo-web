import type { FinderConfig } from "../types";

// Shared finder for the appeals and review guides (parts A and B): "What can
// you do after a refusal or cancellation?" Every outcome points to a library
// page and every fact comes from those pages (checked 12 October 2026).
// Time limits appear only as the pages state them, always with a prompt to
// check the decision letter; nothing here computes a date.
// Other pages reuse this file, so keep question and outcome ids stable.

export const reviewFinder: FinderConfig = {
  id: "review-finder",
  navLabel: "Your options",
  eyebrow: "Your options",
  title: "What can you do after a refusal or cancellation?",
  highlight: "refusal or cancellation",
  subtitle: "A few one-tap questions point you to the guide that fits where you are now, with the main things to check first.",
  start: "stage",
  questions: [
    {
      id: "stage",
      question: "Where are things up to?",
      options: [
        {
          label: "I've received a letter, but no decision has been made yet",
          hint: "For example a notice of intention to cancel, or an invitation to comment",
          next: "letter",
        },
        { label: "My visa application was refused", next: "refusal" },
        { label: "My visa was cancelled", next: "cancellation" },
        { label: "The Tribunal (ART) has reviewed my case and decided against me", next: "after-art" },
      ],
    },
    {
      id: "letter",
      question: "What is the letter about?",
      options: [
        {
          label: "Cancelling a visa I already hold",
          hint: "Often called a Notice of Intention to Consider Cancellation",
          next: "noicc",
        },
        {
          label: "Information that could lead to my application being refused",
          hint: "Often called a natural justice letter or an invitation to comment",
          next: "natural-justice",
        },
        { label: "My character, under section 501", next: "character" },
      ],
    },
    {
      id: "refusal",
      question: "What does your decision letter say about review?",
      help: "Your decision letter states whether the Administrative Review Tribunal (ART) can review the decision, who may apply and the time limit.",
      options: [
        { label: "I can apply to the Administrative Review Tribunal (ART)", next: "refusal-where" },
        { label: "It was refused on character grounds, under section 501", next: "character" },
        { label: "The Tribunal can't review it", next: "refusal-no-review" },
        { label: "I'm not sure", next: "unsure" },
      ],
    },
    {
      id: "refusal-where",
      question: "Where was the visa application made?",
      options: [
        { label: "In Australia", next: "art-refusal" },
        {
          label: "Outside Australia",
          hint: "Review of offshore refusals is mostly for visas with an Australian sponsor or nominator",
          next: "art-offshore",
        },
      ],
    },
    {
      id: "refusal-no-review",
      question: "Are you in Australia, holding only a bridging visa or no visa at all?",
      options: [
        { label: "Yes", next: "s48" },
        { label: "No: I'm outside Australia, or I still hold another visa", next: "no-review" },
      ],
    },
    {
      id: "cancellation",
      question: "What does your cancellation notice say?",
      help: "The notice states the section used, the reasons, whether the Tribunal can review the decision and the time limit.",
      options: [
        {
          label: "It was cancelled under section 109, 116, 128 or 140",
          hint: "For example incorrect information, a breach of a condition, cancellation while overseas, or a family member's visa being cancelled",
          next: "cancel-where",
        },
        { label: "It was cancelled on character grounds, under section 501", next: "character" },
        { label: "The Minister cancelled it personally", next: "minister" },
        { label: "I'm not sure", next: "unsure" },
      ],
    },
    {
      id: "cancel-where",
      question: "Where were you when the visa was cancelled?",
      options: [
        { label: "In Australia", next: "art-cancellation" },
        { label: "At the airport, when I arrived in Australia", hint: "In immigration clearance", next: "border" },
        { label: "Outside Australia", next: "offshore-cancellation" },
      ],
    },
    {
      id: "after-art",
      question: "What do you want to explore?",
      options: [
        {
          label: "I think the Tribunal made a legal error",
          hint: "For example it ignored part of my case, or didn't put adverse information to me",
          next: "judicial-review",
        },
        {
          label: "I have compelling circumstances the visa rules couldn't take into account",
          hint: "For example Australian citizen family members, or humanitarian circumstances",
          next: "ministerial",
        },
        { label: "Which visas I can still apply for in Australia", next: "s48" },
        { label: "Leaving Australia and applying again from overseas", next: "exclusion" },
      ],
    },
  ],
  outcomes: [
    {
      id: "noicc",
      title: "Respond to the notice of intention",
      body: "Your visa hasn't been cancelled yet. The notice sets out the ground and the information Home Affairs relies on. It invites you to show the ground doesn't exist, or why the visa shouldn't be cancelled. Responding costs nothing.",
      watch: [
        "Respond within the time stated in the notice, and ask in writing for more time before it ends if you need it",
        "Leaving Australia after receiving a notice can allow cancellation without further notice",
        "Include family members whose visas depend on yours: their visas fall with yours",
      ],
      href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
    },
    {
      id: "natural-justice",
      title: "Answer the invitation to comment",
      body: "Before refusing most applications made in Australia, Home Affairs must give you particulars of adverse information it relies on and invite your comment. Answer each point with evidence: if you don't respond in time, it can decide on the information it has.",
      watch: [
        "Respond within the period stated in the letter, and ask in writing before it ends if you need more time",
        "Answer each item of adverse information in turn, with independent documents where you can",
      ],
      href: "/visas/appeals-and-review/natural-justice-and-adverse-information",
    },
    {
      id: "character",
      title: "Character decisions (section 501)",
      body: "Character matters follow their own track. A notice of intention gives you a period to respond. If a delegate refuses or cancels while you're in Australia, the ART time limit is 9 days and the fee is A$1,195. A visa cancelled while you're in prison has a 28-day window to ask for revocation.",
      watch: [
        "Check the time limit in your decision letter: the 9-day review limit and the 28-day revocation period can't be extended",
        "Decisions made personally by the Minister can only be challenged in court",
        "After a section 501 refusal or cancellation, leaving means you can't satisfy Special Return Criterion 5001, which most visas require. That changes only if the decision is revoked or the Minister grants a permanent visa",
      ],
      href: "/visas/appeals-and-review/character-test-section-501",
    },
    {
      id: "art-refusal",
      title: "ART review of a visa refusal",
      body: "The Administrative Review Tribunal can review most refusals of visas applied for in Australia. It takes a fresh look at the facts and the law, and can consider new evidence. You must be in Australia when you apply. The review keeps most applicants lawful on a bridging visa while it runs.",
      watch: [
        "Check the time limit in your decision letter: usually 28 days after you're notified (14 in detention), with no extensions",
        "The A$3,727 fee must be paid by the deadline (a 50% reduction is available for financial hardship)",
        "Family members refused in the same application should be named in the same review, or tell the Tribunal within 14 days",
      ],
      href: "/visas/appeals-and-review/art-review-of-visa-refusal",
    },
    {
      id: "art-offshore",
      title: "ART review by your Australian sponsor",
      body: "Some offshore visas with an Australian sponsor or nominator can be reviewed, such as partner, parent, child or employer-sponsored visas. For most of these, the sponsor, nominator or relative in Australia applies, not the person overseas.",
      watch: [
        "Check the time limit in your decision letter, and who it says may apply",
        "The A$3,727 fee must be paid by the deadline",
        "Evidence can include statutory declarations from you, your sponsor and witnesses",
      ],
      href: "/visas/appeals-and-review/art-review-of-visa-refusal",
    },
    {
      id: "s48",
      title: "The section 48 bar: what you can still apply for",
      body: "The bar applies if a visa was refused or cancelled since you last entered Australia and you hold no substantive visa. You can then apply in Australia only for prescribed visas. They include partner, protection, child, medical treatment, bridging and the subclass 190, 491 and 494 skilled visas.",
      watch: [
        "Any other visa you lodge in Australia is invalid",
        "After a character decision, section 501E is stricter: only a protection visa",
        "Schedule 3 criteria still apply to a partner visa lodged without a substantive visa",
      ],
      href: "/visas/appeals-and-review/section-48-bar",
    },
    {
      id: "no-review",
      title: "No Tribunal review: what's left",
      body: "If your letter says the Tribunal can't review the decision, there's no merits review. A court may still be able to check whether it was made lawfully (judicial review). A court can't look at the facts afresh or grant a visa. A new application may also be possible.",
      watch: [
        "Check the time limit in your decision letter",
        "Judicial review applications must usually be filed within 35 days of the decision",
        "Before applying again, check whether an exclusion period applies, for example after a PIC 4020 refusal",
      ],
      href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
    {
      id: "unsure",
      title: "Start with your decision letter",
      body: "Your decision letter or cancellation notice states whether the Tribunal can review the decision, who may apply and the time limit. If you can't find it, or it isn't clear, get advice straight away: the time limit may already be running.",
      watch: [
        "Check the time limit in your decision letter",
        "The clock runs from when you're taken to have received the letter, not the date it was signed",
      ],
    },
    {
      id: "art-cancellation",
      title: "ART review of a visa cancellation",
      body: "A cancellation under section 109, 116 or 140 made while you were in Australia can usually be reviewed by the Tribunal. The cancellation takes effect straight away, so you usually also need a Bridging visa E to stay lawful while the review runs.",
      watch: [
        "Check the time limit in your decision letter: usually 28 days, or 14 days in immigration detention, and it can't be extended",
        "Apply for a Bridging visa E straight away",
        "Each family member whose visa was cancelled needs their own review",
      ],
      href: "/visas/appeals-and-review/art-review-of-visa-cancellation",
    },
    {
      id: "border",
      title: "Cancelled at the airport",
      body: "Cancellations made in immigration clearance, when you arrive, can't be reviewed by the Tribunal and lead to removal. Get advice straight away about any options left in your situation.",
      watch: ["A cancellation creates a 3-year risk factor for most temporary visas (PIC 4013)"],
      href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
      tone: "stop",
    },
    {
      id: "offshore-cancellation",
      title: "Cancelled while you were overseas",
      body: "A visa can be cancelled without prior notice while you're outside Australia (section 128). You're told afterwards and can ask Home Affairs to revoke the cancellation within the time stated in the notice.",
      watch: [
        "Check the time limit in your cancellation notice",
        "Whether the Tribunal can review the outcome depends on the type of decision",
        "A cancellation creates a 3-year risk factor for most temporary visas (PIC 4013)",
      ],
      href: "/visas/appeals-and-review/visa-cancellation-and-notice-of-intention",
    },
    {
      id: "minister",
      title: "A decision made personally by the Minister",
      body: "The Tribunal can't review decisions the Minister makes personally, such as cancellations under section 133A, 133C or 501(3). The only challenge is judicial review in the courts, which looks at whether the decision was made lawfully.",
      watch: [
        "Judicial review applications must usually be filed within 35 days of the decision",
        "Get legal advice quickly",
      ],
      href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
    {
      id: "judicial-review",
      title: "Judicial review in the courts",
      body: "A court can check the Tribunal's decision for a legal (jurisdictional) error. Examples include ignoring part of your case, or not giving you a fair chance to answer adverse information. The court can't reconsider the facts or grant a visa, but it can send the case back to be decided again.",
      watch: [
        "File within 35 days of the decision: that date may differ from the date on the letter",
        "If you lose, you usually pay the Minister's legal costs",
        "Apply for a bridging visa so you stay lawful during the case",
        "Character decisions go to the Federal Court",
      ],
      href: "/visas/appeals-and-review/judicial-review-of-migration-decisions",
    },
    {
      id: "ministerial",
      title: "Ask the Minister to intervene",
      body: "After a Tribunal decision, the Minister can personally replace it with a more favourable one, if it's in the public interest. There's no right to this. The Minister doesn't have to consider a request, a request doesn't give you a bridging visa, and there's no review.",
      watch: [
        "Stay lawful first: apply for a Bridging visa E if you can",
        "Requests from people who may be eligible for a partner visa aren't referred to the Minister",
        "Judicial review has its own 35-day limit, separate from any request",
      ],
      href: "/visas/appeals-and-review/ministerial-intervention",
    },
    {
      id: "exclusion",
      title: "Leaving and applying again from overseas",
      body: "Leaving Australia ends the section 48 bar, because it only counts decisions made since your last entry. But a cancellation creates a 3-year risk factor for most temporary visas (PIC 4013). So does leaving as an unlawful non-citizen after overstaying by more than 28 days (PIC 4014).",
      watch: [
        "Within the 3 years, a visa can still be granted if compelling circumstances affecting Australia's interests justify it. Compassionate or compelling circumstances affecting an Australian citizen, permanent resident or eligible New Zealand citizen can too",
        "Removal or detention debts to the Commonwealth must be paid or arranged before most visas are granted (PIC 4004)",
        "After a section 501 refusal or cancellation, leaving means you can't satisfy Special Return Criterion 5001, which most visas require. That changes only if the decision is revoked or the Minister grants a permanent visa",
      ],
      href: "/visas/appeals-and-review/exclusion-periods-pic-4013-4014",
    },
  ],
  footnote:
    "General information only, not legal advice. Some time limits can't be extended at all, so check the time limit in your decision letter and get advice early.",
};
