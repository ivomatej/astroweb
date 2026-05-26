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
        ],
      },
      {
        heading: "Editorial",
        links: [
          { href: "/metodika/", label: "Metodika testů" },
          { href: "/eticky-kodex/", label: "Etický kodex" },
          { href: "/redakcni-zasady/", label: "Redakční zásady" },
          { href: "/overovani-faktu/", label: "Ověřování faktů" },
          { href: "/duveryhodne-zdroje/", label: "Důvěryhodné zdroje" },
          { href: "/oprava-chyb/", label: "Nahlásit chybu" },
        ],
      },
      {
        heading: "Komunita",
        links: [
          { href: "/diskuze/", label: "Diskuze / fórum" },
          { href: "/komentare/", label: "Nejnovější komentáře" },
          { href: "/slovnik/", label: "Slovník pojmů" },
          { href: "/navody/", label: "Návody" },
          { href: "/nejlepsi/", label: "TOP žebříčky" },
        ],
      },
      {
        heading: "Redakce",
        links: [
          { href: "/o-nas/", label: "O nás" },
          { href: "/kariera/", label: "Kariéra" },
          { href: "/kontakt/", label: "Kontakt" },
          { href: "/inzerce/", label: "Inzerce" },
          { href: "/tiskove-zpravy/", label: "Tiskové zprávy" },
        ],
      },
    ],

    legal: [
      { href: "/zasady-osobnich-udaju/", label: "Zásady ochrany osobních údajů" },
      { href: "/zasady-cookies/", label: "Zásady cookies" },
      { href: "/podminky-pouziti/", label: "Podmínky použití" },
      { href: "/mapa-webu/", label: "Mapa webu" },
      { href: "/duveryhodne-zdroje/", label: "Důvěryhodné zdroje" },
      { href: "/diskuze/", label: "Diskuze / fórum" },
    ],
  },
};
