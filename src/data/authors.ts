import type { Person } from "../types/article";

export const ivoMatej: Person = {
  slug: "ivo-matej",
  name: "Ivo Matěj",
  role: "Šéfredaktor · Recenzer.cz",
  initials: "IM",
  bioHtml:
    "9 let v redakcích recenzních portálů. Specializuje se na <strong>elektronářadí a domácí spotřebiče</strong>. Před Recenzerem vedl rubriku v časopise Můj dům.",
  credentials: [
    "9 let profesionálních recenzí",
    "Publikováno 347 článků na Recenzer.cz",
    "Spoluautor knihy Co si nekupovat 2024",
  ],
  links: [
    { href: "mailto:ivo.matej@recenzer.cz", label: "E-mail" },
    { href: "https://www.linkedin.com/in/ivomatej", label: "LinkedIn" },
    { href: "/autor/ivo-matej/", label: "Bio" },
  ],
};

export const jakubNovak: Person = {
  slug: "jakub-novak",
  name: "Jakub Novák, DiS.",
  role: "Profesionální zámečník · Konzultant Recenzer",
  initials: "JN",
  bioHtml:
    "<strong>18 let praxe</strong> v profesionálním zámečnictví a kovovýrobě. Specialista na opracování oceli, hliníku a nerez svarů. Konzultuje pro testovací laboratoř Recenzer od 2022.",
  credentials: [
    "DiS. Strojírenství, SPŠ Brno",
    "Člen ČKAIT (certifikát IS-2014-0892)",
    "Garant testů Recenzer v kategorii elektronářadí",
  ],
  links: [
    { href: "/garant/jakub-novak/", label: "Profil garanta" },
    { href: "/autor/jakub-novak/testy/", label: "Předchozí testy" },
  ],
};
