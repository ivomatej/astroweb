/**
 * Article types — shape of an article and its supporting entities.
 *
 * For prototype, fixtures live in src/data/articles/*.ts and conform to these
 * types. Later, the backend (NestJS) will return the same shape from
 * /api/v1/public/sites/recenzer/articles/:slug.
 */

export type ArticleKind = "pillar" | "cluster";

export type ArticleStatus =
  | "draft"
  | "review"
  | "scheduled"
  | "published"
  | "archived";

export interface BreadcrumbItem {
  href?: string;
  label: string;
}

export interface CredibilityStat {
  label: string;
  /** Main numeric/text value, e.g. "23" or "22. 5. 2026" */
  value: string;
  /** Optional small suffix, e.g. "brusek", "hod" */
  unit?: string;
}

export type TrustPillKind =
  | "verified-by-expert"
  | "tested-in-lab"
  | "sources"
  | "no-sponsorship"
  | "custom";

export interface TrustPill {
  kind: TrustPillKind;
  label: string;
}

export interface AffiliateDisclosure {
  /** True = block is shown. False = article has no affiliate concerns. */
  enabled: boolean;
  /** Title shown above the disclosure text. */
  title: string;
  /** Main disclosure text (HTML allowed for inline strong/em). */
  bodyHtml: string;
  /** Optional "more info" link. */
  link?: { href: string; label: string };
}

export interface Person {
  slug: string;
  name: string;
  role: string;
  /** Optional photo URL; when absent, initials are used. */
  photoUrl?: string;
  /** Two-letter monogram when no photo. */
  initials?: string;
  /** Short bio shown in author/garant sections (HTML allowed). */
  bioHtml: string;
  credentials: string[];
  links?: { href: string; label: string }[];
}

export interface ByLineDates {
  publishedAt: string; // ISO date
  updatedAt?: string; // ISO date
  readingTimeMin: number;
}

export interface TLDR {
  title: string;
  /** 3-7 short bullets. HTML allowed for inline strong/em. */
  bullets: string[];
  /** Editorial confidence on a scale of 1-5. */
  confidence: 1 | 2 | 3 | 4 | 5;
}

export interface FigureData {
  /** Optional real image; falls back to placeholder SVG when absent. */
  src?: string;
  alt?: string;
  caption?: string;
  /** Short tag shown over the placeholder, e.g. "FOTO", "GRAF". */
  placeholderTag?: string;
  /** Description shown over placeholder, e.g. "23 brusek na testovacím stole". */
  placeholderLabel?: string;
}

export interface ArticleSectionData {
  /** Slug-style id used for TOC anchors. */
  id: string;
  /** Display number, e.g. "01", "02", or "—" for intro. */
  num: string;
  /** Section heading shown both in TOC and as <h2>. */
  title: string;
  /** Short TOC label override (otherwise title is used). */
  tocLabel?: string;
  /** Rich HTML body — paragraphs, callouts, steps, tables, figures, quotes. */
  bodyHtml: string;
}

export interface NextCtaData {
  eyebrow: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
  stats: { value: string; label: string }[];
}

export type RelatedArticleTag = "navod" | "srovnani" | "tema" | "top" | "test";

export interface RelatedArticle {
  href: string;
  title: string;
  description: string;
  tag: RelatedArticleTag;
  readingTimeMin?: number;
  /** Featured (large hero card). At most one. */
  featured?: boolean;
  featuredEyebrow?: string;
  /** Author name shown on featured card. */
  featuredAuthor?: string;
  /** Date shown on featured card, e.g. "5/2026". */
  featuredDate?: string;
}

export interface MethodologyTile {
  value: string;
  label: string;
}

export interface MethodologyData {
  eyebrow: string;
  title: string;
  lede: string;
  tiles: MethodologyTile[];
  link: { href: string; label: string };
}

export interface RatingBucket {
  /** Star value 1-5 */
  stars: 1 | 2 | 3 | 4 | 5;
  /** Number of votes in this bucket */
  count: number;
  /** Percentage 0-100 */
  percent: number;
}

export interface RatingData {
  /** Average score, e.g. 4.8 */
  average: number;
  /** Total votes */
  total: number;
  buckets: RatingBucket[];
}

export type HistoryEntryKind =
  | "publish"
  | "major"
  | "minor"
  | "content"
  | "correction";

export interface HistoryEntry {
  date: string; // ISO date
  kind: HistoryEntryKind;
  title: string;
}

export interface Comment {
  id: string;
  authorName: string;
  authorInitials?: string;
  authorPhotoUrl?: string;
  isStaff?: boolean;
  badge?: "verified-purchase" | "pro" | "staff";
  /** Relative time shown in UI, e.g. "před 2 dny". For prototype only. */
  relativeTime: string;
  bodyHtml: string;
  likes: number;
  replies?: Comment[];
}

export interface CommentsData {
  enabled: boolean;
  total: number;
  visible: Comment[];
  /** Total minus already-shown (visible.length); 0 hides "show more" button. */
  hiddenCount: number;
}

export interface Article {
  slug: string;
  kind: ArticleKind;
  status: ArticleStatus;

  // Headers
  category: string;
  breadcrumbs: BreadcrumbItem[];
  kicker: string;
  title: string;
  perex: string;
  cover: FigureData;

  // Credibility
  credibilityStats: CredibilityStat[];
  trustPills: TrustPill[];
  affiliateDisclosure: AffiliateDisclosure;

  // People
  author: Person;
  garant?: Person;
  dates: ByLineDates;

  // Body
  tldr: TLDR;
  sections: ArticleSectionData[];

  // Post-article
  nextCta?: NextCtaData;
  relatedArticles: RelatedArticle[];
  methodology?: MethodologyData;
  rating?: RatingData;
  history: HistoryEntry[];
  comments: CommentsData;
  reportErrorHref?: string;

  // SEO
  seo: {
    title?: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    noIndex?: boolean;
  };
}
