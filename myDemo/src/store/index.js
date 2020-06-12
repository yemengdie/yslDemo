import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import user from "./user"
Vue.use(Vuex);

export const store = new Vuex.Store({

  modules: {
    user,
  },
  getters
})