/**
	* @fileName  : App.vue
	* @explain : bplc vue project App
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc vue project의 보여지는 page
	*/

<template>
  <Header></Header>
  <router-view :key="$route.fullPath"></router-view>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '@/components/layout/Header.vue';
  import Likesbtn from '@/components/layout/Likesbtn.vue'

  export default defineComponent({
    name: 'App',
    components:{
      Header, Likesbtn
    },
  });
</script>
<style>
body{
  -ms-overflow-style: none;
  scrollbar-width: none;
}
body::-webkit-scrollbar{
  display: none;
}
</style>