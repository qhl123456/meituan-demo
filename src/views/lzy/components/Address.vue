<template>
  <div class="box">
    <h4 class="h">当前自提点</h4>

    <ul v-if="localAddress">
      <li>
        <p>
          <img src="../../../../public/imgs/lzy/08.jpg" />
        </p>

        <div class="content">
          <h4>绿港自选超市</h4>
          <span class="s1"> 距离最短 </span>
          <span class="s2">距您步行距离：300米</span>
          <span class="s3">√</span><br />
          <span class="s4"
            >高新区高新六路43号绿港花园高新6路43号绿港花园小区高层小区院子</span
          ><br />
          <span class="s5">支持冷冻冷藏</span>
        </div>
      </li>
    </ul>

    <ul v-else>
      <li>
        <p>
          <img v-lazy="Address.img" />
        </p>
        <div class="content">
          <h4>{{ Address.name }}</h4>
          <span class="s1"> {{ Address.s1 }} </span>
          <span class="s2">{{ Address.s2 }}</span>
          <span class="s3">√</span><br />
          <span class="s4">{{ Address.s4 }}</span
          ><br />
          <span class="s5">{{ Address.s5 }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // name: "address"
  data() {
    return {
      address: null,
      localAddress: true,
      Address: "",
    };
  },
  created() {
    if (localStorage.getItem("address")) {
      this.localAddress = false;
      this.Address = JSON.parse(localStorage.getItem("address"));
    }
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  /* height: 10.125rem; */
  background-color: white;
}
.h {
  margin-left: 0.15rem;
}
.content {
  margin-left: 0.15rem;
}
h4 {
  margin: 0;
  padding-top: 0.1rem;

  font-weight: normal;
}
ul {
  width: 3.4rem;
  /* height: 7.375rem; */
  border: 0.01rem solid #ecd23d;
  border-radius: 0.1rem;
  margin: auto;
  margin-top: 0.1rem;
}
li {
  display: flex;
  justify-content: space-between;
}
p {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}
p img {
  width: 0.7rem;
  height: 0.7rem;
  background-color: sandybrown;
  margin: 0.1rem 0.08rem 0.35rem 0.1rem;
  border-radius: 0.1rem;
}
.content {
  position: relative;
  display: inline-block;
}
span {
  font-size: 0.1rem;
}
.s1 {
  color: white;
  background-color: #fa0001;
  padding: 0.03rem 0.01rem;
  border-radius: 0.05rem;
  border: 0.01rem solid #c51015;
  margin-top: 0.05rem;
  display: inline-block;
}
.s2 {
  color: #fa0001;
  margin-left: 0.1875rem;
}
.s3 {
  display: inline-block;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #fdd001;
  text-align: center;
  line-height: 0.25rem;
  border-radius: 50%;
  position: absolute;
  top: 0.12rem;
  right: 0.15rem;
}
.s4 {
  color: #8f8d8e;
}
.s5 {
  color: #5aacd2;
  border: 0.01rem solid #e0e9e8;
  padding: 0.03rem 0.02rem 0.03rem 0.02rem;
  border-radius: 0.2rem;
  display: inline-block;
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
}
</style>
