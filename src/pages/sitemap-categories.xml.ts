import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { categories } from "../data/categories";

/**
 * Sitemap pro rubriky / kategorie.
 * Generováno dynamicky z src/data/categories.ts.
 */

const categoryEntries: SitemapEntry[] = categories.map((c) => ({
  loc: `/${c.slug}/`,
  lastmod: SITEMAP_LASTMOD,
  changefreq: "weekly",
  priority: 0.8,
}));

export const GET: APIRoute = () => {
  const urls = categoryEntries.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
