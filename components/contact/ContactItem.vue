<template>
  <div class="container_box"
       :class="{container_box_padding:navindex===2}">
    <div class="container">
      <div class="card-deck services">
        <div class="card border-0 rounded-0"
             v-for="item in contactList"
             :key="item.id">
          <img class="w-100"
               :src="require('~/static/images/services' + item.id + '.png')">
          <div class="card-body text-center py-5">
            <h5 class="card-title font-weight-bold">{{item.h2}}</h5>
            <p class="card-text"
               v-for="(contactItem, index) in item.text"
               :key="index">
              {{contactItem}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'contact',
  data () {
    return {
    }
  },
  props: {
    contactList: Array,
    navindex: Number
  }
}
</script>
<style scoped>
.container_box_padding {
  padding-bottom: 0 !important;
}
.card-deck {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.card-deck .card {
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 5px;
  margin: 0 20px;
  padding: 20px;
}
.w-100 {
  width: 50px;
  margin: 0 auto;
  height: auto;
}
.text-center {
  text-align: center !important;
}
.font-weight-bold {
  font-weight: 700 !important;
}
.card-title {
  font-size: 0.8rem;
  margin-top: 30px;
  margin-bottom: 10px;
}
.card-text {
  line-height: 20px;
  font-size: 0.6rem;
}
@media only screen and (max-width: 1200px) {
  .card {
    margin: 0 18px;
    padding: 18px;
  }
  .w-100 {
    width: 45px;
  }
  .card-title {
    margin-top: 28px;
  }
}
@media only screen and (max-width: 992px) {
  .card {
    margin: 0 16px;
    padding: 16px;
  }
  .w-100 {
    width: 40px;
  }
  .card-title {
    margin-top: 26px;
  }
}
@media only screen and (max-width: 768px) {
  .card {
    margin: 0 14px;
    padding: 14px;
  }
  .w-100 {
    width: 35px;
  }
  .card-title {
    margin-top: 24px;
  }
}
@media only screen and (max-width: 480px) {
  .card-deck {
    flex-direction: column;
    align-items: center;
  }
  .card-deck .card {
    width: 60%;
    margin-bottom: 14px;
  }
  .w-100 {
    width: 30px;
  }
  .card-title {
    font-size: 0.7rem;
    margin-top: 22px;
  }
}
@media only screen and (max-width: 320px) {
  .card-deck {
    flex-direction: column;
    align-items: center;
  }
}
</style>
