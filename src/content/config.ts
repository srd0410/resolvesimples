import { defineCollection, z } from 'astro:content';

const artigos = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Vira a <meta description>. Mantenha entre 120–160 caracteres.
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Slugs de OFFERS (src/consts.ts) relacionados — alimenta os links
      // "produtos citados" e "continue lendo" no fim do artigo.
      niches: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { artigos };
