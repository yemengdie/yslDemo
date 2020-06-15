<template>
  <el-container>
    <el-main>
      <div>
        <div class="Header">
          <div class="header-container float-clearfix">
            <div class="header-content">
              <div class="header-content-wrap">
                <ul>
                  <li class="header-counter-inquiry">
                    <p>
                      <i class="icon icon-counter-inquiry"></i>
                      <span>专柜查询</span>
                    </p>
                  </li>
                  <li class="header-account">
                    <p>
                      <span>客服中心</span>
                    </p>
                  </li>
                </ul>
                <ol>
                  <li class="header-subscribe-email e-header-subscribe-email is-subscribe">
                    <span>订阅电子杂志</span>
                  </li>
                  <li class="header-login e-header-login" @click="login" v-if="username==''">
                    <span>登录与注册</span>
                  </li>
                  <li class="header-login e-header-login logOut" v-if="username!=''">
                    <img
                      style="width: 25px;height: 25px;vertical-align: middle; margin-right: 5px;"
                      src="@/assets/image/tx.png"
                      alt
                    />
                    <span>{{username}}</span>
                    <span @click="logOut" style="margin-left:20px">退出</span>
                  </li>
                  <li class="header-shopping-bag e-header-shopping-bag is-empty">
                    <i class="icon icon-header-shopping-bag"></i>
                    <span class="event-shoppingcart-count">购物袋-0件商品</span>
                    <i class="icon icon-down-arrow"></i>
                  </li>
                </ol>
              </div>
            </div>
            <div class="login" @click="home2">
              <img src="@/assets/image/logo.png" alt />
            </div>
          </div>
          <div class="nav-container">
            <div class="nav-content float-clearfix" ref="nav">
              <div class="nav-wrap">
                <ul class="nav nav-pills e-nav-pills">
                  <li @click="MakeUp" @mouseover="mouseOver" @mouseleave="mouseLeave">
                    <span>彩妆</span>
                    <div ref="erji" class="erji">
                      <ul>
                        <li>
                          <span>唇部</span>
                          <div class="sanji">
                            <ul>
                              <li>
                                <span>唇膏</span>
                              </li>
                              <li>
                                <span>唇釉</span>
                              </li>
                              <li>
                                <span>唇颊霜</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <span>面部</span>
                          <div class="sanji">
                            <ul>
                              <li>
                                <span>唇膏</span>
                              </li>
                              <li>
                                <span>唇釉</span>
                              </li>
                              <li>
                                <span>唇颊霜</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <span>眼部</span>
                          <div class="sanji">
                            <ul>
                              <li>
                                <span>唇膏</span>
                              </li>
                              <li>
                                <span>唇釉</span>
                              </li>
                              <li>
                                <span>唇颊霜</span>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li>
                          <span>套装工具</span>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <span>香水</span>
                  </li>
                  <li>
                    <span>护肤</span>
                  </li>
                  <li>
                    <span>尊享礼盒</span>
                  </li>
                  <li>
                    <span>618年中盛典</span>
                  </li>
                  <li>
                    <span>会员中心</span>
                  </li>
                  <li>
                    <span>私人定制服务</span>
                  </li>
                </ul>
              </div>
              <div class="functional-area">
                <div class="form-input none-sm">
                  <div>
                    <input type="text" class="searchKeywords-pre" placeholder="请输入" />
                    <span class="header-search-btn e-header-search">
                      <i class="icon icon-header-search"></i>
                    </span>
                  </div>
                </div>
                <div class="gw" ref="gw" style="display:none">购物袋0件商品</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </el-container>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      active: "",
      scrollPos: "",
      username: ""
    };
  },
  whatch: {},
  created() {
    if (
      localStorage.getItem("username") != undefined ||
      localStorage.getItem("username") != null ||
      localStorage.getItem("username") == ""
    ) {
      this.username = localStorage.getItem("username");
    } else {
      this.username = "";
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.menu();
  },
  methods: {
    //导航栏
    menu() {
      this.$axios.get(this.$api.menuList, {}).then(res => {
        console.log(res);
        // if(res.)
      });
    },
    //登录
    login() {
      this.$router.push("/login");
    },
    //退出登录
    logOut() {
      this.$store.dispatch("loginOut").then(res => {
        if (res.code == this.$code.success) {
          this.successMessage("退出成功");
          this.$router.push("/home");
        } else {
          this.errorMessage("退出失败");
        }
      });
    },
    MakeUp() {
      this.$router.push({
        name: "MakeUp"
      });
    },
    home2() {
      this.$router.push({
        name: "home2"
      });
    },
    //鼠标移入
    mouseOver() {
      // 操作dom 获取标签改变其样式
      var erji = this.$refs.erji;
      erji.style.display = "block";
    },
    // 移出
    mouseLeave() {
      this.active = "";
      var erji = this.$refs.erji;
      erji.style.display = "none";
    },
    handleScroll() {
      // console.log(document.documentElement.scrollTop);
      if (document.documentElement.scrollTop > 100) {
        this.$refs.nav.style.position = "fixed";
        this.$refs.nav.style.top = "0";
        this.$refs.nav.style.left = "0";
        this.$refs.nav.style.background = "#fff";
        this.$refs.nav.style.minWidth = "100%";
        this.$refs.nav.style.width = "100%";
        this.$refs.gw.style.display = "block";
      } else {
        this.$refs.nav.style.position = "static";
        this.$refs.nav.style.minWidth = "auto";
        this.$refs.nav.style.width = "auto";
        this.$refs.gw.style.display = "none";
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>
<style lang="scss" scoped>
.el-main {
  overflow: unset;
}
</style>
