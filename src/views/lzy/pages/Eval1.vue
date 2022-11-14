<template>
  <div id="box">
	  <div class="box">
	  	<span class="iconfont icon-changyongicon-" @click="back"></span>
	  	<h3>我的订单</h3>
	  </div>
	  <van-tabs v-model="active" active-color="#ffc12c" inactive-color="#000">
	    <van-tab title="全部" ><Eval></Eval><Nopaying></Nopaying></van-tab>
	    <van-tab title="待支付" ><Nopaying></Nopaying></van-tab>
	    <van-tab title="待取货"><Eval></Eval></van-tab>
	    <van-tab title="待评价"><Empty></Empty></van-tab>
		<van-tab title="退款/售后"><Empty></Empty></van-tab>
	  </van-tabs>
  </div>
</template>

<script>
	import Eval from './Eval.vue';
	import Empty from './Empty.vue';
	import Nopaying from './Nopaying';
	import Vue from 'vue';
	import { Tab, Tabs } from 'vant';
	
	Vue.use(Tab);
	Vue.use(Tabs);
export default {
  name: "List",
  data(){
	  return{
		  active:0,
		  
	  }
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
  components:{
	  Eval,Empty,Nopaying
  },
  
};
</script>
<style scoped>
.box{
		width: 100%;
		height: 0.55rem;
		background-color: white;
		line-height: 0.55rem;
	}
	.iconfont{
		font-size: 0.22rem;
		margin-left: 0.15rem;
		font-weight: bold;
		/* margin-right: .9375rem; */
	}
	h3{
		display: inline-block;
		/* font-size: 0.15rem; */
	}
</style>
