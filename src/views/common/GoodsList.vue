<template>
  <div class="goodslist">
    <van-card
      v-for="(item, index) in goodslist"
      :key="item.goods_id"
      @click-thumb="toDetail(item.goods_id)"
      :price="item.newprice"
      :desc="item.summary"
      :title="item.name"
      :origin-price="item.oldprice"
      :class="{ bottom: index == goodslist.length - 1 }"
    >
      <template #thumb class="imgs">
        <img v-lazy="'http://180.76.121.47/' + item.img" />
      </template>
      <template #tags>
        <van-tag plain type="danger">{{
          item.cate.name + "排行第一名"
        }}</van-tag>
      </template>
      <template #footer>
        <van-button
          size="mini"
          round
          color="#f8ce3a"
          class="addCart"
          @click.self="addCart(item.goods_id)"
          >加入购物车</van-button
        >
      </template>
    </van-card>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "GoodsList",
  data() {
    return {
      goodslist: [],
    };
  },
  computed: {
    ...mapState(["goodsList", "currentGoods"]),
  },
  methods: {
    // 跳往详情页
    toDetail(goodsId) {
      // console.log(id);
      this.$router.push("/goodsdetail/" + goodsId);
    },
    // 加入购物车
    addCart(id) {
      // console.log(id);
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
    ...mapMutations(["saveGoodsList"]),
  },
  created() {
    this.$http({
      url: "http://180.76.121.47/api/goods/good/",
    }).then((res) => {
      this.saveGoodsList({
        data: res.data,
      });
      // 初始渲染每日上新的图片数据
      this.goodslist = res.data
        .slice(10, res.data.length)
        .filter((item) => item.cate.name == "每日上新");
    });
  },
  watch: {
    currentGoods(n, o) {
      this.goodslist = n;
    },
  },
};
</script>

<style scoped>
.addCart {
  width: 30%;
}
.addCart span {
  color: #000;
}
.goodslist {
  margin-bottom: 0.5rem;
}
.bottom {
  margin-bottom: 1.2rem;
}
.van-card__thumb img {
  width: 100%;
  height: 100%;
}
</style>
