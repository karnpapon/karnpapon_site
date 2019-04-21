import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import Buefy from 'buefy';
import NProgress from 'vue-nprogress'
import 'buefy/dist/buefy.css';

Vue.config.productionTip = false
Vue.use(Buefy);
Vue.use(NProgress);

const nprogress = new NProgress()

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App),
}).$mount('#app')
