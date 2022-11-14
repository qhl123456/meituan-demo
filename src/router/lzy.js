const ChangePick = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/ChangePick.vue");
const ChangeUsername = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/ChangeUsername.vue");
const List = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/List.vue");
const MyMsg = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/MyMsg.vue");
const SelfPick = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/SelfPick.vue");
const myMessage = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/Comment1.vue");
const Eval = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/Eval1.vue");
const ChangeAddress = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/ChangeAddress.vue");
const Nopaying = () =>
  import(/* webpackChunkName: 'lzy' */ "../views/lzy/pages/Nopaying.vue");
export const lzy = [
  // 自提点
  {
    path: "/selfpick",
    component: SelfPick,
  },
  // 我的消息
  {
    path: "/mymessage",
    component: myMessage,
  },
  // 用户头像
  {
    path: "/mymsg",
    component: MyMsg,
  },
  // 我的订单
  {
    path: "/myorder",
    component: Eval,
  },
  // 搜索页2
  {
    path: "/searchgoods",
    component: List,
  },
  //修改昵称
  {
    path: "/name",
    component: ChangeUsername,
  },

  //其他自提点

  {
    path: "/changepick",
    component: ChangePick,
  },
  //切换地址
  {
    path: "/changeadress",
    component: ChangeAddress,
  },
  //未支付
  {
    path: "/nopaying",
    component: Nopaying,
  },
];
