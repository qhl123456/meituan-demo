<template>
  <div class="all">
    <div class="header">
      <span class="iconfont icon-changyongicon-" @click="back"></span>
      <h3>个人信息</h3>
    </div>
    <ul class="list">
      <li class="img">
        <span>头像</span>

        <p>
          <van-uploader
            v-model="fileList"
            :deletable="false"
            :after-read="afterRead"
            preview-size="0.43rem"
          />
          <span class="iconfont icon-xiangyoujiantou" @click="toImg"></span>
        </p>
      </li>
      <li class="name">
        <span>昵称</span>
        <p>
          <span>{{ newname }}</span>
          <span class="iconfont icon-xiangyoujiantou" @click="toName"></span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { Uploader } from "vant";

import { Notify } from "vant";

// 全局注册
Vue.use(Notify);
Vue.use(Uploader);
export default {
  name: "MyMsg",

  data() {
    return {
      newname: "",

      fileList: [],
    };
  },

  methods: {
    back() {
      this.$router.back();
    },
    toImg() {
      this.$router.push("");
    },
    toName() {
      this.$router.push("/name");
    },

    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      // console.log(file);

      const formdate = new FormData();
      formdate.append("head", file.file);
      this.$http({
        url: "http://180.76.121.47/api/user/updatehead/",
        method: "post",
        data: formdate,
      }).then((res) => {
        this.$router.push("/mine");
        Notify({ type: "success", message: "更换成功" });
      });
    },
  },
  created() {
    this.newname = localStorage.getItem("username");
  },
};
</script>
<style scoped>
.all {
  width: 100%;
  height: 6.4rem;
  background-color: #f6f6f6;
}

.header {
  width: 100%;
  height: 0.7rem;
  background-color: white;
  margin-bottom: 0.05rem;
  line-height: 0.7rem;
}

.icon-changyongicon- {
  font-size: 0.22rem;
  font-weight: bold;
  margin-left: 0.15rem;
  /* margin-right: .9375rem; */
}
h3 {
  display: inline-block;
  /* font-size: 0.14rem; */
}

.list {
  width: 100%;
  /* height:0.7rem; */
  background-color: white;
  padding-left: 0;
}

li {
  list-style: none;
  margin-left: 0.1rem;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.55rem;
}

li p {
  display: inline-block;
}

li p a {
  margin-right: 0.1rem;
}

img {
  /*width: 0.55rem;
		height: 0.55rem;
		border-radius: 50%;*/
  margin-top: 0.15rem;
  /* border-bottom: .01rem solid #f6f6f6; */
}

.img p span {
  margin-right: 0.1rem;
}

.name p span {
  margin-right: 0.1rem;
}
</style>
