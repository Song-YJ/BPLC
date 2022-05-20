/**
	* @fileName  : Card.vue
	* @explain : bplc 웹 사이트 여행지의 엔터테인먼트 page card component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 엔터테인먼트 page의 card list component
	*/

<template>
    <div class="card" v-for="listitem in entertainList" :key="listitem.id">
        <img :src="listitem.photopath" class="card-img" alt="loading failed">
        <div class="card-img-overlay">
            <p class="card-title">{{listitem.name}}</p>
            <pre class="card-text">{{listitem.address}}</pre>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'entertainCard',
  data(){
      return{
          entertainList: [{}]
      }
  },
  mounted: function(){
    this.getLists(String(this.$route.params.gernename), Number(this.$route.params.page))
  },
  methods:{
    getLists: function(gernename:String, page:Number){
      //console.log(gernename);
      //console.log(page)

      //axios로 list db에서 받아오기
      this.entertainList = [
          {
            id: 1,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 2,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 3,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 4,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 5,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 6,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          },
          {
            id: 7,
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: require("@/assets/entertainment/songdo_cablecar_pic" + "/thumbnail.jpg")
          }
      ]
    }
  },
  
});
</script>

<style scoped>
.card{
    width:20%;
    height:300px;
    margin: 2% 30px 2% 30px;

    display: inline-block;

    border: none;

    text-align: center;
}

.card:hover{
    box-shadow: 4px 4px 4px gray;
    cursor:pointer;
}

.card img{
    height: 100%;
}

.card .card-img-overlay{
    background: white;
    width: 90%;
    height: 30%;

    margin-left:auto;
    margin-right:auto;
    margin-top: auto;

    padding: 5px;

    border-radius: calc(.25rem - 3px) calc(.25rem - 3px) 0 0;
}

.card .card-img-overlay .card-title{
    font-size: 12pt;
    font-weight: bold;
}
.card .card-img-overlay .card-text{
    font-size: 10pt;
}

</style>