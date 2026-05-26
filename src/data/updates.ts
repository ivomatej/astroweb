/**
 * Centrální registr aktualizací napříč webem.
 *
 * Agreguje aktualizace ze všech článků + site-wide aktualizace
 * (nová stránka, redesign, změna metodiky, audit).
 *
 * Slouží jako zdroj pro:
 * - /aktualizace/ — HTML feed stránka (crawlable)
 * - /aktualizace.xml — Atom feed (subscribable)
 *
 * **Pozor:** tento feed se liší od /opravy/ (errata) a /nase-chyby/ (systemic mistakes).
 * Aktualizace = běžný refresh / doplnění / přepracování,
 * ne nutně chyba ani systémové poučení.
 */

export type SiteUpdateKind =
  | "publish" // První publikace nového článku / stránky
  | "major" // Velká úprava (přepracovaná kapitola, nová struktura)
  | "minor" // Drobná úprava (ceny, dostupnost, doplnění odkazu)
  | "content" // Doplnění nové sekce do existujícího článku
  | "refresh" // Periodický refresh (roční update, kontrola dat)
  | "addition" // Přidán nový model / produkt do žebříčku
  | "redesign" // Změna designu / layoutu
  | "policy" // Změna editoriální politiky
  | "feature" // Nová funkce na webu
  | "correction" // Oprava chyby (cross-link na /opravy/)
  | "retraction" // Dočasné stažení / přepracování
  | "expansion"; // Rozšíření o nové měření, sekci, FAQ

export interface SiteUpdate {
  /** Slug-style ID pro stabilní URL kotvu (#aktualizace-id). */
  id: string;
  /** ISO datum aktualizace (YYYY-MM-DD). */
  date: string;
  /** Typ aktualizace. */
  kind: SiteUpdateKind;
  /** Titulek aktualizace. */
  title: string;
  /** Krátký popis (HTML inline allowed). */
  description: string;
  /** URL dotčeného článku / stránky (volitelné, chybí pro site-wide). */
  articleHref?: string;
  /** Titulek dotčeného článku / stránky. */
  articleTitle?: string;
  /** Kategorie pro filtr. */
  category?: string;
  /** Kdo aktualizaci provedl. */
  author?: string;
  /** Volitelný odkaz na konkrétní sekci nebo související stránku. */
  relatedHref?: string;
  /** Volitelný label pro odkaz. */
  relatedLabel?: string;
}

/**
 * Statický seznam — pro prototyp.
 * V produkci bude generovaný z backendu z events log po každém publish/edit.
 */
export const siteUpdates: SiteUpdate[] = [
  // 2026
  {
    id: "2026-05-21-pouzivani-ai-launch",
    date: "2026-05-21",
    kind: "policy",
    title: "Spuštěna transparentní AI politika verze 2.1",
    description:
      "Detailně popisujeme, jak používáme Claude, GPT-4 a Perplexity pro research, monitoring cen, zpracování dat a fact-checking. 7 use-cases, 7 no-AI zón, hranice člověk/AI.",
    articleHref: "/pouzivani-ai/",
    articleTitle: "Jak používáme AI",
    category: "Editorial standards",
    author: "Ivo Matěj",
    relatedHref: "/redakcni-zasady/#ai",
    relatedLabel: "Sekce 05 v Redakčních zásadách",
  },
  {
    id: "2026-05-21-nase-chyby-launch",
    date: "2026-05-21",
    kind: "feature",
    title: "Nová meta-stránka „Naše chyby“",
    description:
      "8 systémových omylů redakce od roku 2018 — co jsme doporučili, kde jsme se zmýlili, co jsme se naučili a jak jsme změnili metodiku.",
    articleHref: "/nase-chyby/",
    articleTitle: "Naše chyby",
    category: "Editorial standards",
    author: "Ivo Matěj",
  },
  {
    id: "2026-05-21-impressum-launch",
    date: "2026-05-21",
    kind: "feature",
    title: "Doplněna stránka Impressum s úplnými údaji o provozovateli",
    description:
      "Converso Group s.r.o., IČO 09322035, DIČ CZ09322035, sídlo Jankovcova 1535/2a, Praha 7. Kompletní právní a kontaktní údaje.",
    articleHref: "/impressum/",
    articleTitle: "Impressum",
    category: "Legal",
    author: "Ivo Matěj",
  },
  {
    id: "2026-05-21-laboratory-evidence",
    date: "2026-05-21",
    kind: "expansion",
    title: "Rozšířena stránka Testovací laboratoř — adresa, foto, S/N přístrojů",
    description:
      "Doplněna konkrétní adresa v Brně-Židenicích, fotogalerie reálného prostoru, video walk-through (2:14), tabulka 12 přístrojů včetně sériových čísel a kalibračních dat. Status pre-akreditace ČSN ISO/IEC 17025.",
    articleHref: "/testovaci-laborator/",
    articleTitle: "Testovací laboratoř",
    category: "Editorial standards",
    author: "Martin Veselý",
  },
  {
    id: "2026-05-22-aku-brusky-major-refresh",
    date: "2026-05-22",
    kind: "major",
    title: "Aku brusky 2026 — přidán test 4 nových modelů",
    description:
      "DeWalt DCG406, Milwaukee M18 FUEL, Metabo WPB 18 LTX BL 125 Quick a Bosch GWS 18V-15 SC. Aktualizace srovnávací tabulky a doporučení.",
    articleHref: "/clanek/aku-brusky/",
    articleTitle: "Aku brusky 2026: jak vybrat",
    category: "Elektronářadí",
    author: "Ivo Matěj",
  },
  {
    id: "2026-05-18-aku-brusky-bosch-moment",
    date: "2026-05-18",
    kind: "correction",
    title: "Aku brusky 2026 — opravena hodnota momentu u Bosch GWS 18V-15 C",
    description:
      "Hodnota opravena z 5,5 Nm na 6,0 Nm dle aktualizovaného datasheetu výrobce (revize 04/2026). Upozornil čtenář Martin K. z Brna.",
    articleHref: "/clanek/aku-brusky/",
    articleTitle: "Aku brusky 2026",
    category: "Elektronářadí",
    author: "Ivo Matěj",
    relatedHref: "/opravy/#2026-05-18",
    relatedLabel: "Detail opravy v archivu",
  },
  {
    id: "2026-05-12-pracky-cena-update",
    date: "2026-05-12",
    kind: "minor",
    title: "Nejlepší pračky 2026 — cenový refresh",
    description:
      "Cena Bosch Serie 8 aktualizována z 19 990 Kč na 21 590 Kč. Ostatní ceny zkontrolovány bez změn.",
    articleHref: "/nejlepsi-pracky-2026/",
    articleTitle: "Nejlepší pračky 2026",
    category: "Domácí spotřebiče",
    author: "Interní monitoring cen (AI agent)",
  },
  {
    id: "2026-05-08-bosch-wgg-launch",
    date: "2026-05-08",
    kind: "publish",
    title: "Nová produktová recenze: Bosch WGG244A0BY",
    description:
      "Detailní 6-dimenzionální recenze pračky Bosch po 30 cyklech testu v laboratoři. Editor's Choice 2026 v segmentu do 16 tisíc Kč.",
    articleHref: "/recenze/bosch-wgg244a0by/",
    articleTitle: "Bosch WGG244A0BY recenze",
    category: "Domácí spotřebiče",
    author: "Ivo Matěj",
  },
  {
    id: "2026-04-30-pneu-vazena-formule",
    date: "2026-04-30",
    kind: "major",
    title: "Změna výpočtu skóre v testu zimních pneumatik",
    description:
      "Aritmetický průměr nahrazen bezpečnostně váženým skóre (sníh × 2, led × 1,5, mokro × 1). Detail v <a href=\"/nase-chyby/\">Naše chyby</a> bod 2020.",
    articleHref: "/clanek/zimni-pneumatiky-205-55-r16/",
    articleTitle: "Zimní pneumatiky 205/55 R16",
    category: "Auto",
    author: "Tomáš Veselý",
  },
  {
    id: "2026-04-22-bosch-vs-miele-launch",
    date: "2026-04-22",
    kind: "publish",
    title: "Nový srovnávací článek: Bosch vs Miele pračky",
    description:
      "7 head-to-head kol, TCO 10 let, audience profiles. Verdikt: Bosch pro 70 % kupujících, Miele pro náročné na životnost.",
    articleHref: "/bosch-vs-miele-pracky/",
    articleTitle: "Bosch vs Miele pračky",
    category: "Domácí spotřebiče",
    author: "Ivo Matěj",
  },
  {
    id: "2026-04-15-aku-brusky-mods-doplneni",
    date: "2026-04-15",
    kind: "expansion",
    title: "Aku brusky — rozšíření o sekci bezpečnostních modů",
    description:
      "Doplněn celý odstavec o KickBack Control, Anti-Vibration a brake. S video ukázkami z laboratoře.",
    articleHref: "/clanek/aku-brusky/",
    articleTitle: "Aku brusky 2026",
    category: "Elektronářadí",
    author: "Jakub Novák (garant)",
  },
  {
    id: "2026-03-28-bosch-miele-miele-rok",
    date: "2026-03-28",
    kind: "correction",
    title: "Srovnání Bosch vs Miele — opravena chyba v roce založení Miele",
    description:
      "Rok založení firmy Miele opraven z 1898 na 1899. Detail v archivu oprav.",
    articleHref: "/bosch-vs-miele-pracky/",
    articleTitle: "Bosch vs Miele pračky",
    category: "Domácí spotřebiče",
    author: "Ivo Matěj",
    relatedHref: "/opravy/#2026-03-28",
    relatedLabel: "Detail v archivu",
  },
  {
    id: "2026-03-15-design-refresh-cookies",
    date: "2026-03-15",
    kind: "redesign",
    title: "Nová cookie lišta a granulární modal",
    description:
      "Implementován nový cookie consent — minimalistická lišta + modal s kategoriemi (nutné, statistiky, marketing). Localstorage stav, viditelný pod paticí.",
    category: "Site features",
    author: "Ivo Matěj",
  },
  {
    id: "2026-02-25-xiaomi-stazeni-retraction",
    date: "2026-02-25",
    kind: "retraction",
    title: "Stažení článku Xiaomi Smart Air Purifier 4 Pro",
    description:
      "Naše naměřené CADR byly o 25 % horší, než výrobce uvádí. Po rekalibraci hlukoměru jsme znovu změřili — hodnoty teď sedí. Článek publikován v opravené verzi.",
    category: "Domácí spotřebiče",
    author: "Adam Bartoš (technik laboratoře)",
    relatedHref: "/opravy/#2025-02-25",
    relatedLabel: "Detail retrakce",
  },
  {
    id: "2026-02-08-monitoring-cen-launch",
    date: "2026-02-08",
    kind: "feature",
    title: "Spuštěn automatický monitoring cen ve 12 e-shopech",
    description:
      "AI agent obchází Heureku, Alzu, Datart a další 9 e-shopů každých 24 hodin. Aktualizuje 1 240 sledovaných produktů. Při změně > 15 % notifikace redaktorovi.",
    category: "Site features",
    author: "Ivo Matěj",
    relatedHref: "/pouzivani-ai/",
    relatedLabel: "Detail v AI politice",
  },
  {
    id: "2026-01-25-i-size-sjednoceni",
    date: "2026-01-25",
    kind: "minor",
    title: "Sjednocení terminologie i-Size napříč články o autosedačkách",
    description:
      "Místo střídavého „i-Size / iSize / I-Size“ jednotné „i-Size“ podle EU 129.",
    category: "Děti",
    author: "Lucie Horáková (editorka)",
  },

  // 2025
  {
    id: "2025-12-18-roborock-update",
    date: "2025-12-18",
    kind: "correction",
    title: "Roboty 2025 — Roborock S8 Pro Ultra — oprava o paměti map",
    description:
      "Uvedeno chybně „bez paměti“, správně „uloží až 4 mapy“. Upozornil čtenář Daniel V.",
    articleHref: "/clanek/roboticke-vysavace-2025/",
    articleTitle: "Robotické vysavače 2025",
    category: "Domácí spotřebiče",
    author: "Marie Müllerová",
  },
  {
    id: "2025-11-30-lenovo-stazeni",
    date: "2025-11-30",
    kind: "addition",
    title: "TOP 5 tabletů — Lenovo Tab M9 nahrazen Tab M10 Plus 3rd gen",
    description:
      "M9 ukončen prodejem v ČR + výrobce stáhl Android update support. M10 Plus 3rd gen má lepší výdrž, podporu do 2028.",
    articleHref: "/clanek/tablety-studenti-2025/",
    articleTitle: "Nejlepší tablety pro studenty 2025",
    category: "Elektronika",
    author: "Marie Müllerová",
  },
  {
    id: "2025-11-12-michelin-brzdna",
    date: "2025-11-12",
    kind: "correction",
    title: "Letní pneumatiky 225/45 R17 — aritmetická chyba u Michelin Primacy 4",
    description:
      "Brzdná dráha na mokru opravená z 33,5 m na 34,8 m. Předchozí hodnota byla špatným průměrem ze 3 měření.",
    articleHref: "/clanek/letni-pneumatiky-225-45-r17/",
    articleTitle: "Letní pneumatiky 225/45 R17",
    category: "Auto",
    author: "Tomáš Veselý",
    relatedHref: "/opravy/#2025-11-12",
    relatedLabel: "Detail v archivu",
  },
  {
    id: "2025-10-22-notebooky-odkazy",
    date: "2025-10-22",
    kind: "minor",
    title: "Notebooky do 25 000 — aktualizace odkazů Alza po změně URL",
    description:
      "4 odkazy přepsány po refaktoringu URL struktury na Alza.cz (chybové 404 → nové URL).",
    articleHref: "/clanek/notebooky-do-25k/",
    articleTitle: "Notebooky do 25 000 Kč",
    category: "Elektronika",
    author: "Marie Müllerová",
  },
  {
    id: "2025-09-14-babysense-warning",
    date: "2025-09-14",
    kind: "retraction",
    title: "Babysense 7 monitor dechu — stažen pro doplnění varování",
    description:
      "Výrobce vydal varování o falešném detekování pohybu v módu „mobile“ (firmware před 4.2.1). Recenze stažena na 14 dní, znovu publikována s varováním v perexu.",
    articleHref: "/clanek/babysense-7-recenze/",
    articleTitle: "Babysense 7 recenze",
    category: "Děti",
    author: "MUDr. Barbora Černá (garantka)",
    relatedHref: "/nase-chyby/",
    relatedLabel: "Systémové ponaučení",
  },
  {
    id: "2025-08-28-pracky-stitek-A",
    date: "2025-08-28",
    kind: "correction",
    title: "Spotřeba praček — upřesnění jednotky štítku A",
    description:
      "Hodnota „180 kWh“ doplněna na „180 kWh / 100 cyklů“ podle normalizovaného testu IEC 60456.",
    articleHref: "/clanek/spotreba-pracek/",
    articleTitle: "Spotřeba praček — štítek A",
    category: "Domácí spotřebiče",
    author: "Alena Rajnochová",
  },
  {
    id: "2025-06-15-susicky-tepelne-cerpadlo",
    date: "2025-06-15",
    kind: "expansion",
    title: "Jak vybrat sušičku — doplněn odstavec o tepelných čerpadlech",
    description:
      "Detailní srovnání tepelných čerpadel vs kondenzačních sušiček, včetně tabulky spotřeby a TCO 10 let.",
    articleHref: "/clanek/jak-vybrat-susicku/",
    articleTitle: "Jak vybrat sušičku prádla",
    category: "Domácí spotřebiče",
    author: "Alena Rajnochová",
  },
  {
    id: "2025-05-30-tefal-konvice-odebrana",
    date: "2025-05-30",
    kind: "addition",
    title: "TOP rychlovarné konvice — Tefal KO 7508 nahrazena Bosch TWK7203",
    description:
      "Tefal vykázala masivní swarm negativních recenzí o těsnění po 6 měsících. Nahrazena Bosch TWK7203 jako spolehlivější alternativa.",
    articleHref: "/clanek/rychlovarne-konvice-2025/",
    articleTitle: "Nejlepší rychlovarné konvice 2025",
    category: "Domácí spotřebiče",
    author: "Alena Rajnochová",
  },
  {
    id: "2025-04-22-savo-bezpecnost",
    date: "2025-04-22",
    kind: "correction",
    title: "Detergenty na podlahy — doplněno bezpečnostní varování",
    description:
      "Opravena dezinformace — „Savo + Voda na koberce“ NEMĚLO být doporučováno bez ventilace. Doplněn box s varováním.",
    articleHref: "/clanek/detergenty-podlahy-2025/",
    articleTitle: "Test detergentů 2025",
    category: "Domácí spotřebiče",
    author: "MUDr. Eva Malá (garantka)",
    relatedHref: "/opravy/#2025-04-22",
    relatedLabel: "Detail v archivu",
  },
  {
    id: "2025-03-20-podcast-pilot",
    date: "2025-03-20",
    kind: "feature",
    title: "Pilot podcastu „Co si nekoupit“ — první 3 epizody",
    description:
      "Spuštěn experimentální podcast s rozhovory s garanty. Epizoda 1: Jakub Novák o aku bruskách, ep. 2: Alena Rajnochová o pračkách.",
    category: "Site features",
    author: "Ivo Matěj",
  },
  {
    id: "2025-02-10-autori-rozcestnik",
    date: "2025-02-10",
    kind: "feature",
    title: "Nový rozcestník autorů s veřejnými profily",
    description:
      "Spuštěna stránka /autori/ s 14 profily autorů a garantů včetně kvalifikací, externích citací v médiích a profesních registrací.",
    articleHref: "/autori/",
    articleTitle: "Autoři a garanti",
    category: "Editorial standards",
    author: "Ivo Matěj",
  },
  {
    id: "2025-01-15-eticky-kodex-v3",
    date: "2025-01-15",
    kind: "policy",
    title: "Etický kodex verze 3.0 — nové pravidlo o AI",
    description:
      "Doplněno explicitní pravidlo: AI nikdy nepíše celé články ani negeneruje fotografie produktů. Detail v <a href=\"/pouzivani-ai/\">AI politice</a>.",
    articleHref: "/eticky-kodex/",
    articleTitle: "Etický kodex",
    category: "Editorial standards",
    author: "Ivo Matěj",
  },

  // 2024 (publish entries)
  {
    id: "2024-11-08-bosch-wgg-publish",
    date: "2024-11-08",
    kind: "publish",
    title: "Publikace: Bosch WGG244A0BY recenze",
    description:
      "Detailní 6-dimenzionální recenze pračky Bosch WGG244A0BY po 30 cyklech testu v laboratoři.",
    articleHref: "/recenze/bosch-wgg244a0by/",
    articleTitle: "Bosch WGG244A0BY recenze",
    category: "Domácí spotřebiče",
    author: "Ivo Matěj",
  },
  {
    id: "2024-03-14-aku-brusky-publish",
    date: "2024-03-14",
    kind: "publish",
    title: "Publikace pillar článku: Aku brusky 2026",
    description:
      "Kompletní průvodce výběrem aku brusky — 18 min čtení, 23 testovaných modelů, 7 sekcí.",
    articleHref: "/clanek/aku-brusky/",
    articleTitle: "Aku brusky 2026: jak vybrat",
    category: "Elektronářadí",
    author: "Ivo Matěj",
  },
];

/**
 * Metadata typů aktualizací — label + tone color pro UI.
 */
export const updateKindMeta: Record<SiteUpdateKind, { label: string; tone: string }> = {
  publish: { label: "Publikace", tone: "green" },
  major: { label: "Velká úprava", tone: "purple" },
  minor: { label: "Drobná úprava", tone: "muted" },
  content: { label: "Doplnění obsahu", tone: "purple" },
  refresh: { label: "Refresh", tone: "muted" },
  addition: { label: "Přidání modelu", tone: "amber" },
  redesign: { label: "Redesign", tone: "purple" },
  policy: { label: "Změna politiky", tone: "red" },
  feature: { label: "Nová funkce", tone: "green" },
  correction: { label: "Oprava chyby", tone: "red" },
  retraction: { label: "Stažení", tone: "red" },
  expansion: { label: "Rozšíření", tone: "amber" },
};

/**
 * Sorted descending by date.
 */
export function getAllUpdates(): SiteUpdate[] {
  return [...siteUpdates].sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Grupování podle roku pro UI.
 */
export function getUpdatesByYear(): Record<string, SiteUpdate[]> {
  const sorted = getAllUpdates();
  const byYear: Record<string, SiteUpdate[]> = {};
  for (const u of sorted) {
    const year = u.date.slice(0, 4);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(u);
  }
  return byYear;
}

/**
 * Counts by kind for filter chips.
 */
export function getUpdateCounts(): Record<SiteUpdateKind, number> {
  const counts = {} as Record<SiteUpdateKind, number>;
  for (const k of Object.keys(updateKindMeta) as SiteUpdateKind[]) {
    counts[k] = 0;
  }
  for (const u of siteUpdates) {
    counts[u.kind]++;
  }
  return counts;
}
