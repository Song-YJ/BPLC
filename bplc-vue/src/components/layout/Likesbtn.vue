/**
	* @fileName  : Likesbtn.vue
	* @explain : bplc 웹 사이트 Likes 버튼 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 통계를 위한 코스의 좋아요 버튼 component
	*/

<template>
<div class="likesbtn">
  <div :class="{'heart':!likesclicked, 'animation-heart':likesclicked}" @click="likesclickevent"></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Likesbtn',
  props: {
    tablename: String,
    id: String
  },
  data(){
      return{
          likesclicked: false
      }
  },
  mounted(){
    
  },
  methods:{
      likesclickevent: function(){
          if(this.likesclicked === false){
            this.likesclicked = true;

            const axios = require('axios').default;
            axios.get('/dao/likes', {
                params: {
                    id: this.id,
                    tablename: this.tablename
                }
            })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
          }else{
            this.likesclicked = false;

            const axios = require('axios').default;
            axios.get('/dao/likescancel', {
                params: {
                    id: this.id,
                    tablename: this.tablename
                }
            })
            .then(function (response) {
            })
            .catch(function (error) {
                console.log(error);
            });
          }
      }
  }
});
</script>

<style scoped>
.likesbtn{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: white;

    margin: 0 15% 0 auto;
}
.heart{
    position: relative;
    height: 20px;
    width: 20px;
    background: #c9c9c9;
    display: flex;
    justify-content: center;
    text-align: center;
    border-radius: 0 0 0 10px;
    transform: rotate(-45deg);
    cursor: pointer;
}
.heart.fill-color{
    background-color: #ff2727;
}
.heart::before{
    position: absolute;
    content: "";
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
}
.heart::after{
    position: absolute;
    content: "";
    right: -50%;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
}

.animation-heart{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #ff2727;
    transform: rotate(-45deg);
    border-radius: 0 0 0 10px;
    animation: popup .4s linear;
}
.animation-heart::after{
    position: absolute;
    content: "";
    right: -50%;
    top: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
}
.animation-heart::before{
    position: absolute;
    content: "";
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: 50%;
}
@keyframes popup {
    100%{
        transform: scale(1.2) rotate(-45deg);
        opacity: 0;
    }
}
</style>