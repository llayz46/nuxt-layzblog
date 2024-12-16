<script setup lang="ts">
const { data: projects } = await useAsyncData('documents-list-projects', () => {
    return queryCollection('projects')
        .order('date', 'DESC')
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
            <project-card :project="project"/>
        </li>
    </ul>
</template>