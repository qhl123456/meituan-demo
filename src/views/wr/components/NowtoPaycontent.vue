<template>
  <div class="box">
    <header>
      <van-sticky>
        <van-nav-bar
          title="支付订单"
          left-arrow
          class="back"
          @click-left="onClickLeft"
        />
      </van-sticky>
      <div class="time">
        <p style="margin-top: 0.3rem">
          支付剩余时间<van-count-down
            :time="time"
            style="display: inline-block; font-size: 0.1rem"
          />
        </p>
        <h5 class="totalPrice"><span>￥</span>{{ totalPrice }}</h5>
        <p style="margin-top: -0.27rem">美团优选-订单详情 ></p>
      </div>
    </header>
    <main>
      <section style="height: 1.75rem">
        <h2>美团支付</h2>
        <h4>
          中国建设银行储蓄卡（1111）<span>推荐</span
          ><input type="radio" name="pay" checked class="btn1" />
        </h4>
        <p><van-tag color="#f2b287" plain>随机立减， 最高3元</van-tag></p>
        <hr />
        <h5>
          <van-cell title="切换中国建设银行信用卡,随机立减最高..." is-link />
        </h5>
      </section>
      <section style="min-height: 1.2rem">
        <h2 style="position: relative; margin: 0.25rem 0.4rem">
          微信支付<input type="radio" name="pay" class="btn2" />
        </h2>
        <hr />
        <h1 class="more">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="展开更多支付方式" name="1">
              <h2 class="zhifubao">
                支付宝支付<input type="radio" name="pay" class="btn3" />
              </h2>
            </van-collapse-item>
          </van-collapse>
        </h1>
      </section>
      <footer>
        <input type="button" value="免密支付" @click="toPay" />
      </footer>
    </main>
  </div>
</template>

<script>
export default {
  name: "Nowtobuycontent",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      activeNames: ["0"],
      totalPrice: 0,
    };
  },
  created() {
    if (this.$store.state.totalPrice != 0) {
      this.totalPrice = this.$store.state.totalPrice;
    } else {
      this.totalPrice = localStorage.getItem("totalPrice");
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/TopayFailed");
    },
    toPay() {
      this.$router.push("/ClickNowtoPay");
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
  height: 2.4rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  text-indent: 0.2rem;
  background-color: #f4f4f4;
}
.box .back {
  margin-left: -0.2rem;
  background-color: #f4f4f4;
  font-family: "华文行楷";
}
.box .van-nav-bar .van-icon {
  color: #1989fa;
  margin-left: 0.2rem;
}
.time {
  width: 1.5rem;
  height: 0.78rem;
  margin: auto;
  text-align: center;
}
header .time p {
  height: 0.1rem;
  font-size: 0.1rem;
  color: #aeaeae;
  font-family: "华文行楷";
}
header .time h5 {
  font-size: 0.3rem;
  color: black;
  font-weight: bolder;
  margin-top: 0.15rem;
}
header .time h5 span {
  font-size: 0.18rem;
}
main {
  margin-top: -0.2rem;
  width: 3.6rem;
  background-color: #f4f4f4;
  overflow: hidden;
  padding-bottom: 1.6rem;
  position: relative;
}
main section {
  width: 3.3rem;
  background-color: white;
  border-radius: 0.1rem;
  margin: auto;
  margin-bottom: 0.1rem;
  overflow: hidden;
}
main section h2 {
  font-size: 0.14rem;
  font-family: "华文行楷";
  margin: 0.2rem 0 0 0.4rem;
  font-weight: bolder;
}
main section h4 {
  font-size: 0.14rem;
  font-family: "华文行楷";
  margin: 0.35rem 0 0 0.4rem;
  font-weight: normal;
  position: relative;
}
main section h4 span {
  display: inline-block;
  width: 0.32rem;
  height: 0.18rem;
  background-color: #fd8c00;
  font-size: 0.14rem;
  font-family: "华文行楷";
  border-radius: 0.1rem;
  color: white;
  line-height: 0.18rem;
  text-align: center;
}
main section p {
  margin: 0rem 0 0 0.4rem;
  font-family: "华文行楷";
}
main section hr {
  margin-top: 0.15rem;
  height: 0.02rem;
  width: 100%;
  background-color: #f4f4f4;
  border: none;
}
main section h5 {
  font-size: 0.1rem;
  font-family: "华文行楷";
  margin: 0.05rem 0 0 0.2rem;
  font-weight: normal;
  color: #d4d4d4;
}
main section input {
  width: 0.2rem;
  height: 0.2rem;
  border: 0.01rem solid yellow;
}
.btn1,
.btn2 {
  position: absolute;
  right: 0.2rem;
}
.btn2 {
  position: absolute;
  right: -0.2rem;
}
.more {
  font-size: 0.13rem;
  color: #d4d4d4;
  margin: 0.1rem 0 0 0.2rem;
  font-family: "华文行楷";
}
.zhifubao {
  height: 0.3rem;
  line-height: 0.3rem;
  margin: -0.1rem 0 0 -0.03rem;
  position: relative;
}
.zhifubao input {
  position: absolute;
  right: 0.05rem;
}
.van-cell__right-icon {
  margin-right: 0.09rem;
  color: #969799;
}
footer {
  position: absolute;
  bottom: 0.14rem;
  right: 0.15rem;
}
footer input {
  display: block;
  width: 3.3rem;
  height: 0.5rem;
  background-color: #ffd101;
  line-height: 0.5rem;
  font-size: 0.14rem;
  font-family: "华文行楷";
  text-align: center;
  border: none;
  border-radius: 0.1rem;
}
</style>
