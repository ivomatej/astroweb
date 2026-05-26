import type { SiteConfig } from "../types/site";

export const site: SiteConfig = {
  brand: {
    name: "Recenzer",
    tagline:
      "Nezávislý průvodce nákupem. Bez sponzoringu, bez affiliate vlivu na hodnocení.",
    domain: "recenzer.cz",
    foundedYear: 2016,
    versionLabel: "Verze 3.2 · poslední audit 04/2026",
  },

  topBar: {
    flag: "Pomáháme s výběrem od roku 2016. S námi se rozhodnete.",
    links: [
      { href: "/metodika/", label: "Metodika" },
      { href: "/eticky-kodex/", label: "Etický kodex" },
      { href: "/duveryhodne-zdroje/", label: "Zdroje" },
    ],
  },

  primaryNav: [
    { href: "/elektronarad/", label: "Elektronářadí" },
    { href: "/domaci-spotrebice/", label: "Spotřebiče" },
    { href: "/zahrada/", label: "Zahrada" },
    { href: "/auto/", label: "Auto" },
    { href: "/navody/", label: "Návody" },
  ],

  newsletter: {
    eyebrow: "Newsletter Recenzer · 1× měsíčně",
    title: "Nepropásněte nové testy a důležité aktualizace",
    description:
      "Bez spamu, bez prodeje vašich dat. Pouze nové recenze, aktualizované žebříčky a praktická rada od redakce. Odhlášení jedním klikem.",
    consentText: "Souhlasím se zpracováním osobních údajů",
    consentLinkHref: "/zasady-osobnich-udaju/",
  },

  footer: {
    brandTagline:
      "Nezávislý průvodce nákupem. Bez sponzoringu, bez affiliate vlivu na hodnocení. Od 2016.",

    socials: [
      { href: "#", label: "Facebook", icon: "facebook" },
      { href: "#", label: "YouTube", icon: "youtube" },
      { href: "/rss.xml", label: "RSS", icon: "rss" },
    ],

    /**
     * Defaults — used everywhere unless a page passes a FooterCategoryContext
     * which overrides selected columns. The first two columns are the most
     * likely candidates for category-specific overrides (top articles, trends).
     */
    columns: [
      {
        heading: "Kategorie",
        links: [
          { href: "/elektronarad/", label: "Elektronářadí" },
          { href: "/domaci-spotrebice/", label: "Domácí spotřebiče" },
          { href: "/zahrada/", label: "Zahrada" },
          { href: "/auto/", label: "Auto" },
          { href: "/sport/", label: "Sport & outdoor" },
          { href: "/elektronika/", label: "Elektronika" },
          { href: "/znacky/", label: "Značky výrobců" },
        ],
      },
      {
        heading: "Editorial",
        links: [
          { href: "/typy-obsahu/", label: "Typy obsahu" },
          { href: "/metodika/", label: "Metodika testů" },
          { href: "/eticky-kodex/", label: "Etický kodex" },
          { href: "/redakcni-zasady/", label: "Redakční zásady" },
          { href: "/overovani-faktu/", label: "Ověřování faktů" },
          { href: "/pouzivani-ai/", label: "Jak používáme AI" },
          { href: "/duveryhodne-zdroje/", label: "Důvěryhodné zdroje" },
          { href: "/oprava-chyb/", label: "Nahlásit chybu" },
          { href: "/opravy/", label: "Archiv oprav" },
          { href: "/nase-chyby/", label: "Naše chyby (lessons)" },
          { href: "/aktualizace/", label: "Aktualizace webu" },
        ],
      },
      {
        heading: "Komunita",
        links: [
          { href: "/slovnik/", label: "Slovník pojmů" },
          { href: "/magazin/", label: "Magazín / novinky" },
          { href: "/rozhovory/", label: "Rozhovory s odborníky" },
          { href: "/recenze-eshopu/", label: "Recenze e-shopů" },
          { href: "/diskuze/", label: "Diskuze / fórum" },
          { href: "/navody/", label: "Návody" },
        ],
      },
      {
        heading: "Redakce",
        links: [
          { href: "/o-nas/", label: "O nás" },
          { href: "/sefredaktor/", label: "Šéfredaktor" },
          { href: "/impressum/", label: "Impressum" },
          { href: "/press/", label: "Press & Media kit" },
          { href: "/kariera/", label: "Kariéra" },
          { href: "/kontakt/", label: "Kontakt" },
          { href: "/pro-znacky-firmy-agentury/", label: "Pro značky a firmy" },
          { href: "/kodex-ferove-firmy/", label: "Kodex férové firmy" },
          { href: "/stante-se-testerem/", label: "Staňte se testerem" },
        ],
      },
    ],

    legal: [
      { href: "/impressum/", label: "Impressum" },
      { href: "/zasady-osobnich-udaju/", label: "Zásady ochrany osobních údajů" },
      { href: "/zasady-cookies/", label: "Zásady cookies" },
      { href: "/podminky-pouziti/", label: "Podmínky použití" },
      { href: "/mapa-webu/", label: "Mapa webu" },
      { href: "/duveryhodne-zdroje/", label: "Důvěryhodné zdroje" },
      { href: "/diskuze/", label: "Diskuze / fórum" },
    ],
  },
};
