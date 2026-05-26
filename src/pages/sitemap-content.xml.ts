import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { magazineArticles } from "../data/magazine";
import { interviews } from "../data/interviews";
import { eshopReviews } from "../data/eshops";
import { forumThreads } from "../data/forum";

/**
 * Sitemap pro magazín + rozhovory + recenze e-shopů + diskuze.
 */

const lm = SITEMAP_LASTMOD;

const entries: SitemapEntry[] = [
  { loc: "/magazin/", lastmod: lm, changefreq: "daily", priority: 0.7 },
  { loc: "/rozhovory/", lastmod: lm, changefreq: "weekly", priority: 0.7 },
  { loc: "/recenze-eshopu/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/diskuze/", lastmod: lm, changefreq: "daily", priority: 0.7 },

  ...magazineArticles.map((a) => ({
    loc: `/magazin/${a.slug}/`,
    lastmod: a.publishedAt,
    changefreq: "monthly" as const,
    priority: 0.6,
  })),
  ...interviews.map((i) => ({
    loc: `/rozhovory/${i.slug}/`,
    lastmod: i.publishedAt,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
  ...eshopReviews.map((e) => ({
    loc: `/recenze-eshopu/${e.slug}/`,
    lastmod: e.updatedAt,
    changefreq: "monthly" as const,
    priority: 0.7,
  })),
  ...forumThreads.map((t) => ({
    loc: `/diskuze/${t.slug}/`,
    lastmod: t.lastActivityAt.slice(0, 10),
    changefreq: "weekly" as const,
    priority: 0.5,
  })),
];

export const GET: APIRoute = () => {
  const urls = entries.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
