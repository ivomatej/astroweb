/**
 * Rozhovory s odborníky a garanty.
 * Q&A formát — interviewer × interviewee.
 */

export interface QAItem {
  /** Otázka redaktora. */
  q: string;
  /** Odpověď experta (HTML allowed). */
  aHtml: string;
}

export interface Interview {
  slug: string;
  title: string;
  /** Krátký perex / hook. */
  perex: string;
  /** Slug garanta z people.ts. */
  intervieweeSlug: string;
  /** Slug autora rozhovoru (redaktora). */
  interviewerSlug: string;
  /** ISO datum publikace. */
  publishedAt: string;
  /** Reading time. */
  readingTimeMin: number;
  /** Kategorie / tématické označení. */
  category: string;
  /** Klíčové insighty pro TL;DR. */
  keyInsights: string[];
  /** Q&A obsah. */
  qa: QAItem[];
  /** Související články. */
  relatedHrefs?: { href: string; title: string }[];
}

export const interviews: Interview[] = [
  {
    slug: "jakub-novak-aku-brusky-2026",
    title: "Jakub Novák, zámečník: „Levné aku brusky jsou nebezpečné, ne nekvalitní“",
    perex:
      "Profi zámečník s 18 lety praxe nám vysvětlil, co se reálně skrývá za rozdílem 2 000 Kč vs. 12 000 Kč u aku brusky. A proč hobby modely nikdy nepoužívá na nerez ocel.",
    intervieweeSlug: "jakub-novak",
    interviewerSlug: "ivo-matej",
    publishedAt: "2026-05-15",
    readingTimeMin: 14,
    category: "Elektronářadí",
    keyInsights: [
      "Hlavní rozdíl mezi levnou a profi aku bruskou je v <strong>motoru, baterii a bezpečnostní elektronice</strong> — ne v plastovém kruhu nebo barvě.",
      "<strong>KickBack Control je nepostradatelný</strong> — bez něj může bruska po zaseknutí vyletět z ruky rychlostí 70–120 km/h.",
      "Pro nerez ocel a sváry doporučuje <strong>výhradně modely 18 V s brushless motorem</strong> — kartáčové motory na nerez nestačí.",
      "U levných brusek do 3 000 Kč chybí <strong>certifikace EN 60745</strong> — kupec to nepozná, ale úrazové statistiky tomu odpovídají.",
    ],
    qa: [
      {
        q: "Co je první věc, kterou si vy jako profi zámečník u aku brusky zkontrolujete v obchodě?",
        aHtml: `
<p><strong>Štítek s certifikací CE a EN 60745.</strong> To je norma pro ruční elektrické nářadí — bezpečnostní testy, elektromagnetická kompatibilita, mechanická odolnost.</p>
<p>Pokud na štítku nevidím EN 60745 (nebo její nástupnickou EN 62841), nářadí si nepořídím. A to ani na hobby použití. <strong>Levné asijské brusky tuto certifikaci obvykle nemají</strong> — kupujete v podstatě prototyp.</p>
<p>Druhá věc: <strong>brushless motor</strong>. U profi nářadí dnes default, ale u hobby modelů kolem 1 500 Kč ho najdete jen zřídka.</p>
        `,
      },
      {
        q: "Mnoho kupujících argumentuje „já tu brusku použiju 2× ročně, proč bych investoval do profi modelu“. Co byste jim řekl?",
        aHtml: `
<p>Souhlasím — pokud opravdu řežete 2× ročně, profi bruska za 10 000 Kč nedává smysl. <strong>Ale pak si kupte za 3 000 Kč hobby model s brushless motorem a KickBack Control</strong>, ne za 1 500 Kč nejlevnější kus.</p>
<p>Rozdíl mezi „1 500 Kč hobby“ a „3 000 Kč hobby“ je zásadní — ten první nemá KickBack, druhý ano. <strong>KickBack Control vás může zachránit před úrazem ruky</strong>. Pokud byste mě pozvali do nemocnice, kde leží řemeslníci s amputovanými prsty, 80 % z nich má příběh „bruska se mi zasekla v materiálu“.</p>
<p>Tak <strong>radši ušetřete jinde, ne na bezpečnosti</strong>. Levný kotouč za 50 Kč je v pořádku. Levná bruska bez KickBack ne.</p>
        `,
      },
      {
        q: "Co konkrétně se stane, když bruska bez KickBack Control narazí na zaseknutí?",
        aHtml: `
<p>Když kotouč náhle zastaví, ale motor pokračuje v rotaci, <strong>celá síla se přenese na vaši ruku</strong>. Bruska vyletí směrem od materiálu nebo do něj — záleží na úhlu.</p>
<p>U průměru kotouče 125 mm a 11 000 otáčkách za minutu mluvíme o <strong>obvodové rychlosti 70–120 km/h</strong>. Pokud držíte brusku jen jednou rukou (typicky pravou) a kotouč vyletí stranou, ztratíte kontrolu během 50 milisekund.</p>
<p>KickBack Control je <strong>elektronický senzor v rukojeti</strong>, který detekuje náhlou změnu pohybu a do <strong>40 milisekund odpojí motor od baterie</strong>. Kotouč se zastaví v cca 200 milisekundách. Stačí to.</p>
<p>U Bosch je to „KickBack Control“, u Makita „AFT“, u DeWalt „Perform & Protect“. Liší se název, princip je stejný.</p>
        `,
      },
      {
        q: "Mluvil jste o tom, že u nerez oceli používáte výhradně brushless modely 18V. Proč ne třeba síťové?",
        aHtml: `
<p>Síťové brusky jsou super, pokud máte stálou pozici a kabel není problém. <strong>Já chodím s nářadím po staveništi a kabel je pro mě překážka</strong> — zachytím se o něj, musím hledat zásuvky, atd.</p>
<p>Pro nerez ocel je důležitý <strong>vysoký nominální výkon</strong> — minimum 1200 W. Aku brusky 18V s brushless motorem a kvalitní baterií 5+ Ah dosáhnou reálných 900–1100 W. To je dostatečné pro běžné řezy.</p>
<p>U <strong>brushless</strong> motoru je výhoda nejen účinnosti, ale i konstanty otáček — kartáčový motor pod zátěží otáčky klesne, brushless je udrží. Pro pečlivý řez nerez je to klíčové.</p>
<p>Jasně, na 8 hodin nepřetržitého řezání nerezových profilů ještě sítová bruska vyhrává. Ale na 90 % mé denní práce je 18V brushless dostatečný.</p>
        `,
      },
      {
        q: "Co byste poradil hobby uživateli, který si chce koupit první aku brusku — řekněme rozpočet 3 000–4 000 Kč?",
        aHtml: `
<p>V této ceně dnes (2026) existují <strong>3 modely, které doporučuju</strong>:</p>
<ul>
<li><strong>Bosch Professional GWS 18V-7 (cca 3 500 Kč bez baterie)</strong> — entry profi, brushless, KickBack, lehký</li>
<li><strong>Makita DGA452Z (cca 3 200 Kč bez baterie)</strong> — solidní, ale bez automatického KickBack — má jen mechanickou pojistku</li>
<li><strong>DeWalt DCG405N (cca 3 800 Kč bez baterie)</strong> — americký standard, brushless, Perform & Protect bezpečnost</li>
</ul>
<p>Pozor — <strong>cena „bez baterie“</strong>. K tomu si připočtěte 18V 5Ah baterii (1 800 Kč) a nabíječku (900 Kč). Pokud už máte LXT/PowerStack/M18 baterie z jiného nářadí, tak vám stačí jen brusku.</p>
<p>A pokud chcete <strong>nejekonomičtější vstup</strong>, kupte Bosch Professional starter kit (bruska + 2× baterie + nabíječka v kufru) — typicky 6 500 Kč na akci.</p>
        `,
      },
      {
        q: "Závěrečná otázka — co je vaše osobní top doporučení v cenovém segmentu profi (10 000+ Kč)?",
        aHtml: `
<p>Pro <strong>každodenní profi použití</strong> — moje aktuální oblíbená je <strong>Bosch GWS 18V-15 SC</strong>. Brushless 1500 W reálných, KickBack, Anti-Vibration, Connect funkce (sledování statistik použití přes aplikaci — pro firmy užitečné pro inventář).</p>
<p>Cena cca <strong>11 000 Kč body only</strong>, s 2× 8Ah baterií a nabíječkou v kufru kolem 16 000 Kč. Pro řemeslníka je to investice na 5–7 let intenzivního denního použití.</p>
<p>Konkurence — Makita DGA517 nebo Milwaukee M18 FUEL FHSAG125XPDB — jsou v podobné lize. Liší se v detailech (ergonomie, doba nabíjení, sériová čísla pro inventář). <strong>Pokud máte LXT systém, kupte Makitu. Pokud nemáte žádný systém, kupte Bosch.</strong></p>
        `,
      },
    ],
    relatedHrefs: [
      { href: "/clanek/aku-brusky/", title: "Aku brusky 2026 — kompletní průvodce" },
      { href: "/slovnik/pojem/kickback-control/", title: "Slovník: KickBack Control" },
      { href: "/slovnik/pojem/brushless-motor/", title: "Slovník: Brushless motor" },
      { href: "/autor/jakub-novak/", title: "Profil garanta Jakub Novák" },
    ],
  },
];

export function getInterviewBySlug(slug: string): Interview | undefined {
  return interviews.find((i) => i.slug === slug);
}

export function getAllInterviews(): Interview[] {
  return [...interviews].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}
