<template>
  <div>
    <div class="header">
      <van-icon name="arrow-left" class="back" @click="back" />
      <van-search
        v-model="searchValue"
        class="int"
        shape="round"
        placeholder="🥔土豆"
        @input="searchGoods"
        @search="confirmSearch"
        clearable
      />
      <span class="search" @click="confirmSearch">搜索</span>
    </div>
    <div class="body" v-show="searchValue.length">
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <van-icon name="search" class="searchicon" />
          <span class="goods">{{ item }}</span>
        </li>
      </ul>
    </div>
    <van-empty
      image="search"
      description="亲，请输入您要搜索的内容"
      v-show="!searchValue.length"
    />
  </div>
</template>

<script>
let timer;
import axios from "axios";
export default {
  name: "SearchList",
  data() {
    return {
      searchValue: "",
      list: [],
    };
  },
  methods: {
    // 搜索框输入事件，此处发请求，并跳转到搜索列表组件
    searchGoods() {
      let that = this;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        // console.log("输入");
        timer = undefined;
        axios({
          url: "/search",
          params: {
            msg: that.searchValue,
          },
        }).then((res) => (that.list = res.data[0].message));
      }, 2000);
    },
    // 确认搜索事件，跳转到搜索页组件，并且发起请求
    confirmSearch() {
      this.$router.push("/searchgoods");
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 0.1rem;
  align-items: center;
  box-sizing: border-box;
}
.int {
  background-color: #fff;
  width: 65%;
}

.back {
  width: 15%;
  font-size: 0.2rem;
  text-align: center;
}
.search {
  color: #ff9376;
  width: 15%;
  text-align: center;
}
.body ul li {
  border-bottom: .01rem solid #ccc;
  width: 100%;
  height: 0.45rem;
  font-size: 0.18rem;
  color: #ff9376;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.searchicon {
  width: 20%;
  text-align: center;
}
.goods {
  width: 80%;
  text-align: left;
}
</style>
