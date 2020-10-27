import Vue from 'vue';
import Vuex from 'vuex';
import settings from './modules/settings';
import posts from './modules/posts';
import projects from './modules/projects';


Vue.use(Vuex);

export default new Vuex.Store({

  // Modules to include in the store.

  modules: {
    settings, 
    posts, 
    projects
  },

});