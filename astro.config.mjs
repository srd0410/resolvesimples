import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://www.resolvesimples.com.br',
  trailingSlash: 'always',
  integrations: [sitemap(), mdx()],
  adapter: vercel(),
});
