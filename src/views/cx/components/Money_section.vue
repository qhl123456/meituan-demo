<template>
  <div id="app">
    <div class="vip-card">
      <div class="vip-card-heard">
        <p class="vip-card-heard-p1">开卡专享价</p>
        <p class="vip-card-heard-p2">近百款商品低价买</p>
      </div>
      <div class="vip-card-right">
        <p class="vip-card-right-p1">最高可省</p>
        <p class="vip-card-right-p2">
          168<span class="vip-card-right-p1">元</span>
        </p>
      </div>
    </div>
    <div class="vip-card-shopping">
      <div class="vip-card-goods">
        <div
          class="vip-card-goods-shang"
          v-for="(section, index) in goods"
          :key="index"
        >
          <img  v-lazy="'http://180.76.121.47'+section.img" alt="商品图片丢" />
          <p><span>{{section.name}}</span><span></span></p>
          <div><span>￥{{section.oldprice}}</span><span>省钱卡</span></div>
          <p class="card-shoppimg-shang">￥{{section.newprice}}</p>
          <button>加入购物车</button>
        </div>
      </div>
      <div class="card-shoppimg-lookup">查看全部专享价商品</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: [],
    };
  },
  created() {
    axios({
      url: "http://180.76.121.47/api/goods/good/",
    }).then((res) => {
      // console.log(res.data.slice(10,res.data.length-1))
      // console.log(Math.round(Math.random()*16)) 
      for(let i=0;i<6;i++){
     this.goods.push(res.data.slice(10,res.data.length-1)[ Math.round(Math.random()*16)]);
      }
       
    });
  },
};
</script>

<style scoped>
#app {
  width: 3.08rem;
  margin: 0.26rem auto;
}
.vip-card {
  display: flex;
  justify-content: space-between;
}
.vip-card-heard {
  width: 1.2rem;
  height: 0.4rem;
}
.vip-card-heard-p1 {
  font-size: 0.16rem;
  color: #581600;
}
.vip-card-heard-p2 {
  font-size: 0.12rem;
  color: #a78269;
  margin-top: 0.06rem;
}
.vip-card-right {
  width: 0.56rem;
  height: 0.4rem;
  background: #581600;
  border-radius: 0.03rem;
  text-align: center;
}
.vip-card-right-p1 {
  font-size: 0.1rem;
  color: #ffffff;
  margin-top: 0.06rem;
}
.vip-card-right-p2 {
  font-size: 0.15rem;
  color: #ffffff;
}
.vip-card-shopping {
  width: 3.08rem;
  height: 4.8rem;
  margin-top: 0.06rem;
}
.vip-card-goods {
  width: 3.08rem;
  height: 4.36rem;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.vip-card-goods-shang {
  width: 1rem;
  height: 2.18rem;
}
.vip-card-goods-shang img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.1rem;
}
.vip-card-goods-shang p {
  font-size: 0.12rem;
  word-spacing: 0.02rem;
}
.vip-card-goods-shang div {
  width: 0.72rem;
  height: 0.14rem;
  margin-top: 0.1rem;
  border-radius: 0.01rem;
}
.vip-card-goods-shang div span:nth-of-type(1) {
  width: 0.36rem;
  height: 0.14rem;
  background: #ffd2ac;
  color: #2b0000;
  text-align: center;
  font-size: 0.1rem;
  line-height: 0.14rem;
}
.vip-card-goods-shang div span:nth-of-type(2) {
  width: 0.36rem;
  height: 0.14rem;
  background: #4e1907;
  color: white;
  text-align: center;
  font-size: 0.1rem;
  line-height: 0.14rem;
}
.vip-card-goods-shang .card-shoppimg-shang {
  font-size: 0.08rem;
  margin-top: 0.04rem;
  color: grey;
}
.vip-card-goods-shang button {
  width: 1rem;
  height: 0.24rem;
  background: yellow;
  border-radius: 0.24rem;
  text-align: center;
  border: none;
  font-size: 0.12rem;
  line-height: 0.24rem;
}
.card-shoppimg-lookup {
  width: 3.08rem;
  height: 0.4rem;
  text-align: center;
  font-size: 0.12rem;
  line-height: 0.4rem;
  margin-top: 0.02rem;
}
</style>