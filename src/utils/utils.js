// 这里写网络请求封装和一些公共的方法
import Vue from "vue";
// 懒加载
import VueLazyLoad from "vue-lazyload";
import { Lazyload } from "vant";

//使用懒加载
Vue.use(Lazyload);
Vue.use(VueLazyLoad, {
  loading: require("../assets/imgs/loading.gif"),
});

// 导入NProgress包对应的js和css
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.headers.common["Content-Type"] =
  "application/json;charset=utf-8";

Vue.prototype.$http = axios;

axios.interceptors.request.use((config) => {
  NProgress.start();
  config.headers.Authorization =
    "Token " + window.localStorage.getItem("token");
  return config;
});
// 显示价格的全局过滤器
Vue.filter("showPrice", (price) => "￥" + price.toFixed(2));
// 转换时间的全局过滤器
Vue.filter("dataFormat", function (originVal) {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "").padStart(2, "0");
  const hh = (dt.getHours() + "").padStart(2, "0");
  const mm = (dt.getMinutes() + "").padStart(2, "0");
  const ss = (dt.getSeconds() + "").padStart(2, "0");
  return ` ${y}-${m}-${d} ${hh}:${mm}:${ss} `;
});

axios.interceptors.response.use((config) => {
  NProgress.done();
  // console.log(config);
  return config;
});

// 事件总线
// $bus
Vue.prototype.$bus = new Vue();

// fastclick解决移动端300ms得延迟
import FastClick from "fastclick";
FastClick.attach(document.body);

// 引入px转rem插件
// import "lib-flexible/flexible";
