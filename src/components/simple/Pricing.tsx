import Link from "next/link";
import Reveal from "./Reveal";

function Check({ color = "#8C00FF" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function Pricing() {
  return (
    <div id="pricing" className="bg-white text-simple-ink">
      <Reveal from="left" className="max-w-[1240px] mx-auto px-6 py-[88px] flex flex-col gap-11">
        <div className="max-w-[720px] flex flex-col gap-3.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-accent">
            Simple starting points
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
            Start small or go all-in
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Website */}
          <div className="bg-white border border-simple-border rounded-2xl p-8 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="font-bold text-lg">Website</div>
            <div className="font-display font-extrabold text-[44px] leading-none">
              $79<span className="text-base font-medium text-simple-ink-soft"> starting</span>
            </div>
            <div className="text-base text-simple-ink-soft flex-grow">
              A professional, mobile-ready website, live in 24–48 hours. Premium ($149) and
              Advanced ($299) options available.
            </div>
            <a href="#book" className="border-[1.5px] border-simple-ink text-simple-ink no-underline font-bold py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5">
              Get My Website
            </a>
          </div>

          {/* Video Editing */}
          <div className="bg-white border border-simple-border rounded-2xl p-8 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="font-bold text-lg">Video Editing</div>
            <div className="font-display font-extrabold text-[44px] leading-none">
              $99<span className="text-base font-medium text-simple-ink-soft"> /month</span>
            </div>
            <div className="text-base text-simple-ink-soft flex-grow">
              7 edited reels every month. Bigger packages for 15 reels ($299) or 20 reels ($599).
            </div>
            <a href="#book" className="border-[1.5px] border-simple-ink text-simple-ink no-underline font-bold py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5">
              Start My Reels
            </a>
          </div>

          {/* Premium */}
          <div className="bg-simple-ink text-white rounded-2xl p-8 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
            <div className="flex justify-between items-center gap-2.5 flex-wrap">
              <div className="font-bold text-lg">Premium</div>
              <span className="bg-simple-lime text-simple-ink text-[13px] font-bold px-2.5 py-1 rounded-full">
                Most popular
              </span>
            </div>
            <div className="font-display font-extrabold text-[44px] leading-none">
              $699<span className="text-base font-medium text-[#CFCAE0]"> /month</span>
            </div>
            <ul className="m-0 p-0 list-none flex flex-col gap-2 flex-grow">
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]">
                <Check color="#C8F31D" />Standard website &amp; Google Business Profile setup — free
              </li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]">
                <Check color="#C8F31D" />Meta Ads (1 campaign, 2 creatives) &amp; Google Ads (1 campaign)
              </li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]">
                <Check color="#C8F31D" />SEO, managed monthly
              </li>
              <li className="flex gap-2 text-[15px] text-[#CFCAE0]">
                <Check color="#C8F31D" />Social media management: 5–7 reels + up to 8 image creatives a month
              </li>
            </ul>
            <a href="#book" className="bg-simple-purple text-white no-underline font-bold py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white">
              Get Started
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="/pricing" className="flex items-center gap-2 text-simple-purple no-underline font-bold text-[15px]">
            See every price &amp; compare all plans
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
