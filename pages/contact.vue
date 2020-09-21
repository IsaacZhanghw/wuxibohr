<template>
  <div>
    <header-nav :navindex="4"></header-nav>
    <banner-Bg :BgObj="BgObj"></banner-Bg>
    <contact-item :contactList="contactList"></contact-item>
    <location></location>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import BannerBg from '~/components/BannerBg'
import ContactItem from '~/components/contact/ContactItem'
import location from '~/components/contact/location'

import background from "~/static/images/bannerBg04.jpg";

export default {
  head () {
    return {
      title: '联系我们 | 无锡玻尔'
    }
  },
  data () {
    return {
      BgObj: {
        id: "04",
        h2: '联 系 我 们',
        p: '我们珍惜您每一次的联系，冀望将来光辉的前景',
        background: background
      },
      contactList: [
        {
          id: "05",
          h2: "地址",
          text: ["无锡市梁溪区江海东路148号-3076"]
        },
        {
          id: "06",
          h2: "电话",
          text: ["张先生 153 0056 2173(微信同号)"]
        },
        {
          id: "07",
          h2: "邮箱",
          text: ["522625a00dm.cdb@sina.cn"]
        }
      ]
    }
  },
  mounted () { },
  layout: 'default',
  components: {
    HeaderNav,
    BannerBg,
    ContactItem,
    location
  }
}
</script>

<style>
</style>
