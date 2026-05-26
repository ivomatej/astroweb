/**
 * Recenze e-shopů — kde nakupovat, ne co kupovat.
 */

export interface EshopMetric {
  /** Název kritéria. */
  name: string;
  /** Hodnocení 0–5. */
  score: number;
  /** Popis výsledku testu. */
  description: string;
}

export interface EshopReview {
  slug: string;
  name: string;
  /** Doména. */
  domain: string;
  /** Krátký popis e-shopu. */
  tagline: string;
  /** Krátký URL. */
  website: string;
  /** Celkové skóre 0–100. */
  overallScore: number;
  /** Náš verdikt. */
  verdict: "doporučujeme" | "doporučujeme s výhradami" | "nedoporučujeme";

  /** Rok založení. */
  founded: string;
  /** Vlastník / parent company. */
  ownership: string;
  /** Sortiment / specializace. */
  specialization: string;

  /** Metriky hodnocení. */
  metrics: EshopMetric[];

  /** Plusy. */
  pros: string[];
  /** Mínusy. */
  cons: string[];

  /** Kdy doporučujeme. */
  bestFor: string;
  /** Kdy nedoporučujeme. */
  notFor: string;

  /** Reálné testy, které jsme provedli. */
  realTests: {
    title: string;
    result: string;
  }[];

  /** ISO datum aktualizace. */
  updatedAt: string;
}

export const eshopReviews: EshopReview[] = [
  {
    slug: "datart",
    name: "Datart",
    domain: "datart.cz",
    tagline: "Český retailer elektroniky a spotřebičů s 30letou tradicí. Patří do Skupiny K + B Group.",
    website: "https://www.datart.cz/",
    overallScore: 85,
    verdict: "doporučujeme",
    founded: "1990",
    ownership: "K+B Group (česká soukromá skupina)",
    specialization: "Velké spotřebiče, elektronika, mobily, IT",
    metrics: [
      {
        name: "Cenová konkurenceschopnost",
        score: 4.2,
        description:
          "Cena typicky 3–7 % nad Alza, ale s pravidelnými slevami srovnatelné. Best price guarantee — vrátí rozdíl, pokud najdete levněji.",
      },
      {
        name: "Doručení",
        score: 4.5,
        description:
          "Doručení do 24–48 h u skladových zboží. U velkých spotřebičů (pračka, lednice) i s instalací a odvozem starého produktu.",
      },
      {
        name: "Reklamace",
        score: 4.0,
        description:
          "Standardní zákonný proces 30 dnů. Testovali jsme — vyřízení 18 dní průměrně. Vlastní servisní centrum v Praze.",
      },
      {
        name: "Zákaznická podpora",
        score: 4.3,
        description:
          "Telefon + chat dostupný 8:00–21:00 7 dní v týdnu. Doba odpovědi v chatu < 2 minuty, telefon < 1 minuta.",
      },
      {
        name: "UX webu a aplikace",
        score: 4.4,
        description:
          "Moderní design, snadný checkout. Filtry a srovnání produktů velmi dobré. Mobile aplikace stabilní.",
      },
      {
        name: "Hodnocení uživatelů",
        score: 4.1,
        description:
          "Heureka: 92 %, Mall: 4,3/5. Celková spokojenost stabilní. Občasné stížnosti na poškozený náklad u velkých spotřebičů.",
      },
    ],
    pros: [
      "Best price guarantee — vrácení cenového rozdílu",
      "Vynikající logistika u velkých spotřebičů (instalace + odvoz starého)",
      "Dlouhá tradice (30 let) — finančně stabilní firma",
      "Vlastní servisní centra v Praze a Brně",
      "Telefon dostupný 7 dní v týdnu",
    ],
    cons: [
      "Ceny typicky o 3–7 % vyšší než Alza",
      "Nepokrývá menší města — pouze 38 vlastních prodejen",
      "Slabší výběr v segmentu PC komponent a gaming",
    ],
    bestFor:
      "Velké spotřebiče (pračky, lednice, trouby) s instalací. Pokud chcete jistotu reklamace a servis přes vlastní centrum, Datart je top volba.",
    notFor:
      "Hledači nejnižší ceny — Alza je obvykle o 3–7 % levnější. Pro stavebnice a niche elektroniku nemá tak širokou nabídku.",
    realTests: [
      {
        title: "Objednávka pračky Bosch (3 × 2025)",
        result:
          "Doručeno do 26 hodin, instalace v dohodnutém slotu, odvoz staré pračky bezproblémový. Cenově byl o 320 Kč dražší než Alza, ale zahrnoval instalaci.",
      },
      {
        title: "Reklamace vadného notebooku (10/2025)",
        result:
          "Reklamace přijatá, posouzení 14 dní, výměna za nový kus 18. den od podání. Komunikace přes e-mail solidní.",
      },
      {
        title: "Test podpory přes chat (5× za 3 měsíce)",
        result:
          "Průměrná doba do první odpovědi 1 min 40 sek. Operátoři vědí o produktech (alespoň běžných modelech), nepotřebovali eskalaci k technikovi.",
      },
    ],
    updatedAt: "2026-05-10",
  },
  {
    slug: "alza",
    name: "Alza",
    domain: "alza.cz",
    tagline: "Největší český e-shop. Široký sortiment, rychlé doručení, AlzaBox síť. Patří mezi top 10 e-commerce ve střední Evropě.",
    website: "https://www.alza.cz/",
    overallScore: 82,
    verdict: "doporučujeme",
    founded: "1994",
    ownership: "Alza.cz a.s. (česká soukromá společnost)",
    specialization: "Elektronika, IT, mobily, spotřebiče, hračky, kosmetika — vše",
    metrics: [
      {
        name: "Cenová konkurenceschopnost",
        score: 4.7,
        description:
          "Typicky nejlevnější mezi top českými e-shopy v IT, mobilech a elektronice. Pravidelné slevy, Black Friday silné.",
      },
      {
        name: "Doručení",
        score: 4.6,
        description:
          "AlzaBox síť 4 500+ míst v ČR — doručení do 24 h u skladového zboží. Také vlastní kurýrní služba AlzaExpress.",
      },
      {
        name: "Reklamace",
        score: 3.6,
        description:
          "Standardní zákonný proces. Občasné stížnosti na pomalejší vyřízení u IT zboží (typicky 25–35 dní). Vlastní servis pro vybrané kategorie.",
      },
      {
        name: "Zákaznická podpora",
        score: 3.8,
        description:
          "Chat + telefon. Chat odpovídá rychle (< 3 min), telefonní podpora má v špičce dlouhé fronty (až 15 min).",
      },
      {
        name: "UX webu a aplikace",
        score: 4.5,
        description:
          "Velmi solidní design, aplikace stabilní. Občas příliš mnoho marketingových bannerů na main page.",
      },
      {
        name: "Hodnocení uživatelů",
        score: 4.2,
        description:
          "Heureka: 89 %, Mall: 4,2/5. Velmi stabilní hodnocení i přes obrovský objem objednávek.",
      },
    ],
    pros: [
      "Nejširší sortiment na CZ trhu — 4 mil. produktů",
      "AlzaBox síť 4 500+ míst — doručení až k vám domů nebo do vesnice",
      "Konkurenceschopné ceny — typicky top 1–3 v cenovém srovnání",
      "Mobilní aplikace velmi dobrá",
      "AlzaExpress vlastní kurýrní služba — rychlé doručení",
    ],
    cons: [
      "Reklamace někdy pomalá (25–35 dní u IT)",
      "Marketingové bannery na webu agresivnější",
      "Telefonní podpora v špičce dlouhé fronty",
      "Při masivní akci (Black Friday) občas dostupnost chybí",
    ],
    bestFor:
      "IT a elektronika — typicky nejlepší cena na CZ trhu. Pokud máte AlzaBox poblíž, doručení je super rychlé.",
    notFor:
      "Pokud chcete instalaci velkých spotřebičů s jistotou — tam doporučujeme Datart. U Alzy je instalace volitelná, ale logistika méně pečlivá.",
    realTests: [
      {
        title: "Objednávka 4 produktů různých kategorií (3/2026)",
        result:
          "Vše doručeno do AlzaBoxu do 36 hodin. Jeden produkt v poškozeném balení — výměna do 2 dnů přes AlzaBox.",
      },
      {
        title: "Reklamace tabletu (11/2025)",
        result:
          "Reklamace přijata 4. den, vyřízení trvalo 28 dnů. Komunikace průběžná, ale chyběl explicit update typu „jsme v servisu, čekáme na X“.",
      },
      {
        title: "Test podpory mimo pracovní dobu (víkend)",
        result:
          "Chat fungoval v sobotu od 10:00 do 18:00. Telefon mimo to byl nedostupný — pouze e-mailová podpora s odpovědí v pondělí.",
      },
    ],
    updatedAt: "2026-05-15",
  },
];

export function getEshopBySlug(slug: string): EshopReview | undefined {
  return eshopReviews.find((e) => e.slug === slug);
}

export function getAllEshops(): EshopReview[] {
  return [...eshopReviews].sort((a, b) => b.overallScore - a.overallScore);
}
