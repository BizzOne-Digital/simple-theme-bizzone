"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import Reveal from "./Reveal";

const REELS = [
  { src: "/reels/reel-1.mp4", poster: "/reels/reel-1.jpg", label: "5-page website for $79" },
  { src: "/reels/reel-2.mp4", poster: "/reels/reel-2.jpg", label: "Your business online fast" },
  { src: "/reels/reel-3.mp4", poster: "/reels/reel-3.jpg", label: "No tech skills needed" },
  { src: "/reels/reel-4.mp4", poster: "/reels/reel-4.jpg", label: "Live in 24 hours" },
  { src: "/reels/reel-5.mp4", poster: "/reels/reel-5.jpg", label: "No subscriptions, no hidden fees" },
];

/** One vertical reel: poster until tapped, then plays with sound; only one reel plays at a time. */
function Reel({
  reel,
  active,
  onPlay,
  onStop,
}: {
  reel: (typeof REELS)[number];
  active: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (active && !v.paused) {
      v.pause();
      return;
    }
    onPlay();
    v.play().catch(() => {});
  };

  return (
    <div className="w-[230px] flex-none snap-center sm:w-auto">
      <button
        type="button"
        onClick={toggle}
        aria-label={`Play video: ${reel.label}`}
        className="group relative block aspect-[9/16] w-full overflow-hidden rounded-[22px] border border-simple-border bg-simple-ink shadow-[0_16px_36px_rgba(15,10,26,0.14)]"
      >
        <video
          ref={ref}
          src={reel.src}
          poster={reel.poster}
          preload="none"
          playsInline
          onPause={onStop}
          onEnded={onStop}
          className="h-full w-full object-cover"
        />
        {!active && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/5">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-xl text-simple-purple shadow-lg transition-transform group-hover:scale-110">
              ▶
            </span>
          </span>
        )}
      </button>
      <div className="mt-3 text-center text-sm font-bold text-simple-ink">{reel.label}</div>
    </div>
  );
}

/** Home page section with the $79 website offer reels. */
export default function ReelsShowcase() {
  const [playing, setPlaying] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);

  const play = (i: number) => {
    wrap.current?.querySelectorAll("video").forEach((v, j) => j !== i && v.pause());
    setPlaying(i);
  };

  return (
    <div id="reels" className="border-y border-simple-border bg-simple-surface-alt">
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Watch &amp; See</div>
            <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
              A 5-page website for <span className="text-simple-purple">$79, one-time</span>
            </h2>
            <p className="m-0 text-lg text-simple-ink-soft">
              No subscriptions, no hidden fees, no tech skills needed. We handle the full setup for you.
            </p>
          </div>
          <Link
            href="/#book"
            className="rounded-[10px] bg-simple-purple px-[22px] py-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            Book Free Consultation →
          </Link>
        </div>

        <div
          ref={wrap}
          className="-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5"
        >
          {REELS.map((reel, i) => (
            <Reel
              key={reel.src}
              reel={reel}
              active={playing === i}
              onPlay={() => play(i)}
              onStop={() => setPlaying((p) => (p === i ? -1 : p))}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
