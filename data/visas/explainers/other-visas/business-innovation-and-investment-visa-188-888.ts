import type { VisaExplainer } from "../types";
import { ICON } from "../icons";

// Interactive explainer for the Business Innovation and Investment visas
// (subclasses 188 and 888). Every fact matches data/visas/other-visas-resident.ts
// (checked against Home Affairs on 12 October 2026). The page states the 188
// closed to new applications on 31 July 2024 (Premium Investor 1 July 2024);
// only the two extension streams remain, for existing holders. The Significant
// Investor Extension charge and the second instalment are not on the page, so
// the fee estimator leaves them out and says so.

export const businessInnovationAndInvestmentVisa188888Explainer: VisaExplainer = {
  slug: "business-innovation-and-investment-visa-188-888",
  factsAsAt: "12 October 2026",
  oneLiner:
    "The 188 was a provisional visa for business owners and investors that led to the permanent 888. It's closed to new applicants, but existing 188 holders can still apply for the 888 in their stream.",
  bigIdeas: [
    { title: "Closed to new applicants", body: "Home Affairs states the 188 closed to new applications on 31 July 2024. Applications lodged before then are still processed.", icon: ICON.noSymbol },
    { title: "Your 188 stream sets the path", body: "Existing holders apply for the 888 in the matching stream, once they meet its business or investment rules.", icon: ICON.arrowsRightLeft },
    { title: "Extensions if you need time", body: "Business Innovation and Significant Investor holders can extend their 188 if they can't meet the 888 rules yet.", icon: ICON.arrowPath },
  ],
  heroCard: [
    { label: "New 188 applications", value: "Closed since 31 July 2024", icon: ICON.noSymbol },
    { label: "Who can still apply", value: "Existing 188 holders, for the matching 888", icon: ICON.user },
    { label: "Nomination", value: "Your nominator must confirm it's still current", icon: ICON.buildingOffice2 },
    { label: "Need more time?", value: "Two extension streams for existing holders", icon: ICON.arrowPath },
    { label: "The 888 gives you", value: "Permanent residence, 5-year travel facility", icon: ICON.home },
    { label: "Cost", value: "A$4,375 for the 888, plus family charges", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "you",
      name: "You (the 188 holder)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You hold a 188 and want permanent residence through the matching 888 stream.",
      does: [
        "Meet your stream's business or investment rules",
        "Meet your stream's count of days in Australia",
        "Apply online and pay A$4,375",
        "Show [[functional-english|functional English]], or pay the [[second-instalment|second instalment]]",
      ],
    },
    {
      id: "nominator",
      name: "Your nominator",
      short: "Nominator",
      icon: ICON.buildingOffice2,
      tone: "teal",
      role: "The state or territory government agency, or [[austrade|Austrade]], that nominated you for the 188.",
      does: [
        "Confirms your [[nomination|nomination]] is still current",
        "Can decide exceptional circumstances for the Business Innovation turnover, assets and employee rules",
        "May give a statement of success (Entrepreneur stream)",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides your 888 application against your stream's rules.",
      does: [
        "Checks your business or investment evidence",
        "Checks your days in Australia against movement records",
        "Checks health, character and English",
        "Grants the permanent 888",
      ],
    },
  ],
  flows: [
    {
      from: "you",
      to: "nominator",
      label: "Ask to confirm",
      detail: "You ask the agency, or Austrade, that nominated you for the 188 to confirm your [[nomination|nomination]] is still current. You don't lodge a new expression of interest.",
    },
    {
      from: "nominator",
      to: "government",
      label: "Confirms nomination",
      detail: "The nominator confirms the nomination is current. For the Business Innovation stream it can also decide that exceptional circumstances apply to the turnover, assets and employee rules.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply for the 888",
      detail: "You apply online, in or outside Australia, with your business or investment evidence and records of your days in Australia. The charge is A$4,375.",
    },
    {
      from: "government",
      to: "you",
      label: "Permanent visa granted",
      detail: "Home Affairs checks your stream's rules, health, character and English, and grants the permanent 888 with a 5-year travel facility.",
    },
  ],
  journeyTitle: "From your 188 to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "stream",
      short: "Timing",
      title: "Confirm your stream and timing",
      who: ["you"],
      description: "The 888 is only available in the stream that matches your 188. Check when you were invited and how long you've held the visa.",
      points: [
        "Invited on or after 1 July 2021: usually at least 3 years on the 188 first",
        "Will your 188 expire first? Look at the extension streams",
        "Some streams have an application window",
      ],
      youHold: "A timeline showing when you meet the 888 rules",
      icon: ICON.calendarDays,
    },
    {
      id: "nomination",
      short: "Nominator",
      title: "Ask your nominator to confirm",
      who: ["you", "nominator"],
      description: "Contact the state or territory agency, or [[austrade|Austrade]], that nominated you, and give them the evidence they need.",
      points: [
        "You don't lodge a new expression of interest",
        "Business Innovation: they can decide exceptional circumstances for turnover, assets and employees",
      ],
      youHold: "A current nomination",
      icon: ICON.buildingOffice2,
    },
    {
      id: "evidence",
      short: "Evidence",
      title: "Gather your evidence",
      who: ["you"],
      description: "Collect the records your stream needs, plus travel records showing your days in Australia.",
      points: [
        "Business: 2 years of financials, ownership and employee records",
        "Investment: statements covering the whole 188 period",
        "Residence: your days in Australia, which are checked against movement records",
      ],
      youHold: "A complete evidence set for your stream",
      icon: ICON.documentText,
    },
    {
      id: "apply",
      short: "Apply",
      title: "Apply online and pay",
      who: ["you"],
      description: "Apply in ImmiAccount, in or outside Australia, but not in immigration clearance. Include family members, or add them before a decision.",
      points: [
        "A$4,375, plus A$2,195 per adult and A$1,090 per child included",
        "Applying in Australia usually brings a [[bva|Bridging visa A]]",
        "You need a Bridging visa B to travel once the BVA is in effect",
      ],
      youHold: "A lodged 888 application and a transaction reference number",
      cost: "A$4,375 for you, plus family charges",
      icon: ICON.paperAirplane,
    },
    {
      id: "checks",
      short: "Checks",
      title: "Health, character and English",
      who: ["you", "government"],
      description: "Arrange health examinations when asked and provide police certificates.",
      points: [
        "[[functional-english|Functional English]] for each applicant 18 or over, or the [[second-instalment|second instalment]]",
        "Don't pay the second instalment before Home Affairs requests it",
        "Applicants 18 or over sign the Australian Values Statement",
      ],
      youHold: "Health and character clearances, and English evidence or a paid second instalment",
      icon: ICON.shieldCheck,
    },
    {
      id: "grant",
      short: "PR",
      title: "Permanent residence",
      who: ["government", "you"],
      description: "The 888 is a permanent visa with a 5-year travel facility. You can enrol in Medicare, sponsor eligible relatives and later apply for citizenship.",
      points: [
        "Travel after 5 years needs a Resident Return visa",
        "For citizenship, permanent residence starts on grant if you're in Australia, or the day you enter",
        "The Minister can cancel a business visa if the activity wasn't genuinely carried on",
      ],
      youHold: "Permanent residence on the 888",
      icon: ICON.home,
    },
  ],
  check: {
    title: "Are you ready to apply for the 888?",
    highlight: "the 888",
    ok: {
      title: "You look ready to prepare your 888",
      body: "Nothing in your answers rules you out. The next step is checking your stream's figures and getting your nominator's confirmation.",
    },
  },
  quiz: [
    {
      id: "hold",
      topic: "Your 188",
      question: "Do you hold a subclass 188 visa?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "The 888 is open to you in the stream that matches your 188." },
        {
          value: "pending",
          label: "I'm waiting on a 188 application lodged before 31 July 2024",
          status: "todo",
          note: "It's still being processed. In most streams you can also withdraw and request a refund of the 188 charge.",
          link: { label: "Open the stream finder", href: "#finder" },
        },
        {
          value: "new",
          label: "No, I want to apply for one now",
          status: "stop",
          note: "Home Affairs states the program closed to new applications on 31 July 2024. It now offers the National Innovation visa (subclass 858) for innovative investors and entrepreneurs.",
          link: { label: "National Innovation visa", href: "/visas/skilled/national-innovation-visa-858" },
        },
      ],
    },
    {
      id: "time",
      topic: "Time on the 188",
      question: "Have you held your 188 for as long as your stream needs?",
      help: "Usually at least 3 years if you were invited on or after 1 July 2021, and 12 months for the Premium Investor stream.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "That's one of the main 888 rules met." },
        {
          value: "notyet",
          label: "Not yet, but my 188 is still valid",
          status: "todo",
          note: "Wait until you've held it long enough. Applying before then is a refusal risk.",
        },
        {
          value: "expiring",
          label: "No, and my 188 will expire first",
          status: "todo",
          note: "Look at the Business Innovation Extension or Significant Investor Extension stream. Both need a current nomination.",
          link: { label: "Open the stream finder", href: "#finder" },
        },
      ],
    },
    {
      id: "nomination",
      topic: "Nomination",
      question: "Will your nominator confirm your nomination is still current?",
      options: [
        { value: "yes", label: "Yes, it's confirmed", status: "ok", note: "A current nomination is required for every 888 stream." },
        { value: "ask", label: "I haven't asked yet", status: "todo", note: "Contact the agency that nominated you, or Austrade, early and give them the evidence they need." },
        {
          value: "lapsed",
          label: "It has lapsed or been withdrawn",
          status: "stop",
          note: "A lapsed or withdrawn nomination is a refusal risk. Get advice about your options.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "criteria",
      topic: "Business or investment",
      question: "Do you meet your stream's business or investment rules?",
      help: "For example turnover, ownership and assets for Business Innovation, or the investment held for the whole period in the investor streams.",
      options: [
        { value: "yes", label: "Yes, with records to prove it", status: "ok", note: "Keep them consistent: inconsistent financial statements or employment records can lead to refusal." },
        {
          value: "short",
          label: "Close, but turnover, assets or employees fall short",
          status: "todo",
          note: "Your nominator can waive these Business Innovation rules in exceptional circumstances. Otherwise wait, or consider the extension stream.",
        },
        {
          value: "broken",
          label: "My investment wasn't held continuously",
          status: "stop",
          note: "The investor streams need the investment held for the whole period. Funds reinvested within 30 days count as held continuously; a longer gap is a refusal risk.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
    {
      id: "residence",
      topic: "Days in Australia",
      question: "Have you met your stream's count of days in Australia?",
      help: "Business Innovation: 1 year in the last 3. Investor: 2 years in the last 3. Significant Investor: 40 days per year. Entrepreneur: 2 years during the 188. Rules differ if you were invited before 1 July 2021.",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Home Affairs checks the count against movement records, so keep your own travel log too." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Request your movement records and count before you lodge." },
        {
          value: "no",
          label: "No",
          status: "stop",
          note: "Too few days in Australia is a refusal risk. Wait until you meet the count, or look at an extension stream if your 188 is expiring.",
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "Does each applicant aged 18 or over have functional English?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Keep evidence of functional English for each adult applicant." },
        { value: "paid", label: "We paid the second instalment for the 188", status: "ok", note: "Then it isn't payable again for the 888." },
        {
          value: "no",
          label: "No",
          status: "todo",
          note: "They can pay the [[second-instalment|second instalment]] when Home Affairs asks. Don't pay it before it's requested.",
        },
      ],
    },
    {
      id: "conduct",
      topic: "Business conduct",
      question: "Have you and your partner complied with tax, superannuation and workplace laws?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "You'll also need a realistic commitment to continue business or investment activity in Australia." },
        {
          value: "issues",
          label: "There may be issues",
          status: "todo",
          note: "Non-compliance or unacceptable business activity can lead to refusal, and inconsistent financial or employment records can lead to a PIC 4020 refusal. Get advice first.",
          link: { label: "Book a consultation", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "I can still apply for a 188 business visa.",
      fact: "No. Home Affairs states the program closed permanently to new applications on 31 July 2024 (the Premium Investor stream on 1 July 2024). Only the two extension streams remain, and only for existing 188 holders.",
    },
    {
      myth: "The National Innovation visa is the new business owner visa.",
      fact: "Not exactly. It's an invitation-only permanent visa for people with an internationally recognised record of exceptional achievement. There's no direct replacement for the business owner pathway.",
    },
    {
      myth: "My pending 188 application was cancelled when the program closed.",
      fact: "No. Applications lodged before the closure are still being processed. In the Business Innovation, Investor, Significant Investor and Entrepreneur streams you can also withdraw and request a refund.",
    },
    {
      myth: "I need a new state nomination for the 888.",
      fact: "You don't lodge a new expression of interest. The agency that nominated you for the 188 confirms that the nomination is still current.",
    },
    {
      myth: "Any 188 stream can lead to any 888 stream.",
      fact: "No. The 888 is only available in the stream that matches your 188.",
    },
    {
      myth: "Time overseas doesn't matter on a 188.",
      fact: "Each stream has a residence count, such as 1 year in the last 3 for Business Innovation, and Home Affairs checks it against movement records.",
    },
    {
      myth: "Every family member must hold a 188 to be on my 888.",
      fact: "Not in the Significant Investor and Premium Investor streams. You can include family members when you apply, or add them before a decision; each pays an additional applicant charge.",
    },
    {
      myth: "Buying a franchise counts for the Entrepreneur stream.",
      fact: "No. Residential real estate, labour hire and buying an existing business or franchise don't count.",
    },
  ],
  glossary: [
    {
      id: "biip",
      term: "BIIP",
      full: "Business Innovation and Investment Program",
      definition: "The program behind the provisional 188 and the permanent 888. Home Affairs states it closed permanently to new applications on 31 July 2024.",
    },
    {
      id: "nomination",
      term: "Nomination",
      definition: "Support from a state or territory government agency, or Austrade, for your 188. It must still be current when you apply for the 888.",
    },
    {
      id: "austrade",
      term: "Austrade",
      definition: "An Australian Government agency that could nominate applicants in the Significant Investor and Premium Investor streams. If it nominated you, it confirms your nomination for the 888.",
    },
    {
      id: "bie",
      term: "Business Innovation Extension stream",
      definition: "A 188 stream for Business Innovation holders who need more time. After 3 years on the 188, it allows a stay of up to 6, 7 or 8 years from the original grant.",
    },
    {
      id: "sie",
      term: "Significant Investor Extension stream",
      definition: "A 188 stream for Significant Investor holders who need more time: up to two extensions, to a maximum of 9 years from the original grant.",
    },
    {
      id: "csi",
      term: "Complying investment",
      definition: "An investment that meets the Home Affairs rules for an investor stream. It must be held for the whole required period; funds reinvested within 30 days count as held continuously.",
    },
    {
      id: "eligible-employee",
      term: "Eligible employee",
      definition: "A full-time employee who is an Australian citizen, permanent resident or New Zealand passport holder, and isn't a member of your family.",
    },
    {
      id: "success-factors",
      term: "Success factors",
      definition: "The Entrepreneur stream test: two key factors, or one key and three supporting factors, such as employing two or more Australians, A$300,000 annual turnover or a patent.",
    },
    {
      id: "functional-english",
      term: "Functional English",
      definition: "The English level each 888 applicant aged 18 or over needs, unless they pay the second instalment instead.",
    },
    {
      id: "second-instalment",
      term: "Second instalment",
      definition: "An extra charge for applicants aged 18 or over without functional English, paid when Home Affairs asks. It isn't payable if already paid for the 188, and is refunded if the visa isn't granted.",
    },
    {
      id: "bva",
      term: "Bridging visa A",
      definition: "A visa that usually keeps you lawful in Australia while an 888 application lodged here is decided. To travel once it's in effect, you need a Bridging visa B.",
    },
    {
      id: "nvi",
      term: "National Innovation visa",
      full: "Subclass 858",
      definition: "Home Affairs' invitation-only permanent visa for exceptionally talented migrants, including entrepreneurs and innovative investors.",
    },
  ],
  cta: {
    title: "Ready to talk about your 888?",
    subtitle: "We check your stream's figures and timing, tell you honestly where you stand, and prepare the application with you and your nominator.",
  },
  finder: {
    navLabel: "Your stream",
    eyebrow: "Stream finder",
    title: "Which 888 stream, or next step, fits you?",
    highlight: "fits you",
    subtitle: "The 188 is closed to new applicants. If you already hold one, two or three taps show your matching stream and what to check.",
    id: "biip-streams",
    start: "hold",
    questions: [
      {
        id: "hold",
        question: "Where do you stand with the subclass 188?",
        options: [
          { label: "I hold a subclass 188 visa", next: "stream" },
          { label: "I lodged a 188 application before 31 July 2024 and I'm waiting", next: "pending" },
          { label: "I don't have one and want to apply now", next: "closed" },
          { label: "I'm a New Zealand citizen on an SCV with a business here", next: "bi-scv" },
        ],
      },
      {
        id: "stream",
        question: "Which 188 stream do you hold?",
        options: [
          { label: "Business Innovation (or its extension)", next: "bi-ready" },
          { label: "Investor", next: "investor" },
          { label: "Significant Investor (or its extension)", next: "si-ready" },
          { label: "Entrepreneur", next: "entrepreneur" },
          { label: "Premium Investor", next: "premium" },
        ],
      },
      {
        id: "bi-ready",
        question: "Can you meet the 888 rules before your 188 expires?",
        help: "For example 2 years running your main business, A$300,000 turnover in the 12 months before applying, and your days in Australia.",
        options: [
          { label: "Yes, or I'm close", next: "bi" },
          { label: "No, I need more time", next: "bie" },
        ],
      },
      {
        id: "si-ready",
        question: "Can you complete the investment period and residence count before your 188 expires?",
        options: [
          { label: "Yes", next: "si" },
          { label: "No, I need more time", next: "sie" },
        ],
      },
    ],
    outcomes: [
      {
        id: "closed",
        title: "The 188 is closed to new applications",
        body: "Home Affairs states the Business Innovation and Investment Program closed permanently to new applications on 31 July 2024 (the Premium Investor stream on 1 July 2024). For innovative investors and entrepreneurs, it now offers the National Innovation visa (subclass 858).",
        watch: [
          "The 858 is invitation-only, for people with an internationally recognised record of exceptional achievement",
          "There's no direct replacement for the business owner pathway",
        ],
        href: "/visas/skilled/national-innovation-visa-858",
        tone: "stop",
      },
      {
        id: "pending",
        title: "Wait for your 188 decision, or withdraw for a refund",
        body: "Applications lodged before the closure are still being processed. Or you can withdraw and request a refund of the 188 charge. Refunds apply to withdrawals on or after 31 July 2024 in the Business Innovation, Investor, Significant Investor and Entrepreneur streams.",
        watch: [
          "Refunds aren't available for the extension streams",
          "Withdrawing while in Australia can affect your visa status: check your bridging visa position first",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "bi",
        title: "888 Business Innovation stream",
        body: "For Business Innovation holders who've owned and managed a main business in Australia for the 2 years before applying. Turnover must be at least A$300,000 in the 12 months before applying. Your state or territory must confirm your [[nomination|nomination]] is current.",
        watch: [
          "Held the 188 for at least 3 years, if invited on or after 1 July 2021",
          "At least two of: A$200,000 net business assets, A$600,000 net personal and business assets, or two full-time [[eligible-employee|eligible employees]]",
          "In Australia for 1 year in the last 3 (1 in 2 if invited before 1 July 2021)",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "bie",
        title: "188 Business Innovation Extension stream",
        body: "For Business Innovation holders who've held the 188 for 3 years but can't meet the 888 rules before it expires. This [[bie|extension]] allows a stay of up to 6, 7 or 8 years from the original grant. The extension streams are the only 188 streams still open, and only for existing holders.",
        watch: [
          "You need a current nomination",
          "The charge is A$1,505, plus A$760 for each additional applicant 18 or over and A$380 under 18",
          "Refunds aren't available for the extension streams",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "bi-scv",
        title: "888 Business Innovation stream (SCV holders)",
        body: "A Special Category visa holder can apply in the Business Innovation stream only. You need to have held the SCV for at least 3 years, if granted on or after 1 July 2021. You also need a current state or territory [[nomination|nomination]], and to meet the business ownership, turnover, assets and residence rules.",
        watch: [
          "Turnover of at least A$300,000 in the 12 months before applying",
          "The other 888 streams aren't open to SCV holders",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "investor",
        title: "888 Investor stream",
        body: "For Investor holders who kept their investment for the full period. Invited on or after 1 July 2021: at least 3 years on the 188 with a A$2.5 million [[csi|complying significant investment]]. Invited earlier: a A$1.5 million designated investment held for 4 years.",
        watch: [
          "In Australia 2 years in the last 3 (2 in 4 if invited before 1 July 2021)",
          "Your nomination must still be current",
          "You need a realistic commitment to continue business or investment activity",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "si",
        title: "888 Significant Investor stream",
        body: "For holders who've held the 188 (and any extension) for a continuous 4 years, with A$5 million in a [[csi|complying investment]] held for the whole period. The agency that nominated you must confirm the nomination is still current.",
        watch: [
          "At least 40 days in Australia per year of the 188, or 180 days per year for your partner",
          "Funds reinvested within 30 days count as held continuously",
          "Family members don't need to hold a 188 themselves in this stream",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "sie",
        title: "188 Significant Investor Extension stream",
        body: "Need more time to meet the 888 rules? You can apply for up to two [[sie|Significant Investor Extension]] visas, to a maximum of 9 years from the original grant. It's only open to existing Significant Investor holders.",
        watch: [
          "You need a current nomination",
          "Its charge wasn't in the Home Affairs fee table read on 12 October 2026: check the Visa Pricing Estimator",
          "Refunds aren't available for the extension streams",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "entrepreneur",
        title: "888 Entrepreneur stream",
        body: "For Entrepreneur holders with a successful record of a complying entrepreneur activity in Australia. You need two key [[success-factors|success factors]], or one key and three supporting factors, such as employing two or more Australians or A$300,000 annual turnover.",
        watch: [
          "Held the 188 continuously for at least 3 years (4 if invited before 1 July 2021), living here for at least 2 of them",
          "Residential real estate, labour hire and buying an existing business or franchise don't count",
          "Include any statement of success from your nominator",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
      {
        id: "premium",
        title: "888 Premium Investor stream",
        body: "For Austrade-nominated Premium Investor holders who've held the 188 for a continuous period of at least 12 months and kept the A$15 million complying premium investment throughout. The stream closed to new 188 applications on 1 July 2024.",
        watch: [
          "Austrade must confirm your nomination is current",
          "Any state-endorsed philanthropic contribution doesn't need to be held throughout",
          "Family members don't need to hold a 188 themselves in this stream",
        ],
        href: "/visas/other-visas/business-innovation-and-investment-visa-188-888",
        tone: "match",
      },
    ],
    footnote: "General information from Home Affairs as at 12 October 2026, not advice. The date you were invited and your nominator's confirmation decide which version of each rule applies.",
  },
  fees: {
    variantLabel: "Which application?",
    variants: [
      {
        id: "888",
        label: "Subclass 888 (all streams)",
        hint: "Permanent residence for existing 188 holders",
        primary: [{ label: "Base application charge", amount: 4375 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 2195 }],
        child: [{ label: "Each additional applicant under 18", amount: 1090 }],
      },
      {
        id: "bie",
        label: "188 Business Innovation Extension stream",
        hint: "More time on the 188, for existing Business Innovation holders",
        primary: [{ label: "Base application charge", amount: 1505 }],
        adult: [{ label: "Each additional applicant 18 or over", amount: 760 }],
        child: [{ label: "Each additional applicant under 18", amount: 380 }],
      },
    ],
    maxAdults: 3,
    maxChildren: 5,
    notIncluded: "Not included: the second instalment, accountant and audit reports, valuations, health examinations and police certificates.",
    notes: [
      "The 188 is closed to new applications. The only 188 streams still open are the extension streams, for existing holders.",
      "The Significant Investor Extension stream charge wasn't in the Home Affairs fee table read on 12 October 2026: check the Visa Pricing Estimator.",
      "Applicants 18 or over without functional English pay a second instalment when Home Affairs asks, unless already paid for the 188. Its amount isn't shown here, and it's refunded if the visa isn't granted.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
