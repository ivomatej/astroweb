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
        injectRoute({
          pattern: '/preview/clanek/[slug]',
          entrypoint: './src/preview-route/clanek.astro',
        });
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
