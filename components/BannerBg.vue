<template>
  <div class="container_box"
       :style="styleObj">
    <div class="container">
      <div class="inner">
        <h2 class="divider">
          {{BgObj.h2}}
          <span></span>
        </h2>
        <p>{{BgObj.p}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bannerBg',
  props: {
    BgObj: Object
  },
  data () {
    return {
      styleObj: '',
    }
  },
  mounted () {
    this.styleObj = { backgroundImage: `url(${this.BgObj.background})`, height: '680px' }
    this.setSize();
    const that = this;
    //监听浏览器窗口大小改变
    window.addEventListener('resize', function () {
      that.setSize();
    }, false);
  },
  methods: {
    setSize: function () {
      console.log("改变窗口大小！！");
      var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      this.styleObj.height = (680 / 1920 * width - 20) + 'px';
      if (width < 780) {
        this.styleObj.height = (680 / 1920 * width - 35) + 'px';
      }
      if (width < 480) {
        this.styleObj.height = (680 / 1920 * width - 40) + 'px';
      }
    }
  }
}
</script>
<style scoped lang="scss">
.container_box {
  background-position: 0 62px;
  background-size: 100% auto;
  background-attachment: fixed;
  background-repeat: no-repeat;
  margin-top: 62px;
  position: relative;
}
.container_box:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(3px);
  filter: brightness(40%);
  z-index: 2;
}
.container {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 3;
}
.container .inner {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
}
.container .inner .divider {
  padding-bottom: 20px;
  font-size: 2rem;
  position: relative;
  span {
    width: 10%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    border-bottom: 2px solid white;
  }
}
.container .inner p {
  padding: 15px 0;
  font-size: 0.7rem;
}
@media only screen and (max-width: 1200px) {
  .container_box {
    background-position: 0 56px;
    margin-top: 56px;
  }
}
@media only screen and (max-width: 992px) {
  .container_box {
    background-position: 0 50px;
    margin-top: 50px;
  }
}
@media only screen and (max-width: 768px) {
  .container_box {
    background-position: 0 50px;
    margin-top: 50px;
  }
}
@media only screen and (max-width: 480px) {
  .container_box {
    background-position: 0 46px;
    margin-top: 46px;
  }
  .container .inner .divider {
    font-size: 1.5rem;
    padding-bottom: 14px;
  }
  .container .inner p {
    font-size: 0.5rem;
    padding: 8px 0;
  }
}
@media only screen and (max-width: 320px) {
}
</style>
