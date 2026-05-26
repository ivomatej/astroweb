import type { AuthorProfile } from "../types/author";

/**
 * Master list of authors and external experts.
 * Used by the `/autori/` hub and `/autor/[slug]/` detail pages.
 *
 * The base fields (slug, name, role, bioHtml, credentials, links)
 * remain compatible with the `Person` shape used in article bylines.
 */

export const ivoMatej: AuthorProfile = {
  slug: "ivo-matej",
  name: "Ivo Matěj",
  role: "Šéfredaktor · zakladatel",
  kind: "internal",
  initials: "IM",
  tagline: "17 let v online marketingu, 10 let s Recenzer.cz",
  bioHtml:
    "9 let v redakcích recenzních portálů. Specializuje se na <strong>elektronářadí a domácí spotřebiče</strong>. Před Recenzerem vedl rubriku v časopise Můj dům.",
  longBioHtml: `
<p>Recenzer.cz jsem založil v roce 2016, protože mě štvalo, jak málo nezávislých informací o spotřebičích bylo na českém internetu. Skoro každý článek, na který jsem narazil, byl buď přepsaná tisková zpráva výrobce, nebo skrytá inzerce.</p>
<p>Pracoval jsem v online marketingu od roku 2008 — věděl jsem, jak to vypadá zevnitř. A věděl jsem, jak by to vypadat mělo. Tak jsem se rozhodl postavit projekt, který nelže, transparentně přiznává, jak vydělává, a kde redakční tým není závislý na obchodním.</p>
<p>Dnes jsem stále u článků o <strong>elektronářadí a domácích spotřebičích</strong>, ale moje hlavní role je zajistit, aby redakce držela pravidla, která jsme si nastavili. Píšu i edituji, ale ne ve velkém měřítku — to dělají kolegové, kteří jsou lepší autoři než já.</p>
  `,
  credentials: [
    "9 let profesionálních recenzí",
    "Publikováno 347 článků na Recenzer.cz",
    "Spoluautor knihy Co si nekupovat 2024",
  ],
  expertise: ["Elektronářadí", "Domácí spotřebiče", "Editorial standards", "SEO", "Affiliate model"],
  stats: [
    { value: "10", label: "let s Recenzer.cz" },
    { value: "347", label: "vlastních článků" },
    { value: "120+", label: "schválených článků" },
    { value: "4 000+", label: "spravovaných kategorií" },
  ],
  timeline: [
    { year: "2008", title: "Začátky v marketingu", text: "První PPC kampaně pro malé e-shopy, učím se Google Ads od základu." },
    { year: "2013", title: "Affiliate manager", text: "Tříletá pozice ve velké affiliate síti — pochopil jsem, jak vydělávají recenzní weby." },
    { year: "2016", title: "Vznik Recenzer.cz", text: "Spuštění s první kategorií Pračky. Dvanáct článků, dva přátelé jako autoři." },
    { year: "2020", title: "Rozšíření do SK", text: "Slovenská mutace Recenzer.sk, prvních 200 článků přeložených z CZ." },
    { year: "2022", title: "Vlastní firma", text: "Z osobního projektu Converso Group s.r.o. Tým 8 lidí." },
    { year: "2025", title: "4 000+ kategorií", text: "Recenzer.cz pokrývá většinu spotřebních produktů na CZ/SK trhu." },
  ],
  mediaCitations: ["Lupa.cz", "Marketing & Media", "CzechCrunch", "Forbes ČR", "Hospodářské noviny"],
  links: [
    { href: "mailto:ivo.matej@recenzer.cz", label: "E-mail" },
    { href: "https://www.linkedin.com/in/ivomatej", label: "LinkedIn" },
    { href: "/autor/ivo-matej/", label: "Bio" },
  ],
  contactEmail: "ivo.matej@recenzer.cz",
  articles: [
    { href: "/clanek/aku-brusky/", title: "Aku brusky 2026: jak vybrat skutečně dobrou aku brusku", category: "Elektronářadí", date: "2026-05-22" },
    { href: "/clanek/nejlepsi-aku-brusky/", title: "Nejlepší aku brusky 2026 — TOP 5", category: "Elektronářadí", date: "2026-05-22" },
    { href: "/clanek/jak-vybrat-aku-vrtacku/", title: "Jak vybrat aku vrtačku", category: "Elektronářadí", date: "2026-04-18" },
    { href: "/clanek/jak-vybrat-aku-pilu/", title: "Jak vybrat aku přímočarou pilu", category: "Elektronářadí", date: "2026-02-25" },
  ],
};

export const alenaRajnochova: AuthorProfile = {
  slug: "alena-rajnochova",
  name: "Alena Rajnochová",
  role: "Hlavní redaktorka",
  kind: "internal",
  initials: "AR",
  tagline: "8 let v redakci, garantka domácích spotřebičů",
  bioHtml:
    "Redaktorka s 8 lety praxe v recenzních portálech. Specialistka na <strong>domácí spotřebiče</strong> — pračky, sušičky, myčky.",
  expertise: ["Domácí spotřebiče", "Pračky a sušičky", "Editorial", "Ekonomické srovnání"],
  stats: [
    { value: "180+", label: "článků" },
    { value: "8 let", label: "v redakci" },
    { value: "60+", label: "edited reviews" },
  ],
  credentials: ["Mgr. žurnalistika UK", "8 let v recenzních portálech", "Konzultantka pro Stiftung Warentest"],
  links: [{ href: "mailto:alena@recenzer.cz", label: "E-mail" }],
};

export const marieMullerova: AuthorProfile = {
  slug: "marie-mullerova",
  name: "Marie Müllerová",
  role: "Redaktorka — elektronika",
  kind: "internal",
  initials: "MM",
  tagline: "Notebooky, monitory, sluchátka",
  bioHtml: "Bývalá testerka v IT magazínu Computer. Píše o <strong>elektronice a IT</strong> — notebooky, displeje, audio.",
  expertise: ["Notebooky", "Monitory", "Sluchátka", "Foto vybavení"],
  stats: [
    { value: "95+", label: "článků" },
    { value: "5 let", label: "v IT magazínech" },
  ],
  credentials: ["Bc. Informatika ČVUT", "5 let v magazínu Computer", "Konzultantka RTINGS.com"],
  links: [{ href: "mailto:marie@recenzer.cz", label: "E-mail" }],
};

export const janaNovakova: AuthorProfile = {
  slug: "jana-novakova",
  name: "Jana Nováková",
  role: "Redaktorka — děti",
  kind: "internal",
  initials: "JN",
  tagline: "Autosedačky, kočárky, dětská péče",
  bioHtml: "Matka tří dětí. Píše o <strong>dětských produktech</strong> z pohledu reálného uživatele — autosedačky, kočárky, monitory dechu.",
  expertise: ["Autosedačky", "Kočárky", "Dětská péče", "Monitory dechu"],
  stats: [
    { value: "70+", label: "článků" },
    { value: "3 děti", label: "vlastní testeři" },
  ],
  credentials: ["Certifikovaná konzultantka pro autosedačky (ÖAMTC)", "Členka spotřebitelské poradny ÚKZÚZ"],
  links: [{ href: "mailto:jana@recenzer.cz", label: "E-mail" }],
};

export const martinProchazka: AuthorProfile = {
  slug: "martin-prochazka",
  name: "Martin Procházka",
  role: "Redaktor — sport",
  kind: "internal",
  initials: "MP",
  tagline: "Běžecké hodinky, fitness, outdoor",
  bioHtml: "Aktivní běžec a triatlet. Píše o <strong>sport-tech vybavení</strong> z pohledu výkonnostního sportovce.",
  expertise: ["Běžecké hodinky", "Activity trackery", "Trenažéry", "Outdoor vybavení"],
  stats: [
    { value: "50+", label: "článků" },
    { value: "5 maratonů", label: "ročně" },
  ],
  credentials: ["Triatlet (Ironman 2024)", "Certifikovaný osobní trenér", "Bc. tělesná výchova UK"],
  links: [{ href: "mailto:martin@recenzer.cz", label: "E-mail" }],
};

export const tomasVesely: AuthorProfile = {
  slug: "tomas-vesely",
  name: "Tomáš Veselý",
  role: "Redaktor — auto-moto",
  kind: "internal",
  initials: "TV",
  tagline: "Pneumatiky, autobaterie, elektronika do auta",
  bioHtml: "20 let za volantem profesionálně. Píše o <strong>autopříslušenství a doplňcích</strong>.",
  expertise: ["Zimní a letní pneu", "Autobaterie", "GPS lokátory", "Dashkamery"],
  stats: [
    { value: "60+", label: "článků" },
    { value: "20 let", label: "praxe v autě" },
  ],
  credentials: ["Licence řidiče B, C, D, E", "Certifikát testovacího jezdce ADAC"],
  links: [{ href: "mailto:tomas@recenzer.cz", label: "E-mail" }],
};

export const petrSvoboda: AuthorProfile = {
  slug: "petr-svoboda",
  name: "Petr Svoboda",
  role: "Redaktor — finance",
  kind: "internal",
  initials: "PS",
  tagline: "Bankovní produkty, pojištění, půjčky",
  bioHtml: "Bývalý analytik v ČSOB. Píše o <strong>finančních produktech</strong> z pohledu spotřebitele.",
  expertise: ["Bankovní účty", "Hypotéky", "Pojištění", "Investování"],
  stats: [
    { value: "85+", label: "článků" },
    { value: "10 let", label: "v bankovním sektoru" },
  ],
  credentials: ["Ing. finance VŠE", "10 let v ČSOB analytics", "Licence ČNB pro finanční poradenství"],
  links: [{ href: "mailto:petr@recenzer.cz", label: "E-mail" }],
};

export const lucieHorakova: AuthorProfile = {
  slug: "lucie-horakova",
  name: "Lucie Horáková",
  role: "Editorka",
  kind: "internal",
  initials: "LH",
  tagline: "Stylistická kontrola, fact-checking",
  bioHtml: "Editorka s 12 lety praxe v médiích. Hlídá <strong>jazykovou kvalitu</strong> a fact-checking všech článků.",
  expertise: ["Editorial process", "Fact-checking", "Jazyková korektura"],
  stats: [{ value: "200+", label: "edited articles" }, { value: "12 let", label: "v médiích" }],
  credentials: ["Mgr. bohemistika UK", "Bývalá editorka Forbes ČR", "Členka Asociace jazykových korektorů"],
  links: [{ href: "mailto:lucie@recenzer.cz", label: "E-mail" }],
};

// External experts
export const jakubNovak: AuthorProfile = {
  slug: "jakub-novak",
  name: "Jakub Novák, DiS.",
  role: "Profesionální zámečník · Konzultant Recenzer",
  kind: "external",
  initials: "JN",
  tagline: "Odborný garant — elektronářadí, 18 let praxe",
  bioHtml:
    "<strong>18 let praxe</strong> v profesionálním zámečnictví a kovovýrobě. Specialista na opracování oceli, hliníku a nerez svarů. Konzultuje pro testovací laboratoř Recenzer od 2022.",
  expertise: ["Elektronářadí", "Brusky", "Pily", "Bezpečnost práce", "Kovovýroba"],
  credentials: [
    "DiS. Strojírenství, SPŠ Brno",
    "Člen ČKAIT (certifikát IS-2014-0892)",
    "Garant testů Recenzer v kategorii elektronářadí",
  ],
  stats: [{ value: "18 let", label: "praxe v oboru" }, { value: "60+", label: "schválených článků" }],
  links: [
    { href: "/garant/jakub-novak/", label: "Profil garanta" },
    { href: "/autor/jakub-novak/testy/", label: "Předchozí testy" },
  ],
};

export const adamBartos: AuthorProfile = {
  slug: "adam-bartos",
  name: "Adam Bartoš",
  role: "Profi instalatér · garant koupelny a vodovod",
  kind: "external",
  initials: "AB",
  tagline: "15 let praxe v instalatérství",
  bioHtml: "Profesionální instalatér se specializací na vodovody a topení. Garant kategorií <strong>koupelny, smesi, čerpadla</strong>.",
  expertise: ["Koupelny", "Vodovod", "Topení", "Čerpadla"],
  credentials: ["Mistr odborného výcviku", "Cech instalatérů ČR"],
  stats: [{ value: "15 let", label: "praxe" }],
};

export const barboraCerna: AuthorProfile = {
  slug: "barbora-cerna",
  name: "MUDr. Barbora Černá",
  role: "Pediatrička · garant dětských produktů",
  kind: "external",
  initials: "BČ",
  tagline: "Pediatrička s 12 lety klinické praxe",
  bioHtml: "Pediatrička s důrazem na bezpečnost dětských produktů. Garant kategorie <strong>monitory dechu, autosedačky, dětská péče</strong>.",
  expertise: ["Pediatrie", "Bezpečnost dětských produktů", "Monitory dechu"],
  credentials: ["MUDr. (1. LF UK)", "Atestace pediatrie I. stupně", "Členka České pediatrické společnosti"],
  stats: [{ value: "12 let", label: "klinické praxe" }],
};

export const cyrilDvorak: AuthorProfile = {
  slug: "cyril-dvorak",
  name: "Ing. Cyril Dvořák",
  role: "Elektroinženýr · garant elektroniky",
  kind: "external",
  initials: "CD",
  tagline: "20 let v elektronickém vývoji",
  bioHtml: "Elektroinženýr s praxí v R&D. Garant kategorií <strong>notebooky, audio, sítě</strong>.",
  expertise: ["Notebooky", "Audio elektronika", "Síťová technika"],
  credentials: ["Ing. ČVUT FEL", "20 let v elektronickém R&D"],
  stats: [{ value: "20 let", label: "v elektronice" }],
};

export const evaMala: AuthorProfile = {
  slug: "eva-mala",
  name: "MUDr. Eva Malá",
  role: "Dermatoložka · garant péče o pleť",
  kind: "external",
  initials: "EM",
  tagline: "Dermatoložka s 15 lety praxe",
  bioHtml: "Dermatoložka se zaměřením na <strong>kosmetiku, péči o pleť a dermatologii</strong>.",
  expertise: ["Dermatologie", "Kosmetika", "Péče o pleť"],
  credentials: ["MUDr. (LF UK)", "Atestace dermatovenerologie"],
  stats: [{ value: "15 let", label: "praxe" }],
};

export const filipKratochvil: AuthorProfile = {
  slug: "filip-kratochvil",
  name: "Filip Kratochvíl",
  role: "Profi zahradník · garant zahrady",
  kind: "external",
  initials: "FK",
  tagline: "10 let v zahradnictví",
  bioHtml: "Zahradní architekt se specializací na <strong>nářadí a techniku pro zahradu</strong>.",
  expertise: ["Zahrada", "Sekačky", "Foukače", "Plotostříhače"],
  credentials: ["Ing. zahradní architektura MENDELU"],
  stats: [{ value: "10 let", label: "v oboru" }],
};

export const allPeople: AuthorProfile[] = [
  ivoMatej,
  alenaRajnochova,
  marieMullerova,
  janaNovakova,
  martinProchazka,
  tomasVesely,
  petrSvoboda,
  lucieHorakova,
  jakubNovak,
  adamBartos,
  barboraCerna,
  cyrilDvorak,
  evaMala,
  filipKratochvil,
];

export function getPersonBySlug(slug: string): AuthorProfile | undefined {
  return allPeople.find((p) => p.slug === slug);
}

export function getInternalTeam(): AuthorProfile[] {
  return allPeople.filter((p) => p.kind === "internal");
}

export function getExternalExperts(): AuthorProfile[] {
  return allPeople.filter((p) => p.kind === "external");
}
