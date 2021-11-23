// import { createStore } from "vuex"
import { createStore } from "./gvuex"

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    }
  },
  mutations: {
    add (state) {
      state.count ++
    }
  },
  actions: {
    asyncAdd ({commit}) {
      setTimeout(() => {
        commit('add')
      }, 1000)
    }
  }
})

export default store