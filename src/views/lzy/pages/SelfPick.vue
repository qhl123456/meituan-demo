<template>
	<div id="a">
		<Check></Check>
		<Address></Address>
		<Foot></Foot>
	</div>
</template>

<script>
	import Check from "../components/Check.vue"
	import Address from "../components/Address.vue"
	import Foot from "../components/Foot.vue"
	export default {
		data(){
			return{
				id:'',
			}
		},
		components: {
			Check,Address,Foot
		},
		
	};
</script>

<style scoped>
	#a{
		width: 100%;
		/* height: 40rem; */
		background-color: black;
		
	}
</style>
