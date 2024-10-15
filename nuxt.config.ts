import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/css/main.css',
    '~/assets/css/containers.css'
  ],
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'ps-blue': {
              50: '#A6C8FF',
            }
          },
        },
      }
    }
  }
})