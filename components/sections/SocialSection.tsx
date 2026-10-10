import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { siteConfig, whatsappLink } from "@/lib/site-config";

// "Follow along" cards for each configured social profile, plus WhatsApp.
// Platform colours are used only for the icon tile so the brand stays dominant.
const platformStyles: Record<string, string> = {
  facebook: "bg-[#1877f2]",
  instagram: "bg-[linear-gradient(45deg,#f9ce34,#ee2a7b_50%,#6228d7)]",
  tiktok: "bg-black",
  linkedin: "bg-[#0a66c2]",
  whatsapp: "bg-[#25d366]",
};

export function SocialSection() {
  const whatsappHref = whatsappLink();
  const channels = [
    ...siteConfig.social
      .filter((item) => item.href)
      .map((item) => ({ ...item, cta: `Follow on ${item.label}` })),
    ...(whatsappHref
      ? [
          {
            label: "WhatsApp",
            platform: "whatsapp",
            handle: siteConfig.contact.whatsappDisplay,
            href: whatsappHref,
            blurb: "Message us with a quick question or to arrange a consultation.",
            cta: "Chat on WhatsApp",
          },
        ]
      : []),
  ];

  if (channels.length === 0) return null;

  return (
    <section className="py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Stay connected"
            title="Follow along on our socials"
            subtitle="Plain-English visa explainers, updates and tips from a Registered Migration Agent, wherever you like to scroll."
            align="center"
          />
        </Reveal>
        <ul className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, index) => (
            <Reveal as="li" key={channel.platform} delay={index * 80}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/20 hover:shadow-[0_24px_50px_-20px_rgba(31,127,83,0.35)]"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6 ${platformStyles[channel.platform] ?? "bg-brand-primary"}`}
                >
                  <SocialIcon platform={channel.platform} className="h-6 w-6" />
                </span>
                <span className="font-heading mt-5 block text-lg font-bold text-brand-navy">{channel.label}</span>
                <span className="block text-sm font-semibold text-brand-primary">{channel.handle}</span>
                <span className="mt-2 block flex-1 text-sm leading-relaxed text-gray-600">{channel.blurb}</span>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy group-hover:text-brand-primary">
                  {channel.cta} ↗<span className="sr-only"> (opens in a new tab)</span>
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-gray-500">
          Social media posts are general information only, not migration advice for your situation.
          Book a consultation for advice on your circumstances.
        </p>
      </Container>
    </section>
  );
}
