<template>
  <div>
    <footer class="site_footer">
      <div class="site_footer_upper">
        <div class="container">
          <div class="row">
            <div class="footer_widget footer_widget_contact">
              <h1 class="footer_widget_title">无锡玻尔金属门窗工程有限公司®</h1>
              <div class="footer_widget_link">
                <div class="footer_widget_link_wrap">
                  <ul class="list_unstyled footer_widget_link_list">
                    <nuxt-link v-for="item in productList"
                               :key="item.id"
                               tag="li"
                               :to="{name: 'productDetail',query: { id: item.id }}">
                      <a href="#">{{item.h1}}</a>
                    </nuxt-link>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer_widget footer_widget_about">
              <div class="footer_widget_about_logo">
                <img alt="无锡玻尔金属门窗工程有限公司"
                     src="~/assets/images/logo.png" />
              </div>
              <div class="footer_widget_about_container">
                <p class="footer_widget_text"
                   v-for="item in aboutList"
                   :key="item.id">
                  <img :alt="item.p"
                       height="32"
                       :src="require('~/assets/images/services' + item.id + '.png')">
                  {{item.p}}
                  <span v-if="!isMini && item.id === '06'">(微信同号)</span>
                </p>
                <div class="footer_widget_about_container_QRcode"
                     v-if="!isMini">
                  <div class="footer_widget_about_container_QRcode_box"
                       v-for="item in QRcodeList"
                       :key="item.id">
                    <img :alt="item.p"
                         height="32"
                         :src="require('~/assets/images/QRcode' + item.id + '.jpg')">
                    <p class="footer_widget_text">{{item.p}}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site_footer_bottom">
        <div class="container">
          <div class="site_footer_box">
            <p class="site_footer_copy">
              <span href="#">www.wuxibohr.com</span>
            </p>
          </div>
          <div class="site_footer_social">
            <span href="#"
                  data-target="html"
                  class="scroll-to-target site_footer_scroll_top"
                  @click="scrollToTop()">
              <img alt="无锡玻尔金属门窗工程有限公司"
                   height="24"
                   src="../assets/images/up.png" />
            </span>
            <p class="site_footer_copy">&copy; Copyright 2020 无锡玻尔金属门窗工程有限公司
            </p>
            <p class="site_footer_copy">
              <a href="https://beian.miit.gov.cn/"
                 target="_blank">
                <img alt="无锡玻尔金属门窗工程有限公司"
                     height="12"
                     src="../assets/images/beian.png" /> 苏ICP备2020053658号-1</a>
            </p>
            <p class="site_footer_copy">
              <a href="http://www.beian.gov.cn/portal/recordQuery"
                 target="_blank">苏公网安备 32028202001007号</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "FooterComponent",
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
      aboutList: [
        {
          id: "05",
          p: "无锡市梁溪区江海东路148号-3076"
        },
        {
          id: "06",
          p: "张先生 153 0056 2173"
        },
        {
          id: "07",
          p: "522625a00dm.cdb艾特sina.cn"
        },
      ],
      QRcodeList: [
        {
          id: "01",
          p: "张文"
        },
        {
          id: "02",
          p: "张洪成"
        }
      ],
      isMini: false
    }
  },
  mounted () {
    if (this.$route.query.program === "isMini") {
      this.isMini = true;
    }
  },
  methods: {
    scrollToTop () {
      scrollTo(0, 0);
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  .row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
}
.site_footer {
  background-color: #022c46;
  overflow: hidden;
  &_bottom {
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex: 0 1 auto;
      .row {
        display: flex;
        flex-wrap: wrap;
      }
    }

    background-color: #012237;
  }

  &_copy {
    color: #94a3ac;
    font-size: 0.6rem;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    margin: 15px 0;
    span {
      color: #f16101;
      margin-left: 10px;
      transition: all 0.4s ease;
      font-size: 1rem;
      &:hover {
        color: #fff;
      }
    }
  }
  &_box {
    width: 30%;
    .site_footer_copy {
      padding-right: 40px;
    }
  }
  &_social {
    width: 70%;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 150%;
      height: 100%;
      background-color: #022c46;
    }
  }

  &_scroll_top {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    position: absolute !important;
    top: 0;
    left: 0;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    i {
      font-size: 22px;
      color: #012237;
    }
    img {
      width: 60%;
      height: auto;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: -5px;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 2px solid #fff;
      transition: all 0.4s ease;
      box-sizing: border-box;
    }

    &:hover {
      color: #f16101;

      &:before {
        left: 0;
      }
    }
  }
}

.footer_widget {
  width: 30%;
  padding-top: 40px;
  padding-bottom: 20px;

  .list_unstyled {
    margin: 0;
  }

  &_text {
    margin: 0;
    font-size: 0.6rem;
    line-height: 30px;
    color: #94a3ac;
    margin-top: -10px;
  }

  &_about {
    position: relative;
    width: 70%;
    display: flex;
    &::before {
      content: "";
      width: 150%;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: #012237;
    }
    &_logo {
      width: 25%;
      padding-left: 30px;
      flex-shrink: 0;
      text-align: center;
      img {
        width: 80%;
        height: auto;
      }
    }
    &_container {
      width: 75%;
      padding-left: 30px;
      img {
        width: 18px;
        height: auto;
        margin-right: 15px;
      }
      p {
        line-height: 50px;
      }
      &_QRcode {
        width: 100%;
        display: flex;
        justify-content: space-around;
        &_box {
          width: 30%;
          img {
            width: 100%;
            height: auto;
            margin: 0;
            padding: 5px;
            box-sizing: border-box;
          }
          .footer_widget_text {
            text-align: center;
          }
        }
      }
    }
    * {
      position: relative;
    }
  }

  &_title {
    margin: 0;
    color: #ffffff;
    font-size: 0.8rem;
    font-weight: bold;
    line-height: 1em;
    margin-bottom: 24px;
  }

  &_link_wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &_link {
    position: relative;
  }

  &_link_list {
    li {
      line-height: 1em;

      + li {
        margin-top: 20px;
      }

      a {
        color: #94a3ac;
        font-size: 0.6rem;
        font-weight: 500;
        transition: all 0.4s ease;

        &:hover {
          color: #f16101;
        }
      }
    }
  }
}
@media only screen and (max-width: 1200px) {
  .footer_widget {
    padding-top: 36px;
    padding-bottom: 18px;
  }
  .footer_widget_title {
    line-height: 0.9em;
    margin-bottom: 22px;
  }
  .footer_widget_link_list li + li {
    margin-top: 18px;
  }
  .footer_widget_text img {
    width: 16px;
  }
  .footer_widget_about_container p {
    line-height: 46px;
  }
  .site_footer_scroll_top {
    width: 36px;
    height: 36px;
  }
}
@media only screen and (max-width: 992px) {
  .footer_widget {
    padding-top: 32px;
    padding-bottom: 16px;
  }
  .footer_widget_link_list li + li {
    margin-top: 16px;
  }
  .footer_widget_text img {
    width: 14px;
  }
  .footer_widget_about_container p {
    line-height: 42px;
  }
  .site_footer_scroll_top {
    width: 32px;
    height: 32px;
  }
}
@media only screen and (max-width: 768px) {
  .footer_widget {
    padding-top: 30px;
    padding-bottom: 15px;
  }
  .container .row,
  .site_footer_bottom .container {
    flex-direction: column;
  }
  .footer_widget {
    width: 100%;
  }
  .footer_widget_about::before {
    width: 100%;
    background-color: #022c46;
  }
  .footer_widget_link_list li + li {
    margin-top: 15px;
  }
  .footer_widget_text img {
    width: 13px;
  }
  .footer_widget_about_container p {
    line-height: 40px;
  }
  .site_footer_box {
    display: none;
  }
  .site_footer_social {
    width: 100%;
  }
  .site_footer_social::before {
    left: -50%;
    background-color: #012237;
  }
  .site_footer_scroll_top {
    left: 20px;
    width: 28px;
    height: 28px;
  }
}
@media only screen and (max-width: 480px) {
  .footer_widget {
    padding-top: 28px;
    padding-bottom: 14px;
  }
  .footer_widget_about_logo {
    display: none;
  }
  .footer_widget_about_container {
    width: 100%;
    padding-left: 0;
  }
  .site_footer_scroll_top {
    width: 25px;
    height: 25px;
  }
}
@media only screen and (max-width: 320px) {
  .footer_widget {
    padding-top: 26px;
    padding-bottom: 13px;
  }
  .site_footer_scroll_top {
    width: 24px;
    height: 24px;
  }
}
</style>
