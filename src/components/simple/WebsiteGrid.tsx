"use client";

import { useMemo, useState } from "react";
import WebsiteCard from "./WebsiteCard";
import { WEBSITE_PROJECTS } from "@/data/web-portfolio";

const PAGE_SIZE = 24;

/** Full website portfolio with industry filter chips and "Load more" paging. */
export default function WebsiteGrid() {
  const [industry, setIndustry] = useState("All");
  const [shown, setShown] = useState(PAGE_SIZE);

  const industries = useMemo(() => {
    const counts = new Map<string, number>();
    for (const s of WEBSITE_PROJECTS) counts.set(s.industry, (counts.get(s.industry) ?? 0) + 1);
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  const filtered = industry === "All" ? WEBSITE_PROJECTS : WEBSITE_PROJECTS.filter((s) => s.industry === industry);

  const pick = (name: string) => {
    setIndustry(name);
    setShown(PAGE_SIZE);
  };

  const chip = (name: string, count: number) => (
    <button
      key={name}
      type="button"
      onClick={() => pick(name)}
      className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
        industry === name
          ? "border-simple-purple bg-simple-purple text-white"
          : "border-simple-border bg-white text-simple-ink hover:border-simple-purple hover:text-simple-purple"
      }`}
    >
      {name} <span className="opacity-70">({count})</span>
    </button>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2.5">
        {chip("All", WEBSITE_PROJECTS.length)}
        {industries.map(([name, count]) => chip(name, count))}
      </div>

      <div key={industry} className="animate-fade-slide-in grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, shown).map((site, i) => (
          <WebsiteCard key={site.slug} site={site} priority={i < 3} />
        ))}
      </div>

      {shown < filtered.length && (
        <button
          type="button"
          onClick={() => setShown((n) => n + PAGE_SIZE)}
          className="self-center rounded-xl border-[1.5px] border-simple-ink bg-white px-[30px] py-[15px] text-base font-bold text-simple-ink transition-all duration-200 hover:-translate-y-0.5"
        >
          Load more websites ({filtered.length - shown} left)
        </button>
      )}
    </div>
  );
}
