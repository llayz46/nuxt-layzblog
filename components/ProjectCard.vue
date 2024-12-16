<script setup>
    defineProps({
        project: Object
    })
</script>

<template>
    <NuxtLink :to="project.path">
        <CardSpotlight
            class="cursor-pointer items-center justify-center text-4xl shadow-2xl group text-left"
            gradient-color="#ffffff0A"
        >
            <img :src="`/img/content/projects/${project.meta.image}`" alt="Image illustrant le projet" class="rounded-lg">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-medium text-white/85 line-clamp-2">{{ project.title }}</h2>
                <NuxtTime class="text-xs text-white/50" :datetime="String(project.date)" month="long" day="numeric" year="numeric" locale="fr" />
            </div>
            <div class="flex gap-1.5 truncate">
                <template v-for="tag in project.meta.tags">
                    <span class="text-sm/none text-white/30"><span class="text-my-primary-700/45 font-medium">#</span>{{ tag }}</span>
                </template>
            </div>
<!--            <p class="text-sm font-light text-white/75 line-clamp-3 md:line-clamp-5">{{ project.description }}</p>-->
        </CardSpotlight>
    </NuxtLink>
</template>