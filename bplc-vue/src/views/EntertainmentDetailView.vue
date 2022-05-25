/**
	* @fileName  : EntertainmentDetailView.vue
	* @explain : bplc 웹 사이트 여행지의 엔터테인먼트 detail page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 엔터테인먼트 리스트에서 항목을 선택하면 항목의 detail page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="엔터테인먼트" headdescription="부산의 즐길거리"></ContentsHead>
            <div class="contents">
                <Category MainC="여행지" SubC="엔터테인먼트"></Category>
                <DetailHead category="엔터테인먼트" :selecteddata="Object(getSelectInfo())"></DetailHead>
                <DetailDescription :selecteddata="Object(getSelectInfo())"></DetailDescription>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Category from '@/components/layout/Catergory.vue'
import DetailHead from '@/components/tripsite/DetailHead.vue'
import DetailDescription from '@/components/tripsite/DetailDescription.vue'
import imagepath from '@/assets/images'

export default defineComponent({
  name: 'EntertainmentView',
  components:{
      ContentsHead, Category, DetailHead, DetailDescription
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
            id: "e1",
            name: "부산시청",
            address: "부산 연제구 중앙대로 1001\n부산광역시청",
            photopath: "songdo_cablecar",
            opertime: "00:00 ~ 23:59",
            phone: "010-0000-0000",
            homepage: "http://naver.com",
            holiday: "화요일",
            entryfee: "무료",
            explanation:"부산의 각종 민원을 처리하는\n부산시청"
          }

          selecteddata.photopath = imagepath.entertainment[selecteddata.photopath];

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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/entertainment/songdo_cablecar.jpg);
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