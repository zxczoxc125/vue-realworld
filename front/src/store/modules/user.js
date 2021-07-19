import router from '../../plugins/vue-router';
import { authentication } from '../../services/userService';
import { STORAGE_KEY } from '../../constants/constants';

const user = {
  state: {
    user: {},
  },
  mutations: {
    SET_USER(state, { email, token, username }) {
      state.user = { email, token, username };
    },
  },
  actions: {
    async AUTHENTICATION({ commit }, { email, password }) {
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
        commit('SET_USER', user);
      } catch (e) {
        this._vm.$bvToast.toast(e.response.status, {
          title: 'DANGER',
          variant: 'danger',
          solid: true,
        });
      }
    },
  },
};

export default user;
