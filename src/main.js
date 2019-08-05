import Vue from "vue";
import App from "./App.vue";
import "./assets/glocal.css";
import store from "./store";
import "./elementui";
import PUBLICURL from "./contants";
import "./assets/iconfont/iconfont.css";
import router from "./router";
Vue.prototype.$publicUrl = PUBLICURL;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store,
  router
}).$mount("#app");
