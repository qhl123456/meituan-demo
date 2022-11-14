<template>
  <div id="app">
    <div class="eat">
      <p>吃什么</p>
      <div class="icf">
        <span class="iconfont icon-fangdajing" @click="fun"></span>
        <span class="iconfont icon-icon04" @click="fun2"></span>
      </div>
    </div>
    <van-tabs v-model="active">
      <van-tab title="晚餐">
        <ul class="menu">
          <li
            v-for="(eat, index) in eats3"
            :key="index"
            @click="fun1(eat.repice_id)"
          >
            <img  v-lazy="'http://180.76.121.47' + eat.img" alt="" />
            <p>{{ eat.name }}</p>
            <p>
              <span>{{ eat.level }}</span> |
              <span>{{ eat.do_time }}</span>
            </p>
          </li>
        </ul>
      </van-tab>
      <van-tab title="夜宵">
        <ul class="menu">
          <li v-for="(arr, i) in eats4" :key="i" @click="fun1(arr.repice_id)">
            <img  v-lazy="'http://180.76.121.47' + arr.img" alt="" />
            <p>{{ arr.name }}</p>
            <p>
              <span>{{ arr.level }}</span> |
              <span>{{ arr.do_time }}</span>
            </p>
          </li>
        </ul></van-tab
      >
      <van-tab title="早餐">
        <ul class="menu">
          <li v-for="(arr, i) in eats0" :key="i" @click="fun1(arr.repice_id)">
            <img  v-lazy="'http://180.76.121.47' + arr.img" alt="" />
            <p>{{ arr.name }}</p>
            <p>
              <span>{{ arr.level }}</span> |
              <span>{{ arr.do_time }}</span>
            </p>
          </li>
        </ul></van-tab
      >
      <van-tab title="午餐">
        <ul class="menu">
          <li v-for="(arr, i) in eats1" :key="i" @click="fun1(arr.repice_id)">
            <img  v-lazy="'http://180.76.121.47' + arr.img" alt="" />
            <p>{{ arr.name }}</p>
            <p>
              <span>{{ arr.level }}</span> |
              <span>{{ arr.do_time }}</span>
            </p>
          </li>
        </ul></van-tab
      >
      <van-tab title="下午茶">
        <ul class="menu">
          <li v-for="(arr, i) in eats2" :key="i" @click="fun1(arr.repice_id)">
            <img  v-lazy="'http://180.76.121.47' + arr.img" alt="" />
            <p>{{ arr.name }}</p>
            <p>
              <span>{{ arr.level }}</span> |
              <span>{{ arr.do_time }}</span>
            </p>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";
import axios from "axios";
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      eats0: [],
      eats1: [],
      eats2: [],
      eats3: [],
      eats4: [],
    };
  },
  created() {
    function gettoeat3() {
      return axios.get("http://180.76.121.47/api/food/foodtime/3/");
    }

    function gettoeat4() {
      return axios.get("http://180.76.121.47/api/food/foodtime/4/");
    }

    function gettoeat0() {
      return axios.get("http://180.76.121.47/api/food/foodtime/0/");
    }

    function gettoeat1() {
      return axios.get("http://180.76.121.47/api/food/foodtime/1/");
    }

    function gettoeat2() {
      return axios.get("http://180.76.121.47/api/food/foodtime/2/");
    }

    axios
      .all([gettoeat3(), gettoeat4(), gettoeat0(), gettoeat1(), gettoeat2()])
      .then(
        axios.spread((eats3, eats4, eats0, eats1, eats2) => {
          this.eats3 = eats3.data;
          this.eats4 = eats4.data;
          this.eats0 = eats0.data;
          this.eats1 = eats1.data;
          this.eats2 = eats2.data;
        })
      );
  },
  methods: {
    fun() {
      this.$router.push("/searchList");
    },
    fun1(id) {
      this.$router.push("/Details/" + id);
    },
    fun2(){
      this.$router.push("/Collection");
    }
    
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  height: 2.8rem;
  margin: 0 auto;
}
.eat {
  width: 3.34rem;
  height: 0.2rem;
  margin-top: 0.6rem;
  display: flex;
  justify-content: space-between;
}
.eat p {
  font-size: 0.18rem;
  line-height: 0.2rem;
  font-weight: bold;
}
.eat .icf {
  width: 0.5rem;
  height: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.eat .icf .iconfont {
  font-size: 0.18rem;
  line-height: 0.2rem;
}

.menu {
  height: 1.6rem;
  overflow: auto;
  display: flex;
}
.menu::-webkit-scrollbar {
  display: none;
}
.menu li {
  width: 1.52rem;
  height: 1.6rem;
  border-radius: 0.1rem;
  margin-right: 0.05rem;
}
.menu li img {
  width: 1.52rem;
  height: 1.04rem;
}
.menu li p,
.menu li span {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
</style>