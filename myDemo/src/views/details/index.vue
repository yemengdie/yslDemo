<template>
  <div>
    <Header></Header>
    <el-container>
      <el-main>
        <div class="article article-product row">
          <div
            class="product-left col-10-6 col-sm-10-10 float-clearfix remove-div"
            id="image-detail"
          >
            <div class="thumbnails-box none-sm">
              <div class="swiper-container e-thumbnails-scroll swiper-container-vertical">
                <ul class="swiper-wrapper" style="transition-duration: 0ms;">
                  <li
                    class="select-active swiper-slide swiper-slide-active"
                    onclick="gsPush('PDP页面','产品图片','1')"
                    style="height: 74px; margin-bottom: 10px;"
                  >
                    <img
                      src="https://res.yslbeautycn.com/resources/2020/5/6/15887664774478944_110X110.jpg?version=20200609225223780"
                      class="swiper-lazy swiper-lazy-loaded"
                      alt
                    />
                  </li>
                  <li
                    class="select-active swiper-slide swiper-slide-next"
                    onclick="gsPush('PDP页面','产品图片','2')"
                    style="height: 74px; margin-bottom: 10px;"
                  >
                    <img
                      src="https://res.yslbeautycn.com/resources/2020/5/6/15887664931159330_110X110.jpg?version=20200609225223780"
                      class="swiper-lazy swiper-lazy-loaded"
                      alt="圣罗兰丝绒唇釉"
                    />
                  </li>
                  <li
                    class="select-active swiper-slide"
                    onclick="gsPush('PDP页面','产品图片','3')"
                    style="height: 74px; margin-bottom: 10px;"
                  >
                    <img
                      src="https://res.yslbeautycn.com/resources/2020/5/6/15887665030775349_110X110.jpg?version=20200609225223780"
                      class="swiper-lazy swiper-lazy-loaded"
                      alt="圣罗兰丝绒唇釉"
                    />
                  </li>
                  <li
                    class="select-active swiper-slide is-active"
                    onclick="gsPush('PDP页面','产品图片','4')"
                    style="height: 74px; margin-bottom: 10px;"
                  >
                    <img
                      src="https://res.yslbeautycn.com/resources/2020/5/6/15887665101624407_110X110.jpg?version=20200609225223780"
                      class="swiper-lazy swiper-lazy-loaded"
                      alt="圣罗兰丝绒唇釉"
                    />
                  </li>
                </ul>
              </div>
              <div class="swiper-button-prev none swiper-button-disabled">
                <i class="icon icon-arrow-up"></i>
              </div>
              <div class="swiper-button-next none swiper-button-disabled">
                <i class="icon icon-arrow-down"></i>
              </div>
            </div>
            <div class="main-box">
              <div class="wish-list">
                <i class="icon icon-add-wish"></i>
                <i class="icon icon-added-wish"></i>
              </div>
              <div class="swiper-lazy-bg">
                <img
                  src="https://res.yslbeautycn.com/build/images/pdp/pdp-bpic-blank.png"
                  data-image="{
					&quot;standard&quot;:{&quot;high&quot;:&quot;&quot;, &quot;normal&quot;:&quot;https://res.yslbeautycn.com/build/images/pdp/pdp-bpic-blank.png&quot;},
					&quot;medium&quot;:{&quot;high&quot;:&quot;&quot;, &quot;normal&quot;:&quot;https://res.yslbeautycn.com/build/images/pdp/pdp-bpic-blank.png&quot;},
					&quot;small&quot;:{&quot;high&quot;:&quot;&quot;, &quot;normal&quot;:&quot;https://res.yslbeautycn.com/build/images/pdp/pdp-bpic-blank.png&quot;}
			    }"
                />
              </div>
              <div
                class="swiper-container e-main-scroll swiper-container-horizontal swiper-container-fade"
              >
                <span class="master-tag-info">新品</span>
                <div class="swiper-wrapper" style="transition-duration: 0ms;">
                  <div
                    class="swiper-slide"
                    style="width: 501px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;"
                  >
                    <img
                      class="swiper-lazy swiper-lazy-loaded"
                      src="https://res.yslbeautycn.com/resources/2020/5/6/15887664774478944_500X500.jpg?version=20200609225223780"
                      data-cloudzoom="zoomImage: 'https://res.yslbeautycn.com/resources/2020/5/6/15887664774478944_1000X1000.jpg?version=20200609225223780'"
                      alt
                      style="user-select: none;"
                    />
                  </div>
                </div>
              </div>
            </div>
            <input style="display: none" value="00415YSL-005" id="hide-currentItemCode" />
            <input style="display: none" value id="hide-openAR" />
          </div>
          <div class="product-right col-10-4 col-sm-10-10 remove-div">
            <div class="product-top">
              <div class="product-tit">
                <h2 class="none-sm">TATOUAGE COUTURE VELVET CREAM</h2>
                <h1>圣罗兰丝绒唇釉</h1>
              </div>
              <div class="product-evaluate">
                <div class="star-wrap">
                  <div class="star-content" style="width:100%">
                    <i class="icon icon-star-black"></i>
                  </div>
                  <i class="icon icon-star-gray"></i>
                </div>
                <div class="evaluate-msg">
                  <a class="e-add-comment is-grey">3条评论</a>
                </div>
              </div>
            </div>
            <div class="product-description none-sm">
              <p>
                YSL全新天鹅绒唇釉
                <br />一袭天鹅绒华服 高定上唇 顺滑持色
                <br />
                <span style="color:red;">热卖色号：</span>
                <br />N°212 焦糖朋克
                <br />N°211 日落变奏
                <br />N°208 炙红胶片
                <br />
                <span>
                  <a class="e-product-detail">查看详情</a>
                </span>
              </p>
            </div>
            <div class="product-color e-product-color">
              <div class="row e-color">
                <div class="product-num-select select col-sm-12-3">
                  <div class="dropdown e-dropdown">
                    <a class="btn">
                      <span class="dropdown-text">1</span>
                      <span class="dropdown-icon">
                        <i class="icon icon-caret"></i>
                      </span>
                    </a>
                    <div class="sub-menu tinyscrollbar" style="display: none;">
                      <div class="viewport">
                        <div class="overview">
                          <ul>
                            <li>
                              <a>1</a>
                            </li>
                            <li>
                              <a>2</a>
                            </li>
                            <li>
                              <a>3</a>
                            </li>
                            <li>
                              <a>4</a>
                            </li>
                            <li>
                              <a>5</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="scrollbar">
                        <div class="track">
                          <div class="thumb">
                            <div class="end"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="product-handle">
                <div class="calculate-num product-num e-calculate-num none-sm">
                  <a class="btn btn-minus e-minus is-disabled">-</a>
                  <input type="text" readonly value="1" class="form-input e-input" />
                  <a class="btn btn-plus e-plus">+</a>
                </div>
                <div class="product-price">
                  ¥
                  <span>335</span>
                </div>
                <div class="product-btn">
                  <a class="btn btn-black btn-icon e-shopping-bag addCart">
                    <!-- <i class="icon icon-btn-shopping-bag"></i> -->
                    <span>加入购物袋</span>
                  </a>
                  <!-- <a class="btn btn-black e-arrival-notice qtvNotice none">到货通知</a> -->
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
import "@/assets/css/detail.scss";
export default {
  components: {
    Header,
    Foot
  }
};
</script>