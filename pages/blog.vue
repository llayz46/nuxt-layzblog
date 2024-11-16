<script setup lang="ts">

</script>

<template>
    <ContentList path="/articles" v-slot="{ list }" :query="{ draft: false, sort: [ {date: -1} ] }">
        <div v-for="article in list" :key="article._path">
<!--            {{ article }}-->
            <div class="mb-4 p-4 border border-white/10 rounded-md">
                <NuxtLink :to="article.slug">
                    <h2>{{ article.title }}</h2>
                    <p>{{ article.description }}</p>
                </NuxtLink>
            </div>
        </div>
    </ContentList>
</template>