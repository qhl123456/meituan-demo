<template>
  <div>
    <ul>
      <li v-for="addres in adress" :key="addres.id">
        <p>
          <img  v-lazy="addres.img" />
        </p>

        <div class="content">
          <h4>{{ addres.name }}</h4>
          <span class="s1">
            {{ addres.s1 }}
          </span>
          <span class="s2">{{ addres.s2 }}</span>
          <span class="s3" @click="goPick(addres)">选这个</span><br />
          <span class="s4">{{ addres.s4 }}</span
          ><br />
          <span class="s5">{{ addres.s5 }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";
export default {
  name: "adress",
  data() {
    return {
      adress: [
        {
          id: "address01001",
          s1: "距离最短",
          s2: "距您步行距离：300米",
          s4: "高新区高新六路43号绿港花园高新6路43号绿港花园小区高层小区院子",
          s5: "支持冷冻冷藏",
          img: "imgs/lzy/06.jpg",
          name: "",
        },
        {
          id: "address01002",
          s1: "距离最短",
          s2: "距您步行距离：300米",
          s4: "高新区高新六路43号绿港花园高新6路43号绿港花园小区高层小区院子",
          s5: "支持冷冻冷藏",
          img: "imgs/lzy/07.jpg",
          name: "",
        },
        {
          id: "address01003",
          s1: "距离最短",
          s2: "距您步行距离：300米",
          s4: "高新区高新六路43号绿港花园高新6路43号绿港花园小区高层小区院子",
          s5: "支持冷冻冷藏",
          img: "imgs/lzy/08.jpg",
          name: "",
        },
        {
          id: "address01004",
          s1: "距离最短",
          s2: "距您步行距离：300米",
          s4: "高新区高新六路43号绿港花园高新6路43号绿港花园小区高层小区院子",
          s5: "支持冷冻冷藏",
          img: "imgs/lzy/09.jpg",
          name: "",
        },
      ],
      addressName: [],
    };
  },
  methods: {
    goPick(addres) {
      console.log(addres);
      // let changeafter=this.list.addres;
      // console.log("changeafter",changeafter);
      // sessionStorage.setItem("changeafter",changeafter);
      localStorage.setItem("address", JSON.stringify(addres));
      this.$router.push("/mine");
    },
  },
  created() {
    this.$http({
      url: "http://180.76.121.47/api/order/getps/?lat=34.2243&lng=108.89",
    }).then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.adress[i].name = res.data[i].name;
      }
    });
  },
  watch: {
    addressName(n, o) {
      // this.adress=n
      console.log(n, o);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  background-color: white;
}

h4 {
  margin: 0;
  padding-top: 0.1rem;
  font-weight: normal;
}

ul {
  width: 3.4rem;
  border-radius: 0.1rem;
  margin: auto;
  margin-top: 0.1rem;
}

li {
  display: flex;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 0.07rem;
  border-radius: 0.1rem;
}

p {
  width: 0.7rem;
  height: 0.7rem;
  display: inline-block;
  margin-left: 0.1rem;
  margin-top: 0.1rem;
}

img {
  width: 0.7rem;
  height: 0.7rem;
  /* background-color: sandybrown; */
  /* margin: .1rem .0.08rem .35rem .1rem; */
  border-radius: 0.1rem;
}

.content {
  position: relative;
  display: inline-block;
  margin-left: 0.15rem;
}

span {
  font-size: 0.1rem;
  /* margin-left: .15rem; */
}

.s1 {
  color: white;
  background-color: #fa0001;
  padding: 0.03rem 0.01rem;
  border-radius: 0.05rem;
  border: 0.01rem solid #c51015;
  margin-top: 0.05rem;
  display: inline-block;
}

.s2 {
  color: #fa0001;
  margin-left: 0.05rem;
}

.s3 {
  font-size: 0.13rem;
  display: inline-block;
  width: 0.6rem;
  height: 0.25rem;
  background-color: #fdd001;
  text-align: center;
  line-height: 0.25rem;
  border-radius: 0.2rem;
  position: absolute;
  top: 0.12rem;
  right: 0.1rem;
}

.s4 {
  color: #8f8d8e;
}

.s5 {
  color: #5aacd2;
  border: 0.01rem solid #e0e9e8;
  padding: 0.03rem 0.02rem 0.03rem 0.02rem;
  border-radius: 0.2rem;
  display: inline-block;
  margin-top: 0.05rem;
  margin-bottom: 0.05rem;
}
</style>
