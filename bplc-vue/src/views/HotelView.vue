/**
	* @fileName  : HotelView.vue
	* @explain : bplc 웹 사이트 여행지의 호텔 page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 호텔 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="호텔" headdescription="부산의 숙박"></ContentsHead>
            <div class="contents">
                <Catergory MainC="여행지" SubC="호텔"></Catergory>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <div class="card_container">
                    <Cards :listinfo="getListInfo()" routename="HotelDetailRoute"></Cards>
                </div>
                <Pagination :totallistnum="getListInfo().totallistnum"
                routename="HotelRouteParams"></Pagination>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Cards from '@/components/layout/Cards.vue'
import Catergory from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'EntertainmentView',
  components:{
      ContentsHead, Cards, Catergory, Pagination, Classification
  },
  methods:{
      getListInfo: function(){
          //console.log(String(this.$route.params.gernename))
          //console.log(Number(this.$route.params.page))
          //axios

          const listinfo = {
              totallistnum: 7,
              category:"hotel",
              lists: [
                {
                    id: "h1",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h2",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h3",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h4",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h5",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h6",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대구\n해운대해변로 296",
                    photopath: "paradise"
                },
                {
                    id: "h7",
                    name: "파라다이스 호텔",
                    explanation: "부산 해운대\n해운대해변로 296",
                    photopath: "paradise"
                }
              ]
          }
          return listinfo
      },
      getClassificationInfo: function(){
          let cinfo = [
              {
                  name: "전체",
                  engname: "all",
                  routename: "HotelRouteParams"
              },
              {
                  name: "호텔/리조트",
                  engname: "hotel",
                  routename: "HotelRouteParams"
              },
              {
                  name: "게스트하우스",
                  engname: "guesthouse",
                  routename: "HotelRouteParams"
              },
              {
                  name: "펜션/풀빌라",
                  engname: "pension",
                  routename: "HotelRouteParams"
              }
          ]

          return cinfo;
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

.contents_wrap .card_container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>