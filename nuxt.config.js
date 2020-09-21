
export default {
  router: {
    base: '/',
    prefetchLinks: false,//全局禁用所有链接上的预取
  },
  render: {
    resourceHints: false,//添加prefetch和preload，以加快初始化页面加载时间。如果有许多页面和路由，可禁用此项
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no' },
      { hid: 'description', name: 'description', content: '无锡玻尔，专注于玻璃划痕、裂痕等修复，拥有高素质的专业施工人员，提供专业工程服务。' },
      { name: "keywords", content: "无锡玻尔,玻璃修复,玻璃修复工具" }
    ],
    link: [
      { rel: 'stylesheet', href: '/reset.css' },
      { rel: 'stylesheet', href: '/global.css' },
      { rel: 'icon', sizes: 'any', href: '/favicon.ico' }
    ],
    script: [
      {}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/element-ui' },
    { src: '~/plugins/vue-awesome-swiper.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) { },
    optimization: {},
    /**
    *打包独立css文件
    */
    extractCSS: true
  }
}
