import { newsList } from "~/data/news";

export default defineEventHandler((event) => {
  const host = "https://www.berrymedical.com.cn";
  const now = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "/", changefreq: "weekly", priority: "1.0", lastmod: now },
    { url: "/services", changefreq: "monthly", priority: "0.9", lastmod: now },
    { url: "/cases", changefreq: "monthly", priority: "0.9", lastmod: now },
    { url: "/advantages", changefreq: "monthly", priority: "0.8", lastmod: now },
    { url: "/company", changefreq: "monthly", priority: "0.8", lastmod: now },
    { url: "/industry", changefreq: "monthly", priority: "0.7", lastmod: now },
    { url: "/news", changefreq: "daily", priority: "0.8", lastmod: now },
    { url: "/contact", changefreq: "monthly", priority: "0.8", lastmod: now },
    { url: "/privacy", changefreq: "yearly", priority: "0.3", lastmod: now },
  ];

  const dynamicNewsPages = newsList.map((item) => ({
    url: `/news/${item.id}`,
    changefreq: "monthly",
    priority: "0.7",
    lastmod: item.date || now,
  }));

  const allPages = [...staticPages, ...dynamicNewsPages];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${host}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  setHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return sitemapXml;
});
