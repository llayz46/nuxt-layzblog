<script setup lang="ts">
const { data: articles } = await useAsyncData('documents-list', () => {
    return queryCollection('articles')
        .all()
})
// TODO: trier par date de publication
</script>

<template>
    <div v-for="article in articles" :key="article.path" class="mb-4 p-4 border border-white/10 rounded-md">
        <NuxtLink :to="article.path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
        </NuxtLink>
    </div>
<!--    <ContentList path="/articles" v-slot="{ list }" :query="{ draft: false, sort: [ {date: -1} ] }">-->
<!--        <div v-for="article in list" :key="article._path">-->
<!--            <div class="mb-4 p-4 border border-white/10 rounded-md">-->
<!--                <NuxtLink :to="article.slug">-->
<!--                    <h2>{{ article.title }}</h2>-->
<!--                    <p>{{ article.description }}</p>-->
<!--                </NuxtLink>-->
<!--            </div>-->
<!--        </div>-->
<!--    </ContentList>-->
</template>