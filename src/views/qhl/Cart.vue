<template>
  <div class="cart">
    <!-- 头部 -->
    <van-sticky>
      <van-cell-group>
        <van-cell title="购物车" />
      </van-cell-group>
    </van-sticky>
    <!-- 商品列表区域 -->
    <cart-list :goods="goods"></cart-list>
    <totop></totop>
    <tab-bar />
  </div>
</template>

<script>
import TabBar from "../common/TabBar.vue";
import Totop from "../common/Totop.vue";
import CartList from "./components/catrComps/CartList.vue";
export default {
  components: { TabBar, CartList, Totop },
  data() {
    return {
      goods: [],
    };
  },
  created() {
    this.$http
      .get("http://180.76.121.47/api/user/cart/")
      .then((res) => (this.goods = res.data));
  },
  methods: {},
};
</script>

<style scoped>
.van-cell__title {
  font-size: 0.16rem;
  font-weight: bold;
}
.cart {
  background-color: #efefef;
}
</style>
