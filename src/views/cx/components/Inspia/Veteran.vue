<template>
  <!-- 做菜老手 -->
  <div class="inspira">
    <div
      class="inspria-div"
      @click="fun(eat.recipeId)"
      v-for="(eat, index) in eats"
      :key="index"
    >
      <img v-lazy="eat.recipeImg" alt="" />
      <div class="inspria-div-p">{{ eat.recipeName }}</div>
      <div class="inspria-div-span">
        <span>{{ eat.recipeDesc }}</span> |
        <span>{{ eat.recipeTime }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "All",
  data() {
    return {
      eats: [],
    };
  },
  created() {
    axios({
      url: "/recipeTypeId",
    })
      .then((res) => {
        this.eats = res.data;
        console.log(this.eats);
      })
      .catch((err) => console.log("出错了", err));
  },
};
</script>

<style scoped>
.inspira {
  display: flex;
  flex-wrap: wrap;
}
.inspria-div {
  width: 1.62rem;
  height: 1.8rem;
  margin-right: 0.04rem;
  margin-top: 0.04rem;
}
.inspria-div img {
  width: 1.62rem;
  height: 1.3rem;
  background: chocolate;
}
.inspria-div-p {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.inspria-div-span {
  font-size: 0.1rem;
  line-height: 0.2rem;
  color: grey;
}
</style>
