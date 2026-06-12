export const prerender = true;

const site = 'https://itsbek.me';
const locales = ['/', '/ko/', '/ru/', '/uz/'];
const now = new Date().toISOString();

export const GET = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales.map(u => {
  const alternates = locales.map(a => {
    const al = a.replace(/\//g, '') || 'en';
    return `    <xhtml:link rel="alternate" hreflang="${al}" href="${site}${a}" />`;
  }).join('\n');
  return `  <url>
    <loc>${site}${u}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.8'}</priority>
${alternates}
  </url>`;
}).join('\n')}
</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
