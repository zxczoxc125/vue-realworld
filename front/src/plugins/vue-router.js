import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout/Layout.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import NotFound from '../views/NotFound.vue';
import Main from '../views/Main.vue';
import { STORAGE_KEY } from '../constants/constants';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', component: SignIn, meta: { requiresAuth: false } },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/main',
          component: Main,
        },
      ],
      meta: { requiresAuth: true },
    },
    { path: '/sign-up', component: SignUp },
    { path: '*', component: NotFound },
  ],
  mode: 'history',
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(({ meta: { requiresAuth } }) => !!requiresAuth)) {
    const token = localStorage.getItem(STORAGE_KEY);

    if (token) {
      next();
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});

export default router;
