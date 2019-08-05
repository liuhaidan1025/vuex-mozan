import Vue from "vue";
import Vuex from "vuex";
import preGoods from "./modules/preGoods";
import cart from "./modules/cart";
import address from "./modules/address";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    preGoods,
    cart,
    address
  }
});
export default store;
