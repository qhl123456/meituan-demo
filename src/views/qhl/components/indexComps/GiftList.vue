<template>
  <div class="giftlist">
    <ul>
      <li v-for="item in giftList" :key="item.goods_id">
        <img
          v-lazy="'http://180.76.121.47' + item.img"
          @click="toDetail(item.goods_id)"
        />
        <p>{{ item.name }}</p>
        <span style="color: #9b2516">￥{{ item.newprice }}</span>
        <van-button
          size="mini"
          block
          class="addCart"
          round
          color="#f8ce3a"
          @click="addCart(item.goods_id)"
          >加入购物车</van-button
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "GiftList",
  data() {
    return {
      giftList: [],
    };
  },
  created() {
    this.$http
      .get("http://180.76.121.47/api/goods/good/")
      .then((res) => (this.giftList = res.data.slice(10, 16)));
  },
  methods: {
    toDetail(id) {
      // console.log(id);
      this.$router.push("/goodsdetail/" + id);
    },
    addCart(id) {
      this.$http
        .post("http://180.76.121.47/api/user/cart/", {
          goods_id: id,
          goods_count: 1,
        })
        .then((res) => {
          Toast.success("加入购物车成功");
          this.$router.go(0);
        });
    },
  },
};
</script>

<style scoped>
.giftlist {
  width: 88%;
  margin: auto;
  position: absolute;
  overflow: auto;
}

.giftlist ul {
  height: 98%;
  display: flex;
  align-items: center;
}

.giftlist ul li {
  flex-shrink: 0;
  width: 1rem;
  height: 95%;
  margin-left: 0.1rem;
  text-align: center;
}
.giftlist ul li p {
  max-width: 0.55rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto;
  font-size: 0.1rem;
}
.giftlist ul li.price {
  font-size: 0.14rem;
}
.giftlist ul li img {
  width: 1rem;
  height: 1.1rem;
}
.addCart {
  width: 80%;
  margin: auto;
  font-size: 0.12rem;
}
.addCart span {
  color: #000;
}
</style>
