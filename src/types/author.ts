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
 * Externí mediální citace — konkrétní URL článku, kde byl autor citován.
 * Důkaz pro E-E-A-T (Google quality raters): nestačí jen logo nebo jméno.
 */
export interface MediaCitation {
  /** Název média / outletu, např. "Lupa.cz", "Forbes ČR", "CzechCrunch". */
  outlet: string;
  /** Titulek konkrétního článku, kde byl autor citován. */
  title: string;
  /** URL článku, ideálně canonical. */
  href: string;
  /** ISO datum publikace, např. "2024-09-12". */
  date: string;
  /** Krátký výňatek nebo kontext (max ~180 znaků). */
  excerpt?: string;
}

/**
 * Profesní registrace, certifikát nebo odborné členství s ověřitelným identifikátorem.
 */
export interface ProfessionalRegistration {
  /** Vystavující organizace, např. "Český svářečský ústav", "ČKAIT". */
  body: string;
  /** Název osvědčení nebo registrace. */
  title: string;
  /** Identifikátor / certifikát / číslo členství. */
  identifier?: string;
  /** ISO datum vydání. */
  issuedAt?: string;
  /** ISO datum platnosti (pokud certifikát expiruje). */
  validUntil?: string;
  /** Volitelný URL pro ověření (registr na webu vystavující organizace). */
  href?: string;
  /** Volná poznámka (rozsah platnosti, podmínky). */
  note?: string;
}

/**
 * Publikace mimo Recenzer — kniha, paper, přednáška, video kurz.
 * Vždy s ověřitelným identifikátorem (ISBN, DOI, link na Databázi knih).
 */
export interface ExternalPublication {
  /** "book" — kniha, "article" — odborný článek, "talk" — přednáška, "course" — kurz. */
  kind: "book" | "article" | "talk" | "course";
  /** Titulek publikace. */
  title: string;
  /** Vydavatel nebo platforma. */
  publisher?: string;
  /** Rok vydání. */
  year: string;
  /** ISBN, ISSN, DOI nebo jiný identifikátor. */
  identifier?: string;
  /** Externí URL — Databáze knih, Goodreads, vydavatelův web, atd. */
  href?: string;
  /** Role autora — "Autor", "Spoluautor", "Editor", "Recenzent". */
  role?: string;
  /** Volitelný popis. */
  description?: string;
}

/**
 * Sociální / profesní profil autora.
 * Nepoužíváme jen "label" jako dříve, ale strukturujeme — usnadňuje verifikaci.
 */
export interface SocialProfile {
  /** Platforma — "linkedin", "github", "twitter", "mastodon", "orcid", "scholar", "website". */
  network:
    | "linkedin"
    | "github"
    | "twitter"
    | "x"
    | "mastodon"
    | "orcid"
    | "scholar"
    | "website"
    | "youtube"
    | "instagram";
  /** Display label, např. "linkedin.com/in/ivomatej". */
  handle: string;
  /** Plný URL. */
  href: string;
  /** Volitelná poznámka — "ověřený účet", "od 2008", atd. */
  note?: string;
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
  /** "In media" — magazines/sites that cite/featured the author.
   *  Kept as string[] for backwards-compat with flat logo display. */
  mediaCitations?: string[];
  /** Strukturované citace s URL — primární zdroj pro verifikaci. */
  mediaCitationsDetailed?: MediaCitation[];
  /** Profesní registrace / certifikáty s ověřitelnými ID. */
  professionalRegistrations?: ProfessionalRegistration[];
  /** Knihy, papers, přednášky mimo Recenzer. */
  externalPublications?: ExternalPublication[];
  /** Strukturované sociální profily pro verifikaci. */
  socialProfiles?: SocialProfile[];
  /** Recent articles authored or reviewed (for the detail page). */
  articles?: AuthoredArticle[];
  /** Contact e-mail shown on the detail. */
  contactEmail?: string;
}
