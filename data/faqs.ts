// Frequently asked questions shown on the homepage (and given to search
// engines as FAQ structured data). Keep answers general — they aren't
// advice for any one person's situation.

import { formatPrice, getActiveConsultations } from "@/data/consultations";

const lowestFee = formatPrice(
  Math.min(...getActiveConsultations().map((consultation) => consultation.priceInCents)),
  "AUD",
);

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Do I need a Registered Migration Agent?",
    answer:
      "You don't have to use one. You can apply for an Australian visa yourself. But if you pay someone for immigration assistance, the law generally requires them to be a Registered Migration Agent or an Australian legal practitioner. A Registered Migration Agent is bound by a Code of Conduct and can help you choose the right visa, avoid costly mistakes and respond to requests from the Department of Home Affairs.",
  },
  {
    question: "How much does a consultation cost?",
    answer:
      `Consultations start from ${lowestFee} including GST, depending on the visa type. The fee is shown before you book and is paid securely online when you book. It covers the consultation only. Visa application charges payable to the Department of Home Affairs, and third-party costs such as skills assessment, English test or translation fees, are separate.`,
  },
  {
    question: "Can I book a consultation from outside Australia?",
    answer:
      "Yes. You can book from anywhere. Available times are shown in Melbourne time with your own local time alongside, so it's easy to pick a time that suits you.",
  },
  {
    question: "What should I have ready for my consultation?",
    answer:
      "Have your passport details, any current or previous visa grant or refusal letters, your English test results, qualifications and work history to hand. If you've received a refusal or cancellation decision, bring the decision letter and note the date you received it.",
  },
  {
    question: "Can you guarantee my visa will be granted?",
    answer:
      "No. No Registered Migration Agent can guarantee a visa outcome, because decisions are made by the Department of Home Affairs or the Administrative Review Tribunal. What we can do is give you an honest assessment of your options and help you put forward a complete, well-supported application.",
  },
  {
    question: "How can I increase my skilled migration points?",
    answer:
      "Common ways include improving your English score (Proficient English is worth 10 points and Superior English 20, compared with 0 for Competent), gaining more skilled work experience, completing a Professional Year in an eligible field, earning a NAATI credentialled community language (CCL) credential (5 points), or seeking state, territory or regional nomination. Try our free points calculator, and practise for PTE or NAATI CCL on Learniiz.",
  },
  {
    question: "My visa was refused. What should I do?",
    answer:
      "Act quickly. Not every decision can be reviewed, and applications to the Administrative Review Tribunal (ART) have strict time limits that depend on the type of decision. Your decision letter should tell you whether you can apply for review and by when. Book an ART Review consultation and have the letter ready so we can assess your options and deadlines.",
  },
];
