// client/scripts/generate-sitemap.cjs

const fs = require('fs');
const path = require('path');

const SITE_CONFIG = {
  baseUrl: 'https://www.centrodentariocolombo.com',
};

function normalizeUrl(urlPath) {
  const base = SITE_CONFIG.baseUrl.replace(/\/+$/, '');
  if (!urlPath || urlPath === '/') {
    return base;
  }
  const cleanPath = urlPath.replace(/\/+$/, '').replace(/^\/+/, '');
  return `${base}/${cleanPath}`;
}

// Mantido em sincronia com STATIC_PAGES em src/utils/seoConfig.ts
const STATIC_PAGES = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/urgencias', changefreq: 'weekly', priority: '0.9' },
  { path: '/corpo-clinico', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.6' },
  { path: '/politica-privacidade', changefreq: 'yearly', priority: '0.3' },
  { path: '/politica-cookies', changefreq: 'yearly', priority: '0.3' },
];

const TREATMENT_SLUGS = [
  'caries',
  'reabilitacao-oral',
  'proteses-dentarias',
  'estetica-dentaria',
  'cirurgia-oral',
  'endodontia',
  'implantologia',
  'medicina-oral',
  'oclusao',
  'odontopediatria',
  'ortodontia',
  'periodontologia',
];

function urlEntry({ loc, lastmod, changefreq, priority }) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  const entries = [
    ...STATIC_PAGES.map(page =>
      urlEntry({
        loc: normalizeUrl(page.path),
        lastmod: today,
        changefreq: page.changefreq,
        priority: page.priority,
      }),
    ),
    ...TREATMENT_SLUGS.map(slug =>
      urlEntry({
        loc: normalizeUrl(`/tratamentos/${slug}`),
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.7',
      }),
    ),
  ];

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');
}

const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, generateSitemap(), 'utf-8');

console.log(`Sitemap gerado: ${outputPath}`);
console.log(`Total URLs: ${STATIC_PAGES.length + TREATMENT_SLUGS.length}`);
