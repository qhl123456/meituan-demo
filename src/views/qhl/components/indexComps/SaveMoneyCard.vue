<template>
  <div class="savemoney" v-show="showSaveMoney">
    <van-cell value="去开通" is-link>
      <template #icon> <van-icon name="cross" @click="close" /> </template>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #title>
        <img src="~assets/imgs/gosavemoney.png" alt="" @click="goSaveCard" />
        <span class="custom-title" @click="goSaveCard">您有1款免费菜待领</span>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: "SaveMoneyCard",
  data() {
    return {
      showSaveMoney: true,
    };
  },
  methods: {
    // 关闭省钱卡
    close() {
      this.showSaveMoney = false;
    },
    // 跳往省钱卡
    goSaveCard() {
      console.log(111);
      this.$router.push("/sevecard");
    },
  },
};
</script>

<style scoped>
.savemoney {
  width: 100%;
  height: 0.4rem;
  line-height: 0.4rem;
  position: fixed;
  bottom: 0.8rem;
  background-color: #fdf8e2;
}
.van-cell {
  background-color: transparent;
  font-size: 0.12rem;
  align-items: center;
}
.custom-title {
  font-size: 0.12rem;
}
.van-cell__value {
  color: #fd391f;
  font-weight: bold;
}
.savemoney img {
  width: 30%;
  vertical-align: sub;
}
</style>
