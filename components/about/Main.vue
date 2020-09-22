<template>
  <div class="container_box_wuxibohr">
    <div class="container">
      <div class="container-inner">
        <h2>
          <strong>无锡玻尔金属门窗工程有限公司</strong>
        </h2>
        <p class="text-muted">成功源于共享，创新成就未来</p>
        <hr />
        <p>
          <strong>无锡玻尔金属门窗工程有限公司</strong>是一家专注于玻璃划痕、裂痕修复，拥有高素质的专业施工人员，提供专业工程服务的公司。
        </p>
        <p>
          玻尔在技术方面经过长期专业施工，结合工业技术进步，已成功形成可以简单、快速、经济、完美修复玻璃材质表面上瑕疵（如：划痕、玻璃起碱、酸性腐蚀、钢化后产生的白雾、以及涂鸦、焊点等等）的修复施工方案，并提供完善的玻璃划痕修复施工服务。公司在发展的过程中，结合专业知识与市场的反馈，继续改进施工工艺，严格管理，提高服务品质，我们将不断努力，愿为广大朋友提供优质的服务。
        </p>
      </div>
      <div class="box">
        <img :src="wuxibohr" />
      </div>
    </div>
  </div>
</template>
<script>
import wuxibohr from "~/assets/images/wuxibohr.jpg";
export default {
  name: 'about',
  data () {
    return {
      wuxibohr: wuxibohr
    }
  },
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
  display: flex;
  width: 80%;
  margin: 50px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
}
.container-inner {
  padding-right: 20px;
  width: 60%;
  box-sizing: border-box;
}
.container h2 strong {
  display: inline-block;
  font-size: 1.4rem;
  font-weight: bolder;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
}
.container p {
  font-size: 0.6rem;
  line-height: 32px;
  color: #212529;
  text-align: left;
  margin-top: 0;
  text-indent: 2em;
}
.box {
  width: 40%;
  margin-top: 40px;
}
.box img {
  width: 100%;
  height: auto;
}
@media only screen and (max-width: 1200px) {
  .container {
    margin: 40px auto;
  }
}
@media only screen and (max-width: 992px) {
  .container {
    margin: 36px auto;
  }
  .container h2 strong {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .container p {
    line-height: 26px;
  }
}
@media only screen and (max-width: 768px) {
  .container {
    margin: 32px auto;
  }
  .container h2 strong {
    margin-top: 0.7rem;
    margin-bottom: 0.7rem;
    line-height: 32px;
  }
  .container p {
    line-height: 24px;
  }
}
@media only screen and (max-width: 480px) {
  .container {
    margin: 28px auto;
    flex-direction: column;
  }
  .container-inner {
    width: 100%;
    padding: 0;
    margin-bottom: 14px;
  }
  .box {
    width: 100%;
    margin-top: 0;
  }
  .container h2 strong {
    margin-top: 0.65rem;
    margin-bottom: 0.65rem;
  }
  .container p {
    line-height: 22px;
  }
}
</style>
