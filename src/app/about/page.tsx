import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Reveal from "@/components/simple/Reveal";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import { SITE_STATS, formatStat } from "@/data/site-stats";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About BizzOne Digital | AI & Digital Growth Agency",
  description:
    "BizzOne Digital is a full-service digital marketing and automation agency based in Mississauga, Ontario, serving 500+ brands across Canada and the US.",
  path: "/about",
});

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-[26px] text-center flex flex-col gap-1.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <div className="font-display font-extrabold text-[32px]">{value}</div>
      <div className="text-sm text-simple-ink-soft font-semibold">{label}</div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-7 flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <div className="w-12 h-12 rounded-xl bg-simple-chip-bg flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {icon}
        </svg>
      </div>
      <div className="font-bold text-lg">{title}</div>
      <div className="text-simple-ink-soft text-[15px]">{desc}</div>
    </div>
  );
}

function JourneyCard({
  tag,
  title,
  desc,
  dark,
}: {
  tag: string;
  title: string;
  desc: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-[26px] flex flex-col gap-2.5 flex-[1_1_240px] min-w-[220px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)] ${
        dark ? "bg-simple-ink text-white" : "bg-white border border-simple-border"
      }`}
    >
      <div
        className={`self-start text-xs font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${
          dark ? "bg-simple-purple text-white" : "bg-simple-chip-bg text-simple-chip-text"
        }`}
      >
        {tag}
      </div>
      <div className="font-display font-bold text-lg">{title}</div>
      <div className={dark ? "text-[#CFCAE0] text-[15px]" : "text-simple-ink-soft text-[15px]"}>{desc}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="About" />
      <main className="bg-white text-simple-ink">

      {/* Hero */}
      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[880px] mx-auto px-6 pt-[72px] pb-14 flex flex-col items-center gap-[18px] text-center">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            About BizzOne Digital
          </div>
          <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
            We don&rsquo;t just build websites. We build <span className="text-simple-purple">growth engines.</span>
          </h1>
          <p className="m-0 text-[19px] text-simple-ink-soft max-w-[620px]">
            BizzOne Digital is a full-service digital marketing and automation agency. We blend
            design, engineering and marketing under one roof to build digital ecosystems that
            compound your results over time.
          </p>
          <div className="flex gap-3.5 flex-wrap justify-center">
            <a href="/contact" className="bg-simple-purple text-white no-underline font-bold text-base px-[26px] py-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white">
              Work With Us
            </a>
            <a href="/services" className="bg-white text-simple-ink no-underline font-bold text-base px-[26px] py-[15px] rounded-xl border-[1.5px] border-simple-ink transition-all duration-200 hover:-translate-y-0.5">
              Our Services
            </a>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal className="max-w-[1000px] mx-auto px-6 py-12 grid grid-cols-2 lg:grid-cols-5 gap-[18px]">
        <StatCard value="500+" label="Brands Scaled" />
        <StatCard value="3" label="Years in Business" />
        <StatCard value={formatStat(SITE_STATS.projectsDelivered)} label="Projects Delivered" />
        <StatCard value={formatStat(SITE_STATS.clientRetention)} label="Client Retention" />
        <StatCard value="$30M+" label="Revenue Generated for Clients" />
      </Reveal>

      {/* Journey */}
      <Reveal className="max-w-[1240px] mx-auto px-6 py-20 flex flex-col gap-9">
        <div className="max-w-[680px] flex flex-col gap-2.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            Our Journey
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            How we got here
          </h2>
        </div>
        <div className="flex flex-wrap gap-[18px]">
          <JourneyCard
            tag="Founded"
            title="BizzOne Digital Is Born"
            desc="Started with a simple belief: businesses deserve better digital partners. We began with web development and a handful of clients who believed in our vision."
          />
          <JourneyCard
            tag="Growth"
            title="Expanding Services"
            desc="Added SEO, social media management, Meta and Google advertising, content strategy and graphic design as our team grew."
          />
          <JourneyCard
            tag="Scale"
            title="AI & Automation"
            desc="Launched our AI automation division: CRM integrations, intelligent workflows, and automated follow-up."
          />
          <JourneyCard
            tag="Today"
            title="500+ Brands & Counting"
            desc="A full-service digital growth agency serving clients across Canada and the United States, delivering results that compound."
            dark
          />
        </div>
      </Reveal>

      {/* Mission / Vision */}
      <div className="bg-simple-surface-alt border-y border-simple-border">
        <Reveal className="max-w-[1240px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-simple-border rounded-2xl p-8 flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1">
            <div className="font-bold text-[13px] tracking-[0.1em] uppercase text-simple-purple-deep">
              Our Mission
            </div>
            <p className="m-0 text-[17px] text-simple-ink-faint">
              To empower businesses with technology that is beautiful, fast and built to scale,
              turning digital presence into real revenue.
            </p>
          </div>
          <div className="bg-simple-ink text-white rounded-2xl p-8 flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1">
            <div className="font-bold text-[13px] tracking-[0.1em] uppercase text-simple-lime">
              Our Vision
            </div>
            <p className="m-0 text-[17px] text-[#D8D2E8]">
              To be the go-to digital partner for ambitious brands, setting the standard for
              premium, results-driven digital work.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Values */}
      <Reveal className="max-w-[1240px] mx-auto px-6 py-20 flex flex-col gap-9">
        <div className="max-w-[680px] flex flex-col gap-2.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            What Drives Us
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Our core values
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <ValueCard
            icon={<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />}
            title="Speed & Execution"
            desc="We move fast without cutting corners — clear milestones, weekly updates and on-time delivery."
          />
          <ValueCard
            icon={<><circle cx="12" cy="8" r="4" /><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" /></>}
            title="Client-First Always"
            desc="Your success is our success. We treat every brand like our own: no cookie-cutter solutions."
          />
          <ValueCard
            icon={<><circle cx="12" cy="12" r="9" /><path d="M12 8v4l3 2" /></>}
            title="Transparency"
            desc="Honest reporting, clear communication, no hidden fees. You always know where your project stands."
          />
          <ValueCard
            icon={<path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />}
            title="Innovation"
            desc="We stay ahead of trends so you don't have to — from AI automation to the latest ad strategies."
          />
        </div>
      </Reveal>

      <FinalCTA
        heading="Ready to work with a team that delivers?"
        sub="Let's talk about your goals. Book a free strategy call and see how we can grow your business."
        bookHref="/#book"
        bookLabel="Book Free Strategy Call"
      />
      </main>
      <Footer />
    </>
  );
}
