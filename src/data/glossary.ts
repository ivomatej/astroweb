/**
 * Glossary — loaded from the Contenta backend at build time.
 *
 * Frontend `GlossaryCategory` has UI-only fields (tone, icon) that the
 * backend doesn't track. Falls back to per-slug heuristic defaults so the
 * /slovnik/ pages render without crashing.
 *
 * Legacy fixture: glossary.fixtures.ts.
 */

import {
  fetchGlossaryCategories,
  fetchGlossaryTerms,
  type BackendGlossaryCategory,
  type BackendGlossaryTerm,
} from "../lib/contenta-api";

export interface GlossaryCategory {
  slug: string;
  name: string;
  description: string;
  tone: "purple" | "amber" | "green" | "red" | "blue";
  icon: "bolt" | "lab" | "house" | "leaf" | "car";
}

export interface GlossaryTerm {
  slug: string;
  term: string;
  categorySlug: string;
  shortDef: string;
  longDefHtml: string;
  aliases?: string[];
  relatedSlugs?: string[];
  relatedArticles?: { href: string; title: string }[];
  updatedAt: string;
  approvedBy?: string;
  sourceUrl?: string;
}

// Heuristic UI metadata per category slug — until the backend admins this.
const CATEGORY_UI: Record<string, { tone: GlossaryCategory["tone"]; icon: GlossaryCategory["icon"] }> = {
  elektronaradi: { tone: "purple", icon: "bolt" },
  "domaci-spotrebice": { tone: "amber", icon: "house" },
  elektronika: { tone: "blue", icon: "bolt" },
  zahrada: { tone: "green", icon: "leaf" },
  auto: { tone: "red", icon: "car" },
  "aku-platformy": { tone: "purple", icon: "bolt" },
};

function backendToCategory(c: BackendGlossaryCategory): GlossaryCategory {
  const ui = CATEGORY_UI[c.slug] ?? { tone: "purple" as const, icon: "lab" as const };
  return {
    slug: c.slug,
    name: c.name,
    description: c.description ?? "",
    tone: ui.tone,
    icon: ui.icon,
  };
}

/** Build a frontend GlossaryCategory from the backend `{slug,name}` + UI heuristic. */
export function glossaryCategoryFromBackend(c: { slug: string; name: string }): GlossaryCategory {
  const ui = CATEGORY_UI[c.slug] ?? { tone: "purple" as const, icon: "lab" as const };
  return { slug: c.slug, name: c.name, description: "", tone: ui.tone, icon: ui.icon };
}

export function backendToTerm(t: BackendGlossaryTerm): GlossaryTerm {
  return {
    slug: t.slug,
    term: t.term,
    categorySlug: t.category.slug,
    shortDef: t.shortDef,
    longDefHtml: t.longDefHtml ?? `<p>${t.shortDef}</p>`,
    aliases: t.aliases.length ? t.aliases : undefined,
    relatedSlugs: t.relatedTermSlugs?.length ? t.relatedTermSlugs : undefined,
    relatedArticles: t.relatedArticleSlugs?.length
      ? t.relatedArticleSlugs.map((s) => ({ href: `/clanek/${s}/`, title: s }))
      : undefined,
    updatedAt: new Date().toISOString().slice(0, 10),
    approvedBy: t.approvedBy,
    sourceUrl: t.sourceUrl,
  };
}

export const glossaryCategories: GlossaryCategory[] = (await fetchGlossaryCategories()).map(
  backendToCategory,
);

export const glossaryTerms: GlossaryTerm[] = (await fetchGlossaryTerms()).map(backendToTerm);

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getTermsByCategory(categorySlug: string): GlossaryTerm[] {
  return glossaryTerms.filter((t) => t.categorySlug === categorySlug);
}

export function getCategoryBySlug(slug: string): GlossaryCategory | undefined {
  return glossaryCategories.find((c) => c.slug === slug);
}

export function getAllTermsSorted(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term, "cs"));
}

export function getActiveLetters(): string[] {
  const letters = new Set<string>();
  for (const t of glossaryTerms) {
    const first = t.term[0]?.toUpperCase();
    if (first) letters.add(first);
  }
  return [...letters].sort((a, b) => a.localeCompare(b, "cs"));
}
