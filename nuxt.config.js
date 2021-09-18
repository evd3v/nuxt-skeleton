import path from 'path';

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

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [
    '@nuxtjs/axios',
    '~/modules/users/index.js',
    '~/modules/home/index.js',
  ],

  eslint: {
    cache: false,
    lintDirtyModulesOnly: false,
  },

  axios: {},

  build: {},

  alias: {
    '@users': path.resolve(__dirname, 'modules/users'),
    '@global/components': path.resolve(__dirname, 'components/global'),
    '@shared/components': path.resolve(__dirname, 'components/_shared'),
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  },
};
