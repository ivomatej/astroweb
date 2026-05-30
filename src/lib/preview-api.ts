/**
 * Runtime client for the admin article preview.
 *
 * Unlike `contenta-api.ts` (build-time, site-key, `import.meta.env`), this runs
 * on-demand inside the Astro Node SSR server. Authority is the signed preview
 * token from the URL — no site key. Env is read from `process.env` so the same
 * built image serves any backend without a rebuild.
 */

import { mapBackendArticle, type BackendArticle } from './contenta-api';
import type { Article } from '../types/article';

function apiBase(): string {
  // process.env at request time (Node adapter); import.meta.env as a dev
  // fallback when running `astro dev`.
  return (
    process.env.CONTENTA_API_URL ??
    import.meta.env.CONTENTA_API_URL ??
    'http://localhost:3000/api/v1'
  );
}

export type PreviewResult =
  | { ok: true; article: Article }
  | { ok: false; status: number; message: string };

/**
 * Fetches an unpublished article through the token-gated preview endpoint and
 * maps it into the frontend `Article` shape (same component tree as published).
 */
export async function fetchPreviewArticle(slug: string, token: string): Promise<PreviewResult> {
  const url = `${apiBase()}/preview/articles/${encodeURIComponent(slug)}?token=${encodeURIComponent(token)}`;

  let res: Response;
  try {
    res = await fetch(url, { headers: { Accept: 'application/json' } });
  } catch (err) {
    return { ok: false, status: 502, message: `Backend nedostupný: ${(err as Error).message}` };
  }

  if (!res.ok) {
    let detail = '';
    try {
      detail = await res.text();
    } catch {
      // ignore
    }
    const message =
      res.status === 401
        ? 'Náhledový odkaz vypršel nebo je neplatný. Otevři náhled znovu z administrace.'
        : res.status === 404
          ? 'Článek nebyl nalezen.'
          : `Chyba backendu (${res.status}). ${detail.slice(0, 160)}`;
    return { ok: false, status: res.status, message };
  }

  const { data } = (await res.json()) as { data: BackendArticle };
  return { ok: true, article: mapBackendArticle(data) };
}
