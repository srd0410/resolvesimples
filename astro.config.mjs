import { defineConfig } from 'astro/config';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

// Mapa slug -> data de última modificação (updatedDate ?? pubDate), lido do
// frontmatter dos artigos, para preencher <lastmod> no sitemap (sinal de
// frescor por URL para o Google). Mesmo padrão do site-irmão guia-de-voo.
const artigosDir = fileURLToPath(new URL('./src/content/artigos', import.meta.url));
const lastmodBySlug = {};
for (const file of readdirSync(artigosDir)) {
  if (!file.endsWith('.mdx')) continue;
  const fm = readFileSync(`${artigosDir}/${file}`, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) continue;
  const pub = fm[1].match(/^pubDate:\s*(.+)$/m)?.[1]?.trim();
  const upd = fm[1].match(/^updatedDate:\s*(.+)$/m)?.[1]?.trim();
  const d = upd || pub;
  if (d) {
    const parsed = new Date(d);
    if (!isNaN(parsed)) lastmodBySlug[file.replace(/\.mdx$/, '')] = parsed.toISOString();
  }
}

export default defineConfig({
  site: 'https://www.resolvesimples.com.br',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    sitemap({
      // Preenche <lastmod> por URL de artigo, a partir das datas do frontmatter.
      serialize(item) {
        const match = item.url.match(/\/artigos\/([^/]+)\/$/);
        if (match && lastmodBySlug[match[1]]) item.lastmod = lastmodBySlug[match[1]];
        return item;
      },
    }),
    // pagefind() indexa o conteúdo do site (main[data-pagefind-body], ver
    // Layout.astro) ao final do build e gera /pagefind/ em dist/.
    pagefind(),
  ],
  adapter: vercel(),
  vite: {
    build: {
      rollupOptions: {
        external: ['/pagefind/pagefind.js'],
      },
    },
  },
});
