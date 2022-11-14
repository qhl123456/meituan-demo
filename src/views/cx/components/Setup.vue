<template>
  <div id="app">
    <div class="app-head">
      <span class="iconfont icon-changyongicon-" @click="fun"></span>
      <span class="app-head-hader">设置</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"App",
  data(){
    return {
      
    }
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
  width: 3.34rem;
  height: 0.8rem;
  margin: 0 auto;
  overflow: hidden;
}
.app-head {
  margin-top: 0.45rem;
  font-size: 0.18rem;
  text-align: center;
}
.iconfont {
  float: left;
  font-size: 0.2rem;
}

</style>