import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 商品id
    goodsId: "",
    // 用户数据
    userInfoData: {},
    // 首页分类数据
    indexClassFyData: {},
    // 商品列表数据
    goodsList: [],
    // nav当前显示的数据
    currentGoods: [],
    //支付总价格
    totalPrice: 0,
    //已支付商品ID
    hasPayGood: [],
    //未支付商品
    noPayGood: [],
  },
  mutations: {
    // 详情页跳转到立即购买的商品id
    getGoodsId(state, payload) {
      // console.log(payload);
      state.goodsId = payload.goodsId;
    },
    // 登陆成功后存放用户数据
    saveUserInfo(state, payload) {
      // console.log(payload);
      state.userInfoData = payload.info;
    },
    // 存放主页分类数据
    saveIndexClassFyData(state, payload) {
      state.indexClassFyData = payload.data;
    },
    // 存放商品列表数据
    saveGoodsList(state, payload) {
      state.goodsList = payload.data.slice(10, payload.data.length);
    },
    // 存放购物车所有的价格
    savaCartPrice(state, payload) {
      state.totalPrice = payload.data;
    },
    // 存取当前显示的nav对应的数据
    saveCurrentGoods(state, payload) {
      state.currentGoods = payload.data;
    },

    //立即购买页面跳转到支付页面
    getTotalPrice(state, payload) {
      state.totalPrice = payload.totalPrice;
    },
    //支付成功获取的商品id显示在我的订单
    getHasPayGood(state, payload) {
      state.hasPayGood = payload.hasPayGood;
    },
    //未支付成功获取的商品id显示在我的订单
    getNoPayGood(state, payload) {
      state.noPayGood = payload.noPayGood;
    },
  },
  actions: {},
  modules: {},
});
