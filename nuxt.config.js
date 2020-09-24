export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no' },
      { name: "keywords", content: "无锡玻尔,无锡玻尔金属门窗工程有限公司,玻璃修复,玻璃修复技术,玻璃修复工具,玻璃修复液,哪里有玻璃修复" },
      { hid: 'description', name: 'description', content: '无锡玻尔金属门窗工程有限公司，专注于玻璃划痕、裂痕等修复，拥有高素质的专业施工人员，提供专业工程服务。' }
    ],
    link: [
      { rel: 'stylesheet', href: '/reset.css' },
      { rel: 'stylesheet', href: '/global.css' },
      { rel: 'icon', sizes: 'any', href: '/favicon.ico' }
    ],
    script: [
      // { type: "text/javascript", charset: "utf-8", src: "http://push.zhanzhang.baidu.com/push.js" },// 百度自动收录
      // { type: "text/javascript", charset: "utf-8", src: "https://s.ssl.qhres.com/ssl/ab77b6ea7f3fbf79.js", id: "sozz" }// 360自动收录
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '@/plugins/element-ui' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: [/^element-ui/],
    extend (config, ctx) { },
    optimization: {},
    babel: {
      plugins: [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    /**
    *打包独立css文件
    */
    extractCSS: true
  }
}
