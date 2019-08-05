<template>
  <div class="swiper-banner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/images/lunbo_03.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/lunbo_05.jpg" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/lunbo_08.jpg" alt />
      </swiper-slide>
    </swiper>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "banner",
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },

  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

<style>
.swiper-container {
  width: 1128px;
}
.swiper-slide {
  text-align: center;
}
.swiper-banner .swiper-button-prev,
.swiper-banner .swiper-button-next {
  width: 36px;
  height: 120px;
  line-height: 120px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #f6d301;
  transform: translateY(-50%);
  margin-top: 0;
  outline: none;
}
.swiper-banner .swiper-button-prev {
  left: 0;
}
.swiper-banner .swiper-button-next {
  right: 0;
}
</style>
