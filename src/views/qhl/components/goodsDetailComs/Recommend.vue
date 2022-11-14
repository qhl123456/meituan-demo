<template>
  <div class="recommend">
    <van-cell-group>
      <van-cell title="推荐菜谱" value="全部菜谱>" />
    </van-cell-group>
    <div class="giftlist">
      <ul>
        <li
          v-for="item in giftList"
          :key="item.repice_id"
          @click="toDetail(item.repice_id)"
        >
          <img v-lazy="'http://180.76.121.47/' + item.img" />
          <p>{{ item.name }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  data() {
    return {
      giftList: [],
    };
  },
  created() {
    this.$http
      .get("http://180.76.121.47/api/food/repicetype/3/")
      .then((res) => (this.giftList = res.data));
  },
  methods: {
    toDetail(id) {
      this.$router.push("/Details/" + id);
    },
  },
};
</script>

<style scoped>
.van-cell__title {
  font-weight: bold;
  font-size: 0.16rem;
}
.giftlist {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 0.05rem;
  overflow: auto;
}
.recommend {
  margin: 0.1rem auto;
}

.giftlist ul {
  height: 98%;
  display: flex;
  align-items: center;
  margin-bottom: 0.1rem;
}

.giftlist ul li {
  flex-shrink: 0;
  width: 1rem;
  height: 95%;
  margin-left: 0.1rem;
}
.giftlist ul li p {
  max-width: 0.55rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  text-align: left;
}

.giftlist ul li img {
  width: 1rem;
  height: 1.1rem;
}
</style>
