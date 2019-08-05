<template>
  <div class="address">
    <div class="top">
      <span>新增地址</span>
      <span class="iconfont icon-cuo"></span>
    </div>
    <div class="main">
      <div class="df">
        <div style="marginRight:8px">
          <div style="display:flex;justify-content: space-between">
            <div>
              <span class="color">*</span>
              <span>收货人</span>
            </div>
            <span class="color">请填写收货人!</span>
          </div>
          <input type="text" style="width:210px;height:26px" v-model="user" />
        </div>
        <div>
          <div style="display:flex;justify-content: space-between">
            <div>
              <span class="color">*</span>
              <span>联系电话</span>
            </div>
            <span class="color">请填的手机号码格式错误!</span>
          </div>

          <input type="text" style="width:430px;height:26px" v-model="tel" />
        </div>
      </div>
      <div>
        <div style="display:flex;justify-content: space-between">
          <div>
            <span class="color">*</span>
            <span>所在地址</span>
          </div>
          <span class="color">请填写完整的所在地址!</span>
        </div>
        <v-distpicker :placeholders="placeholders" @province="sheng" @city="shi" @area="qu"></v-distpicker>
      </div>
      <div>
        <div style="display:flex;justify-content: space-between">
          <div>
            <span class="color">*</span>
            <span>详细地址</span>
          </div>
          <span class="color">请填写详细地址!</span>
        </div>

        <input type="text" style="width:100%;height:26px" v-model="infoAddress" />
      </div>
      <div style="display:flex;justify-content: space-between">
        <div>
          <span>地址别名</span>
          <br />
          <input type="text" style="width:430px;height:26px" v-model="bieming" />
        </div>
        <div>
          <span>常用别名</span>
          <div style="display:flex;justify-content: space-between">
            <span class="border">家</span>
            <span class="border">公司</span>
            <span class="border">父母家</span>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div>
        <input type="checkbox" />
        <label>设置为默认地址</label>
      </div>
      <button
        @click="addNewAddress({
        user:user,
        id:new Date().getTime(),
        address:
          pro+city+area+infoAddress,
        tel:tel
      })"
      >保存地址</button>
    </div>
  </div>
</template>

<script>
import VDistpicker from "v-distpicker";
import { mapMutations } from "vuex";
export default {
  name: "addaddress",
  data() {
    return {
      placeholders: {
        province: "请选择",
        city: "请选择",
        area: "请选择"
      },
      user: "",
      tel: "",
      infoAddress: "",
      bieming: "",
      pro: "",
      city: "",
      area: ""
    };
  },
  components: {
    VDistpicker
  },
  methods: {
    sheng(aaa) {
      this.pro = aaa.value;
    },
    shi(aaa) {
      this.city = aaa.value;
    },
    qu(aaa) {
      this.area = aaa.value;
    },
    ...mapMutations(["addNewAddress"])
  }
};
</script>

<style>
.address {
  padding: 0 20px;
}
.address .top {
  border-bottom: 2px solid #000;
  display: flex;
  justify-content: space-between;
}
.address .top span {
  line-height: 58px;
  font-size: 18px;
  font-weight: 600;
}
.address span.color {
  color: #ee0000;
}
.address span.border {
  width: 66px;
  height: 26px;
  display: block;
  border: 1px solid #babec9;
  margin-left: 5px;
  text-align: center;
}
.distpicker-address-wrapper {
  display: flex;
  justify-content: space-between;
}
.distpicker-address-wrapper select {
  width: 210px;
  height: 26px;
  padding: 0;
  border-radius: 0;
  font-size: 14px;
  line-height: 26px;
  outline: none;
}
.address .main > div {
  padding-top: 20px;
}
.address input {
  outline: none;
}
.address .foot button {
  width: 210px;
  height: 52px;
  line-height: 52px;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #fdd900;
  font-size: 18px;
  font-weight: 600;
  border: 0;
}
.address .foot {
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
