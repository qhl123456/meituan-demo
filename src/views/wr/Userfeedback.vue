<template>
  <div id="app">
    <feedbackHeader></feedbackHeader>
  </div>
</template>

<script>
import feedbackHeader from "./components/feedbackHeader.vue";

export default {
  name: "App",
  components: {
    feedbackHeader
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