<template>
  <div class="gift">
    <div class="giftInfo">
      <div class="left">
        <div class="title">新人一重礼</div>
        <div class="desc">惊喜红包</div>
      </div>
      <div class="right">102.1万人已领取</div>
    </div>
    <img src="~assets/imgs/gift.png" @click="getCoupons" />
    <div class="giftInfo">
      <div class="left">
        <div class="title">新人二重礼</div>
        <div class="desc">任选5款新人专享价商品</div>
      </div>
      <div class="right">查看全部></div>
    </div>
    <gift-list></gift-list>
  </div>
</template>

<script>
import GiftList from "./GiftList";
export default {
  name: "Gift",
  data() {
    return {};
  },
  methods: {
    // 跳转大省钱卡路由界面
    getCoupons() {
      this.$router.push("/sevecard");
    },
  },
  components: {
    GiftList,
  },
};
</script>

<style scoped>
.gift {
  width: 90%;
  height: 3.2rem;
  margin: auto;
  background-color: #fef7c9;
  font-size: 0.12rem;
}
.title {
  font-size: 0.16rem;
  font-weight: bolder;
  margin-right: 0.1rem;
  color: #952e14;
}
.giftInfo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  height: 0.3rem;
  line-height: 0.3rem;
  color: #d05749;
}
.left {
  display: flex;
  justify-content: space-between;
}
.gift img {
  width: 95%;
  display: block;
  margin: 0.1rem auto;
}
</style>
