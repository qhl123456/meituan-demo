<template>
  <div @click="goCoupons">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-liangfantuanshuangshiyilogo"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: "doubleEvelen",
  data() {
    return {};
  },
  methods: {
    goCoupons() {
      // 领取优惠券;
      this.$http
        .get("http://180.76.121.47/api/goods/extrac_dc/13/")
        .then((res) => console.log(res.data));
      // this.$http({
      //   url: "http://180.76.121.47/api/goods/search/",
      //   params: {
      //     sg: "核桃",
      //   },
      // }).then((res) => console.log(res.data));
      this.$router.push("/coupon");
    },
  },
};
</script>

<style scoped>
.icon {
  width: 15%;
  height: 9%;
  position: fixed;
  right: 0.2rem;
  bottom: 1.45rem;
  color: pink;
}
</style>
