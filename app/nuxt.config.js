export default {
  head: {
    title: 'nuxt-skeleton',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [],

  plugins: [],

  components: false,

  buildModules: ['@nuxtjs/eslint-module', 'nuxt-vite', '@nuxtjs/stylelint-module'],

  modules: [
    '@nuxtjs/axios',
    '~/modules/users/index.js',
  ],

  axios: {},

  build: {},

  vite: {
    ssr: true,
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL
  }
}
