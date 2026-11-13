import Reveal from "./Reveal";
import PaymentBadges from "./PaymentBadges";

type Service = {
  title: string;
  desc: string;
  cta: string;
  badge?: string;
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    title: "Meta Ads",
    desc: "Facebook and Instagram campaigns built to bring in leads, messages and bookings — not just likes.",
    cta: "Get More Leads →",
    icon: <><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
  },
  {
    title: "Google & TikTok Ads",
    desc: "Show up the moment customers search for what you sell. Search, Maps, YouTube and TikTok campaigns, tracked to the call.",
    cta: "Get Found →",
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
  },
  {
    title: "SEO",
    desc: "Local SEO, technical fixes, on-page optimization and content that get your business found on Google.",
    cta: "Rank Higher →",
    badge: "From $99/mo",
    icon: <><path d="M3 20h18" /><path d="M6 16V10M11 16V6M16 16v-4M21 16V8" /></>,
  },
  {
    title: "Content & Social Media",
    desc: "A monthly content plan, on-brand posts and consistent management that turns followers into customers.",
    cta: "Build My Brand →",
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
  },
  {
    title: "Video & Reels",
    desc: "Scroll-stopping reels, edited and ready to post. Start with 7 reels a month and scale up.",
    cta: "Start My Reels →",
    badge: "From $99/mo",
    icon: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>,
  },
  {
    title: "Design & Branding",
    desc: "Logos, brand identity and eye-catching ad creatives that make you stand out from competitors.",
    cta: "Stand Out →",
    icon: <><circle cx="13.5" cy="6.5" r="2.5" /><path d="M3 21c3-1 5-4 6-7l3 3c-3 1-6 3-7 6" /><path d="m12 14 7-7" /></>,
  },
  {
    title: "Websites",
    desc: "Fast, mobile-first websites built to turn visitors into calls and form fills — live in 24–48 hours.",
    cta: "Built to Convert →",
    badge: "From $79",
    icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>,
  },
  {
    title: "App Development",
    desc: "iOS, Android and cross-platform apps designed to launch fast and grow with your business.",
    cta: "Plan My App →",
    icon: <><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" /></>,
  },
  {
    title: "AI Automation & CRM",
    desc: "CRM setup, instant lead replies, WhatsApp and email follow-up, review requests and AI booking — so no lead goes cold.",
    cta: "Never Miss a Lead →",
    icon: <><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /></>,
  },
];

export default function Services() {
  return (
    <div id="services" className="bg-simple-surface-alt border-y border-simple-border">
      <Reveal from="left" className="max-w-[1240px] mx-auto px-6 py-[88px] flex flex-col gap-12">
        <div className="max-w-[720px] flex flex-col gap-3.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            Everything under one roof
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
            Every service you need to grow — managed by one team.
          </h2>
          <p className="m-0 text-lg text-simple-ink-soft">
            Pick one service or let us run the whole system. Either way, it all connects.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-simple-border rounded-2xl p-[30px] flex flex-col gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)] hover:border-simple-purple-light/40"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {s.icon}
              </svg>
              <div className="flex gap-2.5 items-center flex-wrap">
                <div className="font-display font-bold text-[22px]">{s.title}</div>
                {s.badge && (
                  <span className="bg-simple-chip-bg text-simple-chip-text text-[13px] font-bold px-2.5 py-1 rounded-full">
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="text-simple-ink-soft text-base flex-grow">{s.desc}</div>
              <a href="#book" className="py-2 font-bold text-simple-purple-deep no-underline hover:text-simple-purple-dark">
                {s.cta}
              </a>
            </div>
          ))}
        </div>
        <PaymentBadges center />
      </Reveal>
    </div>
  );
}
