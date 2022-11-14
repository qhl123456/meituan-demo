import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const Index = () =>
  import(/* webpackChunkName: 'common' */ "../views/qhl/Index.vue");
const Classification = () =>
  import(/* webpackChunkName: 'common' */ "../views/wr/Classification.vue");
const Recipe = () =>
  import(/* webpackChunkName: 'common' */ "../views/cx/Recipe.vue");
const Cart = () =>
  import(/* webpackChunkName: 'common' */ "../views/qhl/Cart.vue");
const Mine = () =>
  import(/* webpackChunkName: 'common' */ "../views/qhl/Mine.vue");
const NotFound = () =>
  import(/* webpackChunkName: 'common' */ "../views/qhl/404NOTFOUND.vue");
import { qhl } from "./qhl";
import { wr } from "./wr";
import { cx } from "./cx";
import { lzy } from "./lzy";

const baseRoutes = [
  {
    path: "",
    redirect: "/index",
  },
  {
    path: "/index",
    component: Index,
  },
  {
    path: "/classification",
    component: Classification,
  },
  {
    path: "/recipe",
    component: Recipe,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/mine",
    component: Mine,
  },
  {
    path: "*",
    component: NotFound,
  },
];
let routes = [...baseRoutes, ...qhl, ...wr, ...cx, ...lzy];

const router = new VueRouter({
  mode: "history",
  routes,
});

// 全局路由守卫;
router.beforeEach((to, from, next) => {
  // to: 想去哪了
  // from：来自哪
  // next：下一步去哪（守卫的逻辑完成后，决定了去的地方）
  // 除了登录注册和首页，都需要守卫
  if (
    to.path == "/login" ||
    to.path == "/index" ||
    to.path == "/tologin" ||
    to.path.startsWith("/code")
  ) {
    next(true);
  } else {
    // 获取后端发送的token
    const tokenStr = localStorage.getItem("token");
    if (!tokenStr) {
      next("/tologin?path=" + to.path);
    } else {
      // 如果有token，放行
      next(true);
    }
  }
});
export default router;
