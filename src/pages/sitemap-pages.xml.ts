import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderUrlEntry,
  wrapUrlset,
  sitemapResponseHeaders,
  type SitemapEntry,
} from "../data/sitemap-utils";

const lm = SITEMAP_LASTMOD;

const staticPages: SitemapEntry[] = [
  // Homepage — nejvyšší priorita
  { loc: "/", lastmod: lm, changefreq: "daily", priority: 1.0 },

  // Editorial standards
  { loc: "/o-nas/", lastmod: lm, changefreq: "monthly", priority: 0.9 },
  { loc: "/metodika/", lastmod: lm, changefreq: "monthly", priority: 0.9 },
  { loc: "/eticky-kodex/", lastmod: lm, changefreq: "monthly", priority: 0.9 },
  { loc: "/redakcni-zasady/", lastmod: lm, changefreq: "monthly", priority: 0.9 },
  { loc: "/overovani-faktu/", lastmod: lm, changefreq: "monthly", priority: 0.8 },
  { loc: "/duveryhodne-zdroje/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/testovaci-laborator/", lastmod: lm, changefreq: "monthly", priority: 0.8 },
  { loc: "/jak-testujeme/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/jak-testujeme/pracky/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/pouzivani-ai/", lastmod: lm, changefreq: "monthly", priority: 0.8 },
  { loc: "/typy-obsahu/", lastmod: lm, changefreq: "monthly", priority: 0.6 },

  // Trust & odpovědnost
  { loc: "/sefredaktor/", lastmod: lm, changefreq: "monthly", priority: 0.8 },
  { loc: "/impressum/", lastmod: lm, changefreq: "yearly", priority: 0.7 },
  { loc: "/affiliate-disclosure/", lastmod: lm, changefreq: "yearly", priority: 0.7 },

  // Corrections & transparency
  { loc: "/oprava-chyb/", lastmod: lm, changefreq: "monthly", priority: 0.6 },
  { loc: "/opravy/", lastmod: lm, changefreq: "weekly", priority: 0.7 },
  { loc: "/nase-chyby/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/aktualizace/", lastmod: lm, changefreq: "daily", priority: 0.7 },

  // Press & contact
  { loc: "/press/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/kontakt/", lastmod: lm, changefreq: "monthly", priority: 0.6 },
  { loc: "/newsletter/", lastmod: lm, changefreq: "monthly", priority: 0.5 },

  // Business pages (B2B + careers + community)
  { loc: "/kariera/", lastmod: lm, changefreq: "weekly", priority: 0.7 },
  { loc: "/pro-znacky-firmy-agentury/", lastmod: lm, changefreq: "monthly", priority: 0.6 },
  { loc: "/kodex-ferove-firmy/", lastmod: lm, changefreq: "monthly", priority: 0.7 },
  { loc: "/stante-se-testerem/", lastmod: lm, changefreq: "monthly", priority: 0.6 },

  // Legal
  { loc: "/podminky-pouziti/", lastmod: lm, changefreq: "yearly", priority: 0.5 },
  { loc: "/zasady-osobnich-udaju/", lastmod: lm, changefreq: "yearly", priority: 0.5 },
  { loc: "/zasady-cookies/", lastmod: lm, changefreq: "yearly", priority: 0.5 },
  { loc: "/pristupnost/", lastmod: lm, changefreq: "yearly", priority: 0.5 },

  // Utility
  { loc: "/mapa-webu/", lastmod: lm, changefreq: "weekly", priority: 0.4 },

  // Autori rozcestnik (autoři detail jsou v sitemap-authors.xml)
  { loc: "/autori/", lastmod: lm, changefreq: "monthly", priority: 0.8 },
];

export const GET: APIRoute = () => {
  const urls = staticPages.map(renderUrlEntry).join("\n");
  return new Response(wrapUrlset(urls), { headers: sitemapResponseHeaders });
};
