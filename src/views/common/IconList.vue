<template>
  <div>
    <van-grid direction="horizontal" :column-num="num" :border="border">
      <slot></slot>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "IconList",
  props: ["num"],
  data() {
    return {
      border: false,
    };
  },
};
</script>

<style scoped></style>
