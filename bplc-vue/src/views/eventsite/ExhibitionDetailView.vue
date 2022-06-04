/**
   * @fileName  : ExhibitionDetailView.vue
   * @explain : bplc 웹 사이트 이벤트의 전시 detail page
   * @author : 박혜원 , phw5883@naver.com
   * 부가 설명 : bplc 웹 사이트 이벤트의 전시 리스트에서 항목을 선택하면 항목의 detail page View
   */

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="전시" headdescription="부산의 전시회"></ContentsHead>
            <div class="contents">
                <Category MainC="이벤트" SubC="전시"></Category>
                <DetailHead category="전시" :selecteddata="selecteddatainfo"></DetailHead>
                <DetailDescription :selecteddata="selecteddatainfo"></DetailDescription>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Category from '@/components/layout/Catergory.vue'
import DetailHead from '@/components/eventsite/DetailHead.vue'
import DetailDescription from '@/components/eventsite/DetailDescription.vue'
import imagepath from '@/assets/images'

export default defineComponent({
  name: 'ExhibitionView',
  components:{
      ContentsHead, Category, DetailHead, DetailDescription
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
          let selectedid = this.$route.params.id;
          let sdata = {
              detail: "",
              explanation: "",
              start_date: "",
              end_date: "",
              holiday: "",
              homepage: "",
              id: "",
              name: "",
              oper_time: "",
              phone: "",
              photopath: "",
              entryfee: ""
          };

          const axios = require('axios').default;
          await axios.get('/dao/detail/exhibition', {
              params: {
                id: selectedid
              }
          })
          .then(function (response) {
              sdata = response.data;
              sdata.photopath = imagepath.exhibition[sdata.photopath];
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

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/exhibition/exhibition_title_pic.jpg);
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
</style>