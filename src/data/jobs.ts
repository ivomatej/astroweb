/**
 * Job offers — loaded from the Contenta backend at build time.
 * Legacy fixture: jobs.fixtures.ts.
 */

import { fetchJobs } from "../lib/contenta-api";

export type JobType =
  | "editorial"
  | "expert"
  | "tech"
  | "editor"
  | "internship";

export type JobEmployment = "ft" | "pt" | "freelance" | "intern";

export interface JobOffer {
  slug: string;
  title: string;
  type: JobType;
  shortBadge: string;
  employment: JobEmployment;
  location: string;
  summary: string;
  descriptionHtml: string;
  requirements: string[];
  niceToHave?: string[];
  offers: string[];
  compensation: string;
  postedAt: string;
  closingAt?: string;
  contactEmail: string;
  hiringManager: string;
}

interface BackendJob {
  slug: string;
  href: string;
  title: string;
  perex: string;
  bodyHtml?: string;
  jobType: string;
  employment: string;
  location?: string;
  remote: boolean;
  requirements: string[];
  niceToHave: string[];
  offers: string[];
  compensation?: { currency?: string; min?: number; max?: number; period?: string; note?: string };
  status: string;
  contactEmail?: string;
  openedAt: string;
  closedAt?: string;
  seo?: unknown;
}

const TYPE_MAP: Record<string, JobType> = {
  editorial: "editorial",
  tester: "expert",
  development: "tech",
  marketing: "editorial",
  operations: "tech",
  other: "expert",
};

const EMPLOYMENT_MAP: Record<string, JobEmployment> = {
  "full-time": "ft",
  "part-time": "pt",
  contract: "freelance",
  freelance: "freelance",
  internship: "intern",
};

function formatCompensation(c: BackendJob["compensation"]): string {
  if (!c) return "Dle dohody";
  const range =
    c.min && c.max
      ? `${c.min.toLocaleString("cs")}–${c.max.toLocaleString("cs")} ${c.currency ?? "CZK"}`
      : c.min
        ? `od ${c.min.toLocaleString("cs")} ${c.currency ?? "CZK"}`
        : "";
  const periodLabel = { hour: "/hod", month: "/měsíc", year: "/rok" }[c.period ?? "month"] ?? "";
  return range ? `${range}${periodLabel}${c.note ? ` · ${c.note}` : ""}` : c.note ?? "Dle dohody";
}

function backendToJob(j: BackendJob): JobOffer {
  return {
    slug: j.slug,
    title: j.title,
    type: TYPE_MAP[j.jobType] ?? "expert",
    shortBadge: [j.employment?.toUpperCase().slice(0, 2), j.location, j.remote ? "Remote" : null]
      .filter(Boolean)
      .join(" · "),
    employment: EMPLOYMENT_MAP[j.employment] ?? "ft",
    location: j.location ?? "Remote",
    summary: j.perex,
    descriptionHtml: j.bodyHtml ?? `<p>${j.perex}</p>`,
    // /jobs (list) returns a thin shape; only detail includes arrays.
    requirements: j.requirements ?? [],
    niceToHave: (j.niceToHave ?? []).length ? j.niceToHave : undefined,
    offers: j.offers ?? [],
    compensation: formatCompensation(j.compensation),
    postedAt: j.openedAt.split("T")[0],
    closingAt: j.closedAt?.split("T")[0],
    contactEmail: j.contactEmail ?? "kariera@recenzer.cz",
    hiringManager: "Redakce Recenzer.cz",
  };
}

export const jobs: JobOffer[] = ((await fetchJobs()) as BackendJob[])
  .filter((j) => j.status === "open")
  .map(backendToJob);

export function getJobBySlug(slug: string): JobOffer | undefined {
  return jobs.find((j) => j.slug === slug);
}

export function getAllJobs(): JobOffer[] {
  return jobs;
}

export const jobTypeMeta: Record<JobType, { label: string; tone: string }> = {
  editorial: { label: "Redakce", tone: "purple" },
  expert: { label: "Externí odborník", tone: "amber" },
  tech: { label: "Vývoj", tone: "green" },
  editor: { label: "Editor / korektor", tone: "muted" },
  internship: { label: "Stáž", tone: "red" },
};
