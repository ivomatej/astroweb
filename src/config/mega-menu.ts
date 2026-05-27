/**
 * Mega-menu panels per primary-nav entry.
 *
 * Each top-level category opens a wide panel on hover/focus (desktop
 * only). Sections inside a panel are short link lists with a heading
 * + icon, mirroring the Heureka-style grid. A single "Doporučené
 * značky" row sits at the bottom of every panel so the visual rhythm
 * stays consistent across categories.
 *
 * Mobile uses the plain link from primaryNav — mega panels are hidden
 * under 960 px (where the nav itself collapses anyway).
 */

import type { MegaMenuPanel, MegaMenuBrand } from "../types/site";

// Brand row shared by every panel (Heureka pattern: same row, same
// brands, irrespective of which category was opened). Keeps the
// footer feel consistent.
const sharedBrands: MegaMenuBrand[] = [
  { name: "Bosch",   href: "/znacky/bosch/" },
  { name: "Miele",   href: "/znacky/miele/" },
  { name: "Makita",  href: "/znacky/makita/" },
  { name: "Samsung", href: "/znacky/samsung/" },
];

const sharedBrandsLabel = "Doporučené značky";

/** Spotřebiče — bílá technika + chlazení + vaření + malé spotřebiče. */
export const spotrebicPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Bílá technika",
      icon: "appliance",
      links: [
        { href: "/clanek/nejlepsi-pracky-2026/", label: "Pračky" },
        { href: "/clanek/nejlepsi-susicky-2026/", label: "Sušičky" },
        { href: "/clanek/nejlepsi-mycky-2026/", label: "Myčky" },
        { href: "/clanek/pracka-susicka-kombi/", label: "Kombinace pračka + sušička" },
      ],
      showMore: { href: "/domaci-spotrebice/", label: "Všechna bílá technika" },
    },
    {
      title: "Chlazení",
      icon: "appliance",
      links: [
        { href: "/clanek/nejlepsi-lednice-2026/", label: "Lednice" },
        { href: "/clanek/nejlepsi-mraznicky/", label: "Mrazáky" },
        { href: "/clanek/vinoteky-recenze/", label: "Vinotéky" },
        { href: "/clanek/kombi-chladnicky/", label: "Kombinované chladničky" },
      ],
      showMore: { href: "/domaci-spotrebice/", label: "Všechno chlazení" },
    },
    {
      title: "Vaření",
      icon: "appliance",
      links: [
        { href: "/clanek/nejlepsi-trouby/", label: "Trouby" },
        { href: "/clanek/indukcni-desky/", label: "Indukční desky" },
        { href: "/clanek/sporaky/", label: "Sporáky" },
        { href: "/clanek/mikrovlnky/", label: "Mikrovlnky" },
      ],
      showMore: { href: "/domaci-spotrebice/", label: "Všechno vaření" },
    },
    {
      title: "Malé spotřebiče",
      icon: "appliance",
      links: [
        { href: "/clanek/kavovary-s-mlynkem-2025/", label: "Kávovary" },
        { href: "/clanek/rychlovarne-konvice-2025/", label: "Rychlovarné konvice" },
        { href: "/clanek/toustovace/", label: "Toustovače" },
        { href: "/clanek/mixery/", label: "Mixéry a kuchyňské roboty" },
      ],
      showMore: { href: "/domaci-spotrebice/", label: "Malé spotřebiče" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Elektronářadí — brusky / vrtačky / pily / aku platformy. */
export const elektronaradiPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Brusky",
      icon: "tool",
      links: [
        { href: "/clanek/aku-brusky/", label: "Aku úhlové brusky" },
        { href: "/clanek/nejlepsi-aku-brusky/", label: "TOP 5 aku brusek 2026" },
        { href: "/clanek/srovnani-aku-brusek/", label: "Plné srovnání 23 modelů" },
        { href: "/clanek/excentricke-brusky/", label: "Excentrické brusky" },
      ],
      showMore: { href: "/elektronarad/", label: "Všechny brusky" },
    },
    {
      title: "Vrtání",
      icon: "tool",
      links: [
        { href: "/clanek/jak-vybrat-aku-vrtacku/", label: "Aku vrtačky" },
        { href: "/clanek/vrtacky-pro-domacnost/", label: "Vrtačky pro domácnost" },
        { href: "/clanek/priklepove-vrtacky/", label: "Příklepové vrtačky" },
        { href: "/clanek/kombi-kladiva/", label: "Kombi kladiva" },
      ],
      showMore: { href: "/elektronarad/", label: "Všechno vrtání" },
    },
    {
      title: "Pily",
      icon: "tool",
      links: [
        { href: "/clanek/jak-vybrat-aku-pilu/", label: "Aku přímočaré pily" },
        { href: "/clanek/okruzni-pily/", label: "Okružní pily" },
        { href: "/clanek/retezove-pily-elektricke/", label: "Řetězové pily" },
        { href: "/clanek/skladaci-pily/", label: "Skládací / multifunkční" },
      ],
      showMore: { href: "/elektronarad/", label: "Všechny pily" },
    },
    {
      title: "Aku platformy",
      icon: "tool",
      links: [
        { href: "/znacky/bosch/", label: "Bosch Pro 18 V" },
        { href: "/znacky/makita/", label: "Makita LXT 18 V" },
        { href: "/clanek/milwaukee-m18/", label: "Milwaukee M18" },
        { href: "/clanek/dewalt-xr/", label: "DeWalt XR" },
      ],
      showMore: { href: "/znacky/", label: "Všechny značky" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Zahrada — sekání / údržba / pily / závlaha. */
export const zahradaPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Sekání",
      icon: "leaf",
      links: [
        { href: "/clanek/aku-sekacky-2026/", label: "Aku sekačky" },
        { href: "/clanek/robotické-sekacky-2025/", label: "Robotické sekačky" },
        { href: "/clanek/strunove-sekacky/", label: "Strunové sekačky" },
        { href: "/clanek/krovinorezy/", label: "Křovinořezy" },
      ],
      showMore: { href: "/zahrada/", label: "Všechno sekání" },
    },
    {
      title: "Údržba",
      icon: "leaf",
      links: [
        { href: "/clanek/foukace-listi-2026/", label: "Foukače listí" },
        { href: "/clanek/plotostrihace-2026/", label: "Plotostříhače" },
        { href: "/clanek/kultivatory/", label: "Kultivátory a frézy" },
        { href: "/clanek/vertikutatory/", label: "Vertikutátory" },
      ],
      showMore: { href: "/zahrada/", label: "Údržba zahrady" },
    },
    {
      title: "Pily a větve",
      icon: "leaf",
      links: [
        { href: "/clanek/aku-pily-2025/", label: "Aku pily" },
        { href: "/clanek/retezove-pily/", label: "Řetězové pily" },
        { href: "/clanek/vyvetvovace/", label: "Vyvětvovače" },
        { href: "/clanek/stipace-dreva/", label: "Štípače dřeva" },
      ],
      showMore: { href: "/zahrada/", label: "Všechny pily" },
    },
    {
      title: "Závlaha a zima",
      icon: "leaf",
      links: [
        { href: "/clanek/zavlazovaci-systemy/", label: "Závlahové systémy" },
        { href: "/clanek/zahradni-cerpadla/", label: "Zahradní čerpadla" },
        { href: "/clanek/foukace-snehu-2025/", label: "Foukače sněhu" },
        { href: "/clanek/zahradni-vyhrivani/", label: "Zahradní vyhřívání" },
      ],
      showMore: { href: "/zahrada/", label: "Závlaha a zima" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Auto — pneumatiky / baterie / elektronika / příslušenství. */
export const autoPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Pneumatiky",
      icon: "car",
      links: [
        { href: "/clanek/zimni-pneumatiky-2026/", label: "Zimní pneumatiky" },
        { href: "/clanek/letni-pneumatiky-225-45-r17/", label: "Letní pneumatiky" },
        { href: "/clanek/celorocni-pneumatiky/", label: "Celoroční pneumatiky" },
        { href: "/clanek/jak-cist-stitek-pneu/", label: "Štítek EU — jak číst" },
      ],
      showMore: { href: "/auto/", label: "Všechny pneumatiky" },
    },
    {
      title: "Autobaterie",
      icon: "car",
      links: [
        { href: "/clanek/autobaterie-12v-2026/", label: "Autobaterie 12 V" },
        { href: "/clanek/agm-baterie/", label: "AGM baterie" },
        { href: "/clanek/efb-baterie/", label: "EFB baterie" },
        { href: "/clanek/jak-vybrat-autobaterii/", label: "Jak vybrat baterii" },
      ],
      showMore: { href: "/auto/", label: "Všechny autobaterie" },
    },
    {
      title: "Elektronika do auta",
      icon: "car",
      links: [
        { href: "/clanek/gps-lokatory/", label: "GPS lokátory" },
        { href: "/clanek/dashkamery/", label: "Dashkamery" },
        { href: "/clanek/parkovaci-kamery/", label: "Couvací kamery" },
        { href: "/clanek/autoradia-2din/", label: "Autorádia 2 DIN" },
      ],
      showMore: { href: "/auto/", label: "Auto-elektronika" },
    },
    {
      title: "Příslušenství",
      icon: "car",
      links: [
        { href: "/clanek/jak-vybrat-detskou-autosedacku/", label: "Autosedačky" },
        { href: "/clanek/stresni-nosice/", label: "Střešní nosiče" },
        { href: "/clanek/snehove-retezy/", label: "Sněhové řetězy" },
        { href: "/clanek/startovaci-kabely/", label: "Startovací kabely" },
      ],
      showMore: { href: "/auto/", label: "Auto příslušenství" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Služby — placeholder. Stránka /sluzby/ zatím neexistuje. */
export const sluzbyPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Pro značky",
      icon: "service",
      links: [
        { href: "/pro-znacky-firmy-agentury/", label: "Spolupráce s redakcí" },
        { href: "/press/", label: "Press & Media kit" },
        { href: "/kodex-ferove-firmy/", label: "Kodex férové firmy" },
        { href: "/stante-se-testerem/", label: "Staňte se testerem" },
      ],
      showMore: { href: "/pro-znacky-firmy-agentury/", label: "Pro značky a firmy" },
    },
    {
      title: "Laboratoř",
      icon: "service",
      links: [
        { href: "/testovaci-laborator/", label: "Naše laboratoř Brno" },
        { href: "/testovaci-laborator/#discipliny", label: "7 testovacích disciplín" },
        { href: "/testovaci-laborator/#vznik-pracovist", label: "Jak vznikla pracoviště" },
        { href: "/jak-testujeme/", label: "Metodiky testů" },
      ],
      showMore: { href: "/testovaci-laborator/", label: "Otevřít laboratoř" },
    },
    {
      title: "Pro čtenáře",
      icon: "service",
      links: [
        { href: "/newsletter/", label: "Newsletter (1× měsíčně)" },
        { href: "/diskuze/", label: "Diskuze / fórum" },
        { href: "/oprava-chyb/", label: "Nahlásit chybu" },
        { href: "/kontakt/", label: "Kontakt na redakci" },
      ],
      showMore: { href: "/kontakt/", label: "Všechny kontakty" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Návody — průvodci výběrem, údržba, bezpečnost, slovník. */
export const navodyPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Jak vybrat",
      icon: "guide",
      links: [
        { href: "/clanek/jak-vybrat-aku-vrtacku/", label: "Aku vrtačku" },
        { href: "/clanek/jak-vybrat-aku-pilu/", label: "Aku pilu" },
        { href: "/clanek/jak-vybrat-susicku/", label: "Sušičku" },
        { href: "/clanek/jak-vybrat-autobaterii/", label: "Autobaterii" },
      ],
      showMore: { href: "/navody/", label: "Všechny průvodce výběrem" },
    },
    {
      title: "Bezpečnost a údržba",
      icon: "guide",
      links: [
        { href: "/clanek/bezpecnost-elektronaradi/", label: "Bezpečnost aku nářadí" },
        { href: "/clanek/aku-baterie-srovnani/", label: "Údržba aku baterií" },
        { href: "/clanek/jak-cist-eticky-kodex/", label: "Jak číst etický kodex" },
        { href: "/clanek/jak-cist-recenze/", label: "Jak číst recenze" },
      ],
      showMore: { href: "/navody/", label: "Bezpečnost a údržba" },
    },
    {
      title: "Slovník pojmů",
      icon: "guide",
      links: [
        { href: "/slovnik/", label: "Rozcestník slovníku" },
        { href: "/slovnik/elektronaradi/", label: "Elektronářadí" },
        { href: "/slovnik/domaci-spotrebice/", label: "Spotřebiče" },
        { href: "/slovnik/auto/", label: "Auto" },
      ],
      showMore: { href: "/slovnik/", label: "Otevřít slovník" },
    },
    {
      title: "Editorial",
      icon: "guide",
      links: [
        { href: "/metodika/", label: "Metodika testů" },
        { href: "/overovani-faktu/", label: "Ověřování faktů" },
        { href: "/typy-obsahu/", label: "Typy obsahu" },
        { href: "/duveryhodne-zdroje/", label: "Důvěryhodné zdroje" },
      ],
      showMore: { href: "/metodika/", label: "Editorial standards" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Novinky — magazín, rozhovory, aktualizace. */
export const novinkyPanel: MegaMenuPanel = {
  sections: [
    {
      title: "Magazín",
      icon: "news",
      links: [
        { href: "/magazin/ai-pracky-bosch-2026/", label: "AI v pračkách Bosch 2026" },
        { href: "/magazin/babysense-vyjasneni/", label: "Babysense — vyjasnění" },
        { href: "/magazin/stitek-pneu-2026/", label: "Štítek pneumatik 2026" },
        { href: "/magazin/", label: "Všechny novinky" },
      ],
      showMore: { href: "/magazin/", label: "Celý magazín" },
    },
    {
      title: "Rozhovory",
      icon: "news",
      links: [
        { href: "/rozhovory/jakub-novak-aku-brusky-2026/", label: "Jakub Novák — aku brusky" },
        { href: "/rozhovory/", label: "Všechny rozhovory" },
      ],
      showMore: { href: "/rozhovory/", label: "Otevřít rozhovory" },
    },
    {
      title: "Z redakce",
      icon: "news",
      links: [
        { href: "/aktualizace/", label: "Aktualizace webu" },
        { href: "/opravy/", label: "Archiv oprav" },
        { href: "/nase-chyby/", label: "Naše chyby" },
        { href: "/pouzivani-ai/", label: "Jak používáme AI" },
      ],
      showMore: { href: "/aktualizace/", label: "Vše z redakce" },
    },
  ],
  brandsLabel: sharedBrandsLabel,
  brands: sharedBrands,
};

/** Map href → mega panel. Used by site.ts to attach panels by URL. */
export const megaMenuByHref: Record<string, MegaMenuPanel> = {
  "/domaci-spotrebice/": spotrebicPanel,
  "/elektronarad/":      elektronaradiPanel,
  "/zahrada/":           zahradaPanel,
  "/auto/":              autoPanel,
  "/sluzby/":            sluzbyPanel,
  "/navody/":            navodyPanel,
  "/magazin/":           novinkyPanel,
};
