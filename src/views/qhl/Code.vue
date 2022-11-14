<template>
  <div>
    <van-nav-bar left-arrow @click-left="onClickLeft" />
    <div class="codeinfo">
      <h3>输入验证码</h3>
      <p>
        验证码已发送至
        <span
          >+86 <i>{{ phone }}</i>
        </span>
      </p>
    </div>
    <!-- 密码输入框 -->
    <van-password-input
      :value="code"
      :focused="showKeyboard"
      :length="4"
      @focus="showKeyboard = true"
      :mask="false"
    />
    <div class="time" v-show="countdown !== 0">
      <van-count-down :time="countdown * 1000" format="ss " />
      秒后失效
    </div>
    <div class="reSendCode" v-show="countdown == 0" @click="reSendCode">
      收不到验证码点这里
    </div>
    <!-- 数字键盘 -->
    <van-number-keyboard v-model="code" :show="showKeyboard" />
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name: "Code",
  data() {
    return {
      // 展示数字键盘
      showKeyboard: true,
      // 倒计时
      time: 60 * 1000,
      // 展示倒计时
      isShowTime: true,
      // 登录传过来的手机号
      phone: "",
      // 倒计时
      countdown: 59,
      // 数字键盘的验证码
      code: "",
    };
  },
  methods: {
    //返回上一级
    onClickLeft() {
      this.$router.back();
    },
    // 重新发送验证码
    reSendCode() {
      this.code = "";
      this.$http
        .get(`http://180.76.121.47/auth/code/?phone=${this.phone}`)
        .then((res) => {
          console.log(res);
          if (res.status == 200) {
            Toast.success("验证码已发送");
          }
        });
      this.countdown = 59;
    },
  },
  created() {
    this.phone = this.$route.query.phone;
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
    // 获取验证码
    this.$http
      .get(`http://180.76.121.47/auth/code/?phone=${this.phone}`)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          Toast.success("验证码已发送");
        }
      });
  },
  watch: {
    code(newVal, oldVal) {
      // 注册
      if (newVal.length == 4) {
        // 请求查看手机号是否存在
        this.$http
          .get(`http://180.76.121.47/auth/check/?phone=${this.phone}`)
          .then((res) => {
            // 手机号存在 发起登录请求
            if (res.data.ret) {
              this.$http
                .post("http://180.76.121.47/auth/login/?opt=0", {
                  phone: this.phone,
                  code: this.code,
                })
                .then((res) => {
                  // console.log("登录", res.data);
                  if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    if (this.$route.query.topath == undefined) {
                      this.$router.push("/index");
                    } else {
                      this.$router.push(this.$route.query.topath);
                    }
                  } else {
                    Toast.fail("亲，验证码不正确");
                  }
                });
              // 手机号不存在发起注册请求
            } else {
              this.$http
                .post("http://180.76.121.47/auth/regist/", {
                  phone: this.phone,
                  code: this.code,
                })
                .then((res) => {
                  // console.log("注册", res.data);
                  if (res.data.token) {
                    localStorage.setItem("token", res.data.token);
                    // 注册成功后 实名认证
                    this.$http.post(
                      "http://180.76.121.47/api/user/addaccount/",
                      {
                        name: "33333332",
                        city: "西安",
                        sn: "610423200001012010",
                      }
                    );
                    //  修改个人信息
                    this.$http
                      .post("http://180.76.121.47/api/user/updateuserinfo/", {
                        newnote: "南窑头国际",
                        newname: "隔壁老王",
                        newnick_name: "CC",
                      })
                      .then((res) => {
                        this.$router.push(this.$route.query.topath);
                      });
                  } else {
                    Toast.fail("亲，验证码不正确");
                  }
                });
            }
          });
      }
    },
  },
};
</script>

<style scoped>
.codeinfo {
  width: 70%;
  margin: auto;
  margin-top: 0.5rem;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
}
.codeinfo h3 {
  font-size: 0.28rem;
  margin-bottom: 0.12rem;
  font-weight: normal;
}
.codeinfo p {
  font-size: 0.14rem;
  color: #919191;
}
.time {
  display: flex;
  justify-content: flex-start;
  width: 70%;
  margin: 0.1rem auto;
  color: #919191;
}
i {
  font-style: normal;
}
.reSendCode {
  color: #ff920b;
  width: 70%;
  margin: 0.1rem auto;
  font-size: 0.14rem;
}
</style>
