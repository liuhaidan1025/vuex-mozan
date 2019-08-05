<template>
  <div>
    <Header />
    <div class="bg">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
.bg {
  background-image: url("./assets/images/bg.jpg");
}
</style>
