import router from '../../plugins/vue-router';
import { authentication, getCurrentUser } from '../../services/userService';
import { STORAGE_KEY } from '../../constants/constants';
import {
  AUTHENTICATION,
  GET_CURRENT_USER,
  SET_USER,
  SIGN_OUT,
} from '../mutations/user';
import { resetAuth } from '../../utils/commonUtil';

const user = {
  state: {
    user: {},
  },
  mutations: {
    [SET_USER](state, { email, token, username }) {
      state.user = { email, token, username };
    },
  },
  actions: {
    async [AUTHENTICATION]({ commit }, { email, password }) {
      try {
        const {
          data: { user },
        } = await authentication({ email, password });

        this._vm.$bvToast.toast('Welcome!', {
          title: 'SUCCESS',
          variant: 'success',
          solid: true,
        });
        localStorage.setItem(STORAGE_KEY, user.token);
        router.push('/main');
        commit(SET_USER, user);
      } catch (e) {
        this._vm.$bvToast.toast(e.response.status, {
          title: 'DANGER',
          variant: 'danger',
          solid: true,
        });
      }
    },
    async [GET_CURRENT_USER]({ commit }) {
      // FIXME: 인증, 인가 체크 axios쪽에서 해줘야 할 듯 한데, 순환참조 문제 발생
      try {
        const {
          data: { user },
        } = await getCurrentUser();

        commit(SET_USER, user);
      } catch (e) {
        resetAuth();
        router.push('/');
      }
    },
    async [SIGN_OUT]({ commit }) {
      commit(SET_USER, {});
      resetAuth();
      router.push('/');
    },
  },
};

export default user;
