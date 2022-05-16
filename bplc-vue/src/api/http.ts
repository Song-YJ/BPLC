/**
	* @fileName  : http.ts
	* @explain : axios 기본 객체 생성
	* @author : 송유진 , yoyo6433@naver.com
	* 부가 설명 : axios를 사용하기 위한 axios 인스턴스 객체를 생성
	*/

import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080'
});

export default instance;