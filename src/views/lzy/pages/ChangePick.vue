<template>
	<div id="app">
		<div class="box">
			<van-sticky>
			  <Change1></Change1>
			  <Change2></Change2>
			</van-sticky>
			
			<Change3></Change3>
			<Change4></Change4>
			<Addres></Addres>
		</div>
		
	</div>
	
</template>
<script>
	
	import Change1 from "../components/Change1.vue"
	import Change2 from "../components/Change2.vue"
	import Change3 from "../components/Change3.vue"
	import Change4 from "../components/Change4.vue"
	import Addres from "../components/Addres.vue"
	
	import Vue from 'vue';
	import { Sticky } from 'vant';
	
	Vue.use(Sticky);
	export default {
		name:"ChangePick",
		components: {
			Change1,Change2,Change3,Change4,Addres

		},
	};
</script>
<style scoped>
	#app{
		width: 100%;
		height: 6.4rem;
		background-color: #f4f4f4;
	}
</style>
