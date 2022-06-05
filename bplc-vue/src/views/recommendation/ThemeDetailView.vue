/**
	* @fileName  : ThemeDetailView.vue
	* @explain : bplc 웹 사이트 추천의 테마별 코스 detail page
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 테마별 코스 리스트에서 항목을 선택하면 항목의 detail page View
	*/

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="테마별 코스" headdescription="테마별 부산 여행 코스 추천"></ContentsHead>
            <div class="contents">
                <Category MainC="추천" SubC="테마별 코스"></Category>
                <div class="detailhead">
                    <p class="categorystr">테마별 코스</p>
                    <h3 class="namestr">{{selecteddatainfo.name}}</h3>
                </div>
                <Likesbtn tablename="theme_course" :id="selecteddatainfo.id"></Likesbtn>
                <ThemeDetailDescription :selecteddata="selecteddatainfo"></ThemeDetailDescription>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Category from '@/components/layout/Catergory.vue'
import ThemeDetailDescription from '@/components/recommendation/ThemeDetailDescription.vue'
import imagepath from '@/assets/images'
import Likesbtn from '@/components/layout/Likesbtn.vue'

export default defineComponent({
  name: 'ThemeView',
  components:{
      ContentsHead, Category, ThemeDetailDescription, Likesbtn
  },
  data(){
      return{
          selecteddatainfo : {}
      }
  },
  mounted(){
      this.getSelectInfo();
  },
  methods:{
      getSelectInfo: async function(){
          let selectedfilename = this.$route.params.filename;
          let sdata = {
              filename: "",
              explanation: "",
              id: "",
              name: "",
              photopath: "",
          };

          const axios = require('axios').default;
          await axios.get('/dao/detail/theme', {
              params: {
                filename: selectedfilename
              }
          })
          .then(function (response) {
              sdata = response.data;
              sdata.photopath = imagepath.theme[sdata.filename];
          })
          .catch(function (error) {
              console.log(error);
          });

          this.selecteddatainfo = sdata;
      }
  }
  
});
</script>
<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/theme/theme_main3.jpg);
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

.detailhead{
    width: 100%;
    text-align: center;
}

.detailhead .categorystr{
    color:#0d6efd;
    margin-top: 2%;
}

</style>