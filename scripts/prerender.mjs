// scripts/prerender.mjs
//
// Runs AFTER `vite build`. Spins up a local static server for dist/,
// visits every route from sitemap.xml in a real headless browser,
// waits for the client-side React app (and Helmet head tags) to render,
// then saves the fully-rendered HTML back into dist/ at that route's path.
//
// Result: Googlebot, GPTBot, ClaudeBot, PerplexityBot etc. all get complete
// static HTML (title, meta tags, JSON-LD) with zero JS execution required.
// Real visitors still get the exact same live React app — it hydrates
// normally over the prerendered HTML, no behavior change for users.
//
// Does NOT touch functions/api/contact.ts or any routing config.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import { createServer } from 'http';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');
const PORT = 4174;

function getRoutesFromSitemap() {
  const xml = readFileSync(join(distDir, 'sitemap.xml'), 'utf-8');
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  return matches.map((url) => new URL(url).pathname);
}

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => handler(req, res, { public: distDir }));
    server.listen(PORT, () => resolve(server));
  });
}

function outputPathFor(route) {
  if (route === '/') return join(distDir, 'index.html');
  // /services/gst-services -> dist/services/gst-services/index.html
  return join(distDir, route.replace(/^\//, ''), 'index.html');
}

async function main() {
  const routes = getRoutesFromSitemap();
  console.log(`[prerender] Found ${routes.length} routes in sitemap.xml`);

  const server = await startServer();
  console.log(`[prerender] Static server running at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });

  let success = 0;
  let failed = 0;

  for (const route of routes) {
    try {
      const page = await browser.newPage();
      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });
      // small extra buffer for any deferred effects (Helmet, lazy chunks)
      await new Promise((r) => setTimeout(r, 300));

      const html = await page.content();
      await page.close();

      const outPath = outputPathFor(route);
      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html, 'utf-8');

      const hasJsonLd = html.includes('application/ld+json');
      console.log(`[prerender] ✓ ${route} -> ${outPath.replace(distDir, 'dist')} (JSON-LD: ${hasJsonLd ? 'yes' : 'NO'})`);
      success++;
    } catch (err) {
      console.error(`[prerender] ✗ FAILED ${route}:`, err.message);
      failed++;
    }
  }

  await browser.close();
  server.close();

  console.log(`\n[prerender] Done. ${success} succeeded, ${failed} failed.`);
  if (failed > 0) {
    console.error('[prerender] Some routes failed to prerender. Fix before deploying.');
    process.exit(1);
  }
}

main();
