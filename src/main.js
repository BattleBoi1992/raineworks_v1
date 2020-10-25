import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";

Vue.config.productionTip = false;

Vue.use(LottieAnimation);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
