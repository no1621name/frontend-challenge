const loaderStore = {
  state: {
    isShowLoader: true
  },
  getters: {
    isShowLoader: ({ isShowLoader }: any) => isShowLoader
  },
  mutations: {
    TOGGLE_LOADER (state: any, bool: boolean) {
      state.isShowLoader = bool
    }
  },
  actions: {
    toggleLoader ({ commit }: any, bool: boolean) {
      commit('TOGGLE_LOADER', bool)
    }
  }
}

export default loaderStore
