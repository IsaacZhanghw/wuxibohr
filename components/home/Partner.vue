<template>
  <div class="container_box"
       :class="{container_box_padding:navindex===0}">
    <div class="container">
      <h2 class="text-center">合作伙伴</h2>
      <p class="text-center">很荣幸，能与众多行业优秀客户共同成长</p>
      <div class="row">
        <img :src="require('~/static/images/partner' + item + '.png')"
             class="item"
             v-for="item in partnerList"
             :key="item.id" />
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Partner',
  data () {
    return {
      partnerList: ["01", "02", "03", "04", "05", "06", "07", "08"]
    }
  },
  props: {
    navindex: Number
  }
}
</script>
<style scoped>
.container_box_padding {
  padding-top: 0 !important;
}
.container {
  background: #ffffff;
}
.container h2 {
  font-weight: 500;
  font-size: 1.6rem;
  padding-top: 30px;
  padding-bottom: 10px;
}
.container p {
  font-size: 0.7rem;
}
.text-center {
  text-align: center;
}
.row {
  width: 70%;
  padding-top: 10px;
  margin: 0 auto;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding-bottom: 40px;
  align-items: center;
  justify-content: space-around;
}
.item {
  width: 23%;
}
img {
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin-top: 10px;
  box-sizing: border-box;
}
@media only screen and (max-width: 992px) {
  .container h2 {
    padding-top: 26px;
    padding-bottom: 8px;
  }
  .row {
    padding-top: 8px;
    padding-bottom: 34px;
  }
}
@media only screen and (max-width: 768px) {
  .container h2 {
    padding-top: 24px;
    padding-bottom: 6px;
  }
  .row {
    padding-top: 6px;
    padding-bottom: 30px;
  }
  .item {
    width: 33%;
  }
}
@media only screen and (max-width: 480px) {
  .container h2 {
    font-size: 1.2rem;
    padding-top: 24px;
    padding-bottom: 4px;
  }
  .container p {
    font-size: 0.6rem;
  }
}
@media only screen and (max-width: 320px) {
  .card-deck {
    flex-direction: column;
    align-items: center;
  }
  .container h2 {
    padding-top: 20px;
  }
  .row {
    padding-bottom: 20px;
  }
  .item {
    width: 48%;
  }
}
</style>
