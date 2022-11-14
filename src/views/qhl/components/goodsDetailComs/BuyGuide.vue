<template>
  <div class="buyguide">
    <img src="~assets/imgs/buyguide.jpg" alt="" />
    <div class="content">
      <van-cell-group>
        <van-cell title="价格说明" />
      </van-cell-group>
      <div class="info">
        <p v-show="isLook">
          1.划线价格:指美团优选平台内经营者建议参考价,是平台内经营者参考线上商城、门市价、吊牌价等来源提供的价格,并非《禁止价格欺诈行为的规定》等法律条款中所指的“原价”,仅供购买时参考。
        </p>
        <p v-show="isLook">
          2.未划线价:指商品的实时价格,不因表述的差异改变性质,具体成交价格根据商品参加活动,或使用优惠券等发生变化,最终以订单结算价格为准。
        </p>
      </div>
      <van-button size="large" block :class="{ look: isLook }" @click="lookMore"
        >查看商品价格说明
        <van-icon name="arrow-up" v-show="isLook" />
        <van-icon name="arrow-down" v-show="!isLook" />
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyGuide",
  data() {
    return {
      isLook: false,
    };
  },
  methods: {
    lookMore() {
      this.isLook = !this.isLook;
    },
  },
};
</script>

<style scoped>
.buyguide {
  width: 100%;
  padding: 0.1rem;
  margin: 0.1rem auto;
  box-sizing: border-box;
  background-color: #fff;
}
.buyguide img {
  width: 100%;
  height: 3.65rem;
}
.van-cell__title {
  font-weight: bold;
}
.info {
  font-size: 0.12rem;
  color: #0000009e;
  box-sizing: border-box;
  padding: 0.13rem;
}
.info p {
  margin-bottom: 0.05rem;
  line-height: 0.2rem;
}
.van-button--large {
  width: 90%;
  height: 0.35rem;
  margin: auto;
  font-size: 0.12rem;
  color: #0000009e;
  border: none;
}
.look {
  border-top: 0.01rem solid #cccccc;
}
</style>
