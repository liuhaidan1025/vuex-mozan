<template>
  <div class="daojishi">
    <div>
      <span>{{day>9?day:'0'+day}}</span>
      <br />
      <span>天</span>
    </div>
    <span>:</span>
    <div>
      <span>{{hour>9?hour:'0'+hour}}</span>
      <br />
      <span>时</span>
    </div>
    <span>:</span>
    <div>
      <span>{{minute>9?minute:'0'+minute}}</span>
      <br />
      <span>分</span>
    </div>
    <span>:</span>
    <div>
      <span>{{second>9?second:'0'+second}}</span>
      <br />
      <span>秒</span>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "daojishi",
  data() {
    return {
      day: "0",
      hour: "0",
      minute: "0",
      second: "0"
    };
  },
  computed: {
    overtime() {
      return this.$store.state.preGoods.pre.salesTime;
    }
  },
  created() {
    setInterval(() => {
      const endTime = moment(this.overtime, "YYYY-MM-DD HH:mm:ss");
      const nowTime = moment(moment().format(), "YYYY-MM-DD HH:mm:ss");

      this.day = endTime.diff(nowTime, "day");
      this.hour =
        endTime.diff(nowTime, "hour") - endTime.diff(nowTime, "day") * 24;
      this.minute =
        endTime.diff(nowTime, "minute") - endTime.diff(nowTime, "hour") * 60;
      this.second =
        endTime.diff(nowTime, "second") - endTime.diff(nowTime, "minute") * 60;
    }, 800);
  }
};
</script>

<style>
.daojishi {
  width: 418px;
  height: 64px;
  background-color: #707378;
  border-radius: 5px;
  /* margin: 5px 0 16px; */
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
}
.daojishi span {
  font-size: 32px;
  color: #f6d301;
}
.daojishi > div > span:nth-child(3) {
  font-size: 14px;
}
.daojishi > div {
  text-align: center;
}
</style>
