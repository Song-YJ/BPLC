<template>
<div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="통합검색" headdescription="통합검색 예시 사이트임"></ContentsHead>
            <div class="contents">
                <SearchCard :listinfo="lists"></SearchCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import SearchCard from '@/components/search/SearchCard.vue'
  import ContentsHead from '@/components/layout/ContentsHead.vue'

  export default defineComponent({
    name: 'App',
    components:{
      SearchCard, ContentsHead
    },
    data(){
        return{
            lists:[
                {
                    id: "e001",
                    name: "entertainment01",
                    explanation: "entertainment01",
                    photopath: "skyline_luge_busan",
                    category: "entertainment"
                },
                {
                    id: "f001",
                    name: "food01",
                    explanation: "food01",
                    photopath: "cafe_perides",
                    category: "food"
                },
                {
                    id: "s001",
                    name: "sight01",
                    explanation: "sight01",
                    photopath: "ahopsan",
                    category: "sight"
                },
                {
                    id: "h001",
                    name: "hotel01",
                    explanation: "hotel01",
                    photopath: "ananti_hilton_busan",
                    category: "hotel"
                },
                {
                    id: "ex001",
                    name: "exhibition01",
                    explanation: "exhibition01",
                    photopath: "kimseokyoung_ex",
                    category: "exhibition"
                },
                {
                    id: "fe001",
                    name: "festival01",
                    explanation: "festival01",
                    photopath: "int_dance_fe",
                    category: "festival"
                },
                {
                    filename: "gijang_tour",
                    name: "theme01",
                    explanation: "theme01",
                    photopath: "courses001",
                    category: "theme"
                },
                {
                    filename: "gijang_tour",
                    name: "guidebook01",
                    explanation: "guidebook01",
                    photopath: "courses001",
                    category: "guidebook"
                },
                {
                    id: "e002",
                    name: "entertainment01",
                    explanation: "entertainment01",
                    photopath: "skyline_luge_busan",
                    category: "entertainment"
                },
                {
                    id: "f002",
                    name: "food01",
                    explanation: "food01",
                    photopath: "cafe_perides",
                    category: "food"
                },
                {
                    id: "s002",
                    name: "sight01",
                    explanation: "sight01",
                    photopath: "ahopsan",
                    category: "sight"
                },
                {
                    id: "h002",
                    name: "hotel01",
                    explanation: "hotel01",
                    photopath: "ananti_hilton_busan",
                    category: "hotel"
                },
                {
                    id: "ex002",
                    name: "exhibition01",
                    explanation: "exhibition01",
                    photopath: "kimseokyoung_ex",
                    category: "exhibition"
                },
                {
                    id: "fe002",
                    name: "festival01",
                    explanation: "festival01",
                    photopath: "int_dance_fe",
                    category: "festival"
                },
                {
                    filename: "gijang_tour",
                    name: "theme01",
                    explanation: "theme01",
                    photopath: "courses001",
                    category: "theme"
                },
                {
                    filename: "gijang_tour",
                    name: "guidebook01",
                    explanation: "guidebook01",
                    photopath: "courses001",
                    category: "guidebook"
                },
          ]
        }
    }
  });
</script>

<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/entertainment/haeundae_bluelinepark/thumbnail.png);
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