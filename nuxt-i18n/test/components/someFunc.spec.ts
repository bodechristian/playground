import { describe, it, expect } from 'vitest'
import someFunc from '../../app/components/someFunc'




describe('someFunc', () => {
  it('returns translated helloWorld string', () => {
    const result = someFunc();
    expect(result).toBe('helloWorld');
  })
})
