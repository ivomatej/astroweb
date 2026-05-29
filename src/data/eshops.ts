/**
 * Eshop reviews — loaded from the Contenta backend at build time.
 * Legacy fixture: eshops.fixtures.ts.
 */

import { fetchEshops } from "../lib/contenta-api";

export interface EshopMetric {
  label: string;
  score: number;
  note?: string;
}

export interface EshopReview {
  slug: string;
  name: string;
  domain: string;
  tagline: string;
  website: string;
  overallScore: number;
  verdict: "doporučujeme" | "doporučujeme s výhradami" | "nedoporučujeme";
  founded: string;
  ownership: string;
  specialization: string;
  metrics: EshopMetric[];
  pros: string[];
  cons: string[];
  bestFor: string;
  notFor: string;
  realTests: { title: string; result: string }[];
  updatedAt: string;
}

interface BackendEshop {
  slug: string;
  href: string;
  name: string;
  url: string;
  perex: string;
  bodyHtml?: string;
  overallScore: number;
  verdict: string;
  metrics: EshopMetric[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  notFor: string[];
  author?: { slug: string; name: string };
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

function backendToEshop(e: BackendEshop): EshopReview {
  const domain = (() => {
    try {
      return new URL(e.url).hostname.replace(/^www\./, "");
    } catch {
      return e.url;
    }
  })();
  return {
    slug: e.slug,
    name: e.name,
    domain,
    tagline: e.perex,
    website: e.url,
    overallScore: e.overallScore,
    verdict: VERDICT_MAP[e.verdict] ?? "doporučujeme s výhradami",
    founded: "",
    ownership: "",
    specialization: "",
    metrics: e.metrics ?? [],
    pros: e.pros ?? [],
    cons: e.cons ?? [],
    bestFor: e.bestFor?.join(" · ") ?? "",
    notFor: e.notFor?.join(" · ") ?? "",
    realTests: [],
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
