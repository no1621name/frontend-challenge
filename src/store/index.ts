import { createStore } from 'vuex'
import allCats from './modules/all'
import favourites from './modules/favoutites'
import loader from './modules/loader'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    allCats,
    favourites,
    loader
  }
})
