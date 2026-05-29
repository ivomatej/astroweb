/**
 * Articles — loaded from Contenta backend.
 *
 * The thin list (`articles[]`) is the lightweight payload of all PUBLISHED
 * articles, fetched once at build time. The detail page calls
 * `getArticleBySlug()` which fetches the full Article on demand.
 *
 * Legacy fixture: articles/index.fixtures.ts.
 */

import type { Article } from "../../types/article";
import { fetchArticleCards, fetchArticleAsFrontendShape } from "../../lib/contenta-api";

// Cards-only list for static path generation. Detail pages cast to Article
// via fetchArticleAsFrontendShape(slug) when actually rendering.
const publishedSlugs = (await fetchArticleCards({ limit: 200 })).map((c) => c.slug);

const slugSet = new Set<string>(publishedSlugs);

// Lazy detail cache — Astro's getStaticPaths calls getArticleBySlug for each
// slug during the build, so we batch-fetch on first access and reuse.
let allArticles: Article[] | null = null;

async function loadAll(): Promise<Article[]> {
  if (allArticles) return allArticles;
  allArticles = await Promise.all(
    publishedSlugs.map((slug) => fetchArticleAsFrontendShape(slug)),
  );
  return allArticles;
}

export const articles: Article[] = await loadAll();

export function getArticleBySlug(slug: string): Article | undefined {
  if (!slugSet.has(slug)) return undefined;
  return articles.find((article) => article.slug === slug);
}
