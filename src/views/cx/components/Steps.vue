<template>
  <div id="app">
      <p class="steps">烹饪步骤</p>
      <div class="steps-div">
      <!-- <img :src="steps.img" alt=""> -->
      <p class="steps-name">{{listingInfo}}</p>
     </div> 
  </div>
</template>

<script>
export default {
    props:["listing"],
    data(){
        return{
            listingInfo:""
        }
    },
    watch:{
        listing(newVal,oldVal){
            this.listingInfo=newVal[0].repice.content;
            // console.log(this.listingInfo)
        }
    }
}
</script>

<style scoped>
#app{
    width: 3.34rem;
    margin: 0 auto;
}
.steps{
    font-size: .2rem;
    font-weight: bold;
}
.steps-div{
    margin-top: .2rem;
}
img{
    width: 3.32rem;
    height: 2.64rem;
    background: chartreuse;
    margin: .18rem auto; 
    border-radius: .1rem;
}
.steps-name{
    font-size: .12rem;
    line-height: .2rem;
}
</style>