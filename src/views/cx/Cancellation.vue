<template>
  <div id="app">
    <!-- 注销登录 -->
    <Serup></Serup>
    <Setupnav></Setupnav>
  </div>
</template>

<script>
import Serup from "./components/Setup.vue";
import Setupnav from "./components/Setupnav.vue";
export default {
  data() {
    return {};
  },
  components: {
    Serup,
    Setupnav,
  },
};
</script>

<style scoped></style>
