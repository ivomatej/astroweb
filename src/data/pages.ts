/**
 * Static/editorial pages — loaded from the Contenta backend at build time.
 *
 * A Page is a block-based document (same block HTML as articles) rendered
 * through the generic <PageView>. The backend already renders blocks to
 * `sections[].bodyHtml`, so the frontend just maps the envelope.
 */

import {
  fetchPages,
  fetchPage,
  type BackendPage,
  type BackendPageListItem,
} from "../lib/contenta-api";
import type { ArticleSectionData } from "../types/article";

export interface Page {
  slug: string;
  href: string;
  title: string;
  perex?: string;
  sections: ArticleSectionData[];
  updatedAt?: string;
  seo?: { title?: string; description?: string; canonical?: string; ogImage?: string; noIndex?: boolean };
}

/** Map a backend page payload into the frontend Page shape (num → number). */
export function backendToPage(p: BackendPage): Page {
  return {
    slug: p.slug,
    href: p.href,
    title: p.title,
    perex: p.perex,
    sections: p.sections.map((s, i) => ({
      id: s.id,
      num: typeof s.num === "number" ? s.num : i,
      title: s.title,
      tocLabel: s.tocLabel,
      bodyHtml: s.bodyHtml,
    })),
    updatedAt: p.dates.updatedAt,
    seo: p.seo,
  };
}

export const pageList: BackendPageListItem[] = await fetchPages();

export async function getPageBySlug(slug: string): Promise<Page> {
  return backendToPage(await fetchPage(slug));
}
