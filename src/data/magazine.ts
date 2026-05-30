/**
 * Magazine — loaded from the Contenta backend at build time.
 * Legacy fixture: magazine.fixtures.ts.
 */

import { fetchMagazine } from "../lib/contenta-api";

export type MagazineKind = "news" | "comment" | "analysis" | "alert";

export interface MagazineArticle {
  slug: string;
  title: string;
  perex: string;
  kind: MagazineKind;
  category?: string;
  authorSlug: string;
  publishedAt: string;
  readingTimeMin: number;
  bodyHtml: string;
  relatedHrefs?: { href: string; title: string }[];
  sources?: { label: string; href: string }[];
}

/**
 * Backend magazine detail payload. The list endpoint (`fetchMagazine`) returns
 * the same shape; `bodyHtml`/`sources`/`related` are only fully populated on the
 * single-item detail (used by the admin draft-preview route).
 */
export interface BackendMagazine {
  slug: string;
  kind: string;
  href: string;
  title: string;
  perex: string;
  bodyHtml?: string;
  cover?: unknown;
  author: { slug: string; name: string };
  authorSlug?: string;
  date: string;
  sources?: { label: string; href: string }[];
  related?: { href: string; title: string }[];
  tags?: string[];
  seo?: unknown;
}

export function backendToMagazine(m: BackendMagazine): MagazineArticle {
  return {
    slug: m.slug,
    title: m.title,
    perex: m.perex,
    kind: (m.kind as MagazineKind) ?? "news",
    authorSlug: m.authorSlug ?? m.author?.slug ?? "",
    publishedAt: m.date.split("T")[0],
    readingTimeMin: 4, // backend doesn't store this; rough default
    bodyHtml: m.bodyHtml ?? `<p>${m.perex}</p>`,
    relatedHrefs: m.related?.length ? m.related : undefined,
    sources: m.sources?.length ? m.sources : undefined,
  };
}

export const magazineArticles: MagazineArticle[] = (
  (await fetchMagazine()) as BackendMagazine[]
).map(backendToMagazine);

export function getMagazineArticleBySlug(slug: string): MagazineArticle | undefined {
  return magazineArticles.find((m) => m.slug === slug);
}

export function getAllMagazineArticles(): MagazineArticle[] {
  return magazineArticles;
}

export const magazineKindMeta: Record<MagazineKind, { label: string; tone: string }> = {
  news: { label: "Zpráva", tone: "blue" },
  comment: { label: "Komentář", tone: "purple" },
  analysis: { label: "Analýza", tone: "amber" },
  alert: { label: "Upozornění", tone: "red" },
};
