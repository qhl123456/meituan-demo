<template>
  <div id="app">
    <div class="box">
      <span class="iconfont icon-changyongicon-" @click="back"></span>
      <h3>修改昵称</h3>
    </div>

    <p class="p1">用户名：</p>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <span class="s1">×</span>
      <p class="p2">以英文字母或汉字开头，限4-16个字符，一个汉字为2个字符</p>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          class="btn"
          @click="back"
          >确认</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ChangeUsername",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    back() {
      axios({
        url: "http://180.76.121.47/api/user/updateuserinfo/",
        method: "post",
        data: {
          newnote: "南窑头国际",
          newname: this.username,
          newnick_name: "老王头",
        },
      }).then((res) => {
        localStorage.setItem("username", this.username);
        this.$router.back();
      });
    },
  },
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 6.4rem;
}

.box {
  width: 100%;
  height: 0.45rem;
  background-color: white;
  line-height: 0.45rem;
}

.iconfont {
  font-size: 0.22rem;
  margin-left: 0.15rem;
  /* margin-right: .1rem; */
}

h3 {
  display: inline-block;
  font-size: 0.18rem;
}

.p1 {
  padding: 0.1rem 0;
  margin-left: 0.1rem;
}

.p2 {
  font-size: 0.11rem;
  margin-left: 0.1rem;
  margin-top: 0.08rem;
}

.btn {
  background-color: #ffd004;
  color: black;
  font-size: 0.14rem;
  font-weight: bold;
}

#app {
  width: 100%;
  /* height: 40rem; */
  background-color: #f4f4f4;
}

.s1 {
  display: inline-block;
  width: 0.1rem;
  height: 0.1rem;
  line-height: 0.1rem;
  background-color: #848386;
  color: white;
  border-radius: 50%;
  position: absolute;
  right: 0.1rem;
  top: 1rem;
}
</style>
