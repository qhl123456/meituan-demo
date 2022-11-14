<template>
  <div id="app">
  <payFailedcontentHeader></payFailedcontentHeader>
  <payFailedcontentDec></payFailedcontentDec>
  <payFailedcontentDecCenter></payFailedcontentDecCenter>
  <payFailedcontentDecMessage class="Message"></payFailedcontentDecMessage>
  <payFailedcontentDecFooter></payFailedcontentDecFooter>
  <van-divider
      :style="{ color: '#000', borderColor: '#cccccc', padding: '0 66px' ,backgroundColor:'#f7f9f9',height:'74px',marginTop:'-6px'}"
    >
      <van-icon name="like" color="#e13d1c"/> 更多商品推荐
    </van-divider>
  <goods-list></goods-list>
  <footer>
    <van-submit-bar :price="totalPrice" button-text="立即支付" @submit="onSubmit" />
  </footer>
  </div>
</template>

<script>
import payFailedcontentHeader from "./components/payFailedcontentHeader.vue";
import payFailedcontentDec from "./components/payFailedcontentDec.vue";
import payFailedcontentDecCenter from "./components/payFailedcontentDecCenter.vue"
import  payFailedcontentDecMessage from "./components/payFailedcontentDecMessage.vue"
import  payFailedcontentDecFooter from "./components/payFailedcontentDecFooter.vue"
import GoodsList from "../common/GoodsList.vue";
export default {
  name: "App",
  components: {
    payFailedcontentHeader,
    payFailedcontentDec,
    payFailedcontentDecCenter,
    payFailedcontentDecMessage,
    payFailedcontentDecFooter,
    GoodsList,
  },
  data() {
    return {
      totalPrice:0,
    };
  },
  created() {
    this.totalPrice=(localStorage.getItem("totalPrice")/1).toFixed(2)*100
  },
  methods: {
    onSubmit(){
       this.$router.push("NowtoPay")
    }
  },
}
</script>

<style scope>
.Message{
  margin-top: .1rem;
}
footer{
  margin-top: -.6rem;
}
</style>
