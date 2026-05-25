import type { Article } from "../../types/article";
import { akuBrusky } from "./aku-brusky";

export const articles: Article[] = [akuBrusky];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
