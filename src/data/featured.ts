/**
 * Article cards — loaded from the Contenta backend at build time.
 *
 * Backend `/articles` (thin projection) is reshaped into the ArticleCard
 * contract Astro components already expect. Helper filters mirror the
 * original API. Static fixture archived at featured.fixtures.ts.
 */

import type { CategoryAccent } from "../types/category";
import { fetchArticleCardsAsFrontendShape } from "../lib/contenta-api";

export interface ArticleCard {
  slug: string;
  href: string;

  categorySlug: string;
  category: string;
  categoryHref: string;
  accent: CategoryAccent;

  badge?: string;
  title: string;
  perex: string;
  coverSrc?: string;
  coverPlaceholder?: string;

  author: string;
  date: string;
  readingTimeMin: number;

  featured?: boolean;
}

export const articleCards: ArticleCard[] = await fetchArticleCardsAsFrontendShape({
  limit: 100,
});

export function getArticleCardsByCategory(categorySlug: string): ArticleCard[] {
  return articleCards.filter((c) => c.categorySlug === categorySlug);
}

export function getFeaturedArticleCards(): ArticleCard[] {
  return articleCards;
}
