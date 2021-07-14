import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout/Layout.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import NotFound from '../views/NotFound.vue';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: SignIn },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/main',
          component: Main,
        },
      ],
    },
    { path: '/sign-up', component: SignUp },
    { path: '*', component: NotFound },
  ],
  mode: 'history',
});

export default router;
