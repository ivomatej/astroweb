import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { articleCards } from "../data/featured";

/**
 * Sitemap pro všechny článkové URL.
 * Zahrnuje:
 * - Plně publikované články (pillar, TOP X, srovnání, produktové recenze)
 * - Stub karty z articleCards (články chystané pro produkci)
 */

const lm = SITEMAP_LASTMOD;

/**
 * Plně publikované články s vlastní stránkou.
 * Tyto entries mají explicit lastmod podle reálné publikace / refresh.
 */
const publishedArticles: SitemapEntry[] = [
  {
    loc: "/clanek/aku-brusky/",
    lastmod: "2026-05-22",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    loc: "/nejlepsi-pracky-2026/",
    lastmod: "2026-05-12",
    changefreq: "weekly",
    priority: 0.9,
  },
  {
    loc: "/bosch-vs-miele-pracky/",
    lastmod: "2026-03-28",
    changefreq: "monthly",
    priority: 0.8,
  },
  {
    loc: "/recenze/bosch-wgg244a0by/",
    lastmod: "2026-05-21",
    changefreq: "monthly",
    priority: 0.8,
  },
];

/**
 * Stub kary z articleCards — chystané články, mají placeholder URL.
 * V produkci by se generovaly z backendu (jen články se statusem "published").
 */
const stubArticles: SitemapEntry[] = articleCards
  .filter((c) => {
    // Vynechej karty, které už máme v publishedArticles
    const publishedHrefs = publishedArticles.map((p) => p.loc);
    return !publishedHrefs.includes(c.href);
  })
  .map((c) => ({
    loc: c.href,
    lastmod: c.date,
    changefreq: "monthly" as const,
    priority: 0.7,
  }));

const allArticles: SitemapEntry[] = [
  ...publishedArticles,
  ...stubArticles,
].sort((a, b) => (a.lastmod ?? lm).localeCompare(b.lastmod ?? lm)).reverse();

export const GET: APIRoute = () => {
  const urls = allArticles.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
