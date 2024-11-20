<script setup lang="ts">
const { data: articles } = await useAsyncData('documents-list', () => {
    return queryCollection('articles')
        .order('date', 'DESC')
        .all()
})

useHead({
    title: 'Blog | llayz',
    meta: [
        { name: 'description', content: 'Découvrez nos articles sur le développement web, des tutoriels, des roadmaps, et des conseils pour améliorer vos compétences ou apprendre de bonne pratiques.' },
        { property: 'og:title', content: 'Blog | llayz' },
        { property: 'og:description', content: 'Parcourez nos articles de qualité sur le développement web, incluant des ressources pour apprendre Laravel, Vue.js, Nuxt.js, Livewire et plus encore.' },
        { property: 'og:image', content: 'https://llayz.fr/favicon.ico' },
        { property: 'og:url', content: 'https://llayz.fr/blog' },
        { property: 'twitter:title', content: 'Blog | llayz' },
        { property: 'twitter:description', content: 'Accédez à des articles riches en contenu pour les développeurs, allant des bases aux technologies modernes.' },
        { property: 'twitter:image', content: 'https://llayz.fr/favicon.ico' },
        { property: 'twitter:card', content: 'summary_large_image' }
    ]
});

useSeoMeta({
    description: 'Découvrez nos articles sur le développement web, des tutoriels, des roadmaps, et des conseils pour améliorer vos compétences ou apprendre de bonne pratiques.',
    ogTitle: 'Blog | llayz',
    ogDescription: 'Parcourez nos articles de qualité sur le développement web, incluant des ressources pour apprendre Laravel, Vue.js, Nuxt.js, Livewire et plus encore.',
    ogImage: 'https://llayz.fr/favicon.ico',
    ogUrl: 'https://llayz.fr/blog',
    twitterTitle: 'Blog | llayz',
    twitterDescription: 'Accédez à des articles riches en contenu pour les développeurs, allant des bases aux technologies modernes.',
    twitterImage: 'https://llayz.fr/favicon.ico',
    twitterCard: 'summary_large_image'
});
</script>

<template>
    <ul class="max-w-5xl h-full px-4 pt-4 pb-10 md:pb-20 overflow-hidden mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="article in articles" :key="article.path">
            <NuxtLink :to="article.path">
                <CardSpotlight
                    class="cursor-pointer items-center justify-center text-4xl shadow-2xl hover:scale-105 transition-transform duration-300 group"
                    gradient-color="#ffffff0A"
                >
                    <div class="flex justify-between items-center">
                        <NuxtTime class="text-xs text-white/50" :datetime="article.date as string" month="long" day="numeric" year="numeric" locale="fr" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-6 text-white/50 group-hover:rotate-45 transition-transform duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                    <h2 class="text-lg font-medium text-white/85 line-clamp-2">{{ article.title }}</h2>
                    <p class="text-sm font-light text-white/75 line-clamp-3 md:line-clamp-5">{{ article.description }}</p>
                </CardSpotlight>
            </NuxtLink>
        </li>
    </ul>
</template>