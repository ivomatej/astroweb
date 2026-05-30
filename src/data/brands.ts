/**
 * Brands — loaded from the Contenta backend at build time.
 *
 * Backend currently stores a subset of the rich Brand fixture shape (no
 * tagline/founded/historyHtml/recommendedProducts). Missing fields fall back
 * to empty defaults so detail pages render without crashing — fill them via
 * admin once the schema grows.
 *
 * Legacy fixture: brands.fixtures.ts.
 */

import { fetchBrands, type BackendBrand } from "../lib/contenta-api";

export type BrandTier = "premium" | "mainstream" | "value" | "budget";

export interface BrandProductLine {
  name: string;
  description: string;
  priceRange: string;
  exampleModel?: string;
}

export interface BrandServiceInfo {
  rating: number;
  description: string;
  ownCenters?: number;
  partnerCenters?: number;
  avgRepairDays?: number;
}

export interface BrandWeakness {
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
}

export interface BrandSource {
  type: "official" | "wiki" | "test" | "regulator";
  label: string;
  href: string;
}

export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  tier: BrandTier;
  kodexScore: number;
  category: "Doporučená" | "Solidní" | "Sledovaná" | "Nedoporučovaná";
  tone: "green" | "amber" | "red";
  // Rich fixture fields the backend doesn't yet store — optional so a sparse
  // backend payload (admin preview) maps cleanly and the view can guard them.
  founded?: string;
  country?: string;
  headquarters?: string;
  ownership?: string;
  revenue?: string;
  employees?: string;
  website?: string;
  historyHtml?: string;
  philosophy?: string;
  productLines: BrandProductLine[];
  service: BrandServiceInfo;
  recommendedProducts: { name: string; href?: string; note?: string }[];
  weaknesses: BrandWeakness[];
  sources: BrandSource[];
  updatedAt: string;
}

const TIER_MAP: Record<string, BrandTier> = {
  RECOMMENDED: "premium",
  SOLID: "mainstream",
  WATCH: "value",
  AVOID: "budget",
};

const CATEGORY_MAP: Record<string, Brand["category"]> = {
  RECOMMENDED: "Doporučená",
  SOLID: "Solidní",
  WATCH: "Sledovaná",
  AVOID: "Nedoporučovaná",
};

function toneFromScore(score: number): Brand["tone"] {
  if (score >= 80) return "green";
  if (score >= 55) return "amber";
  return "red";
}

/**
 * Maps a backend brand payload into the frontend `Brand` shape. The backend
 * stores only a subset of the rich fixture fields; the rest (founded, country,
 * headquarters, ownership, revenue, employees, website, philosophy,
 * recommendedProducts) are left undefined rather than fabricated, and the
 * BrandView guards them. Used both at build time and by the admin preview route.
 */
export function backendToBrand(b: BackendBrand): Brand {
  const score = b.kodexScore ?? 0;
  const tierUpper = (b.tier ?? "SOLID").toUpperCase();
  return {
    slug: b.slug,
    name: b.name,
    tagline: b.category ?? "",
    tier: TIER_MAP[tierUpper] ?? "mainstream",
    kodexScore: score,
    category: CATEGORY_MAP[tierUpper] ?? "Solidní",
    tone: toneFromScore(score),
    founded: undefined,
    country: undefined,
    headquarters: undefined,
    ownership: undefined,
    website: undefined,
    historyHtml: b.descriptionHtml ?? undefined,
    philosophy: undefined,
    productLines: (b.productLines as BrandProductLine[]) ?? [],
    service: (b.serviceInfo as BrandServiceInfo) ?? {
      rating: 0,
      description: "Servisní informace zatím nejsou k dispozici.",
    },
    recommendedProducts: [],
    weaknesses: (b.weaknesses ?? []).map((title) => ({
      title,
      description: "",
      severity: "medium" as const,
    })),
    sources: (b.sources as BrandSource[]) ?? [],
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}

export const brands: Brand[] = (await fetchBrands()).map(backendToBrand);

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getAllBrands(): Brand[] {
  return brands;
}

export const tierMeta: Record<BrandTier, { label: string; description: string }> = {
  premium: { label: "Prémium", description: "Top kvalita, vyšší cena" },
  mainstream: { label: "Mainstream", description: "Hlavní proud — dobrý poměr cena/výkon" },
  value: { label: "Value", description: "Solidní za nižší cenu" },
  budget: { label: "Budget", description: "Nejlevnější segment" },
};
