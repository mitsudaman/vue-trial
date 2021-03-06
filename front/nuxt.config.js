const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/vue-trial/'
  }
} : {}

module.exports = {
  mode: 'spa',
  // router: {
  //   base: '/vue-trial/'
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'front',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { property: 'og:title', content: '時間割メーカー' },
      { property: 'og:type', content: 'website' },
      { property: 'og:description', content: '予定を立てて時間割を作ろう！' },
      { property: 'og:url', content: 'https://mitsudaman.github.io/vue-trial/TimeSchedule/' },
      { property: 'og:site_name', content: '時間割メーカー' },
      { property: 'og:image', content: '~/assets/img/mitsudama.png' },
      { property: 'og:title', content: 'TEST OGP TITLE' },
    ],
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@fortawesome/fontawesome-free/css/all.css',
  ],
  modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    ['bootstrap-vue/nuxt', { css: false }],
  ],
  ...routerBase
}

