<template>
  <main>
    <footer v-bind:style="{ bottom: s + 'rem' }">
      <div>
        {{ str
        }}<input type="text" @focus="xiaoshi" v-model="val" @keyup.enter="e" />
      </div>
      <span @click="bqshow" class="span1"></span><span class="span2"></span>
    </footer>
    <div class="lt" v-bind:style="{ minHeight: z + 'rem' }">
      <p class="p1">
        <span></span>
        <b>您好欢迎光临海尔自营旗舰 店,~请 问有什么可以帮您的嘛~ </b>
      </p>
      <p class="p2" v-for="(user, index) in users" :key="index">
        <span></span>
        <img :src="user" alt="" />
      </p>
      <p class="p2" v-for="(user, index) in users2" :key="index">
        <span></span>
        <b>{{ user }}</b>
      </p>
    </div>
    <div class="bq" v-show="isshow">
      <div class="box">
        <div class="box1">
          <ul>
            <li v-for="(bq, index) in bq1" :key="index" @click="send(index)">
              <img :src="bq" alt="" />
            </li>
          </ul>
        </div>
        <div class="box1">
          <ul>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_018_touxiao.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_013_weiqu.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_019_touda.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_014_xiaoku.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_023_zhenjing.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_024_e.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_025_guzhang.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_027_guilian.gif"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div class="box1">
          <ul>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_012_qinqin.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_029_songhua.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_028_doujingjing.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_026_chouren.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_030_tuxie.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_022_tanqi.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_032_shengli.gif"
                alt=""
              />
            </li>

            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_034_qianshui.gif"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div class="box1">
          <ul>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_016_deyi.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_006_han.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_007_yiwen.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_017_hahaha.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_036_liangle.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_035_yalishanda.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://res.suning.cn/project/yunxin/emotion_new/Lion_021_ganga.gif"
                alt=""
              />
            </li>
            <li>
              <img
                src=" https://res.suning.cn/project/yunxin/emotion_new/Lion_033_youbug.gif"
                alt=""
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: "kefumain",
  data() {
    return {
      bq1: [
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_001_weixiao.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_004_zaima.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_005_xindong.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_003_bixin.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_002_nihao.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_009_baituo.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_010_baibai.gif",
        "https://res.suning.cn/project/yunxin/emotion_new/Lion_011_OK.gif",
      ],
      bq2: [],
      bq3: [],
      bq4: [],
      users: [],
      users2: [],
      isshow: false,
      h: false,
      s: 0,
      z: 6.7,
      val: "",
      str: "请输入您要咨询的问题",
    };
  },
  methods: {
    bqshow() {
      this.isshow = !this.isshow;
      this.h = !this.h;
      if (this.h) {
        this.s = 2;
        this.z = 4.85;
      } else {
        this.s = 0;
        this.z = 6.7;
      }
    },
    send(index) {
      this.bq1.slice(index, index + 1);
      this.users.push(this.bq1.slice(index, index + 1));
    },
    e() {
      this.users2.push(this.val);
      this.val = "";
    },
    xiaoshi() {
      this.str = "";
    },
  },
};
</script>
<style scoped>
.lt {
  width: 100%;
  background-color: rgb(242, 242, 242);
  overflow: hidden;
  margin-bottom: 0.62rem;
}
footer {
  width: 100%;
  height: 0.62rem;
  position: fixed;
  bottom: 0rem;
  background-color: white;
}
footer span {
  float: right;
  width: 0.26rem;
  height: 0.26rem;
  margin-top: 0.17rem;
  margin-right: 0.1rem;
  background-image: url(/imgs/bdc.png);
}
footer .span1 {
  background-position: -1.7rem -0.6rem;
}
footer .span2 {
  background-position: -1.7rem -1.06rem;
}
footer div {
  float: left;
  width: 3.14rem;
  height: 0.4rem;
  margin-top: 0.08rem;
  margin-left: 0.1rem;
  border-radius: 0.2rem;
  background-color: rgb(242, 242, 242);
  line-height: 0.4rem;
  text-indent: 0.2rem;
  position: relative;
  color: rgb(162, 151, 165);
}
footer div input {
  position: absolute;
  width: 2.81rem;
  height: 0.2rem;
  left: 0.2rem;
  top: 0.08rem;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
}
.bq {
  width: 100%;
  height: 1.94rem;
}
.box {
  height: 4.14rem;
  background-color: rgb(242, 242, 242);
  display: flex;
  margin: auto;
  overflow: auto;
  height: 1.94rem;
  position: fixed;
  bottom: 0.1rem;
}
.box1 {
  width: 4.14rem;
  height: 1.94rem;
  flex-shrink: 0;
  padding-top: 0.1rem;
  box-sizing: border-box;
}
ul {
  width: 4.14rem;
  height: 100%;
}
ul li {
  width: 0.9rem;
  float: left;
  height: 0.9rem;
  margin-left: 0.1rem;
}
ul li img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.13rem;
  margin-left: 0.08rem;
}

.p1,
.p2 {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.5rem;
}
.p1 b,
.p2 b {
  display: inline-block;
  max-width: 2.5rem;
  min-height: 0.5rem;
  background-color: cornflowerblue;
  border-radius: 0.08rem;
  font-size: 0.13rem;
  margin-left: 0.1rem;
  padding: 0.1rem;
  box-sizing: border-box;
}
.p1 span,
.p2 span {
  display: inline-block;
  width: 0.3rem;
  height: 0.3rem;
  background-color: chocolate;
  border-radius: 50%;
  background-image: url(http://image.suning.cn/uimg/yunxin/yunxinImg/head02.png);
  background-size: 100% 100%;
}
.p2 span {
  background-image: url(https://image.suning.cn/uimg/cmf/cust_headpic/0000000000_31_60x60.jpg);
}
.p2 span {
  float: right;
  margin-left: 0.1rem;
}
.p2 b {
  float: right;
  min-height: 0.3rem;
}
.p2 img {
  height: 100%;
  float: right;
}
</style>
