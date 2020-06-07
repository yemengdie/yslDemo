import Vue from "vue";
import VueRouter from "vue-router";
import home from "@/views/home/home.vue";
import login from "@/views/login/login.vue";
import register from "@/views/login/register.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  }
];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
