import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/sections/PageHero";
import { ConsultationCTA } from "@/components/sections/ConsultationCTA";
import { VideoGallery } from "@/components/video/VideoGallery";
import { publishedVideos } from "@/data/videos";
import { GeneralInfoNotice } from "@/components/ui/GeneralInfoNotice";

export const metadata: Metadata = {
  title: "Australian Visa Video Guides",
  description:
    "Practical video guides from Learniiz Migration & Visa Services on Australian student, skilled, employer-sponsored and partner visas."
};

export default function VideosPage() {
  return (
    <>
      <PageHero
        eyebrow="Video library"
        title="Watch & learn about Australian visas"
        subtitle="Clear, practical video explainers on visa pathways, requirements and migration updates. General information only."
      />

      <section className="bg-brand-surface py-20">
        <Container>
          {publishedVideos.length > 0 ? (
            <VideoGallery videos={publishedVideos} />
          ) : (
            <div className="mx-auto max-w-xl rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center">
              <p className="font-heading text-xl font-bold text-brand-navy">Videos are on the way</p>
              <p className="mt-3 text-gray-600">
                We&apos;re recording practical guides on Australian visa pathways. Check back
                soon, or book a consultation if you need advice now.
              </p>
            </div>
          )}
          <GeneralInfoNotice className="mx-auto mt-12 max-w-3xl" />
        </Container>
      </section>

      <ConsultationCTA
        title="Have a question a video can't answer?"
        subtitle="Every situation is different. Book a consultation for advice tailored to you."
      />
    </>
  );
}
