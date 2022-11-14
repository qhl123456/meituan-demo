<template>
  <div id="app">
    <Nowtobuycontent></Nowtobuycontent>
  </div>
</template>

<script>
import Nowtobuycontent from "./components/Nowtobuycontent.vue";

export default {
  name: "App",
  components: {
    Nowtobuycontent
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