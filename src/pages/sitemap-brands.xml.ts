import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { brands } from "../data/brands";

/**
 * Sitemap pro značky — hub + jednotlivé brand stránky.
 */

const lm = SITEMAP_LASTMOD;

const entries: SitemapEntry[] = [
  { loc: "/znacky/", lastmod: lm, changefreq: "weekly", priority: 0.8 },
  ...brands.map((b) => ({
    loc: `/znacky/${b.slug}/`,
    lastmod: b.updatedAt,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
];

export const GET: APIRoute = () => {
  const urls = entries.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
