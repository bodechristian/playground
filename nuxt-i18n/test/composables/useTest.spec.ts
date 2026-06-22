import {
  describe, expect, it, vi
} from 'vitest';
import {mockNuxtImport} from "@nuxt/test-utils/runtime";


mockNuxtImport('useRuntimeConfig', () => vi.fn(() => ({
  app: {
    baseURL: '/',
  },
  public: {
    magnolia: {
      author: { url: 'http://localhost/magnolia/author', basePathExternal: '' },
      public: { url: 'http://localhost/magnolia', basePathExternal: '' },
    }
  }
})))
describe('useTest', () => {
  it('some stuff', () => {

  })
})
