import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    include: ['test/**/*.spec.ts'],
    setupFiles: ['./vitest.setup.ts'],
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom'
      }
    },
    onConsoleLog(log, type) {
      if (type === 'stderr' && (
        log.includes('No match found for location')
      )) {
        return false
      }
    }
  },
})
