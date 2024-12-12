<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline/index.js";
import { ArrowRight } from 'lucide-vue-next';

const { data: articles } = await useAsyncData('documents-list-articles', () => {
    return queryCollection('articles')
        .where('draft', '=', 0)
        .order('date', 'DESC')
        .all()
})

const { data: projects } = await useAsyncData('documents-list-projects', () => {
    return queryCollection('projects')
        .order('date', 'DESC')
        .all()
})

const showContactModal = ref(false);
</script>

<template>
    <section class="max-w-3xl mx-auto pt-40">
        <h1 class="text-center text-3xl font-bold leading-tight tracking-tight md:text-5xl text-white">
            Donnez vie à vos idées avec des applications web
            <FlipWords
                :words="['modernes', 'innovantes', 'créatives']"
                :duration="6000"
                class="!block"
            />
        </h1>

        <p class="text-center text-lg text-white/75 mt-6">Je suis Louis Mazeau, développeur web full-stack. Mon objectif est de créer des applications web robustes et modernes, en m'assurant que chaque projet soit à la fois fonctionnel et agréable à utiliser.</p>

        <div class="flex justify-center">
            <button class="mt-6 rounded-md bg-my-primary-600 flex items-center gap-1 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-my-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-primary-500 inline-block"
                @click.prevent="showContactModal = true">
                Contactez-moi <arrow-right class="size-4"/>
            </button>
        </div>
    </section>

    <section class="max-w-5xl mx-auto pt-40 text-center">
        <div class="mb-8 flex items-center justify-between">
            <div class="text-left space-y-3">
                <RadiantText
                    class="text-3xl font-semibold inline-flex items-center justify-center py-1 transition ease-out hover:duration-300 hover:text-neutral-400"
                    :duration="7"
                >
                    <h2 class="text-3xl font-bold">Mes projets</h2>
                </RadiantText>

                <p class="text-base">Explore mes derniers projets, allant d'applications web full-stack à de petits projets front-end.</p>
            </div>
            <NuxtLink to="/projects" class="group">
                <span class="flex items-center w-fit mx-auto capitalize px-4 py-1.5 bg-my-background/20 group-hover:bg-my-background/30 rounded-md text-sm font-medium text-white/80 group-hover:text-white border border-white/10 group-hover:border-white/20 transition-colors">
                    Voir tout
                    <ArrowRightIcon class="size-4 inline-block ml-1"/>
                </span>
            </NuxtLink>
        </div>
        <ul class="h-full pb-10 md:pb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li v-for="project in projects" :key="project.path">
                <article-card :article="project"/>
            </li>
        </ul>
    </section>

    <section class="max-w-5xl mx-auto pt-20 text-center">
        <div class="mb-8 flex items-center justify-between">
            <div class="text-left space-y-3">
                <RadiantText
                    class="text-3xl font-semibold inline-flex items-center justify-center py-1 transition ease-out hover:duration-300 hover:text-neutral-400"
                    :duration="7"
                >
                    <h2 class="text-3xl font-bold">Les derniers articles</h2>
                </RadiantText>
                <p class="text-base">Reste informé des dernières tendances en développement web, des astuces de code, et des tutoriels.</p>
            </div>
            <NuxtLink to="/blog" class="group">
                <span class="flex items-center w-fit mx-auto capitalize px-4 py-1.5 bg-my-background/20 group-hover:bg-my-background/30 rounded-md text-sm font-medium text-white/80 group-hover:text-white border border-white/10 group-hover:border-white/20 transition-colors">
                    Voir tout
                    <ArrowRightIcon class="size-4 inline-block ml-1"/>
                </span>
            </NuxtLink>
        </div>
        <ul class="h-full pb-10 md:pb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li v-for="article in articles" :key="article.path">
                <article-card :article="article"/>
            </li>
        </ul>
    </section>

    <Contact :open="showContactModal" @close="showContactModal = false" />
</template>