<template>
  <div id="app">
    <p class="listing">食材清单</p>
    <p class="listing-ingredient">主料<span>{{listingInfo.length}}</span>种</p>
    <ul class="listing-ingredient1">
      <li v-for="(item, index) in listingInfo" :key="index">{{ item.name }}</li>
    </ul>
    <p class="listing-ingredient">辅料<span>{{listingItem.length}}</span>种</p>
    <ul class="listing-ingredient1">
      <li v-for="(item , index) in listingItem" :key="index">{{item.name}}</li> 
    </ul>
  </div>
</template>

<script>
export default {
  props: ["listing"],
  data() {
    return {
      listingInfo: [],
      listingItem:[]
    };
  },
  watch: {
    listing(newVal, oldVal) {
      this.listingInfo=newVal[0].food;
      this.listingItem=newVal[0].foodextrafl;
    },
  },
};
</script>

<style scoped>
#app {
  width: 3.34rem;
  margin: 0 auto;
}
.listing {
  font-size: 0.18rem;
  font-weight: bold;
}
.listing-ingredient {
  font-size: 0.12rem;
  font-weight: bold;
  margin-top: 0.1rem;
}
.listing-ingredient1 {
  border: 1px solid #f3f6f8;
  border-radius: 0.03rem;
  font-size: 0.12rem;
  text-align: left;
  padding: 0.14rem;
  margin-top: 0.1rem;
  display: flex;
  flex-wrap: wrap;
}
.listing-ingredient1 li {
  width: 1.5rem;
  line-height: 0.18rem;
}

.material {
  font-size: 0.18rem;
  font-weight: bold;
}
</style>