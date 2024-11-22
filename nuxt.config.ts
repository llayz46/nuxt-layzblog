// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    devtools: {enabled: true},

    modules: [
      '@nuxt/content',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@vueuse/motion/nuxt',
      'nuxt-time',
      '@pinia/nuxt',
      'pinia-plugin-persistedstate/nuxt',
      'nuxt-gtag',
      'shadcn-nuxt'
    ],

    routeRules: {
        '/': {prerender: true}
    },

    googleFonts: {
        download: true,
        families: {
            'Space Grotesk': '300..700',
            'DM Sans': '300..700'
        }
    },

    css: ['~/assets/css/tailwind.css'],

    content: {
        build: {
            markdown: {
                toc: {
                    depth: 3,
                    searchDepth: 3
                },
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
            },
        }
    },

    gtag: {
        id: 'G-MMNC5MJS27'
    },

    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },

    compatibilityDate: '2024-11-16'
})