 <template>
  <div class="box">
    <header>
      <van-sticky>
      <van-nav-bar
          title=""
          left-arrow
          class="back"
          @click-left="onClickLeft"
        />

        </van-sticky>
        <hr>
        <div class="time">
          <p><van-icon name="underway-o" class="nopay"/>&nbsp;未支付，请在&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          内完成支付
          <van-count-down :time="time" class="timedata"/>
          </p>
        </div>
    </header>
   
  </div>
</template>

<script>

export default {
  name:"payFailedcontent",
  data() {
    return {
        time: 30 * 60 * 60 * 1000,
    };
  },
  methods: {
    onClickLeft(){
      //跳转到详情页
      this.$router.push("/index")
    }
  },
  
};
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
header{
  width: 3.6rem;
  height:1rem;
  font-size: .2rem;
  line-height: .5rem;
  text-indent:.2rem ;
}
.back{
  margin-left: -0.4rem;
  height: .5rem;
}
header hr{
  border: none;
  height: .02rem;
  width: 100%;
  background-color: #f4f4f4;
}
header .time{
  width: 100%;
  height: .45rem;
}
header .time p{
  /* width: 2.6rem; */
  height: .2rem;
  margin-top:.1rem;
  font-size: .15rem;
  font-weight: bold;
  line-height: .2rem;
  position: relative;
}
.timedata{
  width: .6rem;
  color: red;
  position: absolute;
  top: .02rem;
  left:1.55rem;
}

.nopay{
  color: red;
}
</style>