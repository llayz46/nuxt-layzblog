// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
      '@nuxt/content',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@vueuse/motion/nuxt',
      'nuxt-time'
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

    content: {
        build: {
            markdown: {
                highlight: {
                    theme: 'kanagawa-wave',
                    langs: [
                        'php',
                        'js',
                        'json',
                        'ts',
                        'html',
                        'css',
                        'vue',
                        'shell',
                        'mdc',
                        'md',
                        'yaml',
                        'bash',
                        'blade',
                        'sql',
                        'dotenv',
                        'nginx',
                        'regex',
                        'sass',
                        'scss',
                        'vue',
                    ]
                },
                toc: {
                    depth: 3,
                    searchDepth: 3
                }
            },
        }
    },

    compatibilityDate: '2024-11-16'
})