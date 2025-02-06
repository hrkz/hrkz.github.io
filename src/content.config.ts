import { glob } from 'astro/loaders';
import { z, defineCollection } from 'astro:content';

const notes = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/notes" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = { 
  notes 
};
