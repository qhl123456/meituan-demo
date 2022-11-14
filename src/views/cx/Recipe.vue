<template>

  <div id="app">
    <!-- 吃什么 -->
     <Toeat></Toeat>
    <Inspiration></Inspiration>
    <tab-bar />
  </div>
</template>

<script>
import Toeat from "./components/Toeat.vue";
import Inspiration from "./components/Inspiration.vue";
import TabBar from "../common/TabBar.vue";
export default {
  components: {Toeat,Inspiration, TabBar },
  name: "Recipe",
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
