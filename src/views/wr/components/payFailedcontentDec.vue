 <template>
  <div class="box">
   <main>
     <section>
       <h5><van-icon name="friends-o" class="my"/>提货人昵称：{{personName}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{personLocal}}</h5>
       <hr>
       <div style="position:relative">
         <van-icon name="shop-o" class="home"/>
         <div class="left">
           <h5>自提点： {{location.name}}</h5>
          <p style="  margin-top: -0.1rem;">联系人：{{location.relation_name}}</p>
          <p>联系电话：{{location.relation_phone}}</p>
         </div>
         <h4><van-icon name="guide-o"/> 导航</h4>
       </div>
     </section>
   </main>
   
  </div>
</template>

<script>

export default {
  name:"payFailedcontentDec",
  data() {
    return {
      location:[],
       personName:"",
       personLocal:"",
    };
  },
  created() {
     //获取订单自提点---成功
     console.log(localStorage.getItem("local_id")/1);
     this.$http({
              url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
            }).then((res) => {
              // console.log(res.data.slice(3,4));
              this.location = res.data.slice(localStorage.getItem("local_id")/1,localStorage.getItem("local_id")/1+1)[0];
              console.log(this.location);
            });
        //获取用户信息----显示提货人信息
            this.$http({
              url: "http://180.76.121.47/api/user/lookaccount/",
            }).then((res) => {
              this.personName = res.data[0].name;
              this.personLocal=res.data[0].city;
            });
  },
  methods: {
  },
  
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
main{
  width:3.6rem;
  background-color: #f5f6f8;
  height: 1.5rem;
  overflow: hidden;
}
main section{
  width: 100%;
  height: 1.5rem;
  background-color: white;
  margin-top: .1rem;
}
main section h5{
  width: 100%;
  height: .4rem;
  line-height: .4rem;
  font-size:.12rem;
  text-indent: .05rem;
}
main section hr{
  border: none;
  height: .02rem;
  width: 100%;
  background-color: #f4f4f4;
}
.home{
  float: left;
  margin: .4rem .13rem;
}
.left{
  width: 2.5rem;
  height: .74rem;
}
.left h5{
  margin-bottom:.05rem ;
  text-indent: 0;
}
.my{
  margin-right: .1rem;
}
.left p{
  font-size: .12rem;
  line-height: .18rem;
  color:#bebebe ;
}
section h4{
  position: absolute;
font-size: .14rem;
color: #2b94fd;
top: .43rem;
right: .22rem;
}
</style>