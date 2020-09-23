<template>
  <div>
    <header-nav :navindex="3"></header-nav>
    <banner-Bg :BgObj="BgObj"></banner-Bg>
    <Main></Main>
    <Partner></Partner>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import BannerBg from '~/components/BannerBg'
import Partner from '~/components/home/Partner'
import Main from '~/components/about/Main'

import background from "~/assets/images/bannerBg03.jpg";

export default {
  head () {
    return {
      title: '关于我们 - 无锡玻尔'
    }
  },
  data () {
    return {
      BgObj: {
        id: "03",
        h1: '无 锡 玻 尔',
        p: '专注玻璃划痕、裂痕修复，玻璃修复专家',
        background: background
      }
    }
  },
  layout: 'default',
  components: {
    HeaderNav,
    BannerBg,
    Partner,
    Main
  }
}
</script>

<style>
</style>
