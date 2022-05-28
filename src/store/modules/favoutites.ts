import axios from '@/plugins/axios'
import { Cat } from './all'

interface CatResponce {
  'image_id': string,
  'sub_id': string
}

const favouritesStore = {
  state: {
    favouriteCatsList: []
  },
  getters: {
    favouriteCatsList: ({ favouriteCatsList }: any) => favouriteCatsList
  },
  mutations: {
    GET_FAVOURITE_CATS_LIST (state: any, favoriteCatsList: Cat[]) {
      state.favouriteCatsList = favoriteCatsList.reverse()
    }
  },
  actions: {
    async getFavoriteCatsList ({ commit, dispatch }: any) {
      try {
        dispatch('toggleLoader', true)
        const responce = await axios.get('/favourites')
        commit('GET_FAVOURITE_CATS_LIST', responce)
      } catch (e: any) {
        console.log(e)
      } finally {
        dispatch('toggleLoader', false)
      }
    },
    async addCatToFavourite ({ dispatch }: any, favouriteCat: CatResponce) {
      try {
        dispatch('toggleLoader', true)
        axios.post('/favourites', favouriteCat)
        await dispatch('getFavoriteCatsList')
      } catch (e: any) {
        console.log(e)
      } finally {
        dispatch('toggleLoader', false)
      }
    },
    async deleteCatFromFavourite ({ dispatch }: any, id: number) {
      try {
        dispatch('toggleLoader', true)
        axios.delete(`/favourites/${id}`)
        dispatch('getFavoriteCatsList')
      } catch (e:any) {
        console.log(e)
      } finally {
        dispatch('toggleLoader', false)
      }
    }
  }
}

export default favouritesStore
