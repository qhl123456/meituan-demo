<template>
  <div id="app">
    <span class="iconfont icon-shanchu2" @click="back"></span>
    <div class="login">
      <h2>欢迎登录美团优选</h2>
      <div class="input-value">
        <span class="user">+86 ></span>
        <input
          class="iphone"
          type="value"
          inputmode="numeric"
          placeholder="请输入手机号"
          maxlength="11"
          v-model="userPhone"
          @blur="regphone"
          @input="userPhone = userPhone.replace(/[^\d]/g, '')"
        />
      </div>
      <p class="input-rex" v-show="codeLogin">
        未注册的手机号验证后自动创建美团账户
      </p>

      <div class="input-value" id="password" v-show="!codeLogin">
        <input
          class="iphone"
          type="password"
          autofocus
          placeholder="请输入密码"
          maxlength="11"
          v-model="userpass"
          @blur="regpass"
        />
      </div>
      <div class="agreement">
        <input class="agreement-checkbox" type="checkbox" v-model="agreement" />
        <p class="agreement-p">
          我已阅读并同意 <span>《美团优选用户协议》</span>、<span
            >《隐 私政策》</span
          >,并授权美团使用该账号信息(如昵 称、头像、收货地址等)进行统一管理
        </p>
      </div>
      <van-button
        type="primary"
        size="large"
        color="#f8ce3a"
        class="getCode"
        @click="regPhone"
        v-show="codeLogin"
        :disabled="isLogin"
        >获取短信验证码</van-button
      >
      <van-button
        type="primary"
        size="large"
        color="#f8ce3a"
        class="getCode"
        @click="login"
        v-show="!codeLogin"
        :disabled="isLogin"
        >登录</van-button
      >
      <div class="tab-login">
        <span v-show="codeLogin" @click="changeLogin">密码登录</span>
        <span v-show="!codeLogin" @click="changeLogin">验证码登录</span>
        <span>遇到问题</span>
      </div>
    </div>
    <div class="third-party">
      <van-icon name="wechat" size="30px" color="#8dc81b" />
      <van-icon name="alipay" size="30px" color="#8dc81b" />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "Login",
  data() {
    return {
      // 用户输入的手机号
      userPhone: "",
      // 用户密码
      userpass: "",
      agreement: false,
      // 验证码登录
      codeLogin: true,
      isLogin: true,
    };
  },
  methods: {
    // 正则验证用户手机号
    regPhone() {
      if (/^1\d{10}$/.test(this.userPhone)) {
        if (!this.agreement) {
          Toast.fail("请先同意用户协议");
        } else {
          //跳转验证码界面
          Toast.loading({
            message: "加载中...",
            forbidClick: true,
            loadingType: "spinner",
          });
          this.$router.push({
            path: "/code",
            query: { phone: this.userPhone, topath: this.$route.query.topath },
          });
        }
      } else {
        Toast.fail("手机号输入有误，请重新输入");
      }
    },
    // 返回上一层
    back() {
      this.$router.push("/index");
      // console.log(this.$route.query.topath);
      // this.$router.push("/index");
    },
    //改变登陆状态
    changeLogin() {
      this.codeLogin = !this.codeLogin;
    },
    // 登录
    login() {
      if (/^1\d{10}$/.test(this.userPhone)) {
        if (!this.agreement) {
          Toast.fail("请先同意用户协议");
        } else {
          // 登录
          this.$http
            .post("http://180.76.121.47/auth/login/?opt=1", {
              phone: this.userPhone,
              pwd: this.userpass,
            })
            .then((res) => {
              localStorage.setItem("token", res.data.token);

              //  修改个人信息
              // this.$http.post("http://180.76.121.47/api/user/updateuserinfo/", {
              //   newnote: "南窑头国际",
              //   newname: "隔壁老王",
              //   newnick_name: "CC",
              // });
              // console.log(res.data);
              if (localStorage.getItem("btn")) {
                this.$router.push("/index");
              } else if (this.$route.query.topath == undefined) {
                this.$router.push("/index");
              } else {
                this.$router.push(this.$route.query.topath);
              }
              this.$http.post("http://180.76.121.47/api/user/updateuserinfo/", {
                newnote: "南窑头国际",
                newname: "隔壁老王",
                newnick_name: "CC",
              });
            });
          Toast.loading({
            message: "正在登陆...",
            forbidClick: true,
            loadingType: "spinner",
          });
        }
      } else {
        Toast.fail("手机号输入有误，请重新输入");
      }
    },
    // 非空验证
    regphone() {
      if (this.userPhone == "") {
        Toast.fail("请先输入手机号");
        this.isLogin = true;
      } else if (!/^1\d{10}$/.test(this.userPhone)) {
        Toast.fail("请输入正确的手机号");
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    // 密码正则
    regpass() {
      if (this.userpass == "") {
        Toast.fail("请先输入密码");
        this.isLogin = true;
      } else if (!/\d{6}$/.test(this.userPhone)) {
        Toast.fail("请输入正确的密码");
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
  },
  watch: {
    userPhone(n, o) {
      if (n.length == 11) {
        if (!/^1\d{10}$/.test(this.userPhone)) {
          Toast.fail("请输入正确的手机号");
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      } else {
        this.isLogin = true;
      }
    },
    userpass(n, o) {
      if (n.length == 6) {
        if (!/\d{6}$/.test(this.userPhone)) {
          Toast.fail("请输入正确的密码");
          this.isLogin = true;
        } else {
          this.isLogin = false;
        }
      } else {
        this.isLogin = true;
      }
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  margin: 0 auto;
}
#app .iconfont {
  font-size: 0.3rem;
  position: absolute;
  top: 0.2rem;
  left: 0.4rem;
}
.login {
  width: 2.8rem;
  margin: 0.6rem auto 0;
}
.login h2 {
  text-align: center;
}
.login .input-value {
  width: 2.8rem;
  height: 0.48rem;
  margin-top: 0.3rem;
  border-bottom: 0.01rem solid #000;
  line-height: 0.48rem;
}
.login .input-value .user {
  color: #000;
  font-size: 0.12rem;
}
.login .input-value .iphone {
  border: none;
  line-height: 0.48rem;
  font-size: 0.15rem;
  margin-left: 0.14rem;
}
.input-rex {
  font-size: 0.12rem;
  color: gray;
  margin-top: 0.1rem;
}
.agreement {
  width: 100%;
  height: 0.44rem;
  margin-top: 0.5rem;
  display: flex;
}
.agreement-checkbox {
  margin: 0.1rem;
}
.agreement-p {
  color: gray;
  font-size: 0.12rem;
}
.agreement-p span {
  color: #ff920b;
}

.tab-login {
  margin-top: 0.24rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  color: #000;
}
.third-party {
  width: 1.36rem;
  height: 0.42rem;
  margin: 1.6rem auto 0.2rem;
  display: flex;
  justify-content: space-between;
}
.third-party span {
  width: 0.42rem;
  height: 0.42rem;
  border: 0.01rem solid gray;
  border-radius: 50%;
  text-align: center;
  line-height: 0.42rem;
  font-size: 0.22rem;
}
.van-button__text {
  color: black;
}
.getCode {
  border-radius: 0.08rem;
}
#password {
  margin: 0;
  height: 0.49rem;
}
#password input {
  margin: 0;
}
*::-webkit-input-placeholder {
  color: #cccccc;
}
</style>
