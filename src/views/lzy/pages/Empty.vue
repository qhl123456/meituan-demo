<template>
	<div id="app">
		<van-empty description="您还没有订单~快去逛逛吧~" />
		<input type="button" value="去逛逛" @click="goIndex"/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Empty } from 'vant';
	Vue.use(Empty);
	export default {
		name:"Empty",
		methods:{
			goIndex(){
				this.$router.push("/index");
			}
		}
	};
</script>

<style scoped>
	.box{
		width: 100%;
		height: 0.55rem;
		background-color: white;
		line-height: 0.55rem;
	}
	.icon-xiangyoujiantou{
		width: 0.15rem;
		height:0.15rem;
		margin-left: 0.15rem;
		
	}
	h3{
		display: inline-block;
		font-size: 0.14rem;
	}
	input{
		width:1.4rem;
		height: 0.35rem;
		margin: auto;
		outline: none;
		border: none;
		background-color: #ffd006;
		font-size: 0.14rem;
		border-radius: 0.2rem;
		margin-left: 1.1rem;
	}
</style>
