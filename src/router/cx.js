const Details = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/Details.vue");
const Login = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/longin.vue");
const Collection = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/Collection.vue");
const Sevecard = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/Sevecard.vue");
const setUser = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/Cancellation.vue");
const Inspiration = () =>
  import(/* webpackChunkName: 'cx' */ "../views/cx/components/Inspiration.vue");
const Veteran = () =>
  import(
    /* webpackChunkName: 'cx' */ "../views/cx/components/Inspia/Veteran.vue"
  );
const Reduced = () =>
  import(
    /* webpackChunkName: 'cx' */ "../views/cx/components/Inspia/Reduced.vue"
  );
const Dishes = () =>
  import(
    /* webpackChunkName: 'cx' */ "../views/cx/components/Inspia/Dishes.vue"
  );
const SmallWhite = () =>
  import(
    /* webpackChunkName: 'cx' */ "../views/cx/components/Inspia/SmallWhite.vue"
  );
const Under = () =>
  import(
    /* webpackChunkName: 'cx' */ "../views/cx/components/Inspia/Under.vue"
  );

export const cx = [
  {
    path: "/Details/:repice_id",
    component: Details,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/collection",
    component: Collection,
  },
  {
    path: "/sevecard",
    component: Sevecard,
  },
  {
    path: "/setuser",
    component: setUser,
  },
  {
    path: "/Inspiration",
    component: Inspiration,
    children: [
      {
        //做菜老手
        path: "/Veteran",
        component: Veteran,
      },
      {
        //减脂餐
        path: "/Reduced",
        component: Reduced,
      },
      {
        //素菜
        path: "/Dishes",
        component: Dishes,
      },
      {
        //做菜新手
        path: "/SmallWhite",
        component: SmallWhite,
      },
      {
        //下饭菜
        path: "/Under",
        component: Under,
      },
    ],
  },
];
