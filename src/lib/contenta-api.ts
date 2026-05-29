/**
 * Typed client for the Contenta backend.
 *
 * Called at build time from `src/data/*.ts` modules. Wraps fetch with the
 * site-scoped X-Site-Key header and a stable response envelope.
 *
 * Env (Astro): CONTENTA_API_URL + RECENZER_API_KEY. Defaults to localhost dev.
 */

import type { CategoryAccent } from '../types/category';

const API_BASE = import.meta.env.CONTENTA_API_URL ?? 'http://localhost:3000/api/v1';
const API_KEY = import.meta.env.RECENZER_API_KEY ?? '';
const SITE_SLUG = 'recenzer';

const BASE = `${API_BASE}/public/sites/${SITE_SLUG}`;

interface Envelope<T> {
  data: T;
  meta?: { nextCursor: string | null; hasMore: boolean };
}

// Build resilience: when the backend isn't reachable (no API URL set, or
// the network drops during a Cloudflare Pages build), the build still
// finishes — fetchJson returns an empty envelope and pages silently render
// nothing instead of crashing the whole site. Dev mode keeps throwing so
// missing endpoints stay obvious.
const IS_PROD_BUILD = import.meta.env.PROD;

async function fetchJson<T>(path: string): Promise<Envelope<T>> {
  const url = path.startsWith('http') ? path : `${BASE}${path}`;

  if (!API_KEY && IS_PROD_BUILD) {
    console.warn(`[contenta-api] no RECENZER_API_KEY set; returning empty for ${path}`);
    return { data: [] as unknown as T };
  }

  let res: Response;
  try {
    res = await fetch(url, {
      headers: {
        'X-Site-Key': API_KEY,
        Accept: 'application/json',
      },
    });
  } catch (err) {
    if (IS_PROD_BUILD) {
      console.warn(
        `[contenta-api] network error on ${url} — empty payload: ${(err as Error).message}`,
      );
      return { data: [] as unknown as T };
    }
    throw err;
  }

  if (!res.ok) {
    let body = '';
    try {
      body = await res.text();
    } catch {
      // ignore
    }
    const msg = `Contenta API ${res.status} on ${url}: ${body.slice(0, 200)}`;
    if (IS_PROD_BUILD) {
      console.warn(`[contenta-api] ${msg} — empty payload`);
      return { data: [] as unknown as T };
    }
    throw new Error(msg);
  }
  return (await res.json()) as Envelope<T>;
}

// ===========================================================================
// Categories
// ===========================================================================

export interface BackendCategory {
  slug: string;
  name: string;
  href: string;
  tagline: string;
  description: string;
  articleCount: number;
  topics: string[];
  accent: string;
  featured: boolean;
  heroImageSrc?: string;
  editorialNote?: string;
  editorialNoteBy?: { name: string; role: string; href?: string };
}

export async function fetchCategories(): Promise<BackendCategory[]> {
  const { data } = await fetchJson<BackendCategory[]>('/categories');
  return data;
}

// ===========================================================================
// ArticleCards (thin projection)
// ===========================================================================

interface BackendArticleCard {
  slug: string;
  href: string;
  title: string;
  kicker?: string;
  perex: string;
  coverSrc?: string;
  coverAlt?: string;
  coverPlaceholderTag?: string;
  coverPlaceholderLabel?: string;
  category?: string;
  accent?: string;
  author: { slug: string; name: string };
  date: string;
  readingTimeMin: number;
}

export async function fetchArticleCards(opts: { category?: string; limit?: number } = {}): Promise<
  BackendArticleCard[]
> {
  const params = new URLSearchParams();
  if (opts.category) params.set('category', opts.category);
  if (opts.limit) params.set('limit', String(opts.limit));
  const qs = params.toString();
  const { data } = await fetchJson<BackendArticleCard[]>(`/articles${qs ? `?${qs}` : ''}`);
  return data;
}

// Local mirror of featured.ts:ArticleCard — declared here to avoid a circular
// import (featured.ts imports from this module).
export interface FrontendArticleCard {
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

export async function fetchArticleCardsAsFrontendShape(opts: {
  category?: string;
  limit?: number;
} = {}): Promise<FrontendArticleCard[]> {
  const [cards, cats] = await Promise.all([fetchArticleCards(opts), fetchCategories()]);
  const catBySlug = new Map(cats.map((c) => [c.slug, c]));

  return cards.map((a, idx) => {
    const cat = a.category ? catBySlug.get(a.category) : undefined;
    const accent = (a.accent ?? cat?.accent ?? 'purple') as CategoryAccent;
    return {
      slug: a.slug,
      href: a.href,
      categorySlug: a.category ?? '',
      category: cat?.name ?? a.category ?? '',
      categoryHref: cat?.href ?? `/${a.category ?? ''}/`,
      accent,
      badge: a.kicker,
      title: a.title,
      perex: a.perex,
      coverSrc: a.coverSrc,
      coverPlaceholder: a.coverPlaceholderLabel ?? a.coverPlaceholderTag,
      author: a.author.name,
      date: a.date.split('T')[0], // ISO datetime → YYYY-MM-DD
      readingTimeMin: a.readingTimeMin,
      // Heuristic: first (newest) card is the homepage hero. Backend has no
      // explicit `featured` flag yet — fix when admin grows pin-on-homepage UX.
      featured: idx === 0,
    };
  });
}

// ===========================================================================
// Authors / People
// ===========================================================================

export interface BackendAuthor {
  slug: string;
  name: string;
  kind: 'internal' | 'external';
  role: string;
  photoUrl?: string;
  initials?: string;
  tagline?: string;
  bioHtml: string;
  longBioHtml?: string;
  credentials: string[];
  expertise: string[];
  stats: unknown[];
  timeline: unknown[];
  mediaCitations: string[];
  mediaCitationsDetailed: unknown[];
  professionalRegistrations: unknown[];
  externalPublications: unknown[];
  socialProfiles: unknown[];
  contactEmail?: string;
  links?: unknown;
}

export async function fetchAuthors(): Promise<BackendAuthor[]> {
  const { data } = await fetchJson<BackendAuthor[]>('/authors');
  return data;
}

export async function fetchAuthor(slug: string): Promise<BackendAuthor> {
  const { data } = await fetchJson<BackendAuthor>(`/authors/${slug}`);
  return data;
}

// ===========================================================================
// Brands
// ===========================================================================

export interface BackendBrand {
  slug: string;
  name: string;
  category?: string;
  descriptionHtml?: string;
  kodexScore?: number;
  tier: string;
  productLines: unknown;
  serviceInfo?: unknown;
  weaknesses: string[];
  sources: unknown;
}

export async function fetchBrands(): Promise<BackendBrand[]> {
  const { data } = await fetchJson<BackendBrand[]>('/brands');
  return data;
}

// ===========================================================================
// Glossary
// ===========================================================================

export interface BackendGlossaryCategory {
  slug: string;
  name: string;
  href: string;
  description?: string;
  termCount: number;
}

export interface BackendGlossaryTerm {
  slug: string;
  term: string;
  href: string;
  aliases: string[];
  shortDef: string;
  longDefHtml?: string;
  approvedBy?: string;
  sourceUrl?: string;
  relatedTermSlugs?: string[];
  relatedArticleSlugs?: string[];
  category: { slug: string; name: string };
}

export async function fetchGlossaryCategories(): Promise<BackendGlossaryCategory[]> {
  const { data } = await fetchJson<BackendGlossaryCategory[]>('/glossary/categories');
  return data;
}

export async function fetchGlossaryTerms(categorySlug?: string): Promise<BackendGlossaryTerm[]> {
  const path = categorySlug
    ? `/glossary/terms?category=${encodeURIComponent(categorySlug)}`
    : '/glossary/terms';
  const { data } = await fetchJson<BackendGlossaryTerm[]>(path);
  return data;
}

// ===========================================================================
// Magazine / Interviews / Eshops / Jobs / Updates
// ===========================================================================
//
// These are returned as `unknown[]` because the fixture types differ slightly
// from the backend payload; each data module casts to its own interface and
// applies whatever field renames it needs.

export async function fetchMagazine(): Promise<unknown[]> {
  const { data } = await fetchJson<unknown[]>('/magazine?limit=100');
  return data;
}

export async function fetchInterviews(): Promise<unknown[]> {
  const { data } = await fetchJson<unknown[]>('/interviews?limit=100');
  return data;
}

export async function fetchEshops(): Promise<unknown[]> {
  const { data } = await fetchJson<unknown[]>('/eshops?limit=100');
  return data;
}

export async function fetchJobs(): Promise<unknown[]> {
  const { data } = await fetchJson<unknown[]>('/jobs');
  return data;
}

export async function fetchUpdates(): Promise<unknown[]> {
  const { data } = await fetchJson<unknown[]>('/updates?limit=100');
  return data;
}

// ===========================================================================
// Full Article (detail page)
// ===========================================================================

interface BackendArticle {
  slug: string;
  kind: string;
  status: string;
  category?: string;
  breadcrumbs: Array<{ href?: string; label: string }>;
  kicker: string;
  title: string;
  perex: string;
  cover: Record<string, unknown>;
  credibilityStats: Array<{ label: string; value: string; unit?: string }>;
  trustPills: Array<{ kind: string; label: string }>;
  affiliateDisclosure: Record<string, unknown>;
  productAcquisition?: Record<string, unknown>;
  author: BackendAuthor;
  garant?: BackendAuthor;
  dates: {
    publishedAt?: string;
    updatedAt?: string;
    significantUpdate?: boolean;
    readingTimeMin: number;
  };
  tldr: { title: string; bullets: string[]; confidence: number };
  sections: Array<{ id: string; num: number | string; title: string; tocLabel?: string; bodyHtml: string }>;
  nextCta?: Record<string, unknown>;
  relatedArticles: Array<{
    href: string;
    title: string;
    description: string;
    tag: string;
    readingTimeMin?: number;
    featured?: boolean;
    featuredEyebrow?: string;
    featuredAuthor?: string;
    featuredDate?: string;
  }>;
  methodology?: Record<string, unknown>;
  rating?: Record<string, unknown>;
  history: Array<{ date: string; kind: string; title: string }>;
  comments: { enabled: boolean; total: number; visible: unknown[]; hiddenCount: number };
  reportErrorHref?: string;
  seo: { title?: string; description: string; canonical?: string; ogImage?: string; noIndex?: boolean };
}

export async function fetchArticle(slug: string): Promise<BackendArticle> {
  const { data } = await fetchJson<BackendArticle>(`/articles/${slug}`);
  return data;
}

// Backend `relatedArticles[].tag` carries the related article's primary
// category slug (e.g. "elektronarad"). Frontend expects a tighter enum used
// for badge styling. Map known editorial slugs; everything else falls through
// to "tema".
const RELATED_TAG_MAP: Record<string, 'navod' | 'srovnani' | 'tema' | 'top' | 'test'> = {
  // Heuristic: category slug suggests intent, but mainly editor-set.
};

function mapRelatedTag(raw: string): 'navod' | 'srovnani' | 'tema' | 'top' | 'test' {
  if (raw.startsWith('jak-') || raw.includes('navod')) return 'navod';
  if (raw.startsWith('srovnani-') || raw.includes('-vs-')) return 'srovnani';
  if (raw.startsWith('nejlepsi') || raw.startsWith('top-')) return 'top';
  if (raw.startsWith('test-') || raw.endsWith('-test')) return 'test';
  return RELATED_TAG_MAP[raw] ?? 'tema';
}

import type { Article, ArticleKind, ArticleStatus, RelatedArticle } from '../types/article';

export async function fetchArticleAsFrontendShape(slug: string): Promise<Article> {
  const a = await fetchArticle(slug);

  const related: RelatedArticle[] = a.relatedArticles.map((r) => ({
    href: r.href,
    title: r.title,
    description: r.description,
    tag: mapRelatedTag(r.tag),
    readingTimeMin: r.readingTimeMin,
    featured: r.featured,
    featuredEyebrow: r.featuredEyebrow,
    featuredAuthor: r.featuredAuthor,
    featuredDate: r.featuredDate,
  }));

  return {
    slug: a.slug,
    kind: a.kind as ArticleKind,
    status: a.status as ArticleStatus,
    category: a.category ?? '',
    breadcrumbs: a.breadcrumbs,
    kicker: a.kicker,
    title: a.title,
    perex: a.perex,
    cover: a.cover as Article['cover'],
    credibilityStats: a.credibilityStats,
    trustPills: a.trustPills as Article['trustPills'],
    affiliateDisclosure: a.affiliateDisclosure as Article['affiliateDisclosure'],
    productAcquisition: a.productAcquisition as Article['productAcquisition'],
    author: backendAuthorToPerson(a.author),
    garant: a.garant ? backendAuthorToPerson(a.garant) : undefined,
    dates: {
      publishedAt: a.dates.publishedAt ?? '',
      updatedAt: a.dates.updatedAt,
      significantUpdate: a.dates.significantUpdate,
      readingTimeMin: a.dates.readingTimeMin,
    },
    tldr: a.tldr as Article['tldr'],
    sections: a.sections.map((s) => ({
      id: s.id,
      num: typeof s.num === 'number' ? String(s.num).padStart(2, '0') : s.num,
      title: s.title,
      tocLabel: s.tocLabel,
      bodyHtml: s.bodyHtml,
    })),
    nextCta: a.nextCta as Article['nextCta'],
    relatedArticles: related,
    methodology: a.methodology as Article['methodology'],
    rating: a.rating as Article['rating'],
    history: a.history as Article['history'],
    comments: a.comments,
    reportErrorHref: a.reportErrorHref,
    seo: a.seo,
  };
}

export function backendAuthorToPerson(a: BackendAuthor): {
  slug: string;
  name: string;
  role: string;
  photoUrl?: string;
  initials?: string;
  bioHtml: string;
  credentials: string[];
  links?: { href: string; label: string }[];
} {
  return {
    slug: a.slug,
    name: a.name,
    role: a.role,
    photoUrl: a.photoUrl,
    initials: a.initials,
    bioHtml: a.bioHtml,
    credentials: a.credentials,
    links: (a.links as { href: string; label: string }[] | undefined) ?? undefined,
  };
}
