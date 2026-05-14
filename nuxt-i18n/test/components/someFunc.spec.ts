// someFunc.spec.ts — v3 pattern, breaks in v4
import { describe, it, expect } from 'vitest'
import someFunc from '../../app/components/someFunc'
import { testI18n } from "../../vitest.setup";
import { shallowMount } from '@vue/test-utils'

describe('someFunc', () => {
  it('returns translated helloWorld string', () => {
    let result;
    shallowMount({
      setup() {
        result = someFunc()
      },
      template: '<div/>'
    })
    expect(result).toBe('Hallo Welt!')
  })

  it('t() and someFunc() return the same thing', () => {
    shallowMount({
      setup() {
        expect(someFunc()).toBe(testI18n.global.t('helloWorld'))
      },
      template: '<div/>'
    })
  })
})
