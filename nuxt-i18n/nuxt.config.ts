// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: true,
  components: true,
  routeRules: {
    '/': { swr: 10 },
  },
  experimental: {
    appManifest: false,
  },
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
    vueI18n: './i18n.config.ts',
  },
  runtimeConfig: {
    site: {
      url: '',
    },
    public: {
      magnolia: {
        author: {
          url: '',
          basePathExternal: '',
        },
        public: {
          url: '',
          basePathExternal: '',
        },
      },
      movingImage: {
        playerId: '',
      },
      analytics: {
        src: '',
      },
      backend: {
        host: '',
        port: '',
      },
      investmentRechnerPath: '',
      juniorPlanPlusRechnerPath: '',
      chatBotUrl: '',
    }
  }

})
