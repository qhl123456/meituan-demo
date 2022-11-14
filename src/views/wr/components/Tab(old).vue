<template>
  <div class="box">
    <van-tabs @click="onClick" class="tabs" title-active-color="red">
      <van-tab
        v-for="(item, index) in content.asideTab"
        :title="item.asidetitles"
        :key="index"
        style="min-width: 0.6rem"
      >
        <ul>
          <li v-for="dec in item.goodsDec" :key="dec.goodId">
            <div class="img">
              <img v-lazy="dec.img" alt="" />
            </div>

            <div class="text">
              <h3>{{ dec.name }}</h3>
              <p>{{ dec.person }}</p>
              <h5>{{ dec.num }}</h5>
              <h2>￥{{ dec.price }}</h2>
              <input
                type="button"
                value="加入购物车"
                @click="addCart(dec.goodId)"
                disabled
              />
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: ["tabdata"],
  data() {
    return {
      content: [],
      index: 0,
    };
  },
  created() {
    this.$bus.$on("chuan", (idx) => {
      this.content = this.tabdata[idx];
    });
  },
  watch: {
    tabdata: function (newValue, oldValue) {
      this.content = newValue[0];
    },
  },
  methods: {
    onClick(idx) {
      this.index = idx;
    },
    addCart(index) {
      console.log("index:", index);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.sidebar {
  float: left;
}
.tabs {
  float: left;
}
.van-tab__text {
  width: 1rem;
}
ul {
  width: 2.8rem;
  margin-top: -0.05rem;
}
ul li {
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 0.95rem;
  height: 0.95rem;
  background: coral;
}
.img img {
  width: 100%;
  height: 100%;
}
.text {
  width: 1.8rem;
  height: 1.2rem;
  border-top: 0.01rem solid #7c7c7c;
  position: relative;
}
.text h3 {
  font-size: 0.15rem;
  line-height: 0.24rem;
  margin-top: 0.03rem;
}
.text p {
  font-size: 0.12rem;
  color: #7c7c7c;
}
.text h5 {
  font-size: 0.13rem;
  color: #7c7c7c;
  margin-top: 0.05rem;
}
.text h2 {
  margin-top: 0.07rem;
  font-size: 0.18rem;
  color: red;
}
.van-tabs__nav--line {
  box-sizing: content-box;
  height: 100%;
  padding-bottom: 0.1rem;
}
.text input {
  position: absolute;
  width: 0.75rem;
  height: 0.24rem;
  background: #ffd101;
  font-size: 0.1rem;
  line-height: 0.24rem;
  margin: auto;
  border: none;
  border-radius: 0.1rem;
  bottom: 0.1rem;
  right: 0.1rem;
}
</style>
