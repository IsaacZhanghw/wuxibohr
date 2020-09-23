<template>
  <div>
    <header-nav :navindex="1"></header-nav>
    <banner-Bg :BgObj="BgObj"></banner-Bg>
    <product :list="productList"></product>
    <wuxi-bohr></wuxi-bohr>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import BannerBg from '~/components/BannerBg'
import Product from '~/components/home/Product'
import WuxiBohr from '~/components/home/WuxiBohr'

import background from "~/assets/images/bannerBg01.jpg";

export default {
  head () {
    return {
      title: '产品中心 | 无锡玻尔'
    }
  },
  data () {
    return {
      BgObj: {
        id: "01",
        h1: '产 品 中 心',
        p: '省钱 | 保值 | 无损 | 高效 | 坚固 | 环保',
        background: background
      },
      productList: [{
        id: "01",
        h1: "汽车展厅钢化玻璃划痕"
      },
      {
        id: "02",
        h1: "钢化玻璃划痕"
      },
      {
        id: "03",
        h1: "厨具类钢化玻璃划痕"
      },
      {
        id: "04",
        h1: "钢化玻璃电焊烫伤"
      },
      {
        id: "05",
        h1: "门窗玻璃划痕"
      },
      {
        id: "06",
        h1: "玻璃裂痕修复树脂胶水"
      },
      {
        id: "07",
        h1: "汽车玻璃长条裂痕"
      },
      {
        id: "08",
        h1: "玻璃星型裂痕"
      },
      {
        id: "09",
        h1: "玻璃牛眼型裂痕"
      },
      {
        id: "10",
        h1: "玻璃严重电焊炸伤修复"
      }]
    }
  },
  mounted () { },
  layout: 'default',
  components: {
    HeaderNav,
    BannerBg,
    Product,
    WuxiBohr
  }
}
</script>

<style>
</style>
