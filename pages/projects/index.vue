<script setup lang="ts">
const { data: projects } = await useAsyncData('documents-list', () => {
    return queryCollection('projects')
        // .where('draft', '=', 0)
        // .order('date', 'DESC')
        .all()
})

useHead({
    link: [
        { rel: 'canonical', href: 'https://llayz.fr/projects' }
    ],
    meta: [
        { name: 'author', content: 'layz' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'portfolio, projets, développeur, développeur web' }
    ]
})

useSeoMeta({
    title: 'Portfolio | llayz',
    description: 'Découvrez tous mes projets personnels, incluant des applications web, des sites vitrines utilisant différentes technologies et frameworks.',
    ogTitle: 'Portfolio | llayz',
    ogDescription: 'Parcourez une collection de mes meilleurs projets et réalisations.',
    ogImage: 'https://llayz.fr/favicon.ico',
    ogUrl: 'https://layz.fr/projects',
    twitterTitle: 'Portfolio | llayz',
    twitterDescription: 'Mon portfolio de projets personnels, incluant des applications web, des sites vitrines et autres.',
    twitterImage: 'https://llayz.fr/favicon.ico',
    twitterCard: 'summary_large_image'
})
</script>

<template>
    <ul class="max-w-5xl mx-auto h-full px-4 pt-4 pb-10 md:pb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="project in projects" :key="project.path">
            <NuxtLink :to="project.path">
                <CardSpotlight
                    class="cursor-pointer items-center justify-center text-4xl shadow-2xl hover:scale-105 transition-transform duration-300 group"
                    gradient-color="#ffffff0A"
                >
                    <div class="flex justify-between items-center">
                        <NuxtTime class="text-xs text-white/50" :datetime="project.date as string" month="long" day="numeric" year="numeric" locale="fr" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-6 text-white/50 group-hover:rotate-45 transition-transform duration-300"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </div>
                    <h2 class="text-lg font-medium text-white/85 line-clamp-2">{{ project.title }}</h2>
                    <p class="text-sm font-light text-white/75 line-clamp-3 md:line-clamp-5">{{ project.description }}</p>
                </CardSpotlight>
            </NuxtLink>
        </li>
    </ul>
</template>