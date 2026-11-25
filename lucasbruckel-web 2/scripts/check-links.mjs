// Revisa los links internos del sitio compilado y lista los externos para verificarlos a mano.
// Uso: npm run build && npm run check:links
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';

const root = '.vercel/output/static';
if (!existsSync(root)) {
  console.error('Primero corré: npm run build');
  process.exit(1);
}
const htmlFiles = [];
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) htmlFiles.push(p);
  }
};
walk(root);

const external = new Set();
let broken = 0;
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(mailto:|tel:|#)/.test(href)) continue;
    if (/^https?:\/\//.test(href)) {
      if (!href.includes('lucasbruckel.vercel.app')) external.add(href.split('?')[0]);
      continue;
    }
    const clean = href.split('#')[0].split('?')[0];
    if (!clean || clean.startsWith('/api/')) continue;
    const target = clean.endsWith('/') ? join(root, clean, 'index.html') : join(root, clean);
    if (!existsSync(target) && !existsSync(target + '.html')) {
      console.log(`✘ ${file.replace(root, '')} → ${href}`);
      broken++;
    }
  }
}
console.log(`\n${htmlFiles.length} páginas revisadas. Links internos rotos: ${broken}.`);
console.log(`\nLinks externos para verificar a mano (${external.size}):`);
for (const e of [...external].sort()) console.log(`  ${e}`);
process.exit(broken ? 1 : 0);
