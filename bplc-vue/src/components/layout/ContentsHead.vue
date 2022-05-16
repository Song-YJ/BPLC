/**
	* @fileName  : ContentsHead.vue
	* @explain : bplc 웹 사이트 Content의 Head layout
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트의 각 Content의 이름에서 활용가능한 layout component
	*/

<template>
    <div class="contents_head">
        <div class="headname">{{headname}}</div>
        <div class="underline"></div>
        <div class="headdescription">{{headdescription}}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ContentsHead',
  props:{
      headname: String,
      headdescription: String
  }
  
});
</script>

<style scoped>
.contents_head{
    margin-top: 180px;
    margin-bottom: 250px;
    color: white;
}
.contents_head .underline{
    width: 20px;
    height: 1px;
    background: white;

    margin-left: auto;
    margin-right: auto;
    margin-top: 5px;
    margin-bottom: 5px;
}

.contents_head .headname{
    font-size: 55pt;
}
</style>