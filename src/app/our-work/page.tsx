import Image from "next/image";
import Link from "next/link";
import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Reveal from "@/components/simple/Reveal";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import { ReelGrid } from "@/components/simple/ReelsShowcase";
import { buildMetadata } from "@/lib/seo";
import { WEBSITE_PROJECTS } from "@/data/web-portfolio";
import { HAVEN_REELS } from "@/data/reels";

export const metadata = buildMetadata({
  title: "Our Work: Web Design, Logos & Social Media | BizzOne Digital",
  description:
    "Real clients, real work across Canada and the US — websites, logo design, social media and video production by BizzOne Digital.",
  path: "/our-work",
});

function Icon({ children, size = 26 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

function CountCard({ icon, count, label }: { icon: React.ReactNode; count: string; label: string }) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-[26px] flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <Icon>{icon}</Icon>
      <div className="font-display font-extrabold text-[26px]">
        {count} <span className="text-sm font-semibold text-simple-ink-soft">works</span>
      </div>
      <div className="font-bold text-[15px]">{label}</div>
    </div>
  );
}

function PremiumBadge() {
  return (
    <span className="rounded-full bg-simple-ink px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.06em] text-[#D4FF3A]">
      Premium Client
    </span>
  );
}

function CaseStudy({
  mark,
  tag,
  title,
  desc,
  premium = false,
}: {
  mark: React.ReactNode;
  tag: string;
  title: string;
  desc: string;
  premium?: boolean;
}) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-7 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <div className="flex items-center justify-between gap-3">
        {mark}
        {premium && <PremiumBadge />}
      </div>
      <div className="self-start bg-simple-chip-bg text-simple-chip-text text-xs font-extrabold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full">
        {tag}
      </div>
      <div className="font-display font-bold text-[19px]">{title}</div>
      <div className="text-simple-ink-soft text-[15px] flex-grow">{desc}</div>
      {premium ? (
        <a href="#haven-customs" className="font-bold text-simple-ink no-underline hover:text-simple-purple">
          See Full Results →
        </a>
      ) : (
        <Link href="/contact" className="font-bold text-simple-purple-deep no-underline hover:text-simple-purple-dark">
          Ask About This Project →
        </Link>
      )}
    </div>
  );
}

function Mono({ children }: { children: string }) {
  return (
    <div className="w-11 h-11 rounded-[10px] bg-simple-chip-bg text-simple-purple flex items-center justify-center font-display font-extrabold text-sm">
      {children}
    </div>
  );
}

function HavenMark({ size = 44 }: { size?: number }) {
  return (
    <div className="flex flex-none items-center justify-center overflow-hidden rounded-full bg-simple-ink" style={{ width: size, height: size }}>
      <Image src="/logos/haven-customs.webp" alt="Haven Customs logo" width={305} height={160} className="w-[80%] h-auto" />
    </div>
  );
}

const PERKS = [
  {
    title: "Project-Managed",
    desc: "Every deliverable tracked in one system — nothing falls through the cracks.",
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="m8 12 3 3 5-6" /></>,
  },
  {
    title: "12-Hour Daily Availability",
    desc: "We're available 12 hours a day to answer any question your customers have — real communication, not just numbers in a report.",
    icon: <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z" />,
  },
  {
    title: "Exceptional Service",
    desc: "A dedicated team that treats your business like its own.",
    icon: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />,
  },
  {
    title: "24-Hour Sales Support",
    desc: "If you need it, we provide 24-hour sales support to help close your customers — so bookings can happen any hour of the day.",
    icon: <><path d="M3 14v-2a9 9 0 0 1 18 0v2" /><rect x="2" y="14" width="5" height="7" rx="2" /><rect x="17" y="14" width="5" height="7" rx="2" /></>,
  },
  {
    title: "6 Days a Week",
    desc: "We operate 6 days a week — just like an in-house team.",
    icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>,
  },
];

const HAVEN_STATS = [
  { value: "4.9★", label: "Google rating (1,651 reviews)", icon: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1Z" /> },
  { value: "3,721", label: "Messaging conversations — Meta Ads, 30 days", icon: <><path d="m3 11 18-5v12L3 14v-3Z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></> },
  { value: "278,566", label: "People reached — Meta Ads, 30 days", icon: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></> },
  { value: "$1.14", label: "Lowest cost per conversation", icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" /> },
];

const META_ROWS = [
  ["Messaging conversations", "3,721"],
  ["Total reach", "278,566"],
  ["Cost per conversation", "$1.14–$4.11"],
  ["Post engagements (brand awareness)", "44,341 at $0.01 ea"],
];

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-2xl border border-simple-border bg-white p-6 ${className}`}>{children}</div>;
}

export default function OurWorkPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Our Work" />
      <main className="bg-white text-simple-ink">

      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[820px] mx-auto px-6 pt-[72px] pb-14 flex flex-col items-center gap-[18px] text-center">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Our Work</div>
          <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
            Work that speaks for itself
          </h1>
          <p className="m-0 text-[19px] text-simple-ink-soft max-w-[620px]">
            Real clients, real work across Canada and the US.
          </p>
        </Reveal>
      </div>

      <Reveal className="max-w-[1120px] mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <CountCard icon={<path d="M12 20v-6M6 20V10M18 20V4" />} count="13" label="Brand Identity & Logo Design" />
        <CountCard
          icon={<><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>}
          count={`${WEBSITE_PROJECTS.length}+`}
          label="Website Design & Development"
        />
        <CountCard
          icon={<><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></>}
          count="11"
          label="Social Media & Content"
        />
        <CountCard
          icon={<><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>}
          count="4"
          label="Video Editing & Production"
        />
      </Reveal>

      <Reveal className="max-w-[1240px] mx-auto px-6 pb-20 pt-6 flex flex-col gap-9">
        <div className="max-w-[680px] flex flex-col gap-2.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Behind the Work</div>
          <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Client case studies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudy
            premium
            mark={<HavenMark />}
            tag="Automotive Services"
            title="Haven Customs: Google Ads, Social Media & Brand Content"
            desc="Lead generation with Google Ads, sales process support and consistent social media content for an automotive tint, tire and paint protection garage."
          />
          <CaseStudy
            mark={<Mono>HD</Mono>}
            tag="Driver Education"
            title="Horizon Driving School: Logo, Social Media & Video Content"
            desc="A new logo, educational social media content and short-form driving tips videos for an Ontario driving school."
          />
          <CaseStudy
            mark={<Mono>DP</Mono>}
            tag="Restaurant & Food Services"
            title="Daana Paani: Ads, Social Media & Brand Growth"
            desc="Full details coming soon — ask us about what we're building for this restaurant partner."
          />
        </div>
        <Link
          href="/portfolio"
          className="self-start rounded-xl border-[1.5px] border-simple-ink px-[26px] py-[14px] text-base font-bold text-simple-ink no-underline transition-all duration-200 hover:-translate-y-0.5"
        >
          Browse all {WEBSITE_PROJECTS.length}+ websites we&rsquo;ve built →
        </Link>
      </Reveal>

      <div className="bg-simple-surface-alt border-y border-simple-border">
        <div className="max-w-[1040px] mx-auto px-6 py-20 flex flex-col gap-8">
          <Reveal className="max-w-[680px] flex flex-col gap-2.5">
            <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Premium Clients</div>
            <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(1.9rem,3.4vw,2.8rem)]">
              What a premium partnership looks like
            </h2>
            <p className="m-0 text-[17px] text-simple-ink-soft">
              One team running everything — ads, GBP, social, video and design — so the numbers all move together.
            </p>
          </Reveal>

          <Reveal from="up">
            <Panel className="bg-[#FBFAFE]">
              <div className="mb-5 font-display text-[17px] font-bold">What every premium client gets</div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {PERKS.map((p) => (
                  <div key={p.title} className="flex flex-col gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-simple-chip-bg">
                      <Icon size={20}>{p.icon}</Icon>
                    </div>
                    <div className="font-bold leading-snug">{p.title}</div>
                    <div className="text-sm text-simple-ink-soft">{p.desc}</div>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>

          <Reveal from="up">
            <div id="haven-customs" className="scroll-mt-24 rounded-3xl border border-simple-border bg-white p-6 sm:p-8 flex flex-col gap-7">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <HavenMark size={56} />
                  <div>
                    <div className="font-display text-2xl font-extrabold">Haven Customs</div>
                    <div className="text-xs font-bold uppercase tracking-[0.06em] text-simple-ink-soft">Automotive Services</div>
                  </div>
                </div>
                <PremiumBadge />
              </div>

              <div className="flex flex-wrap gap-2">
                {["Google Business Profile", "Meta Ads", "Social Media", "Website Design"].map((t) => (
                  <span key={t} className="rounded-full bg-simple-chip-bg px-3.5 py-1.5 text-[13px] font-bold text-simple-chip-text">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {HAVEN_STATS.map((s) => (
                  <Panel key={s.label} className="flex flex-col gap-2">
                    <Icon size={22}>{s.icon}</Icon>
                    <div className="font-display text-[28px] font-extrabold leading-none">{s.value}</div>
                    <div className="text-sm text-simple-ink-soft">{s.label}</div>
                  </Panel>
                ))}
              </div>

              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <Panel>
                  <div className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
                    <Icon size={20}><path d="m3 11 18-5v12L3 14v-3Z" /></Icon>
                    Meta Ads <span className="text-sm font-medium text-simple-ink-soft">(Oct 3–Nov 1, 2026)</span>
                  </div>
                  {META_ROWS.map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between gap-4 border-b border-simple-border py-3 text-[15px] last:border-0">
                      <span className="text-simple-ink-soft">{k}</span>
                      <span className="font-bold text-right">{v}</span>
                    </div>
                  ))}
                </Panel>

                <Panel>
                  <div className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
                    <Icon size={20}><><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></></Icon>
                    Google Business Profile
                  </div>
                  <div className="rounded-xl border border-simple-border p-4">
                    <div className="font-bold">Haven Customs Tint &amp; Tire Inc.</div>
                    <div className="text-sm text-simple-ink-soft">4.9 <span className="text-[#F5B301]">★★★★★</span> (1.7K) · Tire shop in Toronto, Ontario</div>
                    <div className="mt-4 flex items-center gap-5">
                      <div className="flex flex-1 flex-col gap-1.5">
                        {[96, 3, 1, 0.5, 1].map((w, i) => (
                          <div key={i} className="h-2 rounded-full bg-simple-border">
                            <div className="h-2 rounded-full bg-[#F5B301]" style={{ width: `${w}%` }} />
                          </div>
                        ))}
                      </div>
                      <div className="text-center">
                        <div className="font-display text-4xl font-extrabold">4.9</div>
                        <div className="text-sm text-[#F5B301]">★★★★★</div>
                        <div className="text-xs text-simple-ink-soft">1,651 reviews</div>
                      </div>
                    </div>
                  </div>
                </Panel>

                <Panel>
                  <div className="text-[#F5B301]">★★★★★</div>
                  <p className="mt-3 mb-3 italic text-[15px] leading-relaxed text-simple-ink">
                    &ldquo;I had an amazing experience at Haven Customs Scarborough, thank you so much for everything. From the
                    moment we arrived, Muhammad welcomed us with juice, snacks and coffees. He is incredibly caring, friendly and
                    genuinely makes...&rdquo;
                  </p>
                  <div className="text-sm text-simple-ink-soft">4.9★ average · 1,651 Google reviews</div>
                </Panel>

                <Panel>
                  <div className="mb-3 flex items-center gap-2 font-display text-lg font-bold">
                    <Icon size={20}><><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></></Icon>
                    Social Media
                  </div>
                  <div className="flex flex-col gap-3">
                    {[
                      { name: "havencustoms.ca", line: "Instagram · Premium styling & protection" },
                      { name: "Haven Customs", line: "Facebook · PPF, wraps, ceramic coating, tint & tires" },
                    ].map((a) => (
                      <div key={a.name} className="flex items-center gap-3 rounded-xl border border-simple-border p-3">
                        <HavenMark size={44} />
                        <div className="min-w-0">
                          <div className="truncate font-bold">{a.name}</div>
                          <div className="truncate text-sm text-simple-ink-soft">{a.line}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Panel>
              </div>

              <div className="flex flex-col gap-4">
                <div className="font-display text-lg font-bold">Reels we&rsquo;ve made for them</div>
                <ReelGrid reels={HAVEN_REELS} gridClass="lg:grid-cols-4" />
              </div>

              <div className="flex flex-col gap-4">
                <div className="font-display text-lg font-bold">Design, made for them</div>
                <a
                  href="https://www.havencustoms.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl border border-simple-border"
                >
                  <Image
                    src="/work/haven-website.webp"
                    alt="Haven Customs website designed by BizzOne Digital"
                    width={960}
                    height={733}
                    sizes="(min-width: 1040px) 976px, 100vw"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent px-5 pb-4 pt-10 text-sm font-bold text-white">
                    Live website design · havencustoms.ca ↗
                  </span>
                </a>
              </div>

              <Link
                href="/#book"
                className="self-start rounded-xl bg-simple-purple px-[22px] py-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
              >
                Want Results Like This? Book a Free Call →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      <FinalCTA
        heading="Want results like these?"
        sub="Book a free strategy call and let's build your growth engine together."
        bookHref="/#book"
        bookLabel="Book Free Strategy Call"
      />
      </main>
      <Footer />
    </>
  );
}
