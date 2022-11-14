<template>
  <div id="box">
    <div class="box">
      <span class="iconfont icon-changyongicon-" @click="back"></span>
      <h3>消息中心</h3>
    </div>
    <div class="content">
      <dl v-for="comments in comment" :key="comments.id">
        <dt>
          <img v-lazy="comments.img" />
        </dt>
        <dd>
          <p>
            <b>{{ comments.name }}</b>
            <span class="s1">官方</span>
            <em>{{ comments.day }}</em>
            <i>{{ comments.msg }}</i>
            <van-badge :content="20" />
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Badge } from "vant";
Vue.use(Badge);

import axios from "axios";
export default {
  name: "Comment1",
  components: {},
  data() {
    return {
      comment: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
  created() {
    axios({
      url: "/comment",
      params: {},
    }).then((res) => (this.comment = res.data));
  },
};
</script>

<style scoped>
#box {
  width: 100%;
  background-color: #b2b2b2;
}
.box {
  width: 100%;
  height: 0.55rem;
  background-color: white;
  line-height: 0.55rem;
  margin-bottom: 0.1rem;
  position: fixed;
  top: 0;
}
.iconfont {
  font-size: 0.22rem;
  font-weight: bold;
  margin-left: 0.15rem;
}
h3 {
  display: inline-block;
  /* font-size: 0.15rem; */
}
.content {
  width: 100%;
  background-color: white;
  margin-top: 0.75rem;
  /* */
}
dl {
  width: 100%;
  height: 0.7rem;
  display: flex;
}
dt {
  margin-top: 0.1rem;
  margin-left: 0.1rem;
}
dd {
  margin-left: 0.1rem;
}
b {
  display: inline-block;
  margin-top: 0.08rem;
}
.s1 {
  display: inline-block;
  /* width: 0.3rem;
		height: 0.18rem; */
  border: 0.01rem solid #d1b1c0;
  color: #c22322;
  padding: 0.01rem;
  font-size: 0.12rem;
  margin-left: 0.05rem;
  margin-right: 1.49rem;
}
em {
  font-size: 0.12rem;
  margin-top: 0.08rem;
  color: #b2b2b2;
  font-style: normal;
}
i {
  display: inline-block;
  width: 2.6rem;
  font-size: 0.12rem;
  margin-top: 0.08rem;
  color: #b2b2b2;
  font-style: normal;
  /* margin-right: 1.65rem; */
}
</style>
