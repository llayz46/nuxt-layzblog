<script setup>
    defineProps({
        tags: Array,
        img: String
    })
</script>

<template>
    <div class="max-w-3xl flex flex-wrap gap-3 -mt-6 mb-8">
        <span v-for="tag in tags.slice(0, 11)" class="border border-white/10 bg-my-background/25 px-2 py-1 text-sm rounded-full cursor-default">{{ tag }}</span>
    </div>

    <img :src="`/img/content/articles/${img}`" class="size-full object-cover aspect-video rounded-3xl shadow-2xl" alt="Image de couverture l'article">
</template>