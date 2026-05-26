import type { APIRoute } from "astro";
import {
  SITE_URL,
  SITEMAP_LASTMOD,
  escapeXml,
  sitemapResponseHeaders,
} from "../data/sitemap-utils";

/**
 * Sitemap INDEX — odkazuje na 5 sub-sitemap.
 * Standard: https://www.sitemaps.org/protocol.html#index
 */

interface SubSitemap {
  loc: string;
  lastmod: string;
}

const subSitemaps: SubSitemap[] = [
  { loc: "/sitemap-pages.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-articles.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-categories.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-authors.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-glossary.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-brands.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-content.xml", lastmod: SITEMAP_LASTMOD },
  { loc: "/sitemap-images.xml", lastmod: SITEMAP_LASTMOD },
];

export const GET: APIRoute = () => {
  const entries = subSitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${escapeXml(`${SITE_URL}${s.loc}`)}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>
`;

  return new Response(xml, { headers: sitemapResponseHeaders });
};
