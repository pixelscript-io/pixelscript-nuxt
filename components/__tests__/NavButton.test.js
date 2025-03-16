import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavButton from '../NavButton.vue'

// Create router mock
const mockRoute = vi.fn()
const mockRouter = vi.fn()

vi.mock('vue-router', () => ({
  useRoute: () => mockRoute(),
  useRouter: () => mockRouter()
}))

describe('NavButton', () => {
  const defaultProps = {
    label: 'Test',
    hotkey: 'T',
    route: '/test'
  }

  beforeEach(() => {
    vi.clearAllMocks()
    // Setup router mock return values
    mockRoute.mockReturnValue({ path: '/test' })
    mockRouter.mockReturnValue({ push: vi.fn() })
  })

  it('renders properly', () => {
    const wrapper = mount(NavButton, {
      props: defaultProps,
      global: {
        stubs: {
          'router-link': true
        }
      }
    })

    expect(wrapper.text()).toContain('Test')
    expect(wrapper.text()).toContain('T')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(NavButton, {
      props: defaultProps,
      global: {
        stubs: {
          'router-link': true
        }
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('handles hotkey press', async () => {
    const wrapper = mount(NavButton, {
      props: defaultProps,
      global: {
        stubs: {
          'router-link': true
        }
      }
    })

    // Simulate keydown
    const keydownEvent = new KeyboardEvent('keydown', { key: 't' })
    window.dispatchEvent(keydownEvent)
    await wrapper.vm.$nextTick()

    // Check if hotkey visual is active
    expect(wrapper.find('.hotkey').classes()).toContain('activeHotkey')

    // Simulate keyup
    const keyupEvent = new KeyboardEvent('keyup', { key: 't' })
    window.dispatchEvent(keyupEvent)
    await wrapper.vm.$nextTick()

    // Check if hotkey visual is inactive
    expect(wrapper.find('.hotkey').classes()).not.toContain('activeHotkey')
  })

  it('navigates when hotkey is pressed', async () => {
    const mockPush = vi.fn()
    mockRouter.mockReturnValue({ push: mockPush })

    mount(NavButton, {
      props: defaultProps,
      global: {
        stubs: {
          'router-link': true
        }
      }
    })

    // Simulate keydown
    const keydownEvent = new KeyboardEvent('keydown', { key: 't' })
    window.dispatchEvent(keydownEvent)
    await vi.dynamicImportSettled()

    expect(mockPush).toHaveBeenCalledWith('/test')
  })
}) 