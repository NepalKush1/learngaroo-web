import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { VideoGallery } from "@/components/video/VideoGallery";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos",
  description:
    "Watch practical video guides from Learniiz Migration & Visa Services on Australian student, skilled, employer-sponsored and partner visas.",
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Video library"
        title="Watch & learn about Australian visas"
        subtitle="Clear, practical video explainers covering visa pathways, requirements and the latest migration updates."
      />

      <section className="bg-brand-surface py-20">
        <Container>
          <VideoGallery videos={videos} />
        </Container>
      </section>

      <ConsultationCTA
        title="Have a question a video can't answer?"
        subtitle="Every situation is different. Book a consultation for advice tailored to you."
      />
    </>
  );
}
