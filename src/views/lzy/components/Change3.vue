<template>
	<div id="box">

		<p class="p1">
			<svg class="icon-weizhi" aria-hidden="true">
				<use xlink:href="#icon-weizhi"></use>
			</svg>
			<i >{{item}}</i>
		</p>

		<p class="p2" @click="goaddress">
			切换地址
			<span class="iconfont icon-xiangyoujiantou"></span>

		</p>

	</div>
</template>

<script>
	export default {
		name: "Change3",
		data(){
			return {
				
				item : sessionStorage.getItem("item"),
	
			}
			
					
		},
		methods: {
			goaddress() {
				this.$router.push("/changeadress");
			},
			
		}
	}
</script>

<style scoped>
	#box {
		width: 100%;
		height: 0.43rem;
		background-color: white;
		line-height: 0.43rem;
		display: flex;
		justify-content: space-between;
		margin-bottom: .05rem;
	}

	.p1 {
		/* width: 3.4rem; */
		display: inline-block;
		position: relative;
		/* margin: auto; */
		font-size: .14rem;
		/* margin-bottom: .625rem; */
	}

	.p1 i {
		font-size: 0.14rem;
		font-style: normal;
	}

	.p2 {
		display: inline-block;
		color: #d36916;
		font-size: .14rem;
		line-height: 0.43rem;
		margin: 0;
		display: flex;
	}

	.icon-weizhi {
		width: .15rem;
		height: .15rem;
		margin-left: .15rem;
		/* margin-right: .9375rem; */
	}

	.iconfont {
		font-size: 0.13rem;
		color: #dd5825;
		margin-right: .1rem;
		/* margin-top: 0.13rem; */
		/* margin-left: 0.08rem; */
	}
</style>
