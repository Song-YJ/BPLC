/**
	* @fileName  : HotelDetailView.vue
	* @explain : bplc 웹 사이트 여행지의 호텔 detail page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 호텔 리스트에서 항목을 선택하면 항목의 detail page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="호텔" headdescription="부산의 숙박"></ContentsHead>
            <div class="contents">
                <Category MainC="여행지" SubC="호텔"></Category>
                <DetailHead category="호텔" :selecteddata="Object(getSelectInfo())"></DetailHead>
                <DetailPhotos :selecteddata="Object(getSelectInfo())"></DetailPhotos>
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
  name: 'EntertainmentView',
  components:{
      ContentsHead, Category, DetailHead, DetailPhotos
  },
  data(){
      return{

      }
  },
  methods:{
      getSelectInfo: function(){
          let selectedid = this.$route.params.id;

          //id와 axios로 data 가져오기
          
          let selecteddata = {
            id: "h1",
            name: "파라다이스 호텔",
            address: "부산 해운대구\n해운대해변로 296",
            photopath: "paradise",
            opertime: "00:00 ~ 23:59",
            phone: "010-0000-0000",
            homepage: "http://google.com",
            holiday: "화요일",
            entryfee: "무료",
            explanation:"부산 해운대의\n파라다이스 호텔"
          }

          selecteddata.photopath = imagepath.hotel[selecteddata.photopath];

          return selecteddata;
      }
  },
  mounted(){
      
      
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