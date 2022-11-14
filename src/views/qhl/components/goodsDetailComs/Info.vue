<template>
  <div class="info">
    <van-cell-group>
      <van-cell title="规格信息" />
    </van-cell-group>
    <table>
      <tr v-for="(item, index) in Info" :key="index">
        <td class="left-tr">{{ item.title }}</td>
        <td class="right-tr">{{ item.info }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Info",
  data() {
    return {
      Info: {},
    };
  },
  created() {
    this.$http({
      url: "/goods",
    }).then((res) => {
      this.Info = res.data[0].goodsMessage;
    });
  },
};
</script>

<style scoped>
.van-cell__title {
  font-weight: bold;
  font-size: 0.16rem;
}
.info {
  width: 100%;
  height: 2.45rem;
  padding-bottom: 0.1rem;
  margin: auto;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0.1rem auto;
}
table {
  width: 90%;
  height: 90%;
  padding-bottom: 0.15rem;
  margin: auto;
}
.left-tr {
  background-color: #f7f7f7;
  width: 30%;
}
.right-tr {
  background-color: #faf9fe;
  color: #78777f;
}
tr {
  height: 0.3rem;
  margin-bottom: 0.01rem;
  font-size: 0.12rem;
  line-height: 0.3rem;
}
td {
  padding-left: 0.1rem;
  box-sizing: border-box;
  border-radius: 0.02rem;
}
</style>
