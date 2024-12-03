import { defineCollection } from '@nuxt/content'
import {z} from "zod";

export const collections = {
    articles: defineCollection({
        source: {
            include: 'articles/*.md',
            prefix: '/blog'
        },
        type: 'page',
        schema: z.object({
            date: z.string(),
            title: z.string(),
            description: z.string(),
            draft: z.boolean(),
        })
    }),
    projects: defineCollection({
        source: {
            include: 'projects/*.json',
            prefix: '/projects'
        },
        type: 'page',
        schema: z.object({
            title: z.string(),
            description: z.string(),
            date: z.string(),
        })
    })
}
