<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="전시" headdescription="부산에서 진행되는 전시"></ContentsHead>
            <div class="contents">
                
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'

export default defineComponent({
  name: 'ExhibitionView',
  components:{
      ContentsHead
  }
  
});
</script>
<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(https://img.wallpapersafari.com/desktop/1280/1024/74/74/HnAThz.jpg);
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
    height: auto;
    background: white;
}
</style>