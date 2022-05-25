/**
	* @fileName  : images.vue
	* @explain : bplc 웹 사이트에서 사용하는 image url
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc 웹 사이트에서 image 사용을 위해 image url을 require로 불러와(모듈추출) 저장해놓은 파일
	*/

const imagespath = {
    entertainment: {
        songdo_cablecar: {
            thumbnail: require("@/assets/entertainment/songdo_cablecar_pic/thumbnail.jpg"),
            pictures: [
                require("@/assets/entertainment/songdo_cablecar_pic/sdcc01.jpg"),
                require("@/assets/entertainment/songdo_cablecar_pic/sdcc02.jpg")
            ]
        }
    },
    hotel: {
        paradise: {
            thumbnail: require("@/assets/hotel/paradise/thumbnail.jpg"),
            pictures:[]
        }
    }
}

export default imagespath;