import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
import './plugins/bootstrap-vue';
import './plugins/vue-router';
import App from './App.vue';
import Layout from './components/Layout/Layout.vue';
import SignIn from './views/SignIn.vue';

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/sign-in', component: SignIn },
    { path: '/', component: Layout },
  ],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
