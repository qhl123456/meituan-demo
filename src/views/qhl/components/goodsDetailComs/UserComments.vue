<template>
  <div class="user">
    <!-- 用户评价头部区域 -->
    <div class="header">
      <p class="title">
        用户评价
        <span>({{ userInfo.commentsNum }})</span>
      </p>
      <div class="right">
        <p class="desc">
          好评
          <span>{{ userInfo.rating }}</span>
        </p>
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 标签区域 -->
    <div class="lable">
      <div
        class="lable-list"
        v-for="(item, index) in userInfo.label"
        :key="index"
      >
        <p>
          {{ item.title }}
          <span>{{ item.nums }}</span>
        </p>
      </div>
    </div>
    <!-- 用户区域 -->
    <div id="user">
      <div class="user-top">
        <div class="user-top-left">
          <div class="user-top-left-left">
            <div class="userImg">
              <img  v-lazy="usercommentInfo.userImg" />
            </div>
            <div class="username">
              <p>陈**9</p>
              <van-rate v-model="star" readonly />
            </div>
          </div>
        </div>
        <div class="user-top-right">
          <p>{{ usercommentInfo.commentsTime }}</p>
        </div>
      </div>
      <div class="comment-content">
        <p>{{ usercommentInfo.content }}</p>
        <img :src="usercommentInfo.commengImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComments",
  props: ["usercomment"],
  data() {
    return {
      // 全部信息
      userInfo: {},
      // 评价信息
      usercommentInfo: {},
      // 评价星级
      star: 0,
    };
  },
  watch: {
    usercomment(newVal, oldVal) {
      this.userInfo = newVal;
      this.usercommentInfo = newVal.user;
      this.star = parseInt(this.usercommentInfo.star);
    },
  },
};
</script>

<style scoped>
.user {
  background-color: #fff;
}
.header {
  width: 100%;
  height: 0.35rem;
  margin: 0rem 0.05rem;
  line-height: 0.35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.title {
  font-size: 0.14rem;
  font-weight: bold;
}
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.12rem;
  color: #cccccc;
}
.title span {
  font-size: 0.12rem;
  color: #cccccc;
}
.desc span {
  color: #000;
  font-size: 0.14rem;
}
.lable {
  display: flex;
  align-items: center;
  height: 0.53rem;
  margin: auto;
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.lable-list {
  width: 0.9rem;
  height: 0.25rem;
  background-color: #f7f7f7;
  text-align: center;
  line-height: 0.26rem;
  border-radius: 0.15rem;
  font-size: 0.12rem;
  margin-right: 0.1rem;
}
.lable-list span {
  color: #cccccc;
}
#user {
  padding: 0.1rem;
  margin: auto;
  box-sizing: border-box;
}
.user-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 0rem 0.1rem;
  box-sizing: border-box;
  width: 100%;
  height: 0.4rem;
}

.user-top-left-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
}
.user-top-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 75%;
}
.userImg {
  height: 100%;
  width: 20%;
}
.userImg img {
  width: 100%;
  border-radius: 50%;
  height: 100%;
}
.username {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.user-top-right {
  font-size: 0.1rem;
  color: #cccccc;
  height: 100%;
}
.comment-content {
  width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.2rem;
  box-sizing: border-box;
  margin-top: 0.2rem;
  font-size: 0.12rem;
}

.comment-content p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  line-height: 0.2rem;
  font-weight: bold;
}
.comment-content img {
  width: 1rem;
  height: 1rem;
  border-radius: 0.1rem;
}
</style>
