<template>
  <van-tabbar v-model="active" active-color="#ffc12c" inactive-color="#000">
    <van-tabbar-item v-for="item in tabBarInfo" :key="item.id">
      <van-icon
        class="iconfont"
        class-prefix="icon"
        slot="icon"
        :name="item.icon"
      ></van-icon>
      <span>{{ item.title }}</span></van-tabbar-item
    >
  </van-tabbar>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      active: 0,
      tabBarInfo: [
        {
          id: "001",
          icon: "shouye",
          title: "首页",
          name: "index",
        },
        {
          id: "002",
          icon: "fenlei",
          title: "分类",
          name: "type",
        },
        {
          id: "003",
          icon: "-mifan",
          title: "菜谱",
          name: "recipe",
        },
        {
          id: "004",
          icon: "gouwuche",
          title: "购物车",
          name: "cart",
        },
        {
          id: "005",
          icon: "wode",
          title: "我的",
          name: "wode",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
@import url(../assets/Classfy_iconfont/iconfont.css);
.iconfont {
  font-size: 0.22rem;
}
</style>
