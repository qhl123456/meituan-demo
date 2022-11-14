<template>
  <div id="app">
    <div class="nav-card">
     <div class="nav-card-p">
       <p class="nav-card-p1">开卡专享价</p>
       <p class="nav-card-p2">近百款商品可选</p>
       <p class="nav-card-p3">开卡享</p>
     </div>
     <div class="nav-banner">
       <img src="/imgs/cx/4.png" alt="">
       <img src="/imgs/cx/5.png" alt="">
       <img src="/imgs/cx/1.png" alt="">
     </div>
    </div>

     <div class="nav-card">
     <div class="nav-card-p">
       <p class="nav-card-p1">天天领新鲜菜</p>
       <p class="nav-card-p2">40余款任你选</p>
       <p class="nav-card-p3">开卡领</p>
     </div>
     <div class="nav-banner">
       <img src="/imgs/cx/1.png" alt="路径失效">
       <img src="/imgs/cx/2.png" alt="">
       <img src="/imgs/cx/3.png" alt="">
     </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return{}
}
}
</script>

<style scoped>
#app{
    width: 3.34rem;
    margin: 0 auto;
}
.nav-card{
  width: 3.34rem;
  height: .86rem;
  background: #fff8ee;
  margin-top: .1rem;
  display: flex;
}
.nav-card-p{
  width: 1.18rem;
  margin-top: .08rem;
  margin-left: .1rem;
}
.nav-card-p1{
  font-size:.15rem;
  color: #5b1700;
  font-weight: bold;
}
.nav-card-p2{
  font-size:.15rem;
  color: #864211;
  margin-top: .06rem;
}
.nav-card-p3{
  width: .6rem;
  height: .15rem;
  font-size:.1rem;
  color: white;
  background: #784329;
  border-radius: .15rem;
  text-align: center;
  margin-top: .06rem;
  line-height: .15rem;
}
.nav-banner{
   width: 2rem;
   height: .72rem;
   margin-top: .06rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: white;
}
.nav-banner img{
  width: .58rem;
  height: .58rem;
  border-radius: .03rem;
  background: coral;
}
</style>