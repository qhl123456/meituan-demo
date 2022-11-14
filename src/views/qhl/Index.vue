<template>
  <div>
    <top-content />
    <Nav class="nav" :nav-list="IndexClassFyData"></Nav>
    <Sale></Sale>
    <goods-list></goods-list>
    <totop></totop>
    <save-money-card v-show="hasToken"></save-money-card>
    <pay v-if="hasToken"></pay>
    <double-evelen></double-evelen>
    <warn-login v-show="!hasToken"></warn-login>
    <tab-bar />
  </div>
</template>

<script>
import WarnLogin from "./components/indexComps/WarnLogin";
import TopContent from "./components/indexComps/TopContent";
import Nav from "./components/indexComps/Nav";
import Sale from "./components/indexComps/Sale";
import GoodsList from "../common/GoodsList";
import TabBar from "../common/TabBar.vue";
import Totop from "../common/Totop.vue";
import SaveMoneyCard from "./components/indexComps/SaveMoneyCard.vue";
import Pay from "./components/indexComps/Pay.vue";
import doubleEvelen from "../common/doubleEvelen";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "Index",
  data() {
    return {
      hasToken: null,
      IndexClassFyData: {},
    };
  },
  components: {
    WarnLogin,
    TopContent,
    Nav,
    Sale,
    GoodsList,
    TabBar,
    Totop,
    SaveMoneyCard,
    Pay,
    doubleEvelen,
  },
  computed: {
    ...mapState(["indexClassFyData"]),
  },
  methods: {
    ...mapMutations(["saveIndexClassFyData"]),
  },
  created() {
    if (localStorage.getItem("token")) {
      this.hasToken = true;
    }
    // 调用分类接口
    this.$http({
      url: "http://180.76.121.47/api/goods/cates/",
    }).then((res) => {
      // 调用mutations里面的方法
      this.saveIndexClassFyData({
        data: res.data,
      });
      this.IndexClassFyData = this.indexClassFyData;
    });

    // 获取用户信息
    // this.$http
    //   .get("http://180.76.121.47/api/user/lookaccount/")
    //   .then((res) => console.log(res.data));

    // 先实名认证
    // this.$http
    //   .post("http://180.76.121.47/api/user/addaccount/", {
    //     name: "33333332",
    //     city: "西安",
    //     sn: "610423200001012010",
    //   })
    //   .then((res) => console.log(res.data));
  },
};
</script>

<style scoped>
/* .van-grid {
  flex-wrap: nowrap;
} */
/* .van-grid{
  height: 1.2rem;
  display: flex;
  flex-wrap: nowrap;
} */
</style>
