const Userfeedback = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/Userfeedback.vue");
const NowtoPay = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/NowtoPay.vue");
const TopayFailed = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/TopayFailed.vue");
const ClickNowtoPay = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/ClickNowtoPay.vue");
const Nowtobuy = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/Nowtobuy.vue");
const Coupon = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/Coupon.vue");
const PickupStation = () =>
  import(/* webpackChunkName: 'wr' */ "../views/wr/PickupStation.vue");

export const wr = [
  {
    path: "/PickupStation",
    component: PickupStation,
  },
  {
    path: "/Userfeedback",
    component: Userfeedback,
  },
  {
    path: "/NowtoPay",
    component: NowtoPay,
  },
  {
    path: "/TopayFailed",
    component: TopayFailed,
  },
  {
    path: "/ClickNowtoPay",
    component: ClickNowtoPay,
  },
  {
    path: "/Nowtobuy",
    component: Nowtobuy,
  },
  {
    path: "/Coupon",
    component: Coupon,
  },
];
