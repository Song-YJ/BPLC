/**
	* @fileName  : Pagination.vue
	* @explain : bplc 웹 사이트 여행지 page contents 하단 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지 page contents 하단 페이지 component
	*/

<template>
    <nav class="page">
        <ul class="pagination">
            <li class="page-item" id="prev" v-if="PreStatus">
                <router-link class="page-link" aria-label="Previous" :to="{name: routename, params: {'page':curfirstpage - 10}}">
                    <span aria-hidden="true">&laquo;</span>
                </router-link>
            </li>

            <li :class="{'page-item':true, 'active':i.isActive}" :id="i.num" v-for="i in pagelist" :key="i.num">
                <router-link class="page-link" :to="{name: routename, params: {'page': i.num}}">{{i.num}}</router-link>
            </li>
            
            <li class="page-item" id="next" v-if="NextStatus">
                <router-link class="page-link" aria-label="Next" :to="{name: routename, params: {'page':curfirstpage + 10}}">
                    <span aria-hidden="true">&raquo;</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pagination',
  props:{
      listinfo:Object,
      routename:String
  },
  mounted(){
      if(this.listinfo !== undefined){
        this.listnum = this.listinfo.totallistnum as number;
        this.paging();
      }
  },
  data(){
      return {
          listnum: 0,

          curfirstpage: 0,
          curlastpage: 0,
          lastpage: 0,
          PreStatus: false,
          NextStatus: false
      }
  },
  computed:{
      pagelist: function(){
          let pagelist = [{}];

          pagelist.pop();
          let i = 0;
          for(i = this.$data.curfirstpage; i <= this.$data.curlastpage; i++){
              let page = {};
              if(i !== Number(this.$route.params.page)){
                page = {num: i, isActive: false};
              }else{
                  page = {num:i, isActive: true};
              }

              pagelist.push(page);
          }
          return pagelist;
      },
  },
  methods: {
      paging: function(){
        //lastpage를 구함
        let listnum = this.listnum;
        this.lastpage = ~~(Number(listnum) / 8);

        if(this.lastpage <= 0){this.lastpage = 1;}
        else if(Number(listnum) % 8 !== 0){this.lastpage = this.lastpage+1;}

        //현재 페이지를 파라미터로 가져옴
        let curpage = Number(this.$route.params.page);
        if(curpage <= 0){
            this.$router.push({name: this.routename, params: {'page':1}})
        }
        
        //지금 페이지 블럭의 첫 페이지를 구함
        if(curpage % 10 === 0){
            this.curfirstpage = curpage - 9;
        }else{
            this.curfirstpage = curpage - (curpage % 10 - 1);
        }

        //지금 페이지 블럭의 마지막 페이지를 구함
        this.curlastpage = this.curfirstpage + 9;
        if(this.curlastpage > this.lastpage){
            this.curlastpage = this.lastpage;
        }

        //Pre와 Next 활성화 여부
        if(this.curfirstpage > 10){
            this.PreStatus = true;
        }else{
            this.PreStatus = false;
        }

        if(this.curlastpage === this.lastpage){
            this.NextStatus = false;
        }else{
            this.NextStatus = true;
        }
      },
  },

});
</script>

<style scoped>
.pagination{
    justify-content: center;
    margin-top: 2%;
}

.page-item.active .page-link{
    background: #0d6efd;
    border-color: #0d6efd;
}

.page-link{
    color: #0d6efd;
}
</style>