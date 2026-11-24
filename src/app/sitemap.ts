import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { PUBLISHED_POSTS } from "@/data/blog";
import { CASE_STUDIES } from "@/data/case-studies";

/** Update when site-wide content changes. Blog posts use their own dates. */
const SITE_LAST_UPDATED = "2026-11-24";

/**
 * Only real, public, indexable pages. Admin, login and API routes are excluded.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly", lastModified = SITE_LAST_UPDATED) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/about", 0.7),
    page("/services", 0.8),
    page("/websites", 0.9, "weekly"),
    page("/pricing", 0.8),
    page("/our-work", 0.7),
    page("/portfolio", 0.7),
    page("/case-studies", 0.6),
    ...CASE_STUDIES.map((c) => page(`/case-studies/${c.slug}`, 0.6)),
    page("/blog", 0.6, "weekly"),
    ...PUBLISHED_POSTS.map((p) => page(`/blog/${p.slug}`, 0.6, "monthly", p.updated ?? p.date)),
    page("/digital-marketing-mississauga", 0.8),
    page("/contact", 0.8),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-and-conditions", 0.2, "yearly"),
  ];
}
