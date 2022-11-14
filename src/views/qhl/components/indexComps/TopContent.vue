<template>
  <div class="content">
    <index-header></index-header>
    <search> </search>
    <gift></gift>
  </div>
</template>

<script>
import IndexHeader from "./IndexHeader";
import Search from "../../../common/Search";
import Gift from "./Gift";
export default {
  name: "TopContent",
  data() {
    return {};
  },
  components: {
    Search,
    IndexHeader,
    Gift,
  },
};
</script>

<style scoped>
.content {
  background-color: #f8ce3a;
  padding-bottom: 0.08rem;
  margin: auto;
  position: relative;
  width: 100%;
}
.header {
  width: 90%;
  height: 0.5rem;
  margin: auto;
}
</style>
