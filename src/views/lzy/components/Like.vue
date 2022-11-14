<template>
  <div>
    <!-- <div class="like">
		<van-card
		  v-for="item in goodslist"
		  :key="item.id"
		  @click-thumb="toDetail(item.id)"
		  :price="item.price"
		  :desc="item.num"
		  :title="item.name"
		  :thumb="item.img"
		>
		  <template #tags>
		    <van-tag plain type="danger">{{ item.rank }}</van-tag>
		  </template>
		  <template #footer>
		    <van-button
		      size="mini"
		      round
		      color="#f8ce3a"
		      class="addCart"
		      @click.self="addCart(item.id)"
		      >加入购物车</van-button
		    >
		  </template>
		</van-card> -->

    <ul>
      <li v-for="goods in goodslist" :key="goods.id" @click="goodsdetail">
        <img v-lazy="goods.img" />

        <p>
          <b>{{ goods.name }}</b>
          <em>{{ goods.num }}</em>
          <span class="s2">
            <i>￥</i>
            {{ goods.price }}
          </span>
          <input type="button" value="加入购物车" @click="addcart" />
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Like",

  data() {
    return {
      goodslist: [],
    };
  },
  methods: {
    goodsdetail(goodsId) {
      this.$router.push("/goodsdetail/" + goodsId);
    },

    addcart(id) {
      // console.log(id);
      this.$http
        .post("http://180.76.121.47/api/user/cart/", {
          goods_id: id,
          goods_count: 1,
        })
        .then((res) => console.log(res.data));
    },
  },
  created() {
    axios({
      url: "/goods",
      params: {},
    }).then((res) => (this.goodslist = res.data));
  },
};
</script>

<style scoped>
.like {
  width: 3.4rem;
  height: 3.6rem;
  margin: auto;
  /* background-color: aqua; */
}
ul {
  width: 100%;
  /* height: 9.75rem; */
}
li {
  width: 100%;
  height: 1.56rem;
  /* background-color: bisque; */
  position: relative;
}
img {
  width: 1.44rem;
  height: 1.44rem;
  background-color: coral;
  border-radius: 0.0625rem;
  margin-top: 0.1rem;
}
p {
  display: inline-block;
  margin-left: 0.07rem;
  width: 1.78rem;
  overflow: auto;
  position: absolute;
  border-bottom: 0.001rem solid #f7f7f7;
}
b {
  font-size: 0.14rem;
  font-weight: normal;
  display: block;
  margin-top: 0.1rem;
}
em {
  font-size: 0.11rem;
  color: #bbbbbb;
  font-style: normal;
  display: block;
  padding-top: 0.05rem;
  margin-bottom: 0.6rem;
}
i {
  font-size: 0.11rem;
  color: #f00000;
  font-style: normal;
}
.s2 {
  font-size: 0.15rem;
  color: #f00000;
  font-weight: bold;
  margin-right: 0.5rem;
}
input {
  border: none;
  outline: none;
  background-color: #ffd102;
  font-size: 0.14rem;
  padding: 0.08rem;
  border-radius: 0.2rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
van-stepper {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
