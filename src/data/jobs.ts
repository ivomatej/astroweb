/**
 * Otevřené pozice na Recenzer.cz.
 * Statický seznam — v produkci backend.
 */

export type JobType =
  | "editorial" // Interní redakce
  | "expert" // Externí garant / odborník
  | "tech" // Vývoj / DevOps
  | "editor" // Korektor / editor
  | "internship"; // Stáž

export type JobEmployment =
  | "ft" // Plný úvazek
  | "pt" // Částečný úvazek
  | "freelance" // Smluvní spolupráce / fakturace
  | "intern"; // Stáž

export interface JobOffer {
  slug: string;
  title: string;
  type: JobType;
  /** Krátký pozice tag — např. "FT Praha / Brno" */
  shortBadge: string;
  employment: JobEmployment;
  /** Lokalita — "Praha", "Brno", "Remote ČR/SK", "Hybrid". */
  location: string;
  /** Krátký perex pro hub. */
  summary: string;
  /** Detailní popis (HTML allowed). */
  descriptionHtml: string;
  /** Požadované dovednosti / kvalifikace. */
  requirements: string[];
  /** Co je výhodou. */
  niceToHave?: string[];
  /** Co nabízíme. */
  offers: string[];
  /** Salary / honorář band. */
  compensation: string;
  /** Datum zveřejnění inzerátu (ISO). */
  postedAt: string;
  /** Datum, do kterého se přijímají žádosti (ISO). */
  closingAt?: string;
  /** Kontakt pro tuto pozici. */
  contactEmail: string;
  /** Hiring manager / kontaktní osoba. */
  hiringManager: string;
}

export const jobs: JobOffer[] = [
  {
    slug: "redaktor-domaci-spotrebice",
    title: "Redaktor / redaktorka — domácí spotřebiče",
    type: "editorial",
    shortBadge: "FT · Praha / Brno / Remote",
    employment: "ft",
    location: "Praha, Brno nebo Remote ČR/SK",
    summary:
      "Posílíme tým o redaktora pro domácí spotřebiče — pračky, sušičky, myčky, kávovary. Předpoklad: 3+ roky zkušeností v médiích a vášeň pro detail.",
    descriptionHtml: `
<p>Vedoucí kategorie domácích spotřebičů (Alena Rajnochová) hledá kolegu na plný úvazek. Budete autorkou pillar článků, srovnání a produktových recenzí v jedné z nejsilnějších kategorií Recenzer.cz.</p>
<p>Práce se primárně skládá z: <strong>(1) research a metodika</strong> — analýza zdrojů, příprava testovacího plánu, <strong>(2) hands-on testování</strong> v naší laboratoři v Brně-Židenicích, <strong>(3) psaní článku</strong> a spolupráce s editory + garantem.</p>
<p>Práce je možná z Prahy nebo Brna — v Praze v naší kanceláři, v Brně přímo v laboratoři. Plnou remote spolupráci akceptujeme, ale na laboratorní testy je nutné cestovat do Brna (předpokládáme 1× měsíčně).</p>
    `,
    requirements: [
      "<strong>3+ roky zkušeností v médiích</strong> — recenzní portály, časopisy nebo investigativní žurnalistika",
      "Schopnost pracovat s technickými parametry a normami (IEC, EN, ČSN)",
      "Píšete srozumitelně, ale s respektem k detailu — žádné PR fráze",
      "Český jazyk na profesionální úrovni (Mgr./Ing. žurnalistiky nebo bohemistiky výhoda)",
      "Schopnost samostatně koordinovat testy a komunikovat s odbornými garanty",
    ],
    niceToHave: [
      "Zkušenost s testováním produktů v laboratorních podmínkách",
      "Anglický jazyk pro studium zahraničních testů (Stiftung Warentest, Which?)",
      "Znalost SEO základů (titulky, struktura, intent)",
    ],
    offers: [
      "<strong>Plný úvazek</strong> nebo částečný (4/5) podle vašich potřeb",
      "Mzda 55 000–75 000 Kč superhrubá podle zkušeností",
      "Roční bonus 0–15 % podle KPI redakce (nemá vliv na nezávislost recenzí)",
      "5 týdnů dovolené, sick days 5, MultiSport karta",
      "Notebook (MacBook Air / ThinkPad podle preference) + monitor do domácí kanceláře",
      "Vzdělávací rozpočet 30 000 Kč ročně — kurzy, knihy, konference",
      "Plný přístup do testovací laboratoře v Brně-Židenicích",
    ],
    compensation: "55 000–75 000 Kč superhrubá + 0–15 % bonus",
    postedAt: "2026-04-15",
    closingAt: "2026-07-31",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Alena Rajnochová (hlavní redaktorka)",
  },
  {
    slug: "redaktor-elektronika-it",
    title: "Redaktor / redaktorka — elektronika a IT",
    type: "editorial",
    shortBadge: "FT · Remote ČR/SK",
    employment: "ft",
    location: "Remote ČR/SK (laboratoř Brno 1× měsíčně)",
    summary:
      "Notebooky, monitory, sluchátka, smart home. Hledáme někoho, kdo umí testovat hardware a srozumitelně psát o tom, co se z benchmarků skutečně dozvíte.",
    descriptionHtml: `
<p>Marie Müllerová posílí tým o kolegu pro elektroniku. Budete pokrývat notebooky, monitory, sluchátka, audio a smart home — kategorie s vysokou poptávkou a omezenou nezávislou pokrývání v ČR.</p>
<p>Testování probíhá kombinovaně — část v naší laboratoři (akustická komora pro sluchátka, kolorimetr pro monitory), část doma jako uživatelský test. Vlastní zkušenost se zařízením a benchmarkingem je pro tuto pozici klíčová.</p>
    `,
    requirements: [
      "<strong>Hluboká znalost elektronického hardwaru</strong> — víte, proč 144Hz monitor není totéž jako 120Hz a co je ΔE",
      "2+ roky zkušeností s recenzemi elektroniky (web, časopis nebo YouTube)",
      "Schopnost interpretovat benchmark data (Geekbench, Cinebench, PCMark)",
      "Český jazyk + funkční angličtina pro studium zahraničních zdrojů",
      "Praktická znalost macOS i Windows (Linux výhoda)",
    ],
    niceToHave: [
      "Vlastní YouTube / blog / Twitter komunita kolem elektroniky",
      "Zkušenost s testováním audio vybavení a kalibrací displejů",
      "Bc./Ing. informatika nebo elektroinženýrství",
    ],
    offers: [
      "Plný úvazek (možno i 4/5)",
      "Mzda 60 000–80 000 Kč superhrubá",
      "Po skončení testu si modely můžete dlouhodobě půjčit pro vlastní použití",
      "Roční hardware budget 50 000 Kč (váš vlastní setup)",
      "5 týdnů dovolené, MultiSport, vzdělávací rozpočet 30 000 Kč",
      "Plně remote — laboratoř Brno navštěvujete 1× měsíčně",
    ],
    compensation: "60 000–80 000 Kč superhrubá",
    postedAt: "2026-03-22",
    closingAt: "2026-06-30",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Marie Müllerová (vedoucí kategorie elektronika)",
  },
  {
    slug: "garant-zdravotnicke-pomucky",
    title: "Odborný garant — zdravotnické pomůcky a dětské produkty",
    type: "expert",
    shortBadge: "Freelance · 5–10 h/měsíc",
    employment: "freelance",
    location: "Remote ČR (osobní setkání 2× ročně Praha/Brno)",
    summary:
      "Lékař / fyzioterapeut / zdravotnický odborník pro garantaci recenzí v kategorii zdraví, autosedačky a dětské bezpečnostní produkty.",
    descriptionHtml: `
<p>Spolupracujeme s odbornými garanty mimo redakci — lékaři, technici, řemeslníci. Pro kategorii zdravotnické pomůcky a dětské produkty hledáme dalšího garanta na konzultaci našich článků.</p>
<p>Práce není fulltime — typicky 5–10 hodin měsíčně. Spočívá v <strong>(a)</strong> kontrole věcné správnosti našich článků před publikací, <strong>(b)</strong> občasným autorství vlastních článků nebo rozhovorů, <strong>(c)</strong> krizovém konzultu při zdravotně citlivých tématech.</p>
<p>Vaše jméno bude zveřejněno jako garant kategorie — vidíte to např. u MUDr. Černé v kategorii dětských produktů.</p>
    `,
    requirements: [
      "<strong>Lékař (MUDr.), fyzioterapeut nebo zdravotní sestra</strong> s aktivní praxí",
      "Registrace u ČLK nebo příslušné komory (ověřujeme)",
      "5+ let klinické praxe nebo specializace",
      "Schopnost psát přístupně pro laiky, ne odbornou terminologií",
    ],
    niceToHave: [
      "Atestace v pediatrii, ortopedii nebo rehabilitaci",
      "Zkušenost s publikováním v odborných periodikách",
      "Členství v odborných společnostech",
    ],
    offers: [
      "<strong>Hodinová sazba 1 200–2 000 Kč</strong> dle kvalifikace",
      "Flexibilní časový závazek — 5–10 h měsíčně",
      "Veřejný profil garanta s vaším bio a kvalifikací",
      "Plně remote — osobní setkání 2× ročně (volitelné)",
      "Vaše jméno u článku jako garant — citace v jiných médiích",
    ],
    compensation: "1 200–2 000 Kč / hodinu (freelance, faktura)",
    postedAt: "2026-04-02",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Ivo Matěj (šéfredaktor)",
  },
  {
    slug: "frontend-developer-astro",
    title: "Frontend developer — Astro / TypeScript",
    type: "tech",
    shortBadge: "FT · Remote ČR/SK",
    employment: "ft",
    location: "Remote ČR/SK",
    summary:
      "Hledáme druhého frontend developera pro práci na web Recenzer.cz (Astro 6) a budoucích sesterských webech. Důraz na výkon, přístupnost a žádné JS frameworky bez důvodu.",
    descriptionHtml: `
<p>Recenzer.cz běží na Astro 6 (statický web), s plánovaným NestJS backendem. Filozofie: <strong>žádné npm balíčky bez explicitního důvodu</strong>. Vanilla CSS, vanilla JS, žádný React.</p>
<p>Práce zahrnuje <strong>(1)</strong> rozvoj Recenzer.cz — nové šablony článků, optimalizace, accessibility, <strong>(2)</strong> spolupráce na sesterských webech v rámci 10-webové platformy, <strong>(3)</strong> budoucí integraci s NestJS backendem.</p>
    `,
    requirements: [
      "<strong>3+ roky práce s moderním frontendem</strong> — Vue / React / Astro / Svelte",
      "TypeScript na úrovni strict mode bez kompromisů",
      "Vanilla CSS — Grid, Container queries, vlastní design tokens (bez Tailwindu)",
      "Web performance — Core Web Vitals, lazy loading, font optimization",
      "WCAG 2.1 AA — víte, kdy potřebujete aria-label a kdy aria-hidden",
      "Git / GitHub — clean commits, code review kultura",
    ],
    niceToHave: [
      "Astro 6+ experience",
      "Statická generace + jamstack architektura",
      "Schopnost samostatně rozhodovat o trade-offs (perf vs. DX)",
    ],
    offers: [
      "Plný úvazek nebo 4/5",
      "Mzda 90 000–130 000 Kč superhrubá podle senioritou",
      "Roční bonus 5–20 % podle Core Web Vitals metrik",
      "5 týdnů dovolené, MultiSport, hardware budget 60 000 Kč ročně",
      "Vzdělávání 30 000 Kč ročně + konference",
      "Plně remote, async-first komunikace, 4× ročně team off-site",
    ],
    compensation: "90 000–130 000 Kč superhrubá + bonus",
    postedAt: "2026-05-10",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Ivo Matěj (šéfredaktor a zakladatel)",
  },
  {
    slug: "korektor-jazykova-kvalita",
    title: "Korektor / korektorka — jazyková kvalita",
    type: "editor",
    shortBadge: "PT · 20 h/týden · Remote",
    employment: "pt",
    location: "Remote ČR",
    summary:
      "Lucie Horáková posílí editorial tým o jazykového korektora. Práce na 20 h/týden, asynchronní — kontrola článků před publikací.",
    descriptionHtml: `
<p>Každý článek na Recenzer.cz prochází jazykovou korekturou před publikací. Aktuálně to dělá Lucie Horáková sama — chceme jí přidat kolegu, aby zvládla 30+ článků měsíčně.</p>
<p>Práce je <strong>asynchronní</strong> — dostanete článek do svého workflow, máte 24 hodin na korekturu. Žádné mítingy, žádný kalendář — jen text a vy.</p>
    `,
    requirements: [
      "<strong>Mgr. bohemistika</strong> nebo srovnatelná kvalifikace",
      "5+ let zkušeností s editorskou prací (časopisy, weby, knihy)",
      "Členství v Asociaci českých jazykových korektorů výhoda",
      "Schopnost práce s Markdown + Git (krátké školení proběhne)",
      "Dotaz na typografii? Připravte si argument, proč „uvozovky“ a ne „uvozovky“.",
    ],
    offers: [
      "<strong>Částečný úvazek 20 h/týden</strong>",
      "Mzda 22 000–32 000 Kč hrubá podle hodin a senioritou",
      "Plně remote, 100% asynchronně",
      "5 týdnů dovolené (proporcionálně), MultiSport",
      "Možnost dvojnásobit úvazek do FT v 2027 podle růstu redakce",
    ],
    compensation: "22 000–32 000 Kč hrubá / měsíc (PT 20 h)",
    postedAt: "2026-05-15",
    closingAt: "2026-07-15",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Lucie Horáková (vedoucí editor)",
  },
  {
    slug: "stage-redakce",
    title: "Stáž v redakci — 3–6 měsíců",
    type: "internship",
    shortBadge: "Stáž · 10–20 h/týden · Praha",
    employment: "intern",
    location: "Praha (možno hybridně)",
    summary:
      "Studenti žurnalistiky, mediálních studií nebo příbuzných oborů — pojďte si zkusit, jak vzniká nezávislá spotřebitelská žurnalistika.",
    descriptionHtml: `
<p>Spolupráce s VŠE, FF UK a MUNI Brno — bereme studenty na 3–6měsíční stáž. Není to kávová stáž — od týdne 2 píšete svůj první článek pod vedením seniorního redaktora.</p>
<p>Náplň práce: research, draft, fact-checking, příprava ilustrací a tabulek. Pod dohledem vedoucího redaktora (Ivo / Alena / Marie).</p>
    `,
    requirements: [
      "Aktivní student VŠ — 2. a vyšší ročník",
      "Obor žurnalistika, mediální studia, marketing, bohemistika nebo příbuzný",
      "Schopnost samostatně research-ovat a strukturovat text",
      "10–20 hodin týdně podle vašeho rozvrhu",
    ],
    offers: [
      "Honorář <strong>200 Kč/h hrubé</strong> (cca 20 000 Kč/měsíc při 25 h týdně)",
      "Reálné autorství — vaše jméno u článků",
      "Mentorování seniorním redaktorem",
      "Po stáži možnost přechodu na FT/PT pozici",
      "Reference + portfolio pro další kariéru",
    ],
    compensation: "200 Kč/h hrubá (cca 16 000–24 000 Kč/měsíc)",
    postedAt: "2026-02-10",
    contactEmail: "kariera@recenzer.cz",
    hiringManager: "Lucie Horáková (vedoucí stáží)",
  },
];

export function getJobBySlug(slug: string): JobOffer | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllJobs(): JobOffer[] {
  return [...jobs].sort((a, b) => (a.postedAt < b.postedAt ? 1 : -1));
}

export const jobTypeMeta: Record<JobType, { label: string; tone: string }> = {
  editorial: { label: "Redakce", tone: "purple" },
  expert: { label: "Externí odborník", tone: "amber" },
  tech: { label: "Vývoj", tone: "green" },
  editor: { label: "Editor / korektor", tone: "muted" },
  internship: { label: "Stáž", tone: "red" },
};
