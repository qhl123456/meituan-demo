<template>
    <div class="box">
        <a href="">></a>
		<div class="">
			<input type="text" placeholder="方便面" />
		</div>
		<span class="s">搜索</span>
    </div>
</template>
<script>

   export default{
       name:"Search"
    }
</script>
<style scoped>
/* @import url("../views/assets/font_2890021_glf4rwoy8t7/iconfont.css"); */
    .box{
    width: 100%;
    height: 4.6875rem;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
   
}
.box a{
    text-decoration: none;
    margin: 0 1.25rem 0 .625rem;
    color: black;
    display: inline-block;
    width: .625rem;
    height: 1.125rem;
}
input{
  width: 16.25rem;
  height: 1.875rem;
  background-color: #f6f6f6;
  border-radius: 1.25rem;
  outline: none;
  border: none;
}

.s{
   margin-right: .625rem;
   font-size: .875rem;
   color:#fa611e;
} 
</style>