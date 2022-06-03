/**
	* @fileName  : ThemeDetailDescription.vue
	* @explain : bplc 웹 사이트 추천의 테마별 코스의 detail page의 내용 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 테마별 코스의 detail page 내용으로 이루어짐
	*/

<template>
    <div class="detailhead">
        <img :src="selecteddata.photopath"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ThemeDetail',
  props:{
      selecteddata:Object
  },
  data(){
      return{
      }
  },
  mounted(){
  },
  
});
</script>

<style scoped>
.detailhead img{
    width: 90%;
    margin: 5% auto 5% auto;
}
</style>
