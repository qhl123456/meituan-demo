<template>
  <div id="app">
    <p>问大家</p>
    <div class="question-answer">
      <div class="question-app">
        <span class="question-app-span">问</span>
        <span class="question-app-span1">省钱卡真的省钱吗？</span>

        <div class="answer-app">
          <span class="answer-app-span">答</span>
          <span class="answer-app-span1"></span> 是的
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  }
};
</script>

<style scoped>
#app {
  width: 3.08rem;
  margin: 0 auto;
  overflow: hidden;
}
#app p {
  font-size: 0.18rem;
  margin-top: 0.26rem;
}
.question-answer {
  width: 3.08rem;
}
.question-answer .question-app {
  width: 100%;
  margin-top: 0.16rem;
  font-size: 0.12rem;
}
.question-app .question-app-span {
  width: 0.16rem;
  height: 0.16rem;
  background: yellow;
  text-align: center;
  line-height: 0.16rem;
  font-size: 0.12rem;
  margin-right: 0.1rem;
}
.question-app .question-app-span1 {
  font-size: 0.12rem;
}
.question-answer .answer-app {
  width: 100%;
  margin-top: 0.1rem;
}
.answer-app .answer-app-span {
  width: 0.16rem;
  height: 0.16rem;
  background: red;
  text-align: center;
  line-height: 0.16rem;
  font-size: 0.12rem;
  margin-right: 0.1rem;
}
.answer-app .answer-app-span1 {
  font-size: 0.12rem;
}
</style>