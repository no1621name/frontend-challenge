import axios from '@/plugins/axios'

export interface Cat {
  breeds: object[],
  height: number,
  id: string,
  url: string,
  width: number,
}

const allStore = {
  state: {
    catsList: []
  },
  getters: {
    catsList: ({ catsList }: any) => catsList
  },
  mutations: {
    SET_CATS_LIST (state: any, list: Cat[]) {
      state.catsList = list
    }
  },
  actions: {
    async getRandomCatsList ({ commit, dispatch }: any) {
      try {
        dispatch('toggleLoader', true)
        const responce = await axios.get('/images/search?limit=15')
        commit('SET_CATS_LIST', responce)
      } catch (e: any) {
        console.log(e)
      } finally {
        dispatch('toggleLoader', false)
      }
    }
  }
}

export default allStore
