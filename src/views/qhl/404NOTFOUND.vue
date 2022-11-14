<template>
  <div>
    <van-notice-bar
      left-icon="volume-o"
      text="404 NOT FOUND! 亲，这里什么都没有哦，快去主页看看更多的商品吧！"
    />
    <van-empty description="404 NOT FOUND!">
      <van-button round type="danger" class="bottom-button" @click="goBack"
        >返回主页</van-button
      >
    </van-empty>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.push("/index");
    },
  },
};
</script>

<style scoped></style>
