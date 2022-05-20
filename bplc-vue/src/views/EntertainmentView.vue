/**
	* @fileName  : EntertainmentView.vue
	* @explain : bplc 웹 사이트 여행지의 엔터테인먼트 page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 엔터테인먼트 page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="엔터테인먼트" headdescription="부산의 즐길거리"></ContentsHead>
            <div class="contents">
                <Classification></Classification>
                <div class="card_container">
                    <Cards></Cards>
                </div>
                <Pagination></Pagination>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Cards from '@/components/entertainment/Cards.vue'
import Classification from '@/components/entertainment/Classification.vue'
import Pagination from '@/components/entertainment/Pagination.vue'

export default defineComponent({
  name: 'EntertainmentView',
  components:{
      ContentsHead, Cards, Classification, Pagination
  },
  
});
</script>
<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/entertainment/songdo_cablecar.jpg);
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

.contents_wrap .card_container{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>