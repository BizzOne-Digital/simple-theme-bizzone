import Link from "next/link";
import Reveal from "./Reveal";
import { ReelGrid } from "./ReelsShowcase";
import { OFFER_REEL } from "@/data/reels";

const POINTS = ["One-time payment, no subscriptions", "No hidden fees, no tech skills needed", "Full setup handled for you"];

/** $79 website offer: copy on the left, one reel on the right. */
export default function OfferVideo() {
  return (
    <div id="reels" className="bg-white">
      <Reveal
        from="left"
        className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 px-6 py-[88px] md:grid-cols-[1fr_300px]"
      >
        <div className="flex flex-col gap-5">
          <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Watch &amp; See</div>
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
            A 5-page website for <span className="text-simple-purple">$79, one-time</span>
          </h2>
          <ul className="m-0 flex list-none flex-col gap-3 p-0 text-lg text-simple-ink-soft">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-simple-chip-bg text-sm font-bold text-simple-purple">
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/#book"
            className="self-start rounded-[10px] bg-simple-purple px-[22px] py-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            Book Free Consultation →
          </Link>
        </div>
        <div className="mx-auto w-full max-w-[300px] [&_.snap-center]:w-full">
          <ReelGrid reels={[OFFER_REEL]} gridClass="sm:!grid-cols-1" />
        </div>
      </Reveal>
    </div>
  );
}
