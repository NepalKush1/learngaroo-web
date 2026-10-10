// ─────────────────────────────────────────────────────────────────────────
// VIDEOS — edit this file to add, remove or reorder videos on the site.
//
// `src` accepts either:
//   • a YouTube link (any form: youtube.com/watch?v=…, youtu.be/…,
//     youtube.com/shorts/…, or just the 11-character video ID), or
//   • a video file you've placed in /public/videos, e.g. "/videos/intro.mp4"
//     (optionally add `poster: "/videos/intro.jpg"` as the cover image).
//
// Videos with an empty `src` ("") stay hidden until you add the link. The
// homepage video section and the "Videos" menu item only appear once at
// least one video is published. Videos with `featured: true` appear on the
// homepage (the first published videos are used if none are featured).
// ─────────────────────────────────────────────────────────────────────────

export const videoCategories = [
  "Student Visas",
  "Skilled Migration",
  "Employer-Sponsored",
  "Partner & Family",
  "Tips & Updates",
] as const;

export type VideoCategory = (typeof videoCategories)[number];

export interface Video {
  slug: string;
  title: string;
  description: string;
  category: VideoCategory;
  src: string;
  poster?: string;
  duration?: string;
  featured?: boolean;
}

// Optional short welcome video. When set, a "Watch our intro" button
// appears in the homepage hero and opens it in a pop-up player.
export const introVideo: Pick<Video, "title" | "src" | "poster"> = {
  title: "Welcome to Learniiz Migration & Visa Services",
  src: "",
};

export const videos: Video[] = [
  {
    slug: "student-visa-500-explained",
    title: "Student visa (subclass 500) explained",
    description:
      "Who can apply, the key requirements, and the common mistakes to avoid before you lodge.",
    category: "Student Visas",
    src: "",
    duration: "6 min",
    featured: true,
  },
  {
    slug: "skilled-migration-points-test",
    title: "How the skilled migration points test works",
    description:
      "A walkthrough of the points table for subclass 189, 190 and 491 visas, and how you may be able to improve your score.",
    category: "Skilled Migration",
    src: "",
    duration: "8 min",
    featured: true,
  },
  {
    slug: "employer-sponsorship-482-186",
    title: "Employer sponsorship: subclass 482 vs subclass 186",
    description:
      "The Skills in Demand (subclass 482) and Employer Nomination Scheme (subclass 186) visas compared, and which might suit you.",
    category: "Employer-Sponsored",
    src: "",
    duration: "7 min",
    featured: true,
  },
  {
    slug: "partner-visa-evidence",
    title: "Partner visa: building strong relationship evidence",
    description:
      "The four areas the Department considers when assessing a genuine and continuing relationship.",
    category: "Partner & Family",
    src: "",
    duration: "9 min",
  },
  {
    slug: "visa-refusal-next-steps",
    title: "Received a visa refusal? Your next steps",
    description:
      "Review rights, time limits and options after a refusal, and why acting quickly matters.",
    category: "Tips & Updates",
    src: "",
    duration: "5 min",
  },
  {
    slug: "migration-updates-this-month",
    title: "Australian migration updates this month",
    description:
      "A quick roundup of policy changes, processing times and announcements you should know about.",
    category: "Tips & Updates",
    src: "",
    duration: "4 min",
  },
];

// ── helpers ──────────────────────────────────────────────────────────────

export type ResolvedVideoSource =
  | { kind: "youtube"; id: string }
  | { kind: "file"; src: string }
  | { kind: "none" };

const FILE_EXTENSIONS = /\.(mp4|webm|ogg|mov|m4v)(\?.*)?$/i;

export function resolveVideoSource(src: string): ResolvedVideoSource {
  const value = src.trim();
  if (!value) return { kind: "none" };
  if (value.startsWith("/") || FILE_EXTENSIONS.test(value)) {
    return { kind: "file", src: value };
  }
  if (/^[\w-]{11}$/.test(value)) return { kind: "youtube", id: value };

  const match = value.match(
    /(?:youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([\w-]{11})/,
  );
  return match ? { kind: "youtube", id: match[1] } : { kind: "none" };
}

// Only videos that actually have a source are shown on the site.
export const publishedVideos: Video[] = videos.filter(
  (video) => resolveVideoSource(video.src).kind !== "none",
);
