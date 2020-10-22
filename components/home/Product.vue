<template>
  <div class="container_box">
    <div class="container">
      <div class="card-deck services">
        <nuxt-link class="card border-0 rounded-0"
                   v-for="item in list"
                   :key="item.id"
                   :to="{name: 'productDetail',query: { id: item.id }}"
                   tag="div">
          <img :alt="item.h1"
               class="w-100"
               :src="require('~/assets/images/project' + item.id + '.jpg')">
          <h5 class="card-title font-weight-bold">{{item.h1}}</h5>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Product',
  props: {
    list: Array
  }
}
</script>
<style scoped>
.card-deck {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  justify-content: space-between;
}
.card-deck .card {
  width: 32%;
}
.card {
  position: relative;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  text-align: center;
}
.w-100 {
  transition: all 0.6s;
  cursor: pointer;
}
.w-100:hover {
  transform: scale(1.02);
}

img {
  vertical-align: middle;
  border-style: none;
  height: auto;
  width: 100%;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.card-title {
  font-size: 0.7rem;
  margin: 30px 0;
}
.card-text:last-child {
  margin-bottom: 0;
}
.card-text {
  padding-bottom: 30px;
}
@media only screen and (max-width: 1200px) {
  .card-title {
    margin: 26px 0;
  }
}
@media only screen and (max-width: 992px) {
  .card-title {
    margin: 22px 0;
  }
}
@media only screen and (max-width: 768px) {
  .card-title {
    margin: 18px 0;
  }
  .card-deck .card {
    width: 48%;
  }
}
@media only screen and (max-width: 480px) {
  .card-title {
    margin: 16px 0;
    font-size: 0.6rem;
  }
}
@media only screen and (max-width: 320px) {
  .card-deck {
    flex-direction: column;
    align-items: center;
  }
  .card-title {
    margin: 14px 0;
  }
  .card-deck .card {
    width: 80%;
  }
}
</style>
