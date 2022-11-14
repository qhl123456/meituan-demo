<template>
  <div class="box">
    <van-sidebar v-model="activeKey" @change="onChange" class="sidebar">
      <van-sidebar-item
        v-for="item in content"
        :title="item.title"
        :key="item.typeId"
      />
    </van-sidebar>
  </div>
</template>

<script>
// import $ from "jquery"
export default {
  name: "Sidebar",
  props: ["content"],
  data() {
    return {
      activeKey: 0,
    };
  },
  // created(){
  //   $.get("http://localhost:3000/titles",data=>{
  //     this.titles=data;
  //     // console.log(this.titles);
  //   },'json')
  // },
  methods: {
    onChange(index) {
      this.$bus.$emit("chuan", index);
    },
  },
};
</script>

<style scoped></style>
