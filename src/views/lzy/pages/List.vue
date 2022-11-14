<template>
	<div id="app">
		<p class="p1">
			<span class="iconfont icon-changyongicon-"  @click="back"></span>
			<van-search v-model="value" placeholder="请输入搜索关键词" shape="round"/>
		</p>

		<van-tabs v-model="active">
			<van-tab title="综合">
				<Like></Like>
			</van-tab>
			<van-tab title="销量">
				<Like></Like>
			</van-tab>
			<van-tab title="价格">
				<Like></Like>
			</van-tab>
			<van-tab title="筛选">
				<Like></Like>
			</van-tab>
		</van-tabs>


	</div>
</template>
<script>
	import Like from "../components/Like.vue";
	import SaveMoney from "../../common/SaveMoney.vue"

	import Vue from 'vue';
	import { Tab, Tabs } from 'vant';
	import { Search } from 'vant';
	
	
	Vue.use(Search);
	Vue.use(Tab);
	Vue.use(Tabs);

	export default {
		name: "List",
		  data() {
		    return {
		      active: 0,
			  value: '',
		    };
		  },
		
		components: {
			Like,
			SaveMoney,
		},
		methods:{
			go(){
				this.$router.push("/sevecard")
			},
			back() {
				this.$router.back();
			}
		}
		
		
		
	}
	
</script>
<style scoped>
	#app {
		width: 100%;
	}

	.p1 {
		width: 3.4rem;
		margin: auto;
		display: flex;
		height: 0.34rem;
		line-height: 0.34rem;
		margin-top: 0.15rem;
	}
	
	.iconfont{
		font-size: 0.22rem;
		font-weight: bold;
	}
	
</style>
