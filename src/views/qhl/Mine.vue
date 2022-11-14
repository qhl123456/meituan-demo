<template>
  <div>
    <user-header></user-header>
    <goods-list></goods-list>
    <totop></totop>
    <tab-bar />
  </div>
</template>

<script>
import UserHeader from "./components/mineComps/UserHeader.vue";
import GoodsList from "../common/GoodsList.vue";
import TabBar from "../common/TabBar.vue";
import Totop from "../common/Totop.vue";
export default {
  components: { TabBar, UserHeader, GoodsList, Totop },
  name: "Mine",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
