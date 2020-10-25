import Vue from 'vue';
import Vuex from 'vuex';
import brandIcon from '@/assets/logos/raineworks-icon.png'; // Small logo image for small displays less than 801 px in width.
import logoLight from '@/assets/logos/raineworks-light.png'; // Full logo image for dark mode.
import logoDark from '@/assets/logos/raineworks-dark.png'; // Full logo image for night mode. 

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'light', // Theme state. (Light or Dark)
    themeToggle: false, // Theme boolean toggle. 
    loading: false, // Global loading indicator. 
    menuActive: false, // Mobile menu boolean is used to alter the body class to change overflow.
    maintenance: true, // If maintenance is true all traffic will be re-routed to the under construction splash page. 

    brandIcon: brandIcon,
    logoDark: logoDark,
    logoLight: logoLight,
  },
  mutations: {
    
    // Toggle theme between light and dark mode. (Mutation)
    toggleTheme(state) {
      state.themeToggle = !state.themeToggle
      if(state.themeToggle) {
        state.theme = 'dark'
      } else {
        state.theme = 'light'
      }
    }, 

    // Toggle loading state. (Mutation)
    loadToggle(state) {
      state.loading = !state.loading
    },

    // Toggle menu state. (Mutation)
    toggleMenu(state) {
      state.menuActive = !state.menuActive
    }
  },
  actions: {
    // Toggle theme between light and dark mode. (Action)
    toggleTheme(context) {
      context.commit('toggleTheme')
    },
    
    // Toggle loading state. (Action)
    loadToggle(context) {
      context.commit('loadToggle')
    },

    // Toogle menu state. (Action)
    toggleMenu(context) {
      context.commit('toggleMenu')
    },
  },
  modules: {
    //
  }, 
  getters: {
    //
  }
});
