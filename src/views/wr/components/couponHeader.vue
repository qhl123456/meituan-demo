 <template>
  <div class="box">
   <van-nav-bar
      title="优惠券"
      left-arrow
      @click-left="onClickLeft"
      class="tab"
    />
    
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  name:"",
  data() {
    return {
    };
  },
  methods: {
    onClickLeft(){
      Toast('返回');
      setTimeout(()=>{
       this.$router.push("/mine"); 
      },1000)
      
      
    },
  },
};

</script>



<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>