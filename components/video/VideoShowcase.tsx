import { Container } from "@/components/ui/Container";
import { Button, ArrowIcon } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { publishedVideos } from "@/data/videos";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";
import { VideoPlayer } from "./VideoPlayer";

// Homepage video section: one large featured video plus a short list of
// the other featured videos.
export function VideoShowcase() {
  const featured = publishedVideos.filter((video) => video.featured);
  const [lead, ...rest] = featured.length ? featured : publishedVideos;
  if (!lead) return null;

  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-25 invert" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Watch & learn"
              title="Visa guidance, explained on video"
              subtitle="Short, practical explainers on Australian visa pathways — so you can come to your consultation informed."
            />
          </Reveal>
          <Reveal delay={80}>
            <Button href="/videos" variant="ghost-light">
              View all videos
              <ArrowIcon />
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <div className="rounded-3xl bg-white/5 p-3 ring-1 ring-white/10">
              <VideoPlayer title={lead.title} src={lead.src} poster={lead.poster} sizes="(min-width: 1024px) 55vw, 100vw" />
              <div className="px-3 pb-3 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green-light">
                  {lead.category}
                  {lead.duration && <span className="text-white/50"> · {lead.duration}</span>}
                </p>
                <h3 className="font-heading mt-2 text-2xl font-bold">{lead.title}</h3>
                <p className="mt-2 text-white/70">{lead.description}</p>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {rest.slice(0, 3).map((video, index) => (
              <Reveal key={video.slug} delay={index * 80}>
                <div className="grid grid-cols-[160px_1fr] items-center gap-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 sm:grid-cols-[200px_1fr]">
                  <VideoPlayer title={video.title} src={video.src} poster={video.poster} className="rounded-xl" sizes="200px" compact />
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-green-light">
                      {video.category}
                    </p>
                    <h3 className="mt-1 font-bold leading-snug">{video.title}</h3>
                    {video.duration && <p className="mt-1 text-xs text-white/50">{video.duration}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <GeneralInfoNotice tone="light" className="mt-10" />
      </Container>
    </section>
  );
}
