<template>
	<div id="box">
		
		<p class="p1">雁塔区
            <span class="iconfont icon-xiangxiajiantou" ></span>
        </p>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        
	</div>
</template>

<script>
	export default {
	  data() {
	    return {
	      value: '',
	    };
	  },
	};
</script>

<style scoped>
	#box{
		width: 100%;
		height: 0.4rem;
		background-color: white;
        line-height: 0.4rem;
        display: flex;
        margin-bottom:0.05rem;
	}
    .p1{
        margin-left:.15rem;
    }
	.iconfont{
		font-size: 0.1rem;
		font-weight: bold;
		display: inline-block;
		line-height: 0.45rem;
		
	}
</style>
