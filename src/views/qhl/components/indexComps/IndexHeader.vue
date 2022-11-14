<template>
  <!-- 头部 -->
  <div>
    <van-row
      gutter="20"
      type="flex"
      align="center"
      justify="space-between"
      class="header"
    >
      <van-col span="10">
        <h2>美团优选</h2>
      </van-col>
      <van-col span="12">
        <p v-if="hasUser" class="address" @click="goSelfPick">
          <van-icon name="location-o" />自提点:{{ address }} >
        </p>
        <h4 v-else>登陆后可切换自提点</h4>
      </van-col>
      <van-col span="2" @click="goMessage">
        <van-icon name="chat-o" dot />
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  name: "IndexHeader",
  data() {
    return {
      hasUser: true,
      address: "",
    };
  },
  methods: {
    // 去自提点
    goSelfPick() {
      this.$router.push("/selfpick");
    },
    // 去我的消息
    goMessage() {
      this.$router.push("/mymessage");
    },
  },
  created() {
    if (localStorage.getItem("token")) {
      this.hasUser = true;
    } else {
      this.hasUser = false;
    }
    // 获取自提点
    this.$http({
      url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
    }).then((res) => {
      this.address = res.data[3].name;
    });
  },
};
</script>

<style scoped>
.header {
  width: 90%;
  height: 0.5rem;
  margin: auto;
}
.address {
  font-size: 0.12rem;
  font-weight: bold;
}
</style>
