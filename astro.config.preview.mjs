// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

import base from './astro.config.mjs';

/**
 * Preview build — the admin draft-preview deployment (Coolify, Node SSR).
 *
 * Deliberately SEPARATE from the default `astro.config.mjs` so the production
 * Cloudflare Pages static build stays byte-for-byte untouched. This config:
 *   • adds the Node adapter (standalone server) so on-demand routes work,
 *   • injects `/preview/clanek/[slug]` from `src/preview-route/` — a file that
 *     lives OUTSIDE `src/pages`, so the default static build never sees it.
 *
 * The rest of the site still prerenders (output: 'static'); only the injected
 * preview route is on-demand (`export const prerender = false`).
 */
function previewRoutes() {
  return {
    name: 'contenta-preview-routes',
    hooks: {
      'astro:config:setup': ({ injectRoute }) => {
        const routes = [
          ['/preview/clanek/[slug]', './src/preview-route/clanek.astro'],
          ['/preview/slovnik/pojem/[slug]', './src/preview-route/slovnik-pojem.astro'],
          ['/preview/rozhovory/[slug]', './src/preview-route/rozhovory.astro'],
          ['/preview/recenze-eshopu/[slug]', './src/preview-route/recenze-eshopu.astro'],
          ['/preview/kariera/[slug]', './src/preview-route/kariera.astro'],
          ['/preview/magazin/[slug]', './src/preview-route/magazin.astro'],
          ['/preview/autor/[slug]', './src/preview-route/autor.astro'],
          ['/preview/znacky/[slug]', './src/preview-route/znacky.astro'],
          ['/preview/kategorie/[slug]', './src/preview-route/kategorie.astro'],
          ['/preview/stranka/[slug]', './src/preview-route/stranka.astro'],
        ];
        for (const [pattern, entrypoint] of routes) {
          injectRoute({ pattern, entrypoint });
        }
      },
    },
  };
}

export default defineConfig({
  ...base,
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [...(base.integrations ?? []), previewRoutes()],
});
