<template>
  <div id="app">
    <p>做饭灵感</p>
    <van-sticky>
      <van-tabs @click="changeValue">
        <van-tab v-for="(item, index) in kv" :key="index" :title="item">
        </van-tab>
      </van-tabs>
    </van-sticky>
    <div class="inspira">
      <div
        class="inspria-div"
        @click="fun(eat.repice_id)"
        v-for="(eat, index) in eats"
        :key="index"
      >
        <img v-lazy="'http://180.76.121.47' + eat.img" alt="" />
        <div class="inspria-div-p">{{ eat.name }}</div>
        <div class="inspria-div-span">
          <span>{{ eat.level }}</span> |
          <span>{{ eat.do_time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import axios from "axios";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  name: "Inspiration",
  data() {
    return {
      active: 0,
      eats: [],
      kv: [],
      kt:[],
    };
  },
  created() {
    axios({
      url: "http://180.76.121.47/api/food/repice_type/",
      method: "get",
    })
      .then((res) => {
        this.kv = res.data.map((item) => item.repice_type_name);
        this.kt = res.data.map((item) => item.repice_type_id);
      })
      .catch((err) => console.log(err + "出错了"));
      axios({
        url:"http://180.76.121.47/api/food/repicetype/1/",
        method:'get'
      }).then((res)=>{
        this.eats=res.data;
      })
  },
  methods: {
    fun(id) {
      this.$router.push("/Details/" + id);
    },
    changeValue(name, title) {
      // console.log(name , title);
      axios({
        url: `http://180.76.121.47/api/food/repicetype/${name+1}/`,

      }).then((res) => {
        this.eats = res.data;
      });
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  margin: 0 auto;
}
#app p {
  font-size: 0.18rem;
  font-weight: bold;
}
.item {
  display: flex;
  overflow: auto;
  margin-top: 0.1rem;
}
.item-li {
  height: 0.2rem;
  font-size: 0.12rem;
  line-height: 0.2rem;
  margin-right: 0.1rem;
}
.inspira {
  display: flex;
  flex-wrap: wrap;
}
.inspria-div {
  width: 1.62rem;
  height: 1.8rem;
  margin-right: 0.04rem;
  margin-top: 0.04rem;
}
.inspria-div img {
  width: 1.62rem;
  height: 1.3rem;
  background: chocolate;
}
.inspria-div-p {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.inspria-div-span {
  font-size: 0.1rem;
  line-height: 0.2rem;
  color: grey;
}
.van-tabs__nav {
  position: sticky;
  top: 0;
}
</style>