import type { CategoryAccent } from "../types/category";

/**
 * Card-level article data shown on the homepage and category listings.
 *
 * This is a thin projection separate from full `Article` fixtures —
 * cards can reference articles that are upcoming and don't have a
 * full fixture yet (in that case `href` may point to a placeholder).
 */
export interface ArticleCard {
  slug: string;
  href: string;

  /** Slug of the parent category (matches Category.slug). */
  categorySlug: string;
  /** Display name of the parent category. */
  category: string;
  /** Path to category listing page. */
  categoryHref: string;
  /** Accent color inherited from the category. */
  accent: CategoryAccent;

  /** Card tag, e.g. "Nový test", "Aktualizováno", "Pillar". */
  badge?: string;
  title: string;
  perex: string;
  coverSrc?: string;
  /** Used for placeholder pattern when no cover image. */
  coverPlaceholder?: string;

  author: string;
  /** ISO date string. */
  date: string;
  readingTimeMin: number;

  /** True = render as large featured/hero card on homepage. */
  featured?: boolean;
}

export const articleCards: ArticleCard[] = [
  // ---------- Elektronářadí ----------
  {
    slug: "aku-brusky",
    href: "/clanek/aku-brusky/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "Hloubková analýza",
    title:
      "Aku brusky 2026: jak vybrat <em>skutečně</em> dobrou akumulátorovou úhlovou brusku",
    perex:
      "Šest měsíců testů, 23 modelů v ruce, 4 rozhovory s profesionálními zámečníky. Co rozhoduje o výběru aku brusky — a co je naopak jen marketing.",
    coverSrc: "/images/articles/aku-bruska-2048x1044.webp",
    author: "Ivo Matěj",
    date: "2026-05-22",
    readingTimeMin: 18,
    featured: true,
  },
  {
    slug: "nejlepsi-aku-brusky",
    href: "/clanek/nejlepsi-aku-brusky/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "TOP 5",
    title: "Nejlepší aku brusky 2026 — TOP 5 modelů z 23 testovaných",
    perex:
      "Pět nejlépe hodnocených modelů z našeho velkého testu. Bodováno podle metodiky, rozděleno podle rozpočtu a profilu použití.",
    coverPlaceholder: "TOP 5 · aku brusky · 23 testovaných",
    author: "Ivo Matěj",
    date: "2026-05-22",
    readingTimeMin: 9,
  },
  {
    slug: "jak-vybrat-aku-vrtacku",
    href: "/clanek/jak-vybrat-aku-vrtacku/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "Návod",
    title: "Jak vybrat aku vrtačku — krouticí moment, sklíčidlo, brushless",
    perex:
      "Krouticí moment, sklíčidlo, brushless motor a kompatibilita ekosystémů. Detailní průvodce pro hobby kutila i profi-řemeslníka.",
    coverPlaceholder: "Aku vrtačky · kompletní průvodce",
    author: "Ivo Matěj",
    date: "2026-04-18",
    readingTimeMin: 14,
  },
  {
    slug: "aku-baterie-srovnani",
    href: "/clanek/aku-baterie-srovnani/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "Srovnání",
    title: "Aku baterie: 18650 vs. 21700 vs. PoLi",
    perex:
      "Co rozhoduje o výdrži a životnosti baterie ve vašem nářadí. Měření výboje, životnost a poměr ceny k Wh.",
    coverPlaceholder: "Aku baterie · technické srovnání",
    author: "Jakub Novák",
    date: "2026-03-30",
    readingTimeMin: 11,
  },
  {
    slug: "bezpecnost-elektronaradi",
    href: "/clanek/bezpecnost-elektronaradi/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "Téma",
    title: "Bezpečnost při práci s úhlovou bruskou",
    perex:
      "Praktický návod od profesionálního zámečníka — kickback, ochrana zraku, sluchu, správný postup řezu.",
    coverPlaceholder: "Bezpečnost · brusky · garant Jakub Novák",
    author: "Jakub Novák",
    date: "2026-03-12",
    readingTimeMin: 8,
  },
  {
    slug: "jak-vybrat-aku-pilu",
    href: "/clanek/jak-vybrat-aku-pilu/",
    categorySlug: "elektronarad",
    category: "Elektronářadí",
    categoryHref: "/elektronarad/",
    accent: "purple",
    badge: "Návod",
    title: "Jak vybrat aku přímočarou pilu",
    perex:
      "Zdvih, otáčky, vodítka pro různé materiály a typy pilových plátků. Pro dřevo, kov i kompozity.",
    coverPlaceholder: "Aku pily · kompletní návod",
    author: "Ivo Matěj",
    date: "2026-02-25",
    readingTimeMin: 12,
  },

  // ---------- Domácí spotřebiče ----------
  {
    slug: "nejlepsi-pracky-2026",
    href: "/clanek/nejlepsi-pracky-2026/",
    categorySlug: "domaci-spotrebice",
    category: "Domácí spotřebiče",
    categoryHref: "/domaci-spotrebice/",
    accent: "amber",
    badge: "TOP 7",
    title: "Nejlepší pračky 2026: 7 modelů, které vydrží 12+ let",
    perex:
      "Otestovali jsme 31 praček v plném provozu po 4 měsíce. Co vám prodejce neřekne o spotřebě, hlučnosti a životnosti motoru.",
    coverPlaceholder: "Pračky 2026 · TOP 7 · 4 měsíce testů",
    author: "Anna Sedláková",
    date: "2026-05-12",
    readingTimeMin: 14,
  },
  {
    slug: "jak-vybrat-susicku",
    href: "/clanek/jak-vybrat-susicku/",
    categorySlug: "domaci-spotrebice",
    category: "Domácí spotřebiče",
    categoryHref: "/domaci-spotrebice/",
    accent: "amber",
    badge: "Průvodce",
    title: "Tepelné čerpadlo nebo kondenzační? Jak vybrat sušičku",
    perex:
      "Spotřeba energie, hlučnost, šetrnost k oblečení a životnost. Detailní srovnání obou principů sušení.",
    coverPlaceholder: "Sušičky · principy a srovnání",
    author: "Anna Sedláková",
    date: "2026-04-08",
    readingTimeMin: 11,
  },
  {
    slug: "energeticky-stitek-2026",
    href: "/clanek/energeticky-stitek-2026/",
    categorySlug: "domaci-spotrebice",
    category: "Domácí spotřebiče",
    categoryHref: "/domaci-spotrebice/",
    accent: "amber",
    badge: "Vysvětlení",
    title: "Co vlastně znamená nový energetický štítek 2026",
    perex:
      "Třídy A–G, hlučnost v dB, vodní cyklus, doba programu. Jak číst štítek a kdy je hodnota relevantní pro vaši domácnost.",
    coverPlaceholder: "Energetický štítek · 2026",
    author: "Anna Sedláková",
    date: "2026-03-20",
    readingTimeMin: 7,
  },

  // ---------- Zahrada ----------
  {
    slug: "aku-sekacky-srovnani",
    href: "/clanek/aku-sekacky-srovnani/",
    categorySlug: "zahrada",
    category: "Zahrada",
    categoryHref: "/zahrada/",
    accent: "green",
    badge: "Srovnání",
    title: "Aku sekačky 2026: které drží sklon a které se zaseknou",
    perex:
      "Osm aku sekaček ve stejných podmínkách. Měřili jsme dobu seče na nabití, hlučnost a chování v mokré trávě.",
    coverPlaceholder: "Aku sekačky · 8 modelů",
    author: "Pavel Hrubý",
    date: "2026-04-30",
    readingTimeMin: 11,
  },
  {
    slug: "jak-vybrat-foukac",
    href: "/clanek/jak-vybrat-foukac/",
    categorySlug: "zahrada",
    category: "Zahrada",
    categoryHref: "/zahrada/",
    accent: "green",
    badge: "Návod",
    title: "Jak vybrat foukač listí — aku vs. benzín vs. síťový",
    perex:
      "Síla proudu, hlučnost, výdrž a hmotnost. Kompletní průvodce pro malou zahradu i parky.",
    coverPlaceholder: "Foukače listí · průvodce",
    author: "Pavel Hrubý",
    date: "2026-04-02",
    readingTimeMin: 9,
  },

  // ---------- Auto ----------
  {
    slug: "zimni-pneumatiky-2026",
    href: "/clanek/zimni-pneumatiky-2026/",
    categorySlug: "auto",
    category: "Auto",
    categoryHref: "/auto/",
    accent: "red",
    badge: "Test 23 modelů",
    title: "Zimní pneumatiky 205/55 R16: kompletní test 23 modelů",
    perex:
      "Brzdná dráha na ledu, pohon na sněhu, hlučnost, opotřebení. Tabulka s doporučením podle stylu jízdy a typu auta.",
    coverPlaceholder: "Zimní pneu · 23 modelů · polygon Brno",
    author: "Jakub Novák",
    date: "2026-04-15",
    readingTimeMin: 16,
  },
  {
    slug: "jak-vybrat-autobaterii",
    href: "/clanek/jak-vybrat-autobaterii/",
    categorySlug: "auto",
    category: "Auto",
    categoryHref: "/auto/",
    accent: "red",
    badge: "Návod",
    title: "Jak vybrat autobaterii a kdy ji vyměnit",
    perex:
      "Kapacita, startovací proud, typ (AGM/EFB/lithium). Diagnostika životnosti a kdy se vyplatí preventivní výměna.",
    coverPlaceholder: "Autobaterie · průvodce",
    author: "Jakub Novák",
    date: "2026-03-05",
    readingTimeMin: 10,
  },

  // ---------- Návody ----------
  {
    slug: "jak-cist-eticky-kodex",
    href: "/clanek/jak-cist-eticky-kodex/",
    categorySlug: "navody",
    category: "Návody a tipy",
    categoryHref: "/navody/",
    accent: "blue",
    badge: "Tutoriál",
    title: "Jak číst editorial standards a metodiky recenzí",
    perex:
      "Co znamenají různé klauzule v etických kodexech recenzních webů. Na co si dát pozor a podle čeho rozeznat skrytou inzerci.",
    coverPlaceholder: "Etický kodex · průvodce",
    author: "Ivo Matěj",
    date: "2026-03-28",
    readingTimeMin: 9,
  },
];

export function getArticleCardsByCategory(categorySlug: string): ArticleCard[] {
  return articleCards
    .filter((card) => card.categorySlug === categorySlug)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedArticleCards(): ArticleCard[] {
  const featured = articleCards.find((c) => c.featured);
  const rest = articleCards
    .filter((c) => !c.featured)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  return featured ? [featured, ...rest] : rest;
}
