// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,
  devtools: {enabled: true},
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module'
  ],
  i18n: {
    defaultLocale: 'de',
    strategy: 'prefix_and_default',
    locales: [
      {code: 'de', name: 'Deutsch'},
      {code: 'en', name: 'English'}
    ],
    vueI18n: './i18n.config.ts'
  },
})
