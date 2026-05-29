/**
 * Site updates — loaded from the Contenta backend at build time.
 * Legacy fixture: updates.fixtures.ts.
 */

import { fetchUpdates } from "../lib/contenta-api";

export type SiteUpdateKind =
  | "publish"
  | "major"
  | "minor"
  | "content"
  | "refresh"
  | "addition"
  | "redesign"
  | "policy"
  | "feature"
  | "correction"
  | "retraction"
  | "expansion";

export interface SiteUpdate {
  id: string;
  date: string;
  kind: SiteUpdateKind;
  title: string;
  description: string;
  articleHref?: string;
  articleTitle?: string;
  category?: string;
  author?: string;
  relatedHref?: string;
  relatedLabel?: string;
}

interface BackendUpdate {
  id: string;
  kind: string;
  title: string;
  summary?: string;
  href?: string;
  entityType?: string;
  entityId?: string;
  publishedAt: string;
}

function backendToUpdate(u: BackendUpdate): SiteUpdate {
  return {
    id: u.id,
    date: u.publishedAt.split("T")[0],
    kind: (u.kind as SiteUpdateKind) ?? "content",
    title: u.title,
    description: u.summary ?? "",
    articleHref: u.entityType === "Article" ? u.href : undefined,
    articleTitle: u.entityType === "Article" ? u.title : undefined,
    relatedHref: u.entityType !== "Article" ? u.href : undefined,
  };
}

export const siteUpdates: SiteUpdate[] = (
  (await fetchUpdates()) as BackendUpdate[]
).map(backendToUpdate);

export const updateKindMeta: Record<SiteUpdateKind, { label: string; tone: string }> = {
  publish: { label: "Publikace", tone: "green" },
  major: { label: "Velká úprava", tone: "purple" },
  minor: { label: "Drobná úprava", tone: "muted" },
  content: { label: "Doplnění obsahu", tone: "purple" },
  refresh: { label: "Refresh", tone: "muted" },
  addition: { label: "Přidání modelu", tone: "amber" },
  redesign: { label: "Redesign", tone: "purple" },
  policy: { label: "Změna politiky", tone: "red" },
  feature: { label: "Nová funkce", tone: "green" },
  correction: { label: "Oprava chyby", tone: "red" },
  retraction: { label: "Stažení", tone: "red" },
  expansion: { label: "Rozšíření", tone: "amber" },
};

export function getAllUpdates(): SiteUpdate[] {
  return [...siteUpdates].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getUpdatesByYear(): Record<string, SiteUpdate[]> {
  const sorted = getAllUpdates();
  const byYear: Record<string, SiteUpdate[]> = {};
  for (const u of sorted) {
    const year = u.date.slice(0, 4);
    if (!byYear[year]) byYear[year] = [];
    byYear[year].push(u);
  }
  return byYear;
}

export function getUpdateCounts(): Record<SiteUpdateKind, number> {
  const counts = {} as Record<SiteUpdateKind, number>;
  for (const k of Object.keys(updateKindMeta) as SiteUpdateKind[]) counts[k] = 0;
  for (const u of siteUpdates) counts[u.kind] = (counts[u.kind] ?? 0) + 1;
  return counts;
}
