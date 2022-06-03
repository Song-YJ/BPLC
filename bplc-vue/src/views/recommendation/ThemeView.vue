/**
	* @fileName  : ThemeView.vue
	* @explain : bplc 웹 사이트 추천의 테마별 추천
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 테마별 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="테마별 코스" headdescription="테마별 부산 여행 코스 추천"></ContentsHead>
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Catergory MainC="추천" SubC="테마별 코스"></Catergory>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <div class="card_container" v-if="listinfo.totallistnum > 0">
                    <ThemeCards :listinfo="listinfo" routename="ThemeDetailRoute"></ThemeCards>
                </div>
                <div v-if="listinfo.totallistnum > 0">
                    <Pagination :listinfo="listinfo"
                    routename="ThemeRouteParams"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import ThemeCards from '@/components/recommendation/ThemeCards.vue'
import Catergory from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'ThemeView',
  components:{
      ContentsHead, ThemeCards, Catergory, Pagination, Classification
  },
  data(){
      return{
          listinfo: {
              totallistnum: 0,
              category: "theme",
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
          await axios.get('/dao/theme', {
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
                  name: "등록순",
                  engname: "all",
                  routename: "ThemeRouteParams"
              },
              {
                  name: "가나다순",
                  engname: "Korean",
                  routename: "ThemeRouteParams"
              },
              {
                  name: "좋아요순",
                  engname: "like",
                  routename: "ThemeRouteParams"
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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/theme/theme_main3.jpg);
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