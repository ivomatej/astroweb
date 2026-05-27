/**
 * Search index — JSON served at /search-index.json.
 *
 * Aggregates every published / browsable URL into one flat array so the
 * /hledat/ page can run a vanilla-JS substring + token match without any
 * server-side help.
 *
 * Schema per entry:
 *   {
 *     url:    "/clanek/aku-brusky/",
 *     title:  "Aku brusky 2026",
 *     desc:   "...short text...",     // shown under result
 *     kind:   "Článek" | "Recenze" | "Slovník" | "Značka" | "Rubrika"
 *           | "Rozhovor" | "Magazín" | "Diskuze" | "Stránka" | "Autor",
 *     hint?:  "Elektronářadí · pillar"   // optional secondary line
 *     date?:  "2026-05-22"               // ISO; rendered as "22. 5. 2026"
 *     author?:"Ivo Matěj"                // primary author / source / garant
 *     tags?:  ["bruska","aku","makita"]  // extra keywords for match score
 *   }
 *
 * Kept thin on purpose — bigger search corpus would belong on a backend.
 */

import type { APIRoute } from "astro";

import { articles } from "../data/articles";
import { categories } from "../data/categories";
import { glossaryTerms, glossaryCategories } from "../data/glossary";
import { brands } from "../data/brands";
import { magazineArticles } from "../data/magazine";
import { interviews } from "../data/interviews";
import { forumThreads } from "../data/forum";
import { allPeople, getPersonBySlug } from "../data/people";

interface SearchEntry {
  url: string;
  title: string;
  desc: string;
  kind: string;
  hint?: string;
  date?: string;
  author?: string;
  tags?: string[];
}

/** Strip HTML, collapse whitespace, hard-truncate. */
function clean(s: string | undefined, max = 200): string {
  if (!s) return "";
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

const entries: SearchEntry[] = [];

// ─── Articles (clanek/*) ──────────────────────────────────────────────────
for (const a of articles) {
  entries.push({
    url: `/clanek/${a.slug}/`,
    title: clean(a.title, 140),
    desc: clean(a.perex, 220),
    kind: a.kind === "pillar" ? "Článek (pillar)" : "Článek",
    hint: a.category,
    date: a.dates.updatedAt ?? a.dates.publishedAt,
    author: a.author.name,
    tags: [a.category.toLowerCase(), a.slug],
  });
}

// Standalone TOP-X / comparison / product templates that aren't in the articles[] array.
entries.push(
  {
    url: "/nejlepsi-pracky-2026/",
    title: "Nejlepší pračky 2026 — TOP 7",
    desc: "Sedm pračet do 25 000 Kč podrobně testovaných 6 týdnů v laboratoři. Pořadí podle životnosti, spotřeby a hlučnosti.",
    kind: "Žebříček",
    hint: "Domácí spotřebiče · TOP",
    date: "2026-05-12",
    author: "Marie Müllerová",
    tags: ["pracky", "pračky", "bosch", "miele", "lg", "beko", "samsung"],
  },
  {
    url: "/bosch-vs-miele-pracky/",
    title: "Bosch vs Miele pračky — který výrobce vydrží 15 let?",
    desc: "Srovnání dvou nejprodávanějších německých značek. Cena, životnost, opravitelnost, dostupnost náhradních dílů.",
    kind: "Srovnání",
    hint: "Domácí spotřebiče · vs.",
    date: "2026-04-08",
    author: "Marie Müllerová",
    tags: ["bosch", "miele", "pracky", "srovnani"],
  },
);

// ─── Kategorie (rubriky) ──────────────────────────────────────────────────
for (const c of categories) {
  entries.push({
    url: c.href,
    title: c.name,
    desc: c.description,
    kind: "Rubrika",
    hint: c.tagline,
    tags: c.topics.map((t) => t.toLowerCase()),
  });
}

// ─── Slovník — termíny + kategorie ────────────────────────────────────────
for (const t of glossaryTerms) {
  entries.push({
    url: `/slovnik/pojem/${t.slug}/`,
    title: t.term,
    desc: t.shortDef,
    kind: "Slovník",
    hint: glossaryCategories.find((c) => c.slug === t.categorySlug)?.name,
    date: t.updatedAt,
    author: t.approvedBy,
    tags: t.aliases?.map((a) => a.toLowerCase()) ?? [],
  });
}
for (const c of glossaryCategories) {
  entries.push({
    url: `/slovnik/${c.slug}/`,
    title: `Slovník — ${c.name}`,
    desc: c.description,
    kind: "Slovník (kategorie)",
  });
}
entries.push({
  url: "/slovnik/",
  title: "Slovník pojmů",
  desc: "Odborný slovník pro elektronářadí, spotřebiče, zahradu, auto a elektroniku.",
  kind: "Rozcestník",
});

// ─── Značky (brands) ──────────────────────────────────────────────────────
for (const b of brands) {
  entries.push({
    url: `/znacky/${b.slug}/`,
    title: b.name,
    desc: b.tagline,
    kind: "Značka",
    hint: b.country,
    tags: [b.slug],
  });
}
entries.push({
  url: "/znacky/",
  title: "Značky výrobců",
  desc: "Přehled značek, které testujeme — od premiových po rozpočtové.",
  kind: "Rozcestník",
});

// ─── Magazín ──────────────────────────────────────────────────────────────
for (const m of magazineArticles) {
  entries.push({
    url: `/magazin/${m.slug}/`,
    title: m.title,
    desc: clean(m.perex, 220),
    kind: "Magazín",
    hint: m.category,
    date: m.publishedAt,
    author: getPersonBySlug(m.authorSlug)?.name,
  });
}
entries.push({
  url: "/magazin/",
  title: "Magazín / Novinky",
  desc: "Kratší texty, novinky z oboru, komentáře.",
  kind: "Rozcestník",
});

// ─── Rozhovory ────────────────────────────────────────────────────────────
for (const i of interviews) {
  const interviewee = getPersonBySlug(i.intervieweeSlug);
  entries.push({
    url: `/rozhovory/${i.slug}/`,
    title: i.title,
    desc: clean(i.perex, 220),
    kind: "Rozhovor",
    hint: i.category,
    date: i.publishedAt,
    author: interviewee?.name,
  });
}
entries.push({
  url: "/rozhovory/",
  title: "Rozhovory s odborníky",
  desc: "Garanti, řemeslníci, výzkumníci — lidé, kteří vědí.",
  kind: "Rozcestník",
});

// ─── Diskuze (forum) ──────────────────────────────────────────────────────
for (const t of forumThreads) {
  entries.push({
    url: `/diskuze/${t.slug}/`,
    title: t.title,
    desc: clean(t.originalPost.bodyHtml, 180),
    kind: "Diskuze",
    hint: `${t.replyCount} odpovědí · ${t.viewCount} zobrazení`,
    date: t.lastActivityAt,
    author: t.authorName,
  });
}
entries.push({
  url: "/diskuze/",
  title: "Diskuze / Fórum",
  desc: "Komunitní fórum Recenzeru — ptejte se a sdílejte zkušenosti.",
  kind: "Rozcestník",
});

// ─── Autoři ───────────────────────────────────────────────────────────────
for (const p of allPeople) {
  entries.push({
    url: `/autor/${p.slug}/`,
    title: p.name,
    desc: p.role,
    kind: "Autor",
    hint: p.kind === "internal" ? "Interní redakce" : "Externí expert / garant",
    tags: [p.slug],
  });
}
entries.push({
  url: "/autori/",
  title: "Autoři redakce",
  desc: "Interní redakce + externí garanti.",
  kind: "Rozcestník",
});

// ─── Statické stránky (důvěra, kontakt, právní, ediční) ──────────────────
const staticPages: SearchEntry[] = [
  { url: "/o-nas/", title: "O nás", desc: "Kdo jsme, jak Recenzer.cz vznikl a proč.", kind: "Stránka" },
  { url: "/sefredaktor/", title: "Šéfredaktor — Ivo Matej", desc: "Profil odpovědného redaktora.", kind: "Stránka" },
  { url: "/impressum/", title: "Impressum", desc: "Provozovatel, IČ, DIČ, právní informace, e-mailový adresář redakce.", kind: "Stránka" },
  { url: "/kontakt/", title: "Kontakt", desc: "Jak nás kontaktovat — redakce, obchod, press, kariéra.", kind: "Stránka" },
  { url: "/press/", title: "Press / Media kit", desc: "Tiskové zprávy, factsheet, loga, fotografie k použití.", kind: "Stránka" },
  { url: "/kariera/", title: "Kariéra", desc: "Otevřené pozice v redakci a laboratoři.", kind: "Stránka" },
  { url: "/pro-znacky-firmy-agentury/", title: "Pro značky, firmy a agentury", desc: "Spolupráce, sponzorské zprávy, sample request policy.", kind: "Stránka" },
  { url: "/kodex-ferove-firmy/", title: "Kodex férové firmy", desc: "Pravidla, kterými se řídíme při spolupráci s výrobci.", kind: "Stránka" },
  { url: "/stante-se-testerem/", title: "Staňte se testerem", desc: "Jak se přihlásit jako externí tester redakce.", kind: "Stránka" },
  { url: "/newsletter/", title: "Newsletter", desc: "Nejlepší recenze v jednom mailu, 1× měsíčně, bez spamu.", kind: "Stránka" },

  { url: "/metodika/", title: "Metodika testů", desc: "Jak testujeme — protokoly, vzorky, statistická signifikance.", kind: "Standardy" },
  { url: "/jak-testujeme/", title: "Jak testujeme", desc: "Rozcestník metodik pro jednotlivé kategorie.", kind: "Standardy" },
  { url: "/jak-testujeme/pracky/", title: "Jak testujeme pračky", desc: "6týdenní protokol, 30 cyklů, ISO 3744 hlučnost.", kind: "Standardy" },
  { url: "/testovaci-laborator/", title: "Testovací laboratoř Brno", desc: "180 m² laboratoře, 33 přístrojů, 7 disciplín, video walk-through.", kind: "Standardy" },
  { url: "/eticky-kodex/", title: "Etický kodex", desc: "Pravidla nezávislosti, affiliate transparency, fact-checking.", kind: "Standardy" },
  { url: "/redakcni-zasady/", title: "Redakční zásady", desc: "Schvalování článku, garantský podpis, retrospektivní revize.", kind: "Standardy" },
  { url: "/overovani-faktu/", title: "Ověřování faktů", desc: "3-krokový fact-check workflow před publikací.", kind: "Standardy" },
  { url: "/duveryhodne-zdroje/", title: "Důvěryhodné zdroje", desc: "ISO, IEC, Stiftung Warentest, dTest, RTINGS — komu věříme.", kind: "Standardy" },
  { url: "/pouzivani-ai/", title: "Jak používáme AI", desc: "Kde nám LLM pomáhají a kde jsou explicitně zakázané.", kind: "Standardy" },
  { url: "/typy-obsahu/", title: "Typy obsahu", desc: "Pillar, recenze, srovnání, návod, magazín — rozdíly.", kind: "Standardy" },
  { url: "/affiliate-disclosure/", title: "Affiliate disclosure", desc: "Jak fungují affiliate odkazy a co znamenají pro hodnocení.", kind: "Standardy" },

  { url: "/oprava-chyb/", title: "Nahlásit chybu", desc: "Formulář pro nahlášení chyby ve článku.", kind: "Korekce" },
  { url: "/opravy/", title: "Archiv oprav", desc: "Veřejný errata archiv jednotlivých korekcí od ledna 2025.", kind: "Korekce" },
  { url: "/nase-chyby/", title: "Naše chyby", desc: "Systémové omyly redakce — co jsme se z nich naučili a jak se změnila metodika.", kind: "Korekce" },
  { url: "/aktualizace/", title: "Aktualizace webu", desc: "Co se na webu mění — nové stránky, nové metodiky, opravy.", kind: "Korekce" },

  { url: "/zasady-osobnich-udaju/", title: "Zásady ochrany osobních údajů", desc: "GDPR — co s vašimi daty děláme a neděláme.", kind: "Právní" },
  { url: "/zasady-cookies/", title: "Zásady cookies", desc: "Cookies, které ukládáme, a jak je můžete zakázat.", kind: "Právní" },
  { url: "/podminky-pouziti/", title: "Podmínky použití", desc: "Pravidla využívání obsahu Recenzeru.", kind: "Právní" },
  { url: "/pristupnost/", title: "Prohlášení o přístupnosti", desc: "WCAG 2.1 AA — soulad, omezení, kontakt na koordinátora.", kind: "Právní" },
  { url: "/mapa-webu/", title: "Mapa webu", desc: "Strukturovaný přehled všech stránek.", kind: "Navigace" },
];
entries.push(...staticPages);

// E-shopy
entries.push({
  url: "/recenze-eshopu/",
  title: "Recenze e-shopů",
  desc: "Hodnocení e-shopů, kde se nakupují produkty, které testujeme.",
  kind: "Rozcestník",
});

// ─── Export ──────────────────────────────────────────────────────────────
const body = JSON.stringify({
  generatedAt: new Date().toISOString(),
  count: entries.length,
  entries,
});

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // Long edge cache, content-hashed by date stamp inside the body.
      "Cache-Control": "public, max-age=300, s-maxage=600",
    },
  });
