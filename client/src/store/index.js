import Vue from "vue";
import Vuex from "vuex";
import * as userModule from "./modules/user";
import * as todoModule from "./modules/todos";
import * as projectModule from "./modules/projects";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userModule,
    todoModule,
    projectModule,
  },
});
