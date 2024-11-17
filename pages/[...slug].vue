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
    <ContentRenderer :value="article" tag="article" class="content !max-w-3xl mx-auto mt-12" />
<!--    <ContentDoc :path="path" v-slot="{ doc }">-->
<!--        <Breadcrumb :pages="[{ name: 'Blog', href: '/blog' }, { name: doc.title, href: null }]" />-->
<!--        <article class="content max-w-3xl mx-auto mt-12">-->
<!--&lt;!&ndash;            <header class="mb-4">&ndash;&gt;-->
<!--&lt;!&ndash;                <h1 class="text-3xl font-semibold">{{ doc.title }}</h1>&ndash;&gt;-->
<!--&lt;!&ndash;            </header>&ndash;&gt;-->

<!--            <ContentRenderer :value="doc"></ContentRenderer>-->
<!--        </article>-->
<!--    </ContentDoc>-->
</template>

<style scoped>
.content {
    @apply prose prose-invert md:prose-lg prose-p:font-sans prose-p:text-base prose-p:mb-4 prose-a:no-underline prose-a:font-bold prose-hr:my-10 prose-hr:border-white/10;
}
</style>