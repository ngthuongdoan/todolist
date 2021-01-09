import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-swatches/dist/vue-swatches.css";
import store from "./store";
import helpers from "./helpers";
import axios from "axios";
import VueAxios from "vue-axios";
// Tell Vue to use the plugin

Vue.config.productionTip = false;
Vue.prototype.$helpers = helpers;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = process.env.VUE_APP_FETCH_URL;
// axios.defaults.baseURL = "https://todolist-ptpmtn.herokuapp.com/";

export const eventBus = new Vue({});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
