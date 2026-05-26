// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Production domain — pro správné absolutní URL v sitemap, OG, atd.
  site: 'https://www.recenzer.cz',

  build: {
    // Inlinuje VŠECHNY scoped styly do HTML — eliminuje kompletní
    // critical request chain pro CSS. Trade-off: HTML je větší o ~30–70 KB
    // raw (po gzip cca +15 KB), ale stránka má 1 request místo 5.
    //
    // Pro statický web s CDN cache je tento trade-off výhodný:
    // HTML je hodně dobře gzipovatelné, a globální CSS jako tokens.css
    // stejně cacheuje browser napříč stránkami.
    inlineStylesheets: 'always',

    // Astro 6 — `format: 'file'` generuje cleaner URL (foo/index.html místo foo.html).
    // Default už je 'directory' v posledních verzích — explicit pro jistotu.
    format: 'directory',
  },

  // Vite/CSS — default esbuild minifier (žádné extra balíčky)
  vite: {
    build: {
      // Default esbuild — bundled v Vite, žádné npm install navíc.
      cssMinify: 'esbuild',
    },
  },
});
