<template>
  <div>
    <div class="platform">
      <div class="info" v-for="(item, index) in platInfo" :key="index">
        <p class="title">
          {{ item.title }}
        </p>
        <p class="desc" :class="{ firstTitle: index === 0 }">{{ item.desc }}</p>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Platform",
  data() {
    return {
      platInfo: [
        {
          title: "平台保障",
          desc: "闪电退款·支持7天无理由退换货·缺货退·价格公道",
        },
        {
          title: "优惠",
          desc: "你有一款免费菜待领取",
        },
        {
          title: "自提信息",
          desc: "明天16：00退货",
        },
      ],
    };
  },
  created() {
    // 获取自提点
    this.$http({
      url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
    }).then((res) => {
      // console.log(res.data[2].name);
      this.platInfo[this.platInfo.length - 1].desc =
        res.data[2].name + "" + this.platInfo[this.platInfo.length - 1].desc;
    });
  },
};
</script>

<style scoped>
.platform {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin: 0.1rem 0rem;
  background-color: #fff;
}
.info {
  width: 100%;
  height: 33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem;
  box-sizing: border-box;
  margin: 0.15rem auto;
  font-size: 0.14rem;
}
.info .title {
  width: 20%;
  height: 100%;
  font-weight: bold;
}
.info .desc {
  width: 70%;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.firstTitle {
  color: #efa44f;
}
</style>
