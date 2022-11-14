<template>
	<div class="content">
		<h4>热门搜索</h4>
		<ul class="row1">
			<li>满19减2
				<span class="s1">促</span>
			</li>
			<li>鸡蛋
				<span class="s2">热</span>
			</li>
			<li>面粉</li>
			<li>火龙果
				<span class="s2">热</span>
			</li>
			<li>牛奶
				<span class="s2">热</span>
			</li>
		</ul>
		<ul>
			<li>土豆</li>
			<li>卫生纸</li>
			<li>方便面</li>
			<li>西红柿
				<span class="s2">热</span>
			</li>
			<li>大米</li>
		</ul>
		<ul>
			<li>红薯</li>
			<li>口罩</li>
			<li>玉米</li>
			<li>面包</li>
			<li>酸奶</li>
			<li>食用油</li>
		</ul>
	</div>
</template>

<script>
export default {
    name:"HotSearch"
}
</script>

<style scoped>
    h4{
        margin-top: .625rem;
		margin-bottom: .8125rem;
    }
	.content{
		width: 100%;
		height: 8.5625rem;
	}
	
	li{
		list-style: none;
		float: left;
		padding: .4375rem .75rem;
		background-color: #f8f8f8;
		border-radius: .625rem;
        margin-right: .4375rem;
		margin-bottom: .4375rem;
        font-size: .75rem;
        position: relative;
	}
	ul{
		padding-left: 0;
		margin: 0;
	}
	span{
		display: inline-block;
		width: 1.0625rem;
		height: .9375rem;
        color: white;
        border-radius: .3125rem;
        text-align: center;
        line-height: .9375rem;
        position: absolute;
		top: -0.3125rem;
        right: 0;
	}
	.s1{
		background-color: #ff8132;
	}
	.s2{
		background-color: #f55f4c;
	}
</style>