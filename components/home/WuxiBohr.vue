<template>
  <div class="container_box_wuxibohr">
    <div class="container">
      <div class="inner">
        <h2>
          <strong>无锡玻尔金属门窗工程有限公司<sup>®</sup>
          </strong>
        </h2>
        <hr />
        <p>专注于玻璃划痕、裂痕修复，拥有高素质的专业施工人员，提供专业工程服务。玻尔在技术方面经过长期专业施工，结合工业技术进步，已成功形成可以简单、快速、经济、完美修复玻璃材质表面上瑕疵的修复施工方案，并提供完善的玻璃划痕修复施工服务。</p>
        <p>公司在发展的过程中，结合专业知识与市场的反馈，继续改进施工工艺，严格管理，提高服务品质，我们将不断努力，愿为广大朋友提供优质的服务。</p>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  name: 'WuxiBohr'
}
</script>
<style scoped>
.container_box_wuxibohr:before {
  content: "";
  background: url("../../static/images/banner01.jpg") repeat-y;
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
  background: rgba(255, 255, 255, 0.9);
  margin: 80px 0;
  width: 85%;
  padding-bottom: 20px;
}
.container .inner h2 {
  padding: 20px 10px;
  text-align: center;
  font-size: 1rem;
}
.container .inner h2 strong {
  font-size: 1rem;
  font-weight: bold;
}
.container .inner p {
  padding: 0 20px;
  font-size: 0.7rem;
  line-height: 32px;
  text-indent: 2em;
}
@media only screen and (max-width: 1200px) {
  .container .inner {
    margin: 70px 0;
    padding-bottom: 16px;
  }
  .container .inner h2 {
    padding: 18px 9px;
  }
  .container .inner p {
    padding: 0 18px;
    line-height: 28px;
  }
}
@media only screen and (max-width: 992px) {
  .container .inner {
    margin: 60px 0;
    padding-bottom: 14px;
  }
  .container .inner h2 {
    padding: 16px 8px;
  }
  .container .inner p {
    padding: 0 16px;
    line-height: 26px;
  }
}
@media only screen and (max-width: 768px) {
  .container .inner {
    margin: 50px 0;
    padding-bottom: 12px;
  }
  .container .inner h2 {
    padding: 14px 7px;
  }
  .container .inner p {
    padding: 0 14px;
    line-height: 24px;
  }
}
@media only screen and (max-width: 480px) {
  .container .inner {
    width: 100%;
    margin: 30px 0;
    padding-bottom: 8px;
  }
  .container .inner h2 {
    padding: 12px 0;
  }
  .container .inner h2 strong {
    font-size: 0.9rem;
  }
  .container .inner p {
    font-size: 0.6rem;
  }
}
@media only screen and (max-width: 320px) {
  .container .inner {
    margin: 20px 0;
  }
}
</style>
