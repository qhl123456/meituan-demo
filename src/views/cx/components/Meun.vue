<template>
  <div id="app">
    <div class="app-head">
      <span class="iconfont icon-changyongicon-" @click="fun"></span>
      <span class="app-head-hader">菜谱收藏</span>
      <span class="app-head-num" v-if="add">{{ add.length }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["arrindex"],
  name: "App",
  data() {
    return {
      add: true,
    };
  },
  methods: {
    fun() {
      this.$router.back();
    },
  },
  watch: {
    arrindex(n, o) {
      this.add = n;
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  height: 0.8rem;
  margin: 0 auto;
  overflow: hidden;
}
.app-head {
  margin-top: 0.45rem;
  font-size: 0.18rem;
}
.iconfont {
  font-size: 0.2rem;
}
</style>