<template>
  <div class="neighbuy">
    <div class="header">
      <van-cell-group>
        <van-cell title="邻居都爱买" value="查看更多>" />
      </van-cell-group>
    </div>
    <div class="giftlist">
      <ul>
        <li
          v-for="(item, index) in giftList"
          :key="item.goods_id"
          @click="toDetail(index)"
        >
          <img v-lazy="'http://180.76.121.47' + item.img" />
          <p>{{ item.name }}</p>
          <span style="color: #9b2516">￥{{ item.newprice }}</span>
          <van-button size="mini" block class="addCart" round color="#f8ce3a"
            >加入购物车</van-button
          >
        </li>
      </ul>
      <ul>
        <li
          v-for="(item, index) in giftList"
          :key="item.goods_id"
          @click="toDetail(index)"
        >
          <img v-lazy="'http://180.76.121.47' + item.img" />
          <p>{{ item.name }}</p>
          <span style="color: #9b2516">￥{{ item.newprice }}</span>
          <van-button size="mini" block class="addCart" round color="#f8ce3a"
            >加入购物车</van-button
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import GiftList from "../indexComps/GiftList";
export default {
  name: "NeighBuy",
  data() {
    return {
      giftList: [],
    };
  },
  components: {
    GiftList,
  },
  created() {
    this.$http
      .get("http://180.76.121.47/api/goods/good/")
      .then((res) => (this.giftList = res.data.slice(10, res.data.length)));
  },
};
</script>

<style scoped>
.van-cell__title {
  font-weight: bold;
  font-size: 0.16rem;
}

.giftlist {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 0.05rem;
  overflow: auto;
}

.giftlist ul {
  height: 98%;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
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
.neighbuy {
  margin: 0.1rem auto;
}
</style>
