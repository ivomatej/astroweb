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
  relatedHrefs?: { href: string; title: string }[];
}

interface BackendInterview {
  slug: string;
  href: string;
  title: string;
  perex: string;
  introHtml?: string;
  outroHtml?: string;
  cover?: unknown;
  interviewee: { slug: string; name: string; role?: string };
  interviewer?: { slug: string; name: string; role?: string };
  qa: QAItem[];
  date?: string;
  sources?: unknown[];
  tags?: string[];
  seo?: unknown;
}

function backendToInterview(i: BackendInterview): Interview {
  // /interviews (list) returns a thin shape without `qa`; the detail endpoint
  // returns it. Default so the listing page can compute reading time.
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
    keyInsights: [],
    qa,
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
