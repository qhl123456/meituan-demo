 <template>
  <div class="box">
     <div class="message">
          <div>
            <h5>您可能遇到以下问题</h5>
            <hr>
            <p v-for="(title,index) in titles" :key="index">{{title}}</p>
            
          </div>
    
     </div>
     <hr class="height">
     <van-button type="primary" size="large" class="cancel" @click="cancel">取消订单</van-button>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  name:"payFailedcontentDecFooter",
  data() {
    return {
     titles:["如何修改订单商品","如何修改自提点","商品买多了怎么办","自提单如何取货","如何查询附近的自提站点","什么时间可以自提"],
     cartid:[]
    };
  },
  methods: {
    cancel(){
      // console.log("开始取消");
          //如果是从购物车支付，删除购物车中对应的商品
          if(localStorage.getItem("count")==0){
            //获取订单中商品的id
            this.goodid = localStorage
              .getItem("noPayGood")
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
                    Toast.loading({
                      message: '正在取消中...',
                      forbidClick: true,
                    });
                    setTimeout(()=>{
                      Toast.success('取消成功');
                    },1000)
                    setTimeout(()=>{
                      this.$router.push("/index")
                    },3000)
                  });
                })
              });
          }else{
            //从详情页支付，则删除订单
            //删除订单
         let order_id=localStorage.getItem("order_id")/1
         this.$http.delete(`http://180.76.121.47/api/order/delorder/?order_id=${order_id}/`).then((res) => {
            //  console.log("取消成功");
            Toast.loading({
              message: '正在取消中...',
              forbidClick: true,
            });
             setTimeout(()=>{
               Toast.success('取消成功');
             },1000)
             setTimeout(()=>{
               this.$router.push("/index")
             },3000)
             })
          }
         }
}
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.message{
  width:3.6rem;
  /* min-height:3rem; */
  background-color: #f5f6f8;
  overflow: hidden;
  position: relative;
}
.message div{
  height: 1.8rem;
  width: 100%;
  background-color: white;
  /* margin-top: .1rem; */
  position: relative;
  overflow: hidden;
}
.message div h5{
  height: .48rem;
  font-size: .14rem;
  font-weight: bolder;
  text-indent: .18rem;
  line-height: .48rem;
}
.message div h4{
  height: .08rem;
  width: 100%;
  background-color: #f5f6f8;;
}
hr{
    border: none;
  height: .02rem;
  width: 100%;
  background-color: #f4f4f4;
}
.message div p{
  min-width: 1.65rem;
  height: .3rem;
  background-color: #f5f6f8;
  border-radius: .1rem;
  margin-top: .1rem;
  float: left;
  line-height: .3rem;
  text-align: center;
  font-size: .13rem;
  margin-left: .11rem;
}
.height{
  height: .1rem;
  width: 100%;
  background-color: #f4f4f4;
}
.box{
overflow: hidden;
}
.van-button--primary {
    color: #fff;
    background-color: white;
    color: black;
    border: none;
}

</style>