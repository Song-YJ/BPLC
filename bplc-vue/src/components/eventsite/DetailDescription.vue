/**
	* @fileName  : DetailDescription.vue
	* @explain : bplc 웹 사이트 여행지의 각 detail page의 하단 세부 설명과 사진 혹은 지도 component
	* @author : 박혜원 , phw5883@naver.com
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
            <p>{{selecteddata.detail}}</p>
            <table cellpadding=5>
                <tr>
                    <td style="width: 30%">-&nbsp; &nbsp; &nbsp; &nbsp;주소</td>
                    <td style="text-align: center;">{{selecteddata.explanation}}</td>
                </tr>
                <tr v-if="selecteddata.start_date !== null">
                    <td style="width: 30%">-&nbsp; &nbsp; &nbsp; &nbsp;전시일</td>
                    <td style="text-align: center;">{{selecteddata.start_date}} - {{selecteddata.end_date}}</td>
                </tr>    
                <tr v-if="selecteddata.oper_time !== null">
                    <td style="width: 30%">-&nbsp; &nbsp; &nbsp; &nbsp;운영 시간</td>
                    <td style="text-align: center;">{{selecteddata.oper_time}}</td>
                </tr>
                <tr v-if="selecteddata.phone !== null">
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;전화번호</td>
                    <td style="text-align: center;">{{selecteddata.phone}}</td>
                </tr>
                <tr v-if="selecteddata.homepage !== null">
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;홈페이지</td>
                    <td style="text-align: center;">
                        <a target="_blank" :href="selecteddata.homepage">{{selecteddata.homepage}}</a>
                    </td>
                </tr>
                <tr v-if="selecteddata.holiday !== null">
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;휴무일</td>
                    <td style="text-align: center;">{{selecteddata.holiday}}</td>
                </tr>
                <tr v-if="selecteddata.entryfee !== null">
                    <td>-&nbsp; &nbsp; &nbsp; &nbsp;입장료</td>
                    <td style="text-align: center;">{{selecteddata.entryfee}}</td>
                </tr>
            </table>
        </div>
        <div class="detailphotos">
            <img v-for="item in selecteddata.photopath.pictures" :key="item" :src="item"/>
        </div>
    </div>
    <div id="detailmap" v-show="!isinfoselected" style="width:70%;height:400px; margin:0 auto 0 auto">
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
          isinfoselected: true,
      }
  },
  methods:{
      getKakaoMap: function(){

        let mapdiv = document.getElementById('detailmap');
        let placename = this.selecteddata.name;
        
        // 지도를 표시할 div 
        let mapOption = { 
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        var map = new kakao.maps.Map(mapdiv, mapOption); // 지도를 생성합니다

        //주소-좌표 변환 객체
        var geocoder = new kakao.maps.services.Geocoder();

        geocoder.addressSearch(this.selecteddata.explanation, function(result, status){
            // 정상적으로 검색이 완료됐으면 
            if (status === kakao.maps.services.Status.OK) {
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: coords
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                var infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">' + placename + '</div>'
                });
                infowindow.open(map, marker);

                map.relayout();

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
            } 
        });
      },
      chgdetailmenuselect_info: function(){
          this.isinfoselected = true;
      },
      chgdetailmenuselect_map: function(){
          this.isinfoselected = false;
          this.getKakaoMap();
      },
  },
  mounted(){
      if(window.kakao && window.kakao.maps){
          this.getKakaoMap();
      }else{

        const script = document.createElement('script');

        /* global kakao */
        script.onload = () => kakao.maps.load(this.initMap);
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAOMAP_KEY}&libraries=services`;
        document.head.appendChild(script);
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

.detaildes p{
    font-family: "맑은 고딕", Georgia, serif;
    line-height: 170%;
    width: 60%;
    margin: 0 auto 0 auto;
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
