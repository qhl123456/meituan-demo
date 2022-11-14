<template>
  <div>
    <div class="top">
      <h3>
        <van-button icon="cross" type="primary" round @click="cancel" />
        <p>美团优选</p>
      </h3>
      <img src="../../assets/imgs/login.png" alt="" />
    </div>
    <div class="bottom">
      <p>您还未登录</p>
      <van-button size="large" class="tologin" round @click="tologin"
        >立即登录</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "ToLogin",
  data() {
    return {};
  },
  methods: {
    tologin() {
      this.$router.push({
        path: "/login",
        query: {
          topath: this.$route.query.path,
        },
      });
    },
    cancel() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.top {
  background-color: #fccc3c;
}
h3 {
  width: 90%;
  height: 0.4rem;
  margin: auto;
  display: flex;
  align-items: center;
  background-color: #fccc3c;
}
h3 p {
  width: 80%;
  text-align: center;
}
.van-button--primary {
  border: none;
  width: 15%;
  height: 0.3rem;
  color: #000;
  background-color: #f8ec98;
}
img {
  width: 100%;
  display: block;
  margin: auto;
  height: 4.3rem;
}
.bottom {
  width: 90%;
  height: 1.5rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.14rem;
  color: #7d7d7d;
}
.tologin {
  background-color: #fccc3c;
  font-weight: 700;
}
</style>
