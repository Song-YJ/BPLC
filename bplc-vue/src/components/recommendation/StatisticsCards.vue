/**
	* @fileName  : StatisticsCards.vue
	* @explain : bplc 웹 사이트 추천의 통계별 코스의 card component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 통계별 코스의 page의 card list component
	*/

<template>
<div class="card-wrap-row1">
    <div class="cards" @click="CardClickEvent('theme_course')">
        <div class="face face1">
            <div class="content">
                <h3>테마별 코스 통계</h3>
            </div>
        </div>
        <div class="face face2">
        </div>
    </div>

    <div class="cards" @click="CardClickEvent('sight')">
        <div class="face face1">
            <div class="content">
                <h3>명소 통계</h3>
            </div>
        </div>
        <div class="face face2">
        </div>
    </div>

    <div class="cards" @click="CardClickEvent('food')">
        <div class="face face1">
            <div class="content">
                <h3>음식 통계</h3>
            </div>
        </div>
        <div class="face face2">
        </div>
    </div>
</div>
<div class="card-wrap-row2">
    <div class="cards" @click="CardClickEvent('entertainment')">
        <div class="face face1">
            <div class="content">
                <h3>엔터테인먼트 통계</h3>
            </div>
        </div>
        <div class="face face2">
        </div>
    </div>

    <div class="cards" @click="CardClickEvent('hotel')">
        <div class="face face1">
            <div class="content">
                <h3>호텔 통계</h3>
            </div>
        </div>
        <div class="face face2">
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StatisticsCards',
  emits:['contents','cardclicked'],
  props: {
    data:Array
  },
  data(){
      return{
          
      }
  },
  mounted(){
    
  },
  methods:{
    CardClickEvent: function(content:String){
        this.$emit('contents',content);
        this.$emit('cardclicked',true);
    }
  },
  
});
</script>

<style scoped>

.card-wrap-row1{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 4% auto 4% auto;
    grid-column-gap: 10%;
    width: calc(18rem * 3 + 20%);
}
.card-wrap-row2{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 3% auto 3% auto;
    grid-column-gap: 10%;
    width: calc(18rem * 2 + 10%);
}

.cards{
    position: relative;
    width: 18rem;
    height: 10rem;
    margin: 0 auto 0 auto;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.cards .face{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cards .face.face1{
    box-sizing: border-box;
    padding: 20px;
}
.cards .face.face1 h3{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.cards .face.face2{
    background-size: cover;
    transition: 0.2s;
}
.cards:hover .face.face2{
    height: 2rem;
    cursor: pointer;
}
.cards:hover .face.face1{
    cursor:pointer;
}

.card-wrap-row1 .cards:nth-child(1) .face.face2{
    background-image: url(@/assets/theme/theme_main3.jpg);
}
.card-wrap-row1 .cards:nth-child(2) .face.face2{
    background-image: url(@/assets/sight/Dongnaeeupseong/thumbnail.jpeg);
}
.card-wrap-row1 .cards:nth-child(3) .face.face2{
    background-image: url(@/assets/food/mainback.jpg);
}
.card-wrap-row2 .cards:nth-child(1) .face.face2{
    background-image: url(@/assets/entertainment/haeundae_bluelinepark/thumbnail.png);
}
.card-wrap-row2 .cards:nth-child(2) .face.face2{
    background-image: url(@/assets/hotel/busan_signiel/thumbnail.jpeg);
}
</style>