import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '../components/Layout/Layout.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import NotFound from '../views/NotFound.vue';
import Main from '../views/Main.vue';
import { STORAGE_KEY } from '../constants/constants';
import { setAuth } from '../configs/axiosConfig';
import { GET_CURRENT_USER } from '../store/mutations/user';

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
      meta: { requiresAuth: true },
    },
    { path: '/sign-up', component: SignUp },
    { path: '*', component: NotFound },
  ],
  mode: 'history',
});

router.beforeEach(async ({ matched }, from, next) => {
  if (matched.some(({ meta: { requiresAuth } }) => !!requiresAuth)) {
    const token = localStorage.getItem(STORAGE_KEY);

    if (token) {
      setAuth(token);

      try {
        router.app.$store.dispatch(GET_CURRENT_USER);
        next();
      } catch (e) {
        next({ path: '/' });
      }
    } else {
      next({ path: '/' });
    }
  } else {
    next();
  }
});

export default router;
