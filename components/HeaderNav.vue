<template>
  <div>
    <header class="header clear">
      <nav class="navbar container"
           v-show="navshow">
        <nuxt-link tag="a"
                   to="/"
                   class="navbar-brand">
          <img alt="无锡玻尔金属门窗工程有限公司"
               height="32"
               src="~/static/logo.png" />
        </nuxt-link>
        <a>
        </a>
        <ul class="menu clear">
          <nuxt-link v-for="item in linkList"
                     :key="item.id"
                     tag="li"
                     :to="item.url"
                     :class="{fff:navindex===item.id}">{{item.name}}</nuxt-link>
        </ul>
        <span class="more"
              @click="downmenuClick()">
          <div class="icon-twrap"
               p-id="599">
            <svg class="icon"
                 style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
                 viewBox="0 0 1024 1024"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 p-id="601">
              <path d="M925 811H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.4-17.7 16.4-29.7 15.7zM925 534.7H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.3-17.7 16.4-29.7 15.7zM925 279.7H99.5c-12 0.7-23.5-5.3-29.7-15.7-6.2-10.3-6.2-23.3 0-33.6s17.7-16.4 29.7-15.7H925c12-0.7 23.5 5.3 29.7 15.7 6.2 10.3 6.2 23.3 0 33.6-6.3 10.3-17.7 16.4-29.7 15.7z"
                    p-id="602" />
            </svg>
          </div>
        </span>
      </nav>
    </header>
    <nav class="nav-down"
         v-show="downmenuShow">
      <ul class="downmenu">
        <nuxt-link v-for="item in linkList"
                   :key="item.id"
                   tag="li"
                   :to="item.url"
                   :class="{fff:navindex===item.id}">{{item.name}}</nuxt-link>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'HeaderNav',
  data () {
    return {
      downmenuShow: false,
      navshow: true,
      height: 0,
      timer: null,
      linkList: [
        {
          id: 0,
          url: "/",
          name: "首页"
        },
        {
          id: 1,
          url: "/product",
          name: "产品中心"
        },
        {
          id: 2,
          url: "/business",
          name: "服务支持"
        },
        {
          id: 3,
          url: "/about",
          name: "关于我们"
        },
        {
          id: 4,
          url: "/contact",
          name: "联系我们"
        }
      ]
    }
  },
  props: {
    navindex: Number
  },
  mounted () {
  },
  methods: {
    downmenuClick () {
      this.downmenuShow = !this.downmenuShow
    }
  }

}
</script>
<style scoped lang="scss">
.clear::after {
  content: "";
  display: block;
  clear: both;
}
.fff {
  color: #fa541c !important;
  pointer-events: none;
}
header {
  position: fixed;
  background: #fff;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  color: #000;
}
.navbar {
  height: 62px;
  margin: 0 auto;
}
.navbar-brand {
  display: inline-block;
  padding: 8px;
  box-sizing: border-box;
}
.header .navbar-brand {
  float: left;
  height: 100%;
}
.header .navbar-brand img {
  height: 100%;
  width: auto;
  vertical-align: middle;
  border-style: none;
}
.menu {
  float: right;
  height: 100%;
}
.menu li {
  float: left;
  padding: 21px 17px;
  font-size: 0.8rem;
  cursor: pointer;
}
.nav-down ul li {
  text-align: right;
}
.more {
  display: none;
  border: 1px solid #cccccc;
  padding: 10px;
  z-index: 100;
  position: fixed;
  top: 5px;
  right: 5px;
  .icon-twrap {
    font-size: 0.6rem;
  }
}
.nav-down {
  z-index: 100;
  position: fixed;
  top: 46px;
  right: 0;
  background: rgba(1, 34, 55, 0.5);
  color: #fff;
}
.downmenu li {
  margin: 14px;
  font-size: 0.6rem;
  cursor: pointer;
}
header li:hover,
.nav-down li:hover {
  color: #fa541c;
}
@media only screen and (max-width: 1200px) {
  .navbar {
    height: 56px;
  }
  .menu li {
    padding: 21px 12px;
  }
}
@media only screen and (max-width: 992px) {
  .navbar {
    height: 50px;
  }
  .menu li {
    padding: 17px 12px;
  }
}
@media only screen and (max-width: 768px) {
  .menu li {
    padding: 17px 8px;
  }
}
@media screen and (min-width: 480px) {
  .nav-down {
    display: none;
  }
}
@media only screen and (max-width: 480px) {
  .menu,
  .language {
    display: none;
  }
  .more {
    display: block;
  }
  .nav-down {
    overflow: hidden;
    animation: mymove 0.5s;
  }
  @keyframes mymove {
    from {
      height: 0px;
    }
    to {
      height: 144px;
    }
  }
  .navbar {
    height: 46px;
  }
}
</style>
