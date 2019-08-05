<template>
  <div class="order">
    <div class="order-inner">
      <div class="head df">
        <h3>填写订单</h3>
        <div class="head-nav">
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款,购买成功</span>
        </div>
      </div>
      <div class="address">
        <div class="address-head df">
          <span>收货地址</span>
          <div>
            <span class="jia">+</span>
            <span @click="tanchuaddNewaddress">新增地址</span>
          </div>
        </div>
        <ul class="address-main">
          <li v-for="address in addresses" :key="address.id">
            <div :class="address.mailAddress?'border-ye li-inner df':'li-inner df'  ">
              <div @click="changeMainAddress(address.id)">
                <span class="iconfont icon-ren">{{address.user}}</span>
                <span class="iconfont icon-dizhi">{{address.address}}</span>
                <span class="iconfont icon-dianhua">{{address.tel}}</span>
              </div>
              <div>
                <span
                  :class="address.default?'default':''"
                  @click="changeDefault(address.id)"
                >{{address.default?"默认":"设为默认"}}</span>
              </div>
              <div>
                <span class="iconfont icon-jia">编辑</span>
              </div>
              <div>
                <span class="iconfont icon-shanchu">删除</span>
              </div>
            </div>
          </li>
        </ul>
        <div class="more">显示更多</div>
      </div>
      <div class="goods">
        <div class="goods-head df">
          <span>商品信息</span>
          <span @click="goShoppingCart">返回购物出修改</span>
        </div>
        <ul class="goods-main">
          <li v-for="checkedGood in checkedGoods" :key="checkedGood.id" class="df">
            <img :src="checkedGood.img" alt />
            <span class="name">{{checkedGood.goodName}}</span>
            <div>
              <span>款式：{{checkedGood.style}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>尺码：{{checkedGood.size}}</span>
            </div>
            <span>￥{{checkedGood.price}}</span>
            <span>x {{checkedGood.num}}</span>
          </li>
        </ul>
      </div>
      <div class="pay df">
        <div>
          <span>支付方式</span>
          <span class="border-y">在线支付</span>
        </div>
        <div>
          <span>物流方式</span>
          <span class="border-y">普通快递</span>
        </div>
        <div>
          <span>发票信息</span>
          <span class="border-b">不开发票</span>
          <span class="border-c">开发票</span>
          <input type="text" />
          <button>保存</button>
        </div>
      </div>
      <div class="other df">
        <div class="beizhu">
          <span>备注</span>
          <textarea></textarea>
        </div>
        <div class="qingsuan">
          <span>清算</span>
          <div class="df">
            <span style="color:#f00001">{{checkedNum}}件商品，总金额：</span>
            <span>￥{{totalMoney}}</span>
          </div>
          <div class="df">
            <span>优惠金额：</span>
            <span>-￥0.00</span>
          </div>
          <div class="df">
            <span>运费：</span>
            <span>￥0.00</span>
          </div>
          <div class="df">
            <span>应付总额：</span>
            <span style="color:#f00001;font-size: 20px">￥{{totalMoney}}</span>
          </div>
          <button @click="goCashier">提交订单</button>
        </div>
      </div>
    </div>
    <div class="cover" v-show="show"></div>
    <div class="tanchuang" v-show="show">
      <AddAddress />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import AddAddress from "./AddAddress";
export default {
  name: "order",

  components: {
    AddAddress
  },
  computed: {
    ...mapState({
      addresses: state => state.address.details,
      show: state => state.address.show
    }),
    ...mapGetters(["checkedGoods", "totalMoney", "checkedNum"])
  },
  methods: {
    ...mapMutations([
      "changeDefault",
      "changeMainAddress",
      "tanchuaddNewaddress"
    ]),
    goShoppingCart() {
      this.$router.push(this.$publicUrl + "shoppingcart");
    },
    goCashier() {
      this.$router.push(this.$publicUrl + "cashier");
    }
  }
};
</script>

<style>
.order-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.order-inner .head {
  background-color: #fdd900;
  padding: 24px 50px 16px;
  justify-content: space-between;
  align-items: center;
}
.order-inner .head h3 {
  margin: 0;
  line-height: 60px;
  font-size: 28px;
  border-left: 5px solid #000;
  padding-left: 24px;
  font-weight: normal;
}
.order-inner .head h3 span {
  font-size: 22px;
}
.order-inner .head .head-nav span {
  font-size: 18px;
  margin-left: 20px;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.order-inner .head .head-nav span:nth-child(2) {
  border-bottom: 4px solid #000;
  font-weight: 700;
}
.order-inner .address {
  padding: 70px 50px;
  background: url("../assets/images/yellowbg_03.jpg") no-repeat;
}
.order-inner .address .address-head {
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
}
.order-inner .address .address-head .jia {
  display: inline;
  border: #000 1px solid;
  text-align: center;
  line-height: 16px;
  font-size: 12px;
  margin-right: 5px;
}
.order-inner .address .address-main {
  border-top: 2px solid #000;
  padding: 0;
}
.order-inner .address .address-main li {
  border-bottom: 1px solid #d1d7e3;
}

.order-inner .address .address-main li .li-inner {
  justify-content: space-between;
  margin: 10px;
  padding: 15px;
  align-items: center;
  border: #fff 2px solid;
}
.order-inner .address .address-main li .border-ye {
  border: #fdd900 2px solid;
  background: url("../assets/images/border_10.jpg") no-repeat left bottom;
}
.order-inner .address .address-main li .li-inner > div {
  width: 100px;
  flex-shrink: 0;
  text-align: center;
}
.order-inner .address .address-main li .li-inner > div:first-child {
  width: auto;
  flex-grow: 1;
  text-align-last: left;
}
.order-inner .address .address-main li .default {
  background-color: #2b2e33;
  color: #fff;
}
.order-inner .address .address-main span {
  display: block;
  font-size: 12px;
  padding: 12px 0;
}
.order-inner .address .address-main li .li-inner > div:first-child span {
  padding: 0;
}
.order-inner .address .more {
  background: url("../assets/images/cart-bg.jpg");
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  padding: 22px 0;
}
.order-inner .goods {
  padding: 0 50px;
}
.order-inner .goods .goods-head {
  justify-content: space-between;
  font-size: 18px;
  font-weight: 600;
}
.order-inner .goods .goods-head span:last-child {
  font-size: 14px;
  font-weight: normal;
  cursor: pointer;
}
.order-inner .goods .goods-main {
  padding: 0;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
}
.order-inner .goods .goods-main li {
  padding: 10px 24px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d7e3;
}
.order-inner .goods .goods-main li:last-child {
  border: 0;
}
.order-inner .goods .goods-main li img {
  width: 66px;
  margin-right: 10px;
}
.order-inner .goods .goods-main li span {
  font-size: 14px;
  width: 100px;
  text-align: right;
}
.order-inner .goods .goods-main li > div > span {
  color: #85868a;
  font-size: 12px;
}
.order-inner .goods .goods-main li .name {
  text-align-last: left;
  flex-grow: 1;
}
.order-inner .pay {
  padding: 0 50px;
  justify-content: space-between;
}
.order-inner .pay > div {
  display: flex;
  align-items: center;
}
.order-inner .pay > div > span {
  font-size: 14px;
}
.order-inner .pay > div > span:first-child {
  font-size: 18px;
  font-weight: 600;
  margin-right: 20px;
}
.order-inner .pay .border-y {
  display: block;
  text-align: center;
  line-height: 40px;
  width: 126px;
  height: 44px;
  border: #fdd900 2px solid;
  background: url("../assets/images/border_10.jpg") no-repeat left bottom;
}

.order-inner .pay .border-b {
  display: block;
  text-align: center;
  line-height: 40px;
  border: #babeca 2px solid;
  width: 96px;
  height: 44px;
  margin-right: 10px;
}
.order-inner .pay .border-c {
  display: block;
  text-align: center;
  line-height: 40px;
  border: #fdd900 2px solid;
  width: 96px;
  height: 44px;
  margin-right: 10px;
  background: url("../assets/images/border_10.jpg") no-repeat left bottom;
}
.order-inner .pay input {
  width: 174px;
  height: 44px;
}
.order-inner .pay button {
  margin-left: 10px;
  width: 56px;
  height: 44px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: #fdd900;
}
.order-inner .other {
  padding: 50px 50px;
}
.order-inner .other span {
  display: block;
}
.order-inner .other .beizhu {
  width: 350px;
  margin-right: 25px;
}
.order-inner .other .beizhu > span:first-child,
.order-inner .other .qingsuan > span:first-child {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 5px;
  border-bottom: 2px solid #000;
}
.order-inner .other .beizhu textarea {
  display: block;
  width: 350px;
  height: 140px;
  resize: none;
}
.order-inner .other .qingsuan {
  text-align: right;
  width: 725px;
}
.order-inner .other .qingsuan span:last-child {
  width: 164px;
  text-align: right;
}
.order-inner .other .qingsuan span:first-child {
  flex-grow: 1;
  text-align: right;
}
.order-inner .other .qingsuan > div {
  margin: 10px 0;
}
.order-inner .other .qingsuan button {
  width: 220px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: #fdd900;
  font-size: 24px;
}
.order .cover {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}
.order {
  position: relative;
}
.order .tanchuang {
  width: 690px;
  height: 420px;
  background-color: #fff;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);

  z-index: 1001;
}
</style>
