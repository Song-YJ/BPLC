/**
	* @fileName  : HomeView.vue
	* @explain : bplc 웹 사이트의 main page
	* @author : 배민경 , bmg1203@naver.com
	* 부가 설명 : bplc 웹 사이트의 main page로 이미지가 움직이는 베너 형태의 page
	*/

<template @scroll.passive=false>
<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/main/m1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/main/m2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/main/m3.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="@/assets/main/m4.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

});
</script>

<style scoped>
#carouselExampleControls .w-100 {
  height: 100vh;
}

template {
  overflow: hidden;
}
</style>