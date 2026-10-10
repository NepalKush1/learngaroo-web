"use client";

import { useState } from "react";
import { videoCategories, type Video, type VideoCategory } from "@/data/videos";
import { VideoCard } from "./VideoCard";

export function VideoGallery({ videos }: { videos: Video[] }) {
  const [active, setActive] = useState<VideoCategory | "All">("All");

  // Only offer filters for categories that actually have videos.
  const categories = videoCategories.filter((category) =>
    videos.some((video) => video.category === category),
  );
  const visible = active === "All" ? videos : videos.filter((video) => video.category === active);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Filter videos by topic">
        {(["All", ...categories] as const).map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            aria-pressed={active === category}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === category
                ? "bg-brand-navy text-white"
                : "bg-white text-brand-navy ring-1 ring-gray-200 hover:ring-brand-primary/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((video) => (
          <VideoCard key={video.slug} video={video} />
        ))}
      </div>
    </div>
  );
}
