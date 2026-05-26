import type { APIRoute } from "astro";
import {
  SITEMAP_LASTMOD,
  renderImageEntry,
  wrapImageUrlset,
  sitemapResponseHeaders,
  type SitemapImageEntry,
} from "../data/sitemap-utils";
import { articleCards } from "../data/featured";
import { allPeople } from "../data/people";
import { categories } from "../data/categories";

/**
 * Image sitemap dle Google specifikace.
 * Spec: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
 *
 * Image sitemap pomáhá Google Images indexovat obrázky a propojit je
 * s konkrétní stránkou. Každé URL má pole image:image se subfieldy
 * image:loc, image:caption, image:title.
 */

const lm = SITEMAP_LASTMOD;
const LICENSE_URL = "https://www.recenzer.cz/affiliate-disclosure/";

/**
 * Image entries pro hlavní stránky webu (statické obrázky).
 */
const staticImageEntries: SitemapImageEntry[] = [
  {
    loc: "/",
    lastmod: lm,
    changefreq: "daily",
    priority: 1.0,
    images: [
      {
        loc: "/images/og-recenzer-homepage.webp",
        caption: "Recenzer.cz — nezávislý spotřebitelský magazín",
        title: "Recenzer.cz homepage",
        license: LICENSE_URL,
      },
    ],
  },
  {
    loc: "/testovaci-laborator/",
    lastmod: lm,
    changefreq: "monthly",
    priority: 0.8,
    images: [
      {
        loc: "/images/lab/lab-overview.webp",
        caption: "Hlavní hala testovací laboratoře Brno-Židenice",
        title: "Recenzer.cz testovací laboratoř — celkový pohled",
        license: LICENSE_URL,
      },
      {
        loc: "/images/lab/lab-akusticka-komora.webp",
        caption: "Akustická komora — měření hluku pračky podle ISO 3744",
        title: "Akustická komora",
        license: LICENSE_URL,
      },
      {
        loc: "/images/lab/lab-energeticka-zona.webp",
        caption: "Energetická zóna se 6 paralelními zdroji a Yokogawa wattmetrem",
        title: "Energetická testovací zóna",
        license: LICENSE_URL,
      },
      {
        loc: "/images/lab/lab-flir-termovize.webp",
        caption: "Termovize FLIR E54 — snímání motoru aku brusky",
        title: "FLIR termokamera v provozu",
        license: LICENSE_URL,
      },
      {
        loc: "/images/lab/lab-dlouhodobe-testy.webp",
        caption: "Pole 60 zásuvek pro dlouhodobé testy životnosti",
        title: "Pracoviště dlouhodobých testů",
        license: LICENSE_URL,
      },
    ],
  },
  {
    loc: "/o-nas/",
    lastmod: lm,
    changefreq: "monthly",
    priority: 0.9,
    images: [
      {
        loc: "/images/team/recenzer-team-2025.webp",
        caption: "Tým Recenzer.cz, srpen 2025 — 8 interních redaktorů + 6 externích garantů",
        title: "Tým Recenzer.cz 2025",
        license: LICENSE_URL,
      },
    ],
  },
  {
    loc: "/press/",
    lastmod: lm,
    changefreq: "monthly",
    priority: 0.7,
    images: [
      {
        loc: "/images/press/recenzer-logo.svg",
        caption: "Logo Recenzer.cz — vektor",
        title: "Recenzer.cz logo",
        license: LICENSE_URL,
      },
      {
        loc: "/images/press/recenzer-logo-color.png",
        caption: "Logo Recenzer.cz barevné, 1200×400 px",
        title: "Recenzer.cz logo PNG",
        license: LICENSE_URL,
      },
    ],
  },
];

/**
 * Image entries pro články z articleCards.
 */
const articleImageEntries: SitemapImageEntry[] = articleCards
  .filter((c) => c.coverSrc) // jen články s reálným cover obrázkem
  .map((c) => ({
    loc: c.href,
    lastmod: c.date,
    changefreq: "weekly" as const,
    priority: 0.8,
    images: [
      {
        loc: c.coverSrc!,
        caption: c.perex.slice(0, 200),
        title: c.title.replace(/<[^>]+>/g, ""),
        license: LICENSE_URL,
      },
    ],
  }));

/**
 * Image entries pro autory s fotkou.
 */
const authorImageEntries: SitemapImageEntry[] = allPeople
  .filter((p) => p.photoUrl)
  .map((p) => ({
    loc: `/autor/${p.slug}/`,
    lastmod: lm,
    changefreq: "monthly" as const,
    priority: 0.6,
    images: [
      {
        loc: p.photoUrl!,
        caption: `${p.name} — ${p.role}, Recenzer.cz`,
        title: `Foto: ${p.name}`,
        license: LICENSE_URL,
      },
    ],
  }));

/**
 * Image entries pro kategorie (cover obrázky).
 */
const categoryImageEntries: SitemapImageEntry[] = categories.map((c) => ({
  loc: `/${c.slug}/`,
  lastmod: lm,
  changefreq: "weekly" as const,
  priority: 0.7,
  images: [
    {
      loc: `/images/categories/${c.slug}-cover.webp`,
      caption: `${c.name} — kategorie produktů na Recenzer.cz`,
      title: `${c.name} — rubrika`,
      license: LICENSE_URL,
    },
  ],
}));

const allImageEntries: SitemapImageEntry[] = [
  ...staticImageEntries,
  ...articleImageEntries,
  ...authorImageEntries,
  ...categoryImageEntries,
];

export const GET: APIRoute = () => {
  const urls = allImageEntries.map(renderImageEntry).join("\n");
  return new Response(wrapImageUrlset(urls), { headers: sitemapResponseHeaders });
};
