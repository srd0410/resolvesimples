import { getCollection } from 'astro:content';
import { SITE, OFFERS } from '../consts';

// Endpoint dinâmico (mesmo padrão do rss.xml.js): gera o /llms.txt a partir do
// conteúdo real do site a cada build, para nunca ficar desatualizado. Convenção
// llms.txt (llmstxt.org) — resumo do site em Markdown simples, pensado para ser
// lido por agentes de IA/LLMs.

export async function GET(context: { site?: URL }) {
  const artigos = (await getCollection('artigos', ({ data }) => !data.draft)).sort(
    (a, b) => a.data.title.localeCompare(b.data.title, 'pt-BR')
  );

  const siteUrl = (context.site ?? new URL(SITE.url)).href.replace(/\/$/, '');

  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.tagline}`);
  lines.push('');

  lines.push('## Áreas cobertas');
  lines.push('');
  for (const offer of OFFERS) {
    lines.push(`- [${offer.niche}](${siteUrl}/${offer.slug}/): ${offer.painPoint}`);
  }
  lines.push('');

  if (artigos.length > 0) {
    lines.push('## Comparativos e artigos');
    lines.push('');
    for (const post of artigos) {
      lines.push(`- [${post.data.title}](${siteUrl}/artigos/${post.slug}/): ${post.data.description}`);
    }
    lines.push('');
  }

  lines.push('## Outros');
  lines.push('');
  lines.push(`- [Ranking geral](${siteUrl}/ranking/)`);
  lines.push(`- [Sitemap XML](${siteUrl}/sitemap-index.xml)`);
  lines.push(`- [Feed RSS](${siteUrl}/rss.xml)`);
  lines.push('');

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
