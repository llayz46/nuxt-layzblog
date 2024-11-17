import { defineCollection } from '@nuxt/content'

export const collections = {
    articles: defineCollection({
        // Load every file inside the `content` directory
        source: 'articles/*.md',
        // Specify the type of content in this collection
        type: 'page',
    })
}
