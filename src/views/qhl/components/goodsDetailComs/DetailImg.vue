<template>
  <div class="detailimgs">
    <van-cell-group>
      <van-cell title="商品详情" />
    </van-cell-group>
    <div class="imgs">
      <img v-for="(item, index) in goodsImg" :key="index" v-lazy="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailImg",
  props: ["goodsImg"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.detailimgs {
  background-color: #fff;
}
.van-cell__title {
  font-weight: bold;
  font-size: 0.16rem;
}
.imgs {
  padding: 0.1rem;
  margin: 0.1rem auto;
  box-sizing: border-box;
}
.imgs img {
  width: 100%;
}
</style>
