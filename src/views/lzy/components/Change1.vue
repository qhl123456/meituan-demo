<template>
	<div id="box">
		<span class="iconfont icon-changyongicon-"  @click="back"></span>
		<h3>切换自提点</h3>
	</div>
</template>

<script>
	export default {
		name:"Change1",
		methods:{
			back(){
				this.$router.back()
			}
		}
	};
</script>

<style scoped>
	#box{
		width: 100%;
		height: 0.55rem;
		margin: auto;
		background-color: white;
		line-height: 0.55rem;
		/* padding-left: 0.15rem; */
	}
	.icon-changyongicon-{
		font-size: 0.22rem;
		/* margin-left: 0.15rem; */
		/* margin-right: .9375rem; */
	}
	h3{
		display: inline-block;
		font-weight: 600;
		/* font-size: 0.14rem; */
	}
</style>
