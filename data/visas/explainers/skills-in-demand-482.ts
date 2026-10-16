import type { VisaExplainer } from "./types";

// Interactive explainer for the Skills in Demand visa (subclass 482).
// Every figure matches data/visas/employer-sponsored.ts (checked against
// Home Affairs and the Migration Regulations on 12 October 2026). Condition
// 8607 wording was re-read on the Home Affairs conditions page (product
// 482-69) on 13 October 2026.

const ICON = {
  employer:
    "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21",
  you: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  government:
    "M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z",
  offer:
    "M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z",
  advertise:
    "M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46",
  nominate:
    "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
  prepare:
    "M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75",
  apply: "M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5",
  work:
    "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0",
  home: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
  clock: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  family:
    "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z",
  money:
    "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
};

export const skillsInDemand482Explainer: VisaExplainer = {
  slug: "skills-in-demand-visa-482",
  factsAsAt: "12 October 2026",
  oneLiner:
    "An Australian employer that can't find a local worker sponsors you to do that job for up to four years, and after two years of sponsored work it can nominate you for permanent residence.",
  bigIdeas: [
    { title: "An employer sponsors you", body: "No employer, no 482. An approved business nominates you for one specific job.", icon: ICON.employer },
    { title: "You do that job", body: "For your sponsor, in the nominated occupation, for up to 4 years. Your family can come and work too.", icon: ICON.work },
    { title: "It can lead to PR", body: "After 2 years of sponsored work, your employer can nominate you for the permanent subclass 186.", icon: ICON.home },
  ],
  heroCard: [
    { label: "Who sponsors you", value: "An approved Australian employer", icon: ICON.employer },
    { label: "How long", value: "Up to 4 years (5 for Hong Kong passports)", icon: ICON.clock },
    { label: "Your work", value: "For your sponsor, in the nominated job", icon: ICON.work },
    { label: "Family", value: "Can come, work and study", icon: ICON.family },
    { label: "Next step", value: "PR through subclass 186 after 2 years", icon: ICON.home },
    { label: "Visa charge", value: "From A$4,015", icon: ICON.money },
  ],
  actors: [
    {
      id: "employer",
      name: "Your employer (the sponsor)",
      short: "Employer",
      icon: ICON.employer,
      tone: "pink",
      role: "Sponsors you and nominates the job it couldn't fill locally.",
      does: [
        "Becomes a [[sbs|Standard Business Sponsor]] (A$420, approved for 5 years)",
        "Advertises the job in Australia first",
        "Nominates the position and pays A$330 plus the [[saf|SAF levy]]",
        "Pays you at least the [[amsr|market rate]] and meets sponsor obligations",
      ],
    },
    {
      id: "you",
      name: "You (the worker)",
      short: "You",
      icon: ICON.you,
      tone: "green",
      role: "Apply for the visa and do the nominated job.",
      does: [
        "Show at least 1 year of relevant experience",
        "Meet the English, health and character requirements",
        "Lodge the visa application and pay from A$4,015",
        "Work only for your sponsor in the nominated occupation",
      ],
    },
    {
      id: "government",
      name: "Department of Home Affairs",
      short: "Home Affairs",
      icon: ICON.government,
      tone: "blue",
      role: "Checks everyone meets the rules and decides the visa.",
      does: [
        "Approves the sponsor and the [[nomination]]",
        "Assesses your visa application",
        "Grants the visa with its conditions",
        "Monitors sponsors and visa holders",
      ],
    },
  ],
  flows: [
    {
      from: "employer",
      to: "government",
      label: "Sponsors + nominates",
      detail: "Your employer applies to be a sponsor and nominates your position: the occupation, the salary and how long it needs you.",
    },
    {
      from: "you",
      to: "government",
      label: "You apply",
      detail: "You lodge your 482 application with the nomination's reference number ([[trn|TRN]]) and your experience, English and health evidence.",
    },
    {
      from: "government",
      to: "you",
      label: "Visa granted",
      detail: "Home Affairs approves the nomination and grants your visa, with conditions such as working only for your sponsor.",
    },
    {
      from: "you",
      to: "employer",
      label: "You start work",
      detail: "You start the nominated job within 90 days and build the two years of sponsored work that can lead to permanent residence.",
    },
  ],
  journeyTitle: "From job offer to permanent residence",
  journeyHighlight: "permanent residence",
  stages: [
    {
      id: "offer",
      short: "Offer",
      title: "An employer offers you a job",
      who: ["employer", "you"],
      description: "An Australian business wants you for a skilled role it couldn't fill locally. Everything in the 482 is built around that one position.",
      points: ["Agree the occupation, duties and pay", "Pay must be at least the [[amsr|market rate]]", "Check which stream the job fits (try the stream finder below)"],
      youHold: "A job offer for one specific occupation",
      icon: ICON.offer,
    },
    {
      id: "sponsor",
      short: "Sponsor",
      title: "The employer becomes a sponsor",
      who: ["employer"],
      description: "The business applies to Home Affairs to become a [[sbs|Standard Business Sponsor]]. It can lodge this at the same time as the nomination.",
      points: ["Must be lawfully operating", "A$420, approved for five years", "Takes on legal sponsor obligations"],
      youHold: "A sponsor with an approved (or lodged) sponsorship",
      cost: "A$420, paid by the employer",
      icon: ICON.employer,
    },
    {
      id: "advertise",
      short: "Advertise",
      title: "The job is advertised in Australia first",
      who: ["employer"],
      description: "Before nominating, the employer usually has to show it looked for local workers. This is [[lmt|labour market testing]], unless an international trade obligation exempts the role.",
      points: ["At least two advertisements", "Each running for four weeks", "Within the four months before the nomination", "Salary shown in the ads if it is under A$96,400"],
      youHold: "Evidence the role was offered locally first",
      cost: "Advertising costs, paid by the employer",
      icon: ICON.advertise,
    },
    {
      id: "nominate",
      short: "Nominate",
      title: "The employer nominates your position",
      who: ["employer"],
      description: "The [[nomination]] tells Home Affairs the occupation, the salary and how long the business needs you. You receive its reference number, the [[trn|TRN]].",
      points: [
        "Salary at least the [[csit|CSIT]] (A$79,423) or [[ssit|SSIT]] (A$146,576), and the market rate",
        "A$330 nomination charge",
        "[[saf|SAF levy]] of A$1,200 or A$1,800 per year",
        "None of these costs can be passed on to you",
      ],
      youHold: "A nomination TRN for your visa application",
      cost: "A$330 plus the SAF levy, paid by the employer",
      icon: ICON.nominate,
    },
    {
      id: "prepare",
      short: "Prepare",
      title: "You gather your evidence",
      who: ["you"],
      description: "While the employer handles its part, you get your own documents ready.",
      points: [
        "At least 1 year of relevant experience in the last 5 years",
        "An English test (IELTS 5.0 in each band, or equivalent) unless exempt",
        "A skills assessment if [[immi18039|IMMI 18/039]] requires one",
        "Health insurance and police certificates",
      ],
      youHold: "References, an English result and a health insurance policy",
      cost: "Tests and checks, paid by you",
      icon: ICON.prepare,
    },
    {
      id: "apply",
      short: "Apply",
      title: "You apply and Home Affairs decides",
      who: ["you", "government"],
      description: "You apply online, in or outside Australia. Home Affairs looks at the nomination and your application together.",
      points: [
        "A$4,015 for you, plus a charge for each family member",
        "In Australia you need a visa, or a Bridging visa A, B or C",
        "Home Affairs may ask for biometrics, health checks or more information",
        "Check current processing times on the Home Affairs tool",
      ],
      youHold: "A grant letter that lists your conditions",
      cost: "From A$4,015, paid by you",
      icon: ICON.apply,
    },
    {
      id: "work",
      short: "Work",
      title: "You start work and build your time",
      who: ["you", "employer"],
      description: "Start the nominated job within 90 days. Your family can live, work and study here with you.",
      points: [
        "Up to 4 years (5 for Hong Kong passport holders)",
        "Work for your sponsor in the nominated occupation ([[c8607|condition 8607]])",
        "If the job ends: up to 180 days to find a new sponsor",
      ],
      youHold: "Sponsored work time that counts towards permanent residence",
      icon: ICON.work,
    },
    {
      id: "pr",
      short: "PR",
      title: "Permanent residence through the 186",
      who: ["employer", "you"],
      description: "After two years of full-time sponsored work, your employer can nominate you for the Employer Nomination Scheme visa (subclass 186), [[trt|Temporary Residence Transition stream]].",
      points: ["2 years full-time in the 3 years before applying", "Under 45 when you apply, unless exempt", "Competent English (IELTS 6 in each band, or equivalent)"],
      youHold: "Permanent residence",
      cost: "A$6,140 for the 186 visa",
      icon: ICON.home,
    },
  ],
  check: {
    ok: {
      title: "You look on track",
      body: "Nothing in your answers rules you out. The next step is checking the details: the nomination, your evidence and the right stream.",
    },
    disclaimer: "A general self-check, not advice or a prediction. The employer's nomination and your full circumstances decide the outcome.",
  },
  quiz: [
    {
      id: "offer",
      topic: "Job offer",
      question: "Do you have a job offer from an Australian employer?",
      options: [
        { value: "yes", label: "Yes, I have an offer", status: "ok", note: "The 482 always starts with an employer who wants to sponsor you." },
        { value: "talking", label: "We're discussing it", status: "todo", note: "You'll need a firm offer: the employer nominates one specific position for you." },
        {
          value: "no",
          label: "Not yet",
          status: "stop",
          note: "There's no 482 without a sponsoring employer. Points-tested visas don't need one.",
          link: { label: "Points-tested visas", href: "/visas/skilled/skilled-migration-points-test" },
        },
      ],
    },
    {
      id: "sponsor",
      topic: "Sponsor",
      question: "Is the employer an approved sponsor, or willing to become one?",
      options: [
        { value: "approved", label: "Already an approved sponsor", status: "ok", note: "One step already done." },
        {
          value: "willing",
          label: "Willing to apply",
          status: "todo",
          note: "The business applies to be a Standard Business Sponsor (A$420, approved for 5 years). It can lodge this with the nomination.",
          link: { label: "What employers need to do", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
        },
        {
          value: "unsure",
          label: "I'm not sure",
          status: "todo",
          note: "Ask them early. Sponsoring has costs and legal obligations for the business.",
          link: { label: "Show them who does what", href: "#roles" },
        },
        {
          value: "no",
          label: "They won't sponsor",
          status: "stop",
          note: "Without a sponsor the 482 isn't possible. Other pathways may still fit you.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "experience",
      topic: "Work experience",
      question: "How much experience do you have in this occupation in the last 5 years?",
      help: "Part-time and casual work counts if it adds up to 12 months full-time.",
      options: [
        { value: "enough", label: "1 year or more (full-time equivalent)", status: "ok", note: "Meets the minimum of 1 year in the last 5 years." },
        {
          value: "less",
          label: "Less than 1 year",
          status: "stop",
          note: "The standard streams need at least 1 year in the last 5 years. A labour agreement can set a different rule.",
        },
      ],
    },
    {
      id: "stream",
      topic: "Stream",
      question: "Which best describes the job?",
      options: [
        { value: "core", label: "On the Core Skills Occupation List and paying at least A$79,423", status: "ok", note: "Likely the Core Skills stream." },
        { value: "specialist", label: "Paying at least A$146,576, and not a trade, machinery operator or labourer role", status: "ok", note: "Likely the Specialist Skills stream." },
        { value: "agreement", label: "Covered by my employer's labour agreement", status: "ok", note: "The Labour agreement stream: the agreement sets the rules." },
        { value: "unsure", label: "I'm not sure", status: "todo", note: "Try the stream finder on this page.", link: { label: "Open the stream finder", href: "#stream" } },
        {
          value: "none",
          label: "None of these",
          status: "stop",
          note: "The position must fit a stream. A labour agreement, a regional visa or a points-tested visa may suit better.",
          link: { label: "Talk through your options", href: "/bookings" },
        },
      ],
    },
    {
      id: "english",
      topic: "English",
      question: "What about English?",
      options: [
        { value: "met", label: "IELTS 5.0 in each band (or equivalent) in the last 3 years", status: "ok", note: "Meets the 482 English requirement." },
        {
          value: "exempt",
          label: "I'm exempt",
          hint: "UK, US, Canadian, NZ or Irish passport, or 5 years of study in English",
          status: "ok",
          note: "Keep evidence of the exemption ready.",
        },
        {
          value: "notyet",
          label: "Not tested yet",
          status: "todo",
          note: "Book an approved test. Fully online tests are not accepted.",
          link: { label: "Practise PTE on Learniiz", href: "https://www.learniiz.com", external: true },
        },
        { value: "below", label: "Tested, but below 5.0 in a band", status: "todo", note: "For tests taken from 13 September 2025 you can retake a single skill." },
      ],
    },
    {
      id: "location",
      topic: "Where you apply",
      question: "Where are you now?",
      options: [
        { value: "outside", label: "Outside Australia", status: "ok", note: "You can apply from overseas." },
        { value: "onshore", label: "In Australia, holding a visa (or a Bridging visa A, B or C)", status: "ok", note: "You can apply in Australia. An extra A$700 charge may apply." },
        {
          value: "unlawful",
          label: "In Australia without a visa, or on a Bridging visa E",
          status: "stop",
          note: "You can't lodge a 482 in Australia in this situation. Get advice before you do anything else.",
          link: { label: "Book urgent advice", href: "/bookings" },
        },
      ],
    },
    {
      id: "health",
      topic: "Health and character",
      question: "Any health or character concerns?",
      options: [
        { value: "clear", label: "No concerns, and I can get health insurance", status: "ok", note: "You'll still need health checks and police certificates if asked." },
        {
          value: "concern",
          label: "I have a significant health condition or a criminal record",
          status: "todo",
          note: "It doesn't automatically rule you out, but it needs careful preparation and advice.",
          link: { label: "Get advice", href: "/bookings" },
        },
      ],
    },
  ],
  myths: [
    {
      myth: "My employer can make me pay the sponsorship costs.",
      fact: "No. The employer must pay the nomination charge and the SAF levy and can't recover them from you. Paying for a sponsorship is unlawful for both of you and can lead to refusal or cancellation.",
    },
    {
      myth: "If I lose my job, I have to leave straight away.",
      fact: "You have up to 180 days in a single period, and 365 days in total across your visa, to have a new nomination approved, get another visa or leave. During that time you can stop working or work for another business.",
    },
    {
      myth: "There's an age limit for the 482.",
      fact: "There isn't. But the usual next step, the subclass 186, needs you to be under 45 when you apply, unless you're exempt. Plan ahead.",
    },
    {
      myth: "Once I'm in Australia I can work for anyone.",
      fact: "You must work in the nominated occupation for your sponsor (or an associated entity of an Australian sponsor). A new employer needs an approved nomination before you start.",
    },
    {
      myth: "My partner won't be allowed to work.",
      fact: "Partners and children on the visa can live, work and study in Australia, with no limit on hours.",
    },
    {
      myth: "The Specialist Skills stream is only for managers.",
      fact: "Any occupation in ANZSCO Major Groups 1, 2, 4, 5 or 6 can use it if the salary is at least A$146,576. Trades, machinery operators and labourers can't.",
    },
    {
      myth: "Everyone needs a skills assessment.",
      fact: "Only if IMMI 18/039 lists your occupation and passport, or Home Affairs asks for one. If it's mandatory, it must be started before you lodge.",
    },
    {
      myth: "I can simply extend my 482.",
      fact: "A 482 can't be extended. Staying longer needs a new nomination and a new visa application, or a move to permanent residence.",
    },
  ],
  roles: [
    {
      id: "worker",
      label: "I'm the worker",
      intro: "Your part is your own evidence, a valid application, and keeping to your conditions once you're here.",
      groups: [
        {
          title: "Before you apply",
          items: [
            "Collect references showing at least 1 year of relevant experience in the last 5 years",
            "Sit an approved English test, unless you're exempt",
            "Start a skills assessment if IMMI 18/039 requires one",
            "Arrange health insurance, and police certificates where required",
          ],
        },
        {
          title: "When you apply",
          items: [
            "Lodge in ImmiAccount with the nomination TRN",
            "Pay A$4,015, plus A$4,015 per adult and A$1,005 per child included",
            "Respond to requests for biometrics, health checks or information",
          ],
        },
        {
          title: "Once it's granted",
          items: [
            "Start work within 90 days",
            "Work only for your sponsor, in the nominated occupation",
            "Keep health insurance for your whole stay",
            "Tell Home Affairs about changes to your passport, address, employer, pay or family",
          ],
        },
      ],
    },
    {
      id: "employer",
      label: "I'm the employer",
      tone: "pink",
      intro: "Your part is the sponsorship, the nomination, and meeting your obligations for as long as you sponsor.",
      groups: [
        {
          title: "To sponsor",
          items: [
            "Apply to be a Standard Business Sponsor (A$420, approved for 5 years)",
            "Advertise the role in Australia: two ads, four weeks, within four months",
            "Work out the annual market salary rate and pay at least the CSIT or SSIT",
          ],
        },
        {
          title: "To nominate",
          items: [
            "Lodge the nomination (A$330) and pay the SAF levy",
            "Give the worker the TRN for their visa application",
            "Never recover these costs from the worker",
          ],
        },
        {
          title: "While you sponsor",
          items: [
            "Give the same terms and conditions as Australian workers in the same role",
            "Keep records and tell Home Affairs about changes, such as the job ending",
            "Co-operate with inspectors: breaches can lead to bars, fines and civil penalties",
          ],
        },
      ],
      link: { label: "Read the full employer guide", href: "/visas/employer-sponsored/employer-sponsorship-and-nomination" },
    },
  ],
  glossary: [
    { id: "sbs", term: "Standard Business Sponsor", definition: "A business approved by Home Affairs to sponsor overseas workers. Approval lasts five years and the application costs A$420." },
    {
      id: "nomination",
      term: "Nomination",
      definition: "The employer's application describing the job it wants you to fill: occupation, duties, salary and period. It costs A$330 for a 482 and must be approved before your visa is granted.",
    },
    { id: "trn", term: "TRN", full: "Transaction Reference Number", definition: "The reference number of the nomination. You enter it in your visa application so Home Affairs can link the two." },
    { id: "csol", term: "CSOL", full: "Core Skills Occupation List", definition: "The list of occupations that can use the Core Skills stream." },
    {
      id: "csit",
      term: "CSIT",
      full: "Core Skills Income Threshold",
      definition: "The minimum salary for the Core Skills stream: A$79,423 for nominations lodged from 1 July 2026 to 30 June 2027. It is indexed every 1 July.",
    },
    {
      id: "ssit",
      term: "SSIT",
      full: "Specialist Skills Income Threshold",
      definition: "The minimum salary for the Specialist Skills stream: A$146,576 for nominations lodged from 1 July 2026 to 30 June 2027.",
    },
    {
      id: "amsr",
      term: "AMSR",
      full: "Annual market salary rate",
      definition: "What an Australian worker is paid for the same job in the same place. Your pay must be at least this, as well as the income threshold.",
    },
    {
      id: "lmt",
      term: "Labour market testing",
      definition: "Advertising the job in Australia before nominating: at least two ads, each running four weeks, in the four months before the nomination.",
    },
    {
      id: "saf",
      term: "SAF levy",
      full: "Skilling Australians Fund levy",
      definition: "A training levy the employer pays when it nominates: A$1,200 a year of the nomination if turnover is under A$10 million, otherwise A$1,800 a year.",
    },
    {
      id: "anzsco",
      term: "ANZSCO",
      full: "Australian and New Zealand Standard Classification of Occupations",
      definition: "The national list of occupation codes. The first digit (the Major Group) decides whether a job can use the Specialist Skills stream.",
    },
    {
      id: "c8607",
      term: "Condition 8607",
      definition: "Your work condition: work only for your sponsor, in the nominated occupation. If the job ends you can stop work, or work for another business, for up to 180 days at a time and 365 days in total.",
    },
    { id: "subsequent", term: "Subsequent entrant", definition: "A family member who applies to join you after you have lodged or been granted your 482." },
    {
      id: "trt",
      term: "TRT stream",
      full: "Temporary Residence Transition stream",
      definition: "The subclass 186 stream for people who have worked for their sponsor on a 482 (or 457) for 2 years. It leads to permanent residence.",
    },
    { id: "immi18039", term: "IMMI 18/039", definition: "The legal instrument listing which occupation and passport combinations need a mandatory skills assessment for a 482." },
    { id: "stac", term: "Subsequent temporary application charge", definition: "An extra A$700 charge when you apply in Australia after holding certain temporary visas." },
    {
      id: "labour-agreement",
      term: "Labour agreement",
      definition: "A formal agreement between an employer and the Australian Government that can allow occupations, salaries or English levels outside the standard rules.",
    },
  ],
  verifiedExtras: [
    {
      fact: "The subclass 186 base application charge is A$6,140 (1 July 2026).",
      source: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
    },
  ],
  cta: {
    subtitle: "We check your facts against these rules, tell you honestly where you stand, and prepare the nomination and visa application with you and your employer.",
  },
  streamFinder: {
    csit: 79423,
    ssit: 146576,
    validFor: "nominations lodged from 1 July 2026 to 30 June 2027",
    sliderMin: 50000,
    sliderMax: 200000,
    defaultSalary: 90000,
    listUrl: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
    groups: [
      { id: 1, label: "Managers", examples: "Chief executives, construction or hospitality managers", specialist: true },
      { id: 2, label: "Professionals", examples: "Engineers, nurses, accountants, software developers", specialist: true },
      { id: 3, label: "Technicians and trades", examples: "Chefs, electricians, mechanics, carpenters", specialist: false },
      { id: 4, label: "Community and personal service", examples: "Aged care, child care, hospitality workers", specialist: true },
      { id: 5, label: "Clerical and administrative", examples: "Office managers, accounts clerks", specialist: true },
      { id: 6, label: "Sales", examples: "Sales representatives, retail roles", specialist: true },
      { id: 7, label: "Machinery operators and drivers", examples: "Truck drivers, plant operators", specialist: false },
      { id: 8, label: "Labourers", examples: "Cleaners, farm and factory hands", specialist: false },
    ],
  },
  costs: {
    primary: 4015,
    adult: 4015,
    child: 1005,
    stac: 700,
    sponsorship: 420,
    nomination: 330,
    safSmall: 1200,
    safLarge: 1800,
    maxYears: 4,
    estimatorUrl: "https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator?visa=482-69",
  },
  jobGap: {
    perGap: 180,
    total: 365,
    countedFrom: "1 July 2024",
    condition: "8607",
    termId: "c8607",
  },
  prRoad: {
    yearsToPr: 2,
    maxStayYears: 4,
    ageLimit: 45,
    prVisaName: "Employer Nomination Scheme visa (subclass 186)",
    prVisaHref: "/visas/employer-sponsored/employer-nomination-scheme-visa-186",
    exemptionsNote:
      "Exemptions include some university academics and scientists, medical practitioners with two years of regional work, and 482 holders who earned at least the Fair Work high income threshold in two of the last three years.",
  },
};
