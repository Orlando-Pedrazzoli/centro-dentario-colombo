// client/scripts/prerender.cjs

/**
 * PRERENDER — a correção mais importante deste pacote.
 *
 * O problema: o site é um SPA Vite puro. O `dist/index.html` que vai para
 * produção tem <div id="root"></div> vazio. Todo o conteúdo, os <title>, as
 * meta descriptions e o JSON-LD só existem depois de o JavaScript correr no
 * browser. O Googlebot consegue renderizar JS, mas fá-lo numa segunda vaga,
 * com atraso de dias a semanas e sem garantia. O Bingbot, o Facebook, o
 * WhatsApp e a maioria dos crawlers de IA não renderizam de todo — veem uma
 * página em branco. É por isso que a clínica não aparece nas pesquisas.
 *
 * A solução: depois do `vite build`, abrimos cada rota pública num Chrome
 * headless, esperamos que o React monte, e gravamos o HTML final em
 * dist/<rota>/index.html. O Vercel serve o ficheiro estático (o sistema de
 * ficheiros tem precedência sobre os rewrites), por isso o crawler recebe HTML
 * completo à primeira. Para o utilizador nada muda: o React hidrata por cima.
 *
 * DOIS BROWSERS, PORQUÊ:
 * Localmente usamos o `puppeteer`, que traz o seu próprio Chromium e funciona
 * em Windows/macOS sem mais nada. No Vercel isso rebenta com
 * "libnspr4.so: cannot open shared object file": a imagem de build é Amazon
 * Linux e não traz as bibliotecas de sistema do Chromium (NSPR/NSS). Não há
 * configuração do Puppeteer que resolva — os ficheiros não existem na máquina.
 * Por isso, no Vercel usamos `@sparticuz/chromium`, um Chromium compilado com
 * essas bibliotecas embutidas, através do `puppeteer-core`.
 *
 * Requer: npm i -D puppeteer puppeteer-core @sparticuz/chromium
 * Correr depois do build: node scripts/prerender.cjs
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const DIST = path.join(__dirname, '..', 'dist');
const PORT = 4183;

// Mantém sincronizado com STATIC_PAGES e TREATMENT_SLUGS em src/utils/seoConfig.ts
const STATIC_ROUTES = [
  '/',
  '/urgencias',
  '/corpo-clinico',
  '/faq',
  '/politica-privacidade',
  '/politica-cookies',
];

const TREATMENT_SLUGS = [
  'caries',
  'estetica-dentaria',
  'endodontia',
  'implantologia',
  'odontopediatria',
  'ortodontia',
  'periodontologia',
  'proteses-dentarias',
  'higiene-oral',
  'harmonizacao-orofacial',
];

const ROUTES = [
  ...STATIC_ROUTES,
  ...TREATMENT_SLUGS.map(slug => `/tratamentos/${slug}`),
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
};

/** Servidor estático mínimo com fallback SPA — sem dependências extra. */
function startServer() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const urlPath = decodeURIComponent(req.url.split('?')[0]);
      let filePath = path.join(DIST, urlPath);

      if (!filePath.startsWith(DIST)) {
        res.writeHead(403);
        return res.end('Forbidden');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
          'Content-Type': MIME[ext] || 'application/octet-stream',
        });
        return fs.createReadStream(filePath).pipe(res);
      }

      // Fallback SPA
      filePath = path.join(DIST, 'index.html');
      res.writeHead(200, { 'Content-Type': MIME['.html'] });
      fs.createReadStream(filePath).pipe(res);
    });

    server.listen(PORT, () => resolve(server));
  });
}

/**
 * Arranca o Chromium certo para o ambiente certo.
 * O Vercel define VERCEL=1 em todos os builds.
 */
async function launchBrowser() {
  const onVercel = Boolean(process.env.VERCEL);

  if (onVercel) {
    let chromium, puppeteerCore;
    try {
      chromium = require('@sparticuz/chromium');
      puppeteerCore = require('puppeteer-core');
    } catch (err) {
      console.error(
        '[prerender] em ambiente Vercel são precisos @sparticuz/chromium e puppeteer-core.\n' +
          '            npm i -D @sparticuz/chromium puppeteer-core',
      );
      process.exit(1);
    }

    // Sem WebGL: não precisamos de gráficos para gravar HTML e poupa arranque.
    chromium.setGraphicsMode = false;

    const executablePath = await chromium.executablePath();
    console.log(`[prerender] Chromium serverless em ${executablePath}`);

    return puppeteerCore.launch({
      args: [...chromium.args, '--disable-dev-shm-usage'],
      executablePath,
      headless: true,
      defaultViewport: { width: 1280, height: 900 },
    });
  }

  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch (err) {
    console.error(
      '[prerender] puppeteer não está instalado. Corra: npm i -D puppeteer',
    );
    process.exit(1);
  }

  console.log('[prerender] Chromium local (puppeteer)');
  return puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });
}

async function prerender() {
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error(
      '[prerender] dist/index.html não existe. Corra o vite build primeiro.',
    );
    process.exit(1);
  }

  const server = await startServer();
  console.log(`[prerender] servidor local em http://localhost:${PORT}`);

  const browser = await launchBrowser();

  let ok = 0;
  let failed = 0;

  for (const route of ROUTES) {
    const page = await browser.newPage();

    try {
      await page.setViewport({ width: 1280, height: 900 });
      await page.setUserAgent(
        'Mozilla/5.0 (compatible; PrerenderBot/1.0; +https://www.centrodentariocolombo.com)',
      );

      /**
       * Marca a janela ANTES de qualquer script da página correr.
       *
       * O Puppeteer é um browser real: monta o React e corre os useEffect antes
       * de gravarmos o HTML. Sem esta flag, qualquer estado que dependa do
       * relógio (ex.: "aberto agora") fica congelado no HTML estático com o
       * valor que calhou ao build — e o Google indexa isso para sempre.
       *
       * Com a flag, os componentes sabem que estão a ser fotografados e deixam
       * o conteúdo neutro e sempre verdadeiro. No browser do utilizador a flag
       * não existe (é uma variável JS, não fica no HTML gravado), por isso o
       * estado ao vivo aparece normalmente na hidratação.
       */
      await page.evaluateOnNewDocument(() => {
        window.__PRERENDER__ = true;
      });

      // Vídeos e imagens externas não interessam ao HTML — poupa tempo de build.
      await page.setRequestInterception(true);
      page.on('request', req => {
        const type = req.resourceType();
        if (type === 'media' || type === 'font') return req.abort();
        req.continue();
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'networkidle0',
        timeout: 45000,
      });

      // Garante que o React montou e o Helmet já injetou o <title>
      await page.waitForFunction(
        () => {
          const root = document.getElementById('root');
          return root && root.children.length > 0 && document.title.length > 0;
        },
        { timeout: 20000 },
      );

      let html = await page.content();

      // Marca a origem do HTML
      html = html.replace(
        '<head>',
        '<head>\n    <meta name="prerendered" content="true" />',
      );

      const outDir =
        route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');

      const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/);
      console.log(
        `[prerender] ok  ${route.padEnd(36)} ${(titleMatch ? titleMatch[1] : '(sem título)').slice(0, 60)}`,
      );
      ok++;
    } catch (err) {
      console.error(`[prerender] FALHOU ${route}: ${err.message}`);
      failed++;
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  console.log(`\n[prerender] ${ok} páginas geradas, ${failed} falhas.`);

  // Falhar o build é intencional: melhor apanhar aqui do que descobrir
  // semanas depois no Search Console que meia dúzia de páginas está vazia.
  if (failed > 0) process.exit(1);
}

prerender().catch(err => {
  console.error('[prerender] erro fatal:', err);
  process.exit(1);
});
