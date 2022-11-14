<template>
  <div>
    <van-sticky :offset-top="54">
      <van-tabs v-model="active" sticky @click="changeValue">
        <van-tab
          class="iconList"
          v-for="(item, index) in navList"
          :key="index"
          :title="item.name"
        >
        </van-tab>
      </van-tabs>
    </van-sticky>
    <icon-list
      num="4"
      direction="vertical"
      class="van-grid-wrap"
      :border="showBorder"
    >
      <van-grid-item v-for="item in iconlist" :key="item.id" class="iconList">
        <div class="iconlistItem">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          <span>{{ item.title }}</span>
        </div>
      </van-grid-item>
    </icon-list>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import IconList from "../../../common/IconList";
export default {
  name: "Nav",
  props: ["navList"],
  data() {
    return {
      showBorder: false,
      active: 0,
      // icon图标列表
      iconlist: [
        {
          id: "001",
          icon: "#icon-xinshoulibao",
          title: "邀请赚钱",
          background: "#fbe0d6",
        },
        {
          id: "002",
          icon: "#icon-jinritemai",
          title: "1.99元特卖",
          background: "#f5dfc8",
        },
        {
          id: "003",
          icon: "#icon-xiaoji",
          title: "天天赚鸡蛋",
          background: "#f9f7c6",
        },
        {
          id: "004",
          icon: "#icon-tiantianlingqian",
          title: "签到领钱",
          background: "#f8e6d5",
        },
        {
          id: "005",
          icon: "#icon-zhuan10yuan",
          title: "百货10元店",
          background: "#e7effe",
        },
        {
          id: "006",
          icon: "#icon-hongbao",
          title: "赚钱地摊",
          background: "#ebfef7",
        },
      ],
      goods: [],
    };
  },
  components: {
    IconList,
  },
  computed: {
    ...mapState(["goodsList"]),
  },
  methods: {
    ...mapMutations(["saveCurrentGoods"]),
    changeValue(name, title) {
      this.goods = this.goodsList.filter((item) => item.cate.name == title);
      this.saveCurrentGoods({
        data: this.goods,
      });
    },
  },
};
</script>

<style scoped>
.iconlistItem {
  display: flex;
  flex-direction: column;
  font-size: 0.1rem;
  align-items: center;
  width: 0.55rem;
  height: 0.77rem;
  justify-content: space-between;
}
.iconlistItem .icon {
  width: 40%;
  height: 50%;
  color: #000;
}
.iconlistItem span {
  width: 100%;
  height: 45%;
  text-align: center;
}
/* .van-grid{
  height: 1.2rem;
  display: flex;
  flex-wrap: nowrap;
} */
.van-grid-wrap {
  margin: 0.1rem auto;
  border-radius: 0.05rem;
  justify-content: center;
  overflow: auto;
}
</style>
