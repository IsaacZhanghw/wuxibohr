<template>
  <div>
    <header-nav :navindex="0"></header-nav>
    <banner></banner>
    <product :list="productList"></product>
    <Partner :navindex="0"></Partner>
    <wuxi-bohr></wuxi-bohr>
    <contact-item :contactList="contactList"></contact-item>
  </div>
</template>

<script>
import HeaderNav from '~/components/HeaderNav'
import Banner from '~/components/home/Banner'
import Product from '~/components/home/Product'
import Partner from '~/components/home/Partner'
import ContactItem from '~/components/contact/ContactItem'
import WuxiBohr from '~/components/home/WuxiBohr'

export default {
  head () {
    return {
      title: '无锡玻尔 - 玻璃修复专家'
    }
  },
  data () {
    return {
      productList: [
        {
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
          h1: "精装房玻璃划痕修"
        }
      ],
      contactList: [
        {
          id: "01",
          h1: "优质服务",
          text: ["提升客户服务质量，以细致关怀感动客户，以成本最优实现服务最优"]
        },
        {
          id: "02",
          h1: "主动服务",
          text: ["先客户之想而想，先客户之急而急；主动定期电话回访，及时发现和处理问题，主动服务"]
        },
        {
          id: "03",
          h1: "服务团队",
          text: ["完善的售后服务团队，多样化的服务方式，7x24小时服务热线给您提供最满意的服务"]
        }
      ]
    }
  },
  mounted () { },
  layout: 'default',
  components: {
    HeaderNav,
    Banner,
    Product,
    Partner,
    ContactItem,
    WuxiBohr
  }
}
</script>

<style>
</style>
