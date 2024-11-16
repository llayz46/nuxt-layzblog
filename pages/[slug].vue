<script setup lang="ts">
    const {slug} = useRoute().params
</script>

<template>
    <main>
        <article class="prose">
            <ContentDoc :path="`/articles/${slug}`" v-slot="{ doc }">
                <header class="mb-4">
                    <h1 class="text-3xl font-semibold">{{ doc.title }}</h1>
                </header>

                <ContentRenderer :value="doc"></ContentRenderer>
            </ContentDoc>
        </article>
    </main>
</template>
