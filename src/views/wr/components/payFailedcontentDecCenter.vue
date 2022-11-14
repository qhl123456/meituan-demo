<template>
  <div class="box">
    <main>
      <section>
        <van-card
          :price="good.newprice"
          :title="good.summary"
          class="title"
          v-for="(good, i) in goodsDec"
          :key="i"
        >
          <template #thumb>
            <img v-lazy="'http://180.76.121.47/' + good.img" alt="" />
          </template>
          <template #tags>
            <van-tag plain type="danger" class="tag"
              >￥{{ singlePrice[i] }}/件</van-tag
            >&nbsp;&nbsp;
            <van-tag plain type="danger" class="tag"
              >加购:{{counts[i]}}件</van-tag
            >
          </template>
        </van-card>
        <span class="new">新客</span>
        <hr />
        <h4>
          商品总额<span class="totalPrice small">￥{{ totalPrice }}</span>
        </h4>
        <h4>
          合计实付<span class="totalPrice">￥{{ totalPrice }}</span>
        </h4>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "payFailedcontentDec",
  data() {
    return {
      content: [],
      goodid: "",
      totalPrice: 0,
      singlePrice: 0,
      goodsDec: [],
      cates: [],
      singlePrice: [],
      counts: [], //购物车中商品数量，
      cartgoods: [], //购物车中商品数
    };
  },
  created() {
    this.totalPrice = localStorage.getItem("totalPrice");
    //获取商品
    this.goodid = localStorage
      .getItem("DetailGoodsId")
      .split(",")
      .map((item) => item / 1);
    // console.log(this.goodid);
    this.goodid.map((item) => {
      this.$http({
        url: `http://180.76.121.47/api/goods/detail/${item}/`,
      }).then((res) => {
        //  console.log("res.data",res.data);
        this.goodsDec.push(res.data.goods);
        this.singlePrice.push(res.data.goods.newprice);
        this.cates.push(res.data.cate);
        // console.log("this.goodsDec",this.goodsDec);
      });
    });
    if(localStorage.getItem("count")==0){
      //当订单不是从详情页跳转过来，商品数量为购物车中选中的商品数量
        this.$http({
            url: `http://180.76.121.47/api/user/cart/`,
              }).then((res) => {
                res.data.map((item) => {
                  for (let i = 0; i < this.goodid.length; i++) {
                    if (item.goods.goods_id == this.goodid[i]) {
                      this.counts.push(item.goods_count);
                    }
                  }
                });
              });
    }else{
      //当订单从详情页跳转，商品数量为1
       this.counts=[1]
    }
  },
  watch: {
    content: (n, o) => {
      console.log(n.name);
    },
  },
  methods: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.box {
  min-height: 2.15rem;
}
main {
  width: 3.6rem;
  background-color: #f5f6f8;
  /* height:2.15rem; */
  overflow: hidden;
}
main section {
  width: 100%;
  /* min-height: 2rem; */
  background-color: white;
  margin-top: 0.1rem;
  position: relative;
  overflow: hidden;
}
.van-card__content {
  position: relative;
  display: flex;
  flex: 1;
  justify-content: space-between;
  min-width: 0;
  margin-left: 0.1rem;
}
main section hr {
  border: none;
  height: 0.02rem;
  width: 100%;
  background-color: #f4f4f4;
  margin-top: 0.1rem;
}
main section h4 {
  font-size: 0.13rem;
  text-indent: 0.18rem;
  height: 0.4rem;
  line-height: 0.4rem;
  border-bottom: #f4f4f4 solid 0.01rem;
}
.totalPrice {
  float: right;
  font-size: 0.14rem;
  color: red;
  margin-right: 0.13rem;
}
.small {
  font-size: 0.13rem;
  font-weight: normal;
  color: black;
}
.title {
  font-size: 0.14rem;
  font-weight: bolder;
  color: black;
  background-color: white;
  margin: 0.1rem 0.13rem 0 0.18rem;
}
.tag {
  margin-top: 0.1rem;
  font-weight: normal;
}
.new {
  background-color: red;
  color: white;
  width: 0.3rem;
  height: 0.16rem;
  line-height: 0.16rem;
  font-size: 0.1rem;
  text-align: center;
  border-radius: 0.05rem;
  position: absolute;
  top: 0.1rem;
  left: 0.17rem;
}
.van-card__thumb img {
  width: 100%;
  height: 100%;
}
</style>
