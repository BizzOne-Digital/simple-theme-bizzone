import Image from "next/image";
import Reveal from "./Reveal";
import PaymentBadges from "./PaymentBadges";

function VerifiedBadge() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Verified" className="flex-none">
      <circle cx="12" cy="12" r="11" fill="#0095F6" />
      <path d="M7.5 12.5l3 3 6-6.5" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function MetaGooglePartners() {
  return (
    <>
      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal from="right" className="max-w-[1240px] mx-auto px-6 py-16 flex flex-col gap-8">
          <div className="max-w-[680px] flex flex-col gap-2.5">
            <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
              Certified on the platforms that drive leads
            </div>
            <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.4rem)]">
              Verified on Meta and Google, built for small business budgets
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Meta */}
            <div className="bg-white border border-simple-border rounded-[18px] p-8 flex flex-col gap-3.5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <svg width="30" height="20" viewBox="0 0 28 18" aria-hidden="true" className="flex-none">
                    <path d="M3 9c0-4 2.5-7 6-7 2.5 0 4.2 1.8 5.5 4 1.3-2.2 3-4 5.5-4 3.5 0 6 3 6 7s-2.5 7-6 7c-2.5 0-4.2-1.8-5.5-4-1.3 2.2-3 4-5.5 4-3.5 0-6-3-6-7z" fill="none" stroke="#0081FB" strokeWidth="3" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <div className="font-display font-bold text-lg">Meta Verified</div>
                    <VerifiedBadge />
                  </div>
                </div>
                <span className="bg-simple-chip-bg text-simple-chip-text text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  Meta Ads Certified
                </span>
              </div>
              <p className="m-0 text-base text-simple-ink-faint">
                We&apos;re verified on Meta — giving you confidence you&apos;re working with a real,
                accountable business, not a freelancer. Our team is certified in Meta Ads
                management: Facebook and Instagram campaigns built for small business budgets,
                where every dollar has to work.
              </p>
              <div className="font-display font-extrabold text-[34px]">
                $99<span className="text-sm font-medium text-simple-ink-soft"> /month</span>
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />1 ad campaign, optimized weekly</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />2 ad creatives included</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Weekly monitoring and optimization</li>
              </ul>
              <a href="#book" className="mt-1 bg-simple-purple text-white no-underline font-bold text-[15px] px-5 py-[13px] rounded-[10px] text-center transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white">
                Get More Leads on Meta →
              </a>
            </div>

            {/* Google */}
            <div className="bg-white border border-simple-border rounded-[18px] p-8 flex flex-col gap-3.5">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true" className="flex-none">
                    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
                    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
                    <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.4 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
                    <path fill="#1976D2" d="M43.6 20.5H24v8h11.3c-0.8 2.3-2.2 4.2-4 5.6l6.3 5.3C40.5 36.9 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <div className="font-display font-bold text-lg">Google Verified</div>
                    <VerifiedBadge />
                  </div>
                </div>
                <span className="bg-simple-chip-bg text-simple-chip-text text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
                  Google Ads Certified
                </span>
              </div>
              <p className="m-0 text-base text-simple-ink-faint">
                We&apos;re verified on Google — a mark of a legitimate, accountable business, not a
                side hustle. Our team is Google Ads certified, putting your business in front of
                people at the exact moment they&apos;re searching for what you sell.
              </p>
              <div className="font-display font-extrabold text-[34px]">
                $99<span className="text-sm font-medium text-simple-ink-soft"> /month</span>
              </div>
              <ul className="m-0 p-0 list-none flex flex-col gap-2">
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />1 ad campaign, optimized weekly</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Search, Maps &amp; YouTube placements</li>
                <li className="flex gap-2 text-[15px] text-simple-ink-soft"><Check />Creatives not included — ask about adding them</li>
              </ul>
              <a href="#book" className="mt-1 bg-simple-purple text-white no-underline font-bold text-[15px] px-5 py-[13px] rounded-[10px] text-center transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white">
                Get Found on Google →
              </a>
            </div>
          </div>
          <PaymentBadges center />
        </Reveal>
      </div>

      {/* Our Story (short) */}
      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal from="left" className="max-w-[1240px] mx-auto px-6 py-20 flex flex-wrap gap-12 items-center">
          <div className="flex-[1_1_460px] min-w-0 flex flex-col gap-4">
            <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Our Story</div>
            <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
              From a small team to a growing agency
            </h2>
            <p className="m-0 text-[17px] text-simple-ink-soft">
              BizzOne Digital started with a simple belief: every business, no matter how small,
              deserves a premium digital presence that actually drives results. We saw too many
              agencies delivering pretty websites that didn&apos;t convert, flashy ads that didn&apos;t
              sell, and social media that didn&apos;t grow.
            </p>
            <p className="m-0 text-[17px] text-simple-ink-soft">
              So we built something different — a team obsessed with performance, design and real
              business outcomes, helping 500+ brands scale with websites, advertising, social
              media, SEO and AI automation.
            </p>
          </div>
          <div className="flex-[1_1_320px] min-w-0 grid grid-cols-2 gap-4">
            <div className="bg-white border border-simple-border rounded-2xl p-6 col-span-2 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display font-extrabold text-[28px]">25+</div>
              <div className="text-simple-ink-soft text-sm font-semibold">Dedicated team members</div>
            </div>
            <div className="bg-white border border-simple-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display font-extrabold text-[22px]">Canada &amp; US</div>
              <div className="text-simple-ink-soft text-sm font-semibold">Markets served</div>
            </div>
            <div className="bg-white border border-simple-border rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1">
              <div className="font-display font-extrabold text-[22px]">$30M+</div>
              <div className="text-simple-ink-soft text-sm font-semibold">Client revenue generated</div>
            </div>
          </div>
        </Reveal>

        {/* Never marked up + stats + Instagram */}
        <div className="max-w-[1240px] mx-auto px-6 pb-16 flex flex-col gap-5">
          <div className="flex items-center gap-2.5 bg-simple-ink rounded-xl px-5 py-3.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8F31D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true">
              <path d="M12 2v20" /><path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-white font-bold text-[15px]">
              Ad spend billed directly by Meta/Google — <span className="text-simple-lime">never marked up</span>
            </span>
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-between pt-2 border-t border-simple-border">
            <div className="flex gap-5 flex-wrap text-sm text-simple-ink-soft font-semibold">
              <span>500+ brands scaled</span>
              <span className="text-simple-muted">|</span>
              <span>3 years in business</span>
            </div>
            <a href="https://www.instagram.com/bizzonedigital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 no-underline text-inherit">
              <img src="/logo.png" alt="BizzOne Digital logo" className="w-7 h-7 object-contain rounded-md" />
              <span className="font-display font-bold text-[15px] text-simple-ink">@bizzonedigital</span>
              <VerifiedBadge />
              <span className="text-simple-ink-soft text-sm">Follow us</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
