"use strict";(self["webpackChunkbplc_vue"]=self["webpackChunkbplc_vue"]||[]).push([[909],{9025:function(e,t,a){a.r(t),a.d(t,{default:function(){return le}});var n=a(6252),d={class:"contents_back"},l={class:"contents_wrap"},i={class:"contents"};function s(e,t,a,s,c,o){var r=(0,n.up)("ContentsHead"),p=(0,n.up)("Category"),u=(0,n.up)("DetailHead"),h=(0,n.up)("DetailDescription");return(0,n.wg)(),(0,n.iD)("div",d,[(0,n._)("div",l,[(0,n.Wm)(r,{headname:"전시",headdescription:"부산의 전시회"}),(0,n._)("div",i,[(0,n.Wm)(p,{MainC:"이벤트",SubC:"전시"}),(0,n.Wm)(u,{category:"전시",selecteddata:e.selecteddatainfo},null,8,["selecteddata"]),(0,n.Wm)(h,{selecteddata:e.selecteddatainfo},null,8,["selecteddata"])])])])}var c=a(655),o=a(359),r=a(673),p=a(3577);const u={class:"detailhead"},h={class:"categorystr"},m={class:"namestr"},_=["src"];function g(e,t,a,d,l,i){return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("p",h,(0,p.zw)(e.category),1),(0,n._)("h3",m,(0,p.zw)(e.selecteddata.name),1),(0,n._)("img",{src:e.selecteddata.photopath.thumbnail},null,8,_)])}var k=(0,n.aZ)({name:"DetailHead",props:{category:String,selecteddata:Object},data(){return{}},mounted(){}}),f=a(3744);const w=(0,f.Z)(k,[["render",g],["__scopeId","data-v-29d7c915"]]);var v=w,y=a(9963);const b=e=>((0,n.dD)("data-v-75b5b1c8"),e=e(),(0,n.Cn)(),e),D={class:"detailmenu_wrap"},x=b((()=>(0,n._)("hr",null,null,-1))),C={key:0,class:"detaildes"},z={class:"detailinfo"},Z={cellpadding:"5"},q=b((()=>(0,n._)("td",{style:{width:"30%"}},"-       주소",-1))),H={style:{"text-align":"center"}},I={key:0},M=b((()=>(0,n._)("td",{style:{width:"30%"}},"-       전시일",-1))),S={style:{"text-align":"center"}},K={key:1},W=b((()=>(0,n._)("td",{style:{width:"30%"}},"-       운영 시간",-1))),L={style:{"text-align":"center"}},j={key:2},E=b((()=>(0,n._)("td",null,"-       전화번호",-1))),O={style:{"text-align":"center"}},G={key:3},Y=b((()=>(0,n._)("td",null,"-       홈페이지",-1))),B={style:{"text-align":"center"}},F=["href"],J={key:4},P=b((()=>(0,n._)("td",null,"-       휴무일",-1))),V={style:{"text-align":"center"}},$={key:5},A=b((()=>(0,n._)("td",null,"-       입장료",-1))),N={style:{"text-align":"center"}},Q={class:"detailphotos"},R=["src"],T={id:"detailmap",style:{width:"70%",height:"400px",margin:"0 auto 0 auto"}};function U(e,t,a,d,l,i){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",D,[(0,n._)("div",{class:(0,p.C_)({detailmenu:!0,active:e.isinfoselected}),onClick:t[0]||(t[0]=t=>e.chgdetailmenuselect_info())},"상세정보",2),(0,n._)("div",{class:(0,p.C_)({detailmenu:!0,active:!e.isinfoselected}),onClick:t[1]||(t[1]=t=>e.chgdetailmenuselect_map())},"지도",2),x]),e.isinfoselected?((0,n.wg)(),(0,n.iD)("div",C,[(0,n._)("div",z,[(0,n._)("p",null,(0,p.zw)(e.selecteddata.detail),1),(0,n._)("table",Z,[(0,n._)("tr",null,[q,(0,n._)("td",H,(0,p.zw)(e.selecteddata.address),1)]),null!==e.selecteddata.explanation?((0,n.wg)(),(0,n.iD)("tr",I,[M,(0,n._)("td",S,(0,p.zw)(e.selecteddata.explanation),1)])):(0,n.kq)("",!0),null!==e.selecteddata.oper_time?((0,n.wg)(),(0,n.iD)("tr",K,[W,(0,n._)("td",L,(0,p.zw)(e.selecteddata.oper_time),1)])):(0,n.kq)("",!0),null!==e.selecteddata.phone?((0,n.wg)(),(0,n.iD)("tr",j,[E,(0,n._)("td",O,(0,p.zw)(e.selecteddata.phone),1)])):(0,n.kq)("",!0),null!==e.selecteddata.homepage?((0,n.wg)(),(0,n.iD)("tr",G,[Y,(0,n._)("td",B,[(0,n._)("a",{target:"_blank",href:e.selecteddata.homepage},(0,p.zw)(e.selecteddata.homepage),9,F)])])):(0,n.kq)("",!0),null!==e.selecteddata.holiday?((0,n.wg)(),(0,n.iD)("tr",J,[P,(0,n._)("td",V,(0,p.zw)(e.selecteddata.holiday),1)])):(0,n.kq)("",!0),null!==e.selecteddata.entryfee?((0,n.wg)(),(0,n.iD)("tr",$,[A,(0,n._)("td",N,(0,p.zw)(e.selecteddata.entryfee),1)])):(0,n.kq)("",!0)])]),(0,n._)("div",Q,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.selecteddata.photopath.pictures,(e=>((0,n.wg)(),(0,n.iD)("img",{key:e,src:e},null,8,R)))),128))])])):(0,n.kq)("",!0),(0,n.wy)((0,n._)("div",T,null,512),[[y.F8,!e.isinfoselected]])],64)}var X=(0,n.aZ)({name:"DetailPhotos",props:{selecteddata:Object},data(){return{isinfoselected:!0}},methods:{getKakaoMap:function(){let e=document.getElementById("detailmap"),t=this.selecteddata.name,a={center:new kakao.maps.LatLng(33.450701,126.570667),level:3};var n=new kakao.maps.Map(e,a),d=new kakao.maps.services.Geocoder;d.addressSearch(this.selecteddata.address,(function(e,a){if(a===kakao.maps.services.Status.OK){var d=new kakao.maps.LatLng(e[0].y,e[0].x),l=new kakao.maps.Marker({map:n,position:d}),i=new kakao.maps.InfoWindow({content:'<div style="width:150px;text-align:center;padding:6px 0;">'+t+"</div>"});i.open(n,l),n.relayout(),n.setCenter(d)}}))},chgdetailmenuselect_info:function(){this.isinfoselected=!0},chgdetailmenuselect_map:function(){this.isinfoselected=!1,this.getKakaoMap()}},mounted(){if(window.kakao&&window.kakao.maps)this.getKakaoMap();else{const e=document.createElement("script");e.onload=()=>kakao.maps.load(this.initMap),e.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=2d8b701041504a70d33d51a38d3b1fd1&libraries=services",document.head.appendChild(e)}}});const ee=(0,f.Z)(X,[["render",U],["__scopeId","data-v-75b5b1c8"]]);var te=ee,ae=a(490),ne=(0,n.aZ)({name:"ExhibitionView",components:{ContentsHead:o.Z,Category:r.Z,DetailHead:v,DetailDescription:te},data:function(){return{selecteddatainfo:{}}},mounted:function(){this.getSelectInfo()},methods:{getSelectInfo:function(){return(0,c.mG)(this,void 0,void 0,(function(){var e,t,n;return(0,c.Jh)(this,(function(d){switch(d.label){case 0:return e=this.$route.params.id,t={detail:"",explanation:"",start_date:"",end_date:"",holiday:"",homepage:"",id:"",name:"",oper_time:"",phone:"",photopath:"",entryfee:""},n=a(9669)["default"],[4,n.get("/dao/detail/exhibition",{params:{id:e}}).then((function(e){t=e.data,t.photopath=ae.Z.exhibition[t.photopath]})).catch((function(e){console.log(e)}))];case 1:return d.sent(),this.selecteddatainfo=t,[2]}}))}))}}});const de=(0,f.Z)(ne,[["render",s],["__scopeId","data-v-3ed6874b"]]);var le=de}}]);
//# sourceMappingURL=909.df818b7f.js.map