<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline/index.js";

const { data: articles } = await useAsyncData('documents-list', () => {
    return queryCollection('articles')
        .where('draft', '=', 0)
        .order('date', 'DESC')
        .all()
})
</script>

<template>
    <section class="max-w-3xl mx-auto pt-52">
        <NuxtLink to="/blog" class="group">
            <span class="flex items-center w-fit mx-auto capitalize px-4 py-1.5 bg-my-background/20 group-hover:bg-my-background/30 rounded-full text-sm font-medium text-white/80 group-hover:text-white border border-white/10 group-hover:border-white/20 transition-colors">
                Les articles
                <ArrowRightIcon class="size-4 inline-block ml-1"/>
            </span>
        </NuxtLink>
        <h1 class="text-center text-3xl font-bold leading-tight tracking-tight lg:leading-[1.1] md:text-6xl text-white mt-4">Explorez le monde du développement web</h1>
        <p class="mt-4 text-center text-lg sm:text-xl text-white/75">
            Des articles, des astuces et des guides pour devenir un développeur web d'exception.
        </p>
    </section>

    <section class="pt-44 text-center">
        <h2 class="mb-4 py-10 text-5xl font-semibold text-white">Articles</h2>
        <ul class="max-w-5xl mx-auto h-full px-4 pb-10 md:pb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <li v-for="article in articles" :key="article.path">
                <NuxtLink :to="article.path">
                    <CardSpotlight
                        class="cursor-pointer items-center justify-center text-4xl shadow-2xl hover:scale-105 transition-transform duration-300 group text-left"
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
    </section>
</template>