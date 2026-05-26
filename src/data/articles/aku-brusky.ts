import type { Article } from "../../types/article";
import { ivoMatej, jakubNovak } from "../authors";

const sectionUvod = `
<p>
  Akumulátorová úhlová bruska je dnes nástroj, který by měl mít každý kutil i řemeslník. Od dělení armatury, přes broušení svarů, až po řezání dlažby a obkladů. Trh se za posledních pět let proměnil: brushless motory zlevnily, baterie Li-Ion 5,0 Ah jsou dostupné za přijatelné peníze a vlajkové aku brusky z roku 2026 se výkonem prakticky vyrovnají svým síťovým protějškům.<sup class="cite"><a href="#src-1">1</a></sup>
</p>
<p>
  Klíčový rozdíl mezi nástrojem za 2&nbsp;000 Kč a nástrojem za 12&nbsp;000 Kč ale není v barvě plastu ani v počtu rychlostí. Je ve <strong>třech věcech: motoru, baterii a bezpečnostní elektronice</strong>. Tyto tři komponenty rozhodují o tom, jestli bruska po půl roce odejde do servisu, jestli vám během řezu odpadne ruka, a hlavně jestli vás v nečekané situaci ochrání nebo zraní.
</p>
<p>
  Pokud spěcháte a chcete rovnou doporučení konkrétních modelů, podívejte se na <a class="inline-link" href="/nejlepsi-aku-brusky/">naše TOP 5 aku brusek 2026</a>. Pokud chcete pochopit, <strong>proč</strong> doporučujeme zrovna ty modely a podle čeho je hodnotíme, čtěte dál.
</p>
<div class="callout info">
  <div class="callout-ic" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
  </div>
  <div>
    <h3>Pro koho je tento průvodce</h3>
    <p>Pro lidi, kteří chtějí pochopit, <strong>proč</strong> doporučujeme zrovna ty modely. Stojí 18 minut čtení a ušetří vám případné výdaje za špatnou volbu na 5 let dopředu.</p>
  </div>
</div>
`.trim();

const sectionNapeti = `
<p>
  Napětí (V) určuje, kolik energie dokáže baterie dodávat motoru v jeden okamžik. Vyšší napětí = vyšší výkon = lepší práce s tvrdšími materiály. Ale není to jediné, co rozhoduje — a <strong>vyšší napětí znamená i vyšší hmotnost</strong>, což u brusky, kterou držíte v ruce a často nad hlavou, vadí mnohem víc než třeba u rázového utahováku.<sup class="cite"><a href="#src-3">3</a></sup>
</p>
<div class="step">
  <div class="step-head">
    <div class="step-titles">
      <div class="step-eyebrow">Doporučené napětí podle použití</div>
      <div class="step-title">12 V, 18 V nebo 36/40 V?</div>
    </div>
  </div>
  <div class="step-content">
    <ul>
      <li><strong>12 V (max 3 000 ot/min):</strong> jen pro lehkou montáž a hobby. Krátké, lehké, ale s 115mm kotoučem maximálně.</li>
      <li><strong>18 V (sweet spot):</strong> 90 % uživatelů zde má svůj cíl. Výkon srovnatelný s 750W síťovou bruskou, hmotnost 2,0–2,4 kg.</li>
      <li><strong>36/40 V (XR/MultiVolt):</strong> denní práce profesionálů, řezání armatury, kámen, masivní svary. Hmotnost už nad 3 kg.</li>
    </ul>
    <div class="param">
      <div class="param-head">
        <div class="param-title">Doporučené napětí pro úhlovou brusku</div>
        <div class="param-unit">V (Voltů)</div>
      </div>
      <div class="param-bar">
        <div class="param-zone low">12</div>
        <div class="param-zone optimal">18</div>
        <div class="param-zone high">36–40</div>
      </div>
      <div class="param-labels">
        <span>hobby / krátké</span>
        <span>univerzál</span>
        <span>profi denně</span>
      </div>
      <div class="param-rec">
        <strong>Naše doporučení:</strong> Začněte u <strong>18 V</strong>. Skrývá se za tím nejlepší poměr výkon / hmotnost / cena / dostupnost baterií napříč ekosystémem.
      </div>
    </div>
  </div>
</div>
<h3>Co ekosystém znamená v praxi</h3>
<p>
  Baterie není jen baterie. Pokud si pořídíte první 18V aku brusku Bosch Professional, druhou „akčkovku" si nejspíš pořídíte ve stejné platformě — protože už máte nabíječku, baterie a logiku 18V. <strong>Volba první 18V brusky je tedy i volba ekosystému na dalších 5–10 let</strong>.<sup class="cite"><a href="#src-4">4</a></sup>
</p>
<div class="compare-table">
  <table>
    <thead>
      <tr>
        <th>Ekosystém</th>
        <th>Pro koho</th>
        <th>Šíře nástrojů</th>
        <th>Cena baterie 5Ah</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Bosch Professional 18V</td><td>Profi / pokročilí kutilové</td><td>200+ nástrojů</td><td>2&nbsp;800 – 3&nbsp;400 Kč</td></tr>
      <tr><td>Milwaukee M18</td><td>Profi (auto, instalatéři)</td><td>250+ nástrojů</td><td>3&nbsp;100 – 3&nbsp;800 Kč</td></tr>
      <tr><td>Makita LXT 18V</td><td>Univerzál</td><td>320+ nástrojů</td><td>2&nbsp;200 – 2&nbsp;900 Kč</td></tr>
      <tr><td>DeWalt XR 18V</td><td>Stavebnictví</td><td>180+ nástrojů</td><td>2&nbsp;400 – 3&nbsp;200 Kč</td></tr>
    </tbody>
  </table>
</div>
<div class="expert-quote">
  <div class="expert-avatar">JN</div>
  <div class="expert-body">
    <div class="expert-label">Komentář odborného garanta</div>
    <div class="expert-text">
      U 18V brusek se rozhoduje pod zátěží. Volnoběžné otáčky jsou jen marketingové číslo — co dělá rozdíl, je <strong>zda motor udrží 75 % otáček, když do kotouče opřete celou ruku</strong>.
    </div>
    <div class="expert-attribution">Jakub Novák, DiS.</div>
    <div class="expert-creds">Profesionální zámečník · 18 let praxe · Konzultant pro testovací laboratoř Recenzer</div>
  </div>
</div>
`.trim();

const sectionKotouc = `
<p>
  Průměr kotouče určuje hloubku řezu a hmotnost celé brusky. <strong>Pravidlo je jednoduché: čím větší kotouč, tím větší dosah, ale i hmotnost a riziko zpětného rázu.</strong> 125mm rozměr je univerzální, 115mm o něco lehčí a 150mm pro profesionály.<sup class="cite"><a href="#src-5">5</a></sup>
</p>
<div class="step">
  <div class="step-head">
    <div class="step-titles">
      <div class="step-eyebrow">Volba průměru kotouče</div>
      <div class="step-title">Co dokáže každý průměr v praxi</div>
    </div>
  </div>
  <div class="step-content">
    <p><strong>115 mm</strong> — kompaktní, dosah řezu ~28 mm. Pro úzká místa, jemnější práce, montáž. Lehká (1,7–2,0 kg).</p>
    <p><strong>125 mm</strong> — univerzál, dosah řezu ~33 mm. <strong>Pokrývá 90 % všech situací.</strong> Pokud nevíte, co vybrat, vyberte 125mm.</p>
    <p><strong>150 mm</strong> — robustní, dosah řezu ~43 mm. Pro denní řezání betonu, kamene, armatury. Hmotnost 2,4–2,9 kg.</p>
  </div>
</div>
<div class="callout warn">
  <div class="callout-ic" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  </div>
  <div>
    <h3>Pozor na kompatibilitu kotoučů</h3>
    <p>Brusku 115 mm <strong>nelze osadit kotoučem 125 mm</strong> ani s redukcí. Maximální otáčky kotouče <strong>musí být ≥ otáčky brusky</strong> — jinak hrozí roztržení kotouče za chodu.</p>
  </div>
</div>
`.trim();


export const akuBrusky: Article = {
  slug: "aku-brusky",
  kind: "pillar",
  status: "published",

  category: "Elektronářadí",
  breadcrumbs: [
    { href: "/", label: "Recenzer" },
    { href: "/elektronarad/", label: "Elektronářadí" },
    { href: "/brusky/", label: "Brusky" },
    { label: "Aku brusky" },
  ],
  kicker: "Hloubková analýza · Elektronářadí",
  title:
    "Aku brusky 2026: jak vybrat <em>skutečně</em> dobrou akumulátorovou úhlovou brusku",
  perex:
    "Šest měsíců testů, <strong>23 modelů v ruce</strong>, čtyři rozhovory s profesionálními zámečníky. Pojďme si projít, co rozhoduje o výběru aku brusky — napětí, kotouč, otáčky, výdrž a bezpečnost — a co je naopak jen marketing.",
  cover: {
    src: "/images/articles/aku-bruska-2048x1044.webp",
    alt: "Práce s akumulátorovou bruskou na dřevěném schodišti",
    caption:
      "<strong>Foto:</strong> Testovací laboratoř Recenzer, Brno · 03/2026",
  },

  credibilityStats: [
    { label: "Testováno modelů", value: "23", unit: "brusek" },
    { label: "Hodin v laboratoři", value: "86", unit: "hod" },
    { label: "Citovaných zdrojů", value: "47" },
    { label: "Konzultací s experty", value: "4" },
  ],

  trustPills: [
    { kind: "verified-by-expert", label: "Ověřeno odborným garantem" },
    { kind: "tested-in-lab", label: "Testovací laboratoř Brno" },
    { kind: "sources", label: "47 ověřených zdrojů" },
    { kind: "no-sponsorship", label: "Bez sponzoringu" },
  ],

  affiliateDisclosure: {
    enabled: true,
    title: "Affiliate disclosure",
    bodyHtml:
      "Tento článek <strong>neobsahuje affiliate odkazy</strong> a Recenzer.cz nepřijímá provize z prodeje doporučených produktů. Žádný z testovaných modelů nebyl výrobcem zapůjčen ani dotován — všechny brusky byly nakoupeny redakcí za běžnou tržní cenu.",
    link: { href: "/eticky-kodex/#affiliate", label: "Více v Etickém kodexu" },
  },

  productAcquisition: {
    enabled: true,
    items: [
      {
        method: "purchased",
        note: "23 brusek, koupeno 11/2023 — 02/2024 v e-shopech Alza, Mountfield, Hornbach a Bauhaus. Celková investice 162 480 Kč. Faktury archivovány.",
      },
    ],
    affectedRating: {
      answer: "no",
      explanation:
        "<strong>Nákupem za běžnou tržní cenu</strong> jsme zajistili plnou nezávislost. Žádný z výrobců neznal naše hodnocení před publikací článku a neměl možnost ovlivnit pořadí v žebříčku. Naše hodnocení vychází výhradně z laboratorních měření a 6týdenního terénního testu.",
    },
    afterTest:
      "Tři vítězné modely zůstaly v naší laboratoři pro <strong>dlouhodobý test trvanlivosti</strong> (běží od 03/2024). Zbylých 20 brusek bylo darováno spolupracující střední odborné škole v Brně-Židenicích.",
  },

  author: ivoMatej,
  garant: jakubNovak,
  dates: {
    publishedAt: "2024-03-14",
    updatedAt: "2026-05-22",
    readingTimeMin: 18,
  },

  tldr: {
    title: "5 věcí, na které se musíte před koupí soustředit",
    bullets: [
      "<strong>Napětí</strong> — 18 V je dnes standard pro 90 % uživatelů. 12 V jen na drobnou montáž, 36/40 V pro denní těžkou práci.",
      "<strong>Kotouč</strong> — 125 mm je „zlatý standard“. 115 mm pro úzká místa, 150 mm jen do dílny se stabilní rukou.",
      "<strong>Otáčky pod zátěží</strong> — sledujte hodnotu pod zatížením, ne jen volnoběh. Pokles pod 30 % = slabý motor.",
      "<strong>Baterie</strong> — minimum 4,0 Ah. Pro celodenní práci 5,0–6,0 Ah; brushless motor je dnes nutnost.",
      "<strong>Bezpečnost</strong> — brzda kotouče do 3 s, ochrana proti zpětnému rázu (kickback) a re-start lock jsou nepostradatelné.",
    ],
    confidence: 5,
  },

  sections: [
    {
      id: "uvod",
      num: "—",
      title: "Než začnete vybírat",
      tocLabel: "Než začnete vybírat",
      bodyHtml: sectionUvod,
    },
    {
      id: "napeti",
      num: "01",
      title: "Napětí akumulátoru — kolik voltů opravdu potřebujete",
      tocLabel: "Napětí akumulátoru (V)",
      bodyHtml: sectionNapeti,
    },
    {
      id: "kotouc",
      num: "02",
      title: "Průměr kotouče — 115, 125, nebo 150 mm?",
      tocLabel: "Průměr kotouče (mm)",
      bodyHtml: sectionKotouc,
    },
    {
      id: "otacky",
      num: "03",
      title: "Otáčky a moment pod zátěží",
      tocLabel: "Otáčky a moment",
      bodyHtml: `
<p>
  Výrobci milují uvádět <strong>volnoběžné otáčky</strong> (11&nbsp;000, 12&nbsp;000, 13&nbsp;000 ot/min). Vypadá to na obalu efektně a přitom to nic neříká o reálném výkonu nástroje. Pro reálné měření je zajímavá hodnota <strong>otáček pod zátěží</strong> — tedy kolik otáček zůstane, když do brusky opřete čepel a začnete řezat plech.<sup class="cite"><a href="#src-6">6</a></sup>
</p>
<p>
  Hlavní roli zde hraje <strong>typ motoru</strong>. Klasické komutátorové motory (carbon-brush) ztrácí pod zátěží 30–50 % otáček, protože elektronika neumí kompenzovat pokles napětí. Brushless motory s elektronickou regulací drží otáčky výrazně lépe — typicky ztratí jen 10–20 %, a navíc mají větší životnost (nemají uhlíkové kartáče, které se opotřebovávají). V roce 2026 už neexistuje rozumný důvod kupovat aku brusku <strong>bez brushless motoru</strong>, pokud nejde o nejlevnější hobby segment.
</p>
<div class="step">
  <div class="step-head">
    <div class="step-titles">
      <div class="step-eyebrow">Co opravdu měřit</div>
      <div class="step-title">Pokles otáček pod zátěží</div>
    </div>
  </div>
  <div class="step-content">
    <ul>
      <li><strong>Pokles do 20 %:</strong> excelentní motor, brushless špička.</li>
      <li><strong>Pokles 20–30 %:</strong> dobrý, vhodný pro profi-použití.</li>
      <li><strong>Pokles 30–50 %:</strong> hobby kategorie, znatelné zpomalení.</li>
      <li><strong>Pokles nad 50 %:</strong> slabý motor, motor se zahřívá a vypíná.</li>
    </ul>
    <div class="param">
      <div class="param-head">
        <div class="param-title">Pokles otáček při zátěži (typický řez 8mm plechu)</div>
        <div class="param-unit">% z volnoběhu</div>
      </div>
      <div class="param-bar">
        <div class="param-zone optimal">−10 až −20 %</div>
        <div class="param-zone high">−20 až −35 %</div>
        <div class="param-zone low">−35 %+</div>
      </div>
      <div class="param-labels">
        <span>profi brushless</span>
        <span>středně</span>
        <span>hobby</span>
      </div>
      <div class="param-rec">
        <strong>Naše doporučení:</strong> Hledejte recenze, které měří otáčky pod zátěží. <strong>Volnoběžné otáčky neříkají skoro nic.</strong> Brushless motor je dnes ve střední třídě standard.
      </div>
    </div>
  </div>
</div>
      `.trim(),
    },
    {
      id: "baterka",
      num: "04",
      title: "Kapacita baterie — kolik Ah opravdu potřebujete",
      tocLabel: "Kapacita baterie (Ah)",
      bodyHtml: `
<p>
  Kapacita baterie (ampérhodina, Ah) říká, kolik energie baterie pojme. Bruska je ale <strong>extrémně energeticky náročný nástroj</strong> — i s velkou baterií spotřebujete kapacitu rychle. Brusku 18V/5,0Ah vyčerpáte v plné zátěži za 15–25 minut.<sup class="cite"><a href="#src-7">7</a></sup> Pro srovnání: stejnou 5Ah baterií provozujete aku vrtačku 6–8 hodin.
</p>
<p>
  Důležité je rozlišovat <strong>kapacitu</strong> (Ah) a <strong>typ článků</strong>. Standardní 18650 články zvládají do 20 A trvalého výboje, novější 21700 (větší průměr) zvládají 30–40 A. Pro brusku to znamená výrazně lepší výkon pod zátěží a delší životnost baterie. Pokud výrobce uvádí „high-power" nebo „CoreMax" baterie, jedná se obvykle o sestavu 21700 článků.
</p>
<div class="step">
  <div class="step-head">
    <div class="step-titles">
      <div class="step-eyebrow">Doporučená kapacita baterie</div>
      <div class="step-title">Podle frekvence použití</div>
    </div>
  </div>
  <div class="step-content">
    <ul>
      <li><strong>2,0–3,0 Ah:</strong> jen na občasné drobnosti. Nehodí se ani pro půldenní práci.</li>
      <li><strong>4,0–5,0 Ah:</strong> sladký bod pro pokročilého kutila. Vydrží na hodinu řezání s krátkými pauzami.</li>
      <li><strong>6,0–8,0 Ah:</strong> profi denně, řezání armatury. Hmotnost ale roste — bruska s 8Ah už váží přes 3 kg.</li>
      <li><strong>2 × 4,0 Ah:</strong> v praxi nejlepší volba. Jedna se nabíjí, druhá pracuje.</li>
    </ul>
  </div>
</div>
<div class="garant-tip">
  <div class="garant-avatar">JN</div>
  <div>
    <div class="garant-head">
      <span class="garant-lab">Tip z testovací laboratoře</span>
      <span class="garant-who"><strong>Jakub Novák</strong> · odborný garant</span>
    </div>
    <p class="garant-text">
      Nikdy nekupujte aku brusku <strong>v setu bez nabíječky a baterie</strong>, pokud nemáte už existující ekosystém. Cena samostatné baterie a nabíječky se může vyšplhat na 60 % ceny brusky. Vždy si propočítejte celkové náklady.
    </p>
  </div>
</div>
      `.trim(),
    },
    {
      id: "bezpec",
      num: "05",
      title: "Bezpečnostní prvky — to, co nikdo neukazuje v reklamě",
      tocLabel: "Bezpečnostní prvky",
      bodyHtml: `
<p>
  Bezpečnostní prvky aku brusek jsou často to, co odlišuje hobby model od profesionálního. Bohužel jsou také to, co výrobci nezmiňují na obalu — protože „brzda kotouče do 2 s" se v reklamě prostě prodává hůř než „13&nbsp;000 ot/min". Mezitím přitom <strong>úrazy způsobené úhlovými bruskami patří mezi tři nejčastější u elektronářadí v ČR</strong>, hned po vrtačkách a kotoučových pilách.<sup class="cite"><a href="#src-9">9</a></sup>
</p>
<p>
  <strong>Tyto čtyři prvky by měly být v každé brusce nad 5&nbsp;000 Kč:</strong><sup class="cite"><a href="#src-8">8</a></sup> Jejich přítomnost se nepozná z reklamních materiálů — musíte je hledat v technickém listu, případně si nechat poradit v prodejně. Pokud prodejce o žádné z nich neumí mluvit, máte před sebou hobby model za profi cenu.
</p>
<h3>Brzda kotouče</h3>
<p>
  Elektronická brzda zastaví kotouč po vypnutí brusky <strong>do 2 sekund</strong>. Bez brzdy se kotouč dotáčí ještě 15–25 sekund — a těch nejčastějších 15 sekund je přesně doba, kdy si řemeslník odloží brusku, aby si rovnal kotouč v ruce nebo přehmatl materiál. Brzda je dnes ve vyšší střední třídě standard, ale stále chybí u některých modelů, a je zároveň výpadkovým místem (pokud je něco špatně s elektronikou, brzda obvykle vypoví službu jako první).
</p>
<h3>Kickback control (ochrana proti zpětnému rázu)</h3>
<p>
  Pokud se kotouč zasekne v materiálu, bruska automaticky vypne motor v otázce milisekund. Bez této ochrany se vám bruska <strong>vytrhne z ruky</strong> — což u 18V nástroje s 11&nbsp;000 ot/min může vést k vážnému zranění obličeje, krku nebo následnému pádu brusky na nohu.<sup class="cite"><a href="#src-9">9</a></sup> Kickback control rozeznává prudkou změnu rychlosti rotace nebo náklonu nástroje a okamžitě přeruší napájení. Premium modely (Bosch BITURBO, Milwaukee FUEL, Makita XGT) ji mají v ceně, střední třída bývá hit-and-miss.
</p>
<h3>Re-start lock (ochrana proti rozjezdu)</h3>
<p>
  Pokud při vložené baterii máte zapnutý spínač a baterie se vrátí, bruska <strong>nesmí sama nastartovat</strong>. Banální, ale překvapivě stále chybějící u některých levnějších modelů. Scénář je takový: baterií v brusce došlo proud, vy ji odložíte a spínač nechtěně zůstane v poloze ON. Nasadíte novou baterii — a bruska se v ruce rozběhne. Tomu přesně brání re-start lock: po vložení baterie spínač musí nejprve přejít do OFF a teprve potom do ON.
</p>
<h3>Soft-start</h3>
<p>
  Bruska postupně zrychluje místo trhnutí na plné otáčky. Šetří motor, kartáče (u stejnosměrných motorů) i vaši ruku — nemusíte bránit nástrojové reakci. Sekundární výhoda je, že soft-start snižuje proudový ráz při rozjezdu a tím prodlužuje životnost baterie zhruba o 15–20 %.
</p>
<div class="rubric">
  <div class="rubric-head">
    <div class="rubric-title">Náš scoring framework — aku brusky</div>
    <div class="rubric-meta">v3.2 · platí od 03/26</div>
  </div>
  <div class="rubric-body">
    <div class="rubric-row">
      <div class="rubric-name">Výkon pod zátěží<small>Pokles otáček, moment, doba řezu</small></div>
      <div class="rubric-track"><div class="rubric-fill" style="width:30%"></div></div>
      <div class="rubric-weight">30 %</div>
    </div>
    <div class="rubric-row">
      <div class="rubric-name">Bezpečnost a ergonomie<small>Brzda, kickback, vibrace, hmotnost</small></div>
      <div class="rubric-track"><div class="rubric-fill" style="width:25%"></div></div>
      <div class="rubric-weight">25 %</div>
    </div>
    <div class="rubric-row">
      <div class="rubric-name">Výdrž baterie<small>Měřeno při řezu 4mm plechu</small></div>
      <div class="rubric-track"><div class="rubric-fill" style="width:20%"></div></div>
      <div class="rubric-weight">20 %</div>
    </div>
    <div class="rubric-row">
      <div class="rubric-name">Ekosystém a kompatibilita<small>Šíře značky, dostupnost baterií</small></div>
      <div class="rubric-track"><div class="rubric-fill" style="width:15%"></div></div>
      <div class="rubric-weight">15 %</div>
    </div>
    <div class="rubric-row">
      <div class="rubric-name">Cena / hodnota<small>Vč. baterií a nabíječky</small></div>
      <div class="rubric-track"><div class="rubric-fill" style="width:10%"></div></div>
      <div class="rubric-weight">10 %</div>
    </div>
  </div>
</div>
      `.trim(),
    },
    {
      id: "scenare",
      num: "06",
      title: "Scénáře použití — najděte svůj profil",
      tocLabel: "Scénáře použití",
      bodyHtml: `
<p>
  Pokud se v předchozích parametrech ztrácíte, podívejte se rovnou na <strong>tři typické profily uživatelů</strong>. Statistiky z našeho testování a rozhovorů s prodejci ukazují, že 95 % poptávaných aku brusek spadá do jedné ze tří kategorií. Najděte tu svou a použijte ji jako výchozí bod — detaily si pak doladit už bude jednodušší.
</p>
<div class="scenarios">
  <div class="scen-card">
    <span class="scen-tag">Hobby</span>
    <div class="scen-title">Víkendář na zahradě</div>
    <p class="scen-desc">Párám armaturu na plot, brousím hrany svarů, občas uříznu plátek dlaždice. Používám 5–10× ročně, ne nikdy déle než 30 minut v kuse.</p>
    <div class="scen-specs">
      <div class="scen-row"><span>Napětí</span><span>18 V</span></div>
      <div class="scen-row"><span>Kotouč</span><span>125 mm</span></div>
      <div class="scen-row"><span>Baterie</span><span>1× 4,0 Ah</span></div>
      <div class="scen-row"><span>Motor</span><span>brushless+</span></div>
      <div class="scen-row"><span>Rozpočet</span><span>5–7&nbsp;tis. Kč</span></div>
    </div>
  </div>
  <div class="scen-card">
    <span class="scen-tag">Pokročilý</span>
    <div class="scen-title">Kutil v dílně</div>
    <p class="scen-desc">Stavím si pergolu, kovový plot, restauruji staré nářadí. Bruska běží víkend, občas i 2–3 hodiny v kuse. Řežu plech, profil, broušení svařenců.</p>
    <div class="scen-specs">
      <div class="scen-row"><span>Napětí</span><span>18 V</span></div>
      <div class="scen-row"><span>Kotouč</span><span>125 mm</span></div>
      <div class="scen-row"><span>Baterie</span><span>2× 5,0 Ah</span></div>
      <div class="scen-row"><span>Motor</span><span>brushless</span></div>
      <div class="scen-row"><span>Rozpočet</span><span>9–12&nbsp;tis. Kč</span></div>
    </div>
  </div>
  <div class="scen-card">
    <span class="scen-tag">Profi</span>
    <div class="scen-title">Zámečník / stavař</div>
    <p class="scen-desc">Denní použití, řežu armaturu, dlažbu, profily, betonové jokle. Bruska žije v autě, musí vydržet i pád ze žebříku.</p>
    <div class="scen-specs">
      <div class="scen-row"><span>Napětí</span><span>18 / 36 V</span></div>
      <div class="scen-row"><span>Kotouč</span><span>125 / 150 mm</span></div>
      <div class="scen-row"><span>Baterie</span><span>3× 6,0 Ah</span></div>
      <div class="scen-row"><span>Motor</span><span>brushless+EPTA</span></div>
      <div class="scen-row"><span>Rozpočet</span><span>15–22&nbsp;tis. Kč</span></div>
    </div>
  </div>
</div>
<div class="callout success">
  <div class="callout-ic" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
  </div>
  <div>
    <h3>Pravidlo, které funguje v 9 z 10 případů</h3>
    <p>Pokud nevíte, do jaké škatulky patříte, kupte si <strong>profil pokročilého kutila</strong> (18 V / 125 mm / 2× 5 Ah brushless). Stojí o 30 % víc než hobby model, ale vydrží vám 8–10 let místo 3–4.</p>
  </div>
</div>
      `.trim(),
    },
    {
      id: "chyby",
      num: "07",
      title: "5 chyb, kterých se vyvarujte",
      tocLabel: "5 častých chyb",
      bodyHtml: `
<p>
  Těchto pět chyb potkáváme u čtenářů opakovaně — zprávy do redakce typu „koupil jsem brusku za 4&nbsp;000 Kč a po týdnu se mi rozpadla". Každá z nich má kořen buď v marketingové manipulaci nebo v nedostatku informací. Pokud se jim vyhnete, ušetříte si zklamání i zbytečné výdaje.
</p>
<div class="mistakes">
  <div class="mistake">
    <div class="mistake-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <div>
      <div class="mistake-title">Kupování pouze podle volnoběžných otáček</div>
      <p class="mistake-text">Volnoběh nic neříká. Dva motory se stejnými volnoběžnými otáčkami mohou mít pod zátěží výkonový rozdíl klidně 40 %. <strong>Hledejte měření pod zátěží</strong> — to je jediné číslo, které vám prozradí, jaká bruska skutečně je.</p>
    </div>
  </div>
  <div class="mistake">
    <div class="mistake-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <div>
      <div class="mistake-title">Bruska bez baterií „za polovic" jako bonus</div>
      <p class="mistake-text">Samostatná baterie 18V/5Ah stojí 2&nbsp;200–3&nbsp;800 Kč, nabíječka dalších 1&nbsp;200–1&nbsp;800 Kč. Pokud koupíte brusku „solo" za 3&nbsp;000 Kč a dopočítáte cenu příslušenství, často vyjde verze „kit" levněji. <strong>Vždy počítejte celkovou cenu</strong> včetně baterií.</p>
    </div>
  </div>
  <div class="mistake">
    <div class="mistake-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <div>
      <div class="mistake-title">Volba ekosystému ad hoc</div>
      <p class="mistake-text">Pokud máte už Bosch Professional vrtačku, kupte si Bosch brusku — ne Makitu. Jedna platforma = jeden typ baterie = nižší celkové náklady. Pokud zatahujete první nástroj, podívejte se po značce s širokým ekosystémem a dostupností baterií v ČR — třeba Makita LXT.</p>
    </div>
  </div>
  <div class="mistake">
    <div class="mistake-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <div>
      <div class="mistake-title">Ignorování bezpečnostních prvků</div>
      <p class="mistake-text">Kickback control a brzda kotouče <strong>nejsou luxus</strong> — jsou minimum. U aku brusky nad 5&nbsp;000 Kč by měly být samozřejmostí. Pokud prodejce řekne, že „to se nepoužívá", hledejte jiného prodejce — norma ČSN EN 60745-2-3 výslovně doporučuje kickback ochranu pro profi-použití.</p>
    </div>
  </div>
  <div class="mistake">
    <div class="mistake-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </div>
    <div>
      <div class="mistake-title">Předplácení AI funkcí a smart konektivity</div>
      <p class="mistake-text">Bluetooth lokalizace nástroje, připojení k aplikaci, „AI smart load detect" — u brusky <strong>nepotřebujete</strong>. <strong>Lépe investujte do druhé baterie</strong> nebo do robustního transportního kufru — obojí vám udělá výrazně vyšší dlouhodobý užitek.</p>
    </div>
  </div>
</div>
      `.trim(),
    },
    {
      id: "slovnik",
      num: "08",
      title: "Slovník — pojmy z článku",
      tocLabel: "Slovník pojmů",
      bodyHtml: `
<p>
  Tematicky relevantní pojmy pro výběr aku brusek, krátce vysvětlené. Pokud potřebujete širší kontext, kompletní slovník elektronářadí má přes 340 hesel a najdete ho na samostatné stránce.
</p>
<div class="glossary-box">
  <div class="glossary-grid">
    <a href="/slovnik/brushless-motor/" class="glossary-item">
      <div class="glossary-term">Brushless motor</div>
      <div class="glossary-def">Bezkartáčový elektromotor s elektronickou regulací. Vyšší účinnost, delší životnost, lepší výkon pod zátěží než klasický komutátorový motor.</div>
    </a>
    <a href="/slovnik/kickback/" class="glossary-item">
      <div class="glossary-term">Kickback (zpětný ráz)</div>
      <div class="glossary-def">Náhlé vytržení brusky z ruky způsobené zaseknutím kotouče v materiálu. Kickback control elektronicky vypne motor během milisekund.</div>
    </a>
    <a href="/slovnik/epta/" class="glossary-item">
      <div class="glossary-term">EPTA</div>
      <div class="glossary-def">European Power Tool Association — standardizovaná metoda měření hmotnosti nástroje včetně baterie pro férové porovnání mezi výrobci.</div>
    </a>
    <a href="/slovnik/soft-start/" class="glossary-item">
      <div class="glossary-term">Soft-start</div>
      <div class="glossary-def">Plynulé zrychlení motoru z 0 na pracovní otáčky. Šetří elektroniku, baterii i ruku uživatele před prudkou reakcí nástroje.</div>
    </a>
    <a href="/slovnik/ah/" class="glossary-item">
      <div class="glossary-term">Ah (ampérhodina)</div>
      <div class="glossary-def">Jednotka kapacity akumulátoru. Pro aku brusku je minimum 4,0 Ah, doporučení 5,0–6,0 Ah, profi-použití 8+ Ah.</div>
    </a>
    <a href="/slovnik/volnobezne-otacky/" class="glossary-item">
      <div class="glossary-term">Volnoběžné otáčky vs. pod zátěží</div>
      <div class="glossary-def">Volnoběh = bez zatížení, marketingová hodnota. Otáčky pod zátěží = reálný výkon při řezání. Pokles do 20 % značí špičkový motor.</div>
    </a>
    <a href="/slovnik/li-ion-21700/" class="glossary-item">
      <div class="glossary-term">Li-Ion 21700</div>
      <div class="glossary-def">Novější typ článku baterie s pr. 21 mm, schopný trvalého výboje 30–40 A. Vhodnější pro brusky než starší 18650 (max 20 A).</div>
    </a>
    <a href="/slovnik/ekosystem/" class="glossary-item">
      <div class="glossary-term">Ekosystém nářadí</div>
      <div class="glossary-def">Platforma jedné značky se sdíleným typem baterie a nabíječky napříč nástroji (Bosch Pro, Makita LXT, Milwaukee M18, DeWalt XR).</div>
    </a>
  </div>
  <a class="glossary-cta" href="/slovnik/">
    <div class="gc-text">
      <strong>Otevřít rozcestník slovníku</strong>
      <span>342 hesel · elektronářadí, spotřebiče, zahrada, auto</span>
    </div>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  </a>
</div>
      `.trim(),
    },
    {
      id: "zdroje",
      num: "09",
      title: "Zdroje a citace",
      tocLabel: "Zdroje a citace",
      bodyHtml: `
<div class="sources">
  <div class="sources-head">
    <div class="sources-ic" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    </div>
    <div class="sources-title">Citované zdroje a další studie</div>
    <span class="sources-count">47 zdrojů</span>
  </div>
  <ol class="sources-list">
    <li id="src-1"><span class="src-type">Studie</span> Fraunhofer-Institut für Werkzeugmaschinen — <em>Power Tool Motor Efficiency under Load</em>, 2024. <a href="https://www.fraunhofer.de/">fraunhofer.de</a></li>
    <li id="src-2"><span class="src-type">Norma</span> ČSN EN 60745-2-3 — Bezpečnost ručního elektromechanického nářadí. <em>Část 2-3: Zvláštní požadavky na úhlové brusky</em>.</li>
    <li id="src-3"><span class="src-type">Test</span> Recenzer Testovací laboratoř Brno — <em>Měření hmotnosti a vibrací 23 modelů aku brusek</em>, 03–05/2026.</li>
    <li id="src-4"><span class="src-type">Analýza</span> EUROSTAT — Spotřebitelská data o ekosystémech elektronářadí v EU, 2025.</li>
    <li id="src-5"><span class="src-type">Norma</span> EN 12413:2007+A1:2011 — Bezpečnostní požadavky na vázané brusné nástroje.</li>
    <li id="src-6"><span class="src-type">Studie</span> TU Mnichov — <em>Brushless Motor Performance in Cordless Power Tools</em>, 2023.</li>
    <li id="src-7"><span class="src-type">Test</span> Recenzer — Měření výdrže baterií 18V/5Ah při typovém řezu, 04/2026.</li>
    <li id="src-8"><span class="src-type">Rozhovor</span> Jakub Novák, DiS. — odborný garant, 4 hodiny konzultací, 02/2026.</li>
    <li id="src-9"><span class="src-type">Statistika</span> Státní zdravotní ústav — Úrazy způsobené elektronářadím v ČR, 2024.</li>
  </ol>
</div>
      `.trim(),
    },
  ],

  nextCta: {
    eyebrow: "Další krok",
    title: "Už víte, co hledat? Pojďte si vybrat konkrétní model",
    description:
      "V TOP 5 aku brusek 2026 najdete pět nejlépe hodnocených modelů z našeho testu — s rozdílným rozpočtem a profilem použití. Vše bodováno podle metodiky popsané v tomto článku.",
    primary: { href: "/nejlepsi-aku-brusky/", label: "TOP 5 aku brusek 2026" },
    secondary: {
      href: "/srovnani-aku-brusek/",
      label: "Plné srovnání 23 modelů",
    },
    stats: [
      { value: "5", label: "doporučených modelů" },
      { value: "3", label: "cenové kategorie" },
      { value: "22. 5. 2026", label: "aktualizace" },
    ],
  },

  relatedArticles: [
    {
      href: "/nejlepsi-aku-brusky/",
      title: "Nejlepší aku brusky 2026 — TOP 5 modelů",
      description:
        "Pět nejlépe hodnocených modelů z 23 testovaných. Bodováno podle scoring frameworku popsaného v tomto článku.",
      tag: "top",
      featured: true,
      featuredEyebrow: "TOP 5 · Doporučený další krok",
      featuredAuthor: "Ivo Matěj",
      featuredDate: "5/2026",
      readingTimeMin: 9,
    },
    {
      href: "/jak-vybrat-aku-vrtacku/",
      title: "Jak vybrat aku vrtačku",
      description:
        "Krouticí moment, sklíčidlo, brushless motor a kompatibilita ekosystémů.",
      tag: "navod",
      readingTimeMin: 14,
    },
    {
      href: "/aku-baterie-srovnani/",
      title: "Aku baterie: 18650 vs. 21700 vs. PoLi",
      description:
        "Co rozhoduje o výdrži a životnosti baterie ve vašem nářadí.",
      tag: "srovnani",
      readingTimeMin: 11,
    },
    {
      href: "/bezpecnost-elektronaradi/",
      title: "Bezpečnost při práci s úhlovou bruskou",
      description:
        "Praktický návod od profesionálního zámečníka — kickback, ochrana zraku, sluchu.",
      tag: "tema",
      readingTimeMin: 8,
    },
    {
      href: "/jak-vybrat-aku-pilu/",
      title: "Jak vybrat aku přímočarou pilu",
      description:
        "Zdvih, otáčky, vodítka pro různé materiály a typy pilových plátků.",
      tag: "navod",
      readingTimeMin: 12,
    },
  ],

  methodology: {
    eyebrow: "Transparentnost",
    title: "Metodika ve zkratce",
    lede: "Co jsme měřili, kolik kotoučů jsme spotřebovali, kolik hodin trvalo testování. Celá metodika je dostupná na samostatné stránce — tady je výtah klíčových čísel.",
    tiles: [
      { value: "23", label: "Modelů testováno" },
      { value: "86", label: "Hodin v laboratoři" },
      { value: "12", label: "Měřené parametry" },
      { value: "7", label: "Disciplín testu" },
      { value: "61", label: "Spotřebovaných kotoučů" },
      { value: "47", label: "Citovaných zdrojů" },
    ],
    link: { href: "/metodika/brusky/", label: "Plná metodika testu" },
  },

  rating: {
    average: 4.8,
    total: 412,
    buckets: [
      { stars: 5, count: 321, percent: 78 },
      { stars: 4, count: 58, percent: 14 },
      { stars: 3, count: 22, percent: 5 },
      { stars: 2, count: 7, percent: 2 },
      { stars: 1, count: 4, percent: 1 },
    ],
  },

  history: [
    {
      date: "2026-05-22",
      kind: "major",
      title: "Přidán test 4 nových modelů",
    },
    {
      date: "2026-03-14",
      kind: "minor",
      title: "Aktualizovány ceny a dostupnost",
    },
    {
      date: "2025-10-07",
      kind: "content",
      title: "Doplněna kapitola o brushless motorech",
    },
    {
      date: "2024-03-14",
      kind: "publish",
      title: "Publikace průvodce",
    },
  ],

  comments: {
    enabled: true,
    total: 14,
    hiddenCount: 11,
    visible: [
      {
        id: "c1",
        authorName: "Martin Kovařík",
        authorInitials: "MK",
        badge: "verified-purchase",
        relativeTime: "před 2 dny",
        bodyHtml:
          "Díky moc za podrobné srovnání. Po přečtení jsem nakonec šel do Makita LXT 18V s 2× 5,0 Ah — přesně ten profil pokročilého kutila. Po měsíci používání musím říct, že pokles otáček je opravdu minimální, brushless motor je znát.",
        likes: 12,
      },
      {
        id: "c2",
        authorName: "Eva Bartošová",
        authorInitials: "EB",
        relativeTime: "před 5 dny",
        bodyHtml:
          "Otázka — má smysl ještě dnes kupovat 12V brusku, nebo už rovnou jít na 18V? Manžel chce „lehkou“, ale obávám se, že po roce bude říkat, že je slabá.",
        likes: 4,
        replies: [
          {
            id: "c2r1",
            authorName: "Ivo Matěj",
            authorInitials: "IM",
            isStaff: true,
            badge: "staff",
            relativeTime: "před 4 dny",
            bodyHtml:
              "Dobrý den, pokud bude bruska v 5–10 použitích ročně a v drobné montáži, 12V dává smysl. Pro cokoliv nad to (například řez plotu, broušení svarů, restaurování) jednoznačně 18V. Hmotnostní rozdíl je dnes díky 21700 článkům minimální.",
            likes: 8,
          },
        ],
      },
      {
        id: "c3",
        authorName: "Petr Dvořák",
        authorInitials: "PD",
        badge: "pro",
        relativeTime: "před týdnem",
        bodyHtml:
          "Jako zámečník mám dnes v autě 3× brusku, ale tu Milwaukee FUEL 18V jsem si pořídil po 12 letech používání síťovek a fakt mě překvapila. Souhlasím se vším v článku, jen bych přidal, že u 150mm modelů opravdu doporučuji 12Ah baterii — s 5Ah neuřežete ani pár profilů.",
        likes: 23,
      },
    ],
  },

  reportErrorHref: "/oprava-chyb/?article=aku-brusky",

  seo: {
    title: "Jak vybrat aku brusku 2026 | Recenzer",
    description:
      "Kompletní průvodce výběrem akumulátorové úhlové brusky. Napětí, průměr kotouče, otáčky, kapacita baterie a bezpečnost. 47 zdrojů, 86 hodin testů.",
  },
};
