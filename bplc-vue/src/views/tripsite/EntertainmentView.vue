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
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Catergory MainC="여행지" SubC="엔터테인먼트"></Catergory>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
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
  data(){
     return{
         listinfo: {
             totallistnum: 0,
             category: "entertainment",
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