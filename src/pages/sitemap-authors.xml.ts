import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";
import { allPeople } from "../data/people";

/**
 * Sitemap pro autorské profily / detail stránky.
 * Generováno dynamicky z src/data/people.ts.
 */

const authorEntries: SitemapEntry[] = allPeople.map((p) => ({
  loc: `/autor/${p.slug}/`,
  lastmod: SITEMAP_LASTMOD,
  changefreq: "monthly",
  // Interní redakce mají vyšší prioritu než externí garanti
  priority: p.kind === "internal" ? 0.7 : 0.6,
}));

export const GET: APIRoute = () => {
  const urls = authorEntries.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
