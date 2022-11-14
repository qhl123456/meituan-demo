<template>
  <div class="banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <slot></slot>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.banner {
  width: 90%;
  margin: 0.1rem auto;
  border-radius: 0.1rem;
}
</style>
