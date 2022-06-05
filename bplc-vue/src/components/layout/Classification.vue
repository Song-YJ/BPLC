/**
	* @fileName  : Classification.vue
	* @explain : bplc 웹 사이트 여행지 page contents 상단 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지 page contents 상단 분류 component(예 / 랜드마크, 자연 등)
	*/

<template>
    <div class="classification">
        <router-link v-for="item in classificationObject" :key="item.engname" :id="item.engname" :to="{name: item.routename, params: {'gernename': item.engname, 'page':1}}" exact>
            {{item.name}}<span style="color:black;" v-if="item.engname !== classificationObject[classificationObject.length-1].engname"> | </span>
        </router-link>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'entertainClassification',
  props:{
      classificationObject:Object
  },
  mounted: function(){
      let curgerne = this.$route.params.gernename;
      let curgerneloc = document.getElementById("" + curgerne);
      
      if(curgerneloc != null){
          curgerneloc.style.color = "#0d6efd";
      }
  }
});
</script>

<style scoped>
.classification{
    margin-top: 10px;
}
.classification a{
    color: black;
    text-decoration: none;
}
</style>