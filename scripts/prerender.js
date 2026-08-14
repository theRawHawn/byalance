import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Paths to dist, build artifacts, and template
const DIST_PATH = path.resolve(__dirname, '../dist');
const SSR_ENTRY_PATH = path.resolve(__dirname, '../dist-ssr/entry-server.js');
const TEMPLATE_PATH = path.resolve(DIST_PATH, 'index.html');

// All known crawlable routes from App.tsx
const ROUTES = [
  '/',
  '/services/procurement-import-compliance',
  '/services/accounting-bookkeeping',
  '/services/gst-services',
  '/services/itr-services',
  '/services/payroll-processing',
  '/services/tds-services',
  '/services/eor-services-india',
  '/privacy-policy',
  '/data-handling',
  '/refund-policy'
];

function extractMetadata(html) {
  let title = '';
  const metas = [];
  const links = [];
  const schemas = [];
  let cleanedHtml = html;

  // 1. Extract title tag
  const titleRegex = /<title[^>]*>([\s\S]*?)<\/title>/gi;
  let match;
  while ((match = titleRegex.exec(html)) !== null) {
    title = match[0];
  }
  cleanedHtml = cleanedHtml.replace(titleRegex, '');

  // 2. Extract meta tags (including OG, geo-targeting, and robots)
  const metaRegex = /<meta[^>]*>/gi;
  while ((match = metaRegex.exec(html)) !== null) {
    metas.push(match[0]);
  }
  cleanedHtml = cleanedHtml.replace(metaRegex, '');

  // 3. Extract link tags (canonical URLs, favicon overrides, preloads)
  const linkRegex = /<link[^>]*>/gi;
  while ((match = linkRegex.exec(html)) !== null) {
    links.push(match[0]);
  }
  cleanedHtml = cleanedHtml.replace(linkRegex, '');

  // 4. Extract JSON-LD schemas (Organization, Website, FAQ, Breadcrumbs)
  const schemaRegex = /<script\s+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
  while ((match = schemaRegex.exec(html)) !== null) {
    schemas.push(match[0]);
  }
  cleanedHtml = cleanedHtml.replace(schemaRegex, '');

  return {
    title,
    metas,
    links,
    schemas,
    cleanedHtml
  };
}

async function runPrerender() {
  console.log('🚀 Starting static pre-rendering (SSG) pipeline...');

  // 1. Ensure client build exists
  if (!fs.existsSync(TEMPLATE_PATH)) {
    console.error(`❌ Client build index.html not found at: ${TEMPLATE_PATH}. Ensure "vite build" runs first.`);
    process.exit(1);
  }

  // 2. Ensure SSR build exists
  if (!fs.existsSync(SSR_ENTRY_PATH)) {
    console.error(`❌ SSR build entry-server.js not found at: ${SSR_ENTRY_PATH}. Ensure "vite build --ssr src/entry-server.jsx" runs first.`);
    process.exit(1);
  }

  // 3. Load base HTML template
  const templateHtml = fs.readFileSync(TEMPLATE_PATH, 'utf-8');

  // 4. Dynamically import compiled React SSR render function
  const { render } = await import(SSR_ENTRY_PATH);

  // 5. Pre-render each route
  for (const url of ROUTES) {
    console.log(`➡️  Pre-rendering route: "${url}"`);
    try {
      const { html, ssrDisabled } = await render(url);

      if (ssrDisabled) {
        console.log(`⚠️  SSR is disabled for route: ${url}. Skipping.`);
        continue;
      }

      // Extract SEO/meta/schema tags and clean the body markup
      const { title, metas, links, schemas, cleanedHtml } = extractMetadata(html);

      // Create a fresh HTML page based on template
      let pageHtml = templateHtml;

      // Inject Custom Page Title
      if (title) {
        pageHtml = pageHtml.replace(/<title[^>]*>[\s\S]*?<\/title>/i, title);
      }

      // Inject custom meta tags, canonical link, and JSON-LD schemas into <head>
      let headTags = '';
      if (metas.length > 0) headTags += '\n    ' + metas.join('\n    ');
      if (links.length > 0) headTags += '\n    ' + links.join('\n    ');
      if (schemas.length > 0) headTags += '\n    ' + schemas.join('\n    ');

      pageHtml = pageHtml.replace('</head>', `${headTags}\n  </head>`);

      // Inject cleaned body html into <div id="root">
      pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${cleanedHtml}</div>`);

      // Calculate destination path
      let destDir = DIST_PATH;
      let destFile = 'index.html';

      if (url !== '/') {
        // Strip leading slash and create subdirectories for clean URLs (e.g. /services/gst -> dist/services/gst/index.html)
        destDir = path.join(DIST_PATH, url);
        destFile = 'index.html';
      }

      // Ensure directory structure exists
      fs.mkdirSync(destDir, { recursive: true });

      // Save fully-rendered HTML page
      fs.writeFileSync(path.join(destDir, destFile), pageHtml, 'utf-8');
      console.log(`✅ Statically rendered: ${path.join(url, destFile)}`);
    } catch (err) {
      console.error(`❌ Failed to pre-render route "${url}":`, err);
    }
  }

  console.log('🎉 Static pre-rendering completed successfully!');
}

runPrerender().catch((err) => {
  console.error('❌ Critical error in pre-rendering pipeline:', err);
  process.exit(1);
});
