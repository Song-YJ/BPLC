/**
   * @fileName  : NoticeView.vue
   * @explain : bplc 웹 사이트 여행정보의 공지사항 page
   * @author : 박혜원 , phw5883@naver.com
   * 부가 설명 : bplc 웹 사이트 여행정보의 공지사항 page View
   */

<template>
    <div class="contents_back">
        <div class="contents_wrap">
            <ContentsHead headname="공지사항" headdescription="공지사항 및 공모전 정보 안내"></ContentsHead>
            <div :class="{'contents':true, 'dataloading':listinfo.totallistnum <= 0}">
                <Catergory MainC="여행정보" SubC="공지사항"></Catergory>
                <button id="modal_id" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" style="display:none;"></button>
                <div class="table_container" v-if="listinfo.totallistnum > 0">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th style="width: 15%">No.</th>
                                <th style="width: 70%">제목</th>
                                <th style="width: 15%">작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in getLists()" :key="item.no" @click="detailClick(item.no)">
                                <td>{{item.no}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.writeday}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="listinfo.totallistnum > 0">
                    <Pagination :listinfo="listinfo"
                    routename="NoticeRouteParams"></Pagination>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{modalinfo.title}}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">작성일</label>
                        <input type="text" class="form-control" id="recipient-name" :value="modalinfo.writeday">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">내용</label>
                        <textarea style="height: 30vh;" class="form-control" id="message-text" :value="modalinfo.contents"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import ContentsHead from '@/components/layout/ContentsHead.vue'
import Catergory from '@/components/layout/Catergory.vue'
import Pagination from '@/components/layout/Pagination.vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
    name: 'NoticeView',
    components:{
        ContentsHead, Catergory, Pagination
    },
    data(){
        return{
            listinfo: {
                totallistnum: 0,
                category: "notice",
                lists: [{
                    no: "",
                    title: "",
                    writeday: "",
                    contents: ""
            }]
            },
            modalinfo: {
                no: "",
                title: "",
                writeday: "",
                contents: ""
            }
        }
    },
    mounted(){
        this.getListInfo();   
    },
    methods:{
        getLists: function(){
            let lists = [{
                    no: "",
                    title: "",
                    writeday: "",    
                }];
            lists.pop();
            if(this.listinfo !== undefined){
                 let curpage = Number(this.$route.params.page);

                 for(let i = (curpage-1)*8; i<(curpage-1)*8+8; i++){
                     if(i < this.listinfo.lists.length){
                        lists.push(this.listinfo.lists[i]);
                    }
                }
            }

            return lists;
        },
        detailClick: function(idnum:String){
            for(let i=0; i<(this.listinfo.totallistnum); i++){
                if(this.listinfo.lists[i].no==idnum){
                    this.modalinfo=this.listinfo.lists[i];
                }
            }
            document.getElementById("modal_id")?.click();
        },
        getListInfo: async function(){
            let tln = 0;
            let ls = [];
        
            //axios
            const axios = require('axios').default;
          
            await axios.get('/dao/notice')
            .then(function (response) {
                tln = response.data.totallistnum;
                ls = response.data.lists;
            })
            .catch(function (error) {
                console.log(error);
            });

            this.listinfo.totallistnum = tln;
            this.listinfo.lists = ls;
        }
    }
});
</script>
<style scoped>
.contents_back{
  background: white;

  background-image: linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ),url(@/assets/notice/title/title.jpg);
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

    text-align: left;
}

.contents_back .contents_wrap .dataloading{
    height: 110vh;
}

.table{
    width:90%;
    margin:2% auto 2% auto;
    text-align: center;
    font-size: 13pt;
}
.modal-dialog {
    max-width: 1000px;
    margin: 1.75rem auto;
}
</style>