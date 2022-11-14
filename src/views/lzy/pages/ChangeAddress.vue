<template>
	<div id="box">
		<div class="box">
			<span class="iconfont icon-changyongicon-" @click="back"></span>
			<h3>选择地址</h3>
		</div>
		<Change2></Change2>
		<i>附近地址</i>
		<ul>
			<li v-for="(item,index) in list" :key="index" @click="select(item)">{{item}}</li>
		</ul>
	</div>
</template>

<script>
	import Change2 from "../components/Change2.vue"

	import axios from 'axios'
	export default {
		name: "ChangeAddress",
		components: {
			Change2
		},
		data() {
			return{
				list : [
					  "南窑头小区西区-97号楼",
					  "南窑头小区西区-96号楼",
					  "南窑头小区西区-99号楼",
					  "绿港花园",
					  "南窑头小区东区-97号楼",
					  "南窑头小区东区-94号楼",
					  "绿港花园-2号楼",
					  "绿港花园-3号楼",
					  "南窑头小区西区-100号楼",
					  "南窑头小区西区-86号楼",
					  "南窑头小区西区-78号楼"
				]
			}
			
		},
		methods: {
			back() {

				this.$router.back()
			},
			select(add) {
				let item=this.list.item;
				// console.log("this.list.item",add)
				sessionStorage.setItem("item",add)
				this.$router.back()
			},
		}
		
	}	
</script>

<style scoped>
	#app {
		width: 100%;
		height: 6.4rem;
	}

	.box {
		width: 100%;
		height: .45rem;
		background-color: white;
		line-height: .45rem;
	}

	.iconfont {
		font-size: 0.22rem;
		margin-left: .15rem;
		font-weight: bold;
	}

	h3 {
		display: inline-block;
		font-size: .18rem;
	}

	i {
		display: inline-block;
		font-size: 0.14rem;
		font-style: normal;
		margin-left: 0.15rem;
		margin-bottom: 0.2rem;
	}

	ul {
		margin-left: 0.15rem;
	}

	li {
		/* font-size: 0.14rem; */
		padding: 0.15rem 0;
		border-bottom: 0.01rem solid #ABB1C3;
	}
</style>
