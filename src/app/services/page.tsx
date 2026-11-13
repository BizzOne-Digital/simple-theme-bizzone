import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Link from "next/link";
import Reveal from "@/components/simple/Reveal";
import PaymentBadges from "@/components/simple/PaymentBadges";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Digital Marketing & Web Services | BizzOne Digital",
  description:
    "Everything you need to attract, engage and convert customers, from one team: ads, SEO, content, video, design, websites, apps and AI automation.",
  path: "/services",
});

type Service = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  badge?: string;
};

const SERVICES: Service[] = [
  {
    title: "App Development",
    desc: "iOS, Android and cross-platform apps designed to launch fast and scale with your business.",
    icon: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  },
  {
    title: "SEO",
    desc: "Local SEO, technical fixes, on-page optimization and content that get your business found on Google.",
    icon: <><path d="M3 20h18" /><path d="M6 16V10M11 16V6M16 16v-4M21 16V8" /></>,
  },
  {
    title: "Paid Advertising",
    desc: "High-converting Meta, Google & TikTok ads that bring quality leads and maximize ROI.",
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  },
  {
    title: "Design & Branding",
    desc: "Eye-catching creatives, brand identity and visual systems that make you stand out.",
    icon: <><circle cx="13.5" cy="6.5" r="2.5" /><path d="M3 21c3-1 5-4 6-7l3 3c-3 1-6 3-7 6" /><path d="m12 14 7-7" /></>,
  },
  {
    title: "Video Editing & Production",
    desc: "Professional video editing, production and visual content that engages and converts.",
    icon: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>,
    badge: "From $99/mo",
  },
  {
    title: "Content Strategy",
    desc: "Research-led content planning that tells your brand story and drives measurable growth.",
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
  },
  {
    title: "Social Media Management",
    desc: "Convert followers into customers with tested social strategies and consistent content.",
    icon: <><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
  },
  {
    title: "AI Automation",
    desc: "Smart automation systems that save time, reduce manual work and scale your business.",
    icon: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
  },
  {
    title: "Web Development",
    desc: "Fast, mobile-friendly websites with SEO setup, booking and payments — live in 24–48 hours.",
    icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>,
    badge: "From $79",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Services" />
      <main className="bg-white text-simple-ink">

      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[820px] mx-auto px-6 pt-[72px] pb-14 flex flex-col items-center gap-[18px] text-center">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            Our Services
          </div>
          <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
            Digital marketing, web &amp; AI automation services
          </h1>
          <p className="m-0 text-[19px] text-simple-ink-soft max-w-[620px]">
            Everything you need to attract, engage and convert customers, from one team. Choose a
            single service or combine them into a complete growth system.
          </p>
          <Link
            href="/#book"
            className="bg-simple-purple text-white no-underline font-bold text-base px-[26px] py-[15px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white"
          >
            Book Free Strategy Call
          </Link>
        </Reveal>
      </div>

      <Reveal className="max-w-[1240px] mx-auto px-6 py-[72px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="bg-white border border-simple-border rounded-2xl p-[30px] flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {s.icon}
            </svg>
            <div className="flex gap-2.5 items-center flex-wrap">
              <div className="font-display font-bold text-xl">{s.title}</div>
              {s.badge && (
                <span className="bg-simple-chip-bg text-simple-chip-text text-xs font-bold px-2.5 py-1 rounded-full">
                  {s.badge}
                </span>
              )}
            </div>
            <div className="text-simple-ink-soft text-[15px] flex-grow">{s.desc}</div>
          </div>
        ))}
      </Reveal>
      <div className="max-w-[1240px] mx-auto px-6 pb-[72px]">
        <PaymentBadges center />
      </div>

      <FinalCTA
        heading="Not sure where to start?"
        sub="Book a free strategy call and we'll recommend the services that will move your numbers fastest."
        bookHref="/#book"
        bookLabel="Book Free Strategy Call"
      />
      </main>
      <Footer />
    </>
  );
}
