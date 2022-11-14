<template>
  <div>
    <van-button type="primary" block class="warnLogin">
      <i>登陆后查看更多商品</i>
      <van-button
        round
        type="info"
        class="toLogin"
        text="去登陆"
        @click="login"
      >
      </van-button>
    </van-button>
  </div>
</template>

<script>
export default {
  name: "WarnLogin",
  data() {
    return {};
  },
  methods: {
    // 跳转登录
    login() {
      localStorage.setItem("btn", true);
      this.$router.push("/tologin");
    },
  },
};
</script>

<style scoped>
.warnLogin {
  position: fixed;
  bottom: 0.6rem;
  width: 90%;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.75);
  text-align: left;
  border-radius: 0.2rem;
}
.warnLogin i {
  font-style: normal;
  position: absolute;
  left: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
}
.toLogin {
  position: absolute;
  width: 25%;
  height: 75%;
  top: 50%;
  transform: translateY(-50%);
  right: 5%;
  background-color: #fbcb45;
  color: #000;
}
</style>
