<template>
  <el-carousel class="banner-wrap"
               :interval="5000"
               arrow="hover"
               :autoplay="true"
               :height="carouselHeight + 'px'">
    <el-carousel-item v-for="(item, index) in bannerList"
                      :key="index">
      <div class="imgwrapepr">
        <img :src="require('~/assets/images/banner' + item + '.jpg')">
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      carouselHeight: "680",
      bannerList: ["01", "02", "03"],
    }
  },
  mounted () {
    this.setSize();
    const that = this;
    //监听浏览器窗口大小改变
    window.addEventListener('resize', function () {
      that.setSize();
    }, false);
  },
  methods: {
    setSize: function () {
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.carouselHeight = 680 / 1920 * width - 10
    }
  }
};
</script>

<style lang="scss" scoped>
.banner-wrap {
  margin-top: 62px;
  overflow: hidden;
}
.imgwrapepr {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.bannerimg {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.wrapper {
  /deep/ .el-carousel__indicators--horizontal {
    bottom: 0px;
  }
}
img {
  width: 100%;
  height: 100%;
}
@media only screen and (max-width: 1200px) {
  .banner-wrap {
    margin-top: 56px;
  }
}
@media only screen and (max-width: 992px) {
  .banner-wrap {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 768px) {
  .banner-wrap {
    margin-top: 50px;
  }
}
@media only screen and (max-width: 480px) {
  .banner-wrap {
    margin-top: 46px;
  }
}
@media only screen and (max-width: 320px) {
}
</style>