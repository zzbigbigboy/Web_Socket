import { createStore } from 'vuex'

export enum OptionMode {
  Single = 1,
  Many = 2,
  Mobile = 3,
}

export default createStore({
  state: {
    count: 0,
    mode: OptionMode.Single,
  },
  mutations: { // 同步
    increment (state) {
      console.log(state.count)
      state.count++
    },
    decrement (state) {
      state.count--
    },
    clearCount(state) {
      state.count = 0
    },
    setOptionMode(state, mode: OptionMode) {
      state.mode = mode || OptionMode.Single;
    }
  },
  actions: { // 异步
  },
  getters: {
    getCount(state): number {
      return state.count;
    },
    getOptionMode(state): OptionMode {
      return state.mode;
    }
  },
  modules: {
    
  }
})


// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {
//     count: 0,
//   },
//   mutations: {

//   },
//   actions: {

//   },
//   getters: {

//   }
// })