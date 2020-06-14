import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home/home.vue";
import login from "@/views/login/login.vue";
import register from "@/views/login/register.vue"
import MakeUp from "@/views/MakeUp/index.vue"
import home2 from "@/views/home/home2.vue"
import detail from "@/views/details/index.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",   //主路由重定向至company组件
    redirect: "/home"

  },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/home2",
    name: "home2",
    component: home2,
  },
  {
    path: '/MakeUp',
    name: "MakeUp",
    component: MakeUp,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/detail",
    name: "detail",
    component: detail,
  }

];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
