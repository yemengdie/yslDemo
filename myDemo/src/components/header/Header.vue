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
              </div>
            </div>
            <div class="login">
              <img src="@/assets/image/logo.png" alt />
            </div>
          </div>
          <div class="nav-container">
            <div class="nav-content float-clearfix">
              <div class="nav-wrap">
                <ul class="nav nav-pills e-nav-pills">
                  <li>彩妆</li>
                  <li>香水</li>
                  <li>护肤</li>
                  <li>尊享礼盒</li>
                  <li>618年中盛典</li>
                  <li>会员中心</li>
                  <li>私人定制服务</li>
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
                <ul>
                  <li class="header-subscribe-email e-header-subscribe-email is-subscribe">
                    <span>订阅电子杂志</span>
                  </li>
                  <li class="header-login e-header-login">
                    <span>登录与注册</span>
                  </li>
                  <li class="header-shopping-bag e-header-shopping-bag is-empty">
                    <i class="icon icon-header-shopping-bag"></i>
                    <span class="event-shoppingcart-count">购物袋-0件商品</span>
                    <i class="icon icon-down-arrow"></i>
                  </li>
                </ul>
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
    return {};
  }
};
</script>
