/**
	* @fileName  : StatisticsCards.vue
	* @explain : bplc 웹 사이트 추천의 통계별 코스의 card component
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : bplc 웹 사이트 추천의 통계별 코스의 page의 card list component
	*/

<template>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
<div class="chart-content">
    <div class="x-btn" @click="ExitsClickedEvent()">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="darkgray" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
    </div>
    <div class="contents-wrap">
        <div class="chart" id="chart-area">
            <canvas id="drawchart" width="500" height="500"></canvas>
        </div>
        <div class="ranking-table">
            <table cellspacing="20">
                <tr v-for="item in chartdata.lists" :key="item.id">
                    <td style="font-weight:bold;">{{item.ranking}}</td>
                    <td @click="ViewDetail(item.id)" class="ranking-name">{{item.name}}</td>
                    <td style="font-style:italic;">{{item.likes}}</td>
                </tr>
            </table>
        </div>
    </div>
    <div class="explain">
        <pre>- 좌측 그래프는 '좋아요'가 많이 눌린 순으로 5위까지 나타내며, 동석차인 경우 가나다순으로 나열하여 5위까지 나타내었습니다
- 그래프에서 좋아요 수가 0개인 것은 제외하였고(이에따라 그래프가 보이지 않을 수 있습니다.) 또한 그래프는 5위까지의 상대적인 수치를 나타냄을 알려드립니다
- 우측은 해당 카테고리의 총 좋아요 순을 나타내며, 동석차는 가나다순 나열하였고 이름 클릭 시 이전 창에 해당 컨텐츠를 소개하는 페이지가 띄워집니다.</pre>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

export default defineComponent({
  name: 'StatisticsCards',
  emits:['exitsclicked'],
  props: {
    chartdata:Object
  },
  mounted(){
      this.getChart();
  },
  methods:{
    ExitsClickedEvent: function(){
        this.$emit('exitsclicked',false);
    },
    ViewDetail: function(id:string){
        if(this.chartdata !== undefined){
            opener.location.href = this.chartdata.url + id
        }
    },
    getChart(){
        if(this.chartdata !== undefined){
            let areadiv = document.getElementById("chart-area");
            if(areadiv !== null){
                areadiv.removeChild(areadiv.childNodes[0]);
                areadiv.innerHTML = "<canvas id='drawchart' width='500' height='500'></canvas>"
            }

            let chartAreadom = document.getElementById('drawchart') as HTMLCanvasElement | null;
            let chartArea = chartAreadom?.getContext('2d');

            let chartdatas = [{
                id: "",
                name: "",
                likes: 0,
                ranking: 0
            }]
            let i = 0;
            chartdatas.pop();
            this.chartdata.lists.forEach(element => {
                if(i < 5){
                    if(element.likes == 0){
                        i = 10;
                    }else{
                        chartdatas.push(element);
                        i += 1;
                    }
                }
            });

            let chartlabels = [""];
            chartlabels.pop();

            let chartdatavalue = [0];
            chartdatavalue.pop();

            let charttotal = 0;

            chartdatas.forEach(element => {
                chartlabels.push(element.name);
                chartdatavalue.push(element.likes);
                charttotal += element.likes;
            })

            if(chartArea !== undefined && chartArea !== null && chartdatavalue.length > 0){
                chartArea.clearRect(0,0,500,500);
                let myChart = new Chart(chartArea, {
                    type: 'pie',
                    data: {
                        labels: chartlabels,
                        datasets: [
                            {
                                label: "likes ranking",
                                backgroundColor: ["#7F7FD5", "#86A8E7","#91EAE4","#FBC7D4","#B3A4E8"],
                                data: chartdatavalue
                            }
                        ]
                    },
                    options:{
                        plugins:{
                            title:{
                                display: true,
                                text: "순위의 총 좋아요 수 " + charttotal + "개 / 총 좋아요 수 " + this.chartdata.totallikes + "개의 상대 비율",
                                font: {
                                    size: 20
                                }
                            },
                            legend:{
                                display: false
                            }
                        }
                    }
                });
            }
        }
    }
  },
  
});
</script>

<style scoped>
.chart-content{
    width:95%;
    height:95%;
    background-color: white;
    margin: 0 auto 0 auto;
    border-radius: 15px;

    animation:contentbox-floating 0.3s;
}
.chart-content .x-btn{
    float: right;
    padding: 1%;
}
.chart-content .x-btn svg:hover{
    cursor: pointer;
    fill: gray;
}

@keyframes contentbox-floating {
    0% {
        opacity: 0.7;
        margin-top: 2%;
    }
    100% {
        opacity: 1;
        margin-top: 0;
    }    
}

.chart-content .explain{
    border: 1px solid darkgray;
    border-radius: 10px;
    margin: 1% auto 1% auto;
    width: 95%;

    padding: 0.5% 2% 0.5% 2%;
}
.chart-content .explain pre{
    font-size: 14pt;
    font-family: 'Nanum Gothic', sans-serif;
    color:rgb(100, 100, 100);
    line-height: 25pt;

    margin: 0;
}

.chart-content .contents-wrap{
    display: flex;
    justify-content: center;
    align-items: center;

    height: 70%;
    width: 100%;
}

.chart-content .contents-wrap .ranking-table{
    overflow: auto;
    height: 70%;
    width:fit-content;
    margin: 2%;
}
.chart-content .contents-wrap .ranking-table table{
    font-family: 'Nanum Gothic', sans-serif;
    font-size: 17pt;
    text-align: center;
    color:rgb(100, 100, 100);

    border-collapse: separate;
}

.chart-content .contents-wrap .ranking-table table .ranking-name:hover{
    cursor: pointer;
}

.chart-content .contents-wrap .chart{
    margin-right: 7%;
}
</style>