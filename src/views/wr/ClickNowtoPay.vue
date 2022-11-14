<template>
  <div id="app">
    <header><van-icon name="cross" class="close" @click="closeback"/>支付</header>
    <div class="center">
      <h3>美团订单-{{goodsNumber}}</h3>
      <h2><span>￥</span>{{totalPrice}}</h2>
    </div>
    <h4><span>收款方</span>美团平台商户</h4>
    <footer>
      <van-button type="primary" size="large" class="nowPay" @click="NowtoPay">立即支付</van-button>
    </footer>
    <div class="keypwd" v-show="IsShow">
       <h5><van-icon name="cross" class="close" @click="close"/>请输入支付密码<span>使用指纹</span></h5>
      <p>美团平台商户</p>
      <h2><span>￥</span>{{totalPrice}}</h2>
      <hr>
      <h3>支付方式<span>零钱&nbsp;></span></h3>
      <div>
      <!-- 密码输入框 -->
          <van-password-input
            :value="value"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
          />
          <!-- 数字键盘 -->
          <van-number-keyboard
            v-model="value"
            :show="showKeyboard"
            @blur="showKeyboard = false"
          />
    </div> 
    </div>
    
  </div>
  
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);

export default {
  name: "ClickNowtoPay",
  data() {
    return {
      value:"",
      showKeyboard: true,
      IsShow:false,
      totalPrice:0,
      goodsNumber:"211201111002000000002714979757",
      cartid:[]
    };
  },
  created() {
    if(this.$store.state.totalPrice!=0){
      this.totalPrice=this.$store.state.totalPrice;
    }else{
       this.totalPrice=localStorage.getItem("totalPrice");
    }
     this.$http({
              url: "/GoodsNumber"
            }).then((res) => (this.goodsNumber=res.data[Math.round(Math.random()*40)]))
  },
  watch:{
      value(n,o){
        if(n.length==6){
          localStorage.setItem("hasPayGood",localStorage.getItem("DetailGoodsId"))
          // this.$store.state.hasPayGood.push(this.$store.state.goodsId);
           
           // //支付订单
           this.$http({
              url: "http://180.76.121.47/api/order/pay/4/",
            }).then((res) => {
              console.log("支付订单",res.data)
            });
          Toast.loading({
          message: '正在支付',
          forbidClick: true,
        });
         setTimeout(()=>{
            Toast.success('支付成功');
          },2000)
          
          setTimeout(()=>{
            this.$router.push("/index")
          },4000)

      // console.log("开始取消");
          //如果是从购物车支付，删除购物车中对应的商品
          if(localStorage.getItem("count")==0){
            //获取订单中商品的id
            this.goodid = localStorage
              .getItem("DetailGoodsId")
              .split(",")
              .map((item) => item / 1);
              
            this.$http({
            url: `http://180.76.121.47/api/user/cart/`,
              }).then((res) => {
                res.data.map((item) => {
                  for (let i = 0; i < this.goodid.length; i++) {
                    if (item.goods.goods_id == this.goodid[i]) {
                      this.cartid.push(item);
                    }
                  }
                });
                this.cartid.map((item)=>{
                  this.$http
                  .delete(`http://180.76.121.47/api/user/cart/?cart_id=${item.cart_id}`)
                  .then((res) => {
                    console.log(res.data);
                  });
                })
              });
          }
          
        }
      }
  },
 
  methods: {
    closeback(){
        this.$router.push("/NowtoPay")
        localStorage.setItem("noPayGood",localStorage.getItem("DetailGoodsId"))
    },
    NowtoPay(){
        this.IsShow=true;
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    close(){
      this.IsShow=false;
    }
  },
};
</script>

<style scope>
body,html{
height: 100%;
background-color:#ededed;
}
header{
  width: 3.6rem;
  height: .5rem;
  background-color: #ededed;
  line-height: .5rem;
  text-align: center;
  font-size: .13rem;
  font-family: "华文楷体";
   position: relative;
}
header .close{
  position: absolute;
  top: 0.2rem;
  left: .1rem;
}
.center{
  width: 3.6rem;
  height: 1rem;
  background-color: #f7f7f7;
  /* line-height:1rem; */
  text-align: center;
  font-size: .1rem;
  overflow: hidden;
}
.center h3{
  margin:.2rem 0 .15rem 0;
}
.center h2{
  font-size:.3rem ;
}
.center h2 span{
  font-size:.22rem ;
}
h4{
  width: 3.6rem;
  height: .5rem;
  text-indent: 2.5rem;
  border-top: .01rem solid #ededed;
  border-bottom: .01rem solid #ededed;
  line-height: .5rem;
  position: relative;
  font-size: .12rem;
   font-family: "华文楷体"; 
   background-color: white;
}
h4 span{
  text-indent:0rem;
  position: absolute;
  left: .2rem;
  color:#bdbdbd ;
}
footer{
  width: 3.4rem;
  height: .5rem;
  margin:.25rem auto;
}
footer .van-button--large {
    border-radius: .05rem;
}
.keypwd{
  width: 3rem;
  height:2.5rem;
  position: fixed;
  top: 1rem;
  left: .3rem;
  background-color: white;
  border-radius: .1rem;
}
.keypwd h5{
  width: 2.5rem;
  margin:.2rem auto;
  height: .2rem;
  font-size: .1rem;
  line-height: .2rem;
  text-align: center;
  position: relative;
}
.keypwd h3{
    width: 2.5rem;
     margin:.2rem auto;
     font-size: .1rem;
     position: relative;
}
.keypwd h3 span{
position: absolute;
right: 0;

}
.keypwd h5 .close{
    position: absolute;
  left: 0rem;
  top: .05rem;
}
.keypwd h5 span{
    position: absolute;
  right: 0rem;
  top: 0rem;
}
.keypwd p,.keypwd h2{
  text-align: center;
    font-family: "华文楷体"; 
    margin-top: .07rem;
}
hr{
  margin-top: .2rem;
  background-color:#ededed;
}
.van-password-input ul{
  width: 2.5rem;
  margin:-.15rem auto;
}
</style>