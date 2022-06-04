/**
   * @fileName  : FestivalView.vue
   * @explain : bplc 웹 사이트 이벤트의 축제 page
   * @author : 박혜원 , phw5883@naver.com
   * 부가 설명 : bplc 웹 사이트 이벤트의 축제 page View
   */

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="축제" headdescription="부산의 축제"></ContentsHead>
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Catergory MainC="이벤트" SubC="축제"></Catergory>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <div class="card_container" v-if="listinfo.totallistnum > 0">
                    <Cards :listinfo="listinfo" routename="FestivalDetailRoute"></Cards>
                </div>
                <div v-if="listinfo.totallistnum > 0">
                    <Pagination :listinfo="listinfo"
                    routename="FestivalRouteParams"></Pagination>
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
  name: 'FestivalView',
  components:{
      ContentsHead, Cards, Catergory, Pagination, Classification
  },
  data(){
     return{
         listinfo: {
             totallistnum: 0,
             category: "festival",
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

        const axios = require('axios').default;

        await axios.get('/dao/festival/chgtype1')
          .catch(function (error) {
              console.log(error);
          });
        await axios.get('/dao/festival/chgtype2')
          .catch(function (error) {
              console.log(error);
          });
          //axios
          
          await axios.get('/dao/festival', {
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
                  name: "진행예정",
                  engname: "scheduled",
                  routename: "FestivalRouteParams"
              },
              {
                  name: "진행중",
                  engname: "continue",
                  routename: "FestivalRouteParams"
              },
              {
                  name: "진행종료",
                  engname: "end",
                  routename: "FestivalRouteParams"
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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/festival/title_pic/title.jpg);
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