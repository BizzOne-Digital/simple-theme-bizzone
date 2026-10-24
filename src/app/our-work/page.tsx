import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Reveal from "@/components/simple/Reveal";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Work: Web Design, Logos & Social Media | BizzOne Digital",
  description:
    "Real clients, real work across Canada and the US — websites, logo design, social media and video production by BizzOne Digital.",
  path: "/our-work",
});

function CountCard({ icon, count, label }: { icon: React.ReactNode; count: string; label: string }) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-[26px] flex flex-col gap-2.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8C00FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {icon}
      </svg>
      <div className="font-display font-extrabold text-[26px]">
        {count} <span className="text-sm font-semibold text-simple-ink-soft">works</span>
      </div>
      <div className="font-bold text-[15px]">{label}</div>
    </div>
  );
}

function WorkCard({ mono, name, industry }: { mono: string; name: string; industry: string }) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-6 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <div className="w-11 h-11 rounded-[10px] bg-simple-chip-bg text-simple-purple flex items-center justify-center font-display font-extrabold text-sm">
        {mono}
      </div>
      <div className="font-display font-bold text-lg">{name}</div>
      <div className="text-simple-ink-soft text-xs font-semibold tracking-[0.04em] uppercase">{industry}</div>
    </div>
  );
}

function CaseStudy({ tag, title, desc }: { tag: string; title: string; desc: string }) {
  return (
    <div className="bg-white border border-simple-border rounded-2xl p-7 flex flex-col gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,10,26,0.10)]">
      <div className="self-start bg-simple-chip-bg text-simple-chip-text text-xs font-extrabold tracking-[0.06em] uppercase px-2.5 py-1 rounded-full">
        {tag}
      </div>
      <div className="font-display font-bold text-[19px]">{title}</div>
      <div className="text-simple-ink-soft text-[15px] flex-grow">{desc}</div>
      <a href="/contact" className="font-bold text-simple-purple-deep no-underline hover:text-simple-purple-dark">
        Ask About This Project →
      </a>
    </div>
  );
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
        <CountCard
          icon={<><path d="M12 20v-6M6 20V10M18 20V4" /></>}
          count="13"
          label="Brand Identity & Logo Design"
        />
        <CountCard
          icon={<><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 22h8M12 18v4" /></>}
          count="6"
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

      <div className="bg-simple-surface-alt border-y border-simple-border">
        <Reveal className="max-w-[1240px] mx-auto px-6 py-20 flex flex-col gap-9">
          <div className="max-w-[680px] flex flex-col gap-2.5">
            <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
              Selected Work
            </div>
            <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
              Businesses we&rsquo;ve helped grow
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <WorkCard mono="M2" name="M2M Cleaners" industry="Construction & Renovation" />
            <WorkCard mono="BP" name="Bariss Pizza" industry="Restaurant & Food Services" />
            <WorkCard mono="GP" name="Global Pardon" industry="Professional Services" />
            <WorkCard mono="OD" name="Osipp Delivery" industry="E-commerce & Retail" />
            <WorkCard mono="A1" name="A1 Furnished" industry="Travel & Hospitality" />
            <WorkCard mono="GH" name="GTA Home Care" industry="Health & Wellness" />
            <WorkCard mono="HC" name="Haven Customs" industry="Automotive Services" />
            <WorkCard mono="CC" name="Cobb Crunch" industry="Non-Profit & Community" />
          </div>
        </Reveal>
      </div>

      <Reveal className="max-w-[1240px] mx-auto px-6 py-20 flex flex-col gap-9">
        <div className="max-w-[680px] flex flex-col gap-2.5">
          <div className="text-sm font-bold tracking-[0.12em] uppercase text-simple-purple-deep">
            Behind the Work
          </div>
          <h2 className="m-0 font-display font-extrabold leading-[1.15] tracking-tight text-[clamp(1.8rem,3.2vw,2.6rem)]">
            Client case studies
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <CaseStudy
            tag="Automotive Services"
            title="Haven Tint & Tire: Google Ads, Social Media & Brand Content"
            desc="Lead generation with Google Ads, sales process support and consistent social media content for an automotive tint, tire and paint protection garage."
          />
          <CaseStudy
            tag="Driver Education"
            title="Horizon Driving School: Logo, Social Media & Video"
            desc="A new logo, educational social media content and short-form driving tips videos for an Ontario driving school."
          />
          <CaseStudy
            tag="Automotive Customization"
            title="Dollar Customs: Building a Brand From Scratch"
            desc="Logo, website, social media, videography and video editing for an automotive customization business starting from zero."
          />
        </div>
      </Reveal>

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
