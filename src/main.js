import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "./utils/utils";
import "./assets/font/iconfont";
import VueRouter from "vue-router";
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
Vue.config.productionTip = false;

Vue.use(Vant);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
