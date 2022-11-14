<template>
  <div id="app">
    <div class="card-heard">
      <div class="card-heard-icf">
        <p class="card-heard-icf-ico">
          <span class="iconfont icon-changyongicon-" @click="fun"></span>
        </p>
        <p class="card-heard-icf-card1">省钱卡</p>
      </div>

      <div class="card-heard-card2">
        <div class="card-heard-card2-box">
          <p class="card-heard-card2-p1">省钱卡最高可省</p>
          <p class="card-heard-card2-p3">258/月</p>
        </div>
        <p class="card-heard-card2-p2">规则</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name:"App",
  data(){
    return{}
  },
  methods:{
    fun(){
      this.$router.back();
    }
  }
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 1.75rem;
  background: #fee6cd;
}
.card-heard {
  width: 3.34rem;
  height: 1.75rem;
  margin: 0 auto;
  overflow: hidden;
}
.card-heard-icf {
  margin-top: 0.4rem;
}
.card-heard-icf-ico {
  width: 0.3rem;
  height: 0.3rem;
  background: white;
  border-radius: 50%;
  text-align: center;
  line-height: 0.3rem;
  float: left;
}
.card-heard-icf-card1 {
  text-align: center;
  font-size: 0.15rem;
  line-height: 0.3rem;
}

.card-heard-card2 {
  width: 3.34rem;
  height: 0.8rem;
  background: #5a3421;
  margin-top: 0.24rem;
  border-radius: 0.1rem 0.1rem 0 0;
  color: white;
}
.card-heard-card2-box {
  float: left;
  font-size: 0.2rem;
  margin-left: 0.14rem;
  margin-top: 0.16rem;
}

.card-heard-card2-p2 {
  float: right;
  margin-top: 0.16rem;
  margin-right: 0.3rem;
  font-size: 0.1rem;
}
.card-heard-card2-p3 {
  margin-top: 0.1rem;
}
</style>