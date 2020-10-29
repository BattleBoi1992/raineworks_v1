import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dotenv from 'dotenv';

Vue.config.productionTip = false;

dotenv.config()

store.dispatch('loadFlags')

setTimeout(launchApp, 1000)

function launchApp() {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
}