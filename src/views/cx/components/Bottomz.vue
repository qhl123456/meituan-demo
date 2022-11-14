<template>
  <div id="app">
    <div class="icf">
      <span class="iconfont icon-jinritemai"></span>
      <div class="icf-youxuan">
          <p class="icf-youxuan-name1">美团优选</p>
          <p class="icf-youxuan-name2">便宜有好货</p>
      </div>
    </div>
    <ul>
        <li>
            <span class="iconfont icon-yezi"></span>
            <span>便宜有好货</span>
        </li>
        <li>
            <span class="iconfont icon-icon-test"></span>
            <span>次日16点自提</span>
        </li>
        <li>
            <span class="iconfont icon-shouhouwuyou"></span>
            <span>售后无忧</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{}
  },
  methods:{
    
  }
};
</script>

<style scoped>
#app {
  width: 3.6rem;
  height: 0.8rem;
}
.icf {
  width: 0.9rem;
  height: 0.3rem;
  margin: .1rem auto;
  display: flex;
  justify-content: space-between;
}
.icon-jinritemai {
  font-size: 0.28rem;
  line-height: .3rem;
  color: #afafae;
}
.icf-youxuan{
  width: .6rem;
}
.icf-youxuan-name1{
    font-size: .15rem;
    color: #afafae;
}
.icf-youxuan-name2{
    font-size: .08rem;
    color: #afafae;
}
ul{
    width: 2.54rem;
    height: .1rem;
    margin: 0 auto;
    display: flex;
    font-size: .1rem;
}
li{
    margin-left: .1rem;
    color: #afafae;
}
</style>