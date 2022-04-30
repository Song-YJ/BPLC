import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'

// define your typings for the store state
export interface State {
  word: string
}

// define injection key
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    word: "Hello Vuex!"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})