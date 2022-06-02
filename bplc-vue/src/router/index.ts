/**
	* @fileName  : index.ts
	* @explain : bplc vue project router
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc vue project에서 사용하는 router 정보를 담음
	*/

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')

//여행지
const EntertainmentView = () => import(/* webpackChunkName: "entertainment" */ '../views/tripsite/EntertainmentView.vue')
const EntertainmentDetailView = () => import(/* webpackChunkName: "entertainmentdetail*/ '../views/tripsite/EntertainmentDetailView.vue')
const HotelView = () => import(/* webpackChunkName: hotel" */ '../views/tripsite/HotelView.vue')
const HotelDetailView = () => import(/*webpackChunkName: hoteldetail*/ '../views/tripsite/HotelDetailView.vue')
const FoodView = () => import(/* webpackChunkName: food" */ '../views/tripsite/FoodView.vue')
const FoodDetailView = () => import(/*webpackChunkName: fooddetail*/ '../views/tripsite/FoodDetailView.vue')
const SightView = () => import(/* webpackChunkName: sight" */ '../views/tripsite/SightView.vue')
const SightDetailView = () => import(/*webpackChunkName: sightdetail*/ '../views/tripsite/SightDetailView.vue')

//여행 정보
const GuideBookView = () => import(/* webpackChunkName: "guidebook" */ '../views/tripinfo/GuidebookView.vue')

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
    component: HomeView,
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
    path: '/tripsite/sight/',
    name: 'SightRoute',
    redirect: {name:'SightRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/sight/:gernename/:page',
    name: 'SightRouteParams',
    component: SightView,
    props: true
  },
  {
    path: '/tripsite/sightdetail/',
    name: 'SightDetailNoneParamsRoute',
    redirect: {name:'SightRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/sightdetail/:id',
    name: 'SightDetailRoute',
    component: SightDetailView,
    props: true
  },

  {
    path: '/tripsite/food/',
    name: 'FoodRoute',
    redirect: {name:'FoodRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/food/:gernename/:page',
    name: 'FoodRouteParams',
    component: FoodView,
    props: true
  },
  {
    path: '/tripsite/fooddetail/',
    name: 'FoodDetailNoneParamsRoute',
    redirect: {name:'FoodRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/tripsite/fooddetail/:id',
    name: 'FoodDetailRoute',
    component: FoodDetailView,
    props: true
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
    component: HomeView,
    beforeEnter(to, from , next) {
      window.open("http://kko.to/vcsdWrp1W");
    }
  },

  {
    path: '/tripinfo/guidebook/',
    name: 'GuidebookRoute',
    redirect: {name:'GuidebookRouteParams', params:{page: 1}}
  },
  {
    path: '/tripinfo/guidebook/:page',
    name: 'GuidebookRouteParams',
    component: GuideBookView
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
    if(to.name !== from.name){
      return {top: 0} //page 이동 시 항상 scroll을 가장 위에
    }
    if(savedPosition){
      return savedPosition
    }
  },
  routes
})

export default router
