"use client";

import { useState } from "react";
import Image from "next/image";
import { resolveVideoSource } from "@/data/videos";

// Click-to-play "facade": shows a cover image and play button, and only
// loads the YouTube iframe / video file once the visitor presses play.
// Keeps pages fast no matter how many videos are listed.
export function VideoPlayer({
  title,
  src,
  poster,
  autoPlay = false,
  compact = false,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  title: string;
  src: string;
  poster?: string;
  autoPlay?: boolean;
  compact?: boolean;
  className?: string;
  sizes?: string;
}) {
  const source = resolveVideoSource(src);
  const [playing, setPlaying] = useState(autoPlay);

  const frame = `relative aspect-video w-full overflow-hidden rounded-2xl bg-brand-navy ${className}`;

  if (source.kind === "none") {
    return (
      <div className={frame}>
        <div className="bg-gradient-brand absolute inset-0 opacity-90" aria-hidden="true" />
        <div className="bg-dots absolute inset-0 opacity-40 invert" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center justify-center gap-2 text-white">
          <span className={`flex items-center justify-center rounded-full bg-white/20 ring-1 ring-white/40 backdrop-blur ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
            <PlayGlyph className={`ml-0.5 ${compact ? "h-4 w-4" : "h-6 w-6"}`} />
          </span>
          {compact ? (
            <span className="text-[11px] font-bold uppercase tracking-[0.16em]">Coming soon</span>
          ) : (
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em]">
            Video coming soon
          </span>
          )}
        </div>
      </div>
    );
  }

  if (playing) {
    return (
      <div className={frame}>
        {source.kind === "youtube" ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${source.id}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <video
            src={source.src}
            poster={poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full bg-black object-contain"
          >
            <track kind="captions" />
          </video>
        )}
      </div>
    );
  }

  const cover =
    poster ?? (source.kind === "youtube" ? `https://i.ytimg.com/vi/${source.id}/hqdefault.jpg` : undefined);

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${title}`}
      className={`group block ${frame}`}
    >
      {cover ? (
        <Image src={cover} alt="" fill sizes={sizes} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      ) : (
        <div className="bg-gradient-brand absolute inset-0" aria-hidden="true" />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 via-brand-navy/10 to-transparent" aria-hidden="true" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-primary shadow-xl transition-transform duration-300 group-hover:scale-110">
          <span className="absolute inset-0 animate-ping rounded-full bg-white/40 motion-reduce:animate-none" aria-hidden="true" />
          <PlayGlyph className="relative ml-1 h-7 w-7" />
        </span>
      </span>
    </button>
  );
}

export function PlayGlyph({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.52.85l11.2-6.86a1 1 0 0 0 0-1.7L9.52 4.29A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}
