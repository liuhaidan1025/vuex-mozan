<template>
  <div class="home">
    <div class="home-inner">
      <div class="banner">
        <Banner />
      </div>
      <div class="info">
        <div class="df">
          <div class="info-left">
            <div class="pre df">
              <img src="../assets/images/17.png" alt />
              <p class="goodName">{{preGoods.goodName}}</p>
            </div>
            <div class="time">
              <span>据预售结束</span>
              <div class="over-time">
                <Daojishi />
              </div>
              <p>
                <span>注：</span>
                商品将于
                <span>{{preGoods.salesTime}}</span>
                统一发售
              </p>
            </div>
          </div>
          <div class="info-right">
            <div class="df">
              <span class="type">预售价</span>
              <div>
                <span class="prePrice">￥{{preGoods.prePrice}}</span>
                <span class="price">正价￥{{preGoods.price}}</span>
              </div>
            </div>
            <div class="df">
              <span class="type">款式</span>
              <div class="df">
                <span
                  @click="addT(index,style)"
                  :class="index===styleInd?'active style':'style'"
                  v-for="(style,index) in preGoods.style"
                  :key="index"
                >{{style}}</span>
              </div>
            </div>
            <div class="df">
              <span class="type">尺码</span>
              <div class="df" style="flex-wrap:wrap;width:324px">
                <span
                  @click="addS(index,size)"
                  :class="index===sizeInd?'active size':'size'"
                  v-for="(size,index) in preGoods.size"
                  :key="index"
                >{{size}}</span>
              </div>
            </div>
            <div class="df">
              <span class="type">数量</span>
              <div class="df" style="justify-content:space-between;width:324px;align-items: center">
                <button class="add" @click="sub">-</button>
                <span style="color:white" class="num">{{num}}</span>
                <button class="sub" @click="add">+</button>
              </div>
            </div>
          </div>
        </div>
        <button class="purchase" @click="sucAccession(sucRouter)">立即预购</button>
      </div>

      <div class="details">
        <img src="../assets/images/1_03.jpg" alt />
        <img src="../assets/images/2_05.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Banner from "./Banner";
import Daojishi from "./Daojishi";
export default {
  name: "home",
  components: {
    Banner,
    Daojishi
  },
  data() {
    return {
      preGoods: this.$store.state.preGoods.pre,
      styleInd: "",
      sizeInd: "",
      num: 1
      // style: "",
      // size: ""
    };
  },
  methods: {
    ...mapMutations(["addType", "addSize", "addNum", "subNum", "sucAccession"]),
    sucRouter() {
      this.$router.push(this.$publicUrl + "sucaccession");
    },
    addT(index, style) {
      this.styleInd = index;
      this.addType(style);
    },
    addS(index, size) {
      this.sizeInd = index;
      this.addSize(size);
    },
    add() {
      this.num++;
      this.addNum(this.num);
    },
    sub() {
      if (this.num > 1) {
        this.num--;
        this.subNum(this.num);
      }
    }
  }
};
</script>

<style>
.home {
  /* background-image: ; */
  background: url("../assets/images/headerbg.png") top no-repeat,
    url("../assets/images/bg.jpg");
}
.home-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.home-inner .banner {
  padding: 33px 36px;
  background-image: url("../assets/images/商品详情页_banner_bg_03.png");
  position: relative;
}
.home-inner .info {
  height: 510px;
  background-color: #2b2e33;
}
/* .home-inner .details {
  background: url("../assets/images/header-fbg.png") no-repeat 0% 50%;
} */
.home .info {
  padding: 30px 50px 0;
}
.home-inner .info-left {
  width: 630px;
  border-right: 2px solid #707378;
}
.home-inner .info-left .pre img {
  display: block;
}
.home-inner .info-left .pre {
  margin-bottom: 62px;
}
.home-inner .info-left .goodName {
  font-size: 34px;
  margin: 0;
  color: #fff;
  padding-left: 30px;
}
.home-inner .info-left .time > span {
  font-size: 14px;
  color: #707378;
}
.home-inner .info-left .time .over-time {
  /* width: 418px;
  height: 64px;
  background-color: #707378;
  border-radius: 5px; */
  margin: 5px 0 16px;
}
.home-inner .info-left .time p {
  color: #f6d301;
  font-size: 14px;
}
.home-inner .info-left .time p span {
  color: #fff;
}
.info .purchase {
  margin-top: 20px;
  display: block;
  width: 100%;
  border: 3px solid #f6d301;
  background-color: #2b2e33;
  border-radius: 5px;
  color: #f6d301;
  text-align: center;
  line-height: 84px;
  font-size: 26px;
  font-weight: 700;
  cursor: pointer;
}

.info .info-right {
  padding-left: 50px;
}
.info .info-right > div {
  margin-bottom: 30px;
}
.info .info-right .type {
  display: block;
  width: 64px;
  height: 26px;
  border-radius: 7px;
  background-color: #fff;
  text-align: center;
  line-height: 26px;
  margin-right: 30px;
}
.info .info-right .prePrice {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: #f6d301;
}
.info .info-right .price {
  color: #fff;
  text-decoration: line-through;
}
.info .info-right .style {
  margin-right: 5px;
  display: block;
  width: 77px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
}
.info .info-right .size {
  margin-right: 5px;
  display: block;
  width: 62px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 8px;
  color: #fff;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  margin-bottom: 5px;
  cursor: pointer;
}
.info .info-right button {
  width: 67px;
  height: 36px;
  line-height: 36px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 8px;
  background-color: #2b2e33;
  font-size: 18px;
  outline: none;
  cursor: pointer;
}
.info .info-right .active {
  color: #f6d301;
  border: 1px solid #f6d301;
}
</style>
