<template>
  <div class="box">
    <van-sticky>
      <header style="background-color: white">
        <span @click="goBack">&lt;</span>
        用户反馈
      </header>
    </van-sticky>
    <main>
      <div>
        <h5>
          请选择您在美团优选上遇到的问题
          <span style="color: gray">*非必选</span>
        </h5>
        <hr />
        <van-collapse v-model="activeName" accordion class="title">
          <van-collapse-item title="产品性能与页面展示问题" name="1">
            <p>页面卡，加载速度慢 <input type="checkbox" value="" /></p>
            <p>找商品不方便<input type="checkbox" value="" /></p>
            <p>页面字小<input type="checkbox" value="" /></p>
            <p>其他产品性能问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="商品种类/价格/质量等问题" name="2">
            <p>商品种类少，没有我想要的<input type="checkbox" value="" /></p>
            <p>商品价格贵，如比其他平台贵<input type="checkbox" value="" /></p>
            <p>商品价格不稳定<input type="checkbox" value="" /></p>
            <p>
              商品信息不全，如缺少配料信息等<input type="checkbox" value="" />
            </p>
            <p>蔬菜/水果/肉禽蛋不新鲜<input type="checkbox" value="" /></p>
            <p>水果不熟/不好吃<input type="checkbox" value="" /></p>
            <p>冷冻冷藏食品化冻<input type="checkbox" value="" /></p>
            <p>包装破损，商品撒漏<input type="checkbox" value="" /></p>
            <p>实物与图文不符<input type="checkbox" value="" /></p>
            <p>商品数量/分量不足<input type="checkbox" value="" /></p>
            <p>其它商品问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="优惠券/红包/省钱卡等问题" name="3">
            <p>优惠券数量少<input type="checkbox" value="" /></p>
            <p>优惠券/红包无法使用<input type="checkbox" value="" /></p>
            <p>优惠券/红包已过期<input type="checkbox" value="" /></p>
            <p>参加活动后没有返券<input type="checkbox" value="" /></p>
            <p>省钱卡/月卡/会员相关问题<input type="checkbox" value="" /></p>
            <p>其他优惠券/红包问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="领鸡蛋/果园/游戏等问题" name="4">
            <p>领鸡蛋问题<input type="checkbox" value="" /></p>
            <p>领水果问题<input type="checkbox" value="" /></p>
            <p>签到问题<input type="checkbox" value="" /></p>
            <p>走路赚钱问题<input type="checkbox" value="" /></p>
            <p>其他游戏问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="购物车/支付/订单问题" name="5">
            <p>购物车不好用<input type="checkbox" value="" /></p>
            <p>下单不成功<input type="checkbox" value="" /></p>
            <p>下单后找不到订单<input type="checkbox" value="" /></p>
            <p>未取货，但订单显示已取货<input type="checkbox" value="" /></p>
            <p>无法取消订单<input type="checkbox" value="" /></p>
            <p>
              免密支付/极速支付/银行卡/月卡<input type="checkbox" value="" />
            </p>
            <p>其他购物车/支付/订单问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="团长/自取点/取货问题" name="6">
            <p>附近没有自提点<input type="checkbox" value="" /></p>
            <p>找不到自提点位置<input type="checkbox" value="" /></p>
            <p>买东西下错自提点位置<input type="checkbox" value="" /></p>
            <p>不能切换自提点<input type="checkbox" value="" /></p>
            <p>到货不准时/到货晚<input type="checkbox" value="" /></p>
            <p>没有收到提货通知<input type="checkbox" value="" /></p>
            <p>
              收到提货通知，但自提点没有到货<input type="checkbox" value="" />
            </p>
            <p>取货时没有拿到货<input type="checkbox" value="" /></p>
            <p>联系不到团长/团长关门<input type="checkbox" value="" /></p>
            <p>团长态度不好/不好解决<input type="checkbox" value="" /></p>
            <p>
              商品存储不合理，如冻品/日用品<input type="checkbox" value="" />
            </p>
            <p>其他自提点/团长/取货问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="退款/客服服务问题" name="7">
            <p>无法申请退款<input type="checkbox" value="" /></p>
            <p>退款速度慢/未到账<input type="checkbox" value="" /></p>
            <p>退款金额少<input type="checkbox" value="" /></p>
            <p>退款不退优惠券/红包<input type="checkbox" value="" /></p>
            <p>订单自动被退回<input type="checkbox" value="" /></p>
            <p>联系不到人工客服<input type="checkbox" value="" /></p>
            <p>400人工客服态度差<input type="checkbox" value="" /></p>
            <p>客服未解决问题<input type="checkbox" value="" /></p>
            <p>其他退款/客服服务问题<input type="checkbox" value="" /></p>
          </van-collapse-item>
          <van-collapse-item title="其它问题或建议" name="8">
            <p>其他问题<input type="checkbox" value="" /></p>
            <p>新功能切换<input type="checkbox" value="" /></p>
          </van-collapse-item>
        </van-collapse>
      </div>
      <section>
        <h5>
          请具体描述
          <span style="color: red">*必填</span>
        </h5>
        <!-- 给下面标签加v-model="message" -->
        <van-field
          rows="2"
          autosize
          label=""
          type="textarea"
          v-model="message"
          maxlength="200"
          placeholder="您可以举一个具体的例子，来说明您遇到的问题，以帮助我们更好的了解您的问题"
          show-word-limit
          class="des"
        />
      </section>
      <section>
        <h5>
          上传凭据
          <span style="color: gray">*非必填</span>
        </h5>
        <van-uploader
          v-model="fileList"
          multiple
          :max-count="3"
          class="pingzheng"
        />
        <p>请上传发现问题的照片，上限5张</p>
      </section>
      <section style="height: 1.2rem">
        <h5>
          联系方式
          <span style="color: red">*必填</span>
        </h5>
        <input
          type="text"
          placeholder="请输入11位手机号"
          v-model="phone"
          @blur="validator(phone)"
          class="phone"
        />
        <p style="color: red">{{ msg }}</p>
        <p>手机号用来联系您了解具体情况</p>
      </section>
    </main>
    <footer>
      <div>
        <input type="button" class="btn" value="提交反馈" @click="submit" />
      </div>
    </footer>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "Tab",
  data() {
    return {
      feedbackMsg: {
        " MsgTitle": [],
      },
      fileList: [],
      message: "",
      content: [],
      activeName: "1",
      phone: "",
      msg: "",
    };
  },
  created() {},
  watch: {
    content: (n, o) => {
      console.log(n);
    },
  },
  methods: {
    validator(val) {
      if (/1\d{10}/.test(val)) {
        this.msg = "";
      } else {
        this.msg = "请输入正确的手机格式";
      }
    },
    submit() {
      //用户反馈=====跨域问题
      Toast.loading({
        message: "正在反馈中...",
        forbidClick: true,
      });

      this.$http
        .post("http://180.76.121.47/api/user/addtickling/", {
          user_phone: this.phone,
          content: this.message,
        })
        .then((res) => {
          if (res.data) {
            setTimeout(() => {
              Toast.success("发送成功");
            }, 1000);
            setTimeout(() => {
              this.$router.push("/mine");
            }, 2000);
          }
        });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.title {
  font-size: 0.14rem;
  font-weight: bold;
  color: #595d65;
}
.title p {
  height: 0.5rem;
  color: #a7a7a7;
  font-size: 0.12rem;
  line-height: 0.5rem;
  position: relative;
}
.title p input {
  font-size: 0.12rem;
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
}
main {
  width: 3.6rem;
  background-color: #f5f6f8;
  overflow: hidden;
}
main div,
main section {
  width: 3.4rem;
  margin: auto;
  background-color: white;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
}
section {
  height: 1.45rem;
}
header {
  width: 3.6rem;
  height: 0.5rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  font-family: "华文行楷";
  text-indent: 0.2rem;
}
main h5 {
  font-size: 0.13rem;
  font-weight: bolder;
  color: black;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-indent: 0.13rem;
  position: relative;
}
.des {
  height: 0.88rem;
  width: 3.1rem;
  border: .01rem solid #f5f5f6;
  margin: auto;
  margin-top: -0.05rem;
}
.pingzheng {
  margin-top: -0.15rem;
  margin-left: .15rem;
  border: solid .01rem #f5f5f6;
  border-radius: 0.05rem;
}
section p {
  margin-top: 0.03rem;
  color: #bebfc3;
  font-size: 0.12rem;
  text-indent: 0.16rem;
}
.phone {
  display: block;
  width: 3.1rem;
  height: 0.4rem;
  border: solid .01rem #f5f5f6;
  margin: auto;
}
footer {
  width: 3.6rem;
  height: 0.7rem;
  background-color: #f5f6f8;
  overflow: hidden;
}
footer div {
  margin-top: 0.1rem;
  height: 0.6rem;
  width: 3.6rem;
  background-color: white;
  overflow: hidden;
}
.btn {
  display: block;
  margin: 0.1rem auto;
  width: 3.35rem;
  height: 0.4rem;
  background-color: #ffd101;
  border-radius: 0.2rem;
  line-height: 0.4rem;
  text-align: center;
  color: black;
  border: none;
}
</style>
