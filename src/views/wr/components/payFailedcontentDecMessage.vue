<template>
  <div class="box">
    <div class="message">
      <div>
        <h5>订单信息</h5>
        <hr />
        <h4>
          <span class="gray">下单编号</span>6662295392676
          <van-tag plain class="copy">复制</van-tag>
        </h4>
        <h4><span class="gray">下单时间</span>{{ time }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
let date = new Date();
export default {
  name: "payFailedcontentDecMessage",
  data() {
    return {
      time:
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes(),
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.message {
  width: 3.6rem;
  height: 1.3rem;
  background-color: #f5f6f8;
  overflow: hidden;
  /* margin-top: .1rem; */
}
.message div {
  width: 100%;
  height: 1.2rem;
  background-color: white;
  /* margin-top: .1rem; */
  position: relative;
  overflow: hidden;
}
.message div h5 {
  height: 0.48rem;
  font-size: 0.14rem;
  font-weight: bolder;
  text-indent: 0.18rem;
  line-height: 0.48rem;
}
hr {
  border: none;
  height: 0.02rem;
  width: 100%;
  background-color: #f4f4f4;
}
.message div h4 {
  height: 0.3rem;
  font-size: 0.11rem;
  text-indent: 0.18rem;
  line-height: 0.3rem;
}
.gray {
  color: #b9b9b9;
  margin-right: 0.2rem;
}
.copy {
  display: inline-block;
  height: 0.17rem;
  border: 0.01rem solid #b9b9b9;
  text-align: center;
  line-height: 0.17rem;
  text-indent: 0;
  border-radius: 0.1rem;
  margin-left: 0.07rem;
  width: 0.42rem;
  color: #000;
}
</style>
