<template>
  <div id="app">
    <div class="practice">
      <span class="iconfont icon-changyongicon-" @click="fun"></span>
      <span class="practice-name">{{ listingInfo.name }}</span>
    </div>
    <img v-lazy="'http://180.76.121.47/' + listingInfo.img" alt="" />
    <div class="practice-menu">
      <p class="practice-name1">{{ listingInfo.name }}</p>
      <div class="practice-name1-challenge">
        <span class="iconfont icon-chushimao"></span>难度:
        <span>{{ listingInfo.name }}</span>
        <span class="iconfont icon-shoucang"></span>时常:
        <span>{{ listingInfo.do_time }}</span>
      </div>
      <div class="practice-name1-tale">厨师物语：{{ listingInfo.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listing"],
  methods: {
    fun() {
      this.$router.back();
    },
  },
  data() {
    return {
      listingInfo: [],
    };
  },
  watch: {
    listing(newVal, oldVal) {
      this.listingInfo = newVal[0].repice;
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.6rem;
}
.practice {
  width: 3.6rem;
  height: 0.48rem;
  line-height: 0.48rem;
  font-weight: bold;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
}
.icon-changyongicon- {
  font-size: 0.18rem;
  float: left;
}
.practice-name {
  margin-left: 0.2rem;
}
img {
  margin-top: 0.48rem;
  width: 3.6rem;
  height: 2.7rem;
}
.practice-menu {
  width: 3.34rem;
  margin: 0.24rem auto;
}
.practice-name1 {
  font-size: 0.2rem;
  font-weight: bold;
}
.practice-name1-challenge {
  margin-top: 0.1rem;
  font-size: 0.12rem;
}
.practice-name1-tale {
  width: 3.34rem;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
</style>
