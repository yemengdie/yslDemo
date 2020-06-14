<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <div class="make_up">
          <div>
            <img src="@/assets/image/cz.jpg" alt />
          </div>
          <div class="article article-width">
            <div class="list-content-all float-clearfix">
              <div class="list-left-nav">
                <div class="scroller-wrap">
                  <div class="filter-title none-sm">
                    <p>彩妆</p>
                  </div>
                  <div class="filter-classify none-sm events-filter-warp">
                    <ul>
                      <li class>
                        <!--P4-2左侧导航 -->
                        <span>唇部</span>
                      </li>
                      <li class>
                        <!--P4-2左侧导航 -->
                        <span>面部</span>
                      </li>
                      <li class>
                        <!--P4-2左侧导航 -->
                        <span>眼部</span>
                      </li>
                      <li class>
                        <!--P4-2左侧导航 -->
                        <span>套装及工具</span>
                      </li>
                    </ul>
                  </div>
                  <div class="filter-main">
                    <!--P4-3左侧导航-筛选 -->
                    <!--P4-3左侧导航-筛选 -->
                    <div class="filter-wrapper filter-color is-open">
                      <div class="filtername">
                        <span>色彩</span>
                        <i class="open-status-icon"></i>
                      </div>
                      <div class="filter-content" style="display: block;">
                        <ul class="filter-product events-checked float-clearfix">
                          <li
                            data-grouptitle="色彩"
                            data-title="米色"
                            data-type="p573"
                            pid-pvid="19-573"
                            class
                            onclick="gsPush('PLP页面','色彩筛选','米色')"
                          >
                            <a>
                              <span style="background: #f5e6c7;" title="米色"></span>
                            </a>
                          </li>
                          <li
                            data-grouptitle="色彩"
                            data-title="中性色"
                            data-type="p576"
                            pid-pvid="19-576"
                            class
                            onclick="gsPush('PLP页面','色彩筛选','中性色')"
                          >
                            <a>
                              <span style="background: #e2b8a5;" title="中性色"></span>
                            </a>
                          </li>
                          <li
                            data-grouptitle="色彩"
                            data-title="粉色"
                            data-type="p577"
                            pid-pvid="19-577"
                            class
                            onclick="gsPush('PLP页面','色彩筛选','粉色')"
                          >
                            <a>
                              <span style="background: #e495b9;" title="粉色"></span>
                            </a>
                          </li>
                          <li
                            data-grouptitle="色彩"
                            data-title="黑色"
                            data-type="p579"
                            pid-pvid="19-579"
                            class
                            onclick="gsPush('PLP页面','色彩筛选','黑色')"
                          >
                            <a>
                              <span style="background: #2f3233;" title="黑色"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="list-right-content thumbnail">
                <div class="img-box recommend-homepage-img-box" style="margin-left: 218px;">
                  <div
                    style=" position   : relative;"
                    @mouseover="mouseOver('0')"
                    @mouseleave="mouseLeave('0')"
                  >
                    <div>
                      <img src="@/assets/image/srcy.jpg" alt />
                    </div>

                    <div class="tag">
                      <span class="tag-hot homepage-presell-tag-event">新品</span>
                    </div>
                    <div class="goods-handle events-goods-handle none-sm" ref="shopping1">
                      <div class="btn-box">
                        <!-- P3-3立即购买 -->
                        <div class="btn btn-black btn-icon e-quickbuy">
                          <i class="icon icon-btn-shopping-bag"></i>
                          <span class="homepage-presell-copywriter-event">立即购买</span>
                        </div>

                        <!-- P3-4查看详情 -->
                        <div
                          @click="details"
                          class="btn btn-black-border e-index-topdp e-read-more"
                        >
                          <span>查看详情</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style=" position   : relative;"
                    @mouseover="mouseOver('1')"
                    @mouseleave="mouseLeave('1')"
                  >
                    <div>
                      <img src="@/assets/image/srcy.jpg" alt />
                    </div>
                    <div class="tag">
                      <span class="tag-hot homepage-presell-tag-event">新品</span>
                    </div>
                    <div class="goods-handle events-goods-handle none-sm" ref="shopping2">
                      <div class="btn-box">
                        <!-- P3-3立即购买 -->
                        <div class="btn btn-black btn-icon e-quickbuy">
                          <i class="icon icon-btn-shopping-bag"></i>
                          <span class="homepage-presell-copywriter-event">立即购买</span>
                        </div>

                        <!-- P3-4查看详情 -->
                        <div class="btn btn-black-border e-index-topdp e-read-more">
                          <span>查看详情</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style=" position   : relative;"
                    @mouseover="mouseOver('2')"
                    @mouseleave="mouseLeave('2')"
                  >
                    <div>
                      <img src="@/assets/image/srcy.jpg" alt />
                    </div>
                    <div class="tag">
                      <span class="tag-hot homepage-presell-tag-event">新品</span>
                    </div>
                    <div class="goods-handle events-goods-handle none-sm" ref="shopping3">
                      <div class="btn-box">
                        <!-- P3-3立即购买 -->
                        <div class="btn btn-black btn-icon e-quickbuy">
                          <i class="icon icon-btn-shopping-bag"></i>
                          <span class="homepage-presell-copywriter-event">立即购买</span>
                        </div>

                        <!-- P3-4查看详情 -->
                        <div class="btn btn-black-border e-index-topdp e-read-more">
                          <span>查看详情</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>

    <Foot></Foot>
  </div>
</template>
<script>
import Header from "@/components/header/Header.vue";
import Foot from "@/components/footer/Foot.vue";
import "@/assets/css/makeUp.scss";
import "@/assets/css/home2.scss";
export default {
  components: {
    Header,
    Foot
  },
  data() {
    return {};
  },
  methods: {
    //鼠标移入
    mouseOver(index) {
      // 操作dom 获取标签改变其样式
      if (index == "0") {
        var shopping1 = this.$refs.shopping1;
        shopping1.style.display = "block";
      } else if (index == "1") {
        var shopping2 = this.$refs.shopping2;
        shopping2.style.display = "block";
      } else if (index == "2") {
        var shopping3 = this.$refs.shopping3;
        shopping3.style.display = "block";
      }
    },
    // 移出
    mouseLeave(index) {
      if (index == "0") {
        var shopping1 = this.$refs.shopping1;
        shopping1.style.display = "none";
      } else if (index == "1") {
        var shopping2 = this.$refs.shopping2;
        shopping2.style.display = "none";
      } else if (index == "2") {
        var shopping3 = this.$refs.shopping3;
        shopping3.style.display = "none";
      }
    },
    details() {
      this.$router.push({
        name: "detail"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.make_up {
  display: block;
  z-index: 1;
  position: relative;
}
.make_up img {
  width: 100%;
}
</style>