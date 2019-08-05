<template>
  <div class="sucaccession">
    <div class="suc-inner">
      <div class="head">
        <h3>已成功加入购物车</h3>
      </div>
      <div class="showGoods">
        <div class="show-inner df">
          <div>
            <img src="../assets/images/商品详情页_lunbo_03.jpg" alt />
            <!-- <img :src="showGoods.img" alt /> -->
          </div>
          <div>
            <p>{{showGoods.goodName}}</p>
          </div>
          <div>
            <span>款式：{{showGoods.style}}</span>
            <span>尺码：{{showGoods.size}}</span>
            <span>数量：{{showGoods.num}}</span>
          </div>
          <div>
            <button class="back" @click="back">返回</button>
          </div>
          <div>
            <button class="go" @click="go">去购物车结算</button>
          </div>
        </div>
      </div>
      <div class="foot">
        <div class="foot-head df">
          <p>您可能还需要</p>
          <span></span>
        </div>
        <div class="foot-other df">
          <div>
            <img :src="otherGoods.img" alt />
            <div>
              <p>{{otherGoods.name}}</p>
              <div class="df">
                <span>￥{{otherGoods.price}}</span>
                <span class="iconfont icon-gouwu"></span>
              </div>
            </div>
          </div>
          <div>
            <img :src="otherGoods.img" alt />
            <div>
              <p>{{otherGoods.name}}</p>
              <div class="df">
                <span>￥{{otherGoods.price}}</span>
                <span class="iconfont icon-gouwu"></span>
              </div>
            </div>
          </div>
          <div>
            <img :src="otherGoods.img" alt />
            <div>
              <p>{{otherGoods.name}}</p>
              <div class="df">
                <span>￥{{otherGoods.price}}</span>
                <span class="iconfont icon-gouwu"></span>
              </div>
            </div>
          </div>
          <div>
            <img :src="otherGoods.img" alt />
            <div>
              <p>{{otherGoods.name}}</p>
              <div class="df">
                <span>￥{{otherGoods.price}}</span>
                <span class="iconfont icon-gouwu"></span>
              </div>
            </div>
          </div>
          <div>
            <img :src="otherGoods.img" alt />
            <div>
              <p>{{otherGoods.name}}</p>
              <div class="df">
                <span>￥{{otherGoods.price}}</span>
                <span class="iconfont icon-gouwu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "sucaccession",
  computed: {
    ...mapState({
      showGoods: state => state.preGoods.sucGoods,
      otherGoods: state => state.preGoods.goods
    })
  },
  methods: {
    ...mapMutations(["addCart"]),
    back() {
      this.$router.back(-1);
    },
    go() {
      this.addCart(this.showGoods);
      this.$router.push(this.$publicUrl + "shoppingcart");
    }
  }
};
</script>

<style>
.suc-inner {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.suc-inner .head {
  background-color: #fdd900;
  padding: 24px 50px 16px;
}
.suc-inner .head h3 {
  margin: 0;
  line-height: 60px;
  font-size: 28px;
  border-left: 5px solid #000;
  padding-left: 24px;
  font-weight: normal;
}
.suc-inner .showGoods {
  padding: 70px 50px;
  background: url("../assets/images/yellowbg_03.jpg") no-repeat;
}
.suc-inner .showGoods .show-inner {
  padding: 9px 10px;
  border-top: 2px solid #babec9;
  border-bottom: 2px solid #babec9;
  align-items: center;
}
.suc-inner .showGoods .show-inner img {
  display: block;
  width: 96px;
  margin-right: 10px;
}
.suc-inner .showGoods .show-inner p {
  width: 238px;
  font-size: 18px;
}
.suc-inner .showGoods .show-inner span {
  color: #737479;
  font-size: 14px;
  display: block;
}
.suc-inner .showGoods .show-inner > div:nth-child(3) {
  border-left: 2px solid #fdd900;
  padding: 9px 0px 8px 20px;
  margin-left: 20px;
  flex-grow: 1;
}
.suc-inner .showGoods .show-inner .back {
  width: 132px;
  height: 46px;
  background-color: #2b2e33;
  line-height: 46px;
  text-align: center;
  font-size: 18px;
  color: #f6f4f7;
  border: none;
  outline: none;
  cursor: pointer;
}
.suc-inner .showGoods .show-inner .go {
  margin-left: 10px;
  width: 210px;
  height: 46px;
  background-color: #fdd900;
  line-height: 46px;
  text-align: center;
  font-size: 18px;
  border: none;
  outline: none;
  cursor: pointer;
}
.suc-inner .foot {
  padding: 0 50px;
}
.suc-inner .foot p {
  color: #2d2e33;
  font-size: 18px;
  padding-right: 5px;
}
.suc-inner .foot .foot-head span {
  flex-grow: 1;
  margin-top: 30px;
  border-top: 2px solid #fdd900;
}
.suc-inner .foot .foot-other {
  justify-content: space-between;
  padding-bottom: 120px;
}
.suc-inner .foot .foot-other > div > div {
  border: 1px solid #d1d7e3;
  width: 196px;
}
.suc-inner .foot .foot-other img {
  display: block;
  width: 196px;
}
.suc-inner .foot .foot-other p {
  font-size: 12px;
  width: 136px;
  padding-left: 10px;
}
.suc-inner .foot .foot-other > div > div > div {
  justify-content: space-between;
  padding: 30px 10px 10px;
}
.suc-inner .foot .foot-other span {
  color: #db2323;
  font-size: 18px;
}
.suc-inner .foot .foot-other span.iconfont {
  color: #ffd801;
  border: 2px solid #ffd801;
  padding: 0 20px;
}
</style>
