/**
	* @fileName  : StatisticsCards.vue
	* @explain : bplc 웹 사이트 추천의 통계별 코스의 card component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 통계별 코스의 page의 card list component
	*/

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
<div class="chart-content">
    <div class="x-btn" @click="ExitsClickedEvent()">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="darkgray" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
    </div>
    <div class="contents-wrap">
        <div class="chart"></div>
        <div class="ranking-table"></div>
    </div>
    <div class="explain">
        <pre>- 좌측 그래프는 '좋아요'가 많이 눌린 순으로 5위까지 나타내며, 동석차인 경우 가나다순으로 나열하여 5위까지 나타내었습니다
- 우측은 해당 카테고리의 총 좋아요 순을 나타내며, 동석차는 가나다순으로 나열하였고 클릭 시 이전 창에 해당 컨텐츠를 소개하는 페이지가 띄워집니다.</pre>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatisticsCards',
  emits:['exitsclicked'],
  props: {
    
  },
  data(){
      return{
          
      }
  },
  mounted(){
    
  },
  methods:{
    ExitsClickedEvent: function(){
        this.$emit('exitsclicked',false);
    }
  },
  
});
</script>

<style scoped>
.chart-content{
    width:95%;
    height:95%;
    background-color: white;
    margin: 0 auto 0 auto;
    border-radius: 15px;

    animation:contentbox-floating 0.3s;
}
.chart-content .x-btn{
    float: right;
    padding: 1%;
}
.chart-content .x-btn svg:hover{
    cursor: pointer;
    fill: gray;
}

@keyframes contentbox-floating {
    0% {
        opacity: 0.7;
        margin-top: 2%;
    }
    100% {
        opacity: 1;
        margin-top: 0;
    }    
}

.chart-content .explain{
    margin: 1% auto 1% auto;
    width: 90%;
}
.chart-content .explain pre{
    font-size: 14pt;
    font-family: 'Nanum Gothic', sans-serif;
    color:rgb(100, 100, 100);
    line-height: 25pt;
}

.chart-content .contents-wrap{
    height: 85%;
    width: 100%;
}
</style>