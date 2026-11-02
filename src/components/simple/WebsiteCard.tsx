import Image from "next/image";
import type { WebsiteProject } from "@/data/web-portfolio";

/**
 * One client website: a browser-style frame around a full-page screenshot.
 * Hovering scrolls the screenshot from top to bottom (object-position transition),
 * so visitors see the whole site without loading the live page.
 */
export default function WebsiteCard({ site, priority = false }: { site: WebsiteProject; priority?: boolean }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-simple-border bg-white text-simple-ink no-underline transition-all duration-300 hover:-translate-y-1 hover:text-simple-ink hover:shadow-[0_16px_36px_rgba(15,10,26,0.12)]"
    >
      <div className="flex items-center gap-2 border-b border-simple-border bg-simple-surface-alt px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 text-xs text-simple-ink-soft">
          {site.domain}
        </span>
      </div>

      <div className="relative aspect-[16/11] overflow-hidden bg-simple-surface-alt">
        <Image
          src={site.image}
          alt={`${site.name} website designed by BizzOne Digital`}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
          priority={priority}
          className="object-cover object-top transition-[object-position] duration-[6000ms] ease-linear group-hover:object-bottom"
        />
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <div className="min-w-0">
          <div className="truncate font-display text-[17px] font-bold">{site.name}</div>
          <div className="text-xs font-semibold uppercase tracking-[0.04em] text-simple-ink-soft">{site.industry}</div>
        </div>
        <span className="flex-none text-sm font-bold text-simple-purple-deep group-hover:text-simple-purple-dark">
          View Live ↗
        </span>
      </div>
    </a>
  );
}
