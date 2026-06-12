export const prerender = true;
export const GET = async () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bekzod — Software Engineer</title>
    <link>https://itsbek.me</link>
    <description>Software engineer with 3+ years building responsive, accessible products. Specialising in React, Astro, TypeScript, Supabase, and React Native.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://itsbek.me/rss.xml" rel="self" type="application/rss+xml"/>
  </channel>
</rss>`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
