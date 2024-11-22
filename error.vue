<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
    error: Object as () => NuxtError
})

const errorMessage = computed(() => {
    const decoded = JSON.parse(props.error.data)

    return decoded.message
})

useHead({
    title: `${error.statusCode} - ${error.statusMessage} | llayz`,
    meta: [
        {
            name: 'description',
            content: errorMessage + ' Explorez des articles sur le développement web sur llayz.'
        },
        { name: 'robots', content: 'noindex, follow' }, // Empêche l'indexation des pages d'erreur
        { property: 'og:title', content: `${error.statusCode} - ${error.statusMessage} | llayz` },
        { property: 'og:description', content: errorMessage },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://llayz.fr' + error.url },
        { property: 'og:image', content: 'https://llayz.fr/favicon.ico' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `${error.statusCode} - ${error.statusMessage} | llayz` },
        { name: 'twitter:description', content: errorMessage },
        { name: 'twitter:image', content: 'https://llayz.fr/favicon.ico' }
    ]
})

useSeoMeta({
    title: `${error.statusCode} - ${error.statusMessage} | llayz`,
    description: errorMessage + ' Explorez des articles passionnants sur llayz.',
    ogTitle: `${error.statusCode} - ${error.statusMessage} | llayz`,
    ogDescription: errorMessage,
    ogImage: 'https://llayz.fr/favicon.ico',
    ogUrl: 'https://llayz.fr' + error.url,
    twitterCard: 'summary_large_image',
    twitterTitle: `${error.statusCode} - ${error.statusMessage} | llayz`,
    twitterDescription: errorMessage,
    twitterImage: 'https://llayz.fr/favicon.ico'
})
</script>

<template>
    <div class="bg-noisy"></div>
    <div class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div class="text-center">
            <p class="text-2xl font-semibold text-my-primary-600">{{ error.statusCode }}</p>
            <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">{{ error.statusCode === 404 ? 'Page introuvable' : error.statusMessage }}</h1>
            <p class="mt-6 text-pretty text-lg text-white/50 sm:text-xl/8">{{ errorMessage ? errorMessage : "Une erreur est survenue. Veuillez réessayer plus tard." }}</p>
            <div class="mt-10">
                <NuxtLink to="/" class="rounded-md bg-my-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-my-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-my-primary-500">Retourner à l'accueil</NuxtLink>
            </div>
        </div>
    </div>
</template>