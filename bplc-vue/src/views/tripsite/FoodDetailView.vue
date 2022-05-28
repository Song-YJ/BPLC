/**
	* @fileName  : FoodDetailView.vue
	* @explain : bplc 웹 사이트 여행지의 음식 detail page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 음식 리스트에서 항목을 선택하면 항목의 detail page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="음식" headdescription="부산의 먹거리"></ContentsHead>
            <div class="contents">
                <Category MainC="여행지" SubC="음식"></Category>
                <DetailHead category="음식" :selecteddata="selecteddatainfo"></DetailHead>
                <DetailPhotos :selecteddata="selecteddatainfo"></DetailPhotos>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Category from '@/components/layout/Catergory.vue'
import DetailHead from '@/components/tripsite/DetailHead.vue'
import DetailPhotos from '@/components/tripsite/DetailDescription.vue'
import imagepath from '@/assets/images'

export default defineComponent({
  name: 'FoodDetailView',
  components:{
      ContentsHead, Category, DetailHead, DetailPhotos
  },
  data(){
      return{
          selecteddatainfo: {}
      }
  },
  mounted(){
      this.getSelectInfo();
  },
  methods:{
      getSelectInfo: async function(){
          let selectedid = this.$route.params.id;
          let sdata = {
              detail: "",
              explanation: "",
              holiday: "",
              homepage: "",
              id: "",
              name: "",
              oper_time: "",
              phone: "",
              photopath: "",
              entryfee: ""
          };

          const axios = require('axios').default;
          await axios.get('/dao/detail/food', {
              params: {
                id: selectedid
              }
          })
          .then(function (response) {
              sdata = response.data;
              sdata.photopath = imagepath.food[sdata.photopath];
          })
          .catch(function (error) {
              console.log(error);
          });

          this.selecteddatainfo = sdata;
      }
  }
  
});
</script>
<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/hotel/busan_signiel/thumbnail.jpeg);
  background-size: 100vw;
  background-repeat: no-repeat;
  background-attachment: fixed;

  width: 100%;
}
.contents_back .contents_wrap{
    padding: 90px 70px 20px 70px;

    text-align: center;
}
.contents_back .contents_wrap .contents{
    width: 100%;
    padding: 5%;
    background: white;
    height: auto;

    text-align: left;
}
</style>