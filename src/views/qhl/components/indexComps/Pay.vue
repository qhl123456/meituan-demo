<template>
  <div class="pay" @click="toPay">
    <van-row>
      <van-col span="4">
        <van-icon
          name="cart-o"
          size="0.3rem"
          :badge="goodsNum"
          @click="goCart"
        />
      </van-col>
      <van-col span="20">
        <div class="btn">￥{{ price }}去支付 ></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "Pay",
  data() {
    return {
      Goods: [],
      price: "",
      goodsId: "",
      goodsNum: 0,
    };
  },
  methods: {
    toPay() {
      //跳转支付页面
      for (let i = 0; i < this.Goods.length; i++) {
        this.goodsId += this.Goods[i].goods.goods_id + ",";
      }
      localStorage.setItem(
        "DetailGoodsId",
        this.goodsId.slice(0, this.goodsId.length - 1)
      );
      localStorage.setItem("totalprice", this.price);
      localStorage.setItem("count", 0);
      this.$router.push("/Nowtobuy");
    },
    goCart() {
      this.$router.push("/cart");
    },
  },

  created() {
    this.$http.get("http://180.76.121.47/api/user/cart/").then((res) => {
      this.goodsNum = res.data.reduce((prev, n) => {
        return prev + n.goods_count;
      }, 0);
      this.Goods = res.data;
      this.price = this.Goods.reduce((prev, n) => {
        return prev + n.goods_count * n.goods.newprice;
      }, 0).toFixed(2);
    });
  },
};
</script>

<style scoped>
.pay {
  width: 100%;
  height: 0.43rem;
  line-height: 0.4rem;
  position: fixed;
  bottom: 0.38rem;
  background-color: #fff;
}
.pay .btn {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #f8cf39;
  border-radius: 0.2rem;
}
.van-col--4 {
  text-align: center;
}
</style>
