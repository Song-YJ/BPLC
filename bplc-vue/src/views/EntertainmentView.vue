/**
	* @fileName  : EntertainmentView.vue
	* @explain : bplc 웹 사이트 여행지의 엔터테인먼트 page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 엔터테인먼트 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="엔터테인먼트" headdescription="부산의 즐길거리"></ContentsHead>
            <div class="contents">
                <Catergory MainC="여행지" SubC="엔터테인먼트"></Catergory>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <div class="card_container">
                    <Cards :listinfo="getListInfo()" routename="EntertainmentDetailRoute"></Cards>
                </div>
                <Pagination :totallistnum="getListInfo().totallistnum"
                routename="EntertainmentRouteParams"></Pagination>
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
          let listinfo = {
              totallistnum : 0,
              category: "entertainment",
              lists: []
          };

          //axios
          const axios = require('axios').default;
          axios.get('/user', {
              params: {
                table: 'enetertainment',
                gernename: String(this.$route.params.gernename),
                page: Number(this.$route.params.page)
              }
          })
          .then(function (response) {
              console.log(response);
              listinfo.totallistnum = response.length;
              listinfo.lists = response;
          })
          .catch(function (error) {
              console.log(error);
          })
          .then(function () {
          });  

        /*
          const listinfo = {
              totallistnum: 7,
              category:"entertainment",
              lists: [
                {
                    id: "e1",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e2",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e3",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e4",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e5",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e6",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                },
                {
                    id: "e7",
                    name: "부산시청",
                    explanation: "부산 연제구 중앙대로 1001\n부산광역시청",
                    photopath: "songdo_cablecar"
                }
              ]
          }
        */

          return listinfo
      },
      getClassificationInfo: function(){
          let cinfo = [
              {
                  name: "전체",
                  engname: "all",
                  routename: "EntertainmentRouteParams"
              },
              {
                  name: "실내",
                  engname: "indoor",
                  routename: "EntertainmentRouteParams"
              },
              {
                  name: "실외",
                  engname: "outdoor",
                  routename: "EntertainmentRouteParams"
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

.contents_wrap .card_container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>