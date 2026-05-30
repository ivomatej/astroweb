/**
 * Categories — loaded from the Contenta backend at build time.
 *
 * Astro evaluates the top-level await once per build. The legacy static
 * fixture lives at categories.fixtures.ts for reference / quick rollback.
 */

import type { Category, CategoryAccent } from "../types/category";
import { fetchCategories, type BackendCategory } from "../lib/contenta-api";

/** Map a backend category payload into the frontend Category shape. */
export function backendToCategory(c: BackendCategory): Category {
  return {
    slug: c.slug,
    name: c.name,
    href: c.href,
    tagline: c.tagline,
    description: c.description,
    articleCount: c.articleCount,
    topics: c.topics,
    accent: c.accent as CategoryAccent,
    featured: c.featured,
    heroImageSrc: c.heroImageSrc,
    editorialNote: c.editorialNote,
    editorialNoteBy: c.editorialNoteBy,
  };
}

const raw = await fetchCategories();

export const categories: Category[] = raw.map(backendToCategory);
