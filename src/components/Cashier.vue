<template>
  <div class="cashier">
    <div class="cashier-inner">
      <div class="head df">
        <h3>填写订单</h3>
        <div class="head-nav">
          <span>购物车</span>
          <span>填写订单</span>
          <span>付款,购买成功</span>
        </div>
      </div>
      <div class="suc df" v-show="!show4">
        <div>
          <img src="../assets/images/afterpay1.jpg" alt />
        </div>
        <div>
          <span class="sucPay">支付成功</span>

          <div class="sucNum df">
            <div>
              <span>订单号：1234567891234</span>
              <span>成功支付：￥{{totalMoney}}</span>
            </div>

            <div>
              <button>继续逛逛</button>
              <button>查看订单</button>
            </div>
          </div>
        </div>
      </div>
      <div class="main" v-show="show4">
        <div class="df">
          <div class="tishi">
            <h4>订单提交成功，请您尽快付款！</h4>
            <p>
              请您再提交订单后
              <span class="red">24小时</span>
              内完成支付，否则订单会自动取消。
            </p>
          </div>
          <div>
            <span>应付金额：</span>
            <span class="red fz">￥{{totalMoney}}</span>
          </div>
        </div>
        <div class="df">
          <h4>订单号：1234567891234</h4>
          <div>
            <span class="iconfont icon-ren">{{cashierAddress[0].user}}</span>
            <span class="iconfont icon-dianhua">{{cashierAddress[0].tel}}</span>
            <br />
            <span class="iconfont icon-dizhi">{{cashierAddress[0].address}}</span>
          </div>
        </div>
        <div class="df" v-show="show1">
          <h4>选择支付方式</h4>
          <div>
            <img src="../assets/images/pay1.jpg" alt />
          </div>
          <div>
            <img src="../assets/images/pay2.jpg" alt />
          </div>
        </div>
        <div class="fukuan" v-show="show1">
          <button @click="fukuan">付款</button>
        </div>
        <div class="df erweima" v-show="!show1">
          <p>支付宝支付</p>
          <div>
            <span>
              距离二维码过期还剩
              <span>{{time}}</span> 秒
            </span>
            <img src="../assets/images/erweima_03.jpg" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="cover" v-show="show2"></div>
    <div class="tanchuang" v-show="show3">
      <div class="top">
        <span>收银台</span>
        <span class="iconfont icon-cuo" @click="guanbi"></span>
      </div>
      <div class="main">
        <span>
          请您在新打开的网上支付页面进行支付
          <br />支付完成前请不要关闭该窗口
        </span>
        <div>
          <button @click="suc">已完成支付</button>
          <button>支付遇到问题</button>
        </div>
      </div>
      <div class="foot">
        <span>选择其他支付方式</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "cashier",
  data() {
    return {
      time: 10,
      show1: true,
      show2: false,
      show3: false,
      show4: true
    };
  },
  computed: {
    ...mapGetters(["cashierAddress", "totalMoney"])
  },
  created() {
    const aaa = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(aaa);
        this.show1 = true;
        this.show2 = true;
        this.show3 = true;
      }
    }, 1000);
  },
  methods: {
    fukuan() {
      this.show1 = false;
    },
    guanbi() {
      this.show1 = true;
      this.show2 = false;
      this.show3 = false;
    },
    suc() {
      this.show1 = false;
      this.show2 = false;
      this.show3 = false;
      this.show4 = false;
    }
  }
};
</script>

<style>
.cashier-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.cashier-inner .head {
  background-color: #fdd900;
  padding: 24px 50px 16px;
  justify-content: space-between;
  align-items: center;
}
.cashier-inner .head h3 {
  margin: 0;
  line-height: 60px;
  font-size: 28px;
  border-left: 5px solid #000;
  padding-left: 24px;
  font-weight: normal;
}
.cashier-inner .head h3 span {
  font-size: 22px;
}
.cashier-inner .head .head-nav span {
  font-size: 18px;
  margin-left: 20px;
  border-bottom: 2px solid #000;
  padding-bottom: 10px;
}
.cashier-inner .head .head-nav span:nth-child(3) {
  border-bottom: 4px solid #000;
  font-weight: 700;
}
.cashier-inner .main {
  padding: 70px 50px;
  background: url("../assets/images/yellowbg_03.jpg") no-repeat;
}
.cashier-inner .main p,
.cashier-inner .main span {
  font-size: 12px;
}
.cashier-inner .main span.red {
  color: #ef0000;
}
.cashier-inner .main span.fz {
  font-size: 20px;
}
.cashier-inner .main h4,
.cashier-inner .main p {
  margin: 0;
}
.cashier-inner .main p {
  margin-top: 10px;
}
.cashier-inner .main > div {
  padding: 20px 0;
}
.cashier-inner .main > div:first-child,
.cashier-inner .main > div:nth-child(3) {
  border-bottom: 2px solid #2b2e33;
  justify-content: space-between;
  align-items: center;
}
.cashier-inner .main > div:nth-child(3) {
  justify-content: flex-start;
}
.cashier-inner .main > div:nth-child(3) img {
  padding: 2px 20px;
  margin-left: 50px;
  border: #fff 2px solid;
}
.cashier-inner .main > div:nth-child(3) div:nth-child(2) img {
  border: #fdd900 2px solid;
  background: url("../assets/images/border_10.jpg") no-repeat left bottom;
}
.cashier-inner .main > div:nth-child(2) {
  border-bottom: 1px solid #babec9;
  justify-content: space-between;
  align-items: center;
}
.cashier-inner .main > div:nth-child(2) > div {
  text-align: right;
}
.cashier-inner .main > div.fukuan {
  text-align: right;
}
.cashier-inner .main > div:last-child p {
  font-size: 16px;
  font-weight: 600;
  padding-right: 100px;
}
.cashier-inner .main > div:last-child > div {
  text-align: center;
}
.cashier-inner .main > div:last-child img {
  display: block;
}
.cashier-inner .main button {
  width: 220px;
  height: 60px;
  line-height: 60px;
  font-size: 26px;
  text-align: center;
  background-color: #fdd900;
  outline: none;
  border: 0;
  cursor: pointer;
}
.cashier-inner .main .erweima {
  border-top: 2px solid #2b2e33;
}
.cashier .cover {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
}
.cashier {
  position: relative;
}
.cashier .tanchuang {
  position: absolute;
  width: 700px;
  background-color: #fff;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  padding: 0 22px;
}
.cashier .tanchuang .top {
  display: flex;
  justify-content: space-between;
  border-bottom: #000 2px solid;
}
.cashier .tanchuang .top .icon-cuo {
  cursor: pointer;
}
.cashier .tanchuang .top span {
  display: block;
  line-height: 58px;
  font-size: 18px;
  font-weight: 600;
}
.cashier .tanchuang .main {
  padding: 75px 0;
  text-align: center;
}
.cashier .tanchuang .main span {
  display: block;
  font-size: 14px;
  margin-bottom: 50px;
}
.cashier .tanchuang .main button {
  width: 210px;
  height: 52px;
  line-height: 52px;
  background-color: #2b2e33;
  border: 0;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  margin: 0 15px;
}
.cashier .tanchuang .foot {
  text-align: center;
  border-top: #000 2px solid;
}
.cashier .tanchuang .foot span {
  display: block;
  line-height: 74px;
  font-size: 14px;
  color: #28a7ec;
  cursor: pointer;
}
.cashier .suc {
  padding: 70px 50px;
  background: url("../assets/images/yellowbg_03.jpg") no-repeat;
  align-items: center;
}
.cashier .suc img {
  margin-right: 30px;
}
.cashier .suc > div:last-child {
  flex-grow: 1;
}
.cashier .suc .sucPay {
  display: block;
  font-size: 26px;
  font-weight: 600;
  padding-bottom: 20px;
  border-bottom: #000 2px solid;
}
.cashier .suc .sucNum {
  justify-content: space-between;
  padding-top: 20px;
}
.cashier .suc .sucNum span {
  display: block;
  font-weight: 600;
  font-size: 18px;
}
.cashier .suc button {
  width: 220px;
  height: 60px;
  font-size: 26px;
  line-height: 60px;
  border: 0;
  outline: none;
  cursor: pointer;
  background-color: #fdd900;
  text-align: center;
  margin-left: 10px;
}
</style>
