import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/css/main.css',
    '~/assets/css/containers.css',
    '~/assets/css/text.css',
  ],
  devtools: {
    enabled: true
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-mail'],
  mail: {
    message: {
      to: 'joe@pixelscript.io',
    },
    smtp: {
      host: "moose.mxrouting.net",
      port: 465,
    },
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'ps-blue': {
              50: '#A6C8FF',
              100: '#4589FF',
            }
          },
        },
      }
    }
  }
})