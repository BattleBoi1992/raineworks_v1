import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light', // Theme state
    themeToggle: false, // Theme boolean toggle. 
  },
  mutations: {
    // Toggle theme between light and dark mode (Mutation)
    toggleTheme(state) {
      state.themeToggle = !state.themeToggle
      if(state.themeToggle) {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
    }, 
  },
  actions: {
    // Toggle theme between light and dark mode (Action)
    toggleTheme(context) {
      context.commit('toggleTheme')
    }, 
  },
  modules: {
    //
  }, 
  getters: {
    //
  }
})
