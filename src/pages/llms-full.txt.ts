// Dynamický llms-full.txt (návrh standardu llmstxt.org) — „celá kniha v jednom
// souboru": kompletní textový obsah editorial stránek + slovník + souhrn rubrik
// a článků, zploštěný do markdownu. Agent si načte vše naráz, bez dalších requestů.
//
// Drží jen to, co má agent obsahově znát (editorial stránky z backendu + slovník
// + popisy rubrik); články jen jako rozcestník (perex + URL), ať soubor u ~5000
// článků nenabobtná. Servíruje se jako text/markdown na /llms-full.txt.
import type { APIRoute } from "astro";
import { site } from "../config/site";
import { pageList, getPageBySlug } from "../data/pages";
import { categories } from "../data/categories";
import { articleCards } from "../data/featured";
import { glossaryTerms } from "../data/glossary";

const MAX_ARTICLES = 100;

/** HTML → prostý text (zachová odstavce jako dvojité odřádkování). */
function htmlToText(html?: string): string {
  return (html ?? "")
    .replace(/<\s*(br|\/p|\/div|\/h[1-6]|\/li)\s*>/gi, "\n")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}
const oneLine = (s?: string): string =>
  (s ?? "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

export const GET: APIRoute = async ({ site: siteUrl }) => {
  const base = (siteUrl?.toString() ?? `https://www.${site.brand.domain}`).replace(/\/+$/, "");
  const host = (() => {
    try {
      return new URL(base).host;
    } catch {
      return site.brand.domain;
    }
  })();
  const abs = (p: string): string =>
    /^https?:\/\//.test(p) ? p : base + (p.startsWith("/") ? p : `/${p}`);

  // Právní / utility slugy (z footer.legal) — plný text agent nepotřebuje.
  const legalSlugs = new Set(
    site.footer.legal.map((l) => l.href.replace(/^\/+|\/+$/g, "")),
  );

  const lines: string[] = [];
  lines.push(`# ${site.brand.name} — kompletní obsah`, "");
  lines.push(`> ${oneLine(site.brand.tagline)}`, "");
  lines.push(
    `Web ${site.brand.name} (${host}), nezávislý spotřebitelský průvodce nákupem, v provozu od roku ${site.brand.foundedYear}.`,
    "",
  );

  // Editorial stránky — plný text z backendu (mimo právní; ty agent obsahově
  // nepotřebuje). pageList je při nedostupném backendu prázdný → sekce se vynechá.
  for (const card of pageList) {
    if (!card.slug || legalSlugs.has(card.slug)) continue;
    let page;
    try {
      page = await getPageBySlug(card.slug);
    } catch {
      continue;
    }
    if (!page) continue;
    lines.push(`## ${page.title || card.title || card.slug}`, "");
    lines.push(abs(page.href || `/${card.slug}/`), "");
    if (page.perex) lines.push(oneLine(page.perex), "");
    for (const s of page.sections ?? []) {
      if (s.title) lines.push(`### ${oneLine(s.title)}`, "");
      const body = htmlToText(s.bodyHtml);
      if (body) lines.push(body, "");
    }
  }

  // Rubriky — název + popis (orientace v obsahové struktuře).
  if (categories.length) {
    lines.push("## Rubriky", "");
    for (const c of categories) {
      if (!c.slug) continue;
      lines.push(`### ${c.name}`, "");
      lines.push(abs(c.href), "");
      const desc = c.description || c.tagline;
      if (desc) lines.push(oneLine(desc), "");
    }
  }

  // Slovník — pojem + krátká definice (+ delší, pokud je).
  if (glossaryTerms.length) {
    lines.push("## Slovník pojmů", "");
    for (const t of glossaryTerms) {
      lines.push(`### ${oneLine(t.term)}`, "");
      lines.push(abs(`/slovnik/pojem/${t.slug}/`), "");
      if (t.shortDef) lines.push(oneLine(t.shortDef), "");
      const long = htmlToText(t.longDefHtml);
      if (long && long !== oneLine(t.shortDef)) lines.push(long, "");
    }
  }

  // Články — jen rozcestník (perex + URL), ať soubor u tisíců článků nenabobtná.
  if (articleCards.length) {
    const newest = [...articleCards]
      .filter((c) => c.slug)
      .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
      .slice(0, MAX_ARTICLES);
    lines.push("## Nejnovější články", "");
    for (const c of newest) {
      lines.push(`- [${oneLine(c.title)}](${abs(c.href)})${c.perex ? `: ${oneLine(c.perex)}` : ""}`);
    }
    lines.push("");
  }

  return new Response(lines.join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n", {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
};
