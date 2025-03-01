import { defineCollection, z } from 'astro:content';

const businessCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional().default(0),
    date: z.date().optional(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    featured: z.boolean().optional().default(false),
    related: z.array(z.string()).optional().default([]),
  })
});

export const collections = {
  business: businessCollection,
};
