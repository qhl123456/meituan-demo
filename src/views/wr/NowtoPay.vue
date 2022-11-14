<template>
  <div id="app">
    <NowtoPaycontent></NowtoPaycontent>
  </div>
</template>

<script>
import NowtoPaycontent from "./components/NowtoPaycontent.vue";

export default {
  name: "App",
  components: {
    NowtoPaycontent
  },
  data() {
    return {
      content: [],
    };
  },
  created() {
  },
 
  methods: {},
};
</script>

<style scope>

</style>