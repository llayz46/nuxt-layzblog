<script setup>
    defineProps({
        article: Object
    })
</script>

<template>
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
</template>