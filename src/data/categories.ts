import type { Category } from "../types/category";

export const categories: Category[] = [
  {
    slug: "elektronarad",
    name: "Elektronářadí",
    href: "/elektronarad/",
    tagline: "Vrtačky, brusky, pily a ruční nástroje",
    description:
      "Testujeme aku platformy, motory pod zátěží, kickback ochranu a bezpečnostní prvky. Nejlepší modely od 1 000 do 30 000 Kč.",
    articleCount: 87,
    freshCount: 12,
    topics: ["Aku brusky", "Vrtačky", "Pily", "Šroubováky", "Baterie a ekosystémy"],
    accent: "purple",
    featured: true,
    heroImageSrc: "/images/articles/aku-bruska-2048x1044.webp",
  },
  {
    slug: "domaci-spotrebice",
    name: "Domácí spotřebiče",
    href: "/domaci-spotrebice/",
    tagline: "Praní, sušení, mytí, vaření, chlazení",
    description:
      "Pračky, sušičky, myčky, ledničky a kuchyňské spotřebiče testované v plném provozu po měsíce.",
    articleCount: 142,
    freshCount: 18,
    topics: ["Pračky", "Sušičky", "Myčky", "Ledničky", "Trouby"],
    accent: "amber",
  },
  {
    slug: "zahrada",
    name: "Zahrada",
    href: "/zahrada/",
    tagline: "Sekačky, foukače, nůžky a zahradní technika",
    description:
      "Aku sekačky, foukače listí, plotnostříhače. Co skutečně vydrží českou zimu a co vydrží jen do první sezóny.",
    articleCount: 56,
    freshCount: 7,
    topics: ["Sekačky", "Foukače", "Plotostříhače", "Pily na dřevo", "Závlaha"],
    accent: "green",
  },
  {
    slug: "auto",
    name: "Auto",
    href: "/auto/",
    tagline: "Pneumatiky, baterie, elektronika",
    description:
      "Co se vyplatí, co je marketing. Testujeme zimní pneumatiky, autobaterie, GPS lokátory a další doplňky.",
    articleCount: 38,
    freshCount: 5,
    topics: ["Zimní pneu", "Letní pneu", "Baterie", "GPS lokátory", "Dashkamery"],
    accent: "red",
  },
  {
    slug: "navody",
    name: "Návody a tipy",
    href: "/navody/",
    tagline: "Jak vybrat, jak používat, jak opravit",
    description:
      "Detailní průvodce, srovnání ekosystémů, bezpečnostní pravidla. Často citované odbornými garanty.",
    articleCount: 64,
    freshCount: 9,
    topics: ["Jak vybrat", "Bezpečnost", "Údržba", "Slovník pojmů"],
    accent: "blue",
  },
];
