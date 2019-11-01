// Import Vue
import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

// Import Vue App, routes, store
import App from "./App";
import routes from "./routes";
import store from './store';
import VueAxios from "vue-axios";

Vue.use(VueRouter);
Vue.use(VueAxios, axios);




// Configure router
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history"
});

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.get["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});