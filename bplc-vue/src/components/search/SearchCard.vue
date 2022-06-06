/**
	* @fileName  : SearchCard.vue
	* @explain : bplc 웹 사이트 통합검색의 Card
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 통합검색의 검색 결과를 나타내는 Card component
	*/

<template>
<div class="swiper_area">
    <swiper :style="{
        '--swiper-navigation-color': 'gray',
      }" :slidesPerView="4" :spaceBetween="20" :slidesPerGroup="4"
    :loop="true" :loopFillGroupWithBlank="true" :navigation="true" :modules="modules" class="mySwiper">

        <swiper-slide v-for="item in lists" :key="item.id">
            <div v-if="item.category === 'entertainment'">
                <div class="card" @click="detailClick('EntertainmentDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'food'">
                <div class="card" @click="detailClick('FoodDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'sight'">
                <div class="card" @click="detailClick('SightDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'hotel'">
                <div class="card" @click="detailClick('HotelDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'theme'">
                <div class="card" @click="themeDetailClick('ThemeDetailRoute', item.filename)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'exhibition'">
                <div class="card" @click="detailClick('ExhibitionDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'festival'">
                <div class="card" @click="detailClick('FestivalDetailRoute', item.id)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>

            <div v-if="item.category === 'guidebook'">
                <div class="card" @click="guidebookDetailClick(item.filename)">
                    <img :src="item.photopath" class="card-img" alt="loading failed">
                    <div class="card-img-overlay">
                        <p class="card-title">{{item.name}}</p>
                        <p class="card-text">{{item.explanation}}</p>
                    </div>
                </div>
            </div>
        </swiper-slide>

    </swiper>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import imagepath from '@/assets/images';

//Swiper
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default defineComponent({
  name: 'SearchCard',
  props: {
    listinfo:Object,
  },
  components: {
    Swiper, SwiperSlide
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
  data(){
      return{
          lists: []
      }
  },
  mounted(){
    this.getLists();
  },
  methods:{
    getLists: function(){
        this.lists = this.listinfo;
        this.lists.forEach(element => {
            if(element.category === "guidebook" || element.category === "theme"){
                element.photopath = imagepath[element.category][element.photopath]
            }else{
                element.photopath = imagepath[element.category][element.photopath].thumbnail
            }
        });
    },
    detailClick: function(routename, idnum){
      this.$router.push({name: routename, params: {'id':String(idnum)}});
    },
    themeDetailClick: function(routename, idnum){
      this.$router.push({name: routename, params: {'filename':String(idnum)}});
    },
    guidebookDetailClick: function(filename){
      location.href="/download/guidebook?filename=" + filename;
    }
  },
  
});
</script>

<style scoped>
/*swiper */
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: fit-content;
    margin: 20px auto;
}

.swiper-button-prev, .swiper-button-next {
  --swiper-theme-color: #000000;
}

/*cards */
.card{
    width:90%;
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
    object-fit: fill;
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