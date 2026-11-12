"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ReactNode } from "react";
import Reveal from "./Reveal";

export type ReelItem = { src: string; poster: string; label: string; caption?: string };

/**
 * One vertical reel. Until tapped it is only a lazy, optimized poster image; the video
 * element (and its download) is created on the first tap, then plays with sound.
 */
function Reel({
  reel,
  active,
  onPlay,
  onStop,
}: {
  reel: ReelItem;
  active: boolean;
  onPlay: () => void;
  onStop: () => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const toggle = () => {
    if (!started) {
      onPlay();
      setStarted(true);
      return;
    }
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
        {started ? (
          <video
            ref={ref}
            src={reel.src}
            poster={reel.poster}
            autoPlay
            playsInline
            onPause={onStop}
            onEnded={onStop}
            className="h-full w-full object-cover"
          />
        ) : (
          <Image src={reel.poster} alt={reel.label} fill sizes="(min-width: 1024px) 220px, 230px" className="object-cover" />
        )}
        {!active && (
          <span className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/5">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-xl text-simple-purple shadow-lg transition-transform group-hover:scale-110">
              ▶
            </span>
          </span>
        )}
      </button>
      <div className="mt-3 text-center text-sm font-bold text-simple-ink">{reel.label}</div>
      {reel.caption && (
        <div className="text-center text-xs font-semibold uppercase tracking-[0.04em] text-simple-ink-soft">{reel.caption}</div>
      )}
    </div>
  );
}

/** A row/grid of reels where only one plays at a time (swipeable on mobile). */
export function ReelGrid({ reels, gridClass = "lg:grid-cols-5" }: { reels: ReelItem[]; gridClass?: string }) {
  const [playing, setPlaying] = useState(-1);
  const wrap = useRef<HTMLDivElement>(null);

  const play = (i: number) => {
    wrap.current?.querySelectorAll("video").forEach((v, j) => j !== i && v.pause());
    setPlaying(i);
  };

  return (
    <div
      ref={wrap}
      className={`-mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 ${gridClass}`}
    >
      {reels.map((reel, i) => (
        <Reel
          key={reel.src}
          reel={reel}
          active={playing === i}
          onPlay={() => play(i)}
          onStop={() => setPlaying((p) => (p === i ? -1 : p))}
        />
      ))}
    </div>
  );
}

/** A section of vertical video reels with a heading and a call to action. */
export default function ReelsShowcase({
  id,
  eyebrow,
  heading,
  sub,
  cta,
  reels,
  alt = false,
  gridClass = "lg:grid-cols-5",
}: {
  id: string;
  eyebrow: string;
  heading: ReactNode;
  sub: string;
  cta: { href: string; label: string };
  reels: ReelItem[];
  alt?: boolean;
  gridClass?: string;
}) {
  return (
    <div id={id} className={alt ? "border-y border-simple-border bg-simple-surface-alt" : "bg-white"}>
      <Reveal from="left" className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">{eyebrow}</div>
            <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
              {heading}
            </h2>
            <p className="m-0 text-lg text-simple-ink-soft">
              {sub}
            </p>
          </div>
          <Link
            href={cta.href}
            className="rounded-[10px] bg-simple-purple px-[22px] py-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            {cta.label}
          </Link>
        </div>

        <ReelGrid reels={reels} gridClass={gridClass} />
      </Reveal>
    </div>
  );
}
