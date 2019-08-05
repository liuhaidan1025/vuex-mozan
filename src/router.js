import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import SucAccession from "./components/SucAccession.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Cashier from "./components/Cashier.vue";
import Order from "./components/Order.vue";
import PUBLICURL from "./contants";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
      path: PUBLICURL,
      component: Home
    },
    {
      path: PUBLICURL + "sucaccession",
      component: SucAccession
    },
    {
      path: PUBLICURL + "shoppingcart",
      component: ShoppingCart
    },
    {
      path: PUBLICURL + "order",
      component: Order
    },
    {
      path: PUBLICURL + "cashier",
      component: Cashier
    }
  ],
  mode: "history"
});
