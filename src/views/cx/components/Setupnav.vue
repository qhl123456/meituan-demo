<template>
  <div id="app">
    <div class="app-nav1">
      <div class="app-nav1-information">
        <p>提货人信息管理</p>
        <span> &gt;</span>
      </div>
    </div>
    <div class="app-nav2">
      <div class="app-nav1-information">
        <p>平台资质与规则</p>
        <span> &gt;</span>
      </div>
      <div class="app-nav1-information">
        <p>隐私管理</p>
        <span> &gt;</span>
      </div>
      <div class="app-nav1-information">
        <p>检查更新</p>
        <span> &gt;</span>
      </div>
    </div>
    <div class="app-nav3">
      <div class="app-nav1-information">
        <div class="app-nav1-information-jisu">
          <p>快速支付<span class="tiyan">急速体验</span></p>
        </div>
        <span> &gt;</span>
      </div>
    </div>

    <div class="app-nav4">
      <div class="app-nav1-information1" @click="fun">注销</div>
    </div>
    <div class="app-nav4">
      <div class="app-nav1-information1" @click="arr">退出登录</div>
    </div>
    <p class="foot">当前版本: v6.20.20(3136)_5.65.8(4691)_rongchanghulian_1</p>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";

// 全局注册
Vue.use(Dialog);
export default {
  name: "Setupnav",
  data() {
    return {};
  },
  methods: {
    fun() {
      Dialog.confirm({
        title: "注销账号",
        message:
          "账号注销后所有信息将无法恢复，如需注销账号，请拨打刻骨电话 400 091 9699",
      })
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          console.log("用户取消账户注销");
        });
    },
    arr() {
      Dialog.confirm({
        title: "确定要退出当前账户吗？",
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login");
        })
        .catch(() => {
          console.log("用户取消退出账户");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  background: #f5f6f8;
}
.app-nav1 {
  width: 100%;
  height: 0.52rem;
  background-color: white;
}
.app-nav2 {
  width: 100%;
  height: 1.56rem;
  margin-top: 0.1rem;
  background-color: white;
}
.app-nav3,
.app-nav4 {
  width: 100%;
  height: 0.52rem;
  margin-top: 0.1rem;
  background-color: white;
}
.app-nav1-information {
  width: 3.34rem;
  height: 0.52rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  line-height: 0.52rem;
  font-size: 0.14rem;
}
.app-nav3 .app-nav1-information {
  font-size: 0.14rem;
}
.app-nav1-information .tiyan {
  width: 0.6rem;
  height: 0.16rem;
  font-size: 0.1rem;
  color: #ffff;
  background-color: red;
  border-radius: 0.1rem 0.08rem 0.08rem 0;
}
.app-nav4 .app-nav1-information1 {
  text-align: center;
  line-height: 0.52rem;
}
.foot {
  font-size: 0.12rem;
  text-align: center;
  margin-top: 0.1rem;
  color: grey;
}
</style>
