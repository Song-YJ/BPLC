/**
	* @fileName  : GuidebookView.vue
	* @explain : bplc 웹 사이트 여행 정보의 가이드북 page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행 정보의 가이드북 리스트 View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="가이드북" headdescription="부산을 한눈에 즐길 수 있는 가이드북"></ContentsHead>
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Category MainC="여행 정보" SubC="가이드북"></Category>
                <div class="card_container" v-if="listinfo.totallistnum > 0">
                    <GuidebookCards :listinfo="listinfo"></GuidebookCards>
                </div>
                <div v-if="listinfo.totallistnum > 0">
                    <Pagination :listinfo="listinfo"
                    routename="GuidebookRouteParams"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Testbtn from '@/components/tripinfo/testbtn.vue'
import Category from '@/components/layout/Catergory.vue'
import GuidebookCards from '@/components/tripinfo/GuidebookCards.vue'
import Pagination from '@/components/layout/Pagination.vue'

export default defineComponent({
  name: 'GuidebookView',
  components:{
      ContentsHead, Category, Testbtn, GuidebookCards, Pagination
  },
  data(){
      return{
          listinfo: {
            totallistnum: 0,
            category: "guidebook",
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
          await axios.get('/dao/guidebook')
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.listinfo.totallistnum = tln;
          this.listinfo.lists = ls;
      }
  }
  
});
</script>

<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/guidebook/guidebook_bg.jpg);
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