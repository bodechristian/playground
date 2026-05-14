import { describe, it, expect } from 'vitest'
import HelloComponent from '@/components/HelloComponent.vue';
import {mount} from "@vue/test-utils";

describe('HelloComponent', () => {
  it('renders the translated hello world message',  () => {
    const wrapper = mount(HelloComponent)

    expect(wrapper.text()).toMatch('Hallo Welt!')
  })

  it('mounts successfully', () => {
    const wrapper = mount(HelloComponent)
    
    expect(wrapper.exists()).toBe(true)
  })

  it('uses i18n composable and renders translated text in a paragraph', () => {
    const wrapper = mount(HelloComponent)

    const paragraph = wrapper.find('p')
    expect(paragraph.exists()).toBe(true)
    expect(paragraph.text()).toBeTruthy()
    expect(paragraph.text().length).toBeGreaterThan(0)
  })
})
