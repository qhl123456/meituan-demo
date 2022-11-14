<template>
  <div id="app">
    <PickupStationContent class="content"></PickupStationContent>
  </div>
</template>

<script>
import PickupStationContent from "./components/PickupStationContent.vue";

export default {
  name: "App",
  components: {
    PickupStationContent,
  },
  data() {
    return {
      content: [],
    };
  },
  created() {},

  methods: {},
};
</script>

<style scope>
.content .van-nav-bar__title {
  max-width: 60%;
  margin: 0rem 0.5rem;
  color: #323233;
  font-weight: 900;
  font-size: 0.16rem;
}
</style>
