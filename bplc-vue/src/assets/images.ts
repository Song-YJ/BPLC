/**
	* @fileName  : images.vue
	* @explain : bplc 웹 사이트에서 사용하는 image url
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc 웹 사이트에서 image 사용을 위해 image url을 require로 불러와(모듈추출) 저장해놓은 파일
	*/

const imagespath = {
    entertainment: {
        Busan_Air_Cruise:{
            thumbnail: require("@/assets/entertainment/Busan_Air_Cruise/thumbnail.jpeg"),
            pictures:[]
        },
        busan_Yacht_tour: {
            thumbnail: require("@/assets/entertainment/busan_Yacht_tour/thumbnail.jpeg"),
            pictures:[]
        },
        haeundae_bluelinepark:{
            thumbnail: require("@/assets/entertainment/haeundae_bluelinepark/thumbnail.png"),
            pictures:[]
        },
        lotte_world_adventure_busan:{
            thumbnail: require("@/assets/entertainment/lotte_world_adventure_busan/thumbnail.jpeg"),
            pictures:[]
        },
        running_man_busan:{
            thumbnail: require("@/assets/entertainment/running_man_busan/thumbnail.jpeg"),
            pictures:[]
        },
        sea_life_busan:{
            thumbnail: require("@/assets/entertainment/sea_life_busan/thumbnail.jpeg"),
            pictures:[]
        },
        Shinsegae_Centum_City:{
            thumbnail: require("@/assets/entertainment/Shinsegae_Centum_City/thumbnail.jpeg"),
            pictures:[]
        },
        skyline_luge_busan:{
            thumbnail: require("@/assets/entertainment/skyline_luge_busan/thumbnail.png"),
            pictures:[]
        },
        waterhouse:{
            thumbnail: require("@/assets/entertainment/waterhouse/thumbnail.jpeg"),
            pictures:[]
        }
    },
    hotel: {
        ananti_hilton_busan: {
            thumbnail: require("@/assets/hotel/ananti_hilton_busan/thumbnail.jpg"),
            pictures:[]
        },
        busan_signiel: {
            thumbnail: require("@/assets/hotel/busan_signiel/thumbnail.jpeg"),
            pictures:[]
        },
        commodore_hotel_busan: {
            thumbnail: require("@/assets/hotel/commodore_hotel_busan/thumbnail.jpeg"),
            pictures:[]
        },
        grand_josun_busan: {
            thumbnail: require("@/assets/hotel/grand_josun_busan/thumbnail.jpeg"),
            pictures:[]
        },
        gwangan273: {
            thumbnail: require("@/assets/hotel/gwangan273/thumbnail.jpeg"),
            pictures:[]
        },
        h7l_hotel: {
            thumbnail: require("@/assets/hotel/h7l_hotel/thumbnail.jpeg"),
            pictures:[]
        },
        lottehotel_busan: {
            thumbnail: require("@/assets/hotel/lottehotel_busan/thumbnail.jpeg"),
            pictures:[]
        },
        paradise_hotel_busan: {
            thumbnail: require("@/assets/hotel/paradise_hotel_busan/thumbnail.jpeg"),
            pictures:[]
        },
        park_hyatt_busan: {
            thumbnail: require("@/assets/hotel/park_hyatt_busan/thumbnail.jpeg"),
            pictures:[]
        },
        shilla_stay_haeundae: {
            thumbnail: require("@/assets/hotel/shilla_stay_haeundae/thumbnail.jpeg"),
            pictures:[]
        },
        the_moving_caravan: {
            thumbnail: require("@/assets/hotel/the_moving_caravan/thumbnail.jpg"),
            pictures:[]
        },
        thebayclubhotel: {
            thumbnail: require("@/assets/hotel/thebayclubhotel/thumbnail.jpeg"),
            pictures:[]
        },
        villa_de_yeonhwa: {
            thumbnail: require("@/assets/hotel/villa_de_yeonhwa/thumbnail.jpeg"),
            pictures:[]
        }
    },
    food: {
        bakers:{
            thumbnail: require("@/assets/food/bakers/thumbnail.jpeg"),
            pictures:[]
        },
        cafe_perides:{
            thumbnail: require("@/assets/food/cafe_perides/thumbnail.jpeg"),
            pictures:[]
        },
        chowon_blowfish:{
            thumbnail: require("@/assets/food/chowon_blowfish/thumbnail.png"),
            pictures:[]
        },
        food_hall_busan:{
            thumbnail: require("@/assets/food/food_hall_busan/thumbnail.png"),
            pictures:[]
        },
        haeundae_market:{
            thumbnail: require("@/assets/food/haeundae_market/thumbnail.png"),
            pictures:[]
        },
        hwa_bread:{
            thumbnail: require("@/assets/food/hwa_bread/thumbnail.jpeg"),
            pictures:[]
        },
        lafeuille_croissant:{
            thumbnail: require("@/assets/food/lafeuille_croissant/thumbnail.png"),
            pictures:[]
        },
        Millak_Raw_Fish_Town:{
            thumbnail: require("@/assets/food/Millak_Raw_Fish_Town/thumbnail.jpeg"),
            pictures:[]
        },
        Monsieur_Vincent:{
            thumbnail: require("@/assets/food/Monsieur_Vincent/thumbnail.jpeg"),
            pictures:[]
        },
        oven_temperature:{
            thumbnail: require("@/assets/food/oven_temperature/thumbnail.png"),
            pictures:[]
        },
        pork_soup:{
            thumbnail: require("@/assets/food/pork_soup/thumbnail.jpg"),
            pictures:[]
        },
        rendejavous_gwangan:{
            thumbnail: require("@/assets/food/rendejavous_gwangan/thumbnail.jpeg"),
            pictures:[]
        },
        haeundae_Beef_Ribs:{
            thumbnail: require('@/assets/food/haeundae_Beef_Ribs/thumbnail.jpg'),
            pictures:[]
        }
    },
    sight: {
        ahopsan: {
            thumbnail: require("@/assets/sight/ahopsan/thumbnail.jpeg"),
            pictures:[]
        },
        Bokcheondong_Ancient_Tombs: {
            thumbnail: require("@/assets/sight/Bokcheondong_Ancient_Tombs/thumbnail.png"),
            pictures:[]
        },
        busan_citizenpark: {
            thumbnail: require("@/assets/sight/busan_citizenpark/thumbnail.jpeg"),
            pictures:[]
        },
        Chungnyeolsa_Shrine: {
            thumbnail: require("@/assets/sight/Chungnyeolsa_Shrine/thumbnail.jpeg"),
            pictures:[]
        },
        Dongbaek_Island: {
            thumbnail: require("@/assets/sight/Dongbaek_Island/thumbnail.jpeg"),
            pictures:[]
        },
        Dongnae_Community_Center: {
            thumbnail: require("@/assets/sight/Dongnae_Community_Center/thumbnail.jpeg"),
            pictures:[]
        },
        Dongnaeeupseong: {
            thumbnail: require("@/assets/sight/Dongnaeeupseong/thumbnail.jpeg"),
            pictures:[]
        },
        gamcheon_culture_village: {
            thumbnail: require("@/assets/sight/gamcheon_culture_village/thumbnail.jpeg"),
            pictures:[]
        },
        gwanganbridge: {
            thumbnail: require("@/assets/sight/gwanganbridge/thumbnail.jpeg"),
            pictures:[]
        },
        haeundae_beach: {
            thumbnail: require("@/assets/sight/haeundae_beach/thumbnail.png"),
            pictures:[]
        },
        Jang_Yeong_sil_Science_Garden: {
            thumbnail: require("@/assets/sight/Jang_Yeong_sil_Science_Garden/thumbnail.jpg"),
            pictures:[]
        },
        White_Yeoul_Culture_Village: {
            thumbnail: require("@/assets/sight/White_Yeoul_Culture_Village/thumbnail.jpeg"),
            pictures:[]
        },
        yongkungsa: {
            thumbnail: require("@/assets/sight/yongkungsa/thumbnail.jpg"),
            pictures:[]
        },
    }
}

export default imagespath;

