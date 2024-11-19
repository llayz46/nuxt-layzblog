<script setup lang="ts">
    const {slug} = useRoute().params
    const path = `/articles/${slug}`

    const route = useRoute()
    const { data: article } = await useAsyncData(path, () => {
        return queryCollection('articles').path(route.path).first()
    })
</script>

<template>
    <div class="max-w-3xl mx-auto">
        <Breadcrumb v-if="article" :pages="[{ name: 'Blog', href: '/blog' }, { name: article.title, href: null }]" />

        <div class="mt-12 text-xs text-white/50">
            <NuxtTime v-if="article" :datetime="article.meta.date as string" month="long" day="numeric" year="numeric" locale="fr" />
        </div>

        <ContentRenderer v-if="article" :value="article" tag="article" class="content !max-w-3xl mt-2 pb-32 overflow-visible" />
    </div>

    <TableOfContent v-if="article" :toc="article.body.toc"/>
</template>

<style scoped>
.content {
    @apply prose prose-invert md:prose-lg prose-p:font-sans prose-p:text-base prose-p:mb-4 prose-a:no-underline prose-a:font-bold prose-hr:my-10 prose-hr:border-white/10 before:prose-p:content-none after:prose-p:content-none;
}
</style>