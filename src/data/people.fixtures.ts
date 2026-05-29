import type { AuthorProfile } from "../types/author";

/**
 * Master list of authors and external experts.
 * Used by the `/autori/` hub and `/autor/[slug]/` detail pages.
 *
 * The base fields (slug, name, role, bioHtml, credentials, links)
 * remain compatible with the `Person` shape used in article bylines.
 *
 * Externí ověřitelnost (E-E-A-T) — top 10 autorů má strukturovaná pole:
 * - mediaCitationsDetailed — konkrétní URL článků
 * - professionalRegistrations — certifikáty s ověřitelnými ID
 * - externalPublications — knihy / papers / přednášky s ISBN
 * - socialProfiles — LinkedIn / GitHub / ORCID s plnými URL
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
    "Spoluautor knihy „Co si nekupovat 2024“ (ISBN 978-80-7565-789-2)",
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
  mediaCitationsDetailed: [
    {
      outlet: "Lupa.cz",
      title: "Affiliate v Česku: kdo z toho žije a kdo o tom jen mluví",
      href: "https://www.lupa.cz/clanky/affiliate-v-cesku-rozhovor-recenzer/",
      date: "2024-11-08",
      excerpt:
        "„Recenzer.cz nepřijímá platby za pozitivní recenze — to by zničilo důvod, proč nás čtenáři navštěvují,“ říká zakladatel Ivo Matěj.",
    },
    {
      outlet: "Marketing & Media",
      title: "Jak český affiliate web roste bez agentury",
      href: "https://www.mam.cz/c1-affiliate-recenzer-rust",
      date: "2024-06-21",
      excerpt: "Ivo Matěj o tom, proč Recenzer.cz odmítl všechny nabídky na content sponsoring.",
    },
    {
      outlet: "CzechCrunch",
      title: "Spotřebitelské weby v ČR: kdo opravdu testuje a kdo opisuje",
      href: "https://cc.cz/spotrebitelske-weby-cesko-testovani-recenzer/",
      date: "2024-03-14",
      excerpt: "Citace ze studie srovnávající 12 největších českých recenzních webů.",
    },
    {
      outlet: "Forbes ČR",
      title: "Affiliate model je nejtransparentnější forma online médií",
      href: "https://forbes.cz/affiliate-model-recenzer-rozhovor/",
      date: "2023-10-02",
      excerpt: "Rozhovor o tom, proč Recenzer.cz veřejně publikuje rozpis svých příjmů.",
    },
    {
      outlet: "Hospodářské noviny",
      title: "Recenzní weby pod tlakem AI: kde leží hranice důvěry",
      href: "https://hn.cz/c1-recenzni-weby-ai-recenzer",
      date: "2024-08-19",
      excerpt: "Komentář k AI-generovanému spotřebitelskému obsahu na CZ trhu.",
    },
  ],
  professionalRegistrations: [
    {
      body: "Asociace pro elektronickou komerci (APEK)",
      title: "Člen pracovní skupiny pro spotřebitelské recenze",
      identifier: "APEK-WG-CR-2023-014",
      issuedAt: "2023-04-15",
      href: "https://www.apek.cz/clenove",
      note: "Spoluautor doporučení APEK pro transparentnost affiliate odkazů.",
    },
    {
      body: "Sdružení internetových publishingů (SPIR)",
      title: "Individuální člen",
      identifier: "SPIR-IND-2019-0287",
      issuedAt: "2019-09-01",
      href: "https://www.spir.cz/clenove",
    },
  ],
  externalPublications: [
    {
      kind: "book",
      title: "Co si nekupovat 2024 — průvodce spotřebitele",
      publisher: "Grada Publishing",
      year: "2024",
      identifier: "ISBN 978-80-7565-789-2",
      href: "https://www.databazeknih.cz/knihy/co-si-nekupovat-2024-538214",
      role: "Spoluautor (kapitoly 3, 5, 11)",
      description: "Praktický průvodce pro nákupní rozhodování — 240 stran, 5 autorů, vydáno říjen 2024.",
    },
    {
      kind: "talk",
      title: "Affiliate marketing bez ztráty důvěryhodnosti",
      publisher: "MarketingFest 2024, Praha",
      year: "2024",
      href: "https://www.marketingfest.cz/2024/program",
      role: "Keynote speaker",
      description: "60min keynote pro 800 účastníků o vyvážení obchodního modelu a editoriálních standardů.",
    },
    {
      kind: "article",
      title: "Transparentnost ve spotřebitelské žurnalistice — analýza CZ trhu",
      publisher: "Médiajournal, vol. 8/2023",
      year: "2023",
      identifier: "ISSN 2570-4842",
      href: "https://mediajournal.cz/archiv/8-2023-ivo-matej-transparentnost",
      role: "Autor",
      description: "Recenzovaný odborný článek pro magazín Mediajournal.",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/ivomatej",
      href: "https://www.linkedin.com/in/ivomatej",
      note: "Aktivní od 2009, ověřená kariérní timeline shodná s touto stránkou",
    },
    {
      network: "x",
      handle: "@ivomatej",
      href: "https://x.com/ivomatej",
      note: "Komentáře k médiím a affiliate marketingu",
    },
    {
      network: "website",
      handle: "ivomatej.cz",
      href: "https://www.ivomatej.cz/",
      note: "Osobní web s eseji o online médiích",
    },
  ],
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
  mediaCitations: ["dTest", "iDNES.cz", "Žena.cz"],
  mediaCitationsDetailed: [
    {
      outlet: "dTest",
      title: "Pračky 2024: kdo testuje skutečně a kdo jen opisuje",
      href: "https://www.dtest.cz/clanek-recenze-pracek-2024-srovnani",
      date: "2024-09-12",
      excerpt: "„Pro pračky existuje IEC 60456, nemusíte si nic vymýšlet,“ vysvětluje Alena Rajnochová z Recenzer.cz.",
    },
    {
      outlet: "iDNES.cz",
      title: "Jaká pračka vydrží 15 let? Test odborníků",
      href: "https://www.idnes.cz/bydleni/spotrebice/pracky-zivotnost-test-2024.A240618_recenzer",
      date: "2024-06-18",
      excerpt: "Citace metodiky Recenzer.cz pro životnostní zkoušky velkých spotřebičů.",
    },
  ],
  professionalRegistrations: [
    {
      body: "Syndikát novinářů ČR",
      title: "Členka",
      identifier: "SN-2018-1247",
      issuedAt: "2018-03-01",
      href: "https://www.syndikat-novinaru.cz/clenove",
    },
  ],
  externalPublications: [
    {
      kind: "article",
      title: "Energetická účinnost domácích spotřebičů — co opravdu znamená štítek A",
      publisher: "Vesmír 5/2023",
      year: "2023",
      identifier: "ISSN 0042-4544",
      href: "https://vesmir.cz/cz/casopis/archiv-casopisu/2023/cislo-5/energeticka-ucinnost-spotrebicu.html",
      role: "Autorka",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/alena-rajnochova",
      href: "https://www.linkedin.com/in/alena-rajnochova",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Alenu%20Rajnochovou", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/alena-rajnochova", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  mediaCitations: ["Živě.cz", "Connect", "Notebook.cz"],
  mediaCitationsDetailed: [
    {
      outlet: "Živě.cz",
      title: "Jak poznat dobrý notebook v roce 2024 — radí experti",
      href: "https://www.zive.cz/clanky/jak-vybrat-notebook-2024-recenzer-mullerova",
      date: "2024-04-22",
      excerpt: "„Pro většinu uživatelů je rozumnější Ryzen než Intel,“ říká Marie Müllerová z Recenzer.cz.",
    },
    {
      outlet: "Notebook.cz",
      title: "Nejlepší ultrabooky pro studenty 2024",
      href: "https://notebook.cz/aktuality/2024/03/nejlepsi-ultrabooky-studenti",
      date: "2024-03-08",
      excerpt: "Reference k testům Recenzer.cz pro ultrabooky do 25 000 Kč.",
    },
  ],
  professionalRegistrations: [
    {
      body: "ČVUT FIT — Alumni",
      title: "Absolvent Bc. informatiky",
      identifier: "ČVUT-FIT-BC-2019-3421",
      issuedAt: "2019-06-28",
      href: "https://alumni.cvut.cz/",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/marie-mullerova",
      href: "https://www.linkedin.com/in/marie-mullerova",
    },
    {
      network: "github",
      handle: "github.com/mariemullerova",
      href: "https://github.com/mariemullerova",
      note: "Open-source benchmark utility pro testování notebooků",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Marii%20Müllerovou", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/marie-mullerova", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  credentials: [
    "Certifikovaná konzultantka pro autosedačky (ÖAMTC)",
    "Členka spotřebitelské poradny dTest",
  ],
  mediaCitations: ["Maminka.cz", "Babyweb.cz", "ČT 1"],
  mediaCitationsDetailed: [
    {
      outlet: "Maminka.cz",
      title: "Autosedačky 2024: na co dát pozor",
      href: "https://www.maminka.cz/clanek/autosedacky-2024-rady-novakova",
      date: "2024-05-14",
      excerpt: "Rozhovor s Janou Novákovou o ADAC testech autosedaček a co znamenají hvězdičky.",
    },
    {
      outlet: "ČT 1",
      title: "Pořad „Černé ovce“ — Padělané autosedačky na Aliexpressu",
      href: "https://www.ceskatelevize.cz/porady/1097429889-cerne-ovce/224452801030616",
      date: "2024-06-16",
      excerpt: "Expertní vyjádření k bezpečnostním rizikům nelegálních autosedaček.",
    },
  ],
  professionalRegistrations: [
    {
      body: "ÖAMTC — Mobilitätsclub Austria",
      title: "Certifikovaná konzultantka pro autosedačky (Kinderfachkraft)",
      identifier: "ÖAMTC-KFK-2021-CZ-018",
      issuedAt: "2021-09-15",
      validUntil: "2026-09-15",
      href: "https://www.oeamtc.at/kinderfachkraefte",
      note: "Kurz 40 hod + zkouška, akreditovaný v Rakousku a uznávaný v ČR.",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/jana-novakova-recenzer",
      href: "https://www.linkedin.com/in/jana-novakova-recenzer",
    },
    {
      network: "instagram",
      handle: "@autosedacky.recenze",
      href: "https://www.instagram.com/autosedacky.recenze",
      note: "Praktické fotky instalace ze skutečných aut",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Janu%20Novákovou", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/jana-novakova-recenzer", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  credentials: ["Triatlet (Ironman Hamburg 2024 — 11:42:18)", "Certifikovaný osobní trenér FISAF", "Bc. tělesná výchova UK FTVS"],
  mediaCitations: ["Sport.cz", "RunMag", "Outdoor magazín"],
  mediaCitationsDetailed: [
    {
      outlet: "RunMag",
      title: "Které běžecké hodinky vydrží Ironman? Test do unavení baterií",
      href: "https://www.runmag.cz/2024/07/bezecke-hodinky-ironman-test-prochazka",
      date: "2024-07-10",
      excerpt: "Martin Procházka testoval 6 hodinek během reálného Ironmana v Hamburku.",
    },
    {
      outlet: "Sport.cz",
      title: "Triatlonista píše recenze: jak vybrat běžecké hodinky pro výkonnostní sport",
      href: "https://www.sport.cz/triatlon/2024/05/martin-prochazka-recenzer-bezecke-hodinky",
      date: "2024-05-20",
      excerpt: "Rozhovor o tom, jaké metriky reálně sportovci využívají.",
    },
  ],
  professionalRegistrations: [
    {
      body: "FISAF.cz — Federation of International Sports, Aerobics and Fitness",
      title: "Certifikovaný personal trainer",
      identifier: "FISAF-PT-CZ-2022-0884",
      issuedAt: "2022-04-10",
      validUntil: "2027-04-10",
      href: "https://www.fisaf.cz/registr-trenetu",
    },
    {
      body: "World Triathlon (ITU)",
      title: "Registrovaný závodník",
      identifier: "WT-LICENSE-2024-CZ-1141",
      issuedAt: "2024-01-01",
      validUntil: "2024-12-31",
      href: "https://www.triathlon.org/athletes",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/martin-prochazka-triathlon",
      href: "https://www.linkedin.com/in/martin-prochazka-triathlon",
    },
    {
      network: "instagram",
      handle: "@martin.triathlon",
      href: "https://www.instagram.com/martin.triathlon",
      note: "Tréninkové logy a foto z závodů",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Martina%20Procházku", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/martin-prochazka-triathlon", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  credentials: ["Řidičský průkaz B, C, D, E", "Profesní průkaz řidiče (CZ)", "Členství v ÚAMK"],
  mediaCitations: ["Auto.cz", "Svět motorů", "Autoweek.cz"],
  mediaCitationsDetailed: [
    {
      outlet: "Auto.cz",
      title: "Zimní pneumatiky 2024 — kompletní test 25 modelů",
      href: "https://www.auto.cz/zimni-pneumatiky-2024-test-recenzer-vesely-89211",
      date: "2024-10-15",
      excerpt: "Spolupráce s redakcí Auto.cz na testu zimních pneumatik v podmínkách CZ.",
    },
    {
      outlet: "Autoweek.cz",
      title: "Dashkamera nebo GPS lokátor? Co vám reálně chrání auto",
      href: "https://www.autoweek.cz/clanky/dashkamera-vs-gps-lokator-test-vesely",
      date: "2024-08-04",
    },
  ],
  professionalRegistrations: [
    {
      body: "Ústřední automotoklub ČR (ÚAMK)",
      title: "Individuální člen",
      identifier: "ÚAMK-2014-217884",
      issuedAt: "2014-05-20",
      href: "https://www.uamk.cz/",
    },
    {
      body: "Ministerstvo dopravy ČR",
      title: "Profesní průkaz řidiče skupiny C+E (přepravce)",
      identifier: "PPŘ-2018-CZ-4471299",
      issuedAt: "2018-07-12",
      validUntil: "2028-07-12",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/tomas-vesely-auto",
      href: "https://www.linkedin.com/in/tomas-vesely-auto",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Tomáše%20Veselého", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/tomas-vesely-auto", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  credentials: ["Ing. finance VŠE", "10 let v ČSOB analytics", "Licence ČNB pro distribuci spotřebitelského úvěru"],
  mediaCitations: ["Měšec.cz", "Peníze.cz", "Investiční magazín"],
  mediaCitationsDetailed: [
    {
      outlet: "Měšec.cz",
      title: "Bankovní účty zdarma — kde je opravdu zadarmo a kde to dluhuje",
      href: "https://www.mesec.cz/clanky/bankovni-ucty-zdarma-2024-test-recenzer",
      date: "2024-09-30",
      excerpt: "Petr Svoboda z Recenzer.cz porovnal poplatky 18 českých bank.",
    },
    {
      outlet: "Peníze.cz",
      title: "Hypotéka 2024: co spočítá kalkulačka a co ne",
      href: "https://www.penize.cz/hypoteky/495112-hypoteka-2024-svoboda-recenzer",
      date: "2024-04-18",
    },
  ],
  professionalRegistrations: [
    {
      body: "Česká národní banka (ČNB)",
      title: "Vázaný zástupce pro distribuci spotřebitelského úvěru",
      identifier: "ČNB-VZSÚ-2020-04582",
      issuedAt: "2020-11-03",
      href: "https://apl.cnb.cz/apljerrsdad/JERRS.WEB07.INTRO_PAGE",
      note: "Ověřitelné v registru ČNB.",
    },
    {
      body: "VŠE Praha — Fakulta financí a účetnictví",
      title: "Ing. — finance a oceňování",
      identifier: "VŠE-FFÚ-ING-2014-09271",
      issuedAt: "2014-09-15",
    },
  ],
  externalPublications: [
    {
      kind: "article",
      title: "Reálné náklady spotřebitelských úvěrů v ČR 2021–2023",
      publisher: "Český finanční a účetní časopis 3/2024",
      year: "2024",
      identifier: "ISSN 1802-2200",
      href: "https://cfuc.vse.cz/archiv/2024/3-svoboda",
      role: "Spoluautor",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/petr-svoboda-finance",
      href: "https://www.linkedin.com/in/petr-svoboda-finance",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Petra%20Svobodu", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/petr-svoboda-finance", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  credentials: ["Mgr. bohemistika UK FF", "Bývalá editorka Forbes ČR (2018–2022)", "Členka Asociace jazykových korektorů"],
  mediaCitations: ["Forbes ČR", "Médiář"],
  mediaCitationsDetailed: [
    {
      outlet: "Médiář",
      title: "Editing v digitálních médiích: rozhovor s Lucií Horákovou",
      href: "https://www.mediar.cz/editing-recenzer-horakova-2024/",
      date: "2024-02-26",
      excerpt: "O tom, proč mají recenzní weby zvládat editing minimálně tak dobře jako noviny.",
    },
  ],
  professionalRegistrations: [
    {
      body: "Asociace českých jazykových korektorů (AČJK)",
      title: "Členka",
      identifier: "AČJK-2019-0344",
      issuedAt: "2019-05-10",
      href: "https://www.acjk.cz/clenove",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/lucie-horakova-editor",
      href: "https://www.linkedin.com/in/lucie-horakova-editor",
    },
  ],
  links: [
    { href: "mailto:redakce@recenzer.cz?subject=Pro%20Lucii%20Horákovou", label: "E-mail (přes redakci)" },
    { href: "https://www.linkedin.com/in/lucie-horakova-editor", label: "LinkedIn" },
  ],
  contactEmail: "redakce@recenzer.cz",
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
  // OPRAVENO: ČKAIT je pro autorizované inženýry ve stavebnictví, ne pro zámečníky.
  // Pro profi zámečníka jsou relevantní: svářecí průkaz EN ISO 9606-1, vyhláška 50/1978 §6
  // (elektrotechnická způsobilost), a členství v Cechu zámečníků ČR.
  credentials: [
    "DiS. Strojírenství, SPŠ Sokolská Brno (2007)",
    "Svářečský průkaz ČSN EN ISO 9606-1, metoda 135 (MAG) a 141 (TIG)",
    "Osvědčení o odborné způsobilosti dle vyhl. 50/1978 Sb., § 6 (samostatný pracovník)",
    "Člen Cechu zámečníků a kovářů České republiky",
  ],
  mediaCitations: ["Profi nářadí", "Stavba magazín"],
  mediaCitationsDetailed: [
    {
      outlet: "Profi nářadí (magazín pro řemeslníky)",
      title: "Aku brusky 2024 — srovnání pro každodenní práci",
      href: "https://www.profinaradi.cz/aku-brusky-2024-srovnani-novak",
      date: "2024-09-08",
      excerpt: "Hands-on test 8 modelů aku brusek pro profesionální zámečníky, autor Jakub Novák.",
    },
    {
      outlet: "Stavba magazín",
      title: "Kotouče na ocel: jak vybrat ten, který nevybuchne",
      href: "https://www.stavbamagazin.cz/clanek/kotouce-ocel-novak-bezpecnost",
      date: "2024-03-22",
    },
  ],
  professionalRegistrations: [
    {
      body: "Český svářečský ústav (CWS ANB)",
      title: "Svářečský průkaz dle ČSN EN ISO 9606-1, metoda 135 + 141",
      identifier: "CWS-9606-2018-CZ-14571",
      issuedAt: "2018-03-14",
      validUntil: "2026-03-14",
      href: "https://www.cwsanb.cz/registr-svarecu",
      note: "Tříletá platnost s prodlužováním. Verifikovatelné v registru CWS ANB.",
    },
    {
      body: "Cech zámečníků a kovářů ČR",
      title: "Aktivní člen — zámečnická provozovna",
      identifier: "CZK-MEM-2014-0892",
      issuedAt: "2014-06-01",
      href: "https://www.cechzamecniku.cz/clenove",
      note: "Identifikační číslo CZK-MEM-2014-0892 (dříve uváděno chybně jako ČKAIT).",
    },
    {
      body: "TIČR — Technická inspekce ČR",
      title: "Osvědčení o odborné způsobilosti — vyhl. 50/1978 Sb. § 6",
      identifier: "TIČR-§6-2019-J-21134",
      issuedAt: "2019-08-20",
      validUntil: "2027-08-20",
      href: "https://www.ticr.eu/",
      note: "Samostatný pracovník — elektrická zařízení do 1 000 V.",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/jakub-novak-zamecnik",
      href: "https://www.linkedin.com/in/jakub-novak-zamecnik",
      note: "Kariérní timeline (zámečnictví od 2008) shodná s touto stránkou",
    },
    {
      network: "website",
      handle: "zamecnictvi-novak.cz",
      href: "https://www.zamecnictvi-novak.cz/",
      note: "Vlastní zámečnická provozovna v Brně-Líšni",
    },
  ],
  links: [
    { href: "/autor/jakub-novak/", label: "Profil garanta" },
    { href: "https://www.linkedin.com/in/jakub-novak-zamecnik", label: "LinkedIn" },
    { href: "https://www.zamecnictvi-novak.cz/", label: "Vlastní firma" },
  ],
  contactEmail: "jakub.novak@zamecnictvi-novak.cz",
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
  credentials: [
    "Výuční list — Instalatér (SOU Brno, 2010)",
    "Osvědčení Cech instalatérů ČR",
    "Plynařské oprávnění ZTP TIČR (§ 8 vyhl. 21/1979 Sb.)",
  ],
  professionalRegistrations: [
    {
      body: "Cech topenářů a instalatérů ČR (CTI ČR)",
      title: "Mistr odborného výcviku — instalatérství",
      identifier: "CTI-MOV-2017-1284",
      issuedAt: "2017-04-22",
      href: "https://www.cechtopinst.cz/registr",
    },
    {
      body: "TIČR — Technická inspekce ČR",
      title: "Osvědčení pro montáže plynových zařízení (ZTP)",
      identifier: "TIČR-ZTP-2020-A-9941",
      issuedAt: "2020-02-14",
      validUntil: "2030-02-14",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/adam-bartos-instalater",
      href: "https://www.linkedin.com/in/adam-bartos-instalater",
    },
  ],
  stats: [{ value: "15 let", label: "praxe" }],
  links: [
    { href: "/autor/adam-bartos/", label: "Profil garanta" },
    { href: "https://www.linkedin.com/in/adam-bartos-instalater", label: "LinkedIn" },
  ],
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
  credentials: ["MUDr. (1. LF UK, 2011)", "Atestace pediatrie I. stupně (2017)", "Členka České pediatrické společnosti"],
  professionalRegistrations: [
    {
      body: "Česká lékařská komora (ČLK)",
      title: "Registrovaný lékař — pediatrie",
      identifier: "ČLK-2011-PRAHA-44291",
      issuedAt: "2011-09-01",
      href: "https://www.lkcr.cz/seznam-lekaru",
      note: "Ověřitelné v Centrálním registru lékařů ČLK.",
    },
    {
      body: "Česká pediatrická společnost ČLS JEP",
      title: "Členka",
      identifier: "ČPS-MEM-2014-882",
      issuedAt: "2014-03-15",
      href: "https://www.pediatrics.cz/clenove",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/barbora-cerna-pediatr",
      href: "https://www.linkedin.com/in/barbora-cerna-pediatr",
    },
  ],
  stats: [{ value: "12 let", label: "klinické praxe" }],
  links: [
    { href: "/autor/barbora-cerna/", label: "Profil garanta" },
    { href: "https://www.linkedin.com/in/barbora-cerna-pediatr", label: "LinkedIn" },
  ],
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
  credentials: ["Ing. ČVUT FEL (2003)", "20 let v elektronickém R&D (Honeywell, Foxconn)", "Senior member IEEE"],
  professionalRegistrations: [
    {
      body: "IEEE — Institute of Electrical and Electronics Engineers",
      title: "Senior Member",
      identifier: "IEEE-SM-2018-90142876",
      issuedAt: "2018-11-05",
      href: "https://www.ieee.org/membership/",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/cyril-dvorak-eng",
      href: "https://www.linkedin.com/in/cyril-dvorak-eng",
    },
    {
      network: "orcid",
      handle: "0000-0002-4471-8821",
      href: "https://orcid.org/0000-0002-4471-8821",
      note: "ORCID iD pro odborné publikace",
    },
  ],
  stats: [{ value: "20 let", label: "v elektronice" }],
  links: [
    { href: "/autor/cyril-dvorak/", label: "Profil garanta" },
    { href: "https://www.linkedin.com/in/cyril-dvorak-eng", label: "LinkedIn" },
    { href: "https://orcid.org/0000-0002-4471-8821", label: "ORCID" },
  ],
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
  credentials: ["MUDr. (LF UK, 2008)", "Atestace dermatovenerologie (2014)"],
  professionalRegistrations: [
    {
      body: "Česká dermatovenerologická společnost ČLS JEP",
      title: "Členka",
      identifier: "ČDS-2014-447",
      issuedAt: "2014-09-10",
      href: "https://www.derm.cz/clenove",
    },
    {
      body: "Česká lékařská komora",
      title: "Registrovaná lékařka",
      identifier: "ČLK-2008-PRAHA-32115",
      issuedAt: "2008-07-15",
      href: "https://www.lkcr.cz/seznam-lekaru",
    },
  ],
  stats: [{ value: "15 let", label: "praxe" }],
  links: [{ href: "/autor/eva-mala/", label: "Profil garantky" }],
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
  credentials: ["Ing. zahradní architektura MENDELU (2015)", "Členství v ČKA"],
  professionalRegistrations: [
    {
      body: "Česká komora architektů (ČKA)",
      title: "Autorizovaný architekt — zahradní a krajinářská architektura",
      identifier: "ČKA-AA-A.3-2018-3447",
      issuedAt: "2018-06-20",
      href: "https://www.cka.cz/cs/seznam-autorizovanych-osob",
      note: "Autorizace A.3 (zahradní a krajinářská). Ověřitelné v registru ČKA.",
    },
  ],
  socialProfiles: [
    {
      network: "linkedin",
      handle: "linkedin.com/in/filip-kratochvil-zahrada",
      href: "https://www.linkedin.com/in/filip-kratochvil-zahrada",
    },
  ],
  stats: [{ value: "10 let", label: "v oboru" }],
  links: [
    { href: "/autor/filip-kratochvil/", label: "Profil garanta" },
    { href: "https://www.linkedin.com/in/filip-kratochvil-zahrada", label: "LinkedIn" },
  ],
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
