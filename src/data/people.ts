/**
 * People — loaded from the Contenta backend at build time.
 *
 * Named exports (ivoMatej, jakubNovak, …) are preserved for backwards
 * compatibility with article fixtures and individual page imports. They look
 * up the corresponding row in the build-time fetched `allPeople` list.
 *
 * Legacy fixture lives at people.fixtures.ts.
 */

import type { AuthorProfile } from "../types/author";
import { fetchAuthors, type BackendAuthor } from "../lib/contenta-api";

export function backendToAuthor(a: BackendAuthor): AuthorProfile {
  return {
    slug: a.slug,
    name: a.name,
    role: a.role,
    photoUrl: a.photoUrl,
    initials: a.initials,
    bioHtml: a.bioHtml,
    credentials: a.credentials,
    links: a.links as AuthorProfile["links"],
    kind: a.kind,
    tagline: a.tagline ?? "",
    longBioHtml: a.longBioHtml,
    expertise: a.expertise,
    stats: a.stats as AuthorProfile["stats"],
    timeline: a.timeline as AuthorProfile["timeline"],
    mediaCitations: a.mediaCitations,
    mediaCitationsDetailed: a.mediaCitationsDetailed as AuthorProfile["mediaCitationsDetailed"],
    professionalRegistrations: a.professionalRegistrations as AuthorProfile["professionalRegistrations"],
    externalPublications: a.externalPublications as AuthorProfile["externalPublications"],
    socialProfiles: a.socialProfiles as AuthorProfile["socialProfiles"],
    contactEmail: a.contactEmail,
  };
}

const raw = await fetchAuthors();
export const allPeople: AuthorProfile[] = raw.map(backendToAuthor);

// When the backend is unreachable during a production build (e.g. first
// Cloudflare Pages deploy before Contenta is live), `allPeople` is empty.
// Throwing would crash the build. Return a placeholder so the build
// finishes; affected pages render with "(neznámý autor)".
function bySlug(slug: string): AuthorProfile {
  const found = allPeople.find((p) => p.slug === slug);
  if (found) return found;
  if (import.meta.env.PROD) {
    console.warn(`[data/people] Author "${slug}" not in backend — using placeholder.`);
    return {
      slug,
      name: "(neznámý autor)",
      role: "",
      bioHtml: "",
      credentials: [],
      kind: "internal",
      tagline: "",
      expertise: [],
      stats: [],
      timeline: [],
      mediaCitations: [],
      mediaCitationsDetailed: [],
      professionalRegistrations: [],
      externalPublications: [],
      socialProfiles: [],
    };
  }
  throw new Error(
    `[data/people] Author "${slug}" not found in backend — re-run import-fixtures.ts or check spelling.`,
  );
}

// Named exports — required by article fixtures and individual /sefredaktor/,
// /press/, /bosch-vs-miele-pracky/ etc.
export const ivoMatej = bySlug("ivo-matej");
export const alenaRajnochova = bySlug("alena-rajnochova");
export const marieMullerova = bySlug("marie-mullerova");
export const janaNovakova = bySlug("jana-novakova");
export const martinProchazka = bySlug("martin-prochazka");
export const tomasVesely = bySlug("tomas-vesely");
export const petrSvoboda = bySlug("petr-svoboda");
export const lucieHorakova = bySlug("lucie-horakova");
export const jakubNovak = bySlug("jakub-novak");
export const adamBartos = bySlug("adam-bartos");
export const barboraCerna = bySlug("barbora-cerna");
export const cyrilDvorak = bySlug("cyril-dvorak");
export const evaMala = bySlug("eva-mala");
export const filipKratochvil = bySlug("filip-kratochvil");

export function getPersonBySlug(slug: string): AuthorProfile | undefined {
  return allPeople.find((p) => p.slug === slug);
}

export function getInternalTeam(): AuthorProfile[] {
  return allPeople.filter((p) => p.kind === "internal");
}

export function getExternalExperts(): AuthorProfile[] {
  return allPeople.filter((p) => p.kind === "external");
}
