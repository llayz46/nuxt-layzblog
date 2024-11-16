// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
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

  compatibilityDate: '2024-11-16'
})