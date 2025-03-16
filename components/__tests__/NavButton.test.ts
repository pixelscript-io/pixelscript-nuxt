import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavButton from '../NavButton.vue'

describe('NavButton', () => {
  const defaultProps = {
    label: 'Test',
    hotkey: 'T',
    route: '/test'
  }

  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('renders properly', () => {
    const wrapper = mount(NavButton, {
      props: defaultProps
    })

    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('T')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(NavButton, {
      props: defaultProps
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('handles hotkey press', async () => {
    const wrapper = mount(NavButton, {
      props: defaultProps
    })

    const event = new KeyboardEvent('keydown', { key: 't' })
    window.dispatchEvent(event)
    await wrapper.vm.$nextTick()

    expect(wrapper.find('.hotkey').classes()).toContain('activeHotkey')
  })
}) 