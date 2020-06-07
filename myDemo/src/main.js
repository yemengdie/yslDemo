import Vue from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
import { store } from "@/store/index.js";
import "./plugins/element/element.js"; // 引入饿了么UI
// import "@/utils/permissions"; //全局路由钩子
import axios from "axios";
import VueAxios from "vue-axios";
import global from "@/utils/global"; //全局方法
import "@/assets/css/comm.scss"
Vue.use(VueAxios, axios);
Vue.use(global);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
