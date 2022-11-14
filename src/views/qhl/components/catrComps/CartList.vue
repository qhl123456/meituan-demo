<template>
  <div>
    <!-- 空购物车 -->
    <van-empty
      description="您的购物车还空着呢，快去逛逛吧"
      v-if="!Goods.length"
    >
      <van-button round type="danger" class="bottom-button" @click="goIndex"
        >去逛逛</van-button
      >
    </van-empty>
    <!-- 购物车不为空 -->
    <van-swipe-cell v-for="item in Goods" :key="item.goods_id" class="cartitem">
      <van-card
        :price="item.goods.newprice"
        :desc="item.goods.name"
        :title="item.name"
        class="goods-card"
      >
        <template #thumb class="imgs">
          <img v-lazy="'http://180.76.121.47/' + item.goods.img" />
        </template>
        <!-- 选择 -->
        <template #tag>
          <!-- 复选框组 -->
          <input type="checkbox" v-model="item.isCheck" @change="changeCheck" />
        </template>
        <template #num>
          <!-- 减少商品数量 -->
          <van-button
            icon="minus"
            size="mini"
            round
            @click="subGoods(item.cart_id, item.goods_count)"
            :disabled="item.goods_count <= 0"
          />
          <span>{{ item.goods_count }}</span>
          <!-- 增加商品数量 -->
          <van-button
            icon="plus"
            size="mini"
            round
            color="#facd37"
            @click="addGoods(item.cart_id, item.goods_count)"
          />
        </template>
      </van-card>
      <!-- 右侧删除 -->
      <template #right>
        <van-button
          square
          text="删除"
          type="danger"
          class="delete-button"
          @click="delGoods(item.cart_id)"
        />
      </template>
    </van-swipe-cell>
    <!-- 全选 -->
    <van-row type="flex" justify="space-between" class="buy">
      <van-col span="4">
        <input type="checkbox" v-model="isAllChecked" @change="checkAll" />
        全选
      </van-col>
      <van-col span="6">
        合计: <span class="price"> {{ totalPrice() | showPrice }}</span>
      </van-col>
      <van-col span="8">
        <van-button
          round
          type="info"
          size="small"
          class="goBuy"
          @click="goBuy"
          :disabled="hasGoods"
          >去支付({{ buyNums() }})</van-button
        >
      </van-col>
    </van-row>
    <!-- 可能想买 -->
    <van-divider
      :style="{
        color: '#000',
        borderColor: '#cccccc',
        padding: '0 66px',
        fontWeight: 'bold',
      }"
    >
      <van-icon name="like" color="#e13d1c" /> 您可能想买
    </van-divider>
    <!-- 推荐列表 -->
    <goods-list></goods-list>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import { Notify } from "vant";

// 全局注册
Vue.use(Dialog);
Vue.use(Notify);
import GoodsList from "../../../common/GoodsList.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    GoodsList,
    [Dialog.Component.name]: Dialog.Component,
    [Notify.Component.name]: Notify.Component,
  },
  props: ["goods"],
  name: "CartList",
  data() {
    return {
      isAllChecked: false,
      info: [],
      Goods: [],
      hasGoods: true,
    };
  },
  methods: {
    // 得到购物车数据
    getCartValue() {
      this.$http
        .get("http://180.76.121.47/api/user/cart/")
        .then((res) => (this.Goods = res.data));
    },
    // 此处根据商品id发起删除请求
    delGoods(id) {
      // console.log(id);
      Dialog.confirm({
        message: "亲，您确定要删除吗？",
      })
        .then(() => {
          // on confirm
          this.$http
            .delete(`http://180.76.121.47/api/user/cart/?cart_id=${id}`)
            .then((res) => {
              // console.log(res.data);
              this.getCartValue();
              Notify({ type: "warning", message: "已删除商品" });
              this.$router.go(0);
            });
        })
        .catch(() => {
          // on cancel
          console.log("取消删除");
          Notify({ type: "success", message: "已取消删除" });
        });
    },
    // 减商品数量请求
    subGoods(id, count) {
      // console.log(id);
      if (count <= 1) {
        Notify({ type: "danger", message: "请至少选择一件商品" });
      }
      this.goods.filter((item) => item.cart_id == id)[0].goods_count--;
      this.$http
        .put("http://180.76.121.47/api/user/cart/", {
          cart_id: id,
          goods_count: count - 1,
        })
        .then((res) => console.log(res.data));
      // this.buyNums();
      // this.totalPrice();
    },

    // 增加商品数量请求
    addGoods(id, count) {
      // console.log(id);
      this.goods.filter((item) => item.cart_id == id)[0].goods_count++;
      this.$http.put("http://180.76.121.47/api/user/cart/", {
        cart_id: id,
        goods_count: count + 1,
      });

      this.buyNums();
      this.totalPrice();
    },
    // 全选
    checkAll() {
      this.goods.forEach((item) => (item.isCheck = this.isAllChecked));
      this.buyNums();
      this.totalPrice();
    },
    // 单选
    changeCheck() {
      this.isAllChecked = this.goods.every((item) => item.isCheck);
      this.buyNums();
      this.totalPrice();
    },
    // 购买数量
    buyNums() {
      return this.goods
        .filter((item) => item.isCheck)
        .reduce((prev, n) => {
          return prev + Number(n.goods_count);
        }, 0);
    },
    // 总价
    totalPrice() {
      return this.goods
        .filter((item) => item.isCheck)
        .reduce((prev, n) => {
          return prev + n.goods.newprice * n.goods_count;
        }, 0);
    },
    // 立即购买
    goBuy() {
      let arr = [];
      arr = this.goods.filter((item) => item.isCheck);
      let str = "";
      for (let i = 0; i < arr.length; i++) {
        str += arr[i].goods.goods_id + ",";
      }
      localStorage.setItem("DetailGoodsId", str.slice(0, str.length - 1));
      localStorage.setItem("totalprice", this.totalPrice().toFixed(2));
      localStorage.setItem("count", 0);
      this.$router.push("/Nowtobuy");
    },
    // 去逛逛
    goIndex() {
      this.$router.push("/index");
    },
    // 提交vuex保存价格
    ...mapMutations(["savaCartPrice"]),
  },

  created() {
    // 给每个商品添加默认不选中的属性
    this.goods.forEach((item) => (item.isCheck = false));
  },
  watch: {
    goods(n, o) {
      this.Goods = n;
    },
    isAllChecked(n, o) {
      if (n == true) {
        this.hasGoods = false;
      } else {
        this.hasGoods = true;
      }
    },
  },
  updated() {
    this.savaCartPrice({
      data: this.totalPrice().toFixed(2),
    });
    if (this.buyNums() !== 0) {
      this.hasGoods = false;
    } else {
      this.hasGoods = true;
    }
  },
};
</script>

<style scoped>
.bottom-button {
  width: 1.6rem;
  height: 0.4rem;
  background-color: #f8ce3a;
  color: #000;
  border: none;
}
.goods-card {
  margin: 0;
  background-color: #fff;
  padding-left: 0.3rem;
  box-sizing: border-box;
}

.delete-button {
  height: 100%;
}
.cartitem {
  margin: 0.1rem auto;
}
.van-button--mini {
  height: 0.2rem;
}
.van-card__price,
.van-card__num {
  font-weight: bold;
}
.van-card__price {
  color: #b52a2e;
}
.van-card__num {
  color: #000;
  display: flex;
  align-items: center;
  width: 0.85rem;
  text-align: center;
}
.van-card__num span {
  width: 50%;
}
.van-card__tag {
  position: absolute;
  left: -0.23rem;
  top: 50%;
  transform: translateY(-50%);
}
.van-button__icon {
  color: #000;
  font-weight: bold;
}
.goodslist {
  margin-bottom: 0.1rem;
}
.last {
  margin-bottom: 0.5rem;
}
.van-row--flex {
  width: 90%;
  margin: auto;
}
.buy {
  position: fixed;
  bottom: 0.42rem;
  height: 0.4rem;
  width: 100%;
  z-index: 100;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 0.1rem;
  line-height: 0.43rem;
}
input {
  width: 0.18rem;
  height: 0.18rem;
  position: relative;
  cursor: pointer;
  -webkit-print-color-adjust: exact;
  -webkit-appearance: radio;
  color-adjust: exact;
}
input:checked::after {
  position: absolute;
  top: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 0.18rem;
  height: 0.18rem;
  content: "✓";
  color: #000;
  font-weight: bold;
  background-color: #f8ce3a;
  border-radius: 2px;
}
.van-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.goBuy {
  width: 85%;
  background-color: #f8cf37;
  border: none;
  color: #000;
}
.van-card__price,
.price {
  font-size: 0.14rem;
  font-weight: bold;
  color: #ca2f38;
}
.van-card__thumb img {
  width: 100%;
  height: 100%;
}
</style>
