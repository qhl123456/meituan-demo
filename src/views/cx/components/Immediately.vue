<template>
  <div id="app">
    <p><span>3.9</span>元/月</p>
    <div class="immediately" @click="fun(900)">立即开卡</div>
  </div>
</template>

<script>
import { Toast } from "vant";
import Vue from "vue";
import { Tab, Tabs } from "vant";
import axios from "axios";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Toast);
export default {
  data() {
    return {};
  },
  methods: {
    fun(cart) {
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
      });
      // localStorage.setItem("DetailGoodsId", cart);
      //  localStorage.setItem("totalprice",3.9);
      // this.$router.push("/Nowtobuy");
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  height: 0.5rem;
  margin: 0.5rem auto;
  background: #4f2d14;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  line-height: 0.5rem;
}
#app p {
  margin-left: 0.2rem;
  color: white;
  font-size: 0.14rem;
}
#app p span {
  font-size: 0.22rem;
}
#app .immediately {
  width: 1.26rem;
  height: 0.4rem;
  background: yellow;
  border-radius: 0.4rem;
  margin-top: 0.05rem;
  margin-right: 0.05rem;
  text-align: center;
  line-height: 0.4rem;
  color: #4f2d14;
}
</style>
