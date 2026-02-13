// generate-sitemap.cjs
const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

(async () => {
  const hostname = 'https://hilearnacademy.com'; // ✅ Your domain

  // ✅ List all your site routes
  const urls = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/about-us', changefreq: 'monthly', priority: 0.8 },
    { url: '/courses', changefreq: 'monthly', priority: 1.0 },
    { url: '/courses/data-analytics', changefreq: 'weekly', priority: 0.9 },
    { url: '/courses/data-science', changefreq: 'weekly', priority: 0.9 },
    { url: '/courses/digital-marketing', changefreq: 'weekly', priority: 0.9 },
    { url: '/courses/agentic-ai', changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', changefreq: 'weekly', priority: 1.0 },
    { url: '/blogs', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/top-10-excel-functions-for-data-analysts', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/powerbi-vs-tableau-which-should-you-learn-in-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/data-analyst-salary-in-india-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/complete-roadmap-to-becoming-data-scientist-in-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/machine-learning-project-ideas-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/data-scientist-salary-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/what-is-agentic-ai-2025', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/building-first-ai-agent-langchain', changefreq: 'weekly', priority: 0.9 },
    { url: '/blogs/chatgpt-content-marketing-prompts', changefreq: 'weekly', priority: 0.9 },
    { url: '/resources', changefreq: 'weekly', priority: 0.9 },
    { url: '/placement-assistance', changefreq: 'weekly', priority: 0.9 },
    { url: '/privacy-policy', changefreq: 'weekly', priority: 0.9 },
    { url: '/terms-conditions', changefreq: 'weekly', priority: 0.9 },
    { url: '/refund-policy', changefreq: 'weekly', priority: 0.9 },
  ];

  // ✅ Create a writable stream to public/sitemap.xml
  const sitemap = new SitemapStream({ hostname });
  const writeStream = createWriteStream('./public/sitemap.xml');
  sitemap.pipe(writeStream);

  // ✅ Add all URLs
  urls.forEach((item) => sitemap.write(item));

  sitemap.end();
  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
})();