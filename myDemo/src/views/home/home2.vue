<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <div class="home2">
          <div>
            <el-carousel :interval="3000" arrow="always">
              <el-carousel-item>
                <img src="@/assets/image/lb1.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="@/assets/image/gw.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="@/assets/image/lb2.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="@/assets/image/lb3.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="star">
            <div class="common-header">
              <p class="header-title-en">YSL FAVORITES</p>
              <p class="header-title-cn">明星产品</p>
            </div>
            <div class="favorites-aside">
              <div class="favorites-aside-nav">
                <ul>
                  <li
                    v-for="(item,index) in dataList"
                    :key="item.id"
                    @click="active(index)"
                    :class="{ isActive:index==is_active}"
                  >
                    <span>{{item.name}}</span>
                  </li>
                </ul>
              </div>
              <div class="favorites-aside-content">
                <div class="goods-tab-item float-clearfix is-active">
                  <div class="goods-img-details none-sm">
                    <img src="@/assets/image/cz_1.jpg" alt />
                  </div>
                  <div>
                    <div class="thumbnail">
                      <div class="img-box recommend-homepage-img-box">
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
                              <div class="btn btn-black-border e-index-topdp e-read-more">
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
                      <div style="display: flex;justify-content: space-around;">
                        <div>
                          <h3 class="goods-tit">TATOUAGE COUTURE VELVET CREAM</h3>
                          <p class="goods-title-cn">圣罗兰丝绒唇釉</p>
                          <p class="goods-introudce">高定上唇 顺滑持色</p>
                        </div>
                        <div>
                          <h3 class="goods-tit">TATOUAGE COUTURE VELVET CREAM</h3>
                          <p class="goods-title-cn">圣罗兰丝绒唇釉</p>
                          <p class="goods-introudce">高定上唇 顺滑持色</p>
                        </div>
                        <div>
                          <h3 class="goods-tit">TATOUAGE COUTURE VELVET CREAM</h3>
                          <p class="goods-title-cn">圣罗兰丝绒唇釉</p>
                          <p class="goods-introudce">高定上唇 顺滑持色</p>
                        </div>
                      </div>
                    </div>
                    <div style="display: flex;justify-content: space-around;">
                      <div style="display:flex">
                        <div class="goods-evaluate">
                          <div class="star-wrap">
                            <div class="star-content">
                              <i class="icon icon-star-black"></i>
                              <i class="icon icon-star-gray"></i>
                            </div>
                          </div>
                        </div>
                        <div class="goods-price">
                          <span>￥335</span>
                        </div>
                      </div>
                      <div style="display:flex">
                        <div class="goods-evaluate">
                          <div class="star-wrap">
                            <div class="star-content">
                              <i class="icon icon-star-black"></i>
                              <i class="icon icon-star-gray"></i>
                            </div>
                          </div>
                        </div>
                        <div class="goods-price">
                          <span>￥335</span>
                        </div>
                      </div>
                      <div style="display:flex">
                        <div class="goods-evaluate">
                          <div class="star-wrap">
                            <div class="star-content">
                              <i class="icon icon-star-black"></i>
                              <i class="icon icon-star-gray"></i>
                            </div>
                          </div>
                        </div>
                        <div class="goods-price">
                          <span>￥335</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="beauty">
            <div class="common-header">
              <p class="header-title-en none-sm">YSL BEAUTY</p>
              <p class="header-title-cn">搜索发现</p>
            </div>
            <ul>
              <li>
                <div class="img-box">
                  <img src="@/assets/image/cz_2.jpg" alt />
                </div>
                <div class="text-cap">
                  <p class="beauty-title">彩妆</p>
                  <p class="beauty-details">新品唇釉 绝美来袭</p>
                  <p class="beauty-link">了解详情</p>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <img src="@/assets/image/xs.jpg" alt />
                </div>
                <div class="text-cap">
                  <p class="beauty-title">香水</p>
                  <p class="beauty-details">馥奇花香 肆意如我</p>
                  <p class="beauty-link">了解详情</p>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <img src="@/assets/image/zxlh.jpg" alt />
                </div>
                <div class="text-cap">
                  <p class="beauty-title">尊享礼盒</p>
                  <p class="beauty-details">高定礼盒 倾心之选</p>
                  <p class="beauty-link">了解详情</p>
                </div>
              </li>
              <li>
                <div class="img-box">
                  <img src="@/assets/image/hf.jpg" alt />
                </div>
                <div class="text-cap">
                  <p class="beauty-title">护肤</p>
                  <p class="beauty-details">YSL夜皇后精华全新上市，重塑机能平衡，一瓶嫩透亮。</p>
                  <p class="beauty-link">了解详情</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="imgwrap">
            <div>
              <img src="@/assets/image/xs_1.jpg" alt />
            </div>
          </div>
          <div class="essentials">
            <div class="essentials-wrapper common-swiper">
              <div class="common-header">
                <p class="header-title-en none-sm">YSL ESSENTIALS</p>
                <p class="header-title-cn">私人订制服务</p>
              </div>
              <div class="swiper-container"></div>
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
import "@/assets/css/home2.scss";
export default {
  components: {
    Header,
    Foot
  },
  data() {
    return {
      is_active: 1,
      dataList: [
        {
          id: "1",
          name: "彩妆"
        },
        {
          id: "2",
          name: "香水"
        },
        {
          id: "3",
          name: "618限时星品"
        },
        {
          id: "4",
          name: "护肤"
        }
      ],
      banner: []
    };
  },
  creact() {},
  mounted() {
    this.lunbo();
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    active(item) {
      this.is_active = item;
    },
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
    //轮播图
    lunbo() {
      this.$axios.get(this.$api.banner, {}).then(res => {
        console.log(res);
      });
    }
  }
};
</script>