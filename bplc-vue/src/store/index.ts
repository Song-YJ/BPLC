/**
	* @fileName  : index.ts
	* @explain : bplc vue project store
	* @author : 송유진 , yoyo6433@naver.com, 배민경, bmg1203@naver.com, 박혜원, phw5883@naver.com
	* 부가 설명 : bplc vue project에서 사용하는 vuex의 store 정보를 담음
	*/

import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  //entertain
  entertainlistnum : Number
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    //entertain
    entertainlistnum: 100
  },
  getters: {
  },
  mutations: {
    //entertain
    chgentertainlistnum: function(state, payload){
      state.entertainlistnum = payload.value;
    }
  },
  actions: {
  },
  modules: {
  }
})