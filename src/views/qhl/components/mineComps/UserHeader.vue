<template>
  <div class="top">
    <!-- 头部区域 -->
    <div class="header" v-show="!slideDown">
      <div class="left">
        <img
          src="~assets/imgs/userImg.png"
          class="userImg"
          @click="toEditUser"
        />
        <p class="username">{{ userinfo.name }}</p>
      </div>
      <div class="right">
        <van-icon name="scan" />
        <van-icon name="chat-o" @click="toMyMessage" dot />
        <van-icon name="setting-o" @click="toSet" />
      </div>
    </div>
    <!-- 我的 -->
    <div class="mine" v-show="slideDown">我的</div>
    <!-- 优惠券 -->
    <div class="coupons">
      <p @click="toCoupon">{{ couponNum }}张优惠券</p>
      <i>|</i>
      <p>0.00元红包</p>
    </div>
    <save-money @click.native="goSaveMoney"></save-money>
    <my-icon></my-icon>
    <banner>
      <van-swipe-item v-for="(item, index) in 4" :key="index">
        <img src="~assets/imgs/banner.png" alt="" />
      </van-swipe-item>
    </banner>
    <!-- 精选推荐 -->
    <van-divider
      :style="{ color: '#000', borderColor: '#cccccc', padding: '0 66px' }"
    >
      <van-icon name="like" color="#e13d1c" /> 精选推荐
    </van-divider>
  </div>
</template>

<script>
import Banner from "../../../common/Banner";
import SaveMoney from "../../../common/SaveMoney";
import MyIcon from "./MyIcon";
export default {
  name: "UserHeader",
  data() {
    return {
      slideDown: false,
      // 用户信息
      userinfo: {},
      // 优惠券张数
      couponNum: 0,
    };
  },
  components: {
    Banner,
    SaveMoney,
    MyIcon,
  },
  methods: {
    //跳往优惠券
    toCoupon() {
      this.$router.push("/Coupon");
    },
    // 跳往省钱卡
    goSaveMoney() {
      this.$router.push("/sevecard");
    },
    // 跳往用户个人信息
    toEditUser() {
      this.$router.push("/mymsg");
    },
    // 跳往我的消息
    toMyMessage() {
      this.$router.push("/mymessage");
    },
    // 跳往设置
    toSet() {
      this.$router.push("/setuser");
    },
    // 滚动事件
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.slideDown = scrollTop > 10 ? true : false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  created() {
    // 检查用户
    this.$http
      .get("http://180.76.121.47/api/user/lookaccount/")
      .then((res) => (this.userinfo = res.data[0]));
    // 优惠券接口
    this.$http({
      url: "http://180.76.121.47/api/user/lookuserdc/",
    }).then((res) => {
      this.couponNum = res.data.length;
    });
  },
};
</script>

<style scoped>
.top {
  background-color: #ebeff2;
}
.header,
.left,
.right,
.coupons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.coupons,
.header {
  width: 90%;
  margin: auto;
}
.header {
  height: 0.55rem;
}
.left {
  width: 40%;
  height: 100%;
}
.right {
  width: 35%;
  height: 100%;
  font-size: 0.2rem;
}
.coupons p {
  width: 49%;
  text-align: center;
}
.coupons i {
  color: #cccccc;
}
.mine {
  width: 100%;
  height: 0.5rem;
  position: fixed;
  top: 0;
  text-align: center;
  background-color: #fff;
  line-height: 0.5rem;
  font-weight: bold;
  z-index: 999;
}
.userImg {
  height: 60%;
  border-radius: 50%;
}
</style>
