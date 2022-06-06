/**
	* @fileName  : Header.vue
	* @explain : bplc 웹 사이트 Header의 navigation
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트의 Header navigation component
	*/

<template>
  <header :class="{'hidden':hidden}">
    <div class="menu_wrap">
      <ul class="dept_1">
        <img class="logoimg" src="@/assets/logo.png" @click="logoclick()"/> 
        <li v-for="item in menus" :key="item.name">
          <a href="#">{{item.name}}</a>
          <ul class="dept_2">
            <li v-for="sub in item.submenu" :key="sub.name">
              <router-link :to="{'name':sub.path}" exact>{{sub.name}}</router-link>
            </li>
          </ul>
        </li>
        <span class="search_wrap">
          <button id="btn_search">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </button>
          <input type="text" id="input_search" v-model="searchdata" @keyup.enter="searchEvent()"/>
        </span>
      </ul>
    </div>
  </header>

  <div :class="{'hidden':hidden}">
    <ScrollTop></ScrollTop>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ScrollTop from '@/components/layout/ScrollTop.vue';

export default defineComponent({
  name: 'Header',
  props:{
    hidden:{
      type: Boolean,
      default: false
    }
  },
  components:{
    ScrollTop
  },
  methods: {
    logoclick: function(){
      this.$router.push({name: 'home'})
    },
    searchEvent: function(){
      this.$router.push({name:'SearchRoute', params:{'searchdata' : String(this.searchdata), gernename: 'all'}})
    }
  }, 
  data(){
    return{
      menus: [
        {
          name: "이벤트",
          engname: "event",
          submenu: [
            {
              name: "축제&행사",
              path: "FestivalRoute"
            },
            {
              name: "전시",
              path: "ExhibitionRoute"
            }
          ]
        },
        {
          name: "추천",
          engname: "recommendation",
          submenu: [
            {
              name: "테마별 코스",
              path: "ThemeRoute"
            },
            {
              name: "통계별 코스",
              path: "StatisticCourseRoute"
            }
          ]
        },
        {
          name: "여행지",
          engname: "tripsite",
          submenu: [
            {
              name: "명소",
              path: "SightRoute"
            },
            {
              name: "음식",
              path: "FoodRoute"
            },
            {
              name: "엔터테인먼트",
              path: "EntertainmentRoute"
            },
            {
              name: "호텔",
              path: "HotelRoute"
            },
          ]
        },
        {
          name: "여행 정보",
          engname: "tripinfo",
          submenu: [
            {
              name: "공지사항",
              path: "NoticeRoute"
            },
            {
              name: "지도",
              path: "MapRoute"
            },
            {
              name: "가이드북",
              path: "GuidebookRoute"
            },
            {
              name: "날씨",
              path: "WeatherRoute"
            },
          ]
        }
      ],
      searchdata: '',
    }
  }
});
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
ul, li{
  list-style: none;
}
a{
  color: inherit;
  text-decoration: none;
}
a:hover{
  color: rgb(90, 90, 90);
}
.menu_wrap .dept_1{
  z-index: 10;

  width: 100%;
  font-size: 0;
  text-align: center;
  position: fixed;

  background: white;
}
.menu_wrap .dept_1 > li{
  display: inline-block;
  vertical-align: top;
  position: relative;
  
  margin-top:30px;
  padding-bottom: 25px;
  width: 140px;

  font-size: 16pt;
  text-align: center;
}
.menu_wrap .dept_2{
  display: none;
  width: inherit;
  position: absolute;
  top: 97%;
  background: white;
}
.menu_wrap .dept_2 > li{
  font-size: 13pt;
  padding: 10px;
  margin-top:10px;
}
.menu_wrap .dept_1 > li:hover > .dept_2{
  display: block;

  animation-duration: 0.12s;
  animation-name: submenuopen;
  border-top: 5px solid black;
  border-width: 70%;
}

.search_wrap{
  width: 270px;
  border: 2px solid black;
  border-radius: 12px 12px 12px 12px;

  height: 40px;

  margin-top:20px;
  float: right;
  margin-right: 2vw;

  padding: 3px;
}
.search_wrap #input_search{
  width: 85%;
  height: 100%;
  border: none;
  background: rgba(0,0,0,0);

  margin-left:2px;

  font-size: 12pt;
}
.search_wrap #input_search:focus{
  outline: none;
}
.search_wrap #btn_search{
  background: none;
  border: none;
  height: 100%;
  width: 13%;
}
.search_wrap #btn_search svg{
  margin-bottom: 15px;
}

@keyframes submenuopen {
  from{
    border-top:0px solid black;
    display: none;
  }
  to{
    border-top: 5px solid black;
    display: block;
  }
}

.menu_wrap .dept_1 .logoimg{
  width: 7%;
  height: 5%;
  object-fit: fill;

  float: left;

  margin: 10px 0 10px 7%;
}

.menu_wrap .dept_1 .logoimg:hover{
  cursor: pointer;
}

.scrolltop .scrolltopimg {
  width: 100%;
  height: 100%;
}

.scrolltop {
  z-index: 10;

  scroll-behavior: smooth;

  position: fixed;
  right: 0.35%;
  bottom: 2%;
  width: 55px;
  height: 55px;

  display: var(--scrolltopdisplay);
}

.hidden{
  display: none;
}
</style>