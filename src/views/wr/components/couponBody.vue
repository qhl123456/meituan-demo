<template>
  <div class="box">
    <van-tabs v-model="activeName">
      <van-tab title="未使用" name="a">
        <div class="aside" v-for="(item, i) in content" :key="i">
          <div class="left">
            <h3>{{ item.dc.price }}<span>元</span></h3>
            <p>无使用门槛，最多优惠{{ item.dc.price }}元</p>
          </div>
          <div class="right">
            <h4>优惠券名称</h4>
            <p>{{ item.dc.start_time }} - {{ item.dc.over_time }}</p>
          </div>
          <hr />
          <h2>描述信息:{{ goodsName[i] }}</h2>
        </div>
      </van-tab>
      <van-tab title="已使用" name="b">
        <div class="aside">
          <van-empty description="暂未使用优惠券" />
        </div>
      </van-tab>
      <van-tab title="已失效" name="c">
        <div class="aside">
          <van-empty description="暂无优惠券" />
        </div>
      </van-tab>
    </van-tabs>
    <img
      src="../../../assets/imgs/coupon.jpg"
      alt=""
      class="head"
      @click="link"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "",
  data() {
    return {
      activeName: "a",
      content: {},
      goodsid: [],
      goodsName: [],
    };
  },
  created() {
    //查看用户优惠券-----ok
    this.$http({
      url: "http://180.76.121.47/api/user/lookuserdc/",
    }).then((res) => {
      this.content = res.data;
      this.goodsid = this.content.map((item) => item.dc.dc_id);
    });
  },
  watch: {
    content: (n, o) => {
      console.log("newValue", n);
    },
    goodsid(ng, og) {
      console.log("goodsid", ng);
      if (ng) {
        ng.map((item) => {
          console.log(this);
          this.$http({
            url: `http://180.76.121.47/api/goods/detail/${item}/`,
          }).then((res) => {
            this.goodsName.push(res.data.cate);
          });
        });
      }
    },
    goodsName: (nn, on) => {
      console.log("goodsName", nn);
    },
  },
  methods: {
    link() {
      this.$router.push("/sevecard");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.aside {
  width: 3.4rem;
  height: 1.4rem;
  border: 0.01rem solid #d4d6d1;
  margin: 0.1rem auto;
  border-radius: 0.1rem;
  text-shadow: 0.01rem 0.01rem 0.01rem #d7e49c;
  box-shadow: 0.07rem 0.07rem 0.07rem #d4d6d1;
}
.aside .left,
.aside .right {
  height: 1.05rem;
  float: left;
}
.aside .left {
  width: 1.15rem;
  text-align: center;
}
.aside .left h3 {
  margin: 0.24rem auto 0.15rem;
  font-size: 0.22rem;
}
.aside .left h3 span {
  font-size: 0.1rem;
}
.aside .left p {
  height: 0.3rem;
  width: 0.75rem;
  font-size: 0.12rem;
  color: #96969f;
  margin: auto;
}
.aside .right h4 {
  margin: 0.3rem 0 0.15rem;
}
.aside .right p {
  width: 1.35rem;
  font-size: 0.12rem;
  color: #96969f;
}
hr {
  height: 0.03rem;
  border: none;
  margin-top: 1.07rem;
  background-color: #f2f3f5;
}
h2 {
  font-size: 0.12rem;
  color: #96969f;
  text-indent: 0.1rem;
  line-height: 0.3rem;
}
</style>
