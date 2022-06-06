/**
	* @fileName  : SearchView.vue
	* @explain : bplc 웹 사이트 검색 결과 page View
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 검색 결과 page View
	*/

<template>
<div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="통합검색" :headdescription="'검색어: ' + searchdata"></ContentsHead>
            <div class="contents">
                <Category MainC="검색"></Category>
                <Classification :classificationObject="getClassificationInfo()"></Classification>
                <div class="search-total-text">
                    <p class="search-text">
                        <b>{{searchdata}}</b>
                        에 대한 검색결과는 총 
                        <b>{{eventlistinfo.totallistnum + themelistinfo.totallistnum + tripsitelistinfo.totallistnum + guidebooklistinfo.totallistnum}}</b>
                    건 입니다.
                    </p>
                </div>
                <!--이벤트 - 축제&행사, 전시 관련 검색 결과-->
                <div class="contentsdetail" id="event" v-if="(eventlistinfo.totallistnum > 0) && (this.$route.params.gernename === 'all' || this.$route.params.gernename === 'event')">
                    <h2 class="search-type-title">> 이벤트 ( <b>{{eventlistinfo.totallistnum}}</b> 건)</h2>
                    <SearchCard :listinfo="eventlistinfo.lists"></SearchCard>
                </div>
                <!--추천 - 테마별 추천 관련 검색 결과-->
                <div class="contentsdetail" id="theme" v-if="(themelistinfo.totallistnum > 0) && (this.$route.params.gernename === 'all' || this.$route.params.gernename === 'theme')">
                    <h2 class="search-type-title">> 테마별 추천 ( <b>{{themelistinfo.totallistnum}}</b> 건)</h2>
                    <SearchCard :listinfo="themelistinfo.lists"></SearchCard>
                </div>
                <!--여행지 - 명소, 음식, 호텔, 엔터테이먼트 관련 검색 결과-->
                <div class="contentsdetail" id="tripsite" v-if="(tripsitelistinfo.totallistnum > 0) && (this.$route.params.gernename === 'all' || this.$route.params.gernename === 'tripsite')">
                    <h2 class="search-type-title">> 여행지 ( <b>{{tripsitelistinfo.totallistnum}}</b> 건)</h2>
                    <SearchCard :listinfo="tripsitelistinfo.lists"></SearchCard>
                </div>
                <!--여행정보 - 가이드북 관련 검색 결과-->
                <div class="contentsdetail" id="guidebook" v-if="(guidebooklistinfo.totallistnum > 0) && (this.$route.params.gernename === 'all' || this.$route.params.gernename === 'guidebook')">
                    <h2 class="search-type-title">> 가이드북 ( <b>{{guidebooklistinfo.totallistnum}}</b> 건)</h2>
                    <SearchCard :listinfo="guidebooklistinfo.lists"></SearchCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchCard from '@/components/search/SearchCard.vue'
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Category from '@/components/layout/Catergory.vue'
import Classification from '@/components/layout/Classification.vue'

export default defineComponent({
  name: 'SearchView',
  components:{
      SearchCard, ContentsHead, Category, Classification
  },
  data(){
     return{
         searchdata: String(this.$route.params.searchdata),
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
             category: "tripsite", //이거 카테고리 sight, food 안그래도 괜찮겠지?
             lists: []
        },
        guidebooklistinfo: {
             totallistnum: 0,
             category: "guidebook",
             lists: []
        },
     }
  },
  mounted(){
      this.getEventListInfo();
      this.getThemeListInfo();
      this.getTripsiteListInfo();
      this.getGuidebookListInfo();
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

      getClassificationInfo: function(){
          let cinfo = [
              {
                  name: "전체",
                  engname: "all",
                  routename: "SearchRoute"
              },
              {
                  name: "이벤트",
                  engname: "event",
                  routename: "SearchRoute"
              },
              {
                  name: "테마별 추천",
                  engname: "theme",
                  routename: "SearchRoute"
              },
              {
                  name: "여행지",
                  engname: "tripsite",
                  routename: "SearchRoute"
              },
              {
                  name: "가이드북",
                  engname: "guidebook",
                  routename: "SearchRoute"
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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/searchresult.png);
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