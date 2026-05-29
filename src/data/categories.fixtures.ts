import type { Category } from "../types/category";

/**
 * Each `editorialNote` is short (max ~130 words) and written distinctively per category.
 * No generic „Welcome to our extensive collection of..." AI boilerplate — that
 * pattern was decimated by Google's December 2025 update. If you can't write
 * a category note in human voice, leave the field empty.
 */
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
    editorialNote: `
<p>Na elektronářadí se v redakci díváme jinak než katalog. Watty na obalu lžou — co dokáže motor pod zátěží zjistíte jen tehdy, když mu dáte 6mm ocel a změříte, o kolik klesnou otáčky. Stejně tak <strong>volba ekosystému (Bosch Pro, Makita LXT, Milwaukee M18, DeWalt XR)</strong> je dlouhodobě dražší rozhodnutí než cena první brusky — kdo nakoupí 4 nástroje v jedné platformě, je v ní zamčený na 8 let.</p>
<p>Co tady <em>nenajdete:</em> recyklované e-shop popisy a žebříčky tažené affiliate provizí. Co najdete: kickback testy v laboratoři, hmotnost dle <strong>EPTA</strong> normy (s baterií, ne suchá), reálná výdrž 5,0 Ah baterie na řezání ocelové trubky 50 mm. Garant kategorie: <strong>Jakub Novák, DiS.</strong> — 22 let v profi zámečnictví.</p>
    `.trim(),
    editorialNoteBy: { name: "Jakub Novák, DiS.", role: "Odborný garant elektronářadí", href: "/autor/jakub-novak/" },
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
    editorialNote: `
<p>Spotřebič kupujete na 10+ let, ale většina testů ho posuzuje za 4 hodiny v showroomu. Tak to v Recenzeru neděláme. <strong>Pračky testujeme 6 týdnů (30 cyklů praní)</strong>, lednice 4 týdny v teplotním simulátoru (–18 °C mraznička, +5 °C chladící zóna), myčky v plné domácí kuchyni s reálným nádobím od polévky po smažené.</p>
<p>Kategorie nás zároveň naučila pokoru — v 2022 jsme doporučili Bosch Serie 6 jako nejlepší pračku do 18 000 Kč a do roka přišlo 47 hlášení vadného motoru. Od té doby každá doporučená pračka musí projít <strong>refresh checkem po 6 měsících</strong> — kontrolou statistik reklamací u Heureka a dTestu. Detail v <a href="/nase-chyby/">/nase-chyby/</a>.</p>
    `.trim(),
    editorialNoteBy: { name: "Marie Müllerová", role: "Editorka spotřebičů", href: "/autor/marie-mullerova/" },
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
    editorialNote: `
<p>Zahradní technika má jeden vrozený problém — funguje od dubna do října, pak 6 měsíců spí v kůlně při <strong>–10 °C, vlhku 80 %</strong>. To zničí víc strojů než samotné používání. Proto u sekaček, foukačů a plotostříhačů testujeme nejen výkon, ale i <strong>simulovanou hibernační zkoušku</strong> — 3 měsíce v chladové komoře, pak start s loňským benzínem nebo částečně vybitou baterií.</p>
<p>Aku platformy jsou nepsaným tématem této rubriky. Pokud už máte 18 V Makitu na vrtačku, dává smysl ji rozšířit i na zahradu — ale 18 V sekačka má reálnou výdrž 25–35 minut na 4 Ah baterii, což na 600m² trávník nestačí. Tady je <strong>36–40 V</strong> minimum pro vážného uživatele.</p>
    `.trim(),
    editorialNoteBy: { name: "Tomáš Veselý", role: "Editor zahrada & auto-moto", href: "/autor/tomas-vesely/" },
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
    editorialNote: `
<p>V auto-moto rubrice je nejhustší marketingový smog na webu. „Premiová" pneumatika za 8 000 Kč je často přeznačená Linglong vyrobená v stejné továrně jako její 3 000Kč varianta. „Tichá kabina" je věc rezonance, ne ceny. <strong>Pomáhá tomu věřit jen měření</strong> — proto u pneumatik publikujeme dvojí žebříček: bezpečnostně vážený (sníh × 2, led × 1,5, mokro × 1) a komfortní. Dělíme to od roku 2021, kdy nás odběratelé z Vysočiny <a href="/nase-chyby/">přesvědčili</a>, že aritmetický průměr byl chyba.</p>
<p>Autobaterie schvaluje technický garant — autor s laickým pozadím nedokáže rozumně mluvit o sulfataci, hloubce vybití nebo cyklové životnosti AGM vs. lithium. Bez garanta tu článek nevychází.</p>
    `.trim(),
    editorialNoteBy: { name: "Tomáš Veselý", role: "Editor auto-moto", href: "/autor/tomas-vesely/" },
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
    editorialNote: `
<p>Návody jsou nejnavštěvovanější rubrika webu — a zároveň nejvíc obtížná na psaní. „Jak vybrat aku vrtačku" je téma, na které najdete 200 článků v Google a každý třetí je strojově generovaný. Naše návody mají proto pravidlo: <strong>žádný návod nevychází bez schvalovacího podpisu odborného garanta</strong>, který v dané kategorii reálně pracuje (řemeslník, technik, lékař). Jméno garanta je vždy u článku, ne jen v patičce.</p>
<p>Pokud hledáte krátké odpovědi, máme <a href="/slovnik/">slovník pojmů</a> — 18 hesel ve startovní sadě (rozšiřujeme). Pokud chcete pochopit kontext, návody fungují jako rozcestník na konkrétní recenze a metodiku. <a href="/pouzivani-ai/">Jak používáme AI</a> popisuje, kde nám LLM pomáhají a kde jsou explicitně zakázané.</p>
    `.trim(),
    editorialNoteBy: { name: "Ivo Matej", role: "Šéfredaktor", href: "/sefredaktor/" },
  },
];
