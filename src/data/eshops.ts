/**
 * Eshop reviews — loaded from the Contenta backend at build time.
 * Legacy fixture: eshops.fixtures.ts.
 */

import { fetchEshops } from "../lib/contenta-api";
import type { BackendAuthor } from "../lib/contenta-api";

export interface EshopMetric {
  /** Název kritéria. */
  name: string;
  /** Hodnocení 0–5. */
  score: number;
  /** Popis výsledku testu. */
  description: string;
}

export interface EshopReview {
  slug: string;
  name: string;
  /** Doména (odvozená z `website`). */
  domain: string;
  /** Krátký popis e-shopu. */
  tagline: string;
  /** Krátký URL. */
  website: string;
  /** Celkové skóre 0–100. */
  overallScore: number;
  /** Náš verdikt. */
  verdict: "doporučujeme" | "doporučujeme s výhradami" | "nedoporučujeme";

  /**
   * Fixture-only profilová pole — backend je (zatím) neposkytuje, takže jsou
   * volitelná a view je vykreslí jen pokud přijdou.
   */
  founded?: string;
  ownership?: string;
  specialization?: string;

  /** Metriky hodnocení. */
  metrics: EshopMetric[];

  /** Plusy. */
  pros: string[];
  /** Mínusy. */
  cons: string[];

  /** Kdy doporučujeme. */
  bestFor: string;
  /** Kdy nedoporučujeme. */
  notFor: string;

  /** Volitelný HTML popis recenze (z backendu `bodyHtml`). */
  bodyHtml?: string;

  /**
   * Reálné testy — fixture-only, backend je neposkytuje. Volitelné, view
   * sekci skryje, pokud chybí.
   */
  realTests?: { title: string; result: string }[];

  /** ISO datum aktualizace. */
  updatedAt: string;
}

/**
 * Backend payload pro e-shop recenzi (list i preview detail). Detailová pole
 * (`bodyHtml`, `metrics`, `pros`, `cons`, `bestFor`, `notFor`) chodí jen z
 * preview/detail endpointu; list je může vynechat.
 */
export interface BackendEshop {
  slug: string;
  href: string;
  name: string;
  url: string;
  perex: string;
  bodyHtml?: string;
  overallScore: number;
  verdict: string;
  metrics?: EshopMetric[];
  pros?: string[];
  cons?: string[];
  bestFor?: string[];
  notFor?: string[];
  author?: BackendAuthor;
  cover?: unknown;
  date?: string;
  lastChecked?: string;
  seo?: unknown;
}

const VERDICT_MAP: Record<string, EshopReview["verdict"]> = {
  excellent: "doporučujeme",
  good: "doporučujeme",
  average: "doporučujeme s výhradami",
  poor: "nedoporučujeme",
  avoid: "nedoporučujeme",
};

/** Odvodí doménu z URL, fallback na celou URL. */
function domainFromUrl(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Mapuje backend payload na frontendový `EshopReview`. */
export function backendToEshop(e: BackendEshop): EshopReview {
  return {
    slug: e.slug,
    name: e.name,
    domain: domainFromUrl(e.url),
    tagline: e.perex,
    website: e.url,
    overallScore: e.overallScore,
    verdict: VERDICT_MAP[e.verdict] ?? "doporučujeme s výhradami",
    metrics: e.metrics ?? [],
    pros: e.pros ?? [],
    cons: e.cons ?? [],
    bestFor: e.bestFor?.join(" · ") ?? "",
    notFor: e.notFor?.join(" · ") ?? "",
    bodyHtml: e.bodyHtml,
    // founded / ownership / specialization / realTests jsou fixture-only —
    // backend je neposkytuje, takže je necháváme nevyplněné.
    updatedAt: (e.lastChecked ?? e.date ?? new Date().toISOString()).slice(0, 10),
  };
}

export const eshopReviews: EshopReview[] = (
  (await fetchEshops()) as BackendEshop[]
).map(backendToEshop);

export function getEshopBySlug(slug: string): EshopReview | undefined {
  return eshopReviews.find((e) => e.slug === slug);
}

export function getAllEshops(): EshopReview[] {
  return eshopReviews;
}
