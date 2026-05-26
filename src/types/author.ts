import type { Person } from "./article";

/**
 * Whether the author is part of internal team or external expert/garant.
 */
export type AuthorKind = "internal" | "external";

export interface AuthorStat {
  value: string;
  label: string;
}

export interface AuthorTimelineEntry {
  year: string;
  title: string;
  text: string;
}

export interface AuthoredArticle {
  href: string;
  title: string;
  category: string;
  /** ISO date */
  date: string;
}

/**
 * Rich author profile used on /autor/[slug]/ pages.
 * Extends the base Person type used in article bylines.
 */
export interface AuthorProfile extends Person {
  kind: AuthorKind;
  /** Short tagline / specialization summary. */
  tagline: string;
  /** Long-form HTML bio for the detail page. */
  longBioHtml?: string;
  /** Areas of expertise (tags/chips). */
  expertise: string[];
  /** Numeric or short stats shown in a strip. */
  stats?: AuthorStat[];
  /** Career timeline entries shown vertically. */
  timeline?: AuthorTimelineEntry[];
  /** "In media" — magazines/sites that cite/featured the author. */
  mediaCitations?: string[];
  /** Recent articles authored or reviewed (for the detail page). */
  articles?: AuthoredArticle[];
  /** Contact e-mail shown on the detail. */
  contactEmail?: string;
}
