// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "node:path";

export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        '@vueuse/motion/nuxt',
    ],

    routeRules: {
        '/': {prerender: true}
    },

    googleFonts: {
        // download: true,
        families: {
            'Space Grotesk': true,
            'DM Sans': true
        }
    },

    css: ['~/assets/css/tailwind.css'],

    compatibilityDate: '2024-11-16'
})