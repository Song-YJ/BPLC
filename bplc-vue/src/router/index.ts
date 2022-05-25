/**
	* @fileName  : index.ts
	* @explain : bplc vue project router
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc vue project에서 사용하는 router 정보를 담음
	*/

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
const ExhibitionView = () => import(/* webpackChunkName: "exhibition" */ '../views/ExhibitionView.vue')
const EntertainmentView = () => import(/* webpackChunkName: "entertainment" */ '../views/EntertainmentView.vue')
const EntertainmentDetailView = () => import(/* webpackChunkName: "entertainmentdetail*/ '../views/EntertainmentDetailView.vue')
const HotelView = () => import(/* webpackChunkName: hotel" */ '../views/HotelView.vue')
const HotelDetailView = () => import(/*webpackChunkName: hoteldetail*/ '../views/HotelDetailView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //이벤트
  {
    path: '/event',
    redirect: {name:'FestivalRoute'}
  },
  {
    path: '/event/festival',
    name: 'FestivalRoute',
    component: HomeView,
  },
  {
    path: '/event/exhibition',
    name: 'ExhibitionRoute',
    component: ExhibitionView,
  },

  //추천
  {
    path: '/recommendation',
    redirect: {name: 'CourseRoute'}
  },
  {
    path: '/recommendation/theme',
    name: 'ThemeRoute',
    component: HomeView
  },
  {
    path: '/recommendation/statistic',
    name: 'StatisticCourseRoute',
    component: HomeView
  },

  //여행지
  {
    path: '/tripsite',
    redirect: {name: 'SightRoute'}
  },
  {
    path: '/tripsite/sight',
    name: 'SightRoute',
    component: HomeView
  },
  {
    path: '/tripsite/food',
    name: 'FoodRoute',
    component: HomeView
  },

  {
    path: '/tripsite/entertainment/',
    name: 'EntertainmentRoute',
    redirect: {name:'EntertainmentRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/entertainment/:gernename/:page',
    name: 'EntertainmentRouteParams',
    component: EntertainmentView,
    props: true
  },
  {
    path: '/tripsite/entertainmentdetail/',
    name: 'EntertainmentDetailNoneParamsRoute',
    redirect: {name:'EntertainmentRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/entertainmentdetail/:id',
    name: 'EntertainmentDetailRoute',
    component: EntertainmentDetailView,
    props: true
  },
  
  {
    path: '/tripsite/hotel/',
    name: 'HotelRoute',
    redirect: {name:'HotelRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/hotel/:gernename/:page',
    name: 'HotelRouteParams',
    component: HotelView
  },
  {
    path: '/tripsite/hoteldetail/',
    name: 'HotelDetailNoneParamsRoute',
    redirect: {name:'HotelRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/hoteldetail/:id',
    name: 'HotelDetailRoute',
    component: HotelDetailView
  },

  //여행 정보
  {
    path: '/tripinfo',
    redirect: {name: 'NoticeRoute'}
  },
  {
    path: '/tripinfo/notice',
    name: 'NoticeRoute',
    component: HomeView
  },
  {
    path: '/tripinfo/map',
    name: 'MapRoute',
    component: HomeView
  },
  {
    path: '/tripinfo/guidebook',
    name: 'GuidebookRoute',
    component: HomeView
  },
  {
    path: '/tripinfo/weather',
    name: 'WeatherRoute',
    component: HomeView
  },

  //위의 주소 외
  {
    path: '/:catchAll(.*)',
    redirect:{name:'home'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    return {top: 0} //page 이동 시 항상 scroll을 가장 위에
  },
  routes
})

export default router
