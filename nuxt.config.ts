import colors from 'tailwindcss/colors'

export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'PixelScript - Product Design & Development',
      meta: [
        { name: 'description', content: 'PixelScript is a personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#18181B' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PixelScript - Product Design & Development' },
        { property: 'og:description', content: 'PixelScript is a personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.' },
        { property: 'og:image', content: '/img/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PixelScript - Product Design & Development' },
        { name: 'twitter:description', content: 'PixelScript is a personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.' },
        { name: 'twitter:image', content: '/img/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://pixelscript.io' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
      ]
    },
  },
  experimental: {
    payloadExtraction: true,
    renderJsonPayloads: true,
    viewTransition: true
  },
  nitro: {
    compressPublicAssets: true,
    minify: true
  },
  routeRules: {
    '/': { prerender: true },
    '/experience': { prerender: true },
    '/work': { prerender: true },
    '/contact': { prerender: true }
  },
  site: {
    url: 'https://pixelscript.io'
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
    Sitemap: 'https://pixelscript.io/sitemap.xml'
  },
  compatibilityDate: '2024-04-03',
  css: [
    '~/assets/css/main.css',
    '~/assets/css/containers.css',
    '~/assets/css/text.css',
    '~/assets/css/logo-animation.css',
  ],
  devtools: {
    enabled: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-mail',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-TK2LQS8XGY'
  },
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