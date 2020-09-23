<template>
  <div class="container_box_wuxibohr">
    <div class="container">
      <div class="inner">
        <img alt="无锡玻尔金属门窗工程有限公司"
             class="w-100"
             src="../../assets/images/location.jpg" />
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'location'
}
</script>
<style scoped>
.container_box_wuxibohr:before {
  content: "";
  background: url("../../assets/images/banner01.jpg") repeat-y;
  background-size: 100%;
  background-position: bottom center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
}
.container {
  position: relative;
  display: flex;
  justify-content: center;
}
.container .inner {
  width: 100%;
  margin: 80px 0;
  background: rgba(255, 255, 255, 0.9);
}
.container .inner img {
  width: 100%;
  height: auto;
}
.container .inner {
  background: rgba(255, 255, 255, 0.9);
  width: 85%;
  padding-bottom: 20px;
}

@media only screen and (max-width: 1200px) {
  .container .inner {
    margin: 70px 0;
  }
}
@media only screen and (max-width: 992px) {
  .container .inner {
    margin: 60px 0;
  }
}
@media only screen and (max-width: 768px) {
  .container .inner {
    margin: 50px 0;
  }
}
@media only screen and (max-width: 480px) {
  .container .inner {
    margin: 30px 0;
  }
}
@media only screen and (max-width: 320px) {
  .container .inner {
    margin: 20px 0;
  }
}
</style>
