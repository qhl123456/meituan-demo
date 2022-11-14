<template>
  <div class="detail">
    <!-- 返回导航 -->
    <van-sticky>
      <van-nav-bar left-arrow @click-left="onClickLeft">
        <template #right>
          <van-icon name="search" size="18" v-show="!isShowSearch" />
          <van-search
            v-model="searchValue"
            shape="round"
            placeholder="请输入搜索关键词"
            class="top-search"
            v-show="isShowSearch"
          />
        </template>
      </van-nav-bar>
    </van-sticky>
    <!-- 商品轮播图 -->
    <van-swipe @change="onChange">
      <van-swipe-item
        v-for="(item, index) in goodsBanners"
        :key="index"
        class="banner"
      >
        <img  v-lazy="item" />
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">{{ current + 1 }}/{{ currentTotal }}</div>
      </template>
    </van-swipe>
    <!-- 价格抢购 -->
    <div id="price">
      <div class="left">
        <div class="left-top">
          <span class="price"
            >￥ <b>{{ goodsInfo.newprice }}</b>
          </span>
          <span class="desc">新人价 限一份</span>
        </div>
        <div class="left-bottom">
          <p>每人限购一个，超出按￥{{ goodsInfo.newprice }}每箱计算</p>
        </div>
      </div>
      <div class="right">
        <div class="right-top">
          <p>距抢购结束仅剩</p>
        </div>
        <div class="right-bottom">
          <van-count-down :time="time">
            <template #default="timeData">
              <span class="block">{{ timeData.hours }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds }}</span>
            </template>
          </van-count-down>
        </div>
      </div>
    </div>
    <!-- 商品描述 -->
    <div id="goodsDesc">
      <div class="desc-left">
        <div class="desc-left-top">
          <span>品牌</span>
          {{ goodsInfo.summary }}
        </div>
        <div class="desc-left-bottom">
          <div class="goodsdate" v-for="(item, index) in date" :key="index">
            <div class="goodsdate-desc">{{ item.desc }} |</div>
            <div class="goodsdate-time">
              {{ item.prodtime }}
            </div>
          </div>
        </div>
      </div>
      <div class="desc-right">
        <span class="iconfont icon-fenxiang"></span>
        <p @click="share">分享</p>
      </div>
    </div>
    <!-- 分享链接 -->
    <van-share-sheet
      v-model="showShare"
      title="立即分享给好友"
      :options="options"
    />
    <!-- 平台信息 -->
    <platform />
    <!-- 用户评价 -->
    <user-comments :usercomment="usercomment"></user-comments>
    <!-- 新人限时购 -->
    <new-buy></new-buy>
    <!-- 邻居都爱买 -->
    <neigh-buy></neigh-buy>
    <!-- 推荐菜谱 -->
    <recommend></recommend>
    <!-- 规格信息 -->
    <info></info>
    <!-- 正在出售 -->
    <saleing></saleing>
    <!-- 详情图片 -->
    <detail-img :goods-img="goodsBanners"></detail-img>
    <!-- 选购指南 -->
    <buy-guide></buy-guide>
    <!-- 推荐区 -->
    <van-divider
      :style="{
        color: '#000',
        borderColor: '#cccccc',
        padding: '0 66px',
        fontWeight: 'bold',
      }"
    >
      <van-icon name="fire" color="#e13d1c" /> 爆品推荐
    </van-divider>
    <!-- 返回顶部 -->
    <totop></totop>
    <goods-list class="lastList"></goods-list>
    <!-- 底部 -->
    <detail-bottom :info="goodsInfo"></detail-bottom>
  </div>
</template>

<script>
import DetailBottom from "../common/DetailBottom.vue";
import Platform from "./components/goodsDetailComs/Platform.vue";
import UserComments from "./components/goodsDetailComs/UserComments.vue";
import NewBuy from "./components/goodsDetailComs/NewBuy";
import NeighBuy from "./components/goodsDetailComs/NeighBuy.vue";
import Recommend from "./components/goodsDetailComs/Recommend.vue";
import Info from "./components/goodsDetailComs/Info.vue";
import Saleing from "./components/goodsDetailComs/Saleing.vue";
import DetailImg from "./components/goodsDetailComs/DetailImg.vue";
import BuyGuide from "./components/goodsDetailComs/BuyGuide.vue";
import GoodsList from "../common/GoodsList.vue";
import Totop from "../common/Totop.vue";
import { mapMutations } from "vuex";
export default {
  components: {
    Platform,
    UserComments,
    DetailBottom,
    NewBuy,
    NeighBuy,
    Recommend,
    Info,
    Saleing,
    DetailImg,
    BuyGuide,
    GoodsList,
    Totop,
  },
  name: "GoodsDetail",
  //路由props传参
  props: ["goodsId"],
  data() {
    return {
      // 商品信息
      goodsInfo: {},
      // 轮播图图片
      goodsBanners: [],
      // 轮播图总数量
      currentTotal: 0,
      // 轮播图索引值
      current: 0,
      time: 30 * 60 * 60 * 1000,
      // 显示搜索框
      isShowSearch: false,
      // 用户评论区域
      usercomment: "",
      // 搜索的数据
      searchValue: "",
      date: [],
      // 显示分享的弹框
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "朋友圈", icon: "wechat-moments" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" },
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" },
          { name: "小程序码", icon: "weapp-qrcode" },
        ],
      ],
    };
  },
  created() {
    // 请求商品详情信息
    this.$http({
      url: `http://180.76.121.47/api/goods/detail/${Number(this.goodsId)}/`,
    }).then((res) => {
      this.goodsInfo = res.data.goods;
    });

    // mock里面的轮播图信息
    this.$http({
      url: "/bannerImg",
      params: {
        id: this.goodsId,
      },
    }).then((res) => {
      this.goodsBanners = res.data[0].imgs;
      this.currentTotal = this.goodsBanners.length;
      this.usercomment = res.data[0].userComments;
      this.date = res.data[0].date;
    });

    // 使用mapMutations来提交
    this.getGoodsId({
      type: "getGoodsId",
      goodsId: this.goodsId,
    });
    localStorage.setItem("DetailGoodsId", this.goodsId);
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    ...mapMutations(["getGoodsId"]),
    // 轮播图切换
    onChange(index) {
      this.current = index;
    },
    // 返回上一级路由
    onClickLeft() {
      this.$router.back();
    },
    // 滚动事件
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isShowSearch = scrollTop > 200 ? true : false;
    },
    // 分享
    share() {
      this.showShare = true;
    },
  },
};
</script>
<style scoped>
.desc-right {
  width: 13%;
  height: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  border-left: .01rem solid #cccccc;
}
.desc-right .iconfont {
  width: 100%;
  font-size: 0.2rem;
  height: 49%;
  color: #fb462b;
}
.desc-right p {
  width: 100%;
  font-size: 0.14rem;
  height: 49%;
}
.top-search {
  height: 100%;
  width: 80%;
}
.van-swipe-item img {
  width: 100%;
}
.detail {
  background-color: #f8f8f8;
  margin-bottom: 0.5rem;
}
.custom-indicator {
  position: absolute;
  right: 0;
  bottom: 0.05rem;
  padding: 0.02rem 0.08rem;
  font-size: 0.12rem;
  background: rgba(0, 0, 0, 0.4);
  border-top-left-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
}
#price {
  width: 100%;
  height: 0.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #ed2a24, #fefaef);
  padding-left: 0.2rem;
  box-sizing: border-box;
  background-color: #fff;
}
.left {
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
}
.left-top {
  width: 70%;
  height: 49%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.left-top .price {
  color: #fff;
  font-size: 0.12rem;
}
.left-top .price b {
  color: #fff;
  font-size: 0.22rem;
  font-weight: normal;
}
.left-top .desc {
  color: #ed2a24;
  background-color: #fff;
  border-radius: 0.2rem;
  font-size: 0.1rem;
  width: 0.7rem;
  height: 0.15rem;
  line-height: 0.16rem;
  text-align: center;
}
.left-bottom {
  font-size: 0.12rem;
  height: 49%;
  color: rgb(236, 235, 235);
}
.right {
  width: 39%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 0.11rem;
  align-items: center;
  color: #ee0a24;
}
.right .right-top,
.right .right-bottom {
  height: 49%;
}
.colon {
  display: inline-block;
  margin: 0 0.04rem;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 0.22rem;
  color: #fff;
  font-size: 0.12rem;
  text-align: center;
  background-color: #ee0a24;
}
#goodsDesc {
  width: 100%;
  height: 0.9rem;
  padding: 0.1rem;
  box-sizing: border-box;
  background-color: #fff;
  align-items: center;
}
#goodsDesc,
.desc-left,
.desc-left-bottom,
.goodsdate {
  display: flex;
  justify-content: space-between;
}
.desc-left {
  flex-direction: column;
  height: 100%;
  width: 70%;
}
.desc-left-top {
  width: 100%;
  height: 70%;
  font-weight: bold;
  font-size: 0.14rem;
}
.desc-left-top span {
  width: 0.26rem;
  height: 0.16rem;
  background-color: #6f12d3;
  color: #fff;
  font-size: 0.12rem;
  display: inline-block;
  text-align: center;
  line-height: 0.16rem;
  border-radius: 0.04rem;
}
.desc-left-bottom .goodsdate {
  height: 100%;
  border: 1px solid #969799e3;
  border-radius: 0.03rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.1rem;
  color: #000;
  padding: 0.03rem;
  box-sizing: border-box;
}
.goodsdate-desc {
  color: #f6895e;
  margin-right: 0.1rem;
}
.goodsdate-time {
  color: #858585;
}
.lastList {
  margin-bottom: 0.5rem;
}
</style>
