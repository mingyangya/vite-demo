// import { createStore } from "vuex"
import { createStore } from "./gvuex"

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    add (state) {
      state.count ++
    }
  }
})

export default store