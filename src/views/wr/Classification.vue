<template>
  <div id="app">
    <classfy></classfy>
    <sidebar class="side" :content="content"></sidebar>
      <tab class="tab" :tabdata="content"></tab>
      <totop></totop>
      <tab-bar />
    
  </div>
</template>

<script>
import Classfy from "./components/Classfy.vue";
import Sidebar from "./components/Sidebar.vue";
import Tab from "./components/Tab.vue";
import TabBar from "../common/TabBar.vue";
import ClassfyList from "./components/ClassfyList.vue"
import Totop from "../common/Totop.vue";
export default {
  name: "App",
  components: {
    Classfy,
    Sidebar,
    TabBar,
    Tab,
    ClassfyList,
    Totop,
  },
  data() {
    return {
      content: [],
    };
  },
  created() {
     this.$http({
      url:"http://localhost:3000/classfy",
    }).then((res)=>(this.content=res.data))
     // 调用分类接口
    // this.$http({
    //   url: "http://180.76.121.47/api/goods/cates/",
    // }).then((res) => {
    //   this.content=res.data;
    //   console.log(res.data);
    //   // 调用mutations里面的方法
    // });
  },
 
  methods: {
  },
};
</script>

<style scope>
@import url(../../assets/css/base.css);
.side {
  float: left;
  margin-bottom: .5rem;
  margin-top: 0rem;
  position: fixed;
}
.tab {
  float: left;
   margin-bottom: .2rem;
   margin-top: 0rem;
   margin-left: .7rem;
}
.list{
  margin-top: .2rem;
}
.list .notice .van-notice-bar {
   
    left: -0.3rem;
}
</style>
