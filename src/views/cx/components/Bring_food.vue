<template>
  <div id="app">
    <div class="vip-card">
      <div class="vip-card-heard">
        <p class="vip-card-heard-p1">天天领菜</p>
        <p class="vip-card-heard-p2">天天送新鲜菜</p>
      </div>
      <div class="vip-card-right">
        <p class="vip-card-right-p1">最高可省</p>
        <p class="vip-card-right-p2">
          90<span class="vip-card-right-p1">元</span>
        </p>
      </div>
    </div>
    <div class="vip-card-shopping">
      <div class="vip-card-goods">
        <ul>
          <li v-for="(goodsfood, i) in goods2" :key="i">
            <img
              v-lazy="'http://180.76.121.47' + goodsfood.img"
              alt="商品图片丢失"
            />
            <p class="goods-name">{{ goodsfood.name }}</p>
            <span>500/克</span>
            <p class="goods-price">￥{{ goodsfood.newprice }}</p>
            <div class="goods-card">立即领</div>
          </li>
        </ul>
        <ul>
          <li v-for="(goodsfood, i) in goods3" :key="i">
            <img
              v-lazy="'http://180.76.121.47' + goodsfood.img"
              alt="商品图片丢"
            />
            <p class="goods-name">{{ goodsfood.name }}</p>
            <span>500/克</span>
            <p class="goods-price">￥{{ goodsfood.newprice }}</p>
            <div class="goods-card">立即领</div>
          </li>
        </ul>
      </div>
      <p class="foot-information">限量供应，单笔订单≥25元可享受</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods3: [],
      goods2: [],
    };
  },
  created() {
    axios({
      url: "http://180.76.121.47/api/goods/good/",
    }).then((res) => {
      this.goods2 = res.data.slice(15, 20);
      this.goods3 = res.data.slice(25, 30);
    });
  },
};
</script>

<style scoped>
#app {
  width: 3.08rem;
  margin: 0 auto;
}
.vip-card {
  display: flex;
  justify-content: space-between;
}
.vip-card-heard {
  width: 1.2rem;
  height: 0.4rem;
}
.vip-card-heard-p1 {
  font-size: 0.16rem;
  color: #581600;
}
.vip-card-heard-p2 {
  font-size: 0.12rem;
  color: #a78269;
  margin-top: 0.06rem;
}
.vip-card-right {
  width: 0.56rem;
  height: 0.4rem;
  background: #581600;
  border-radius: 0.03rem;
  text-align: center;
}
.vip-card-right-p1 {
  font-size: 0.1rem;
  color: #ffffff;
  margin-top: 0.06rem;
}
.vip-card-right-p2 {
  font-size: 0.15rem;
  color: #ffffff;
}
.vip-card-shopping {
  width: 3.08rem;
  height: 4.2rem;
  margin-top: 0.06rem;
}
.vip-card-goods {
  width: 3.08rem;
  height: 3.72rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.vip-card-goods ul {
  height: 1.78rem;
  display: flex;
}
.vip-card-goods ul:nth-of-type(2) {
  margin-top: 0.14rem;
}
.vip-card-goods ul li {
  width: 0.94rem;
  height: 1.78rem;
  font-size: 0.12rem;
  line-height: 0.18rem;
  margin-right: 0.04rem;
}
.vip-card-goods ul li img {
  width: 0.94rem;
  height: 0.94rem;
}
.vip-card-goods ul li .goods-price {
  color: grey;
}
.vip-card-goods ul li .goods-card {
  width: 0.94rem;
  height: 0.24rem;
  background: #fed1a7;
  text-align: center;
  line-height: 0.24rem;
  color: #86400d;
  border-radius: 0.24rem;
}
.foot-information {
  height: 0.1rem;
  font-size: 0.1rem;
  color: grey;
}
</style>
