<template>
  <div class="container_box">
    <div class="container">
      <div class="main"
           v-for="item in businessList"
           :key="item.id">
        <div class="main-inner">
          <h1>
            <strong>{{item.h1}}</strong>
          </h1>
          <hr />
          <p class="text-muted">{{item.p}}</p>
        </div>
        <div class="box">
          <img :alt="item.p"
               :src="require('~/assets/images/business' + item.id + '.jpg')">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'business',
  data () {
    return {
      businessList: [
        {
          id: "01",
          h1: "1、划痕修复按“点”计算",
          p: "划痕修复按“点”计算，一个“点”为20公分乘以20公分，无论一个划痕还是很多划痕还是电焊烫伤，只要是在20公分乘以20公分以内，即视为一个“点”。",
        },
        {
          id: "02",
          h1: "2、轻微划痕的判断标准",
          p: "能看到，但是感觉不到的。",
        },
        {
          id: "03",
          h1: "3、一般性划痕的判断标准",
          p: "能看到、用指甲可以感觉到的。",
        },
        {
          id: "04",
          h1: "4、严重划痕的判断标准",
          p: "能看到、用手指肚也能感觉到的以及电焊烫伤。",
        },
        {
          id: "05",
          h1: "5、修复后的验收标准",
          p: "基本验收标准为----距离玻璃修复区域一米处，平视，修复区域达到玻璃原有状态，看不到划痕（可接受修复后的玻璃变形）；中级验收标准为----距离玻璃修复区域50公分位置，可左右移动视线，但视线移动范围不超过垂直于玻璃的正负30度角，修复区域达到玻璃原有状态，看不到划痕及明显变形；高级验收标准：距离玻璃修复区域20公分位置，可左右移动视线，但视线移动范围不超过垂直于玻璃的正负45度角，修复区域达到玻璃原有状态，看不到划痕及明显变形。",
        },
        {
          id: "06",
          h1: "6、收费标准",
          p: "轻微划痕修复为80元一个点，一般性划痕修复为120元一个点，严重划痕及电焊烫伤为150元一个点（以中级验收标准验收）。",
        },
        {
          id: "07",
          h1: "7、上门修复",
          p: "上门修复，修复点越多，对于客户和我们，都是更加划算。如果划痕点很少，差旅费、食宿、工时等等都是浪费。所以我们的上门修复的起步点为50个点，少于50个点按照50个点计算。（我们员工一天的修复量是50个点（轻微划痕修复施工），所以，必须达到相同于他一天的修复量或者相同于一天的修复量的同等的工时费用，才能考虑上门修复）",
        },
        {
          id: "08",
          h1: "8、产品优势",
          p: "专业施工人员，快速反应。银行开业、样板房验收（更换玻璃时间来不及）；高级别墅、楼宇的玻璃无法更换；等等类似的，要求高、时间紧、无法换、可保质保量完成突击施工。"
        }
      ]
    }
  },
}
</script>
<style scoped>
.main {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.main-inner {
  background: #fff;
  padding: 0 40px;
  width: 40%;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15) !important;
}
.main h1 {
  font-size: 1.3rem;
  font-weight: bolder;
  margin-top: 0.53rem;
  margin-bottom: 0.53rem;
}
.main p {
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  margin-top: 0;
  margin-bottom: 20px;
  text-indent: 2em;
}
.box {
  width: 60%;
  text-align: right;
}
.box img {
  display: inline-block;
  width: 80%;
  margin: 0 auto;
  height: auto;
}
@media only screen and (max-width: 1200px) {
  .main {
    margin-top: 8px;
  }
}
@media only screen and (max-width: 992px) {
  .main {
    margin-top: 6px;
  }
  .main-inner {
    padding: 0 36px;
  }
}
@media only screen and (max-width: 768px) {
  .main {
    margin-top: 4px;
  }
  .main-inner {
    padding: 0 32px;
  }
}
@media only screen and (max-width: 480px) {
  .main {
    margin-top: 2px;
    flex-direction: column;
    align-items: center;
  }
  .main-inner {
    width: 80%;
  }
  .box,
  .box img {
    width: 100%;
    margin-bottom: 12px;
  }
}
</style>
