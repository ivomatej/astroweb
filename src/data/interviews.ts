/**
 * Interviews — loaded from the Contenta backend at build time.
 * Legacy fixture: interviews.fixtures.ts.
 */

import { fetchInterviews } from "../lib/contenta-api";

export interface QAItem {
  q: string;
  aHtml: string;
}

export interface Interview {
  slug: string;
  title: string;
  perex: string;
  intervieweeSlug: string;
  interviewerSlug: string;
  publishedAt: string;
  readingTimeMin: number;
  category: string;
  keyInsights: string[];
  qa: QAItem[];
  introHtml?: string;
  outroHtml?: string;
  relatedHrefs?: { href: string; title: string }[];
}

/** A person as embedded in the interview detail payload. */
export interface BackendPersonRef {
  slug: string;
  name: string;
  role?: string;
  initials?: string;
}

/**
 * The full detail payload from `/interviews/:slug` and the preview endpoint.
 * The list endpoint (`/interviews`) returns a thinner subset (no `qa`).
 */
export interface BackendInterview {
  slug: string;
  href: string;
  title: string;
  perex: string;
  introHtml?: string;
  outroHtml?: string;
  cover?: unknown;
  interviewee: BackendPersonRef;
  interviewer?: BackendPersonRef;
  qa?: QAItem[];
  keyInsights?: string[];
  date?: string;
  sources?: unknown[];
  tags?: string[];
  seo?: unknown;
}

/**
 * Maps the backend interview payload (list OR detail) into the frontend
 * `Interview`. The list shape omits `qa`/`introHtml`/`outroHtml`/`keyInsights`;
 * those default empty so the listing page still computes reading time, while
 * the detail/preview path populates them.
 */
export function backendToInterview(i: BackendInterview): Interview {
  const qa = i.qa ?? [];
  return {
    slug: i.slug,
    title: i.title,
    perex: i.perex,
    intervieweeSlug: i.interviewee.slug,
    interviewerSlug: i.interviewer?.slug ?? "",
    publishedAt: i.date?.split("T")[0] ?? "",
    readingTimeMin: Math.max(3, Math.ceil(qa.length * 2)),
    category: i.tags?.[0] ?? "rozhovor",
    keyInsights: i.keyInsights ?? [],
    qa,
    introHtml: i.introHtml,
    outroHtml: i.outroHtml,
    relatedHrefs: undefined,
  };
}

export const interviews: Interview[] = (
  (await fetchInterviews()) as BackendInterview[]
).map(backendToInterview);

export function getInterviewBySlug(slug: string): Interview | undefined {
  return interviews.find((i) => i.slug === slug);
}

export function getAllInterviews(): Interview[] {
  return interviews;
}
