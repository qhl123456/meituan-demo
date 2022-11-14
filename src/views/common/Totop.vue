<template>
  <div id="backTop" @click="toTop" v-show="gotop">
    <p class="iconfont icon-shangjiantou"></p>
    <p class="toTop">回顶部</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      gotop: false,
    };
  },
  mounted() {
    // 此处true需要加上，不加滚动事件可能绑定不成功
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let scrolltop =
        document.documentElement.scrollTop || document.body.scrollTop;
      scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop =
          document.documentElement.scrollTop =
          top -=
            50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>

<style scoped>
#backTop {
  width: 0.5rem;
  height: 0.5rem;
  background: white;
  position: fixed;
  left: 0.04rem;
  bottom: 1.5rem;
  border-radius: 50%;
  border: 0.01rem solid gray;
  text-align: center;
  z-index: 9999;
}
.iconfont {
  font-size: 0.16rem;
  margin-top: 0.1rem;
}
.toTop {
  font-size: 0.1rem;
}
</style>
