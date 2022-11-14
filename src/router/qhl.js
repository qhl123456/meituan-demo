const GoodsDetail = () =>
  import(/* webpackChunkName: 'qhl' */ "../views/qhl/GoodsDetail.vue");
const SearchList = () =>
  import(/* webpackChunkName: 'qhl' */ "../views/qhl/SearchList.vue");
const Code = () =>
  import(/* webpackChunkName: 'qhl' */ "../views/qhl/Code.vue");
const toLogin = () =>
  import(/* webpackChunkName: 'qhl' */ "../views/qhl/ToLogin.vue");
export const qhl = [
  {
    path: "/goodsdetail/:goodsId",
    component: GoodsDetail,
    props: true,
  },
  {
    path: "/searchList",
    component: SearchList,
  },
  {
    path: "/code",
    component: Code,
    props: true,
  },
  {
    path: "/tologin",
    component: toLogin,
  },
];
