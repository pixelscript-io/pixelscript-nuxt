export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'PixelScript - Joe Berthelot',
      meta: [
        { name: 'description', content: 'PixelScript is a personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#18181B' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PixelScript - Joe Berthelot' },
        { property: 'og:description', content: 'PixelScript is a personal laboratory where pixels meet code. Product Design, User Experience Research and Front End Development.' },
        { property: 'og:image', content: '/img/og-image.jpg' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PixelScript - Joe Berthelot' },
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
    preset: 'cloudflare_module', // Workers (recommended); use 'cloudflare_pages' if deploying to Pages
      cloudflare: {
        deployConfig: true,  // generates the wrangler config for you
        nodeCompat: true,     // enables nodejs_compat
        wrangler: {
          name: 'pixelscript-io-pixelscript-2'
        }
      },
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
  compatibilityDate: '2026-04-03',
  runtimeConfig: {
    anthropicApiKey: '',
    resendApiKey: '',
  },
  css: [
    '~/assets/css/tokens.css',
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
    'motion-v/nuxt',
    // 'nuxt-mail',
    'nuxt-gtag'
  ],
  gtag: {
    id: 'G-TK2LQS8XGY'
  },
  // mail: {
  //   message: {
  //     to: 'joe@pixelscript.io',
  //   },
  //   smtp: {
  //     host: "moose.mxrouting.net",
  //     port: 465,
  //   },
  // },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'ps-blue': {
              50: 'rgb(var(--ps-color-accent-soft-rgb) / <alpha-value>)',
              100: 'rgb(var(--ps-color-accent-rgb) / <alpha-value>)',
            },
            zinc: {
              50: 'rgb(var(--ps-color-neutral-50-rgb) / <alpha-value>)',
              100: 'rgb(var(--ps-color-neutral-100-rgb) / <alpha-value>)',
              200: 'rgb(var(--ps-color-neutral-200-rgb) / <alpha-value>)',
              300: 'rgb(var(--ps-color-neutral-300-rgb) / <alpha-value>)',
              400: 'rgb(var(--ps-color-neutral-400-rgb) / <alpha-value>)',
              500: 'rgb(var(--ps-color-neutral-500-rgb) / <alpha-value>)',
              600: 'rgb(var(--ps-color-neutral-600-rgb) / <alpha-value>)',
              700: 'rgb(var(--ps-color-neutral-700-rgb) / <alpha-value>)',
              800: 'rgb(var(--ps-color-neutral-800-rgb) / <alpha-value>)',
              900: 'rgb(var(--ps-color-neutral-900-rgb) / <alpha-value>)',
              950: 'rgb(var(--ps-color-neutral-950-rgb) / <alpha-value>)',
            },
          },
          fontFamily: {
            sans: ['var(--ps-font-sans)'],
            mono: ['var(--ps-font-mono)'],
          },
        },
      }
    }
  }
})
