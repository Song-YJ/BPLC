/**
	* @fileName  : DetailHead.vue
	* @explain : bplc 웹 사이트 여행지의 각 detail page의 제목 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 각 detail page 제목 component로 분류(예/ 명소), 이름(예/ 광안대교), 설명(예/ 주소)로 이루어짐.
	*/

<template>
    <div class="detailhead">
        <p class="categorystr">{{category}}</p>
        <h3 class="namestr">{{selecteddata.name}}</h3>
        <p class="explanationstr">{{selecteddata.address}}</p>
        <img :src="selecteddata.photopath.thumbnail"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailHead',
  props:{
      category:String,
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
.detailhead{
    width: 100%;
    text-align: center;
}

.detailhead .categorystr{
    color:#0d6efd;
    margin-top: 2%;
}

.detailhead img{
    width: 50%;
    margin: 5% auto 5% auto;
}
</style>
