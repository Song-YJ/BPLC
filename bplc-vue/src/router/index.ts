/**
	* @fileName  : index.ts
	* @explain : bplc vue project router
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc vue project에서 사용하는 router 정보를 담음
	*/

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const HomeView = () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')

//추천
const ThemeView = () => import(/* webpackChunkName: "theme" */ '../views/recommendation/ThemeView.vue')
const ThemeDetailView = () => import(/* webpackChunkName: "theme" */ '../views/recommendation/ThemeDetailView.vue')
const StatisticsView = () => import(/* webpackChunkName: "statistics" */ '../views/recommendation/StatisticsView.vue')

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
const NoticeView = () => import(/* webpackChunkName: "notice" */ '../views/tripinfo/NoticeView.vue')
const GuideBookView = () => import(/* webpackChunkName: "guidebook" */ '../views/tripinfo/GuidebookView.vue')

//이벤트
const ExhibitionView = () => import(/* webpackChunkName: "exhibition" */ '../views/eventsite/ExhibitionView.vue')
const ExhibitionDetailView = () => import(/* webpackChunkName: "exhibitiondetail*/ '../views/eventsite/ExhibitionDetailView.vue')
const FestivalView = () => import(/* webpackChunkName: "festival" */ '../views/eventsite/FestivalView.vue')
const FestivalDetailView = () => import(/* webpackChunkName: "festivaldetail*/ '../views/eventsite/FestivalDetailView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //이벤트
  {
    path: '/eventsite',
    redirect: {name:'FestivalRoute'}
  },
  {
    path: '/eventsite/festival/',
    name: 'FestivalRoute',
    redirect: {name: 'FestivalRouteParams', params:{gernename:'continue', page:1}},
  },
  {
    path: '/eventsite/festival/:gernename/:page',
    name: 'FestivalRouteParams',
    component: FestivalView,
    props: true
  },
  {
    path: '/eventsite/festivaldetail/',
    name: 'FestivalDetailNoneRoute',
    redirect: {name: 'FestivalRouteParams', params:{gernename:'continue', page:1}}
  },
  {
    path: '/eventsite/festivaldetail/:id',
    name: 'FestivalDetailRoute',
    component: FestivalDetailView,
    props: true
  },
  {
    path: '/eventsite/exhibition/',
    name: 'ExhibitionRoute',
    redirect: {name: 'ExhibitionRouteParams', params:{gernename:'continue', page:1}},
  },
  {
    path: '/eventsite/exhibition/:gernename/:page',
    name: 'ExhibitionRouteParams',
    component: ExhibitionView,
    props: true
  },
  {
    path: '/eventsite/exhibitiondetail/',
    name: 'ExhibitionDetailNoneRoute',
    redirect: {name: 'ExhibitionRouteParams', params:{gernename:'continue', page:1}}
  },
  {
    path: '/eventsite/exhibitiondetail/:id',
    name: 'ExhibitionDetailRoute',
    component: ExhibitionDetailView,
    props: true
  },

  //추천
  {
    path: '/recommendation',
    redirect: {name: 'CourseRoute'}
  },
  {
    path: '/recommendation/theme/',
    name: 'ThemeRoute',
    redirect: {name:'ThemeRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/recommendation/theme/:gernename/:page',
    name: 'ThemeRouteParams',
    component: ThemeView,
    props: true
  },
  {
    path: '/recommendation/themedetail/',
    name: 'ThemeDetailNoneParamsRoute',
    redirect: {name:'ThemeRouteParams', params:{gernename:'all', page:1}}
  },
  {
    path: '/recommendation/themedetail/:filename',
    name: 'ThemeDetailRoute',
    component: ThemeDetailView,
  },

  {
    path: '/recommendation/statistic/',
    name: 'StatisticCourseRoute',
    component: HomeView,
    beforeEnter(to, from, next){
      window.open('/recommendataion/statistics/newwindow/true', "_blank", "height=780, width=1500, top=50, left=10 resizable=no");
    }
  },
  {
    path: '/recommendataion/statistics/newwindow/:hidden',
    name: 'StatisticsCourseViewRoute',
    component: StatisticsView
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
    redirect: {name:'NoticeRouteParams', params:{page: 1}}
  },
  {
    path: '/tripinfo/notice/:page',
    name: 'NoticeRouteParams',
    component: NoticeView
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
    component: HomeView,
    beforeEnter(to, from , next) {
      window.open("https://www.weather.go.kr/w/weather/forecast/short-term.do#");
    }
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
