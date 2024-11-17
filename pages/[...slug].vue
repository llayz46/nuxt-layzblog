<script setup lang="ts">
    const {slug} = useRoute().params
    const path = `/articles/${slug}`

    const route = useRoute()
    const { data: article } = await useAsyncData(path, () => {
        return queryCollection('articles').path(route.path).first()
    })
</script>

<template>
    <Breadcrumb :pages="[{ name: 'Blog', href: '/blog' }, { name: article.title, href: null }]" />

    <div class="max-w-3xl mx-auto mt-12 text-xs text-white/50">
        <NuxtTime :datetime="article.meta.date" month="long" day="numeric" year="numeric" locale="fr" />
    </div>

    <ContentRenderer :value="article" tag="article" class="content !max-w-3xl mx-auto mt-2" />
</template>

<style scoped>
.content {
    @apply prose prose-invert md:prose-lg prose-p:font-sans prose-p:text-base prose-p:mb-4 prose-a:no-underline prose-a:font-bold prose-hr:my-10 prose-hr:border-white/10;
}
</style>