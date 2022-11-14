<template>
  <div id="app">
    <!-- 菜谱 -->
    <Practice :listing="goodsInfo"></Practice>
    <Listing :listing="goodsInfo"></Listing>
    <Steps :listing="goodsInfo"></Steps>
    <Bottomz></Bottomz>
    <Shopping :listing="goodsInfo"></Shopping>
  </div>
</template>

<script>
import Practice from "./components/Practice.vue";
import Listing from "./components/Listing.vue";
import Steps from "./components/Steps.vue";
import Bottomz from "./components/Bottomz.vue";
import Shopping from "./components/Shopping.vue";
import axios from "axios";

export default {
  name: "Detail",
  components: { Practice, Listing, Steps, Bottomz, Shopping },
  data() {
    return {
      goodsInfo: null,
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.repice_id;
  },
  watch: {
    id(n, o) {
      axios({
        url: `http://180.76.121.47/api/food/fooddetail/${n}/`,
      }).then((res) => {
        this.goodsInfo = res.data;
      });
    },
  },
};
</script>

<style scoped></style>
