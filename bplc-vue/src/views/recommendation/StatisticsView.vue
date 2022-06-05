/**
	* @fileName  : StatisticsView.vue
	* @explain : bplc 웹 사이트 추천의 통계별 코스 page
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 통계별 코스 page View / 테마별 코스와 여행지의 각 카테고리의 좋아요 갯수 통계 정보를 나타냄
	*/

<template>
    <div class="chart-content-back">
        <table class="chart-content-list">
            <tr>
                <td v-if="ismain" class="main">
                    <h1>BPLC Statistics</h1>
                    <button @click="chgismain()">See it! >></button>
                </td>
                <td v-else>
                    <StatisticsCard @contents="chgselectedcontents" @cardclicked="chgisdetailtrue"></StatisticsCard>
                </td>
            </tr>
        </table>
        <div v-if="isdetail" class="chart-content-wrap">
            <StatisticsDetail :chartdata="data[selectedcontents]" @exitsclicked="chgisdetailfalse"></StatisticsDetail>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import StatisticsCard from '@/components/recommendation/StatisticsCards.vue'
import StatisticsDetail from '@/components/recommendation/StatisticsDetail.vue'

export default defineComponent({
  name: 'StatisticsView',
  components:{
      StatisticsCard, StatisticsDetail
  },
  data(){
     return{
         ismain:true,
         isdetail:false,
         selectedcontents:"",
         data:{
             theme_course:[],
             sight:[],
             food:[],
             entertainment:[],
             hotel:[]
         },
     }
  },
  mounted(){
      this.getAllData();
  },
  methods:{
      chgismain: function(){
          this.ismain = !this.ismain;
      },
      chgisdetailtrue: function(cardclicked:boolean){
          this.isdetail = cardclicked;
      },
      chgselectedcontents:function(contents:string){
          this.selectedcontents = contents;
      },
      chgisdetailfalse: function(exitsclicked:boolean){
          this.isdetail = exitsclicked;
      },

      getAllData: async function(){
          let getdata = {
             theme_course:[],
             sight:[],
             food:[],
             entertainment:[],
             hotel:[]
         }
          const axios = require('axios').default;
          await axios.get('/dao/recommendation/statistics')
          .then(function (response) {
              getdata = response.data;
          })
          .catch(function (error) {
              console.log(error);
          });

          this.data = getdata;
      }
  }
  
});
</script>
<style scoped>
.chart-content-back{
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, #91EAE4, #86A8E7, #7F7FD5);
    padding: 2%;
}
.chart-content-back .chart-content-list{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0);
}
.chart-content-back .chart-content-list .main{
    background-color: white; 
}
.chart-content-back .chart-content-list td h1{
    font-size: 100pt;
    font-weight: bold;

    text-transform: capitalize;
    white-space: nowrap;
    color:transparent;
    margin:0;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
}

.chart-content-back .chart-content-list td h1::before{
    content: "BPLC Statistics";
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    color: black;

    overflow: hidden;

    animation: typing 3s steps(17);
    /*steps 숫자는 대충 content 길이*/
}

@keyframes typing{
    0% {
        width: 0%;
        border-right:3px solid black;
    }
    40%{
        width: 100%;
    }
    100%{
        border-right: none;
    }
}

.chart-content-back .chart-content-list td button{
    font-size: 30pt;

    color: darkgray;
    background-color: rgba(0,0,0,0);
    border:none;

    margin:0;
    position:absolute;
    top:80%;
    left:50%;
    transform: translate(-50%, -50%);

    animation: floating 1.7s;
}
.chart-content-back .chart-content-list td button:hover{
    cursor: pointer;
    color:gray;
}

@keyframes floating{
    0% {
        color:rgba(0,0,0,0);
        top: 82%;
    }
    70% {
        color:rgba(0,0,0,0);
        top: 82%;
    }
    100%{
        color:darkgray;
        top:80%;
    }
}

.chart-content-back .chart-content-wrap{
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);

    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

</style>