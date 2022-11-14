<template>
  <div class="wrapper">
    <ul>
      <div v-show="downShow">加载中…………………………</div>
      <li v-for="(item, i) in showGoods" :key="i">
        <p>书号：{{ item.summary }}</p>
        <p>书名：{{ item.name }}</p>
        <img :src="'http://180.76.121.47/' + item.img" />
        <p>新价格：{{ item.newprice }}</p>
        <p>旧价格：{{ item.oldprice }}</p>
        <hr />
      </li>
      <div v-show="upShow">加载中…………………………</div>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Books",
  data: function () {
    return {
      downShow: false, //下拉时显示
      upShow: false, //上拉时显示
      books: [],
      showGoods: [],
      scroll: null,
      index: 0,
    };
  },
  created() {
    this.$http({
      url: "http://180.76.121.47/api/goods/good/",
    }).then((res) => {
      this.goods = res.data;
      this.goods = this.goods.slice(10, res.data.length);
      for (let i = 0; i < 9; i++) {
        this.showGoods.push(
          this.goods[Math.round(Math.random() * this.goods.length)]
        );
        console.log(this.showGoods);
      }
    });
    this.$nextTick(() => {
      //1、实例化 Better-scroll对象
      this.scroll = new BScroll(".wrapper", {
        scrollY: true, //开启纵向滚动。
        //click: true,
        pullDownRefresh: {
          //下拉刷新的配置
          threshold: 30, // 当下拉到超过顶部 30px 时，触发 pullingDown 事件
        },
        pullUpLoad: {
          //上拉加载的配置
          threshold: -50, // 在上拉到超过底部 50px 时，触发 pullingUp 事件
        },
      });

      //2、绑定事件 pullingDown
      this.scroll.on("pullingDown", () => {
        this.downShow = true; //显示加载中……的文字或者图片
        this.getDataUnshift(); //发送请求获取数据
      });

      //3、绑定事件 pullingUp
      this.scroll.on("pullingUp", () => {
        this.upShow = true; //显示加载中……的文字或者图片
        this.getDataPush(); //发送请求获取数据
      });
    });
  },
  watch: {
    showGoods: (n, o) => {
      console.log(n);
    },
  },
  mounted() {},
  methods: {
    getDataUnshift() {
      this.$http({
        url: "http://180.76.121.47/api/goods/good/",
      }).then((res) => {
        this.goods = res.data;
        this.goods = this.goods.slice(10, res.data.length);
        for (let i = 0; i < 9; i++) {
          this.showGoods.push(
            this.goods[Math.round(Math.random() * this.goods.length)]
          );
        }
      });
      this.downShow = false; //隐藏加载中……的文字或者图片

      this.$nextTick(() => {
        this.refresh(); //渲染后要重新计算父子元素的高度
      });
    },

    getDataPush(cb) {
      this.$http({
        url: "http://180.76.121.47/api/goods/good/",
      }).then((res) => {
        this.goods = res.data;
        this.goods = this.goods.slice(10, res.data.length);
        for (let i = 0; i < 9; i++) {
          this.showGoods.push(
            this.goods[Math.round(Math.random() * this.goods.length)]
          );
        }
      });
      this.upShow = false; //隐藏加载中……的文字或者图片
      this.$nextTick(() => {
        this.refresh(); //渲染后要重新计算父子元素的高度
      });
    },
    refresh() {
      this.scroll.finishPullDown();
      this.scroll.finishPullUp();
      this.scroll.refresh(); //重新计算元素高度
    },
  },
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 8rem;
}
img {
  width: 100%;
}
</style>
