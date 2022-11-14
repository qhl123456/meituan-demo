<template>
  <div id="app">
    <van-sticky>
      <div class="top">
        <couponHeader class="header"></couponHeader>
      </div>
    </van-sticky>
    <!-- <couponHeader class='header'></couponHeader> -->
    <couponBody class="center"></couponBody>
  </div>
</template>

<script>
// import { Sticky } from 'vant';
import couponHeader from "./components/couponHeader.vue";
import couponBody from "./components/couponBody.vue";

export default {
  name: "App",
  components: {
    couponHeader,
    couponBody,
  },
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>

<style scope>
.top {
  width: 100%;
  height: 0.6rem;
  background-color: white;
  overflow: hidden;
}
.header {
  margin: 0.1rem auto;
}
.center {
  position: relative;
}
.center .head {
  width: 100%;
  height: 0.3rem;
  position: absolute;
  top: 0.25rem;
  left: 0;
}
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #323233;
  font-weight: bold;
  font-size: 0.16rem;
}
.van-tabs--line .van-tabs__wrap {
  height: 0.28rem;
  font-weight: bold;
  margin-bottom: 0.4rem;
}
</style>
