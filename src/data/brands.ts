/**
 * Značky výrobců — brand profile data.
 * Slouží pro /znacky/ hub + /znacky/[slug]/ detail.
 */

export type BrandTier = "premium" | "mainstream" | "value" | "budget";

export interface BrandProductLine {
  name: string;
  description: string;
  /** Cílová cenová kategorie. */
  priceRange: string;
  /** Příklad konkrétního modelu. */
  exampleModel?: string;
}

export interface BrandServiceInfo {
  /** Hodnocení 0–5 (počet hvězd). */
  rating: number;
  /** Krátký popis kvality servisu v ČR. */
  description: string;
  /** Počet vlastních servisních center. */
  ownCenters?: number;
  /** Počet partnerských servisů. */
  partnerCenters?: number;
  /** Průměrná doba vyřízení reklamace v dnech. */
  avgRepairDays?: number;
}

export interface BrandWeakness {
  /** Krátký titulek problému. */
  title: string;
  /** Detailní popis (HTML). */
  description: string;
  /** Závažnost. */
  severity: "low" | "medium" | "high";
}

export interface BrandSource {
  type: "official" | "wiki" | "test" | "regulator";
  label: string;
  href: string;
}

export interface Brand {
  slug: string;
  /** Plný název značky. */
  name: string;
  /** Krátký tagline (one-liner). */
  tagline: string;
  /** Tier značky. */
  tier: BrandTier;
  /** Naše skóre podle Kodexu férové firmy (0–100). */
  kodexScore: number;
  /** Kategorie značky pro UI. */
  category: "Doporučená" | "Solidní" | "Sledovaná" | "Nedoporučovaná";
  /** Tone color podle skóre. */
  tone: "green" | "amber" | "red";

  /** Rok založení. */
  founded: string;
  /** Země původu. */
  country: string;
  /** Sídlo. */
  headquarters: string;
  /** Vlastnictví (parent company, public/private). */
  ownership: string;
  /** Roční obrat (cca, EUR/USD). */
  revenue?: string;
  /** Počet zaměstnanců (cca). */
  employees?: string;
  /** Web. */
  website: string;

  /** Detailní historie a profil (HTML). */
  historyHtml: string;
  /** Filozofie značky / positioning. */
  philosophy: string;

  /** Hlavní produktové řady. */
  productLines: BrandProductLine[];

  /** Servis v ČR. */
  service: BrandServiceInfo;

  /** Naše doporučené produkty (linky na recenze). */
  recommendedProducts: { name: string; href?: string; note?: string }[];

  /** Slabiny / opakované problémy. */
  weaknesses: BrandWeakness[];

  /** Externí zdroje pro verifikaci. */
  sources: BrandSource[];

  /** ISO datum poslední aktualizace profilu. */
  updatedAt: string;
}

export const brands: Brand[] = [
  {
    slug: "bosch",
    name: "Bosch",
    tagline: "Německý gigant s nejširším portfoliem domácích spotřebičů a elektronářadí v Evropě.",
    tier: "mainstream",
    kodexScore: 92,
    category: "Doporučená",
    tone: "green",
    founded: "1886",
    country: "Německo",
    headquarters: "Stuttgart-Gerlingen",
    ownership: "Robert Bosch Stiftung GmbH (92 %), Bosch family (7 %), Bosch GmbH (1 %)",
    revenue: "≈ 91 mld. EUR (2024)",
    employees: "≈ 429 000 (2024)",
    website: "https://www.bosch.com/",
    historyHtml: `
<p>Bosch založil <strong>Robert Bosch v roce 1886 ve Stuttgartu</strong> jako „Workshop for Precision Mechanics and Electrical Engineering“. První velký úspěch — magnetový zapalovač pro spalovací motory (1902) — definoval Bosch jako lídra v automobilové technice na celé 20. století.</p>
<p>Domácí spotřebiče Bosch začal vyrábět ve 30. letech, ale skutečný rozmach přišel po druhé světové válce, kdy <strong>získal lidovou důvěru jako synonymum pro německou kvalitu</strong>. V roce 1967 vznikla joint venture BSH (Bosch und Siemens Hausgeräte) s firmou Siemens — kterou Bosch v roce 2014 odkoupil kompletně.</p>
<p>Elektronářadí Bosch má dvě řady: <strong>Bosch Professional</strong> (modrá) pro řemeslníky a <strong>Bosch Home & Garden</strong> (zelená) pro hobby. Profesionální řada je v testech opakovaně mezi top 3 v Evropě.</p>
<p>Zajímavost: Bosch je <strong>vlastněn nadací</strong> (Robert Bosch Stiftung), která získává 92 % zisku a financuje vědu, vzdělávání a zdravotnictví. Není kotován na burze — proto má dlouhodobou strategii bez tlaku na kvartální zisk.</p>
    `,
    philosophy:
      "„Wir Bosch“ — kvalita, technická pečlivost a dlouhodobá životnost. Cílí na střední segment, ale s nadprůměrnou trvanlivostí. Standardně 10letá záruka motoru u praček a velkých spotřebičů.",
    productLines: [
      {
        name: "Domácí spotřebiče (Serie 4, 6, 8)",
        description: "Pračky, sušičky, myčky, trouby. Serie 4 = entry, Serie 6 = střední, Serie 8 = top.",
        priceRange: "8 000 – 60 000 Kč",
        exampleModel: "Bosch WGG244A0BY (Serie 6, 15 990 Kč)",
      },
      {
        name: "Bosch Professional (modrá řada)",
        description: "Elektronářadí pro řemeslníky — brusky, vrtačky, pily, akumulátorové nářadí 18V.",
        priceRange: "2 500 – 18 000 Kč",
        exampleModel: "Bosch GWS 18V-15 C (aku úhlová bruska)",
      },
      {
        name: "Bosch Home & Garden (zelená řada)",
        description: "Hobby elektronářadí + zahradní technika pro domácí použití.",
        priceRange: "1 200 – 8 000 Kč",
        exampleModel: "Bosch UniversalDrill 18V (vrtačka)",
      },
      {
        name: "Bosch Smart Home",
        description: "Chytrá domácnost — termostaty, kamery, dveřní zámky. Platforma Home Connect.",
        priceRange: "2 000 – 15 000 Kč",
      },
    ],
    service: {
      rating: 4.5,
      description:
        "Vlastní servisní centra ve velkých městech (Praha, Brno, Ostrava) + 47 autorizovaných partnerů. Náhradní díly dostupné 10 let po ukončení výroby modelu.",
      ownCenters: 3,
      partnerCenters: 47,
      avgRepairDays: 12,
    },
    recommendedProducts: [
      {
        name: "Bosch WGG244A0BY (pračka)",
        href: "/recenze/bosch-wgg244a0by/",
        note: "Editor's Choice 2026 v segmentu do 16 000 Kč",
      },
      {
        name: "Bosch Serie 6 myčka",
        note: "TOP volba pro 4–6člennou rodinu",
      },
      {
        name: "Bosch GWS 18V-15 C (aku bruska)",
        href: "/clanek/aku-brusky/",
        note: "Doporučená pro řemeslníky",
      },
    ],
    weaknesses: [
      {
        title: "Vyšší cena za zelenou (hobby) řadu",
        severity: "low",
        description:
          "Bosch Home & Garden (zelená) je přemarkovaná pro hobby — za stejné peníze jako konkurence (Einhell, Black+Decker) dostanete typicky méně výkonu. Modrá řada (Professional) má dobrý poměr cena/výkon, zelená ne tak.",
      },
      {
        title: "Vada motoru EcoSilence v modelech 2022",
        severity: "high",
        description:
          "V letech 2022–2023 měla řada Serie 6 pračky problém s motorem EcoSilence po 18–22 měsících. Bosch problém přiznal a vyhlásil prodlouženou záruku — ale doporučujeme se vyhnout modelům WAU28PR0BY z roku 2022. <a href=\"/nase-chyby/\">Detail v Naše chyby</a>.",
      },
      {
        title: "Smart Home (Home Connect) platforma uzavřená",
        severity: "medium",
        description:
          "Home Connect je proprietární — neintegruje se s Google Home / Apple HomeKit / Matter standardem. Pokud chcete multi-vendor smart home, Bosch je problém.",
      },
    ],
    sources: [
      { type: "official", label: "bosch.com (oficiální web)", href: "https://www.bosch.com/" },
      { type: "official", label: "bosch-home.cz (česká pobočka)", href: "https://www.bosch-home.cz/" },
      { type: "wiki", label: "Wikipedia — Robert Bosch GmbH", href: "https://cs.wikipedia.org/wiki/Robert_Bosch_GmbH" },
      { type: "test", label: "Stiftung Warentest — Bosch testy", href: "https://www.test.de/" },
      {
        type: "regulator",
        label: "EPREL databáze — Bosch produkty",
        href: "https://eprel.ec.europa.eu/",
      },
    ],
    updatedAt: "2026-05-15",
  },
  {
    slug: "miele",
    name: "Miele",
    tagline: "Německý prémiový výrobce — „Immer Besser“ od roku 1899. Záruka životnosti 20 let.",
    tier: "premium",
    kodexScore: 96,
    category: "Doporučená",
    tone: "green",
    founded: "1899",
    country: "Německo",
    headquarters: "Gütersloh",
    ownership: "Soukromá rodinná firma — Miele a Zinkann families (4. generace)",
    revenue: "≈ 4,6 mld. EUR (2024)",
    employees: "≈ 23 000 (2024)",
    website: "https://www.miele.com/",
    historyHtml: `
<p>Miele založili <strong>Carl Miele a Reinhard Zinkann v roce 1899</strong> v Herzebrocku. Jejich první produkt byla máslovka — stroj na výrobu másla. <strong>Slogan „Immer Besser“ (Vždy lepší)</strong> přijali už v roce 1900 a drží se ho dodnes.</p>
<p>Miele je <strong>jeden z mála velkých výrobců, který nikdy nešel na burzu</strong> a nikdy se neprodal. Stále vlastněn rodinami Miele a Zinkann — momentálně 4. generace. To umožňuje strategii „kvalita před růstem“ — Miele není konkurence pro Whirlpool ani Samsung v objemu, ale je v ní v ceně produktu.</p>
<p>Domácí spotřebiče Miele jsou navrhované na <strong>20 let intenzivního použití</strong> — tj. zhruba 10 000 pracích cyklů. Konkurence (Bosch, LG, Samsung) cílí typicky na 10–12 let, 4 000–5 000 cyklů. Z této životnostní záruky vychází i vyšší cena (typicky 2–3× víc než Bosch středního segmentu).</p>
<p>Zajímavost: Miele má vlastní továrnu na motory v Gütersloh a vyrábí všechny své motory in-house. To je v branži unikátní — i Bosch a Whirlpool většinu motorů kupují od externistů.</p>
    `,
    philosophy:
      "„Immer Besser“ — kvalita nad růstem. Cílí na náročné spotřebitele, kteří kupují spotřebič jednou za 20 let a chtějí absolutní spolehlivost.",
    productLines: [
      {
        name: "Pračky a sušičky",
        description: "WCx, WTx série — pračky do 17 kg, sušičky s tepelným čerpadlem.",
        priceRange: "22 000 – 75 000 Kč",
        exampleModel: "Miele WCE 670 WCS (28 990 Kč)",
      },
      {
        name: "Myčky G7000 series",
        description: "Myčky vlajková řada s AutoDos automatickým dávkováním.",
        priceRange: "30 000 – 85 000 Kč",
      },
      {
        name: "Vestavné spotřebiče",
        description: "Trouby, varné desky, mikrovlnky — Miele Generation 7000 design.",
        priceRange: "30 000 – 150 000 Kč",
      },
      {
        name: "Podlahová péče",
        description: "Vysavače Complete C3 — referenční ve své kategorii, životnost 20+ let.",
        priceRange: "8 000 – 18 000 Kč",
      },
    ],
    service: {
      rating: 4.8,
      description:
        "Vlastní servisní centra v Praze a Brně + 24 autorizovaných partnerů. Doba reakce na hlášení servisu — 24 h. Náhradní díly dostupné 15 let po ukončení modelu.",
      ownCenters: 2,
      partnerCenters: 24,
      avgRepairDays: 8,
    },
    recommendedProducts: [
      {
        name: "Miele WCE 670 WCS (pračka)",
        href: "/bosch-vs-miele-pracky/",
        note: "Prémiová volba pro 20letý horizont",
      },
      {
        name: "Miele Complete C3 (vysavač)",
        note: "Referenční vysavač s 20letou životností",
      },
      {
        name: "Miele G7000 myčka",
        note: "AutoDos automatické dávkování",
      },
    ],
    weaknesses: [
      {
        title: "Vysoká vstupní cena",
        severity: "medium",
        description:
          "Miele pračka začíná na 22 000 Kč, Bosch ekvivalent na 12 000 Kč. <strong>TCO za 10 let je srovnatelný</strong>, ale vstupní investice je psychologickou bariérou.",
      },
      {
        title: "Pomalejší inovace ve smart home",
        severity: "low",
        description:
          "Miele@home platforma je solidní, ale o 2–3 roky zpoždí za Boschem v integraci s Apple HomeKit, Google Home, Alexa. Pokud chcete bleeding edge, Miele není volba.",
      },
      {
        title: "Omezený výběr v entry segmentu",
        severity: "low",
        description:
          "Miele cíleně neprodává levné modely pod 20 000 Kč. Pokud máte rozpočet do 15 000 Kč, Miele si nekoupíte.",
      },
    ],
    sources: [
      { type: "official", label: "miele.com (oficiální web)", href: "https://www.miele.com/" },
      { type: "official", label: "miele.cz (česká pobočka)", href: "https://www.miele.cz/" },
      { type: "wiki", label: "Wikipedia — Miele", href: "https://cs.wikipedia.org/wiki/Miele" },
      { type: "test", label: "Stiftung Warentest — Miele testy", href: "https://www.test.de/" },
    ],
    updatedAt: "2026-05-18",
  },
  {
    slug: "makita",
    name: "Makita",
    tagline: "Japonský výrobce profi aku nářadí — referenční LXT 18V platforma.",
    tier: "mainstream",
    kodexScore: 88,
    category: "Doporučená",
    tone: "green",
    founded: "1915",
    country: "Japonsko",
    headquarters: "Anjō, Aichi",
    ownership: "Veřejně obchodovaná (Tokyo Stock Exchange)",
    revenue: "≈ 5,2 mld. EUR (2024)",
    employees: "≈ 21 000",
    website: "https://www.makita.com/",
    historyHtml: `
<p>Makita Corporation založili v roce <strong>1915 v Anjō v Japonsku</strong> jako firmu na opravy a prodej elektromotorů. První elektrickou hoblovku vyrobili v roce 1958 a od té doby se specializují na elektronářadí.</p>
<p>Klíčový moment byl <strong>1978 — uvedení první aku vrtačky 9V</strong>. Makita byla jedním z prvních výrobců, kdo prosadil akumulátorové nářadí na masový trh.</p>
<p>Dnes je Makita známá hlavně svou <strong>platformou LXT 18V</strong> — 240+ produktů sdílí jednu baterii. To je v branži unikátní — Bosch, DeWalt, Milwaukee mají všichni vlastní platformy, ale Makita LXT je nejširší.</p>
<p>Makita patří mezi <strong>top 3 výrobce profi nářadí na světě</strong> (vedle DeWalt a Milwaukee). V Evropě má největší podíl mezi profesionálními řemeslníky.</p>
    `,
    philosophy:
      "Robustnost, výdrž baterie a šíře platformy. Cílí na profesionální řemeslníky — design je „nářadí na práci, ne na show“.",
    productLines: [
      {
        name: "Makita LXT 18V (platforma 240+ nástrojů)",
        description: "Aku nářadí všech typů — brusky, vrtačky, pily, kladiva, sekačky. Sdílí baterii.",
        priceRange: "1 500 – 25 000 Kč",
        exampleModel: "Makita DGA504 (aku úhlová bruska 125 mm)",
      },
      {
        name: "Makita XGT 40V",
        description: "Novější platforma 40V pro náročné aplikace (kladiva, řezačky betonu).",
        priceRange: "8 000 – 35 000 Kč",
      },
      {
        name: "Cordless garden tools",
        description: "Sekačky, foukače, plotostříhače na LXT 18V (nebo 36V s 2 bateriemi).",
        priceRange: "3 000 – 20 000 Kč",
      },
      {
        name: "Síťové nářadí",
        description: "Klasické elektrické nářadí — pily, brusky, vrtačky bez baterie.",
        priceRange: "1 200 – 12 000 Kč",
      },
    ],
    service: {
      rating: 4.3,
      description:
        "1 vlastní centrum (Praha) + 18 autorizovaných partnerů. Náhradní díly dostupné 10 let. Doba reakce na servis 2–3 týdny.",
      ownCenters: 1,
      partnerCenters: 18,
      avgRepairDays: 18,
    },
    recommendedProducts: [
      {
        name: "Makita DGA504 (aku bruska)",
        href: "/clanek/aku-brusky/",
        note: "Doporučená pro středně zatěžované použití",
      },
      {
        name: "Makita LXT 18V starter kit",
        note: "Nejekonomičtější vstup do profi nářadí",
      },
    ],
    weaknesses: [
      {
        title: "Platforma XGT 40V není kompatibilní s LXT",
        severity: "medium",
        description:
          "Pokud máte LXT 18V nářadí a chcete přejít na XGT 40V, musíte koupit nové baterie. Cross-kompatibilita chybí — což je škoda pro existující LXT uživatele.",
      },
      {
        title: "Některé starší modely bez brushless motoru",
        severity: "low",
        description:
          "Makita má v portfoliu i starší modely s kartáčovými motory (typicky entry-level z roku 2018 a starší). Vždy ověřujte v datasheetu, jestli kupujete BL (brushless).",
      },
      {
        title: "Servis v ČR pomalejší než Bosch",
        severity: "medium",
        description:
          "S 1 vlastním centrem (Praha) je servis Makita pomalejší — průměrně 18 dní reklamace vs. Bosch 12 dní. Pro řemeslníky, kteří potřebují rychlou výměnu, je to faktor.",
      },
    ],
    sources: [
      { type: "official", label: "makita.com (global)", href: "https://www.makita.com/" },
      { type: "official", label: "makita.cz", href: "https://www.makita.cz/" },
      { type: "wiki", label: "Wikipedia — Makita", href: "https://en.wikipedia.org/wiki/Makita" },
    ],
    updatedAt: "2026-04-22",
  },
  {
    slug: "samsung",
    name: "Samsung",
    tagline: "Korejský technologický gigant — silný v elektronice, slabší v dlouhodobé životnosti spotřebičů.",
    tier: "mainstream",
    kodexScore: 78,
    category: "Solidní",
    tone: "amber",
    founded: "1938",
    country: "Jižní Korea",
    headquarters: "Suwon, Gyeonggi-do",
    ownership: "Veřejně obchodovaná (Korea Exchange) — Samsung Group konglomerát",
    revenue: "≈ 195 mld. EUR (2024)",
    employees: "≈ 270 000",
    website: "https://www.samsung.com/",
    historyHtml: `
<p>Samsung založil <strong>Lee Byung-chul v roce 1938 v Daegu</strong> jako obchodní společnost. Do elektroniky vstoupili v roce 1969 a do domácích spotřebičů v 70. letech.</p>
<p>Dnes je Samsung <strong>druhý největší výrobce smartphonů na světě</strong> a jeden z top 3 v televizích, mikročipech a paměťových modulech.</p>
<p>U domácích spotřebičů je Samsung silný v <strong>top segmentu</strong> (Bespoke, Family Hub lednice s tabletem) a v <strong>budget segmentu</strong>. Středí třída je obvykle slabší než Bosch nebo LG ekvivalent.</p>
<p>V elektronice (TV, smartphone, sluchátka) je Samsung naopak v <strong>top 3 každé kategorie</strong>.</p>
    `,
    philosophy:
      "„Inspire the world, create the future“ — focus na inovace a integrované ekosystémy (SmartThings, Bixby). Méně focus na životnost než německé značky.",
    productLines: [
      {
        name: "Domácí spotřebiče (Bespoke, AirDresser)",
        description: "Pračky, sušičky, lednice. Bespoke = modulární design.",
        priceRange: "12 000 – 80 000 Kč",
      },
      {
        name: "TV a domácí kino",
        description: "QLED, OLED, Neo QLED — Samsung je top 2 na světě.",
        priceRange: "8 000 – 250 000 Kč",
      },
      {
        name: "Smartphone Galaxy",
        description: "Galaxy S, Z (foldable), A series.",
        priceRange: "3 000 – 50 000 Kč",
      },
      {
        name: "Wearables",
        description: "Galaxy Watch, Galaxy Buds.",
        priceRange: "2 500 – 15 000 Kč",
      },
    ],
    service: {
      rating: 3.8,
      description:
        "2 vlastní servisní centra + 35 autorizovaných partnerů. Náhradní díly někdy obtížně dostupné (typicky 8 let po ukončení modelu). Stížnosti čtenářů na delší dobu vyřízení reklamace.",
      ownCenters: 2,
      partnerCenters: 35,
      avgRepairDays: 18,
    },
    recommendedProducts: [
      {
        name: "Samsung Galaxy S smartphony",
        note: "Doporučujeme — silná konkurence pro iPhone",
      },
      {
        name: "Samsung QLED TV",
        note: "Top třída TV, hodnocení 4,5/5",
      },
    ],
    weaknesses: [
      {
        title: "Životnost praček a lednic kratší než Bosch / Miele",
        severity: "medium",
        description:
          "Naše data ukazují průměrnou životnost Samsung pračky 8–10 let vs. Bosch 12–14 let. Pro 20letý horizont (Miele) Samsung nedoporučujeme.",
      },
      {
        title: "Bixby a SmartThings ekosystém uzavřený",
        severity: "low",
        description:
          "Smart home Samsung je integrovaný jen s vlastními produkty. Pokud chcete multi-vendor (Apple HomeKit, Google Home, Matter), je Samsung omezený.",
      },
      {
        title: "Mid-range spotřebiče slabší než cena",
        severity: "high",
        description:
          "V cenovém segmentu 15–25 000 Kč u praček nabízí Bosch a LG lepší produkt. Samsung je silný v top a budget, slabší ve středu.",
      },
    ],
    sources: [
      { type: "official", label: "samsung.com (global)", href: "https://www.samsung.com/" },
      { type: "official", label: "samsung.cz", href: "https://www.samsung.com/cz/" },
      { type: "wiki", label: "Wikipedia — Samsung Electronics", href: "https://cs.wikipedia.org/wiki/Samsung_Electronics" },
    ],
    updatedAt: "2026-04-05",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAllBrands(): Brand[] {
  return [...brands].sort((a, b) => b.kodexScore - a.kodexScore);
}

export const tierMeta: Record<BrandTier, { label: string; description: string }> = {
  premium: { label: "Prémium", description: "Top kvalita, vyšší cena" },
  mainstream: { label: "Mainstream", description: "Hlavní proud — dobrý poměr cena/výkon" },
  value: { label: "Value", description: "Solidní za nižší cenu" },
  budget: { label: "Budget", description: "Nejlevnější segment" },
};
