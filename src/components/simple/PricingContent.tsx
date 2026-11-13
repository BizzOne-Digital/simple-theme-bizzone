"use client";

/**
 * Body of the /pricing page (tabbed plans need client state). The server
 * page in src/app/pricing wraps it with the nav, footer and metadata.
 */

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/simple/Reveal";
import PaymentBadges from "@/components/simple/PaymentBadges";

function Check({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function TableCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function Dash() {
  return <span className="text-[#D8D2E8] text-base">—</span>;
}

// ---------- Platform trust icons ----------
function GoogleG() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true" className="flex-none">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3C29.4 35.1 26.8 36 24 36c-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H24v8h11.3c-0.8 2.3-2.2 4.2-4 5.6l6.3 5.3C40.5 36.9 44 31 44 24c0-1.3-.1-2.7-.4-3.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <rect width="24" height="24" rx="6" fill="#1877F2" />
      <path d="M15.8 8.4h-1.6c-.5 0-.9.3-.9.9V11h2.5l-.3 2.6h-2.2V21h-2.7v-7.4H8.4V11h2.2V9.3c0-2 1.3-3.5 3.3-3.5h2v2.6z" fill="#FFFFFF" />
    </svg>
  );
}
function InstagramIcon({ id }: { id: string }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <defs>
        <linearGradient id={id} x1="0" y1="24" x2="24" y2="0">
          <stop offset="0" stopColor="#FEE411" />
          <stop offset="0.35" stopColor="#FD5949" />
          <stop offset="0.65" stopColor="#D6249F" />
          <stop offset="1" stopColor="#285AEB" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${id})`} />
      <rect x="6" y="6" width="12" height="12" rx="3.5" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="#FFFFFF" strokeWidth="1.6" />
      <circle cx="16" cy="8" r="0.9" fill="#FFFFFF" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <rect width="24" height="24" rx="6" fill="#000000" />
      <path d="M14.3 5.3c.3 1.7 1.5 3 3.1 3.3v2.1c-1.1 0-2.1-.3-3-.9v4.4a4.2 4.2 0 1 1-4.2-4.2c.2 0 .4 0 .6 0v2.1a2 2 0 1 0 1.5 1.9V5.1h2.2z" fill="#25F4EE" transform="translate(-0.4,0.3)" />
      <path d="M14.3 5.3c.3 1.7 1.5 3 3.1 3.3v2.1c-1.1 0-2.1-.3-3-.9v4.4a4.2 4.2 0 1 1-4.2-4.2c.2 0 .4 0 .6 0v2.1a2 2 0 1 0 1.5 1.9V5.1h2.2z" fill="#FE2C55" transform="translate(0.4,-0.3)" />
      <path d="M14.3 5.3c.3 1.7 1.5 3 3.1 3.3v2.1c-1.1 0-2.1-.3-3-.9v4.4a4.2 4.2 0 1 1-4.2-4.2c.2 0 .4 0 .6 0v2.1a2 2 0 1 0 1.5 1.9V5.1h2.2z" fill="#FFFFFF" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <circle cx="12" cy="12" r="12" fill="#25D366" />
      <path d="M16.5 13.4c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.1-.3 0-.4.1-.5l.3-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.4 3.8 3.4.5.2.9.4 1.3.5.5.2 1 .1 1.3.1.4-.1 1.2-.5 1.4-1 .2-.5.2-.8.1-1z" fill="#FFFFFF" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path d="M7.2 9.5H4.4V19h2.8V9.5zM5.8 8.2c.9 0 1.5-.6 1.5-1.4S6.7 5.4 5.8 5.4c-.9 0-1.5.6-1.5 1.4s.6 1.4 1.5 1.4zM19.6 19v-5.3c0-2.8-1.5-4.1-3.5-4.1-1.6 0-2.3.9-2.7 1.5V9.5h-2.8c0 .1 0 9 0 9.5h2.8v-5.3c0-.3 0-.6.1-.8.2-.6.8-1.2 1.7-1.2 1.2 0 1.7.9 1.7 2.3V19h2.7z" fill="#FFFFFF" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true" className="flex-none">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path d="M10 8.3l6.3 3.7-6.3 3.7V8.3z" fill="#FFFFFF" />
    </svg>
  );
}

const PARTNERS: { Icon: React.ComponentType; label: string; withId?: boolean }[] = [
  { Icon: GoogleG, label: "Google" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: () => <InstagramIcon id="ig-pricing-partner" />, label: "Instagram" },
  { Icon: TikTokIcon, label: "TikTok" },
  { Icon: WhatsAppIcon, label: "WhatsApp" },
  { Icon: LinkedInIcon, label: "LinkedIn" },
  { Icon: YouTubeIcon, label: "YouTube" },
];

// ---------- Website plan card ----------
type WebsitePlan = {
  name: string;
  desc: string;
  market: string;
  price: string;
  cta: string;
  features: string[];
  popular?: boolean;
};

const WEBSITE_PLANS: WebsitePlan[] = [
  {
    name: "Standard",
    desc: "Great for a simple brochure-style site. Custom-coded — not a template.",
    market: "$1,500–$3,000",
    price: "$79",
    cta: "Choose Standard",
    features: ["Up to 5 pages", "1–2 banner images", "Basic on-page SEO", "Mobile responsive"],
  },
  {
    name: "Premium",
    desc: "Our most-picked plan — built to convert. Custom-coded — not a template.",
    market: "$3,000–$8,000",
    price: "$149",
    cta: "Choose Premium",
    popular: true,
    features: [
      "Up to 12 pages, bilingual setup",
      "Admin portal to manage your content",
      "Booking / quote-request button",
      "First 30 products listed for you",
    ],
  },
  {
    name: "Advanced",
    desc: "Full online store, ready to sell. Custom-coded — not a template.",
    market: "$8,000–$20,000+",
    price: "$299",
    cta: "Choose Advanced",
    features: [
      "Up to 15 pages, full eCommerce",
      "First 100 products listed for you",
      "Payment gateway + order management",
      "Admin dashboard for everything",
    ],
  },
];

function WebsitePlanCard({ plan }: { plan: WebsitePlan }) {
  return (
    <div
      className={`relative bg-white rounded-[18px] p-7 pb-[28px] flex flex-col gap-4 ${
        plan.popular ? "border-[2.5px] border-simple-purple shadow-[0_8px_28px_rgba(140,0,255,0.12)]" : "border border-simple-border"
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-simple-purple text-white font-display font-bold text-xs tracking-[0.04em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}
      <div className="font-display font-bold text-[19px]">{plan.name}</div>
      <div className="text-sm text-[#6B6580] min-h-[36px]">{plan.desc}</div>
      <div className="flex items-baseline gap-2.5 flex-wrap">
        <span className="text-[15px] text-[#B7AFC9] line-through">{plan.market}</span>
      </div>
      <div className="font-display font-extrabold text-[38px]">{plan.price}</div>
      <Link
        href="/#book"
        className={`no-underline font-bold text-[15px] py-[13px] rounded-[10px] text-center transition-all duration-200 hover:-translate-y-0.5 ${
          plan.popular ? "bg-simple-purple text-white hover:brightness-105 hover:text-white" : "bg-white text-simple-ink border-[1.5px] border-simple-ink"
        }`}
      >
        {plan.cta}
      </Link>
      <ul className="m-0 p-0 list-none flex flex-col gap-2.5 mt-1">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2 text-sm text-simple-ink-soft">
            <Check />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------- Compare table ----------
type CompareCell = "check" | "dash" | string;
const COMPARE_ROWS: [string, CompareCell, CompareCell, CompareCell][] = [
  ["Pages included", "Up to 5", "Up to 12", "Up to 15"],
  ["Mobile responsive", "check", "check", "check"],
  ["Basic on-page SEO", "check", "check", "check"],
  ["Bilingual setup", "dash", "check", "check"],
  ["Admin portal (edit your own content)", "dash", "check", "check"],
  ["Booking / quote-request button", "dash", "check", "check"],
  ["Payment integration", "dash", "check", "check"],
  ["eCommerce / online store", "dash", "dash", "check"],
  ["Products listed for you", "—", "30", "100"],
  ["Live in", "24–48 hrs", "24–48 hrs", "2–4 days"],
];

function Cell({ value, highlight }: { value: CompareCell; highlight?: boolean }) {
  return (
    <td className={`py-4 px-4 text-center ${highlight ? "bg-[#FBF7FF]" : ""}`}>
      {value === "check" ? <TableCheck /> : value === "dash" ? <Dash /> : <span className="text-sm text-simple-ink-faint font-semibold">{value}</span>}
    </td>
  );
}

function CompareTable() {
  return (
    <div id="compare-table" className="scroll-mt-24 border border-simple-border rounded-[18px] overflow-hidden shadow-[0_2px_10px_rgba(15,10,26,0.04)]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-simple-ink">
            <th className="py-5 px-6 text-left font-display font-bold text-sm text-white">Compare plans</th>
            <th className="py-5 px-4 text-center min-w-[120px]">
              <div className="font-display font-bold text-[15px] text-white">Standard</div>
              <div className="font-display font-extrabold text-xl text-simple-lime mt-0.5">$79</div>
            </th>
            <th className="py-5 px-4 text-center min-w-[120px] bg-[#1A0F30]">
              <div className="font-display font-bold text-[15px] text-white">Premium</div>
              <div className="font-display font-extrabold text-xl text-simple-lime mt-0.5">$149</div>
            </th>
            <th className="py-5 px-4 text-center min-w-[120px]">
              <div className="font-display font-bold text-[15px] text-white">Advanced</div>
              <div className="font-display font-extrabold text-xl text-simple-lime mt-0.5">$299</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {COMPARE_ROWS.map((row, i) => (
            <tr key={row[0]} className={`border-b border-simple-border ${i % 2 === 0 ? "bg-white" : "bg-[#FBFAFD]"}`}>
              <td className="py-4 px-6 text-sm text-simple-ink font-semibold text-left">{row[0]}</td>
              <Cell value={row[1]} />
              <Cell value={row[2]} highlight />
              <Cell value={row[3]} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function WebsitesPanel() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep mb-2.5">Websites</div>
        <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.4rem)] mb-2.5">
          Pick a website plan
        </h2>
        <p className="m-0 text-base text-simple-ink-soft">All plans include hosting, a custom domain connection and mobile-first design.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {WEBSITE_PLANS.map((plan) => (
          <WebsitePlanCard key={plan.name} plan={plan} />
        ))}
      </div>

      <div className="flex justify-center -mt-4">
        <a
          href="#compare-table"
          className="flex items-center gap-2 bg-white text-simple-ink border-[1.5px] border-simple-ink no-underline font-bold text-sm px-[22px] py-3 rounded-full"
        >
          Compare plans
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F0A1A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap gap-7 justify-center">
        <span className="flex items-center gap-2 text-sm text-simple-ink-faint font-semibold">
          <Check size={18} />
          Every site is custom-coded — no WordPress, no templates
        </span>
        <span className="flex items-center gap-2 text-sm text-simple-ink-faint font-semibold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Free SSL, secure hosting &amp; spam-protected forms built in
        </span>
        <span className="flex items-center gap-2 text-sm text-simple-ink-faint font-semibold">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          30-day money-back guarantee on every plan
        </span>
      </div>

      <PaymentBadges center />

      <div className="flex flex-col gap-6">
        <h3 className="m-0 font-display font-bold text-xl">Compare website plans</h3>
        <CompareTable />
      </div>

      <div className="bg-simple-ink rounded-[18px] p-9 flex flex-wrap gap-6 items-center justify-between">
        <div className="flex flex-col gap-1.5 max-w-[620px]">
          <div className="font-display font-bold text-[19px] text-white">Need something bigger?</div>
          <div className="text-[15px] text-[#C9C4D6]">
            Custom builds that go beyond a website — CRM integrations, ERP systems, AI/MCP
            connections, multi-language sites and advanced automation, scoped around your
            business.
          </div>
        </div>
        <a
          href="/contact"
          className="bg-simple-purple text-white no-underline font-bold text-[15px] px-[26px] py-3.5 rounded-[10px] whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white"
        >
          Talk to Us
        </a>
      </div>
    </div>
  );
}

// ---------- Single-service panel ----------
type ServicePanelData = {
  icon: React.ReactNode;
  name: string;
  pain: string;
  market?: string;
  price: string;
  unit?: string;
  setupNote?: string;
  badge?: string;
  features: string[];
  cta: string;
};

function ServicePanel({ s }: { s: ServicePanelData }) {
  return (
    <div className="max-w-[480px] mx-auto w-full">
      <div className="relative bg-white border border-simple-border rounded-[20px] p-9 flex flex-col gap-4 shadow-[0_4px_20px_rgba(15,10,26,0.05)]">
        {s.badge && (
          <div className="absolute -top-3 right-6 bg-simple-ink text-simple-lime font-display font-bold text-[11px] px-3.5 py-[5px] rounded-full whitespace-nowrap">
            {s.badge}
          </div>
        )}
        <div className="w-[52px] h-[52px] rounded-2xl bg-simple-chip-bg flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {s.icon}
          </svg>
        </div>
        <div>
          <div className="font-display font-bold text-[22px]">{s.name}</div>
          <div className="text-sm text-[#6B6580] mt-1">{s.pain}</div>
        </div>
        <div className="flex items-baseline gap-3 flex-wrap pt-1">
          {s.market && <span className="text-[17px] text-[#B7AFC9] line-through">{s.market}</span>}
          <span className="font-display font-extrabold text-[40px]">
            {s.price}
            {s.unit && <span className="text-[15px] font-medium text-simple-ink-soft">{s.unit}</span>}
          </span>
        </div>
        {s.setupNote && <div className="text-sm text-[#6B6580]">{s.setupNote}</div>}
        <Link href="/#book" className="bg-simple-purple text-white no-underline font-bold text-base py-[15px] rounded-xl text-center mt-1 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:text-white">
          {s.cta}
        </Link>
        <ul className="m-0 pt-5 mt-0 border-t border-simple-border list-none flex flex-col gap-[11px]">
          {s.features.map((f) => (
            <li key={f} className="flex gap-2.5 text-sm text-simple-ink-soft">
              <Check />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const SERVICE_PANELS: Record<string, ServicePanelData> = {
  meta: {
    icon: <><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></>,
    name: "Meta Ads",
    pain: "Your phone isn't ringing from Facebook or Instagram.",
    market: "$500–$1,500",
    price: "$99",
    unit: "/mo",
    badge: "93% off",
    features: ["1 ad campaign, optimized weekly", "2 ad creatives included", "Weekly performance check-ins"],
    cta: "Get More Leads on Meta",
  },
  google: {
    icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>,
    name: "Google Ads",
    pain: "Customers search for you and find competitors instead.",
    market: "$500–$1,500",
    price: "$99",
    unit: "/mo",
    badge: "93% off",
    features: ["1 ad campaign, optimized weekly", "Search, Maps & YouTube placements", "Creatives not included — ask about adding them"],
    cta: "Get Found on Google",
  },
  seo: {
    icon: <><path d="M3 20h18" /><path d="M6 16V10M11 16V6M16 16v-4M21 16V8" /></>,
    name: "SEO",
    pain: "You're invisible on Google search.",
    market: "$500–$2,000",
    price: "$99",
    unit: "/mo",
    badge: "95% off",
    features: ["Keyword & on-page optimization", "Google Business Profile setup", "Monthly ranking check-in"],
    cta: "Rank Higher on Google",
  },
  video: {
    icon: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></>,
    name: "Video Editing",
    pain: "You post inconsistently — editing takes forever.",
    market: "$300–$600",
    price: "$99",
    unit: "/mo",
    badge: "83% off",
    features: ["5 reels edited every month", "2 rounds of revisions", "Ready to post, same week"],
    cta: "Start My Reels",
  },
  social: {
    icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></>,
    name: "Social Media Management",
    pain: "Your socials look abandoned.",
    market: "$500–$1,500",
    price: "$99",
    unit: "/mo",
    badge: "93% off",
    features: ["Posting & community management", "Monthly content calendar", "Comment & DM monitoring"],
    cta: "Build My Brand",
  },
  automation: {
    icon: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />,
    name: "AI Automation & CRM",
    pain: "Meta Ads leads go cold before anyone replies.",
    price: "$299",
    unit: "/mo",
    setupNote: "+ $499 one-time setup",
    features: [
      "Meta Ads leads auto-start an AI conversation",
      "WhatsApp connected for instant replies",
      "CRM setup & ongoing workflow maintenance",
    ],
    cta: "Choose AI Automation",
  },
};

// ---------- Premium bundles (4 tiers) ----------
function TierCard({
  name,
  price,
  desc,
  features,
  popular,
  dark,
}: {
  name: string;
  price: string;
  desc: string;
  features: string[];
  popular?: boolean;
  dark?: boolean;
}) {
  const ring = popular
    ? "border-[2.5px] border-simple-purple shadow-[0_8px_28px_rgba(140,0,255,0.14)]"
    : dark
    ? "border border-simple-ink"
    : "border border-simple-border";
  const bg = dark ? "bg-simple-ink" : "bg-white";
  const textColor = dark ? "text-white" : "text-simple-ink";
  const subColor = dark ? "text-[#C9C4D6]" : "text-[#6B6580]";
  const checkColor = dark ? "#C8F31D" : "#8C00FF";
  const btnClass = dark
    ? "bg-simple-lime text-simple-ink border-none"
    : popular
    ? "bg-simple-purple text-white border-none hover:text-white"
    : "bg-white text-simple-ink border-[1.5px] border-simple-ink";

  return (
    <div className={`relative ${bg} ${ring} rounded-[20px] p-9 pb-8 flex flex-col gap-4`}>
      {popular && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-simple-purple text-white font-display font-bold text-xs tracking-[0.04em] uppercase px-4 py-1.5 rounded-full whitespace-nowrap">
          Most Popular
        </div>
      )}
      <div className={`font-display font-bold text-xl ${textColor}`}>{name}</div>
      <div className={`text-sm min-h-10 ${subColor}`}>{desc}</div>
      {price === "Let's talk" ? (
        <div className={`font-display font-extrabold text-[32px] ${textColor}`}>
          {price}
          <span className={`block text-sm font-medium mt-1 ${subColor}`}>Scoped to your business</span>
        </div>
      ) : (
        <div className={`font-display font-extrabold text-[40px] ${textColor}`}>
          {price}
          <span className={`text-[15px] font-medium ${subColor}`}>/mo</span>
        </div>
      )}
      <a href={price === "Let's talk" ? "/contact" : "/#book"} className={`no-underline font-bold text-[15px] py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5 ${btnClass}`}>
        {price === "Let's talk" ? "Talk to Us" : `Choose ${name}`}
      </a>
      <ul className={`m-0 pt-[18px] mt-1.5 border-t ${dark ? "border-[#2A2338]" : "border-simple-border"} list-none flex flex-col gap-[11px]`}>
        {features.map((f) => (
          <li key={f} className={`flex gap-2.5 text-sm ${subColor}`}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={checkColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none mt-0.5">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PremiumPanel() {
  return (
    <div className="flex flex-col gap-10">
      <div className="max-w-[680px] mx-auto text-center flex flex-col gap-2.5">
        <h3 className="m-0 font-display font-extrabold text-[26px]">Bundle it all, save the math</h3>
        <p className="m-0 text-[15px] text-[#6B6580]">Four ways to go all-in. Each tier includes everything in the one before it.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <TierCard
          name="Growth"
          price="$699"
          desc="Launch and run ads, SEO and content — on autopilot."
          features={[
            "Standard website & GMB setup — free",
            "Meta Ads (1 campaign, 2 creatives) & Google Ads (1 campaign)",
            "SEO, managed monthly",
            "Social media: 5–7 reels + up to 8 image creatives a month",
          ]}
        />
        <TierCard
          name="Scale"
          price="$999"
          desc="Everything in Growth, plus automation that works while you sleep."
          popular
          features={[
            "Everything in Growth",
            "AI Automation & CRM, fully managed",
            "Meta Ads leads auto-start an AI conversation",
            "WhatsApp connected for instant replies",
          ]}
        />
        <TierCard
          name="Dominate"
          price="$1,500"
          desc="Everything, plus AI that closes deals in your DMs."
          dark
          features={[
            "Everything in Scale",
            "AI sales conversations in Messenger, Instagram & WhatsApp DMs",
            "Books appointments and follows up automatically",
            "Priority support & monthly strategy call",
          ]}
        />
        <TierCard
          name="Custom"
          price="Let's talk"
          desc="For businesses that need more than a plan — CRM, ERP and AI systems, built around you."
          dark
          features={["CRM & ERP integrations", "AI & MCP connections", "Dedicated strategy & build team"]}
        />
      </div>
    </div>
  );
}

// ---------- Process section ----------
const PROCESS_STEPS = [
  {
    n: "01",
    icon: <><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /><path d="m21 21-4.3-4.3" /></>,
    title: "Discovery Call",
    desc: "We learn your business, your goals and what isn't working yet.",
  },
  {
    n: "02",
    icon: <><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>,
    title: "Plan & Scope",
    desc: "You get a clear plan in writing — what's included, what it costs, when it's live.",
  },
  {
    n: "03",
    icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
    title: "Build & Launch",
    desc: "A dedicated team builds it. You review and approve before anything goes live.",
  },
  {
    n: "04",
    icon: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
    title: "Manage & Report",
    desc: "We run it day-to-day and send regular reports — no guessing where things stand.",
  },
];

function ProcessSection() {
  return (
    <div className="bg-simple-surface-alt border-y border-simple-border">
      <Reveal className="max-w-[1240px] mx-auto px-6 py-[72px] flex flex-col gap-11">
        <div className="max-w-[680px] flex flex-col gap-2.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Our Process</div>
          <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.4rem)]">
            How we actually deliver
          </h2>
          <p className="m-0 text-base text-simple-ink-soft">
            The biggest complaint about agencies isn&apos;t the work — it&apos;s the chaos. Here&apos;s exactly how we keep that from happening.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((s) => (
            <div key={s.n} className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-[10px] bg-simple-ink text-simple-lime font-display font-extrabold text-[15px] flex items-center justify-center flex-none">
                  {s.n}
                </div>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {s.icon}
                </svg>
              </div>
              <div className="font-display font-bold text-[17px]">{s.title}</div>
              <div className="text-sm text-[#6B6580]">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-simple-border rounded-[18px] p-8 flex flex-wrap gap-5 items-center">
          <div className="flex gap-0.5 flex-none">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBC05" aria-hidden="true">
                <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8-6.2 3.8 1.6-7L2 9.2l7.1-.6z" />
              </svg>
            ))}
          </div>
          <p className="m-0 text-base text-[#3A3448] italic flex-1 min-w-[240px]">
            &quot;I can not say enough to express my complete satisfaction with how our website was
            designed and completed in such a professional and knowledgeable manner.&quot;
          </p>
          <div className="font-display font-bold text-sm text-simple-ink whitespace-nowrap">
            Gary Harding <span className="font-medium text-[#6B6580]">· Google Review</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

// ---------- Tab bar ----------
const TABS: { key: string; label: string; icon: React.ReactNode }[] = [
  { key: "websites", label: "Websites", icon: <><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></> },
  { key: "meta", label: "Meta Ads", icon: <><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></> },
  { key: "google", label: "Google Ads", icon: <><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></> },
  { key: "seo", label: "SEO", icon: <><path d="M3 20h18" /><path d="M6 16V10M11 16V6M16 16v-4M21 16V8" /></> },
  { key: "video", label: "Video Editing", icon: <><rect x="2" y="6" width="14" height="12" rx="2" /><path d="m16 10 6-3v10l-6-3" /></> },
  { key: "social", label: "Social Media", icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 9h8M8 13h8M8 17h5" /></> },
  { key: "automation", label: "AI Automation", icon: <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /> },
  { key: "premium", label: "Premium Bundles", icon: <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5z" /> },
];

export default function PricingContent() {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <main className="bg-white text-simple-ink">
      {/* Hero */}
      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[820px] mx-auto px-6 pt-[72px] pb-14 flex flex-col items-center gap-[18px] text-center">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Pricing</div>
          <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
            Agency results, without agency prices
          </h1>
          <p className="m-0 text-[19px] text-simple-ink-soft max-w-[640px]">
            Here&apos;s exactly what BizzOne costs — next to what Canadian agencies typically
            charge for the same thing.
          </p>
          <div className="flex flex-wrap gap-6 justify-center pt-1.5 text-sm text-simple-ink-soft font-semibold">
            <span className="flex items-center gap-1.5"><Check size={16} />No long-term contracts</span>
            <span className="flex items-center gap-1.5"><Check size={16} />Reply within 24–48 hours</span>
            <span className="flex items-center gap-1.5"><Check size={16} />Cancel anytime</span>
          </div>
        </Reveal>
      </div>

      {/* Partners */}
      <div className="bg-simple-surface-alt border-b border-simple-border">
        <Reveal className="max-w-[1120px] mx-auto px-6 py-11 flex flex-col items-center gap-[22px]">
          <div className="text-center">
            <div className="text-[13px] font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Our Partners</div>
            <h3 className="m-0 mt-1 font-display font-extrabold text-xl">Where we run and grow your presence</h3>
          </div>
          <div className="flex flex-wrap gap-7 items-center justify-center">
            {PARTNERS.map((p) => (
              <div key={p.label} className="flex items-center gap-2.5">
                <p.Icon />
                <span className="font-display font-bold text-[15px]">{p.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Tab-based pricing */}
      <div className="max-w-[1240px] mx-auto px-6 pt-[72px] pb-6 flex flex-col items-center gap-2.5 text-center">
        <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">Pricing Plans</div>
        <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.4rem)]">
          Pick a service to see pricing
        </h2>
        <p className="m-0 text-base text-simple-ink-soft max-w-[560px]">
          Every price, side by side with what agencies typically charge — or bundle it all below.
        </p>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 pb-4 flex justify-center">
        <div className="inline-flex flex-wrap gap-1 bg-[#F1EEF9] p-1.5 rounded-2xl justify-center">
          {TABS.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-1.5 font-bold text-sm px-4 py-2.5 rounded-xl whitespace-nowrap transition-colors duration-200 ${
                  active ? "bg-white text-simple-ink shadow-[0_2px_8px_rgba(15,10,26,0.08)]" : "bg-transparent text-[#6B6580]"
                }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active ? "#0F0A1A" : "#6B6580"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {tab.icon}
                </svg>
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 pt-10 pb-[72px]">
        <div key={activeTab} className="animate-fade-slide-in">
          {activeTab === "websites" && <WebsitesPanel />}
          {activeTab === "premium" && <PremiumPanel />}
          {SERVICE_PANELS[activeTab] && <ServicePanel s={SERVICE_PANELS[activeTab]} />}
          {activeTab !== "websites" && (
            <div className="mt-10">
              <PaymentBadges center />
            </div>
          )}
        </div>
      </div>

      <ProcessSection />

      {/* Ad spend note */}
      <div className="max-w-[1240px] mx-auto px-6 py-14 flex justify-center">
        <Reveal className="flex items-center gap-2.5 bg-simple-surface-alt rounded-xl px-6 py-3.5 max-w-[700px]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-none" aria-hidden="true">
            <path d="M12 2v20" />
            <path d="M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <span className="text-simple-ink-faint font-semibold text-[15px]">
            Ad spend is separate on every plan — billed directly by Meta/Google, never marked up.
          </span>
        </Reveal>
      </div>

      {/* Final CTA */}
      <div className="bg-simple-purple text-white">
        <div className="max-w-[1000px] mx-auto px-6 py-[72px] flex flex-col items-center gap-[22px] text-center">
          <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,4vw,3rem)]">
            Still comparing? Let&apos;s talk numbers.
          </h2>
          <p className="m-0 text-lg max-w-[600px]">
            Book a free call and we&apos;ll show you exactly what you&apos;d pay elsewhere — and
            what you&apos;d pay here.
          </p>
          <Link href="/#book" className="bg-simple-ink text-white no-underline font-bold text-[17px] px-[30px] py-[17px] rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:text-white">
            Book a Free Call
          </Link>
        </div>
      </div>
    </main>
  );
}
