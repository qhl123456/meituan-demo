<template>
  <div id="app">
    <div
      class="app-nav"
      v-for="(meun, index) in menus"
      :key="index"
      @click="fun(meun.repice_id)"
    >
      <div class="app-nav-food">
        <img  v-lazy="'http://180.76.121.47' + meun.img" alt="" />
        <div class="app-nav-food-details">
          <p class="app-nav-food-p1">{{ meun.name }}</p>
          <p class="app-nav-food-p2">
            2种主料·{{ meun.level }}·{{ meun.do_time }}
          </p>
          <p class="app-nav-food-p3">.................</p>
          <div class="app-nav-delete" @click.stop="fun1(meun.repice_id)">取消收藏</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Dialog } from "vant";
import axios from "axios";
// 全局注册
Vue.use(Dialog);

export default {
  props: ["arrindex"],
  name: "App",
  data() {
    return {
      menus: [],
    };
  },
  methods: {
    fun(id) {
      this.$router.push("/Details/" + id);
    },
    fun1(idr) {
      console.log(idr)
      Dialog.confirm({
        message: "确定取消收藏的菜谱吗？",
      })
        .then(() => {
          axios({
            url: `http://180.76.121.47/api/food/colrepice/${idr}/`,
            method: "delete",
          }).then((res) => {
              location.reload();
          });
         
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  watch: {
    arrindex(newVal, oldVal) {
      this.menus = newVal;
      // console.log(this.menus)
      // console.log(newVal,oldVal)
    },
  },
  // created() {
  //   axios({
  //     url: "/recipeTypeId",
  //   })
  //     .then((res) => {
  //       this.menus = res.data;
  //     })
  //     .catch((err) => {
  //       console.log("出错了", err);
  //     });
  // },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  margin: 0 auto;
}
.app-nav {
  width: 100%;
  height: 1.25rem;
}
.app-nav-food {
  width: 100%;
  display: flex;
  margin-bottom: 0.2rem;
}
.app-nav-food img {
  width: 1.34rem;
  height: 1.06rem;
  margin-top: 0.08rem;
}
.app-nav-food .app-nav-food-details {
  margin-left: 0.1rem;
}
.app-nav-food-p1 {
  font-size: 0.14rem;
  margin-top: 0.17rem;
}
.app-nav-food-p2 {
  font-size: 0.1rem;
  margin-top: 0.07rem;
}
.app-nav-food-p3 {
  font-size: 0.1rem;
  line-height: 0.15rem;
  color: #727272;
  margin-top: 0.14rem;
}
.app-nav-delete {
  width: 0.6rem;
  height: 0.14rem;
  font-size: 0.1rem;
  margin-top: 0.1rem;
  background: yellow;
  line-height: 0.14rem;
  text-align: center;
  border-radius: 0.14rem;
}
</style>