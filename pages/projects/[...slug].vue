<script setup lang="ts">
import { ArrowLeftIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const {data: project} = await useAsyncData(route.path, () => {
    return queryCollection('projects').path(route.path).first()
})

if (!project.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page introuvable',
        data: {
            message: 'Désolé, la page que vous recherchez n\'existe pas. Peut-être que le projet a été déplacé ou supprimé.'
        },
    })
}

const hovering = ref(false);

function setHovering(value: boolean) {
    hovering.value = value;
}

useHead({
    title: project.value.title + ' | llayz',
    meta: [
        { name: 'description', content: project.value.description || 'Explorez mes projets personnels et découvrez des applications web, des sites vitrines utilisant différentes technologies et frameworks.' },
        { name: 'author', content: 'layz' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'portfolio, projet, dev web, ' + project.value.meta.tags.join(', ') },
    ],
    link: [
        { rel: 'canonical', href: 'https://llayz.fr' + project.value.path },
    ]
});

useSeoMeta({
    title: project.value.title + ' | llayz',
    ogTitle: project.value.title + ' | llayz',
    description: project.value.description || 'Explorez mes projets personnels et découvrez des applications web, des sites vitrines utilisant différentes technologies et frameworks.',
    ogDescription: project.value.description || 'Découvrez mes projets personnels et découvrez des applications web, des sites vitrines utilisant différentes technologies et frameworks.',
    image: 'https://llayz.fr/img/content/projects/' + project.value.meta.image || 'https://llayz.fr/favicon.ico',
    ogImage: 'https://llayz.fr/img/content/projects/' + project.value.meta.image || 'https://llayz.fr/favicon.ico',
    url: 'https://llayz.fr' + project.value.path,
    ogUrl: 'https://llayz.fr' + project.value.path,
    twitterCard: 'summary_large_image',
    twitterTitle: project.value.title + ' | llayz',
    twitterDescription: project.value.description || 'Découvrez mes projets personnels et découvrez des applications web, des sites vitrines utilisant différentes technologies et frameworks.',
    twitterImage: 'https://llayz.fr/img/content/projects/' + project.value.meta.image || 'https://llayz.fr/favicon.ico'
});
</script>

<template>
    <section class="flex flex-col gap-4 items-center md:pt-14 pt-8 md:pb-24 pb-12 mx-auto w-11/12 max-w-5xl 2xl:max-w-7xl">
        <NuxtLink to="/projects" class="flex gap-1 items-center text-base text-white/50 hover:text-white md:hover:gap-2 transition-all duration-300 px-2 py-1 rounded-lg w-fit group mr-auto">
            <ArrowLeftIcon class="w-5 h-5 text-white/50"/>
            Les projets
        </NuxtLink>
        <div class="flex max-lg:flex-col gap-4 w-full">
            <div class="lg:w-4/6 flex flex-col gap-4">
                <NuxtLink :to="project.meta.url" target="_blank" class="p-2 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg h-fit relative z-10">
                    <Lens :hovering="hovering" @hover-update="setHovering" :lens-size="130">
                        <img :src="`/img/content/projects/${project.meta.image}`" alt="Image illustrant le projet" class="rounded-lg max-w-[375] aspect-video object-cover object-top">
                    </Lens>
                </NuxtLink>
                <div class="flex gap-4">
                    <div class="px-2 py-1.5 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg flex flex-wrap gap-2 w-fit">
                        <template v-for="tag in project.meta.tags">
                            <span class="text-sm/none text-white/30"><span class="text-my-primary-700/45 font-medium">#</span>{{ tag }}</span>
                        </template>
                    </div>

                    <div class="hidden px-2 py-1.5 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg sm:flex gap-2 w-fit">
                        <NuxtLink :to="project.meta.url" target="_blank" class="text-sm/none text-white/30 hover:text-white/55 transition-colors">{{ project.meta.url }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-4 lg:w-2/6">
                <div class="p-2 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg flex flex-col gap-2">
                    <h1 class="text-xl text-white/75 font-semibold">{{ project.title }}</h1>
                    <p class="text-base text-white/50 font-light">{{ project.description }}</p>
                </div>

                <div class="p-2 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg flex flex-col gap-1.5 select-none">
                    <p class="text-base font-medium text-white/75 mr-auto">Technologies :</p>
                    <ul class="flex flex-col gap-1.5 pt-2">
                        <li class="flex items-center gap-2" v-for="tech in project.meta.technology" :key="tech.name">
                            <div v-html="tech.icon" class="p-1.5 w-[32px] h-[32px] flex justify-center items-center bg-my-primary-900/5 border border-white/10 rounded relative overflow-hidden backdrop-blur-sm after:absolute after:inset-0 after:animate-shiny-badge-slide after:inline-block after:bg-gradient-to-r from-transparent via-my-primary-900/[.06] to-transparent"></div>
                            <p class="text-base text-white/50 font-light">{{ tech.name }}</p>
                        </li>
                    </ul>
                </div>

                <div v-if="project.body.github" class="p-2 backdrop-blur-md bg-my-background/10 outline outline-1 outline-white/10 rounded-lg flex flex-col gap-1.5 select-none">
                    <h2 class="text-base font-medium text-white/75">Code source :</h2>
                    <NuxtLink :to="project.body.github" target="_blank" class="text-sm truncate sm:text-base text-white/50 hover:text-white/75 transition-colors font-light">{{ project.body.github }}</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>