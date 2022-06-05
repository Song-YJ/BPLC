/**
	* @fileName  : ScroppTop.vue
	* @explain : 페이지를 맨위로 올려주는 component
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : 화살표 아이콘 클릭시 페이지를 맨위로 올려주는 component
	*/

<template>
    <div class="scrolltop">
        <img class="scrolltopimg" src="@/assets/scrolltop.png" @click="moveup()"/>
    </div>npm
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    //name: 'ScrollTop',
    methods: {
    moveup: function() { //맨위로 올라가는 버튼 클릭시 맨위로 위치를 옮겨주는 함수
      window.scrollTo(0, 0);
      //맨위에선 없애고 싶었으나 해결하지 못함
      //const style = document.documentElement.style;

      /*if (window.scrollY <= 90) {
        style.setProperty('--scrolltopdisplay', "none");
      }
      else {
        style.setProperty('--scrolltopdisplay', "block");
      }*/
    }
  }
})
</script>

<style scoped>
.scrolltop .scrolltopimg {
  width: 100%;
  height: 100%;
}

.scrolltop {
  z-index: 10;

  scroll-behavior: smooth;

  position: fixed;
  right: 0.35%;
  bottom: 2%;
  width: 55px;
  height: 55px;

  display: var(--scrolltopdisplay);
}
</style>