/**
	* @fileName  : SearchTotalView.vue
	* @explain : bplc 웹 사이트 검색 결과 page View
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 검색 결과 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Category MainC="검색"></Category>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <p class="search-total-text">
                    <b>{{searchdata}}</b>
                    " 에 대한 검색결과는 총 "
                    <b>{{totallistnum}}</b>
                    "건 입니다."
                </p>
                <div class="card_container" v-if="listinfo.totallistnum > 0">
                    <Cards :listinfo="listinfo" routename="EntertainmentDetailRoute"></Cards>
                </div>
                <div v-if="listinfo.totallistnum > 0">
                    <Pagination :listinfo="listinfo"
                    routename="EntertainmentRouteParams"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Cards from '@/components/layout/Cards.vue'
import Category from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'SearchTotalView',
  components:{
      Cards, Category, Pagination, Classification
  },
  data(){
     return{
         listinfo: {
             totallistnum: 0,
             category: "search",
             lists: []
         }
     }
  },
  mounted(){
      this.getListInfo();
  },
  methods:{
      getListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/entertainment', {
              params: {
                gernename: String(this.$route.params.gernename)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.listinfo.totallistnum = tln;
          this.listinfo.lists = ls;
      },
      getClassificationInfo: function(){
          let cinfo = [
              {
                  name: "전체",
                  engname: "all",
                  routename: "SearchResultRouteParams"
              },
              {
                  name: "추천",
                  engname: "recommendation",
                  routename: "SearchResultRouteParams"
              },
              {
                  name: "여행지",
                  engname: "tripsite",
                  routename: "SearchResultRouteParams"
              },
              {
                  name: "기타",
                  engname: "extra",
                  routename: "SearchResultRouteParams"
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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/entertainment/haeundae_bluelinepark/thumbnail.png);
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

    text-align: left;
}

.contents_back .contents_wrap .dataloading{
    height: 110vh;
}

.contents_wrap .card_container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>