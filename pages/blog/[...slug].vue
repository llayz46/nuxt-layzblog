<script setup lang="ts">
import FooterArticleCard from "~/components/FooterArticleCard.vue";

const route = useRoute()

const {data: article} = await useAsyncData(route.path, () => {
    return queryCollection('articles').path(`/${route.params.slug}`).first()
})

if (!article.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
}

const {data: articles} = await useAsyncData('articles', () => {
    return queryCollection('articles')
        .where('path', '!=', route.path)
        .all()
})

if (articles.value) {
    const targetTags = article.value.meta.tags
    articles.value = articles.value.filter((a) => {
        return a.meta.tags.some(tag => targetTags.includes(tag))
    })
}

useHead({
    title: article.value.title + ' | llayz',
    meta: [
        {
            name: 'description',
            content: article.value.description || 'Explorez les articles couvrant le développement web moderne avec des guides pratiques et des tutoriels.'
        },
        {
            name: 'keywords',
            content: 'développement web, Laravel, Vue.js, Livewire, Nuxt.js, guide, Php, dev web, llayz, how to, tuto'
        },
        {property: 'og:title', content: article.value.title + ' | llayz'},
        {
            property: 'og:description',
            content: article.value.description || 'Découvrez des articles passionnants sur le développement web.'
        },
        {property: 'og:type', content: 'article'},
        {property: 'og:url', content: 'https://llayz.fr' + route.fullPath},
        {property: 'og:image', content: article.value.imageUrl || 'https://llayz.fr/favicon.ico'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:title', content: article.value.title + ' | llayz'},
        {
            name: 'twitter:description',
            content: article.value.description || 'Découvrez des articles passionnants sur le développement web.'
        },
        {name: 'twitter:image', content: article.value.imageUrl || 'https://llayz.fr/favicon.ico'}
    ]
});

useSeoMeta({
    title: article.value.title + ' | llayz',
    description: article.value.description || 'Explorez des articles couvrant le développement web moderne avec des guides pratiques et des tutoriels.',
    ogTitle: article.value.title + ' | llayz',
    ogDescription: article.value.description || 'Découvrez des articles passionnants sur le développement web.',
    ogImage: article.value.imageUrl || 'https://llayz.fr/favicon.ico',
    ogUrl: 'https://llayz.fr' + route.fullPath,
    twitterCard: 'summary_large_image',
    twitterTitle: article.value.title + ' | llayz',
    twitterDescription: article.value.description || 'Découvrez des articles passionnants sur le développement web.',
    twitterImage: article.value.imageUrl || 'https://llayz.fr/favicon.ico'
});
</script>

<template>
    <div class="max-w-3xl mx-auto">
        <Breadcrumb v-if="article" :pages="[{ name: 'Blog', href: '/blog' }, { name: article.title, href: null }]"/>

        <div class="mt-12 text-xs text-white/50">
            <NuxtTime v-if="article" :datetime="article.meta.date as string" month="long" day="numeric" year="numeric" locale="fr"/>
        </div>

        <ContentRenderer v-if="article" :value="article" tag="article" class="content !max-w-3xl mt-2 pb-16 overflow-visible"/>

        <footer class="border-t border-white/10 pb-20">
            <div class="grid grid-cols-3 gap-4 pb-12">
                <template v-if="articles" v-for="a in articles">
                    <FooterArticleCard :path="a.path" :slug="a.meta.slug" :description="a.description" :date="a.date" :tags="a.meta.tags"/>
                </template>
            </div>

            <p class="text-sm text-white/50 text-center">llayz © 2024</p>
        </footer>
    </div>

    <TableOfContent v-if="article" :toc="article.body.toc"/>
</template>

<style scoped>
.content {
    @apply prose prose-invert md:prose-lg prose-p:font-sans prose-p:text-base prose-p:mb-4 prose-a:no-underline prose-a:font-bold prose-hr:my-10 prose-hr:border-white/10 before:prose-p:content-none after:prose-p:content-none prose-li:text-base;
}
</style>