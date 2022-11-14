<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ffc12c"
      inactive-color="#000"
      route
      fixed
    >
      <van-tabbar-item
        v-for="item in tabBarInfo"
        :key="item.id"
        :to="'/' + item.name"
        :name="item.name"
      >
        <van-icon
          class="iconfont"
          class-prefix="icon"
          slot="icon"
          slot-scope="props"
          :name="props.active ? item.active_icon : item.inactive_icon"
        ></van-icon>
        <span>{{ item.title }}</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      active: "index",
      tabBarInfo: [
        {
          id: "001",
          active_icon: "shouye-xuanzhong",
          inactive_icon: "shouye",
          title: "首页",
          name: "index",
        },
        {
          id: "002",
          active_icon: "fenlei1",
          inactive_icon: "fenlei",
          title: "分类",
          name: "classification",
        },
        {
          id: "003",
          active_icon: "mifan",
          inactive_icon: "caipu",
          title: "菜谱",
          name: "recipe",
        },
        {
          id: "004",
          active_icon: "gouwucheman",
          inactive_icon: "gouwuchekong",
          title: "购物车",
          name: "cart",
        },
        {
          id: "005",
          active_icon: "wode_xuanzhong",
          inactive_icon: "wode",
          title: "我的",
          name: "mine",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.iconfont {
  font-size: 0.22rem;
}
</style>
