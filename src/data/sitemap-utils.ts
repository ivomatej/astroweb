/**
 * Shared utilities for sitemap.xml endpoints.
 * Kept here so all sitemap-*.xml.ts files use the same escaping/format.
 */

export const SITE_URL = "https://www.recenzer.cz";
export const SITEMAP_LASTMOD = "2026-05-21";

export interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapImage {
  /** Absolute or relative URL. */
  loc: string;
  /** Optional caption / alt-text. */
  caption?: string;
  /** Optional photo title. */
  title?: string;
  /** Optional license URL. */
  license?: string;
}

export interface SitemapImageEntry extends SitemapEntry {
  images: SitemapImage[];
}

export function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (!path.startsWith("/")) return `${SITE_URL}/${path}`;
  return `${SITE_URL}${path}`;
}

export function renderUrlEntry(e: SitemapEntry): string {
  const lines = [`    <loc>${escapeXml(absoluteUrl(e.loc))}</loc>`];
  if (e.lastmod) lines.push(`    <lastmod>${e.lastmod}</lastmod>`);
  if (e.changefreq) lines.push(`    <changefreq>${e.changefreq}</changefreq>`);
  if (e.priority !== undefined)
    lines.push(`    <priority>${e.priority.toFixed(1)}</priority>`);
  return `  <url>\n${lines.join("\n")}\n  </url>`;
}

export function renderImageEntry(e: SitemapImageEntry): string {
  const baseLines = [`    <loc>${escapeXml(absoluteUrl(e.loc))}</loc>`];
  if (e.lastmod) baseLines.push(`    <lastmod>${e.lastmod}</lastmod>`);
  if (e.changefreq) baseLines.push(`    <changefreq>${e.changefreq}</changefreq>`);
  if (e.priority !== undefined)
    baseLines.push(`    <priority>${e.priority.toFixed(1)}</priority>`);

  const imageBlocks = e.images
    .map((img) => {
      const fields = [`      <image:loc>${escapeXml(absoluteUrl(img.loc))}</image:loc>`];
      if (img.caption) fields.push(`      <image:caption>${escapeXml(img.caption)}</image:caption>`);
      if (img.title) fields.push(`      <image:title>${escapeXml(img.title)}</image:title>`);
      if (img.license) fields.push(`      <image:license>${escapeXml(img.license)}</image:license>`);
      return `    <image:image>\n${fields.join("\n")}\n    </image:image>`;
    })
    .join("\n");

  return `  <url>\n${baseLines.join("\n")}\n${imageBlocks}\n  </url>`;
}

export function wrapUrlset(content: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content}
</urlset>
`;
}

export function wrapImageUrlset(content: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${content}
</urlset>
`;
}

export const sitemapResponseHeaders = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=3600",
};
