import type { Video } from "@/data/videos";
import { VideoPlayer } from "./VideoPlayer";

export function VideoCard({ video }: { video: Video }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-3 shadow-[0_1px_2px_rgba(11,26,46,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_50px_-24px_rgba(11,26,46,0.3)]">
      <VideoPlayer
        title={video.title}
        src={video.src}
        poster={video.poster}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-brand-mint px-2.5 py-1 uppercase tracking-wider text-brand-primary">
            {video.category}
          </span>
          {video.duration && <span className="text-gray-500">{video.duration}</span>}
        </div>
        <h3 className="font-heading mt-3 text-lg font-bold text-brand-navy">{video.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">{video.description}</p>
      </div>
    </article>
  );
}
