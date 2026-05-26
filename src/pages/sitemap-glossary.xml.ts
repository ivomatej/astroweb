import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { glossaryCategories, glossaryTerms } from "../data/glossary";

/**
 * Sitemap pro slovník — hub + kategorie + termíny.
 */

const lm = SITEMAP_LASTMOD;

const entries: SitemapEntry[] = [
  { loc: "/slovnik/", lastmod: lm, changefreq: "weekly", priority: 0.7 },
  ...glossaryCategories.map((c) => ({
    loc: `/slovnik/${c.slug}/`,
    lastmod: lm,
    changefreq: "monthly" as const,
    priority: 0.6,
  })),
  ...glossaryTerms.map((t) => ({
    loc: `/slovnik/pojem/${t.slug}/`,
    lastmod: t.updatedAt,
    changefreq: "monthly" as const,
    priority: 0.5,
  })),
];

export const GET: APIRoute = () => {
  const urls = entries.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
