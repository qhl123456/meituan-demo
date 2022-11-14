<template>
  <div class="wrapper">
    <div class="box">
      <!-- <van-loading type="spinner" color="#1989fa" /> -->
      <van-tabs @click="onClick" class="tabs" title-active-color="red">
        <van-tab
          v-for="(item, index) in content.asideTab"
          :title="item.asidetitles"
          :key="index"
          style="min-width: 0.6rem"
        >
          <ul>
            <li v-for="dec in item.goodsDec" :key="dec.goodId">
              <div class="img">
                <img  v-lazy="dec.img" alt="" />
              </div>

              <div class="text">
                <h3>{{ dec.name }}</h3>
                <p>{{ dec.person }}</p>
                <h5>{{ dec.num }}</h5>
                <h2>￥{{ dec.price }}</h2>
                <!-- <input
                  type="button"
                  value="加入购物车"
                  @click="addCart(dec.goodId)"
                /> -->
              </div>
            </li>
            <van-sticky>
              <van-notice-bar
                left-icon="volume-o"
                text="超多便宜好物袭来，心动不如行动！！！快来加购吧~。"
                class="notice"
              />
            </van-sticky>
          </ul>

          <ul v-for="(item, index) in showGoods" :key="index">
            <li v-for="(good, i) in showGoods" :key="i">
              <div class="img">
                <img
                  :src="'http://180.76.121.47/' + good.img"
                  alt=""
                  class="newimg"
                />
              </div>

              <div class="text">
                <h3>{{ good.summary }}</h3>
                <p>{{ good.name }}</p>
                <h2
                  style="
                    text-decoration: line-through;
                    font-size: 0.14rem;
                    color: gray;
                  "
                >
                  ￥{{ good.oldprice }}
                </h2>
                <h2 style="font-size: 0.14rem">￥{{ good.newprice }}</h2>
                <input
                  type="button"
                  value="加入购物车"
                  @click="addCart(good.goods_id)"
                />
              </div>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import BScroll from "better-scroll";
export default {
  name: "Tab",
  props: ["tabdata"],
  data() {
    return {
      content: [],
      index: 0,
      scroll: null,
      goods: [],
      showGoods: [],
    };
  },
  created() {
    this.$bus.$on("chuan", (idx) => {
      this.content = this.tabdata[idx];
    });
  },
  mounted() {},
  watch: {
    tabdata(newValue, oldValue) {
      this.content = newValue[0];
      if (newValue) {
        this.$nextTick(() => {
          this.scroll = new BScroll(".wrapper", {
            scrollY: true, //开启纵向滚动。
            //click: true,
            pullDownRefresh: {
              //下拉刷新的配置
              threshold: 200, // 当下拉到超过顶部 30px 时，触发 pullingDown 事件
            },
            pullUpLoad: {
              //上拉加载的配置
              threshold: -50, // 在上拉到超过底部 50px 时，触发 pullingUp 事件
            },
          });
          //2、绑定事件 pullingDown
          this.scroll.on("pullingDown", () => {
            console.log(111);

            this.refresh();
          });
          //3、绑定事件 pullingUp
          this.scroll.on("pullingUp", () => {
            // console.log(222);

            this.scroll.finishPullUp();
            this.$http({
              url: "http://180.76.121.47/api/goods/good/",
            }).then((res) => {
              // console.log(this);
              this.goods = res.data;
              this.goods = this.goods.slice(10, res.data.length);
              // this.showGoods=this.goods.slice(0,5);
              // this.goods = this.goods.slice(0,5);
              for (let i = 0; i < 5; i++) {
                this.showGoods.push(
                  this.goods[Math.round(Math.random() * this.goods.length)]
                );
                console.log(this.showGoods);
              }
              this.scroll.refresh();
            });
          });
        });
      }
    },
  },
  methods: {
    onClick(idx) {
      this.index = idx;
    },
    refresh() {
      this.scroll.finishPullDown();
      this.scroll.finishPullUp();
      this.scroll.refresh(); //重新计算元素高度
    },
    addCart(id) {
      // console.log(id);
      this.$http
        .post("http://180.76.121.47/api/user/cart/", {
          goods_id: id,
          goods_count: 1,
        })
        .then((res) => {});
      Toast.success("加购成功");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.newimg {
  border: 0.01rem red solid;
  border-radius: 0.07rem;
}
.sidebar {
  float: left;
}
.tabs {
  float: left;
}
.van-tab__text {
  width: 1rem;
}
ul {
  width: 2.8rem;
  margin-bottom: 0.2rem;
}
ul li {
  height: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.img {
  width: 0.95rem;
  height: 0.95rem;
  background: coral;
}
.img img {
  width: 100%;
  height: 100%;
}
.text {
  width: 1.8rem;
  height: 1.2rem;
  border-top: .01rem solid #7c7c7c;
  position: relative;
}
.text h3 {
  font-size: 0.15rem;
  line-height: 0.24rem;
  margin-top: 0.07rem;
}
.text p {
  font-size: 0.12rem;
  color: #7c7c7c;
}
.text h5 {
  font-size: 0.13rem;
  color: #7c7c7c;
  margin-top: 0.05rem;
}
.text h2 {
  margin-top: 0.07rem;
  font-size: 0.18rem;
  color: red;
}
.van-tabs__nav--line {
  box-sizing: content-box;
  height: 100%;
  padding-bottom: .1rem;
}
.text input {
  position: absolute;
  width: 0.75rem;
  height: 0.24rem;
  background: #ffd101;
  font-size: 0.1rem;
  line-height: 0.24rem;
  margin: auto;
  border: none;
  border-radius: 0.1rem;
  bottom: 0.1rem;
  right: 0.1rem;
}
</style>
