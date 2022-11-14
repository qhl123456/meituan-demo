<template>
  <div>
    <div class="newbuy">
      <div class="header">
        <div class="header-left">
          <p>新人限时购</p>
          <div class="time">
            距结束
            <van-count-down :time="time" />
          </div>
        </div>
        <div class="header-right" @click="look">
          查看全部
          <van-icon name="arrow" />
        </div>
      </div>
      <gift-list></gift-list>
    </div>
  </div>
</template>

<script>
import GiftList from "../indexComps/GiftList.vue";
export default {
  components: { GiftList },
  name: "NewBuy",
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
    };
  },
  methods: {
    look() {
      this.$router.push("/index");
    },
  },
};
</script>

<style scoped>
.newbuy {
  width: 100%;
  height: 2.1rem;
  background-color: #ff3823;
  margin: 0.1rem auto;
}
.giftlist {
  position: relative;
  width: 95%;
  background-color: #fff;
  border-radius: 0.05rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
  box-sizing: border-box;
}
.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-left p {
  font-size: 0.16rem;
  color: #fff;
  font-weight: bold;
}
.time {
  font-size: 0.12rem;
  color: #fff;
  background-color: #f32f20;
  margin-left: 0.1rem;
}
.van-count-down {
  display: inline-block;
}
.header-right {
  width: 0.75rem;
  height: 0.25rem;
  border-radius: 0.15rem;
  background-color: #fff;
  color: #ff3823;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.25rem;
  font-weight: bold;
  padding-left: 0.08rem;
  box-sizing: border-box;
}
</style>
