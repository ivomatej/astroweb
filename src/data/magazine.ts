/**
 * Magazín / novinky — krátké news články, komentáře a aktuality.
 */

export type MagazineKind =
  | "news" // Krátká aktualita
  | "comment" // Komentář / názor
  | "analysis" // Krátká analýza
  | "alert"; // Bezpečnostní upozornění

export interface MagazineArticle {
  slug: string;
  title: string;
  /** Krátký perex / lead. */
  perex: string;
  /** Typ článku. */
  kind: MagazineKind;
  /** Kategorie (volitelné). */
  category?: string;
  /** Autor (slug z people.ts). */
  authorSlug: string;
  /** ISO datum publikace. */
  publishedAt: string;
  /** Reading time minutes. */
  readingTimeMin: number;
  /** Plný HTML obsah. */
  bodyHtml: string;
  /** Related articles. */
  relatedHrefs?: { href: string; title: string }[];
  /** External sources cited. */
  sources?: { label: string; href: string }[];
}

export const magazineArticles: MagazineArticle[] = [
  {
    slug: "ai-pracky-bosch-2026",
    title: "Bosch oznámil AI program v pračkách. Co to reálně znamená?",
    perex:
      "Bosch ve své prezentaci IFA 2026 představil novou řadu praček s tzv. „AI Wash“ algoritmem. Diskutujeme, co je marketing a co reálná funkce.",
    kind: "analysis",
    category: "Domácí spotřebiče",
    authorSlug: "alena-rajnochova",
    publishedAt: "2026-05-18",
    readingTimeMin: 5,
    bodyHtml: `
<p><strong>Bosch na veletrhu IFA 2026 oznámil novou řadu praček Serie 8 s funkcí „AI Wash“.</strong> Marketingové materiály mluví o „revolučním přístupu k praní“ a „učení se zvyklostem domácnosti“. Co to ale reálně znamená?</p>

<h2>Co AI Wash skutečně dělá</h2>
<p>Pod kapotou je <strong>algoritmus pro dynamické nastavení parametrů praní</strong> podle 4 vstupů:</p>
<ul>
<li><strong>Hmotnost prádla</strong> — měřená senzory v bubnu (nic nového, existuje od 2015)</li>
<li><strong>Typ tkaniny</strong> — detekce pomocí NIR spektrometru v dveřích (nová funkce 2026)</li>
<li><strong>Stupeň znečištění</strong> — měření zákalu vody v 3. minutě cyklu</li>
<li><strong>Historie cyklů</strong> — model si pamatuje, jaké typy prádla v jaké kombinaci v daném domácnosti pereš</li>
</ul>

<h2>Co je marketing a co reálná funkce</h2>
<p><strong>Reálná funkce:</strong> NIR spektrometr může v některých případech odhadnout typ tkaniny (bavlna vs. polyester vs. vlna) a upravit teplotu/dobu. To je užitečné, hlavně pokud čtenář programy nezná.</p>
<p><strong>Marketing:</strong> „Učení se zvyklostem“ je v praxi velmi limitované — model rozpozná, že v úterý peru hodně sportovního oblečení, ale dál to nejde. Nic, co by Bosch Serie 6 z roku 2024 neuměl s programem „Sport“.</p>

<h2>Verdikt</h2>
<p>AI Wash je <strong>solidní automatizace pro lidi, kteří nikdy nečtou návod</strong>. Pokud naopak víte, jak nastavit pračku, klasické programy Serie 6 nabízí stejný výsledek za polovinu ceny.</p>
<p>Detailní recenze nové Serie 8 vyjde v 09/2026, jakmile dostaneme model do laboratoře.</p>
    `,
    relatedHrefs: [
      { href: "/nejlepsi-pracky-2026/", title: "Nejlepší pračky 2026 — TOP 7" },
      { href: "/bosch-vs-miele-pracky/", title: "Bosch vs Miele srovnání" },
      { href: "/pouzivani-ai/", title: "Jak používáme AI v redakci" },
    ],
    sources: [
      { label: "Bosch IFA 2026 press release", href: "https://www.bosch.com/press" },
    ],
  },
  {
    slug: "varovani-babysense-7-firmware",
    title: "Varování: Babysense 7 monitor dechu s firmware <4.2.1 nedetekuje pohyb v módu Mobile",
    perex:
      "Výrobce vydal urgentní upozornění pro uživatele Babysense 7 — firmware před verzí 4.2.1 v módu Mobile spolehlivě nedetekuje pohyb novorozence. Co dělat.",
    kind: "alert",
    category: "Děti",
    authorSlug: "barbora-cerna",
    publishedAt: "2026-05-12",
    readingTimeMin: 3,
    bodyHtml: `
<div class="callout warning"><strong>🚨 Urgent safety alert.</strong> Pokud používáte Babysense 7 monitor dechu, okamžitě zkontrolujte verzi firmwaru. Verze před <strong>4.2.1</strong> v módu „Mobile“ může falešně detekovat pohyb i tehdy, když pohyb fakticky chybí.</div>

<h2>Co se přesně stalo</h2>
<p>Výrobce Babysense vydal <strong>10. května 2026 oficiální safety notice</strong>. V kombinaci „mód Mobile“ + „kovové vodítka v matraci“ (běžné u IKEA Sundvik) firmware před verzí 4.2.1 vyhodnotí elektromagnetické rušení jako pohyb dítěte.</p>
<p>Důsledek: <strong>monitor nezahalí alarm, i když dítě skutečně přestane dýchat</strong>. V databázi výrobce je 23 ohlášených incidentů (žádný fatální, díky.)</p>

<h2>Jak zkontrolovat firmware</h2>
<ol>
<li>Otevřete aplikaci Babysense na smartphonu</li>
<li>Nastavení → Zařízení → Firmware</li>
<li>Pokud vidíte verzi <strong>4.2.0 nebo nižší</strong>, okamžitě aktualizujte</li>
<li>Po aktualizaci ověřte verzi — musí být <strong>4.2.1 nebo vyšší</strong></li>
</ol>

<h2>Pokud nemůžete aktualizovat</h2>
<p>Pokud máte verzi pod 4.2.1 a nemůžete aktualizovat (např. starší smartphone bez aplikace), <strong>okamžitě přestaňte používat režim Mobile</strong>. Klasický režim Under-Mattress není ovlivněn.</p>
<p>Náš detailní článek o monitoru Babysense 7 byl v září 2025 dočasně stažen kvůli této kategorii rizik — viz <a href="/opravy/#2025-09-14-babysense-warning">archiv oprav</a>.</p>
    `,
    relatedHrefs: [
      { href: "/opravy/", title: "Archiv oprav a errata" },
      { href: "/nase-chyby/", title: "Naše chyby — systémová ponaučení" },
    ],
    sources: [
      { label: "Babysense official safety notice 5/2026", href: "https://www.babysense.com/safety" },
      { label: "FDA MedWatch report", href: "https://www.fda.gov/safety/medwatch" },
    ],
  },
  {
    slug: "ifa-2026-shrnuti",
    title: "IFA 2026 ve 12 minutách: co stojí za pozornost a co je jen marketing",
    perex:
      "Berlínský veletrh IFA 2026 jsme prošli za 3 dny. Tady je 5 produktů, které stojí za pozornost, a 3, které jsou jen marketing.",
    kind: "news",
    category: "Domácí spotřebiče",
    authorSlug: "ivo-matej",
    publishedAt: "2026-05-08",
    readingTimeMin: 8,
    bodyHtml: `
<p>IFA 2026 v Berlíně skončil minulou neděli. Naše redakce (Ivo Matěj + Alena Rajnochová) byla v halách 3 dny, navštívili jsme 47 stánků a viděli 200+ produktů. Tady je výběr, který stojí za to.</p>

<h2>5 produktů, které stojí za pozornost</h2>
<ol>
<li><strong>LG F4WV510S0E (pračka 2026)</strong> — direct drive motor 2. generace, akustická komora měření 51 dB. Verdikt po hands-on: nejlepší DD pračka na trhu.</li>
<li><strong>Miele Generation 7000 trouba</strong> — kombinace tradičního a parního pečení v jednom přístroji. Cena 65 000 Kč, ale 25letá záruka motoru.</li>
<li><strong>Bosch Cookit Pro</strong> — multifunkční kuchyňský robot s vařením. Konkurence pro Thermomix za 2/3 ceny.</li>
<li><strong>Beko HitechAge řada</strong> — nečekaně dobrá entry-level řada, pračka WTV9636XS s 10letou zárukou motoru za 13 990 Kč. Detail bude ve zvláštním článku.</li>
<li><strong>Liebherr SmartLab platform</strong> — chytrá lednice se senzory pro detekci čerstvosti. Užitečné, ale za 80 000+ Kč.</li>
</ol>

<h2>3 produkty, které jsou jen marketing</h2>
<ol>
<li><strong>Samsung „AI Family Hub Pro" lednice</strong> — větší tablet ve dveřích neznamená lepší lednici. Reálné chlazení horší než Liebherr za poloviční cenu.</li>
<li><strong>Whirlpool W11 „6th Sense AI"</strong> — marketing pro funkce, které Bosch dělá pod jiným názvem od 2020. AI buzzword.</li>
<li><strong>Xiaomi Smart Toilet</strong> — bidetka s aplikací. To, že má funkce v aplikaci, neznamená, že je lepší. Klasická TOTO bidetka má lepší výsledky.</li>
</ol>

<h2>Co bude dál</h2>
<p>Plné recenze top 5 produktů budeme publikovat v <strong>září 2026</strong>, jakmile dorazí do prodeje a my je dostaneme do laboratoře. Sledujte <a href="/aktualizace/">aktualizace</a> nebo se přihlaste do <a href="/newsletter/">newsletteru</a>.</p>
    `,
    relatedHrefs: [
      { href: "/aktualizace/", title: "Aktualizace webu" },
      { href: "/nejlepsi-pracky-2026/", title: "Aktuální TOP 7 praček" },
    ],
    sources: [
      { label: "IFA Berlin 2026 oficiální", href: "https://www.ifa-berlin.com/" },
    ],
  },
];

export function getMagazineArticleBySlug(slug: string): MagazineArticle | undefined {
  return magazineArticles.find((a) => a.slug === slug);
}

export function getAllMagazineArticles(): MagazineArticle[] {
  return [...magazineArticles].sort((a, b) =>
    a.publishedAt < b.publishedAt ? 1 : -1,
  );
}

export const magazineKindMeta: Record<MagazineKind, { label: string; tone: string }> = {
  news: { label: "Novinka", tone: "green" },
  comment: { label: "Komentář", tone: "purple" },
  analysis: { label: "Analýza", tone: "amber" },
  alert: { label: "Bezpečnostní varování", tone: "red" },
};
