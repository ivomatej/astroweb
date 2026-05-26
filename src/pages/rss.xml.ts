import type { APIRoute } from "astro";
import { articleCards } from "../data/featured";
import { magazineArticles } from "../data/magazine";
import { interviews } from "../data/interviews";
import { allPeople } from "../data/people";

const SITE_URL = "https://www.recenzer.cz";
const FEED_URL = `${SITE_URL}/rss.xml`;
const FEED_TITLE = "Recenzer.cz — recenze, testy, srovnání";
const FEED_DESCRIPTION =
  "Nezávislý český spotřebitelský magazín. Hloubkové recenze, srovnání, návody a testy z naší vlastní laboratoře. Pračky, elektronářadí, auto, zahrada, elektronika.";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(s: string): string {
  return s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

function authorName(slug: string): string {
  return allPeople.find((p) => p.slug === slug)?.name ?? slug;
}

/** Convert ISO date (YYYY-MM-DD or full ISO) → RFC 822 for RSS pubDate. */
function rfc822(iso: string): string {
  const d = new Date(iso.length === 10 ? `${iso}T09:00:00Z` : iso);
  return d.toUTCString();
}

interface FeedItem {
  title: string;
  href: string;
  description: string;
  pubDate: string; // ISO
  author?: string;
  category?: string;
}

// Build feed items from articles (recenze + clanek), magazine, interviews
const items: FeedItem[] = [
  // Production-published články (z /clanek/[slug], /recenze/[slug], etc.)
  {
    title: "Aku brusky 2026: jak vybrat skutečně dobrou aku brusku",
    href: "/clanek/aku-brusky/",
    description:
      "Šest měsíců testů, 23 modelů v ruce, 4 rozhovory s profesionálními zámečníky. Co rozhoduje o výběru aku brusky — a co je naopak jen marketing.",
    pubDate: "2026-05-22",
    author: "Ivo Matěj",
    category: "Elektronářadí",
  },
  {
    title: "Nejlepší pračky 2026 — TOP 7 modelů z testu",
    href: "/nejlepsi-pracky-2026/",
    description:
      "Sedm nejlepších praček 2026 podle naší laboratoře — Bosch, Miele, LG, Whirlpool, Beko. Test 30 cyklů praní, energetická spotřeba, hlučnost.",
    pubDate: "2026-05-12",
    author: "Alena Rajnochová",
    category: "Domácí spotřebiče",
  },
  {
    title: "Bosch vs Miele — která pračka je lepší?",
    href: "/bosch-vs-miele-pracky/",
    description:
      "Detailní 7-kolové srovnání dvou nejprodávanějších značek pračka. TCO 10 let, audience profily, verdikt pro různé typy domácností.",
    pubDate: "2026-03-28",
    author: "Ivo Matěj",
    category: "Domácí spotřebiče",
  },
  {
    title: "Bosch WGG244A0BY recenze 2026",
    href: "/recenze/bosch-wgg244a0by/",
    description:
      "Editor's Choice 2026 v segmentu do 16 000 Kč. Detailní 6-dimenzionální recenze po 30 cyklech testu v laboratoři. EcoSilence motor s 10letou zárukou.",
    pubDate: "2026-05-21",
    author: "Ivo Matěj",
    category: "Domácí spotřebiče",
  },
  // Magazín
  ...magazineArticles.map((a) => ({
    title: a.title,
    href: `/magazin/${a.slug}/`,
    description: a.perex,
    pubDate: a.publishedAt,
    author: authorName(a.authorSlug),
    category: a.category,
  })),
  // Rozhovory
  ...interviews.map((i) => ({
    title: i.title,
    href: `/rozhovory/${i.slug}/`,
    description: i.perex,
    pubDate: i.publishedAt,
    author: authorName(i.interviewerSlug),
    category: i.category,
  })),
  // Stub karty (chystané články z articleCards)
  ...articleCards
    .filter((c) => !["aku-brusky"].includes(c.slug))
    .map((c) => ({
      title: stripHtml(c.title),
      href: c.href,
      description: c.perex,
      pubDate: c.date,
      author: c.author,
      category: c.category,
    })),
];

// Sort by pubDate desc
items.sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));

// Take top 50 (best practice for RSS — not too long)
const limited = items.slice(0, 50);

export const GET: APIRoute = () => {
  const latestDate = limited[0]?.pubDate ?? new Date().toISOString().slice(0, 10);
  const lastBuildDate = rfc822(new Date().toISOString());

  const itemsXml = limited
    .map((it) => {
      const url = `${SITE_URL}${it.href}`;
      return `    <item>
      <title>${escapeXml(it.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <description>${escapeXml(it.description)}</description>
      <pubDate>${rfc822(it.pubDate)}</pubDate>
      ${it.author ? `<dc:creator><![CDATA[${it.author}]]></dc:creator>` : ""}
      ${it.category ? `<category>${escapeXml(it.category)}</category>` : ""}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml(FEED_DESCRIPTION)}</description>
    <language>cs</language>
    <copyright>© Converso Group s.r.o. — citation with attribution allowed</copyright>
    <managingEditor>redakce@recenzer.cz (Ivo Matěj)</managingEditor>
    <webMaster>redakce@recenzer.cz (Ivo Matěj)</webMaster>
    <pubDate>${rfc822(latestDate)}</pubDate>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Recenzer.cz Static Site Generator (Astro)</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <atom:link href="${FEED_URL}" rel="self" type="application/rss+xml"/>
    <image>
      <url>${SITE_URL}/favicon-192x192.png</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${SITE_URL}/</link>
      <width>192</width>
      <height>192</height>
    </image>
${itemsXml}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=1800",
    },
  });
};
