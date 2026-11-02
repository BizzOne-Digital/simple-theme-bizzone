import Link from "next/link";
import Reveal from "./Reveal";
import WebsiteCard from "./WebsiteCard";
import { FEATURED_WEBSITES, WEBSITE_PROJECTS } from "@/data/web-portfolio";

/** Home page teaser: a handful of featured client websites linking to /portfolio. */
export default function WebsiteShowcase() {
  if (FEATURED_WEBSITES.length === 0) return null;
  return (
    <div id="websites" className="bg-white">
      <Reveal from="right" className="mx-auto flex max-w-[1240px] flex-col gap-10 px-6 py-[88px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex max-w-[680px] flex-col gap-3.5">
            <div className="text-sm font-bold uppercase tracking-[0.12em] text-simple-purple-deep">
              Website Portfolio
            </div>
            <h2 className="m-0 font-display font-extrabold leading-[1.1] tracking-tight text-[clamp(2rem,3.6vw,3rem)]">
              {WEBSITE_PROJECTS.length}+ websites built and live
            </h2>
            <p className="m-0 text-lg text-simple-ink-soft">
              Real businesses, real websites. Hover a card to scroll the page, or open the live site.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="rounded-[10px] bg-simple-purple px-[22px] py-[13px] font-bold text-white no-underline transition-all duration-200 hover:-translate-y-0.5 hover:text-white hover:brightness-105"
          >
            View All Websites →
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_WEBSITES.map((site) => (
            <WebsiteCard key={site.slug} site={site} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
