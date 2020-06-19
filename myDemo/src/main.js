import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import { store } from "@/store/index.js";
import "./plugins/element/element.js"; // 引入饿了么UI
import "./plugins/vcharts/vcharts.js"; // 引入vcharts
// import "@/utils/permissions"; //全局路由钩子
import axios from "axios";
import VueAxios from "vue-axios";
import echarts from 'echarts'
import VueUeditorWrap from 'vue-ueditor-wrap'
Vue.use(echarts)
import global from "@/utils/global"; //全局方法
import "@/assets/css/comm.scss"
import Header from "@/components/header/Header.vue";
Vue.use("Header", Header)
import Foot from "@/components/footer/Foot.vue";
Vue.use("Foot", Foot)
Vue.use(VueAxios, axios);
Vue.use(global);

Vue.config.productionTip = false;
Vue.component("vue-ueditor-wrap", VueUeditorWrap);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
