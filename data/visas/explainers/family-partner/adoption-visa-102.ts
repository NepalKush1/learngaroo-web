import type { VisaExplainer } from "../types";
import { ICON } from "../icons";
import { childFinder } from "./child-finder";

// Interactive explainer for the Adoption visa (subclass 102). Every figure
// matches data/visas/family-partner.ts (checked against Home Affairs and the
// Migration Regulations on 12 October 2026). The reader is usually the
// adoptive parent who sponsors, so "you" is that parent (green) and the
// child, who is the applicant, is teal.

export const adoptionVisa102Explainer: VisaExplainer = {
  slug: "adoption-visa-102",
  factsAsAt: "12 October 2026",
  oneLiner:
    "A permanent visa for a child under 18 adopted, or being adopted, outside Australia by an Australian citizen, permanent resident or eligible New Zealand citizen.",
  bigIdeas: [
    { title: "An adoption outside Australia", body: "Through an Australian state or territory authority, under the Hague Convention, or as an expatriate adoption.", icon: ICON.globeAsiaAustralia },
    { title: "Under 18, and outside Australia", body: "The child is under 18 when adopted, when you apply and at decision, and outside Australia at lodgement and grant.", icon: ICON.faceSmile },
    { title: "Permanent from entry", body: "The visa is permanent. For citizenship, permanent residence starts on the day your child enters Australia.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors", value: "You, the adoptive or prospective adoptive parent", icon: ICON.user },
    { label: "Child's age", value: "Under 18 throughout", icon: ICON.cake },
    { label: "Where the child is", value: "Outside Australia when you apply and at grant", icon: ICON.globeAsiaAustralia },
    { label: "Stay", value: "Permanent, with a five-year travel facility", icon: ICON.home },
    { label: "How you apply", value: "On paper, by post", icon: ICON.envelope },
    { label: "Visa charge", value: "A$4,040 (A$3,315 Pacific and Timor-Leste)", icon: ICON.currencyDollar },
  ],
  actors: [
    {
      id: "authority",
      name: "Adoption authorities",
      short: "Authorities",
      icon: ICON.scale,
      tone: "amber",
      role: "Handle the adoption itself. Home Affairs only decides the visa.",
      does: [
        "An Australian state or territory [[central-authority|central authority]] can approve you as suitable adoptive parents",
        "The overseas authority can allocate the child and approve their departure",
        "An [[compliance-cert|adoption compliance certificate]] is needed for a Hague adoption completed overseas",
        "No Australian authority is involved in an [[expatriate|expatriate adoption]]",
      ],
    },
    {
      id: "child",
      name: "Your child (the applicant)",
      short: "Child",
      icon: ICON.faceSmile,
      tone: "teal",
      role: "The child under 18 who applies for the permanent visa from outside Australia.",
      does: [
        "Is under 18 when adopted, at application and at decision",
        "Is outside Australia when you apply and when the visa is granted",
        "Meets the health requirement, and the character requirement from 16",
        "Enters Australia before the [[first-entry|first entry date]]",
      ],
    },
    {
      id: "you",
      name: "You (the adoptive parent)",
      short: "You",
      icon: ICON.user,
      tone: "green",
      role: "You're the adoptive, or [[prospective|prospective adoptive]], parent, and you sponsor the child.",
      does: [
        "Are 18 or over and an Australian citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]]",
        "Complete the sponsorship ([[form40ch|Form 40CH]]) to send with your child's application",
        "Provide police checks with your partner if Home Affairs asks",
        "Support your child for their first two years after entry",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.buildingLibrary,
      tone: "blue",
      role: "Decides the visa only. It has no role in the adoption process itself.",
      does: [
        "Approves the sponsorship",
        "Checks the adoption pathway and its documents",
        "Asks for health checks, biometrics or more information",
        "Grants or refuses the visa, considering your child's best interests",
      ],
    },
  ],
  flows: [
    {
      from: "authority",
      to: "you",
      label: "Approves + allocates",
      detail: "For a state or territory adoption, an Australian authority approves you as suitable parents and the overseas authority allocates the child.",
    },
    {
      from: "you",
      to: "government",
      label: "You sponsor",
      detail: "You complete [[form40ch|Form 40CH]] and post it with your child's application, the adoption papers and the payment receipt.",
    },
    {
      from: "child",
      to: "government",
      label: "Child applies",
      detail: "Your child's application ([[form47ch|Form 47CH]]) is lodged on paper while your child is outside Australia.",
    },
    {
      from: "government",
      to: "child",
      label: "Visa granted",
      detail: "Home Affairs grants the permanent visa while your child is outside Australia. Your child then enters before the [[first-entry|first entry date]].",
    },
    {
      from: "you",
      to: "child",
      label: "Two years' support",
      detail: "You provide accommodation and financial support for your child's first two years after entry.",
    },
  ],
  journeyTitle: "From adoption to a permanent visa",
  journeyHighlight: "permanent visa",
  stages: [
    {
      id: "pathway",
      short: "Pathway",
      title: "Confirm the adoption pathway",
      who: ["you", "authority"],
      description: "Work out which pathway applies. [[ica|Intercountry Adoption Australia]] handles the adoption process; Home Affairs only decides the visa.",
      points: [
        "Through an Australian state or territory [[central-authority|central authority]]",
        "Completed under the [[hague|Hague Convention]], with a compliance certificate",
        "An [[expatriate|expatriate adoption]] after more than 12 months living overseas",
        "A Hague adoption finalised overseas may allow [[citizenship-adoption|citizenship by adoption]] instead",
      ],
      youHold: "A confirmed pathway and the list of documents it needs",
      icon: ICON.map,
    },
    {
      id: "documents",
      short: "Documents",
      title: "Gather adoption and identity documents",
      who: ["you"],
      description: "A paper application needs certified copies, with NAATI translations where required.",
      points: [
        "Adoption papers or an [[compliance-cert|adoption compliance certificate]]",
        "Central authority letters and departure approvals",
        "Your child's passport pages and four certified photos",
        "Your status, income and police check documents",
      ],
      youHold: "A complete set of certified copies",
      icon: ICON.documentText,
    },
    {
      id: "lodge",
      short: "Lodge",
      title: "Pay first, then post the application",
      who: ["you", "child"],
      description: "Pay the charge, then post Form 47CH, Form 40CH, the receipt and all documents to the Child and Other Family Processing Centre.",
      points: [
        "A$4,040, or A$3,315 with an eligible Pacific or Timor-Leste passport",
        "Your child must be outside Australia when you lodge",
        "No online or in-person lodgement",
      ],
      youHold: "A valid paper application, acknowledged by Home Affairs",
      cost: "A$4,040, paid before posting",
      icon: ICON.envelope,
    },
    {
      id: "track",
      short: "Track",
      title: "Import into ImmiAccount and respond",
      who: ["you", "government"],
      description: "After the acknowledgement letter, import the application into ImmiAccount to upload documents and check its status.",
      points: ["Health examinations and biometrics when asked", "Report any change in circumstances", "Home Affairs may ask for an [[aos|assurance of support]]"],
      youHold: "Health and character clearances on file",
      icon: ICON.computerDesktop,
    },
    {
      id: "grant",
      short: "Grant",
      title: "Grant while your child is overseas",
      who: ["government", "child"],
      description: "Your child must be outside Australia when the visa is granted.",
      points: [
        "Enter before the [[first-entry|first entry date]], generally 12 months from grant",
        "Don't arrange travel until the grant is notified in writing",
        "Permanent residence for citizenship starts on entry",
      ],
      youHold: "Your child's permanent visa",
      icon: ICON.checkBadge,
    },
    {
      id: "support",
      short: "Support",
      title: "Your child's first two years",
      who: ["you", "child"],
      description: "You provide accommodation and financial support for your child's first two years after entry.",
      points: [
        "You can't withdraw the sponsorship after grant",
        "Your child can live, work, study and enrol in Medicare",
        "A five-year [[travel-facility|travel facility]], then a Resident Return visa or an Australian passport",
      ],
      youHold: "A permanent resident child, settling in",
      icon: ICON.lifebuoy,
    },
  ],
  check: {
    ok: {
      title: "Your child looks on track",
      body: "Nothing in your answers rules your child out. Next comes the detail: the adoption documents, your child's identity papers and your checks as the sponsor.",
    },
    disclaimer: "A general self-check, not advice or a prediction. Home Affairs decides on the full circumstances and your child's best interests.",
  },
  quiz: [
    {
      id: "status",
      topic: "Your status",
      question: "Were you already Australian when you adopted, or started adopting, the child?",
      help: "Australian here means a citizen, permanent resident or [[eligible-nz|eligible New Zealand citizen]].",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "The 102 is the visa for an adoption by someone who was already Australian." },
        {
          value: "after",
          label: "No, I became Australian after the adoption",
          status: "todo",
          note: "A child adopted before you became Australian usually applies for the Child visa (101) instead.",
          link: { label: "Child visa (101 and 802)", href: "/visas/family/child-visa-101-802" },
        },
        {
          value: "no",
          label: "I'm not an Australian citizen, permanent resident or eligible New Zealand citizen",
          status: "stop",
          note: "The sponsor must be an Australian citizen, permanent resident or eligible New Zealand citizen.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "pathway",
      topic: "Adoption pathway",
      question: "Which describes the adoption?",
      options: [
        {
          value: "authority",
          label: "Through an Australian state or territory central authority",
          status: "ok",
          note: "You'll need the authority's approval of you as suitable parents, and the overseas authority's approval of your child's departure.",
        },
        {
          value: "hague",
          label: "Completed under the Hague Convention",
          status: "ok",
          note: "An adoption compliance certificate must be in force. Check whether [[citizenship-adoption|citizenship by adoption]] is available instead.",
        },
        {
          value: "expat",
          label: "An expatriate adoption, while I lived overseas",
          status: "todo",
          note: "You must have lived overseas for more than 12 months when you apply, and not to get around Australia's adoption rules. You must also hold full and permanent parental rights.",
        },
        {
          value: "private",
          label: "Arranged without an authority while I lived in Australia",
          status: "stop",
          note: "Without an Australian authority, an overseas adoption only qualifies as an [[expatriate|expatriate adoption]], after more than 12 months living overseas.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "age",
      topic: "Child's age",
      question: "Will your child still be under 18 when the visa is decided?",
      options: [
        { value: "yes", label: "Yes, comfortably", status: "ok", note: "Your child must be under 18 when adopted, when you apply and when Home Affairs decides." },
        {
          value: "close",
          label: "They turn 18 soon",
          status: "todo",
          note: "If your child turns 18 before the decision, the visa can't be granted. Get advice on timing early.",
          link: { label: "Get advice", href: "/bookings" },
        },
        { value: "no", label: "No, they're already 18 or over", status: "stop", note: "The 102 is only for children under 18." },
      ],
    },
    {
      id: "where",
      topic: "Where your child is",
      question: "Where is your child now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "Your child must stay outside Australia until the visa is granted." },
        {
          value: "inside",
          label: "In Australia",
          status: "stop",
          note: "The 102 needs your child outside Australia at lodgement and grant. An adopted child in Australia may be able to apply for the Child visa (802) instead.",
          link: { label: "Child visa (101 and 802)", href: "/visas/family/child-visa-101-802" },
        },
      ],
    },
    {
      id: "law",
      topic: "Country's laws",
      question: "Did the adoption comply with the adoption laws of your child's country?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "This is checked when you apply and again at decision." },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "It's required. For an expatriate adoption, Home Affairs recommends independent legal advice in Australia and in your child's country.",
          link: { label: "Get advice", href: "/bookings" },
        },
        {
          value: "excluded",
          label: "It was in an excluded country (currently Pakistan)",
          status: "stop",
          note: "Applications relying on an adoption in an [[excluded|excluded country]] and period are invalid. Home Affairs currently can't accept them for children adopted in Pakistan.",
        },
      ],
    },
    {
      id: "police",
      topic: "Police checks",
      question: "Can you and your partner provide clear police checks if asked?",
      options: [
        { value: "yes", label: "Yes", status: "ok", note: "Home Affairs may ask you both for AFP ([[code33|code 33]]) and overseas police certificates." },
        {
          value: "offence",
          label: "One of us has a charge or conviction for an offence against a child",
          status: "stop",
          note: "A pending charge for a [[registrable|registrable child sex offence]] means the sponsorship must be refused. A conviction leads to refusal unless quashed, or in very limited circumstances.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "Home Affairs can help arrange the adoption or give a letter of support.",
      fact: "No. The Australian Government has no role in overseas adoption processes and doesn't issue letters of support or certificates of no objection. Home Affairs only assesses the visa.",
    },
    {
      myth: "Every adopted child needs this visa.",
      fact: "Not always. If a Hague Convention or recognised bilateral adoption was finalised overseas, the child may be eligible for Australian citizenship by adoption. They can then travel on an Australian passport.",
    },
    {
      myth: "My child can come to Australia while we wait.",
      fact: "Your child must be outside Australia when you apply and when the visa is granted. They then enter before the first entry date in the grant letter.",
    },
    {
      myth: "Living overseas for a few months makes it an expatriate adoption.",
      fact: "You must have lived overseas for more than 12 months when you apply, and not to get around Australia's intercountry adoption rules. The adoption must also give you full and permanent parental rights.",
    },
    { myth: "Siblings can share one application.", fact: "No. Each adopted child needs a separate application." },
    { myth: "Any health problem means automatic refusal.", fact: "Not automatically. Home Affairs says a health waiver can be considered carefully for adoption applicants." },
  ],
  roles: [
    {
      id: "parent",
      label: "I'm the adoptive parent",
      tone: "green",
      intro: "Your part is the adoption paperwork, the sponsorship, and two years of support.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Confirm your pathway with the [[central-authority|central authority]] or [[ica|Intercountry Adoption Australia]]",
            "Get the adoption papers or [[compliance-cert|compliance certificate]] and any departure approval",
            "For an [[expatriate|expatriate adoption]], keep evidence of more than 12 months living overseas",
          ],
        },
        {
          title: "To sponsor",
          items: [
            "Be 18 or over and an Australian citizen, permanent resident or eligible New Zealand citizen",
            "Complete [[form40ch|Form 40CH]] and send it with your child's [[form47ch|Form 47CH]]",
            "Show your status and income, and give police checks if asked",
          ],
        },
        {
          title: "After grant",
          items: ["Provide accommodation and financial support for two years after entry", "You can't withdraw the sponsorship after grant"],
        },
      ],
    },
    {
      id: "child",
      label: "My child's application",
      tone: "teal",
      intro: "Your child is the applicant. These are the parts that sit with their application.",
      groups: [
        {
          title: "Eligibility",
          items: ["Under 18 when adopted, when you apply and at decision", "Outside Australia when you apply and at grant"],
        },
        {
          title: "Documents",
          items: ["Passport pages and four certified photos", "Health examinations when Home Affairs asks", "Police certificates and Form 80 if 16 or over"],
        },
        {
          title: "After grant",
          items: ["Enter before the [[first-entry|first entry date]]", "Live, work, study and enrol in Medicare"],
        },
      ],
    },
  ],
  glossary: [
    {
      id: "central-authority",
      term: "Central authority",
      definition: "The Australian state or territory body that arranges intercountry adoptions, including approving people as suitable adoptive parents.",
    },
    {
      id: "hague",
      term: "Hague Convention",
      definition: "The international agreement on intercountry adoption. An adoption completed in a Convention country under its rules needs an adoption compliance certificate for this visa.",
    },
    {
      id: "compliance-cert",
      term: "Adoption compliance certificate",
      definition: "A certificate for an adoption completed overseas, such as under the Hague Convention. Where one is required, it must be in force before the visa can be granted.",
    },
    {
      id: "expatriate",
      term: "Expatriate adoption",
      definition: "An overseas adoption by an Australian who had lived outside Australia for more than 12 months when applying. It's made without an Australian authority and gives full, permanent parental rights.",
    },
    {
      id: "prospective",
      term: "Prospective adoption",
      definition: "An adoption to be finalised in Australia. The overseas authority approves the child's departure for adoption here, or in the custody of the prospective parents.",
    },
    {
      id: "citizenship-adoption",
      term: "Citizenship by adoption",
      definition: "Australian citizenship for a child whose Hague or bilateral adoption was finalised overseas. The child can then travel on an Australian passport, without a visa.",
    },
    {
      id: "ica",
      term: "Intercountry Adoption Australia",
      definition: "The service to contact about the adoption process itself. Overseas authorities asking for a support document can also be referred to it.",
    },
    {
      id: "excluded",
      term: "Excluded country",
      definition: "A country and period set by legislative instrument. Applications relying on an adoption there are invalid; Home Affairs currently lists Pakistan.",
    },
    {
      id: "eligible-nz",
      term: "Eligible New Zealand citizen",
      definition: "A New Zealand citizen who is a protected Special Category visa holder. They can sponsor in the same way as an Australian citizen or permanent resident.",
    },
    { id: "form40ch", term: "Form 40CH", definition: "Sponsorship for a child to migrate to Australia. You complete it, and it's posted with your child's application." },
    { id: "form47ch", term: "Form 47CH", definition: "The child's own application form, posted with the sponsorship." },
    { id: "first-entry", term: "First entry date", definition: "The date in the grant letter by which your child must first enter Australia, generally 12 months from grant." },
    {
      id: "travel-facility",
      term: "Travel facility",
      definition: "How long your child can leave and re-enter Australia on the visa: five years from grant. After that, a Resident Return visa, or an Australian passport once a citizen.",
    },
    { id: "registrable", term: "Registrable child sex offence", definition: "An offence against a child that would require registration on a child offender register." },
    { id: "code33", term: "AFP code 33", definition: "The Immigration/Citizenship purpose code to use when applying for an Australian Federal Police National Police Certificate." },
    { id: "aos", term: "Assurance of support", definition: "A formal financial commitment Home Affairs may ask for. If asked, it must be accepted before the visa is granted." },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the visa application and sponsorship with your family.",
  },
  verifiedExtras: [
    {
      fact: "An eligible New Zealand citizen is a New Zealand citizen who is a protected Special Category visa holder.",
      source: "/visas/family/partner-visa-onshore-820-801",
    },
  ],
  finder: childFinder,
  fees: {
    variantLabel: "Which charge applies?",
    variants: [
      {
        id: "standard",
        label: "Standard charge",
        hint: "Most applications",
        primary: [{ label: "Adoption visa, for your child", amount: 4040 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 1015 }],
      },
      {
        id: "pacific",
        label: "Pacific Island or Timor-Leste passport",
        hint: "Your child holds a valid passport from an eligible country",
        primary: [{ label: "Adoption visa, for your child", amount: 3315 }],
        child: [{ label: "Each dependant of your child, under 18", amount: 830 }],
      },
    ],
    maxAdults: 0,
    maxChildren: 1,
    notIncluded:
      "Not included: health examinations, police certificates, certified copies and translations, adoption agency, court and legal costs, and the Administrative Review Tribunal fee (A$3,727) if the visa is refused.",
    notes: [
      "Additional applicants would be your child's own dependent children, which is rare for a child under 18. Each adopted child needs their own application and charge.",
      "There's no charge for the sponsorship (Form 40CH).",
      "Pay before you post the application. The charge isn't refunded if the visa is refused.",
    ],
    confirmUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator",
    confirmLabel: "Home Affairs Visa Pricing Estimator",
  },
};
