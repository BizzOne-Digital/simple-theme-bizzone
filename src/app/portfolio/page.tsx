import PromoBar from "@/components/simple/PromoBar";
import NavBar from "@/components/simple/NavBar";
import Reveal from "@/components/simple/Reveal";
import FinalCTA from "@/components/simple/FinalCTA";
import Footer from "@/components/simple/Footer";
import WebsiteGrid from "@/components/simple/WebsiteGrid";
import { WEBSITE_PROJECTS } from "@/data/web-portfolio";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Website Portfolio: Sites We've Built | BizzOne Digital",
  description: `Browse ${WEBSITE_PROJECTS.length}+ live websites BizzOne Digital has designed and built for businesses across Canada and the US, filtered by industry.`,
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PromoBar />
      <NavBar active="Our Work" />
      <main className="bg-white text-simple-ink">
        <div className="border-b border-simple-border bg-simple-surface-alt">
          <Reveal className="mx-auto flex max-w-[820px] flex-col items-center gap-[18px] px-6 pb-14 pt-[72px] text-center">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">Website Portfolio</div>
            <h1 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2.3rem,4.6vw,3.6rem)]">
              {WEBSITE_PROJECTS.length}+ websites, <span className="text-simple-purple">built and live</span>
            </h1>
            <p className="m-0 max-w-[620px] text-[19px] text-simple-ink-soft">
              Every site below is a real client website we designed and built. Pick an industry,
              hover a card to scroll the page, or open the live site.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto max-w-[1240px] px-6 py-16">
          <WebsiteGrid />
        </div>

        <FinalCTA
          heading="Want a website like these?"
          sub="Book a free strategy call and we'll show you what your new website could look like."
          bookLabel="Book Free Strategy Call"
        />
      </main>
      <Footer />
    </>
  );
}
