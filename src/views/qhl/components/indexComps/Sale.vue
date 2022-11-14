<template>
  <div class="sale">
    <van-row>
      <van-col span="7">
        <h3>秒杀特卖</h3>
        <van-count-down :time="time" class="time" />
        <img src="~assets/imgs/daojishi.png" alt="" />
      </van-col>
      <van-col
        span="5"
        v-for="(item, index) in 3"
        :key="index"
        class="saleItem"
      >
        <img src="~assets/imgs/sale1.png" alt="" />
        <p>￥3.09</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Sale",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
};
</script>

<style scoped>
.sale {
  width: 100%;
  height: 1.1rem;
  margin: 0.1rem auto;
  margin-top: -0.1rem;
  box-sizing: border-box;
  text-align: center;
}
h3 {
  font-size: 0.14rem;
}
.time {
  font-size: 0.1rem;
  color: #cccccc;
}
.saleItem img {
  width: 100%;
  height: 80%;
}
.saleItem p {
  font-size: 0.14rem;
  color: #fd292f;
}
</style>
