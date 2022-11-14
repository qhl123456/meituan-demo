<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="wap-home-o" text="首页" to="/index" />
      <van-goods-action-icon
        icon="cart-o"
        text="购物车"
        :badge="cartNum"
        to="/cart"
      />
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click="addCart"
      />
      <van-goods-action-button type="danger" text="立即购买" @click="nowBuy" />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "DetailBootom",
  props: ["info"],
  data() {
    return {
      cartNum: 0,
    };
  },
  created() {
    this.$http.get("http://180.76.121.47/api/user/cart/").then(
      (res) =>
        (this.cartNum = res.data.reduce((prev, n) => {
          return prev + n.goods_count;
        }, 0))
    );
  },
  methods: {
    // 加入购物车
    addCart() {
      this.$http
        .post("http://180.76.121.47/api/user/cart/", {
          goods_id: this.$store.state.goodsId,
          goods_count: 1,
        })
        .then((res) => {
          Toast.success("加入购物车成功");
          this.$router.go(0);
        });
    },
    nowBuy() {
      localStorage.setItem("DetailGoodsId", this.info.goods_id);
      localStorage.setItem("totalprice", this.info.newprice);
      localStorage.setItem("count", 1);
      this.$router.push("/Nowtobuy");
    },
  },
  watch: {
    info(n, o) {
      console.log(n.goods_id);
    },
  },
};
</script>

<style scoped></style>
