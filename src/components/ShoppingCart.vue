<template>
  <div class="shopping-cart">
    <div class="shopping-inner">
      <div class="head df">
        <h3>
          购物车
          <span>[{{currentCart.length}}件]</span>
        </h3>
        <div class="head-nav">
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款,购买成功</span>
        </div>
      </div>
      <div v-if="currentCart.length" class="cart-goods">
        <CartList />
      </div>
      <div v-else>
        <img src="../assets/images/shop2.jpg" alt />
      </div>
    </div>
    <div class="cover" v-show="cover"></div>
    <div class="login" v-show="login">
      <div>
        <span class="iconfont icon-cuo" @click="changeCover"></span>
      </div>
      <img src="../assets/images/shop.jpg" alt />
      <div>
        <div class="user">
          <input type="text" placeholder="请输入手机号" v-model="user" />
          <span class="iconfont icon-ren"></span>
        </div>
        <div class="password">
          <input type="text" placeholder="请输入密码" v-model="password" />
          <span class="iconfont icon-mima"></span>
        </div>
        <div class="df yanzhengma">
          <input type="text" placeholder="请输入验证码" v-model="yzm" />
          <img src="../assets/images/yan_03.jpg" alt />
        </div>
        <button @click="loginNew({user,password,yzm})">登 录</button>
        <div class="other df">
          <span>忘记密码？</span>
          <span>注册</span>
        </div>
        <div class="bottom df">
          <span class="iconfont icon-icon5"></span>
          <span class="iconfont icon-wchart"></span>
          <span class="iconfont icon-weibo"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "./CartList";
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  name: "shoppingcart",
  data() {
    return {
      user: "111111",
      password: "111111",
      yzm: ""
    };
  },
  components: {
    CartList
  },
  computed: {
    ...mapState({
      cover: state => state.cart.users.cover,
      login: state => state.cart.users.login
    }),
    ...mapGetters(["currentCart"])
  },
  methods: {
    ...mapMutations(["changeCover", "loginNew"])
    // loginNew() {
    //   console.log(this.user);
    //   console.log(this.password);
    //   console.log(this.yzm);
    // }
  }
};
</script>

<style>
.shopping-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.shopping-inner .head {
  background-color: #fdd900;
  padding: 24px 50px 16px;
  justify-content: space-between;
  align-items: center;
}
.shopping-inner .head h3 {
  margin: 0;
  line-height: 60px;
  font-size: 28px;
  border-left: 5px solid #000;
  padding-left: 24px;
  font-weight: normal;
}
.shopping-inner .head h3 span {
  font-size: 22px;
}
.shopping-inner .head .head-nav span {
  font-size: 18px;
  margin-left: 20px;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.shopping-inner .head .head-nav span:first-child {
  border-bottom: 4px solid #000;
  font-weight: 700;
}
.shopping-inner .cart-goods {
  padding: 70px 50px;
  background: url("../assets/images/yellowbg_03.jpg") no-repeat;
}
.shopping-cart .cover {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}
.shopping-cart .login {
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 420px;
  background-color: #fff;
  z-index: 1001;
  padding: 20px;
}
.shopping-cart .login img {
  display: block;
  margin: 40px auto;
}
.shopping-cart .login > div:first-child {
  text-align: right;
}
.shopping-cart .login > div:first-child span {
  cursor: pointer;
}
.shopping-cart .login input {
  width: 100%;
  height: 44px;
  margin-bottom: 20px;
  padding-left: 50px;
}
.shopping-cart .login .yanzhengma input {
  padding-left: 20px;
  margin-right: 10px;
}
.shopping-cart .login .yanzhengma img {
  display: block;
  margin: 0;
  height: 44px;
}
.shopping-cart .login .user,
.shopping-cart .login .password {
  position: relative;
}
.shopping-cart .login .icon-ren,
.shopping-cart .login .icon-mima {
  position: absolute;
  top: 13px;
  left: 20px;
}
.shopping-cart .login button {
  width: 100%;
  background-color: #fff500;
  border: 0;
  height: 46px;
  line-height: 46px;
  font-size: 22px;
  margin: 15px 0;
  outline: none;
  cursor: pointer;
}
.shopping-cart .login .other {
  padding: 40px 0;
  justify-content: space-between;
  font-size: 12px;
}
.shopping-cart .login .bottom {
  justify-content: space-around;
}
.shopping-cart .login .icon-icon5 {
  color: #0c9fec;
  font-size: 26px;
}
.shopping-cart .login .icon-wchart {
  color: #28c62b;
  font-size: 26px;
}
.shopping-cart .login .icon-weibo {
  color: #ef0000;
  font-size: 26px;
}
</style>
