import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import './plugins/vuex';
import './plugins/filter';
import store from './store/index';
import router from './plugins/vue-router';
import './globals/vee-validate';
import './configs/axiosConfig';
import App from './App.vue';

Vue.config.productionTip = false;

export const vm = new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app');
