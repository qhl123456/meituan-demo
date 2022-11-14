<template>
  <div id="app">
    <!-- 菜谱收藏 -->
    <Meun :arrindex="goodsInfo"></Meun>
    <Menunav :arrindex="goodsInfo"></Menunav>
    <Bottomz></Bottomz>
  </div>
</template>

<script>
import Meun from "./components/Meun.vue";
import Menunav from "./components/Meunnav.vue";
import Bottomz from "./components/Bottomz.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    Meun,
    Menunav,
    Bottomz,
  },
  data() {
    return {
      goodsInfo: null,
    };
  },
  created() {
    axios({
      url: "http://180.76.121.47/api/food/colrepice/",
      method: "get",
    }).then((res) => {
      console.log(res.data);
      this.goodsInfo = res.data;
    });
  },
};
</script>

<style scoped>
</style>