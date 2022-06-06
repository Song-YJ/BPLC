/**
	* @fileName  : SearchView.vue
	* @explain : bplc 웹 사이트 검색 결과 page View
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 검색 결과 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <Category MainC="검색" :SubC=searchdata></Category>
            <Classification :classificationObject="getClassificationInfo()"></Classification>
            <p class="search-total-text">
                <b>{{searchdata}}</b>
                " 에 대한 검색결과는 총 "
                <b>{{eventlistinfo.totallistnum + themelistinfo.totallistnum + tripsitelistinfo.totallistnum + guidebooklistinfo.totallistnum + noticeistinfo.totallistnum}}</b>
                "건 입니다."
            </p>
            <!--이벤트 검색 결과-->
            <div class="searchreseult" id="eventsearchresult">
                <h3 class="search-type-title">> 이벤트 ( "<b>{{eventlistinfo.totallistnum}}</b>"건)</h3>
                <div class="card_container" v-if="eventlistinfo.totallistnum > 0">
                    <Cards :eventlistinfo="eventlistinfo" routename="SearchRoute"></Cards>
                </div>
                <div v-if="eventlistinfo.totallistnum > 0">
                    <Pagination :eventlistinfo="eventlistinfo"
                    routename="SearchRoute"></Pagination>
                </div>
            </div>
            <!--테마별 추천 검색 결과-->
            <div class="searchreseult" id="themesearchresult">
                <h3 class="search-type-title">> 테마별 추천 ( "<b>{{themelistinfo.totallistnum}}</b>"건)</h3>
                <div id="theme">
                    <div class="card_container" v-if="themelistinfo.totallistnum > 0">
                        <ThemeCards :themelistinfo="themelistinfo" routename="SearchRoute"></ThemeCards>
                    </div>
                    <div v-if="themelistinfo.totallistnum > 0">
                        <Pagination :themelistinfo="themelistinfo"
                        routename="SearchRoute"></Pagination>
                    </div>
                </div>
            </div>
            <!--여행지 검색 결과-->
            <div class="searchreseult" id="tripsitesearchresult">
                <h3 class="search-type-title">> 여행지 ( "<b>{{tripsitelistinfo.totallistnum}}</b>"건)</h3>
                <div class="card_container" v-if="tripsitelistinfo.totallistnum > 0">
                        <Cards :tripsitelistinfo="tripsitelistinfo" routename="SearchRoute"></Cards>
                </div>
                <div v-if="tripsitelistinfo.totallistnum > 0">
                    <Pagination :tripsitelistinfo="tripsitelistinfo"
                    routename="SearchRoute"></Pagination>
                </div>
            </div>

            <!--수정 필요-->
            <!--가이드북 검색 결과-->
            <div class="searchreseult" id="tripinfosearchresult">
                <h3 class="search-type-title">> 가이드북 ( "<b>{{guidebooklistinfo.totallistnum}}</b>"건)</h3>
                <div class="card_container" v-if="guidebooklistinfo.totallistnum > 0">
                        <GuidebookCards :guidebooklistinfo="guidebooklistinfo"></GuidebookCards>
                </div>
                <div v-if="guidebooklistinfo.totallistnum > 0">
                    <Pagination :guidebooklistinfo="guidebooklistinfo"
                    routename="SearchRoute"></Pagination>
                </div>
            </div>

            <!--공지사항 검색 결과-->
            <div class="searchreseult" id="tripinfosearchresult">
                <h3 class="search-type-title">> 공지사항 ( "<b>{{noticelistinfo.totallistnum}}</b>"건)</h3>
                <div class="card_container" v-if="noticelistinfo.totallistnum > 0">
                        <GuidebookCards :noticelistinfo="noticelistinfo"></GuidebookCards>
                </div>
                <div v-if="noticelistinfo.totallistnum > 0">
                    <Pagination :noticelistinfo="noticelistinfo"
                    routename="SearchRoute"></Pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Cards from '@/components/layout/Cards.vue'
import ThemeCards from '@/components/recommendation/ThemeCards.vue'
import Category from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'SearchTotalView',
  components:{
      Cards, ThemeCards, Category, Pagination, Classification
  },
  data(){
     return{
         eventlistinfo: {
             totallistnum: 0,
             category: "event",
             lists: []
         },
         themelistinfo: {
             totallistnum: 0,
             category: "theme",
             lists: []
         },
        tripsitelistinfo: {
             totallistnum: 0,
             category: "tripsite",
             lists: []
        },
        guidebooklistinfo: {
             totallistnum: 0,
             category: "guidebook",
             lists: []
        },
        noticeistinfo: {
             totallistnum: 0,
             category: "notice",
             lists: []
        },
     }
  },
  mounted(){
      this.getEventListInfo();
      this.getThemeListInfo();
      this.getTripsiteListInfo();
      this.getGuidebookListInfo();
      this.getNoticeListInfo();
  },
  methods:{
      getEventListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/search/event', {
              params: {
                gernename: String(this.$route.params.gernename),
                searchdata: String(this.$route.params.searchdata)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.eventlistinfo.totallistnum = tln;
          this.eventlistinfo.lists = ls;
      },
      getThemeListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/search/theme', {
              params: {
                gernename: String(this.$route.params.gernename),
                searchdata: String(this.$route.params.searchdata)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.themelistinfo.totallistnum = tln;
          this.themelistinfo.lists = ls;
      },
      getTripsiteListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/search/tripsite', {
              params: {
                gernename: String(this.$route.params.gernename),
                searchdata: String(this.$route.params.searchdata)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.tripsitelistinfo.totallistnum = tln;
          this.tripsitelistinfo.lists = ls;
      },
      getGuidebookListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/search/guidebook', {
              params: {
                gernename: String(this.$route.params.gernename),
                searchdata: String(this.$route.params.searchdata)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.guidebooklistinfo.totallistnum = tln;
          this.guidebooklistinfo.lists = ls;
      },
      getNoticeListInfo: async function(){
          let tln = 0;
          let ls = [];

          //axios
          const axios = require('axios').default;
          await axios.get('/dao/search/notice', {
              params: {
                gernename: String(this.$route.params.gernename),
                searchdata: String(this.$route.params.searchdata)
              }
          })
          .then(function (response) {
              tln = response.data.totallistnum;
              ls = response.data.lists;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.guidebooklistinfo.totallistnum = tln;
          this.guidebooklistinfo.lists = ls;
      },

      getClassificationInfo: function(){
          let cinfo = [
              {
                  name: "전체",
                  engname: "all",
                  routename: "SearchTotalRouteParams"
              },
              {
                  name: "추천",
                  engname: "recommendation",
                  routename: "SearchTotalRouteParams"
              },
              {
                  name: "여행지",
                  engname: "tripsite",
                  routename: "SearchTotalRouteParams"
              },
              {
                  name: "기타",
                  engname: "extra",
                  routename: "SearchTotalRouteParams"
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