<template>
  <div class="box">
    <van-sticky>
      <van-search
        v-model="searchValue"
        class="search"
        shape="round"
        :placeholder="placeholderValue"
        @focus="searchFocus"
        @input="searchGoods"
        @search="confirmSearch"
        @blur="searchBlur"
      />
      <van-button round type="info" class="searchBtn" @click="confirmSearch"
        >搜索</van-button
      >
    </van-sticky>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchValue: "",
      searchList: ["土豆🥔", "牛奶🥛", "鸡蛋🥚", "方便面"],
      i: 0,
      placeholderValue: "土豆🥔",
      // 搜索框自动变化事件
      showInputPlc: null,
    };
  },
  methods: {
    // 清除搜索框
    searchFocus() {
      clearInterval(this.showInputPlc);
      this.$router.push("/searchList");
    },
    // 搜索框离开触发自动变化事件
    searchBlur() {
      this.showInputPlc = setInterval(() => {
        this.i++;
        if (this.i == this.searchList.length) {
          this.i = 0;
        }
        this.placeholderValue = this.searchList[this.i];
      }, 2000);
    },
    // 搜索框输入事件，此处发请求，并跳转到搜索列表组件
    searchGoods() {
    },
    // 确认搜索事件，跳转到搜索页组件，携带搜索参数，并且发起请求
    confirmSearch() {
      this.$rouer.push("/searchlist");
    },
  },
  mounted() {
    this.showInputPlc = setInterval(() => {
      this.i++;
      if (this.i == this.searchList.length) {
        this.i = 0;
      }
      this.placeholderValue = this.searchList[this.i];
    }, 2000);
  },
};
</script>

<style scoped>
.box {
  position: relative;
}
.search {
  background-color: white;
}
.searchBtn {
  position: absolute;
  right: 0.3rem;
  top: 50%;
  transform: translateY(-50%);
  height: 50%;
}
</style>
