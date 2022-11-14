<template>
  <div id="app">
    <ul class="icf">
      <li>
        <p class="iconfont icon-gouwuche"></p>
        <p class="icf-p" @click="fun">购物车</p>
      </li>
      <li>
        <p
          class="iconfont icon-shoucang"
          @click="fun1(goodsI)"
          :class="{ funIcon: showIcon }"
        ></p>
        <p class="icf-p">收藏</p>
      </li>
    </ul>
    <div class="xuangou">
      <div class="xuangou-img">
        <img
          src="https://img1.baidu.com/it/u=3651210547,4116961064&fm=26&fmt=auto"
          alt=""
        />
        <img
          src="https://img0.baidu.com/it/u=1730314909,1257371389&fm=26&fmt=auto"
          alt=""
        />
      </div>
      <p class="xuangoou-p" @click="fun2">食材选购 ></p>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
import axios from "axios";
export default {
  props: ["listing"],
  name: "Shopping",
  data() {
    return {
      goodsI: 0,
      showIcon: "",
    };
  },
  watch: {
    listing(newVal, oldVl) {
      // console.log(newVal)
      this.goodsI = newVal[0].repice.repice_id;
    },
  },
  created() {
    axios({
      url: "http://180.76.121.47//api/food/colrepice/",
      method: "get",
    }).then((res) => {
      // console.log(res.data)
      for (let i = 0; i < res.data.length; i++) {
        if (this.goodsI == res.data[i].repice_id) {
          this.showIcon = true;
        } else {
          this.showIcon = false;
        }
      }
    });
  },
  methods: {
    fun() {
      this.$router.push("/cart");
    },
    fun1(goodsI) {
      axios({
        url: "http://180.76.121.47/api/food/colrepice/",
        method: "post",
        data: {
          repice_id: this.goodsI,
        },
      })
        .then((res) => {
          if (res.data.msg == "已有该菜谱，请勿重复添加") {
            axios({
              url: `http://180.76.121.47/api/food/colrepice/${goodsI}/`,
              method: "delete",
            }).then((res) => {
              Toast.success("已取消收藏");
              this.showIcon = false;
            });
          } else {
            Toast.success("收藏成功");
            this.showIcon = true;
          }
        })
        .catch((err) => {
          Toast.success("服务器响应失败，请从新尝试");
        });
    },
    fun2() {
      this.$router.push("/searchgoods");
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  height: 0.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.icf {
  width: 0.8rem;
  height: 0.5rem;
  display: flex;
  justify-content: space-between;
}
.icf li {
  width: 0.4rem;
  height: 0.5rem;
}
.iconfont {
  font-size: 0.2rem;
  text-align: center;
}
.icf li .icf-p {
  font-size: 0.08rem;
  text-align: center;
}
.xuangou {
  width: 1.96rem;
  height: 0.38rem;
  margin-top: 0.06rem;
  background: yellow;
  border-radius: 0.38rem;
  display: flex;
  justify-content: space-between;
}
.xuangou .xuangou-img {
  width: 0.52rem;
  height: 0.24rem;
  margin-top: 0.06rem;
  margin-left: 0.14rem;
  display: flex;
  justify-content: space-between;
}
.xuangou .xuangou-img img {
  width: 0.24rem;
  height: 0.24rem;
  background: violet;
}
.xuangoou-p {
  font-size: 0.12rem;
  line-height: 0.38rem;
  margin-right: 0.14rem;
}
.funIcon {
  color: red;
}
</style>