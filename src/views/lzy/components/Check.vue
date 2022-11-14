<template>
	<div class="check">
		<div class="box">
			<span class="iconfont icon-changyongicon-"  @click="back"></span>
			<h3>选择自提点</h3>
		</div>
	</div>
    
</template>

<script>
	export default {
		name:"Check",
		methods:{
			back(){
				this.$router.back();
			}
		}
	};
</script>

<style scoped>
	.check{
        width: 100%;
        height: 0.75rem;
        background-color: white;
        line-height: 0.75rem;
    }
	.box{
		/* width: 3.4rem; */
		margin: auto;
	}
	h3{
		display: inline-block;
	}
	.icon-changyongicon-{
		font-size: 0.22rem;
		font-weight: bold;
		/* margin-left: 0.15rem; */
	}
</style>
