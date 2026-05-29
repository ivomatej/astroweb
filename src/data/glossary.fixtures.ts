/**
 * Slovník pojmů — terminologie z testů a parametrů produktů.
 * Pro topical authority + cross-linking z článků.
 */

export interface GlossaryCategory {
  slug: string;
  name: string;
  description: string;
  /** Tone color pro UI. */
  tone: "purple" | "amber" | "green" | "red" | "blue";
  /** Ikona. */
  icon: "bolt" | "lab" | "house" | "leaf" | "car";
}

export interface GlossaryTerm {
  slug: string;
  /** Hlavní termín, např. "Brushless motor". */
  term: string;
  /** Slug kategorie. */
  categorySlug: string;
  /** Krátká definice (1 věta). */
  shortDef: string;
  /** Plná definice (HTML allowed). */
  longDefHtml: string;
  /** Synonyma / alternativní názvy. */
  aliases?: string[];
  /** Související termíny (slugy). */
  relatedSlugs?: string[];
  /** Související články. */
  relatedArticles?: { href: string; title: string }[];
  /** ISO datum aktualizace. */
  updatedAt: string;
  /** Kdo termín schválil — referenční zdroj. */
  approvedBy?: string;
  /** Volitelná externí citace (URL na primární zdroj — ISO norma, ÚNMZ atd.). */
  sourceUrl?: string;
}

export const glossaryCategories: GlossaryCategory[] = [
  {
    slug: "elektronaradi",
    name: "Elektronářadí",
    description: "Aku brusky, vrtačky, pily, motorové parametry, bezpečnostní funkce.",
    tone: "purple",
    icon: "bolt",
  },
  {
    slug: "domaci-spotrebice",
    name: "Domácí spotřebiče",
    description: "Pračky, sušičky, myčky, energetické štítky, programy a normy.",
    tone: "amber",
    icon: "house",
  },
  {
    slug: "elektronika",
    name: "Elektronika a IT",
    description: "Displejové parametry, audio, baterie, benchmarky.",
    tone: "blue",
    icon: "lab",
  },
  {
    slug: "zahrada",
    name: "Zahrada",
    description: "Sekačky, foukače, plotostříhače, baterie 18 V / 36 V.",
    tone: "green",
    icon: "leaf",
  },
  {
    slug: "auto",
    name: "Auto a doprava",
    description: "Pneumatiky, autobaterie, štítky EU, brzdné dráhy.",
    tone: "red",
    icon: "car",
  },
];

export const glossaryTerms: GlossaryTerm[] = [
  // Elektronářadí
  {
    slug: "brushless-motor",
    term: "Brushless motor",
    categorySlug: "elektronaradi",
    shortDef: "Bezkartáčový elektromotor — bez uhlíkových kartáčů, vyšší účinnost a životnost.",
    longDefHtml: `
<p>Brushless motor (česky <strong>bezkartáčový motor</strong>) je elektromotor, který nepoužívá uhlíkové kartáče pro přenos proudu na rotor. Místo toho používá elektronický regulátor a permanentní magnety.</p>
<p>Praktické výhody pro aku nářadí:</p>
<ul>
<li><strong>Vyšší účinnost</strong> (až o 25 % menší ztráty) — z baterie dostanete víc práce</li>
<li><strong>Delší životnost</strong> — nejsou kartáče, které se opotřebovávají</li>
<li><strong>Menší údržba</strong> — bez výměny kartáčů za 200–500 hodin provozu</li>
<li><strong>Vyšší kroutící moment</strong> při stejné velikosti</li>
</ul>
<p>Brushless nářadí stojí typicky o 30–50 % víc než kartáčové, ale za dobu životnosti (2–3× delší) je celková investice nižší.</p>
    `,
    aliases: ["Bezkartáčový motor", "BLDC motor"],
    relatedSlugs: ["nominalni-vykon", "anti-vibration"],
    relatedArticles: [
      { href: "/clanek/aku-brusky/", title: "Aku brusky 2026 — jak vybrat" },
    ],
    updatedAt: "2026-05-15",
    approvedBy: "Jakub Novák, DiS. (garant elektronářadí)",
  },
  {
    slug: "nominalni-vykon",
    term: "Nominální výkon (W)",
    categorySlug: "elektronaradi",
    shortDef: "Maximální dlouhodobý výkon motoru — to, co opravdu dokáže, ne marketing.",
    longDefHtml: `
<p>Nominální výkon je <strong>výkon, který motor dokáže odevzdat dlouhodobě bez přehřátí</strong>. Liší se od „špičkového výkonu" (peak power), který motor zvládne jen na sekundy.</p>
<p>Pozor na marketingové triky:</p>
<ul>
<li>„1500 W aku bruska" obvykle znamená 1500 W <em>maximum input power</em> — reálný výstupní výkon je 800–1000 W</li>
<li>Skutečný nominální výkon najdete v technickém listu pod „rated power" nebo „continuous power"</li>
<li>Aku nářadí má reálný výkon limitovaný proudem z baterie — i s motorem 1500 W bude bateriové nářadí na 600–900 W reálných</li>
</ul>
    `,
    aliases: ["Rated power", "Continuous power"],
    relatedSlugs: ["brushless-motor", "kroutici-moment"],
    relatedArticles: [
      { href: "/clanek/aku-brusky/", title: "Aku brusky 2026 — jak vybrat" },
    ],
    updatedAt: "2026-05-20",
    sourceUrl: "https://www.iec.ch/standards",
  },
  {
    slug: "kroutici-moment",
    term: "Kroutící moment (Nm)",
    categorySlug: "elektronaradi",
    shortDef: "Síla, kterou nářadí dokáže otočit šroubem nebo vrtákem — udáno v Newtonmetrech.",
    longDefHtml: `
<p>Kroutící moment (anglicky <strong>torque</strong>) je míra rotační síly. U vrtaček a šroubováků udává, kolik síly nářadí dokáže přenést na šroub nebo vrták.</p>
<p>Pro orientaci:</p>
<ul>
<li><strong>15–30 Nm</strong> — domácí kutil, nábytek, lehké tesařské práce</li>
<li><strong>40–60 Nm</strong> — náročnější instalace, sádrokartony, lehké železo</li>
<li><strong>80–120 Nm</strong> — řemeslník, beton, ocel, šroubování velkých konstrukcí</li>
<li><strong>150+ Nm</strong> — profesionální použití, montáže, demontáže velkých šroubů</li>
</ul>
<p>Pozor — některé výrobce udávají „maximum torque" (krátkodobé), jiné „running torque" (kontinuální). Vždy ověřujte v datasheetu.</p>
    `,
    relatedSlugs: ["nominalni-vykon", "brushless-motor"],
    updatedAt: "2026-04-10",
  },
  {
    slug: "anti-vibration",
    term: "Anti-vibration (AVS)",
    categorySlug: "elektronaradi",
    shortDef: "Systém tlumení vibrací — pro snížení únavy a syndromu bílých prstů u dlouhodobé práce.",
    longDefHtml: `
<p>AVS (Anti-Vibration System) je technologie tlumení vibrací u aku brusek, sekaček a kladiv. Vibrace jsou hlavní příčinou <strong>syndromu bílých prstů (Raynaudův syndrom)</strong> u profesionálních řemeslníků.</p>
<p>Měření vibrací:</p>
<ul>
<li>Hodnota udána v <strong>m/s²</strong> (metrů za sekundu na druhou)</li>
<li>Nářadí s AVS má typicky 2–4 m/s² — bezpečné pro 8 hodin práce denně</li>
<li>Nářadí bez AVS má 6–12 m/s² — bezpečný limit pouze 1–3 hodiny denně dle EN ISO 5349</li>
</ul>
<p>U profesionálního nářadí je AVS standard. U levných hobby modelů často chybí.</p>
    `,
    aliases: ["AVS", "Anti-Vibration System"],
    relatedSlugs: ["brushless-motor"],
    updatedAt: "2026-03-22",
    sourceUrl: "https://www.iso.org/standard/32355.html",
  },
  {
    slug: "kickback-control",
    term: "KickBack Control",
    categorySlug: "elektronaradi",
    shortDef: "Bezpečnostní funkce — automaticky vypne nářadí při náhlém zaseknutí kotouče.",
    longDefHtml: `
<p>KickBack Control je <strong>bezpečnostní senzor</strong> v aku bruskách a okružních pilách. Detekuje náhlou změnu pohybu kotouče (zaseknutí v materiálu) a do <strong>50 milisekund</strong> motor odpojí od baterie.</p>
<p>Proč je to důležité:</p>
<ul>
<li>Bez KickBack Control může bruska po zaseknutí vyletět z ruky (typicky 70–120 km/h)</li>
<li>Statistiky: <strong>40 % úrazů ruky řemeslníků</strong> způsobí kickback při řezání oceli</li>
<li>U Bosch je to „KickBack Control", Makita „AFT (Active Feedback-sensing Technology)", DeWalt „Perform & Protect"</li>
</ul>
<p>U profesionálního aku nářadí je dnes standardní funkce — pokud nářadí KickBack Control nemá, je to red flag.</p>
    `,
    relatedSlugs: ["brushless-motor", "anti-vibration"],
    relatedArticles: [
      { href: "/clanek/aku-brusky/", title: "Aku brusky 2026 — bezpečnostní funkce" },
    ],
    updatedAt: "2026-04-15",
    approvedBy: "Jakub Novák, DiS.",
  },
  {
    slug: "li-ion-baterie-ah",
    term: "Li-Ion baterie (Ah)",
    categorySlug: "elektronaradi",
    shortDef: "Lithium-iontová baterie — kapacita v Ampérhodinách (Ah) určuje výdrž.",
    longDefHtml: `
<p>Li-Ion baterie je standardní typ pro aku nářadí od roku 2010. Klíčové parametry:</p>
<ul>
<li><strong>Napětí (V)</strong> — určuje výkon, typicky 18 V pro hobby, 36–54 V pro profi</li>
<li><strong>Kapacita (Ah)</strong> — určuje výdrž, typicky 2,0 / 4,0 / 5,0 / 8,0 / 12,0 Ah</li>
<li><strong>Energie (Wh)</strong> = V × Ah — srovnatelná hodnota mezi systémy</li>
</ul>
<p>Pro orientaci, kolik práce udělá baterie 18 V / 5 Ah (90 Wh):</p>
<ul>
<li>Brusek 125 mm na oceli: 80–120 řezů</li>
<li>Vrtací šroubování do dřeva: 200–400 šroubů 4×40 mm</li>
<li>Sekačky: 350–600 m² trávníku</li>
</ul>
<p>Životnost baterie: 500–1500 nabíjecích cyklů (3–7 let při běžném používání).</p>
    `,
    aliases: ["Lithium-iontová baterie"],
    relatedSlugs: ["brushless-motor"],
    updatedAt: "2026-05-01",
  },

  // Domácí spotřebiče
  {
    slug: "energeticky-stitek-a",
    term: "Energetický štítek A (2021)",
    categorySlug: "domaci-spotrebice",
    shortDef: "EU klasifikace energetické účinnosti — od 03/2021 nová stupnice A–G bez plus.",
    longDefHtml: `
<p>Energetický štítek EU 2021 (nařízení 2017/1369) je nová stupnice <strong>A–G bez „plus"</strong> (žádné A+++ atd.). Cílem je „nepřesvědčovat" zákazníka, že vše je A+++.</p>
<p>Klíčové rozdíly oproti staré stupnici:</p>
<ul>
<li>Staré A+++ ≈ nová <strong>B nebo C</strong></li>
<li>Třída A je <strong>velmi přísná</strong> — v 2024 ji splňuje jen ~3 % praček na trhu</li>
<li>Spotřeba se udává v kWh / 100 cyklů</li>
<li>QR kód na štítku vede do EPREL databáze EU s ověřitelnými údaji</li>
</ul>
<p>Pro pračky platí nová stupnice od <strong>1. března 2021</strong>. Pro myčky, lednice a sušičky od stejného data.</p>
    `,
    aliases: ["Třída A", "Štítek 2021", "EPREL"],
    relatedSlugs: ["spotreba-kwh-100-cyklu"],
    relatedArticles: [
      { href: "/nejlepsi-pracky-2026/", title: "Nejlepší pračky 2026 — TOP 7" },
    ],
    updatedAt: "2026-03-15",
    sourceUrl: "https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX:32017R1369",
  },
  {
    slug: "spotreba-kwh-100-cyklu",
    term: "Spotřeba kWh / 100 cyklů",
    categorySlug: "domaci-spotrebice",
    shortDef: "Standardizovaná spotřeba podle IEC 60456 — kolik kWh spotřebuje pračka za 100 testovacích cyklů.",
    longDefHtml: `
<p>kWh / 100 cyklů je jednotka spotřeby na energetickém štítku praček a myček. Měřeno podle <strong>normy IEC 60456</strong> v laboratorních podmínkách (Eco program 40–60 °C, plná náplň).</p>
<p>Pro orientaci u pračky 9 kg:</p>
<ul>
<li><strong>Třída A:</strong> 150–180 kWh / 100 cyklů</li>
<li><strong>Třída B:</strong> 180–210 kWh / 100 cyklů</li>
<li><strong>Třída C:</strong> 210–250 kWh / 100 cyklů</li>
</ul>
<p>Přepočet na rok: při 220 cyklech ročně (česká domácnost) má pračka třídy A spotřebu <strong>396 kWh/rok</strong> = cca 2 376 Kč při ceně elektřiny 6 Kč/kWh.</p>
    `,
    aliases: ["Spotřeba 100 cyklů"],
    relatedSlugs: ["energeticky-stitek-a"],
    updatedAt: "2026-04-08",
    sourceUrl: "https://webstore.iec.ch/publication/22720",
  },
  {
    slug: "aquastop",
    term: "AquaStop",
    categorySlug: "domaci-spotrebice",
    shortDef: "Bezpečnostní systém proti úniku vody — uzavře přívod při detekci poškození hadice.",
    longDefHtml: `
<p>AquaStop je <strong>bezpečnostní systém u praček a myček</strong>. Při detekci úniku vody (poškozená hadice, prasklý ventil) okamžitě uzavře přívod vody.</p>
<p>Existují 2 úrovně:</p>
<ul>
<li><strong>AquaStop plný</strong> — magnetický ventil přímo na hadici u kohoutku, mechanismus s pružinou. Funguje i bez elektřiny.</li>
<li><strong>AquaStop částečný (electronic)</strong> — senzor pod pračkou, vypne čerpadlo. Vyžaduje napájení.</li>
</ul>
<p>Pojišťovny u některých nemovitostí vyžadují plný AquaStop jako podmínku pro pojištění proti vytopení.</p>
<p>Pozor: některé výrobce uvádějí „AquaStop" i pro pouhý senzor přetečení — vždy ověřujte v technickém listu.</p>
    `,
    relatedSlugs: ["energeticky-stitek-a"],
    updatedAt: "2026-02-18",
  },
  {
    slug: "iec-60704",
    term: "IEC 60704 (hluk)",
    categorySlug: "domaci-spotrebice",
    shortDef: "Norma pro měření hluku domácích spotřebičů — dB(A) v polotiché místnosti.",
    longDefHtml: `
<p>IEC 60704-2-x je <strong>mezinárodní norma pro měření hluku</strong> domácích spotřebičů. Konkrétní subnumerování pro různé spotřebiče:</p>
<ul>
<li>60704-2-4 — pračky</li>
<li>60704-2-7 — myčky</li>
<li>60704-2-1 — vysavače</li>
<li>60704-2-14 — chladničky</li>
</ul>
<p>Měření probíhá v polotiché místnosti s background noise pod 25 dB(A), hluk se měří v hemisférické pozici 1 metr od spotřebiče. Výsledky se udávají v <strong>dB(A) — vážená hladina</strong>, která odpovídá citlivosti lidského sluchu.</p>
<p>Pro pračku je 52 dB(A) při praní velmi tiché, 60 dB(A) hlučnější. Odstředění je vždy hlasitější — typicky 70–80 dB(A) podle otáček.</p>
    `,
    aliases: ["Norma hluku"],
    relatedSlugs: ["energeticky-stitek-a"],
    updatedAt: "2026-04-22",
    sourceUrl: "https://webstore.iec.ch/publication/2530",
  },

  // Elektronika
  {
    slug: "delta-e-displej",
    term: "ΔE (Delta E)",
    categorySlug: "elektronika",
    shortDef: "Míra barevné přesnosti displeje — rozdíl mezi cílovou a zobrazenou barvou.",
    longDefHtml: `
<p>ΔE je <strong>matematická míra rozdílu mezi dvěma barvami</strong> v barevném prostoru CIE Lab. Používá se pro kalibraci a hodnocení barevné přesnosti displejů a tiskáren.</p>
<p>Pro orientaci:</p>
<ul>
<li><strong>ΔE < 1</strong> — lidské oko rozdíl nevnímá (profesionální monitorování)</li>
<li><strong>ΔE 1–3</strong> — rozdíl je vidět při přímém srovnání (kvalitní displej)</li>
<li><strong>ΔE 3–6</strong> — rozdíl je viditelný (běžný spotřebitelský displej)</li>
<li><strong>ΔE > 6</strong> — výrazná barevná odchylka (kalibrace nutná)</li>
</ul>
<p>Pro grafické práce (foto, video editing) je vhodný monitor s <strong>ΔE < 2 z výroby</strong> nebo s možností hardware kalibrace.</p>
    `,
    aliases: ["Delta E", "Color accuracy"],
    relatedSlugs: ["pokryti-gamutu"],
    updatedAt: "2026-05-08",
  },
  {
    slug: "pokryti-gamutu",
    term: "Pokrytí gamutu (sRGB, DCI-P3, AdobeRGB)",
    categorySlug: "elektronika",
    shortDef: "Procento barevného prostoru, který displej zobrazuje — sRGB pro web, DCI-P3 pro film, AdobeRGB pro print.",
    longDefHtml: `
<p>Barevný gamut je <strong>množina barev, které displej dokáže zobrazit</strong>. Tři hlavní standardy:</p>
<ul>
<li><strong>sRGB</strong> — standard pro web a běžné aplikace (zhruba 35 % viditelného spektra)</li>
<li><strong>DCI-P3</strong> — kinematografický standard (cca 26 % větší než sRGB)</li>
<li><strong>AdobeRGB</strong> — pro print, většinou pro fotografy (cca 30 % větší než sRGB)</li>
</ul>
<p>Pokrytí se udává v procentech daného standardu:</p>
<ul>
<li><strong>100 % sRGB</strong> — minimum pro práci s webem a textem</li>
<li><strong>90+ % DCI-P3</strong> — pro video produkci</li>
<li><strong>99 % AdobeRGB</strong> — pro tisk a foto retouch</li>
</ul>
<p>Pozor: některé výrobce uvádějí „98 % NTSC" — což je zhruba 72 % sRGB. Marketing.</p>
    `,
    aliases: ["sRGB", "DCI-P3", "AdobeRGB"],
    relatedSlugs: ["delta-e-displej"],
    updatedAt: "2026-04-30",
  },
  {
    slug: "geekbench",
    term: "Geekbench",
    categorySlug: "elektronika",
    shortDef: "Standardizovaný benchmark CPU pro srovnání výkonu napříč architekturami.",
    longDefHtml: `
<p>Geekbench (aktuálně verze 6) je <strong>cross-platform benchmark</strong> pro hodnocení CPU. Měří single-core a multi-core skóre v běžných úkolech (komprese, šifrování, machine learning).</p>
<p>Pro orientaci v Geekbench 6 (single-core):</p>
<ul>
<li><strong>1000–1500</strong> — starší notebooky 2020–2022</li>
<li><strong>1800–2400</strong> — moderní střední třída (M2, Ryzen 7 7840U)</li>
<li><strong>2500–3300</strong> — top třída (M4, Ryzen AI 9, Intel Core Ultra 9)</li>
</ul>
<p>Single-core skóre je nejlepší pro orientaci v běžných aplikacích. Multi-core skóre má smysl pro video render, kompilaci kódu, vědecké výpočty.</p>
<p>Pozor: Geekbench 5 a 6 mají odlišné stupnice. Vždy ověřujte verzi.</p>
    `,
    relatedSlugs: ["delta-e-displej"],
    updatedAt: "2026-05-10",
    sourceUrl: "https://www.geekbench.com/",
  },

  // Zahrada
  {
    slug: "rotacni-vs-zlevnacni-sekacka",
    term: "Rotační vs. zlevňovací sekačka",
    categorySlug: "zahrada",
    shortDef: "Rotační — sekání nože jako u kosy, vhodné pro běžnou trávu. Zlevňovací — pohyblivé nože jako nůžky, pro pečlivé sekání.",
    longDefHtml: `
<p>Dva základní principy sekání:</p>
<ul>
<li><strong>Rotační sekačka</strong> — jeden nebo dva nože rotující kolem vertikální osy. Klasické řešení, levnější, rychlejší. Někdy posekanou trávu „roztřepí".</li>
<li><strong>Zlevňovací sekačka (cylindrová)</strong> — válcový nůž s několika lopatkami, pevně sekající proti spodnímu noži (jako nůžky). Přesnější střih, vhodné pro krátký pečlivý trávník, ale dražší a citlivější.</li>
</ul>
<p>Pro 95 % rodinných zahrad je rotační sekačka dostatečná. Zlevňovací mají smysl u golf greenu, anglických trávníků nebo trávníků se značnou výškou pod 20 mm.</p>
    `,
    relatedSlugs: ["mulcovani"],
    updatedAt: "2026-03-08",
  },
  {
    slug: "mulcovani",
    term: "Mulčování",
    categorySlug: "zahrada",
    shortDef: "Sekání trávy na velmi jemné kousky, které zůstávají na trávníku jako přírodní hnojivo.",
    longDefHtml: `
<p>Mulčování je technologie sekání, při které <strong>sekačka jemně rozdrtí posekanou trávu</strong> a vrátí ji zpět na trávník. Pro tuto funkci potřebuje speciální mulčovací nůž (nebo „2-in-1" nůž).</p>
<p>Výhody:</p>
<ul>
<li>Trávník nemusíte hrabat ani sběrat</li>
<li>Drcená tráva je <strong>přírodní hnojivo</strong> (až o 30 % méně potřeby NPK)</li>
<li>Zlepšuje retenci vody v půdě</li>
</ul>
<p>Nevýhody:</p>
<ul>
<li>Při vlhké trávě může docházet k tvorbě plsti</li>
<li>Nelze mulčovat při výšce trávy 8+ cm — třeba sekat 2× za sebou</li>
</ul>
    `,
    relatedSlugs: ["rotacni-vs-zlevnacni-sekacka"],
    updatedAt: "2026-04-05",
  },

  // Auto
  {
    slug: "stitek-pneumatiky-eu",
    term: "EU štítek pneumatiky",
    categorySlug: "auto",
    shortDef: "Povinné označení pneumatik 3 parametry — palivová účinnost, mokrá adheze, hluk.",
    longDefHtml: `
<p>Od května 2021 platí <strong>nová verze EU štítku pneumatiky</strong> (nařízení EU 2020/740). Označuje 3 hlavní parametry:</p>
<ul>
<li><strong>Palivová účinnost</strong> — třída A (nejlepší) až E. Rozdíl mezi A a E je až 7,5 % spotřeby</li>
<li><strong>Mokrá adheze</strong> — třída A až E. Rozdíl v brzdné dráze na mokru může být 18 m při rychlosti 80 km/h</li>
<li><strong>Hluk při průjezdu</strong> — A (nejtišší) až C, plus konkrétní hodnota v dB</li>
</ul>
<p>Bonusové ikonky:</p>
<ul>
<li><strong>Sněhová vločka v hoře (3PMSF)</strong> — pneumatika prošla testem zimní výkonosti</li>
<li><strong>Symbol ICE</strong> — bonus na ledu (od 2021)</li>
</ul>
<p>QR kód na štítku vede do EPREL databáze s ověřitelnými údaji.</p>
    `,
    aliases: ["EU label", "Pneuštítek"],
    relatedSlugs: ["3pmsf-symbol"],
    updatedAt: "2026-03-30",
    sourceUrl: "https://eur-lex.europa.eu/legal-content/CS/TXT/?uri=CELEX%3A32020R0740",
  },
  {
    slug: "3pmsf-symbol",
    term: "3PMSF symbol",
    categorySlug: "auto",
    shortDef: "Three Peak Mountain Snowflake — pneumatika certifikovaná pro zimní podmínky.",
    longDefHtml: `
<p>3PMSF (Three Peak Mountain Snowflake) je <strong>certifikace EU pro zimní pneumatiky</strong>. Symbolizuje 3 horské vrcholy se sněhovou vločkou uvnitř.</p>
<p>Co znamená:</p>
<ul>
<li>Pneumatika prošla standardizovaným testem brzdné dráhy na sněhu</li>
<li>Je legálně platná jako „zimní" v zemích s povinností zimních pneu (Česká republika také — § 40a zákona o silničním provozu)</li>
<li>Liší se od starší značky <strong>M+S (Mud + Snow)</strong>, která <strong>není standardizovaná</strong> a v ČR <strong>nestačí</strong> jako zimní</li>
</ul>
<p>V Česku platí povinnost zimních pneumatik (s 3PMSF) v období <strong>1. listopadu — 31. března</strong>, pokud je na vozovce souvislá sníhová vrstva nebo námraza.</p>
    `,
    aliases: ["Three Peak Mountain Snowflake", "Alpine symbol"],
    relatedSlugs: ["stitek-pneumatiky-eu"],
    updatedAt: "2026-04-12",
  },
  {
    slug: "cca-cold-cranking-amps",
    term: "CCA (Cold Cranking Amps)",
    categorySlug: "auto",
    shortDef: "Výkon autobaterie při startu za −18 °C — kolik ampérů dodá po 30 sekundách.",
    longDefHtml: `
<p>CCA (Cold Cranking Amps) je <strong>standardizovaná hodnota startovacího výkonu autobaterie</strong>. Měří se podle SAE J537 — kolik ampérů baterie dodá při <strong>−18 °C po 30 sekund, aniž by napětí kleslo pod 7,2 V</strong>.</p>
<p>Pro orientaci podle motoru:</p>
<ul>
<li><strong>Malý benzín 1.0–1.4 L:</strong> 350–500 CCA</li>
<li><strong>Středtní benzín 1.5–2.0 L:</strong> 540–680 CCA</li>
<li><strong>Diesel 1.6–2.0 L:</strong> 680–850 CCA (dieslové potřebují víc)</li>
<li><strong>Velký diesel 3.0+ L:</strong> 950+ CCA</li>
</ul>
<p>V katalogu výrobce auta je doporučená hodnota CCA. <strong>Nikdy nepoužívejte baterii s nižším CCA, než výrobce doporučuje</strong> — riziko poškození alternátoru.</p>
    `,
    aliases: ["Cold Cranking Amps", "Startovací proud"],
    updatedAt: "2026-05-05",
    sourceUrl: "https://www.sae.org/standards/content/j537_201601/",
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory(categorySlug: string): GlossaryTerm[] {
  return glossaryTerms
    .filter((t) => t.categorySlug === categorySlug)
    .sort((a, b) => a.term.localeCompare(b.term, "cs"));
}

export function getCategoryBySlug(slug: string): GlossaryCategory | undefined {
  return glossaryCategories.find((c) => c.slug === slug);
}

export function getAllTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "cs"));
}

/**
 * Vrátí seznam písmen abecedy, která mají alespoň jeden termín.
 * Pro abecední skoč v UI.
 */
export function getActiveLetters(): string[] {
  const letters = new Set<string>();
  for (const t of glossaryTerms) {
    const firstLetter = t.term.charAt(0).toUpperCase();
    letters.add(firstLetter);
  }
  return Array.from(letters).sort();
}
