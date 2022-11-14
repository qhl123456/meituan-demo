<template>
  <div id="box">
    <!-- <Empty ></Empty> -->
    <div class="box" v-for="item in eval" :key="item.id">
      <span><img src="../../../../public/imgs/lzy/00.png" class="tou" /></span>
      <p>
        {{ item.name }}
      </p>
      <div class="comment">
        <dl>
          <dt>
            <img v-lazy="item.img" />
          </dt>
          <dd>
            <h5>{{ item.msg }}</h5>
            <p class="p1">
              <i>￥</i>
              <em>{{ item.price }}</em
              ><br />
              <b>×1</b>
            </p>
            <input type="button" value="待支付" />
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
// import Empty from './Empty.vue';
import axios from "axios";
export default {
  // name: "Eval",
  data() {
    return {
      eval: [],
      // nopaying:true,
      // haspaying: false,
    };
  },
  // components: {
  // 	Empty
  // },
  created() {
    axios({
      url: "/eval",
      params: {},
    }).then((res) => (this.eval = res.data));
  },
};
</script>

<style scoped>
.box {
  width: 3.4rem;
  margin: auto;
}

.tou {
  width: 0.15rem;
  height: 0.15rem;
  margin-top: 0.05rem;
  margin-right: 0.1rem;
}

dl {
  display: flex;
  border-bottom: 0.01rem solid #aaaaaa;
}

dt {
  width: 0.75rem;
  height: 0.75rem;
  margin: 0.09rem 0.11rem;
  background-color: wheat;
}

img {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.05rem;
}

dd {
  margin-top: 0.09rem;
  /* display: flex; */
  position: relative;
}

h5 {
  font-weight: normal;
  font-size: 0.14rem;
  display: inline-block;
  width: 1.65rem;
}

p {
  display: inline-block;
}

.p1 {
  position: absolute;
  right: 0;
}

i {
  font-size: 0.1rem;
  font-style: normal;
}

em {
  font-size: 0.14rem;
  font-style: normal;
}

b {
  float: right;
  font-size: 0.12rem;
  font-weight: normal;
}

input {
  width: 0.7rem;
  height: 0.27rem;
  font-size: 0.14rem;
  padding: 0.02rem;
  float: right;
  margin-right: 0.1rem;
  margin-top: 0.2rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 0.05rem;
}
</style>
