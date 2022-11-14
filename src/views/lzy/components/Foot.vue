<template>
	<div class="footer">
		<input type="button" value="选择其他自提点" @click="go">
	</div>
</template>

<script>
	import Vue from "vue"
	export default {
		// name:"footer",
		methods:{
			go(){
				this.$router.push("/changepick");
			}
		}
	}
</script>

<style scoped>
	.footer{
		width: 100%;
		height: 0.5rem;
		background-color: white;
		position: fixed;
		bottom: 0;
	}
	input{
		width: 3.3rem;
		height: 0.37rem;
		outline: none;
		border: none;
		background-color: #ffd004;
		font-size: 0.18rem;
		border-radius: 0.2rem;
		margin: .05rem 0.13rem;
	}
</style>
