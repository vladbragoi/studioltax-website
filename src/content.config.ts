import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const categorieServiziCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servizi" }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string().optional(),
    order: z.number(),
    services: z.array(z.string())
  })
});

export const collections = {
  'servizi': categorieServiziCollection,
};
