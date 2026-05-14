// hello.router.spec.ts
// ❌ This is the v3 pattern — breaks in vitest v4
import { describe, it, expect, beforeAll } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HelloComponent from '@/components/HelloComponent.vue'
import {useRouter} from "nuxt/app";

describe('HelloComponent (router-aware)', () => {
  // ❌ TOP-LEVEL composable call — the thing that breaks in v4
  const router = useRouter()

  it('is mounted at the root path', async () => {
    const wrapper = await mountSuspended(HelloComponent)
    expect(router.currentRoute.value.path).toBe('/')
  })

  it('renders hello world at root', async () => {
    const wrapper = await mountSuspended(HelloComponent)
    expect(wrapper.text()).toBeTruthy()
  })
})
