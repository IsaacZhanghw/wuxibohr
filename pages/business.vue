<template>
  <div>
    <header-nav :navindex="2"></header-nav>
    <banner-Bg :BgObj="BgObj"></banner-Bg>
    <contact-item :contactList="contactList"
                  :navindex="2"></contact-item>
    <business-item></business-item>
    <wuxi-bohr></wuxi-bohr>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import BannerBg from '~/components/BannerBg'
import BusinessItem from '~/components/business/BusinessItem'
import ContactItem from '~/components/contact/ContactItem'
import WuxiBohr from '~/components/home/WuxiBohr'

import background from "~/assets/images/bannerBg02.jpg";

export default {
  head () {
    return {
      title: '服务支持 | 无锡玻尔'
    }
  },
  data () {
    return {
      BgObj: {
        id: "02",
        h2: '服 务 支 持',
        p: '优秀的修复团队，可上门修复。提前沟通，量身服务',
        background: background
      },
      contactList: [
        // {
        //   id: 1,
        //   url: services01,
        //   h2: "差异化服务",
        //   text: ["用心细分市场，精心设计方案，不断推出适应客户需求的多样化产品，为客户提供量身定做的服务"]
        // },
        {
          id: "01",
          h2: "优质服务",
          text: ["提升客户服务质量，以细致关怀感动客户，以成本最优实现服务最优"]
        },
        {
          id: "02",
          h2: "主动服务",
          text: ["先客户之想而想，先客户之急而急；主动定期电话回访，及时发现和处理问题，主动服务"]
        },
        {
          id: "03",
          h2: "服务团队",
          text: ["完善的售后服务团队，多样化的服务方式，7x24小时服务热线给您提供最满意的服务"]
        }
      ]
    }
  },
  layout: 'default',
  components: {
    HeaderNav,
    BannerBg,
    ContactItem,
    BusinessItem,
    WuxiBohr
  }
}
</script>

<style>
</style>
