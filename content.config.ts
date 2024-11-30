import { defineCollection } from '@nuxt/content'
import {z} from "zod";

export const collections = {
    articles: defineCollection({
        // Load every file inside the `content` directory
        source: {
            include: 'articles/*.md',
            prefix: '/blog'
        },
        // Specify the type of content in this collection
        type: 'page',
        schema: z.object({
            date: z.string(),
            title: z.string(),
            description: z.string(),
            draft: z.boolean(),
        })
    })
}
