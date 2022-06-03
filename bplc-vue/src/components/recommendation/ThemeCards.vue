/**
	* @fileName  : ThemeCards.vue
	* @explain : bplc 웹 사이트 추천의 테마별 추천 page card component
	* @author : 배민경, bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 테마별 추천 page의 card list component
	*/

<template>
  <div class="card" v-for="listitem in lists" :key="listitem.id" @click="detailClick(listitem.filename)">
    <img :src="listitem.photopath" class="card-img" alt="loading failed">
    <div class="card-img-overlay">
        <p class="card-title">{{listitem.name}}</p>
        <p class="card-text">{{listitem.explanation}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import imagepath from '@/assets/images';

export default defineComponent({
  name: 'ThemeCards',
  props: {
    listinfo:Object,
    routename:String
  },
  data(){
      return{
          lists: [{
            id: "",
            name: "",
            explanation: "",
            photopath: "",
            filename: ""
          }]
      }
  },
  mounted(){
    this.lists.pop();
    this.getLists();
  },
  methods:{
    getLists: function(){

      if(this.listinfo !== undefined){
        let curpage = Number(this.$route.params.page);

        for(let i = (curpage-1)*8; i<(curpage-1)*8+8; i++){
          if(i < this.listinfo.lists.length){
            this.lists.push(this.listinfo.lists[i]);
          }
        }
      }

      this.lists.forEach(element => {
        if(this.listinfo !== undefined){
          element.photopath = imagepath[this.listinfo.category][element.photopath];
        }
      });
    },
    detailClick: function(idnum:String){
      this.$router.push({name: this.routename, params: {'filename':String(idnum)}});
      //location.href="/dao/themeDetail/" + filename + ".pdf";
      //window.open(location.href="product.attachedFile.fileUrl");
      //window.open("/dao/detail/theme?filename="+filename);
    }
  },
  
});
</script>

<style scoped>
.card{
    width:80%;
    height:300px;
    margin : 5% auto 4% auto;

    border: none;

    text-align: center;
}

.card:hover{
    box-shadow: 4px 4px 4px gray;
    cursor:pointer;
}

.card img{
    height: 100%;
}

.card .card-img-overlay{
    background: white;
    width: 90%;
    height: 30%;

    margin-left:auto;
    margin-right:auto;
    margin-top: auto;

    padding: 5px;

    border-radius: calc(.25rem - 3px) calc(.25rem - 3px) 0 0;
}

.card .card-img-overlay .card-title{
    font-size: 12pt;
    font-weight: bold;
}
.card .card-img-overlay .card-text{
    font-size: 10pt;
}

</style>