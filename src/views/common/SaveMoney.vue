<template>
  <div class="savemoney">
    <img src="~assets/imgs/saveMoney.png" @click="toCard" />
  </div>
</template>

<script>
export default {
  name: "SaveMoney",
  data() {
    return {};
  },
  methods: {
    // 跳往省钱卡页面
    toCard() {
      // this.$router.push('')
    },
  },
};
</script>

<style scoped>
.savemoney {
  width: 90%;
  border-radius: 0.05rem;
  height: 0.4rem;
  margin: 0.1rem auto;
}
.savemoney img {
  width: 100%;
  height: 100%;
}
</style>
