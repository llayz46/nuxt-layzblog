<script setup lang="ts">
import FooterArticleCard from "~/components/FooterArticleCard.vue";

const route = useRoute()

const {data: article} = await useAsyncData(route.path, () => {
    return queryCollection('articles').path(route.path).first()
})

if (!article.value || article.value.draft === 1) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page introuvable',
        data: {
            message: 'Désolé, la page que vous recherchez n\'existe pas. Peut-être que l\'article a été déplacé ou supprimé.'
        },
    })
}

const {data: allArticles} = await useAsyncData('articles', () => {
    return queryCollection('articles')
        .where('path', '!=', route.path)
        .where('draft', '=', 0)
        .all()
})

const articles = ref([]);

if (allArticles.value) {
    const targetTags = article.value.meta.tags
    articles.value = allArticles.value.filter((a) => {
        return a.meta.tags.some(tag => targetTags.includes(tag))
    })
}

if (articles.value.length === 0) {
    articles.value = allArticles.value
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3)
}

useHead({
    title: article.value.title + ' | llayz',
    meta: [
        { name: 'description', content: article.value.description || 'Explorez les articles couvrant le développement web moderne avec des guides pratiques et des tutoriels.' },
        { name: 'author', content: 'layz' },
        { name: 'robots', content: 'index, follow' },
        { name: 'keywords', content: 'développement web, Laravel, Vue.js, Livewire, Nuxt.js, guide, Php, dev web, llayz, how to, tuto, ' + article.value.meta.tags.join(', ') },
    ],
    link: [
        { rel: 'canonical', href: 'https://llayz.fr/blog/' + article.value.meta.slug },
    ]
});

useSeoMeta({
    title: article.value.title + ' | llayz',
    ogTitle: article.value.title + ' | llayz',
    description: article.value.description || 'Explorez des articles couvrant le développement web moderne avec des guides pratiques et des tutoriels.',
    ogDescription: article.value.description || 'Découvrez des articles passionnants sur le développement web.',
    image: 'https://llayz.fr/img/content/articles/' + article.value.meta.thumbnail || 'https://llayz.fr/favicon.ico',
    ogImage: 'https://llayz.fr/img/content/articles/' + article.value.meta.thumbnail || 'https://llayz.fr/favicon.ico',
    url: 'https://llayz.fr' + route.fullPath,
    ogUrl: 'https://llayz.fr' + route.fullPath,
    type: 'article',
    ogType: 'article',
    twitterCard: 'summary_large_image',
    twitterTitle: article.value.title + ' | llayz',
    twitterDescription: article.value.description || 'Découvrez des articles passionnants sur le développement web.',
    twitterImage: 'https://llayz.fr/img/content/articles/' + article.value.meta.thumbnail || 'https://llayz.fr/favicon.ico'
});
</script>

<template>
    <div class="max-md:px-6 max-w-3xl mx-auto">
        <Breadcrumb v-if="article" :pages="[{ name: 'Blog', href: '/blog' }, { name: article.title, href: null }]"/>

        <div class="mt-12 text-xs text-white/50">
            <NuxtTime v-if="article" :datetime="article.meta.date as string" month="long" day="numeric" year="numeric" locale="fr"/>
        </div>

        <ContentRenderer v-if="article" :value="article" tag="article" class="content !max-w-3xl mt-2 pb-16 overflow-visible"/>

        <footer class="border-t border-white/10 pb-20">
            <div class="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-4 mt-4 pb-12">
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
    @apply prose prose-invert md:prose-lg prose-p:font-sans prose-p:text-base prose-p:mb-4 prose-a:no-underline prose-a:font-bold prose-hr:my-10 prose-hr:border-white/10 before:prose-p:content-none after:prose-p:content-none prose-li:text-base prose-headings:text-wrap;
}
</style>