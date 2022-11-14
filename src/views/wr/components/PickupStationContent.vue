 <template>
  <div class="box">
   <header>
     <van-nav-bar
      title="选择自提点"
      left-arrow
      @click-left="onClickLeft"
    />
   </header>
   <section>
     <h2>其他自提点</h2>
     <ul>
       <li v-for="(item,i) in content"  :key="i">
          <div class="Pick">
            <div class="img">
              <img src="~assets/imgs/shop.jpg" alt="">
              <p>可下单</p>
            </div>
            <div class="text">
              <h5>{{item.name}}</h5>
              <h6 class="red">据您步行距离：{{distance[i]}}米</h6>
              <h6>联系人姓名：&nbsp;{{item.relation_name}}</h6>
              <h6>联系人方式：&nbsp;{{item.relation_phone}}</h6>
              <h4>
                <van-tag plain type="primary">支持冷冻冷藏</van-tag>
                <van-tag plain type="primary" class="gray">优质服务</van-tag>
              </h4>
              <input type="radio" name="adress" value="i" @click="getLocal_id(i)">
            </div>
         </div>
       </li>
     </ul>
   </section>

  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name:"",
  data() {
    return {
      content:[],
      distance:[1564,2344,3200],
      local_id:5
    };
  },
   created() {

    //获取订单自提点---成功
     this.$http({
              url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
            }).then((res) => {
              // console.log("自提点信息",res.data);
              this.content = res.data.slice(0,3)
            });
        
  },
  watch:{
    content:(n,o)=>{
    }
  },
  methods: {
     onClickLeft() {
      Toast('返回');
      setTimeout(()=>{
         this.$router.push({
           path:'/Nowtobuy',
           query:{
             "local_id":this.local_id
           }
         })
      },1000)
    },
    getLocal_id(i){
       this.local_id=i;
       localStorage.setItem("local_id",this.local_id)
    }
  },
};

</script>



<style scoped>
*{
  margin: 0;
  padding: 0;
}
header{
  margin: .1rem 0;
  font-family: "华文楷体";
  font-size: .17rem;
  font-weight: bold;
}
.Pick{
  width: 3.4rem;
  height: 1.2rem;
  margin: auto;
  border: .02rem solid #ffd101;
  border-radius: .1rem;
  box-sizing: border-box;
  padding: .12rem;
  margin-bottom: .2rem;
  
}
.Pick .img{
   float: left;
   width: .7rem;
   height: .87rem;
   border: .02rem solid red;
   border-radius: .05rem;
   background-color: red;
}
.Pick .img img{
   width: .7rem;
   height: .7rem;
}
.Pick .img p{
   font-size: .1rem;
   height: .17rem;
   width: 100%;
   color: white;
   text-align: center;
}
.Pick .text{
   float: left;
   width: 2.25rem;
   height: .9rem;
   margin-left: .1rem;
   position: relative;
}
.Pick .text h5{
  margin: .02rem 0 .1rem;
}
.Pick .text h6{
  font-size: .1rem;
  line-height: .16rem;
  color: #dadbdd;
}
.Pick .text .red{
  color: red;
}
.gray.van-tag--primary.van-tag--plain {
    color: #dadbdd;
    margin-left: .05rem;
}
h2{
  width: 3.6rem;
  height: .4rem;
  line-height: .4rem;
  text-indent: .15rem;
  font-size: .16rem;
}
.text input{
position: absolute;
width: .2rem;
height: .2rem;
top:0;
right:.0rem;
}
</style>