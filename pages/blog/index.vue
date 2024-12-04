<script setup lang="ts">
const { data: articles } = await useAsyncData('documents-list', () => {
    return queryCollection('articles')
        .where('draft', '=', 0)
        .order('date', 'DESC')
        .all()
})

useHead({
    title: 'Blog | llayz',
    meta: [
        { name: 'description', content: 'Découvrez nos articles sur le développement web, des tutoriels, des roadmaps, et des conseils pour améliorer vos compétences ou apprendre de bonne pratiques.' },
        { name: 'author', content: 'layz' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'blog, articles, développeur, développeur web, how to, tuto, guide, laravel, php, js, vuejs, nuxt, javascript' }
    ],
    link: [
        { rel: 'canonical', href: 'https://layz.fr/blog' }
    ],
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
    <ul class="max-w-5xl mx-auto h-full px-4 pt-4 pb-10 md:pb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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