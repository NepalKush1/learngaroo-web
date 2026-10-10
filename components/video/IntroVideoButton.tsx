"use client";

import { useEffect, useRef, useState } from "react";
import { introVideo, resolveVideoSource } from "@/data/videos";
import { VideoPlayer, PlayGlyph } from "./VideoPlayer";

// "Watch our intro" button + pop-up player. Renders nothing until an intro
// video is configured in data/videos.ts.
export function IntroVideoButton() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  if (resolveVideoSource(introVideo.src).kind === "none") return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-3 rounded-full py-2 pl-2 pr-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-white"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand-primary shadow-md ring-1 ring-gray-100 transition-transform group-hover:scale-110">
          <PlayGlyph className="ml-0.5 h-4 w-4" />
        </span>
        Watch our intro
      </button>

      <dialog
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
        className="m-auto w-[min(92vw,960px)] bg-transparent p-0 backdrop:bg-brand-navy/80 backdrop:backdrop-blur-sm"
      >
        {open && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5" aria-hidden="true">
                <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            <VideoPlayer title={introVideo.title} src={introVideo.src} poster={introVideo.poster} autoPlay sizes="960px" />
          </div>
        )}
      </dialog>
    </>
  );
}
