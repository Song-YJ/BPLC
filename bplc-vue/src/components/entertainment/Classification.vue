/**
	* @fileName  : Classification.vue
	* @explain : bplc 웹 사이트 여행지의 엔터테인먼트 page contents 상단 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 엔터테인먼트 page contents 상단 현재위치, 분류 component
	*/

<template>
    <div class="classification">
        <div class="location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
            </svg> > 여행지 > 명소
        </div>
        <div class="gerne">
            <router-link id="entertainall" :to="{name: 'EntertainmentRouteParams', params: {'gernename': 'all', 'page':1}}" exact>전체</router-link> |
            <router-link id="entertainoutdoor" :to="{name: 'EntertainmentRouteParams', params: {'gernename': 'outdoor', 'page':1}}" exact>실내</router-link> |
            <router-link id="entertainindoor" :to="{name: 'EntertainmentRouteParams', params: {'gernename': 'indoor', 'page':1}}" exact>실외</router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'entertainClassfication',
  mounted: function(){
      let curgerne = this.$route.params.gernename;
      let curgerneloc = document.getElementById("entertain"+curgerne);
      
      if(curgerneloc != null){
          curgerneloc.style.color = "#0d6efd";
      }
  }
});
</script>

<style scoped>
.classification{
    margin: 0px 30px 0px 30px;
}

.classification .gerne{
    margin-top: 10px;
}
.classification .gerne a{
    color: black;
    text-decoration: none;
}
</style>