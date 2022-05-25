/**
	* @fileName  : DetailDescription.vue
	* @explain : bplc 웹 사이트 여행지의 각 detail page의 하단 세부 설명과 사진 혹은 지도 component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 여행지의 각 detail page 하단 해당 세부 설명과 사진 혹은 지도 component
	*/

<template>
    <div class="detailmenu_wrap">
        <div :class="{'detailmenu':true, 'active': isinfoselected}" @click="chgdetailmenuselect_info()">상세정보</div>
        <div :class="{'detailmenu':true, 'active': !isinfoselected}" @click="chgdetailmenuselect_map()">지도</div>
        <hr/>
    </div>
    <div v-if="isinfoselected" class="detaildes">
        <div class="detailinfo">
            <pre>{{selecteddata.explanation}}</pre>
            <table cellpadding=5>
                <tr>
                    <td style="width: 30%">-&nbsp; &nbsp; &nbsp; &nbsp;운영 시간</td>
                    <td style="text-align: center;">{{selecteddata.opertime}}</td>
                </tr>
                <tr>
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;전화번호</td>
                    <td style="text-align: center;">{{selecteddata.phone}}</td>
                </tr>
                <tr>
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;홈페이지</td>
                    <td style="text-align: center;">
                        <a target="_blank" :href="selecteddata.homepage">{{selecteddata.homepage}}</a>
                    </td>
                </tr>
                <tr>
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;휴무일</td>
                    <td style="text-align: center;">{{selecteddata.holiday}}</td>
                </tr>
                <tr>
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;입장료</td>
                    <td style="text-align: center;">{{selecteddata.entryfee}}</td>
                </tr>
            </table>
        </div>
        <div class="detailphotos">
            <img v-for="item in selecteddata.photopath.pictures" :key="item" :src="item"/>
        </div>
    </div>
    <div id="detailmap" v-if="!isinfoselected">
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DetailPhotos',
  props:{
      selecteddata:Object
  },
  data(){
      return{
          isinfoselected: true
      }
  },
  methods:{
      chgdetailmenuselect_info: function(){
          this.isinfoselected = true;
      },
      chgdetailmenuselect_map: function(){
          this.isinfoselected = false;  
      }
  }
  
});
</script>

<style scoped>
.detailmenu_wrap{
    width: 70%;
    margin: 2% auto 0 auto;
}

.detailmenu_wrap .detailmenu{
    cursor: pointer;
    display: inline-block;
    margin: 0 15% 0 15%;
    width: 20%;
    text-align: center;
}

.detailmenu_wrap .active{
    border-bottom: 3px solid black;
    padding-bottom: 1rem;
}

.detailmenu_wrap hr{
    margin-top: 0;
}

.detaildes{
    width: 100%;
    text-align: center;
}

.detaildes pre{
    font-family: "맑은 고딕", Georgia, serif;
    line-height: 170%;
}

.detaildes table{
    margin: 5% auto 0 auto;
    width: 50%;
    text-align: left;
}

.detailphotos img{
    display: block;
    width: 50%;
    margin: 5% auto 5% auto;
}
</style>
