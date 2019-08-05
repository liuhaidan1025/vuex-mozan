<template>
  <header>
    <div class="header-inner df">
      <div class="left">
        <span class="iconfont icon-toggle"></span>
      </div>
      <div class="logo" @click="goHome">
        <img src="../assets/images/logo.png" alt />
      </div>
      <div class="right">
        <span class="iconfont icon-sousuo"></span>
        <span class="iconfont icon-gouwu"></span>
        <span>登录</span>&nbsp;
        <span>/</span>&nbsp;
        <span>注册</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "tou",
  methods: {
    goHome() {
      this.$router.push(this.$publicUrl);
    }
  }
};
</script>

<style>
header {
  background-color: #2b2e33;
}
.header-inner {
  width: 1200px;
  margin: 0 auto;
  padding: 12px 0;
  align-items: center;
}

.header-inner .iconfont {
  color: #6f7478;
  font-size: 20px;
}
.header-inner span {
  color: #6f7478;
}
.header-inner .left,
.header-inner .right {
  width: 283px;
  flex-shrink: 0;
}
.header-inner .right .icon-gouwu {
  padding: 0 44px 0 68px;
}
.header-inner .left {
  padding-left: 56px;
}
.header-inner .logo {
  flex-grow: 1;
  text-align: center;
  cursor: pointer;
}
</style>
