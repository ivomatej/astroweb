import type { APIRoute } from "astro";
import { getAllUpdates, updateKindMeta } from "../data/updates";

const SITE_URL = "https://www.recenzer.cz";
const FEED_URL = `${SITE_URL}/aktualizace.xml`;
const FEED_TITLE = "Recenzer.cz — Aktualizace webu";
const FEED_SUBTITLE =
  "Chronologický feed všech změn na Recenzer.cz: nové články, refresh obsahu, opravy, redesigny, změny editoriální politiky.";

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function isoToRFC3339(iso: string): string {
  // ISO date YYYY-MM-DD → RFC 3339 with time component (Atom requirement)
  return `${iso}T12:00:00Z`;
}

export const GET: APIRoute = () => {
  const updates = getAllUpdates();
  const latestDate = updates[0]?.date ?? new Date().toISOString().slice(0, 10);

  const entries = updates
    .map((u) => {
      const entryUrl = `${SITE_URL}/aktualizace/#${u.id}`;
      const kindLabel = updateKindMeta[u.kind].label;
      const summary = escapeXml(u.description.replace(/<[^>]+>/g, ""));
      const articleLink = u.articleHref
        ? `<link rel="related" href="${SITE_URL}${u.articleHref}" title="${escapeXml(u.articleTitle || "")}"/>`
        : "";

      return `  <entry>
    <id>${entryUrl}</id>
    <title>${escapeXml(u.title)}</title>
    <link rel="alternate" type="text/html" href="${entryUrl}"/>
    ${articleLink}
    <updated>${isoToRFC3339(u.date)}</updated>
    <published>${isoToRFC3339(u.date)}</published>
    <category term="${u.kind}" label="${escapeXml(kindLabel)}"/>
    ${u.category ? `<category term="topic-${u.category.toLowerCase().replace(/\s+/g, "-")}" label="${escapeXml(u.category)}"/>` : ""}
    ${u.author ? `<author><name>${escapeXml(u.author)}</name></author>` : ""}
    <summary type="text">${summary}</summary>
    <content type="html"><![CDATA[<p>${u.description}</p>${u.articleHref ? `<p><a href="${SITE_URL}${u.articleHref}">${u.articleTitle || u.articleHref}</a></p>` : ""}]]></content>
  </entry>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="cs">
  <id>${FEED_URL}</id>
  <title>${escapeXml(FEED_TITLE)}</title>
  <subtitle>${escapeXml(FEED_SUBTITLE)}</subtitle>
  <link rel="self" type="application/atom+xml" href="${FEED_URL}"/>
  <link rel="alternate" type="text/html" href="${SITE_URL}/aktualizace/"/>
  <updated>${isoToRFC3339(latestDate)}</updated>
  <generator uri="${SITE_URL}" version="1.0">Recenzer.cz Static Site Generator (Astro)</generator>
  <rights>© Converso Group s.r.o. — content licensed for personal reuse with attribution.</rights>
  <icon>${SITE_URL}/favicon.ico</icon>
  <author>
    <name>Recenzer.cz</name>
    <email>redakce@recenzer.cz</email>
    <uri>${SITE_URL}/</uri>
  </author>
${entries}
</feed>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
