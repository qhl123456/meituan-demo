<template>
  <div class="box">
    <van-sticky>
      <header>
        <van-nav-bar
          title="确认订单"
          left-arrow
          class="back"
          @click-left="onClickLeft"
        />
      </header>
    </van-sticky>
    <main>
      <section style="height: 1.85rem">
        <h2>
          提货人昵称:&nbsp;{{
            personName
          }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所在地：{{ personLocal }}
        </h2>
        <div>
          <h2>
            自提点:&nbsp;{{ location.name
            }}<span @click="ToPickupStation">切换 ></span>
          </h2>
          <p>联系人：{{ location.relation_name }}</p>
          <p>联系电话：{{ location.relation_phone }}</p>
          <p style="color: red">据您约：{{ lastDis }}米</p>
          <van-notice-bar
            wrapable
            :scrollable="false"
            text="下单后如有问题，可联系团长为您解决。建议自备购物袋提货，共同助力环保~"
            class="message"
            style="width: 3.4rem; margin-left: 0.1rem"
          />
        </div>
      </section>
      <section class="goods">
        <h2>明天 16：00 可自提</h2>
        <ul>
          <li style="position: relative" v-for="(good, i) in goodsDec" :key="i">
            <p class="goodtitle">{{ good.summary }}</p>
            <p class="goodprice">
              ￥<span>{{ good.newprice }}</span>
            </p>
            <img
              v-lazy="'http://180.76.121.47/' + good.img"
              alt=""
              class="goodsimg"
            />
            <p class="tag">新人价</p>
            <span class="count">x {{ counts[i] }}件</span>
          </li>
        </ul>
      </section>
      <section style="height: 150px" class="text">
        <div style="position: relative">
          商品总额
          <p class="right">
            ￥<span>{{ totalprice }}</span>
          </p>
        </div>
        <div style="position: relative">
          红包抵扣&nbsp;<van-tag color="gray" plain>使用规则</van-tag>
          <p class="right red">
            -￥<span>{{ coupons[0].valueDesc }}</span
            >&nbsp;<input type="checkbox" checked />
          </p>
        </div>
        <div style="position: relative">
          <!-- 优惠券单元格 -->
          <van-coupon-cell
            :coupons="coupons"
            :chosen-coupon="chosenCoupon"
            @click="showList = true"
            style="
              height: 0.35rem;
              line-height: 0.35rem;
              position: absolute;
              bottom: 10px;
              z-index: 1;
            "
          />
          <!-- 优惠券列表 -->
          <van-popup
            v-model="showList"
            round
            position="bottom"
            style="height: 50%; width: 100%; padding-top: 4px"
          >
            <van-coupon-list
              :coupons="coupons"
              :chosen-coupon="chosenCoupon"
              :disabled-coupons="disabledCoupons"
              @change="onChange"
              @exchange="onExchange"
            />
          </van-popup>
        </div>
      </section>
      <section style="height: 43px; margin-bottom: 50px" class="text">
        <div style="margin-top: 5px; position: relative">
          订单备注
          <p class="ipt">请输入&nbsp;></p>
        </div>
      </section>
      <p class="footerText">
        <img src="~assets/imgs/text.jpg" alt="" />
      </p>
    </main>
    <footer>
      <van-submit-bar
        :price="(totalprice - coupons[0].valueDesc).toFixed(2) * 100"
        button-text="提交订单"
        @submit="onSubmit"
      />
    </footer>
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '30%' }"
    >
      <p class="tom">明天 16：00 可取货</p>
      <van-panel>
        <div class="shop">
          <ul>
            <li>
              <img src="../../../assets/imgs/shop.jpg" alt="" />
            </li>
            <li>
              <h5>{{ location.name }}</h5>
              <h6>
                据您<span>{{ lastDis }}米</span
                >|西安市雁塔区丈八街道高新科技路四路西口鼎城商铺1层慧生生源便利店（丈八路...
              </h6>
            </li>
          </ul>
        </div>
        <template #footer>
          <van-button size="normal" round @click="ToPickupStation"
            >切换自提点</van-button
          >
          <van-button size="normal" round type="danger" @click="link"
            >确认并支付</van-button
          >
        </template>
      </van-panel>
    </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元",
};
export default {
  name: "Nowtobuycontent",
  data() {
    return {
      showList: false,
      show: false,
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      goodid: [], //订单内商品id
      location: [], //自提点地址信息
      distance: [800, 1564, 2344, 3200], //自提点地址
      lastDis: 800,
      personName: "", //用户昵称
      personLocal: "", //用户所在地
      goodsDec: [], //商品信息
      cates: [], //商品订单分类
      totalprice: 0, //没有减优惠券的总价格,
      counts: [], //购物车中商品数量，
      cartgoods: [], //购物车中商品数
    };
  },
  created() {
    //获取订单中商品的id
    this.goodid = localStorage
      .getItem("DetailGoodsId")
      .split(",")
      .map((item) => item / 1);
    //获取订单总价
    this.totalprice = localStorage.getItem("totalprice");
    //获取用户信息----显示提货人信息
    this.$http({
      url: "http://180.76.121.47/api/user/lookaccount/",
    }).then((res) => {
      this.personName = res.data[0].name;
      this.personLocal = res.data[0].city;
    });
    //生成商品订单
    this.$http
      .post("http://180.76.121.47/api/order/add/", {
        pickup_id: 2, // 自提点id
        goods_id: this.goodid[0], // 商品id
        cnt: 1, // 数量
      })
      .then((res) => {
        this.content = res.data;
        // this.location = res.data.address;
        // localStorage.setItem("order_id", res.data.order_id);
      });
    //获取商品信息
    this.goodid.map((item) => {
      this.$http({
        url: `http://180.76.121.47/api/goods/detail/${item}/`,
      }).then((res) => {
        this.goodsDec.push(res.data.goods);
        this.cates.push(res.data.cate);
      });
    });
    //获取购物车中商品个数
    if (localStorage.getItem("count") == 0) {
      //当订单不是从详情页跳转过来，商品数量为购物车中选中的商品数量
      this.$http({
        url: `http://180.76.121.47/api/user/cart/`,
      }).then((res) => {
        res.data.map((item) => {
          for (let i = 0; i < this.goodid.length; i++) {
            if (item.goods.goods_id == this.goodid[i]) {
              this.cartgoods.push(item);
              this.counts.push(item.goods_count);
            }
          }
        });
      });
    } else {
      //当订单从详情页跳转，商品数量为1
      this.counts = [1];
    }
    //判断是否切换自提点
    if (this.$route.query.local_id / 1 < 3) {
      this.$http({
        url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
      }).then((res) => {
        this.location = res.data[this.$route.query.local_id / 1];
        this.lastDis = this.distance[this.$route.query.local_id / 1 + 1];
      });
    } else {
      this.$http({
        url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
      }).then((res) => {
        this.location = res.data[3];
        this.lastDis = this.distance[0];
      });
      localStorage.setItem("local_id", 3);
    }
  },
  watch: {
    local_id: (n, o) => {
      console.log("local_id", n);
    },
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onSubmit() {
      this.show = true;
    },
    link() {
      let totalPrice = this.totalprice - this.coupons[0].valueDesc;
      localStorage.setItem("totalPrice", totalPrice);
      this.$router.push("/NowtoPay");
    },
    onClickLeft() {
      this.$router.push("/index");
    },
    //跳转到用户自提点
    ToPickupStation() {
      this.$router.push("/PickupStation");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
header {
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  font-family: "华文行楷";
  text-indent: 0.2rem;
  background-color: #f0f1f3;
}
header b {
  font-weight: normal;
  margin-left: 1.15rem;
}
main {
  width: 3.6rem;
  background-color: #f0f1f3;
  overflow: hidden;
  position: relative;
}
main section {
  width: 3.45rem;
  background-color: white;
  border-radius: 0.1rem;
  margin: 0.1rem auto 0.08rem;
  overflow: hidden;
}
main section h2 {
  margin: auto;
  line-height: 0.48rem;
  font-size: 0.15rem;
  width: 3.2rem;
  height: 0.48rem;
  border-bottom: 0.02rem solid #f0f1f3;
}
main section h2 span {
  font-size: 0.14rem;
  color: #b0b1b6;
  float: right;
}
main section div h2 {
  border-bottom: none;
}
main section div p {
  line-height: 0.18rem;
  width: 3.2rem;
  font-size: 0.13rem;
  color: #b0b1b6;
  margin: -0.12rem auto 0.1rem;
}
main section ul {
  width: 3.2rem;
  margin: auto;
}
main section ul li {
  width: 3.2rem;
  height: 0.9rem;
  border-bottom: 0.01rem solid #f0f1f3;
  position: relative;
}
.goods {
  width: 3.45rem;
  background-color: white;
  border-radius: 0.1rem;
  margin: 0.1rem auto 0.08rem;
  overflow: hidden;
  min-height: 1.4rem;
}
.goodsDes {
  width: 100%;
  height: 100%;
}
.goods ul li .goodsDes img {
  border-radius: 0.08rem;
  margin-left: -0.15rem;
}
.message {
  margin-top: -0.05rem;
  background-color: #fffaf7;
  font-weight: bolder;
}
.goodCount {
  position: absolute;
  right: 0.1rem;
  bottom: 0.1rem;
}
.goodtitle {
  width: 2.4rem;
  height: 0.24rem;
  font-size: 0.16rem;
  position: absolute;
  top: 0.13rem;
  right: -0.2rem;
  z-index: 5;
}
.goodprice {
  font-size: 0.16rem;
  position: absolute;
  left: 0.95rem;
  bottom: 0.1rem;
  z-index: 5;
}
.count {
  position: absolute;
  right: 0.1rem;
  top: 0.6rem;
  font-size: 0.13rem;
  color: gray;
}
.text div {
  height: 0.35rem;
  line-height: 0.35rem;
  width: 3.25rem;
  margin: auto;
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
.footerText {
  position: absolute;
  bottom: 0.2rem;
  right: 0.1rem;
  z-index: 5;
}
.back {
  margin-left: -0.44rem;
}
footer {
  margin-top: 0.5rem;
}
.van-icon-arrow:before {
  content: "\e660";
  position: absolute;
  top: 0.15rem;
}
.van-cell {
  padding: 0 0.15rem 0 0;
}
.right {
  position: absolute;
  left: 2.7rem;
  bottom: 0;
  font-size: 0.14rem;
  color: black;
}
.red {
  left: 2.6rem;
  color: red;
}
.ipt {
  position: absolute;
  left: 2.7rem;
  bottom: 0;
  color: #c3c4c7;
  font-size: 0.13rem;
}
.black {
  width: 100%;
  height: 100%;
  background-color: rgba(0.5, 0.5, 0.5, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.shop {
  width: 3.1rem;
  height: 0.8rem;
  background-color: #fafafa;
  margin: 0.45rem auto;
  padding: 0.08rem 0.1rem 0.06rem 0.08rem;
}
.shop ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.shop ul li img {
  border-radius: 0.05rem;
}
.shop ul li h5 {
  font-size: 0.14rem;
  margin: 0.05rem 0 0.08rem 0.08rem;
}
.shop ul li h6 {
  font-size: 0.11rem;
  line-height: 0.2rem;
  color: #b1b3b8;
  margin: 0 0 0 0.08rem;
}
.shop ul li h6 span {
  color: red;
}
.tom {
  position: absolute;
  width: 1.4rem;
  height: 0.16rem;
  font-size: 0.15rem;
  top: 0.2rem;
  left: 1.05rem;
  z-index: 5;
  font-weight: bolder;
}
.goodsimg {
  margin: 0.05rem 0 0 0;
  width: 0.75rem;
  height: 0.75rem;
}
.tag {
  position: absolute;
  top: 0.05rem;
  left: 0;
  border-radius: 0.05rem;
  background-color: red;
  color: white;
  font-size: 0.1rem;
  width: 0.43rem;
  height: 0.17rem;
  line-height: 0.17rem;
  text-align: center;
}
.van-panel__footer {
  padding: 0.08rem 0.16rem;
  margin-top: -0.5rem;
}

.van-button--round {
  border-radius: 9.99rem;
  margin-left: 0.4rem;
}
.van-button--round[data-v-3a312135] {
  border-radius: 9.99rem;
  margin-left: 0.5rem;
  width: 1rem;
}
</style>
