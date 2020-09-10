import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

import axios from 'axios'
import VueAxios from 'vue-axios'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
