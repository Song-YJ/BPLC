/**
	* @fileName  : SearchTotalListView.vue
	* @explain : bplc 웹 사이트 검색 결과 page View
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 검색 결과 page View
	*/

<template>
    <div class="search-list">
        <h3>{{menu}} "( " {{totallistnum}} " 건)"</h3>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cards from '@/components/layout/Cards.vue'
import Category from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'SearchView',
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