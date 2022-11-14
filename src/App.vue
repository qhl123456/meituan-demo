<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  components: {},
};
</script>
<style>
@import url(./assets/css/base.css);
.icon {
  width: 70%;
  height: 70%;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.nav .van-grid {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: nowrap;
  margin-left: 0.7rem;
}
.nav .van-grid-item__content {
  background-color: white;
}
</style>
