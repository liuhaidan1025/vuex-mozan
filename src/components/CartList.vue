<template>
  <div class="cart-list">
    <div class="list-head df">
      <div>
        <span
          :class="cartGoods.length===checkedNum?'checked':'border'"
          @click="allChecked(checkedNum)"
        >
          <span
            :class="cartGoods.length===checkedNum?'iconfont icon-duihao':'iconfont icon-duihao display'"
          ></span>
        </span>&nbsp;
        <span>全选</span>
      </div>
      <span style="width:456px;padding-left: 25px">商品</span>
      <span style="padding: 0 60px;text-align:center">单价</span>
      <span style="width: 182px;text-align:center">数量</span>
      <span style="width: 150px;text-align:center">小计</span>
      <span>操作</span>
    </div>
    <div class="list">
      <ul>
        <li v-for="cart in cartGoods" :key="cart.good" class="df">
          <span :class="cart.checked?'checked':'border'" @click="checked(cart.id)">
            <span :class="cart.checked?'iconfont icon-duihao':'iconfont icon-duihao display'"></span>
          </span>
          <img :src="cart.img" alt />
          <div class="info">
            <span class="name">{{cart.goodName}}</span>
            <br />
            <span class="other">款式：{{cart.style}}</span>
            <br />
            <span class="other">尺码：{{cart.size}}</span>
          </div>
          <span class="price">￥{{cart.price}}</span>
          <div class="num">
            <button @click="addCartNum(cart.id)">+</button>
            <span>{{cart.num}}</span>
            <button @click="subCartNum(cart.id)">-</button>
          </div>
          <span class="total">￥{{(cart.price*cart.num).toFixed(2)}}</span>
          <span class="iconfont icon-cuo" @click="showTips(cart.id)"></span>
          <div :class="cart.tips?'tips show ':'tips'">
            <button @click="delCartGood({id:cart.id})">确定删除</button>
            <button @click="showTips(cart.id)">不删除</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="list-foot df">
      <div>
        <span
          :class="cartGoods.length===checkedNum?'checked':'border'"
          @click="allChecked(checkedNum)"
        >
          <span
            :class="cartGoods.length===checkedNum?'iconfont icon-duihao':'iconfont icon-duihao display'"
          ></span>
        </span>&nbsp;
        <span>全选</span>
      </div>
      <div class="other">
        <span class="delAll" @click="delAll">
          <span class="iconfont icon-shanchu"></span>
          <span>删除</span>
        </span>
        <span class="iconfont icon-mofabang"></span>
        <span>转到愿望单</span>
        <span>|</span>
        <span>
          共
          <span class="yellow">{{cartGoods.length}}</span>件商品，已选择
          <span class="yellow">{{checkedNum}}</span>件
        </span>
      </div>
      <div class="df total-all">
        <div class="total">
          <span>合计：</span>
          <br />
          <span>[不含运费]</span>
        </div>
        <span class="total-money">￥{{totalMoney}}</span>
      </div>
      <button @click="loginShow({jumpOrder})">去结算</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "cartlist",
  computed: {
    ...mapGetters({
      cartGoods: "currentCart",
      checkedNum: "checkedNum",
      totalMoney: "totalMoney"
    })
  },
  methods: {
    ...mapMutations([
      "checked",
      "addCartNum",
      "subCartNum",
      "showTips",
      "delCartGood",
      "delAll",
      "allChecked",
      "loginShow"
    ]),
    jumpOrder() {
      this.$router.push(this.$publicUrl + "order");
    }
  }
};
</script>

<style>
.cart-list .border {
  padding: 2px 2px;
  border: 2px solid #b8bfc9;
}
.cart-list .checked {
  padding: 2px 2px;
  border: 2px solid #fdd901;
  background-color: #fdd901;
}
.cart-list .display {
  opacity: 0;
}
.cart-list .list {
  border-top: 2px solid #2b2e33;
  border-bottom: 2px solid #2b2e33;
  margin: 16px 0 50px;
}
.cart-list .list ul {
  padding: 0;
  margin: 0;
}
.cart-list .list li {
  padding: 20px;
  border-bottom: 1px solid #d1d7e3;
  align-items: center;
  position: relative;
}
.cart-list .list li:last-child {
  border: none;
}

.cart-list .list li img {
  display: block;
  width: 96px;
  margin-left: 48px;
  margin-right: 10px;
}
.cart-list .list li .info {
  width: 240px;
  margin-right: 110px;
}
.cart-list .list li .info .name {
  color: #474a4f;
  line-height: 16px;
  font-size: 14px;
  font-weight: 600;
}
.cart-list .list li .info .other {
  color: #7c7b80;
  font-size: 12px;
}
.cart-list .list li .num {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 182px;
}
.cart-list .list li .num button {
  display: block;
  width: 36px;
  height: 36px;
  background-color: #fff;
  border: 1px solid #2b2e33;
  outline: none;
  cursor: pointer;
}
.cart-list .list li .price {
  padding: 0 50px;
}
.cart-list .list li .total {
  text-align: center;
  display: block;
  width: 150px;
  color: #f40000;
}
.cart-list .list li .icon-cuo {
  padding: 0 30px;
}
.cart-list .list-foot {
  background-color: #2b2e33;
  color: #fffffd;
  align-items: center;
  padding-left: 20px;
  justify-content: space-between;
  font-size: 12px;
}

.cart-list .list-foot button {
  width: 220px;
  height: 60px;
  background-color: #fdd901;
  font-size: 24px;
  border: none;
  margin-right: -1px;
  outline: none;
  cursor: pointer;
}
.cart-list .list-foot .total {
  text-align: right;
  flex-grow: 1;
}
.cart-list .list-foot .total-money {
  flex-shrink: 0;
  font-size: 24px;
  color: #fdd901;
}
.cart-list .list-foot .other {
  width: 460px;
  text-align: left;
}
.cart-list .list-foot .other span {
  padding: 0 5px;
}
.cart-list .list-foot .other .yellow {
  color: #fdd901;
}
.cart-list .list-foot .total-all {
  width: 330px;
  justify-content: space-between;
}
.cart-list .icon-cuo {
  cursor: pointer;
}
.cart-list .tips {
  position: absolute;
  bottom: 10px;
  right: 0;
  box-shadow: 0px 0px 3px 1px #e00000;
  display: none;
}
.cart-list .list .show {
  display: block;
}
.cart-list .tips button:first-child {
  width: 74px;
  height: 32px;
  background-color: #f50000;
  border: 0;
  outline: none;
  color: #fff;
  user-select: none;
  cursor: pointer;
}
.cart-list .tips button:last-child {
  width: 126px;
  height: 32px;
  background-color: #2b2e33;
  border: 0;
  outline: none;
  color: #fff;
  user-select: none;
  cursor: pointer;
}
.cart-list .delAll {
  cursor: pointer;
}
</style>
