<template>

  <div id="app">
    <!-- 省钱卡 -->
    <Moneycard></Moneycard>
    <Moneynav></Moneynav>
    <Moneysection></Moneysection>
    <Bringfood></Bringfood>
    <Everyone></Everyone>
    <Immediately></Immediately>
  </div>
</template>

<script>
import Moneycard from "./components/Moneycard.vue";
import Moneynav from "./components/Money_nav.vue";
import Moneysection from "./components/Money_section.vue";
import Bringfood from "./components/Bring_food.vue";
import Everyone from "./components/Everyone.vue";
import Immediately from "./components/Immediately.vue";
export default {
  name: "App",
  components: { Moneycard, Moneynav, Moneysection,Bringfood ,Everyone,Immediately },
  data(){
    return{}
  }
};
</script>

<style scoped>
</style>