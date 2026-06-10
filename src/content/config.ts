import { defineCollection, z } from 'astro:content';

const resourcesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    headline: z.string(),
    subtitle: z.string(),
    pdfUrl: z.string().url(),
    valueProps: z.array(z.string()),
    ctaText: z.string(),
    previewDescription: z.string(),
    pages: z.number(),
    type: z.enum(['setup-guide', 'cheatsheet', 'quick-reference', 'how-to-guide', 'checklist']),
  }),
});

export const collections = {
  resources: resourcesCollection,
};
