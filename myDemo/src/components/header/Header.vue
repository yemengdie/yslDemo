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
                  <li
                    v-for="(item,i) in menuList"
                    :key="item.id"
                    @mouseover="mouseOver(item.pId,$event)"
                    @mouseleave="mouseLeave($event)"
                    @click="MakeUp(item.name)"
                  >{{item.name}}</li>
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
            <div ref="erji" class="erji">
              <ul>
                <li v-for="(item,index) in sbMenuList" :key="item.id">
                  <span>{{item.name}}</span>
                </li>
              </ul>
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
      username: "",
      menuList: [], //导航栏
      pId: "",
      sbMenuList: []
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
        if (res.code == "200") {
          this.menuList = res.data;
        } else {
          this.$message({
            message: res.message,
            type: "warning"
          });
        }
      });
    },
    //子导航栏
    sbMenu(item) {
      this.$axios
        .get(this.$api.sbMenuList, {
          params: {
            pId: parseInt(item)
          }
        })
        .then(res => {
          console.log(res);
          if (res.code == "200") {
            this.sbMenuList = res.data;
          }
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
    MakeUp(item) {
      if (item == "彩妆") {
        this.$router.push({
          name: "MakeUp"
        });
      }
    },
    home2() {
      this.$router.push({
        name: "home2"
      });
    },
    //鼠标移入
    mouseOver(item, e) {
      // 操作dom 获取标签改变其样式
      //this.pId = item;

      console.log(item);
      var erji = this.$refs.erji;
      erji.style.display = "block";
      this.sbMenu(item);
    },
    // 移出
    mouseLeave(e) {
      this.active = "";
      var erji = this.$refs.erji;
      erji.style.display = "none";
      this.pId = "";
      this.sbMenuList = [];
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
        this.$refs.erji.style.position = "fixed";
        this.$refs.erji.style.top = "10%";
      } else {
        this.$refs.nav.style.position = "static";
        this.$refs.nav.style.minWidth = "auto";
        this.$refs.nav.style.width = "auto";
        this.$refs.gw.style.display = "none";
        this.$refs.erji.style.position = "absolute";
        this.$refs.erji.style.top = "80%";
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
