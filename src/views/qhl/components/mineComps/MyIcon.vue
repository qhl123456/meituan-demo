<template>
  <div>
    <!-- 列表1 -->
    <icon-list
      :num="iconlistOne.length"
      direction="vertical"
      class="van-grid"
      :border="showBorder"
      to="myorder"
    >
      <van-grid-item
        v-for="item in iconlistOne"
        :key="item.id"
        class="iconList"
        to="myorder"
      >
        <div class="iconlistItem" to="myorder">
          <svg class="icon" aria-hidden="true" to="myorder">
            <use :xlink:href="item.icon"></use>
          </svg>
          <span to="myorder">{{ item.title }}</span>
        </div>
      </van-grid-item>
    </icon-list>
    <!-- 列表2 -->
    <icon-list :num="iconlistTwo.length" direction="vertical" class="van-grid">
      <van-grid-item
        v-for="item in iconlistTwo"
        :key="item.id"
        class="iconList"
      >
        <div class="iconlistItem" :to="item.path">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          <span>{{ item.title }}</span>
        </div>
      </van-grid-item>
    </icon-list>
    <!-- 列表3 -->
    <icon-list
      :num="iconlistThree.length"
      direction="vertical"
      class="van-grid"
    >
      <van-grid-item
        v-for="item in iconlistThree"
        :key="item.id"
        class="iconList"
      >
        <div class="iconlistItem" @click="goOtherPage(item.path)">
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
import IconList from "../../../common/IconList.vue";

export default {
  components: { IconList },
  name: "MyIcon",
  data() {
    return {
      showBorder: false,

      // icon图标列表
      iconlistOne: [
        {
          id: "001",
          icon: "#icon-daizhifu",
          title: "待支付",
        },
        {
          id: "002",
          icon: "#icon-daiquhuo",
          title: "待取货",
        },
        {
          id: "003",
          icon: "#icon-31daipingjia",
          title: "待评价",
        },
        {
          id: "004",
          icon: "#icon-tuikuantuihuo",
          title: "退款/售后",
        },
        {
          id: "005",
          icon: "#icon-quanbudingdan",
          title: "全部订单",
        },
      ],
      iconlistTwo: [
        {
          id: "001",
          icon: "#icon-xinshoulibao",
          title: "邀请赚钱",
        },
        {
          id: "002",
          icon: "#icon-xiaoji",
          title: "天天赚鸡蛋",
        },
        {
          id: "003",
          icon: "#icon-meituan_tiantianlingshuiguo",
          title: "天天领水果",
        },
        {
          id: "004",
          icon: "#icon-tiantianlingqian",
          title: "天天领钱",
        },
        {
          id: "005",
          icon: "#icon-zoulu",
          title: "走路赚钱",
        },
      ],
      iconlistThree: [
        {
          id: "001",
          icon: "#icon-01_zitidian",
          title: "自提点管理",
          path: "404",
          path: "selfpick",
        },
        {
          id: "002",
          icon: "#icon-shoucangcaidan",
          title: "菜谱收藏",
          path: "collection",
        },
        {
          id: "003",
          icon: "#icon-yijianfankui",
          title: "意见反馈",
          path: "/Userfeedback",
        },
        {
          id: "004",
          icon: "#icon-wenjuantiaocha",
          title: "问卷调查",
          badge: "新",
          path: "404",
        },
        {
          id: "005",
          icon: "#icon-juxing-copy",
          title: "成为团长",
          badge: "赚钱",
          path: "404",
        },
        {
          id: "006",
          icon: "#icon---zhaopinhezuofeiyongbaozhangshenqing",
          title: "招聘合作",
          path: "404",
        },
        {
          id: "007",
          icon: "#icon-tongyong-lianxikefutubiao",
          title: "联系客服",
          path: "404",
        },
        {
          id: "008",
          icon: "#icon-jiangbei",
          title: "赛事活动",
          path: "404",
        },
        { id: "009" },
        { id: "010" },
      ],
    };
  },
  methods: {
    goOtherPage(path) {
      this.$router.push(path);
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
.van-grid {
  margin: 0.1rem auto;
  border-radius: 0.05rem;
  /* background-color: #cccccc; */
  justify-content: center;
}
</style>
