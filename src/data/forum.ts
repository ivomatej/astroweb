/**
 * Diskuze / fórum — statická data pro prototyp.
 * V produkci bude napojené na backend (NestJS).
 */

export type ForumCategory =
  | "elektronaradi"
  | "spotrebice"
  | "auto"
  | "zahrada"
  | "elektronika"
  | "obecne";

export interface ForumPost {
  id: string;
  /** Jméno autora (registrované přezdívka nebo "host"). */
  authorName: string;
  /** Initials pro avatar. */
  authorInitials: string;
  /** ISO datum + čas. */
  createdAt: string;
  /** Relativní čas pro UI, např. "před 3 dny". */
  relativeTime: string;
  /** Plný HTML obsah. */
  bodyHtml: string;
  /** Počet líbí se. */
  likes: number;
  /** Označení: ověřený nákupce, profi, moderátor. */
  badge?: "verified-buyer" | "pro" | "staff" | "moderator";
  /** Vnořené odpovědi. */
  replies?: ForumPost[];
}

export interface ForumThread {
  slug: string;
  /** Titulek vlákna. */
  title: string;
  /** Kategorie. */
  category: ForumCategory;
  /** Stav vlákna. */
  status: "open" | "resolved" | "locked";
  /** Pinned na top. */
  isPinned?: boolean;
  /** Jméno autora původního příspěvku. */
  authorName: string;
  authorInitials: string;
  authorBadge?: "verified-buyer" | "pro" | "staff" | "moderator";
  /** ISO datum vytvoření vlákna. */
  createdAt: string;
  /** Relativní čas. */
  createdRelative: string;
  /** ISO datum poslední aktivity. */
  lastActivityAt: string;
  lastActivityRelative: string;
  /** Počet odpovědí. */
  replyCount: number;
  /** Počet zobrazení. */
  viewCount: number;
  /** Původní příspěvek. */
  originalPost: ForumPost;
  /** Odpovědi. */
  replies: ForumPost[];
  /** Související články (linky). */
  relatedArticles?: { href: string; title: string }[];
}

export const categoryMeta: Record<ForumCategory, { label: string; tone: string; description: string }> = {
  elektronaradi: { label: "Elektronářadí", tone: "purple", description: "Brusky, vrtačky, pily, kladiva." },
  spotrebice: { label: "Domácí spotřebiče", tone: "amber", description: "Pračky, myčky, lednice, trouby." },
  auto: { label: "Auto & moto", tone: "red", description: "Pneumatiky, baterie, autopříslušenství." },
  zahrada: { label: "Zahrada", tone: "green", description: "Sekačky, foukače, plotostříhače." },
  elektronika: { label: "Elektronika a IT", tone: "blue", description: "Notebooky, monitory, sluchátka." },
  obecne: { label: "Obecné", tone: "muted", description: "Cokoliv mimo specifické kategorie." },
};

export const forumThreads: ForumThread[] = [
  {
    slug: "bosch-wgg244a0by-zkusenosti-po-roce",
    title: "Bosch WGG244A0BY — zkušenosti po roce. Stojí za 15 990 Kč?",
    category: "spotrebice",
    status: "open",
    isPinned: true,
    authorName: "Martin K.",
    authorInitials: "MK",
    authorBadge: "verified-buyer",
    createdAt: "2026-04-12T09:34:00Z",
    createdRelative: "před 5 týdny",
    lastActivityAt: "2026-05-20T18:22:00Z",
    lastActivityRelative: "před 1 dnem",
    replyCount: 23,
    viewCount: 1842,
    originalPost: {
      id: "op-1",
      authorName: "Martin K.",
      authorInitials: "MK",
      badge: "verified-buyer",
      createdAt: "2026-04-12T09:34:00Z",
      relativeTime: "před 5 týdny",
      likes: 47,
      bodyHtml: `
<p>Ahoj všichni,</p>
<p>kupoval jsem Bosch WGG244A0BY v dubnu 2025 podle <a href="/recenze/bosch-wgg244a0by/">recenze tady na Recenzeru</a> a chci se podělit o roční zkušenost.</p>
<p><strong>Pozitiva:</strong></p>
<ul>
<li>Tichá — při praní 52 dB sedí, soused přes stěnu neslyší</li>
<li>Spotřeba sedí na štítek — naměřeno wattmetrem 0,83 kWh/cyklus Eco</li>
<li>Velký buben 9 kg — peru pro 4 lidi 2× týdně, stačí</li>
<li>Program Allergy+ pomohl mé manželce — peru její oblečení samostatně</li>
</ul>
<p><strong>Negativa:</strong></p>
<ul>
<li>Displej těžko čitelný na slunci v koupelně</li>
<li>Při odstřeďování 1400 ot. trochu vibruje — nestaví se nikam (panelák, 3. patro)</li>
<li>Návod česky někdy mate (přeloženo automatickým překladačem podle všeho)</li>
</ul>
<p>Celkově <strong>za 15 990 Kč pořád doporučuju</strong>. Žádný velký zázrak, ale solidní pračka. Mám se vás zeptat na něco?</p>
      `,
    },
    replies: [
      {
        id: "r-1-1",
        authorName: "Alena Rajnochová",
        authorInitials: "AR",
        badge: "staff",
        createdAt: "2026-04-12T14:15:00Z",
        relativeTime: "před 5 týdny",
        likes: 28,
        bodyHtml: `
<p>Díky za zpětnou vazbu, Martine! Vibrace při odstřeďování — zkuste prosím:</p>
<ol>
<li>Zkontrolovat <strong>vyvážení pračky</strong> (vodováhou — všechny nohy musí stát rovně, někdy se po dovozu stane, že jedna trochu zůstane výš)</li>
<li>Otestujte program <strong>„Eco 40-60“</strong> s nižší rychlostí (1200 ot.) — vibrace klesnou výrazně</li>
<li>Pokud máte panelák, antivibrační podložky mohou pomoct (cca 400 Kč)</li>
</ol>
<p>Displej — to je častá stížnost na tento model. Bohužel jsme to v naší recenzi podcenili. Zařadíme do <a href="/opravy/">archivu oprav</a> a doplníme do dalšího refreshu.</p>
        `,
      },
      {
        id: "r-1-2",
        authorName: "Vojtěch P.",
        authorInitials: "VP",
        badge: "verified-buyer",
        createdAt: "2026-04-13T08:42:00Z",
        relativeTime: "před 5 týdny",
        likes: 12,
        bodyHtml: `
<p>Mám stejný model. Vibrace u mě zmizely, když jsem koupil <strong>antivibrační podložky pod nohy</strong>. Tady ze Sandberg za 350 Kč, fungují jak má.</p>
<p>Jinak souhlas — solidní pračka. Sportovní oblečení perfektně, alergeny program taky používáme.</p>
        `,
      },
      {
        id: "r-1-3",
        authorName: "Pavel D.",
        authorInitials: "PD",
        createdAt: "2026-05-02T19:21:00Z",
        relativeTime: "před 3 týdny",
        likes: 6,
        bodyHtml: `
<p>Já jsem nedávno koupil novější Serie 8 model za 22 000 Kč — má AI Wash. Zatím spokojený, ale viz <a href="/magazin/ai-pracky-bosch-2026/">analýza tady</a>, jestli to za ten doplatek stojí.</p>
        `,
      },
      {
        id: "r-1-4",
        authorName: "Martin K.",
        authorInitials: "MK",
        badge: "verified-buyer",
        createdAt: "2026-05-20T18:22:00Z",
        relativeTime: "před 1 dnem",
        likes: 8,
        bodyHtml: `
<p>Update po roce — vyřešil jsem ty vibrace. Hlavně byla špatně vyvážená noha (díky <strong>Aleně</strong> za tip!). Teď stojí na všech 4 nohách rovně a problém zmizel.</p>
<p>Displej pořád stejný — naučil jsem se s tím žít. Když je hodně světlo, prostě se kloním nad pračku. :)</p>
<p>Po roce <strong>doporučuju ještě více</strong> — žádný servisní problém, žádná závada, peru bez problému.</p>
        `,
      },
    ],
    relatedArticles: [
      { href: "/recenze/bosch-wgg244a0by/", title: "Plná recenze Bosch WGG244A0BY" },
      { href: "/nejlepsi-pracky-2026/", title: "Nejlepší pračky 2026" },
    ],
  },
  {
    slug: "aku-bruska-do-3000-doporuceni",
    title: "Aku bruska do 3 000 Kč pro občasné použití — co doporučíte?",
    category: "elektronaradi",
    status: "resolved",
    authorName: "Karolína H.",
    authorInitials: "KH",
    createdAt: "2026-05-08T16:12:00Z",
    createdRelative: "před 2 týdny",
    lastActivityAt: "2026-05-15T11:30:00Z",
    lastActivityRelative: "před 6 dny",
    replyCount: 14,
    viewCount: 892,
    originalPost: {
      id: "op-2",
      authorName: "Karolína H.",
      authorInitials: "KH",
      createdAt: "2026-05-08T16:12:00Z",
      relativeTime: "před 2 týdny",
      likes: 18,
      bodyHtml: `
<p>Zdravím, plánuju během léta řezat plech (cca 2 mm) na zahradě — staré ploty, kovové dveře k recyklaci.</p>
<p>Použiji <strong>maximálně 4–6× ročně</strong>, takže nechci kupovat profi za 10 000 Kč.</p>
<p>Co byste doporučili do <strong>rozpočtu 3 000 Kč včetně baterie</strong>? Hledala jsem u nás v Brně po obchodech, ale nikdo není moc nakloněn radit, prostě prodávají co mají.</p>
<p>Důležité: <strong>musí to být bezpečné</strong> — žádnou zkušenost s úhlovou bruskou nemám.</p>
      `,
    },
    replies: [
      {
        id: "r-2-1",
        authorName: "Jakub Novák",
        authorInitials: "JN",
        badge: "pro",
        createdAt: "2026-05-08T17:45:00Z",
        relativeTime: "před 2 týdny",
        likes: 32,
        bodyHtml: `
<p>Karolíno, pro váš use case (občasné použití, plech 2 mm, žádná zkušenost) jednoznačně doporučuju:</p>
<p><strong>Bosch Professional GWS 18V-7 (cca 3 300 Kč včetně 1× 4 Ah baterie a nabíječky)</strong></p>
<p>Proč:</p>
<ul>
<li>Má <strong>KickBack Control</strong> — pro začátečnici je to zásadní. Pokud se vám kotouč zasekne, bruska se automaticky zastaví, nevyletí vám z ruky.</li>
<li>Brushless motor — baterie vydrží, motor se nepřehřívá</li>
<li>Bosch má v ČR slušný servis (Datart, Mountfield)</li>
<li>Po prvním nákupu si můžete časem doplnit kotouče a vyzkoušet</li>
</ul>
<p>Pozor — na plech 2 mm si kupte <strong>kotouč na ocel (ne na kámen)</strong>. Ten je typicky tenký, 1 mm — vydrží na vašich 4–6× ročně použití roky.</p>
<p>A <strong>kupte si pevné rukavice + ochranné brýle</strong>. To je pro bezpečnost zásadní, ne marketing.</p>
        `,
      },
      {
        id: "r-2-2",
        authorName: "Tomáš B.",
        authorInitials: "TB",
        badge: "verified-buyer",
        createdAt: "2026-05-09T08:22:00Z",
        relativeTime: "před 2 týdny",
        likes: 9,
        bodyHtml: `
<p>Souhlas s Jakubem. Mám stejnou brusku už 2 roky, používám podobně sporadicky (4-5× ročně). Baterka 4Ah vydrží na cca 60 řezů plechem 2 mm, takže nemusíte mít 2 baterie.</p>
<p>Plus — naučte se brusku <strong>držet oběma rukama</strong>, nikdy ne jen jednou. To je 50 % bezpečnosti.</p>
        `,
      },
      {
        id: "r-2-3",
        authorName: "Karolína H.",
        authorInitials: "KH",
        createdAt: "2026-05-15T11:30:00Z",
        relativeTime: "před 6 dny",
        likes: 11,
        bodyHtml: `
<p><strong>Update:</strong> koupila jsem Bosch GWS 18V-7 + kotouč na ocel + brýle + rukavice — celkem 3 850 Kč. První řezy plechem byly v pohodě, KickBack Control jsem ještě nezažila (a doufám že ne!).</p>
<p>Děkuji moc Jakubovi za doporučení! Označuju jako vyřešené.</p>
        `,
      },
    ],
    relatedArticles: [
      { href: "/clanek/aku-brusky/", title: "Aku brusky 2026 — kompletní průvodce" },
      { href: "/rozhovory/jakub-novak-aku-brusky-2026/", title: "Rozhovor s Jakubem Novákem" },
      { href: "/slovnik/pojem/kickback-control/", title: "Slovník: KickBack Control" },
    ],
  },
  {
    slug: "zimni-pneumatiky-2025-2026-doporuceni",
    title: "Doporučte zimní pneumatiky 205/55 R16 — jezdím i na hory",
    category: "auto",
    status: "open",
    authorName: "Petr S.",
    authorInitials: "PS",
    createdAt: "2026-05-10T14:00:00Z",
    createdRelative: "před 11 dny",
    lastActivityAt: "2026-05-19T20:15:00Z",
    lastActivityRelative: "před 2 dny",
    replyCount: 8,
    viewCount: 547,
    originalPost: {
      id: "op-3",
      authorName: "Petr S.",
      authorInitials: "PS",
      createdAt: "2026-05-10T14:00:00Z",
      relativeTime: "před 11 dny",
      likes: 6,
      bodyHtml: `
<p>Hledám zimní pneumatiky 205/55 R16 pro Škodu Octavia 1.5 TSI.</p>
<p>Profil jízd: <strong>cca 60 % město (Praha), 30 % dálnice, 10 % hory (víkendy lyžovat)</strong>.</p>
<p>Roční nájezd 15 000 km. Rozpočet do <strong>14 000 Kč za 4 ks</strong>.</p>
<p>Sledoval jsem váš <a href="/clanek/zimni-pneumatiky-205-55-r16/">test</a>, ale jsou tam i pneu nad mým rozpočtem. Co byste doporučili?</p>
      `,
    },
    replies: [
      {
        id: "r-3-1",
        authorName: "Tomáš Veselý",
        authorInitials: "TV",
        badge: "staff",
        createdAt: "2026-05-11T09:33:00Z",
        relativeTime: "před 10 dny",
        likes: 14,
        bodyHtml: `
<p>Petře, pro váš profil (40 % dálnice + hory) jsou klíčové:</p>
<ol>
<li>Sníh & led brzdná dráha (často jezdíte na hory)</li>
<li>Aquaplaning resistance (dálnice v dešti)</li>
<li>Životnost (15 000 km/rok)</li>
</ol>
<p>V rozpočtu 14 000 Kč za 4 ks (= 3 500 Kč/ks) máte 2 solidní volby:</p>
<ul>
<li><strong>Continental WinterContact TS 870</strong> — cca 3 400 Kč/ks. Z našeho testu má excelentní brzdění na sněhu, mírně horší aquaplaning. Pro hory ideální.</li>
<li><strong>Michelin Alpin 6</strong> — cca 3 600 Kč/ks (lehce nad rozpočet, ale stojí to). Vyvážený výkon, dlouhá životnost.</li>
</ul>
<p>Vyhněte se Sava nebo Falken v této kategorii — sleva nestojí za nižší výkon na ledu.</p>
        `,
      },
      {
        id: "r-3-2",
        authorName: "Honza M.",
        authorInitials: "HM",
        badge: "verified-buyer",
        createdAt: "2026-05-19T20:15:00Z",
        relativeTime: "před 2 dny",
        likes: 5,
        bodyHtml: `
<p>Mám Continental TS 870 už 2. sezonu. Jezdím Octavia 2.0 TDI, podobný profil — Praha + Krkonoše víkendy.</p>
<p>Velmi spokojený. Na sněhu drží super, brzdná dráha na ledu solidní. Životnost po 2 sezónách (cca 28 000 km) odhadem ještě 1 sezona — dezén ubyl ze 8 mm na 5,5 mm.</p>
<p>Aquaplaning není problém pokud nezhoršujete profil — držte se v levém pruhu při deštivé dálnici.</p>
        `,
      },
    ],
    relatedArticles: [
      { href: "/clanek/zimni-pneumatiky-205-55-r16/", title: "Test zimních pneumatik 2026" },
      { href: "/slovnik/pojem/3pmsf-symbol/", title: "Slovník: 3PMSF symbol" },
    ],
  },
  {
    slug: "robotic-vysavac-pro-3-pokoje-kobercem",
    title: "Robotický vysavač pro byt 3+kk s kobercem — který nezklame?",
    category: "spotrebice",
    status: "open",
    authorName: "Tereza K.",
    authorInitials: "TK",
    createdAt: "2026-05-18T11:20:00Z",
    createdRelative: "před 3 dny",
    lastActivityAt: "2026-05-21T08:14:00Z",
    lastActivityRelative: "před 12 hod.",
    replyCount: 5,
    viewCount: 318,
    originalPost: {
      id: "op-4",
      authorName: "Tereza K.",
      authorInitials: "TK",
      createdAt: "2026-05-18T11:20:00Z",
      relativeTime: "před 3 dny",
      likes: 4,
      bodyHtml: `
<p>Ahoj, hledám robotický vysavač pro 3+kk v paneláku. Mám <strong>2 koberce</strong> (obývák + ložnice) + parkety v ostatních pokojích.</p>
<p>Rozpočet 15 000 Kč. Důležité — <strong>nesmí to uváznout v kobercích</strong> (sousedka mi říkala, že její Xiaomi má s tím problém).</p>
<p>Četla jsem váš článek <a href="/nase-chyby/">o Roborock S5 Max</a> — to byl problém v reálných bytech, ne v testovací místnosti. Tak na to dávám pozor.</p>
      `,
    },
    replies: [
      {
        id: "r-4-1",
        authorName: "Ivo Matěj",
        authorInitials: "IM",
        badge: "staff",
        createdAt: "2026-05-19T10:14:00Z",
        relativeTime: "před 2 dny",
        likes: 9,
        bodyHtml: `
<p>Tereza, díky za odkaz! Po Roborock S5 incidentu jsme zavedli <strong>multi-prostorové testování</strong> — viz <a href="/nase-chyby/">Naše chyby</a>.</p>
<p>Pro váš profil (3+kk + koberce) máme aktualizovaná data ze 3 typů prostředí:</p>
<ul>
<li><strong>Roborock S8 Pro Ultra</strong> — vlajka, ale 22 000 Kč (nad rozpočet)</li>
<li><strong>Dreame L20 Ultra</strong> — cca 14 000 Kč, podobná kvalita jako Roborock</li>
<li><strong>iRobot Roomba j7+</strong> — cca 13 500 Kč, AI detekce předmětů (kabely, hračky)</li>
</ul>
<p>Pro byt s kobercem doporučuju <strong>Dreame L20 Ultra</strong> — má dynamický silný odsávací výkon, který kobercům přizpůsobí. V našich testech jeden z mála, co nezůstal viset.</p>
<p>Plná recenze bude v 06/2026, můžete počkat nebo riskovat na základě stávajících dat.</p>
        `,
      },
      {
        id: "r-4-2",
        authorName: "Tereza K.",
        authorInitials: "TK",
        createdAt: "2026-05-21T08:14:00Z",
        relativeTime: "před 12 hod.",
        likes: 2,
        bodyHtml: `
<p>Díky moc! Dreame L20 vypadá fakt dobře. Asi počkám na vaši plnou recenzi v 06/2026 a pak se rozhodnu.</p>
        `,
      },
    ],
    relatedArticles: [
      { href: "/nase-chyby/", title: "Naše chyby — systémové ponaučení" },
      { href: "/clanek/roboticke-vysavace-2025/", title: "Robotické vysavače 2025 (přechodný článek)" },
    ],
  },
  {
    slug: "pravidla-foruma",
    title: "📌 Pravidla diskuze — přečtěte si před prvním příspěvkem",
    category: "obecne",
    status: "locked",
    isPinned: true,
    authorName: "Ivo Matěj",
    authorInitials: "IM",
    authorBadge: "moderator",
    createdAt: "2024-01-15T09:00:00Z",
    createdRelative: "před 2 lety",
    lastActivityAt: "2026-03-10T14:22:00Z",
    lastActivityRelative: "před 2 měsíci",
    replyCount: 0,
    viewCount: 12450,
    originalPost: {
      id: "op-5",
      authorName: "Ivo Matěj",
      authorInitials: "IM",
      badge: "moderator",
      createdAt: "2024-01-15T09:00:00Z",
      relativeTime: "před 2 lety",
      likes: 142,
      bodyHtml: `
<p>Vítejte v diskuzi Recenzer.cz!</p>
<p>Tohle fórum funguje pro vás — sdílení reálných zkušeností s produkty, doptávání se na detaily našich recenzí, výměna tipů. <strong>Pravidla jsou jednoduchá:</strong></p>

<h2>Co tady chceme</h2>
<ul>
<li>Reálné zkušenosti s produkty (po koupi, po roce, po servisu)</li>
<li>Konkrétní otázky k recenzím (s linkem na článek)</li>
<li>Tipy mezi uživateli (např. „antivibrační podložky za 350 Kč pomohou")</li>
<li>Slušná konverzace — i nesouhlas může být formulován férově</li>
</ul>

<h2>Co tady nechceme</h2>
<ul>
<li><strong>Reklama produktů ani služeb</strong> — pokud chcete inzerovat, máme <a href="/pro-znacky-firmy-agentury/">B2B kontakt</a></li>
<li><strong>Spamové linky a referraly</strong> — okamžitý ban</li>
<li><strong>Útoky na uživatele</strong> — i emoce mají hranice</li>
<li><strong>Fake recenze nebo lži</strong> — moderátoři ověřují</li>
</ul>

<h2>Badge systém</h2>
<ul>
<li><strong>verified-buyer</strong> — uživatel doložil koupi (e-receipt nebo Heureka link)</li>
<li><strong>pro</strong> — řemeslník / odborník s ověřenou kvalifikací</li>
<li><strong>staff</strong> — redaktor Recenzer.cz</li>
<li><strong>moderator</strong> — má moderační práva</li>
</ul>

<p>Moderátoři jsou <strong>Ivo Matěj</strong> a <strong>Alena Rajnochová</strong>. Pokud něco nesedí, kontaktujte je přes <a href="mailto:redakce@recenzer.cz">redakce@recenzer.cz</a>.</p>

<p><strong>Vlákno je uzamčeno</strong> — pro otázky k pravidlům pište e-mailem.</p>
      `,
    },
    replies: [],
  },
];

export function getThreadBySlug(slug: string): ForumThread | undefined {
  return forumThreads.find((t) => t.slug === slug);
}

export function getAllThreads(): ForumThread[] {
  return [...forumThreads].sort((a, b) => {
    // Pinned first, then by last activity desc
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return a.lastActivityAt < b.lastActivityAt ? 1 : -1;
  });
}

export function getThreadsByCategory(category: ForumCategory): ForumThread[] {
  return getAllThreads().filter((t) => t.category === category);
}

export function getCategoryCounts(): Record<ForumCategory, number> {
  const counts = {} as Record<ForumCategory, number>;
  for (const k of Object.keys(categoryMeta) as ForumCategory[]) counts[k] = 0;
  for (const t of forumThreads) counts[t.category]++;
  return counts;
}

export const badgeMeta: Record<string, { label: string; tone: string }> = {
  "verified-buyer": { label: "Ověřený nákupce", tone: "green" },
  pro: { label: "Profi", tone: "amber" },
  staff: { label: "Redakce", tone: "purple" },
  moderator: { label: "Moderátor", tone: "red" },
};
