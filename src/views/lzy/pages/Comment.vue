<template>
	<div id="app">
		<div class="box">
			<span class="iconfont icon-changyongicon-"  @click="back"></span>
			<h3>消息中心</h3>
			
		</div>
		<van-empty description="暂无消息,先去首页逛逛吧" />
		<input type="button" value="回到首页" />
	</div>
</template>

<script>
	import Vue from 'vue';
	import { Empty } from 'vant';
	Vue.use(Empty);
	export default {
		name:"Comment",
		methods:{
			back(){
				this.$router.back();
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
	.icon-changyongicon-{
		width: 0.15rem;
		height:0.15rem;
		margin-left: 0.15rem;
		/* margin-right: .9375rem; */
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
